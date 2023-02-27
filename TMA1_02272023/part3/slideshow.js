// Work Variables
var startButton = $("#start_button");
var stopButton = $("#stop_button");
var nextButton = $("next_button");
var previousButton = $("previous_button");
var randomButton = $("random_button");
var seqButton = $("seq_button");

var N_IMAGES = 20;

var stopSlideshow;
var currentImageIndex = 0;
var nextImageIndex = 1;
var x = 0;
var y = 0;
var myImages = new Array(N_IMAGES);
var myCaptions = new Array(N_IMAGES);
var counter = 0;


// Iterate through the images array
for (let i = 0; i < N_IMAGES; i++) {
    myImages[i] = "images/" + i + ".JPG";
}

// Function for buttons
$(function() {

    
    // Show Stop button when Start button is clicked
    stopButton.hide();
    startButton.click(function() {
        startButton.hide();
        stopButton.show();
        stopSlideshow = setInterval(startSlideshow, 75);
    });

    // Show Start button when Stop button is clicked
    stopButton.click(function() {
        stopButton.hide();
        startButton.show();
        clearInterval(stopSlideshow);
    });

    // Next button function
    nextButton.click(function() {
        currentImage.src = myImages[currentImageIndex + 1];
        ctx.save();
        ctx.translate(x, y);
        ctx.drawImage(currentImage, 0, 0, imageWidth, imageHeight);
    });

});

window.onload = startSlideshow();

// function to start the slideshow
function startSlideshow() {

    let canv = document.getElementById("my_canvas");
    let ctx = canv.getContext("2d");

    // Work Variables
    let imageWidth = canv.width,
        imageHeight = canv.height,
        currentImage = new Image(),
        nextImage = new Image(),
        speedX = 10,
        speedY = 12;

    ctx.clearRect(0, 0, canv.width, canv.height);

    nextImage.src = myImages[nextImageIndex];
    ctx.save();
    ctx.translate(x, y);
    ctx.drawImage(nextImage, 0, 0, imageWidth, imageHeight);
    ctx.restore();
    
    currentImage.src = myImages[currentImageIndex];
    ctx.save();
    ctx.translate(x, y);
    ctx.drawImage(currentImage, 0, 0, imageWidth, imageHeight);

    ctx.fillStyle = "#FF0000";
    ctx.font = "20px Georgia";
    ctx.fillText("I am having trouble with working with captions for each photo :(", 10, 50);
    ctx.restore();

    counter++;    

    if(counter > 5 && counter < 60) {
        // x += speedX;
        y += speedY;
    }else if(counter == 70) {
        y = 0;
        currentImageIndex = (currentImageIndex + 1) % N_IMAGES;
        nextImageIndex = (nextImageIndex + 1) % N_IMAGES;
    }else if(counter > 100 && counter < 160) {
        x -= speedX;
        y -= speedY;
    } else if (counter == 200) {
        counter = 0;
        x = 0;
        y = 0;
        currentImageIndex = (currentImageIndex + 1) % N_IMAGES;
        nextImageIndex = (nextImageIndex + 1) % N_IMAGES;

    }
}


// function next() {

//     let canv = document.getElementById("my_canvas");
//     let ctx = canv.getContext("2d");

//     // Work Variables
//     let imageWidth = canv.width,
//         imageHeight = canv.height,
//         currentImage = new Image(),
//         nextImage = new Image(),
//         speedX = 10,
//         speedY = 12;

//     console.log("Next function executed");

//     currentImage.src = myImages[currentImageIndex + 1];
//     ctx.save();
//     ctx.translate(x, y);
//     ctx.drawImage(currentImage, 0, 0, imageWidth, imageHeight);

// }

