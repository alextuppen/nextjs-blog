import { FC } from "react";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import { Recipe } from "@views";
import { IRecipe } from "@types";
import { getRecipeData, getAllRecipeIds } from "@utils";

interface RecipePageProps {
  postData: IRecipe;
}

const RecipePage: FC<RecipePageProps> = ({ postData }) => (
  <>
    <Head>
      <title>Alex Tuppen - {postData.name}</title>
    </Head>
    <main>
      <Recipe recipe={postData} />
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
  const postData = getRecipeData(id);

  return {
    props: {
      postData,
    },
  };
};
