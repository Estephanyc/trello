// crear el boton inicial de agregar lista 
let containerOne = 'ListContainer1'
let containerTwo = 'ListContainer2'
columnList(containerOne)

// crear boton inicial para agregar lista
createAddTaskInicial(containerOne)

document.getElementById('addListInicial').addEventListener("click", function () {

    clearContainer(containerOne)

    //crear input para agregar lista
    createAddListInput(containerOne)

    buttonAddNewList.addEventListener("click", () => {
        
        let nameList = inputAddNewList.value;
        
        // limpiar el contenedor para que entre la lista
        clearContainer(containerOne)

        // poner el input de agregar nueva lista en la segunda columna
        createAddListInput(containerTwo)

        // agregar nueva lista
        let list = createObjectList(nameList)
        addNewList(list.name)

        // boton para agregar targetas dentro de la lista
        addCardButton()

        // contador de targetas
        let cardsCounter = 0

        trashAddListInput.addEventListener("click", function () {
            clearContainer(containerTwo)
            createAddTaskInicial(containerTwo)
        })

        // cuando se da click en el boton agregar targeta
        addCardID.addEventListener("click", function () {

            // eliminar el boton de agregar targeta
            boxListId.removeChild(addCardID)

            // input para crear la nueva targeta
            createCardInput(containerOne)

            addCardButtonId.addEventListener("click", function () {

                let nameCard = inputAddNewCard.value;
                let cardInObjectList = createCardInObjectList(list,cardsCounter,nameCard)
                
                // crear la targeta en el dom pasandole como el objeto de lista
                createCard(cardInObjectList.cards[cardsCounter])
                inputAddNewCard.value = ''
                cardsCounter++
            })
        })
    });  
});
