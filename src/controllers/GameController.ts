import { Snake } from "../models/Snake";
import { Board } from "../models/Board";
// controllers/GameController.ts
import { BrowserWindow } from "electron";
import { GameStateManager } from "../models/GameStateManager";
import { GameView } from "../views/GameView";

export class GameController {
  private gameStateManager: GameStateManager;
  private gameView: GameView;
  private snake: Snake;
  private board: Board;

  constructor(private mainWindow: BrowserWindow) {
    this.gameStateManager = new GameStateManager();
    this.snake = this.gameStateManager.getSnake(); // Retrieve the Snake instance
    this.board = this.gameStateManager.getBoard(); // Retrieve the Board instance
    this.gameView = new GameView(mainWindow, this.gameStateManager);
  }
  startGame() {
    // Initialize game logic, start rendering, etc.
    this.gameStateManager.startGame();
    this.gameView.render(); // Initial rendering
    this.startRendering(); // Start the continuous rendering loop
  }

  private startRendering() {
    // Continuously render the game elements
    const renderLoop = () => {
      // Clear previous frame
      // ...

      // Render board and snake
      this.board.render(this.gameView.getContext()); // Pass context or required data
      this.snake.render(this.gameView.getContext()); // Pass context or required data

      // Request the next frame
      requestAnimationFrame(renderLoop);
    };

    // Start the rendering loop
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
