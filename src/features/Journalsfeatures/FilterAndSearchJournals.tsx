import { Filter, Search } from "@/components";

type Props = {
  active: string;
  handleFilter: (item: string) => void;
};

const FilterAndSearchJournals = ({ active, handleFilter }: Props) => {
  return (
    <div className={`flex items-center justify-between`}>
      <Filter
        status={["All", "Approved", "Pending", "Inactive"]}
        handleFilter={handleFilter}
        active={active}
      />
      <Search />
    </div>
  );
};

export default FilterAndSearchJournals;
