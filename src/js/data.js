createObjectList = (name)=>{
  let list = {
    name: name,
    cards: []
  };
  return list;
};
createCardInObjectList = (list, cardsCounter, nameCard) => {
  list.cards[cardsCounter] = nameCard;
  return list;
}; 