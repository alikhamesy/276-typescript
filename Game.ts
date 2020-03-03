import GameState, {GAME_STATES} from './GameState'
import UI from './UI'
import World from "./World"

export default class Game{
  gameState: GameState
  world: World
  userInterface: UI
  parent: HTMLDivElement
  init(): void {
    
    
  }
}