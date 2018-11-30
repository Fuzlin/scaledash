import styled from "../../theme/styled";

export const LayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const LayoutHeaderWrapper = styled.div`
  padding: 16px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey500};
  flex: 0 0 auto;
`;

export const LayoutContentWrapper = styled.div`
  flex: 1 0 auto;
`;

export const LayoutSitemapWrapper = styled.div`
  flex: 0 0 auto;
  padding: 40px 0;
  background: ${({ theme }) => theme.colors.grey500};
`;

export const LayoutFooterWrapper = styled.div`
  flex: 0 0 auto;
  padding: 16px 0;
  background: ${({ theme }) => theme.colors.grey700};
`;
