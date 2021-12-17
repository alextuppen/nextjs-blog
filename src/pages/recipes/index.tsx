import { FC } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { uniq } from "lodash";
import { Recipes } from "@views";
import { KeywordsByRecipe, RecipeSynopsis } from "@types";
import { getSortedRecipesSynopsis } from "@lib";

interface RecipePageProps {
  recipes: RecipeSynopsis[];
  recipeIds: string[];
  allKeywords: string[];
  keywordsByRecipe: KeywordsByRecipe;
}

const RecipePage: FC<RecipePageProps> = ({
  recipes,
  recipeIds,
  allKeywords,
  keywordsByRecipe,
}) => (
  <>
    <Head>
      <title>Alex Tuppen | Recipes</title>
    </Head>
    <main>
      <Recipes
        recipes={recipes}
        recipeIds={recipeIds}
        allKeywords={allKeywords}
        keywordsByRecipe={keywordsByRecipe}
      />
    </main>
  </>
);

export default RecipePage;

export const getStaticProps: GetStaticProps = async () => {
  const recipes = getSortedRecipesSynopsis();

  const recipeIds = recipes.map(({ id }) => id);

  const allKeywords = recipes.reduce(
    (accumulator, { keywords }) => uniq(accumulator.concat(keywords)),
    []
  );

  const keywordsByRecipe = recipes.reduce<KeywordsByRecipe>(
    (accumulator, { id, keywords }) => {
      accumulator[id] = keywords;

      return accumulator;
    },
    {}
  );

  return {
    props: {
      recipes,
      recipeIds,
      allKeywords,
      keywordsByRecipe,
    },
  };
};
