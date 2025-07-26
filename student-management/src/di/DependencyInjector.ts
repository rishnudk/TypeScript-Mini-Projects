import { StudentService } from "../services/StudentService";
import { StudentController } from "../controllers/StudentController";

export class DependencyInjector {
  private static studentService: StudentService = new StudentService();
  private static studentController: StudentController = new StudentController(DependencyInjector.studentService); 

  public static getStudentController(): StudentController {
    return DependencyInjector.studentController;
  }
}