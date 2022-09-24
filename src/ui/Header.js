export default function createHeader(parentElement, appName) {
    const header = document.createElement('h1')
    header.textContent = appName
    parentElement.appendChild(header)
    return header
}