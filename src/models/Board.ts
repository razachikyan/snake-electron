import { Snake } from "./Snake";

export class Board {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D; // Declare as nullable to handle null return
  snake: Snake;
  constructor(canvasId: string, initialSnakeX: number, initialSnakeY: number) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    const context = this.canvas.getContext("2d"); // Get the context

    if (context) {
      this.context = context; // Assign only if context is not null
    } else {
      throw new Error("2D context not supported or canvas element not found.");
    }

    // Create an instance of the Snake class
    this.snake = new Snake(initialSnakeX, initialSnakeY);
  }

  init(): void {
    // Initialize game setup, event listeners, etc.
    // For instance, you might initialize the game loop here
    this.gameLoop();
  }

  gameLoop(): void {
    // Implement the game loop here
    // Update game state, handle input, render, etc.

    // Example: Clear canvas and render the snake
    this.clearCanvas();
    this.snake.render(this.context);

    // Request next frame
    requestAnimationFrame(() => this.gameLoop());
  }

  clearCanvas(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
