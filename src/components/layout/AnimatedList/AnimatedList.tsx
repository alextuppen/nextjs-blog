// https://medium.com/ft-product-technology/animating-list-reordering-with-react-hooks-1aa0d78a24dc

import React, { FC, useEffect, useState } from "react";
import { usePrevious } from "@hooks";

const calculateBoundingBoxes = (children) => {
  const boundingBoxes = {};

  React.Children.forEach(children, (child) => {
    const domNode = child.ref.current;
    const nodeBoundingBox = domNode.getBoundingClientRect();

    boundingBoxes[child.key] = nodeBoundingBox;
  });

  return boundingBoxes;
};

export const AnimatedList: FC = ({ children }) => {
  const [boundingBox, setBoundingBox] = useState({});
  const [previousBoundingBox, setPreviousBoundingBox] = useState({});
  const previousChildren = usePrevious(children);

  useEffect(() => {
    const newBoundingBox = calculateBoundingBoxes(children);
    setBoundingBox(newBoundingBox);
  }, [children]);

  useEffect(() => {
    const prevBoundingBox = calculateBoundingBoxes(previousChildren);
    setPreviousBoundingBox(prevBoundingBox);
  }, [previousChildren]);

  console.log(children, previousChildren);

  return children;

  //   return (
  //     // eslint-disable-next-line react/jsx-no-useless-fragment
  //     <>{children}</>
  //   );
};
