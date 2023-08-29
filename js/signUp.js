let userNameInput=document.getElementById("userNameInput");
let emailInput=document.getElementById("emailInput");
let passwordInput=document.getElementById("passwordInput");

let signUpBtn=document.getElementById("signUpBtn");
let alertMessage=document.getElementById("alertMassage");

var allUsers=[];

if(localStorage.getItem("users")!=null){
    allUsers=JSON.parse(localStorage.getItem("users"));
}

function signUp(){
let user={
    name:userNameInput.value,
    email:emailInput.value,
    password:passwordInput.value
}
if(isEmpty()==true){
    alertUser("All inputs are required","red");
}
else{
    if(checkEmailExist()==true){
        alertUser("Email is alredy exist","red");
    }
    else{
        allUsers.push(user);
        localStorage.setItem("users",JSON.stringify(allUsers));
        clearForm();
        alertUser("sucess","green");
    }
    
}
}

function isEmpty(){
    if(userNameInput.value==""||emailInput.value==""||passwordInput.value==""){
        return true;
    }
    else{
        return false;
    }
}

function alertUser(message,color){
    alertMessage.classList.replace("d-none","d-block");
    alertMessage.innerHTML=message;
    alertMessage.style.color=color;
}

function clearForm(){
    userNameInput.value="";
    emailInput.value="";
    passwordInput.value="";
}

function checkEmailExist(){
    for (let i = 0; i < allUsers.length; i++) {
        if(allUsers[i]!=emailInput.value)
        {
            return true;
        }
        
    }

}


signUpBtn.addEventListener("click",signUp);