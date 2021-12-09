import Layout from "#components/layout";
import SEO from "#components/seo";
import { StickyProvider } from "#contexts/app/app.provider";
import Banner from "#sections/Banner";
import theme from "#theme";
import { ThemeProvider } from "theme-ui";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing Page" />
          <Banner />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
