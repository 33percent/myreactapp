import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class myold {
  constructor(){
    this.name="old",
    this.callme = this.callme.bind(this)
  };
    
  callme(){
    return `HI My name is ${this.name}`;
  }
}

const myname = new myold();
const callme = myname.callme;
console.log(callme())
console.log(myname.callme())

class newold {
name = "sandeep";
newgreeting = () =>{
  return `Hi My name is ${this.name}`;
}
};

const newname = new newold();
const newcaling = newname.newgreeting;
console.log(newcaling())
console.log(newname)