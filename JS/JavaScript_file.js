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