import { Box, Flex, Heading, Image, Link, Text } from "@theme-ui/components";
import React from "react";

const PostCard = ({ src, alt, postLink, title, authorName, date }) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.thumbnail}>
        <Image src={src} alt={alt} />
      </Box>

      <Flex sx={styles.postContent}>
        <Heading sx={styles.title}>
          <Link variant="blog">{title}</Link>
        </Heading>

        <Flex sx={styles.postFooter}>
          <Text sx={styles.postFooter.name}>{authorName}</Text>
          <Text sx={styles.postFooter.date}>{date}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PostCard;

const styles = {
  card: {
    backgroundColor: "white",
    boxShadow: "0px 4px 10px rgba(38, 78, 118, 0.12)",
    borderRadius: "7px",
    m: "0 15px 40px",
    overflow: "hidden",
    transition: "all 0.3s",
    "&:hover": {
      boxShadow: "0px 5px 20px rgba(38, 78, 118, 0.15)",
    },
  },
  thumbnail: {
    display: "flex",
    img: {
      width: "100%",
    },
  },
  postContent: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: ["15px 20px", "25px 30px"],
  },
  title: {
    fontSize: [3, null, null, null, null, 4],
    color: "heading",
    lineHeight: [1.4, 1.5],
    fontWeight: 700,
    mb: [3, 4, 5],
    pr: [0, null, null, 5],
  },
  postFooter: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    name: {
      fontSize: ["14px", null, 2],
      fontWeight: 500,
      color: "primary",
      lineHeight: 1.4,
    },
    date: {
      fontSize: ["14px", null, 2],
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
};
