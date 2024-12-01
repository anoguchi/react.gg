export default function ReactLogo() {
  return (
    <svg
      id="reactLogo"
      className="reactLogo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 18"
    >
      <circle cx={9.45} cy={9} r={1.55} fill="#231f20" />
      <ellipse
        cx={9.5}
        cy={9}
        rx={8.89}
        ry={3.4}
        fill="none"
        stroke="#231f20"
        strokeMiterlimit={10}
      />
      <ellipse
        cx={9.5}
        cy={9}
        rx={3.4}
        ry={8.89}
        transform="rotate(-32.02 9.505 9.008)"
        fill="none"
        stroke="#231f20"
        strokeMiterlimit={10}
      />
      <ellipse
        cx={9.5}
        cy={9}
        rx={8.89}
        ry={3.4}
        transform="rotate(-60 9.505 8.998)"
        fill="none"
        stroke="#231f20"
        strokeMiterlimit={10}
      />
    </svg>
  );
}
