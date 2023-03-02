setInterval(() => {
    let d = new Date();
    
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let hrotate = 30*hours +minutes/2 
    let mrotate = 6*minutes;
    let srotate =6*seconds;
    let h= document.getElementById("hour"); 
    let m= document.getElementById("minute"); 
    let s= document.getElementById("second"); 
    h.style.transform = `rotate(${hrotate}deg)`;
    m.style.transform = `rotate(${mrotate}deg)`;
    s.style.transform = `rotate(${srotate}deg)`;
}, 1000); 
let box =document.getElementById("box");
setInterval(() => {
    let d = new Date();
    
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    //box.innerText = new Date();
    box.innerText = `${hours} :${minutes} :${seconds}`;

}, 1000);
