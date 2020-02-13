
var form = document.getElementById("frm1");
var topText = document.getElementById("textontop");
var bottomText = document.getElementById("textonbottom");
var imageURL = document.getElementById("imglink");
var gallery = document.getElementById("gallery");

document.body.onload = form.addEventListener("submit", function(event){
    event.preventDefault();

     // creating parent div
    let theDiv = document.createElement("div");
    theDiv.classList.add("the-div");

    // creating image
    var divImage = document.createElement("div");
    var image = document.createElement("img"); 
    image.classList.add("image");
    // giving it some content 
    image.src = imageURL.value;
    image.width = "600";
    image.height = "500";
    // adding the text node to the newly created div
    divImage.appendChild(image);
    theDiv.appendChild(divImage);  
    
     
    // creating top text div
    var topSpan = document.createElement("div"); 
    topSpan.classList.add("top");
    // giving it some content 
    var textInside = document.createTextNode(topText.value); 
    // adding the text node to the newly created div
    topSpan.appendChild(textInside);  
    theDiv.appendChild(topSpan);
    var memeGallery = document.body.insertBefore(theDiv, memeGallery); 

    
    
    // creating bottom text div
    var bottomSpan = document.createElement("div"); 
    bottomSpan.classList.add("bottom");
    // giving it some content 
    var bottomInside = document.createTextNode(bottomText.value); 
    // adding the text node to the newly created div
    bottomSpan.appendChild(bottomInside);  
    theDiv.appendChild(bottomSpan);
    var memeGallery = document.body.insertBefore(theDiv, memeGallery); 

    gallery.appendChild(theDiv);
    form.reset();

});















