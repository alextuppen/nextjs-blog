import Head from "next/head";
import { Home } from "@views";

const HomePage = () => (
    <>
      <Head>
        <title>Alex Tuppen</title>
      </Head>
      <main>
        <Home />
      </main>
    </>
  );

export default HomePage;
