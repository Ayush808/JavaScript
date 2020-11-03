var date = new Date().getUTCDay();

switch (date) {
    case 1:
        day = "Monday"
        break;
    case 2:
        day = "Tuesday"
        break;
    case 3:
        day = "Wednessday"
        break;
    case 4:
        day = "Thrusday"
        break;
    case 5:
        day = "Friday"
        break;
    case 6:
        day = "Saturday"
        break;
    case 7:
        day = "Sunday"
        break;
}

var time = new Date();
var hr = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();

console.log("Day: " + day);
console.log("Time: " + hr + " : " + min + " : " + sec);