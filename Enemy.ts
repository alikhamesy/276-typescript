import Entity from "./Entity"
import Coord from "./Coord"
import HitBox from "./HitBox"
import Moveable from "./Moveable"
import DirectionVector from "./Direction"

export default class Enemy extends Entity implements Moveable{
  isMoving: boolean
  moveDirection: DirectionVector
  constructor(startLocation: Coord){
    super(startLocation, new HitBox())
  }
  update(){

  }
}