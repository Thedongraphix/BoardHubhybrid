const theme = {
  // BoardHub Blue Color Palette
  colors: {
    text: "#1E3A8A", // Deep blue for main text
    text_secondary: "#1E40AF", // Medium blue for secondary text
    heading: "#0F172A", // Very dark blue/slate for headings
    heading_secondary: "#1E293B", // Dark blue-gray for secondary headings
    background: "#FFFFFF", // Clean white background
    background_secondary: "#F0F9FF", // Very light blue background
    border_color: "#DBEAFE", // Light blue border
    yellow: "#3B82F6", // Replace yellow with blue
    primary: "#2563EB", // Main BoardHub blue
    secondary: "#60A5FA", // Light blue secondary
    muted: "#E2E8F0", // Light blue-gray muted
    accent: "#1D4ED8", // Accent blue
    // Light blue variants for various uses
    blue_50: "#EFF6FF",
    blue_100: "#DBEAFE", 
    blue_200: "#BFDBFE",
    blue_300: "#93C5FD",
    blue_400: "#60A5FA",
    blue_500: "#3B82F6",
    blue_600: "#2563EB",
    blue_700: "#1D4ED8",
    blue_800: "#1E40AF",
    blue_900: "#1E3A8A",
    // Additional theme colors
    white: "#FFFFFF",
    dark: "#0F172A",
    text_white: "#FFFFFF",
    // Highlight colors using blue theme
    success: "#10B981",
    warning: "#F59E0B", 
    error: "#EF4444",
    info: "#3B82F6",
  },

  breakpoints: [
    "480px",
    "640px",
    "768px",
    "1024px",
    "1220px",
    "1366px",
    "1620px",
  ],
  fonts: {
    body: "'Outfit', system-ui, -apple-system, sans-serif",
    heading: "'Space Grotesk', system-ui, -apple-system, sans-serif",
  },
  // Font sizes array - INDEX REFERENCE FOR EASY ADJUSTMENT:
  // [0]=12px, [1]=15px, [2]=16px, [3]=18px, [4]=20px, [5]=22px, [6]=24px, 
  // [7]=36px, [8]=42px, [9]=48px, [10]=54px, [11]=60px, [12]=68px, [13]=76px
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 36, 42, 48, 54, 60, 68, 76],
  fontWeights: {
    body: "normal",
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
    heading: "-0.5px",
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: [
        "100%",
        null,
        null,
        "780px",
        "1020px",
        "1200px",
        null,
        "1310px",
      ],
      px: [4, 6],
    },
    header: {
      color: "heading",
      fontWeight: "normal",
      py: 3,
      position: "absolute",
      width: "100%",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    main: {},
  },
  section: {
    keyFeature: {
      pt: [8, null, 9, null, null, 10],
      pb: ["90px", null, 9, null, null, 10, null, "165px"],
    },
    feature: {
      pb: [8, null, 9, null, null, 10, null, "170px"],
    },
    coreFeature: {
      pb: [8, null, 9, null, null, 10, null, "170px"],
      overflow: "hidden",
    },
    services: {
      pb: [8, null, 9, null, null, 10, null, "170px"],
    },
    pricing: {
      pt: [8, null, 9, null, null, 10, null, "180px"],
      pb: ["90px", null, 9, null, null, 10, null, "180px"],
    },
    testimonial: {
      pt: [4, null, 4, "20px", null, 4, null, "40px"], // Reduced top padding significantly
      pb: ["90px", null, 9, null, null, 10, null, "190px"],
      overflow: "hidden",
    },
    news: {
      pb: [8, null, 9, null, null, 10, null, "170px"],
    },
  },
  sectionHeader: {
    width: ["100%", null, "540px"],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mx: "auto",
    mt: ["3px", null, -1],
    marginBottom: ["50px", null, "60px", null, null, "65px", null, "80px"],
    title: {
      // SECTION HEADER TITLES - Adjust these values to change section heading sizes
      // Mobile: 36px, Tablet: 40px, Desktop: 44px, Large: 48px
      fontSize: ["36px", null, "40px", null, null, "44px", null, "48px"],
      lineHeight: [1.3, null, null, 1.25],
      textAlign: "center",
      fontWeight: "700",
      letterSpacing: "-.5px",
      color: "heading",
    },
    subTitle: {
      fontSize: [0, "13px", null, "14px"],
      color: "primary",
      textAlign: "center",
      letterSpacing: ["1.5px", null, "2px"],
      textTransform: "uppercase",
      fontWeight: "700",
      mb: 2,
      lineHeight: 1.5,
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heeding",
      fontWeight: "heading",
      fontSize: [4],
      letterSpacing: "-.55px",
      color: "heading",
    },
    heroPrimary: {
      color: "heading",
      // HERO/MAIN HEADINGS - Adjust these values to change hero section heading sizes
      // Mobile: 42px, Small: 48px, Medium: 54px, Large: 60px, XL: 68px, XXL: 76px
      fontSize: [
        "42px",
        "48px", 
        "54px",
        "52px",
        "54px",
        "60px",
        "68px",
        "76px",
      ],
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 700,
      mb: [4, null, null, null, null, 5],
    },
    heroSecondary: {
      fontSize: [2, null, "17px", null, null, "19px", 4],
      lineHeight: [1.9, null, null, 2],
      fontWeight: "body",
      mb: 5,
      px: [0, null, 5, 6, null, 8, 9],
      color: "heading",
    },
  },
  links: {
    default: {
      cursor: "pointer",
    },
    bold: {
      fontWeight: "bold",
    },
    logo: {
      display: "flex",
    },
    blog: {
      display: "block",
      px: 0,
      cursor: "pointer",
      color: "inherit",
      textDecoration: "none",
      transition: "color 0.25s",
      "&:hover": {
        color: "primary",
      },
    },
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, "none"],
    },
    defaultBtn: {
      borderRadius: "45px",
      fontSize: ["14px", null, null, 2],
      letterSpacings: "-0.15px",
      padding: ["12px 20px", null, "15px 30px"],
      fontFamily: "body",
      cursor: "pointer",
      lineHeight: 1.2,
      transition: "all 0.25s",
      fontWeight: 500,
      "&:focus": {
        outline: 0,
      },
    },
    primary: {
      variant: "buttons.defaultBtn",
      color: "white",
      bg: "primary",
      "&:hover": {
        boxShadow: "rgba(233, 76, 84, 0.57) 0px 9px 20px -5px",
      },
    },
    secondary: {
      variant: "buttons.defaultBtn",
      border: "2px solid",
      borderColor: "primary",
      color: "primary",
      bg: "transparent",
      padding: ["12px 20px", null, "15px 30px"],
      "&:hover": {
        color: "white",
        bg: "primary",
      },
    },
    textButton: {
      variant: "buttons.defaultBtn",
      backgroundColor: "transparent",
      cursor: "pointer",
      color: "white",
      svg: {
        fontSize: [4, 6],
        mr: 2,
      },
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      borderRadius: 8,
      borderColo: "border_color",
      height: 60,
      "&:focus": {
        borderColor: "primary",
        outline: "none",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    body: {
      fontFamily: "body",
      background: "linear-gradient(135deg, #ffffff 0%, #fafbff 30%, #f8fafc 100%)",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
      margin: 0,
      padding: 0,
    },
    srOnly: {
      border: "0 !important",
      clip: "rect(1px, 1px, 1px, 1px) !important",
      clipPath: "inset(50%) !important",
      height: "1px !important",
      margin: "-1px !important",
      overflow: "hidden !important",
      padding: "0 !important",
      position: "absolute !important",
      width: "1px !important",
      whiteSpace: "nowrap !important",
    },
  },
};

export default theme;
