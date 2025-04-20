import { Footer, Hero, Navbar } from "@/components";
import { CategoryWithJournals } from "@/interface";
import { api, BASEURL } from "@/services/endpoint";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ResearchJournals = () => {
  const [categories, setCategories] = useState<CategoryWithJournals[]>([]);

  useEffect(() => {
    api.get("/category").then((res) => {
      const data = res.data as CategoryWithJournals[];
      setCategories(
        data.filter((datum) => Object.keys(datum.journals).length > 0)
      );
    });
  }, []);

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
              {categories.map((category) => {
                return (
                  <div className="space-y-1">
                    <h3 className="font-semibold text-accentone">
                      {category.name}
                    </h3>
                    <div className="w-full h-1 bg-emerald-800 rounded" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {categories.map((category) => {
          return (
            <section className={`pb-[1rem]`}>
              <div className="sectionContainer px-4 lg:px-0   space-y-8">
                {/* Section Title */}
                <div>
                  <h2 className="text-xl font-bold text-accentone">
                    {category.name}
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Journal 1 */}

                  {category.journals.map((item) => (
                    <div className="space-y-3">
                      <img
                        src={`${BASEURL}${item.image}`}
                        alt={item.title}
                        className="w-full  object-cover rounded"
                      />
                      <NavLink
                        to={`/journalcategory/${item.id}`}
                        className="font-bold text-accentone"
                        state={{ name: item.title, image: item.image }}
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
          );
        })}
      </main>
      <Footer />
    </div>
  );
};

export default ResearchJournals;
