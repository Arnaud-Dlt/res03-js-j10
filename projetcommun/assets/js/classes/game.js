import { GameTest } from "./gametest.js";
import { Scenes } from "./scenes.js";
import { ScenesTest } from "./scenestest.js";


class Game
{
    
    #scene;
    
    
    constructor(scene)
    {
        this.#scene = [];
    }
    
    get scene()
    {
        return this.#scene;
    }
    
    set scene(scene)
    {
        this.#scene = scene;
    }
    
    start()
    {
        let introduction = document.getElementById("intro");
        let question = document.getElementById("question");
        let image = document.getElementById("image");
        let choix1 = document.getElementById("choix1");
        let choix2 = document.getElementById("choix2");
        let choix3 = document.getElementById("choix3");
        
        let scene1 = new Scenes(0);
        
        let introductionText = document.createTextNode(scene1.intro);
        let questionText = document.createTextNode(scene1.question);
        let illustrationImage = scene1.image;
        let choix1Text = document.createTextNode(scene1.choix1);
        let choix2Text = document.createTextNode(scene1.choix2);
        let choix3Text = document.createTextNode(scene1.choix3);
        
        image.setAttribute("src", illustrationImage);
        introduction.appendChild(introductionText);
        question.appendChild(questionText);
        choix1.appendChild(choix1Text);
        choix2.appendChild(choix2Text);
        choix3.appendChild(choix3Text);
        
    }
    
    CurrentScene(scenes)
    {
        this.#scene.push(scenes);
    }
    
    next(event)
    {
        let checkedId = event.target.[];
        
        let currentScene = new Scene(0);
        
        for(let i = 0; i < checkedId.length; i++)
        {
            
        }
        
        currentScene.display();
        
        
        
    
    }
}

export {Game};