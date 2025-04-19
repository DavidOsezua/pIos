import { Author } from "@/pages/journalCategoryPages/Publish";

type AuthorsProps = {
  authors: Author[];
  updateAuthor: (index: number, field: keyof Author, value: string) => void;
  addAuthor: () => void;
  onNext: () => void;
  onBack: () => void;
};

const AuthorForm = ({
  onNext,
  onBack,
  authors,
  updateAuthor,
  addAuthor,
}: AuthorsProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-1">Other Authors</h2>
      <p className="text-sm mb-4">Authors who contribute to the article, no need to include your name, your name will be added automatically</p>
      {authors.map((author, index) => (
        <div key={index} className="mb-6">
          <h3 className="font-semibold mb-2">Author {index + 1}</h3>
          <div className="grid grid-cols-3 gap-4 mb-2">
            <select
              className="border p-2 rounded"
              value={author.title}
              onChange={(e) => updateAuthor(index, "title", e.target.value)}
            >
              <option>Mr</option>
              <option>Ms</option>
              <option>Dr</option>
            </select>
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 rounded"
              value={author.lastName}
              onChange={(e) => updateAuthor(index, "lastName", e.target.value)}
            />
            <input
              type="text"
              placeholder="Other Name"
              className="border p-2 rounded"
              value={author.otherName}
              onChange={(e) => updateAuthor(index, "otherName", e.target.value)}
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="border w-full p-2 rounded"
            value={author.email}
            onChange={(e) => updateAuthor(index, "email", e.target.value)}
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
