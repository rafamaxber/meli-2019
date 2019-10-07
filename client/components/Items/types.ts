
export interface IItem {
  id: string,
  title: string,
  price: {
    currency: string,
    amount: number,
    decimals: number,
  },
  address?: {
    state_name: string
  },
  picture: string,
  condition: string,
  free_shipping: boolean,
  sold_quantity?: number,
  description?: string
}

export interface IItemList {
  items: IItem[]
}

export interface IDescription {
  text: string
}

export interface IAuthorConfig {
  name: string,
  lastname: string
}

export interface IAuthor {
  author: IAuthorConfig
}

export interface ICategories {
  categories: string[]
}

export interface IItemStruct {
  item: IItem
}

export interface ISearchResult extends ICategories, IAuthor, IItemList {
}

export interface IFindByIdResponse extends IAuthor, IItemStruct {
}
