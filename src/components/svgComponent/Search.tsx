import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={15}
    fill="none"
    {...props}
  >
    <mask id="a" fill="#fff">
      <path d="M.2 7.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0Z" />
    </mask>
    <path
      fill="#01156B"
      d="M7.7 14.333A6.833 6.833 0 0 1 .865 7.5H-.467a8.167 8.167 0 0 0 8.166 8.167v-1.334ZM14.532 7.5a6.833 6.833 0 0 1-6.834 6.833v1.334A8.167 8.167 0 0 0 15.866 7.5h-1.333ZM7.699.667A6.833 6.833 0 0 1 14.533 7.5h1.333A8.167 8.167 0 0 0 7.699-.667V.667Zm0-1.334A8.167 8.167 0 0 0-.467 7.5H.866A6.833 6.833 0 0 1 7.699.667V-.667Z"
      mask="url(#a)"
    />
    <mask id="b" fill="#fff">
      <path d="m14.625 8.617 5.657 5.657-.707.707-5.657-5.657.707-.707Z" />
    </mask>
    <path
      fill="#01156B"
      d="M20.046 14.51 14.39 8.853l-.942.943 5.656 5.657.943-.943Z"
      mask="url(#b)"
    />
  </svg>
);
export { SvgComponent as Search };
