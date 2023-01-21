const obj = {
  first: "Vivek",
  last: "Anand",
  Age: 26,
  V1: 'A',
  V2: 'N',
  V3: 'A',
  V4: 'N',
  V5: 'D',
};
obj.newkey = "VIVEK"
console.log(obj);
console.log(obj.first + " " + obj.last);
console.log(obj['first'] + " " + obj['last']);

for(let x=1;x<=5;x++){
    console.log("V"+x);
    console.log(obj["V"+x]);
}

const obj1 = obj;
obj1.newkey = "Anand";
console.log(obj1);
console.log(obj);


//We cannot use . notation where the key name has spaces.
//In that case we have to use the [].

//jsonlint.com - Allow us to make the json data into readable format.
//Js Objects can have fuctions inside them whereas JSON do not.