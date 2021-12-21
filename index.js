
//EVENT LISTENER ON A BUTTON EXAMPLE

// //This will tagert the first button
// //Once it's clicked it will run the code in the funtion handleClick and show an alert
// document.querySelector("button").addEventListener("click",handleClick);
//
//
// function handleClick(){       //this is the function being called on the addEventListener above
//
// alert("I got clicked");
//
// }



//EXAMPLE WITH ANOYMOUS FUNTION

// //This is the one that has anonymous function without the name
// // Just means putting the function in the second parameter area
// document.querySelector("button").addEventListener("click", function{
//
// alert("I got clicked");
//
// });



var numberOfDrumButtons = document.querySelectorAll(".drum").length;      //this gives you the length of how many elements have drum as a class


//BEGIN OF FOR LOOPS

for (var a = 0; a< numberOfDrumButtons; a++ ){                            //The for loop will then continue until it gets the last drum button


  //DECTECTING BUTTON PRESS BY THE MOUSE

document.querySelectorAll(".drum")[a].addEventListener("click",function(){

  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);

  buttonAnimation(buttonInnerHTML);

});





//DETECTING KEYBOARD PRESS

document.addEventListener("keydown", function(event){     //This applies it to the entire document by putting document in the begining

  makeSound(event.key);     //This tells us which key was selected on the keyboard

  buttonAnimation(event.key);

});

}   //END OF FOR LOOP



function makeSound(key){


    switch (key) {

      case "w":
      var tom1 = new Audio("sounds/tom-1.mp3")
      tom1.play();
      break;

      case "a":
      var tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play();
      break;


      case "s":
      var tom3 = new Audio("sounds/tom-3.mp3")
      tom3.play();
      break;

      case "d":
      var tom3 = new Audio("sounds/tom-4.mp3")
      tom3.play();
      break;

      case "j":
      var tom3 = new Audio("sounds/crash.mp3")
      tom3.play();
      break;

      case "k":
      var tom3 = new Audio("sounds/kick-bass.mp3")
      tom3.play();
      break;

      case "l":
      var tom3 = new Audio("sounds/snare.mp3")
      tom3.play();
      break;


      default: console.log(buttonInnerHTML);

    }

};





function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");    //This will make the key that is clicked by mouse have the effect of with the class pressed being added

  setTimeout(function(){

    activeButton.classList.remove("pressed");                 //in the Settimeout , you need three things 1. the function, 2. amount of time we will wait till we run the function,
  }, 100)


}


// var crashAudio = new Audio ("sounds/crash.mp3");
// crashAudio.play();
