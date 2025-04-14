import { FormData } from "@/pages/journalCategoryPages/Publish";

type UploadProps = {
  data: FormData;
  handleFileChange: (field: keyof FormData, file: File | null) => void;
  handleSubmit: () => void;
  onBack: () => void;
};

const Upload = ({
  onBack,
  handleFileChange,
  handleSubmit,
  data,
}: UploadProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Article file Upload</h2>
      <p className="mb-4">
        Upload your article in PDF format to complete your submission...
      </p>
      <label className="block mb-2">Upload Article</label>
      <div className="border-dashed border-2 rounded p-6 text-center mb-4">
        <input
          type="file"
          className="hidden"
          id="articleUpload"
          onChange={(e) =>
            handleFileChange("articleFile", e.target.files?.[0] || null)
          }
        />
        <label htmlFor="articleUpload" className="cursor-pointer">
          Upload Article
        </label>
      </div>
      <div className="flex justify-between">
        <button onClick={onBack} className="border px-4 py-2 rounded">
          Back
        </button>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Submit Article
        </button>
      </div>
    </div>
  );
};

export default Upload;
