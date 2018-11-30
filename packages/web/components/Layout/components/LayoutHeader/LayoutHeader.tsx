import * as React from "react";
import { compose, pure } from "recompose";

import { LayoutHeaderRoot, LayoutHeaderWrapper } from "./LayoutHeader.style";

export const LayoutHeader = compose(pure)((props) => {
  const {} = props;

  return (
    <LayoutHeaderRoot justifyContent="center">
      <LayoutHeaderWrapper width={1} px={[4, 5]} py={2}>
        Header
      </LayoutHeaderWrapper>
    </LayoutHeaderRoot>
  );
});
