export interface FilterButtonProps {
  selectedKeywords: string[];
  visibleKeywords: string[];
  keyword: string;
  handleKeywordClick: (keyword: string) => void;
}
