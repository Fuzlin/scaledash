import { Box, Flex } from "@rebass/grid";
import styled from "../../../../theme/styled";

export const LayoutHeaderRoot = styled(Flex)`
  flex: 0 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey500};
`;

export const LayoutHeaderWrapper = styled(Box)`
  max-width: 1080px;
`;
