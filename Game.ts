import Character from "./Character"
import Entity from "./Entity"
import GameState, {GAME_STATES} from './GameState'
import UI from './UI'
import Enemy from "./Enemy"
import Coord from "./Coord"
import GameMap from './GameMap'
import MainCharacter from "./MainCharacter"

export default class Game{
  gameState: GameState
  gameMap: GameMap
  userInterface: UI
  init(): void {
    
  }
}