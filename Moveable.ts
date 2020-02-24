import DirectionVector from "./Direction";

export default interface Moveable {
  isMoving: boolean;
  moveDirection: DirectionVector;
  update(): void
}