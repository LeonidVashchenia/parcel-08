// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;
//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Все ок');
//     }
//     reject('Помилка');
//   }, 2000);
// });

const { reject } = require('lodash');

// console.log(promise);

// promise.then(
//   result => {
//     console.log(`j ${result}`);
//   },
//   error => {
//     console.log(`n ${error}`);
//   }
// );
// promise
//   .then(onFulfilled)
//   .then(x => {
//     console.log(x);
//     // throw new Error('ошібка а 2 зен');
//     return 10;
//   })
//   .then(y => console.log(y))
//   .catch(error => console.log(error))
//   .finally(() => console.log('в будь якому випадку'));

// function onFulfilled(result) {
//   console.log(`j ${result}`);
// }
// function onRejected(error) {
//   console.log(`n ${error}`);
// }
// // Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// // Will run first
// console.log('Before promise.then()');

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   value => {
//     console.log('onResolve call inside promise.then()');
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log('onReject call inside promise.then()');
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// // Will run second
// console.log('After promise.then()');

// const refs = {
//   startBtn: document.querySelector('button[data-action-start]'),
//   stopBtn: document.querySelector('button[data-action-stop]'),
//   clockface: document.querySelector('.js-clockface'),
// };

// const timer = {
//   intervalId: null,
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive = true;
//     console.log('startTime  :', startTime);
//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = getTimeComponents(deltaTime);
//       updateClockface(time);
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   },
// };

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function getTimeComponents(time) {
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   return { hours, mins, secs };
// }

// function updateClockface({ hours, mins, secs }) {
//   refs.clockface.textContent = `${hours}: ${mins}: ${secs}`;
// }

// refs.startBtn.addEventListener('click', () => {
//   timer.start();
// });
// refs.stopBtn.addEventListener('click', () => {
//   timer.stop();
// });
// const creatServise = dish => {
//   const DELAY = 2000;
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve('Замовлення прийнято');
//       }
//       reject('Машини зайняті');
//     }, DELAY);
//   });
// };
// // console.log(creatServise());
// creatServise('TO').then(onMakeServise).catch(onMakeServiseError);

// function onMakeServise(result) {
//   console.log('onMakeServise');
//   console.log(result);
// }

// function onMakeServiseError(error) {
//   console.log('onMakeServiseError');
//   console.log(error);
// }

// fetch('https://pokeapi.co/api/v2/pokemon/2')
//   .then(r => r.json())
//   .then(pokemon => {
//     console.log(pokemon);
//     console.log(pokemon.name);
//     console.log(pokemon.height);
//   })
//   .catch(error => {
//     console.log('Факін шет');
//     console.log(error);
//   });

// const fetchPokemon = id => {
//   return fetch('https://pokeapi.co/api/v2/pokemon/2').then(r => r.json());
// };

// fetchPokemon(3).then(onFetchSuccess).catch(onFetchError);

// function onFetchSuccess(pokemon) {
//   console.log('цьо пакімон');
//   console.log(pokemon);
// }
// function onFetchError(error) {
//   console.log('ошібка в катч');
//   console.log(error);
// }
const cars = ['toureg', 'Q7', 'durango', 'sportage', 'land rover'];
console.log('GO go GO');
// console.log('Winner');
// console.log('finish');

function run(car) {
  return new Promise((resolve, reject) => {
    const time = getRandomTime(2000, 3000);

    setTimeout(() => {
      resolve({ car, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// run('reno')
//   .then(x => console.log(x))
//   .catch(e => console.log(e));

const promises = cars.map(run);
console.log(promises);
Promise.race(promises).then(({ car, time }) => {
  console.log(`wiiNNeeRRR ${car} за час ${time}`);
});
Promise.all(promises).then(x => console.log(x));
