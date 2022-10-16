// console.log('hele');
// setTimeout(
//   data => {
//     console.log('set time');
//     console.log(data + 'ggg');
//   },
//   2000,
//   5
// );
// console.log('cdcdc');

const logger = time => {
  console.log(`Лог кожні ${time} мс - ${Date.now()} !`);
};
const timerInt = setInterval(logger, 1000, 1000);

// clearInterval(logger);
setTimeout(() => clearInterval(timerInt), 5000);
