import { Footer, Hero, Navbar } from "@/components";

type Props = {};

const OpenSciencePolicy = (props: Props) => {
  return (
    <div className="transitionss">
      {" "}
      <Navbar />
      <main className={`overflow-hidden`}>
        <Hero
          headingTitle="Open Science and Editorial Policy"
          background={`bg-[url(aboutImage.png)]`}
        />
      </main>
      <Footer />
    </div>
  );
};

export default OpenSciencePolicy;
