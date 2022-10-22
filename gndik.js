let mainDiv =document.getElementById("main");
let gndik = document.getElementById("gndik");
let gndik2 = document.getElementById("gndik2");

let amenQayliErkarutyun = 10;

document.addEventListener("keydown",function (e) {
   
   switch (e.code) {
      case "ArrowDown":
         goDown(1)
         break;
      case "ArrowUp":
         goUp(1)
         break;
      case "ArrowLeft":
            goLeft(1)
            break;
      case "ArrowRight":
          goRight(1)
          break;
      case "KeyW":
         goUp(2)
         break;
      case "KeyS":  
         goDown(2)
         break;
      case "KeyA":
         goLeft(2)   
         break;
      case "KeyD":
         goRight(2)
         break;      
   }
   
   
   console.log(e.code);
})
function goDown(gndikiHamar){
   voreveGndikiHamar = (gndikiHamar ==1)? gndik.style.top : gndik2.style.top;
   let topiDirq = voreveGndikiHamar
   
   if (topiDirq=="") {
      topiDirq = "0px"
   }
      topiDirq = parseInt(topiDirq.slice(0,-2));
      if (topiDirq<450) {
         voreveGndikiHamar = (voreveGndikiHamar + amenQayliErkarutyun) + "px";
          topiDirq = (gndikiHamar==1)? gndik.style.top = (topiDirq + amenQayliErkarutyun) + "px":gndik2.style.top = (topiDirq + amenQayliErkarutyun) + "px";
          if (gndik.style.top == gndik2.style.top && gndik.style.left == gndik2.style.left) {
            alert("game over")
         }
         }
      
}

function goUp(gndikiHamar){
   voreveGndikiHamar = (gndikiHamar ==1)? gndik.style.top : gndik2.style.top;
   let topiDirq = voreveGndikiHamar
   if (topiDirq=="") {
      topiDirq = "0px"
   }
   topiDirq = parseInt(topiDirq.slice(0,-2));
   if (topiDirq>0) {
      voreveGndikiHamar = (voreveGndikiHamar - amenQayliErkarutyun) + "px";
         topiDirq = (gndikiHamar==1)? gndik.style.top = (topiDirq - amenQayliErkarutyun) + "px":gndik2.style.top = (topiDirq - amenQayliErkarutyun) + "px";
         if (gndik.style.top == gndik2.style.top  && gndik.style.left == gndik2.style.left) {
            alert("game over")
         }
      } 
   
   

}

function goRight(gndikiHamar){
   voreveGndikiHamar = (gndikiHamar ==1)? gndik.style.left : gndik2.style.left;
   let leftiDirq = voreveGndikiHamar;
   if (leftiDirq=="") {
      leftiDirq = "0px"
   }
   leftiDirq = parseInt(leftiDirq.slice(0,-2));
   if (leftiDirq<450) {
      voreveGndikiHamar = (voreveGndikiHamar + amenQayliErkarutyun) + "px";
      leftiDirq = (gndikiHamar==1)? gndik.style.left = (leftiDirq + amenQayliErkarutyun) + "px":gndik2.style.left = (leftiDirq + amenQayliErkarutyun) + "px";
      if (gndik.style.left == gndik2.style.left && gndik.style.top == gndik2.style.top) {
         alert("game over")
      }
   }  
   
   

}

function goLeft(gndikiHamar){
   voreveGndikiHamar = (gndikiHamar ==1)? gndik.style.left : gndik2.style.left;
   let leftiDirq = voreveGndikiHamar;
   if (leftiDirq=="") {
      leftiDirq = "0px"
   }
   leftiDirq = parseInt(leftiDirq.slice(0,-2));
   if (leftiDirq>0) {
      voreveGndikiHamar = (voreveGndikiHamar - amenQayliErkarutyun) + "px"
      leftiDirq = (gndikiHamar==1)? gndik.style.left = (leftiDirq - amenQayliErkarutyun) + "px":gndik2.style.left = (leftiDirq - amenQayliErkarutyun) + "px";
      if (gndik.style.left == gndik2.style.left && gndik.style.top == gndik2.style.top) {
         alert("game over")
      }
   }  
   
}