import DoublePrevious from "./svgComponent/DoublePrevious";
import Previous from "./svgComponent/Previous";
import Next from "./svgComponent/Next";
import DoubleNext from "./svgComponent/DoubleNext";

type Props = {
  handleDoublePrevious: () => void;
  currentPage: number;
  totalPages: number;
  handlePrevious: () => void;
  handleNext: () => void;
  handleDoubleNext: () => void;
};

const Pagination = ({
  handleDoubleNext,
  handleNext,
  handleDoublePrevious,
  handlePrevious,
  currentPage,
  totalPages,
}: Props) => {
  return (
    <div className="flex justify-center gap-2">
      <div>
        <button onClick={handleDoublePrevious} disabled={currentPage <= 2}>
          <DoublePrevious />
        </button>
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          <Previous />
        </button>
      </div>

      <p>
        {currentPage} of {totalPages}
      </p>

      <div>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          <Next />
        </button>
        <button
          onClick={handleDoubleNext}
          disabled={currentPage >= totalPages - 1}
        >
          <DoubleNext />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
