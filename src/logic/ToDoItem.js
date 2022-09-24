export default class ToDoItem {
    constructor(id, title, dueDate, priority, description) {
        this.id = id
        this.title = title
        this.dueDate = dueDate
        this.priority = priority
        this.description = description
        this.completed = false
    }
}