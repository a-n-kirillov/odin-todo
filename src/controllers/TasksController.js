import ListView from "../ui/ListView";
import getUniqueId from '../utility/idGenerator'
import ToDoItem from '../logic/ToDoItem'

export default class TaskController {
    constructor(projectsModel, tasksView) {
        this.model = projectsModel
        this.view = tasksView
        this.setupAddTaskButton()
        this.setupCompletionCheckbox()
        this.setupEditTaskButton()
    }

    renderTasks() {
        this.view.render(this.model.currentList.toDoItems)
        this.view.setHeaderTitle(this.model.currentList.title)
    }

    addTask(name, dueDate, priority, description) {
        const newTask = new ToDoItem(getUniqueId(), name, dueDate, priority, description)
        console.log(newTask)
        this.model.currentList.addToDo(newTask)
        this.renderTasks()
    }

    editTask(id, newName, newDueDate, newPriority, newDescription) {
        const taskBeingChanged = this.model.currentList.getTask(id)
        taskBeingChanged.title = newName
        taskBeingChanged.dueDate = newDueDate
        taskBeingChanged.priority = newPriority
        taskBeingChanged.description = newDescription
        this.renderTasks()
    }

    changeCompletion(taskId, newState) {
        const taskBeingChanged = this.model.currentList.getTask(taskId)
        taskBeingChanged.setCompletionState(newState)
        this.renderTasks()
    }

    setupAddTaskButton() {
        this.view.bindAddTaskButton((name, dueDate, priority, description) => this.addTask(name, dueDate, priority, description))
    }

    setupCompletionCheckbox() {
        this.view.bindCompletionCheckbox((taskId, newState) => this.changeCompletion(taskId, newState))
    }

    setupEditTaskButton() {
        this.view.bindEditTaskButton((id, newName, newDueDate, newPriority, newDescription) => this.editTask(id, newName, newDueDate, newPriority, newDescription))
    }
}