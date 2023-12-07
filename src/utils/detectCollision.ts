import { Entity, CollisionResult } from "../types";

// export const detectCollision = (
//   entityA: Entity,
//   entites: Entity[]
// ): boolean => {
//   const leftA = entityA.x;
//   const rightA = entityA.x + entityA.width;
//   const topA = entityA.y;
//   const bottomA = entityA.y + entityA.height;

//   const leftB = entityB.x;
//   const rightB = entityB.x + entityB.width;
//   const topB = entityB.y;
//   const bottomB = entityB.y + entityB.height;

//   if (leftA < rightB && rightA > leftB && topA < bottomB && bottomA > topB) {
//     return true;
//   }

//   return false;
// };

export const detectCollision = (
  snake: Entity,
  obstacles: Entity[]
): CollisionResult => {
  for (const obstacle of obstacles) {
    const {
      height: snakeHeight,
      width: snakeWidth,
      x: snakeX,
      y: snakeY,
    } = snake;

    const leftObstacle = obstacle.x;
    const rightObstacle = obstacle.x + obstacle.width;
    const topObstacle = obstacle.y;
    const bottomObstacle = obstacle.y + obstacle.height;

    if (
      snakeX < rightObstacle &&
      snakeX + snakeWidth > leftObstacle &&
      snakeY < bottomObstacle &&
      snakeY + snakeHeight > topObstacle
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
