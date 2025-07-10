import React, { useState } from "react";
import { Box, Container, Heading, Text, Button, Image, Grid } from "@theme-ui/components";
import { IoSparkles, IoShield, IoPhonePortrait, IoDocument } from "react-icons/io5";
import CoreFeatureImg from "../assets/core-feature.png";
import DashboardImg from "../assets/dashboard.png";

const featuresData = {
  ai: {
    id: "ai",
    title: "AI-Powered Intelligence",
    subtitle: "Smart automation that board members actually want to use",
    description: "Transform your board meetings with intelligent automation that handles the heavy lifting while you focus on strategic decisions.",
    features: [
      {
        name: "AgendaAI",
        description: "Automatically generate comprehensive agendas based on previous meetings and priorities",
        benefit: "90% faster agenda creation"
      },
      {
        name: "MinutesAI", 
        description: "Transform recordings into accurate, structured meeting minutes with key decisions highlighted",
        benefit: "Real-time transcription"
      },
      {
        name: "InsightsAI",
        description: "Surface patterns and strategic recommendations from your board's historical data",
        benefit: "Data-driven decisions"
      }
    ],
    image: DashboardImg.src
  },
  security: {
    id: "security",
    title: "Enterprise Security",
    subtitle: "Military-grade protection for your most sensitive discussions",
    description: "Built for organizations that can't afford security breaches. Every feature designed with security-first principles.",
    features: [
      {
        name: "End-to-End Encryption",
        description: "Military-grade encryption protects all communications and documents",
        benefit: "Bank-level security"
      },
      {
        name: "SOC 2 Compliance",
        description: "Independently verified security controls and compliance standards",
        benefit: "Audit-ready compliance"
      },
      {
        name: "Complete Audit Trail",
        description: "Track every action, document view, and decision for complete accountability",
        benefit: "Full transparency"
      }
    ],
    image: CoreFeatureImg.src
  },
  mobile: {
    id: "mobile",
    title: "Mobile Excellence",
    subtitle: "Full board functionality on any device, anywhere",
    description: "Native iOS and Android apps that don't compromise on features or security. Work seamlessly across all devices.",
    features: [
      {
        name: "Native Apps",
        description: "Purpose-built iOS and Android apps with full feature parity",
        benefit: "Consistent experience"
      },
      {
        name: "Offline Access",
        description: "Access documents, take notes, and vote even without internet connection",
        benefit: "Work anywhere"
      },
      {
        name: "Biometric Security",
        description: "Touch ID, Face ID, and device-level security integration",
        benefit: "Secure & convenient"
      }
    ],
    image: CoreFeatureImg.src
  },
  paperless: {
    id: "paperless",
    title: "Paperless Operations",
    subtitle: "Complete digital transformation without compromising governance",
    description: "Eliminate printing, reduce preparation time, and enable sustainable board operations with digital-first workflows.",
    features: [
      {
        name: "Digital Documents",
        description: "View, annotate, and sign documents in real-time on any device",
        benefit: "Zero printing needed"
      },
      {
        name: "E-Signatures",
        description: "Integrated DocuSign and native e-signature capabilities",
        benefit: "Instant approvals"
      },
      {
        name: "Version Control",
        description: "Automatic versioning and change tracking for all board documents",
        benefit: "Always current"
      }
    ],
    image: DashboardImg.src
  }
};

const tabs = [
  { id: "ai", label: "AI Intelligence", icon: <IoSparkles /> },
  { id: "security", label: "Security", icon: <IoShield /> },
  { id: "mobile", label: "Mobile", icon: <IoPhonePortrait /> },
  { id: "paperless", label: "Paperless", icon: <IoDocument /> }
];

const FeaturesShowcase = () => {
  const [activeTab, setActiveTab] = useState("ai");
  const currentFeature = featuresData[activeTab];

  return (
    <section sx={styles.section}>
      <Container>
        <Box sx={styles.sectionHeader}>
          <Heading sx={styles.mainTitle}>
            Why Leading Organizations Choose BoardHub
          </Heading>
          <Text sx={styles.mainSubtitle}>
            Discover the features that transform board meetings from time-consuming necessities into strategic advantages
          </Text>
        </Box>

        <Box sx={styles.showcaseCard}>
          {/* Tab Navigation */}
          <Box sx={styles.tabNavigation}>
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                sx={{
                  ...styles.tabButton,
                  ...(activeTab === tab.id ? styles.activeTab : styles.inactiveTab),
                }}
                onClick={() => setActiveTab(tab.id)}
              >
                <Box sx={styles.tabIcon}>{tab.icon}</Box>
                <Text sx={styles.tabLabel}>{tab.label}</Text>
              </Button>
            ))}
          </Box>

          {/* Content Area */}
          <Box sx={styles.contentArea}>
            <Grid sx={styles.contentGrid}>
              {/* Left Content */}
              <Box sx={styles.textContent}>
                <Box sx={styles.badge}>
                  {currentFeature.title}
                </Box>
                <Heading sx={styles.contentTitle}>
                  {currentFeature.subtitle}
                </Heading>
                <Text sx={styles.contentDescription}>
                  {currentFeature.description}
                </Text>

                {/* Features List */}
                <Box sx={styles.featuresList}>
                  {currentFeature.features.map((feature, index) => (
                    <Box key={index} sx={styles.featureItem}>
                      <Box sx={styles.featureHeader}>
                        <Heading sx={styles.featureName}>{feature.name}</Heading>
                        <Box sx={styles.featureBenefit}>
                          {feature.benefit}
                        </Box>
                      </Box>
                      <Text sx={styles.featureDescription}>{feature.description}</Text>
                    </Box>
                  ))}
                </Box>

                <Button sx={styles.ctaButton}>
                  Explore {currentFeature.title}
                </Button>
              </Box>

              {/* Right Image */}
              <Box sx={styles.imageContent}>
                <Box sx={styles.imageContainer}>
                  <Image 
                    src={currentFeature.image} 
                    alt={`${currentFeature.title} Interface`}
                    sx={styles.featureImage}
                  />
                  <Box sx={styles.imageOverlay} />
                </Box>
              </Box>
            </Grid>
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
    bg: "#f8fafc",
  },
  sectionHeader: {
    textAlign: "center",
    mb: [5, 6, 7],
    maxWidth: "800px",
    mx: "auto",
  },
  mainTitle: {
    fontSize: ["28px", "32px", "36px", "40px"],
    fontWeight: 700,
    lineHeight: 1.2,
    mb: 3,
    color: "#1e293b",
  },
  mainSubtitle: {
    fontSize: ["16px", "18px"],
    lineHeight: 1.6,
    color: "#64748b",
    maxWidth: "600px",
    mx: "auto",
  },
  showcaseCard: {
    bg: "#3b82f6",
    borderRadius: "24px",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 20px 60px rgba(59, 130, 246, 0.25)",
  },
  tabNavigation: {
    display: "flex",
    p: [2, 3],
    gap: [1, 2],
    flexWrap: ["wrap", "nowrap"],
    justifyContent: "center",
  },
  tabButton: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    px: [3, 4],
    py: [2, 3],
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    minWidth: "auto",
    flex: ["1", "0 1 auto"],
    justifyContent: ["center", "flex-start"],
  },
  activeTab: {
    bg: "white",
    color: "#3b82f6",
    boxShadow: "0 4px 12px rgba(255, 255, 255, 0.3)",
    transform: "translateY(-2px)",
  },
  inactiveTab: {
    bg: "rgba(255, 255, 255, 0.1)",
    color: "white",
    "&:hover": {
      bg: "rgba(255, 255, 255, 0.2)",
    },
  },
  tabIcon: {
    fontSize: ["18px", "20px"],
    display: "flex",
    alignItems: "center",
  },
  tabLabel: {
    fontSize: ["14px", "16px"],
    fontWeight: 600,
    display: ["none", "block"],
  },
  contentArea: {
    p: [4, 5, 6],
  },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"],
    gap: [4, 5, 6],
    alignItems: "center",
  },
  textContent: {
    order: [2, 2, 1],
    color: "white",
  },
  badge: {
    display: "inline-block",
    px: 3,
    py: 1,
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: 600,
    mb: 3,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "white",
  },
  contentTitle: {
    fontSize: ["24px", "28px", "32px"],
    fontWeight: 700,
    lineHeight: 1.2,
    mb: 3,
    color: "white",
  },
  contentDescription: {
    fontSize: ["16px", "18px"],
    lineHeight: 1.6,
    color: "rgba(255, 255, 255, 0.9)",
    mb: 4,
  },
  featuresList: {
    mb: 5,
  },
  featureItem: {
    mb: 4,
    "&:last-child": {
      mb: 0,
    },
  },
  featureHeader: {
    display: "flex",
    alignItems: "center",
    gap: 3,
    mb: 2,
    flexWrap: "wrap",
  },
  featureName: {
    fontSize: ["16px", "18px"],
    fontWeight: 600,
    color: "white",
  },
  featureBenefit: {
    px: 2,
    py: 1,
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: 600,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "white",
  },
  featureDescription: {
    fontSize: ["14px", "15px"],
    lineHeight: 1.5,
    color: "rgba(255, 255, 255, 0.8)",
  },
  ctaButton: {
    bg: "white",
    color: "#3b82f6",
    px: 5,
    py: 3,
    borderRadius: "12px",
    fontWeight: 600,
    fontSize: ["14px", "16px"],
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(255, 255, 255, 0.3)",
    },
  },
  imageContent: {
    order: [1, 1, 2],
    display: "flex",
    justifyContent: "center",
  },
  imageContainer: {
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    width: "100%",
    maxWidth: "400px",
  },
  featureImage: {
    width: "100%",
    height: "auto",
    display: "block",
    position: "relative",
    zIndex: 1,
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    opacity: 0.1,
    background: "linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
  },
}; 