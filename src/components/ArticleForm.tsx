import React from "react";

type Props = {
  onNext: () => void;
  //   onSubmit: (file: File | null) => void;
};

function ArticleForm({ onNext }: Props) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">The Article Information</h2>
      <input
        type="text"
        placeholder="Enter the title"
        className="border w-full mb-3 p-2 rounded"
      />
      <select className="border w-full mb-3 p-2 rounded">
        <option>Select the appropriate article type</option>
        <option>Research</option>
        <option>Review</option>
      </select>
      <label className="block mb-2">Upload Article Cover</label>
      <div className="border-dashed border-2 rounded p-6 text-center mb-3">
        <input type="file" className="hidden" id="coverUpload" />
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
