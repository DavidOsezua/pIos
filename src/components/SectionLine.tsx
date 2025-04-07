type Props = {
  width: string;
};

const SectionLine = ({ width }: Props) => {
  return <div className={`bg-[#E7E6E6] ${width} h-[2px]  mx-auto`}></div>;
};

export default SectionLine;
