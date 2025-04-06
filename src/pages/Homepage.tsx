import { Button, Footer, Navbar } from "@/components";
import { homePageOpenScience } from "@/data/data";

const Homepage = () => {
  return (
    <div className="transitionss">
      <Navbar />
      <main className={`overflow-hidden`}>
        {/* <Hero
          headingTitle="We believe in a better future where science is open to all, for all"
          background={`bg-[url(homeImage.png)]`}
        /> */}
        <section
          className={` bg-[url(../../public/homeImage.png)] h-[500px] w-full bg-no-repeat bg-cover pg-center mt-[3rem] `}
        >
          <div className=" flex h-[500px] px-6  lg:px-0 sectionContainer items-center">
            <h1
              className={`text-white w-[420px] h-[160px] font-['Open_Sans'] not-italic font-extrabold text-[33.8191px] leading-[55px]`}
            >
              We believe in a better future where science is open to all, for
              all
              {/* {headingTitle} */}
            </h1>
          </div>
        </section>

        <section className={`section`}>
          <div className="sectionContainer px-6 lg:px-0">
            <h3>
              PLOS is a non-profit organization on a mission to drive open
              science forward with measurable, meaningful change in research
              publishing, policy and practice.
            </h3>

            <div>
              <div>
                <h3>A catalyst for better</h3>
                <p>
                  Built on a strong legacy of pioneering innovation, we see the
                  world through a lens of possibility, but we are not interested
                  in change for the sake of change. We believe in better . We
                  exist to serve the research enterprise which means our
                  priorities are based on the needs of scholars, librarians,
                  funders, and institutional leaders, not shareholders. Our
                  vision and mission is at the center of our new brand identity.
                </p>
                <Button>Find out more</Button>
              </div>

              <div>
                <img src="img1.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <div className=" bg-[#E7E6E6] h-[2px] w-[90%] mx-auto"></div>
        <section className={`section`}>
          <div className={`sectionContainer`}>
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

            <div>
              {homePageOpenScience.map((data) => (
                <div>
                  <h2>{data.title}</h2>

                  <h4>{data.subTitle}</h4>

                  <p>{data.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className=" bg-[#E7E6E6] h-[2px] w-[90%] mx-auto"></div>
        <section className={`section`}>
          <div className={`sectionContainer`}>
            <div>
              <img src="img2.png" alt="" />
              <div></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
