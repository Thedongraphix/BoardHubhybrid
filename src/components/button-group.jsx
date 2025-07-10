import React from "react";
import { Box, Container, Flex } from "@theme-ui/components";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const ButtonGroup = ({ previous, next }) => {
  return (
    <Flex sx={{ width: "100%" }}>
      <Container>
        <Box sx={styles.buttonGroup} className="button__group" >
          <button onClick={previous} aria-label="Previous">
            <IoIosArrowRoundBack />
          </button>
          <button onClick={next} aria-label="Next" >
            <IoIosArrowRoundForward />
          </button>
        </Box>
      </Container>
    </Flex>
  );
};

export default ButtonGroup;

const styles = {
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    mb: -4,
    button: {
      bg: "transparent",
      border: "0px solid",
      fontSize: 40,
      cursor: "pointer",
      px: "2px",
              color: "muted",
      transition: "all 0.25s",
      "&:hover": {
        color: "text",
      },
      "&:focus": {
        outline: 0,
      },
    },
  },
};
