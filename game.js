var scorex = 0;
var scorey = 0;
var count=0;

function win(){
    var namex = document.getElementById("namex").value;
    var namey = document.getElementById("namey").value;
    if(namex == ""){
        namex = "X";
    }
    if(namey == ""){
        namey = "O";
    }
    if(count%2==0){
        document.getElementById("result").innerHTML=(namey + " Wins");
        scorey ++ ;
        document.getElementById("scorey").innerHTML = scorey;
    }
    else{
        document.getElementById("result").innerHTML=(namex + " Wins");
        scorex ++ ;
        document.getElementById("scorex").innerHTML = scorex;
    }
        document.getElementById("box1").disabled = "true";
        document.getElementById("box2").disabled = "true";
        document.getElementById("box3").disabled = "true";
        document.getElementById("box4").disabled = "true";
        document.getElementById("box5").disabled = "true";
        document.getElementById("box6").disabled = "true";
        document.getElementById("box7").disabled = "true";
        document.getElementById("box8").disabled = "true";
        document.getElementById("box9").disabled = "true";
}

function check(){
    var a = document.getElementById("box1").value;
    var b = document.getElementById("box2").value;
    var c = document.getElementById("box3").value;
    var d = document.getElementById("box4").value;
    var e = document.getElementById("box5").value;
    var f = document.getElementById("box6").value;
    var g = document.getElementById("box7").value;
    var h = document.getElementById("box8").value;
    var i = document.getElementById("box9").value;
    if(count>4){
        if(a == b && b == c && (a != " " || b != " " || c!= " ")){
            win();
        }
        else if(d == e && e == f && (d != " " || e != " " || f!= " ")){
            win();
        }
        else if(g == h && h == i && (g != " " || h != " " || i!= " ")){
            win();
        }
        else if(a == d && d == g && (a != " " || d != " " || g!= " ")){
            win();
        }
        else if(b == e && e == h && (b != " " || e != " " || h!= " ")){
            win();
        }
        else if(c == f && f == i && (c != " " || f != " " || i!= " ")){
            win();
        }
        else if(a == e && e == i && (a != " " || e != " " || i!= " ")){
            win();
        }
        else if(c == e && e == g && (c != " " || e != " " || g!= " ")){
            win();
        }
        else if(count == 9)
            document.getElementById("result").innerHTML=("It's a Draw");
        
    }
}
function fill1(){
    if(count%2==0){
        document.getElementById("box1").value="X";
        document.getElementById("box1").disabled="true";
    }
    else{
        document.getElementById("box1").value="O";
        document.getElementById("box1").disabled="true";
    }
count++;
console.log(count);
    check();
}
function fill2(){
    if(count%2==0){
        document.getElementById("box2").value="X";
        document.getElementById("box2").disabled="true";
    }
    else{
        document.getElementById("box2").value="O";
        document.getElementById("box2").disabled="true";
    }    
count++;
console.log(count);
    check();
}
function fill3(){
    if(count%2==0){
        document.getElementById("box3").value="X";
        document.getElementById("box3").disabled="true";
    }
    else{
        document.getElementById("box3").value="O";
        document.getElementById("box3").disabled="true";
    }    
count++;
console.log(count);
    check();
}
function fill4(){
    if(count%2==0){
        document.getElementById("box4").value="X";
        document.getElementById("box4").disabled="true";
    }
    else{
        document.getElementById("box4").value="O";
        document.getElementById("box4").disabled="true";
    }    
count++;
console.log(count);
    check();
}
function fill5(){
    if(count%2==0){
        document.getElementById("box5").value="X";
        document.getElementById("box5").disabled="true";
    }
    else{
        document.getElementById("box5").value="O";
        document.getElementById("box5").disabled="true";
    }    
count++;
console.log(count);
    check();
}
function fill6(){
    if(count%2==0){
        document.getElementById("box6").value="X";
        document.getElementById("box6").disabled="true";
    }
    else{
        document.getElementById("box6").value="O";
        document.getElementById("box6").disabled="true";
    }    
count++;
console.log(count);
    check();
}
function fill7(){
    if(count%2==0){
        document.getElementById("box7").value="X";
        document.getElementById("box7").disabled="true";
    }
    else{
        document.getElementById("box7").value="O";
        document.getElementById("box7").disabled="true";
    }    
count++;
console.log(count);
    check();
}
function fill8(){
    if(count%2==0){
        document.getElementById("box8").value="X";
        document.getElementById("box8").disabled="true";
    }
    else{
        document.getElementById("box8").value="O";
        document.getElementById("box8").disabled="true";
    }    
count++;
console.log(count);
    check();
}
function fill9(){
    if(count%2==0){
        document.getElementById("box9").value="X";
        document.getElementById("box9").disabled="true";
    }
    else{
        document.getElementById("box9").value="O";
        document.getElementById("box9").disabled="true";
    }    
count++;
console.log(count);
    check();
}

function resetboard(){
    document.getElementById("box1").value = " ";
    document.getElementById("box2").value = " ";
    document.getElementById("box3").value = " ";
    document.getElementById("box4").value = " ";
    document.getElementById("box5").value = " ";
    document.getElementById("box6").value = " ";
    document.getElementById("box7").value = " ";
    document.getElementById("box8").value = " ";
    document.getElementById("box9").value = " ";
    document.getElementById("box1").disabled = false;
    document.getElementById("box2").disabled = false;
    document.getElementById("box3").disabled = false;
    document.getElementById("box4").disabled = false;
    document.getElementById("box5").disabled = false;
    document.getElementById("box6").disabled = false;
    document.getElementById("box7").disabled = false;
    document.getElementById("box8").disabled = false;
    document.getElementById("box9").disabled = false;
    count = 0;
}