const loginButton = document.querySelector("#loginButton")
loginButton.onclick = () => {
    const usernameInput = document.querySelector("#usernameTextBox").value
    const passwordInput = document.querySelector("#passwordTextBox").value

    if(!usernameInput) {
        alert('Please input username')
        return
    } else if (usernameInput.length < 3) {
        alert('Username is too short! Make it more than 3 characters.')
        return
    }

    if(!passwordInput) { 
        alert('Please input password')
        return
    } else if (passwordInput.length < 3) {
        alert('Password is too short! Make it more than 3 characters.')
        return
    }

    if(usernameInput !== "admin" && passwordInput !=="root") {
        alert('Username and Passord is incorrect')
        return
    }

    if(usernameInput === "admin" && passwordInput === "root")
        location.href = "home.html"
} 