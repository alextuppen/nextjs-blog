import { Footer, Header } from "@layout";
import "normalize.css";
import "../styles/root.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
