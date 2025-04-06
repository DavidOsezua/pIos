import { Footer, Hero, Navbar } from "@/components";
import React from "react";

type Props = {};

const PublicationFees = (props: Props) => {
  return (
    <div className="transitionss">
      <Navbar />
      <main className={`overflow-hidden`}>
        <Hero
          headingTitle="Publication fees"
          background={`bg-[url(pFeeImage.png)]`}
        />
      </main>
      <Footer />
    </div>
  );
};

export default PublicationFees;
