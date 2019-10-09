# Mercado Libre

Esse projeto utiliza a API do mercado livre realizando uma abstração da busca e listagem de produtos utilizando um `bff` construido utilizando `typescript, express, axios, jest and cypress` para visualização foi criado um `client` construido utilizando `nextJs, typescript, react, styled components, cypress, jest, react testing library and react hooks`, os componentes foram documentados utilizando `docz`.

## Tecnologias

É necessário utilizar o package manager `yarn` pois o projeto é um monorepo que utiliza o `yarn workspaces`.

Visando atender os requisitos funcionais foi escolhido como framework frontend o [NextJs](https://nextjs.org) que provê uma estrutura de server side rendering(SSR) e desenvolvimento dos componentes utilizando `React` e `Custom hooks do React`.

## Get started

1 - clone do projeto
```
git clone git@github.com:rafamaxber/meli-2019.git
```

2 - Instale as dependências utilizando `yarn`
```
yarn
```

### Visualizar documentação de componentes

```
yarn docz:dev
```

### Rodar Aplicação

```
yarn run:app
```

#### Rodar Client

```
yarn client:dev
```

#### Rodar Bff

```
yarn bff:dev
```

### Testar Client

Testar client utilizando Majestic gui

```
yarn client:test:gui
```

```
yarn client:test
```

Testar client E2E

```
yarn client:cy
```

### Testar Bff

Testar client E2E

```
yarn client:cy
```

[*Bff = Backend for frontend](https://samnewman.io/patterns/architectural/bff/)
