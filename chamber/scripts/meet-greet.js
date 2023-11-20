let meetdate = new Date();
let dayofweek = meetdate.getDay();

if (dayofweek == 4 || dayofweek == 3){
    let meetgreet = document.getElementById("meetgreet");
    meetgreet.style.display = "block";
}

let x = document.getElementById("close-greet");

x.addEventListener('click',()=>
{
    let meetgreet = document.getElementById("meetgreet");
    meetgreet.style.display = "none";
}
);