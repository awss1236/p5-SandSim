class Sand{
	constructor(_x,_y){
		this.type="sand";
		this.x=_x;
		this.y=_y;
	}
	Render(){
		fill(220,190,140)
		rect(this.x*CellSize,this.y*CellSize,CellSize,CellSize);
	}
	Update(){
		if(this.y>=CellCols){
			this.y=CellCols;
			return;
		}
		if(B.GetCell(this.x,this.y+1)!=new Sand()&&B.GetCell(this.x,this.y+1)!="edge"){
			this.y++;
			B.SetCell(this.x,this.y+1,this);
		}
		else{
			B.SetCell(this.x,this.y,this);
		}
	}
}