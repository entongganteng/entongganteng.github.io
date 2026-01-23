// const wrapper = document.querySelector(".wrapper");
// const question = document.querySelector(".question");
// const gif = document.querySelector(".gif");
// const yesBtn = document.querySelector(".yes-btn");
// const noBtn = document.querySelector(".no-btn");
// const btnGroup = document.querySelector(".btn-group");

// yesBtn.addEventListener("click", () => {
//   question.innerHTML = "HOREEE, tidak bisa di cancel bleeeeee!";
//   gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
//   btnGroup.style.display = "none";
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

const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGroup = document.querySelector(".btn-group");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "HOREEE, tidak bisa di cancel bleeeeee!";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  btnGroup.style.display = "none";
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "yahhh :(( coba pilih lagi deh hehehe";
  gif.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTB3MnFkazZ2djVkZXh0and0ZGd1bjI4bW91azQxZmtmajc1MDdyeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/otC3E9VpgzSdEDUglZ/giphy.gif";
});











