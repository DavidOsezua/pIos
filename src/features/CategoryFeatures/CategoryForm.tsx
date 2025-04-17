import { X } from "lucide-react";
import styles from "../../components/Form.module.css";
import UploadIcon from "@/components/svgComponent/UploadIcon";
import { Button } from "@/components";

type Props = {
  closeForm: () => void;
};

const CategoryForm = ({ closeForm }: Props) => {
  return (
    <div className={`bg-white p-4 relative max-w-[500px] mx-auto`}>
      <button className={`absolute right-4 cursor-pointer`} onClick={closeForm}>
        <X />
      </button>

      <form className={styles.formWrapper}>
        <div className={`${styles.inputContainer}`}>
          <label>Category</label>
          <input
            placeholder="Enter Venue Name"
            className={`${styles.input}`}
            // value={formData.name || ""}
            // onChange={(e) =>
            //   setFormData((prevFormData) => ({
            //     ...prevFormData,
            //     name: e.target.value,
            //   }))
            // }
          />
        </div>

        <p></p>
        <div className={`${styles.inputContainer}`}>
          <label></label>
          <div className={`${styles.upload}`}>
            {/* {image ? (
              <img
                src={URL.createObjectURL(image)}
                className={`w-[100%] h-[70px] rounded-md  object-cover mx-auto`}
              />
            ) : (
             
            )} */}

            <div className={styles.uploadContainer}>
              <UploadIcon />
              <p className={styles.uploadText}>Upload Icon</p>
            </div>

            <input
              type="file"
              className={styles.uploadBox}
              // onChange={handleAddImage}
            />
          </div>
        </div>
        <p></p>
        <Button className="w-full bg-accentone text-white">Upload</Button>
      </form>
    </div>
  );
};

export default CategoryForm;
