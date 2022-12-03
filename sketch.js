
var jaozin

var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12
var edge
var count
function setup() {
createCanvas(400,400)    

edge = createEdgeSprites()
wall1 = createSprite(10,70,200 ,10)

wall2 = createSprite (150,10,10,200)

wall3 = createSprite (220,111,50,10)

wall4 = createSprite (250, 150, 10, 200)

wall5 = createSprite (400, 150, 150, 10)

wall6 = createSprite (10, 170, 470, 10)

wall7 = createSprite (370, 230, 10,150)

wall8 = createSprite (360, 300, 570, 10)

wall9 = createSprite (80,300, 10,100 )

wall10 =createSprite (350, 400,10,85)

wall11 = createSprite (300, 330, 10, 50)

wall12 = createSprite (250, 400, 10, 85 )

jaozin = createSprite (20, 20, 20,20)

fim = createSprite (380, 380, 20, 20)
}

function draw() {
    background('blue')
jaozin.collide(edge)
if (keyDown('right')) {
jaozin.x = jaozin.x + 2

}

if (keyDown('left')) {
jaozin.x = jaozin.x - 2  

}


if (keyDown('down')) {
jaozin.y = jaozin.y + 2


}

if (keyDown('up')) {
jaozin.y = jaozin.y -2

}


if (

    jaozin.isTouching(wall1) ||
jaozin.isTouching(wall2) ||
jaozin.isTouching(wall3) ||
jaozin.isTouching(wall4) ||
jaozin.isTouching(wall5) ||
jaozin.isTouching(wall6) ||
jaozin.isTouching(wall7) ||
jaozin.isTouching(wall8) ||
jaozin.isTouching(wall9) ||
jaozin.isTouching(wall10) ||
jaozin.isTouching(wall11) ||
jaozin.isTouching(wall12) 
){
jaozin.x = 20

jaozin.y = 20





}


   
if (

    jaozin.isTouching(fim) 

){jaozin.x = 20

jaozin.y = 20

}



drawSprites()


}