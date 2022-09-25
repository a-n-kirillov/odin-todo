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
        this.setupEditProjectButton()
        this.setupDeleteProjectButton()
        this.renderProjects()
    }
    
    addProject(name) {
        const newList = new ToDoList(getUniqueId(), name)
        this.model.addToDoList(newList)
        this.renderProjects()
    }

    editProject(id, newName) {
        this.model.editToDoList(id, newName)
        this.renderProjects()
    }

    removeProject(id) {
        this.model.removeToDoList(id)
        this.renderProjects()
    }

    selectActiveProject(id) {
        this.model.setActiveList(id)
        this.renderProjects()
    }

    setupAddProjectButton() {
        this.view.bindAddProjectButton(name => this.addProject(name))
    }

    setupEditProjectButton() {
        this.view.bindEditProjectButton((id, newName) => this.editProject(id, newName))
    }

    setupDeleteProjectButton() {
        this.view.bindDeleteProjectButton(id => this.removeProject(id))
    }

    setupProjectSelection() {
        this.view.bindProjectSelection(selectedListId => this.selectActiveProject(selectedListId))
    }

    renderProjects() {
        this.view.render(this.model.toDoLists);
        if (this.model.currentList != null) {
            this.view.highlightProject(this.model.currentList.id)
        }
    }
}