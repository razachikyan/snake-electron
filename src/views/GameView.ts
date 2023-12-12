import { GameModel } from "../models/GameModel";

export class GameView {
  private ctx: CanvasRenderingContext2D | null;
  private models: Array<GameModel>;

  constructor(models: GameModel[]) {
    this.models = models;
    this.ctx = null;
  }

  public initCanvas(): void {
    // document.addEventListener('DOMContentLoaded', () => {
    //   const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    //   this.ctx = canvas ? canvas.getContext("2d") : null;
    //   if (this.ctx) {
    //     console.log("Canvas initialized");
    //   }
    // });
  }

  public render(): void {
    if (this.ctx !== null) {
      console.log("rendering");
      this.clear();
      this.models.forEach((model: GameModel) => {
        model.render(this.ctx as CanvasRenderingContext2D);
      });
    }
  }

  private clear(): void {
    if (this.ctx !== null) {
      this.ctx.clearRect(0, 0, 800, 600);
    }
  }
}
