import fs from "fs";
import { GetStaticProps } from "next";
import path from "path";
import { RecipeSynopsis } from "@types";

const recipesDirectory = path.join(process.cwd(), "recipes");

const getFileContentsWithSplitKeywords = (fullPath: string) => {
  const { keywords, ...rest } = JSON.parse(fs.readFileSync(fullPath, "utf8"));
  const splitKeywords = keywords.split(", ");

  return {
    keywords: splitKeywords,
    ...rest,
  };
};

export const getSortedRecipesSynopsis = (): RecipeSynopsis[] => {
  const fileNames = fs.readdirSync(recipesDirectory);

  const allRecipesData = fileNames.map((fileName) => {
    const fullPath = path.join(recipesDirectory, fileName);
    const {
      name,
      image,
      datePublished,
      description,
      keywords,
      creativeWorkStatus,
    } = getFileContentsWithSplitKeywords(fullPath);

    return {
      id: fileName.replace(/\.json$/, ""),
      image: image || null,
      name,
      datePublished,
      description,
      keywords,
      creativeWorkStatus,
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

  const countedKeywords = recipes.reduce<{ [key: string]: number }>(
    (accumulator, { keywords }) => {
      keywords.forEach((keyword) => {
        accumulator[keyword] = (accumulator[keyword] || 0) + 1;
      });
      return accumulator;
    },
    {}
  );

  const sortedKeywords = Object.keys(countedKeywords).sort(
    (a, b) => countedKeywords[b] - countedKeywords[a]
  );

  return {
    props: {
      recipes,
      allKeywords: sortedKeywords,
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
