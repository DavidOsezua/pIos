import { useEffect, useState } from "react";
import CreateJournalsAndShowStatus from "./CreateJournalsAndShowStatus";
import FilterAndSearchJournals from "./FilterAndSearchJournals";
import JournalTable from "./JournalTable";
import { api } from "@/services/endpoint";
import { Journal } from "@/interface";



// const mockJournals: Journal[] = Array.from({ length: 45 }).map((_, i) => ({
//   id: i + 1,
//   category: "PLOS Healthline",
//   title: "PLOS Global Public Health",
//   dateUploaded: "Saturday, 19 Aug 2024",
//   articles: 45,
//   status: ["Approved", "Pending", "Inactive"][i % 3],
// }));

const JournalDashBoard = () => {
  //States and Variables
  const [data, setData] = useState<Journal[]>([]);
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
    api.get("/admin/journal").then((res) => {
      
      // console.log(res.data)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setData(res.data.map((dat: any) => {
        
        return {...dat, articles: dat.Articles.length, category: dat.Category,}
      }))
    })
  }, [])
  
  //Handlers
  const handleFilter = (status: string) => {
    setStatusFilteredData(status);
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    console.log(newStatus)
    
    try{
      const res = await api.put(`/admin/journal/status/${id}`, {status: newStatus})
      console.log(res.data)
        setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );

    }catch(error){
      console.log(error)  
    }
    
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
      <CreateJournalsAndShowStatus
        approved={data.filter((item) => item.status === "Approved").length}
        total={data.filter((item) => item.status).length}
        pending={data.filter((item) => item.status === "Pending").length}
        inactive={data.filter((item) => item.status === "Inactive").length}
        setData={setData}
      />

      <FilterAndSearchJournals
        active={statusFilteredData}
        handleFilter={handleFilter}
      />

      <JournalTable
        data={paginateData}
        totalPages={totalPages}
        currentPage={currentPage}
        handleDoubleNext={handleDoubleNext}
        handleDoublePrevious={handleDoublePrevious}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        handleStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default JournalDashBoard;
