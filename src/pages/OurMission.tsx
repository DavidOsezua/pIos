import { Footer, Hero, Navbar } from "@/components";

type Props = {};

const ourMission = (props: Props) => {
  return (
    <div className="transitionss">
      <Navbar />
      <main className={`overflow-hidden`}>
        <Hero
          headingTitle="A catalyst for better"
          background={`bg-[url(aboutImage.png)]`}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ourMission;
