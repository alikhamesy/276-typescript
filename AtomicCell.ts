import Coord from "./Coord"

export default class AtomicCell{
  location: Coord
  open: Boolean
  constructor(startLocation: Coord){
    this.location = startLocation
  }

  isOpen(): Boolean {
    return this.open
  }
}
