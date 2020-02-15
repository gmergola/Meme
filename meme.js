
var form = document.getElementById("frm1");
var topText = document.getElementById("textontop");
var bottomText = document.getElementById("textonbottom");
var imageURL = document.getElementById("imglink");
var gallery = document.getElementById("gallery");

form.addEventListener("submit", function(event){
    event.preventDefault();

     // creating parent div
    let theDiv = document.createElement("div");
    theDiv.classList.add("the-div");
    
     
    // creating top text div
    var topSpan = document.createElement("span"); 
    topSpan.classList.add("top");
    // giving it some content 
    var textInside = document.createTextNode(topText.value); 
    // adding the text node to the newly created div
    topSpan.appendChild(textInside);  
    theDiv.appendChild(topSpan);

    
    // creating bottom text div
    var bottomSpan = document.createElement("span"); 
    bottomSpan.classList.add("bottom");
    // giving it some content 
    var bottomInside = document.createTextNode(bottomText.value); 
    // adding the text node to the newly created div
    bottomSpan.appendChild(bottomInside);  
    theDiv.appendChild(bottomSpan);

    // creating image
    var image = document.createElement("img"); 
    image.classList.add("image");
    // giving it some content 
    image.src = imageURL.value;
    image.width = "600";
    image.height = "500";
    theDiv.appendChild(image);  
  

    // adding the meme to the page
    var biggestDiv = document.createElement("div");
    biggestDiv.classList.add("biggest-div")
    biggestDiv.appendChild(theDiv);
    gallery.appendChild(biggestDiv);
    form.reset();

    //removing each meme
    biggestDiv.addEventListener("click", function(){
        biggestDiv.removeChild(theDiv);
    });

});

















