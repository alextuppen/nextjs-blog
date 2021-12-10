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
  recipeInstructions: Array<InstructionStep | InstructionStepWithTip>;
}
