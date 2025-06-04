let button = document.getElementById("hur");
let button2 = document.getElementById("her");
let title = document.querySelector(".login-form h2");
let clickSound = document.getElementById("click-sound");
let us = document.querySelector(".username");
let i = document.getElementById("username");
let d = document.getElementById("password");
let countSignup = 0;
let countSignin = 0;

button.addEventListener("click", () => {
  if (i.value.length < 5 || d.value.length < 6) {
    title.innerHTML = "Sign-Up";
    us.innerHTML = "Username";
    button.style.backgroundColor = "aqua";
    button.style.color = "black";
    clickSound.currentTime = 0;
    clickSound.play();
    alert("Enter a valid username and password please!!");
    setTimeout(() => {
      button.style.backgroundColor = "skyblue";
      button.style.color = "white";
      i.value = "";
      d.value = "";
    }, 2000);
  } else {
    countSignup++;
    alert("Your login is recorded successfully!!");
    alert(`${countSignup} logged in via Username`);
    button.style.backgroundColor = "aqua";
    button.style.color = "black";
    clickSound.currentTime = 0;
    clickSound.play();
    setTimeout(() => {
      button.style.backgroundColor = "skyblue";
      button.style.color = "white";
      i.value = "";
      d.value = "";
    }, 2000);
  }
});

button2.addEventListener("click", () => {
  if (i.value.length < 15 || d.value.length < 6) {
    title.innerHTML = "Sign-In";
    us.innerHTML = "Email";
    button2.style.backgroundColor = "red";
    button2.style.color = "black";
    clickSound.currentTime = 0;
    clickSound.play();
    alert("Enter a valid email and password please!!");
    setTimeout(() => {
      button2.style.backgroundColor = "skyblue";
      button2.style.color = "white";
      i.value = "";
      d.value = "";
    }, 2000);
  } else {
    countSignin++;
    alert("Your login is recorded successfully via Email!!");
    alert(`${countSignin} logged in via Email`);
    button2.style.backgroundColor = "purple";
    button2.style.color = "white";
    clickSound.currentTime = 0;
    clickSound.play();
    setTimeout(() => {
      button2.style.backgroundColor = "skyblue";
      button2.style.color = "white";
      i.value = "";
      d.value = "";
    }, 2000);
  }
});

let h = document.getElementById("jr");
let w = document.querySelector(".container");

h.addEventListener("click", () => {
  w.innerHTML = `
    <img 
      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" 
      alt="QR Code" 
      class="img show"
    />
  `;
  clickSound.currentTime = 0;
  clickSound.play();
});
