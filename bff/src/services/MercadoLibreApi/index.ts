import { AxiosInstance } from 'axios'
import {
  IItem,
  IAuthor,
  IAuthorConfig,
  IMercadoLibreSearch,
  IMercadoLibreItems,
  IDescription,
  ISearchResult,
  IFindByIdResponse
} from '../../types/mercadoLibreApi'

class MercadoLibreApi {
  protected clientHttp: AxiosInstance;
  protected siteId: string;
  private itemsLimit = 4;
  private categoriesLimit = 5;
  private author: IAuthorConfig;

  constructor({ clientHttp, siteId, author }: { clientHttp: AxiosInstance, siteId: string, author: IAuthorConfig }) {
    this.clientHttp = clientHttp
    this.siteId = siteId
    this.author = author
  }

  public async findById(id: string): Promise<IFindByIdResponse> {
    const [{ data }, { data: description}] = await Promise.all([
      await this.clientHttp.get(`/items/${id}`),
      await this.clientHttp.get(`/items/${id}/description`)
    ])

    const item = this.normalizeItem(data, description)
    const author = this.getAuthor()

    return {
      ...author,
      item
    };
  }

  public async search(query: string): Promise<ISearchResult> {
    const { data } = await this
      .clientHttp
      .get<IMercadoLibreSearch>(`/sites/${this.siteId}/search?q=${encodeURIComponent(query)}`)

    const categories = this.normalizeCategories(data)

    const items = this.normalizeItems(data)
    const author = this.getAuthor()

    return {
      ...author,
      categories,
      items
    }
  }

  private normalizeItem(item: IMercadoLibreItems, description: IDescription): IItem {
    return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.available_quantity,
        decimals: item.price,
      },
      picture: item.pictures[0].url,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      sold_quantity: item.sold_quantity,
      description: description.text || description.plain_text
    }
  }

  private normalizeCategories(obj: IMercadoLibreSearch): string[] | [] {
    if (obj.filters[0]) {
      return obj.filters[0].values[0].path_from_root
        .slice(0, this.categoriesLimit)
        .map(item => item.name)
    }
    if (obj.available_filters[0]) {
      return obj.available_filters[0].values
        .slice(0, this.categoriesLimit)
        .sort((a, b) => b.results - a.results)
        .map(item => item.name)
    }
    return Array()
  }

  private normalizeItems(items: IMercadoLibreSearch): IItem[] {
    return items.results
      .slice(0, this.itemsLimit)
      .map(item => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.available_quantity,
          decimals: item.price,
        },
        address: {
          state_name: item.address.state_name
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
      }))
  }

  private getAuthor(): IAuthor {
    const { name, lastname } = this.author;

    return {
      author: {
        name,
        lastname,
      }
    }
  }
}

export default MercadoLibreApi
