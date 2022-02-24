//does nothing. there is probably a better way of doing this
//but i m pretty sure this will work
class Air{
	constructor(_x,_y){
		this.type="air"
		this.c=color(220)
		this.x=_x
		this.y=_y
	}
	Update(){
		//air does Jackshit
	}
	Render(){
		fill(this.c)
		rect(this.x*CellSize,this.y*CellSize,CellSize,CellSize);
	}
}