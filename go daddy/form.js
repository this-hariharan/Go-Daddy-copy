var inp1 = document.getElementById("inp1")


function myfunction1(){
    var inp1 = document.getElementById("inp1")
    var inp_sub=document.getElementById("inp_sub");
    var hide1= document.getElementById("hide1")
    var pass = document.getElementById("pass")


    inp_sub.style.color="red"
    inp_sub.style.scale="0.8"
    inp_sub.style.position="relative"
    inp1.style.height="50px"
    inp1.style.position="absoulte"
    inp_sub.style.marginTop="-60px"
    inp_sub.style.marginLeft="-35px"
    hide1.style.display="none"
    pass.style.marginTop="80px"

}




var pass = document.getElementById("pass")
function myfunction2(){
    var pass = document.getElementById("pass")
    var inp_sub2 = document.getElementById("inp_sub2")
    var hide2 = document.getElementById("hide2")
    var check = document.getElementById("check")

    pass.style.height="50px"
    inp_sub2.style.color="red"
    inp_sub2.style.scale="0.8"
    inp_sub2.style.marginTop="-60px"
    inp_sub2.style.marginLeft="-37px"
    hide2.style.display="none"
    check.style.marginTop="70px"
}


var bu = document.getElementById("bu")
function myfunction3(){
    var inp1 = document.getElementById("inp1").value
    var hide1= document.getElementById("hide1")
    var pass = document.getElementById("pass").value
    var hide2 = document.getElementById("hide2")

    if(inp1==""){
        hide1.style.display="block"
        inp1.style.marginTop="-50px"
    }
     else{
         hide1.style.display="none"
     }
     if(pass==""){
        hide2.style.display="block"
        pass.style.marginTop="-50px"
    }
    // else if(inp1==""&&pass==""){
    //     hide2.style.display="block"
    //     pass.style.marginTop="-50px"
    // }
    else{
        hide2.style.display="none"
    }
    
}

