import { Filter, Search } from "@/components";

type Props = {};

const FilterAndSearchCategory = (props: Props) => {
  return (
    <div className={`flex items-center justify-between`}>
      <Filter />
      <Search />
    </div>
  );
};

export default FilterAndSearchCategory;
