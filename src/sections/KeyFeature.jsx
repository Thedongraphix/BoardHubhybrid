import React from "react";
import SectionHeader from "#components/section-header";
import { Container, Grid } from "@theme-ui/components";
import Performance from "../assets/key-feature/performance.svg";
import Partnership from "../assets/key-feature/partnership.svg";
import Subscription from "../assets/key-feature/subscription.svg";
import Support from "../assets/key-feature/support.svg";
import FeaturedCardColumn from "#components/featured-card-column";

const data = [
  {
    id: 1,
    imgSrc: Performance.src,
    altText: "AI-Powered Performance",
    title: "AI-Powered Performance",
    text: "Experience lightning-fast board operations with AI that automates agenda creation, document processing, and meeting insights in real-time.",
  },
  {
    id: 2,
    imgSrc: Partnership.src,
    altText: "Strategic Collaboration",
    title: "Strategic Collaboration",
    text: "Foster seamless board member collaboration with secure document sharing, real-time voting, and integrated communication tools.",
  },
  {
    id: 3,
    imgSrc: Subscription.src,
    altText: "Enterprise Solutions",
    title: "Enterprise Solutions",
    text: "Scale your board governance with flexible enterprise plans that grow with your organization's needs and compliance requirements.",
  },
  {
    id: 4,
    imgSrc: Support.src,
    altText: "24/7 Expert Support",
    title: "24/7 Expert Support",
    text: "Get dedicated support from our board governance experts who understand the unique challenges of executive leadership teams.",
  },
];

const KeyFeature = () => {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="Key Capabilities"
          title="Discover BoardHub's Powerful Features"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeaturedCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default KeyFeature;

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
