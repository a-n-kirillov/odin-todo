import { setModalContent } from './Popup'

function taskItemFactory(id, title, dueDate, priority) {
    const taskItem = document.createElement('li')
    taskItem.innerHTML = `
        <input class="task-completion" type="checkbox"/>
        <h4 class="task-name">${title}</h4>
        <h4 class="due-date">${dueDate}</h4>
        <h4 class="priority">${priority}</h4>
        <button class="task-description open-popup">Description</button>
        <button class="edit-task open-popup">Edit</button>
        <button class="delete-task">Delete</button>
    `

    taskItem.id = id
    return taskItem
}

function descriptionViewFactory(taskName, content) {
    const descriptionBox = document.createElement('div')
    descriptionBox.innerHTML = `
        <h2 class="task-description-title">${taskName}</h2>
        <p class="task-description-body">${content}</p>
    `
    return descriptionBox
}

export default class ListView {
    constructor(parentElement) {
        parentElement.innerHTML += `
            <h2 class="project-name-heading"></h2>
            <ul class="to-do-list"></ul>
            <button class="add-to-do open-popup">Add Task</button>
            <button class='remove-done-tasks">Remove completed tasks</button>
        `
        this.heading = parentElement.querySelector('h2')
        this.listElement = parentElement.querySelector('.to-do-list')
        this.addTaskButton = parentElement.querySelector('.add-to-do')
        this.removeDoneTasksButton = parentElement.querySelector('.remove-done-tasks')

        this.taskCreationForm = new TaskForm('add')

        this._setupAddTaskButton()
        this._setupDescriptionButton()
    }

    render(tasks) {
        this._clear()
        tasks.forEach(task => {
            this._addTask(task.id, task.title, task.dueDate, task.priority)
            this._setTaskCompletion(task.id, task.completed)
        })
        this._mapTasksToDescriptions(tasks)
    }

    _setTaskCompletion(id, newState) {
        this.listElement.querySelector(`[id="${id}"]`).querySelector('.task-completion').checked = newState 
    }

    _addTask(id, title, dueDate, priority) {
        this.listElement.appendChild(taskItemFactory(id, title, dueDate, priority))
    }

    _clear() {
        this.listElement.innerHTML = ''
    }

    _setupAddTaskButton() {
        this.addTaskButton.addEventListener('click', e => {
            this.taskCreationForm.clear()
            setModalContent(this.taskCreationForm.element)
        })
    }

    _mapTasksToDescriptions(tasks) {
        this.tasksToDescriptionsMap = {}
        tasks.forEach(task => this.tasksToDescriptionsMap[task.id] = task.description)
    }

    _setupDescriptionButton() {
        this.listElement.addEventListener('click', e => {
            const potentiallyPressedDescriptionButton = e.target.closest('.task-description') 
            if (!potentiallyPressedDescriptionButton) return
            const pressedTask = potentiallyPressedDescriptionButton.closest('li')
            const descriptionBox = descriptionViewFactory(
                pressedTask.querySelector('.task-name').textContent,
                this.tasksToDescriptionsMap[pressedTask.id]
                )
            setModalContent(descriptionBox)
        })
    }

    setHeaderTitle(title) {
        this.heading.innerHTML = title
    }

    bindAddTaskButton(action) {
        this.taskCreationForm.confirmButton.addEventListener('click', e => {
            action(
                this.taskCreationForm.nameInput.value,
                this.taskCreationForm.dueDatePicker.value,
                this.taskCreationForm.prioritySelection.value,
                this.taskCreationForm.taskDescription.value
            )
        })
    }

    bindCompletionCheckbox(action) {
        this.listElement.addEventListener('click', e => {
            if (!e.target.classList.contains('task-completion')) return;
            action(this.getClosestListItemId(e.target), e.target.checked)
        })
    }

    getClosestListItemId(childForWhichWeSearchClosestListItem) {
        return childForWhichWeSearchClosestListItem.closest('li').id
    }
}

class TaskForm {
    constructor(type) {
        this.type = type
        this._createElement()
        this._addPrioritySelectOptions()
    }

    _createElement() {
        const taskCreationForm = document.createElement('div')
        taskCreationForm.classList.add('task-creation')

        taskCreationForm.innerHTML = `
            <label for="task-name-input">Project name:</label>
            <input id="task-name-input" type="text"/>

            <label for="due-date-picker">Due date:</label>
            <input id="due-date-picker" type="date"/>

            <label for="priority-selection">Priority:</label>
            <select id="priority-selection"></select>

            <label for="task-description">Description:</label>
            <textarea id="task-description"></textarea>

            <button class="confirm-task-form close-popup">${this.getConfirmButtonText()}</button>
            <button class="cancel-task-form close-popup">Cancel</button>
        `
        this.nameInput = taskCreationForm.querySelector('#task-name-input')
        this.dueDatePicker = taskCreationForm.querySelector('#due-date-picker')
        this.prioritySelection = taskCreationForm.querySelector('#priority-selection')
        this.taskDescription = taskCreationForm.querySelector('#task-description')
        this.confirmButton = taskCreationForm.querySelector('.confirm-task-form')
        this.cancelButton = taskCreationForm.querySelector('.cancel-task-form')
        this.element = taskCreationForm
    }

    _addPrioritySelectOptions() {
        this.prioritySelection.innerHTML = `
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        ` 
    }

    clear() {
        this.nameInput.value = ''
        this.dueDatePicker.value = ''
        this.prioritySelection.value = 'low'
        this.taskDescription.value = ''
    }

    getConfirmButtonText() {
        let confirmText = ''
        switch (this.type) {
            case 'add':
                confirmText = 'Add'
                break
            case 'edit':
                confirmText = 'Edit'
                break
        }

        return confirmText
    }
}