import { Filter, Search } from "@/components";

type Props = {
  active: string;
  handleFilter: (item: string) => void;
};

const FilterAndSearchArticles = ({ active, handleFilter }: Props) => {
  return (
    <div className={`flex justify-between items-center`}>
      <Filter
        status={["All", "Approved", "Pending", "Inactive"]}
        handleFilter={handleFilter}
        active={active}
      />
      <Search />
    </div>
  );
};

export default FilterAndSearchArticles;
