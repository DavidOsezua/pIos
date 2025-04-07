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
          <div className="sectionContainer px-[1rem] lg:px-0  space-y-5">
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
          <div className="sectionContainer px-[1rem] lg:px-0 space-y-5">
            <h3>Understanding community needs</h3>

            <p>
              Meeting open science needs at PLOS Mental Health Karli
              Montague-Cardoso, Marcel LaFlamme, Beruria Novich
            </p>

            <div>
              <p>
                Editorial <br /> September 18 2024
              </p>
            </div>
          </div>
        </section>

        <SectionLine width="w-full" />
        <section className="section">
          <div className="sectionContainer px-[1rem] lg:px-0 space-y-8">
            {/* Section Title */}
            <div>
              <h2 className="text-xl font-bold text-accentone">Open code</h2>
            </div>

            {/* Article 1 */}
            <div className="space-y-2">
              <h3 className="font-bold">
                A survey of researchers’ code sharing and code reuse practices,
                and assessment of interactive notebook prototypes
              </h3>
              <p className="text-sm text-gray-700">
                Lauren Cadwallader, Iain Hrynaszkiewicz
              </p>
              <div className="grid grid-cols-3 gap-4 text-accentone font-semibold text-sm">
                <div>
                  <a href="#">Article</a>
                  <p className="text-black font-normal">August 22 2022</p>
                </div>
                <div>
                  <a href="#">Preprint</a>
                  <p className="text-black font-normal">February 22 2022</p>
                </div>
                <div>
                  <a href="#">Dataset</a>
                  <p className="text-black font-normal">March 2 2022</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-300" />

            {/* Article 2 */}
            <div className="space-y-2">
              <h3 className="font-bold">
                Advancing code sharing in the computational biology community
              </h3>
              <p className="text-sm text-gray-700">
                Lauren Cadwallader, Feilim Mac Gabhann, Jason Papin, Virginia E.
                Pitzer
              </p>
              <div className="grid grid-cols-3 gap-4 text-accentone font-semibold text-sm">
                <div>
                  <a href="#">Editorial</a>
                  <p className="text-black font-normal">June 2 2022</p>
                </div>
                <div>
                  <a href="#">Dataset</a>
                  <p className="text-black font-normal">February 3 2022</p>
                </div>
                <div>
                  <a href="#">Code</a>
                  <p className="text-black font-normal">May 27 2022</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-300" />

            {/* Article 3 */}
            <div className="space-y-2">
              <h3 className="font-bold">
                Code Sharing Survey 2020 – PLOS Computational Biology
              </h3>
              <p className="text-sm text-gray-700">
                Iain Hrynaszkiewicz, James Harney, Lauren Cadwallader
              </p>
              <div className="grid grid-cols-3 gap-4 text-accentone font-semibold text-sm">
                <div>
                  <a href="#">Dataset</a>
                  <p className="text-black font-normal">March 20 2021</p>
                </div>
                <div>
                  <a href="#">Preprint</a>
                  <p className="text-black font-normal">April 28 2021</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionLine width="w-full" />
        <section className="section py-8">
          <div className="sectionContainer px-[1rem] lg:px-0 max-w-5xl mx-auto ">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-accentone mb-4">
                Open data
              </h2>

              <h3 className="text-xl font-semibold mb-1">
                Incentivising best practice in research data sharing:
                Experiments to increase use of and engagement with data
                repositories
              </h3>
              <p className="text-gray-700 mb-2">
                Lauren Cadwallader, Beruría Novich, James Harney, Iain
                Hrynaszkiewicz
              </p>
              <ul className="space-y-1">
                <li>
                  <span className="font-semibold text-accentone">Preprint</span>
                  : November 7 2023
                </li>
                <li>
                  <span className="font-semibold text-accentone">Dataset</span>:
                  May 9 2023
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1">
                A survey of researchers’ needs and priorities for data sharing
              </h3>
              <p className="text-gray-700 mb-2">
                Iain Hrynaszkiewicz, James Harney, Lauren Cadwallader
              </p>
              <ul className="space-y-1">
                <li>
                  <span className="font-semibold text-accentone">Article</span>:
                  October 13 2021
                </li>
                <li>
                  <span className="font-semibold text-accentone">Preprint</span>
                  : February 22 2021
                </li>
                <li>
                  <span className="font-semibold text-accentone">Dataset</span>:
                  February 8 2021
                </li>
              </ul>
            </div>
          </div>
        </section>

        <SectionLine width="w-full" />
        <section className="section">
          <div className="sectionContainer px-[1rem] lg:px-0 space-y-8">
            {/* Section Title */}
            <div>
              <h2 className="text-xl font-bold text-accentone">Open code</h2>
            </div>

            {/* Article 1 */}
            <div className="space-y-2">
              <h3 className="font-bold">
                A survey of researchers’ code sharing and code reuse practices,
                and assessment of interactive notebook prototypes
              </h3>
              <p className="text-sm text-gray-700">
                Lauren Cadwallader, Iain Hrynaszkiewicz
              </p>
              <div className="grid grid-cols-3 gap-4 text-accentone font-semibold text-sm">
                <div>
                  <a href="#">Article</a>
                  <p className="text-black font-normal">August 22 2022</p>
                </div>
                <div>
                  <a href="#">Preprint</a>
                  <p className="text-black font-normal">February 22 2022</p>
                </div>
                <div>
                  <a href="#">Dataset</a>
                  <p className="text-black font-normal">March 2 2022</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-300" />

            {/* Article 2 */}
            <div className="space-y-2">
              <h3 className="font-bold">
                Advancing code sharing in the computational biology community
              </h3>
              <p className="text-sm text-gray-700">
                Lauren Cadwallader, Feilim Mac Gabhann, Jason Papin, Virginia E.
                Pitzer
              </p>
              <div className="grid grid-cols-3 gap-4 text-accentone font-semibold text-sm">
                <div>
                  <a href="#">Editorial</a>
                  <p className="text-black font-normal">June 2 2022</p>
                </div>
                <div>
                  <a href="#">Dataset</a>
                  <p className="text-black font-normal">February 3 2022</p>
                </div>
                <div>
                  <a href="#">Code</a>
                  <p className="text-black font-normal">May 27 2022</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-300" />

            {/* Article 3 */}
            <div className="space-y-2">
              <h3 className="font-bold">
                Code Sharing Survey 2020 – PLOS Computational Biology
              </h3>
              <p className="text-sm text-gray-700">
                Iain Hrynaszkiewicz, James Harney, Lauren Cadwallader
              </p>
              <div className="grid grid-cols-3 gap-4 text-accentone font-semibold text-sm">
                <div>
                  <a href="#">Dataset</a>
                  <p className="text-black font-normal">March 20 2021</p>
                </div>
                <div>
                  <a href="#">Preprint</a>
                  <p className="text-black font-normal">April 28 2021</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionLine width="w-full" />
        <section className="section">
          <div className="sectionContainer px-[1rem] lg:px-0 space-y-8">
            {/* Section Title */}
            <div>
              <h2 className="text-xl font-bold text-accentone">Open code</h2>
            </div>

            {/* Article 1 */}
            <div className="space-y-2">
              <h3 className="font-bold">
                A survey of researchers’ code sharing and code reuse practices,
                and assessment of interactive notebook prototypes
              </h3>
              <p className="text-sm text-gray-700">
                Lauren Cadwallader, Iain Hrynaszkiewicz
              </p>
              <div className="grid grid-cols-3 gap-4 text-accentone font-semibold text-sm">
                <div>
                  <a href="#">Article</a>
                  <p className="text-black font-normal">August 22 2022</p>
                </div>
                <div>
                  <a href="#">Preprint</a>
                  <p className="text-black font-normal">February 22 2022</p>
                </div>
                <div>
                  <a href="#">Dataset</a>
                  <p className="text-black font-normal">March 2 2022</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-300" />

            {/* Article 2 */}
            <div className="space-y-2">
              <h3 className="font-bold">
                Advancing code sharing in the computational biology community
              </h3>
              <p className="text-sm text-gray-700">
                Lauren Cadwallader, Feilim Mac Gabhann, Jason Papin, Virginia E.
                Pitzer
              </p>
              <div className="grid grid-cols-3 gap-4 text-accentone font-semibold text-sm">
                <div>
                  <a href="#">Editorial</a>
                  <p className="text-black font-normal">June 2 2022</p>
                </div>
                <div>
                  <a href="#">Dataset</a>
                  <p className="text-black font-normal">February 3 2022</p>
                </div>
                <div>
                  <a href="#">Code</a>
                  <p className="text-black font-normal">May 27 2022</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-300" />

            {/* Article 3 */}
            <div className="space-y-2">
              <h3 className="font-bold">
                Code Sharing Survey 2020 – PLOS Computational Biology
              </h3>
              <p className="text-sm text-gray-700">
                Iain Hrynaszkiewicz, James Harney, Lauren Cadwallader
              </p>
              <div className="grid grid-cols-3 gap-4 text-accentone font-semibold text-sm">
                <div>
                  <a href="#">Dataset</a>
                  <p className="text-black font-normal">March 20 2021</p>
                </div>
                <div>
                  <a href="#">Preprint</a>
                  <p className="text-black font-normal">April 28 2021</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchbyPLOS;
