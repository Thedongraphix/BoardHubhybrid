import React from "react";
import { Box, Button, Container, Heading, Text, Image } from "@theme-ui/components";
import BannerImg from "../assets/new dashboard.png";

// Enhanced global styles for premium animations
const globalStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
  }
  
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: calc(200px + 100%) 0; }
  }
  
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
    50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
  }
`;

// Inject styles into head
if (typeof window !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = globalStyles;
  document.head.appendChild(styleSheet);
}

const Banner = () => {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.content}>
          <Box sx={styles.banner.textContent}>
            <Heading as="h1" sx={styles.banner.headline}>
              Board Management For
              <Box as="span" sx={styles.banner.highlightText}> Visionary Leaders</Box>
            </Heading>
            <Text sx={styles.banner.subheading}>
              Simplify board governance with AI-driven agenda building, automated meeting minutes, and strategic insights that empower faster decision-making.
            </Text>
            
            <Box sx={styles.banner.aiTagline}>
              <Text sx={styles.banner.aiTaglineText}>
                Powered by <Box as="span" sx={styles.banner.aiEmphasis}>Artificial Intelligence</Box>
              </Text>
            </Box>
            
            <Box sx={styles.banner.buttonGroup}>
              <Button sx={styles.banner.primaryButton}>
                <Text sx={styles.banner.buttonText}>Start Free Trial</Text>
                <Box sx={styles.banner.buttonArrow}>→</Box>
              </Button>
              <Button sx={styles.banner.secondaryButton}>
                <Text sx={styles.banner.buttonText}>Schedule Demo</Text>
              </Button>
            </Box>
            <Box sx={styles.banner.socialProof}>
              <Text sx={styles.banner.socialProofText}>
                Trusted by 500+ board members at leading companies
              </Text>
              <Box sx={styles.banner.avatarGroup}>
                <Box sx={styles.banner.avatar}>
                  <Image 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                    alt="Michael Rodriguez - CEO"
                    sx={styles.banner.avatarImage}
                  />
                  <Box sx={styles.banner.tooltip}>
                    <Text sx={styles.banner.tooltipName}>Michael Rodriguez</Text>
                    <Text sx={styles.banner.tooltipTitle}>CEO, InnovateLabs</Text>
                  </Box>
                </Box>
                <Box sx={styles.banner.avatar}>
                  <Image 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                    alt="Jennifer Kim - COO"
                    sx={styles.banner.avatarImage}
                  />
                  <Box sx={styles.banner.tooltip}>
                    <Text sx={styles.banner.tooltipName}>Jennifer Kim</Text>
                    <Text sx={styles.banner.tooltipTitle}>COO, GlobalTech</Text>
                  </Box>
                </Box>
                <Box sx={styles.banner.avatar}>
                  <Image 
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                    alt="David Thompson - Board Member"
                    sx={styles.banner.avatarImage}
                  />
                  <Box sx={styles.banner.tooltip}>
                    <Text sx={styles.banner.tooltipName}>David Thompson</Text>
                    <Text sx={styles.banner.tooltipTitle}>Board Member, FutureCorp</Text>
                  </Box>
                </Box>
                <Box sx={styles.banner.avatar}>
                  <Image 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                    alt="Lisa Wang - Director"
                    sx={styles.banner.avatarImage}
                  />
                  <Box sx={styles.banner.tooltip}>
                    <Text sx={styles.banner.tooltipName}>Lisa Wang</Text>
                    <Text sx={styles.banner.tooltipTitle}>Director, Quantum Systems</Text>
                  </Box>
                </Box>
                <Box sx={styles.banner.moreCount}>+495</Box>
              </Box>
            </Box>
           
          </Box>
          <Box sx={styles.banner.visualContainer}>
            <Box sx={styles.banner.dashboardContainer}>
              <Box sx={styles.banner.imageGlow}></Box>
              <Image
                src={BannerImg.src}
                alt="BoardHub Dashboard - Enterprise AI Board Management Platform"
                sx={styles.banner.dashboardImage}
              />
            </Box>
          </Box>
        </Box>
      </Container>
      <Box sx={styles.banner.backgroundElements}>
        <Box sx={styles.banner.gradientOrb1}></Box>
        <Box sx={styles.banner.gradientOrb2}></Box>
        <Box sx={styles.banner.meshGradient}></Box>
      </Box>
    </section>
  );
};

export default Banner;

const styles = {
  banner: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #ffffff 0%, #fafbff 30%, #f8fafc 100%)",
    display: "flex",
    alignItems: "center",
    paddingTop: '160px',
    position: "relative",
    overflow: "hidden",
    
    container: {
      maxWidth: "1440px",
      width: "100%",
      px: [5, null, 8],
      position: "relative",
      zIndex: 2,
    },
    
    content: {
      display: "grid",
      gridTemplateColumns: ["1fr", null, null, "1.1fr 1.3fr"],
      gap: [10, null, null, 12],
      alignItems: "center",
      minHeight: ["auto", null, null, "85vh"],
    },
    
    textContent: {
      maxWidth: ["100%", "680px", null, "none"],
      mx: ["auto", "auto", null, "0"],
      textAlign: ["center", null, null, "left"],
      pr: [0, null, null, 6],
    },
    
    badge: {
      display: "inline-flex",
      alignItems: "center",
      bg: "linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)",
      borderRadius: "60px",
      px: 5,
      py: 3,
      mb: 8,
      border: "1px solid rgba(59, 130, 246, 0.15)",
      backdropFilter: "blur(20px)",
      gap: 2,
    },
    
    badgeIcon: {
      fontSize: "16px",
      filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))",
    },
    
    badgeText: {
      fontSize: "15px",
      fontWeight: "700",
      background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      letterSpacing: "0.3px",
    },
    
    headline: {
      variant: "text.heroPrimary",
      fontFamily: "heading", // Use theme heading font
      fontWeight: "700",
      lineHeight: [1.2, null, 1.15, 1.1],
      color: "heading", // Use theme heading color
      mb: 6,
      letterSpacing: "heading", // Use theme letter spacing
    },
    
    highlightText: {
      color: "primary", // Use theme primary color
      position: "relative",
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-8px",
        left: 0,
        right: 0,
        height: "4px",
        background: "primary", // Use theme primary color
        borderRadius: "2px",
        opacity: 0.3,
      },
    },
    
    aiTagline: {
      display: "flex",
      justifyContent: ["center", null, null, "flex-start"],
      mb: 8,
      mt: 2,
    },
    
    aiTaglineText: {
      fontSize: ["14px", "15px", "16px"], // Smaller font size
      fontFamily: "body",
      fontWeight: "700", // Bold text
      color: "primary", // Blue color from theme
      letterSpacing: "0.3px",
      textTransform: "none", // Remove uppercase
    },
    
    aiEmphasis: {
      color: "primary", // Simple blue color, no gradient
      fontWeight: "700", // Bold
    },
    
    subheading: {
      variant: "text.heroSecondary",
      fontFamily: "body", // Use theme body font
      fontSize: ["18px", "19px", "20px", "21px"],
      lineHeight: "body", // Use theme body line height
      color: "text", // Use theme text color
      fontWeight: "400",
      mb: 12,
      px: 0, // Override theme's horizontal padding to ensure proper left alignment
      // Remove maxWidth and mx to inherit alignment from parent textContent container
    },
    
    features: {
      display: "flex",
      flexDirection: ["column", "row"],
      gap: [4, 6],
      mb: 12,
      justifyContent: ["center", null, null, "flex-start"],
      flexWrap: "wrap",
    },
    
    feature: {
      display: "flex",
      alignItems: "center",
      gap: 3,
      bg: "rgba(255, 255, 255, 0.9)",
      px: 5,
      py: 4,
      borderRadius: "20px",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
      border: "1px solid rgba(226, 232, 240, 0.8)",
      backdropFilter: "blur(20px)",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      "&:hover": {
        transform: "translateY(-3px)",
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.1)",
      },
    },
    
    featureIndicator: {
      width: "8px",
      height: "8px",
      bg: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      borderRadius: "50%",
      flexShrink: 0,
      boxShadow: "0 0 12px rgba(16, 185, 129, 0.4)",
    },
    
    featureText: {
      fontSize: "15px",
      fontWeight: "600",
      color: "#334155",
      whiteSpace: "nowrap",
    },
    
    buttonGroup: {
      display: "flex",
      flexDirection: ["column", "row"],
      gap: 5,
      justifyContent: ["center", null, null, "flex-start"],
      alignItems: ["center", "flex-start"],
      mb: 6,
      mt: 5,
    },
    
    primaryButton: {
      bg: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
      color: "white",
      px: 10,
      py: 5,
      fontSize: "16px",
      fontWeight: "700",
      borderRadius: "30px",
      border: "none",
      cursor: "pointer",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      display: "flex",
      alignItems: "center",
      gap: 3,
      boxShadow: "0 16px 40px rgba(59, 130, 246, 0.25)",
      position: "relative",
      overflow: "hidden",
      minWidth: "200px",
      justifyContent: "center",
      "&:hover": {
        transform: "translateY(-4px) scale(1.02)",
        boxShadow: "0 24px 50px rgba(59, 130, 246, 0.35)",
      },
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: "-100%",
        width: "100%",
        height: "100%",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
        transition: "left 0.5s",
      },
      "&:hover::before": {
        left: "100%",
      },
    },
    
    secondaryButton: {
      bg: "rgba(255, 255, 255, 0.95)",
      color: "#334155",
      border: "2px solid #e2e8f0",
      px: 10,
      py: 5,
      fontSize: "16px",
      fontWeight: "700",
      borderRadius: "30px",
      cursor: "pointer",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)",
      backdropFilter: "blur(20px)",
      minWidth: "200px",
      "&:hover": {
        bg: "#334155",
        color: "white",
        transform: "translateY(-4px) scale(1.02)",
        boxShadow: "0 20px 40px rgba(51, 65, 85, 0.2)",
        borderColor: "#334155",
      },
    },
    
    buttonText: {
      fontSize: "16px",
      fontWeight: "700",
      letterSpacing: "0.3px",
    },
    
    buttonArrow: {
      fontSize: "18px",
      transition: "transform 0.3s ease",
      display: "flex",
      alignItems: "center",
    },
    
    socialProof: {
      textAlign: ["center", null, null, "left"],
      mt: 2,
    },
    
    socialProofText: {
      fontSize: ["18px", "20px", "22px"],
      color: "#334155",
      mb: 6,
      fontWeight: "600",
      lineHeight: 1.4,
    },
    
    avatarGroup: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      justifyContent: ["center", null, null, "flex-start"],
      mb: 6,
      flexWrap: "wrap",
    },
    
    avatar: {
      position: "relative",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      "&:hover": {
        transform: "scale(1.1) translateY(-4px)",
        zIndex: 10,
      },
      "&:hover > div:last-child": {
        opacity: 1,
        visibility: "visible",
        transform: "translateX(-50%) translateY(-8px)",
      },
      "&:not(:first-of-type)": {
        ml: "-8px",
      },
    },
    
    avatarImage: {
      width: "56px",
      height: "56px",
      borderRadius: "50%",
      border: "3px solid white",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
      transition: "all 0.3s ease",
      objectFit: "cover",
      display: "block",
    },
    
    tooltip: {
      position: "absolute",
      bottom: "70px",
      left: "50%",
      transform: "translateX(-50%)",
      bg: "rgba(15, 23, 42, 0.95)",
      color: "white",
      px: 4,
      py: 3,
      borderRadius: "12px",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
      backdropFilter: "blur(20px)",
      opacity: 0,
      visibility: "hidden",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      zIndex: 50,
      whiteSpace: "nowrap",
      "&::after": {
        content: '""',
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        borderLeft: "6px solid transparent",
        borderRight: "6px solid transparent",
        borderTop: "6px solid rgba(15, 23, 42, 0.95)",
      },
    },
    
    tooltipName: {
      fontSize: "14px",
      fontWeight: "700",
      mb: 1,
      color: "white",
    },
    
    tooltipTitle: {
      fontSize: "12px",
      color: "rgba(255, 255, 255, 0.8)",
      fontWeight: "500",
    },
    
    moreCount: {
      width: "56px",
      height: "56px",
      borderRadius: "50%",
      bg: "rgba(255, 255, 255, 0.95)",
      color: "#3b82f6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      fontWeight: "700",
      border: "3px solid white",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
      backdropFilter: "blur(10px)",
      ml: "-8px",
    },
    
    trustIndicators: {
      display: "flex",
      gap: 4,
      justifyContent: ["center", null, null, "flex-start"],
      flexWrap: "wrap",
    },
    
    trustBadge: {
      fontSize: "13px",
      fontWeight: "600",
      color: "#059669",
      bg: "rgba(16, 185, 129, 0.1)",
      px: 4,
      py: 3,
      borderRadius: "16px",
      border: "1px solid rgba(16, 185, 129, 0.2)",
      backdropFilter: "blur(10px)",
      transition: "all 0.3s ease",
      "&:hover": {
        bg: "rgba(16, 185, 129, 0.15)",
        transform: "translateY(-2px)",
      },

    },
    
    visualContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-end",
      position: "absolute",
      top: "0",
      right: "-5vw",
      order: [-1, null, null, 1],
      width: "50vw",
      height: "100%",
      "@media screen and (max-width: 1023px)": {
        position: "relative",
        width: "100%",
        right: "0",
        alignItems: "center",
      },
    },
    
    dashboardContainer: {
      position: "relative",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      transition: "transform 0.5s ease",
      width: "100%",
      marginTop: "80px",
      "&:hover": {
        transform: "scale(1.02) translateY(-8px)",
      },
      "@media screen and (max-width: 1023px)": {
        justifyContent: "center",
        marginTop: "0",
        alignItems: "center",
      },
    },
    
    imageGlow: {
      position: "absolute",
      top: "-20px",
      left: "-20px",
      right: "-20px",
      bottom: "-20px",
      background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
      borderRadius: "32px",
      filter: "blur(30px)",
      zIndex: -1,
    },
    
    dashboardImage: {
      width: '100%',
      height: 'auto',
      maxWidth: '550px',
      borderRadius: '28px',
      boxShadow:
        '0 50px 100px rgba(0, 0, 0, 0.12), 0 20px 40px rgba(0, 0, 0, 0.08)',
      border: '2px solid rgba(255, 255, 255, 0.8)',
      display: 'block',
      position: 'relative',
      zIndex: 1,
      '@media screen and (min-width: 640px)': {
        maxWidth: '600px',
      },
      '@media screen and (min-width: 968px)': {
        maxWidth: '700px',
      },
      '@media screen and (min-width: 1200px)': {
        maxWidth: '800px',
      },
      '@media screen and (min-width: 1400px)': {
        maxWidth: '650px',
      },
      '@media screen and (min-width: 1600px)': {
        maxWidth: '400px',
      },
    },
    
    backgroundElements: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      pointerEvents: "none",
    },
    
    gradientOrb1: {
      position: "absolute",
      top: "5%",
      right: "8%",
      width: "500px",
      height: "500px",
      background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
      borderRadius: "50%",
      filter: "blur(60px)",
      animation: "float 8s ease-in-out infinite",
    },
    
    gradientOrb2: {
      position: "absolute",
      bottom: "15%",
      left: "3%",
      width: "400px",
      height: "400px",
      background: "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)",
      borderRadius: "50%",
      filter: "blur(50px)",
      animation: "float 6s ease-in-out infinite reverse",
    },
    
    meshGradient: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `
        radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)
      `,
      opacity: 0.6,
    },
  },
};
