import type { AppProps } from "next/app";
import { Provider } from "reakit";
import { LazyMotion, domMax } from "framer-motion";
import { Footer, Header } from "@layout";
import "normalize.css";
import "../styles/root.scss";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <LazyMotion features={domMax}>
    <Provider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  </LazyMotion>
);

export default MyApp;
