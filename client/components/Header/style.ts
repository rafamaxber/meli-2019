import styled from 'styled-components';

import * as variables from '../MainLayout/styleGlobal'

export const MainHeader = styled.div`
  padding: 10px 0;
  background-color: ${({ theme }) => theme.meliColor};
`

export const Logo = styled.a`
  display: inline-block;
  font-size: 0;
  vertical-align: middle;

  @media (max-width: 530px) {
    display: block;
    text-align: center;
    margin-bottom: 10px;
  }
`

export const Img = styled.img``;
