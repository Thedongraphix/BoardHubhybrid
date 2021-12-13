import Layout from "#components/layout";
import SEO from "#components/seo";
import { StickyProvider } from "#contexts/app/app.provider";
import Banner from "#sections/Banner";
import BlogSection from "#sections/BlogSection";
import CoreFeature from "#sections/CoreFeature";
import Feature from "#sections/Feature";
import KeyFeature from "#sections/KeyFeature";
import Package from "#sections/Package";
import ServiceSection from "#sections/ServiceSection";
import TeamSection from "#sections/TeamSection";
import TestimonialCard from "#sections/TestimonialCard";
import WorkFlow from "#sections/WorkFlow";
import theme from "#theme";
import { ThemeProvider } from "theme-ui";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing Page" />
          <Banner />
          <KeyFeature />
          <ServiceSection />
          <Feature />
          <CoreFeature />
          <WorkFlow />
          <Package />
          <TeamSection />
          <TestimonialCard />
          <BlogSection />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
