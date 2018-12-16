const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
//   if (res !== 44) {
//     throw new Error(`Expected 44, but got ${res}.`)
//   }
});

it('should square a number', () => {
  var res = utils.square(4);
  expect(res).toBe(16).toBeA('number');
  // if (res != 16) {
  //   throw new Error(`Expected 16, but got ${res}.`)
  // }
});

// should verify first and last names are set
it('should separate first and last name', () => {
  // assert it includes first and last name with proper values
  var user = {location: 'Philadelphia', age: 25};
  var res = utils.setName(user, 'Lisa Olson');

  expect(res).toInclude({
    firstName: 'Lisa',
    lastName: 'Olson'
  });
});

// it('should expect values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'Andrew'}).toEqual({name: 'Andrew'})
//   // expect([2,3,4]).toInclude(4);
//   expect({
//     name: 'Andrew',
//     age: 25,
//     location: 'Philadelphia'
//   }).toInclude({
//     age: 25
//   })
// });
