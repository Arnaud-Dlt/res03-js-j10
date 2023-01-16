import {Intros} from "../classes/intros.js";

function initIntros()
{
    let allIntros = [];
    
    let intro1 = new Intros("Introduction 1");
    let intro2 = new Intros("Introduction 2");
    let intro3 = new Intros("Introduction 3");
    let intro4 = new Intros("Introduction 4");
    let intro5 = new Intros("Introduction 5");
    
    allIntros.push(intro1);
    allIntros.push(intro2);
    allIntros.push(intro3);
    allIntros.push(intro4);
    allIntros.push(intro5);
    
    return allIntros;
}

export {initIntros};    