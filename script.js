let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");




setInterval(()=>{
    let currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
    day.innerHTML = currentTime.getUTCDate()+1;
    month.innerHTML = currentTime.getUTCMonth()+1;
    year.innerHTML = currentTime.getUTCFullYear()+1;

    
},1000)




