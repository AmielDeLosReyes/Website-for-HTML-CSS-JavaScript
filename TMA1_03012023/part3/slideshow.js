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
// for (let i = 0; i < N_IMAGES; i++) {
//     myImages[i] = "images/" + i + ".JPG";
// }

// JSON Object
var jsonObject = [
	{
		imageSource: "images/0.JPG",
		caption: "Tumalog Falls at Cebu, Philippines"	
	},
	{
		imageSource: "images/1.JPG",
		caption: "Walking at Boracay Island, Philippines with white sand"	
	},
	{
		imageSource: "images/2.JPG",
		caption: "Walking around Vancouver, Canada airport"	
	},
	{
		imageSource: "images/3.JPG",
		caption: "Food at El Nido, Palawan, Philippines"	
	},
	{
		imageSource: "images/4.JPG",
		caption: "Picking strawberries at Strawberry farm at Baguio City, Philippines"	
	},
	{
		imageSource: "images/5.JPG",
		caption: "Underground river at Puerto Princesa, Palawan, Philippines"	
	},
	{
		imageSource: "images/6.JPG",
		caption: "Recorded tour audio for Underground river at Puerto Princesa, Palawan, Philippines"	
	},
	{
		imageSource: "images/7.JPG",
		caption: "Eating breakfast at Antipolo, Rizal, Philippines (Lihim na Batis - Secret Lagoon)"	
	},
    {
		imageSource: "images/8.JPG",
		caption: "Swimming pool at Antipolo, Rizal, Philippines (Lihim na Batis - Secret Lagoon)"	
	},
    {
		imageSource: "images/9.JPG",
		caption: "Statues at Vancouver, Canada airport"	
	},
    {
		imageSource: "images/10.JPG",
		caption: "Monkey forrest at Puerto Princesa, Palawan, Philippines"	
	},
    {
		imageSource: "images/11.JPG",
		caption: "Street food dinner at Cebu City, Philippines"	
	},
    {
		imageSource: "images/12.JPG",
		caption: "Forbidden bridge at Kawasan Falls Cebu, Philippines"	
	},
    {
		imageSource: "images/13.JPG",
		caption: "Standing infront of the Spoliarium painting in the Philippine Museum"	
	},
    {
		imageSource: "images/14.JPG",
		caption: "National Musuem with a big Philippine flag"	
	},
    {
		imageSource: "images/15.JPG",
		caption: "Vintage crosswalk at Intramuros, Manila, Philippines"	
	},
    {
		imageSource: "images/16.JPG",
		caption: "Sitting at a white sand infront of a beach at Boracay Island Philippines"	
	},
    {
		imageSource: "images/17.JPG",
		caption: "Abandoned church at Baguio City, Philippines"	
	},
    {
		imageSource: "images/18.JPG",
		caption: "Big lagoon at El Nido, Palawan, Philippines"	
	},
    {
		imageSource: "images/19.JPG",
		caption: "Sitting at a side beach at El Nido, Palawan, Philippines"	
	},
    {
		imageSource: "images/20.JPG",
		caption: "Big garden at Cebu City, Philippines"	
	}
];

// Store images and captions into an array
for (let i = 0; i < N_IMAGES; i++) {
    myImages[i] = jsonObject[i].imageSource;
    myCaptions[i] = jsonObject[i].caption;
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

    ctx.fillStyle = "darkred";
    ctx.font = "20px Georgia";
    ctx.fillText(myCaptions[currentImageIndex], 10, 50);
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
