function call(){
    var rates = document.getElementsByName('name1');
    var rates1=document.getElementsByName('name2');
    var rates2=document.getElementsByName('name3');
   let ans=0;
var rate_value;
for(var i = 0; i < rates.length; i++){
    if(rates[i].checked){
        rate_value = rates[i].value;
    }
}
if(rate_value=='x-ram3'){
    ans++;
}
var rate_value1;
for(var i = 0; i < rates1.length; i++){
    if(rates1[i].checked){
        rate_value1 = rates1[i].value;
    }
}
if(rate_value1=='x-ram1'){
    ans++;
}
var rate_value2;
for(var i = 0; i < rates2.length; i++){
    if(rates2[i].checked){
        rate_value2 = rates2[i].value;
    }
}
if(rate_value2=='x-ram4'){
    ans++;
}
alert("you get "+ans+" out of 3");
window.location.href="index.html";
//alert(1);

}
function call1(){
    var m=document.getElementById("t1").value;
    var n=document.getElementById("t2").value;
    if(m=='asit' && n==123){
        //alert("you are successfully login");
        //document.load("index1.html");
       //var s=n.toString();
        //alert(m+n);
       //document.getElementById("sita").innerHTML="620300303361";
       //FontFaceSetLoadEvent("index1.html");
       //$("#sita").load("index1.html");
       //document.write(index1.html);
       window.location.href="index1.html";
       alert("you are successfully log in.start your quize");
    }
    else{
        window.location.href="index.html";
        alert("your user id or password is wrong.try again!");
    }

   //alert(m);
}
//timer

const start=0.5;
let time=start*60;
//var t=0;
const count=document.getElementById('countdown');
setInterval(update, 1000);
function update(){
    //var mini=(time/60);
    //var sec=time%60;
   /* count.innerHTML=`${mini}:${sec}`;
    time--;*/
    if(time>=0){
    var mini=Math.floor(time/60);
    count.innerHTML=`${mini}:${time%60}`;
    
    }

   
    time--;
}

