import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

import { Category } from "./CategoryDashboard";

type Props = {
  category: Category;
  handleStatusChange: (id: number, newStatus: string) => void;
};

const CategoryCardItem = ({ category, handleStatusChange }: Props) => {
  // console.log(category.status);

  return (
    <Card key={category.id} className="relative">
      <CardContent className="p-2 space-y-2 flex flex-col items-center">
        <div className="absolute top-2 left-2">
          <p
            className={
              category.status === "Active"
                ? "text-green-600 border-green-600"
                : "text-red-600 border-red-600"
            }
          >
            {category.status}
          </p>
        </div>
        <img
          src="/public/biology.png"
          alt={category.title}
          className="w-16 h-16 rounded-full"
        />
        <p className="text-center text-sm font-semibold">{category.title}</p>
        <div className="absolute top-2 right-2">
          <Switch
            className=""
            checked={category.status === "Active"}
            onCheckedChange={(checked: boolean) => {
              handleStatusChange(category.id, checked ? "Active" : "Inactive");
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCardItem;
