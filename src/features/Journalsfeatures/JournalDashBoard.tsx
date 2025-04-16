import CreateJournalsAndShowStatus from "./CreateJournalsAndShowStatus";
import FilterAndSearchJournals from "./FilterAndSearchJournals";
import JournalTable from "./JournalTable";

type Props = {};

const JournalDashBoard = (props: Props) => {
  return (
    <div className={`space-y-10`}>
      <CreateJournalsAndShowStatus />

      <FilterAndSearchJournals />

      <JournalTable />
    </div>
  );
};

export default JournalDashBoard;
