import { useState, useEffect } from "react";
import {
  BP_QUERY_SMALL,
  BP_QUERY_MEDIUM,
  BP_QUERY_LARGE,
  BP_QUERY_XL,
} from "@constants";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export const useSmallMediaQuery = () => useMediaQuery(BP_QUERY_SMALL);
export const useMediumMediaQuery = () => useMediaQuery(BP_QUERY_MEDIUM);
export const useLargeMediaQuery = () => useMediaQuery(BP_QUERY_LARGE);
export const useXlediaQuery = () => useMediaQuery(BP_QUERY_XL);
