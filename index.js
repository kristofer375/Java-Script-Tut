//pending - nadal wykonywane
//fulfilled - gotowe
//rejected - niepowodzenie wykonania

//const promise = new Promise((resolve, reject) => {
//    setTimeout(() => resolve('done'), 1000)
//    setTimeout(() => reject(Error('Promise failed.')), 1000)
//});

//promise
//    .then(value => console.log(value))
//    .catch(error => console.error(error))
//   .finally(() => console.log('done'))

const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => {
        resolve(position);
        }, error => {
            reject(error);
        });
})

promise
    .then(position => console.log(position))
    .catch(error => console.error(error))
    .finally(() => console.log('done'))
