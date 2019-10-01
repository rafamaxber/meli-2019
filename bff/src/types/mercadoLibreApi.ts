
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

export interface IItemStruct {
  item: IItem
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

export interface ISearchResult extends ICategories, IAuthor, IItemList {
}

export interface IFindByIdResponse extends IAuthor, IItemStruct {
}

export interface IMercadoLibreSearch {
  site_id: string;
  query: string;
  paging: Paging;
  results: Result[];
  secondary_results: any[];
  related_results: any[];
  sort: Sort;
  available_sorts: AvailableSort[];
  filters: Filter[];
  available_filters: AvailableFilter[];
}

export interface Paging {
  total: number;
  offset: number;
  limit: number;
  primary_results: number;
}

export interface Result {
  id: string;
  site_id: string;
  title: string;
  seller: Seller;
  price: number;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  stop_time: string;
  condition: string;
  permalink: string;
  thumbnail: string;
  accepts_mercadopago: boolean;
  installments: Installments;
  address: Address;
  shipping: Shipping;
  seller_address: SellerAddress;
  attributes: Attribute[];
  original_price: any;
  category_id: string;
  official_store_id ? : number;
  catalog_product_id ? : string;
  tags: string[];
  differential_pricing ? : DifferentialPricing;
}

export interface Seller {
  id: number;
  power_seller_status ? : string;
  car_dealer: boolean;
  real_estate_agency: boolean;
  tags: any[];
}

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}

export interface Address {
  state_id: string;
  state_name: string;
  city_id ? : string;
  city_name: string;
}

export interface Shipping {
  free_shipping: boolean;
  mode: string;
  tags: string[];
  logistic_type: string;
  store_pick_up: boolean;
}

export interface SellerAddress {
  id: string;
  comment: string;
  address_line: string;
  zip_code: string;
  country: Country;
  state: State;
  city: City;
  latitude: string;
  longitude: string;
}

export interface Country {
  id: string;
  name: string;
}

export interface State {
  id: string;
  name: string;
}

export interface City {
  id ? : string;
  name: string;
}

export interface Attribute {
  attribute_group_name: string;
  source ? : number;
  id: string;
  name: string;
  value_id ?: string;
  value_name ?: string;
  value_struct?: ValueStruct;
  attribute_group_id: string;
}

export interface DifferentialPricing {
  id: number;
}

export interface Sort {
  id: string;
  name: string;
}

export interface AvailableSort {
  id: string;
  name: string;
}

export interface Filter {
  id: string;
  name: string;
  type: string;
  values: Value[];
}

export interface Value {
  id: string;
  name: string;
  path_from_root: PathFromRoot[];
}

export interface PathFromRoot {
  id: string;
  name: string;
}

export interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: Value2[];
}

export interface Value2 {
  id: string;
  name: string;
  results: number;
}

export interface IMercadoLibreItems {
  id: string;
  site_id: string;
  title: string;
  subtitle: any;
  seller_id: number;
  category_id: string;
  official_store_id: number;
  price: number;
  base_price: number;
  original_price: any;
  currency_id: string;
  initial_quantity: number;
  available_quantity: number;
  sold_quantity: number;
  sale_terms: SaleTerm[];
  buying_mode: string;
  listing_type_id: string;
  start_time: string;
  stop_time: string;
  condition: string;
  permalink: string;
  thumbnail: string;
  secure_thumbnail: string;
  pictures: Picture[];
  video_id: string;
  descriptions: Description[];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: any[];
  shipping: Shipping;
  international_delivery_mode: string;
  seller_address: SellerAddress;
  seller_contact: any;
  location: Location;
  geolocation: Geolocation;
  coverage_areas: any[];
  attributes: Attribute[];
  warnings: any[];
  listing_source: string;
  variations: Variation[];
  status: string;
  sub_status: any[];
  tags: string[];
  warranty: string;
  catalog_product_id: any;
  domain_id: string;
  parent_item_id: any;
  differential_pricing: any;
  deal_ids: any[];
  automatic_relist: boolean;
  date_created: string;
  last_updated: string;
  health: number;
  catalog_listing: boolean;
}

export interface SaleTerm {
  id: string;
  name: string;
  value_id?: string;
  value_name: string;
  value_struct?: ValueStruct;
}

export interface Picture {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}

export interface Description {
  id: string;
}

export interface Shipping {
  mode: string;
  free_methods: FreeMethod[];
  tags: string[];
  dimensions: string;
  local_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  store_pick_up: boolean;
}

export interface FreeMethod {
  id: number;
  rule: Rule;
}

export interface Rule {
  default: boolean;
  free_mode: string;
  free_shipping_flag: boolean;
  value: any;
}

export interface City {
  name: string;
}

export interface State {
  id: string;
  name: string;
}

export interface Country {
  id: string;
  name: string;
}

export interface SearchLocation {
  neighborhood: Neighborhood;
  city: City2;
  state: State2;
}

export interface Neighborhood {
  id: string;
  name: string;
}

export interface City2 {
  id: string;
  name: string;
}

export interface State2 {
  id: string;
  name: string;
}

export interface Location {}

export interface Geolocation {
  latitude: number;
  longitude: number;
}

export interface Attribute {
  id: string;
  name: string;
  value_id?: string;
  value_name?: string;
  value_struct?: ValueStruct;
  attribute_group_id: string;
  attribute_group_name: string;
}

export interface ValueStruct {
  number: number;
  unit: string;
}

export interface Variation {
  id: number;
  price: number;
  attribute_combinations: AttributeCombination[];
  available_quantity: number;
  sold_quantity: number;
  sale_terms: any[];
  picture_ids: string[];
  catalog_product_id: any;
}

export interface AttributeCombination {
  id: string;
  name: string;
  value_id: string;
  value_name: string;
  value_struct?: ValueStruct;
}
