import { Journal } from "@/interface";
import { FormData } from "@/pages/journalCategoryPages/Publish";

type StepProps = {
  data: FormData;
  updateField: (field: keyof FormData, value: string) => void;
  handleFileChange: (field: keyof FormData, file: File | null) => void;
  onNext: () => void;
  journals: Journal[]
};

const articleTypes = [
  "Blog Post",
  "Essay",
  "Perspective",
  "Primer",
  "Report",
  "Research Article",
  "Short Report",
];

function ArticleForm({
  data,
  updateField,
  handleFileChange,
  onNext,
  journals
}: StepProps) {
  
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">The Article Information</h2>
      
      <h4 className="text-md  mb-1">Title</h4>
      <input
        type="text"
        placeholder="Enter the title"
        className="border w-full mb-3 p-2 rounded"
        value={data.title}
        onChange={(e) => updateField("title", e.target.value)}
      />
      
      <label htmlFor="journalType" className="text-md  mb-1">Select Journal</label>
      <select
        name="journalType"
        className="border w-full mb-3 p-2 rounded"
        value={data.journal}
        onChange={(e) => updateField("journal", e.target.value)}
      >
        <option>Select the appropriate journal</option>
        {journals.map((journal) => <option >{journal.title}</option>)}
        
      </select>


      <label htmlFor="articleType" className="text-md  mb-1">Select Article Type</label>
      <select
        name="articleType"
        className="border w-full mb-3 p-2 rounded"
        value={data.type}
        onChange={(e) => updateField("type", e.target.value)}
      >
        <option>Select the  article type</option>
        {articleTypes.map((type) => <option>{type}</option>)}
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
