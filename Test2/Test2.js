var inputArray1 = [];
var size = 10;
for(var i=0; i<size; i++) 
{
	inputArray1[i] = prompt('Enter Element Array 1 ' + (i+1));
}
document.getElementById("first").innerHTML = inputArray1; 
document.getElementById("ako").innerHTML = "Dhruv";
function changeVisibility() {
  document.getElementById("a").style.visibility = "visible";
}
function changeFontSize() {
  document.getElementById("b").style.fontSize = "xx-large";
}
function showDateTime() {
  var d = new Date();
  document.getElementById("c").innerHTML = d;
}
function copyString() {
  
  document.getElementById("lname").value=  document.getElementById("fname").value;
  
  document.getElementById("lname").innerHTML;
}
var inputArray2 = [];
var size2 = 10;
for(var i=0; i<size; i++) 
{
	inputArray2[i] = prompt('Enter Element Array 2 ' + (i+1));
}
inputArray2.sort();
document.getElementById("second").innerHTML = inputArray2; 

var inputArray3 = [];
var size3 = 5;
for(var i=0; i<size3; i++) 
{
	inputArray3[i] = prompt('Enter Element Array 3 ' + (i+1));
}
inputArray3.sort();
inputArray3.reverse();
document.getElementById("third").innerHTML = inputArray3;
var str = "dhruv@ggwp.com";
document.write(str);
var pos = str.search("@");
if(pos!==(-1))
document.write("<h1>@ is present</h1>");
else
document.write("@ is not present");


var str2 = "9898989898";
document.write(str2);

if(str2.length==(10))
document.write("<h1>10 numbers are present</h1>");
else
document.write("10 numbers are not present");

function GiveRandomNumber()
{
	document.getElementById("fourth").innerHTML = Math.random();
}