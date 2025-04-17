import CreateCategoryAndShowStatus from "./CreateCategoryAndShowStatus";
import FilterAndSearchCategory from "./FilterAndSearchCategory";
import CategoryCards from "./CategoryCards";
import { useState } from "react";

export interface Category {
  id: number;
  title: string;
  status: string;
}

const mockCategories: Category[] = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title:
    i % 3 === 0
      ? "Life science"
      : i % 4 === 0
      ? "Sustainability science"
      : "PLOS Health",
  status: ["Active", "Inactive"][i % 3 === 0 ? 1 : 0],
}));

const CategoryDashboard = (props: Props) => {
  //States and Variables
  const [data, setData] = useState(mockCategories);
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

  //Handlers
  const handleFilter = (status: string) => {
    setStatusFilteredData(status);
  };

  const handleStatusChange = (id: number, newStatus: string) => {
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
      <CreateCategoryAndShowStatus />

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
