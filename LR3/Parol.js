var a;
var b;
var isSunk = false;
while (isSunk == false)
{
a = prompt("Введите своё имя:");
b = prompt("Введите пароль:");
if (a == 'Ivan' && b == 333 || a == 'ssss' && b == 666 || a == 'Gibs' && b == 0000)
{
alert("Добро пожаловать John!");
}
else
{
alert("Я вас не зню!");
}
}