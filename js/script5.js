

// function createPromise() {
//     const shouldResolve = Math.random() > 0.3;
//     console.log(shouldResolve)
//     return  new Promise (() => {
//         if (shouldResolve) {
//           // Fulfill
//           resolve
//         } else {
//           // Reject
//           reject
//         }
//     }) 
//   }

//   createPromise()
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });