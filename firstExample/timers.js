console.log("Timers:-")
setTimeout(function(){
    console.log("setTimeout calls only once after two seconds.")
},2000);
var i = 0
var three = setInterval(function(){
    i +=3
    console.log("setInterval call every delay three seconds. At present: " + i);
    if(i == 21){
        clearInterval(three);
    };
},3000);

setImmediate(function(){
    console.log("setImmediate calls immediately without any time delay");
});