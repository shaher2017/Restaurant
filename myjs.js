document.getElementById("signbtn").onclick = () => {
    document.getElementById("inn").style.display = "flex";
}
document.getElementById("cancel").onclick = () => {
    document.getElementById("inn").style.display = "none";
}

document.getElementById("signupbtn").onclick = () => {
    document.getElementsByClassName("signup")[0].style.display="flex";
}
document.getElementById("cancelsignup").onclick = () => {
    document.getElementsByClassName("signup")[0].style.display="none";
}

document.getElementById("signinbtn").onclick = () =>{
    let username = document.getElementById("userin").value;
    let pass = document.getElementById("passin").value;
    if(username === "shaher" && pass === "hero"){
        document.getElementById("inn").style.display = "none";
        document.getElementById("welcoming").innerHTML = `Hello ${username}, How can we serve you today!`;
    }
}