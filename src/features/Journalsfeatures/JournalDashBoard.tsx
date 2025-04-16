import { useState } from "react";
import CreateJournalsAndShowStatus from "./CreateJournalsAndShowStatus";
import FilterAndSearchJournals from "./FilterAndSearchJournals";
import JournalTable from "./JournalTable";

interface Journal {
  id: number;
  category: string;
  title: string;
  dateUploaded: string;
  articles: number;
  status: "Approved" | "Pending" | "Inactive";
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
  const indexOfFirstItem = currentPage - itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;

  const paginateData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  //Handlers
  const handleStatusChange = () => {};

  const next = () => {};

  const nextTwice = () => {};

  const back = () => {};

  const backTwice = () => {};

  return (
    <div className={`space-y-10`}>
      <CreateJournalsAndShowStatus />

      <FilterAndSearchJournals />

      <JournalTable />
    </div>
  );
};

export default JournalDashBoard;
