import { FC } from "react";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import { Recipe } from "@views";
import { IRecipe } from "@types";
import { getRecipeData, getAllRecipeIds } from "@lib";

interface RecipePageProps {
  recipe: IRecipe;
}

const RecipePage: FC<RecipePageProps> = ({ recipe }) => (
  <>
    <Head>
      <title>Alex Tuppen | {recipe.name}</title>
    </Head>
    <main>
      <Recipe recipe={recipe} />
    </main>
  </>
);

export default RecipePage;

export const getStaticPaths = async () => {
  const paths = getAllRecipeIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as ParsedUrlQuery;
  const recipe = getRecipeData(id);

  return {
    props: {
      recipe,
    },
  };
};
