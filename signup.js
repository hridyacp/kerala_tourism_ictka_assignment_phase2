var firstname=document.getElementById("firstname");
var lastname=document.getElementById("lastname");
var mobnumber=document.getElementById("mobnumber");
var email=document.getElementById("inputEmail4");
var pwd=document.getElementById("inputPassword4");
var pwd1=document.getElementById("inputPassword41");
var error=document.getElementById("error");
var error1=document.getElementById("error1");
var error2=document.getElementById("error2");
var error3=document.getElementById("error3");
var error4=document.getElementById("error4");
var error5=document.getElementById("error5");
const indicator=document.querySelector(".indicator");
const input=document.querySelector(".input");
const weak=document.querySelector(".weak");
const medium=document.querySelector(".medium");
const strong=document.querySelector(".strong");
function signupValidate(){
    if(firstname.value.trim()==""&&lastname.value.trim()==""&&mobnumber.value.trim()==""&&email.value.trim()==""&&pwd.value.trim()==""&&pwd1.value.trim()==""){
      error.innerHTML= "First name cannot be empty";
      error.style.color="red";
      firstname.style.border="2px solid red";
       error1.innerHTML= "Last name cannot be empty";
       error1.style.color="red";
      lastname.style.border="2px solid red";
       error2.innerHTML= "Mobile number cannot be empty";
       error2.style.color="red";
       mobnumber.style.border="2px solid red";
       error3.innerHTML= "Email cannot be empty";
       error3.style.color="red";
       email.style.border="2px solid red";
       error4.innerHTML= "Password cannot be empty";
       error4.style.color="red";
       pwd.style.border="2px solid red";
      error5.innerHTML= "Please re enter the password";
       error5.style.color="red";
       pwd1.style.border="2px solid red";
       return false;   
   }
   else{
    error.innerHTML="";
    error1.innerHTML="";
    error2.innerHTML="";
    error3.innerHTML="";
    error4.innerHTML="";
    error5.innerHTML="";
    firstname.style.border="2px solid green";
    lastname.style.border="2px solid green";
    mobnumber.style.border="2px solid green";
    email.style.border="2px solid green";
    pwd.style.border="2px solid green";
    pwd1.style.border="2px solid green";
}
   if(lastname.value.trim()==""&&mobnumber.value.trim()==""&&email.value.trim()==""&&pwd.value.trim()==""&&pwd1.value.trim()==""){
      error1.innerHTML= "Last name cannot be empty";
      error1.style.color="red";
      lastname.style.border="2px solid red";
      error2.innerHTML= "Mobile number cannot be empty";
       error2.style.color="red";
       mobnumber.style.border="2px solid red";
       error3.innerHTML= "Email cannot be empty";
       error3.style.color="red";
       email.style.border="2px solid red";
       error4.innerHTML= "Password cannot be empty";
       error4.style.color="red";
       pwd.style.border="2px solid red";
       error5.innerHTML= "Please re enter the password";
       error5.style.color="red";
       pwd1.style.border="2px solid red";
       return false;
     }
     else{
      error1.innerHTML="";
      error2.innerHTML="";
      error3.innerHTML="";
      error4.innerHTML="";
      error5.innerHTML="";
      lastname.style.border="2px solid green";
      mobnumber.style.border="2px solid green";
      email.style.border="2px solid green";
      pwd.style.border="2px solid green";
      pwd1.style.border="2px solid green";
 }
      if(mobnumber.value.trim()==""&&email.value.trim()==""&&pwd.value.trim()==""&&pwd1.value.trim()==""){
      error2.innerHTML= "Mobile number cannot be empty";
       error2.style.color="red";
       mobnumber.style.border="2px solid red";
       error3.innerHTML= "Email cannot be empty";
       error3.style.color="red";
       email.style.border="2px solid red";
       error4.innerHTML= "Password cannot be empty";
       error4.style.color="red";
       pwd.style.border="2px solid red";
       error5.innerHTML= "Please re enter the password";
       error5.style.color="red";
       pwd1.style.border="2px solid red";
       return false;
     }
     else{
      error2.innerHTML="";
      error3.innerHTML="";
      error4.innerHTML="";
      error5.innerHTML="";
      mobnumber.style.border="2px solid green";
      email.style.border="2px solid green";
      pwd.style.border="2px solid green";
      pwd1.style.border="2px solid green";
 }
     if(email.value.trim()==""&&pwd.value.trim()==""&&pwd1.value.trim()==""){
      error3.innerHTML= "Email cannot be empty";
      error3.style.color="red";
      email.style.border="2px solid red";
      error4.innerHTML= "Password cannot be empty";
      error4.style.color="red";
      pwd.style.border="2px solid red";
      error5.innerHTML= "Please re enter the password";
      error5.style.color="red";
      pwd1.style.border="2px solid red";
      return false;
    }
    else{
      error3.innerHTML="";
      error4.innerHTML="";
      error5.innerHTML="";
      email.style.border="2px solid green";
      pwd.style.border="2px solid green";
      pwd1.style.border="2px solid green";
 }
    if(pwd.value.trim()==""&&pwd1.value.trim()==""){
      error4.innerHTML= "Password cannot be empty";
      error4.style.color="red";
      pwd.style.border="2px solid red";
      error5.innerHTML= "Please re enter the password";
      error5.style.color="red";
      pwd1.style.border="2px solid red";
      return false;
    }
    else{
      error4.innerHTML="";
      error5.innerHTML="";
      pwd.style.border="2px solid green";
      pwd1.style.border="2px solid green";
 }
  if(firstname.value.trim()=="") {
   error.innerHTML= "First name cannot be empty";
   error.style.color="red";
   firstname.style.border="2px solid red";
    return false;
   }
   else{
      error.innerHTML="";
      firstname.style.border="2px solid green";
 }
   if(lastname.value.trim()=="") {
      error1.innerHTML= "Last name cannot be empty";
      error1.style.color="red";
      last.style.border="2px solid red";
    return false;
   }
   else{
    error1.innerHTML="";
    lastname.style.border="2px solid green";
}
   if(mobnumber.value.trim()=="") {
      error2.innerHTML= "Mobile number cannot be empty";
       error2.style.color="red";
       mobnumber.style.border="2px solid red";
    return false;
   }
   else{
    error2.innerHTML="";
    mobnumber.style.border="2px solid green";
}
 if(email.value.trim()=="") {
   error3.innerHTML= "Email cannot be empty";
   error3.style.color="red";
   email.style.border="2px solid red";
    return false;
   }
   else{
    error3.innerHTML="";
    email.style.border="2px solid green";
}
   if(pwd.value.trim()=="") {
      error4.innerHTML= "Password cannot be empty";
      error4.style.color="red";
      pwd.style.border="2px solid red";
    return false;
   }
   else{
    error4.innerHTML="";
    pwd.style.border="2px solid green";
}
   if(pwd1.value.trim()=="") {
      error5.innerHTML= "Please re enter the password";
      error5.style.color="red";
      pwd1.style.border="2px solid red";
    return false;
   }
   else{
    error5.innerHTML="";
    pwd1.style.border="2px solid green";
}
}
function fnameValidate(){
    let regexp = /^([A-Za-z]+)?$/;
    if (regexp.test(firstname.value)){
      error.innerHTML="";
      firstname.style.border="2px solid green";
               return true;
          }
              else{
                 error.innerHTML= "Enter the correct format";
                 error.style.color="red";
                 firstname.style.border="2px solid red";
                 return false;
              }
}
function lnameValidate(){
    let regexp1 = /^([A-Za-z]+)?$/;
    if (regexp1.test(lastname.value)){
      error1.innerHTML="";
      lastname.style.border="2px solid green";
               return true;
          }
              else{
                 error1.innerHTML= "Enter the correct format";
                 error1.style.color="red";
                 lastname.style.border="2px solid red";
                 return false;
              }
}
function mobnumValidate(){
    let regexp2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  //  let regexp2 = /^([0-9]{10})?$/
    if (regexp2.test(mobnumber.value)){
      error2.innerHTML="";
      mobnumber.style.border="2px solid green";
               return true;
          }
              else{
                 error2.innerHTML= "Enter 10 digit number";
                 error2.style.color="red";
                 mobnumber.style.border="2px solid red";
                 return false;
              }
}
 function emailValidate(){
       
     let regexp3 = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
     if (regexp3.test(email.value)){
       error3.innerHTML="";
      email.style.border="2px solid green";
       return true;
  }
    else{
       error3.innerHTML= "Enter the correct format";
        error3.style.color="red";
        email.style.border="2px solid red";
        return false;
     }
 }
 function pwdValidate(){
       
    var regexp4= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{8,}$/
    if (regexp4.test(pwd.value)){
      error4.innerHTML="";
      pwd.style.border="2px solid green";
      return true;
 }
   else{
      error4.innerHTML= "Enter the correct format";
       error4.style.color="red";
       email.style.border="2px solid red";
       return false;
    }
}
function pwddValidate(){
if(pwd1.value==pwd.value){
  error5.innerHTML="";
  pwd1.style.border="2px solid green";
return true;
}
else {
    error5.innerHTML= "Passwords dont match.";
       error5.style.color="red";
       pwd1.style.border="2px solid red";
       return false;
}
}
function password_show_hide() {
  var show_eye = document.getElementById("show_eye");
  var hide_eye = document.getElementById("hide_eye");
  hide_eye.classList.remove("d-none");
  if (pwd.type === "password") {
    pwd.type = "text";
    show_eye.style.display = "none";
    hide_eye.style.display = "block";
  } else {
    pwd.type = "password";
    show_eye.style.display = "block";
    hide_eye.style.display = "none";
  }
}
function password_show_hide1() {
  var show_eyes = document.getElementById("show_eyes");
  var hide_eyes = document.getElementById("hide_eyes");
  hide_eyes.classList.remove("d-none");
  if (pwd1.type === "password") {
    pwd1.type = "text";
    show_eyes.style.display = "none";
    hide_eyes.style.display = "block";
  } else {
    pwd1.type = "password";
    show_eyes.style.display = "block";
    hide_eyes.style.display = "none";
  }
}
function passwordStrength(){
      let regexpw=/^(?=.*[a-z])|(?=.*[A-Z])|(?=.*\d)|(?=.*(\W|_)).{1,20}$/
      let regexpm=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*[A-Z])(?=.*(\W|_)).{4,20}$/
      let regexps=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{6,20}$/

  
  if(pwd.value!=""){
    indicator.style.display="block";
    indicator.style.display="flex";
  }
  else{
    indicator.style.display="none";
    error4.innerHTML="";
  }
if(regexpw.test(pwd.value)){
    weak.style.backgroundColor="red";
    error4.innerHTML="Password is too weak";
}
else{
    weak.style.backgroundColor="grey";
}
if(regexpm.test(pwd.value) && pwd.value.length>=5){
    weak.style.backgroundColor="orange";
    medium.style.backgroundColor="orange";
    error4.innerHTML="Password is medium";
    error4.style.color="white";
}
else{
    medium.style.backgroundColor="grey";

}if(regexps.test(pwd.value)){
    weak.style.backgroundColor="green";
    medium.style.backgroundColor="green";
    strong.style.backgroundColor="green";
    error4.innerHTML="Password is strong enough";
    error4.style.color="white";
}
else{
    strong.style.backgroundColor="grey";
}
}