import { TSnakeBody, Entity, Directions } from "../types";
import { detectCollision } from "../utils/detectCollision";

export class Snake {
  private body: TSnakeBody;
  private direction: Directions;
  private headPosition: Entity;

  constructor(initialX: number, initialY: number) {
    this.body = [{ x: initialX, y: initialY, height: 20, width: 20 }];
    this.direction = Directions.right;
    this.headPosition = { x: initialX, y: initialY, height: 20, width: 20 };
  }

  public move(): void {
    switch (this.direction) {
      case Directions.up:
        this.headPosition.y -= 1;
        break;
      case Directions.down:
        this.headPosition.y += 1;
        break;
      case Directions.left:
        this.headPosition.x -= 1;
        break;
      case Directions.right:
        this.headPosition.x += 1;
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

  public changeDirection(newDirection: Directions): void {
    if (Directions[newDirection]) {
      this.direction = Directions[newDirection] as Directions;
    } else {
      console.error("Invalid direction:", newDirection);
    }
  }

  // public checkCollision(): boolean {
  //   for (let i = 1; i < this.body.length; i++) {
  //     if (detectCollision(this.body[0], this.body)) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  public getPosition(): Entity[] {
    return this.body;
  }

  public render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "green";

    this.body.forEach((segment) => {
      ctx.fillRect(segment.x, segment.y, segment.width, segment.height);
    });
  }
}
