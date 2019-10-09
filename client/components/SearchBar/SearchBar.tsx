import * as Styled from './style'

const SearchIcon = () => (
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAStJREFUOBGtkrFKA0EURZeYws5OQtDaUgsbi7RiGeuk2A+w0UbwG2z9ghS2NtpZKmgVKwlpQrqAYJNoJXhOIJIdM7Mr+OCwO+/decy8uVlWjC2WVzCET3iDe+hC5chRvsM1+L8Hh3ABY7iFJiQjpzqBo4hqg3wPXmE9osm8jieJNVnsq/HzAJeLRPh1Jl6nSuwg+oLGKrGDzVcVIrkR+U5Y87jb0A8LibVax1EIG01hs5BNL9TOQomNXmA/LETWdfLawj2/QrONwScuizMEA1iLCe8o6BNPGItdCo7hICYwr2M1mz7xiZfD65yCTZ6gDcnQsZpNn4zgBh7hA7yOJzkGB13aDM3cbPrkHE6gBcszsUnlZmiT8a/N/nTN5LEo2uwZUq9d1uOnPm/yDckrMt+EneXZAAAAAElFTkSuQmCC" alt="search icon" />
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
