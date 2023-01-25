const a = 'Hello';
const b = 'Vivek';

function add(x,y){
    return x + y;
}

const value = `
${a} ${b} ${5+7} ${add(5,52)}

single quotes '


double quotes "


New \n Line

`;
console.log(value);