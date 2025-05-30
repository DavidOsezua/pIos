
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={26}
    fill="none"
    {...props}
  >
    <rect width={64} height={26} fill="#9EB4E2" fillOpacity={0.1} rx={8} />
    <mask
      id="a"
      width={16}
      height={10}
      x={6}
      y={8}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 17c3.683 0 6.667-4 6.667-4s-2.984-4-6.666-4c-3.682 0-6.667 4-6.667 4s2.985 4 6.667 4Z"
      />
      <path
        fill="#000"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 14.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
      />
    </mask>
    <g mask="url(#a)">
      <path fill="#9EB4E2" d="M6 5h16v16H6V5Z" />
    </g>
    <path
      fill="#3D69C5"
      d="m36.02 16.228 2.436-7.344h1.308L36.62 17.5h-1.236L32.24 8.884h1.296l2.46 7.344h.024Zm5.844-5.004V17.5h-1.056v-6.276h1.056Zm0-1.14h-1.056v-1.2h1.056v1.2Zm5.852 5.448h1.056c-.024.224-.116.48-.276.768-.096.184-.216.36-.36.528-.136.16-.296.3-.48.42a2.88 2.88 0 0 1-.672.312c-.24.08-.584.12-1.032.12-.864 0-1.548-.292-2.052-.876-.504-.584-.756-1.34-.756-2.268 0-.496.06-.952.18-1.368.12-.424.304-.796.552-1.116.256-.32.572-.568.948-.744.384-.176.828-.264 1.332-.264.888 0 1.56.324 2.016.972.456.648.684 1.544.684 2.688h-4.584c0 .664.152 1.176.456 1.536.312.352.768.528 1.368.528.24 0 .456-.04.648-.12.2-.08.376-.188.528-.324.272-.256.42-.52.444-.792Zm-3.444-1.668h3.492a2.81 2.81 0 0 0-.132-.72 1.638 1.638 0 0 0-.3-.588 1.238 1.238 0 0 0-.528-.408 1.815 1.815 0 0 0-.792-.156c-.232 0-.456.052-.672.156a1.673 1.673 0 0 0-.564.408c-.16.176-.284.38-.372.612a1.887 1.887 0 0 0-.132.696Zm9.122-1.224L52.17 17.5h-1.092l-1.812-6.276h1.152l1.2 4.932h.024l1.212-4.932h1.176l1.224 4.932h.024l1.272-4.932h1.056L55.782 17.5H54.69l-1.272-4.86h-.024Z"
    />
  </svg>
);
export { SvgComponent as View };
