/*Create a new toDoCard*/
function createToDoCard() {

    /*Creating element*/
    const toDoCard = document.createElement('li');
    toDoCard.classList.add('toDoCard');
    
    const dragBar = document.createElement('div');
    dragBar.classList.add('dragBar');
    const dragBtn = document.createElement('button');
    dragBtn.classList.add('dragBtn');
    dragBar.appendChild(dragBtn);

    const toDoCheckbox = document.createElement('input');
    toDoCheckbox.classList.add('toDoCheck');
    toDoCheckbox.setAttribute('type', 'checkbox');

    const toDoCardText = document.createElement('div');
    toDoCardText.classList.add('toDoCardText');
    const toDoCardTitle = document.createElement('h3');
    toDoCardTitle.classList.add('toDoCardTitle');
    toDoCardTitle.innerText = 'Card Title';
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

    toDoCard.append(dragBar, toDoCheckbox, toDoCardText, toDoCardActions);

    /*Adding events to the element*/
    addEventMarkToDoDone(toDoCheckbox, toDoCardTitle, toDoDescription);
    addEventToDeleteCard(deleteCardBtn);

    return toDoCard;
}

/*Add toDoCard event*/
const toDoList = document.querySelector('.toDoList');
const addToDoCardBtn = document.querySelector('.addToDoCard');
addToDoCardBtn.addEventListener('click', () => {
    const toDoCard = createToDoCard();
    toDoList.appendChild(toDoCard);
});

/*Edit Container Title*/
const toDoTitleInputContainer = document.querySelector('.toDoTitleInputContainer');
const toDoTitleInput = document.querySelector('.toDoTitleInput');
const toDoTitle = document.querySelector('.toDoTitle');
const toDoTitleCheckBtn = document.querySelector('.toDoTitleCheckBtn');
const editToDoTitleBtn = document.querySelector('.editToDoTitleBtn');

editToDoTitleBtn.addEventListener('click', () => {
    toDoTitle.classList.add('hidden');
    toDoTitleInputContainer.classList.remove('hidden');
});

toDoTitleCheckBtn.addEventListener('click', () => {
    setTitle(toDoTitle, toDoTitleInput, toDoTitleInputContainer);
});

//CARD
const toDoCardTitleInputContainer = document.querySelector('.toDoCardTitleInputContainer');
const toDoCardTitleInput = document.querySelector('.toDoCardTitleInput');
const toDoCardTitle = document.querySelector('.toDoCardTitle');
const toDoCardTitleCheckBtn = document.querySelector('.toDoCardTitleCheckBtn');
const editToDoCardTitleBtn = document.querySelector('.editToDoCardTitleBtn');

editToDoCardTitleBtn.addEventListener('click', () => {
    toDoCardTitle.classList.add('hidden');
    toDoCardTitleInputContainer.classList.remove('hidden');
});

toDoCardTitleCheckBtn.addEventListener('click', () => {
    setTitle(toDoCardTitle, toDoCardTitleInput, toDoCardTitleInputContainer);
});

function setTitle(tDT, tDTI, tDTIC) {
    tDT.innerText = tDTI.value;
    tDTIC.classList.add('hidden');
    tDT.classList.remove('hidden');
}

/*Mark ToDo Done*/
function addEventMarkToDoDone(toDoCheckbox, toDoTitle, toDoDescription) {
    toDoCheckbox.addEventListener('click', () => {
        if (toDoCheckbox.checked == true) {
            toDoTitle.classList.add('toDoDone');
            toDoDescription.classList.add('toDoDone');
            toDoDescription.setAttribute('disabled', 'true');
        } else {
            toDoTitle.classList.remove('toDoDone');
            toDoDescription.classList.remove('toDoDone');
            toDoDescription.removeAttribute('disabled');
        }
    });
}

/*Delete Card*/
function addEventToDeleteCard(btnToAddEvent) {
    btnToAddEvent.addEventListener('click', () => {
        const toDoCard = btnToAddEvent.parentElement.parentElement;
        toDoCard.remove();
    });
}