// Calculating area using If-else Statement

var area = "rectangle";
var PI = 3.14, l = 5, b = 4, r = 3;

// if (area == "triangle"){
//     console.log("Area of Triangle=",(l*b)/2);
// }else if(area == "rectangel"){
//     console.log("Area of Rectangle=",l*b);
// }else if(area == "circle"){
//     console.log("Area of Circle=",PI*r**2);
// }else if(area =="square"){
//     console.log("Area of Square=",l*4);
// }else{
//     console.log("Enter a valid key");
// }

switch(area){
    case "circle":
        Area = PI*r**2;
        break;
    case "triangle":
        Area = (l*b)/2;
        break;
    case "rectangle":
        Area = l*b;
        break;
    case "square":
        Area = l*4;
        break;
    default:
        Area = "Enter a Valid Key";
}

console.log(Area);