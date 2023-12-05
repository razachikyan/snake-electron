// controllers/GameController.ts
import { BrowserWindow } from "electron";
import { GameStateManager } from "../models/GameStateManager";
import { GameView } from "../views/GameView";

export class GameController {
  private gameStateManager: GameStateManager;
  private gameView: GameView;

  constructor(private mainWindow: BrowserWindow) {
    this.gameStateManager = new GameStateManager();
    this.gameView = new GameView(mainWindow, this.gameStateManager);
  }

  startGame() {
    // Initialize game logic, start rendering, etc.
    this.gameStateManager.startGame();
    this.gameView.render();
  }

  // Other game-related methods
}
