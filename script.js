var date = new Date();
var min = date.getMinutes();
var hou = date.getHours();
var dd = date.getDate();
var mm = date.getMonth() + 1;
var yyyy = date.getFullYear();

var minSince = min-29;
var houSince = hou-22;
var ddSince = dd-4;
var mmSince = mm-4;
var yySince = yyyy-2019;
if (houSince < 0) {
    houSince = 24 + houSince;
}
if (minSince < 0) {
    minSince = 60 + minSince;
}

var timeSince = "Il y a " + yySince + " années, " + mmSince + " mois, " + ddSince + " jours, " + houSince + " heures et " + minSince + " minutes.";
var fullDate = dd + "-" + mm + "-" + yyyy;

var imageFile = "media/images/" + fullDate + ".png";
var linkFile = "media/links/" + fullDate + ".txt";
var textFile = "media/texts/" + fullDate + ".txt";

function getRandom(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

$.get(imageFile)
    .done(function() {
        document.getElementById("imageID").src = imageFile;
    }).fail(function() {
        var imageFile = "media/images/R" + getRandom(0,1) + ".png";
        document.getElementById("imageID").src = imageFile;
    })

$.get(linkFile)
    .done(function() {
        $.get(linkFile, function(data) {
            var ytbLink = "https://www.youtube.com/embed/" + data;
            document.getElementById("linkID").src = ytbLink;
        });
    }).fail(function() {
        var linkFile = "media/links/R" + getRandom(0,1) + ".txt";
        $.get(linkFile, function(data) {
            var ytbLink = "https://www.youtube.com/embed/" + data;
            document.getElementById("linkID").src = ytbLink;
        });
    })

$.get(textFile)
    .done(function() {
        document.getElementById("textID").src = textFile;
    }).fail(function() {
        var textFile = "media/texts/R" + getRandom(0,1) + ".txt";
        document.getElementById("textID").src = textFile;
    })

window.onload = function() {document.getElementById("sinceID").innerHTML = timeSince;}