import AtomicCell from './AtomicCell'
import HitBox from './HitBox'

export default class Entity extends AtomicCell {
  hitBox: HitBox
  constructor(x: number, y: number, hitBox: HitBox){
    super(x, y)
    this.hitBox = hitBox
  }
}