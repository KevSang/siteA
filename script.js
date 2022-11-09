var date = new Date();
var dd = date.getDate();
var mm = date.getMonth() + 1;
var yyyy = date.getFullYear();
var imageFile = "media/images/" + dd + "-" + mm + "-" + yyyy + ".png";

$.get(imageFile)
    .done(function() {
        console.log(imageFile + " existe");
        document.getElementById("imageID").src = imageFile;
    }).fail(function() {
        console.log(imageFile + " existe pas");
        var imageFile = "/media/images/" + "1" + ".png";
        document.getElementById("imageID").src = imageFile;
    })