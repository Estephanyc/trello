// crear el boton inicial de agregar lista
let containerOne = 'ListContainer2'
let containerTwo = 'ListContainer3'
columnList(containerOne)

createAddTaskInicial()

document.getElementById('addListInicial').addEventListener("click", function () {
   
    clearContainer()

    //crear input para agregar lista
    createAddListInput(containerOne)
  
    buttonAddNewList.addEventListener("click", () => {
        let nameList = inputAddNewList.value;

        // limpiar el contenedor para que entre la lista
        clearContainer()

        // poner el input de agregar nueva lista en la segunda columna
        createAddListInput(containerTwo)

        // agregar nueva lista
        addNewList(nameList)

        // boton para agregar targetas dentro de la lista
        addCardButton()

        // cuando se da click en el boton agregar targeta
        addCardID.addEventListener("click", function () {

            // eliminar el boton de agregar targeta
            boxListId.removeChild(addCardID)

            // input para crear la nueva targeta
            createCardInput()

            addCardButtonId.addEventListener("click", function () {
                let nameCard = inputAddNewCard.value;
                createCard(nameCard)
                inputAddNewCard.value = ''
            })
        })
    });  
});
