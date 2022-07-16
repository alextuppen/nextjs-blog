import { FC, useEffect, useState } from "react";
import { uniq } from "lodash";
import { GrPowerReset } from "react-icons/gr";
import { ButtonVariants, Button } from "@input";
import { Card, Section } from "@layout";
import { motion, AnimatePresence } from "framer-motion";
import { RecipeSynopsis } from "@types";
import Image from "next/image";
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
      <div className={styles.recipeGrid}>
        <AnimatePresence>
          {visibleRecipes.map((recipe) => {
            const { id, image, name, description, keywords } = recipe;

            return (
              <motion.div
                key={id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
                className={styles.recipeWrapper}
              >
                <Button
                  href={`/recipes/${id}`}
                  className={styles.recipeWrapper}
                >
                  <Card className={styles.recipeCard} key={id}>
                    <h2>{name}</h2>
                    {image[0] !== "" && (
                      <div className={styles.recipeImageWrapper}>
                        <Image
                          alt={name}
                          src={image[0]}
                          layout="fill"
                          objectFit="cover"
                          quality={100}
                        />
                      </div>
                    )}
                    <span>{description}</span>
                    <div className={styles.keywords}>
                      {keywords.map((keyword) => (
                        <span className={styles.keyword} key={keyword}>
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </Card>
                </Button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </Section>
  );
};
