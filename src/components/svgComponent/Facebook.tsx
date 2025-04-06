import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path
          fill="#fff"
          d="M20.2 1.6v16.6c0 .6-.5 1.2-1.2 1.2h-4.8V12h2.4l.4-2.7h-2.8V7.2c0-.8.4-1.2 1.2-1.2h1.8V3.5s-.8-.1-1.9-.1c-2.6 0-3.9 1.4-3.9 3.6v2.4H9v2.7h2.4v7.4h-9c-.6 0-1.2-.5-1.2-1.2V1.6C1.2 1 1.7.4 2.4.4H19c.7 0 1.2.6 1.2 1.2Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.7.1h20v20H.7z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M.7.1h20v20H.7z" />
      </clipPath>
    </defs>
  </svg>
);
export { SvgComponent as Facebook };
