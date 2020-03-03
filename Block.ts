import AtomicCell from './AtomicCell';

export default class Block extends AtomicCell{
  constructor(x: number, y: number){
    super(x, y, false)
  }
}