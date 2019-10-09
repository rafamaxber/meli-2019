import config from './config'

import app from './app'

export async function startServer() {
  app.listen(config.port, () => {
    console.log('PORT: ', config.port)
  });
}

startServer()
