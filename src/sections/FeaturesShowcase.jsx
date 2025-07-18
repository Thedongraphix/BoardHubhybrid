'use client';
import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Heading, Text, Button } from "@theme-ui/components";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import CoreFeatureImg from "../assets/core-feature.png";
import DashboardImg from "../assets/dashboard.png";

const features = [
  {
    id: "ai",
    label: "01",
    title: "AI-Powered Intelligence",
    heading: "Transform Meetings with Smart Automation",
    description: "Let AI handle the heavy lifting. Generate agendas, transcribe minutes, and surface insights automatically.",
    highlights: [
      "90% faster agenda creation",
      "Real-time transcription",
      "Strategic insights at a click"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&fit=crop", // Modern data dashboard
    accent: "#3B82F6"
  },
  {
    id: "security",
    label: "02",
    title: "Enterprise Security",
    heading: "Military-Grade Protection You Can Trust",
    description: "Bank-level encryption and compliance standards protect your most sensitive board discussions.",
    highlights: [
      "End-to-end encryption",
      "SOC 2 & ISO certified",
      "Complete audit trails"
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80&fit=crop", // Cybersecurity concept
    accent: "#10B981"
  },
  {
    id: "mobile",
    label: "03",
    title: "Mobile Excellence",
    heading: "Board Access from Anywhere",
    description: "Native iOS and Android apps deliver full functionality with offline access and biometric security.",
    highlights: [
      "Native mobile apps",
      "Offline document access",
      "Biometric authentication"
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80&fit=crop", // Professional with mobile device
    accent: "#8B5CF6"
  },
  {
    id: "paperless",
    label: "04",
    title: "Paperless Operations",
    heading: "Sustainable Digital Transformation",
    description: "Eliminate printing costs and environmental impact while improving document management efficiency.",
    highlights: [
      "Zero printing needed",
      "Instant e-signatures",
      "Version control built-in"
    ],
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80&fit=crop", // Modern office workspace
    accent: "#F59E0B"
  }
];

const FeaturesShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);
  
  const currentFeature = features[activeIndex];
  const autoPlayDelay = 6000; // 6 seconds per slide

  // Auto-advance slides
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
      setProgress(0);
    }, autoPlayDelay);

    return () => clearInterval(intervalRef.current);
  }, [activeIndex]);

  // Progress bar animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (100 / (autoPlayDelay / 100));
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [activeIndex]);

  const goToSlide = (index) => {
    clearInterval(intervalRef.current);
    setActiveIndex(index);
    setProgress(0);
  };

  const goToPrevious = () => {
    goToSlide(activeIndex === 0 ? features.length - 1 : activeIndex - 1);
  };

  const goToNext = () => {
    goToSlide((activeIndex + 1) % features.length);
  };

  // Touch handling for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    
    touchStartX.current = null;
  };

  return (
    <section sx={styles.section}>
      <Container>
        {/* Header */}
        <Box sx={styles.header}>
          <Heading sx={styles.sectionTitle}>
            Why Organizations Choose BoardHub
          </Heading>
          <Text sx={styles.sectionSubtitle}>
            Experience the future of board management
          </Text>
        </Box>

        {/* Slider Container */}
        <Box 
          sx={styles.sliderContainer}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Box sx={styles.slideContent}>
                {/* Left Content */}
                <Box sx={styles.contentArea}>
                  <Box sx={styles.featureLabel} style={{ color: currentFeature.accent }}>
                    {currentFeature.label}
                  </Box>
                  
                  <Heading sx={styles.featureTitle}>
                    {currentFeature.title}
                  </Heading>
                  
                  <Heading sx={styles.featureHeading}>
                    {currentFeature.heading}
                  </Heading>
                  
                  <Text sx={styles.featureDescription}>
                    {currentFeature.description}
                  </Text>
                  
                  <Box sx={styles.highlights}>
                    {currentFeature.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        sx={styles.highlightItem}
                      >
                        <Box sx={styles.highlightDot} style={{ backgroundColor: currentFeature.accent }} />
                        <Text>{highlight}</Text>
                      </motion.div>
                    ))}
                  </Box>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Button sx={styles.ctaButton} style={{ backgroundColor: currentFeature.accent }}>
                      Explore {currentFeature.title}
                      <IoChevronForward sx={styles.buttonIcon} />
                    </Button>
                  </motion.div>
                </Box>

                {/* Right Visual */}
                <Box sx={styles.visualArea}>
                  <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    sx={styles.imageWrapper}
                  >
                    <Box
                      as="img"
                      src={currentFeature.image}
                      alt={currentFeature.title}
                      sx={styles.featureImage}
                    />
                    <Box 
                      sx={styles.imageOverlay} 
                      style={{
                        background: `linear-gradient(135deg, ${currentFeature.accent}20, transparent)`
                      }}
                    />
                  </motion.div>
                </Box>
              </Box>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <Box sx={styles.navigation}>
            <Box sx={styles.indicators}>
              {features.map((_, index) => (
                <Box
                  key={index}
                  sx={styles.indicator}
                  onClick={() => goToSlide(index)}
                  className={index === activeIndex ? 'active' : ''}
                >
                  <Box sx={styles.indicatorFill} />
                  {index === activeIndex && (
                    <Box 
                      sx={styles.indicatorProgress}
                      style={{ 
                        width: `${progress}%`,
                        backgroundColor: currentFeature.accent
                      }}
                    />
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default FeaturesShowcase;

const styles = {
  section: {
    py: [6, 7, 8, 9],
    bg: 'background',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    textAlign: 'center',
    mb: [5, 6, 7],
  },
  sectionTitle: {
    fontSize: [5, 6, 7],
    fontWeight: 700,
    color: 'heading',
    lineHeight: 1.2,
    mb: 3,
    letterSpacing: '-0.5px',
  },
  sectionSubtitle: {
    fontSize: [2, 3],
    color: 'text_secondary',
    maxWidth: '500px',
    mx: 'auto',
  },
  sliderContainer: {
    position: 'relative',
    borderRadius: '24px',
    bg: '#2563EB',
    boxShadow: '0 30px 80px rgba(37, 99, 235, 0.3)',
    overflow: 'hidden',
  },
  slideContent: {
    display: 'grid',
    gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'],
    gap: 0,
    minHeight: ['auto', 'auto', '600px', '700px'],
  },
  contentArea: {
    p: [5, 6, 7, 8],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  featureLabel: {
    fontSize: [6, 7, 8],
    fontWeight: 700,
    lineHeight: 1,
    mb: 3,
    opacity: 0.3,
    color: 'white',
  },
  featureTitle: {
    fontSize: [1, 2],
    fontWeight: 600,
    color: 'rgba(255, 255, 255, 0.9)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    mb: 3,
  },
  featureHeading: {
    fontSize: [4, 5, 6],
    fontWeight: 700,
    color: 'white',
    lineHeight: 1.2,
    mb: 4,
    letterSpacing: '-0.5px',
  },
  featureDescription: {
    fontSize: [2, 3],
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 1.6,
    mb: 5,
  },
  highlights: {
    mb: 5,
  },
  highlightItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 3,
    mb: 3,
    color: 'white',
    '&:last-child': {
      mb: 0,
    },
  },
  highlightDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    flexShrink: 0,
    opacity: 0.8,
  },
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 2,
    px: 5,
    py: 3,
    color: 'white',
    fontWeight: 600,
    fontSize: [2, 3],
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateX(4px)',
      gap: 3,
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
    },
  },
  buttonIcon: {
    fontSize: '20px',
  },
  visualArea: {
    position: 'relative',
    display: ['none', 'none', 'block'],
    overflow: 'hidden',
    height: '100%',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  featureImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  navigation: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    p: [4, 5],
  },
  navButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '2px solid',
    borderColor: 'border_color',
    bg: 'transparent',
    color: 'text',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '20px',
    '&:hover': {
      borderColor: 'primary',
      color: 'primary',
      transform: 'scale(1.05)',
    },
  },
  indicators: {
    display: 'flex',
    gap: 2,
    justifyContent: 'center',
  },
  indicator: {
    position: 'relative',
    width: ['40px', '60px'],
    height: '4px',
    borderRadius: '2px',
    bg: 'rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    '&.active': {
      bg: 'rgba(255, 255, 255, 0.5)',
    },
    '&:hover': {
      bg: 'rgba(255, 255, 255, 0.5)',
    },
  },
  indicatorFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    bg: 'transparent',
  },
  indicatorProgress: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    transition: 'width 0.1s linear',
  },
}; 