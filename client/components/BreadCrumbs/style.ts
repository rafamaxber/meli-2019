import styled from 'styled-components';

export const BreadCrumb = styled.nav`
  font-size: 14px;
  padding: ${({ theme }) => theme.paddingBase} 0;
  color: ${({ theme }) => theme.lv3Color};
`;

export const BreadCrumbList = styled.ul`
  margin: 0 0 0 0;
  padding: 0 0 0 0;
`;

export const BreadCrumbItem = styled.li`
  display: inline-block;
  list-style-type: none;
  vertical-align: middle;
  cursor: default;

  :last-child {
    font-weight: bold;
  }

  svg {
    margin: 0 5px;
    vertical-align: bottom;
    display: inline-block;
  }
`;
