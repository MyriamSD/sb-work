const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
let count = []

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  const game = document.querySelector('#game .div')
  count.push(event)
  event.target.style.backgroundColor = event.target.className;
  console.log(event)

  if (count.length > 2 ) {
    count[0].target.style = 'none'
    count[1].target.style = 'none'
    count[2].target.style = 'none'

    alert('2 cards at a time')
    count = []
  } 
    
  
    
    event.target.classList.add("clicked")

      setTimeout(function(){
    let clickedBox = document.querySelectorAll('#game .clicked')
    if (count.length === 2 && count[0].target.className !== count[1].target.className ) {

      for (let clickedBoxes of clickedBox) {
        clickedBoxes.style = 'none'
        clickedBoxes.classList.remove("clicked")
      }
      count = []
    
    } else if (count.length === 2 && count[0].target === count[1].target) {
      
      for (let clickedBoxes of clickedBox) {
        clickedBoxes.style = 'none'
        clickedBoxes.classList.remove("clicked")
      }
      count = []
      
    } else if (count.length === 2 && count[0].target.className === count[1].target.className) {
      alert('make sure you pick two different boxes');
      for (let clickedBoxes of clickedBox) {
        clickedBoxes.style.backgroundColor = clickedBoxes.className
        clickedBoxes.classList.remove("clicked")
      }
       count = []
    }
    
}, 1000)

    
  


//   setTimeout(function(){
//     let clickedBox = document.querySelectorAll('#game .clicked')
//     if (count.length === 2 && count[0].target.className !== count[1].target.className) {

//       for (let clickedBoxes of clickedBox) {
//         clickedBoxes.style = 'none'
//         clickedBoxes.classList.remove("clicked")
//       }
//       count = []
    
//     } else if (count.length === 2 && count[0].target.className === count[1].target.className) {
//       for (let clickedBoxes of clickedBox) {
//         clickedBoxes.style.backgroundColor = clickedBoxes.className
//         clickedBoxes.classList.remove("clicked")
//       }
//        count = []
//     }
// }, 1000)
}

// when the DOM loads
createDivsForColors(shuffledColors);

// event.target.classList.length === 2 && 