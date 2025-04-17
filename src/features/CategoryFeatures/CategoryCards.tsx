import CategoryCardItem from "./CategoryCardItem";
import { Category } from "./CategoryDashboard";
import Pagination from "@/components/Pagination";

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

const CategoryCards = ({
  data,
  handleDoubleNext,
  handleNext,
  handleDoublePrevious,
  handlePrevious,
  handleStatusChange,
  currentPage,
  totalPages,
}: Props) => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(155px,1fr))]">
        {data.map((category) => (
          <CategoryCardItem
            category={category}
            handleStatusChange={handleStatusChange}
          />
        ))}
      </div>

      {/* Pagination controls */}
      <Pagination
        handleDoubleNext={handleDoubleNext}
        handleDoublePrevious={handleDoublePrevious}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default CategoryCards;
