import Entity from "./Entity"

export default class Memory extends Entity{
  type: MEMORY_TYPE
  message: String
  isCoreMemory: boolean
}

export enum MEMORY_TYPE{
  GOOD,
  NEUTRAL,
  BAD
}