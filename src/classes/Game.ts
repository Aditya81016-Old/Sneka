import { GameStateEnum, GameDifficultyEnum } from "../modules/enums";
import Ingame from "../components/Ingame";

export default class Game {
  GameState: GameStateEnum = GameStateEnum.LOBBY;
  GameDifficulty: GameDifficultyEnum = GameDifficultyEnum.STANDARD;
  fruitId: number = 0;

  // starts the game
  start(): void {
    console.log("game started");

    // sets game state to ONGPOING
    this.GameState = GameStateEnum.ONGOING;

    const {updatePoints, html} = Ingame()
    $("#App").html(html)

    // starts spawning fruits
    this.spawnFruits(this.fruitId);

    // spawn player
    this.spawnPlayer();

    // initializes the controls
    this.initializeControl();

    // keeps note of ingame collisions
    this.watchForCollisions();
  }

  // starts spawing friuts
  spawnFruits(fruitId: number): void {
    let spawnRate = 8000;
    spawn();

    function spawn(): void {
      spawnRate = Math.max(2000 ,spawnRate - 50);
      const fruit = $("<div>", {
        class: "fruit",
        id: String(fruitId++),
      });

      const top: number =
        Math.random() * Number($(window).height()) -
        Number(fruit.css("height").replace("px", ""));

      const left =
        Math.random() * Number($(window).width()) -
        Number(fruit.css("width").replace("px", ""));

      console.log(fruit.css("height"), left)

      fruit.css("top", top + "px");
      fruit.css("left", left + "px");

      $("#App").append(fruit);

      // updatePoints(fruitId)

      setTimeout(spawn, spawnRate);
    }
  }

  // spawns player
  spawnPlayer(): void {}

  // initializes the controls
  initializeControl(): void {}

  // keeps note of ingame collisions
  watchForCollisions(): void {}

  // runs when player dies
  end(): void {}
}
