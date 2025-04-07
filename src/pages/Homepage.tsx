import { Button, Footer, Hero, Navbar } from "@/components";
import SectionLine from "@/components/SectionLine";
import { homePageOpenScience, navLinks } from "@/data/data";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="transitionss">
      <Navbar />
      <main className={`overflow-hidden`}>
        <Hero
          headingTitle="We believe in a better future where science is open to all, for all"
          background={`bg-[url(../../public/homeImage.png)]`}
        />

        <section className={`section`}>
          <div className="sectionContainer space-y-20 px-6 lg:px-0">
            <h3>
              PLOS is a non-profit organization on a mission to drive open
              science forward with measurable, meaningful change in research
              publishing, policy and practice.
            </h3>

            <div
              className={` space-y-5 md:flex md:flex-row md:justify-between md:items-center`}
            >
              <div className={`space-y-5`}>
                <h3>A catalyst for better</h3>
                <p className={`md:max-w-[540px]`}>
                  Built on a strong legacy of pioneering innovation, we see the
                  world through a lens of possibility, but we are not interested
                  in change for the sake of change. We believe in better . We
                  exist to serve the research enterprise which means our
                  priorities are based on the needs of scholars, librarians,
                  funders, and institutional leaders, not shareholders. Our
                  vision and mission is at the center of our new brand identity.
                </p>
                <Button className={`bg-accentone text-white`}>
                  Find out more
                </Button>
              </div>

              <div>
                <img src="img1.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <SectionLine />

        <section className={`section`}>
          <div className={`sectionContainer space-y-5 px-[1rem]`}>
            <h3>Open science</h3>

            <p>
              PLOS is a mission-driven open science publisher covering all
              scientific disciplines with a focus on fundamental and applied
              research across life, health, sustainability, engineering, and
              technology. W hen you choose a PLOS journal you are putting
              integrity first and supporting an organization committed to
              research that is robust, reliable, and accessible to all. W e
              offer processes to ensure the science is rigorous, practices to
              make sure research is shared and reused, policies that are
              equitable, and innovations in scholarly communications.
            </p>

            <div
              className={`space-y-5 md:flex md:items-center md:justify-between md:gap-6`}
            >
              {homePageOpenScience.map((data) => (
                <div className={`space-y-3`}>
                  <h2>{data.title}</h2>

                  <h4>{data.subTitle}</h4>

                  <p className={`md:max-w-[330px]`}>{data.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionLine />

        <section className={`section  `}>
          <div className={`sectionContainer pt-[8rem]  `}>
            <div className={`relative px-[1rem] md:flex`}>
              <ul
                className={`bg-accentone max-w-[340px] w-full mb-[-4rem] relative z-10 mx-auto  text-white p-12 md:mr-[-10rem] md:h-[240px] md:mt-[4rem]  `}
              >
                {navLinks.map((item) => (
                  <li>
                    <NavLink to={item.path}>{item.link}</NavLink>
                  </li>
                ))}
              </ul>

              <img src="img2.png" alt="" className={`h-[400px] object-cover`} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
