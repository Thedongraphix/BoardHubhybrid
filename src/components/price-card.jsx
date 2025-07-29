import { Box, Button, Card, Heading, Text } from "@theme-ui/components";
import React from "react";
import List from "./list";

const PriceCard = ({
  data: {
    header,
    name,
    description,
    priceWithUnit,
    buttonText = "Start Free Trial",
    anotherOption,
    points,
  },
}) => {
  return (
    <Card
      className={header ? "package__card active" : "package__card"}
      sx={styles.pricingBox}>
      {header && <Text sx={styles.header}>{header}</Text>}
      <Box>
        <Box className="package__header" sx={styles.pricingHeader}>
          <Heading className="package__name" variant="title">
            {name}
          </Heading>
          <Text as="p">{description}</Text>
        </Box>
        <List items={points} childStyle={styles.listItem} />
        <Text className="package__price" sx={styles.price}>
          {priceWithUnit}
          <span>/Monthly</span>
        </Text>
        <Box sx={styles.buttonGroup}>
          <Button 
            as="a"
            href="https://portal.boardhubmeetings.com/"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary" 
            aria-label={buttonText}
          >
            {buttonText}
          </Button>
          {anotherOption && (
            <Button
              as="a"
              href="https://portal.boardhubmeetings.com/"
              target="_blank"
              rel="noopener noreferrer"
              variant="textButton"
              className="free__trial"
              aria-label="anotherOption">
              {anotherOption}
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default PriceCard;

const styles = {
  pricingBox: {
    borderRadius: 16,
    position: "relative",
    transition: "all 0.3s",
    p: ["24px 20px", null, null, "28px"],
    width: ["100%", "75%", "100%"],
    mb: "16px",
    mt: "16px",
    mx: [0, "auto", 0],
    "&:before": {
      position: "absolute",
      content: "''",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: "1px solid rgba(38,78,118,0.1)",
      borderRadius: "inherit",
      transition: "all 0.3s",
      zIndex: -1,
    },
    "&:hover": {
      boxShadow: "0px 8px 32px rgba(38, 78, 118, 0.15) !important",
      transform: "translateY(-4px)",
      "&:before": {
        opacity: 0,
      },
    },
  },
  header: {
    height: ["28px", null, null, "32px"],
    backgroundColor: "yellow",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: 1,
    lineHeight: 1.2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    position: "absolute",
    top: "-17px",
    letterSpacing: "-.14px",
    px: "12px",
  },
  pricingHeader: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    mb: ["20px", null, null, null, "24px"],
    p: {
      fontSize: [1, 2],
      color: "text",
      lineHeight: "heading",
    },
    ".package__name": {
      marginBottom: [1, null, 2],
    },
  },
  listItem: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: [1, 2],
    lineHeight: [1.75, 1.6],
    mb: 2,
    alignItems: "flex-start",
    color: "text",
  },
  buttonGroup: {
    textAlign: "center",
    mt: ["20px", null, null, null, "24px"],
    ".free__trial": {
      color: "secondary",
      width: "100%",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: ["14px", 1],
      p: "20px 0 0",
    },
  },
};
