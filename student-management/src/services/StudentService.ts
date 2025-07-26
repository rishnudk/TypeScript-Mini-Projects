import { IStudentService } from "./IStudentService";
import { Student, IStudent } from "../models/Student";


export class StudentService implements IStudentService {
  public async getStudents(): Promise<IStudent[]> {
    return Student.find();
  }

  public async createStudent(studentData: Partial<IStudent>): Promise<IStudent> {
    const student = new Student(studentData);
    return await student.save();
  }

  public async updateStudent(id: string, studentData: Partial<IStudent>): Promise<IStudent> {
    const student = await Student.findByIdAndUpdate(id, studentData, {new: true});
    if(!student) {
      throw new Error(`Student with id ${id} not found`);
    }
    return student;
  }

  public async deleteStudent(id: string): Promise<void> {
    const student = await Student.findByIdAndDelete(id);
    if(!student) {
      throw new Error(`Student with id ${id} not found`);
    }
  }
}