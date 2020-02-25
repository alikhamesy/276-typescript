import { DIRECTIONS } from "./Direction"
import Character from "./Character"
import Entity from "./Entity"

export default class Game{
  mainCharacter: Character
  entities: Entity[]
  init(): void{
    document.addEventListener("keydown", (event: KeyboardEvent) => {
      switch(event.keyCode){
        case 87: // w
          this.mainCharacter.move(DIRECTIONS.UP)
          break
        case 68: // d
          this.mainCharacter.move(DIRECTIONS.RIGHT)
          break
        case 83: //s
          this.mainCharacter.move(DIRECTIONS.DOWN)
          break
        case 65: //a
          this.mainCharacter.move(DIRECTIONS.LEFT)
          break
        case 27: //esc
          //pause menue
          break 

      }
    })
  }
}