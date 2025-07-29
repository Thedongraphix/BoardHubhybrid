import { DrawerProvider } from "#contexts/drawer/drawer.provider";
import { Link } from "react-scroll";
import Logo from "#components/logo";
import { Button, Container, Flex } from "@theme-ui/components";
import LogoDark from "../../assets/boardhublogo.png";
import menuItems from "./header.data";
import { keyframes } from "@emotion/react";
import MobileDrawer from "./mobile-drawer";
import { useState, useEffect } from "react";

export default function Header({ className }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <DrawerProvider>
      <header 
        sx={styles.header} 
        className={`${className} ${isScrolled ? 'scrolled' : ''}`} 
        id="header"
      >
        <Container sx={styles.container}>
          <Logo src={LogoDark.src} />
          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <Link key={i} to={path} spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
                {label}
              </Link>
            ))}
          </Flex>
          <Button 
            as="a"
            href="https://portal.boardhubmeetings.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="donate__btn" 
            variant="secondary" 
            aria-label="Get Started"
          >
            Get Started
          </Button>
          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: [3, 4],
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(226, 232, 240, 0.3)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    zIndex: 1000,
    
    "&.scrolled": {
      py: [2, 3],
      backgroundColor: "rgba(255, 255, 255, 0.98)",
      boxShadow: "0 4px 32px rgba(0, 0, 0, 0.08)",
      borderBottom: "1px solid rgba(226, 232, 240, 0.5)",
    },
    
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
      px: [4, 5],
      py: [2, 3],
      fontSize: ["14px", 2],
      borderRadius: "12px",
      fontWeight: 600,
      border: "2px solid #3b82f6",
      backgroundColor: "transparent",
      color: "#3b82f6",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      
      "&:hover": {
        backgroundColor: "#3b82f6",
        color: "white",
        transform: "translateY(-2px)",
        boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
      },
    },
  },
  
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: ["60px", "70px", "80px"],
    position: "relative",
  },
  
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "flex",
      alignItems: "center",
      gap: [4, 5],
    },
    
    a: {
      fontSize: [1, 2],
      fontWeight: 500,
      px: [3, 4],
      py: 2,
      cursor: "pointer",
      lineHeight: "1.2",
      borderRadius: "8px",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      position: "relative",
      
      "&:hover": {
        color: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
      },
      
      "&.active": {
        color: "#3b82f6",
        fontWeight: 600,
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-2px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "20px",
          height: "2px",
          backgroundColor: "#3b82f6",
          borderRadius: "1px",
        },
      },
    },
  },
};