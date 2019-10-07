import { PureComponent } from 'react'
import { useRouter } from 'next/router'
import * as S from '../../components/Common/main.styled'
import MainLayout from '../../components/Layouts/MainLayout'
import Item from '../../components/Items/Item'
import Items from '../../components/Items/Items'
import NotFound from '../../components/Items/NotFound'

function SelectComponent() {
  const { query: { id }} = useRouter();
  const { query} = useRouter();
console.log(query)
  if (id) {
    return <Item itemId={id} />
  }

  return <NotFound />
}

function ItemPage() {
  return (
    <MainLayout>
      <S.Limit>
        <SelectComponent />
      </S.Limit>
    </MainLayout>
  )
}

export default ItemPage;
