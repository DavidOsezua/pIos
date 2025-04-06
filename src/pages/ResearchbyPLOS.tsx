import { Footer, Hero, Navbar } from "@/components";

const ResearchbyPLOS = () => {
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
