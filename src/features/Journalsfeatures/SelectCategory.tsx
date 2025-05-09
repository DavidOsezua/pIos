import { Search } from "@/components";
import styles from "../../components/Select.module.css";
import { X } from "lucide-react";
import { CategoryInterface } from "@/interface";

type Props = {
  close: () => void;
  categories: CategoryInterface[];
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<CategoryInterface | null>
  >;
};

const SelectCategory = ({ close, categories, setSelectedCategory }: Props) => {
  return (
    <div className={`${styles.cardContainer}`}>
      <div className={`flex justify-between items-center`}>
        <p>Select Category</p>
        <button onClick={close} className="cursor-pointer">
          <X />
        </button>
      </div>

      <Search />
      <div className={`${styles.allBands}`}>
        {categories.map((category) => (
          <>
            <div
              className="cursor-pointer"
              key={category.id}
              onClick={() => {
                setSelectedCategory(category);
                close();
              }}
            >
              {category.name}
            </div>
            <div className={`${styles.hr}`}></div>{" "}
          </>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;

{
  /* */
}
