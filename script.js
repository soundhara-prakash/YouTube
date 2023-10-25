let a=document.querySelector("#bulb")
let b=document.querySelector("body")
let btn=document.querySelector("button")

let flag=0

btn.addEventListener("click",()=>{
    if(flag==0){
        a.style.backgroundColor="yellow"
        b.style.backgroundColor="white"
        btn.innerHTML="OFF"
        flag=1
    }else{
        a.style.backgroundColor="transparent"
        b.style.backgroundColor="black"
        btn.innerHTML="ON"
        flag=0
    }

})