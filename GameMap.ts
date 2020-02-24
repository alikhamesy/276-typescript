import Character from "./Character"
import { DIRECTIONS } from "./Direction"
import Entity from "./Entity"
import MainCharacter from "./MainCharacter"

export default class GameMap{
  mainCharacter: MainCharacter
  entities: Entity[]
  parent: HTMLDivElement
  init(): void{
    window.addEventListener("keydown", this.mainCharacter.onKeyDown)
    window.addEventListener("keyup", this.mainCharacter.onKeyUp)
  }
}