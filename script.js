function show(value){
    document.getElementById("result").value +=value
}

function solve(){
    document.getElementById("result").value=eval(document.getElementById("result").value)
}

function clr(){
    document.getElementById("result").value=""
}

function eraseDigit(){
    var showData=document.getElementById("result").value
    document.getElementById("result").value=showData.slice(0,-1)
}

document.onkeydown=function(){
    alert("keyboard not allowed")
}