import { Filter, Search } from "@/components";

type Props = {};

const FilterAndSearchArticles = (props: Props) => {
  return (
    <div className={`flex justify-between items-center`}>
      <Filter />
      <Search />
    </div>
  );
};

export default FilterAndSearchArticles;
