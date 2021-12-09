import { FC } from "react";
import { Card, Section } from "@layout";
import { Time, TimeType } from "./Time";
import { RecipeProps } from "./Recipe.types";
import styles from "./Recipe.module.scss";

export const Recipe: FC<RecipeProps> = ({ recipe }) => {
  const {
    name,
    description,
    prepTime,
    cookTime,
    totalTime,
    recipeYield,
    recipeIngredient,
    recipeInstructions,
  } = recipe;
  console.log(recipe);

  return (
    <Section>
      <h2>{name}</h2>
      <div className={styles.grid}>
        <Card className={styles.description}>
          <span>{description}</span>
          <Time type={TimeType.prep} time={prepTime} />
          <Time type={TimeType.cook} time={cookTime} />
          <Time type={TimeType.total} time={totalTime} />
          <span>{recipeYield}</span>
        </Card>
        <Card className={styles.ingredients}>
          <h3>Ingredients</h3>
          <ul>
            {recipeIngredient.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </Card>
        <Card className={styles.method}>
          <h3>Method</h3>
          <ol>
            {recipeInstructions.map((instruction) => (
              <li key={instruction.name}>{instruction.name}</li>
            ))}
          </ol>
        </Card>
      </div>
    </Section>
  );
};
