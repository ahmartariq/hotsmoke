const loginVal = (e) => {
    e.preventDefault()
    let isUser = false 
    let isAdmin = false;

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const error = document.getElementById("error")

    if(username.length === 0 ){
        error.innerHTML = "Enter your email"
        error.style.display = "block"
    }
    else if(password.length === 0 ){
        error.innerHTML = "Enter your Password"
        error.style.display = "block"
    } 
    else{
        error.style.display = "none"
    }

      
    if(username  === "ahmar@yahoo.com" && password === "123456"){
        console.log("user logged");
        isUser = true;
        isAdmin = false
        
        localStorage.setItem( 'isUser', 'true' );
        localStorage.setItem( 'name', username.slice(0 , username.indexOf("@") ) );
        location.replace("menu.html")
    }
    else if(username  === "admin@yahoo.com" && password === "admin"){
        location.replace("Dashboard.html")
        isAdmin = true;
        isUser = false
    }
    else{
        alert("username or password not correct")
    }
}

const loginForm = document.getElementById("login");
loginForm.addEventListener('submit', loginVal);
