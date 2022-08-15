interface InstructionStepCommon {
  "@type": "HowToStep";
  name: string;
}

interface InstructionStep extends InstructionStepCommon {
  text: string;
}

interface HowToDirection {
  "@type": "HowToDirection";
  text: string;
}

interface HowToTip {
  "@type": "HowToTip";
  text: string;
}

interface InstructionStepWithTip extends InstructionStepCommon {
  itemListElement: Array<HowToDirection | HowToTip>;
}

export interface RecipeSynopsis {
  id: string;
  image?: string[];
  name: string;
  datePublished: string;
  description: string;
  keywords: string[];
}

export interface IRecipe extends RecipeSynopsis {
  "@context": "https://schema.org/";
  "@type": "Recipe";
  author: { "@type": "Person"; name: string };
  prepTime: string;
  cookTime: string;
  totalTime: string;
  recipeYield: number;
  recipeCategory: string;
  recipeIngredient: string[];
  tool: { "@type": "HowToTool"; name: string }[];
  recipeInstructions: Array<InstructionStep | InstructionStepWithTip>;
}

export interface RecipePageProps {
  recipes: RecipeSynopsis[];
  allKeywords: string[];
}
