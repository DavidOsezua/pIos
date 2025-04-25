import JournalCategoryLayout from "@/layout/JournalCategoryLayout";
import React from "react";

type Props = {};

const Instruction = (props: Props) => {
  return (
    <JournalCategoryLayout>
      <div className="p-6 max-w-5xl mx-auto text-gray-800">
        <h1 className="text-3xl font-semibold mb-2">Submit Now</h1>
        <p className="text-lg mb-6">
          Your step-by-step guide to the submission form
        </p>

        <p className="mb-4 text-sm italic text-gray-600">
          Keep this page open for reference as you complete each task in the
          submission form. The form has 7 major sections, which are outlined
          below.
        </p>
        <p className="mb-6 text-sm italic text-gray-600">
          After you provide the required information, Editorial Manager will
          compile your files into a PDF to send to the journal.
        </p>

        {/* Step progress */}
        <div className="flex items-center flex-wrap justify-between mb-8">
          {[
            "Article Type Selection",
            "Attach Files",
            "General Information",
            "Review Preferences",
            "Additional Information",
            "Comments",
            "Manuscript Data",
          ].map((step, i) => (
            <div key={i} className="flex flex-col  items-center text-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  i === 0
                    ? "bg-green-500 border-green-500 text-white"
                    : "border-blue-500 text-blue-500"
                }`}
              >
                {i + 1}
              </div>
              <span className="mt-1 text-xs w-20 break-words">{step}</span>
            </div>
          ))}
        </div>

        {/* Instructions box */}
        <div className="bg-gray-100 border p-4 rounded-md mb-6 text-sm">
          <p>
            Sign in to the{" "}
            <a className="text-blue-600 underline" href="#">
              Editorial Manager
            </a>
            , and click Submit New Manuscript
          </p>
          <p className="mt-2">
            Not sure if you're ready? <br />
            Check the{" "}
            <a className="text-blue-600 underline" href="#">
              submission requirements
            </a>
            .
          </p>
          <p className="mt-2">
            Waiting to hear back about an existing submission? <br />
            <a className="text-blue-600 underline" href="#">
              Email the Journal
            </a>
            . To respond to a technical check request, follow the instructions
            in the email from PLOS.
          </p>
        </div>

        {/* Submission Steps */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Submission Steps</h2>
          <h3 className="text-[1.5rem] font-bold mb-2">
            Article Type Selection
          </h3>
          <p className="mb-4 text-sm">
            Follow the on-screen instructions to select the appropriate article
            type:
          </p>
          <ul className=" list-inside text-sm space-y-2 mb-6">
            <li>
              <strong>Research Article:</strong> rreports the results of
              original primary research, including quantitative and qualitative
              studies, methods and software studies, systematic reviews, and
              other work.
            </li>
            <li>
              <strong>Clinical Trial:</strong> research that prospectively
              assigns human participants to one or more health-related
              interventions to evaluate the effects on health outcomes.
            </li>
            <li>
              <strong>Registered Report Protocol:</strong> reports a study’s
              rationale, proposed methodology for data collection and analysis.
              Registered Report Protocols undergo peer-review to ensure that the
              planned research will meet the PLOS ONE publication criteria.
            </li>
            <li>
              <strong>Registered Report:</strong> primary research articles that
              describe the findings from a study preregistered as a Registered
              Report Protocol. After data collection, the Registered Report
              manuscript includes the Introduction and Methods from the original
              Registered Report Protocol plus the Results and Discussion
              outlining the findings and their interpretation. Available only as
              follow-up to a published PLOS ONE Registered Report Protocol.
            </li>
            <li>
              <strong>Lab Protocol:</strong> describes verified methodologies
              and consists of a protocol posted to the protocols.io platform and
              a peer- reviewed PLOS ONE article.
            </li>
            <li>
              <strong>Study Protocol:</strong> describes detailed plans for
              research projects that have not yet generated results.
            </li>
          </ul>
          <p className="text-sm mb-6">
            All primary research submissions are subject to the same publication
            criteria , but may require slightly different information in the
            submission form.{" "}
            <a className="text-blue-600 underline" href="#">
              same publication criteria
            </a>
            ...
          </p>

          <h3 className="text-[1.5rem] font-bold mb-2">Attach Files</h3>
          <p className="text-sm mb-2">
            Upload the following submission files individually:
          </p>
          <ul className="list-disc list-inside text-sm space-y-1 mb-4">
            <li>Cover letter</li>
            <li>Manuscript (in DOC, DOCX, RTF)</li>
            <li>Figures</li>
            <li>
              Supporting information (including{" "}
              <a className="text-blue-600 underline" href="#">
                supporting documentation for specific study types
              </a>
              )
            </li>
          </ul>
          <p className="text-sm">
            For each uploaded file, choose the item <strong>Type</strong> from
            the dropdown menu. Enter or edit the <strong>author</strong>{" "}
            description...
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Figures</h3>
          <p className="text-sm mb-2">
            Upload figures in TIFF or EPS format, at a 300-600 ppi resolution,
            and not exceeding 10MB in size. Supporting information files are
            acceptable in any format.
          </p>
          <p className="text-sm mb-4">
            Before you upload, use{" "}
            <a href="#" className="text-blue-600 underline">
              NAAS
            </a>{" "}
            to check that the figures meet our requirements.
          </p>

          <h3 className="text-xl font-semibold mb-2">LaTeX</h3>
          <p className="text-sm mb-4">
            Upload{" "}
            <a href="#" className="text-blue-600 underline">
              LaTeX manuscripts
            </a>{" "}
            in PDF format. If the article is accepted for publication, the .tex
            files will be required.
          </p>

          <h3 className="text-xl font-semibold mb-2">Preprint PDF</h3>
          <p className="text-sm mb-2">
            PLOS offers the option to have your submission forwarded to{" "}
            <a href="#" className="text-blue-600 underline">
              bioRxiv
            </a>{" "}
            or{" "}
            <a href="#" className="text-blue-600 underline">
              medRxiv
            </a>{" "}
            for consideration for posting as a preprint. You will have a chance
            to opt in on the Additional Information screen.
          </p>
          <p className="text-sm mb-6">
            If you plan to participate, you may upload a preprint PDF now, using
            the Preprint PDF item type. Alternatively, PLOS ONE can
            automatically compile a preprint PDF suitable for bioRxiv or medRxiv
            from the manuscript and figure files included in your submission.
          </p>

          <h3 className="text-[1.5rem] font-bold mb-2">General Information</h3>
          <p className="text-sm mb-2">
            <strong>Category:</strong> Select one of the categories provided
            that most closely matches the research area discussed in the
            manuscript.
          </p>
          <p className="text-sm mb-6">
            <strong>Keywords:</strong> Add keywords to help expedite processing
            of your manuscript (optional). You will not have an opportunity to
            make changes, so make sure to add concise, accurate keywords now.
          </p>

          <h3 className="text-[1.5rem] font-bold mb-2">Review Preferences</h3>
          <p className="text-sm mb-6">
            Provide the names of any Editors or reviewers who should not assess
            the submission, and give the reason for opposition. Make sure to
            clearly indicate if the individual is an Editor in the explanation.
            <br />
            The editorial team will respect these requests as long as they do
            not interfere with the objective and thorough assessment of the
            submission.
          </p>
        </section>

        <section className="mt-10">
          <h3 className="text-[1.5rem] font-bold mb-2">
            Additional Information
          </h3>
          <h2 className="text-1xl font-semibold mb-4">Required Statements</h2>
          <p className="text-sm mb-4">
            Check the boxes to indicate that you have read and agree with the 5
            required statements regarding PLOS Editorial and Publishing
            Policies:
          </p>
          <ul className="list-disc list-inside text-sm mb-6 text-blue-600 space-y-2">
            <li>
              <a href="#">Reporting requirements and data availability</a>
            </li>
            <li>
              <a href="#">Consideration of related manuscripts</a>
            </li>
            <li>
              <a href="#">Contributors named in the Acknowledgments</a>
            </li>
            <li>
              <a href="#">Authorship</a>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            United States Government employee
          </h3>
          <p className="text-sm mb-4">
            Specify if any of the authors are employees of the US Government. If
            accepted, the article will use a{" "}
            <a href="#" className="text-blue-600 underline">
              CC0 license
            </a>
            .
          </p>

          <h3 className="text-xl font-semibold mb-2">Financial disclosure</h3>
          <p className="text-sm mb-2">
            Describe the sources of funding that supported the work, if any, and
            indicate whether they played a role at any point in the research or
            publication process. To draft the statement, consult the{" "}
            <a href="#" className="text-blue-600 underline">
              disclosure of funding sources policy
            </a>{" "}
            and follow the in-system instructions.
          </p>
          <p className="italic text-xs mb-6">
            This information will appear in the published article, if accepted.
            Ensure it is detailed and accurate.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Competing interests statement
          </h3>
          <p className="text-sm mb-2">
            Declare any author affiliations or relationships that could be
            viewed as potential competing interests. To draft the statement,
            consult the{" "}
            <a href="#" className="text-blue-600 underline">
              competing interests policy
            </a>{" "}
            and follow the in-system instructions.
          </p>
          <p className="italic text-xs mb-6">
            This information will appear in the published article, if accepted.
            Ensure it is detailed and accurate.
          </p>

          <h3 className="text-xl font-semibold mb-2">Ethics statement</h3>
          <p className="text-sm mb-2">
            If the study made use of human or animal subjects and/or tissue, you
            must provide an ethics statement. Make sure this information exactly
            matches the ethics statement included in the manuscript and that it
            fulfills our reporting requirements for{" "}
            <a href="#" className="text-blue-600 underline">
              human subjects research
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 underline">
              animal research
            </a>
            .
          </p>
          <p className="italic text-xs mb-6">
            We will evaluate your ethics statement to ensure that it meets our
            standards. Include as much information as possible.
          </p>

          <h3 className="text-xl font-semibold mb-2">Figure guidelines</h3>
          <p className="text-sm mb-4">
            Confirm that the figures comply with our{" "}
            <a href="#" className="text-blue-600 underline">
              image preparation guidelines
            </a>
            , including those on{" "}
            <a href="#" className="text-blue-600 underline">
              image manipulation
            </a>
            .
          </p>

          <h3 className="text-xl font-semibold mb-2">Copyrighted figures</h3>
          <p className="text-sm mb-2">
            If any of the images included in the submission fall under copyright
            or were adapted from images under copyright, provide the following
            additional details:
          </p>
          <ul className="list-disc list-inside text-sm space-y-1 mt-2 mb-6">
            <li>
              <strong>Image source</strong>
            </li>
            <li>
              <strong>Permissions</strong> received from the copyright holder to
              publish under a CC BY license (CC0 for US government employees)
            </li>
            <li>
              <strong>For any adapted images</strong>, upload a copy of the
              original figure on the Attach Files screen
            </li>
          </ul>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
          <p className="text-sm mb-4">
            Enter any comments that you would like to send to the journal
            office.{" "}
            <span className="font-semibold">
              These comments will not be visible to Editors or reviewers
            </span>{" "}
            or appear in the published article if accepted.
          </p>
          <p className="text-sm mb-6">
            If this manuscript has been returned to you with a request for
            corrections or clarifying information (e.g. about images under
            copyright, competing interests), provide a response here as directed
            in the email you received from the journal.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Manuscript Data</h2>
          <p className="text-sm mb-2">
            Editorial Manager will extract details from the manuscript to gather
            the following information. Verify that they’re correct, and fill in
            any missing details:
          </p>
          <ul className="list-disc list-inside text-sm mb-6 ml-4">
            <li>Title</li>
            <li>Abstract</li>
            <li>Author list (see instructions below)</li>
            <li>Funding information</li>
          </ul>

          <div className="border-2 border-blue-400 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-2">Author list</h3>
            <p className="text-sm mb-2">
              Enter each author's name, email address, institutional
              affiliation, and{" "}
              <a href="#" className="text-blue-600 underline">
                contributions
              </a>
              . Ensure authors are listed in the same order as the manuscript.
            </p>
            <p className="text-sm mb-2">
              Do not list group authors here. Provide the names of group authors
              and consortia in the manuscript and in the{" "}
              <a href="#" className="text-blue-600 underline">
                group author question
              </a>{" "}
              on the Additional Information screen.
            </p>

            <div className="mt-4">
              <h4 className="font-semibold">Corresponding author</h4>
              <p className="text-sm mb-2">
                The submitting author is automatically added to the author list
                and given the role of corresponding author in the submission
                system. If this author will not be available for an extended
                period of time, email{" "}
                <a
                  href="mailto:plosone@plos.org"
                  className="text-blue-600 underline"
                >
                  plosone@plos.org
                </a>
                .
              </p>
              <p className="text-sm mb-2">
                You can designate different corresponding authors on the
                manuscript who will receive post-publication correspondence if
                the submission is accepted.
              </p>
              <p className="text-sm mb-2">
                <strong>Change the corresponding author:</strong> To transfer
                the role to another author in the list, click the pencil icon
                next to the author’s name, and check “This is the corresponding
                author.”
              </p>
              <p className="text-sm">
                Read more about designating corresponding authors and
                corresponding author responsibilities.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Send to PLOS</h2>
          <p className="text-sm mb-2">
            When you supply all requested information, click{" "}
            <span className="font-semibold">Build PDF for Approval</span> on the
            final screen. The system will merge the submission files into a PDF
            for your review. Click{" "}
            <span className="font-semibold">Approve</span> to send it to the
            journal.
          </p>
          <p className="text-sm mb-2">
            Congratulations! You’re done. You will receive a confirmation
            message with a manuscript number to track the submission’s progress.
          </p>
          <p className="text-sm mb-6">
            <strong>Send it later…</strong>
            <br />
            If you’re not ready to send the file now, you can save it for later.
            To continue, sign into Editorial Manager and click
            <span className="italic">
              Submission Waiting for Author’s Approval
            </span>{" "}
            on the main menu.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Revised Manuscripts</h2>
          <p className="text-sm mb-6">
            Submitting a revision? Read the{" "}
            <a href="#" className="text-blue-600 underline">
              instructions for revised manuscripts
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold mb-4">Help</h2>
          <p className="text-sm">
            Questions about the submission process? Email{" "}
            <a
              href="mailto:plosone@plos.org"
              className="text-blue-600 underline"
            >
              plosone@plos.org
            </a>
            .
          </p>
        </section>
      </div>
    </JournalCategoryLayout>
  );
};

export default Instruction;
