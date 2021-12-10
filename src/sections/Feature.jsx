import React from "react";
import SectionHeader from "#components/section-header";
import { Container, Grid } from "@theme-ui/components";
import Performance from "../assets/feature/performance.svg";
import Partnership from "../assets/feature/partnership.svg";
import Subscription from "../assets/feature/subscription.svg";
import Support from "../assets/feature/support.svg";
import FeatureCard from "#components/feature-card";

const data = [
  {
    id: 1,
    imgSrc: Performance.src,
    altText: "Fast Performance",
    title: "Fast Performance",
    text: "Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.",
  },
  {
    id: 2,
    imgSrc: Partnership.src,
    altText: "Partnership deal",
    title: "Partnership deal",
    text: "We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.",
  },
  {
    id: 3,
    imgSrc: Subscription.src,
    altText: "Pro Subscription",
    title: "Pro Subscription",
    text: "Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.",
  },
  {
    id: 4,
    imgSrc: Support.src,
    altText: "Customer Support",
    title: "Customer Support",
    text: "We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.",
  },
];

const Feature = () => {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="Amazing useful features"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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

export default Feature;

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
    ],
  },
};
