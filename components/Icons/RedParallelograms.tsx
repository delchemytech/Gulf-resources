// components/icons/RedParallelograms.tsx

import { SVGProps } from "react";

type RedParallelogramsProps = SVGProps<SVGSVGElement>;

const DEFAULT_COLOR_HEX = "#D50004";

const RedParallelograms = ({ className, style, ...props }: RedParallelogramsProps) => {
    
    // Check if the provided className already includes a Tailwind text color utility
    // This is a simple (though not foolproof) check for 'text-'
    const hasColorClass = className && className.includes('text-');

    // Conditionally set the style:
    // If no color class is present, use the default hex code for 'color'.
    // If a color class IS present, do not apply the style, letting the className take effect.
    const combinedStyle = hasColorClass 
        ? style 
        : { color: DEFAULT_COLOR_HEX, ...style };

    return (
      <svg 
        width="200" 
        height="100" 
        viewBox="0 0 200 100" 
        xmlns="http://www.w3.org/2000/svg"
        
        // Apply the combined style and the className
        className={className}
        style={combinedStyle}
        {...props} 
      >
        <polygon points="20 0, 120 0, 100 100, 0 100" fill="currentColor"/> 
        <polygon points="130 0, 150 0, 130 100, 110 100" fill="currentColor"/>
      </svg>
    );
};

export default RedParallelograms;