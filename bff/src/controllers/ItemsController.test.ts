import axios from 'axios'
import { Request, Response } from 'express'
import ItemsController from './ItemsController';
import MercadoLibreApi from '../services/MercadoLibreApi'

jest.mock('axios')
jest.mock('MercadoLibreApi')

describe("ItemsController", () => {
  let itemsController: ItemsController
  const req: Request = {
    query: 'product sought'
  }
  const res: Response = {
    json: jest.fn()
  }

  beforeEach(() => {
    const mercadoLibreApi = new MercadoLibreApi({
      clientHttp: axios.create({
        baseURL: 'https://api.mercadolibre.com',
      }),
      siteId: 'MLA',
      author: {
        name: 'Rafael',
        lastname: 'Bernardo'
      }
    })
    itemsController = new ItemsController(mercadoLibreApi)
  })

  test('should return itemsController.index', async () => {
    const result = itemsController.index(req, res)
    console.log(result)

  })
});
