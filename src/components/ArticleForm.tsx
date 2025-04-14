import { FormData } from "@/pages/journalCategoryPages/Publish";

type StepProps = {
  data: FormData;
  updateField: (field: keyof FormData, value: string) => void;
  handleFileChange: (field: keyof FormData, file: File | null) => void;
  onNext: () => void;
};

function ArticleForm({
  data,
  updateField,
  handleFileChange,
  onNext,
}: StepProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">The Article Information</h2>
      <input
        type="text"
        placeholder="Enter the title"
        className="border w-full mb-3 p-2 rounded"
        value={data.title}
        onChange={(e) => updateField("title", e.target.value)}
      />
      <select
        className="border w-full mb-3 p-2 rounded"
        value={data.type}
        onChange={(e) => updateField("type", e.target.value)}
      >
        <option>Select the appropriate article type</option>
        <option>Research</option>
        <option>Review</option>
      </select>
      <label className="block mb-2">Upload Article Cover</label>
      <div className="border-dashed border-2 rounded p-6 text-center mb-3">
        <input
          type="file"
          className="hidden"
          id="coverUpload"
          onChange={(e) =>
            handleFileChange("cover", e.target.files?.[0] || null)
          }
        />
        <label htmlFor="coverUpload" className="cursor-pointer">
          Upload Cover
        </label>
      </div>
      <button
        onClick={onNext}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Continue to Abstract
      </button>
    </div>
  );
}

export default ArticleForm;
