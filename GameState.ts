export enum GAME_STATES{
  RUNNING,
  PAUSED,
  MAIN_MENU
}

export default class GameState{
  static state: GAME_STATES
  static instance: GameState = new GameState()
  static progressBar: number
  private constructor(){}
  static setState(newState: GAME_STATES): void{
    this.state = newState
  }
  static updateProgressBar(newProgress: number): void{
    this.progressBar = newProgress
  }
}