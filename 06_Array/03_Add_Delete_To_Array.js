//Add or Delete To An Array
let meraarray = ["me", "myself", "mera", "mai", "mujhe"];

// delete meraarray[2];

for(x=0; x<6; x++){
    const temp = "temp" + x;
    meraarray.splice(3, 0, temp);
    // meraarray.splice(3->Add elements here, 2-> Number of elements removed; temp ->Values to be added);
}

console.log(meraarray);

// let nayaarray = [];
// for(x=0; x<5; x++){
//     let nayaElement = 'nayaElement ' + x;
//     nayaarray.push(nayaElement);
// }
// console.log(nayaarray);
