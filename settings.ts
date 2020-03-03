export let moveKeys: IMoveKeys = {
  up: 87,
  right: 68,
  down: 83,
  left: 65
}

export let keyBindings: IKeyBindings = {
  moveKeys,
  pause: 27,
  interact: 69,
}

interface IKeyBindings {
  moveKeys: IMoveKeys,
  pause: number,
  interact: number
}

interface IMoveKeys {
  up: number,
  right: number,
  down: number,
  left: number
}