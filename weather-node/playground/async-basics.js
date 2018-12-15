console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
}, 2000);

// Starting app
// Finishing app
// Inside of callback

setTimeout(() => {
  console.log('Set Timeout Secondly');
}, 0);
console.log('Finishing up');

// Starting app
// Finishing app
// Set Timeout Secondly
