let xLast=0;
let slaidX=0;
let flag=0;
let x=0;
let viewport=document.querySelector(".viewport");
let slaid = document.querySelector(".viewport__slaid");
let but = document.querySelector(".viewport__arrow");
// let p1 = document.querySelector("#coord");
// let p2 = document.querySelector("#coord2");
// let p3 = document.querySelector("#coord3");
// let p4 = document.querySelector("#coord4");

but.addEventListener("click",qwe);
function qwe(){
    if (slaidX>-776){
        slaidX-=388;
    }
    moved(0);
}

viewport.addEventListener("mousedown",click);
function click(even){
    if (even.which == 1){
        xLast=even.clientX;
        
        addEventListener ("mousemove",move)
        
        even.preventDefault();
        
        slaidX+=x;
        x=0;
        // p2.innerHTML = slaidX;
    }
}
function move(even){
    if ( even.which != 1){
        removeEventListener(move());
    }
    // p3.innerHTML = slaidX
   
    if (((xLast-even.clientX)>0)&&(slaidX>-776))  {
        // if ((xLast-even.clientX)>0)  {
        // arrow left
        flag=1;
        // p4.innerHTML = flag;
        x = -388;
    //    p1.innerHTML = x;
        // slaid.style.transition = "2s";
        
    } else if(((xLast-even.clientX)<0 )&&(slaidX<0)){
        //  } else if((xLast-even.clientX)<0) {
        // arrow right
        flag=2;
        // p4.innerHTML = flag;
        x=388;
    //    p1.innerHTML = x;
        // slaid.style.transition = "2s";
    }else {
        flag=0;

    }
    
    moved(x)
}

function moved (arrow){
    // if (slaidX>-776 && arrow<0)
   slaid.style.transform = "translate("+(slaidX+arrow)+"px, 0)";
   slaid.style.transition = "2s";
//    if (slaidX<0 && arrow>0)
//    slaid.style.transform = "translate("+(slaidX+arrow)+"px, 0)";
}
// function left(){
//     slaid.style.transform = "translate(388px, 0)";
// }
// function right(){
//     slaid.style.transform = "translate(-388px, 0)";
// }


