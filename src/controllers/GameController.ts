import { BrowserWindow } from "electron";

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
  private mainWindow: BrowserWindow;
  private gameView: GameView;

  constructor(level: number, mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
    this.snake = GameObjectFactory.createSnake();
    this.board = GameObjectFactory.createBoard(800, 600);
    this.food = GameObjectFactory.createFood();
    this.intervalKey = null;
    this.obstacles = GameObjectFactory.createObstacle(level);
    this.gameView = new GameView([this.board])//, this.snake, ...this.obstacles]);
    this.gameView.initCanvas()
  }

  public startGame() {
    // this.intervalKey = setInterval(() => {
    //   const x = detectCollision(this.snake, [
    //     ...this.obstacles.map((item) => item.getEntity()),
    //     this.food.getEntity(),
    //   ]);

    //   if (x.collision) {
    //     this.stop();
    //   }
    //   this.initializeKeyHandlers();
    // }, 400);
    // this.gameView.render();
  }

  private stop() {
    if (this.intervalKey) clearInterval(this.intervalKey);
  }

  private initializeKeyHandlers() {
    this.mainWindow.webContents.on("before-input-event", (ev, action) => {
      switch (action.key) {
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
