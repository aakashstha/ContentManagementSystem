var index = 0;
coverSlides();

function coverSlides() {
    var image = document.getElementsByClassName("cover_image");
    for (var i = 0; i < image.length; i++) {
        image[i].style.display = "none";
    }
    index++;
    if (index > image.length) { index = 1 }
    image[(index - 1)].style.display = "block";
    // time to change the slide is set to 4 seconds
    setTimeout(coverSlides, 4000);
}

function changeFunction() {
    if (header_link.style.display == "block") {
        document.getElementById("header_link").style.display = "none";
    } else {
        document.getElementById("header_link").style.display = "block";
    }

}

