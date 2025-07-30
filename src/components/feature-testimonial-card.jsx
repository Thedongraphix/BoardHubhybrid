import { Box, Heading, Image, Text, Button } from "@theme-ui/components";
import React from "react";

const FeatureTestimonialCard = ({ 
  src, 
  alt = "default alt text", 
  title, 
  quote, 
  name, 
  position, 
  rating = 5, 
  watchVideo = false,
  gradient
}) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Box key={index} sx={styles.star}>
        ★
      </Box>
    ));
  };

  return (
    <Box sx={{...styles.card, background: gradient}}>
      <Box sx={styles.content}>
        <Box sx={styles.leftContent}>
          <Heading sx={styles.title}>{title}</Heading>
          
          <Text sx={styles.quote}>
            &ldquo;{quote}&rdquo;
          </Text>
          
          <Box sx={styles.attribution}>
            <Text sx={styles.name}>{name}</Text>
            <Text sx={styles.position}>{position}</Text>
            
            <Box sx={styles.rating}>
              {renderStars(rating)}
            </Box>
          </Box>
          
          {watchVideo && (
            <Button sx={styles.watchButton}>
              <Box sx={styles.playIcon}>▶</Box>
              WATCH VIDEO
            </Button>
          )}
        </Box>
        
        <Box sx={styles.rightContent}>
          <Image src={src} alt={alt} sx={styles.image} />
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureTestimonialCard;

const styles = {
  card: {
    borderRadius: "24px",
    overflow: "hidden",
    mb: [4, null, 5],
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
  },
  content: {
    display: "grid",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
    alignItems: "stretch",
    minHeight: ["400px", null, null, "500px"],
    gap: [4, null, null, 0],
  },
  leftContent: {
    p: [5, null, 6, 7],
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
  title: {
    fontSize: [4, null, 5, 6],
    fontWeight: 700,
    lineHeight: 1.2,
    color: "white",
    mb: 4,
    letterSpacing: "-0.5px",
  },
  quote: {
    fontSize: [2, null, 3],
    lineHeight: 1.6,
    color: "rgba(255, 255, 255, 0.95)",
    mb: 5,
    fontStyle: "italic",
  },
  attribution: {
    mb: 5,
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  name: {
    fontSize: [3, null, 4],
    fontWeight: 700,
    color: "white",
    lineHeight: 1.2,
    letterSpacing: "-0.3px",
  },
  position: {
    fontSize: [1, null, 2],
    color: "rgba(255, 255, 255, 0.85)",
    lineHeight: 1.4,
    fontWeight: 500,
  },
  watchButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: 2,
    bg: "rgba(255, 255, 255, 0.2)",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "25px",
    px: 4,
    py: 2,
    fontSize: [1, null, 2],
    fontWeight: 600,
    letterSpacing: "0.5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    mt: 3,
    backdropFilter: "blur(10px)",
    "&:hover": {
      bg: "rgba(255, 255, 255, 0.3)",
      transform: "translateY(-2px)",
    },
  },
  playIcon: {
    fontSize: [1, null, 2],
    ml: -1,
  },
  rating: {
    display: "flex",
    gap: 1,
    mt: 2,
  },
  star: {
    color: "#FFD700",
    fontSize: [2, null, 3],
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
  },
  rightContent: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "stretch",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    borderRadius: ["0", null, null, "0 24px 24px 0"],
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: ["0", null, null, "0 24px 24px 0"],
    filter: "brightness(1.1) contrast(1.05)",
  },
};