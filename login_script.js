/*"use strict"
let loginform = document.getElementById("loginform");

loginform.addEventListener("submit", (e)=>{
    let login_input = document.getElementById("login_input").value;
    let password = document.getElementById("password").value;
    let get = localStorage.getItem("signupdata");
    let login = JSON.parse(get);

    if(!(login instanceof Array)){
        login = [login];
    }

    for(let i = 0; i < login.length; i++){
        if(login_input == ""){
            document.getElementById("outlogin").innerHTML = "Please fill in this field"
        }
        else if(login_input == login[i].login){

            if(password == ""){
                document.getElementById("outlogin").innerHTML = "Correct!"
                document.getElementById("outlogin").style.color = "green"
                document.getElementById("outpassword").innerHTML = "Please fill in this field"
            }
            else if (password == login[i].password){
                let active = JSON.parse(localStorage.getItem("active")) || [];
                if(!(active instanceof Array)){
                    active = [active];
                }
                active.push(login[i].nickname)
                localStorage.setItem("active", JSON.stringify(active))
                window.location.href="main_page-acc.html"
            }
            else{
                document.getElementById("outlogin").innerHTML = "Correct!"
                document.getElementById("outlogin").style.color = "green"
                document.getElementById("outpassword").innerHTML = "Uncorrect password"
            }
        }
        else{
            document.getElementById("outlogin").innerHTML = "No such account found"
        }
    }
    e.preventDefault();
})*/

"use strict"
let loginform = document.getElementById("loginform");

loginform.addEventListener("submit", (e)=>{



    let login_input = document.getElementById("login_input").value;
    let password = document.getElementById("password").value;
    let get = localStorage.getItem("signupdata");
    let login = JSON.parse(get);





    if(!(login instanceof Array)){
        login = [login];
    }




    for(let i = 0; i < login.length; i++){



        if(login_input == ""){
            document.getElementById("outlogin").innerHTML = "Please fill in this field"
        }


        else if(login_input == login[i].login){

            if(password == ""){
                document.getElementById("outlogin").innerHTML = "Correct!"
                document.getElementById("outlogin").style.color = "green"
                document.getElementById("outpassword").innerHTML = "Please fill in this field"
            }


            else if (password == login[i].password){
                let active = JSON.parse(localStorage.getItem("active")) || [];
                if(!(active instanceof Array)){
                    active = [active];
                }
                active.push(login[i].login)
                localStorage.setItem("active", JSON.stringify(active))
                window.location.href="Home.html"
            }



            else{
                document.getElementById("outlogin").innerHTML = "Correct!"
                document.getElementById("outlogin").style.color = "green"
                document.getElementById("outpassword").innerHTML = "Uncorrect password"
            }



        }



        else{
            document.getElementById("outlogin").innerHTML = "No such account found"
        }
    }
    e.preventDefault();
})
