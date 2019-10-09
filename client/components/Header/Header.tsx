import Link from 'next/link'
import SearchBar from '../SearchBar/SearchBar'
import * as Common from '../Common/main.styled'
import * as Styled from './style'
import LogoMl from '../../public/img/Logo_ML.png';

function Header() {
  return (
    <Styled.MainHeader>
      <Common.Limit>
        <Logo />
        <SearchBar />
      </Common.Limit>
    </Styled.MainHeader>
  )
}

function Logo() {
  return (
    <Link href="/">
      <Styled.Logo role="link">
        <Styled.Img src={LogoMl} alt="Mercado Libre" title="Mercado Libre" />
      </Styled.Logo>
    </Link>
  )
}

export default Header
