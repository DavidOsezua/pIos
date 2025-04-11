// components/Footer.tsx

const FooterTwo = () => {
  return (
    <footer className="bg-[#303030] text-gray-300 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        {/* Column 1 */}
        <div>
          <h4 className="font-semibold mb-2">Publications</h4>
          <ul className="space-y-1">
            <li>PLOS Biology</li>
            <li>PLOS Genetics</li>
            <li>PLOS Computational Biology</li>
            <li>PLOS Digital Health</li>
            <li>PLOS Global Public Health</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <ul className="space-y-1 mt-6 md:mt-0">
            <li>PLOS Medicine</li>
            <li>PLOS Mental Health</li>
            <li>PLOS Neglected Tropical Diseases</li>
            <li>PLOS ONE</li>
            <li>PLOS Pathogens</li>
            <li>PLOS Sustainability and Transformation</li>
            <li>PLOS Water</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <ul className="space-y-1">
            <li>Home</li>
            <li>Blogs</li>
            <li>Collections</li>
            <li>Give Feedback</li>
            <li>LOCKSS</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <ul className="space-y-1">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>About</li>
            <li>Media Inquiries</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-8 text-center text-xs text-gray-400">
        {/* <div className="mb-2">
          <img src="/plos-logo.png" alt="PLOS" className="mx-auto h-8" />{" "}
       
        </div> */}
        <p>
          PLOS is a nonprofit 501(c)(3) corporation, #C2354500, based in
          California, US
        </p>
      </div>
    </footer>
  );
};

export default FooterTwo;
