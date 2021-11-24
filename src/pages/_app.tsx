import { Provider } from "reakit";
import { Footer, Header } from "@layout";
import "normalize.css";
import "../styles/root.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
