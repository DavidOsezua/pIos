import { Footer, Hero, Navbar } from "@/components";

const PublicationFees = () => {
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
