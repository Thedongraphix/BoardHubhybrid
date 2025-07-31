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
    backgroundColor: "transparent",
    transition: "all 0.3s ease",
    zIndex: 1000,
    
    "&.scrolled": {
      py: [2, 3],
    },
    
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
      px: [4, 5],
      py: [2, 3],
      fontSize: ["14px", 2],
      borderRadius: "35px",
      fontWeight: 600,
      backgroundColor: "#3b82f6",
      color: "white",
      border: "none",
      transition: "all 0.2s ease",
      
      "&:hover": {
        backgroundColor: "#2563eb",
        transform: "translateY(-1px)",
        boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
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
      gap: [4, 6],
    },
    
    a: {
      fontSize: [1, 2],
      fontWeight: 500,
      px: [3, 4],
      py: 2,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.3s ease",
      color: "#64748b",
      display: "inline-block",
      transformOrigin: "center",
      
      "&:hover": {
        color: "#1a202c",
        transform: "scale(1.1)",
      },
      
      "&.active": {
        color: "#3b82f6",
        fontWeight: 600,
      },
    },
  },
};