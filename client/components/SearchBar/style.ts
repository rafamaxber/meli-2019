import styled from 'styled-components';

export const SearchBar = styled.div`
  display: inline-block;
  max-width: 900px;
  vertical-align: middle;
  left: 26px;
  width: 90%;
  position: relative;
`;

export const Form = styled.form``;

export const Input = styled.input`
  height: 35px;
  padding: 10px;
  width: 95.5%;
  border: none;
  border-radius: ${({ theme }) => `${theme.borderRadius} 0 0 ${theme.borderRadius}`};

  ::placeholder {
    font-size: 18px;
    color: ${({ theme }) => theme.lv3Color};
    padding-top: 2px;
    position: relative;
  }

  :focus {
    outline: none;
    box-shadow: -2px 1px 10px -5px ${({ theme }) => theme.lv1Color};
  }

  @media (max-width: 939px) {
    width: 85%;
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: ${({ theme }) => `0 ${theme.borderRadius} ${theme.borderRadius} 0`};
  padding: 10px;
  display: inline-block;
  vertical-align: top;
  font-size: 0;
  height: 35px;
  position: relative;
`;

export const Typography = styled.span``;
