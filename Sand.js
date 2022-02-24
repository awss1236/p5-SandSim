class Sand extends Air{
	constructor(_x,_y){
		super(_x,_y)
		this.type="sand";
		this.c=color(220,190,140)
	}

	Update(){
		if(this.y>=CellCols){
			this.y=CellCols;
			return;
		}
		console.log(B.GetCell(this.x,this.y+1))
		if(B.GetCell(this.x,this.y+1)&&B.GetCell(this.x,this.y+1).type!="sand"){

			this.y++;
			B.SetCell(this.x,this.y+1,this);
		}
		else{
			B.SetCell(this.x,this.y,this);
		}
	}
}