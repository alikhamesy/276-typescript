import AtomicCell from './AtomicCell'
import HitBox from './HitBox'
import Coord from './Coord'

export default class Entity extends AtomicCell {
  hitBox: HitBox
  constructor(startLocation: Coord, hitBox: HitBox){
    super(startLocation)
    this.hitBox = hitBox
  }
}