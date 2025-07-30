'use client';
import React, { useState } from 'react';
import { Box, Container, Text } from "@theme-ui/components";
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from "#components/section-header";


const boardHubFeatures = [
  {
    id: "real-time-collaboration",
    category: "COLLABORATION",
    title: "Real-Time Board Collaboration",
    description: "BoardHub transforms how board members collaborate with instant document sharing, real-time editing, and seamless communication tools. Experience governance that adapts to your schedule, not the other way around.",
    keyPoints: ["Instant document sync", "Real-time commenting", "Multi-device access", "Secure sharing"],
    image: "/images/dashboard.png"
  },
  {
    id: "intelligent-governance",
    category: "GOVERNANCE", 
    title: "Intelligent Governance Management",
    description: "Streamline your entire governance process with BoardHub's AI-powered insights, automated compliance tracking, and intelligent decision support systems that help boards make better decisions faster.",
    keyPoints: ["AI-powered insights", "Compliance automation", "Decision tracking", "Risk assessment"],
    image: "/images/dashboard.png"
  },
  {
    id: "strategic-planning",
    title: "Strategic Planning Suite",
    category: "STRATEGY",
    description: "Transform strategic planning with BoardHub's comprehensive suite of tools. From vision setting to execution tracking, our platform ensures your board's strategic initiatives stay on track and deliver results.",
    keyPoints: ["Strategic roadmaps", "Performance metrics", "Goal tracking", "Impact analysis"],
    image: "/images/dashboard.png"
  },
  {
    id: "workflow-automation",
    category: "EFFICIENCY",
    title: "Automated Workflow Management",
    description: "BoardHub eliminates administrative overhead with intelligent automation. From meeting scheduling to document preparation, our platform handles the routine tasks so your board can focus on what matters most.",
    keyPoints: ["Smart scheduling", "Document automation", "Task management", "Progress tracking"],
    image: "/images/dashboard.png"
  }
];

const TeamSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section sx={{ variant: 'section.testimonial' }}>
      <Container>
        <SectionHeader
          slogan="Comprehensive Board Management"
          title="Everything Your Board Needs in One Intelligent Platform"
        />
        
        <Box sx={styles.testimonialContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              sx={styles.featureCard}
            >
              <Box sx={styles.content}>
                <Box sx={styles.leftContent}>
                  <Box sx={styles.categoryBadge}>
                    {boardHubFeatures[activeFeature].category}
                  </Box>
                  
                  <Text as="h3" sx={styles.featureTitle}>
                    {boardHubFeatures[activeFeature].title}
                  </Text>
                  
                  <Text sx={styles.description}>
                    {boardHubFeatures[activeFeature].description}
                  </Text>
                  
                  <Box sx={styles.keyPoints}>
                    {boardHubFeatures[activeFeature].keyPoints.map((point, index) => (
                      <Box key={index} sx={styles.keyPoint}>
                        <Box sx={styles.checkIcon}>✓</Box>
                        <Text sx={styles.keyPointText}>{point}</Text>
                      </Box>
                    ))}
                  </Box>
                </Box>
                
                <Box sx={styles.rightContent}>
                  <Box sx={styles.imageContainer}>
                    <Box
                      as="img"
                      src={boardHubFeatures[activeFeature].image}
                      alt={boardHubFeatures[activeFeature].title}
                      sx={styles.featureImage}
                    />
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </AnimatePresence>
          
          <Box sx={styles.navigation}>
            {boardHubFeatures.map((_, index) => (
              <Box
                key={index}
                onClick={() => setActiveFeature(index)}
                sx={{
                  ...styles.navDot,
                  ...(index === activeFeature ? styles.navDotActive : {})
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default TeamSection;

const styles = {
  sliderContainer: {
    mt: [5, null, 6, null, 7],
    position: 'relative',
  },
  userCard: {
    bg: 'white',
    borderRadius: '32px',
    p: [6, null, 7, 8],
    boxShadow: '0 30px 80px rgba(37, 99, 235, 0.15)',
    border: '1px solid',
    borderColor: 'border_color',
    overflow: 'hidden',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
    gap: [5, null, null, 0],
    alignItems: 'stretch',
    minHeight: '500px'
  },
  leftContent: {
    color: 'heading',
    pr: [0, null, null, 6],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  roleTag: {
    display: 'inline-block',
    color: 'primary',
    fontSize: [1, 2],
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    mb: 3,
    opacity: 0.8
  },
  userTitle: {
    fontSize: [4, null, 5, 6],
    fontWeight: 700,
    lineHeight: 1.3,
    color: 'heading',
    mb: 4,
    letterSpacing: 'heading',
  },
  description: {
    fontSize: [2, null, 3],
    lineHeight: 'body',
    color: 'text',
    mb: 5,
  },
  keyPoints: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3
  },
  keyPoint: {
    display: 'flex',
    alignItems: 'center',
    gap: 3
  },
  checkIcon: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    bg: 'primary',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 1,
    fontWeight: 'bold',
    flexShrink: 0
  },
  keyPointText: {
    fontSize: [1, 2],
    color: 'text',
    fontWeight: 500
  },
  rightContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '24px',
    ml: [0, null, null, 4]
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: '24px',
    overflow: 'hidden'
  },
  userImage: {
    width: 'auto',
    height: '500px',
    maxWidth: '100%',
    objectFit: 'cover',
    objectPosition: 'right center',
    borderRadius: '24px'
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
    fontSize: '20px'
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