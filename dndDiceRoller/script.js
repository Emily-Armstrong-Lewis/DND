"use strict"
//currently .preventDefault() isn't working and neither is the onclick for the submit button.
document.getElementById("diceRollerForm").addEventListener("click", function(event){
  event.preventDefault()
});

let rollDice = function(){
  console.log(`Rolling the die...`);
  //name = name.toString();
  //console.log(name);
  let i = 0;
  let a = 0;
  //grabs values from quantity, name, and modifier input areas and assigns them to a variable.
  let quantity = document.getElementById("quantity").value;
  quantity=parseInt(quantity);
  let name = document.getElementById("name").value;
  name=parseInt(name);
  let modifier = document.getElementById("modifier").value;
  modifier=parseInt(modifier);
  console.log(`${quantity}d${name}+${modifier}`);

  //will roll the dice the speciied number of times
  while (i < quantity){


  //rolls a single die with the specified number of sides
  function roll(numb){
    let x= Math.floor(Math.random()*numb)+1;
    console.log(`You roll a ${numb} sided die and it lands on ${x}.`);
    //document.getElementById('results').innerHTML = `You roll a ${numb} sided die and it lands on ${x}.`;
    return x;
  };
  
 //assigns the total from this single roll to the total of all rolls.
 a = a+roll(name);

  i++;

};
//adds the players modifier
let b = a + modifier;
console.log(`You rolled a total of ${a} plus your modifier of ${modifier} brings you to a total of ${b}`);

let m = document.createElement("p");
let n = document.createTextNode(`You rolled a total of ${b}.`);
m.appendChild(n);
let o = document.createElement("p");
let p = document.createTextNode(`Your roll (${a}) plus your modifier (${modifier}) equals ${b}.`);
m.appendChild(o);
m.appendChild(p)
document.getElementById('results').appendChild(m);

};

document.getElementById("runBtn").addEventListener("click", function() {
    rollDice();
});
//creates a dice class object that can have the sides modified. Will be useful for useful functionalities involving more than one type of die.
/*class Dice {
   constructor (sides){
    this.sides = sides;
   };
  };*/
 //let d6 = new Dice(name);


 //route to end?