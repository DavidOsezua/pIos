import Filter from "@/components/Filter";
import Search from "@/components/Search";
import TitleAndStatus from "@/components/TitleAndStatus";
import React from "react";

type Props = {};

const Journals = (props: Props) => {
  return (
    <section className={`section bg-[#f6f8fd] h-full`}>
      <div className={`sectionContainer space-y-10`}>
        <TitleAndStatus />

        <div className={`flex justify-between items-center`}>
          <Filter />
          <Search />
        </div>
      </div>
    </section>
  );
};

export default Journals;
