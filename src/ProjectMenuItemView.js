function ProjectMenuItemFactory(projectName) {
    const projectItem = document.createElement('li')
    projectItem.innerHTML = `
        <h4>${projectName}</h4>
        <button class='edit'>Edit</button>
        <button class='delete'>Delete</button>
    `
    projectItem.classList.add('project-item')
    return projectItem
}