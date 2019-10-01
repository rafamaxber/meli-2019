import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFile = process.env.NODE_ENV === 'test' ? '.env.test' : '.env'

const envFound = dotenv.config({ path: envFile });

if (!envFound) {
  throw new Error("Couldn't find .env file");
}

interface IConfig {
  meliApi: string,
  meliSiteId: string,
  port: string | number,
  logs: {
    level: string
  },
  api: {
    prefix: string
  }
}

function config(): IConfig {
  return {

    meliApi: process.env.MELI_API || 'https://api.mercadolibre.com',

    meliSiteId: process.env.MELI_SITE_ID || 'MLA',

    port: process.env.PORT || 8080,

    logs: {
      level: process.env.LOG_LEVEL || 'silly',
    },

    api: {
      prefix: '/api',
    },
  }
}

export default config();
