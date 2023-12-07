import { Entity } from "../types";
import { GameModel } from "./GameModel";

export class Food extends GameModel {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private readonly img: HTMLImageElement;

  constructor(size: number = 20) {
    super();
    this.x = Math.random() + 700 + 50;
    this.y = Math.random() + 700 + 50;
    this.width = size;
    this.height = size;
    this.img = new Image();
    this.img.src =
      "https://img.itch.zone/aW1nLzMwMDU2MTIucG5n/315x250%23c/2P3uFo.png";
  }

  public render(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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

  private changePosition(): void {
    this.x = Math.random() * 700 + 50;
    this.y = Math.random() * 700 + 50;
  }
}
