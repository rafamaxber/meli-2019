import { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import * as Styled from './style'
import NotFound from './NotFound'
import Loading from '../Loading/Loading'
import { searchItems } from '../../Resources/Resources'
import { LayoutContext } from '../Layouts/LayoutContext';

const IconFreeShipping = ({ free_shipping }) => {
  if (free_shipping) {
    return (
      <img src="/static/img/ic_shipping.png" alt="Free Shipping" title="Free Shipping"/>
    )
  }
  return null;
}

function useSearchItems(searchText) {
  const { setBreadCrumb, setTitle } = useContext(LayoutContext);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setLoading(true)
    setTitle(`Mercado Libre: ${searchText}`)
    searchItems(searchText)
      .then(res => {
        setItems(res.data.items);
        setBreadCrumb(res.data.categories)
        setErrors(null)
      })
      .catch(err => {
        setItems([]);
        setErrors(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [searchText]);

  return {
    items,
    loading,
    errors
  }
}

function Items({ searchText }) {
  const { items, errors, loading } = useSearchItems(searchText);

  if (errors) return <NotFound errors={errors} />

  if (loading) return <Loading />

  if (items.length === 0) return <NotFound />

  const cardList = items.map(( item ) => (
    <Styled.CardItem key={item.id}>
      <Styled.CardItemImage>
        <Link href="/items/[id]" as={`/items/${item.id}`}>
          <img src={item.picture} alt={item.title} title={item.title} />
        </Link>
      </Styled.CardItemImage>
      <Styled.CardItemDescription>
        <Styled.CardItemPrice>
          $ {item.price.decimals} <IconFreeShipping free_shipping={item.free_shipping}/>
        </Styled.CardItemPrice>
        <Styled.CardItemTitle aria-label={item.title}>
          <Link href="/items/[id]" as={`/items/${item.id}`}>
            <Styled.CardItemTitleLink>
              {item.title}
            </Styled.CardItemTitleLink>
          </Link>
        </Styled.CardItemTitle>
      </Styled.CardItemDescription>
      <Styled.CardItemLocation>
        <Styled.CardItemLocationName>{item.address.state_name}</Styled.CardItemLocationName>
      </Styled.CardItemLocation>
    </Styled.CardItem>
  ));

  return cardList
}

export default Items
