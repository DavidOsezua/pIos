import { Footer, Hero, Navbar } from "@/components";
import SectionLine from "@/components/SectionLine";

const ResearchbyPLOS = () => {
  return (
    <div className="transitionss">
      <Navbar />
      <main className={`overflow-hidden`}>
        <Hero
          headingTitle="Research by PLOS"
          background={`bg-[url(../../public/pFeeImage.png)]`}
        />

        <section className={`section`}>
          <div className="sectionContainer space-y-5">
            {/*  */}
            <div className={`space-y-5`}>
              <h4>
                Investigating questions surrounding open science and scholarly
                communications with a view to building better solutions
              </h4>

              <p>
                Our mission is to help lead a transformation in research
                communication. Success relies in part on developing a deeper
                understanding of our scholarly publishing system, and the
                factors that shape it, so we can better understand community
                needs, motivations, and behaviors.
              </p>

              <p>
                Like the researchers who publish in our journals, PLOS
                prioritizes openness by posting, publishing
              </p>
            </div>

            {/*****************  *********************/}
            <div className={`space-y-5`}>
              <h2>Open science practices</h2>
              <h3>Measuring open science</h3>

              <p>
                An analysis of the effects of sharing research data, code, and
                preprints on citations Giovanni Colavizza, Lauren Cadwallader,
                Marcel LaFlamme, Grégory Dozot, Stéphane Lecorney, et al
              </p>

              <div>
                <h3>Article</h3>
                <p> October 30 2024</p>
              </div>

              <SectionLine width="w-full" />

              <div>
                <h3>
                  Collaboratively seeking better solutions for monitoring open
                  science Iain Hrynaskiewicz and Chris Heid
                </h3>

                <div>
                  <h3>Blog post March 20 2024</h3>
                </div>
              </div>

              <SectionLine width="w-full" />

              <div>
                <h3>
                  A survey of funders’ and institutions’ needs for understanding
                  researchers open research practices Iain Hrynaskiewicz and
                  Lauren Cadwallader
                </h3>

                <div>
                  <h3>Preprint September 30 2021</h3>
                </div>
              </div>

              <SectionLine width="w-full" />

              <div className={`space-y-5`}>
                <h4>Open Science Indicators</h4>

                <p>
                  Open Science Indicators are a large public dataset that uses
                  Natural Language Processing to identify and measure open
                  science practices, both at PLOS, and in the literature more
                  broadly. The dataset begins in January 2018, and is updated
                  quarterly.
                </p>

                <p>
                  Read more on the Official PLOS Blog <br /> Download the latest
                  dataset
                </p>
              </div>
            </div>

            {/*****************  *********************/}
          </div>
        </section>

        <SectionLine width="w-full" />

        <section className={`section`}>
          <div className="sectionContainer"></div>
        </section>

        <SectionLine width="w-full" />
        <section className={`section`}>
          <div className="sectionContainer"></div>
        </section>

        <SectionLine width="w-full" />
        <section className={`section`}>
          <div className="sectionContainer"></div>
        </section>

        <SectionLine width="w-full" />
        <section className={`section`}>
          <div className="sectionContainer"></div>
        </section>

        <SectionLine width="w-full" />
        <section className={`section`}>
          <div className="sectionContainer"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchbyPLOS;
