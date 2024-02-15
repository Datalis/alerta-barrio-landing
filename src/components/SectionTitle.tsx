export default function SectionTitle({
    children,
    }: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <h3 className="text-[38px] font-bold">
        {children}
      </h3>
      <svg
        className="absolute -bottom-4 -left-10 lg:-left-14 -right-7"
       
        viewBox="0 0 149.47546 13.248223"
        version="1.1"
        id="svg1"
      >
        <defs id="defs1">
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath3471">
            <path
              d="M 0,5975.78 H 1200 V 0 H 0 Z"
              transform="translate(-743.73922,-5230.0021)"
              id="path3471"
            />
          </clipPath>
        </defs>
        <g
            id="layer-MC6"
            transform="matrix(0.26458333,0,0,0.26458334,-136.92899,-250.31878)"
        >
            <path
                id="path3470"
                d="m 0,0 h 58.057 c 4.815,0 8.718,3.903 8.718,8.718 0,4.815 -3.903,8.718 -8.718,8.718 h -403.592 c -4.815,0 -8.718,3.903 -8.718,8.717 v 0 c 0,4.815 3.903,8.718 8.718,8.718 l 18.076,10e-4"
                style={{fill: "none", stroke: "#b7b7b7", strokeWidth: 2.682, strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, strokeDasharray: "none", strokeOpacity: 1}}
                transform="matrix(1.3333333,0,0,-1.3333333,991.65227,994.37067)"
                clipPath="url(#clipPath3471)"
            />
        </g>
      </svg>
    </div>
  );
}
