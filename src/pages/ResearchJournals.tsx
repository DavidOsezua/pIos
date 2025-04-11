import { Footer, Hero, Navbar } from "@/components";
import { healthScience, lifeScience, sustainabilityScience } from "@/data/data";
import { NavLink } from "react-router-dom";

const ResearchJournals = () => {
  return (
    <div className="transitionss">
      <Navbar />
      <main className={`overflow-hidden`}>
        <Hero
          headingTitle="Research journals"
          background={`bg-[url(../../public/aboutMobileImage.png)]    md:bg-[url(../../public/aboutImage.png)]`}
        />

        <section className={`section`}>
          <div className="sectionContainer px-4 lg:px-0   space-y-6">
            {/* Header and description */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-accentone">
                Put integrity first by choosing a PLOS journal
              </h2>
              <p className="text-sm text-gray-800 leading-relaxed">
                When it comes to research integrity and scientific rigor, we
                will not compromise. With a focus on fundamental and applied
                research, our journals cover all scientific disciplines across
                life, health, and sustainability. We have processes to ensure
                the science is rigorous, practices to make sure research is
                shared and reused, policies that are equitable, and innovations
                in scholarly communications.
              </p>
              <p className="text-sm text-gray-800">
                Explore our journals, each publishing research in these
                scientific disciplines, below.
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-8">
              <div className="space-y-1">
                <h3 className="font-semibold text-accentone">Life science</h3>
                <div className="w-full h-1 bg-emerald-800 rounded" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-accentone">Health science</h3>
                <div className="w-full h-1 bg-blue-800 rounded" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-accentone">
                  Sustainability science
                </h3>
                <div className="w-full h-1 bg-yellow-300 rounded" />
              </div>
            </div>
          </div>
        </section>

        <section className={`pb-[1rem]`}>
          <div className="sectionContainer px-4 lg:px-0   space-y-8">
            {/* Section Title */}
            <div>
              <h2 className="text-xl font-bold text-accentone">Life science</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Journal 1 */}

              {lifeScience.map((item) => (
                <div className="space-y-3">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full  object-cover rounded"
                  />
                  <NavLink
                    to="/journalcategory"
                    className="font-bold text-accentone"
                  >
                    {item.title}
                  </NavLink>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`pb-[1rem]`}>
          <div className="sectionContainer px-4 lg:px-0   space-y-8">
            {/* Section Title */}
            <div>
              <h2 className="text-xl font-bold text-accentone">
                Health science
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Journal 1 */}

              {healthScience.map((item) => (
                <div className="space-y-3">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full  object-cover rounded"
                  />
                  <h3 className="font-bold text-accentone">{item.title}</h3>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`pb-[1rem]`}>
          <div className="sectionContainer px-4 lg:px-0   space-y-8">
            {/* Section Title */}
            <div>
              <h2 className="text-xl font-bold text-accentone">
                Sustainability Science
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Journal 1 */}

              {sustainabilityScience.map((item) => (
                <div className="space-y-3">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full  object-cover rounded"
                  />
                  <h3 className="font-bold text-accentone">{item.title}</h3>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchJournals;
