function loadOther() {
    var imageFileAlt = "media/images/1.png";
    document.getElementById("imageID").src = imageFileAlt;
}

var date = new Date();
var dd = date.getDate();
var mm = date.getMonth() + 1;
var yyyy = date.getFullYear();
var imageFile = "media/images/" + dd + "-" + mm + "-" + yyyy + ".png";

