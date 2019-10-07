import styled, { createGlobalStyle } from 'styled-components';

export const MainLayout = createGlobalStyle`
  body {
    font-family: "Proxima Nova,-apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif";
    background-color: ${({ theme }) => theme.bgColor};
    margin: 0;
    color: ${({ theme }) => theme.lv1Color};
  }
`;

export const ContainerSite = styled.div``;

export const Content = styled.div`
  background-color: #ffffff;
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ theme }) => theme.limits}
`;

export const Limit = styled.div`
  ${({ theme }) => theme.limits}
`;
