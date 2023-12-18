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
        const range = Math.random() < 0.5 ? [0, 200] : [300, 500]; // Randomly choose between the two ranges
        const position =
          Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
        const width = (Math.ceil(Math.random() * 4) + 1) * 20;
      const height = (Math.ceil(Math.random() * 10) + 1) * 20;

      obstacles.push(new Obstacle(position, position, width, height));
    }
    return obstacles;
  }
}
