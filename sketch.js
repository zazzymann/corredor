var solo
var personagem, personagem1
function preload(){
  //imagens pré-carregadas
  solo = loadImage("path.png");
  personagem1 = loadAnimation("Jake1.png","Jake2.png");
}

function setup(){
  createCanvas(400,400);
  //crie os sprites aqui
  solo2 = createSprite(200,350,10,10);
  solo2.addImage("ground",solo);
  solo2.velocityY =2
  
  personagem = createSprite(200,350,10,10);
  personagem.addAnimation("boy",personagem1);
  createEdgeSprites();
  
}

function draw() {
  background(0);
    if (solo2.y > 400) {
    solo2.y = solo2.width / 2;
  }
    personagem.x = mouseX;
  
  drawSprites();
}
