let emailLogin=document.getElementById("emailLoginInput");
let passwordLogin=document.getElementById("passwordLoginInput");

let alertMessage=document.getElementById("alertMassage");
let loginBtn=document.getElementById("loginBtn");

var allUsers=[];

if(localStorage.getItem("users")!=null){
    allUsers=JSON.parse(localStorage.getItem("users"));
}

function signIn(){
    if(isEmpty()==true){
        alertUser("All inputs are required","red");
    }
    else{
        if(checkEmailPassword()==true)
        {
            window.location.replace("home.html")
        }
        else{
            alertUser("Invalid email and password","red");
        }
    }

}





function isEmpty(){
    if(emailLogin.value==""||passwordLogin.value==""){
        return true;
    }
    else{
        return false;
    }
}

function checkEmailPassword(){
    for(let i=0;i<allUsers.length;i++)
    {
        if(allUsers[i].email==emailLogin.value && allUsers[i].password==passwordLogin.value){
            localStorage.setItem("userName",allUsers[i].name)
            return true;
        }
    }
} 

function alertUser(message,color){
    alertMessage.classList.replace("d-none","d-block");
    alertMessage.innerHTML=message;
    alertMessage.style.color=color;
}



loginBtn.addEventListener("click",signIn);