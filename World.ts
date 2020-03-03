import Block from "./Block";
import Entity from "./Entity";
import Player from "./Player";
import Door from "./Door";
import { Position } from "./Vector";

export default class World{
  cells: Block[][]
  entities: Entity[]
  player: Player
  time: number
  entrance: Door
  exit: Door
  

  constructor(){
    //create player
    this.player = new Player(1, 1, this)
    window.addEventListener("keydown", this.player.onKeyDown)
    window.addEventListener("keyup", this.player.onKeyUp)
    //create enemy
    //create map
    for(let i: number = 0; i < 8; i++){
      for(let j: number = 0; j < 8; j++){
        this.cells[i][j] = new Block(i, j);
      }
    }
    //create memories
    //create entrance
    //create exit

  }
  getCell(x: number, y: number): Block{
    return this.cells[x][y]
  }
  tick(deltaTime: number): void{
    this.time += deltaTime
  }
  getPlayerHealth(): number{
    return this.player.health
  }
  getTime(): number{
    return this.time
  }
  getPlayerPos(): Position{
    return this.player.position
  }
  calculateScore(): number{
    return this.player.score / this.time
  }
  requestMove(entity: Entity, x: number, y: number){
    this.entities.forEach(e => {
      if(e != entity && e.position === entity.position){
        e.onCollision(entity);
        entity.onCollision(e);
      }
    })
  }
  delete(entity: Entity): void{
    this.entities.forEach((e, i) => {
      if(e === entity){
        delete this.entities[i]
      }
    })
  }
}