import { useEffect } from "react";
import Router from "next/router";
import ReactGA from "react-ga";

import "react-multi-carousel/lib/styles.css";
import "react-modal-video/css/modal-video.min.css";
import "rc-drawer/assets/index.css";
import "typeface-dm-sans";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize("UA-164554931-1");
    Router.events.on("routeChangeComplete", () =>
      ReactGA.pageview(window.location.pathname + window.location.search)
    );
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
