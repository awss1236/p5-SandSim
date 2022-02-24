function Empty2DArray(rows,cols){
	let out=new Array(rows)
	for(let i=0;i<rows;i++){
		out[i]=new Array(cols)
	}
	return out;
}

class Board{
	constructor(){
		this.grid=Empty2DArray(CellRows,CellCols);//current grid
		this.ngrid=Empty2DArray(CellRows,CellCols);//next grid
	}

	Render(){
		for(let i=0;i<CellRows;i++){
			for(let j=0;j<CellCols;j++){
				if(this.grid[i][j]!=undefined){
					//console.log('defined');
					this.grid[i][j].Render();
				}
				else{
					//console.log('undefined')
					fill(255);
					rect(i*CellSize,j*CellSize,CellSize,CellSize);
				}
			}
		}
	}

	Update(){
		for(let i=0;i<CellRows;i++){
			for(let j=0;j<CellCols;j++){
				if(this.grid[i][j]!=undefined)
					this.grid[i][j].Update();
			}
			this.grid[i]=this.ngrid[i].slice(0);
		}
		this.ngrid=Empty2DArray(CellRows,CellCols);
	}
	
	SetCell(r,c,cell){
		this.ngrid[r][c]=cell;
	}
	GetCell(r,c){
		if(r>=CellRows||r<0||c<0||c>=CellCols){
			return "edge";
		}
		return this.grid[r][c];
	}
}