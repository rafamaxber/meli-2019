import config from './config'

import app from './app'

export async function startServer(): Promise<void> {
  app.listen(config.port, (err: any): void => {
    if (err) {
      process.exit(1);
      return;
    }
    console.log('PORT: ', config.port)
  });
}

startServer()
