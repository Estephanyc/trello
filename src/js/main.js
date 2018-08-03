window.onload = () =>{
    createAddTaskInicial()
}
createAddTaskInicial = () =>{
    const container = document.getElementById("ListContainer");
    const addText = document.createTextNode("+ Añadir una lista")
    const parrafo = document.createElement("p");
    parrafo.appendChild(addText)
    container.appendChild(parrafo)
    parrafo.classList.add("addInput");

    parrafo.addEventListener("click", function () {
        clearContainer()
        addListContainer('ListContainer')
    });
}

addListContainer = (idContainer) =>{

    const container = document.getElementById(idContainer);

    const newDiv = document.createElement("div");
    newDiv.classList.add("boxList");
    container.appendChild(newDiv)
    newDiv.classList.add("boxList");

    const newInput = document.createElement("input");
    newInput.classList.add("form-control");

    const newButtom = document.createElement("button");
    const textButton = 'Añadir lista'
    const textButtonNode = document.createTextNode(textButton)
    newButtom.classList.add("btn","btn-primary", "mb-2");

    const trash = document.createElement("i");
    trash.classList.add("fas", "fa-times");

    newButtom.appendChild(textButtonNode)
    newDiv.appendChild(newInput);
    newDiv.appendChild(newButtom);
    newDiv.appendChild(trash);
    container.appendChild(newDiv)

    trash.addEventListener("click", () => {
        container.removeChild(newDiv);
        createAddTaskInicial()
    });
    newButtom.addEventListener("click", () => {
       let nameList = newInput.value;
        addNewList(nameList)
    }); 
}

addNewList =(name)=>{

    clearContainer()
    addListContainer('ListContainerTwo')
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
    addCardButton()
}
addCardButton = ()=>{
    let container = document.getElementById('boxListId')
    const addCardText = document.createTextNode("+ Añadir targeta")
    const addCard = document.createElement("span");
    addCard.appendChild(addCardText)
    container.appendChild(addCard)
    addCard.setAttribute("id", "addCardButtonID");

    addCard.addEventListener("click", function () {

        container.removeChild(addCardButtonID);

        const newInput = document.createElement("input");
        newInput.classList.add("form-control");
        newInput.setAttribute('placeholder','Introduzca un titulo para esta targeta')

        const newButtom = document.createElement("button");
        newButtom.classList.add("btn", "btn-primary", "mb-2");
        const textButton = 'Añadir lista'
        const textButtonNode = document.createTextNode(textButton)

        newButtom.appendChild(textButtonNode)
        container.appendChild(newInput);
        container.appendChild(newButtom);

        newButtom.addEventListener("click", () => {
            let nameCard = newInput.value;
            createCard(nameCard)
            newInput.value =''
        }); 
    });
}
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