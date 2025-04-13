import React from "react";

type Props = {
  onBack: () => void;
  //   onSubmit: (file: File | null) => void;
};

const Upload = ({ onBack }: Props) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Article file Upload</h2>
      <p className="mb-4">
        Upload your article in PDF format to complete your submission...
      </p>
      <label className="block mb-2">Upload Article</label>
      <div className="border-dashed border-2 rounded p-6 text-center mb-4">
        <input type="file" className="hidden" id="articleUpload" />
        <label htmlFor="articleUpload" className="cursor-pointer">
          Upload Article
        </label>
      </div>
      <div className="flex justify-between">
        <button onClick={onBack} className="border px-4 py-2 rounded">
          Back
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit Article
        </button>
      </div>
    </div>
  );
};

export default Upload;
