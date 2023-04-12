import { GameStateEnum, GameDifficultyEnum } from "../modules/enums";

export default class Game {
  GameState: GameStateEnum = GameStateEnum.LOBBY;
  GameDifficulty: GameDifficultyEnum = GameDifficultyEnum.STANDARD;

  // starts the game
  start(): void {
    console.log("game started")

    // sets game state to ONGPOING
    this.GameState = GameStateEnum.ONGOING;

    // starts spawning fruits
    this.spawnFruits();

    // spawn player
    this.spawnPlayer();

    // initializes the controls
    this.initializeControl();

    // keeps note of ingame collisions
    this.watchForCollisions();
  }

  // starts spawing friuts
  spawnFruits(): void {}

  // spawns player
  spawnPlayer(): void {}

  // initializes the controls
  initializeControl(): void {}

  // keeps note of ingame collisions
  watchForCollisions(): void {}

  // runs when player dies
  end(): void {}
}
