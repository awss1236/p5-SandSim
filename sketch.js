const ScrW=400,
      ScrH=400,
      CellSize=10,
      CellCols=ScrW/CellSize,
      CellRows=ScrH/CellSize;

let B;
function setup() {
  createCanvas(400, 400);
  B=new Board();
  B.SetCell(2,2,new Sand(2,2))
}

function draw() {
  background(220);
  B.Render();
  B.Update();
}