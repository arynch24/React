const questions = [
    {
        id: 1,
        question: `let randomValue ={name:"Aryan"}
  randomValue=23
  
  if(!typeof randomValue === "string"){
    console.log("It's not a string!")
  }
  else{
      console.log("Yay It's a string!")
  }`,
        options: ["It's not a string!", "Yay It's a string!", "undefined", "TypeError"],
        answer: "Yay It's a string!"
    },
    {
        id: 2,
        question: `const user={
      email:"my@email.com",
      updateEmail: email => {
          this.email=email
      }
  }
  
  user.updateEmail("new@email.com")
  console.log(user.email)`,
        options: ["my@email.com", "new@email.com", "undefined", "TypeError"],
        answer: "my@email.com"
    },
    {
        id: 3,
        question: `const fruit=["🍏","🍊","🍌","🍉","🍇"]
  fruit.slice(0,1);
  fruit.splice(0,1);
  fruit.unshift("🍎");
  
  console.log(fruit);`,
        options: ["[🍊, 🍌, 🍉, 🍇]", "[🍎, 🍊, 🍌, 🍉, 🍇]", "[🍏, 🍊, 🍌, 🍉, 🍇]", "[🍊, 🍌, 🍉, 🍇, 🍎]"],
        answer: "[🍎, 🍊, 🍌, 🍉, 🍇]"
    },
    {
        id: 4,
        question: `class Calc{
      constructor(){
          this.count=0;
      }
      increase(){
          this.count++;
      }
  }
  
  const calc=new Calc();
  new Calc().increase();
  
  console.log(calc.count);`,
        options: ["0", "1", "2", "undefined"],
        answer: "0"
    },
    {
        id: 5,
        question: `let count = 0;
  const nums =[0,1,2,3];
  
  nums.forEach(num => {
      if(num){
          count+=1;
      }
  })
  
  console.log(count);`,
        options: ["3", "4", "2", "1"],
        answer: "3"
    },
    {
        id: 6,
        question: `class Bird{
      constructor(){
          console.log("I'm a bird. 🦢")
      }
  }
  
  class Flamingo extends Bird{
      constructor(){
          console.log("I'm pink. 🌸")
          super();
      }
  }
  const pet=new Flamingo();`,
        options: ["I'm pink. 🌸", "I'm a bird. 🦢", "I'm pink. 🌸\nI'm a bird. 🦢", "Error"],
        answer: "I'm pink. 🌸\nI'm a bird. 🦢"
    },
    {
        id: 7,
        question: `let name = "Aryan";
  
  function getName() {
      console.log(name);
      let name = "Harsh";
  }   
  
  getName();`,
        options: ["Aryan", "Harsh", "undefined", "ReferenceError"],
        answer: "ReferenceError"
    },
    {
        id: 8,
        question: `const colorConfig = {   
      red:true,
      blue:false,
      green:true,
      black:true,
      yellow:false
  };
  
  const colors = ["pink","red","blue"];
  
  console.log(colorConfig.colors[1]);`,
        options: ["true", "false", "undefined", "TypeError"],
        answer: "TypeError"
    },
    {
        id: 9,
        question: `const add =x=>y=>z=>{
      console.log(x+y+z);
      return x+y+z;
  };
  
  add(4)(5)(6);`,
        options: ["15", "4", "undefined", "NaN"],
        answer: "15"
    },
    {
        id: 10,
        question: `const name = "Aryan";
  
  console.log(name());`,
        options: ["Aryan", "undefined", "TypeError", "ReferenceError"],
        answer: "TypeError"
    },
    {
        id: 11,
        question: `let newList =[1,2,3].push(4);
  console.log(newList.push(5));`,
        options: ["[1,2,3,4,5]", "5", "TypeError", "undefined"],
        answer: "TypeError"
    },
    {
        id: 12,
        question: `const one = false || {} || null;
  const two = null || false || "";
  const three = [] || 0 || true;
  
  console.log(one, two, three);`,
        options: ["{}, false, []", "{}, '', []", "{}, '', true", "null, '', true"],
        answer: "{}, '', []"
    },
    {
        id: 13,
        question: `let name = "Aryan";
  
  function getName() {
      console.log(name);
      name = "Harsh";
  }   
  
  getName();
  getName();`,
        options: ["Aryan Aryan", "Aryan Harsh", "undefined undefined", "ReferenceError"],
        answer: "Aryan Harsh"
    },
    {
        id: 14,
        question: `
class Counter {
    constructor() {
        this.count = 0;
    }
        increase() {
            this.count++;
        }
    }
      
  const counterOne = new Counter();
  counterOne.increase();
  counterOne.increase();  
  
  const counterTwo = counterOne;
  counterTwo.increase();
  
  console.log(counterOne.count);`,
        options: ["1", "2", "3", "undefined"],
        answer: "3"
    },
    {
        id: 15,
        question: `const add = x => x + x;
  
  function myFunc(num = 2, value = add(num)) {
      console.log(num, value);
  }
  
  myFunc();
  myFunc(3);`,
        options: ["2 4, 3 6", "2 2, 3 3", "2 undefined, 3 undefined", "ReferenceError"],
        answer: "2 4, 3 6"
    }
];


export default questions;