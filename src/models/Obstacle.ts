export class Obstacle {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  public getPosition() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    };
  }

  public render(ctx: CanvasRenderingContext2D): void {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
