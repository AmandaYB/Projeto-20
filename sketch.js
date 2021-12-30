var imgFundo;
var gato;
var rato;
var gato1, gato2;
var rato1, rato2;
var gato3

function preload() {
    //carregue as imagens aqui
    imgFundo = loadImage("garden.png");
    gato1 = loadAnimation("cat1.png");
    gato2 = loadAnimation("cat4.png");
    gato3 = loadAnimation("cat2.png", "cat3.png");
    rato1 = loadAnimation("mouse1.png");
    rato2 = loadAnimation("mouse4.png");
    rato3 = loadAnimation("mouse2.png", "mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    gato = createSprite(870, 600);
    gato.addAnimation("deitado", gato1);
    gato.scale = 0.15; 

    rato = createSprite(200,600);
    rato.addAnimation("queijo", rato1);
    rato.scale = 0.1;
}

function draw() {

    background(imgFundo);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(gato.x - rato.x < (gato.width - rato.width)/2){
      gato.velocityX = 0;
      gato.addAnimation("gato2", gato2);
      gato.changeAnimation("gato2");
      gato.x = 300;
      gato.scale = 0.15;

      rato.addAnimation("rato2", rato2);
      rato.changeAnimation("rato2");
      rato.scale = 0.1;
    }

    drawSprites();
}


function keyPressed(){
  //Para mover e alterar a animação, escreva o código aqui
  if(keyCode === LEFT_ARROW){
  rato.addAnimation("ratoProvocando", rato3);
  rato.changeAnimation("ratoProvocando");
  rato.frameDelay = 25;

  gato.addAnimation("gatoAndando", gato3);
  gato.changeAnimation("gatoAndando");
  gato.velocityX = -4;
  }



}
