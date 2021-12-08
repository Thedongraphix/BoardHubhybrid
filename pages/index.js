import Layout from "#components/layout";
import { StickyProvider } from "#contexts/app/app.provider";
import theme from "#theme";
import { ThemeProvider } from "theme-ui";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>Hello</Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
