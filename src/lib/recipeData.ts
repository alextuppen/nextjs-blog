import fs from "fs";
import { uniq } from "lodash";
import { GetStaticProps } from "next";
import path from "path";

const recipesDirectory = path.join(process.cwd(), "recipes");

const getFileContentsWithSplitKeywords = (fullPath: string) => {
  const { keywords, ...rest } = JSON.parse(fs.readFileSync(fullPath, "utf8"));
  const splitKeywords = keywords.split(", ");

  return {
    keywords: splitKeywords,
    ...rest,
  };
};

export const getSortedRecipesSynopsis = () => {
  const fileNames = fs.readdirSync(recipesDirectory);

  const allRecipesData = fileNames.map((fileName) => {
    const fullPath = path.join(recipesDirectory, fileName);
    const { name, datePublished, description, keywords } =
      getFileContentsWithSplitKeywords(fullPath);

    return {
      id: fileName.replace(/\.json$/, ""),
      name,
      datePublished,
      description,
      keywords,
    };
  });

  return allRecipesData.sort((a, b) => {
    if (a.datePublished < b.datePublished) {
      return 1;
    }

    return -1;
  });
};

export const getRecipeData = (id: string | string[] | undefined) => {
  const fullPath = path.join(recipesDirectory, `${id}.json`);
  return getFileContentsWithSplitKeywords(fullPath);
};

export const getRecipesStaticProps: GetStaticProps = async () => {
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

export const getAllRecipeIds = () => {
  const fileNames = fs.readdirSync(recipesDirectory);

  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.json$/, ""),
    },
  }));
};
