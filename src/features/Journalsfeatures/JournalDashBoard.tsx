import { useState } from "react";
import CreateJournalsAndShowStatus from "./CreateJournalsAndShowStatus";
import FilterAndSearchJournals from "./FilterAndSearchJournals";
import JournalTable from "./JournalTable";

export interface Journal {
  id: number;
  category: string;
  title: string;
  dateUploaded: string;
  articles: number;
  status: string;
}

const mockJournals: Journal[] = Array.from({ length: 45 }).map((_, i) => ({
  id: i + 1,
  category: "PLOS Healthline",
  title: "PLOS Global Public Health",
  dateUploaded: "Saturday, 19 Aug 2024",
  articles: 45,
  status: ["Approved", "Pending", "Inactive"][i % 3],
}));

const JournalDashBoard = () => {
  //States and Variables
  const [data, setData] = useState(mockJournals);
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
      <CreateJournalsAndShowStatus
        approved={data.filter((item) => item.status === "Approved").length}
        total={data.filter((item) => item.status).length}
        pending={data.filter((item) => item.status === "Pending").length}
        inactive={data.filter((item) => item.status === "Inactive").length}
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
