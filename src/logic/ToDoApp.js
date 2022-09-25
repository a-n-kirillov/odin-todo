import ToDoList from "./ToDoList"
import getUniqueId from '../utility/idGenerator'

export default class ToDoApp {
    constructor() {
        this.toDoLists = []
        const defaultList = new ToDoList(getUniqueId(), "Default List")
        this.addToDoList(defaultList)
        this.currentList = this.toDoLists[0]
    }

    addToDoList(toDoList) {
        this.toDoLists.push(toDoList)
    }

    removeToDoList(id) {
        this.toDoLists = this.toDoLists.filter(toDoList => toDoList.id !== id)
    }

    getToDoList(id) {
        return this.toDoLists.find(list => list.id == id)
    }

    setActiveList(id) {
        const selectedList = this.getToDoList(id)
        if (selectedList) {
            this.currentList = selectedList
        }

    }
}