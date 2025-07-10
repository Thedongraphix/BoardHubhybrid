import { Image } from "theme-ui";
import React from "react";
import { Link } from "./link";

const Logo = ({ src, ...rest }) => {
  return (
    <Link
      path="/"
      sx={{
        variant: "link.logo",
        display: "flex",
        cursor: "pointer",
        mr: 15,
      }}
      {...rest}>
      <Image 
        src={src} 
        alt="BoardHub - Board Meeting Platform" 
        sx={{
          // Responsive height: [mobile, tablet, desktop]
          // Current: mobile=60px, tablet=70px, desktop=80px
          height: ["60px", "70px", "80px"], 
          width: "auto", // Maintains aspect ratio
          maxHeight: "80px", // Maximum size constraint
          objectFit: "contain", // Ensures proper scaling without distortion
        }}
      />
    </Link>
  );
};

export default Logo;
