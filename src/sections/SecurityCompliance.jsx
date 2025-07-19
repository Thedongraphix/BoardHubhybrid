import React from "react";
import { Box, Container, Image } from "@theme-ui/components";
import TextFeature from "#components/text-feature";

import FeatureThumb from "../assets/image-3.jpg";
import ShapePattern from "../assets/shape-pattern2.png";

const data = {
  subTitle: "Security & Compliance",
  title: "Military-Grade Security & Industry-Leading Compliance",
  description:
    "Experience peace of mind with SOC 2, ISO 27001, HIPAA, and GDPR compliance. Our robust security framework includes encrypted communications, stringent access controls, and regular security audits to ensure your confidential board data is always protected.",
  btnName: "Security Details",
  btnURL: "#",
};

const SecurityCompliance = () => {
  return (
    <section sx={{ variant: "section.coreFeature" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb.src} alt="Security & Compliance Dashboard" />
          <Box sx={styles.shapeBox}>
            <Image src={ShapePattern.src} alt="Shape" />
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default SecurityCompliance;

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 0],
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: "inline-flex",
    position: "relative",
    mr: "auto",
    ml: ["auto", null, null, null, 7],
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
      borderRadius: "15px",
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ["none", "inline-block", "none", null, "inline-block"],
  },
}; 