import {Game} from "./classes/game.js";
import {GameTest} from "./classes/gametest.js";
import {Scenes} from "./classes/scenes.js";
import {ScenesTest} from "./classes/scenestest.js";

window.addEventListener("DOMContentLoaded", function()
{
    let sceneTest = new ScenesTest();
    sceneTest.test();
    console.log(sceneTest);
    
    let gameTest = new GameTest();
    gameTest.test1();
    console.log(gameTest);
});