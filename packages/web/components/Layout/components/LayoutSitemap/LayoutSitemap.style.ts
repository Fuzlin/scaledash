import { Box, Flex } from "@rebass/grid";
import styled from "../../../../theme/styled";

export const LayoutSitemapRoot = styled(Flex)`
  flex: 0 0 auto;
  background: ${({ theme }) => theme.colors.grey500};
  color: ${({ theme }) => theme.colors.white};
`;

export const LayoutSitemapWrapper = styled(Box)`
  max-width: 1080px;
`;
