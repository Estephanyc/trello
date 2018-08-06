const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const document = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

var chai = require('chai')

chai.use(require('chai-dom'))

//console.log(dom.window.document.querySelector("p").textContent); // "Hello world"

//dom.window.document.querySelector("p").should.contain.html('Hello world')
//expect(dom.querySelector('#title')).to.contain.html('<em>Tea</em>')

dom.window.document.querySelector('p').should.have.text('Hello world') 
//global.window = global;
// assert = require('chai').assert;
// require('../src/js/main');
