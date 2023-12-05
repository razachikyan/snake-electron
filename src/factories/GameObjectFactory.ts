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
    return new Food()
  }

  createObstacle(): Obstacle {
    // Create and return an Obstacle object
    return new Obstacle()
  }
}
