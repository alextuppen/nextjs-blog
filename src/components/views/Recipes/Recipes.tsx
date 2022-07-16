import { FC, useEffect, useState } from "react";
import { uniq } from "lodash";
import { GrPowerReset } from "react-icons/gr";
import { ButtonVariants, Button } from "@input";
import { Card, Section } from "@layout";
import { motion, AnimatePresence } from "framer-motion";
import { RecipeSynopsis } from "@types";
import { RecipesProps } from "./Recipes.types";
import styles from "./Recipes.module.scss";

export const Recipes: FC<RecipesProps> = ({ recipes, allKeywords }) => {
  const [visibleRecipes, setVisibleRecipes] = useState<RecipeSynopsis[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [visibleKeywords, setVisibleKeywords] = useState<string[]>([]);

  useEffect(() => {
    setVisibleRecipes(recipes);
  }, [recipes]);

  useEffect(() => {
    setVisibleKeywords(allKeywords);
  }, [allKeywords]);

  const updateVisibleRecipesAndKeywords = (newSelectedKeywords: string[]) => {
    const newVisisbleRecipes: RecipeSynopsis[] = [];
    const newVisibleKeywords: string[] = [];

    recipes.forEach((recipe) => {
      const { keywords } = recipe;

      if (newSelectedKeywords.every((kws) => keywords.includes(kws))) {
        newVisisbleRecipes.push(recipe);
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
    setVisibleRecipes(recipes);
    setSelectedKeywords([]);
    setVisibleKeywords(allKeywords);
  };

  return (
    <Section>
      <h1>Recipes</h1>
      <Card className={styles.card}>
        <h2>Keyword filter</h2>
        <div className={styles.keywords}>
          <AnimatePresence>
            {visibleKeywords.map((keyword) => (
              <motion.div
                key={keyword}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
              >
                <Button
                  onClick={() => handleKeywordClick(keyword)}
                  variant={
                    selectedKeywords.includes(keyword)
                      ? ButtonVariants.Primary
                      : ButtonVariants.Secondary
                  }
                >
                  {keyword}
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <Button variant={ButtonVariants.Primary} onClick={handleResetClick}>
          <GrPowerReset />
          Reset
        </Button>
      </Card>
      <AnimatePresence>
        {visibleRecipes.map((recipe) => {
          const { id, name, description, keywords } = recipe;

          return (
            <motion.div
              key={id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
            >
              <Card className={styles.card} key={id}>
                <h2>{name}</h2>
                <span>{description}</span>
                <div className={styles.keywords}>
                  {keywords.map((keyword) => (
                    <span key={keyword}>{keyword}</span>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </Section>
  );
};
