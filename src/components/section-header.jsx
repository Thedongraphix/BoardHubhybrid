import { Box, Heading, Text } from "@theme-ui/components";
import React from "react";

const SectionHeader = ({ title, slogan, isWhite }) => {
  return (
    <Box sx={{ variant: "sectionHeader" }}>
      <Text
        as="p"
        sx={{
          variant: "sectionHeader.subTitle",
          color: isWhite ? "white" : "primary",
          opacity: isWhite ? 0.7 : 1,
        }}>
        {slogan}
      </Text>
      <Heading
        as="h2"
        sx={{
          variant: "sectionHeader.title",
          color: isWhite ? "white" : "heading",
        }}>
        {title}
      </Heading>
    </Box>
  );
};

export default SectionHeader;
