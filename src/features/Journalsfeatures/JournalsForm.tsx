import ArrowDown from "@/components/svgComponent/ArrowDown";
import styles from "../../components/Form.module.css";
import { UploadIcon, X } from "lucide-react";
import { Button } from "@/components";
import { useState } from "react";
import Upload from "@/components/Upload";
import Modal from "@/components/Modal";
import SelectCategory from "./SelectCategory";

type Props = {
  closeForm: () => void;
};

const JournalsForm = ({ closeForm }: Props) => {
  const [image, setImage] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(false);

  const toggleDropdown = () => {
    setActiveDropdown(true);
  };

  const modalHandler = () => {
    setActiveDropdown(false);
  };

  const closeDropdown = () => {
    setActiveDropdown(false);
    modalHandler();
  };

  //   const formHandler = (e: { target: { files: any[] } }) => {
  //     const file = e.target.files[0];

  //     setImage(URL.createObjectURL(file));
  //   };

  return (
    <div className={`${styles.formContainer} relative`}>
      <button
        className={`absolute cursor-pointer text-4xl text-[#0523A2]  right-[5%]`}
        onClick={closeForm}
      >
        <X />
      </button>
      <div className={`${styles.formHeader}`}>
        <div className="flex justify-center w-full">
          <p className={`text-center text-[#0A2259B2] px-3 pt-[2rem]`}>
            After a journal is created it is still inactive until changed.
            Articles should be added to Journals from the articles tab.
          </p>
        </div>

        <div>
          <img
            src={``}
            onClick={() => {}}
            className="cursor-pointer w-[20px]"
          />
        </div>
      </div>

      <form onSubmit={() => {}}>
        <h4 className={`${styles.tellUs}`}>Create Journal</h4>
        <div className={`${styles.formWrapper} space-y-6 `}>
          <div className={`${styles.inputContainer}`}>
            <div className="w-full">
              <label>Title</label>
              <input
                placeholder="Enter Event Name"
                className={`${styles.input}`}
                value={``}
                onChange={() => {}}
              />
            </div>
          </div>

          <div className={`${styles.inputContainer}`}>
            <div className="w-full ">
              <label>Select Category</label>

              <div className="relative">
                <input
                  value={``}
                  placeholder="Select venue type"
                  className={`${styles.input}`}
                />
                <button
                  type="button"
                  className="absolute right-4 top-4"
                  onClick={toggleDropdown}
                >
                  <ArrowDown />
                </button>

                {activeDropdown && (
                  <Modal modalHandler={modalHandler}>
                    <SelectCategory
                      close={closeDropdown}
                      // onVenueSelection={handleVenueSelect}
                    />
                  </Modal>
                )}
              </div>
            </div>

            {/* GENRE INPUT */}

            {/* <div className="w-full">
              <label>Select Band</label>

              <div className="relative">
                <input
                  value={``}
                  placeholder="Select Band"
                  className={`${styles.input}`}
                  readOnly
                />
                <button
                  type="button"
                  className="absolute right-4 top-4"
                  // onClick={() => toggleDropdown("Band")}
                >
                  <ArrowDown />
                </button>

                
                {activeDropdown === "Band" && (
                    <Modal modalHandler={modalHandler}>
                      <SelectBand
                        close={closeDropdown}
                        onBandSelection={handleBandSelect}
                      />
                    </Modal>
                  )}
              </div>
            </div> */}
          </div>

          <div className={`${styles.inputContainer}`}>
            <div className="w-full">
              <label>Description</label>
              <textarea
                name=""
                id=""
                className={`${styles.textArea}`}
                placeholder="Enter journal description"
              ></textarea>
            </div>
          </div>
          <div className={`${styles.inputContainer}`}>
            <div className={`${styles.upload}`}>
              {image ? (
                <img
                  src={image}
                  className={`w-[100%] h-[70px] rounded-md  object-cover mx-auto`}
                />
              ) : (
                <div className={styles.uploadContainer}>
                  <UploadIcon />
                  <p className={styles.uploadText}>Upload Cover</p>
                </div>
              )}

              <input
                type="file"
                className={styles.uploadBox}
                // onChange={formHandler}
                required
              />
            </div>
          </div>

          <Button className="bg-[#0523A2] text-white w-full">
            Create Journal
          </Button>
        </div>
      </form>
    </div>
  );
};

export default JournalsForm;
