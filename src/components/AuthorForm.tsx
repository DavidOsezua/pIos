import React, { useState } from "react";

type Props = {
  onBack: () => void;
  onNext: () => void;
  //   onSubmit: (file: File | null) => void;
};

const AuthorForm = ({ onBack, onNext }: Props) => {
  const [authors, setAuthors] = useState([
    { title: "", lastName: "", otherName: "", email: "" },
  ]);

  const addAuthor = () => {
    setAuthors([
      ...authors,
      { title: "", lastName: "", otherName: "", email: "" },
    ]);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">The Authors</h2>
      {authors.map((_, index) => (
        <div key={index} className="mb-6">
          <h3 className="font-semibold mb-2">Author {index + 1}</h3>
          <div className="grid grid-cols-3 gap-4 mb-2">
            <select className="border p-2 rounded">
              <option>Mr</option>
              <option>Ms</option>
              <option>Dr</option>
            </select>
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Other Name"
              className="border p-2 rounded"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="border w-full p-2 rounded"
          />
        </div>
      ))}
      <button onClick={addAuthor} className="mb-4 border px-4 py-2 rounded">
        + Add Author
      </button>
      <div className="flex justify-between">
        <button onClick={onBack} className="border px-4 py-2 rounded">
          Back
        </button>
        <button
          onClick={onNext}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Continue to Upload
        </button>
      </div>
    </div>
  );
};

export default AuthorForm;
