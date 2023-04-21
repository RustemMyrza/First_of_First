"use strict"
let a = JSON.parse(localStorage.getItem("message")) || [];
if(a.length > 0){
    for(let i = 0; i < a.length; i++){
        document.getElementById("fieldformes").innerHTML += "<p>"+a[i]+"</p>" + "<br>";
    }
}

let yourmessage = document.getElementById('yourmes');
let type = document.getElementById("type")
yourmessage.addEventListener('keydown', function(){
    type.style.visibility="visible";
});

yourmessage.addEventListener('keyup', function(){
    type.style.visibility="hidden";
});

function send(){
    var message = yourmessage.value;
    document.getElementById("fieldformes").innerHTML +="<p>"+message+"</p><br>";
    var chathistory = JSON.parse(localStorage.getItem("message")) || [];
    chathistory.push(message);
    localStorage.setItem("message", JSON.stringify(chathistory));
    console.log(JSON.parse(localStorage.getItem("message")));
    yourmessage.value="";
    yourmessage.focus();
}

let accname = JSON.parse(localStorage.getItem("active")) || [];
        if(!(accname instanceof Array)){
                    accname = [accname];
                }
        let i = accname.length;
        console.log(accname);
        document.getElementById("acc_name").innerHTML = accname[i-1];