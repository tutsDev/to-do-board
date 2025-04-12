/*Create a new toDoCard*/
function createToDoCard() {
    const toDoCard = document.createElement('li');
    toDoCard.classList.add('toDoCard');
    
    const dragBar = document.createElement('div');
    dragBar.classList.add('dragBar');
    const dragBtn = document.createElement('button');
    dragBtn.classList.add('dragBtn');
    dragBar.appendChild(dragBtn);

    const toDoDone = document.createElement('input');
    toDoDone.classList.add('toDoDone');
    toDoDone.setAttribute('type', 'checkbox');

    const toDoCardText = document.createElement('div');
    toDoCardText.classList.add('toDoCardText');
    const toDoCardTitle = document.createElement('h3');
    toDoCardTitle.classList.add('toDoCardTitle');
    toDoCardTitle.innerText = 'Card title';
    const toDoDescription = document.createElement('textarea');
    toDoDescription.classList.add('toDoDescription');
    toDoDescription.setAttribute('placeholder', 'Description...');
    toDoCardText.append(toDoCardTitle, toDoDescription);

    const toDoCardActions = document.createElement('div');
    toDoCardActions.classList.add('toDoCardActions');
    const deleteCardBtn = document.createElement('button');
    deleteCardBtn.classList.add('deleteCardBtn');
    const deleteCardIcon = document.createElement('i');
    deleteCardIcon.classList.add('fa-solid', 'fa-trash');
    deleteCardBtn.appendChild(deleteCardIcon);
    toDoCardActions.appendChild(deleteCardBtn);

    toDoCard.append(dragBar, toDoDone, toDoCardText, toDoCardActions);

    return toDoCard;
}

/*Add toDoCard event*/
const toDoList = document.querySelector('.toDoList');
const addToDoCardBtn = document.querySelector('.addToDoCard');
addToDoCardBtn.addEventListener('click', () => {
    const toDoCard = createToDoCard();
    toDoList.appendChild(toDoCard);
});