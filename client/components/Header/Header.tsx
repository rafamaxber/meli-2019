import Link from 'next/link'
import SearchBar from '../SearchBar/SearchBar'
import * as Common from '../Common/main.styled'
import * as Styled from './style'

const Header = () => (
  <Styled.MainHeader>
    <Common.Limit>
      <Logo />
      <SearchBar />
    </Common.Limit>
  </Styled.MainHeader>
)

const Logo = () => (
  <Link href="/">
    <Styled.Logo role="link">
      <Styled.Img src="/static/img/Logo_ML.png" alt="Mercado Libre" title="Mercado Libre" />
    </Styled.Logo>
  </Link>
)

export default Header
