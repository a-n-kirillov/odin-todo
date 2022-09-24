import initLayout from './initLayout'
import createHeader from './Header'
import ProjectsView from './ProjectsView'
import ListView from './ListView'
import setupPopup from './Popup'

export class UI {
    constructor() {
        initLayout(document.querySelector('body'))
        setupPopup()
        this.header = createHeader(document.querySelector('.header'), 'ToDo')
        this.projectsView = new ProjectsView(document.querySelector('.sidebar'))
        this.listView = new ListView(document.querySelector('.display'))
    }
}