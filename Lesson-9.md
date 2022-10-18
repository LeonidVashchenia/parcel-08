# Асинхронність

setTimeout(callback, delay, arg1, arg2, ...); - метод.

const timerId = setTimeout( data => { console.log(data + 'ggg'); }, 2000, 5 );

clearTimeout(timerId);
