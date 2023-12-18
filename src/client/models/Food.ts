import { Entity } from "../types";
import { GameModel } from "./GameModel";

export class Food extends GameModel {
  private x: number;
  private y: number;
  private rad: number;
  private colors: string[] = ["yellow", "lightgreen", "orange"];
  private color: string;

  constructor(size: number = 20) {
    super();
    this.x = Math.random() * 400 + 50;
    this.y = Math.random() * 400 + 50;
    this.rad = size / 2;
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  public render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI, false);
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
    this.color = this.colors[Math.floor(Math.random()) * this.colors.length];
    this.x = Math.random() * 400 + 50;
    this.y = Math.random() * 400 + 50;
  }
}
