import { GameModel } from "../models/GameModel";

export class GameView {
  private ctx: CanvasRenderingContext2D | null;
  private models: Array<GameModel>;

  constructor(models: GameModel[]) {
    this.models = models;
    this.ctx = null;
  }

  public initCanvas(): void {
    const canvas = document.getElementById("cvs") as HTMLCanvasElement;
    this.ctx = canvas.getContext("2d");
  }

  public render(): void {
    if (this.ctx !== null) {
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
