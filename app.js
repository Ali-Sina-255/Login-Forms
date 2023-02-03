const form = document.getElementById('form');

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show input error messages

function showError(input, message){
  const FormControal = input.parentElement;
  FormControal.className = 'form-controal error';
  const smalelement = FormControal.querySelector('small');
  smalelement.innerText = message;
}

// Show suecces otline messages 

function Showsuccess(input){
  const FormControal = input.parentElement;
  // const FormControal = document.querySelector("form-controal");
  FormControal.className = "form-controal success";
}


// check Email is Valid or not 

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};



// check requied Fields 

function CheckRequiredFiled(inputarr){
  inputarr.forEach(function(input){
    if(input.value.trim() === ""){
      showError(input,`${getFieldName(input)} is required !`);

    }else{
      Showsuccess(input);
    }

    console.log(input.value);
  });
  

}

// Get Field Name 

function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Event listners
form.addEventListener('submit', function(e) {
  e.preventDefault();
  CheckRequiredFiled([username,email,password,password2])

  // if(username.value === ''){
  //   showError(username,'User name is requried !');

  // }else{
  //   Showsuccess(username);
  // }

  // if(email.value === ''){
  //   showError(email,'Email is requried !');


  // } else if(!validateEmail(email.value)){
  //   showError(email,'Email is not valid !');

  // }
  // else{
  //   Showsuccess(email);
  // }

  // if(password.value === ''){
  //   showError(password,'User name is requried !');

  // }else{
  //   Showsuccess(password);
  // }

  // if(password2.value === ''){
  //   showError(password2,'password is requried !');

  // }else{
  //   Showsuccess(password2);
  // }
    

  // console.log(username.value);
}); 