import { useState, useEffect, useContext } from 'react'
import { fetchItemById } from '../../Resources/Resources'
import * as Styled from './style'
import NotFound from './NotFound'
import Loading from '../Loading/Loading'
import { LayoutContext } from '../Layouts/LayoutContext';
import { ISearchResult } from './types';

interface FetchItem {
  item: ISearchResult,
  errors: boolean | null,
  loading: boolean
}

export function useFetchItem(sku: string): FetchItem {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(null)
  const [errors, setErrors] = useState(null)
  const { setBreadCrumb, setTitle } = useContext(LayoutContext);

  useEffect(() => {
    setLoading(true)
    if (!sku) {
      setItem([])
      setErrors(true)
    }

    fetchItemById(sku)
      .then(res => {
        setItem(res.data.item)
        setErrors(null)
      })
      .catch(err => {
        setItem({})
        setErrors(err)
      })
      .finally(() => {
        setLoading(false)
      })

  }, [sku])

  return {
    item,
    loading,
    errors,
  }
}

function Item({ itemId = '' }) {

  const { item, errors, loading } = useFetchItem(itemId)

  if (errors) return <NotFound errors={errors} />

  if (loading) return <Loading />

  if (!Object.keys(item).length) return <NotFound />

  return (
    <Styled.CardHeroContainer>
      <Styled.CardHeroImageContainer>
        <Styled.CardHeroImage
          src={item.picture}
          alt={item.title}
          title={item.title}
        />
      </Styled.CardHeroImageContainer>

      <Styled.CardHeroImageInfo>
        <Styled.CardHeroImageSoldInfo>
          <Styled.CardHeroCondition>{item.condition}</Styled.CardHeroCondition>
          <Styled.CardHeroSoldQuantity> - {item.sold_quantity}</Styled.CardHeroSoldQuantity>
          <Styled.CardHeroSoldText> vendidos</Styled.CardHeroSoldText>
        </Styled.CardHeroImageSoldInfo>
        <Styled.CardHeroTitle>
          {item.title}
        </Styled.CardHeroTitle>
        <Styled.CardHeroPrice>
          $ {item.price && item.price.decimals}
        </Styled.CardHeroPrice>
        <Styled.ShopButtonContainer>
          <Styled.ShopButton role="link" aria-label="Comprar">Comprar</Styled.ShopButton>
        </Styled.ShopButtonContainer>
      </Styled.CardHeroImageInfo>

      <Styled.CardHeroDescription>
        <Styled.CardHeroDescriptionTitle>
          Description del producto
        </Styled.CardHeroDescriptionTitle>
        <Styled.CardHeroDescriptionText dangerouslySetInnerHTML={{ __html: item.description }} />
      </Styled.CardHeroDescription>
    </Styled.CardHeroContainer>
  )
}

export default Item
