var gridBuffer
var mainCanvas
var baseGridValue = 600/40.0;
var onOrnot = false;
var del = false;
var c = new Array(27);
var j = 0;
function preload(){
    img = loadImage('4.png');
    img2 = loadImage('3.png');
}
function setup() {
    //creates canvas
    mainCanvas = createCanvas(1200,800);
    mainCanvas.position(200,0);
    background(0);
    push();
    translate(100, 100);
    image(img,-150,-120);
    image(img2,100,-190);
    drawFunctionIntervalAlter("(((10(x+30)^2)*((x+27)^3)*(x+26))/(x+25))");
    drawFunctionIntervalAlter("(2(x+8)*(x+3)^2*(x-1)*(x-5)*(x-7)^2)/200");
    drawFunctionIntervalAlter("((x+15)*(x+20)^3)");
    drawFunctionIntervalAlter("-(x-11)*(1/2(x)-8.5)*(1/2(x)-10)^2*(1/2(x)-5)^2");
    drawFunctionInterval("30cos(x)-100");
    drawFunctionInterval("60sin(x)+200");
    drawFunctionInterval("x^3");
    drawFunctionInterval("35cos(x)+9.3x");
    drawFunctionIntervalSin("100sin((x^2)-(x^3)+3)");
    for (var i = 0; i < c.length; i++){
        c[i] = color('red');
    }
    pop();
}
//native function, runs repeatedly and does not need to be called
function draw() {
    noStroke();
    fill(255);
    rect(0,0,1200,100);
    rect(0,0,100, 800);
    rect(0,700,1200,100);
    rect(1100,0, 100,800);
    
    stroke(0);
    strokeWeight(2);
    fill(c[j]);
    j++;
    rect(80,240,20,20);
    fill(c[j]);
    j++;
    rect(80,350,20,20);
    fill(c[j]);
    j++;
    rect(80,470,20,20);
    fill(c[j]);
    j++;
    rect(80,500,20,20);
    fill(c[j]);
    j++;
    fill(c[j]);
    j++;
    rect(100,700,20,20);
    fill(c[j]);
    j++;
    rect(127,700,20,20);
    fill(c[j]);
    j++;
    rect(200,700,20,20);
    fill(c[j]);
    j++;
    rect(223,700,20,20);
    fill(c[j]);
    j++;
    rect(468,700,20,20);
    fill(c[j]);
    j++;
    rect(492,700,20,20);
    fill(c[j]);
    j++;
    rect(565,700,20,20);
    fill(c[j]);
    j++;
    rect(715,700,20,20);
    fill(c[j]);
    j++;
    rect(910,700,20,20);
    fill(c[j]);
    j++;
    rect(1100,500,20,20);
    fill(c[j]);
    j++;
    rect(1100,330,20,20);
    fill(c[j]);
    j++;
    rect(1100,300,20,20);
    fill(c[j]);
    j++;
    rect(1100,130,20,20);
    fill(c[j]);
    j++;
    rect(215,80,20,20);
    fill(c[j]);
    j++;
    rect(240,80,20,20);
    fill(c[j]);
    j++;
    rect(385,80,20,20);
    fill(c[j]);
    j++;
    rect(470,80,20,20);
    fill(c[j]);
    j++;
    rect(495,80,20,20);
    fill(c[j]);
    j++;
    rect(530,80,20,20);
    fill(c[j]);
    j++;
    rect(690,80,20,20);
    fill(c[j]);
    j++;
    rect(715,80,20,20);
    fill(c[j]);
    j++;
    rect(1045,80,20,20);
    j = 0;
    if (c[0].toString() == color(0,255,0) && c[17].toString() == color(0,255,0)){
        alert("BOMBBBB!");
    }
    if (c[3].toString() == color(0,255,0) && c[14].toString() == color(0,255,0)){
        alert("BOMBBBB!");
    }
    if (c[5].toString() == color(0,255,0) && c[26].toString() == color(0,255,0)){
        alert("BOMBBBB!");
    }
    if (c[6].toString() == color(0,255,0) && c[7].toString() == color(0,255,0)){
        alert("BOMBBBB!");
    }
    if (c[8].toString() == color(0,255,0) && c[18].toString() == color(0,255,0)){
        alert("BOMBBBB!");
    }
    if (c[9].toString() == color(0,255,0) && c[21].toString() == color(0,255,0)){
        alert("BOMBBBB!");
    }
    if (c[10].toString() == color(0,255,0) && c[24].toString() == color(0,255,0)){
        alert("BOMBBBB!");
    }
    if (c[12].toString() == color(0,255,0) && c[13].toString() == color(0,255,0)){
        alert("BOMBBBB!");
    }
    if (c[25].toString() == color(0,255,0) && c[23].toString() == color(0,255,0)){
        alert("BOMBBBB!");
    }
    if (c[19].toString() == color(0,255,0) && c[20].toString() == color(0,255,0)){
        alert("BOMBBBB!");
    }
    if (c[1].toString() == color(0,255,0) && c[11].toString() == color(0,255,0) && c[22].toString() == color(0,255,0) && c[15].toString() == color(0,255,0) && c[2].toString() == color(0,255,0) && c[16].toString() == color(0,255,0)){
        alert("password");
    }
        
}
function drawFunctionIntervalAlter(equation){

    //set stroke weight to 5 pixels
    noFill();
    strokeWeight(4);
    //get and set the colour of the function that will be drawn
    stroke(0,255,0);
    //draws the function interval
    //push();
    beginShape();
    //translate(50,0);
    for (var i = -500; i <= 500; i+=1){
        vertex(i+500,-findYCoordinate(i/baseGridValue, equation)+300);
    }
    endShape();
    //pop();
}
function drawFunctionInterval(equation){

    //set stroke weight to 5 pixels
    noFill();
    strokeWeight(4);
    //get and set the colour of the function that will be drawn
    stroke(255,0,0);
    //draws the function interval
    beginShape();
    for (var i = -500; i <= 500; i+=1){
        vertex(i+500,-findYCoordinate(i/baseGridValue, equation)+300);
    }
    endShape();
}
function drawFunctionIntervalSin(equation){

    //set stroke weight to 5 pixels
    noFill();
    strokeWeight(4);
    //get and set the colour of the function that will be drawn
    stroke(255,0,0);
    //draws the function interval
    beginShape();
    for (var i = -500; i <= 500; i+=1){
        vertex(i+500,-findYCoordinate(i/baseGridValue/20, equation)+300);
    }
    endShape();
}
function findYCoordinate(xC, equation){
    var func = equation;
    //remove all space
    func = func.replace(/\s/g,'');
    //change x to (x) to prevent certain bug splat
    func = func.replace(/x/g, "(x)");
    //replace the char x in the string with the value of xC
    func = func.replace(/x/g, xC);
    //calculate the Y value of the string equation
    return math.eval(func);
}
function mouseReleased() {
    if (mouseX <= 100 && mouseX >= 80 && mouseY <= 260 && mouseY >=240){
            if (c[0].toString() == color(0,255,0)){
                c[0] = color('red');
            }
            else{
            c[0] = color(0,255,0);
            }
     }    
    if (mouseX <= 100 && mouseX >= 80 && mouseY <= 370 && mouseY >= 350){
            if (c[1].toString() == color(0,255,0)){
                c[1] = color('red');
            }
            else{
            c[1] = color(0,255,0);
            }
     }  
    if (mouseX <= 100 && mouseX >= 80 && mouseY <= 490 && mouseY >= 470){
            if (c[2].toString() == color(0,255,0)){
                c[2] = color('red');
            }
            else{
            c[2] = color(0,255,0);
            }
     }
    if (mouseX <= 100 && mouseX >= 80 && mouseY <= 520 && mouseY >= 500){
            if (c[3].toString() == color(0,255,0)){
                c[3] = color('red');
            }
            else{
            c[3] = color(0,255,0);
            }
     }
    if (mouseX <= 120 && mouseX >= 100 && mouseY <= 720 && mouseY >= 700){
            if (c[5].toString() == color(0,255,0)){
                c[5] = color('red');
            }
            else{
            c[5] = color(0,255,0);
            }
     }
    if (mouseX <= 147 && mouseX >= 120 && mouseY <= 720 && mouseY >= 700){
            if (c[6].toString() == color(0,255,0)){
                c[6] = color('red');
            }
            else{
            c[6] = color(0,255,0);
            }
    }
    if (mouseX <= 220 && mouseX >= 200 && mouseY <= 720 && mouseY >= 700){
            if (c[7].toString() == color(0,255,0)){
                c[7] = color('red');
            }
            else{
            c[7] = color(0,255,0);
            }
    }
    if (mouseX <= 243 && mouseX >= 220 && mouseY <= 720 && mouseY >= 700){
            if (c[8].toString() == color(0,255,0)){
                c[8] = color('red');
            }
            else{
            c[8] = color(0,255,0);
            }
    }
    if (mouseX <= 488 && mouseX >= 468 && mouseY <= 720 && mouseY >= 700){
            if (c[9].toString() == color(0,255,0)){
                c[9] = color('red');
            }
            else{
            c[9] = color(0,255,0);
            }
    }
    if (mouseX <= 512 && mouseX >= 492 && mouseY <= 720 && mouseY >= 700){
            if (c[10].toString() == color(0,255,0)){
                c[10] = color('red');
            }
            else{
            c[10] = color(0,255,0);
            }
    }
    if (mouseX <= 585 && mouseX >= 565 && mouseY <= 720 && mouseY >= 700){
            if (c[11].toString() == color(0,255,0)){
                c[11] = color('red');
            }
            else{
            c[11] = color(0,255,0);
            }
    }
    if (mouseX <= 735 && mouseX >= 715 && mouseY <= 720 && mouseY >= 700){
            if (c[12].toString() == color(0,255,0)){
                c[12] = color('red');
            }
            else{
            c[12] = color(0,255,0);
            }
    }
    if (mouseX <= 930 && mouseX >= 910 && mouseY <= 720 && mouseY >= 700){
            if (c[13].toString() == color(0,255,0)){
                c[13] = color('red');
            }
            else{
            c[13] = color(0,255,0);
            }
    }
    if (mouseX <= 1120 && mouseX >= 1100 && mouseY <= 520 && mouseY >= 500){
            if (c[14].toString() == color(0,255,0)){
                c[14] = color('red');
            }
            else{
                c[14] = color(0,255,0);
            }
    }
    if (mouseX <= 1120 && mouseX >= 1100 && mouseY <= 350 && mouseY >= 330){
            if (c[15].toString() == color(0,255,0)){
                c[15] = color('red');
            }
            else{
                c[15] = color(0,255,0);
            }
    }
    if (mouseX <= 1120 && mouseX >= 1100 && mouseY <= 320 && mouseY >= 300){
            if (c[16].toString() == color(0,255,0)){
                c[16] = color('red');
            }
            else{
                c[16] = color(0,255,0);
            }
    }
    if (mouseX <= 1120 && mouseX >= 1100 && mouseY <= 150 && mouseY >= 130){
            if (c[17].toString() == color(0,255,0)){
                c[17] = color('red');
            }
            else{
                c[17] = color(0,255,0);
            }
    }
    if (mouseX <= 235 && mouseX >= 215 && mouseY <= 100 && mouseY >= 80){
            if (c[18].toString() == color(0,255,0)){
                c[18] = color('red');
            }
            else{
                c[18] = color(0,255,0);
            }
    }
    if (mouseX <= 260 && mouseX >= 240 && mouseY <= 100 && mouseY >= 80){
            if (c[19].toString() == color(0,255,0)){
                c[19] = color('red');
            }
            else{
                c[19] = color(0,255,0);
            }
    }
    if (mouseX <= 405 && mouseX >= 385 && mouseY <= 100 && mouseY >= 80){
            if (c[20].toString() == color(0,255,0)){
                c[20] = color('red');
            }
            else{
                c[20] = color(0,255,0);
            }
    }
    if (mouseX <= 490 && mouseX >= 470 && mouseY <= 100 && mouseY >= 80){
            if (c[21].toString() == color(0,255,0)){
                c[21] = color('red');
            }
            else{
                c[21] = color(0,255,0);
            }
    }
    if (mouseX <= 515 && mouseX >= 495 && mouseY <= 100 && mouseY >= 80){
            if (c[22].toString() == color(0,255,0)){
                c[22] = color('red');
            }
            else{
                c[22] = color(0,255,0);
            }
    }
    if (mouseX <= 550 && mouseX >= 530 && mouseY <= 100 && mouseY >= 80){
            if (c[23].toString() == color(0,255,0)){
                c[23] = color('red');
            }
            else{
                c[23] = color(0,255,0);
            }
    }
    if (mouseX <= 710 && mouseX >= 690 && mouseY <= 100 && mouseY >= 80){
            if (c[24].toString() == color(0,255,0)){
                c[24] = color('red');
            }
            else{
                c[24] = color(0,255,0);
            }
    }
    if (mouseX <= 735 && mouseX >= 715 && mouseY <= 100 && mouseY >= 80){
            if (c[25].toString() == color(0,255,0)){
                c[25] = color('red');
            }
            else{
                c[25] = color(0,255,0);
            }
    }
    if (mouseX <= 1065 && mouseX >= 1045 && mouseY <= 100 && mouseY >= 80){
            if (c[26].toString() == color(0,255,0)){
                c[26] = color('red');
            }
            else{
                c[26] = color(0,255,0);
            }
    }
}   
