// boton inicial de crear lista
createAddTaskInicial = () =>{
    const container = document.getElementById("ListContainer");
    const addText = document.createTextNode("+ Añadir una lista")
    const parrafo = document.createElement("p");
    parrafo.appendChild(addText)
    container.appendChild(parrafo)
    parrafo.classList.add("addInput");
    parrafo.setAttribute("id", "addListInicial");  
}

// input para crear nueva lista
createAddListInput = (idContainer) =>{
    const container = document.getElementById(idContainer);
    const newDiv = document.createElement("div");
    newDiv.classList.add("boxList");
    container.appendChild(newDiv)
    newDiv.classList.add("boxList");

    const newInput = document.createElement("input");
    newInput.classList.add("form-control");
    newInput.setAttribute("id", "inputAddNewList");

    const newButtom = document.createElement("button");
    const textButton = 'Añadir lista'
    const textButtonNode = document.createTextNode(textButton)
    newButtom.classList.add("btn","btn-primary", "mb-2");
    newButtom.setAttribute("id", "buttonAddNewList"); 

    const trash = document.createElement("i");
    trash.classList.add("fas", "fa-times");
    trash.setAttribute("id", "trashAddListInput"); 

    newButtom.appendChild(textButtonNode)
    newDiv.appendChild(newInput);
    newDiv.appendChild(newButtom);
    newDiv.appendChild(trash);
    container.appendChild(newDiv)
}
// crear la nueva lista
addNewList =(name)=>{
    createAddListInput('ListContainerTwo')
    const container = document.getElementById("ListContainer");
    const newDiv = document.createElement("div");
    newDiv.classList.add("boxList");
    newDiv.setAttribute("id", "boxListId");

    const cardsContainer = document.createElement("div");
    cardsContainer.setAttribute("id", "cardsContainer");

    const listTittle = document.createElement("h5");
    const listTittleText = document.createTextNode(name)
    listTittle.appendChild(listTittleText)

    newDiv.appendChild(listTittle);
    container.appendChild(newDiv)
    newDiv.appendChild(cardsContainer)
}
// boton para agregar nuevas targetas en la lista
addCardButton = ()=>{
    let container = document.getElementById('boxListId')
    const addCardText = document.createTextNode("+ Añadir targeta")
    const addCard = document.createElement("span");
    addCard.appendChild(addCardText)
    container.appendChild(addCard)
    addCard.setAttribute("id", "addCardID");
}
// input para crear el nombre de la targeta
createCardInput = () =>{
    let container = document.getElementById('boxListId')
    const newInput = document.createElement("input");
    newInput.classList.add("form-control");
    newInput.setAttribute('placeholder', 'Introduzca un titulo para esta targeta')
    newInput.setAttribute("id", "inputAddNewCard");

    const newButtom = document.createElement("button");
    newButtom.classList.add("btn", "btn-primary", "mb-2");
    newButtom.setAttribute("id", "addCardButtonId");

    const textButton = 'Añadir lista'
    const textButtonNode = document.createTextNode(textButton)

    newButtom.appendChild(textButtonNode)
    container.appendChild(newInput);
    container.appendChild(newButtom);
}
// crear la targeta
createCard = (name) =>{
    
    let container = document.getElementById('cardsContainer')
    const cardText = document.createTextNode(name)
    const cardTittle = document.createElement("p");
    cardTittle.classList.add('card')
    cardTittle.appendChild(cardText)
    container.appendChild(cardTittle)
}
clearContainer = () => {
    ListContainer.innerHTML = ''
}