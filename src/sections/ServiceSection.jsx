import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Text,
} from "@theme-ui/components";
import { IoIosPlay } from "react-icons/io";
import { keyframes } from "@emotion/react";
import TextFeature from "#components/text-feature";
import dynamic from "next/dynamic";
// import ModalVideo from "react-modal-video";

import ServiceThumb from "../assets/service-thumb.png";
import ShapePattern from "../assets/shape-pattern1.png";

import Smart from "../assets/services/smart.svg";
import Secure from "../assets/services/secure.svg";

const ModalVideo = dynamic(() => import("react-modal-video"), {ssr: false})

const data = {
  subTitle: "our platform",
  title: "Board Intelligence & Secure Meeting Management",
  features: [
    {
      id: 1,
      imgSrc: Smart.src,
      altText: "AI-Powered Insights",
      title: "AI-Powered Insights",
      text: "Access comprehensive board performance dashboards, voting results, and strategic insights with AI-driven analytics that help boards make informed decisions at a click.",
    },
    {
      id: 2,
      imgSrc: Secure.src,
      altText: "Military-Grade Security",
      title: "Military-Grade Security",
      text: "Security by design with military-grade encryption and advanced security controls to protect sensitive board data and ensure complete privacy during confidential discussions.",
    },
  ],
};

const ServiceSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={{ variant: "section.services" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={ServiceThumb.src} alt="Thumbnail" />
          <Button
            sx={styles.videoBtn}
            onClick={handleClick}
            aria-label="Play Button">
            <span>
              <IoIosPlay />
            </span>
          </Button>

          <Box sx={styles.shapeBox}>
            <Image src={ShapePattern.src} alt="Shape" />
          </Box>
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature subTitle={data.subTitle} title={data.title} />

          <Grid sx={styles.grid}>
            {data.features.map((item) => {
              return (
                <Box sx={styles.card} key={item.id}>
                  <Image
                    src={item.imgSrc}
                    alt={item.altText}
                    sx={styles.icon}
                  />

                  <Box sx={styles.wrapper}>
                    <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                    <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                  </Box>
                </Box>
              );
            })}
          </Grid>
        </Box>
      </Container>
      <ModalVideo
        channel="youtube"
				autoplay
        isOpen={videoOpen}
        videoId="ZNA9rmDsYVE"
        onClose={() => setVideoOpen(false)}
      />
    </section>
  );
};

export default ServiceSection;

const playPulse = keyframes`
	from {
		transform: translate(-50%, -50%) scale(1);
		opacity: 1;
	}
	
	to {
		transform: translate(-50%, -50%) scale(1.5);
		opacity: 0;
	}
`;

const styles = {
  containerBox: {
    display: "flex",
    alignItems: ["flex-start", null, null, "center"],
    justifyContent: ["flex-start", null, null, "space-between"],
    flexDirection: ["column", null, null, "row"],
    pb: [0, null, null, null, null, 7],
  },
  thumbnail: {
    mr: ["auto", null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ["auto", null, null, 0],
    position: "relative",
    display: "inline-flex",
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ["none", null, null, null, null, "inline-block"],
  },
  videoBtn: {
    zIndex: 2,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: ["60px", null, "80px", null, "100px"],
    height: ["60px", null, "80px", null, "100px"],
    backgroundColor: "transparent",
    p: "0px !important",
    "&::before": {
      position: "absolute",
      content: '""',
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      display: "block",
      width: ["60px", null, "80px", null, "100px"],
      height: ["60px", null, "80px", null, "100px"],
      backgroundColor: "primary",
      borderRadius: "50%",
      animation: `${playPulse} 1.5s ease-out infinite`,
      opacity: 0.5,
    },
    "> span": {
      backgroundColor: "rgba(255,255,255,0.5)",
      width: "inherit",
      height: "inherit",
      textAlign: "center",
      borderRadius: "50%",
      display: "flex",
      cursor: "pointer",
      justifyContent: "center",
      paddingLeft: "8%",
      alignItems: "center",
      position: "relative",
      zIndex: 2,
    },
    svg: {
      fontSize: [40, null, 48, null, 62],
    },
  },
  contentBox: {
    width: ["100%", null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ["center", null, null, "left"],
  },
  grid: {
    mx: "auto",
    width: ["100%", 370, 420, "100%"],
    gridGap: ["35px 0", null, null, null, "50px 0"],
    gridTemplateColumns: ["repeat(1,1fr)"],
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    transition: "all 0.3s",
  },

  icon: {
    width: ["45px", null, null, null, "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, null, null, null, 4],
  },
  wrapper: {
    mt: "-5px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },
    subTitle: {
      fontSize: [1, null, null, "14px", 1],
      fontWeight: 400,
      lineHeight: 1.9,
    },
  },
};
