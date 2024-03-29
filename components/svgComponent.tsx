import React from "react";

const SvgComponent: React.FC<{
  color: string;
  size?: number;
}> = ({ color, size = 20 }) => {
  const svgStyle: React.CSSProperties = {
    shapeRendering: "geometricPrecision",
    textRendering: "geometricPrecision",
    imageRendering: "auto",
    fillRule: "evenodd",
    clipRule: "evenodd",
  };

  const pathStyle: React.CSSProperties = {
    opacity: 0.984,
    fill: color,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={`${size}px`}
      height={`${size}px`}
      style={svgStyle}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <path
          style={pathStyle}
          d="M 142.5,-0.5 C 147.5,-0.5 152.5,-0.5 157.5,-0.5C 162.065,1.4539 166.398,3.9539 170.5,7C 246.333,82.8333 322.167,158.667 398,234.5C 408.032,246.456 409.032,259.123 401,272.5C 322.833,350.667 244.667,428.833 166.5,507C 163.408,508.546 160.408,510.046 157.5,511.5C 152.5,511.5 147.5,511.5 142.5,511.5C 129.433,504.283 118.266,494.616 109,482.5C 102.832,471.329 103.165,460.329 110,449.5C 174.68,384.986 239.18,320.32 303.5,255.5C 238.486,190.32 173.653,124.986 109,59.5C 103.029,48.6818 103.363,38.0151 110,27.5C 117.833,19.6667 125.667,11.8333 133.5,4C 136.592,2.45406 139.592,0.95406 142.5,-0.5 Z"
        />
      </g>
    </svg>
  );
};

export default SvgComponent;
