import { Mail } from "lucide-react";

export default function EmailSubscriberWidget() {
  return (
    <div className="bg-[url(/pFeeImage.png)] bg-cover bg-center text-white p-4 rounded-xl space-y-4 w-full max-w-sm">
      {/* Email Subscribers */}
      <div className="bg-white/10 rounded-lg p-4 text-white flex justify-between items-start">
        <div>
          <p className="text-sm">Email Subscriber</p>
          <h2 className="text-3xl font-bold mt-1">
            1500{" "}
            <span className="text-sm font-normal ml-2 text-gray-300">
              New +30
            </span>
          </h2>
          <div className="flex gap-2 mt-4">
            <button className="border border-blue-600 text-blue-600 px-3 py-1 rounded-md text-sm hover:bg-blue-600 hover:text-white transition">
              Export email
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition">
              See details
            </button>
          </div>
        </div>
        <div className="bg-white text-blue-700 rounded-full p-2">
          <Mail className="w-6 h-6" />
        </div>
      </div>

      {/* CSV File Section */}
      <div className="space-y-3">
        <h3 className="text-sm text-gray-300">CSV File</h3>
        <div className="bg-white/10 rounded-lg p-3">
          <p className="text-white mb-2 text-sm">Journals</p>
          <button className="bg-blue-600 text-white w-full py-1 rounded-md text-sm hover:bg-blue-700 transition">
            Export file
          </button>
        </div>
        <div className="bg-white/10 rounded-lg p-3">
          <p className="text-white mb-2 text-sm">Authors</p>
          <button className="bg-blue-600 text-white w-full py-1 rounded-md text-sm hover:bg-blue-700 transition">
            Export file
          </button>
        </div>
      </div>

      {/* Recent Section */}
      <div className="space-y-3">
        <h3 className="text-sm text-gray-300">Recent</h3>
        <div className="bg-white/10 rounded-lg p-3">
          <p className="text-white mb-2 text-sm">Journals</p>
          <p className="text-sm text-gray-300">+42 new request</p>
          <button className="bg-blue-600 text-white w-full py-1 mt-3 rounded-md text-sm hover:bg-blue-700 transition">
            See details
          </button>
        </div>
      </div>
    </div>
  );
}
