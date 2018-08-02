window.onload = () =>{
    createAddTaskInicial()
}
createAddTaskInicial = () =>{
    clearContainer()
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

    const listTittle = document.createElement("h5");
    const listTittleText = document.createTextNode(name)
    listTittle.appendChild(listTittleText)

    const addCardText = document.createTextNode("+ Añadir targeta")
    const addCard = document.createElement("p");
    addCard.appendChild(addCardText)

    newDiv.appendChild(listTittle);
    container.appendChild(newDiv)
    newDiv.appendChild(addCard)

    addCard.addEventListener("click", function () {

        const newInput = document.createElement("input");
        newInput.classList.add("form-control");

        const newButtom = document.createElement("button");
        newButtom.classList.add("btn", "btn-primary", "mb-2");
        const textButton = 'Añadir lista'
        const textButtonNode = document.createTextNode(textButton)
        
        newButtom.appendChild(textButtonNode)
        newDiv.appendChild(newInput);
        newDiv.appendChild(newButtom);
    });
}
clearContainer = () => {
    ListContainer.innerHTML = ''
}