let mixtureArray = [
  "one",
  "two",
  "ka",
  "four",
  08,
  12,
  96,
  true,
  {
    Amit: "Gaurav",
    Sumit: "Saurav",
    Rohit: "Srivastava",
    Ritik: "Roshan",
    Wadle: "Don",
  },
];

let val = mixtureArray.toString();
val = JSON.stringify(mixtureArray);
val = JSON.parse(val);

val[0] = "badal do is element ko";

console.log(val);
console.log(mixtureArray);

let stringWalaArray = ["Vivek", "Anand", "WEB3", "JavaScript", "React"];

val = stringWalaArray.join("{|Ye Hai Mera wala Saperator|/}");
val = stringWalaArray.concat(mixtureArray);
val=stringWalaArray.includes("React")
val=stringWalaArray.indexOf("React")
val=Array.isArray(stringWalaArray);

console.log(val);
