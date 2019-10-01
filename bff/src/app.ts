import express, { Request, Response, NextFunction} from 'express'
import cors from 'cors'
import helmet from 'helmet'

import config from './config';

import routes from './routes'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  private middlewares (): void {
    this.express.enable('trust proxy');
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(helmet())
  }

  private routes (): void {
    this.express.use(config.api.prefix, routes)

    this.express.use((req: Request, res: Response, next: NextFunction) => {
      const err: { message: string, status: number } = {
        message: 'Not Found',
        status: 404
      };

      next(err);
    });

    this.express.use((err: any, req: Request, res: Response) => {
      res.status(err.status || 500);
      res.json({
        errors: {
          message: err.message,
        },
      });
    });
  }
}

export default new App().express
