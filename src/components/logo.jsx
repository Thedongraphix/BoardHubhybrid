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
      <Image src={src} alt="startup landing page" />
    </Link>
  );
};

export default Logo;
