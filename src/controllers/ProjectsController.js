import ToDoApp from "../logic/ToDoApp"
import ToDoList from "../logic/ToDoList"
import ProjectsView from "../ui/ProjectsView"
import getUniqueId from "../utility/idGenerator"

export default class ProjectsController {
    constructor(projectsModel, projectsView) {
        this.model = projectsModel
        this.view = projectsView
    }
    
    addProject(name) {
        const newList = new ToDoList(getUniqueId(), name)
    }
}