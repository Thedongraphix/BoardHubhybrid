import React, { useState } from "react";
import SectionHeader from "#components/section-header";
import { Container, Box } from "@theme-ui/components";
import TestimonialImage1 from "../assets/ceo.jpg";
import TestimonialImage2 from "../assets/lady.jpg";
import TestimonialImage3 from "../assets/black man.jpg";
import TestimonialImage4 from "../assets/hr.jpg";
import FeatureTestimonialCard from "#components/feature-testimonial-card";

const data = [
  {
    id: 1,
    imgSrc: TestimonialImage1.src,
    altText: "Gary Leahman",
    title: "Accurate, Up-To-The Minute Data",
    quote: "We don't want anything that was put together 30 days, or even two weeks ago, we want you to tell us if these numbers are as recent as yesterday. And when you're putting together sometimes 20 books, it's awful hard to have up-to-minute data. With BoardHub we get information in a timely manner that's convenient and that is absolutely accurate up to the second",
    name: "Gary Leahman",
    position: "Trustee, BoardHub University",
    rating: 5,
    watchVideo: true,
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: 2,
    imgSrc: TestimonialImage2.src,
    altText: "Sarah Mitchell",
    title: "Seamless Digital Transformation",
    quote: "BoardHub has completely transformed how we handle board documentation. The real-time collaboration features and digital-first approach have eliminated our paper trail while ensuring complete transparency and accessibility for all board members.",
    name: "Sarah Mitchell",
    position: "Board Chair, TechCorp Inc.",
    rating: 5,
    watchVideo: false,
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: 3,
    imgSrc: TestimonialImage3.src,
    altText: "Michael Chen",
    title: "Enhanced Board Collaboration",
    quote: "The integrated video conferencing and real-time document sharing have made our board meetings more productive than ever. We can collaborate effectively regardless of location, and the audit trails give us complete confidence in our governance processes.",
    name: "Michael Chen",
    position: "CEO, Global Solutions Ltd.",
    rating: 5,
    watchVideo: true,
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    id: 4,
    imgSrc: TestimonialImage4.src,
    altText: "Jennifer Rodriguez",
    title: "Streamlined Governance",
    quote: "BoardHub's automated workflows and intelligent features have reduced our administrative overhead by 60%. The platform handles all the routine tasks, allowing our board to focus on strategic decision-making and driving real business value.",
    name: "Jennifer Rodriguez",
    position: "Secretary, Innovation Board",
    rating: 5,
    watchVideo: false,
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
];

const Feature = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const nextFeature = () => {
    setActiveFeature((prev) => (prev + 1) % data.length);
  };

  const prevFeature = () => {
    setActiveFeature((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <section id="feature" sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="Customer Success"
          title="What Our Board Members Say"
        />

        <Box sx={styles.testimonialContainer}>
          <FeatureTestimonialCard
            src={data[activeFeature].imgSrc}
            alt={data[activeFeature].altText}
            title={data[activeFeature].title}
            quote={data[activeFeature].quote}
            name={data[activeFeature].name}
            position={data[activeFeature].position}
            rating={data[activeFeature].rating}
            watchVideo={data[activeFeature].watchVideo}
            gradient={data[activeFeature].gradient}
          />
          
          <Box sx={styles.controls}>
            <Box sx={styles.navButtons}>
              <Box onClick={prevFeature} sx={styles.navButton}>
                <Box sx={styles.navIcon}>‹</Box>
              </Box>
              <Box onClick={nextFeature} sx={styles.navButton}>
                <Box sx={styles.navIcon}>›</Box>
              </Box>
            </Box>
            
            <Box sx={styles.indicators}>
              {data.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  sx={{
                    ...styles.indicator,
                    ...(index === activeFeature ? styles.indicatorActive : {})
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Feature;

const styles = {
  testimonialContainer: {
    mt: [5, null, 6, null, 7],
    position: 'relative',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    mt: 6,
    flexDirection: ['column', null, 'row'],
    gap: [4, null, 0]
  },
  navButtons: {
    display: 'flex',
    gap: 3
  },
  navButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '2px solid',
    borderColor: 'rgba(37, 99, 235, 0.2)',
    bg: 'white',
    color: 'primary',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.1)',
    '&:hover': {
      borderColor: 'primary',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 24px rgba(37, 99, 235, 0.2)'
    }
  },
  navIcon: {
    fontSize: '20px',
    fontWeight: 'bold'
  },
  indicators: {
    display: 'flex',
    gap: 2
  },
  indicator: {
    width: ['30px', '40px'],
    height: '4px',
    borderRadius: '2px',
    bg: 'rgba(37, 99, 235, 0.2)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      bg: 'rgba(37, 99, 235, 0.4)'
    }
  },
  indicatorActive: {
    bg: 'primary',
    transform: 'scaleY(1.5)'
  }
};
