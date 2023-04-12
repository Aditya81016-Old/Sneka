import { GameStateEnum, GameDifficultyEnum } from "../modules/enums";
import Ingame from "../components/Ingame";

export default class Game {
  GameState: GameStateEnum = GameStateEnum.LOBBY;
  GameDifficulty: GameDifficultyEnum = GameDifficultyEnum.STANDARD;
  fruitId = 0;
  player = $("<div>", {
    id: "Player",
  });

  // starts the game
  start(): void {
    console.log("game started");

    // sets game state to ONGPOING
    this.GameState = GameStateEnum.ONGOING;

    const { html } = Ingame();
    $("#App").html(html);

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
      spawnRate = Math.max(2000, spawnRate - 10);
      const fruit = $("<div>", {
        class: "fruit",
        id: String(fruitId++),
      });

      fruit.html('<i class="fa-solid fa-apple-whole"></i>');

      const top: number =
        Math.random() * Number($(window).height()) -
        Number(fruit.css("height").replace("px", ""));

      const left =
        Math.random() * Number($(window).width()) -
        Number(fruit.css("width").replace("px", ""));

      console.log(fruit.css("height"), left);

      fruit.css("top", top + "px");
      fruit.css("left", left + "px");

      $("#App").append(fruit);

      // updatePoints(fruitId)

      setTimeout(spawn, spawnRate);
    }
  }

  // spawns player
  spawnPlayer(): void {
    const startingNoOfParts = 5; // starting no. of parts player with have
    let totalNoOfParts = 1; // total no. of parts in player throughout the game

    const oneRem = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );

    interface RGBInterface {
      red: number;
      green: number;
      blue: number;
    }

    const RGB: RGBInterface = {
      red: 214,
      blue: 63,
      green: 63,
    };

    let zIndex: number = 0

    let top = Number($(window).height()) / 2;

    const head = $("<div>", {
      class: "part",
      id: "Head",
    });

    head.css("top", top + "px");
    head.css("z-index", zIndex--);
    head.css("background-color", getColor(RGB));
    
    top = top + 1.5 * oneRem;

    RGB.red -= RGB.red / startingNoOfParts;
    RGB.blue -= RGB.blue / startingNoOfParts;
    RGB.green -= RGB.green / startingNoOfParts;



    this.player.append(head);

    while (totalNoOfParts < startingNoOfParts) {
      addPart(this.player);
      totalNoOfParts++;
    }

    $("#App").append(this.player);

    function addPart(player: JQuery<HTMLElement>) {
      const part = $("<div>", {
        class: "part",
        id: String(totalNoOfParts),
      });

      part.css("top", top + "px");
      part.css("z-index", zIndex--);
      part.css("background-color", getColor(RGB));

      RGB.red -= RGB.red / startingNoOfParts;
      RGB.blue -= RGB.blue / startingNoOfParts;
      RGB.green -= RGB.green / startingNoOfParts;

      top = top + 1 * oneRem;

      player.append(part);
    }

    function getColor({ red, green, blue }: RGBInterface): string {
      return `rgb(${red}, ${green}, ${blue})`;
    }
  }

  // initializes the controls
  initializeControl(): void {}

  // keeps note of ingame collisions
  watchForCollisions(): void {}

  // runs when player dies
  end(): void {}
}
