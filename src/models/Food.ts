import { Entity } from "../types";
import { GameModel } from "./GameModel";

export class Food extends GameModel {
  private x: number;
  private y: number;
  private rad: number;

  constructor(size: number = 20) {
    super();
    this.x = Math.random() + 700 + 50;
    this.y = Math.random() + 700 + 50;
    this.rad = size / 2;
  }

  public render(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.rad / 2, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();
  }

  public getEntity = (): Entity => {
    return {
      height: this.rad * 2,
      width: this.rad * 2,
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
