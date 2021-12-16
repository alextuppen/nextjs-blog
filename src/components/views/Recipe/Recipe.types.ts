import { IRecipe } from "@types";

export interface TimesProps {
  prepTime: string;
  cookTime: string;
  totalTime: string;
}

export interface YeildPublishedProps {
  recipeYield: number;
  datePublished: string;
}

export interface RecipeProps {
  recipe: IRecipe;
}
