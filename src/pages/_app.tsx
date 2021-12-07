import type { AppProps } from "next/app";
import { Provider } from "reakit";
import { Footer, Header } from "@layout";
import "normalize.css";
import "../styles/root.scss";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </Provider>
);

export default MyApp;
