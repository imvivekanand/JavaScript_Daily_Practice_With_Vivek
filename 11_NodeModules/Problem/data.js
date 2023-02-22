let first = "Vivek";
let last = "Anand";

function fullName(str){
    // return str = str + " " +first + " " + last;
    return `${str} ${first} ${last}`
}
// console.log(fullName("Hi!"));

// export default fullName();
module.exports.fullName = fullName;