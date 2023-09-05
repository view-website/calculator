var prev_text = 0;
var cur_text = 0;
var str_num = "";
var prev_op = "";
function one(){
    if (str_num.length < 9){
    str_num = str_num + "1";
    document.getElementById("value").innerHTML = str_num;
    }
}
function two(){
    if (str_num.length < 9){
    str_num = str_num + "2";
    document.getElementById("value").innerHTML = str_num;
}}
function three(){
    if (str_num.length < 9){
    str_num = str_num + "3";
    document.getElementById("value").innerHTML = str_num;
}}
function four(){
    if (str_num.length < 9){
    str_num = str_num + "4";
    document.getElementById("value").innerHTML = str_num;
}}
function five(){
    if (str_num.length < 9){
    str_num = str_num + "5";
    document.getElementById("value").innerHTML = str_num;
}}
function ce(){
    str_num = "";
    prev_text = 0;
    cur_text=0;
    prev_op = "";
    document.getElementById("value").innerHTML = 0;
}
function six(){
    if (str_num.length < 9){
    str_num = str_num + "6";
    document.getElementById("value").innerHTML = str_num;
}}
function seven(){
    if (str_num.length < 9){
    str_num = str_num + "7";
    document.getElementById("value").innerHTML = str_num;
}}
function eight(){
    if (str_num.length < 9){
    str_num = str_num + "8";
    document.getElementById("value").innerHTML = str_num;
}}
function nine(){
    if (str_num.length < 9){
    str_num = str_num + "9";
    document.getElementById("value").innerHTML = str_num;
}}
function zero(){
    if (str_num.length < 9){
    str_num = str_num + "0";
    document.getElementById("value").innerHTML = str_num;
}}
function dot(){
    if (str_num.length < 9){
    str_num = str_num + ".";
    document.getElementById("value").innerHTML = str_num;
}}

function key(event){
    let key = event.key;
    if (key === '1'){
        one()
    }
    if (key === '2'){
        two()
    }
    if (key === '3'){
        three()
    }
    if (key === '4'){
        four()
    }
    if (key === '5'){
        five()
    }
    if (key === '6'){
        six()
    }
    if (key === '7'){
        seven()
    }
    if (key === '8'){
        eight()
    }
    if (key === '9'){
        nine()
    }
    if (key === '0'){
        zero()
    }
    if (key === '+'){
        plus()
    }
    if (key === '-'){
        minus()
    }
    if (key === '*'){
        multiply()
    }
    if (key === '/'){
        divide()
    }
    if (key === '='){
        equal()
    }
    if (key === '.'){
        dot()
    }
    if (key === 'Enter'){
        equal()
    }
    if (key === 'Backspace'){
        ce()
    }
}

function plus(){
    if (prev_op === "/"){
    cur_text = parseFloat(str_num);
    prev_text = prev_text/cur_text;
    prev_op = "+"
    str_num = "";
    prev_text = Math.round(prev_text * 1000000000) / 1000000000
    document.getElementById("value").innerHTML = prev_text
    //document.getElementById("value").innerHTML = 5*3;
    }
    else if(prev_op === "-"){
        prev_text =  prev_text - parseFloat(str_num) ;
        prev_text = Math.round(prev_text * 1000000000) / 1000000000
        prev_op = "+"
        str_num = "";
        document.getElementById("value").innerHTML =  Math.abs(prev_text);
    }
    else if (prev_op === "+"){
        prev_text = prev_text +parseFloat(str_num);
        prev_text = Math.round(prev_text * 1000000000) / 1000000000
        prev_op = "+";
        str_num = "";
        document.getElementById("value").innerHTML = prev_text
    }
    else if (prev_op === "x"){
        prev_text = prev_text * parseFloat(str_num);
        prev_text = Math.round(prev_text * 1000000000) / 1000000000
        prev_op = "x";
        str_num = "";
        document.getElementById("value").innerHTML = prev_text
    }
    else{
        prev_text = parseFloat(str_num);
        prev_text = Math.round(prev_text * 1000000000) / 1000000000
        prev_op = "+";
        str_num = "";
    }
    prev_op = "+";
}
function copy(){
    console.log("Copy")
    navigator.clipboard.writeText(str_num);
  
}
function minus(){
    if (prev_op === "/"){
    cur_text = parseFloat(str_num);
    prev_text = prev_text/cur_text;
    str_num = "";
    prev_text = Math.round(prev_text * 1000000000) / 1000000000
    document.getElementById("value").innerHTML = prev_text
    //document.getElementById("value").innerHTML = 5*3;
    }
    else if(prev_op === "-"){
        prev_text =  prev_text - parseFloat(str_num) ;
        prev_op = "-"
        str_num = "";
        prev_text = Math.round(prev_text * 1000000000) / 1000000000
        document.getElementById("value").innerHTML =  Math.abs(prev_text);
    }
    else if (prev_op === "+"){
        prev_text = prev_text + parseFloat(str_num);
        prev_op = "+";
        str_num = "";
        prev_text = Math.round(prev_text * 1000000000) / 1000000000
        document.getElementById("value").innerHTML = prev_text
    }
    else if (prev_op === "x"){
        prev_text = prev_text * parseFloat(str_num);
        prev_op = "x";
        str_num = "";
        prev_text = Math.round(prev_text * 1000000000) / 1000000000
        document.getElementById("value").innerHTML = prev_text
    }
    else{
        prev_text = parseFloat(str_num);
        prev_op = "-";
        prev_text = Math.round(prev_text * 1000000000) / 1000000000
        str_num = "";
    }
    prev_op = "-"
}
function divide(){
    if (prev_op === "/"){
    cur_text = parseFloat(str_num);
    prev_text = prev_text/cur_text;
    prev_op = "/"
    str_num = "";
    prev_text = Math.round(prev_text * 1000000000) / 1000000000
    document.getElementById("value").innerHTML = prev_text
    //document.getElementById("value").innerHTML = 5*3;
    }
    else if(prev_op === "-"){
        prev_text =  prev_text - parseFloat(str_num) ;
        prev_text = Math.round(prev_text * 1000000000) / 1000000000
        prev_op = "-"
        str_num = "";
        document.getElementById("value").innerHTML =  Math.abs(prev_text);
    }
    else if (prev_op === "+"){
        prev_text = prev_text + parseFloat(str_num);
        prev_text = Math.round(prev_text * 1000000000) / 1000000000
        prev_op = "/";
        str_num = "";
        document.getElementById("value").innerHTML = prev_text
    }
    else if (prev_op === "x"){
        prev_text = prev_text * parseFloat(str_num);
        prev_text = Math.round(prev_text * 1000000000) / 1000000000
        prev_op = "x";
        str_num = "";
        document.getElementById("value").innerHTML = prev_text
    }
    else {
        prev_text = parseFloat(str_num);
        prev_text = Math.round(prev_text * 1000000000) / 1000000000
        prev_op = "/";
        str_num = "";
    }
    prev_op = "/";
}
function multiply(){
    if (prev_op === "/"){
        cur_text = parseFloat(str_num);
        prev_text = prev_text/cur_text;
        prev_op = "x"
        str_num = "";
        prev_text = Math.round(prev_text * 1000000000) / 1000000000
        document.getElementById("value").innerHTML = prev_text
        //document.getElementById("value").innerHTML = 5*3;
        }
        else if(prev_op === "-"){
            prev_text =  prev_text - parseFloat(str_num) ;
            prev_text = Math.round(prev_text * 1000000000) / 1000000000
            prev_op = "x"
            str_num = "";
            document.getElementById("value").innerHTML =  Math.abs(prev_text);
        }
        else if (prev_op === "+"){
            prev_text = prev_text + parseFloat(str_num);
            prev_text = Math.round(prev_text * 1000000000) / 1000000000
            prev_op = "x";
            str_num = "";
            document.getElementById("value").innerHTML = prev_text
        }
        else if (prev_op === "x"){
            prev_text = prev_text * parseFloat(str_num);
            prev_text = Math.round(prev_text * 1000000000) / 1000000000
            prev_op = "x";
            str_num = "";
            document.getElementById("value").innerHTML = prev_text
        }
        else {
            prev_text = parseFloat(str_num);
            prev_text = Math.round(prev_text * 1000000000) / 1000000000
            prev_op = "x";
            str_num = "";
        }
}
function equal(){
    if (prev_op === "/"){
    cur_text = parseFloat(str_num);
    prev_text = prev_text/cur_text;
    str_num = "";
     prev_text = Math.round(prev_text * 1000000000) / 1000000000
    document.getElementById("value").innerHTML = prev_text
    //document.getElementById("value").innerHTML = 5*3;
    }
    else if(prev_op === "-"){
        prev_text = parseFloat(str_num) - prev_text;
        prev_text = Math.round(prev_text * 1000000000) / 1000000000
        prev_op = "-"
        str_num = "-";
        document.getElementById("value").innerHTML = Math.abs(prev_text);
    }
    else if (prev_op === "+"){
        prev_text = prev_text +parseFloat(str_num);
        prev_text = Math.round(prev_text * 1000000000) / 1000000000
        prev_op = "+";
        str_num = "";
        document.getElementById("value").innerHTML = prev_text
    }
    else if (prev_op === "x"){
        prev_text = prev_text * parseFloat(str_num);
        prev_text = Math.round(prev_text * 1000000000) / 1000000000
        prev_op = "x";
        str_num = "";
        document.getElementById("value").innerHTML = prev_text
    }
    else{
    prev_text = parseFloat(str_num);
    prev_text = Math.round(prev_text * 1000000000) / 1000000000
    prev_text = prev_text + parseFloat(str_num);
    str_num = "";
    document.getElementById("value").innerHTML = prev_text;
    }
}
