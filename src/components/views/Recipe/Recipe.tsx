import { FC } from "react";
import { DateTime } from "luxon";
import { BsFillCalendarFill } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { Card, Section } from "@layout";
import { Time, TimeType } from "./Time";
import { RecipeProps } from "./Recipe.types";
import styles from "./Recipe.module.scss";

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
            <ul>
              {tool.map((tl) => (
                <li key={tl.name}>{tl.name}</li>
              ))}
            </ul>
          </div>
          <div className={styles.toolsIngredients}>
            <h3>Ingredients</h3>
            <ul>
              {recipeIngredient.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </Card>
        <Card className={styles.method}>
          <h3>Method</h3>
          <ol>
            {recipeInstructions.map((instruction) => (
              <li key={instruction.name}>
                <h4>{instruction.name}</h4>
                {"text" in instruction && <span>{instruction.text}</span>}
                {"itemListElement" in instruction &&
                  instruction.itemListElement.map((element) => {
                    switch (element["@type"]) {
                      case "HowToDirection":
                        return <span>{element.text}</span>;
                      case "HowToTip":
                        return (
                          <span>
                            <FaLightbulb className={styles.tipIcon} />
                            {`Tip: ${element.text}`}
                          </span>
                        );
                      // return (
                      //   <span className={styles.tip}>
                      //     <FaLightbulb />
                      //     <span>{`Tip: ${element.text}`}</span>
                      //   </span>
                      // );
                      default:
                        throw new Error(
                          `itemListElement["@type"] switch has an illegal value: ${element["@type"]}`
                        );
                    }
                  })}
                {/* <div>
                  <h4>{instruction.name}</h4>
                  {"text" in instruction && <span>{instruction.text}</span>}
                  {"itemListElement" in instruction &&
                    instruction.itemListElement.map((element) => {
                      switch (element["@type"]) {
                        case "HowToDirection":
                          return <span>{element.text}</span>;
                        case "HowToTip":
                          return (
                            <span>
                              <FaLightbulb className={styles.tipIcon} />
                              {`Tip: ${element.text}`}
                            </span>
                          );
                        // return (
                        //   <span className={styles.tip}>
                        //     <FaLightbulb />
                        //     <span>{`Tip: ${element.text}`}</span>
                        //   </span>
                        // );
                        default:
                          throw new Error(
                            `itemListElement["@type"] switch has an illegal value: ${element["@type"]}`
                          );
                      }
                    })}
                </div> */}
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </Section>
  );
};
