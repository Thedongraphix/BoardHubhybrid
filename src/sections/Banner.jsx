import React from "react";
import { Box, Button, Container, Heading, Text, Image } from "@theme-ui/components";
import ShapeLeft from "../assets/shape-left.png";
import ShapeRight from "../assets/shape-right.png";
import BannerImg from "../assets/dashboard.png";

const Banner = () => {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Secure Digital Platform for Effective Board Meetings
          </Heading>
          <Text as="p" variant="heroSecondary">
            BoardHub is an AI-powered board and committee intelligence platform that provides key insights at a click. 
            Make strategic decisions with military-grade security, paperless operations, and complete transparency for board directors, executives, and company secretaries.
          </Text>
          <Button variant="primary">Request Demo</Button>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg.src} alt="BoardHub Dashboard - Secure Board Meeting Platform" />
        </Box>
      </Container>
    </section>
  );
};

export default Banner;

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft.src})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeRight.src})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      display: "flex",
      justifyContent: "center",
      borderRadius: "15px",
      overflow: "hidden",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
  },
};
