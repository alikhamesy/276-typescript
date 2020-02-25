import Coord from "./Coord"

export default class AtomicCell{
	location: Coord
	open: Boolean
	constructor(x: number, y: number){
		this.location = new Coord(x, y)
	}

	isOpen(): Boolean {
		return this.open
	}
}
