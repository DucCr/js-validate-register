//khai báo các DOM element input
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Khai báo các biến check
let validUsername = false;
let validEmail = false;
let validPassword = false;
let validPassword2 = false;

//add event blur cho username
username.addEventListener('blur',() => {
    let regex = /^[a-zA-Z0-9]{3,15}$/;
    let str = username.value;
    if(regex.test(str)){
        setSuccess(username);
        validUsername = true;
    }
    else{
        setError(username, "Your username must be 3-10 characters long and should not start with a number")
        validUsername = false;
        
    }
})

//add event blur cho email
email.addEventListener('blur',() => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if(regex.test(str)){
        setSuccess(email);
        validEmail = true;
    }
    else{
        setError(email, "Your email must be a valid email")
        validEmail = false;
        
    }
})

//add event blur cho password
password.addEventListener('blur',() => {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    let str = password.value;
    if(regex.test(str)){
        setSuccess(password);
        validPassword = true;
    }
    else{
        setError(password, "Password minimum six characters, at least one letter and one number")
        validPassword = false;
        
    }
})

//add event blur cho password2
password2.addEventListener('blur',() => {
    let str = password2.value;
    if(password.value === str && str.length >= 6){
        setSuccess(password2);
        validPassword2 = true;
    }
    else{
        setError(password2, "Password does not match, please check again")
        validPassword2 = false;
        
    }
})

//tạo hàm thực hiện khi submit form
const handlerButton = (event) => {
    event.preventDefault();
    if( validUsername  === true &&
        validEmail     === true &&
        validPassword  === true &&
        validPassword2 === true ){

            swal("Success!", "You have successfully registered !", "success", {
                buttons : "Log in"
            });
     }
     else {// xử lí khi submit tự động focus vào input bị sai
        
        if(validPassword2  === false){
            setError(password2, "Password minimum six characters, at least one letter and one number");
            password2.focus();
        }
        if(validPassword  === false){
            setError(password, "Password minimum six characters, at least one letter and one number");
            password.focus();
        }
        if(validEmail  === false){
            setError(email, "Your email must be a valid email");
            email.focus();
        }
        if(validUsername  === false){
            setError(username, "Your username must be 3-10 characters long and should not start with a number");
            username.focus();
        }
        
    }

}
//thêm event submit form
form.addEventListener('submit', handlerButton);

//tạo hàm khi nhập input sai
const setError = (input, message) => {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
    small.style.display = 'inline';
    formControl.className = 'form-control error';
	small.innerText = message;
}

//tạo hàm khi nhập input đúng
const setSuccess = (input) => {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
    formControl.querySelector("small").style.display = 'none';
}

//tạo các hàm khi onclick vào các thẻ input
const handlerUsername = () => {
    username.parentElement.className = "form-control";
    username.parentElement.querySelector("small").style.display = 'none';
}
const handlerEmail = () => {
    email.parentElement.className = "form-control";
    email.parentElement.querySelector("small").style.display = 'none';
}
const handlerPassword = () => {
    password.parentElement.className = "form-control";
    password.parentElement.querySelector("small").style.display = 'none';
}
const handlerRePassword = () => {
    password2.parentElement.className = "form-control";
    password2.parentElement.querySelector("small").style.display = 'none';
}