import ArrowDown from "@/components/svgComponent/ArrowDown";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import styles from "../../components/Form.module.css";
import { useState } from "react";
import Modal from "@/components/Modal";
import SelectJournal from "./SelectJournal";
import SelectType from "./selectType";

interface Author {
  title: string;
  lastName: string;
  otherNames: string;
  email: string;
}

interface Article {
  title: string;
  journal: string;
  type: string;
  abstract: string;
  cover: File | null;
}

const ArticleForm = () => {
  const [step, setStep] = useState<number>(1);
  const [authors, setAuthors] = useState<Author[]>([
    { title: "", lastName: "", otherNames: "", email: "" },
    { title: "", lastName: "", otherNames: "", email: "" },
  ]);

  const [article, setArticle] = useState<Article>({
    title: "",
    journal: "",
    type: "",
    abstract: "",
    cover: null,
  });

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownType: string) => {
    setActiveDropdown((prev) => (prev === dropdownType ? null : dropdownType));
  };

  const modalHandler = () => {
    setActiveDropdown(null);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
    modalHandler();
  };

  const handleAuthorChange = (
    index: number,
    field: keyof Author,
    value: string
  ) => {
    const updatedAuthors = [...authors];
    updatedAuthors[index][field] = value;
    setAuthors(updatedAuthors);
  };

  const addAuthor = () => {
    setAuthors([
      ...authors,
      { title: "", lastName: "", otherNames: "", email: "" },
    ]);
  };

  const handleArticleChange = (field: keyof Article, value: string | File) => {
    setArticle((prev) => ({ ...prev, [field]: value }));
  };

  // submit Logic
  const handleSubmit = () => {};

  return (
    <div className="max-w-2xl mx-auto p-6">
      {step === 1 && (
        <Card>
          <CardContent className="space-y-4 p-6">
            <h2 className="text-xl font-bold">Upload Article</h2>
            <Input
              placeholder="Enter Article Title"
              value={article.title}
              onChange={(e) => handleArticleChange("title", e.target.value)}
            />
            <div className={`${styles.inputContainer}`}>
              <div className="w-full">
                <label>Select Journal</label>

                <div className="relative">
                  <input
                    value=""
                    placeholder="Select venue type"
                    className={`${styles.input}`}
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-4"
                    onClick={() => toggleDropdown("venue")}
                  >
                    <ArrowDown />
                  </button>

                  {activeDropdown === "venue" && (
                    <Modal modalHandler={modalHandler}>
                      <SelectJournal
                        close={closeDropdown}
                        // onVenueSelection={handleVenueSelect}
                      />
                    </Modal>
                  )}
                </div>
              </div>

              {/* GENRE INPUT */}

              <div className="w-full">
                <label>Select Types</label>

                <div className="relative">
                  <input
                    // value={formData.band?.name}
                    placeholder="Select Band"
                    className={`${styles.input}`}
                    readOnly
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-4"
                    onClick={() => toggleDropdown("Band")}
                  >
                    <ArrowDown />
                  </button>

                  {/* BAND DropDown  */}
                  {activeDropdown === "Band" && (
                    <Modal modalHandler={modalHandler}>
                      <SelectType
                        close={closeDropdown}
                        // onBandSelection={handleBandSelect}
                      />
                    </Modal>
                  )}
                </div>
              </div>
            </div>
            <textarea
              className="w-full border rounded p-2"
              placeholder="Enter article abstract"
              value={article.abstract}
              onChange={(e) => handleArticleChange("abstract", e.target.value)}
              rows={4}
            ></textarea>
            <div className="border rounded p-4 text-center">
              <label className="block text-sm text-gray-500 mb-2">
                Cover 64px x 64px
              </label>
              <Input
                type="file"
                // onChange={(e) =>
                //   handleArticleChange("cover", e.target.files[0])
                // }
              />
            </div>
            <Button
              onClick={() => setStep(2)}
              className="w-full bg-blue-600 text-white"
            >
              Next
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardContent className="space-y-4 p-6">
            <h2 className="text-xl font-bold">Add Authors</h2>
            {authors.map((author, index) => (
              <div key={index} className="space-y-2 border-t pt-4">
                <h3 className="font-semibold">Author {index + 1}</h3>
                <div className="grid grid-cols-3 gap-4">
                  <Select
                    onValueChange={(value) =>
                      handleAuthorChange(index, "title", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Title" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Dr", "Miss", "Mr", "Professor"].map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Enter Last name"
                    value={author.lastName}
                    onChange={(e) =>
                      handleAuthorChange(index, "lastName", e.target.value)
                    }
                  />
                  <Input
                    placeholder="Enter Firstname then Other name(s)"
                    value={author.otherNames}
                    onChange={(e) =>
                      handleAuthorChange(index, "otherNames", e.target.value)
                    }
                  />
                </div>
                <Input
                  placeholder="Enter Author Email Address"
                  value={author.email}
                  onChange={(e) =>
                    handleAuthorChange(index, "email", e.target.value)
                  }
                />
              </div>
            ))}
            <Button onClick={addAuthor} variant="outline" className="w-full">
              + Add Author
            </Button>

            <Button
              className="w-full bg-blue-600 text-white"
              onClick={handleSubmit}
            >
              Upload
            </Button>
            <Button
              variant="outline"
              onClick={() => setStep(1)}
              className="w-full"
            >
              Back
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ArticleForm;
