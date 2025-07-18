import React from "react";
import data from "./footer.data";
import {
  Box,
  Container,
  Grid,
  Heading,
  Image,
  Text,
  Button,
} from "@theme-ui/components";
import { Link } from "#components/link";
import FooterLogo from "../../assets/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer sx={styles.footer}>
      {/* Premium CTA Section */}
      <Box sx={styles.ctaSection}>
        <Container>
          <Box sx={styles.ctaContent}>
            <Box sx={styles.ctaText}>
              <Heading sx={styles.ctaTitle}>
                Ready to Transform Your Board Operations?
              </Heading>
              <Text sx={styles.ctaSubtitle}>
                Join 500+ organizations using BoardHub to revolutionize their governance
              </Text>
            </Box>
            <Box sx={styles.ctaButtons}>
              <Button sx={styles.primaryCtaButton}>
                Start Free Trial
              </Button>
              <Button sx={styles.secondaryCtaButton}>
                Schedule Demo
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container>
        {/* Main Footer Content */}
        <Box sx={styles.footerMain}>
          <Grid sx={styles.footerGrid}>
            {/* Brand Column */}
            <Box sx={styles.brandColumn}>
              <Image src={FooterLogo} alt="BoardHub" sx={styles.logo} />
              <Text sx={styles.brandDescription}>
                The world&apos;s most advanced board governance platform. Trusted by Fortune 500 companies to streamline operations and enhance decision-making.
              </Text>
              <Box sx={styles.statsRow}>
                <Box sx={styles.statItem}>
                  <Text sx={styles.statNumber}>500+</Text>
                  <Text sx={styles.statLabel}>Organizations</Text>
                </Box>
                <Box sx={styles.statItem}>
                  <Text sx={styles.statNumber}>99.9%</Text>
                  <Text sx={styles.statLabel}>Uptime</Text>
                </Box>
                <Box sx={styles.statItem}>
                  <Text sx={styles.statNumber}>2M+</Text>
                  <Text sx={styles.statLabel}>Decisions</Text>
                </Box>
              </Box>
            </Box>

            {/* Product Column */}
            <Box sx={styles.footerColumn}>
              <Heading sx={styles.columnTitle}>Product</Heading>
              <Box sx={styles.linkList}>
                <Link href="#" sx={styles.footerLink}>
                  <Text>Dashboard</Text>
                  <Text sx={styles.linkBadge}>New</Text>
                </Link>
                <Link href="#" sx={styles.footerLink}>
                  <Text>Meeting Management</Text>
                </Link>
                <Link href="#" sx={styles.footerLink}>
                  <Text>Document Center</Text>
                </Link>
                <Link href="#" sx={styles.footerLink}>
                  <Text>Analytics & Reports</Text>
                </Link>
                <Link href="#" sx={styles.footerLink}>
                  <Text>Security & Compliance</Text>
                </Link>
                <Link href="#" sx={styles.footerLink}>
                  <Text>API & Integrations</Text>
                </Link>
              </Box>
            </Box>

            {/* Solutions Column */}
            <Box sx={styles.footerColumn}>
              <Heading sx={styles.columnTitle}>Solutions</Heading>
              <Box sx={styles.linkList}>
                <Link href="#" sx={styles.footerLink}>
                  <Text>Board Directors</Text>
                </Link>
                <Link href="#" sx={styles.footerLink}>
                  <Text>Company Secretaries</Text>
                </Link>
                <Link href="#" sx={styles.footerLink}>
                  <Text>Executive Teams</Text>
                </Link>
                <Link href="#" sx={styles.footerLink}>
                  <Text>Committee Management</Text>
                </Link>
                <Link href="#" sx={styles.footerLink}>
                  <Text>Legal & Compliance</Text>
                </Link>
              </Box>
            </Box>

            {/* Resources Column */}
            <Box sx={styles.footerColumn}>
              <Heading sx={styles.columnTitle}>Resources</Heading>
              <Box sx={styles.linkList}>
                <Link href="#" sx={styles.footerLink}>
                  <Text>Help Center</Text>
                </Link>
                <Link href="#" sx={styles.footerLink}>
                  <Text>Best Practices</Text>
                </Link>
                <Link href="#" sx={styles.footerLink}>
                  <Text>Webinars</Text>
                </Link>
                <Link href="#" sx={styles.footerLink}>
                  <Text>Case Studies</Text>
                </Link>
                <Link href="#" sx={styles.footerLink}>
                  <Text>Blog</Text>
                </Link>
                <Link href="#" sx={styles.footerLink}>
                  <Text>Community</Text>
                </Link>
              </Box>
            </Box>

            {/* Company Column */}
            <Box sx={styles.footerColumn}>
              <Heading sx={styles.columnTitle}>Company</Heading>
              <Box sx={styles.linkList}>
                <Link href="#" sx={styles.footerLink}>
                  <Text>About Us</Text>
                </Link>
                <Link href="#" sx={styles.footerLink}>
                  <Text>Careers</Text>
                  <Text sx={styles.linkBadge}>We&apos;re hiring</Text>
                </Link>
                <Link href="#" sx={styles.footerLink}>
                  <Text>Press & Media</Text>
                </Link>
                <Link href="#" sx={styles.footerLink}>
                  <Text>Partner Program</Text>
                </Link>
                <Link href="#" sx={styles.footerLink}>
                  <Text>Contact Sales</Text>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Box>

        {/* Footer Bottom */}
        <Box sx={styles.footerBottom}>
          <Box sx={styles.bottomContent}>
            <Box sx={styles.leftBottom}>
              <Text sx={styles.copyright}>
                © {currentYear} BoardHub. All rights reserved.
              </Text>
              <Box sx={styles.certifications}>
                <Text sx={styles.certText}>SOC 2 Certified</Text>
                <Text sx={styles.certText}>ISO 27001</Text>
                <Text sx={styles.certText}>GDPR Compliant</Text>
              </Box>
            </Box>
            <Box sx={styles.rightBottom}>
              <Box sx={styles.bottomLinks}>
                <Link href="#" sx={styles.bottomLink}>Privacy Policy</Link>
                <Link href="#" sx={styles.bottomLink}>Terms of Service</Link>
                <Link href="#" sx={styles.bottomLink}>Cookie Policy</Link>
                <Link href="#" sx={styles.bottomLink}>Security</Link>
              </Box>
              <Box sx={styles.socialIcons}>
                <Link href="#" sx={styles.socialLink}>
                  <Box sx={styles.socialIcon}>𝕏</Box>
                </Link>
                <Link href="#" sx={styles.socialLink}>
                  <Box sx={styles.socialIcon}>in</Box>
                </Link>
                <Link href="#" sx={styles.socialLink}>
                  <Box sx={styles.socialIcon}>📧</Box>
                </Link>
                <Link href="#" sx={styles.socialLink}>
                  <Box sx={styles.socialIcon}>🌐</Box>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      
      {/* Background Elements */}
      <Box sx={styles.backgroundElements}>
        <Box sx={styles.gradientOrb1}></Box>
        <Box sx={styles.gradientOrb2}></Box>
        <Box sx={styles.meshPattern}></Box>
      </Box>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    background: 'linear-gradient(160deg, #0a0f1c 0%, #1e293b 35%, #334155 100%)',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    mt: 0,
  },

  ctaSection: {
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    py: [10, 12, 14],
    position: 'relative',
    zIndex: 2,
  },

  ctaContent: {
    display: 'flex',
    flexDirection: ['column', null, 'row'],
    alignItems: ['center', null, 'center'],
    justifyContent: 'space-between',
    gap: [6, 8],
    textAlign: ['center', null, 'left'],
  },

  ctaText: {
    flex: 1,
    maxWidth: ['100%', null, '600px'],
  },

  ctaTitle: {
    fontSize: ['28px', '36px', '42px'],
    fontWeight: '800',
    lineHeight: 1.1,
    mb: 4,
    background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },

  ctaSubtitle: {
    fontSize: ['18px', '20px'],
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 1.5,
    maxWidth: '500px',
    mx: ['auto', null, '0'],
  },

  ctaButtons: {
    display: 'flex',
    flexDirection: ['column', 'row'],
    gap: 4,
    alignItems: 'center',
  },

  primaryCtaButton: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '16px',
    px: 8,
    py: 4,
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3)',
    minWidth: '180px',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 12px 40px rgba(59, 130, 246, 0.4)',
    },
  },

  secondaryCtaButton: {
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    px: 8,
    py: 4,
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    minWidth: '180px',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.15)',
      borderColor: 'rgba(255, 255, 255, 0.3)',
      transform: 'translateY(-2px)',
    },
  },
  
  footerMain: {
    py: [12, 14, 16],
    position: 'relative',
    zIndex: 2,
  },
  
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: [
      '1fr',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
      '2fr repeat(4, 1fr)'
    ],
    gap: [8, 10, 12],
    alignItems: 'start',
  },
  
  brandColumn: {
    gridColumn: ['1/-1', '1/-1', '1/span 1', '1/span 1'],
    pr: [0, 0, 0, 8],
  },
  
  logo: {
    width: '180px',
    height: 'auto',
    mb: 6,
    filter: 'brightness(0) invert(1)',
  },
  
  brandDescription: {
    fontSize: ['16px', '18px'],
    lineHeight: 1.6,
    color: 'rgba(255, 255, 255, 0.8)',
    mb: 8,
    maxWidth: '360px',
  },

  statsRow: {
    display: 'flex',
    gap: 6,
    flexWrap: 'wrap',
    mt: 6,
  },

  statItem: {
    textAlign: 'center',
    minWidth: '80px',
  },

  statNumber: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#3b82f6',
    lineHeight: 1,
    display: 'block',
  },

  statLabel: {
    fontSize: '12px',
    color: 'rgba(255, 255, 255, 0.6)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    mt: 1,
  },
  
  footerColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  
  columnTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '700',
    color: 'white',
    mb: 6,
    letterSpacing: '-0.5px',
  },
  
  linkList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  
  footerLink: {
    fontSize: ['15px', '16px'],
    color: 'rgba(255, 255, 255, 0.7)',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    padding: '8px 12px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&:hover': {
      color: '#3b82f6',
      background: 'rgba(59, 130, 246, 0.1)',
      transform: 'translateX(4px)',
    },
  },

  linkBadge: {
    fontSize: '10px',
    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    color: 'white',
    px: 2,
    py: 1,
    borderRadius: '6px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  
  footerBottom: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    py: 8,
    position: 'relative',
    zIndex: 2,
  },
  
  bottomContent: {
    display: 'flex',
    flexDirection: ['column', null, 'row'],
    justifyContent: 'space-between',
    alignItems: ['center', null, 'center'],
    gap: [6, null, 0],
  },

  leftBottom: {
    display: 'flex',
    flexDirection: ['column', 'row'],
    alignItems: ['center', 'center'],
    gap: [3, 6],
  },
  
  copyright: {
    fontSize: ['14px', '15px'],
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
  },

  certifications: {
    display: 'flex',
    gap: 4,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  certText: {
    fontSize: '12px',
    color: 'rgba(16, 185, 129, 0.8)',
    background: 'rgba(16, 185, 129, 0.1)',
    px: 3,
    py: 1,
    borderRadius: '6px',
    border: '1px solid rgba(16, 185, 129, 0.2)',
  },

  rightBottom: {
    display: 'flex',
    flexDirection: ['column', 'row'],
    alignItems: 'center',
    gap: [4, 6],
  },
  
  bottomLinks: {
    display: 'flex',
    gap: [4, 6],
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  
  bottomLink: {
    fontSize: ['14px', '15px'],
    color: 'rgba(255, 255, 255, 0.6)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: '#3b82f6',
    },
  },

  socialIcons: {
    display: 'flex',
    gap: 3,
  },
  
  socialLink: {
    textDecoration: 'none',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'translateY(-3px)',
    },
  },
  
  socialIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    color: 'white',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    '&:hover': {
      background: 'rgba(59, 130, 246, 0.2)',
      borderColor: 'rgba(59, 130, 246, 0.3)',
      boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)',
    },
  },

  backgroundElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    pointerEvents: 'none',
  },

  gradientOrb1: {
    position: 'absolute',
    top: '20%',
    right: '10%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(80px)',
  },

  gradientOrb2: {
    position: 'absolute',
    bottom: '10%',
    left: '5%',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
  },

  meshPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)
    `,
    opacity: 0.6,
  },
};
