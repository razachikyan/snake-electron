import { Entity } from "../types";
import { GameModel } from "./GameModel";

export class Food extends GameModel {
  private x: number;
  private y: number;
  private width: number;
  private height: number;

  constructor(size: number = 20) {
    super();
    this.x = Math.random() + 700 + 50;
    this.y = Math.random() + 700 + 50;
    this.width = size;
    this.height = size;
  }

  public render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  public getEntity = (): Entity => {
    return {
      height: this.height,
      width: this.width,
      x: this.x,
      y: this.y,
      type: "food",
    };
  };

  public changePosition(): void {
    this.x = Math.random() * 700 + 50;
    this.y = Math.random() * 700 + 50;
  }
}
