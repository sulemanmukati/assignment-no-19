

// Chapter 15 (Array I)
// Q1
var futureStudent =[]

// Q2
var Studentname =["suleman","hasnain","owais"]

// Q3
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);

var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
console.log(alphabet.length);

var myArray = ["firstElement"];
myArray.push("secondElement");
alert(myArray[1]);


// Chapter 16 (Array II)
// Q1
var arr =["suleman","ahmed","owais","hasnain","amman"]
arr.push("muqaram");
document.write(arr+ "<br>");
// Q2
var alphabet = ["h","i","j","k",]
alphabet.pop("");
document.write(alphabet);

// Q3
var alphabet = ["h","i","j","k",]
alphabet.push("l");
alphabet.push(5)
document.write("<br>"+alphabet);


// Chapter 16 (Array III)
// Q1 
var sizes = ["S","M", "XL", "XXL", "XXXL"]
sizes.shift("")
document.write("<br>"+sizes);

// Q2
var sizes = ["S","M", "XL", "XXL", "XXXL"]
sizes.unshift(18,20,22)
document.write("<br>"+sizes);

// Q3
var element = ["sir faraz"]
element.push("sir ali")
document.write("<br>"+element[0]) 

// Q4
var sizes = ["S","M", "XL", "XXL", "XXXL"]
sizes.splice(2,"M","L",)
document.write("<br>" + sizes)
 
// Q5
var sizes = ["S","M", "XL", "XXL", "XXXL"]
var regsizes = sizes.slice(0,3)
document.write("<br>" + regsizes)

// Q6
var pets = ["dog","cat","ox","duck","frog"]
pets.splice(1,)
pets.push("cow","goat")
document.write("<br>" + pets)
 
// Q7
var pets = ["dog","cat","ox","duck","frog"]
pets.splice(1,2)
document.write("<br>"+pets) 

// Q8
var pets1 = ["dog","cat","ox","duck","frog","flea"]
pets1.splice(3,2)
document.write("<br>"+pets1) 




//chapter 14 - 16

// Q1
var futureStudent =[]

// Q2
var Studentname =["suleman","hasnain","owais"]

// Q3
var string =["sir Ali"]

// Q4
var number =[1 ,2 ,4]

// Q5
var bollone =[false ,true]

// Q6
var mix =["sir Faraz" , 1 ,false , "owais" ]

// Q7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

for(let i=1;i<=8;i++)
{
  console.log(i +")"+ qualifications + "<br>" );

}

// Q8










// Q9

let colors = ["Red", "Green", "Blue"];
alert("Initial array: " + colors);
let addStartColor = prompt("What color do you want to add to the beginning?");
// a.
colors.unshift(addStartColor);
alert("After adding to the beginning: " + colors);
// b.
let addEndColor = prompt("What color do you want to add to the end?");
colors.push(addEndColor);
alert("After adding to the end: " + colors);
// c.
colors.unshift("Cyan", "Magenta");
alert("After adding two more colors to the beginning: " + colors);
// d.
colors.shift();
alert("After deleting the first color: " + colors);
// e.
colors.pop();
alert("After deleting the last color: " + colors);
// f. 
var indexToAdd = parseInt(prompt("At which index do you want to add a color?"), 10);
var colorToAdd = prompt("What color do you want to add?");
colors.splice(indexToAdd, 0, colorToAdd);
alert("After adding a color at the specified index: " + colors);
// g.
var indexToDelete = parseInt(prompt("At which index do you want to start deleting colors?"), 10);
var numberOfColorsToDelete = parseInt(prompt("How many colors do you want to delete?"), 10);
colors.splice(indexToDelete, numberOfColorsToDelete);
alert("After deleting colors from the specified index: " + colors);


// Q10
var scores = [320, 230, 480,120]
document.write("<br>Scores ao student"+scores)
scores.sort(function(a, b) {
    return a - b;
});
document.write("<br>Ordered Scores ao student"+scores)

// Q11

var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
document.write("<br>Cities list:<br>"+cities)
cities.splice(0,2)
cities.splice(2,1)
document.write("<br>Slected cities List:<br>"+cities) 

var arr =["this","is","my","cat"]
document.write("<br>Array: <br>" + arr)
document.write("<br>string: <br>This is my cat")



// Q13

var  queue = [];
queue.push("Keybord");
queue.push("Mouse");
queue.push("Printer");
queue.push("Moniter");
document.write("<br><br>Device:<br><br>", queue);
var firstOut = queue.shift();
document.write("<br>out:<br>", firstOut);
var secondOut = queue.shift();
document.write("<br> out:<br>", secondOut);
var thirdOut = queue.shift();
document.write("<br>out:<br>", thirdOut);
// Q14
var  stack = [];
stack.push("Keybord");
stack.push("Mouse");
stack.push("Printer");
stack.push("Moniter");
document.write("<br><br>Device:<br><br>", stack);
var lastout = stack.pop();
document.write('<br>out:<br>', lastout);
var thirdOut$ = stack.pop();
document.write('<br>out:<br>', thirdOut$);
var secondOut$ = stack.pop();
document.write('<br> out:<br>', secondOut$);
var firstOut$ = stack.pop();
document.write('<br>out:<br>', firstOut$);

// Q15
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
var dropdownHTML = '<select>';
for (var manufacturer of manufacturers) {
    dropdownHTML += `<option value="${manufacturer}">${manufacturer}</option>`;}
dropdownHTML += '</select>';
document.write("<br>"+dropdownHTML);





