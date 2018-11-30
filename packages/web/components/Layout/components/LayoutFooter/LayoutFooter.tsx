import * as React from "react";
import { compose, pure } from "recompose";

import { LayoutFooterRoot, LayoutFooterWrapper } from "./LayoutFooter.style";

export const LayoutFooter = compose(pure)((props) => {
  const {} = props;

  return (
    <LayoutFooterRoot justifyContent="center">
      <LayoutFooterWrapper width={1} px={[4, 5]} py={2}>
        Footer
      </LayoutFooterWrapper>
    </LayoutFooterRoot>
  );
});
