import ToDoApp from "../logic/ToDoApp"
import ToDoList from "../logic/ToDoList"
import ProjectsView from "../ui/ProjectsView"
import getUniqueId from "../utility/idGenerator"

export default class ProjectsController {
    constructor(projectsModel, projectsView) {
        this.model = projectsModel
        this.view = projectsView
        this.setupAddProjectButton()
        this.setupProjectSelection()
        this.renderProjects()
    }
    
    addProject(name) {
        const newList = new ToDoList(getUniqueId(), name)
        this.model.addToDoList(newList)
        this.renderProjects()
    }

    selectActiveProject(id) {
        this.model.setActiveList(id)
        this.renderProjects()
    }

    setupAddProjectButton() {
        this.view.bindAddProjectButton(e => this.addProject(this.view.projectCreationForm.getInputFieldValue()))
    }

    setupProjectSelection() {
        this.view.bindProjectSelection(selectedListId => this.selectActiveProject(selectedListId))
    }

    renderProjects() {
        this.view.render(this.model.toDoLists)
        this.view.highlightProject(this.model.currentList.id)
    }
}