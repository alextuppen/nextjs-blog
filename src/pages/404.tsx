import Head from "next/head";
import { CustomError } from "@views";

const Custom404 = () => (
  <>
    <Head>
      <title>Alex Tuppen - 404 - Page not found</title>
    </Head>
    <main>
      <CustomError code="404" text="Page not found" />
    </main>
  </>
);

export default Custom404;
