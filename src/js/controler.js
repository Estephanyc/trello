// crear boton inicial para agregar lista
createAddTaskInicial();

controlerCreateNewList = (container) => {
  let name = inputAddNewList.value;
  let list = createObjectList(name);
  addNewList(list,container);
  createAddTaskInicial('ListContainer2');
};

let cardsCounter = 0;
controlerCreateCard = (list,container) =>{
  let inputId = 'input' + container
  let input = document.getElementById(inputId)
  let nameCard = input.value;
  input.value = '';
  cardsCounter++;
  let cardInObjectList = createCardInObjectList(list, cardsCounter, nameCard);
  createCard(cardInObjectList.cards[cardsCounter], container);
};