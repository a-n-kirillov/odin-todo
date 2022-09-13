class ToDoItem {
    #title;
    #dueDate;
    #priority;
    #description;

    constructor(title, dueDate, priority, description) {
        this.#title = title;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#description = description;
    }

    getTitle() {
        return this.#title;
    }
    
    setTitle(newTitle) {
        this.#title = newTitle;
    }

    getDueDate() {
        return this.#dueDate;
    }

    setDueDate(newDate) {
        this.#dueDate = newDate;
    }

    getPriority() {
        return this.#priority;
    }

    setPriority(newPriority) {
        this.#priority = newPriority;
    }

    getDescription() {
        return this.#description;
    }

    setDescription(newDescription) {
        this.#description = newDescription;
    }
}