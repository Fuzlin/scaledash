import * as React from "react";
import { compose, pure } from "recompose";

import { LayoutFooter } from "./components/LayoutFooter/LayoutFooter";
import { LayoutHeader } from "./components/LayoutHeader/LayoutHeader";
import { LayoutSitemap } from "./components/LayoutSitemap/LayoutSitemap";
import { LayoutContentWrapper, LayoutRoot } from "./Layout.style";

type LayoutExposedProps = {
  noHeader?: boolean;
  noFooter?: boolean;
  noCopyright?: boolean;
  noSitemap?: boolean;
};

type LayoutProps = LayoutExposedProps & {};

export const Layout = compose<LayoutProps, LayoutExposedProps>(pure)((props) => {
  const { children, noCopyright, noFooter, noHeader, noSitemap } = props;

  return (
    <LayoutRoot>
      {noHeader !== true && <LayoutHeader />}
      <LayoutContentWrapper>{children}</LayoutContentWrapper>
      {noFooter !== true && (
        <footer>
          {noSitemap !== true && <LayoutSitemap />}
          {noCopyright !== true && <LayoutFooter />}
        </footer>
      )}
    </LayoutRoot>
  );
});
