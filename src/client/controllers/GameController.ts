import { Snake } from "../models/Snake";
import { Board } from "../models/Board";
import { Food } from "../models/Food";
import { Obstacle } from "../models/Obstacle";

import { GameView } from "../views/GameView";
import { GameObjectFactory } from "../factories/GameObjectFactory";
import { detectCollision } from "../utils/detectCollision";

export class GameController {
  private snake: Snake;
  private board: Board;
  private food: Food;
  private obstacles: Obstacle[];
  private intervalKey: NodeJS.Timeout | null;
  private gameView: GameView;

  constructor(level: number) {
    this.snake = GameObjectFactory.createSnake();
    this.board = GameObjectFactory.createBoard(500, 500);
    this.food = GameObjectFactory.createFood();
    this.intervalKey = null;
    this.obstacles = GameObjectFactory.createObstacle(level);
    this.gameView = new GameView([this.board, this.snake, ...this.obstacles]);
    this.gameView.initCanvas();
  }

  public startGame() {
    this.initializeKeyHandlers();
    this.gameView.initCanvas();
    this.intervalKey = setInterval(() => {
      const { collision, action } = detectCollision(this.snake, [
        ...this.obstacles.map((item) => item.getEntity()),
        this.food.getEntity(),
      ]);
      if (collision && action === "die") {
        this.stop();
      }
      if (collision && action === "grow") {
        this.snake.grow();
        this.food.changePosition();
      }
      this.snake.move();
      this.gameView.render();
    }, 300);
  }

  private stop() {
    if (this.intervalKey) clearInterval(this.intervalKey);
  }

  private initializeKeyHandlers() {
    document.addEventListener("keydown", (ev) => {
      switch (ev.key) {
        case "ArrowUp":
          ev.preventDefault();
          this.snake.changeDirection("up");
          break;
        case "ArrowDown":
          ev.preventDefault();
          this.snake.changeDirection("down");
          break;
        case "ArrowLeft":
          ev.preventDefault();
          this.snake.changeDirection("left");
          break;
        case "ArrowRight":
          ev.preventDefault();
          this.snake.changeDirection("right");
          break;
        default:
          break;
      }
    });
  }
}
