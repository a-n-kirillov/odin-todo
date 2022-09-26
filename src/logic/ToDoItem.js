export default class ToDoItem {
    constructor(id, title, dueDate, priority, description) {
        this.id = id
        this.title = title
        this.dueDate = dueDate
        this.priority = priority
        this.description = description
        this.completed = false
    }

    setCompletionState(isTaskCompleted) {
        this.completed = isTaskCompleted
    }

    static createFromParsedJSON(parsedJSONObject) {
        const retrievedToDoItem = new this(
            parsedJSONObject.id,
            parsedJSONObject.title,
            parsedJSONObject.dueDate,
            parsedJSONObject.priority,
            parsedJSONObject.description
        )
        retrievedToDoItem.completed = parsedJSONObject.completed
        return retrievedToDoItem
    }
}