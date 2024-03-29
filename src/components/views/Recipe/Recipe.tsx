import { FC } from "react";
import Image from "next/image";
import { DateTime } from "luxon";
import { BsFillCalendarFill } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { HiExclamationCircle } from "react-icons/hi";
import { useMediumMediaQuery } from "hooks";
import { Card, Section } from "@layout";
import { Time, TimeType } from "./Time";
import { TimesProps, YieldPublishedProps, RecipeProps } from "./Recipe.types";
import styles from "./Recipe.module.scss";

const Times: FC<TimesProps> = ({ prepTime, cookTime, totalTime }) => (
  <>
    <li className={styles.descriptionItem}>
      <Time type={TimeType.prep} time={prepTime} />
    </li>
    <li className={styles.descriptionItem}>
      <Time type={TimeType.cook} time={cookTime} />
    </li>
    <li className={styles.descriptionItem}>
      <Time type={TimeType.total} time={totalTime} />
    </li>
  </>
);

const YieldPublished: FC<YieldPublishedProps> = ({
  recipeYield,
  datePublished,
}) => (
  <>
    <li className={styles.descriptionItem}>
      <GiKnifeFork />
      <span>Serves: {recipeYield}</span>
    </li>
    <li className={styles.descriptionItem}>
      <BsFillCalendarFill />
      <span>Published: {DateTime.fromISO(datePublished).toLocaleString()}</span>
    </li>
  </>
);

const ListIcon = () => (
  <div className={styles.toolsIngredientsIcon}>
    <Image
      src="/logo/bulletPoints/white.svg"
      alt="Bullet point"
      layout="fill"
      objectFit="contain"
    />
  </div>
);

export const Recipe: FC<RecipeProps> = ({
  recipe: {
    name,
    image,
    datePublished,
    description,
    prepTime,
    cookTime,
    totalTime,
    recipeYield,
    recipeIngredient,
    tool,
    recipeInstructions,
    creativeWorkStatus,
  },
}) => {
  const isMediumBP = useMediumMediaQuery();

  return (
    <Section>
      <h2>{name}</h2>
      <div className={styles.grid}>
        <Card className={styles.descriptionCard}>
          {image && image[0] !== "" && (
            <div className={styles.imageWrapper}>
              <Image
                src={image[0]}
                alt={name}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          )}
          {creativeWorkStatus && creativeWorkStatus === "draft" && (
            <div className={styles.draft}>
              <HiExclamationCircle className={styles.draftIcon} />
              <h3 className={styles.draftTitle}>Draft recipe</h3>
              <span className={styles.draftText}>
                This recipe is in draft state, it is unfinished and still being
                refined.
              </span>
            </div>
          )}
          <p className={styles.description}>{description}</p>
          {!isMediumBP ? (
            <ul className={styles.descriptionItemsList}>
              <Times
                prepTime={prepTime}
                cookTime={cookTime}
                totalTime={totalTime}
              />
              <YieldPublished
                recipeYield={recipeYield}
                datePublished={datePublished}
              />
            </ul>
          ) : (
            <div className={styles.descriptionItemsListWrapper}>
              <ul className={styles.descriptionItemsList}>
                <Times
                  prepTime={prepTime}
                  cookTime={cookTime}
                  totalTime={totalTime}
                />
              </ul>
              <ul className={styles.descriptionItemsList}>
                <YieldPublished
                  recipeYield={recipeYield}
                  datePublished={datePublished}
                />
              </ul>
            </div>
          )}
        </Card>
        <Card className={styles.toolsIngredientsCard}>
          <div className={styles.toolsIngredients}>
            <h3>Tools</h3>
            <ul className={styles.toolsIngredientsList}>
              {tool.map((tl) => (
                <li className={styles.toolsIngredientsItem} key={tl.name}>
                  <ListIcon />
                  <span>{tl.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.toolsIngredients}>
            <h3>Ingredients</h3>
            <ul className={styles.toolsIngredientsList}>
              {recipeIngredient.map((ingredient) => (
                <li className={styles.toolsIngredientsItem} key={ingredient}>
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
                          <p className={styles.methodText} key={element.text}>
                            {element.text}
                          </p>
                        );
                      case "HowToTip":
                        return (
                          <div className={styles.methodTip} key={element.text}>
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
