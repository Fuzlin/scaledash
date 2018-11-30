import * as React from "react";
import { compose, pure } from "recompose";

import { Box, Flex } from "@rebass/grid";
import { LayoutSitemapRoot, LayoutSitemapWrapper } from "./LayoutSitemap.style";

export const LayoutSitemap = compose(pure)((props) => {
  const {} = props;

  return (
    <LayoutSitemapRoot justifyContent="center">
      <LayoutSitemapWrapper width={1} px={[4, 5]} py={2}>
        <Flex flexWrap="wrap">
          <Box order={[4, 4, -1]} width={[1, 1, 1 / 4]}>
            <Flex justifyContent={["center", "center", "flex-start"]}>
              Logo
            </Flex>
          </Box>
          <Box width={[1, 1, 1 / 4]}>
            <Flex justifyContent={["center", "center", "flex-start"]}>
              Pricing
            </Flex>
          </Box>
          <Box width={[1, 1, 1 / 4]}>
            <Flex justifyContent={["center", "center", "flex-start"]}>
              Plan
            </Flex>
          </Box>
          <Box width={[1, 1, 1 / 4]}>
            <Flex justifyContent={["center", "center", "flex-start"]}>
              Social
            </Flex>
          </Box>
        </Flex>
      </LayoutSitemapWrapper>
    </LayoutSitemapRoot>
  );
});
