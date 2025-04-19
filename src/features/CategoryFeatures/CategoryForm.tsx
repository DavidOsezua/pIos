import { X } from "lucide-react";
import styles from "../../components/Form.module.css";
import UploadIcon from "@/components/svgComponent/UploadIcon";
import { Button } from "@/components";
import { useState } from "react";

import { api } from "@/services/endpoint";
import { isAxiosError } from "axios";
import { CategoryInterface } from "@/interface";

type Props = {
  closeForm: () => void;
  setData: React.Dispatch<React.SetStateAction<CategoryInterface[]>>
};

const CategoryForm = ({ closeForm, setData }: Props) => {
  
  const [uploadImage, setUploadimage] = useState<File | null>(null)
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const handleUpload = async () => {
    

    if (!uploadImage || !name) {
      alert("Please fill in all fields.");
      return;
    }


    const formData = new FormData();
    formData.append("image", uploadImage);
    formData.append("name", name);

    try{
      const res = await api.post("/admin/category", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      
      // closeForm()
      const category = res.data
      const newCategory = {id: category.id, name: category.name, status: category.isActive ? "Active" : "Inactive", image: category.image}
      setData((data) => [newCategory, ...data])
      closeForm()

    }catch(error){
    
      if (isAxiosError(error)) {
          console.log("Here")
          setError(error.response?.data.error)
        
      } else {
        setError("Unknown error occured");
      }
    
    }
    
      
      

  }

  return (
    <div className={`bg-white p-4 relative max-w-[500px] mx-auto`}>
      <button className={`absolute right-4 cursor-pointer`} onClick={closeForm}>
        <X />
      </button>
    
      <form className={styles.formWrapper}>
        <div className={`${styles.inputContainer}`}>
          <label>Category</label>
          <input
            placeholder="Enter Category Name"
            className={`${styles.input}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <p></p>
        <div className={`${styles.inputContainer}`}>
          <label></label>
          <div className={`${styles.upload}`}>
            {uploadImage && (
              <img
                src={URL.createObjectURL(uploadImage)}
                className={`w-[100%] h-[70px] rounded-md  object-cover mx-auto`}
              />
            )}

            <div className={styles.uploadContainer}>
              <UploadIcon />
              <p className={styles.uploadText}>Upload Icon</p>
            </div>

            <input
              type="file"
              className={styles.uploadBox}
              onChange={(ev) => {
                const files = ev.target.files
                if(files){
                    setUploadimage(files.item(0))
                }
                // console.log(ev.target.files)
              }}
            />
          </div>
        </div>
        <p></p>
        <Button className="w-full bg-accentone text-white" onClick={handleUpload}>Upload</Button>
        {error && <p className="w-full text-center text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default CategoryForm;
