import { FC } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { uniq } from "lodash";
import { Recipes } from "@views";
import { RecipeSynopsis } from "@types";
import { getSortedRecipesSynopsis } from "@lib";

interface RecipePageProps {
  recipes: RecipeSynopsis[];
  allKeywords: string[];
}

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

export const getStaticProps: GetStaticProps = async () => {
  const recipes = getSortedRecipesSynopsis();

  const allKeywords = recipes.reduce(
    (accumulator, { keywords }) => uniq(accumulator.concat(keywords)),
    []
  );

  return {
    props: {
      recipes,
      allKeywords,
    },
  };
};
