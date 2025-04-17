import { useState } from "react";
import ArticleTable from "./ArticleTable";
import CreateArticlesAndShowStatus from "./CreateArticlesAndShowStatus";
import FilterAndSearchArticles from "./FilterAndSearchArticles";

export interface Article {
  id: number;
  title: string;
  journal: string;
  date: string;
  type: number;
  status: string;
}

const mockData = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: "Sensory Stimulation to combat Alzheimer’s",
  journal: "PLOS Global Public Health",
  date: "Saturday, 19 Aug 2024",
  type: Math.floor(Math.random() * 10) + 1,
  status: ["Approved", "Pending", "Inactive"][i % 3],
}));

const ArticleDashboard = () => {
  //States and Variables
  const [data, setData] = useState(mockData);
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
      <CreateArticlesAndShowStatus
        approved={data.filter((item) => item.status === "Approved").length}
        total={data.filter((item) => item.status).length}
        pending={data.filter((item) => item.status === "Pending").length}
        inactive={data.filter((item) => item.status === "Inactive").length}
      />

      <FilterAndSearchArticles
        active={statusFilteredData}
        handleFilter={handleFilter}
      />

      <ArticleTable
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

export default ArticleDashboard;
