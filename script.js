let mainDiv =document.getElementById("main");
 let gndik = document.getElementById("gndik");
mainDiv.appendChild(gndik);
   document.addEventListener("keyup", function(e) {
    
        function texasharj(d) {
           let aralejinQayl= gndik.style.top = "50px"
            arajinQayl+"d"
        }
    if (e.code==="ArrowDown") {
        console.log("rr");
        texasharj()
    }
    else if (e.code === "ArrowRight") {
        gndik.style.left = "50px"
        
        console.log("LL");
    }
    else if (e.code ==="ArrowUp"){
        gndik.style.top = "0px"
        console.log("KK");
    }
    else if (e.code === "ArrowLeft") {
        gndik.style.left = "0px"
        console.log("jj");
    }
})