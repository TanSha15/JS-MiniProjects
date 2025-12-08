inc = document.getElementById("inc");
res = document.getElementById("res");
dec = document.getElementById("dec");

let count = 0;

inc.onclick = function(){
    count++;
    document.getElementById("counter").innerHTML=count;
}
dec.onclick = function(){
    count--;
    document.getElementById("counter").innerHTML=count;
}
res.onclick = function(){
    count=0;
    document.getElementById("counter").innerHTML=count;
}