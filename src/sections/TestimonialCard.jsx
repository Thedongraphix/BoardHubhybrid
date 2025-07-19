import React, { useState } from "react";
import SectionHeader from "#components/section-header";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@theme-ui/components";
import Carousel from "react-multi-carousel";
import PriceCard from "#components/price-card";
import ButtonGroup from "#components/button-group";
import { keyframes } from "@emotion/react";

import Avatar1 from "../assets/testimonial/avatar1.png";
import Avatar2 from "../assets/testimonial/avatar2.png";
import Avatar3 from "../assets/testimonial/avatar3.png";
import Avatar4 from "../assets/testimonial/avatar4.png";
import Rating from "#components/rating";

const data = [
  {
    id: 1,
    title: "Transformed Our Board Operations",
    description:
      "BoardHub revolutionized how we conduct our quarterly board meetings. The AI-powered agenda creation and real-time collaboration features have reduced our prep time by 70% while improving decision quality.",
    avatar: Avatar1.src,
    name: "Sarah Chen",
    designation: "Board Chair, TechFlow Inc.",
    review: 5,
  },
  {
    id: 2,
    title: "Exceptional Security & Compliance",
    description:
      "As a board member handling sensitive information, BoardHub's military-grade security gives me complete confidence. The audit trails and compliance features are exactly what we needed for governance oversight.",
    avatar: Avatar2.src,
    name: "Michael Rodriguez",
    designation: "Independent Director, FinCorp",
    review: 5,
  },
  {
    id: 3,
    title: "Seamless Digital Experience",
    description:
      "The transition from paper-based meetings to BoardHub was incredibly smooth. The mobile app allows me to review documents and vote on resolutions from anywhere, making board participation more efficient than ever.",
    avatar: Avatar3.src,
    name: "Dr. Jennifer Wang",
    designation: "Board Member, HealthTech Solutions",
    review: 5,
  },
  {
    id: 4,
    title: "Outstanding Support & ROI",
    description:
      "BoardHub delivered immediate value from day one. The onboarding was seamless, and the ongoing support is exceptional. We've seen a 300% improvement in meeting productivity and board member satisfaction.",
    avatar: Avatar4.src,
    name: "David Thompson",
    designation: "Company Secretary, Global Ventures",
    review: 5,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TestimonialCard = () => {
  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    slidesToSlide: 1,
    containerClass: "carousel-container",
    customButtonGroup: <ButtonGroup />,
    dotListClass: "",
    focusOnSelect: false,
    infinite: true,
    keyBoardControl: true,
    itemClass: "",
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
  };

  return (
    <section id="testimonial" sx={{ variant: "section.testimonial" }}>
      <Container css={{ textAlign: "center" }}>
        <SectionHeader slogan="Client Success Stories" title="Trusted by Leading Board Members Worldwide" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel {...sliderParams}>
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
              <Rating rating={item.review} />
              <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              <Text sx={styles.description}>{item.description}</Text>
              <div className="card-footer">
                <div className="image">
                  <Image src={item.avatar} alt="Client image" />
                </div>
                <div className="reviewer-info">
                  <Heading as="h4" sx={styles.heading}>
                    {item.name}
                  </Heading>
                  <Text sx={styles.designation}>{item.designation}</Text>
                </div>
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
};

export default TestimonialCard;

const styles = {
  carouselWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    mt: "-30px",
    px: "15px",
    ".carousel-container": {
      width: "100%",
      maxWidth: [
        "100%",
        null,
        null,
        "750px",
        "1000px",
        "1180px",
        null,
        "calc(50% + 865px)",
      ],
      mr: ["auto", null, null, null, null, null, null, "-220px"],
      ml: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s",
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: [
      "30px 20px 35px",
      "30px 25px 35px",
      "30px 20px 35px",
      "35px 30px 40px 40px",
      "30px 30px 35px",
      "35px 30px 40px 40px",
    ],
    bg: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(10px)",
    textAlign: "left",
    m: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)",
    },
    ".rating": {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: "none",
        mb: 0,
        display: "flex",
      },
      svg: {
        marginRight: "2px",
        "&:last-of-type": {
          marginRight: 0,
        },
      },
      ".star": {
        color: "primary",
        mr: "1px",
      },
      ".star-o": {
        color: "muted",
        mr: "1px",
      },
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        img: {
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover",
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3,
  },
  designation: {
    color: "primary",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.4,
  },
};
