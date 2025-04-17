import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#3D69C5"
      fillOpacity={0.5}
      d="M5 4V1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6H0V4h5Zm2-2v2h6V2H7Z"
    />
  </svg>
);
export { SvgComponent as Delete };
