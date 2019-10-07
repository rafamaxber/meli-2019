import { Request, Response } from 'express'
import MercadoLibreApi from '../services/MercadoLibreApi'

class ItemsController {
  private mercadoLibreApi: MercadoLibreApi

  constructor(mercadoLibreApi: MercadoLibreApi) {
    this.mercadoLibreApi = mercadoLibreApi
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const query = req.query.q

    if (!query) {
      return res.status(400)
        .json({
          message: 'item not found'
        })
    }

    try {
      const result = await this.mercadoLibreApi.search(query)
      return res.json(result);
    } catch (error) {
      return res.status(400)
        .json({
          message: 'item not found'
        })
    }
  }

  public async findById(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;

    if (!id) {
      return res.status(400)
        .json({
          message: 'item not found'
        })
    }

    try {
      const result = await this.mercadoLibreApi.findById(id)

      return res.json(result);
    } catch (error) {
      console.log(error);
      return res.status(400)
        .json({
          message: 'item not found'
        })
    }
  }
}

export default ItemsController
