var a;
var a = 0;
var isSunk = false;
while (isSunk == false)
{
a = prompt("Enter the time in hours (Enter numbers from 0 - 23):");
if (a < 0 || a > 23)
{
alert("The number is entered incorrectly! Try again!");
}
else
{
if (a<=4)
{
alert('Good Evening!!!');
}
if (a<=10)
{
alert('Good Morning!!!');
}
 else 
if (a<=17)
{
alert('Good Day!!!');
}
else
{
alert('Good Evening!!!');
}
}
}