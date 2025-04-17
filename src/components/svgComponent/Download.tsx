import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={92}
    height={26}
    fill="none"
    {...props}
  >
    <rect width={92} height={26} fill="#9EB4E2" fillOpacity={0.1} rx={3} />
    <path
      fill="#9EB4E2"
      d="M17.75 10H14.5v4.793l1.647-1.646a.5.5 0 0 1 .706.706l-2.5 2.5a.5.5 0 0 1-.706 0l-2.5-2.5a.5.5 0 0 1 .706-.706l1.647 1.646V10h-3.25a1.752 1.752 0 0 0-1.75 1.75v6.5A1.752 1.752 0 0 0 10.25 20h7.5a1.752 1.752 0 0 0 1.75-1.75v-6.5A1.752 1.752 0 0 0 17.75 10ZM14.5 6.5a.5.5 0 0 0-1 0V10h1V6.5Z"
    />
    <path
      fill="#3D69C5"
      d="M32.972 17.5V8.884h3.492c.552 0 1.052.1 1.5.3.456.2.84.488 1.152.864.312.368.552.812.72 1.332.168.512.252 1.076.252 1.692 0 .52-.064 1.04-.192 1.56-.12.512-.324.988-.612 1.428-.28.432-.66.78-1.14 1.044-.48.264-1.056.396-1.728.396h-3.444Zm1.164-7.62v6.624h2.256c.768 0 1.376-.292 1.824-.876.448-.592.672-1.42.672-2.484s-.228-1.872-.684-2.424c-.456-.56-1.088-.84-1.896-.84h-2.172Zm6.944 4.476c0-.416.06-.82.18-1.212s.3-.748.54-1.068c.24-.32.544-.572.912-.756a2.884 2.884 0 0 1 1.284-.276c.48 0 .904.092 1.272.276.376.184.684.436.924.756.24.312.42.668.54 1.068.12.392.18.796.18 1.212 0 .416-.06.82-.18 1.212s-.3.748-.54 1.068c-.24.32-.548.572-.924.756-.368.184-.792.276-1.272.276s-.908-.092-1.284-.276a2.544 2.544 0 0 1-.912-.756c-.24-.32-.42-.676-.54-1.068a4.117 4.117 0 0 1-.18-1.212Zm1.092 0c0 .24.028.496.084.768.056.272.148.532.276.78.136.248.324.452.564.612.24.16.54.24.9.24s.66-.08.9-.24c.24-.16.428-.364.564-.612.136-.248.228-.508.276-.78.056-.272.084-.528.084-.768s-.028-.496-.084-.768a2.526 2.526 0 0 0-.276-.78 1.722 1.722 0 0 0-.564-.612c-.24-.16-.54-.24-.9-.24s-.66.08-.9.24c-.24.16-.428.364-.564.612-.128.248-.22.508-.276.78a3.817 3.817 0 0 0-.084.768Zm9.276-1.716-1.224 4.86h-1.092l-1.812-6.276h1.152l1.2 4.932h.024l1.212-4.932h1.176l1.224 4.932h.024l1.272-4.932h1.056L53.836 17.5h-1.092l-1.272-4.86h-.024Zm10.257.588V17.5h-1.056v-3.864c0-.568-.1-.984-.3-1.248-.2-.264-.548-.396-1.044-.396-.169 0-.349.032-.54.096a1.585 1.585 0 0 0-.54.336c-.169.152-.309.368-.42.648-.105.272-.157.608-.157 1.008v3.42h-1.056v-6.276h.997v.888h.023c.08-.112.169-.224.264-.336.105-.112.233-.224.385-.336.16-.112.343-.204.551-.276.209-.08.44-.12.697-.12.272 0 .532.032.78.096.255.064.492.18.707.348.216.16.389.384.517.672.128.288.192.644.192 1.068Zm2.636-4.344V17.5h-1.056V8.884h1.056Zm1.22 5.472c0-.416.06-.82.18-1.212s.3-.748.54-1.068c.24-.32.544-.572.912-.756a2.884 2.884 0 0 1 1.284-.276c.48 0 .904.092 1.272.276.376.184.684.436.924.756.24.312.42.668.54 1.068.12.392.18.796.18 1.212 0 .416-.06.82-.18 1.212s-.3.748-.54 1.068c-.24.32-.548.572-.924.756-.368.184-.792.276-1.272.276s-.908-.092-1.284-.276a2.544 2.544 0 0 1-.912-.756c-.24-.32-.42-.676-.54-1.068a4.117 4.117 0 0 1-.18-1.212Zm1.092 0c0 .24.028.496.084.768.056.272.148.532.276.78.136.248.324.452.564.612.24.16.54.24.9.24s.66-.08.9-.24c.24-.16.428-.364.564-.612.136-.248.228-.508.276-.78.056-.272.084-.528.084-.768s-.028-.496-.084-.768a2.526 2.526 0 0 0-.276-.78 1.722 1.722 0 0 0-.564-.612c-.24-.16-.54-.24-.9-.24s-.66.08-.9.24c-.24.16-.428.364-.564.612-.128.248-.22.508-.276.78a3.817 3.817 0 0 0-.084.768Zm6.872-1.224h-.972c.024-.728.26-1.256.708-1.584.448-.336 1.076-.504 1.884-.504.184 0 .396.02.636.06.248.04.5.12.756.24.264.112.484.288.66.528.184.24.276.548.276.924v3.612c0 .248.116.372.348.372.072 0 .188-.016.348-.048v.768l-.132.036a1.516 1.516 0 0 1-.444.084c-.424 0-.712-.084-.864-.252-.144-.176-.228-.412-.252-.708-.272.296-.584.54-.936.732-.344.192-.788.288-1.332.288-.576 0-1.048-.168-1.416-.504-.368-.336-.552-.772-.552-1.308 0-.176.02-.356.06-.54.04-.192.124-.388.252-.588.136-.2.332-.376.588-.528.264-.16.6-.264 1.008-.312l1.74-.216a.623.623 0 0 0 .396-.168c.104-.104.156-.296.156-.576 0-.68-.492-1.02-1.476-1.02-.28 0-.512.04-.696.12a1.078 1.078 0 0 0-.432.288c-.096.12-.168.244-.216.372-.04.128-.072.272-.096.432Zm2.892 2.196v-1.032c-.096.072-.26.136-.492.192-.224.056-.64.124-1.248.204-.16.024-.316.056-.468.096a1.668 1.668 0 0 0-.42.156.931.931 0 0 0-.336.3.866.866 0 0 0-.12.468c0 .352.092.624.276.816.192.184.48.276.864.276.24 0 .476-.036.708-.108.24-.08.452-.184.636-.312.184-.136.328-.292.432-.468.112-.184.168-.38.168-.588Zm8.048-6.444V17.5h-.996v-.864h-.024c-.208.384-.468.656-.78.816a2.27 2.27 0 0 1-1.008.228c-.504 0-.936-.104-1.296-.312a2.555 2.555 0 0 1-.864-.84 3.884 3.884 0 0 1-.456-1.128 5.328 5.328 0 0 1-.144-1.224c0-.912.232-1.66.696-2.244.472-.592 1.112-.888 1.92-.888.264 0 .5.036.708.108.208.064.384.152.528.264.144.112.26.22.348.324.088.096.18.216.276.36l.012.012h.024V8.884h1.056Zm-4.476 5.46c0 .728.144 1.316.432 1.764.288.44.708.66 1.26.66.184 0 .376-.032.576-.096a1.648 1.648 0 0 0 .972-1.008c.112-.28.168-.616.168-1.008 0-.312-.02-.616-.06-.912a2.984 2.984 0 0 0-.24-.84 1.505 1.505 0 0 0-.516-.66c-.224-.168-.516-.252-.876-.252-.384 0-.696.08-.936.24a1.388 1.388 0 0 0-.516.6c-.112.24-.184.484-.216.732a6.096 6.096 0 0 0-.048.78Z"
    />
  </svg>
);
export { SvgComponent as Download };
