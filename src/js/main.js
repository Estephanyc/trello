// boton inicial de crear lista
let counter = 0;
createAddTaskInicial = (containerTaskInicial) =>{
  counter ++;
  const container = document.getElementById('listsContainer');
  const newDivList = document.createElement('div');
  let newId = 'listContainer' + counter;
  newDivList.setAttribute('id', newId);
  newDivList.classList.add("col-md-3");
  newDivList.classList.add("col-12")
  newDivList.classList.add("div-list")
  
  container.appendChild(newDivList);

  const addText = document.createTextNode('+ Añadir una lista');
  const parrafo = document.createElement('p');
  parrafo.appendChild(addText);
  newDivList.appendChild(parrafo);
  parrafo.classList.add('addInput');
  parrafo.onclick = () => {
    createAddListInput(newId);
  }; 
  return container;
};

// input para crear nueva lista
createAddListInput = (Container) =>{
  console.log(Container)
  document.getElementById(Container).innerHTML = '';
  const container = document.getElementById(Container);
  const newDiv = document.createElement('div');
  newDiv.classList.add('boxList');
  container.appendChild(newDiv);
  newDiv.classList.add('boxList');

  const newInput = document.createElement('input');
  newInput.classList.add('form-control');
  newInput.setAttribute('id', 'inputAddNewList');

  const newDivForm = document.createElement('div');
  const newButtom = document.createElement('button');
  const textButton = 'Añadir lista';
  const textButtonNode = document.createTextNode(textButton);
  newButtom.classList.add('btn', 'btn-primary', 'mb-2');
  newButtom.setAttribute('id', 'buttonAddNewList'); 
  newButtom.onclick = () => {
    controlerCreateNewList(Container)
  };

  const trash = document.createElement('i');
  trash.classList.add('fas', 'fa-times');
  let trashId = 'trashAddListInput' + Container
  trash.setAttribute('id', trashId); 

  newButtom.appendChild(textButtonNode);
  newDiv.appendChild(newInput);
  newDiv.appendChild(newButtom);
  //newDiv.appendChild(trash);
  container.appendChild(newDiv);
};
// crear la nueva lista
addNewList = (list,container)=>{
  document.getElementById(container).innerHTML = '';
  const contain = document.getElementById(container)
  const newDiv = document.createElement('div');
  newDiv.classList.add('boxList');
  let newId = 'box' + counter;
  newDiv.setAttribute('id', newId);
  const cardsContainer = document.createElement('div');
  let cardsContainerId = 'cards' + newId
  cardsContainer.setAttribute('id', cardsContainerId);

  const listTittle = document.createElement('h5');
  const listTittleText = document.createTextNode(list.name);
  listTittle.appendChild(listTittleText);

  newDiv.appendChild(listTittle);
  contain.appendChild(newDiv);
  newDiv.appendChild(cardsContainer);

  const addCardText = document.createTextNode('+ Añada una tarjeta');
  const addCard = document.createElement('p');

  addCard.appendChild(addCardText);
  newDiv.appendChild(addCard);
  let addCardId = 'addCardId' + container
  addCard.setAttribute('id', addCardId);
  addCard.onclick = ()=>{
    console.log(list);
    createCardInput(list, newId, addCard);
  };
};
// input para crear el nombre de la targeta
createCardInput = (list, container, addCard) =>{
  const contain = document.getElementById(container)
  contain.removeChild(addCard);
  const newInput = document.createElement('textarea');
  newInput.classList.add('form-control');
  newInput.setAttribute('placeholder', 'Introduzca un titulo para esta tarjeta');
  let inputId = 'input' + container
  newInput.setAttribute('id', inputId);

  const newButtom = document.createElement('button');
  newButtom.classList.add('btn', 'btn-primary', 'mb-2');
  newButtom.setAttribute('id', 'addCardButtonId');
  newButtom.onclick = () => {
    controlerCreateCard(list, container);
  };
  const textButton = 'Añadir tarjeta';
  const textButtonNode = document.createTextNode(textButton);

  newButtom.appendChild(textButtonNode);
  contain.appendChild(newInput);
  contain.appendChild(newButtom);
};
// crear la targeta
createCard = (name,container) =>{
  
  cardsCounter++;
  let contain  = document.getElementById('cards' + container);
  const cardText = document.createTextNode(name);
  const cardTittle = document.createElement('p');
  cardTittle.classList.add('card');
  cardTittle.appendChild(cardText);
  contain.appendChild(cardTittle);
};
clearContainer = () => {
  document.getElementById(idContainer).innerHTML = '';
};
