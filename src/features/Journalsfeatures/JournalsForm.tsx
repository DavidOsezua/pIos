import ArrowDown from "@/components/svgComponent/ArrowDown";
import styles from "../../components/Form.module.css";
import { UploadIcon, X } from "lucide-react";
import { Button } from "@/components";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import SelectCategory from "./SelectCategory";
import { api } from "@/services/endpoint";
import { CategoryInterface, Journal } from "@/interface";
import { isAxiosError } from "axios";

type Props = {
  closeForm: () => void;
  setData: React.Dispatch<React.SetStateAction<Journal[]>>
};

const JournalsForm = ({ closeForm, setData }: Props) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [categories, setCategories] = useState<CategoryInterface[]>([])
  const [selectedCategory, setSelectedCategory] = useState<CategoryInterface | null>(null)
  const [errorMsg, setErrorMsg] = useState("")

  
  useEffect(() => {
    api.get("/admin/category").then((res) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = res.data.map((category: any) => {
        return {id: category.id, name: category.name, status: category.isActive ? "Active" : "Inactive", image: category.image}
      })
      setCategories(data)
    })
  }, [])
  
  
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

  const handleSubmit = async () => {
    setErrorMsg("")
    
    if(!title){
      setErrorMsg("title required")
      return 
    }

    if(!description){
      setErrorMsg("description required")
      return 
    }

    if(!selectedCategory){
      setErrorMsg("category required")
      return 
    }

    if(!image){
      setErrorMsg("Please upload cover image")
      return 
    }

    const formData = new FormData();
    
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", selectedCategory.id)
    formData.append("image", image)
    
    try{
      const res = await api.post("/admin/journal", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      
      setData((data) => [{...res.data, category: res.data.Category, articles: res.data.Articles.length}, ...data])
      closeForm()

    }catch(error){
      console.log(error)
      if(isAxiosError(error)) {  
        setErrorMsg(error.response?.data.error)
      } else {
        setErrorMsg("Unknown error occured");
      }
    
    }





  }






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
          {/* <img
            src={``}
            onClick={() => {}}
            className="cursor-pointer w-[20px]"
          /> */}
        </div>
      </div>

      <form onSubmit={() => {}}>
        <h4 className={`${styles.tellUs}`}>Create Journal</h4>
        <div className={`${styles.formWrapper} space-y-6 `}>
          <div className={`${styles.inputContainer}`}>
            <div className="w-full">
              <label>Title</label>
              <input
                placeholder="Enter Journal title"
                className={`${styles.input}`}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

          <div className={`${styles.inputContainer}`}>
            <div className="w-full ">
              <label>Select Category</label>

              <div className="relative">
                <input
                  value={selectedCategory?.name}
                  placeholder="Select category"
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
                      categories={categories}
                      setSelectedCategory={setSelectedCategory}
                      close={closeDropdown}
                      
                    />
                  </Modal>
                )}
              </div>
            </div>
          </div>

          <div className={`${styles.inputContainer}`}>
            <div className="w-full">
              <label>Description</label>
              <textarea
                name="description"
                id="description"
                className={`${styles.textArea}`}
                placeholder="Enter journal description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className={`${styles.inputContainer}`}>
            <div className={`${styles.upload}`}>
              {image && (
                <img
                src={URL.createObjectURL(image)}
                className={`w-[100%] h-[70px] rounded-md  object-cover mx-auto`}
              />)
            }

              <div className={styles.uploadContainer}>
                <UploadIcon />
                <p className={styles.uploadText}>Upload Cover</p>
              </div>
              <input
                type="file"
                className={styles.uploadBox}
                onChange={(ev) => {
                const files = ev.target.files
                if(files){
                    setImage(files.item(0))
                }
                
              }}
                required
              />
            </div>
          </div>

          <Button className="bg-[#0523A2] text-white w-full" onClick={handleSubmit}>
            Create Journal
          </Button>
        </div>
        {errorMsg && <div className="w-full text-center text-red-500">{errorMsg}</div>}
      
      </form>
      
    </div>
  );
};

export default JournalsForm;
