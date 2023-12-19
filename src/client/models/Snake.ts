import { TSnakeBody, Entity, Directions } from "../types";
import { GameModel } from "./GameModel";

export class Snake extends GameModel {
  private body: TSnakeBody;
  private direction: Directions;
  private headPosition: Entity;
  private static instance: Snake | undefined;
  private colors: string[] = ["red", "yellow"];
  static a: string;

  private constructor(initialX: number, initialY: number) {
    super();
    this.body = [{ x: initialX, y: initialY, height: 20, width: 20 }];
    this.direction = Directions.right;
    this.headPosition = { x: initialX, y: initialY, height: 20, width: 20 };
  }

  public static getInstance(initialX: number, initialY: number): Snake {
    if (!this.instance) this.instance = new Snake(initialX, initialY);
    return this.instance;
  }

  public move(): void {
    switch (this.direction) {
      case Directions.up:
        if (this.headPosition.y === 0) {
          this.headPosition.y = (500);
          break;
        }
        this.headPosition.y -= 20;
        break;
      case Directions.down:
        if (this.headPosition.y === (500)) {
          this.headPosition.y = 0;
          break;
        }
        this.headPosition.y += 20;
        break;
      case Directions.left:
        if (this.headPosition.x === 0) {
          this.headPosition.x = (500);
          break;
        }
        this.headPosition.x -= 20;
        break;
      case Directions.right:
        if (this.headPosition.x === (500)) {
          this.headPosition.x = 0;
          break;
        }
        this.headPosition.x += 20;
        break;
      default:
        break;
    }

    const newHead = {
      x: this.headPosition.x,
      y: this.headPosition.y,
      height: 20,
      width: 20,
    };

    this.body.unshift(newHead);
    this.body.pop();
  }

  public grow(): void {
    const lastSegment = this.body[this.body.length - 1];
    const newSegment = {
      x: lastSegment.x,
      y: lastSegment.y,
      height: 20,
      width: 20,
    };
    this.body.push(newSegment);
  }

  public changeDirection(newDirection: keyof typeof Directions): void {
    if (Directions[newDirection]) {
      if (this.direction === Directions.down && newDirection === Directions.up)
        return;
      if (this.direction === Directions.up && newDirection === Directions.down)
        return;
      if (
        this.direction === Directions.left &&
        newDirection === Directions.right
      )
        return;
      if (
        this.direction === Directions.right &&
        newDirection === Directions.left
      )
        return;
      this.direction = Directions[newDirection] as Directions;
    } else {
      console.error("Invalid direction:", newDirection);
    }
  }

  public getHeadEntity(): Entity[] {
    return this.body.map((item) => ({ ...item, type: "snake" }));
  }

  public getBodyEntity(): Entity[] {
    return this.body.map((item) => ({ ...item, type: "obstacle" }));
  }

  public render(ctx: CanvasRenderingContext2D): void {
    this.body.forEach((segment, i) => {
      ctx.fillStyle = "black";
      if (i !== 0) ctx.fillStyle = this.colors[i % 2];
      ctx.fillRect(segment.x, segment.y, segment.width, segment.height);
    });
  }
}
