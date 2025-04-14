import React, { useState, ChangeEvent } from "react";
import AbstractFrom from "@/components/AbstractFrom";
import ArticleForm from "@/components/ArticleForm";
import AuthorForm from "@/components/AuthorForm";
import Upload from "@/components/Upload";
import JournalCategoryLayout from "@/layout/JournalCategoryLayout";

export type Author = {
  title: string;
  lastName: string;
  otherName: string;
  email: string;
};

export type FormData = {
  title: string;
  type: string;
  cover: File | null;
  abstract: string;
  authors: Author[];
  articleFile: File | null;
};

const StepTabs = [
  "Article Information",
  "Abstract",
  "Authors Information",
  "Upload Article",
];

const Publish = () => {
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    type: "",
    cover: null,
    abstract: "",
    authors: [{ title: "Mr", lastName: "", otherName: "", email: "" }],
    articleFile: null,
  });

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const updateAuthor = (index: number, field: keyof Author, value: string) => {
    const updatedAuthors = [...formData.authors];
    updatedAuthors[index][field] = value;
    setFormData((prev) => ({ ...prev, authors: updatedAuthors }));
  };

  const addAuthor = () => {
    setFormData((prev) => ({
      ...prev,
      authors: [
        ...prev.authors,
        { title: "Mr", lastName: "", otherName: "", email: "" },
      ],
    }));
  };

  const handleFileChange = (field: keyof FormData, file: File | null) => {
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const handleSubmit = () => {
    console.log("Submitted data:", formData);
    // submission logic here
  };

  const next = () => setStep((s) => Math.min(s + 1, StepTabs.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <JournalCategoryLayout>
      <section className={`section`}>
        <div className="sectionContainer px-4 md:px-0">
          <div className="flex mb-6 border-b">
            {StepTabs.map((tab, index) => (
              <div
                key={tab}
                className={`flex-1 text-center py-2 cursor-pointer ${
                  step === index
                    ? "border-b-4 border-blue-600 font-semibold"
                    : ""
                }`}
                onClick={() => setStep(index)}
              >
                {tab}
              </div>
            ))}
          </div>

          {step === 0 && (
            <ArticleForm
              onNext={next}
              data={formData}
              updateField={updateField}
              handleFileChange={handleFileChange}
            />
          )}
          {step === 1 && (
            <AbstractFrom
              onNext={next}
              onBack={back}
              data={formData}
              updateField={updateField}
            />
          )}
          {step === 2 && (
            <AuthorForm
              onNext={next}
              onBack={back}
              authors={formData.authors}
              updateAuthor={updateAuthor}
              addAuthor={addAuthor}
            />
          )}
          {step === 3 && (
            <Upload
              onBack={back}
              data={formData}
              handleFileChange={handleFileChange}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      </section>
    </JournalCategoryLayout>
  );
};

export default Publish;
