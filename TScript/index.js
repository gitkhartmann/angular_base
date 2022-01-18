//объявление типа
var string = 'Hello TS';
var num = 5;
var isActive = false;
//объявление типа any где можно менять типизацию
var str = 'Hello TS';
str = 5;
//объявление массива содержащего строки
var strArray = ['h', 'e', 'l'];
//объявление массива содержащего числа. дженерик тайп
var numArray = [1, 2, 3];
//void пишем, когда ничего не возвращает
function logInfo(name, age) {
    console.log("Hello ".concat(name).concat(age));
}
logInfo('Bob', 23);
