import { Entity } from "../types";

export const detectCollision = (entityA: Entity, entityB: Entity): boolean => {
  const leftA = entityA.x;
  const rightA = entityA.x + entityA.width;
  const topA = entityA.y;
  const bottomA = entityA.y + entityA.height;

  const leftB = entityB.x;
  const rightB = entityB.x + entityB.width;
  const topB = entityB.y;
  const bottomB = entityB.y + entityB.height;

  if (leftA < rightB && rightA > leftB && topA < bottomB && bottomA > topB) {
    return true;
  }

  return false;
};
