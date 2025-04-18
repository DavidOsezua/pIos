import DashboardLayout from "@/features/DashboardFeatures/DashboardLayout";

const Dashboard = () => {
  return (
    <section className={`section bg-[#f6f8fd] h-full`}>
      <div className={`sectionContainer px-4 `}>
        <DashboardLayout />
      </div>
    </section>
  );
};

export default Dashboard;
