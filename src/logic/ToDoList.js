import ToDoItem from "./ToDoItem"

export default class ToDoList {
    constructor(id, title) {
        this.id = id
        this.title = title
        this.toDoItems = []
    }

    addToDo(todo) {
        this.toDoItems.push(todo)
    }

    removeToDo(toDoId) {
        this.toDoItems = this.toDoItems.filter(toDoItem => toDoItem.id !== toDoId)
    }

    setTitle(title) {
        this.title = title
    }

    getTask(id) {
        return this.toDoItems.find(task => task.id == id)
    }

    static createFromParsedJSON(parsedJSONObject) {
        const list = new this(parsedJSONObject.id, parsedJSONObject.title)
        for (const parsedToDoItem of parsedJSONObject.toDoItems) {
            list.addToDo(ToDoItem.createFromParsedJSON(parsedToDoItem))
        }
        
        return list
    }
}