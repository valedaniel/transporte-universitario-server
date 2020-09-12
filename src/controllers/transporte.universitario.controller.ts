import { Request, Response } from 'express';
import transporteUniversitarioService from '../services/transporte.universitario.service';

class TransporteUniversitarioController {

    public async getAll(req: Request, res: Response) {
        try {
            const { filter } = req.body;
            const response: any = await transporteUniversitarioService.getAll(filter);
            res.status(200).send({ response });
        } catch (err) {
            res.status(400).send(err);
        }
    }

    public async save(req: Request, res: Response) {
        try {
            const { data } = req.body;
            const response: any = await transporteUniversitarioService.save(data);
            res.status(200).send({ response });
        } catch (err) {
            res.status(400).send(err);
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const response: any = await transporteUniversitarioService.delete(id);
            res.status(200).send({ response });
        } catch (err) {
            res.status(400).send(err);
        }
    }

}

export default new TransporteUniversitarioController();
