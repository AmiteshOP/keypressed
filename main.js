// Create a reference for the canvas

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if(keyPressed == '65')
	{
		new_image('Alpkey.png'); 
		console.log("a");
	}
	if(keyPressed == '66')
	{
		new_image('Alpkey.png'); 
		console.log("b");
	}
	if(keyPressed == '67')
	{
		new_image('Alpkey.png'); 
		console.log("c");
	}
	if(keyPressed == '68')
	{
		new_image('Alpkey.png'); 
		console.log("d");
	}
	if(keyPressed == '69')
	{
		new_image('Alpkey.png'); 
		console.log("e");
	}
	if(keyPressed == '70')
	{
		new_image('Alpkey.png'); 
		console.log("f");
	}




	if(keyPressed == '48')
	{
		new_image('numkey.png'); 
		console.log("0");
	}
	if(keyPressed == '49')
	{
		new_image('numkey.png'); 
		console.log("1");
	}
	if(keyPressed == '50')
	{
		new_image('numkey.png'); 
		console.log("2");
	}
	if(keyPressed == '51')
	{
		new_image('numkey.png'); 
		console.log("3");
	}
	if(keyPressed == '52')
	{
		new_image('numkey.png'); 
		console.log("4");
	}




	if(keyPressed == '37')
	{
		new_image('Arrkey.png'); 
		console.log("up");
	}
	if(keyPressed == '38')
	{
		new_image('Arrkey.png'); 
		console.log("down");
	}
	if(keyPressed == '39')
	{
		new_image('Arrkey.png'); 
		console.log("left");
	}
	if(keyPressed == '40')
	{
		new_image('Arrkey.png'); 
		console.log("right");
	}



    if(keyPressed == '17')
	{
		new_image('otherkey.png'); 
		console.log("Ctrl");
	}
	if(keyPressed == '18')
	{
		new_image('otherkey.png'); 
		console.log("Alt");
	}
	if(keyPressed == '27')
	{
		new_image('otherkey.png'); 
		console.log("Esc");
	}
}