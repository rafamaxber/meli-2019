import * as Styled from './style';
import SearchImage from '../../public/img/ic_Search.png';

const SearchIcon = () => (
  <img src={SearchImage} alt="search icon" />
)

const SearchBar = () => (
  <Styled.SearchBar>
    <Styled.Form action="/items" method="GET" role="search">
      <Styled.Input
        data-search
        maxLength="120"
        name="search"
        aria-required="true"
        type="search"
        placeholder="Buscar Producto"
        autoCapitalize="off"
        autoCorrect="off"
        aria-autocomplete="list"
        required
        autoFocus
      />
      <Styled.Button type="submit" aria-label="Buscar">
        <SearchIcon />
        <Styled.Typography hidden>Buscar</Styled.Typography>
      </Styled.Button>
    </Styled.Form>
  </Styled.SearchBar>
)

export default SearchBar
