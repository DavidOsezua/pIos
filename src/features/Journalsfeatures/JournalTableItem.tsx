import { Journal } from "./JournalDashBoard";
import styles from "../../components/Table.module.css";
import { Edit } from "@/components/svgComponent/Edit";
import { Delete } from "@/components/svgComponent/Delete";
import { View } from "@/components/svgComponent/View";

type Props = {
  dataItem: Journal;
  handleStatusChange: (id: number, newStatus: string) => void;
};

const statusColors: Record<string, string> = {
  Approved: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Inactive: "bg-red-100 text-red-700",
};

const JournalTableItem = ({ dataItem, handleStatusChange }: Props) => {
  return (
    <tr className={"bg-[#ffffff]"}>
      <td className={`${styles.tdStyle}`}>{dataItem.id}</td>

      <td className={`${styles.tdStyle}`}>
        <div className="flex gap-3 items-center">
          <img
            src="../../../public/biology.png"
            alt={`image`}
            className={`w-[40px] h-[40px] object-cover rounded-md`}
          />
          <div>
            <h2>{dataItem.category}</h2>
          </div>
        </div>
      </td>
      <td className={`${styles.tdStyle}`}>
        <div className="flex gap-3 items-center">
          <img
            src="../../../public/climate.png"
            alt={`image`}
            className={`w-[40px] h-[40px] object-cover rounded-md`}
          />
          <div>
            <h2>{dataItem.category}</h2>
          </div>
        </div>
      </td>
      <td className={`${styles.tdStyle}`}>Saturday, 19 Aug 2024</td>
      <td className={`${styles.tdStyle}`}>45</td>
      <td className={`${styles.tdStyle}`}>
        <select
          value={dataItem.status}
          onChange={(e) => handleStatusChange(dataItem.id, e.target.value)}
          className={`px-2 py-1 rounded text-sm ${
            statusColors[dataItem.status] || "bg-gray-100 text-gray-700"
          }`}
        >
          {["Approved", "Pending", "Inactive"].map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </td>

      <td className={`${styles.tdStyle} text-[#FF6665]`}>
        <div className="flex items-center gap-3">
          <button aria-label="Settings" onClick={() => {}}>
            <Edit />
          </button>
          <button aria-label="Preview" onClick={() => {}}>
            <View />
          </button>
          <button onClick={() => {}} aria-label="Delete">
            <Delete />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default JournalTableItem;
