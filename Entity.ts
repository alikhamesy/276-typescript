import AtomicCell from './AtomicCell'
import World from './World'

export default abstract class Entity extends AtomicCell {
  world: World
  constructor(x: number, y: number, world: World){
    super(x, y, true)
    this.world = world
  }
  abstract onCollision(Entity): void
}