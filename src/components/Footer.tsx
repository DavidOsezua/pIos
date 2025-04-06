import Button from "./Button";
import { Butterfly } from "./svgComponent/Butterfly";
import { Facebook } from "./svgComponent/Facebook";
import { Linkedin } from "./svgComponent/Linkedin";
import { footerLinks } from "@/data/data";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="section bg-accentone px-5 md:px-0">
      <div
        className={`sectionContainer space-y-9 md:space-y-0 flex flex-col md:flex-row  justify-between`}
      >
        <div className={`space-y-5`}>
          <img src="footerLogo.png" alt="logo" />

          <div className={`flex items-center gap-4`}>
            <Butterfly />
            <Facebook />
            <Linkedin />
          </div>

          <p className="max-w-[240px] text-white">
            PLOS is a nonprofit 501(c)(3) corporation, #C2354500, and is based
            in California, US
          </p>
        </div>

        <div className="flex justify-between gap-[5rem]">
          {footerLinks.map((links) => (
            <ul className={`space-y-2`}>
              {links.firstLinks.map((link) => (
                <li className={`text-white`}>{link}</li>
              ))}
            </ul>
          ))}
        </div>

        <div className={`text-white space-y-3`}>
          <h4 className="font-bold">News & Updates</h4>

          <div className="flex flex-col space-y-3">
            <label>Email</label>
            <input type="text" placeholder="email" className={`bg-white p-2`} />
          </div>

          <p className={`max-w-[400px] md:max-w-[300px]`}>
            PLOS will use your email address to provide news and updates. You
            can find out more about how PLOS processes your data by reading our
            Privacy Policy . You can unsubscribe at any time by clicking the
            unsubscribe link in our emails or by contacting us at
            privacy@plos.org .
          </p>

          <Button className="bg-white text-accentone font-bold">Submit</Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
