import { Footer, Hero, Navbar } from "@/components";

const OpenSciencePolicy = () => {
  return (
    <div className="transitionss">
      {" "}
      <Navbar />
      <main className={`overflow-hidden`}>
        <Hero
          headingTitle="Open Science and Editorial Policy"
          background={`bg-[url(../../public/aboutMobileImage.png)]    md:bg-[url(../../public/aboutImage.png)]`}
        />

        <section className={`section`}>
          <div className={`sectionContainer max-w-4xl mx-auto px-4 `}>
            <h2 className="text-2xl font-bold text-accentone mb-4">
              Our editorial and open science policies ensure the quality of
              everything we publish
            </h2>
            <p className="text-gray-700 mb-4">
              PLOS journals are committed to publishing research that is robust,
              reliable, and accessible to all. Underpinning our commitment are
              our editorial and open science policies which set high standards
              for the research we publish.
            </p>
            <p className="text-gray-700 mb-8">
              The policies outlined below apply to all PLOS journals to ensure
              best practices in research reporting, safeguard research
              integrity, and enhance transparency. Some journals may have
              additional policies or requirements not outlined here. Authors,
              editors, and reviewers should consult the relevant PLOS journal
              policy page for specific detail.
            </p>

            <h3 className="text-xl font-bold text-accentone mb-2">
              Editorial policy
            </h3>
            <p className="text-gray-700">
              We set high standards for quality, ethics and research integrity.
              Our editorial policies ensure everything we publish meets a high
              bar for trustworthiness and academic rigor.
            </p>
          </div>
        </section>

        <section className={`section`}>
          <div className={`sectionContainer max-w-4xl mx-auto px-4 `}>
            <div className="border border-gray-300 rounded-md mb-4">
              <details open className="group p-4">
                <summary className="cursor-pointer font-semibold text-accentone text-lg">
                  Best practices in research reporting
                </summary>
                <div className="mt-2 text-gray-700">
                  <p className="mb-2">
                    PLOS has worked with experts around the world in developing
                    policies which set high international standards and best
                    practices for research reporting of all study types across
                    all fields of research.
                  </p>
                  <p className="mb-2">
                    Learn more about our
                    <a href="#" className="text-accentone underline ml-1">
                      research reporting policies
                    </a>{" "}
                    including:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Ethical oversight</li>
                    <li>Inclusivity in global research</li>
                    <li>Reporting research protocols</li>
                    <li>
                      Reporting guidance for specific research resources and
                      study types
                    </li>
                    <li>Statistical reporting</li>
                    <li>Territorial descriptions</li>
                  </ul>
                </div>
              </details>
            </div>

            {/* Accordion Items */}
            {[
              "Human subjects research",
              "Animal research",
              "Competing interest",
              "Disclosure of funding sources",
              "Complementary research",
              "Ethical publishing practice",
              "Authorship",
              "Editorial Notes, Corrections, Expressions of Concern, and Retractions",
              "Licenses and copyright",
            ].map((title, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-md mb-2"
              >
                <details className="group p-4">
                  <summary className="cursor-pointer text-accentone font-medium">
                    {title}
                  </summary>
                  <div className="mt-2 text-sm text-gray-600">
                    {/* Placeholder for real content */}
                    <p>
                      Details about <strong>{title}</strong> will go here.
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OpenSciencePolicy;
