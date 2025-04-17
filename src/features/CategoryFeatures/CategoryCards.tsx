import CategoryCardItem from "./CategoryCardItem";
import { Category } from "./CategoryDashboard";

type Props = {
  data: Category[];
  handleDoublePrevious: () => void;
  currentPage: number;
  totalPages: number;
  handlePrevious: () => void;
  handleNext: () => void;
  handleDoubleNext: () => void;
  handleStatusChange: (id: number, newStatus: string) => void;
};

const CategoryCards = ({ data,handleStatusChange }: Props) => {
  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(155px,1fr))]">
      {data.map((category) => (
        <CategoryCardItem category={category} handleStatusChange={handleStatusChange}  />
      ))}
    </div>
  );
};

export default CategoryCards;
