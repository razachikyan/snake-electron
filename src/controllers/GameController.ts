import { globalShortcut, BrowserWindow } from "electron";

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
  private mainWindow: BrowserWindow;

  constructor(mainWindow: BrowserWindow, level: number) {
    this.snake = GameObjectFactory.createSnake();
    this.board = GameObjectFactory.createBoard(800, 600);
    this.food = GameObjectFactory.createFood();
    this.intervalKey = null;
    this.obstacles = GameObjectFactory.createObstacle(level);
    this.gameView = new GameView([this.board, this.snake, ...this.obstacles]);
    this.mainWindow = mainWindow;
  }
  public startGame() {
    this.intervalKey = setInterval(() => {
      if (
        detectCollision(this.snake, [
          ...this.obstacles.map((item) => item.getEntity()),
          this.food.getEntity(),
        ])
      ) {
        this.stop();
      }

      this.gameView.render();
    }, 400);
  }

  private stop() {
    if (this.intervalKey) clearInterval(this.intervalKey);
  }

  private initializeKeyHandlers() {
    globalShortcut.register("ArrowUp", () => {
      this.mainWindow.webContents.executeJavaScript(
        'this.snake.changeDirection("up")'
      );
    });

    globalShortcut.register("ArrowDown", () => {
      this.mainWindow.webContents.executeJavaScript(
        'snake.changeDirection("down");'
      );
    });

    globalShortcut.register("ArrowLeft", () => {
      this.mainWindow.webContents.executeJavaScript(
        'snake.changeDirection("left");'
      );
    });

    globalShortcut.register("ArrowRight", () => {
      this.mainWindow.webContents.executeJavaScript(
        'snake.changeDirection("right");'
      );
    });
  }
}
