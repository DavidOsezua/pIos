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

        <section className={`section`}>
          <div className={`sectionContainer`}>
            <h4>
              PLOS is a non-profit organization on a mission to drive open
              science forward with measurable, meaningful change in research
              publishing, policy, and practice.
            </h4>

            <p>
              Building on a strong legacy of pioneering innovation, PLOS
              continues to be a catalyst, reimagining models to meet open
              science principles, removing barriers and promoting inclusion in
              knowledge creation and sharing, and publishing research outputs
              that enable everyone to learn from, reuse and build upon
              scientific knowledge.
            </p>

            <h4>
              We believe in a better future where science is open to all, for
              all
            </h4>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ourMission;
