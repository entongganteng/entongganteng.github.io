const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGroup = document.querySelector(".btn-group");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "HOREEE, tidak bisa di cancel blebleble!";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});


// const wrapper = document.querySelector(".wrapper");
// const question = document.querySelector(".question");
// const gif = document.querySelector(".gif");
// const yesBtn = document.querySelector(".yes-btn");
// const noBtn = document.querySelector(".no-btn");
// const btnGroup = document.querySelector(".btn-group"); // Added this line

// yesBtn.addEventListener("click", () => {
//   // 1. Update the main text
//   question.innerHTML = "HOREEE, tidak bisa di cancel ble!<br>let's go on a date!!!<br>1 February / 2 February Bubble Planet Sydney";
  
//   // 2. Hide the second line of text (if you have two <h2> tags)
//   const allQuestions = document.querySelectorAll(".question");
//   if (allQuestions.length > 1) {
//     allQuestions[1].style.display = "none"; 
//   }

//   // 3. Hide the buttons
//   btnGroup.style.display = "none";

//   // 4. Change the GIF
//   gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
// });

// noBtn.addEventListener("mouseover", () => {
//   const noBtnRect = noBtn.getBoundingClientRect();
//   const maxX = window.innerWidth - noBtnRect.width;
//   const maxY = window.innerHeight - noBtnRect.height;

//   const randomX = Math.floor(Math.random() * maxX);
//   const randomY = Math.floor(Math.random() * maxY);

//   noBtn.style.left = randomX + "px";
//   noBtn.style.top = randomY + "px";
// });






