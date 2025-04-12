/*Create new ToDo Container*/
function createToDoContainer() {
    const toDoContainer = document.createElement('div');
    toDoContainer.classList.add('toDoContainer');

    const toDoTitleContainer = document.createElement('div');
    toDoTitleContainer.classList.add('toDoTitleContainer');
    const toDoTitle = document.createElement('h2');
    toDoTitle.classList.add('toDoTitle');
    toDoTitle.innerText = 'Container Title';

    const toDoContainerActions = document.createElement('div');
    toDoContainerActions.classList.add('toDoContainerActions');
    const editToDoTitleBtn = document.createElement('span')
    editToDoTitleBtn.classList.add('editToDoTitleBtn');
    const penIcon = document.createElement('i')
    penIcon.classList.add('fa-solid', 'fa-pen');
    const deleteContainerBtn = document.createElement('span')
    deleteContainerBtn.classList.add('deleteContainerBtn');
    const trashIcon = document.createElement('i')
    trashIcon.classList.add('fa-solid', 'fa-trash');

    deleteContainerBtn.appendChild(trashIcon);
    editToDoTitleBtn.appendChild(penIcon);
    toDoContainerActions.append(editToDoTitleBtn, deleteContainerBtn);
    toDoTitleContainer.append(toDoTitle, toDoContainerActions);
    toDoContainer.appendChild(toDoTitleContainer);

    return toDoContainer;
}

/*Add ToDo Container*/
const toDoBoard = document.querySelector('.toDoBoard');
const addContainerBtn = document.querySelector('.addToDoContainerBtn');

addContainerBtn.addEventListener('click', () => {
    const toDoContainer = createToDoContainer();
    toDoBoard.appendChild(toDoContainer);
});