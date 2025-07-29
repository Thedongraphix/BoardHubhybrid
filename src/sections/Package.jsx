import React, { useState } from "react";
import SectionHeader from "#components/section-header";
import { Box, Container, Flex } from "@theme-ui/components";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import Carousel from "react-multi-carousel";
import PriceCard from "#components/price-card";
import ButtonGroup from "#components/button-group";
import { keyframes } from "@emotion/react";

const rolePackages = {
  "board-members": {
    title: "Board Members",
    description: "Streamlined tools for board governance and decision-making",
    plans: [
      {
        id: 1,
        name: "Board Essentials",
        description: "Essential governance tools",
        buttonText: "Get Started",
        priceWithUnit: "Contact Us",
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: "Meeting Management",
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Document Repository",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: "Voting & Resolutions",
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCheckmarkCircle />,
            text: "Compliance Tracking",
            isAvailable: true,
          },
        ],
      },
      {
        id: 2,
        name: "Board Pro",
        description: "Advanced governance features",
        priceWithUnit: "Custom",
        buttonText: "Contact Sales",
        header: "Popular",
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: "All Essential Features",
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Advanced Analytics",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: "Custom Workflows",
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCheckmarkCircle />,
            text: "Priority Support",
            isAvailable: true,
          },
        ],
      }
    ]
  },
  "executives": {
    title: "Executives",
    description: "Comprehensive management tools for executive leadership",
    plans: [
      {
        id: 1,
        name: "Executive Suite",
        description: "Complete executive management",
        buttonText: "Start Trial",
        priceWithUnit: "$99",
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: "Strategic Planning",
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Performance Dashboards",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: "Team Collaboration",
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCheckmarkCircle />,
            text: "Reporting Tools",
            isAvailable: true,
          },
        ],
      },
      {
        id: 2,
        name: "Enterprise Executive",
        description: "Enterprise-grade executive tools",
        priceWithUnit: "$199",
        buttonText: "Get Started",
        header: "Recommended",
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: "All Suite Features",
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Advanced Security",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: "Custom Integrations",
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCheckmarkCircle />,
            text: "Dedicated Support",
            isAvailable: true,
          },
        ],
      }
    ]
  },
  "administrators": {
    title: "Administrators",
    description: "Efficient tools for administrative operations and support",
    plans: [
      {
        id: 1,
        name: "Admin Basic",
        description: "Essential admin functionality",
        buttonText: "Start Free",
        priceWithUnit: "Free",
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: "User Management",
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Basic Reporting",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: "Document Management",
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCloseCircle />,
            text: "Advanced Analytics",
            isAvailable: false,
          },
        ],
      },
      {
        id: 2,
        name: "Admin Pro",
        description: "Professional admin tools",
        priceWithUnit: "$49",
        buttonText: "Upgrade Now",
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: "All Basic Features",
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Advanced Analytics",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: "Automation Tools",
            isAvailable: true,
          },
          {
            id: 4,
            icon: <IoIosCheckmarkCircle />,
            text: "Priority Support",
            isAvailable: true,
          },
        ],
      }
    ]
  }
};


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
    partialVisibilityGutter: 20,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

const Package = () => {
  const [state, setState] = useState({
    activeRole: "board-members",
    activePlan: "monthly",
    currentRole: rolePackages["board-members"],
    pricingPlan: rolePackages["board-members"].plans,
  });
  
  const handleRoleChange = (roleKey) => {
    setState({
      ...state,
      activeRole: roleKey,
      currentRole: rolePackages[roleKey],
      pricingPlan: rolePackages[roleKey].plans,
    });
  };

  const roleKeys = Object.keys(rolePackages);

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    slidesToSlide: 1,
    items: 3,
    containerClass: "carousel-container",
    customButtonGroup: <ButtonGroup />,
    dotListClass: "",
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: "",
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
  };

  return (
    <section id="pricing" sx={{ variant: "section.pricing", py: ["60px", null, null, "80px"] }}>
      <Container sx={{ maxWidth: "1200px" }}>
        <SectionHeader
          slogan="Solutions for Every Role"
          title="Choose your role to see tailored plans"
        />
        
        {/* Role Tabs */}
        <Box sx={styles.roleTabsContainer}>
          <Flex sx={styles.roleTabs}>
            {roleKeys.map((roleKey) => (
              <Box
                key={roleKey}
                sx={styles.roleTab}
                className={state.activeRole === roleKey ? "active" : ""}
                onClick={() => handleRoleChange(roleKey)}
              >
                <Box sx={styles.roleTabContent}>
                  <Box sx={styles.roleTabTitle}>
                    {rolePackages[roleKey].title}
                  </Box>
                  <Box sx={styles.roleTabDesc}>
                    {rolePackages[roleKey].description}
                  </Box>
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>

        {/* Cards Container */}
        <Box sx={styles.cardsContainer}>
          <Box sx={styles.roleHeader}>
            <Box sx={styles.roleTitle}>{state.currentRole.title}</Box>
            <Box sx={styles.roleDescription}>{state.currentRole.description}</Box>
          </Box>
          
          <Box sx={styles.pricingWrapper} className="pricing__wrapper">
            <Carousel {...sliderParams}>
              {state.pricingPlan.map((packageData) => (
                <Box
                  sx={styles.pricingItem}
                  key={`${state.activeRole}-card--key${packageData.id}`}>
                  <PriceCard data={packageData} />
                </Box>
              ))}
            </Carousel>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Package;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  roleTabsContainer: {
    mb: "40px",
    mt: "20px",
  },
  roleTabs: {
    justifyContent: "center",
    gap: ["16px", null, "24px"],
    flexWrap: "wrap",
  },
  roleTab: {
    flex: ["1 1 100%", null, "1 1 auto"],
    minWidth: ["280px", null, "300px"],
    borderRadius: "12px",
    border: "2px solid transparent",
    backgroundColor: "white",
    boxShadow: "0 4px 16px rgba(38, 78, 118, 0.08)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    p: ["20px", null, "24px"],
    "&:hover": {
      borderColor: "rgba(38, 78, 118, 0.2)",
      boxShadow: "0 8px 24px rgba(38, 78, 118, 0.12)",
      transform: "translateY(-2px)",
    },
    "&.active": {
      borderColor: "primary",
      backgroundColor: "rgba(38, 78, 118, 0.05)",
      boxShadow: "0 8px 32px rgba(38, 78, 118, 0.15)",
      transform: "translateY(-4px)",
    },
  },
  roleTabContent: {
    textAlign: "center",
  },
  roleTabTitle: {
    fontSize: [2, null, 3],
    fontWeight: "bold",
    color: "heading",
    mb: "8px",
    lineHeight: 1.3,
  },
  roleTabDesc: {
    fontSize: [1, null, 2],
    color: "text",
    lineHeight: 1.5,
    fontWeight: 400,
  },
  cardsContainer: {
    backgroundColor: "rgba(248, 250, 252, 0.8)",
    borderRadius: "20px",
    p: ["24px", null, "32px"],
    border: "1px solid rgba(38, 78, 118, 0.1)",
    minHeight: "600px",
    transition: "all 0.4s ease",
  },
  roleHeader: {
    textAlign: "center",
    mb: "32px",
    pb: "20px",
    borderBottom: "1px solid rgba(38, 78, 118, 0.1)",
  },
  roleTitle: {
    fontSize: [3, null, 4],
    fontWeight: "bold",
    color: "heading",
    mb: "12px",
  },
  roleDescription: {
    fontSize: [2, null, 3],
    color: "text",
    maxWidth: "600px",
    mx: "auto",
    lineHeight: 1.6,
  },
  pricingWrapper: {
    mb: "-16px",
    mt: "-16px",
    mx: -2,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    "&.pricing__wrapper .package__card": {
      ".package__header": {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      "ul > li": {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      ".package__price": {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    ".carousel-container": {
      width: "100%",
      padding: "0 8px",
      "> ul > li ": {
        display: "flex",
      },
    },
    ".button__group": {
      display: ["flex", null, null, null, "none"],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 2,
    display: "flex",
    flexShrink: 0,
    flex: "1 1 auto",
  },
};
