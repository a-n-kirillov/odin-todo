import ToDoApp from '../logic/ToDoApp'

const proxyChangeHandler = {
    get: (target, key) => {
      if(typeof target[key] === "object" && target[key] !== null) {
        return new Proxy(target[key], handler)
      }
  
      return target[key]
    },
    set: (target, prop, value) => {
        target[prop] = value
        console.log("A change was made!")
      return true
    }
  }

export default class Storage {
    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey
        this.appProxy = this.loadApp()
    }

    loadApp() {
        try {
            this.directApp = ToDoApp.createFromParsedJSON(JSON.parse(localStorage.getItem(this.localStorageKey)))
        } catch (error) {
            this.directApp = new ToDoApp()
            localStorage.setItem(this.localStorageKey, JSON.stringify(this.directApp))
        }

        return new Proxy(this.directApp, this.#proxyChangeHandler)
    }

    #proxyChangeHandler = {
        get: (target, key) => {
          if(typeof target[key] === "object" && target[key] !== null) {
            return new Proxy(target[key], this.#proxyChangeHandler)
          }
      
          return target[key]
        },
        set: (target, prop, value) => {
            target[prop] = value
            localStorage.setItem(this.localStorageKey, JSON.stringify(this.directApp))
          return true
        }
      }
}