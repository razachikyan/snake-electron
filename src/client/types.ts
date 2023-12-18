export type TSnakeBody = Array<Entity>;

export enum Directions {
  up = "up",
  right = "right",
  down = "down",
  left = "left",
}

export interface Entity {
  x: number;
  y: number;
  width: number;
  height: number;
  type?: "snake" | "food" | "obstacle";
}

export interface CollisionResult {
  collision: boolean;
  action: "grow" | "die" | "none";
}
