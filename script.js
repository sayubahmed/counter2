let add= document.querySelector(".btn1");
let reset=document.querySelector(".btn2");
let minus=document.querySelector(".btn3");
let disp=document.querySelector(".a");


add.addEventListener("click",()=>{
    let=stringval=disp.innerText
    let num=Number(stringval);
    num=num+1;
    disp.innerText=num;
})


reset.addEventListener("click", function reset(){
    disp.innerText=0;
})


minus.addEventListener("click",()=>{
    let=stringval=disp.innerText
    let num=Number(stringval);
    num=num-1;
    disp.innerText=num;
})
