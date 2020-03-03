import {Directions} from './Enums'

export default class Vector{
  x: number
  y: number
  constructor(x: number, y: number){
    this.x = x
    this.y = y
  }

  static add(u: Vector, v: Vector): Vector{
    return new Vector(u.x + v.x, u.y + v.y)
  }
}

export class Position extends Vector{
  constructor(x: number, y: number){
    super(x, y);
  }
}

export class Direction extends Vector{
  constructor(direction: Directions){
    super((direction == Directions.UP && 1) || (direction == Directions.DOWN && -1) || 0,
      (direction == Directions.RIGHT && 1) || (direction == Directions.LEFT && -1) || 0)
  }
}