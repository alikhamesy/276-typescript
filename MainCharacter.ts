import Moveable from './Moveable'
import Character from './Character'
import DirectionVector, { DIRECTIONS } from './Direction'

export default class MainCharacter extends Character implements Moveable{
  isMoving: boolean = false
  moveDirection: DirectionVector
  depressionMeter: number
  onKeyDown(event: KeyboardEvent): void{
    this.isMoving = true
    switch(event.keyCode){
      case 87: // w
        this.moveDirection = new DirectionVector(DIRECTIONS.UP)
        break
        case 68: // d
        this.moveDirection = new DirectionVector(DIRECTIONS.RIGHT)
        break
      case 83: //s
        this.moveDirection = new DirectionVector(DIRECTIONS.DOWN)
        break
      case 65: //a
        this.moveDirection = new DirectionVector(DIRECTIONS.LEFT)
        break
    }
  }
  onKeyUp(event: KeyboardEvent): void{
    this.isMoving = false
  }
  update(): void{
    if(this.isMoving) this.location.add(this.moveDirection)
  }
}