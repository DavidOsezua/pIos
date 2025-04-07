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
          <div className={`sectionContainer + max-w-6xl mx-auto px-4 py-12`}>
            <p className="text-sm text-gray-600 mb-2">
              PLOS is a nonprofit organization on a mission to drive open
              science forward with measurable, meaningful change in research
              publishing, policy, and practice.
            </p>

            <p className="text-gray-700 mb-6">
              Building on a strong legacy of pioneering innovation, PLOS
              continues to be a catalyst, reimagining models to meet open
              science principles, removing barriers and promoting inclusion in
              knowledge creation and sharing, and publishing research outputs
              that enable everyone to learn from, reuse and build upon
              scientific knowledge.
            </p>

            <h2 className="text-2xl font-bold text-accentone mb-10">
              We believe in a better future where science is open to all, for
              all
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t-2 pt-8 border-red-500">
              <div>
                <p className="text-gray-800">
                  Researchers openly share all important research outputs and
                  receive recognition for the value of those contributions to
                  science and society.
                </p>
              </div>
              <div>
                <p className="text-gray-800">
                  Knowledge creation is faster and more efficient as outputs are
                  shared and reusable, enabling scrutiny, corrections,
                  collaboration, resulting in time gains and avoiding waste.
                </p>
              </div>
              <div>
                <p className="text-gray-800">
                  Diverse perspectives help make research questions relevant and
                  results trustworthy to diverse communities and society as a
                  whole.
                </p>
              </div>
              <div>
                <p className="text-gray-800">
                  Equitable, sustainable models ensure fair participation and
                  access to knowledge for both the producers and consumers of
                  research and embrace diversity of communities of practice.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`section`}>
          <div className={`sectionContainer max-w-4xl mx-auto px-4 py-12`}>
            <h2 className="text-2xl font-bold text-accentone mb-4">
              A catalytic legacy
            </h2>
            <p className="text-gray-700 mb-4">
              PLOS was founded and built to advance science by transforming how
              scientific knowledge is shared and accessed. We have a history of
              challenging orthodoxy, harnessing under-appreciated trends, and
              addressing unarticulated needs.
            </p>
            <p className="text-gray-700 mb-8">
              Our foundational commitments to effecting positive change are
              enduring and unwavering:
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accentone text-white flex items-center justify-center font-bold">
                  1
                </div>
                <p className="text-gray-800">
                  To accelerate innovation, acting in partnership with others in
                  the ecosystem, to move us closer to our vision of how
                  scientific communications should work.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accentone text-white flex items-center justify-center font-bold">
                  2
                </div>
                <p className="text-gray-800">
                  To be a catalytic publisher, focusing on openness throughout
                  the research cycle and providing distinctive value to
                  significant target markets of researchers, achieving a level
                  of success that anchors our broader influence and encourages
                  adoption of new practices by others.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accentone text-white flex items-center justify-center font-bold">
                  3
                </div>
                <p className="text-gray-800">
                  To steadily increase the resources marshalled behind our
                  vision over time, recognizing that achieving our ultimate
                  goals will require more capital, more influence and more
                  capabilities of many kinds than we or any actor possess today.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`section`}>
          <div className={`sectionContainer max-w-4xl mx-auto px-4 py-12`}>
            <h2 className="text-2xl font-bold text-accentone mb-4">
              A focus on principles, not profits
            </h2>
            <p className="text-gray-700">
              We exist to serve the research enterprise which means our
              priorities are based on the needs of scholars, librarians,
              funders, and institutional leaders, not shareholders. We will not
              waste public money and will do everything we can to ensure our
              services are valuable and cost-effective. Business models are
              structured to make our journals sustainable, and any surplus
              revenue goes toward furthering our open science mission.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ourMission;
