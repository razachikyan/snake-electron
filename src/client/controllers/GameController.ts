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
    this.gameView = new GameView([
      this.board,
      this.food,
      this.snake,
      ...this.obstacles,
    ]);
    this.gameView.initCanvas();
  }

  public startGame() {
    let foodInterval: NodeJS.Timeout | null = null;
    this.initializeKeyHandlers();
    this.gameView.initCanvas();
    this.intervalKey = setInterval(() => {
      const { collision, action } = detectCollision(this.snake, [
        ...this.obstacles.map((item) => item.getEntity()),
        this.food.getEntity(),
      ]);
      console.log({ collision, action });
      if (collision && action === "die") {
        this.stop();
      }
      if (collision && action === "grow") {
        if (foodInterval !== null) clearInterval(foodInterval);
        this.snake.grow();
        this.food.changePosition();

        foodInterval = setInterval(() => {
          this.food.changePosition();
        }, 15000);
      }
      this.snake.move();
      this.gameView.render();
    }, 100);
  }

  private stop() {
    if (this.intervalKey) clearInterval(this.intervalKey);
    const modal = document.querySelector(".modal") as unknown as HTMLDivElement;
    console.log(modal);
    if (modal) modal.style.display = "flex";
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
