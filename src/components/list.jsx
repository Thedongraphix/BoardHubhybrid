import { Box, Flex, IconButton } from "@theme-ui/components";
import React from "react";

const List = ({ items = [], parentStyle, childStyle }) => {
  return (
    <Box
      as="ul"
      sx={{
        listStyleType: "none",
        margin: 0,
        padding: 0,
        ...parentStyle,
      }}>
      {items.map(({ icon, text, isAvailable }, i) => (
        <Flex
          className={isAvailable ? "open" : "close"}
          key={i}
          as="li"
          sx={{ ...childStyle }}>
          <IconButton sx={styles.listIcon} aria-label="list icon">
            {icon}
          </IconButton>
          {text}
        </Flex>
      ))}
    </Box>
  );
};

export default List;

const styles = {
  listIcon: {
    width: ["25px", "35px"],
    height: "auto",
    color: "primary",
    padding: 0,
    fontSize: [3, 5],
    ml: -1,
    flexShrink: 0,
    justifyContent: "flex-start",
    mt: "2px",
  },
};
