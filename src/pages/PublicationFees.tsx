import { Footer, Hero, Navbar } from "@/components";

const PublicationFees = () => {
  return (
    <div className="transitionss">
      <Navbar />
      <main className={`overflow-hidden`}>
        <Hero
          headingTitle="Publication fees"
          background={`bg-[url(../../public/pFeeImage.png)]`}
        />

        <section className={`section py-8`}>
          <div className={`sectionContainer max-w-4xl mx-auto px-4`}>
            <p className="text-gray-700 mb-4">
              PLOS employs several business models to support equitable open
              access. Most open access journals offset publication expenses –
              including the cost of peer review management, journal production,
              and online hosting and archiving – by charging a fee for each
              article published (APC). Our partnerships with institutions and
              funders aim to simplify the process for authors and reduce the
              burden of cost.
            </p>

            <p className="text-gray-700 mb-6">
              Publication fees vary by journal and are payable upon article
              acceptance. Fees are subject to change and charged at the
              applicable rates effective on your submission date.
            </p>

            <button className="bg-accentone text-white px-6 py-2 font-medium rounded hover:bg-accentone/90 transition">
              Pay Invoice
            </button>
          </div>
        </section>

        <section className={`section py-8`}>
          <div className={`sectionContainer max-w-4xl mx-auto px-4`}>
            <h2 className="text-2xl font-bold text-accentone mb-2">
              Future of open access
            </h2>

            <p className="font-semibold text-gray-800 mb-4">
              We’re working alongside researchers, funders and institutions to
              reimagine more equitable and sustainable models for open access
              publishing.
            </p>

            <p className="text-gray-700 mb-4">
              All PLOS journals provide APC-alternative models for institutions
              to support their authors’ open access publication goals.
              Institutional partnerships can eliminate the cost and management
              of publication fees for many PLOS authors.
            </p>

            <p className="text-gray-700 mb-6">
              Find out if your institution is one of our
              <a
                href="#"
                className="text-accentone underline hover:text-accentone/90"
              >
                Institutional Partners
              </a>
              .
            </p>

            <button className="bg-accentone text-white px-6 py-2 font-medium rounded hover:bg-accentone/90 transition">
              What other fee assistance options are available?
            </button>
          </div>
        </section>

        <section className={`section py-8`}>
          <div className={`sectionContainer max-w-6xl mx-auto px-4`}>
            <h2 className="text-2xl font-bold text-accentone mb-2">
              Current fees
            </h2>

            <p className="text-gray-700 mb-6">
              For researchers not currently included in an institutional
              partnership model or covered by our
              <a
                href="#"
                className="text-accentone underline hover:text-accentone/90"
              >
                Research4Life program
              </a>
              , our individual publication fees are listed below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800">
              <div>
                <h3 className="font-semibold mb-2">PLOS One</h3>
                <ul className="space-y-1">
                  <li>Registered Report Protocol $1,780</li>
                  <li>Registered Report Article $1,946</li>
                  <li>Lab Protocols $1,477</li>
                  <li>Study Protocols $2,382</li>
                  <li>All other articles $2,382</li>
                </ul>

                <h3 className="font-semibold mt-6 mb-2">PLOS Climate</h3>
                <p>Research Article $2,496</p>

                <h3 className="font-semibold mt-6 mb-2">PLOS Digital Health</h3>
                <p>Research Article $3,043</p>

                <h3 className="font-semibold mt-6 mb-2">PLOS Mental Health</h3>
                <p>Research Article $2,496</p>

                <h3 className="font-semibold mt-6 mb-2">PLOS Water</h3>
                <p>Research Article $2,496</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">PLOS Complex Systems</h3>
                <p>Research Article $3,043</p>

                <h3 className="font-semibold mt-6 mb-2">PLOS Genetics</h3>
                <p>Research Article $3,043</p>

                <h3 className="font-semibold mt-6 mb-2">
                  PLOS Neglected Tropical Diseases
                </h3>
                <p>Research Article $2,670</p>

                <h3 className="font-semibold mt-6 mb-2">PLOS Medicine</h3>
                <p>Research Article $6,460</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  PLOS Computational Biology
                </h3>
                <p>Research Article $3,043</p>

                <h3 className="font-semibold mt-6 mb-2">
                  PLOS Global Public Health
                </h3>
                <p>Research Article $2,496</p>

                <h3 className="font-semibold mt-6 mb-2">PLOS Pathogens</h3>
                <ul className="space-y-1">
                  <li>Research Article $3,043</li>
                  <li>Short Reports $3,043</li>
                </ul>

                <h3 className="font-semibold mt-6 mb-2">PLOS Biology</h3>
                <ul className="space-y-1">
                  <li>Research Article $5,500</li>
                  <li>Pre-registered Research Article $5,500</li>
                  <li>Short Reports $5,500</li>
                  <li>Methods Paper $5,500</li>
                  <li>Meta-Research Article $5,500</li>
                  <li>Magazine Piece $1,675</li>
                </ul>

                <h3 className="font-semibold mt-6 mb-2">
                  PLOS Sustainability and Transformation
                </h3>
                <p>Research Article $2,490</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-6">
              Fees are subject to change and charged at the applicable rates
              effective on the submission date.
            </p>
          </div>
        </section>

        <section className={`section`}>
          <div className={`sectionContainer  max-w-5xl mx-auto px-4 py-8`}>
            <h2 className="text-2xl font-bold text-accentone mb-4">
              Open access funding support
            </h2>
            <p className="text-gray-700 mb-6">
              There is growing momentum to connect open access publishing
              through funding initiatives. Globally, authors benefit from the
              increasing availability of institutional, government, and
              foundation open access funds. Funding assistance for publication
              fees are available from many organizations, including PLOS.
            </p>

            <h3 className="font-semibold text-accentone mb-2">
              Institutional open access funds
            </h3>
            <p className="text-gray-700 mb-4">
              Many institutions already support their researchers by setting
              aside financial resources to cover or reduce the cost of their own
              open access publications.
            </p>
            <p className="text-gray-700 mb-4">
              If you do not see your institution on our list of
              <a href="#" className="text-accentone underline ml-1">
                Institutional Account Participants
              </a>
              , contact your librarian to see if there are other support options
              available to you.
            </p>
            <p className="text-gray-700 mb-4">
              You can also encourage your institution to partner directly with
              PLOS to support all future publications in our journals. Simply
              fill out this form and we’ll do the rest.
            </p>
            <p className="text-gray-700 mb-6">
              Let your institution know you want their support.
            </p>

            <h3 className="font-semibold text-accentone mb-2">
              Funder fee support
            </h3>
            <p className="text-gray-700 mb-4">
              More and more funders are encouraging researchers to publish in
              open access journals where their work can be read, reused, and
              shared by all. Contact your funder directly to find out if they
              allow fees to be included as line items on a grant or provide
              specific article processing grants.
            </p>
            <p className="text-gray-700 mb-6">
              All PLOS journals comply with major funder requirements for open
              access sharing so authors don’t need to worry about their
              article’s eligibility.
            </p>

            <h3 className="text-lg font-bold text-accentone mb-2">
              We believe that lack of funds should not be a barrier to open
              access publication
            </h3>
            <p className="text-gray-700 mb-4">
              PLOS is working to lower financial barriers to publication through
              our
              <a href="#" className="text-accentone underline ml-1">
                institutional partnership
              </a>{" "}
              models. We also provide direct support to authors through our
              Research4Life and Publication Fee Assistance programs.
            </p>

            <h3 className="font-semibold text-accentone mb-2">Research4Life</h3>
            <p className="text-gray-700 mb-4">
              Publication in any PLOS journal is free for authors whose research
              is funded primarily (50% or more of the work contained within the
              article) by an institution located in a Research4Life Group A
              country.
            </p>
            <p className="text-gray-700 mb-4">
              Authors whose research funder is based in a Research4Life Group B
              country can publish for free in PLOS Biology, PLOS Climate, PLOS
              Global Public Health, PLOS Medicine, PLOS Mental Health, PLOS
              Sustainability and Transformation and PLOS Water. For all other
              journals, the publication fee will be reduced 50%.
            </p>
            <p className="text-gray-700 mb-6">
              Use the button below to search whether the country where your
              institution is based is tool that will show if you qualify for
              support.
            </p>

            <button className="bg-accentone text-white px-6 py-2 font-medium rounded hover:bg-accentone/90 transition mb-6">
              Check to see if your country qualifies
            </button>

            <h3 className="font-semibold text-accentone mb-2">
              PLOS Publication Fee Assistance Program
            </h3>
            <p className="text-gray-700 mb-4">
              The PLOS Publication Fee Assistance (PFA) program was created for
              authors unable to pay all or part of their publication fees and
              who can demonstrate financial need.
            </p>
            <p className="text-gray-700 mb-4">
              An author can apply for PFA when submitting an article for
              publication. A decision is usually sent to the author within 10
              business days. PLOS considers applications on a case-by-case
              basis.
            </p>
            <p className="text-gray-700 mb-4">
              PLOS prioritizes assistance for authors with no external or
              internal funding. Information about policies for fee assistance
              and discount eligibility is available on each journal’s site.
            </p>

            <p className="text-gray-700 text-sm">
              Authors should check all alternative funding sources before
              applying for PFA. The application form includes questions on the
              availability of alternate funding sources such as the author’s or
              co-author’s institution, institutional library, government
              agencies and research funders. Funding disclosure statements
              provided by authors will be used to prioritize PFA application
              review. Assistance must be formally applied for at submission.
              Requests made during the review process or after acceptance will
              not be considered unless the author’s financial situation has
              changed or funding was unexpectedly withdrawn.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PublicationFees;
