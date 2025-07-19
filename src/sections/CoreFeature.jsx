import React from "react";
import { Box, Container, Image } from "@theme-ui/components";
import TextFeature from "#components/text-feature";

import FeatureThumb from "../assets/image-2.jpg";
import ShapePattern from "../assets/shape-pattern2.png";

const data = {
  subTitle: "Board Intelligence",
  title: "AI-Powered Insights for Strategic Board Decisions",
  description:
    "Access comprehensive dashboards with board performance analytics, voting results, and strategic insights. Our AI-driven platform provides key intelligence at a click, enabling boards to make informed decisions with complete visibility and transparency.",
  btnName: "Explore Platform",
  btnURL: "#",
};

const CoreFeature = () => {
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
          <Image src={FeatureThumb.src} alt="Thumbnail" />
          <Box sx={styles.shapeBox}>
            <Image src={ShapePattern.src} alt="Shape" />
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default CoreFeature;

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
