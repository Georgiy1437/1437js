//
// export function createStep(num) {
//     return new Promise((resolve) => {
//         board.on('clickOnButton', (e) => {
//             if (num === e.num) {
//                 console.log('right')
//                 board.removeListener('clickOnButton')
//                 e.button.doGreenClick()
//                 resolve()
//                 setTimeout(() => {
//                     e.button.doWhiteClick()
//                 }, 1000)
//             } else {
//                 e.button.doRedClick()
//                 console.log('try again')
//                 setTimeout(() => {
//                     e.button.doWhiteClick()
//                 }, 1000)
//             }
//         })
//     })
// }