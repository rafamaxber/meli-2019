# Mercado Libre

This project uses the free market API by performing an abstraction of product search and listing using a `bff` built using `typescript, express, axios, jest and cypress` for viewing a `client` built using `nextJs, typescript, react, styled components, cypress, jest, react testing library and react hooks`, the components were documented using `docz`.

## Technologies

Must use package manager `yarn` because the project is a monorepo that uses the `yarn workspaces`.

Aiming to meet the functional requirements was chosen as frontend framework the [NextJs](https://nextjs.org) which provides a structure of server side rendering(SSR) and component development using `React` and `Custom hooks do React`.

## Get started

1 - Project clone
```
git clone git@github.com:rafamaxber/meli-2019.git
```

2 - Install dependencies using `yarn`
```
yarn
```

### View component documentation

```
yarn docz:dev
```

### Run Application

```
yarn run:app
```

#### Run Client

```
yarn client:dev
```

#### Run Bff

```
yarn bff:dev
```

### Test Client

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

### Test Bff

Testar client E2E

```
yarn client:cy
```

[*Bff = Backend for frontend](https://samnewman.io/patterns/architectural/bff/)
