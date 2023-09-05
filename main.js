var prev_text = 0;
var cur_text = 0;
var str_num = "";
var prev_op = "";
function one(){
    str_num = str_num + "1";
    document.getElementById("value").innerHTML = str_num;
}
function two(){
    str_num = str_num + "2";
    document.getElementById("value").innerHTML = str_num;
}
function three(){
    str_num = str_num + "3";
    document.getElementById("value").innerHTML = str_num;
}
function four(){
    str_num = str_num + "4";
    document.getElementById("value").innerHTML = str_num;
}
function five(){
    str_num = str_num + "5";
    document.getElementById("value").innerHTML = str_num;
}
function ce(){
    str_num = "";
    prev_text = 0;
    cur_text=0;
    prev_op = "";
    document.getElementById("value").innerHTML = 0;
}
function six(){
    str_num = str_num + "6";
    document.getElementById("value").innerHTML = str_num;
}
function seven(){
    str_num = str_num + "7";
    document.getElementById("value").innerHTML = str_num;
}
function eight(){
    str_num = str_num + "8";
    document.getElementById("value").innerHTML = str_num;
}
function nine(){
    str_num = str_num + "9";
    document.getElementById("value").innerHTML = str_num;
}
function zero(){
    str_num = str_num + "0";
    document.getElementById("value").innerHTML = str_num;
}
function dot(){
    str_num = str_num + ".";
    document.getElementById("value").innerHTML = str_num;
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