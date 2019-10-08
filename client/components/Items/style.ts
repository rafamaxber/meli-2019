import styled from 'styled-components';

export const CardItem = styled.div`
  display: flex;
  padding-top: ${({ theme }) => theme.paddingBase};
  position: relative;
  padding-bottom: ${({ theme }) => theme.paddingBase};

  :after {
    content: "";
    background-color: ${({ theme }) => theme.bgColor};
    display: block;
    height: 1px;
    width: 95%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;
export const CardItemDescription = styled.div`
  width: 572px;
  padding-left: ${({ theme }) => theme.paddingBase};
`;
export const CardItemImage = styled.figure`
  padding-left: ${({ theme }) => theme.paddingBase};
  width: 180px;
  cursor: pointer;
  height: 180px;
  overflow: hidden;
  border-radius: 4px;
  left: -2px;
  top: 2px;

  img {
    width: 100%;
  }
`;
export const CardItemLocation = styled.div`
  padding-left: ${({ theme }) => theme.paddingBase};
  font-size: 12px;
  max-width: 160px;
`;
export const CardItemLocationName = styled.div`
  position: relative;
  top: 25px;
`;
export const CardItemPrice = styled.div`
  font-size: 24px;
  margin-bottom: ${({ theme }) => theme.paddingLarge};
`;
export const CardItemTitle = styled.div`
  font-size: 18px;
`;
export const CardItemTitleLink = styled.div`
  color: inherit;
  text-decoration: none;
`;

export const CardHeroContainer = styled.div``
export const CardHeroImageContainer = styled.div`
  position: relative;
  padding-top: ${({ theme }) => theme.paddingBase};
  padding-bottom: ${({ theme }) => theme.paddingBase};
  float: left;
  text-align: center;
  max-width: 680px;
  width: 65%;
  margin: 0 0 0 0;
`;
export const CardHeroImage = styled.img`
  width: auto;
  max-width: 100%;
`;
export const CardHeroImageInfo = styled.div`
  float: right;
  max-width: 300px;
  width: 30%;
  padding-right: ${({ theme }) => theme.paddingLarge};
  padding-top: ${({ theme }) => theme.paddingLarge};
`;
export const CardHeroImageSoldInfo = styled.div`
  font-size: 14px;
  padding-bottom: ${({ theme }) => theme.paddingBase};
`;
export const CardHeroTitle = styled.h1`
  font-size: 24px;
  padding-bottom: ${({ theme }) => theme.paddingLarge};
`;
export const CardHeroPrice = styled.div`
  font-size: 46px;
  padding-bottom: ${({ theme }) => theme.paddingLarge};
`;
export const CardHeroDescription = styled.div`
  padding: ${({ theme }) => theme.paddingLarge};
  clear: both;
`;
export const CardHeroDescriptionTitle = styled.h2`
  font-size: 28px;
`;
export const CardHeroDescriptionText = styled.div`
  font-size: 16px;

  :after {
    content: '.';
    clear: both;
    height: 0;
    width: 100%;
    display: block;
    visibility: hidden;
  }
`;
export const ShopButtonContainer = styled.div``;
export const CardHeroCondition = styled.span``;
export const CardHeroSoldQuantity = styled.span``;
export const CardHeroSoldText = styled.span``;
export const ShopButton = styled.a`
  display: block;
  text-align: center;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  padding: 13px;
  max-width: 210px;
  background-color: ${({ theme }) => theme.shopColor};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
