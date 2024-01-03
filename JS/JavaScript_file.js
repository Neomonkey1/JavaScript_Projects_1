function Color_Function(){//using function
    var Color_Output;//variable base on what color is input plus Color_String
    var Colors = document.getElementById('Color_Input').value;//value input from html
    var Color_String = ' is a great color!';
    switch(Colors){//using switch statement to use Colors input and 
        //add Color_string together to get Color_Output value
        case 'Red':
            Color_Output = 'Red' + Color_String;
        break;//using break to end condition and return value.
        case 'Yellow':
            Color_Output = 'Yellow' + Color_String;
        break;
        case 'Green':
            Color_Output = 'Green' + Color_String;
        break;
        case 'Blue':
            Color_Output = 'Blue' + Color_String;
        break;
        case 'Pink':
            Color_Output = 'Pink' + Color_String;
        break;
        case 'Purple':
            Color_Output = 'Purple' + Color_String;
        break;
        default://using default if user enters color incorrectly or 
        //not one on the list to give them a message.
            Color_Output = 'Please enter a color exactly as written on the above list.';
    }
    document.getElementById('Output').innerHTML = Color_Output;
}
function Hello_World_Function(){//using the getElementsByClassName
    var A = document.getElementsByClassName('Click');
    A[0].innerHTML = 'The text has changed!';//[0] will only the string on the 
    //first element with the class name 'Click'
}
//using JS to draw a circle in html canvas tag
var C = document.getElementById('ID_Name');
var ctx = C.getContext('2d');
ctx.beginPath();
//first number is for width, second is for height, third is for circle size
//forth number doesn't stop the line (1 will stop the line of the circle a little)
//(2 will stop the line more and so on) fifth number is how many times to times PI 
//to get the radius(times 1 will get half circle more then 2 will just draw lines over the circle)
ctx.arc(250, 125, 70, 0, 2*Math.PI);
ctx.stroke();
var D = document.getElementById('Gradient');
var ctx2 = D.getContext('2d');
var grd = ctx2.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, 'black');
grd.addColorStop(1, 'white');
ctx2.fillStyle = grd;
ctx2.fillRect(20, 20, 150, 100);