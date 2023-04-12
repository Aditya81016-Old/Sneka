import $ from "jquery";
import "./style.scss";
import homeHtml from "./components/Home";
import Game from "./classes/Game";

const game = new Game();

$("#App").html(homeHtml());

$("#start-button").on("click", () => {
    game.start()
});
