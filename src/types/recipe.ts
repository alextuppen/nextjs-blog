interface InstructionStep {
  "@type": "HowToStep";
  name: string;
  text: string;
}

interface InstructionStepWithTip {
  "@type": "HowToStep";
  name: string;
  itemListElement: HowToDirection[] | HowToTip[];
}

interface HowToDirection {
  "@type": "HowToDirection";
  text: string;
}

interface HowToTip {
  "@type": "HowToTip";
  text: string;
}

export interface IRecipe {
  id: string;
  "@context": "https://schema.org/";
  "@type": "Recipe";
  name: string;
  image: string[];
  author: { "@type": "Person"; name: string };
  datePublished: string;
  description: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  keywords: string;
  recipeYield: number;
  recipeCategory: string;
  recipeIngredient: string[];
  tool: { "@type": "HowToTool"; name: string }[];
  recipeInstructions: InstructionStep[] | InstructionStepWithTip[];
}
