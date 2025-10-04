// components/icons/RedParallelograms.jsx

import { JSX, SVGProps } from "react";

const RedParallelograms = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    // Pass props to the SVG element to allow external control over size, color, etc.
    return (
      <svg 
        width="200" 
        height="100" 
        viewBox="0 0 200 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...props} // Spreads any props (like className) onto the SVG
      >
        {/* Note: If you want to change the color via Tailwind/props, 
           you must remove the hardcoded 'fill' on the polygons, 
           and use a 'fill' prop on the SVG tag instead. */}
        <polygon points="20 0, 120 0, 100 100, 0 100" fill="#D50004"/> 
        <polygon points="130 0, 150 0, 130 100, 110 100" fill="#D50004"/>
      </svg>
    );
  };
  
  export default RedParallelograms;