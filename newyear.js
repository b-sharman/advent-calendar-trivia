// I omitted the colors that didn't seem dark/vibrant enough
// https://www.w3schools.com/w3css/w3css_colors.asp
var w3Colors = ["red",
                "pink",
                "purple",
                "deep-purple",
                "indigo",
                "blue",
                "teal",
                "green",
//                "light-green",
//                "orange",
                "deep-orange",
                "blue-gray",
                "brown",
//                "gray",
                "dark-gray"
                ];
var color = w3Colors[Math.floor(Math.random() * w3Colors.length)];

var months = ["January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"];

var today = new Date();
var dateString = months[today.getMonth()] + " " + today.getDate();

for (var element of document.getElementsByClassName("w3-card")) {
    element.classList.add("w3-border-" + color);
}

function format(arg) {
    var ret = Math.trunc(arg).toString();
    if (ret.length == 1) {
        ret = "0" + ret;
    }

    return ret;
}

function checkTime() {
    if (!((today.getMonth() == 0) && (today.getDate() == 1))) {
        var year = today.getFullYear();

        var newYear = new Date("January 1, " + (year + 1) + " 00:00:00");
        var diff = newYear.getTime() - Date.now();
        var days = diff / 86400000;
        var hours = (days - Math.trunc(days)) * 24;
        var minutes = (hours - Math.trunc(hours)) * 60;
        var seconds = (minutes - Math.trunc(minutes)) * 60;

        // Don't show the number of days if it's only hours left
        if (Math.trunc(days) == 0) {
            console.log(":P");
            var days = "";
        }
        else {
            days = Math.trunc(days) + " days ";
        }

        document.getElementById("countdown").innerHTML = days + format(hours) + ":" + format(minutes) + ":" + format(seconds) + " to wait";
        setTimeout(checkTime, 1000); // check again in 1000 ms
    }
    else {
        document.getElementById("countdown").innerHTML = "Happy New Year!";
    }
}

function center_card() {
    // Center the card
    //
    // I'm tired of trying to use CSS hacks to center vertically
    // This way stinks too
    // Welcome to web dev
    var bodyHeight = document.getElementsByTagName("body")[0].clientHeight;
    var cardHeight = document.getElementsByClassName("w3-card")[0].clientHeight;
    var padding = (bodyHeight - cardHeight) / 2;
    // I don't think the String() is necessary, but it makes me feel good
    document.getElementsByTagName("body")[0].style.padding = String(padding) + "px 0";
}

window.onload = center_card();
window.onresize = center_card;

document.getElementById("title").innerHTML = dateString;

checkTime();

// We have to call this function so many times
center_card();
