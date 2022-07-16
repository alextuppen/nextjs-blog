import { FC } from "react";
import Head from "next/head";
import { Recipes } from "@views";
import { RecipePageProps } from "@types";
import { getRecipesStaticProps } from "@lib";

const RecipePage: FC<RecipePageProps> = ({ recipes, allKeywords }) => (
  <>
    <Head>
      <title>Alex Tuppen | Recipes</title>
    </Head>
    <main>
      <Recipes recipes={recipes} allKeywords={allKeywords} />
    </main>
  </>
);

export default RecipePage;

export const getStaticProps = getRecipesStaticProps;
