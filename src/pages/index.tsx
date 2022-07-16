import Head from "next/head";
import { Recipes } from "@views";
import { getRecipesStaticProps } from "@lib";
import { RecipePageProps } from "@types";
import { FC } from "react";

const HomePage: FC<RecipePageProps> = ({ recipes, allKeywords }) => (
  <>
    <Head>
      <title>Alex Tuppen</title>
    </Head>
    <main>
      <Recipes recipes={recipes} allKeywords={allKeywords} />
    </main>
  </>
);

export default HomePage;

export const getStaticProps = getRecipesStaticProps;
