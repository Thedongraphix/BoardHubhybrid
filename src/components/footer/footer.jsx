import React from "react";
import data from "./footer.data";
import {
  Box,
  Container,
  Grid,
  Heading,
  Image,
  Text,
} from "@theme-ui/components";
import { Link } from "#components/link";
import FooterLogo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Grid sx={styles.widgets}>
          {data.widgets.map((item) => (
            <Box
              sx={styles.widgets.widgetItem}
              key={`footer-widget--key${item.id}`}>
              <Image src={item.iconSrc} alt={item.altText} />
              <Box sx={styles.widgets.infoWrapper}>
                <Heading as="h3">{item.title}</Heading>
                <Text as="p">{item.description}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
        {/* End of footer widgets area */}
        <Box sx={styles.footer.footerBottomArea}>
          <Link path="/">
            <Image src={FooterLogo.src} alt="Logo" />
          </Link>
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map(({ path, label }, i) => (
                <Link
                  key={i}
                  path={path}
                  label={label}
                  sx={styles.footer.link}
                />
              ))}
            </nav>
          </Box>
          <Text sx={styles.footer.copyright}>Copyright by 2021 RedQ, Inc</Text>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      pt: [7, null, 8],
      pb: ["40px", null, "100px"],
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },
    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: 400,
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary",
      },
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%",
    },
  },
  widgets: {
    py: [8, null, 9],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: ["40px 0", null, "45px 30px", null, "60px 30px", "50px 90px"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      "repeat(3,1fr)",
    ],
    widgetItem: {
      textAlign: "center",
    },
    infoWrapper: {
      mt: [2, 3, null, 2, 4],
      mb: -1,
      h3: {
        fontSize: [3, null, null, 2, 3, 4],
        color: "heading_secondary",
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, null, null, null, "15px"],
      },
      p: {
        fontSize: [1, "15px"],
        fontWeight: 400,
        lineHeight: 2,
      },
    },
  },
};
