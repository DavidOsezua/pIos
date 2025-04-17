import { Filter, Search } from "@/components";

type Props = {
  active: string;
  handleFilter: (item: string) => void;
};

const FilterAndSearchCategory = ({ active, handleFilter }: Props) => {
  return (
    <div className={`flex items-center justify-between`}>
      <Filter
        status={["All", "Active", "Inactive"]}
        handleFilter={handleFilter}
        active={active}
      />
      <Search />
    </div>
  );
};

export default FilterAndSearchCategory;
