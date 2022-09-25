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
        if (this.toDoLists.length == 1) {
            this.currentList = this.toDoLists[0]
        }
    }

    removeToDoList(id) {
        this.toDoLists = this.toDoLists.filter(toDoList => toDoList.id !== id)
        if (this.toDoLists.length > 0) {
            this.currentList = this.toDoLists[0]
        } else {
            this.currentList = null
        }
    }

    getToDoList(id) {
        return this.toDoLists.find(list => list.id == id)
    }

    editToDoList(id, newTitle) {
        const listBeingEdited = this.getToDoList(id)
        if (!listBeingEdited) return
        listBeingEdited.setTitle(newTitle)
    }

    setActiveList(id) {
        const selectedList = this.getToDoList(id)
        if (selectedList) {
            this.currentList = selectedList
        }

    }
}