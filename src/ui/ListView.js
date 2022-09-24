function taskItemFactory(id, title, dueDate, priority, description) {
    const taskItem = document.createElement('li')
    taskItem.innerHTML = `
        <input type="checkbox"/>
        <h4 class="task-name>${title}</h4>
        <button class="task-description"></button>
    `
}

export default class ListView {
    constructor(parentElement) {
        parentElement.innerHTML += `
            <h2 class="project-name-heading"></h2>
            <ul class="to-do-list"></ul>
            <button class="add-to-do">Add Task</button>
        `
        this.heading = parentElement.querySelector('h2')
        this.listElement = parentElement.querySelector('.to-do-list')
        this.addProjectButton = parentElement.querySelector('.add-to-do')
    }

    render(tasks) {
        this._clear()
        tasks.forEach(task => this._addTask())
    }

    _addTask(id, title, dueDate, priority, description) {
        this.listElement.appendChild(taskItemFactory(id, title, dueDate, priority, description))
    }

    _clear() {
        this.listElement.innerHTML = ''
    }
}