var scorex1 = 0;
var scorey1 = 0;
var count=0;

function win1(){
    var namex1 = document.getElementById("namepx").value;
    var namey1 = "CPU";
    if(namex1 == ""){
        namex1 = "X";
    }
    if(namey1 == ""){
        namey1 = "O";
    }
    if(count%2==0){
        document.getElementById("result1").innerHTML=(namey1 + " Wins");
        scorey1 ++ ;
        document.getElementById("scorey1").innerHTML = scorey1;
    }
    else{
        document.getElementById("result1").innerHTML=(namex1 + " Wins");
        scorex1 ++ ;
        document.getElementById("scorex1").innerHTML = scorex1;
    }
        document.getElementById("box11").disabled = "true";
        document.getElementById("box21").disabled = "true";
        document.getElementById("box31").disabled = "true";
        document.getElementById("box41").disabled = "true";
        document.getElementById("box51").disabled = "true";
        document.getElementById("box61").disabled = "true";
        document.getElementById("box71").disabled = "true";
        document.getElementById("box81").disabled = "true";
        document.getElementById("box91").disabled = "true";
}

function check1(){
    var a = document.getElementById("box11").value;
    var b = document.getElementById("box21").value;
    var c = document.getElementById("box31").value;
    var d = document.getElementById("box41").value;
    var e = document.getElementById("box51").value;
    var f = document.getElementById("box61").value;
    var g = document.getElementById("box71").value;
    var h = document.getElementById("box81").value;
    var i = document.getElementById("box91").value;
    if(count>4){
        if(a == b && b == c && (a != " " || b != " " || c!= " ")){
            win1();
        }
        else if(d == e && e == f && (d != " " || e != " " || f!= " ")){
            win1();
        }
        else if(g == h && h == i && (g != " " || h != " " || i!= " ")){
            win1();
        }
        else if(a == d && d == g && (a != " " || d != " " || g!= " ")){
            win1();
        }
        else if(b == e && e == h && (b != " " || e != " " || h!= " ")){
            win1();
        }
        else if(c == f && f == i && (c != " " || f != " " || i!= " ")){
            win1();
        }
        else if(a == e && e == i && (a != " " || e != " " || i!= " ")){
            win1();
        }
        else if(c == e && e == g && (c != " " || e != " " || g!= " ")){
            win1();
        }
        else if(count == 9)
            document.getElementById("result1").innerHTML=("It's a Draw");
        
    }
}
function fill11(){
    if(count%2==0){
        document.getElementById("box11").value="X";
        document.getElementById("box11").disabled="true";
    }
    else{
        document.getElementById("box11").value="O";
        document.getElementById("box11").disabled="true";
    }
count++;
console.log(count);
    check1();
}
function fill21(){
    if(count%2==0){
        document.getElementById("box21").value="X";
        document.getElementById("box21").disabled="true";
    }
    else{
        document.getElementById("box21").value="O";
        document.getElementById("box21").disabled="true";
    }    
count++;
console.log(count);
    check1();
}
function fill31(){
    if(count%2==0){
        document.getElementById("box31").value="X";
        document.getElementById("box31").disabled="true";
    }
    else{
        document.getElementById("box31").value="O";
        document.getElementById("box31").disabled="true";
    }    
count++;
console.log(count);
    check1();
}
function fill41(){
    if(count%2==0){
        document.getElementById("box41").value="X";
        document.getElementById("box41").disabled="true";
    }
    else{
        document.getElementById("box41").value="O";
        document.getElementById("box41").disabled="true";
    }    
count++;
console.log(count);
    check1();
}
function fill51(){
    if(count%2==0){
        document.getElementById("box51").value="X";
        document.getElementById("box51").disabled="true";
    }
    else{
        document.getElementById("box51").value="O";
        document.getElementById("box51").disabled="true";
    }    
count++;
console.log(count);
    check1();
}
function fill61(){
    if(count%2==0){
        document.getElementById("box61").value="X";
        document.getElementById("box61").disabled="true";
    }
    else{
        document.getElementById("box61").value="O";
        document.getElementById("box61").disabled="true";
    }    
count++;
console.log(count);
    check1();
}
function fill71(){
    if(count%2==0){
        document.getElementById("box71").value="X";
        document.getElementById("box71").disabled="true";
    }
    else{
        document.getElementById("box71").value="O";
        document.getElementById("box71").disabled="true";
    }    
count++;
console.log(count);
    check1();
}
function fill81(){
    if(count%2==0){
        document.getElementById("box81").value="X";
        document.getElementById("box81").disabled="true";
    }
    else{
        document.getElementById("box81").value="O";
        document.getElementById("box81").disabled="true";
    }    
count++;
console.log(count);
    check1();
}
function fill91(){
    if(count%2==0){
        document.getElementById("box91").value="X";
        document.getElementById("box91").disabled="true";
    }
    else{
        document.getElementById("box91").value="O";
        document.getElementById("box91").disabled="true";
    }    
count++;
console.log(count);
    check1();
}

function resetboard1(){
    document.getElementById("box11").value = " ";
    document.getElementById("box21").value = " ";
    document.getElementById("box31").value = " ";
    document.getElementById("box41").value = " ";
    document.getElementById("box51").value = " ";
    document.getElementById("box61").value = " ";
    document.getElementById("box71").value = " ";
    document.getElementById("box81").value = " ";
    document.getElementById("box91").value = " ";
    document.getElementById("box11").disabled = false;
    document.getElementById("box21").disabled = false;
    document.getElementById("box31").disabled = false;
    document.getElementById("box41").disabled = false;
    document.getElementById("box51").disabled = false;
    document.getElementById("box61").disabled = false;
    document.getElementById("box71").disabled = false;
    document.getElementById("box81").disabled = false;
    document.getElementById("box91").disabled = false;
    count = 0;
}


function openmod11(){
    document.getElementById("install_button_modal").style.display="Block";
    document.getElementById("body").style.filter="saturate(125%) blur(10px)";
}
function closemod11(){
    document.getElementById("install_button_modal").style.display="None";
    document.getElementById("body").style.filter="blur(0px)";
}


function spg(){
  document.getElementById("main_menu").style.display = "none";
  document.getElementById("one_player_name").style.display = "block"; 
  document.getElementById("one_player_game").style.display = "none"; 
  document.getElementById("two_player_name").style.display = "none"; 
  document.getElementById("two_player_game").style.display = "none"; 

}

function mpg(){
  document.getElementById("main_menu").style.display = "none";
  document.getElementById("one_player_name").style.display = "none"; 
  document.getElementById("one_player_game").style.display = "none"; 
  document.getElementById("two_player_name").style.display = "block"; 
  document.getElementById("two_player_game").style.display = "none"; 
}

function opgame(){
  document.getElementById("main_menu").style.display = "none";
  document.getElementById("one_player_name").style.display = "none"; 
  document.getElementById("one_player_game").style.display = "block"; 
  document.getElementById("two_player_name").style.display = "none"; 
  document.getElementById("two_player_game").style.display = "none"; 


  var namex1 = document.getElementById("namepx").value;
  var namey1 = "CPU";
  document.getElementById("playerxname1").innerHTML = namex1;
  document.getElementById("playeryname1").innerHTML = namey1;
}


function tpgame(){
  document.getElementById("main_menu").style.display = "none";
  document.getElementById("one_player_name").style.display = "none"; 
  document.getElementById("one_player_game").style.display = "none"; 
  document.getElementById("two_player_name").style.display = "none"; 
  document.getElementById("two_player_game").style.display = "block"; 


  var namex1 = document.getElementById("namex1").value;
  var namey1 = document.getElementById("namey1").value;
  document.getElementById("playerxname1").innerHTML = namex1;
  document.getElementById("playeryname1").innerHTML = namey1;
}

function reset1(){
  scorex1 = 0;
  scorey1 = 0;
  document.getElementById("scorex1").innerHTML = 0;
  document.getElementById("scorey1").innerHTML = 0;
}