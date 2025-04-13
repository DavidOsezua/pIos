import TitleAndStatus from "@/components/TitleAndStatus";
import React from "react";

type Props = {};

const Categories = (props: Props) => {
  return (
    <section className={`section bg-[#f6f8fd] h-full`}>
      <div className={`sectionContainer`}>
        <TitleAndStatus />
      </div>
    </section>
  );
};

export default Categories;
