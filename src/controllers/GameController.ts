import { BrowserWindow } from "electron";

import { Snake } from "../models/Snake";
import { Board } from "../models/Board";
import { Food } from "../models/Food";

import { GameView } from "../views/GameView";
import { GameObjectFactory } from "../factories/GameObjectFactory";

export class GameController {
  // private gameView: GameView;
  private snake: Snake;
  private board: Board;
  private food: Food;

  constructor(private mainWindow: BrowserWindow) {
    this.snake = GameObjectFactory.createSnake();
    this.board = GameObjectFactory.createBoard(800, 600);
    this.food = GameObjectFactory.createFood();
    // this.gameView = new GameView(mainWindow, this.gameStateManager);
  }
  startGame() {
    this.gameStateManager.startGame();
    this.gameView.render();
    this.startRendering();
  }

  private startRendering() {
    const renderLoop = () => {
      this.board.render(this.gameView.getContext());
      this.snake.render(this.gameView.getContext());

      requestAnimationFrame(renderLoop);
    };

    requestAnimationFrame(renderLoop);
  }
  initializeKeyHandlers() {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          // Logic for moving the snake up
          // For example: this.gameStateManager.moveSnakeUp();
          break;
        case "ArrowDown":
          // Logic for moving the snake down
          // For example: this.gameStateManager.moveSnakeDown();
          break;
        case "ArrowLeft":
          // Logic for moving the snake left
          // For example: this.gameStateManager.moveSnakeLeft();
          break;
        case "ArrowRight":
          // Logic for moving the snake right
          // For example: this.gameStateManager.moveSnakeRight();
          break;
        default:
          // Handle other key presses if needed
          break;
      }
    });
  }

  initializeGame() {
    this.gameStateManager.startGame();
    this.startRendering();
  }
}
