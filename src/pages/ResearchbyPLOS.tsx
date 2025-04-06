import { Footer, Hero, Navbar } from "@/components";
import React from "react";

type Props = {};

const ResearchbyPLOS = (props: Props) => {
  return (
    <div className="transitionss">
      <Navbar />
      <main className={`overflow-hidden`}>
        <Hero
          headingTitle="Research by PLOS"
          background={`bg-[url(pFeeImage.png)]`}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ResearchbyPLOS;
