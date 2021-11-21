import Head from "next/head";
import { Home } from "../components/views/Home/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Alex Tuppen</title>
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
}
