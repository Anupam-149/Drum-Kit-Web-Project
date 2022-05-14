// (esversion: 6).

var audio = [];
n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
  audio[i] = new Audio("sounds/tom-" + (i + 1) + ".mp3");
}

// Detecting Button press
for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  } );
}


// trying to decrease time of the music .


// for (var i = 0; i < n; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//     setTimeout(makeSound(this.innerHTML), 3000);
//   } );
// }
// function myfunction(){
//   alert("hello");
// }



// Detecting keyboard press    //seedha document pr hi laga denge addEventListener
  document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
  });




function makeSound(key){
  switch (key) {
    case "w":
      audio[0].play();
      break;
    case "a":
      audio[1].play();
      break;
    case "s":
      audio[2].play();
      break;
    case "d":
      audio[3].play();
      break;
    case "l":
      audio[4].play();
      break;
    case "j":
      audio[6].play();
      break;
    case "k":
      audio[5].play();
      break;

  }
}

function buttonAnimation(key){
  var activeKey=document.querySelector("."+key);
  activeKey.classList.add("pressed");

  setTimeout(function(){
    activeKey.classList.remove("pressed");
  },100);
}

// i was trying before to make it in loop , but in click , listener , when in loop, it must know which is clicked, so for that , it is specific type.
