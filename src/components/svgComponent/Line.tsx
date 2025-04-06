const SvgComponent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height={6} fill="none">
    <mask id="a" fill="#fff">
      <path d="M.5.4h1185v5H.5v-5Z" />
    </mask>
    <path fill="#01156B" d="M1185.5.733H.5v9.334h1185V.733Z" mask="url(#a)" />
  </svg>
);
export { SvgComponent as Line };
