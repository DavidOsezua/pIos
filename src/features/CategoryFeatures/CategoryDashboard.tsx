import CreateCategoryAndShowStatus from "./CreateCategoryAndShowStatus";
import FilterAndSearchCategory from "./FilterAndSearchCategory";
import CategoryCards from "./CategoryCards";

type Props = {};

const CategoryDashboard = (props: Props) => {
  return (
    <div className={`space-y-10`}>
      <CreateCategoryAndShowStatus />

      <FilterAndSearchCategory />

      <CategoryCards />
    </div>
  );
};

export default CategoryDashboard;
