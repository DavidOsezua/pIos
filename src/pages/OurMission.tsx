import { Footer, Hero, Navbar } from "@/components";

const ourMission = () => {
  return (
    <div className="transitionss">
      <Navbar />
      <main className={`overflow-hidden`}>
        <Hero
          headingTitle="A catalyst for better"
          background={`bg-[url(../../public/aboutImage.png)]`}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ourMission;
