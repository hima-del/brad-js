// window.onload = function() {
//     console.log("Yeah, that page loaded!");
// };

function cookieAlarm() {
    console.log("Time to take the cookies out of the oven");
};
setTimeout(cookieAlarm, 6000);

//using anonymous functions

setTimeout(function() { console.log("Time to take the cookies out of the oven"); }, 6000);