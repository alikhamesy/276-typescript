import { Position } from "./Vector"

export default class AtomicCell{
  position: Position
  open: Boolean

  constructor(x: number, y: number, passable: boolean){
    this.position = new Position(x, y)
    this.open = passable
  }

  isOpen(): Boolean {
    return this.open
  }
}
