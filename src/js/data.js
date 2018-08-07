createObjectList = (name)=>{
  let list = {
    name: name,
    cards: [],
    cardsCounter: 0
  };
  return list;
};
createCardInObjectList = (list, cardsCounter, nameCard) => {
  list.cards[cardsCounter] = nameCard;
  return list;
}; 