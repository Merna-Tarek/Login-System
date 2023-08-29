let welcomeMassage=document.getElementById("welcomeMassage");

let logOutBtn=document.getElementById("logOutBtn");

if(localStorage.getItem("userName")!=null){
    welcomeMassage.innerHTML=`welcome ${localStorage.getItem("userName")}`
}

logOutBtn.addEventListener("click",function(){
    window.location.replace("index.html");
    localStorage.removeItem("userName");
})