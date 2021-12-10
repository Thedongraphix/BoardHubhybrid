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
    altText: "Fast Performance",
    title: "Fast Performance",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 2,
    imgSrc: Partnership.src,
    altText: "Partnership deal",
    title: "Partnership deal",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 3,
    imgSrc: Subscription.src,
    altText: "Pro Subscription",
    title: "Pro Subscription",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 4,
    imgSrc: Support.src,
    altText: "Customer Support",
    title: "Customer Support",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
];

const KeyFeature = () => {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="Whats the function"
          title="Meet the feature of product"
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
