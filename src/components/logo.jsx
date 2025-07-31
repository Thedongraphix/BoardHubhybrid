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
        transition: "all 0.2s ease",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
      {...rest}>
      <Image 
        src={src} 
        alt="BoardHub - Board Meeting Platform" 
        sx={{
          height: ["65px", "75px", "85px", "95px", "105px"], 
          width: "auto",
          maxHeight: "105px",
          objectFit: "contain",
          filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))",
          transition: "all 0.2s ease",
        }}
      />
    </Link>
  );
};

export default Logo;
