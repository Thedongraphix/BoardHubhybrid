import Layout from "#components/layout";
import SEO from "#components/seo";
import { StickyProvider } from "#contexts/app/app.provider";
import Banner from "#sections/Banner";
import FeaturesShowcase from "#sections/FeaturesShowcase";
import BlogSection from "#sections/BlogSection";
import CoreFeature from "#sections/CoreFeature";
import Feature from "#sections/Feature";
import KeyFeature from "#sections/KeyFeature";
import Package from "#sections/Package";
import ServiceSection from "#sections/ServiceSection";
import Subscribe from "#sections/Subscribe";
import TeamSection from "#sections/TeamSection";
import TestimonialCard from "#sections/TestimonialCard";
import WorkFlow from "#sections/WorkFlow";
import MeetingOperations from "#sections/MeetingOperations";
import SecurityCompliance from "#sections/SecurityCompliance";
import BoardCommunication from "#sections/BoardCommunication";
import DecisionMaking from "#sections/DecisionMaking";
import theme from "#theme";
import { ThemeProvider } from "theme-ui";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="BoardHub - Secure Board Meeting Platform" />
          <Banner />
          <FeaturesShowcase />
          <KeyFeature />
          <ServiceSection />
          <Feature />
          <CoreFeature />
          <MeetingOperations />
          <SecurityCompliance />
          <BoardCommunication />
          <DecisionMaking />
          <WorkFlow />
          <TestimonialCard />
          <BlogSection />
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
