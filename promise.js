// ===Promise===

// Состояние (State): Промис может находиться в трёх состояниях:
// pending (ожидание): начальное состояние, не выполнен и не отклонен.
// fulfilled (выполнено успешно): операция завершилась успешно.
// rejected (выполнено с ошибкой): операция завершилась с ошибкой.

// Методы:

// .then(): добавляет обработчики для успешного.
// .catch(): добавляет обработчик только для неудачного завершения.
// .finally(): добавляет обработчик, который выполнится в любом случае.


// const myPromise = new Promise((resolve, reject) => {
//     const condition = false
//     if (condition) {
//         resolve('Promise is successfull')
//     } else {
//         reject('Error nash Error')
//     }
// })

// myPromise
//     .then(response => {
//         console.log(response)
//     })
//     .catch(error => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log('Promise завершился')
//     })
// frontend -> server
// server -> Data Base
// server -> res ->frontend


// const simulateDelay = (succeed = true, delay = 1000) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (succeed) {
//                 resolve('SUCCESS')
//             } else {
//                 reject('ERROR ERROR')
//             }
//         }, delay)
//     })
// }
// simulateDelay(false, 2000)
//     .then(response => {
//         console.log(response)
//     })
//     .catch(error => {
//         console.log(error);
//     })


// setTimeout(() => console.log('first'), 2000)
// setTimeout(() => console.log('second'), 1000)
// setTimeout(() => console.log('third'), 500)

// стэк очереди - setTimeout(() => console.log('third'), 500)
// setTimeout(() => console.log('second'), 1000)
// setTimeout(() => console.log('first'), 2000)

// стэк выполнения - setTimeout(() => console.log('third'), 500)
// setTimeout(() => console.log('second'), 1000)
// setTimeout(() => console.log('first'), 2000)


// const delayedLog = (message, delay = 1000) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(message);
//             resolve()
//         }, delay)
//     })
// }

// delayedLog('first', 2000)
//     .then(() => delayedLog('second', 1000))
//     .then(() => delayedLog('third', 500))
//     .then(() => delayedLog('fourth', 200))




