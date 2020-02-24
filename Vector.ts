export default class Vector{
  x: number
  y: number
  constructor(x: number, y: number){
    this.x = x
    this.y = y
  }

  add(v: Vector): void{
    this.x += v.x
    this.y += v.x
  }
}