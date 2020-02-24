import Coord from "./Coord";
import Vector from './Vector';

export enum DIRECTIONS {
  UP,
  RIGHT,
  DOWN,
  LEFT
}


export default class DirectionVector extends Vector{
  constructor(direction: DIRECTIONS){
    switch(direction){
      case DIRECTIONS.UP:
        super(0, 1)
        break;
      case DIRECTIONS.RIGHT:
        super(1, 0)
        break
      case DIRECTIONS.DOWN:
        super(0, -1)
        break
      case DIRECTIONS.LEFT:
        super(-1, 0)
        break
    }
  }
  
}