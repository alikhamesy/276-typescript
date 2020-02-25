import Entity from "./Entity";
import HitBox from "./HitBox";
import DirectionVector, { DIRECTIONS } from './Direction'
import Vector from "./Vector";

export default class Character extends Entity{
  isMoving: boolean
  moveDirection: DirectionVector
  constructor(x: number, y: number){
    super(x, y, new HitBox())
  }
  update(): void {
    if(this.isMoving) this.location.add(this.moveDirection)

  }
  move(direction: DIRECTIONS){
    this.isMoving = true
    this.moveDirection = new DirectionVector(direction)
  }
}