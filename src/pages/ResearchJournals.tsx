import { Footer, Hero, Navbar } from "@/components";

const ResearchJournals = () => {
  return (
    <div className="transitionss">
      <Navbar />
      <main className={`overflow-hidden`}>
        <Hero
          headingTitle="Research journals"
          background={`bg-[url(aboutImage.png)]`}
        />

        <section className={`section`}>
          <div className={`sectionContainer`}>
            <h3>Put integrity first by choosing a PLOS journal</h3>

            <p>
              When it comes to research integrity and scientific rigor, we will
              not compromise. With a focus on fundamental and applied research,
              our journals cover all scientific disciplines across life, health,
              and sustainability. We have processes to ensure the science is
              rigorous, practices to make sure research is shared and reused,
              policies that are equitable, and innovations in scholarly
              communications.
            </p>

            <div>
              <p>
                Explore our journals, each publishing research in these
                scientific disciplines, below.
              </p>

              <div>
                <button>Life science</button>
                <button>Health science</button>
                <button>Sustainability science</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchJournals;
