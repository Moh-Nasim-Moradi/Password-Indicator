const passwordInput=document.getElementById("pwd");
const passMsg=document.getElementById("pass-msg");
const submitBtn=document.getElementById("smt-btn");

submitBtn.addEventListener('click', ()=>{
    passwordInput.value="";
    passMsg.style.display="none";
    passwordInput.style.borderColor="";
    alert("your password has been saved!")
})

passwordInput.addEventListener('input', ()=>{
    if(passwordInput.value.length>0 ){
        passMsg.style.display='block';
    } else{
        passMsg.style.display='none';
    }

    if(passwordInput.value.length<4){
        passMsg.innerHTML="The password is weak!";
        passwordInput.style.borderColor="red";
        passMsg.style.color="red";
    }else if (passwordInput.value.length>=4 && passwordInput.value.length<8) {
        passMsg.innerHTML="The password is medium!";
        passwordInput.style.borderColor="yellow";
        passMsg.style.color="yellow";
    }
    else if(passwordInput.value.length>=8){
        passMsg.innerHTML="The password is strong!"
        passwordInput.style.borderColor="green";
        passMsg.style.color="green";
    }
})

