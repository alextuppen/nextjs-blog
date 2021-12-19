import { FC, useEffect, useState } from "react";
import { ButtonVariants, Button } from "@input";
import { FilterButtonProps } from "./FilterButton.types";
// import styles from "./FilterButton.module.scss";

export const FilterButton: FC<FilterButtonProps> = ({
  selectedKeywords,
  visibleKeywords,
  keyword,
  handleKeywordClick,
}) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const element = document.getElementById(`filter-button-${keyword}`);

    element?.addEventListener("transitionend", () => {
      if (element?.style.opacity === "0") {
        setHidden(true);
      }
    });
  }, [keyword]);

  useEffect(() => {
    if (visibleKeywords.includes(keyword)) {
      setHidden(false);
    }
  }, [hidden, keyword, visibleKeywords]);

  return (
    <Button
      id={`filter-button-${keyword}`}
      variant={
        selectedKeywords.includes(keyword)
          ? ButtonVariants.Primary
          : ButtonVariants.Secondary
      }
      //   className={`${styles.filterButton} ${
      //     visibleKeywords.includes(keyword) ? null : styles.opaque
      //   } ${hidden ? styles.hidden : null}`}
      onClick={() => handleKeywordClick(keyword)}
      key={keyword}
      style={{
        display: hidden ? "none" : "block",
        transition: "opacity 500ms",
        opacity: visibleKeywords.includes(keyword) ? 100 : 0,
      }}
    >
      {keyword}
    </Button>
  );
};
