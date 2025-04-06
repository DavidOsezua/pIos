import React from "react";

type Props = {
  headingTitle: string;
  background: string;
};

const Hero = ({ headingTitle, background }: Props) => {
  return (
    <section
      className={`${background} h-[500px] w-full bg-no-repeat bg-cover pg-center mt-[3rem] `}
    >
      <div className=" flex h-[500px] px-6  lg:px-0 sectionContainer items-center">
        <h1
          className={`text-white w-[420px] h-[160px] font-['Open_Sans'] not-italic font-extrabold text-[33.8191px] leading-[55px]`}
        >
          {headingTitle}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
