//create an array
var colorList = ["Red", "Black", "White", "Blue", "Ocher", "Yellow", "Pink"];

//console.log(colorList) //logs to the console the list of colors in the order created initially, above
//colorList.sort(); //sorts the array alphabetically
//console.log(colorList); //logs to the console the list of colors in alphabetical order 
// [0] is for the first color in the initial color list Red, [3] is blue, etc.
//variables IN functions (function scope), can see global varibles)
//console.log(colorList[0]); //logs to the console the 1st color in the current sort order, Black
//make a list of scores (numbers)
var scores = [12, 2, 300, 40, 23, 43, 53, 13, 25, 90, 43, 23];
//console.log(scores); //console.log(scores[0]); //within console view you can type scores.pop and see the last value in the list of scores. In this case the console will respond by displaying 23. Enter scores.pop again and you'll see the 2nd to last number in the scores array, 43.

//colorList.pop(); //this removes the end element (and returns the 2nd to last element)
//assign the end element to a result variable
//var endElement = colorList.pop();

//colorList.shift(); //removes the first element

//colorList.unshift("brown ");//the unshift adds to the start of the list
colorList.splice(0,5);//Splice takes out 1 or many elements. It takes 2 arguments. 1st: STARTING position. 2nd: how many to take out. 
//colorList.shift();
//colorList.splice(0, 5);

var myThumbDiv = document.getElementById("thumbs");


var imageListA = [] //new Array(); //this is the "Constructor" method
imageListA[0] = "images/drawing/thumbs/artwork_1.jpg";
imageListA[1] = "images/drawing/thumbs/artwork_2.jpg";
imageListA[2] = "images/drawing/thumbs/artwork_3.jpg";
imageListA[3] = "images/drawing/thumbs/artwork_4.jpg";
imageListA[4] = "images/drawing/thumbs/artwork_5.jpg";
imageListA[5] = "images/drawing/thumbs/artwork_6.jpg";
imageListA[6] = "images/drawing/thumbs/artwork_7.jpg";
imageListA[7] = "images/drawing/thumbs/artwork_8.jpg";
imageListA[8] = "images/drawing/thumbs/artwork_9.jpg";
imageListA[9] = "images/drawing/thumbs/artwork_10.jpg";
imageListA[10] = "images/drawing/thumbs/artwork_11.jpg";
imageListA[11] = "images/drawing/thumbs/artwork_12.jpg";
imageListA[12] = "images/drawing/thumbs/artwork_13.jpg";
imageListA[13] = "images/drawing/thumbs/artwork_14.jpg";
imageListA[14] = "images/drawing/thumbs/artwork_15.jpg";
imageListA[15] = "images/drawing/thumbs/artwork_16.jpg";
imageListA[16] = "images/drawing/thumbs/artwork_17.jpg";

//oil painting art
var imageListB = []  // new Array();
imageListB[0] = "images/oil/thumbs/artwork_1.jpg";
imageListB[1] = "images/oil/thumbs/artwork_2.jpg";
imageListB[2] = "images/oil/thumbs/artwork_3.jpg";
imageListB[3] = "images/oil/thumbs/artwork_4.jpg";
imageListB[4] = "images/oil/thumbs/artwork_5.jpg";
imageListB[5] = "images/oil/thumbs/artwork_6.jpg";
imageListB[6] = "images/oil/thumbs/artwork_7.jpg";
imageListB[7] = "images/oil/thumbs/artwork_8.jpg";

//watercolor art
var imageListC = [] //new Array();
imageListC[0] = "images/watercolor/thumbs/artwork_1.jpg";
imageListC[1] = "images/watercolor/thumbs/artwork_2.jpg";
imageListC[2] = "images/watercolor/thumbs/artwork_3.jpg";
imageListC[3] = "images/watercolor/thumbs/artwork_4.jpg";
imageListC[4] = "images/watercolor/thumbs/artwork_5.jpg";
imageListC[5] = "images/watercolor/thumbs/artwork_6.jpg";
imageListC[6] = "images/watercolor/thumbs/artwork_7.jpg";
imageListC[7] = "images/watercolor/thumbs/artwork_8.jpg";
imageListC[8] = "images/watercolor/thumbs/artwork_9.jpg";
imageListC[9] = "images/watercolor/thumbs/artwork_10.jpg";

//create the buildThumbnail function
function buildThumbnails()
{
	//hook onto the thumbs div
	var thumbsDiv = document.getElementById("thumbs");
	
	//create an output variable
	var output = "";
	//first part: counter (we set up 0 to start counting the loop)
	//second part: condition, (the loop will keep looping as long as the condition is true)
	//third part: incrementor - adds one to the counter AFTER the code is executed in the brackets
	output += '<div class="thumbs_block"> '; //we're building the first string w
  //+= is the concatenation assignment operator
    for(var i=0; i < imageListA.length; i++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListA[i] + '" />';
	}
    output += '</div>';
    output += '<div class="thumbs_block"> ';
	for(var j=0; j < imageListB.length; j++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListB[j] + '" />';
	}
	output += '</div>';
    output += '<div class="thumbs_block"> ';
//  
	for(var k=0; k < imageListC.length; k++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListC[k] + '" />';
	}
    output += '</div>';
  
	thumbsDiv.innerHTML = output;
	// thumbsDiv.innerHTML = 
	// '<img src="' + imageList[0] + '" />' + 
	// '<img src="' + imageList[1] + '" />' +
	// '<img src="' + imageList[2] + '" />' +
	// '<img src="' + imageList[3] + '" />' +	
	// '<img src="' + imageList[4] + '" />'
	// ;
}

window.onload = function()
{
	buildThumbnails();//use or "fire off" this function
	//or invoke the function
};
//HW creating a new array variable (a list) to hold the purchased images
var purchasedImages = [];

//last week we showed 2 different ways to create an array
//create an array literal (best practice). This looks like the following: var my array
//var imageListA = new Array();

//attach a click event to the DIV with id="thumbs"
//var myThumbDiv = document.getElementById("thumbs");This is created higher up on this page of code.
myThumbDiv.addEventListener("click", onImageClick, false);

//false is the default position, which ensures we bubble to the top to start. We are binding an event to an element
//the function handler
function onImageClick(evt) //event data is coming to the function. the data is an object
{
  //HW we want only the src attribute of the image so we need to get the "src" attribute of the img tag we click on.
  var onlyPath = evt.target.getAttribute("src");
  //console.log(onlyPath);
  
//HW the IndexOf array method searches for a match in the array and if it finds the data, it sends back (or returns) the index position in the array. 
  var imageIndex = imageListA.indexOf(onlyPath);
  
  //console.log(evt.target);
  //console.log(imageIndex);
  //get the element you clicked on OUT of the imageListA array and save the clicked image path to a variable so we can use it later.
  var selectedImage = imageListA.splice(imageIndex, 1);
  //console.log(selectedImage);
  
  //add this image path to the purchasedImage array.
 purchasedImages.push(selectedImage);//push adds the element to the new array at the end of the list.
 update_shopping_cart();
 buildThumbnails(); 
}

function update_shopping_cart()
  {
  //HW make a shortcut to the div id="shopping_cart-div"
  var cart = document.getElementById("shopping_cart_div");
  
  //create an output variable so we can build it up over the following lines
  var output = "";
  
  //create a loop
  for(var i=0; i <= purchasedImages.length -1; i++)
  //use a -1 after imageList.length so the condition is always one less (to match the index number)
    {
      output += '<img src="' + purchasedImages[i] + '" width="70" height="50" />';
    }
  cart.innerHTML = output;
  //send the imageList array to the console for debugging
//  console.log(imageList.length);
  //thumbs.innerHTML = "this used to be the images";
  }
  //console.log("yup, I've been clicked");
  //console.log(evt.target); //log just the element that is clicked, like images/oil/thumbs/artwork_5.jpg
  //evt.target.setAttribute("src", "images/drawing/thumbs/artwork_22.jpg");
  //evt.target.setAttribute("style", "display: none; ");
//HW var imageIndex = imageListA.indexOf("images/drawing/thumbs/artwork_5.jpg");
  //console.log(imageIndex);//~In the grocery list, which item in the list is eggs?
//the moment any data changes update the display. MODEL VIEW CONTROLLER.
