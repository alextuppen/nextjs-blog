import fs from "fs";
import path from "path";

const recipesDirectory = path.join(process.cwd(), "recipes");

export const getSortedRecipesData = () => {
  const fileNames = fs.readdirSync(recipesDirectory);

  const allRecipesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.json$/, "");

    const fullPath = path.join(recipesDirectory, fileName);
    const fileContents = JSON.parse(fs.readFileSync(fullPath, "utf8"));

    return {
      id,
      ...fileContents,
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
  const fileContents = JSON.parse(fs.readFileSync(fullPath, "utf8"));

  return {
    id,
    ...fileContents,
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
