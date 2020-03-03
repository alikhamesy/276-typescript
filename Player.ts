import Moveable from './Moveable'
import { Directions } from './Enums'
import Entity from './Entity'
import { moveKeys } from './settings'
import { Direction } from './Vector'
import Enemy from './Enemy'

export default class Player extends Entity implements Moveable{
  isMoving: boolean = false
  heading: Directions
  health: number = 0
  score: number = 0
  moveDict = {
    [moveKeys.up]: Directions.UP,
    [moveKeys.right]: Directions.RIGHT,
    [moveKeys.down]: Directions.DOWN,
    [moveKeys.left]: Directions.LEFT
  }
  onKeyDown(event: KeyboardEvent): void{
    this.heading = this.moveDict[event.keyCode]
    this.isMoving = !!this.heading;
  }
  onKeyUp(event: KeyboardEvent): void{
    this.isMoving = false
  }
  onCollision(target: Entity): void{
    switch(typeof target){
      case typeof Enemy:
    }
  }
  update(): void{
    if(this.isMoving) this.position.add(new Direction(this.heading));
  }
}