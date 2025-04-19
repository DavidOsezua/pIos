import CreateCategoryAndShowStatus from "./CreateCategoryAndShowStatus";
import FilterAndSearchCategory from "./FilterAndSearchCategory";
import CategoryCards from "./CategoryCards";
import { useEffect, useState } from "react";
import { api } from "@/services/endpoint";
import { CategoryInterface } from "@/interface";




const CategoryDashboard = () => {
  //States and Variables
  const [data, setData] = useState<CategoryInterface[]>([]);
  const [statusFilteredData, setStatusFilteredData] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  //Filter the data based on the status change
  const filteredData = data.filter((item) => {
    const matchesStatus =
      statusFilteredData === "All" || item.status === statusFilteredData;
    return matchesStatus;
  });

  //paginate the data
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;

  const paginateData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);


  useEffect(() => {
    api.get("/admin/category").then((res) => {
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = res.data.map((category: any) => {
        return {id: category.id, name: category.name, status: category.isActive ? "Active" : "Inactive", image: category.image}
      })
      setData(data)
    })


  }, [])


  //Handlers
  const handleFilter = (status: string) => {
    setStatusFilteredData(status);
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    console.log(id, newStatus)
    
    const body = {isActive: newStatus == "Active"}
    await api.put(`/admin/category/status/${id}`, body)
    
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  // Next and Double Next buttons
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleDoubleNext = () => {
    if (currentPage + 2 <= totalPages) setCurrentPage(currentPage + 2);
    else setCurrentPage(totalPages);
  };

  // Previous and Double Previous buttons
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleDoublePrevious = () => {
    if (currentPage - 2 >= 1) setCurrentPage(currentPage - 2);
    else setCurrentPage(1);
  };

  return (
    <div className={`space-y-10`}>
      <CreateCategoryAndShowStatus
        active={data.filter((item) => item.status === "Active").length}
        total={data.length}
        inactive={data.filter((item) => item.status === "Inactive").length}
        setData = {setData}
      />

      <FilterAndSearchCategory
        active={statusFilteredData}
        handleFilter={handleFilter}
      />

      <CategoryCards
        data={paginateData}
        handleDoubleNext={handleDoubleNext}
        handleDoublePrevious={handleDoublePrevious}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        handleStatusChange={handleStatusChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default CategoryDashboard;
