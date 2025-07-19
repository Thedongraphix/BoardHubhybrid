import React from "react";
import { Box, Container, Image } from "@theme-ui/components";
import TextFeature from "#components/text-feature";

import FeatureThumb from "../assets/image-1.jpg";
import ShapePattern from "../assets/shape-pattern2.png";

const data = {
  subTitle: "Meeting Operations",
  title: "Streamlined Agenda Building & Document Management",
  description:
    "Transform unstructured ideas into ready-to-use agendas with our intelligent agenda builder. Seamlessly manage documents, track attendance, and integrate with Microsoft 365, Zoom, and Teams for a complete meeting operations experience.",
  btnName: "Explore Features",
  btnURL: "#",
};

const MeetingOperations = () => {
  return (
    <section sx={{ variant: "section.coreFeature" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb.src} alt="Meeting Operations Dashboard" />
          <Box sx={styles.shapeBox}>
            <Image src={ShapePattern.src} alt="Shape" />
          </Box>
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
      </Container>
    </section>
  );
};

export default MeetingOperations;

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 7, 0, null, 7],
    flexDirection: ["column", null, null, "row"], // Normal flow for mobile, row for desktop
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 0],
    order: [1, null, null, 2], // On desktop, content comes second (right side)
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: "inline-flex",
    position: "relative",
    mr: ["auto", null, null, null, 7],
    ml: ["auto", null, null, 0],
    order: [2, null, null, 1], // On desktop, image comes first (left side)
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
    left: -165, // Adjusted for left positioning
    zIndex: -1,
    display: ["none", "inline-block", "none", null, "inline-block"],
  },
}; 