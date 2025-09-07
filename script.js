

const userName = document.getElementById('username')
const pwd = document.getElementById('password')
const myUser = "argha123@gmail.com"
const myPwd = "1234"
const loginBtn = document.getElementById('loginBtn')
const form = document.getElementById('login-page')

loginBtn.addEventListener('click', function (e) {

    const formData = new FormData(form)
    const user = formData.get("username")
    const pwd = formData.get("password")
    if (user === myUser && pwd === myPwd) {
        document.querySelector("form").action = "app.html"
    }
    else {
        alert("Enter the correct credentials")
    }
})






