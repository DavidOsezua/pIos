import JournalDashBoard from "@/features/Journalsfeatures/JournalDashBoard";

const Journals = () => {
  return (
    <section className={`section bg-[#f6f8fd] h-full`}>
      <div className={`sectionContainer space-y-10`}>
        <JournalDashBoard />
      </div>
    </section>
  );
};

export default Journals;
