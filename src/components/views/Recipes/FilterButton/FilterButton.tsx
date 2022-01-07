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
  const [opaque, setOpaque] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const element = document.getElementById(`filter-button-${keyword}`);

    element?.addEventListener("transitionend", () => {
      if (element?.style.opacity === "0") {
        setHidden(true);
        setOpaque(true);
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
        // transition: "opacity 500ms",
        opacity: visibleKeywords.includes(keyword) ? 100 : 0,
        transition: "max-width 500ms, opacity 500ms",
        // transform: `scaleX(${visibleKeywords.includes(keyword) ? 1 : 0})`,
        // transition: "flex-grow 500ms",
        // flexGrow: visibleKeywords.includes(keyword) ? 1 : 0,
        // maxWidth: visibleKeywords.includes(keyword) ? 200 : 0,
        maxWidth: opaque ? 0 : 200,
        // padding: visibleKeywords.includes(keyword) ? 5 : 0,
      }}
    >
      {keyword}
    </Button>
  );
};
