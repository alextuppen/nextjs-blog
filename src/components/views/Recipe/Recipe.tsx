import { FC } from "react";
import Image from "next/image";
import { DateTime } from "luxon";
import { BsFillCalendarFill } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { Card, Section } from "@layout";
import { Time, TimeType } from "./Time";
import { RecipeProps } from "./Recipe.types";
import styles from "./Recipe.module.scss";

const ListIcon = () => (
  <div className={styles.listIcon}>
    <Image
      src="/logo/bulletPoints/white.svg"
      alt="Bullet point"
      layout="fill"
      objectFit="contain"
    />
  </div>
);

export const Recipe: FC<RecipeProps> = ({ recipe }) => {
  const {
    name,
    datePublished,
    description,
    prepTime,
    cookTime,
    totalTime,
    recipeYield,
    recipeIngredient,
    tool,
    recipeInstructions,
  } = recipe;

  console.log(recipe);

  return (
    <Section>
      <h2>{name}</h2>
      <div className={styles.grid}>
        <Card className={styles.description}>
          <p>{description}</p>
          <div className={styles.descriptionItems}>
            <Time
              className={styles.descriptionItem}
              type={TimeType.prep}
              time={prepTime}
            />
            <Time
              className={styles.descriptionItem}
              type={TimeType.cook}
              time={cookTime}
            />
            <Time
              className={styles.descriptionItem}
              type={TimeType.total}
              time={totalTime}
            />
            <span className={styles.descriptionItem}>
              <GiKnifeFork />
              <span>Serves: {recipeYield}</span>
            </span>
            <span className={styles.descriptionItem}>
              <BsFillCalendarFill />
              <span>
                Published: {DateTime.fromISO(datePublished).toLocaleString()}
              </span>
            </span>
          </div>
        </Card>
        <Card className={styles.toolsIngredientsWrapper}>
          <div className={styles.toolsIngredients}>
            <h3>Tools</h3>
            <ul className={styles.list}>
              {tool.map((tl) => (
                <li className={styles.listItem} key={tl.name}>
                  <ListIcon />
                  <span>{tl.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.toolsIngredients}>
            <h3>Ingredients</h3>
            <ul className={styles.list}>
              {recipeIngredient.map((ingredient) => (
                <li className={styles.listItem} key={ingredient}>
                  <ListIcon />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
        <Card className={styles.methodCard}>
          <h3>Method</h3>
          <ol className={styles.methods}>
            {recipeInstructions.map((instruction) => (
              <li className={styles.method} key={instruction.name}>
                <h4 className={styles.methodTitle}>{instruction.name}</h4>
                {"text" in instruction && (
                  <p className={styles.methodText}>{instruction.text}</p>
                )}
                {"itemListElement" in instruction &&
                  instruction.itemListElement.map((element) => {
                    switch (element["@type"]) {
                      case "HowToDirection":
                        return (
                          <p className={styles.methodText}>{element.text}</p>
                        );
                      case "HowToTip":
                        return (
                          <div className={styles.methodTip}>
                            <div className={styles.tipTitle}>
                              <FaLightbulb />
                              <h5>Tip</h5>
                            </div>
                            <p>{element.text}</p>
                          </div>
                        );
                      default:
                        throw new Error(
                          `itemListElement["@type"] switch has an illegal value: ${element["@type"]}`
                        );
                    }
                  })}
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </Section>
  );
};
