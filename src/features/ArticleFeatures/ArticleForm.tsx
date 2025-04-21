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
import SelectType from "./SelectType";
import { Article, Journal } from "@/interface";
import { api } from "@/services/endpoint";
import { isAxiosError } from "axios";
// import SelectType from "./";

// SelectType
interface Author {
  title: string;
  lastName: string;
  otherNames: string;
  email: string;
}

interface ArticleInput {
  title: string;
  journal: Journal | null;
  type: string;
  abstract: string;
  cover?: File | null;
}

type Props = {
  journals: Journal[];
  setData: React.Dispatch<React.SetStateAction<Article[]>>;
  modalHandler: () => void;
};

const ArticleForm = ({
  journals,
  setData,
  modalHandler: modalHandlerMain,
}: Props) => {
  const [step, setStep] = useState<number>(1);
  const [errorMsg, setErrorMsg] = useState("");

  const [authors, setAuthors] = useState<Author[]>([
    { title: "", lastName: "", otherNames: "", email: "" },
    { title: "", lastName: "", otherNames: "", email: "" },
  ]);

  const [article, setArticle] = useState<ArticleInput>({
    title: "",
    journal: null,
    type: "",
    abstract: "",
    cover: null,
  });

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  const handleArticleChange = (
    field: keyof ArticleInput,
    value: string | File | Journal
  ) => {
    setArticle((prev) => ({ ...prev, [field]: value }));
  };

  const handleJournalSelection = (journal: Journal) => {
    handleArticleChange("journal", journal);
  };

  const handleTypeSelection = (articleType: string) => {
    handleArticleChange("type", articleType);
  };
  const removeAuthor = (index: number) => {
    setAuthors((authors) => authors.filter((_, i) => i != index));
  };

  const handleNextStep = () => {
    if (!article.title) {
      setErrorMsg("Title required");
      return;
    }
    if (!article.journal) {
      setErrorMsg("Journal required");
      return;
    }

    if (!article.type) {
      setErrorMsg("Article type required");
      return;
    }

    if (!article.abstract) {
      setErrorMsg("Abstract required");
      return;
    }

    if (!article.cover) {
      setErrorMsg("Please upload article cover");
      return;
    }

    setErrorMsg("");
    setStep(2);
  };

  // submit Logic
  const handleSubmit = async () => {
    setErrorMsg("");
    if (authors.length == 0) {
      setErrorMsg("Article need at least 1 author ");
      return;
    }

    const error = authors
      .map((author, index) => {
        author.title = "Dr.";

        if (!author.email) {
          return `Author ${index + 1} email required`;
        }
        if (!author.lastName) {
          return `Author ${index + 1} lastName required`;
        }
        if (!author.otherNames) {
          return `Author ${index + 1} firstName required`;
        }

        if (!author.title) {
          return `Author ${index + 1} title required`;
        }
      })
      .filter((d) => d != undefined)
      .at(0);

    if (error) {
      setErrorMsg(error);
      return;
    }

    const formData = new FormData();

    const ar = {
      title: article.title,
      journalId: article.journal?.id,
      type: article.type,
      abstract: article.abstract,
    };

    formData.append("cover", article.cover!);
    formData.append("article", JSON.stringify(ar));
    formData.append("authors", JSON.stringify(authors));

    try {
      const res = await api.post("/admin/article", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const response = res.data;
      const data: Article = {
        id: response.id,
        title: response.title,
        status: response.status,
        type: response.type,
        image: response.image,
        createdAt: response.createdAt,

        journal: {
          id: response.journal.id,
          title: response.journal.title,
          image: response.journal.image,
        },
      };

      setData((prev) => [data, ...prev]);
      modalHandlerMain();
    } catch (error) {
      console.log(error);
      if (isAxiosError(error)) {
        setErrorMsg(error.response?.data.error);
      } else {
        setErrorMsg("Unknown error occured");
      }
    }
  };

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
                    value={article.journal?.title}
                    placeholder="Select Journal"
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
                        journals={journals}
                        handleJournalSelection={handleJournalSelection}
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
                    value={article.type}
                    placeholder="Select Type"
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
                        handleTypeSelection={handleTypeSelection}
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
                onChange={(e) => {
                  if (e.target.files) {
                    handleArticleChange("cover", e.target.files[0]);
                  }
                }}
              />
            </div>
            <Button
              onClick={handleNextStep}
              className="w-full bg-blue-600 text-white"
            >
              Next
            </Button>
            {errorMsg && (
              <div className="text-center w-full text-red-500">{errorMsg}</div>
            )}
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardContent className="space-y-4 p-6">
            <h2 className="text-xl font-bold">Add Authors</h2>
            {authors.map((author, index) => (
              <div key={index} className="space-y-2 border-t pt-4">
                <h3 className="font-semibold">
                  Author {index + 1}
                  <span
                    className="cursor-pointer"
                    onClick={() => removeAuthor(index)}
                  >
                    X
                  </span>
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  {/* <Select
                  
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
                  </Select> */}
                  <select
                    className="border p-2 rounded"
                    value={author.title}
                    onChange={(e) =>
                      handleAuthorChange(index, "title", e.target.value)
                    }
                  >
                    <option>Mr</option>
                    <option>Ms</option>
                    <option>Dr</option>
                  </select>
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
            {errorMsg && (
              <div className="text-center w-full text-red-500">{errorMsg}</div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ArticleForm;
