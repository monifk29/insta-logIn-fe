var emailId = document.getElementById("username");
var passId = document.getElementById("password");



var btn = document.getElementById("loginbt");

btn.addEventListener("click",(e) => {
    e.preventDefault();

var email = emailId.value;
var pass = passId.value
    console.log(email,pass);
    let payload = {
        email : email,
        password : pass
    }

    fetch("https://insta-login-backend-git-main-monifk29.vercel.app/user/reg",{
        headers : {
            "Content-type" : "application/json"
        },

        method : "POST",
        body : JSON.stringify(payload)
    }).then((res) => console.log(res))
    .catch((err) => console.log(err))
    
})