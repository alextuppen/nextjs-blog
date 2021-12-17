import { KeywordsByRecipe, RecipeSynopsis } from "@types";

export interface RecipesProps {
  recipes: RecipeSynopsis[];
  recipeIds: string[];
  allKeywords: string[];
  keywordsByRecipe: KeywordsByRecipe;
}
