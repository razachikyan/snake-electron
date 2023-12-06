export class Board {
  private readonly width: number;
  private readonly height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  render(context: CanvasRenderingContext2D): void {
    // Rendering logic for the game board

    // For example, drawing a border or background
    context.fillStyle = "black";
    context.fillRect(0, 0, this.width, this.height);
  }
}
