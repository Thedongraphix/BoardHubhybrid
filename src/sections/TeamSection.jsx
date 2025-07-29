'use client';
import React, { useState } from 'react';
import { Box, Container, Text } from "@theme-ui/components";
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from "#components/section-header";

import Member1 from "../assets/team/member-1.png";
import Member2 from "../assets/team/member-2.png";
import Member3 from "../assets/team/member-3.png";
import Member4 from "../assets/team/member-4.png";

const boardHubFeatures = [
  {
    id: "real-time-collaboration",
    category: "COLLABORATION",
    title: "Real-Time Board Collaboration",
    description: "BoardHub transforms how board members collaborate with instant document sharing, real-time editing, and seamless communication tools. Experience governance that adapts to your schedule, not the other way around.",
    keyPoints: ["Instant document sync", "Real-time commenting", "Multi-device access", "Secure sharing"],
    image: Member1.src
  },
  {
    id: "intelligent-governance",
    category: "GOVERNANCE", 
    title: "Intelligent Governance Management",
    description: "Streamline your entire governance process with BoardHub's AI-powered insights, automated compliance tracking, and intelligent decision support systems that help boards make better decisions faster.",
    keyPoints: ["AI-powered insights", "Compliance automation", "Decision tracking", "Risk assessment"],
    image: Member2.src
  },
  {
    id: "strategic-planning",
    title: "Strategic Planning Suite",
    category: "STRATEGY",
    description: "Transform strategic planning with BoardHub's comprehensive suite of tools. From vision setting to execution tracking, our platform ensures your board's strategic initiatives stay on track and deliver results.",
    keyPoints: ["Strategic roadmaps", "Performance metrics", "Goal tracking", "Impact analysis"],
    image: Member3.src
  },
  {
    id: "workflow-automation",
    category: "EFFICIENCY",
    title: "Automated Workflow Management",
    description: "BoardHub eliminates administrative overhead with intelligent automation. From meeting scheduling to document preparation, our platform handles the routine tasks so your board can focus on what matters most.",
    keyPoints: ["Smart scheduling", "Document automation", "Task management", "Progress tracking"],
    image: Member4.src
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
  testimonialContainer: {
    mt: [5, null, 6, null, 7],
    position: 'relative',
  },
  featureCard: {
    bg: 'white',
    borderRadius: '24px',
    p: [6, null, 7, 8],
    boxShadow: '0 30px 80px rgba(37, 99, 235, 0.15)',
    border: '1px solid',
    borderColor: 'border_color',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
    gap: [5, null, null, 0],
    alignItems: 'stretch',
    minHeight: '450px'
  },
  leftContent: {
    color: 'heading',
    pr: [0, null, null, 6],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  categoryBadge: {
    display: 'inline-block',
    bg: 'primary',
    color: 'white',
    px: 4,
    py: 2,
    borderRadius: '6px',
    fontSize: [0, 1],
    fontWeight: 700,
    letterSpacing: '1px',
    mb: 4
  },
  featureTitle: {
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
    position: 'relative'
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  featureImage: {
    width: 'auto',
    height: '450px',
    maxWidth: '100%',
    objectFit: 'contain',
    objectPosition: 'right center'
  },
  navigation: {
    display: 'flex',
    justifyContent: 'center',
    gap: 3,
    mt: 6
  },
  navDot: {
    width: 3,
    height: 3,
    borderRadius: '50%',
    border: 'none',
    bg: 'muted',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      bg: 'text_secondary'
    }
  },
  navDotActive: {
    bg: 'primary',
    transform: 'scale(1.2)'
  }
};