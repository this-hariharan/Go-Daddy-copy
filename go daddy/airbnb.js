var important = document.getElementById("imp");

var sign = document.getElementById("sign_in");

sign.addEventListener("click",(e)=>{

    if(important.style.display==="none"){
        important.style.display="block"
        sign.style.backgroundColor="white"
        sign.style.color="black"
        sign.style.borderRadius="10px"
    }
    else{
        important.style.display="none"
        sign.style.backgroundColor="black"
        sign.style.color="white"
        sign.style.borderRadius="0px"
    }
})