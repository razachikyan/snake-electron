import { GameModel } from "../models/GameModel";

// views/GameView.ts
export class GameView {
  private ctx: CanvasRenderingContext2D | null;
  private models: Array<GameModel>;
  constructor(models: GameModel[]) {
    this.models = models;
    // const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    // canvas ? (this.ctx = canvas.getContext("2d")) :
    this.ctx = null;
  }

  public render() {
    if (this.ctx !== null) {
      this.clear();
      this.models.forEach((model: GameModel) => {
        model.render(this.ctx as CanvasRenderingContext2D);
      });
    }
  }

  private clear() {
    if (this.ctx !== null) {
      this.ctx.clearRect(0, 0, 800, 600);
    }
  }
}
