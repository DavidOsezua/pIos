import AbstractFrom from "@/components/AbstractFrom";
import ArticleForm from "@/components/ArticleForm";
import AuthorForm from "@/components/AuthorForm";
import Upload from "@/components/Upload";
import JournalCategoryLayout from "@/layout/JournalCategoryLayout";
import React, { useState } from "react";

type Props = {};

const StepTabs = [
  "Article Information",
  "Abstract",
  "Authors Information",
  "Upload Article",
];

const Publish = (props: Props) => {
  const [step, setStep] = useState(0);

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

          {step === 0 && <ArticleForm onNext={next} />}
          {step === 1 && <AbstractFrom onNext={next} onBack={back} />}
          {step === 2 && <AuthorForm onNext={next} onBack={back} />}
          {step === 3 && <Upload onBack={back} />}
        </div>
      </section>
    </JournalCategoryLayout>
  );
};

export default Publish;
