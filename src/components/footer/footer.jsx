import React from "react";
import { Box, Container, Grid, Heading, Text, Button, Input, Flex, Link as ThemeLink, Image } from "@theme-ui/components";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import Logo from "../logo";
import LogoDark from "../../assets/boardhublogo.png";

const Footer = () => {
  return (
    <footer sx={styles.footer}>
      <Container sx={styles.container}>
        {/* Main Footer Content */}
        <Grid sx={styles.footerGrid}>
          
          {/* Brand & Newsletter Section */}
          <Box sx={styles.brandSection}>
            <Logo src={LogoDark.src} />
            <Text sx={styles.brandDescription}>
              Empowering boards with AI-driven governance solutions for the modern enterprise.
            </Text>
            
            {/* Newsletter Subscription */}
            <Box sx={styles.newsletterSection}>
              <Heading as="h4" sx={styles.newsletterTitle}>
                Stay Updated
              </Heading>
              <Text sx={styles.newsletterDescription}>
                Get the latest insights on board governance and platform updates.
              </Text>
              <Flex sx={styles.newsletterForm}>
                <Input
                  placeholder="Enter your email"
                  sx={styles.newsletterInput}
                />
                <Button sx={styles.newsletterButton}>
                  <IoArrowForward />
                </Button>
              </Flex>
            </Box>
          </Box>

          {/* Product Links */}
          <Box sx={styles.linkSection}>
            <Heading as="h4" sx={styles.linkTitle}>Platform</Heading>
            <Box sx={styles.linkList}>
              <ThemeLink href="#features" sx={styles.link}>AI Dashboard</ThemeLink>
              <ThemeLink href="#security" sx={styles.link}>Security & Compliance</ThemeLink>
              <ThemeLink href="#mobile" sx={styles.link}>Mobile Apps</ThemeLink>
              <ThemeLink href="#integrations" sx={styles.link}>Integrations</ThemeLink>
              <ThemeLink href="#analytics" sx={styles.link}>Meeting Analytics</ThemeLink>
            </Box>
          </Box>

          {/* Solutions Links */}
          <Box sx={styles.linkSection}>
            <Heading as="h4" sx={styles.linkTitle}>Solutions</Heading>
            <Box sx={styles.linkList}>
              <ThemeLink href="#board-directors" sx={styles.link}>Board Directors</ThemeLink>
              <ThemeLink href="#secretaries" sx={styles.link}>Company Secretaries</ThemeLink>
              <ThemeLink href="#enterprise" sx={styles.link}>Enterprise</ThemeLink>
              <ThemeLink href="#governance" sx={styles.link}>Governance Tools</ThemeLink>
              <ThemeLink href="#compliance" sx={styles.link}>Compliance Management</ThemeLink>
            </Box>
          </Box>

          {/* Company & Support Links */}
          <Box sx={styles.linkSection}>
            <Heading as="h4" sx={styles.linkTitle}>Company</Heading>
            <Box sx={styles.linkList}>
              <ThemeLink href="#about" sx={styles.link}>About Us</ThemeLink>
              <ThemeLink href="#careers" sx={styles.link}>Careers</ThemeLink>
              <ThemeLink href="#blog" sx={styles.link}>Blog</ThemeLink>
              <ThemeLink href="#contact" sx={styles.link}>Contact</ThemeLink>
              <ThemeLink href="#support" sx={styles.link}>Help Center</ThemeLink>
            </Box>
          </Box>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={styles.footerBottom}>
          <Flex sx={styles.bottomContent}>
            <Box sx={styles.legalLinks}>
              <ThemeLink href="#privacy" sx={styles.legalLink}>Privacy Policy</ThemeLink>
              <ThemeLink href="#terms" sx={styles.legalLink}>Terms of Service</ThemeLink>
              <ThemeLink href="#security" sx={styles.legalLink}>Security</ThemeLink>
            </Box>
            
            <Text sx={styles.copyright}>
              © 2025 BoardHub. All rights reserved.
            </Text>
            
            <Flex sx={styles.socialLinks}>
              <ThemeLink href="#" sx={styles.socialLink} aria-label="LinkedIn">
                <FaLinkedin />
              </ThemeLink>
              <ThemeLink href="#" sx={styles.socialLink} aria-label="Twitter">
                <FaTwitter />
              </ThemeLink>
              <ThemeLink href="#" sx={styles.socialLink} aria-label="GitHub">
                <FaGithub />
              </ThemeLink>
              <ThemeLink href="#" sx={styles.socialLink} aria-label="Contact">
                <FaEnvelope />
              </ThemeLink>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    // FOOTER BACKGROUND & SPACING - Adjust these values to change footer appearance
    bg: "rgba(15, 23, 42, 0.97)", // Dark background with slight transparency
    backdropFilter: "blur(20px)",
    borderTop: "1px solid rgba(226, 232, 240, 0.1)",
    pt: ["60px", null, "80px"],
    pb: ["40px", null, "50px"],
    mt: ["80px", null, "120px"],
  },
  
  container: {
    maxWidth: "1440px",
  },
  
  footerGrid: {
    // FOOTER LAYOUT - Adjust grid columns for different layouts
    display: "grid",
    gridTemplateColumns: ["1fr", null, "2fr 1fr 1fr 1fr"], // 4-column layout on desktop
    gap: ["40px", null, "60px"],
    mb: ["50px", null, "60px"],
  },
  
  brandSection: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  
  brandDescription: {
    color: "rgba(226, 232, 240, 0.8)",
    fontSize: "16px",
    lineHeight: 1.6,
    mt: 4,
    maxWidth: "280px",
  },
  
  newsletterSection: {
    mt: 6,
  },
  
  newsletterTitle: {
    // NEWSLETTER SECTION TITLES - Adjust font sizes here
    color: "white",
    fontSize: "18px",
    fontWeight: "700",
    mb: 3,
  },
  
  newsletterDescription: {
    color: "rgba(226, 232, 240, 0.7)",
    fontSize: "14px",
    lineHeight: 1.5,
    mb: 4,
  },
  
  newsletterForm: {
    gap: 2,
    alignItems: "stretch",
  },
  
  newsletterInput: {
    flex: 1,
    bg: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(226, 232, 240, 0.2)",
    borderRadius: "12px",
    color: "white",
    fontSize: "14px",
    px: 4,
    py: 3,
    "&::placeholder": {
      color: "rgba(226, 232, 240, 0.5)",
    },
    "&:focus": {
      outline: "none",
      borderColor: "#3b82f6",
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
    },
  },
  
  newsletterButton: {
    bg: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    px: 4,
    py: 3,
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "16px",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
    },
  },
  
  linkSection: {
    display: "flex",
    flexDirection: "column",
  },
  
  linkTitle: {
    // FOOTER SECTION TITLES - Adjust these values to change section heading sizes
    color: "white",
    fontSize: "16px",
    fontWeight: "700",
    mb: 4,
  },
  
  linkList: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  
  link: {
    color: "rgba(226, 232, 240, 0.8)",
    fontSize: "14px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    "&:hover": {
      color: "#3b82f6",
      transform: "translateX(4px)",
    },
  },
  
  footerBottom: {
    borderTop: "1px solid rgba(226, 232, 240, 0.1)",
    pt: 5,
  },
  
  bottomContent: {
    alignItems: "center",
    justifyContent: ["center", null, "space-between"],
    flexDirection: ["column", null, "row"],
    gap: 4,
  },
  
  legalLinks: {
    display: "flex",
    gap: 4,
    flexWrap: "wrap",
    justifyContent: ["center", null, "flex-start"],
  },
  
  legalLink: {
    color: "rgba(226, 232, 240, 0.6)",
    fontSize: "13px",
    textDecoration: "none",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#3b82f6",
    },
  },
  
  copyright: {
    color: "rgba(226, 232, 240, 0.6)",
    fontSize: "13px",
    textAlign: ["center", null, "left"],
  },
  
  socialLinks: {
    gap: 4,
    alignItems: "center",
  },
  
  socialLink: {
    // SOCIAL MEDIA ICONS - Adjust sizes and hover effects here
    color: "rgba(226, 232, 240, 0.6)",
    fontSize: "18px",
    transition: "all 0.3s ease",
    p: 2,
    borderRadius: "8px",
    "&:hover": {
      color: "#3b82f6",
      bg: "rgba(59, 130, 246, 0.1)",
      transform: "translateY(-2px)",
    },
  },
};