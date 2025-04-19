import { Mail, Rss, Facebook, Twitter } from "lucide-react";

const blogPosts = [
  {
    date: "February 11",
    title: "R. Scott Hawley: A Pioneer in Genetics and Mentor to Many",
    author: "PLOS",
    image: "https://via.placeholder.com/60x60?text=1",
  },
  {
    date: "November 4",
    title: "Remembering Barbara Cohen’s Impact on Scientific Publishing",
    author: "AUDREY SNIDER",
    image: "https://via.placeholder.com/60x60?text=2",
  },
  {
    date: "May 8",
    title: "Discover the latest Biological and Life Sciences Research",
    author: "PLOS",
    image: "https://via.placeholder.com/60x60?text=3",
  },
  {
    date: "April 22",
    title:
      "Behind the paper: why we cannot tell different types of species intera...",
    author: "PLOS BIOLOGY",
    image: "https://via.placeholder.com/60x60?text=4",
  },
];

export default function BlogSection({journalInfo}: {journalInfo: {
    image: string | null;
    name: string | null;
}}) {
  return (
    <>
      <div className="bg-white shadow-sm max-w-4xl ml-auto mt-6 ">
        <h2 className="bg-blue-900 text-white px-4 py-2 font-semibold text-sm">
          {journalInfo.name}
        </h2>

        <div className="">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex items-start gap-4 py-3">
              <img
                src={post.image}
                alt="thumb"
                className="w-14 h-14 object-cover rounded"
              />
              <div>
                <p className="text-[11px] italic text-gray-500">
                  Posted {post.date}
                </p>
                <h3 className="text-sm font-medium text-gray-800 leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1 uppercase">
                  {post.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-right text-xs text-blue-800 font-semibold mt-2 cursor-pointer hover:underline">
          SEE ALL BLOGS &#x25B6;
        </div>
      </div>
      <div className="  max-w-4xl ml-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div className="border p-4">
          <h4 className="font-semibold text-sm mb-2">PUBLISH WITH PLOS</h4>
          <button className="bg-blue-900 text-white px-4 py-2 text-sm rounded hover:bg-blue-700">
            SUBMIT YOUR MANUSCRIPT
          </button>
        </div>

        <div className="bg-blue-900 text-white p-4">
          <h4 className="font-semibold text-sm mb-2">CONNECT WITH US</h4>
          <div className="flex items-center space-x-4 text-white">
            <Mail size={18} />
            <Rss size={18} />
            <Facebook size={18} />
            <Twitter size={18} />
            <span className="ml-auto text-sm underline cursor-pointer">
              PLOS Blogs
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
