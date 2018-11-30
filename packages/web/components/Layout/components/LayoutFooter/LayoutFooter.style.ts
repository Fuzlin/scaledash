import { Box, Flex } from "@rebass/grid";
import styled from "../../../../theme/styled";

export const LayoutFooterRoot = styled(Flex)`
  flex: 0 0 auto;
  background: ${({ theme }) => theme.colors.grey700};
  color: ${({ theme }) => theme.colors.white};
`;

export const LayoutFooterWrapper = styled(Box)`
  max-width: 1080px;
`;
