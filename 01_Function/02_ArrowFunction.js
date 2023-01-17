const App = (name, marks, status) => {
  console.log(name, marks, status);
};

App("Sal", "(100 / 100)", "pass");


//IIFE arrow function

(()=>{
  let a = "VA";
    console.log("Hello! Vivek", a)
})()