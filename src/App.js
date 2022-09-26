import { UI } from "./ui/UI";
import ProjectsController from "./controllers/ProjectsController";
import ToDoApp from "./logic/ToDoApp";
import TaskController from "./controllers/TasksController";
import Storage from "./persistance/storage";

export default class App {
    #STORAGE_KEY = 'TO_DO_LIST'

    constructor() {
        const localPersistance = new Storage(this.#STORAGE_KEY)
        this.projectsModel = localPersistance.appProxy

        this.ui = new UI()
        this.tasksController = new TaskController(this.projectsModel, this.ui.listView)
        this.projectsController = new ProjectsController(this.projectsModel, this.ui.projectsView, this.tasksController)
    }
} 