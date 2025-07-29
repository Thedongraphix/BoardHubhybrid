import Drawer from "#components/drawer";
import { Box, Button, Text } from "@theme-ui/components";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { FaDribbble, FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import React, { useCallback, useContext } from "react";
import { DrawerContext } from "#contexts/drawer/drawer.context";
import menuItems from "./header.data";
import { Link } from "react-scroll";

const social = [
  {
    path: "/",
    icon: <FaFacebookF />,
  },
  {
    path: "/",
    icon: <FaTwitter />,
  },
  {
    path: "/",
    icon: <FaGithub />,
  },
  {
    path: "/",
    icon: <FaDribbble />,
  },
];

const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);

  const toggleHandler = useCallback(() => {
    dispatch({
      type: "TOGGLE",
    });
  }, [dispatch]);

  const closeDrawer = useCallback(() => {
    dispatch({
      type: "TOGGLE",
    });
  }, [dispatch]);

  return (
    <Drawer
      width="100%"
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={
        <Box sx={styles.closeButton}>
          <IoMdClose size="24px" color="#1a202c" />
        </Box>
      }
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
      drawerHandler={
        <Box sx={styles.handler}>
          <Box sx={styles.hamburger}>
            <Box sx={styles.hamburgerLine}></Box>
            <Box sx={styles.hamburgerLine}></Box>
            <Box sx={styles.hamburgerLine}></Box>
          </Box>
        </Box>
      }>
      <Box sx={styles.scrollContainer}>
        <Box sx={styles.content}>
          <Box sx={styles.header}>
            <Text sx={styles.brandText}>BoardHub</Text>
            <Text sx={styles.brandSubtext}>Board Management Suite</Text>
          </Box>
          
          <Box sx={styles.menu}>
            {menuItems.map(({ path, label }, i) => (
              <Link
                key={i}
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeDrawer}>
                <Box sx={styles.menuItem}>
                  <Text sx={styles.menuText}>{label}</Text>
                  <Box sx={styles.menuArrow}>→</Box>
                </Box>
              </Link>
            ))}
          </Box>

          <Box sx={styles.menuFooter}>
            <Button 
              as="a"
              href="https://portal.boardhubmeetings.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.mobileButton}
            >
              <Text sx={styles.mobileButtonText}>Get Started</Text>
            </Button>
            
            <Box sx={styles.social}>
              {social.map(({ path, icon }, i) => (
                <Box as="span" key={i} sx={styles.socialIcon}>
                  <Link to={path}>{icon}</Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;

const styles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    backgroundColor: "rgba(59, 130, 246, 0.1)",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      transform: "scale(1.05)",
    },
    "@media screen and (min-width: 1024px)": {
      display: "none",
    },
  },
  
  hamburger: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    width: "24px",
    height: "18px",
    justifyContent: "space-between",
  },
  
  hamburgerLine: {
    width: "100%",
    height: "3px",
    backgroundColor: "#3b82f6",
    borderRadius: "2px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  
  drawer: {
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 251, 255, 0.98) 30%, rgba(248, 250, 252, 0.98) 100%)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
  },
  
  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "30px",
    right: "30px",
    zIndex: "1",
    cursor: "pointer",
  },
  
  closeButton: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "rgba(26, 32, 44, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      backgroundColor: "rgba(26, 32, 44, 0.2)",
      transform: "scale(1.1)",
    },
  },
  
  scrollContainer: {
    width: "100%",
    height: "100%",
    overflowY: "auto",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgba(59, 130, 246, 0.3)",
      borderRadius: "3px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "rgba(59, 130, 246, 0.5)",
    },
  },
  
  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    pt: "120px",
    pb: "40px",
    px: "30px",
  },
  
  header: {
    textAlign: "center",
    mb: 8,
    pb: 6,
    borderBottom: "1px solid rgba(226, 232, 240, 0.6)",
  },
  
  brandText: {
    fontSize: "28px",
    fontWeight: "800",
    color: "#1a202c",
    mb: 2,
    background: "linear-gradient(135deg, #1a202c 0%, #3b82f6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  
  brandSubtext: {
    fontSize: "16px",
    color: "#64748b",
    fontWeight: "500",
  },
  
  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  
  menuItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    py: 5,
    px: 4,
    borderRadius: "16px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(59, 130, 246, 0.05)",
      transform: "translateX(8px)",
    },
    "&.active": {
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      borderLeft: "4px solid #3b82f6",
    },
  },
  
  menuText: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1a202c",
  },
  
  menuArrow: {
    fontSize: "16px",
    color: "#64748b",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    opacity: 0,
    transform: "translateX(-10px)",
    ".menuItem:hover &": {
      opacity: 1,
      transform: "translateX(0)",
      color: "#3b82f6",
    },
  },
  
  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: "auto",
    pt: 8,
    gap: 6,
  },
  
  mobileButton: {
    bg: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    color: "white",
    border: "none",
    borderRadius: "16px",
    px: 8,
    py: 4,
    fontSize: "18px",
    fontWeight: "700",
    cursor: "pointer",
    width: "100%",
    maxWidth: "280px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 8px 32px rgba(59, 130, 246, 0.3)",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 12px 40px rgba(59, 130, 246, 0.4)",
    },
  },
  
  mobileButtonText: {
    fontSize: "18px",
    fontWeight: "700",
    color: "white",
  },
  
  social: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  
  socialIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "rgba(59, 130, 246, 0.1)",
    color: "#3b82f6",
    fontSize: "20px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#3b82f6",
      color: "white",
      transform: "translateY(-2px) scale(1.1)",
    },
  },
};
