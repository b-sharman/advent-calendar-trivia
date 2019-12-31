// we are going to write the json directly in here because A) it looks like it's hard to read a file and
// B) if I ever want to package this into an app or distribute it to friends, it will be nice to not have
// to deal with compatibilities and a random json file lying around.
var triviaJson = `
{"1":{"title":"What was the name of Joseph\'s father?",
      "options":["Josiah", "Jechoniah", "Jehoshaphat", "Jacob"],
      "icons": ["times", "times", "times", "check"],
      "verse":"&hellip;Matthan the father of Jacob, and Jacob the father of Joseph the husband of Mary, of whom Jesus was born, who is called Christ.",
      "chapter":"Matthew 1:15b-16"
      },
 "2":{"title":"Which angel told Mary she would bear a son?",
      "options":["Michael", "Gabriel", "Lucifer", "Their name wasn\'t mentioned"],
      "icons": ["times", "check", "times", "times"],
      "verse":"In the sixth month the angel Gabriel was sent from God to a city of Galilee named Nazareth, to a virgin betrothed to a man whose name was Joseph, of the house of David. And the virgin's name was Mary.",
      "chapter":"Luke 1:26"
     },
 "3":{"title":"Who was governor of Syria when Caesar Augustus called a census?",
      "options":["Antoninus", "Quintinus", "Zechariah", "Quirinius"],
      "icons": ["times", "times", "times", "check"],
      "verse":"In those days a decree went out from Caesar Augustus that all the world should be registered. This was the first registration when Quirinius was governor of Syria.",
      "chapter":"Luke 2:1-2"
     },
 "4":{"title":"Who prophesied that Jesus' birth would be in Bethlehem?",
      "options":["Zechariah", "Isaiah", "Malachi", "Micah"],
      "icons": ["times", "times", "times", "check"],
      "verse":"But you, O Bethlehem Ephrathah, who are too little to be among the clans of Judah, from you shall come forth for me one who is to be ruler in Israel, whose coming forth is from of old, from ancient days.",
      "chapter":"Micah 5:2"
     },
 "5":{"title":"Where did the Wise Men come from?",
      "options":["The North", "The South", "The East", "The West"],
      "icons": ["times", "times", "check", "times"],
      "verse":"And going into the house, they saw the child with Mary his mother, and they fell down and worshiped him. Then, opening their treasures, they offered him gifts, gold and frankincense and myrrh. And being warned in a dream not to return to Herod, they departed to their own country by another way.",
      "chapter":"Matthew 2:1-2"
     },
 "6":{"title":"Which of these titles appeared in Isaiah 9:6?",
      "options":["Everlasting Father", "Wonderful God", "Mighty Counselor", "Everlasting Prince"],
      "icons": ["check", "times", "times", "times"],
      "verse":"For to us a child is born, to us a son is given; and the government shall be upon his shoulder, and his name shall be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.",
      "chapter":"Isaiah 9:6"
     },
 "7":{"title":"Select the missing word: And the Word became flesh and “&hellip;” among us",
      "options":["walked", "lived", "dwelt", "taught"],
      "icons": ["times", "times", "check", "times"],
      "verse":"And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.",
      "chapter":"John 1:14"
     },
 "8":{"title":"Why did the shepherds go to Bethlehem?",
      "options":["To tell others what the angels said", "To hide from the angels", "To see the Savior", "To buy food"],
      "icons": ["times", "times", "check", "times"],
      "verse":"And the angel said to them, “Fear not, for behold, I bring you good news of great joy that will be for all the people. For unto you is born this day in the city of David a Savior, who is Christ the Lord. And this will be a sign for you: you will find a baby wrapped in swaddling cloths and lying in a manger.” &hellip; When the angels went away from them into heaven, the shepherds said to one another, “Let us go over to Bethlehem and see this thing that has happened, which the Lord has made known to us.” And they went with haste and found Mary and Joseph, and the baby lying in a manger.",
      "chapter":"Luke 2:10-12, 15-16"
     },
 "9":{"title":"How did Joseph and Mary travel to Bethlehem?",
      "options":["Donkey", "Camel", "They walked", "Not specified"],
      "icons": ["times", "times", "times", "check"],
      "verse":"It's never specified.",
      "chapter":"?"
     },
 "10":{"title":"How did Jacob know he was supposed to flee to Egypt?",
      "options":["He was summoned by King Tut", "An angel told him to flee in a dream", "The Wise Men told him that Herod was going to kill the child", "Herod was angry and told him to leave Bethlehem"],
      "icons": ["times", "check", "times", "times"],
      "verse":"Now when they had departed, behold, an angel of the Lord appeared to Joseph in a dream and said, “Rise, take the child and his mother, and flee to Egypt, and remain there until I tell you, for Herod is about to search for the child, to destroy him.”",
      "chapter":"Matthew 2:13"
     },
 "11":{"title":"Why didn't the Wise Men report back to Herod after seeing Jesus?",
      "options":["They were warned in a dream", "Herod told them that they no longer had to report", "They were killed by Herod's decree", "They were afraid Herod would punish them"],
      "icons": ["check", "times", "times", "times"],
      "verse":"And going into the house, they saw the child with Mary his mother, and they fell down and worshiped him. Then, opening their treasures, they offered him gifts, gold and frankincense and myrrh. And being warned in a dream not to return to Herod, they departed to their own country by another way.",
      "chapter":"Matthew 2:11-12"
     },
 "12":{"title":"What were the ages of the male children that Herod killed?",
      "options":["6 months or younger", "1 year or younger", "2 years or younger", "3 years or younger"],
      "icons": ["times", "times", "check", "times"],
      "verse":"Then Herod, when he saw that he had been tricked by the wise men, became furious, and he sent and killed all the male children in Bethlehem and in all that region who were two years old or under, according to the time that he had ascertained from the wise men.",
      "chapter":"Matthew 2:16"
     },
 "13":{"title":"Why did Joseph leave Judea after returning from Egypt?",
      "options":["Because he wanted to live in his home town again", "His friend Archelaus recommended it", "Herod threatened to kill all male children again", "Herod's son was ruling over Judea"],
      "icons": ["times", "times", "times", "check"],
      "verse":"But when Herod died, behold, an angel of the Lord appeared in a dream to Joseph in Egypt, saying, “Rise, take the child and his mother and go to the land of Israel, for those who sought the child's life are dead.” And he rose and took the child and his mother and went to the land of Israel. But when he heard that Archelaus was reigning over Judea in place of his father Herod, he was afraid to go there, and being warned in a dream he withdrew to the district of Galilee. And he went and lived in a city called Nazareth, so that what was spoken by the prophets might be fulfilled, that he would be called a Nazarene.",
      "chapter":"Matthew 2:19-23"
     },
 "14":{"title":"Which of these did John the Baptist wear?",
      "options":["A garment of goat's hair", "A toga of camel's hair", "A garment of camel's hair", "Bear skin"],
      "icons": ["times", "times", "check", "times"],
      "verse":"Now John wore a garment of camel's hair and a leather belt around his waist, and his food was locusts and wild honey.",
      "chapter":"Matthew 3:4"
     },
 "15":{"title":"Which one of these were contacted directly instead of through a dream?",
      "options":["Elizabeth", "The Wise Men", "Joseph", "Mary"],
      "icons": ["times", "times", "times", "check"],
      "verse":"In the sixth month the angel Gabriel was sent from God to a city of Galilee named Nazareth, to a virgin betrothed to a man whose name was Joseph, of the house of David. And the virgin's name was Mary. And he came to her and said, “Greetings, O favored one, the Lord is with you!”",
      "chapter":"Luke 1:26-28"
     },
 "16":{"title":"Where was Zechariah's house?",
      "options":["Venice", "Bethlehem", "The hill country", "Zechariah and Joseph shared a house"],
      "icons": ["times", "times", "check", "times"],
      "verse":"In those days Mary arose and went with haste into the hill country, to a town in Judah, and she entered the house of Zechariah and greeted Elizabeth.",
      "chapter":"Luke 1:39-40"
     },
 "17":{"title":"When an angel of the Lord appeared to the shepherds, where did the glory of the Lord shine?",
      "options":["Over them", "Through them", "Around them", "Into them"],
      "icons": ["times", "times", "check", "times"],
      "verse":"And in the same region there were shepherds out in the field, keeping watch over their flock by night. And an angel of the Lord appeared to them, and the glory of the Lord shone around them, and they were filled with great fear.",
      "chapter":"Luke 2:8-9"
     },
 "18":{"title":"When did Gabriel tell Mary to name her baby Jesus?",
      "options":["Eight days after birth", "Seven days after birth", "Before he was conceived", "After he was conceived"],
      "icons": ["times", "times", "check", "times"],
      "verse":"And at the end of eight days, when he was circumcised, he was called Jesus, the name given by the angel before he was conceived in the womb.",
      "chapter":"Luke 2:21"
     },
 "19":{"title":"How many verses are there in Luke 1?",
      "options":["50", "60", "70", "80"],
      "icons": ["times", "times", "times", "check"],
      "verse":"And the child grew and became strong in spirit, and he was in the wilderness until the day of his public appearance to Israel.",
      "chapter":"Luke 1:80"
     },
 "20":{"title":"When Mary and Joseph presented Jesus at Jerusalem, what did they sacrifice?",
      "options":["A lamb a year old and a pigeon or dove", "A pair of turtledoves, or two young pigeons", "A grain offering of unleavened loaves", "Two turtledoves and a partridge in a pear tree"],
      "icons": ["times", "check", "times", "times"],
      "verse":"And when the time came for their purification according to the Law of Moses, they brought him up to Jerusalem to present him to the Lord (as it is written in the Law of the Lord, “Every male who first opens the womb shall be called holy to the Lord”) and to offer a sacrifice according to what is said in the Law of the Lord, “a pair of turtledoves, or two young pigeons.”",
      "chapter":"Luke 2:22-24"
     },
 "21":{"title":"What was Simeon waiting for?",
      "options":["The King of Israel", "The Savior of Israel", "The peace of Israel", "The consolation of Israel"],
      "icons": ["times", "times", "times", "check"],
      "verse":"Now there was a man in Jerusalem, whose name was Simeon, and this man was righteous and devout, waiting for the consolation of Israel, and the Holy Spirit was upon him.",
      "chapter":"Luke 2:25"
     },
 "22":{"title":"Select the missing word from the Magnificat: For behold, from now on all generations will call me &hellip;",
      "options":["exalted", "blessed", "favored", "humble"],
      "icons": ["times", "check", "times", "times"],
      "verse":"My soul magnifies the Lord, and my spirit rejoices in God my Savior, for he has looked on the humble estate of his servant. For behold, from now on all generations will call me blessed.",
      "chapter":"Luke 1:46a-48"
     },
 "23":{"title":"Name the chapter and verse: “But Mary treasured up all these things, pondering them in her heart.”",
      "options":["Luke 2:7", "Luke 2:14", "Luke 2:19", "Luke 2:51"],
      "icons": ["times", "times", "check", "times"],
      "verse":"But Mary treasured up all these things, pondering them in her heart.",
      "chapter":"Luke 2:19"
     },
 "24":{"title":"The wise men offered gold, frankincense, and",
      "options":["myhr", "myrh", "myrrhe", "myrrh"],
      "icons": ["times", "times", "times", "check"],
      "verse":"And going into the house, they saw the child with Mary his mother, and they fell down and worshiped him. Then, opening their treasures, they offered him gifts, gold and frankincense and myrrh.",
      "chapter":"Matthew 2:11"
     },
 "25":{"title":"What information did Herod want from the wise men?",
      "options":["Where the Christ was to be born", "What countries they came from", "What time the star appeared", "What gifts they carried"],
      "icons": ["times", "times", "check", "times"],
      "verse":"Then Herod summoned the wise men secretly and ascertained from them what time the star had appeared.",
      "chapter":"Matthew 2:7"
     }
}`;

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

var alltrivia = JSON.parse(triviaJson);

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
var letters = ["a", "b", "c", "d"];
var ths = ["First", "Second", "Third", "Fourth"];

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
    if (today.getMonth() !== 11 || (today.getMonth() == 11 && today.getDate() > 25)) {
        var startOfAdvent = new Date("December 1, " + today.getFullYear() + " 00:00:00");
        var diff = startOfAdvent.getTime() - Date.now();
        var days = diff / 86400000;
        var hours = (days - Math.trunc(days)) * 24;
        var minutes = (hours - Math.trunc(hours)) * 60;
        var seconds = (minutes - Math.trunc(minutes)) * 60;

        // Don't show the number of days if it's only hours left
        if (Math.trunc(days) == 0) {
            console.log(":P");
            var days = "";
        }

        document.getElementById("countdown").innerHTML = Math.trunc(days).toString() + " days " + format(hours) + ":" + format(minutes) + ":" + format(seconds) + " to wait";
        setTimeout(checkTime, 1000); // check again in 1000 ms
    }
}

function check(choice) {
    document.getElementById(choice + "-icon-holder").classList.remove("hidden");
    document.getElementById("cont").classList.remove("hidden");
    letters.forEach(function(letter, i) {
        var option = document.getElementById("option-" + letter)
        option.classList.remove("w3-hover-light-gray");
        option.removeAttribute("onclick");

        // always show the correct answer
        if (trivia.icons[i] == "check") {
            var iconClassList = document.getElementById(letter + "-icon-holder").classList
            iconClassList.remove("hidden");
            iconClassList.add("w3-animate-zoom");
        }
    });

    center_card();
}

function show_exp() {
    document.getElementById("choices").classList.add("hidden");
    document.getElementById("cont").classList.add("hidden");
    console.log(document.getElementById("cont").classList);
    document.getElementById("exp").classList.remove("hidden");

    center_card();
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

if (today.getMonth() !== 11 || today.getDate() > 25) {
    document.getElementById("choices").classList.add("hidden");
    document.getElementById("countdown").classList.remove("hidden");

    document.getElementById("title").innerHTML = "It's not Advent season yet";
    document.getElementById("date").innerHTML = dateString;

    document.title += " (Not Advent season yet)";

    checkTime();

    throw Error("Not advent season");
}
else {
    document.title += " Day " + today.getDate() + " - Advent Calendar Trivia " + today.getFullYear();
}

var trivia = alltrivia[today.getDate()];
// var trivia = alltrivia[10];

if (today.getDay() == 0) {
    dateString += " (" + ths[Math.floor(today.getDate() / 7)] + " Sunday of Advent)";
}
if (today.getDate() == 24) {
    dateString += " (Christmas Eve)";
}
if (today.getDate() == 25) {
    dateString += " (Christmas)";
    document.getElementById("image").classList.remove("hidden");
}

document.getElementById("date").innerHTML = dateString;
document.getElementById("title").innerHTML = trivia.title;

document.getElementById("verse").innerHTML = trivia.verse;
document.getElementById("chapter").innerHTML = "&mdash;" + trivia.chapter;

letters.forEach(function(letter, i) {
    // don't use .innerHTML = because it DESTROYS all child elements
    // that is really scary and hard to debug
    // as I learned the hard way :P
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
    document.getElementById("option-" + letter).insertAdjacentHTML("afterbegin", trivia.options[i]);
    document.getElementById(letter + "-icon").classList.add("fas", "fa-" + trivia.icons[i]);
    if (trivia.icons[i] == "check") {
        document.getElementById(letter + "-icon-holder").classList.add("w3-text-green");
    }
    else {
        document.getElementById(letter + "-icon-holder").classList.add("w3-text-red");
    }
});

// We have to call this function so many times
center_card();
