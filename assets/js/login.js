function opensignin(){
    const open__1=document.getElementsByClassName("modal");
    const open__2=document.getElementsByClassName("none");
    const open__3=document.getElementsByClassName("block");
    open__1[0].style.display="block";
    open__2[0].style.display="none";
    open__3[0].style.display="block";

}

function opensignup(){
    const open__1=document.getElementsByClassName("modal");
    const open__2=document.getElementsByClassName("none");
    const open__3=document.getElementsByClassName("block");
    open__1[0].style.display="block";
    open__2[0].style.display="block";
    open__3[0].style.display="none";

}

function hideall(){
    const hide=document.getElementsByClassName("modal");
    hide[0].style.display='none';
}

function changetoSingup() {
    document.getElementById("login-up").style.display="block";
    document.getElementById("login-in").style.display="none";
}

function changetoSingin() {
    document.getElementById("login-up").style.display="none";
    document.getElementById("login-in").style.display="block";
}