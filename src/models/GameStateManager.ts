// models/GameStateManager.ts
export class GameStateManager {
  private currentState: GameState;
  constructor () {
    this.currentState = {}
  }
  startGame() {
    // Initialize game state, set to "playing"
    this.currentState = new PlayingState();
  }

  // Methods for transitioning between states
  pauseGame() {
    this.currentState = new PausedState();
  }

  resumeGame() {
    this.currentState = new PlayingState();
  }

  endGame() {
    this.currentState = new GameOverState();
  }
}

// Example states (can be separate files)
interface GameState {
  // State methods
}

class PlayingState implements GameState {
  // Implementation for "playing" state
}

class PausedState implements GameState {
  // Implementation for "paused" state
}

class GameOverState implements GameState {
  // Implementation for "game over" state
}
