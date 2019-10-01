import axios from 'axios'
import config from './config'
import MercadoLibreApi from './services/MercadoLibreApi'
import ItemsController from './controllers/ItemsController'

const mercadoLibreApi = new MercadoLibreApi({
  clientHttp: axios.create({
    baseURL: config.meliApi,
  }),
  siteId: config.meliSiteId,
  author: {
    name: 'Rafael',
    lastname: 'Bernardo'
  }
})

export const itemsController = new ItemsController(mercadoLibreApi)
