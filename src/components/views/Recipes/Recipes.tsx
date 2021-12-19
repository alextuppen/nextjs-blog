import { FC, useEffect, useState } from "react";
import { uniq } from "lodash";
import { GrPowerReset } from "react-icons/gr";
import { ButtonVariants, Button } from "@input";
import { Card, Section } from "@layout";
import { FilterButton } from "./FilterButton/FilterButton";
import { RecipesProps } from "./Recipes.types";
import styles from "./Recipes.module.scss";

export const Recipes: FC<RecipesProps> = ({
  recipes,
  recipeIds,
  allKeywords,
  keywordsByRecipe,
}) => {
  const [visibleRecipes, setVisibleRecipes] = useState<string[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [visibleKeywords, setVisibleKeywords] = useState<string[]>([]);

  useEffect(() => {
    setVisibleRecipes(recipeIds);
  }, [recipeIds]);

  useEffect(() => {
    setVisibleKeywords(allKeywords);
  }, [allKeywords]);

  const updateVisibleRecipesAndKeywords = (newSelectedKeywords: string[]) => {
    const newVisisbleRecipes: string[] = [];
    const newVisibleKeywords: string[] = [];

    // eslint-disable-next-line array-callback-return
    Object.entries(keywordsByRecipe).map(([recipeId, keywords]) => {
      if (newSelectedKeywords.every((kws) => keywords.includes(kws))) {
        newVisisbleRecipes.push(recipeId);
        newVisibleKeywords.push(...keywords);
      }
    });

    setVisibleRecipes(newVisisbleRecipes);
    setVisibleKeywords(uniq(newVisibleKeywords));
  };

  const handleKeywordClick = (keyword: string) => {
    if (selectedKeywords.includes(keyword)) {
      const newSelectedKeywords = selectedKeywords.filter(
        (arrayWord) => arrayWord !== keyword
      );

      updateVisibleRecipesAndKeywords(newSelectedKeywords);

      setSelectedKeywords(newSelectedKeywords);
    } else {
      const newSelectedKeywords = selectedKeywords.concat(keyword);

      updateVisibleRecipesAndKeywords(newSelectedKeywords);

      setSelectedKeywords(newSelectedKeywords);
    }
  };

  const handleResetClick = () => {
    setVisibleRecipes(recipeIds);
    setSelectedKeywords([]);
    setVisibleKeywords(allKeywords);
  };

  //   console.log(visibleRecipes);
  //   console.log(selectedKeywords);
  // console.log(visibleKeywords);
  // console.log(recipes);
  // console.log(keywordsByRecipe);

  return (
    <Section>
      <h1>Recipes</h1>
      <Card className={styles.card}>
        <h2>Keyword filter</h2>
        <div className={styles.keywords}>
          {allKeywords.map((keyword) => (
            <FilterButton
              selectedKeywords={selectedKeywords}
              visibleKeywords={visibleKeywords}
              keyword={keyword}
              handleKeywordClick={handleKeywordClick}
              key={keyword}
            />
            // <Button
            //   id={`filter-button-${keyword}`}
            //   variant={
            //     selectedKeywords.includes(keyword)
            //       ? ButtonVariants.Primary
            //       : ButtonVariants.Secondary
            //   }
            //   className={`${styles.filterButton} ${
            //     visibleKeywords.includes(keyword) ? null : styles.opaque
            //   }`}
            //   onClick={() => handleKeywordClick(keyword)}
            //   key={keyword}
            // >
            //   {keyword}
            // </Button>
          ))}
        </div>
        <Button variant={ButtonVariants.Primary} onClick={handleResetClick}>
          <GrPowerReset />
          Reset
        </Button>
      </Card>
      {visibleRecipes?.map((id) => {
        const recipe = recipes.find((rec) => rec.id === id);
        if (!recipe) return null;

        const { name, description, keywords } = recipe;
        return (
          <Card className={styles.card} key={id}>
            <h2>{name}</h2>
            <span>{description}</span>
            <div className={styles.keywords}>
              {keywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </Card>
        );
      })}
    </Section>
  );
};
