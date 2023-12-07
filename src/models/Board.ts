export class Board {
  private readonly width: number;
  private readonly height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public render(context: CanvasRenderingContext2D): void {
    context.fillStyle = "black";
    context.fillRect(0, 0, this.width, this.height);
  }
}
