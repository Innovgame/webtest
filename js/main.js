var myHeading=document.querySelector('h1');
myHeading.textContent="HelloWorld!";
var myBtn=document.querySelector("button");
if(!localStorage.getItem('name')){
    setUserName();
}
else{
    myHeading.textContent='Mozilla is cool,'+localStorage.getItem('name');
}

function setUserName() {
    var myName=prompt('please enter your name');
    localStorage.setItem('name',myName);
    myHeading.textContent='Mozilla is cool,'+myName;
}
myBtn.onclick=function(){
    setUserName();
}