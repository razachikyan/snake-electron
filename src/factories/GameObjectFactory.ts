// factories/GameObjectFactory.ts
import { Snake } from "../models/Snake";
import { Food } from "../models/Food";
import { Obstacle } from "../models/Obstacle";
export class GameObjectFactory {
  createSnake(): Snake {
    // Create and return a Snake object
    return new Snake(0, 0);
  }

  createFood(): Food {
    // Create and return a Food object
    return new Food();
  }

  createObstacle(count: number): Obstacle[] {
    const obstacles: Obstacle[] = [];
    for (let i = 0; i < count; ++i) {
      const position = Math.random() * 800;
      const size = (Math.random() * 10 + 1) * 10;

      obstacles.push(new Obstacle(position, position, size, size));
    }
    // Create and return an Obstacle object
    // return new Obstacle()
    return obstacles;
  }
}
