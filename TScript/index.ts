/*

//объявление типа
let string: string = 'Hello TS';
let num: number = 5;
let isActive: boolean = false;
//объявление типа any где можно менять типизацию
let str: any = 'Hello TS';
str = 5;
//объявление массива содержащего строки
let strArray: string[] = ['h', 'e', 'l'];
//объявление массива содержащего числа. дженерик тайп
let numArray: Array<number> = [1, 2, 3];
//void пишем, когда ничего не возвращает
function logInfo(name: string, age: number): void {
  console.log(`Hello ${name}${age}`);
}
logInfo('Bob', 23);
//если функция что-то возвращает, пишем после параметров тип возвращаемый
function calc(a: number, b: number | string): number {
  return a + b;
}
// public private protected могут быть как свойства так и методы класса
class Server {
  static VERSION: '1.0.4';
  // можем не писать в конструктор переменные. TS сам создаст их если мы указали 
  //паблик протектед или прайват ли это
  constructor(protected ip: number, public fullname: string) {
	//this.ip = ip
	//this.fullname = fullname
  }
  public name: string
  private id: number
  protected status: string = 'working'

  getStatus(): string {
	return this.status;
  }
}
//тут указываем класс как отдельный тип Server
const server: Server = new Server(1, 'Pepe');
//создаем интерфейс от которого могут наследоваться объекты
interface UserInterface {
  name: string,
  age: number,
  logInfo: () => void //пишем так если метод ничего не возвращает
  id?: any // поставили знак ?, значит свойство идет не по умолчанию т.к. данного свойства может и не быть.
}
const user: UserInterface = {
  name: 'pepe',
  age: 25,
  logInfo() {
	console.log(this.name + this.age);
  }
}
//создаем интерфейс и его имплементируем к классу
interface SayHello {
  sayHello: () => void
}
//имплементируем к классу интерфейс
class User implements SayHello {
  constructor(private name: string, private age: number) { }
  sayHello() {
	console.log(this.name + ' Hello');
  }
}

interface User {
  id: number,
  name: string,
  age: number
}

const users: Array<User> = [
  { id: 1, name: 'V', age: 21 },
  { id: 2, name: 'E', age: 25 }
];

const users: User[] = [
  { id: 1, name: 'V', age: 21 },
  { id: 2, name: 'E', age: 25 }
];
*/