import { Request, Response } from 'express';
import { IStudentService } from '../services/IStudentService';

export class StudentController {
  private studentService: IStudentService;

  constructor(studentService: IStudentService) {
    this.studentService = studentService;
  }

  public async getStudents(req: Request, res: Response): Promise<void> {
    try {
      const students = await this.studentService.getStudents();
      res.render('index', { students });
    } catch (error) {
      res.status(500).json({ message: 'internal server error' });
    }
  }

  public async createStudent(req: Request, res: Response): Promise<void> {
    try {
      await this.studentService.createStudent(req.body);
      res.status(200).json({success: true});
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  public async updateStudent(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const student = await this.studentService.updateStudent(id, req.body);
      if(!student) {
        res.status(404).json({ message: `Student with id ${id} not found`});
        return;
      }
      res.status(200).json({success: true});
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  public async deleteStudent(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      await this.studentService.deleteStudent(id);
      res.status(200).json({success: true});
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}