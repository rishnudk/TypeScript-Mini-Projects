import { IStudent } from "../models/Student";

export interface IStudentService {
  getStudents(): Promise<IStudent[]>;
  createStudent(studentData: Partial<IStudent>): Promise<IStudent>;
  updateStudent(id: string, studentData: Partial<IStudent>): Promise<IStudent>;
  deleteStudent(id: string): Promise<void>;
}