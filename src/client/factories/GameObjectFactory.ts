// factories/GameObjectFactory.ts
import { Snake } from "../models/Snake";
import { Food } from "../models/Food";
import { Obstacle } from "../models/Obstacle";
import { Board } from "../models/Board";
export class GameObjectFactory {
  static createSnake(): Snake {
    return Snake.getInstance(200, 200);
  }

  static createFood(): Food {
    return new Food();
  }
  static createBoard(width: number, height: number): Board {
    return new Board(width, height);
  }

  static createObstacle(count: number): Obstacle[] {
    const obstacles: Obstacle[] = [];
    for (let i = 0; i < count; ++i) {
      const position = Math.random() * 700 + 50;
      const width = (Math.ceil(Math.random() * 10) + 1) * 5;
      const height = (Math.ceil(Math.random() * 10) + 1) * 20;

      obstacles.push(new Obstacle(position, position, width, height));
    }
    return obstacles;
  }
}
