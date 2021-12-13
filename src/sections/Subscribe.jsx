import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
} from "@theme-ui/components";
import React from "react";

const Subscribe = () => {
  const subscribe = (e) => {
    e.preventDefault();
    // handle subscribe form
  };
  return (
    <Container>
      <Box sx={styles.contentBox}>
        <Box sx={styles.contentBoxInner}>
          <Heading as="h2" sx={styles.title}>
            Subscribe to our blog
          </Heading>
          <Text as="p" sx={styles.description}>
            Subscribe to get more information and latest news about about
            technical and case study of our company
          </Text>
          <form onSubmit={subscribe}>
            <Flex sx={styles.subscribeForm}>
              <label htmlFor="email" sx={{ variant: "styles.srOnly" }}>
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
              <Button
                type="submit"
                className="subscribe__btn"
                aria-label="Subscribe">
                Subscribe
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default Subscribe;

const styles = {
  contentBox: {
    backgroundColor: "primary",
    textAlign: "center",
    borderRadius: "10px",
    py: ["60px", null, 8],
  },
  contentBoxInner: {
    width: ["100%", null, "540px", "600px"],
    mx: "auto",
    mt: -1,
    px: [3, 5],
  },
  title: {
    fontSize: ["24px", null, "28px", null, null, "32px", null, "36px"],
    color: "white",
    lineHeight: [1.3, null, null, 1.25],
    fontWeight: 700,
    letterSpacing: ["-.5px", null, "-1.5px"],
    mb: [2, 3],
  },
  description: {
    fontSize: ["15px", 2, null, null, null, "17px", null, 3],
    color: "white",
    lineHeight: [1.85, null, null, 2],
    px: [0, null, 5],
  },
  subscribeForm: {
    mt: [6, null, null, 7],
    backgroundColor: ["transparent", "white"],
    borderRadius: [0, 50],
    overflow: "hidden",
    p: [0, 1],
    flexDirection: ["column", "row"],
    '[type="email"]': {
      border: 0,
      borderRadius: 50,
      fontFamily: "body",
      fontSize: ["14px", null, 2],
      fontWeight: "normal",
      color: "heading",
      py: 1,
      px: [4, null, 6],
      backgroundColor: ["white", "transparent"],
      height: ["52px", null, "60px"],
      textAlign: ["center", "left"],
      "&:focus": {
        boxShadow: "0 0 0 0px",
      },
      "::placeholder": {
        color: "primary",
        opacity: 1,
      },
    },
    ".subscribe__btn": {
      flexShrink: 0,
      backgroundColor: "primary",
      ml: [0, 2],
      mt: [2, 0],
      py: ["15px"],
    },
  },
};
