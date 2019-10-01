import { Router, Request, Response } from 'express'
import { itemsController } from '../injectorContainer'

const routes = Router()

routes.get('/items', (req: Request, res: Response) => itemsController.index(req, res))
routes.get('/items/:id', (req: Request, res: Response) => itemsController.findById(req, res))

routes.get('/status', (req: Request, res: Response) => {
  res.status(200).end();
});
routes.head('/status', (req: Request, res: Response) => {
  res.status(200).end();
});

export default routes
