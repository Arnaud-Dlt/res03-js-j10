import {Game} from "./classes/game.js";
import {GameTest} from "./classes/gametest.js";
import {Scenes} from "./classes/scenes.js";
import {ScenesTest} from "./classes/scenestest.js";

window.addEventListener("DOMContentLoaded", function()
{
    
    let beginning = new Game();
    beginning.start();
    
    let form = document.getElementById("form");
    form.addEventListener("submit", function(envent)
    {
        event.preventDefault();
        event.next();
    });
    
    
});