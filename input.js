"use strict";
document.querySelector("body").style.backgroundColor ='black';
document.querySelector("body").style.color ='white';
document.addEventListener("DOMContentLoaded", ()=>{
let password = document.querySelector("#pass");
let p = document.querySelector("p");
password.addEventListener("input", ()=>{
	if (password.value.length>0 && password.value.length<4) {
		p.innerHTML="The password is too weak!"
		p.style.color="red";
		password.style.border="1px solid red";
	} else if(password.value.length>=4 && password.value.length<=6){
		p.innerHTML="The password is medium";
		p.style.color="yellow";
		password.style.border="1px solid yellow";
	}else if(password.value.length>6){
		p.innerHTML="That is a strong password!";
		p.style.color="green";
		password.style.border="1px solid green";
	}else{
		p.innerHTML="ERROR!! The password is not valid!";
	}
});
});