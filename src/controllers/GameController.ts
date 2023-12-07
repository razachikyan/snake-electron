import { BrowserWindow } from "electron";

import { Snake } from "../models/Snake";
import { Board } from "../models/Board";
import { Food } from "../models/Food";

import { GameView } from "../views/GameView";
import { GameObjectFactory } from "../factories/GameObjectFactory";
import { Obstacle } from "../models/Obstacle";
import { detectCollision } from "../utils/detectCollision";

export class GameController {
  // private gameView: GameView;
  private snake: Snake;
  private board: Board;
  private food: Food;
  private obstacles: Obstacle[];
  private intervalKey: NodeJS.Timeout | null;
  private gameView: GameView;

  constructor(level: number) {
    this.snake = GameObjectFactory.createSnake();
    this.board = GameObjectFactory.createBoard(800, 600);
    this.food = GameObjectFactory.createFood();
    this.intervalKey = null;
    this.obstacles = GameObjectFactory.createObstacle(level);
    this.gameView = new GameView([this.board, this.snake, ...this.obstacles]);
  }
  startGame() {
    this.intervalKey = setInterval(() => {
      detectCollision(this.snake, [
        ...this.obstacles.map((item) => item.getEntity()),
        this.food.getEntity(),
      ]);
      this.gameView.render();
    }, 400);
  }

  stop() {
    if (this.intervalKey) clearInterval(this.intervalKey);
  }

  initializeKeyHandlers() {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          this.snake.changeDirection("up");
          break;
        case "ArrowDown":
          this.snake.changeDirection("down");
          break;
        case "ArrowLeft":
          this.snake.changeDirection("left");
          break;
        case "ArrowRight":
          this.snake.changeDirection("right");
          break;
        default:
          break;
      }
    });
  }
}
