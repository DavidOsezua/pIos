import { ArrowRight } from "lucide-react";
import { FC } from "react";
import { DashboardCardData } from "./DashboardLayout";

interface DashboardCardProps {
  data: DashboardCardData;
}

const DashboardCard: FC<DashboardCardProps> = ({ data }) => {
  return (
    <div className="relative h-[149px] w-full max-w-sm rounded-xl overflow-hidden text-white">
      <img src={data.image} alt="image" className="w-full h-40 object-cover" />

      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">{data.title}</div>
          <div className="bg-white text-blue-600 p-2 rounded-full">""</div>
        </div>

        <div>
          <h2 className="text-3xl font-bold">{data.total}</h2>
          <div className="mt-2 flex gap-4 text-xs">
            {data.stats.map((item) => (
              <div>
                <p className={item.color}>
                  {item.label} {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 right-4 bg-white text-blue-600 p-2 rounded-full">
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
