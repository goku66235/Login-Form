let button = document.getElementById("hur");
let button2 = document.getElementById("her");
let title = document.querySelector(".login-form h2");
let clickSound = document.getElementById("click-sound");
let us = document.querySelector(".username");
button.addEventListener("click", () => {
    if (!button.classList.contains("clicked")) {
        button.style.backgroundColor = "aqua";
        button.style.color = "black";
        title.innerHTML = "Sign-Up";
        us.innerHTML = "Username";
        button.classList.add("clicked");
        clickSound.currentTime = 0; // rewind to start
        clickSound.play();
        setTimeout(() => {
            button.style.backgroundColor = "skyblue";
            button.style.color = "white";
            button.classList.remove("clicked");
        }, 3000);
    }
});

button2.addEventListener("click", () => {
    if (!button2.classList.contains("clicked")) {
        button2.style.backgroundColor = "red";
        button2.style.color = "black";
        title.innerHTML = "Sign-In";
        us.innerHTML = "Email"
        button2.classList.add("clicked");

         clickSound.currentTime = 0; // rewind to start
        clickSound.play();
        setTimeout(() => {
            button2.style.backgroundColor = "skyblue";
            button2.style.color = "white";
            button2.classList.remove("clicked");
            button2.classList.remove("clicked");
        }, 1000);
    }
});

let h = document.getElementById("jr");
  let w = document.querySelector(".container");
  let clickSounds = document.getElementById("click-sound"); // define before use

  h.addEventListener("click", () => {
    w.innerHTML = `
      <img 
        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" 
        alt="QR Code" 
        class="img show"
      />
    `;

    // Play click sound
    clickSounds.currentTime = 0;
    clickSounds.play();
  });
