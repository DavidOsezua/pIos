import DashboardCard from "./DashboardCard";
import EmailSubscriberWidget from "./EmailSubscriberWidget";

export interface DashboardCardData {
  id: number;
  title: string;
  total: number;
  stats: {
    label: string;
    value: number;
    color: string;
  }[];
  actionText: string;
  image: string;
  icon: string;
}

const dashboardData: DashboardCardData[] = [
  {
    id: 1,
    title: "Journals",
    total: 200,
    stats: [
      { label: "Active", value: 1200, color: "text-green-500" },
      { label: "Pending", value: 460, color: "text-yellow-500" },
      { label: "Inactive", value: 45, color: "text-red-500" },
    ],
    actionText: "Add Journal",
    image: "/card1.png",
    icon: "/icons/pause-icon.png",
  },
  {
    id: 2,
    title: "Articles",
    total: 2000,
    stats: [
      { label: "Active", value: 120, color: "text-green-500" },
      { label: "Pending", value: 46, color: "text-yellow-500" },
      { label: "Inactive", value: 78, color: "text-red-500" },
    ],
    actionText: "Add Author",
    image: "/card2.png",
    icon: "/icons/link-icon.png",
  },
  {
    id: 3,
    title: "Categories",
    total: 30,
    stats: [
      { label: "Active", value: 30, color: "text-green-500" },
      { label: "Inactive", value: 0, color: "text-red-500" },
    ],
    actionText: "Add Category",
    image: "/card3.png",
    icon: "/icons/layers-icon.png",
  },
];

const DashboardLayout = (props: Props) => {
  return (
    <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {dashboardData.map((item) => (
        <DashboardCard key={item.id} data={item} />
      ))}

      <div>
        <EmailSubscriberWidget />
      </div>
    </div>
  );
};

export default DashboardLayout;
