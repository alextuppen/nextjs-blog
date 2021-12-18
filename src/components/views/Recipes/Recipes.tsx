import { FC, useEffect, useState } from "react";
import { DateTime } from "luxon";
import { uniq } from "lodash";
import { ButtonVariants, Button } from "@input";
import { Card, Section } from "@layout";
import { RecipesProps } from "./Recipes.types";

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

  const handleKeywordClick = (keyword: string) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(
        selectedKeywords.filter((arrayWord) => arrayWord !== keyword)
      );
    } else {
      const newVisisbleRecipes: string[] = [];
      const newSelectedKeywords = selectedKeywords.concat(keyword);
      const newVisibleKeywords: string[] = [];

      // eslint-disable-next-line array-callback-return
      Object.entries(keywordsByRecipe).map(([recipeId, keywords]) => {
        if (newSelectedKeywords.every((kws) => keywords.includes(kws))) {
          newVisisbleRecipes.push(recipeId);
          newVisibleKeywords.push(...keywords);
        }
      });

      setVisibleRecipes(newVisisbleRecipes);
      setSelectedKeywords(newSelectedKeywords);
      setVisibleKeywords(uniq(newVisibleKeywords));
    }
  };

  const handleResetClick = () => {
    setVisibleRecipes(recipeIds);
    setSelectedKeywords([]);
    setVisibleKeywords(allKeywords);
  };

  //   console.log(visibleRecipes);
  //   console.log(selectedKeywords);
  //   console.log(visibleKeywords);
  //   console.log(recipes);
  // console.log(keywordsByRecipe);

  return (
    <Section>
      <h1>Recipes</h1>
      <Card>
        {visibleKeywords.map((keyword) => (
          <Button
            variant={
              selectedKeywords.includes(keyword)
                ? ButtonVariants.Primary
                : ButtonVariants.Secondary
            }
            onClick={() => handleKeywordClick(keyword)}
            key={keyword}
          >
            {keyword}
          </Button>
        ))}
        <Button onClick={handleResetClick}>Reset</Button>
      </Card>
      {visibleRecipes?.map((id) => {
        const recipe = recipes.find((rec) => rec.id === id);
        if (!recipe) return null;

        const { name, datePublished, description, keywords } = recipe;
        return (
          <Card key={id}>
            <h2>{name}</h2>
            <span>{description}</span>
            <span>
              Published: {DateTime.fromISO(datePublished).toLocaleString()}
            </span>
            <span>{keywords}</span>
          </Card>
        );
      })}
    </Section>
  );
};
