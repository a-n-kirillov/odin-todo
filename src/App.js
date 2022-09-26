import { UI } from "./ui/UI";
import ProjectsController from "./controllers/ProjectsController";
import ToDoApp from "./logic/ToDoApp";
import TaskController from "./controllers/TasksController";

export default class App {
    constructor() {
        this.projectsModel = new ToDoApp()

        this.ui = new UI()
        this.tasksController = new TaskController(this.projectsModel, this.ui.listView)
        this.projectsController = new ProjectsController(this.projectsModel, this.ui.projectsView, this.tasksController)
    }
} 