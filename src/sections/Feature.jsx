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
    altText: "Flexible Meeting Management",
    title: "Flexible Meeting Management",
    text: "Create meetings and agendas, prepare and share meeting packs, manage attendance, collaborate on committee resolutions and hold secure votes with integrated Zoom and Webex.",
  },
  {
    id: 2,
    imgSrc: Partnership.src,
    altText: "Paperless Operations",
    title: "Paperless Operations",
    text: "View, update and sign documents in real time on any device - phone, tablet, or desktop. Eliminate printing and enable sustainable board operations with digital-first workflows.",
  },
  {
    id: 3,
    imgSrc: Subscription.src,
    altText: "Complete Transparency",
    title: "Complete Transparency",
    text: "Board members have complete access to agendas, meeting minutes, approvals and archives anywhere, anytime on any device with full audit trails and version control.",
  },
  {
    id: 4,
    imgSrc: Support.src,
    altText: "Enhanced Collaboration",
    title: "Enhanced Collaboration",
    text: "Seamless communication and strategic planning with integrated video conferencing, real-time collaboration tools, and centralized board calendar management for all stakeholders.",
  },
];

const Feature = () => {
  return (
    <section id="feature" sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="Core Features"
          title="Comprehensive Board Management Platform"
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
