'use client';
import React, { useRef } from 'react';
import { Box, Container, Heading, Text, Button } from "@theme-ui/components";
import { useTransform, motion, useScroll } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import SectionHeader from "#components/section-header";
import { IoCheckmarkCircle } from "react-icons/io5";

import Member1 from "../assets/team/member-1.png";
import Member2 from "../assets/team/member-2.png";
import Member3 from "../assets/team/member-3.png";
import Member4 from "../assets/team/member-4.png";
import Member5 from "../assets/team/member-5.png";
import Member6 from "../assets/team/member-6.png";
import ShapeLeft from "../assets/shape-left.png";
import ShapeRight from "../assets/shape-right.png";

const stakeholders = [
  {
    id: 1,
    title: 'Board Directors',
    designation: 'Strategic Decision Makers',
    description: 'Transform strategic oversight with AI-powered insights, real-time dashboards, and seamless decision tracking. Focus on governance while BoardHub handles the administrative complexity.',
    src: Member1.src,
    pattern: 'executive',
    color: '#2563EB', // Blue
    benefits: [
      'AI-generated agendas from meeting priorities',
      'Real-time strategic KPI dashboards', 
      'Automated meeting minutes with key decisions',
      'Centralized document organization with smart search'
    ]
  },
  {
    id: 2,
    title: 'Company Secretaries',
    designation: 'Meeting Organizers & Compliance',
    description: 'Eliminate administrative burden with automated workflows, compliance tracking, and intelligent document management. Spend less time on paperwork, more time on strategic support.',
    src: Member3.src,
    pattern: 'compliance',
    color: '#10B981', // Green
    benefits: [
      'Automated document distribution & version control',
      'Built-in compliance templates & audit trails',
      'AI-assisted minute creation with speaker ID',
      'Real-time stakeholder synchronization'
    ]
  },
  {
    id: 3,
    title: 'Executives',
    designation: 'Leadership Team',
    description: 'Gain unprecedented visibility into board sentiment and decisions. Coordinate effortlessly across time zones with unified calendar management and real-time analytics.',
    src: Member2.src,
    pattern: 'leadership',
    color: '#8B5CF6', // Purple
    benefits: [
      'Unified calendar with automated scheduling',
      'Real-time board engagement analytics',
      'Global collaboration with secure messaging',
      'Automated report generation & visualization'
    ]
  },
  {
    id: 4,
    title: 'Committee Members',
    designation: 'Specialized Board Committees',
    description: 'Streamline committee work with specialized workspaces, smart archiving, and standardized workflows that adapt to each committees unique requirements.',
    src: Member4.src,
    pattern: 'collaborative',
    color: '#F59E0B', // Orange/Amber
    benefits: [
      'Unified platform for all committee activities',
      'Smart archiving with AI-powered search',
      'Committee-specific collaboration tools',
      'Standardized workflows for consistency'
    ]
  },
  {
    id: 5,
    title: 'Platform Administrators',
    designation: 'IT & System Managers',
    description: 'Simplify user management and security compliance with centralized controls, automated provisioning, and seamless enterprise integration.',
    src: Member5.src,
    pattern: 'technical',
    color: '#EF4444', // Red
    benefits: [
      'Centralized user management & auto-provisioning',
      'Built-in security with compliance monitoring',
      'Automated backup & disaster recovery',
      'Seamless Active Directory & SSO integration'
    ]
  },
  {
    id: 6,
    title: 'Legal Advisors',
    designation: 'Compliance & Governance Experts',
    description: 'Stay ahead of regulatory changes with automated compliance monitoring, AI-powered risk assessment, and intelligent legal documentation systems.',
    src: Member6.src,
    pattern: 'security',
    color: '#06B6D4', // Cyan
    benefits: [
      'Automated compliance with regulatory alerts',
      'AI-powered risk assessment for decisions',
      'Intelligent legal document archiving',
      'Automated compliance reporting & templates'
    ]
  },
  {
    id: 7,
    title: 'Board Observers',
    designation: 'Advisory & Oversight Role',
    description: 'Enhanced transparency and engagement for non-voting participants with specialized access controls and tailored information delivery.',
    src: Member1.src,
    pattern: 'executive',
    color: '#7C3AED', // Violet
    benefits: [
      'Observer-specific dashboard with relevant insights',
      'Controlled access to meeting materials',
      'Automated observer briefings and summaries',
      'Engagement tracking and feedback collection'
    ]
  },
  {
    id: 8,
    title: 'Audit Committee',
    designation: 'Financial Oversight Specialists',
    description: 'Specialized tools for financial oversight, risk assessment, and compliance monitoring with automated audit trails and reporting.',
    src: Member2.src,
    pattern: 'compliance',
    color: '#DC2626', // Red
    benefits: [
      'Automated financial compliance monitoring',
      'Risk assessment dashboards with alerts',
      'Audit trail generation and tracking',
      'Integrated financial reporting tools'
    ]
  }
];

const PatternOverlay = ({ pattern, cardIndex }) => {
  const patterns = {
    executive: (
      <Box sx={styles.patternContainer}>
        {/* Curved Flow Pattern */}
        <svg sx={styles.patternSvg} viewBox="0 0 400 300" fill="none">
          <path
            d="M0,150 Q100,50 200,150 T400,150"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M0,180 Q150,80 300,180 T400,180"
            stroke="url(#gradient1)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.2"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <Box sx={styles.floatingCircles}>
          <Box sx={{ ...styles.circle, ...styles.circle1 }} />
          <Box sx={{ ...styles.circle, ...styles.circle2 }} />
        </Box>
      </Box>
    ),
    compliance: (
      <Box sx={styles.patternContainer}>
        {/* Grid Pattern */}
        <svg sx={styles.patternSvg} viewBox="0 0 400 300" fill="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <Box sx={styles.geometricShapes}>
          <Box sx={{ ...styles.triangle, ...styles.triangle1 }} />
          <Box sx={{ ...styles.triangle, ...styles.triangle2 }} />
        </Box>
      </Box>
    ),
    leadership: (
      <Box sx={styles.patternContainer}>
        {/* Organic Curves */}
        <svg sx={styles.patternSvg} viewBox="0 0 400 300" fill="none">
          <path
            d="M-50,100 Q100,0 250,100 Q350,200 450,100"
            fill="url(#organicGradient)"
            opacity="0.08"
          />
          <path
            d="M-50,200 Q150,100 350,200 Q450,300 550,200"
            fill="url(#organicGradient2)"
            opacity="0.06"
          />
          <defs>
            <radialGradient id="organicGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="organicGradient2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </Box>
    ),
    collaborative: (
      <Box sx={styles.patternContainer}>
        {/* Interconnected Nodes */}
        <svg sx={styles.patternSvg} viewBox="0 0 400 300" fill="none">
          <g opacity="0.15">
            <circle cx="100" cy="80" r="3" fill="#FFFFFF" />
            <circle cx="200" cy="120" r="3" fill="#FFFFFF" />
            <circle cx="300" cy="90" r="3" fill="#FFFFFF" />
            <circle cx="150" cy="180" r="3" fill="#FFFFFF" />
            <circle cx="250" cy="200" r="3" fill="#FFFFFF" />
            <line x1="100" y1="80" x2="200" y2="120" stroke="#FFFFFF" strokeWidth="1" opacity="0.3" />
            <line x1="200" y1="120" x2="300" y2="90" stroke="#FFFFFF" strokeWidth="1" opacity="0.3" />
            <line x1="200" y1="120" x2="150" y2="180" stroke="#FFFFFF" strokeWidth="1" opacity="0.3" />
            <line x1="150" y1="180" x2="250" y2="200" stroke="#FFFFFF" strokeWidth="1" opacity="0.3" />
          </g>
        </svg>
        <Box sx={styles.hexPattern}>
          <Box sx={{ ...styles.hexagon, ...styles.hex1 }} />
          <Box sx={{ ...styles.hexagon, ...styles.hex2 }} />
        </Box>
      </Box>
    ),
    technical: (
      <Box sx={styles.patternContainer}>
        {/* Circuit Pattern */}
        <svg sx={styles.patternSvg} viewBox="0 0 400 300" fill="none">
          <g opacity="0.12">
            <rect x="50" y="50" width="60" height="2" fill="#FFFFFF" />
            <rect x="108" y="50" width="2" height="30" fill="#FFFFFF" />
            <rect x="110" y="78" width="80" height="2" fill="#FFFFFF" />
            <rect x="188" y="80" width="2" height="40" fill="#FFFFFF" />
            <rect x="190" y="118" width="100" height="2" fill="#FFFFFF" />
            <circle cx="50" cy="51" r="4" fill="#FFFFFF" />
            <circle cx="290" cy="119" r="4" fill="#FFFFFF" />
          </g>
        </svg>
        <Box sx={styles.techAccents}>
          <Box sx={{ ...styles.dataPoint, ...styles.data1 }} />
          <Box sx={{ ...styles.dataPoint, ...styles.data2 }} />
          <Box sx={{ ...styles.dataPoint, ...styles.data3 }} />
        </Box>
      </Box>
    ),
    security: (
      <Box sx={styles.patternContainer}>
        {/* Shield Pattern */}
        <svg sx={styles.patternSvg} viewBox="0 0 400 300" fill="none">
          <path
            d="M200,50 L250,80 L250,140 Q250,170 200,190 Q150,170 150,140 L150,80 Z"
            fill="url(#shieldGradient)"
            opacity="0.08"
          />
          <path
            d="M200,70 L230,90 L230,130 Q230,150 200,165 Q170,150 170,130 L170,90 Z"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1"
            opacity="0.2"
          />
          <defs>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
        <Box sx={styles.securityElements}>
          <Box sx={{ ...styles.lockIcon, ...styles.lock1 }} />
          <Box sx={{ ...styles.lockIcon, ...styles.lock2 }} />
        </Box>
      </Box>
    )
  };

  return patterns[pattern] || patterns.executive;
};

const StakeholderCard = ({
  i,
  title,
  designation,
  description,
  src,
  pattern,
  color,
  benefits,
  progress,
  range,
  targetScale,
  totalCards,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const rotatePattern = useTransform(scrollYProgress, [0, 1], [0, 5]);
  
  // Card appears from below and stacks behind others
  const cardEnterProgress = i / totalCards; // When this card should start appearing
  const cardStackProgress = (i + 1) / totalCards; // When this card should be fully stacked
  
  // Y position: starts from below (400px), moves to stack position
  const stackOffset = -40; // Distance between stacked cards
  const initialY = 400; // Start position (below viewport)
  const finalY = stackOffset * (totalCards - i - 1); // Final stack position
  
  const y = useTransform(progress, [cardEnterProgress, cardStackProgress], [initialY, finalY]);
  
  // Scale: starts at 1, reduces as it stacks behind others
  const initialScale = 1;
  const finalScale = Math.max(1 - 0.05 * (totalCards - i - 1), 0.85);
  const scale = useTransform(progress, [cardEnterProgress, cardStackProgress], [initialScale, finalScale]);
  
  // Opacity: starts at 0, becomes 1, then reduces as it stacks
  const opacity = useTransform(progress, 
    [cardEnterProgress - 0.1, cardEnterProgress, cardStackProgress], 
    [0, 1, Math.max(1 - 0.1 * (totalCards - i - 1), 0.6)]
  );
  
  // Z-index: later cards appear on top initially, then stack behind
  const zIndex = totalCards - i;

  return (
    <Box
      ref={container}
      sx={styles.cardContainer}
    >
      <motion.div
        style={{ 
          scale,
          y,
          opacity,
          zIndex,
        }}
        className="stakeholder-card"
      >
        <Box sx={{...styles.card, backgroundColor: color}}>
          {/* Pattern Overlay */}
          <motion.div
            style={{ rotate: rotatePattern }}
            sx={styles.patternWrapper}
          >
            <PatternOverlay pattern={pattern} cardIndex={i} />
          </motion.div>

          {/* Gradient Overlay */}
          <Box sx={styles.gradientOverlay} />
          
          {/* Floating Accent */}
          <motion.div
            sx={styles.floatingAccent}
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />

          {/* Header Section */}
          <Box sx={styles.cardHeader}>
            <Box sx={styles.avatarSection}>
              <motion.div style={{ scale: imageScale }}>
                <Box sx={styles.avatar}>
                  <Box
                    as="img"
                    src={src}
                    alt={title}
                    sx={styles.avatarImage}
                  />
                  <Box sx={styles.avatarGlow} />
                </Box>
              </motion.div>
              <Box sx={styles.titleInfo}>
                <Heading sx={styles.cardTitle}>{title}</Heading>
                <Text sx={styles.designation}>{designation}</Text>
              </Box>
            </Box>
          </Box>

          {/* Content Section */}
          <Box sx={styles.contentArea}>
            <Text sx={styles.description}>
              {description}
            </Text>
            
            <Box sx={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  sx={styles.benefitItem}
                >
                  <IoCheckmarkCircle sx={styles.benefitIcon} />
                  <Text sx={styles.benefitText}>{benefit}</Text>
                </motion.div>
              ))}
            </Box>
            
            <Button sx={styles.ctaButton}>
              Get Started
            </Button>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

const TeamSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <section ref={container} sx={styles.section}>
        {/* Background Shape Decorations */}
        <Box sx={styles.shapeLeft} />
        <Box sx={styles.shapeRight} />
        
        <Container>
          <Box sx={styles.sectionHeaderWrapper}>
            <SectionHeader
              slogan="Stakeholder Impact"
              title="Transform Efficiency for Every Role"
            />
          </Box>
          
          <Box sx={styles.cardsContainer}>
            {stakeholders.map((stakeholder, i) => {
              const targetScale = 1 - (stakeholders.length - i) * 0.05;
              const cardProgress = i / stakeholders.length;
              const startProgress = cardProgress * 0.9;
              const endProgress = Math.min(startProgress + 0.2, 1);
              
              return (
                <StakeholderCard
                  key={`stakeholder_${i}`}
                  i={i}
                  title={stakeholder.title}
                  designation={stakeholder.designation}
                  description={stakeholder.description}
                  src={stakeholder.src}
                  pattern={stakeholder.pattern}
                  color={stakeholder.color}
                  benefits={stakeholder.benefits}
                  progress={scrollYProgress}
                  range={[startProgress, endProgress]}
                  targetScale={targetScale}
                  totalCards={stakeholders.length}
                />
              );
            })}
          </Box>
        </Container>
      </section>
    </ReactLenis>
  );
};

export default TeamSection;

const styles = {
  section: {
    variant: 'section.coreFeature',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '300vh',
    mb: 0,
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -2,
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, rgba(147, 197, 253, 0.01) 50%, transparent 100%)',
      pointerEvents: 'none',
    },
  },
  sectionHeaderWrapper: {
    position: 'relative',
    zIndex: 1,
    pt: [6, 7, 8],
    pb: [4, 5, 6],
  },
  shapeLeft: {
    position: "absolute",
    top: "10%",
    left: 0,
    height: "80%",
    width: "25%", // Reduced from 35%
    zIndex: -1,
    backgroundImage: `url(${ShapeLeft.src})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center",
    backgroundSize: "contain",
    opacity: 0.4, // Reduced opacity
    pointerEvents: 'none',
    '@media screen and (max-width: 768px)': {
      width: "20%",
      opacity: 0.2,
    },
  },
  shapeRight: {
    position: "absolute",
    top: "15%",
    right: 0,
    height: "70%",
    width: "22%", // Reduced from 30%
    zIndex: -1,
    backgroundImage: `url(${ShapeRight.src})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    backgroundSize: "contain",
    opacity: 0.35, // Reduced opacity
    pointerEvents: 'none',
    '@media screen and (max-width: 768px)': {
      width: "18%",
      opacity: 0.15,
    },
  },
  cardsContainer: {
    position: 'relative',
    zIndex: 1,
    display: 'grid',
    gridTemplateAreas: '"stack"',
    minHeight: '80vh',
    pb: [4, 6, 8],
  },
  cardContainer: {
    gridArea: 'stack',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'sticky',
    top: '5vh', // Moved cards higher up
    zIndex: 2,
    px: ['2rem', '3rem', '4rem'], // Add horizontal padding
    '.stakeholder-card': {
      width: '100%',
      maxWidth: '1200px', // Increased from 900px
      height: ['auto', '580px'], // Increased from 480px
      transformOrigin: 'center center',
    }
  },
  card: {
    borderRadius: '28px',
    p: [7, 8, 9], // Increased padding
    pb: [9, 10, 11], // Extra bottom padding to prevent text cutoff
    boxShadow: '0 25px 80px rgba(0, 0, 0, 0.18)',
    border: 'none',
    transition: 'all 0.4s ease',
    position: 'relative',
    overflow: 'hidden',
    backdropFilter: 'blur(15px)',
    zIndex: 10,
    width: '100%',
    height: '100%',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      bg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
      pointerEvents: 'none',
      zIndex: 1,
    }
  },
  patternWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    overflow: 'hidden',
  },
  patternContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  patternSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)',
    zIndex: 0,
  },
  floatingAccent: {
    position: 'absolute',
    top: '20px',
    right: '30px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.2))',
    zIndex: 0,
  },
  // Pattern-specific elements
  floatingCircles: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  circle: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))',
  },
  circle1: {
    width: '80px',
    height: '80px',
    top: '30px',
    right: '50px',
  },
  circle2: {
    width: '120px',
    height: '120px',
    bottom: '20px',
    left: '30px',
    opacity: 0.3,
  },
  geometricShapes: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  triangle: {
    position: 'absolute',
    width: 0,
    height: 0,
  },
  triangle1: {
    borderLeft: '15px solid transparent',
    borderRight: '15px solid transparent',
    borderBottom: '20px solid rgba(255, 255, 255, 0.2)',
    top: '40px',
    right: '60px',
  },
  triangle2: {
    borderLeft: '20px solid transparent',
    borderRight: '20px solid transparent',
    borderBottom: '25px solid rgba(255, 255, 255, 0.15)',
    bottom: '50px',
    left: '40px',
  },
  hexPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  hexagon: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    background: 'rgba(255, 255, 255, 0.2)',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  },
  hex1: {
    top: '60px',
    right: '80px',
  },
  hex2: {
    bottom: '80px',
    left: '60px',
    background: 'rgba(255, 255, 255, 0.15)',
  },
  techAccents: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  dataPoint: {
    position: 'absolute',
    width: '8px',
    height: '8px',
    borderRadius: '2px',
    background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3))',
    opacity: 0.8,
  },
  data1: {
    top: '70px',
    right: '100px',
  },
  data2: {
    top: '150px',
    right: '50px',
    background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2))',
  },
  data3: {
    bottom: '100px',
    left: '80px',
  },
  securityElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  lockIcon: {
    position: 'absolute',
    width: '16px',
    height: '16px',
    border: '2px solid rgba(255, 255, 255, 0.4)',
    borderRadius: '4px',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-6px',
      left: '2px',
      width: '8px',
      height: '8px',
      border: '2px solid rgba(255, 255, 255, 0.4)',
      borderBottom: 'none',
      borderRadius: '8px 8px 0 0',
    },
  },
  lock1: {
    top: '80px',
    right: '90px',
  },
  lock2: {
    bottom: '120px',
    left: '70px',
    opacity: 0.3,
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    mb: 6,
    position: 'relative',
    zIndex: 2,
  },
  avatarSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    flex: 1,
    minWidth: 0,
  },
  avatar: {
    width: ['80px', '90px'],
    height: ['80px', '90px'],
    borderRadius: '50%',
    overflow: 'hidden',
    border: '4px solid',
    borderColor: 'white',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
    position: 'relative',
    flexShrink: 0,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'relative',
    zIndex: 1,
  },
  avatarGlow: {
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3))',
    zIndex: 0,
    filter: 'blur(8px)',
    opacity: 0.7,
  },
  titleInfo: {
    minWidth: 0,
    flex: 1,
  },
  cardTitle: {
    fontSize: [4, 5, 6],
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 'heading',
    mb: 2,
    letterSpacing: '-0.5px',
    position: 'relative',
    zIndex: 2,
    textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
  },
  designation: {
    fontSize: [2, 3],
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: 500,
    lineHeight: 'body',
    position: 'relative',
    zIndex: 2,
    textShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',
  },
  contentArea: {
    position: 'relative',
    zIndex: 2,
    mt: 4, // Add top margin
  },
  description: {
    fontSize: [3, 4],
    lineHeight: 'body',
    color: 'white',
    mb: 6, // Increased margin
    fontWeight: 400,
    letterSpacing: '-0.2px',
    textShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',
  },
  benefitsList: {
    mb: 8, // Increased margin
  },
  benefitItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 3,
    mb: 4,
    '&:last-child': {
      mb: 0,
    },
  },
  benefitIcon: {
    fontSize: '24px',
    color: 'white',
    flexShrink: 0,
    mt: '2px',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
  },
  benefitText: {
    fontSize: [2, 3],
    lineHeight: 'body',
    color: 'white',
    fontWeight: 500,
    flex: 1,
    textShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',
  },
  ctaButton: {
    color: 'white',
    fontWeight: 'bold',
    px: 8, // Increased padding
    py: 5, // Increased padding
    borderRadius: '20px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
    fontSize: [2, 3],
    transition: 'all 0.3s ease',
    background: 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    backdropFilter: 'blur(10px)',
    mt: 4, // Add top margin
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
      transition: 'left 0.6s',
    },
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
      background: 'rgba(255, 255, 255, 0.3)',
      '&::before': {
        left: '100%',
      },
    },
  },
};
