import { UI } from "./ui/UI";
import ProjectsController from "./controllers/ProjectsController";
import ToDoApp from "./logic/ToDoApp";

export default class App {
    constructor() {
        this.projectsModel = new ToDoApp()

        this.ui = new UI()
        this.projectsController = new ProjectsController(this.projectsModel, this.ui.projectsView)
    }
} 