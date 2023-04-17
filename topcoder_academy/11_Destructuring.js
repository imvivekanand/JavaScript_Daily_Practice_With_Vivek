// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
//   };
  
// //   const today = HIGH_TEMPERATURES.today;
// //   const tomorrow = HIGH_TEMPERATURES.tomorrow;
// //Same as two lines above
//   const {today,tomorrow} = HIGH_TEMPERATURES;

// console.log(today,tomorrow);

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
// const {highToday: today, highTomorrow: tommorow} = HIGH_TEMPERATURES;
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

console.log(highToday);
console.log(highTomorrow);