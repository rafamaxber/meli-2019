import { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import CurrencyFormat from 'react-currency-format';
import * as Styled from './style'
import NotFound from './NotFound'
import Loading from '../Loading/Loading'
import { searchItems } from '../../Resources/Resources'
import { LayoutContext } from '../Layouts/LayoutContext';
import ShippingIcon from '../../public/img/ic_shipping.png';
import { IItem } from './types';

const IconFreeShipping = ({ free_shipping }) => {
  if (free_shipping) {
    return (
      <img src={ShippingIcon} alt="Free Shipping" title="Free Shipping"/>
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

  return items.map(( item ) => <CardItem item={item} />);
}

export function CardItem({ item }:IItem) {
  return (
    <Styled.CardItem key={item.id} data-card={item.id}>
      <Styled.CardItemImage>
        <Link href="/items/[id]" as={`/items/${item.id}`}>
          <img src={item.picture} alt={item.title} title={item.title} />
        </Link>
      </Styled.CardItemImage>
      <Styled.CardItemDescription>
        <Styled.CardItemPrice>
        <CurrencyFormat
          value={item.price.decimals}
          displayType='text'
          thousandSeparator
          prefix={'$'}
        />
        <IconFreeShipping free_shipping={item.free_shipping}/>
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
  )
}

export default Items
