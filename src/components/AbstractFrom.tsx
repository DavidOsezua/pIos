import React from "react";

type Props = {
  onBack: () => void;
  onNext: () => void;
  //   onSubmit: (file: File | null) => void;
};

const AbstractFrom = ({ onNext, onBack }: Props) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">The Article Abstract</h2>
      <textarea
        placeholder="Enter the article abstract"
        className="w-full border p-2 mb-4 h-40 rounded"
      ></textarea>
      <div className="flex justify-between">
        <button onClick={onBack} className="border px-4 py-2 rounded">
          Back
        </button>
        <button
          onClick={onNext}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Continue to Authors
        </button>
      </div>
    </div>
  );
};

export default AbstractFrom;
