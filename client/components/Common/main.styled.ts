import styled, { createGlobalStyle } from 'styled-components';

export const MainLayout = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
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
