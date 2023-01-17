import {Game} from "./classes/game.js";
import {GameTest} from "./classes/gametest.js";
import {Scenes} from "./classes/scenes.js";
import {ScenesTest} from "./classes/scenestest.js";

window.addEventListener("DOMContentLoaded", function()
{
    let scenes = new Scenes(0, this.intro, this.question, "./img/corps.jpg", this.choix);
    console.log(scenes);
});