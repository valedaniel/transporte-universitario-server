import { Router } from 'express';
import transporteUniversitarioController from '../controllers/transporte.universitario.controller';

const router = Router();

router.post('/getAll', transporteUniversitarioController.getAll);
router.post('/save', transporteUniversitarioController.save);
router.delete('/delete/:id', transporteUniversitarioController.delete);

export default router;