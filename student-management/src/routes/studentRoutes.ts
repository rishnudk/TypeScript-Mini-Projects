import express from 'express';
import { DependencyInjector } from '../di/DependencyInjector';

const router = express.Router();
const studentController = DependencyInjector.getStudentController();

router.get('/', (req, res) => studentController.getStudents(req, res));
router.post('/', (req, res) => studentController.createStudent(req, res));
router.put('/:id', (req, res) => studentController.updateStudent(req, res));
router.delete('/:id', (req, res) => studentController.deleteStudent(req, res));


export default router;