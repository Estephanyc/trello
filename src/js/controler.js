// crear el boton inicial de agregar lista
createAddTaskInicial()

document.getElementById('addListInicial').addEventListener("click", function () {
   
    clearContainer()

    //crear input para agregar lista
    createAddListInput('ListContainer')
   /*  trash.addEventListener("click", () => {
        container.removeChild(newDiv);
        createAddTaskInicial()
    }); */
    buttonAddNewList.addEventListener("click", () => {
        let nameList = inputAddNewList.value;

        // limpiar el contenedor para que entre la lista
        clearContainer()

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
