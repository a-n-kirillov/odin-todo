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
        this.model.addToDoList(newList)
        this.view.render(this.model.toDoLists)
    }

    bindAddProjectButton() {
        const addProjectButton = this.view.projectCreationForm.getAddProjectButton()
        addProjectButton.addEventListener('click', e => this.addProject(this.view.projectCreationForm.getInputFieldValue()))
    }
}