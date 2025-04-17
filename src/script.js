/*Create a new toDoCard*/
function createToDoCard() {
    /*Creating Card*/
    const toDoCard = document.createElement('li');
    toDoCard.classList.add('toDoCard');
    
    /*Creating DragBar*/
    const dragBar = document.createElement('div');
    dragBar.classList.add('dragBar');
    const dragBarBtn = document.createElement('button');
    dragBarBtn.classList.add('dragBarBtn');

    /*Creating MarkToDoDone*/
    const markToDoDone = document.createElement('input');
    markToDoDone.classList.add('markToDoDone');
    markToDoDone.setAttribute('type', 'checkbox');

    /*Creating ToDoTextArea*/
    const toDoCardText = document.createElement('div');
    toDoCardText.classList.add('toDoCardText');

    const toDoCardTitleBox =document.createElement('div');
    toDoCardTitleBox.classList.add('toDoCardTitleBox');

    const toDoCardTitleInputBox = document.createElement('div');
    toDoCardTitleInputBox.classList.add('toDoCardTitleInputBox');

    const toDoCardTitleInput = document.createElement('input');
    toDoCardTitleInput.classList.add('toDoCardTitleInput');
    toDoCardTitleInput.setAttribute('type', 'text');
    toDoCardTitleInput.setAttribute('maxlength', '25');
    toDoCardTitleInput.setAttribute('placeholder', 'Card title...');
    const toDoCardTitleBtn = document.createElement('button');
    toDoCardTitleBtn.classList.add('toDoCardTitleBtn');
    const iconTitleBtn = document.createElement('i');
    iconTitleBtn.classList.add('fa-solid', 'fa-check');

    const toDoCardTitle = document.createElement('p');
    toDoCardTitle.classList.add('toDoCardTitle', 'hidden');

    const editToDoCardTitleBtn = document.createElement('button');
    editToDoCardTitleBtn.classList.add('editToDoCardTitleBtn');
    const iconEditTitleBtn = document.createElement('i');
    iconEditTitleBtn.classList.add('fa-solid', 'fa-pen');

    const toDoCardDescription = document.createElement('textarea');
    toDoCardDescription.classList.add('toDoCardDescription');
    toDoCardDescription.setAttribute('placeholder', 'Description...');

    /*Creating DeleteCardBtn*/
    const deleteCardBtn = document.createElement('button');
    deleteCardBtn.classList.add('deleteCardBtn');
    const iconDeleteCard = document.createElement('i');
    iconDeleteCard.classList.add('fa-solid', 'fa-trash');

    /*Appending Child*/
    deleteCardBtn.appendChild(iconDeleteCard);
    toDoCardTitleBtn.appendChild(iconTitleBtn);
    toDoCardTitleInputBox.append(toDoCardTitleInput, toDoCardTitleBtn);
    editToDoCardTitleBtn.appendChild(iconEditTitleBtn);
    toDoCardTitleBox.append(toDoCardTitleInputBox, toDoCardTitle, editToDoCardTitleBtn);
    toDoCardText.append(toDoCardTitleBox, toDoCardDescription);
    dragBar.appendChild(dragBarBtn);
    toDoCard.append(dragBar, markToDoDone, toDoCardText, deleteCardBtn);

    return toDoCard;
}

/*Create a new toDoContainer*/
function createToDoContainer() {
    /*Creating Container*/
    const toDoContainer = document.createElement('article');
    toDoContainer.classList.add('toDoContainer');

    return toDoContainer
}

/*AddToDoContainer event*/
const toDoBoard = document.querySelector('.toDoBoard');
const addToDoContainerBtn = document.querySelector('.addToDoContainerBtn');
addToDoContainerBtn.addEventListener('click', () => {
    const toDoCard = createToDoContainer();
    toDoBoard.appendChild(toDoCard);
});


/*AddToDocard event*/
const toDoList = document.querySelector('.toDoCardList');
const addToDoCardBtn = document.querySelector('.addToDoCardBtn');
addToDoCardBtn.addEventListener('click', () => {
    const toDoCard = createToDoCard();
    toDoList.appendChild(toDoCard);
});
