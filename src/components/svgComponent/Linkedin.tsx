const SvgComponent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} fill="none">
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path
          fill="#fff"
          d="M3.7 5.199c-1.4 0-2.4-1-2.4-2.2 0-1.2.9-2.2 2.4-2.2 1.4 0 2.3.9 2.4 2.2-.1 1.2-1 2.2-2.4 2.2Zm2 2v12.3h-4v-12.3h4Zm6.3 12.2H8v-9.5s-.1-2.4-.1-2.8h3.9l.1 1.7c.8-1.2 2-2.1 3.6-2.1 2.8 0 4.8 2 4.8 5.5v7.1h-4v-6.7c0-2-1-2.8-2.2-2.8-1.2 0-2.2.8-2.2 2.4v7.2h.1Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.8.1h20v20H.8z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M.8.1h20v20H.8z" />
      </clipPath>
    </defs>
  </svg>
);
export { SvgComponent as Linkedin };
