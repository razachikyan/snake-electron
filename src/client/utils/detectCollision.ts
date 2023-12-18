import { Snake } from "../models/Snake";
import { Entity, CollisionResult } from "../types";

export const detectCollision = (
  snake: Snake,
  obstacles: Entity[]
): CollisionResult => {
  obstacles.concat(snake.getBodyEntity().slice(1));
  const {
    height: snakeHeight,
    width: snakeWidth,
    x: snakeX,
    y: snakeY,
  } = snake.getHeadEntity()[0];
  for (const obstacle of obstacles) {
    const leftObstacle = obstacle.x;
    const rightObstacle = obstacle.x + obstacle.width;
    const topObstacle = obstacle.y;
    const bottomObstacle = obstacle.y + obstacle.height;

    if (
      snakeX <= rightObstacle &&
      snakeX + snakeWidth >= leftObstacle &&
      snakeY <= bottomObstacle &&
      snakeY + snakeHeight >= topObstacle
    ) {
      const action = obstacle.type
        ? obstacle.type === "food"
          ? "grow"
          : "die"
        : "die";

      return {
        collision: true,
        action: action,
      };
    }
  }

  // No collision with any obstacle
  return { action: "none", collision: false };
};
