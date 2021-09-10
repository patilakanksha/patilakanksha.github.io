let a;
let date;
let time;
let day;
var clr;
var options = ["Sunday" ,"Monday","Tuesday","Wednesday","Thuresday","Friday","Satursday"];
//console.log(new Intl.DateTimeFormat('en-US', options).format(Xmas95));
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString();
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    day=options[a.getDay()];
    document.getElementById("time").innerHTML = "<span class='digital-font'>"+time+"</span> on <span class='digital-font'>"+ date+"</span>";
    document.getElementById("lead").innerHTML =day;
}, 1000);
function myFunction(x) {
    // alert("hi");
    var element = document.getElementById("divTest");
    element.classList.remove("out");
    clearTimeout(clr);
    element.classList.add("show");
    // var newTime1 = ;
   clr=setInterval(() => {
        document.getElementById("clock").innerHTML =   x +": <span class='digital-font'>" + newTime(x) + "</span>" ;

    }, 1000);
   }
function myClose() {
    //   alert("test");
    var element = document.getElementById("divTest");
    element.classList.remove("show");
    element.classList.add("out");
}
function newTime(x) {

    switch (x) {
        case "New-York":
            return new Date().toLocaleString("en-us", { timeZone: "America/New_york", timeStyle: "medium", hourCycle: "h24" })
            break;
        case "London":
            return new Date().toLocaleString("en-us", { timeZone: "Europe/London", timeStyle: "medium", hourCycle: "h24" })
            break;
        case "Australia":
            return new Date().toLocaleString("en-us", { timeZone: "Australia/Sydney", timeStyle: "medium", hourCycle: "h24" })
            break;
         //case "Maleshiya":
         //   return new Date().toLocaleString("en-us", { timeZone: "MYT", timeStyle: "medium", hourCycle: "h24" })
         //    break;
        default:
            alert("Sorry for inturruption, Not Added!!");
            break;
    }
   
}