import { Entity } from "../types";
import { GameModel } from "./GameModel";

export class Obstacle extends GameModel {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  constructor(x: number, y: number, width: number, height: number) {
    super();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  public getEntity(): Entity {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      type: "obstacle",
    };
  }

  public render(ctx: CanvasRenderingContext2D): void {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
