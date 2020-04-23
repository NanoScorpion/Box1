var a;
var b;
var c;
var isSunk = false;
while (isSunk == false)
{
	a = prompt("Введите первое число:");
	b = prompt("Введите второе число:");
	c = prompt("Введите третье число:");
	if (a > b && a > c)
	{
		alert("Первое число самое большое");
	} else {
	if (b > a && b > c)
	{
		alert("Второе число самое большое");
	} else {
	if (c > a && c > b)
	{
		alert("Третье число самое большое");
	}
	}
	}	
}