let block = document.querySelectorAll(".block")
for (let i = 0; i < block.length; i++) {
    console.log(block[i]) ;
block[i].onclick = () => {
 console.log(block[i].classList.contains("active"))
 if (block[i].classList.contains("active")) {
    block[i].classList.remove("active") 
 } else{

    block[i].classList.add("active")
 }

}
block[i].addEventListener("mouseenter", () =>{
    if (block[i].classList.contains("active")) {
        block[i].classList.remove("active") 
     } else{
    
        block[i].classList.add("active")
     }

    })
}
       ;
block.forEach(element =>{
    element.addEventListener("mouseenter", () =>{
            if (element.classList.contains("active")) {
                element.classList.remove("active") 
             } else{
            
                element.classList.add("active")
             }
        
            })

})

let hours = document.getElementById("hours");
let min = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let Start = document.getElementsByClassName("start")
let inputs = document.getElementsByClassName("input-time")

function Timer(h, m, s) {
    const times = setInterval(() => {
   seconds.innerText = s;
   min.innerText = m;
   hours.innerText = h;
   s--;
   if (s == 0) {
     m--;
     s = 60;
   }
   if (m == 0) {
     h--;
     m = 60;
   }
   if (h < 0) {
     clearInterval(times);
     seconds.innerText = 0;
     min.innerText = 0;
     hours.innerText = 0;
   }
 }, 1000);  
 }
 
 let isTimer = false
 Start[0].onclick = () => {
   
   let h = inputs[0].value;
   let m = inputs[1].value;
   let s = inputs[2].value;
  Timer(h, m, s)
 }