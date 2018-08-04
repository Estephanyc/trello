const assert = require('chai').assert;
global.window = global;
require('../src/js/data');

let primeraLista = createObjectList('Primera lista')
describe('createObjectList() Deberia crear un objecto lista', () => { 
    it('Debería crear el objecto con el nombre de la targeta', () => { 
        assert.equal(primeraLista.name, 'Primera lista');
    });
    it('Debería crear una propiedad para las targetas', () => {
        assert.ok(primeraLista.hasOwnProperty('cards'));
    });
    it('Debería crear un arreglo vacio para cards', () => {
        assert.ok(primeraLista.cards);
    });

});
describe('createCardInObjectList  Deberia crear una targeta', () => {
    let primeraTargeta = createCardInObjectList(primeraLista, 0, 'Primera targeta')
    let segundaTargeta = createCardInObjectList(primeraLista, 1, 'Segunda targeta')
    it('Debería crear una primera posicion en el arreglo cards con el nombre de la targeta', () => {
        assert.equal(primeraLista.cards[0],'Primera targeta');
    });
    it('Debería crear una segunda posicion en el arreglo cards con el nombre de la targeta', () => {
        assert.equal(primeraLista.cards[1], 'Segunda targeta');
    });
});
