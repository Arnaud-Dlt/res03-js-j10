import {Enquete} from "../classes/enquete.js";

function EnqueteFunction()
{
    let scenes = [];
    
    let scenes1 = new Enquete("Blabla1", "Question 1?", "Choix", "img/corps.png");
    
    scenes.push(scenes1);
    
    return scenes;
}

export {EnqueteFunction};