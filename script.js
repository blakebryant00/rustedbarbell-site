document.getElementById('year').textContent = new Date().getFullYear();

function flipTee() {
  const img = document.getElementById("teeImage");
  const btn = document.getElementById("flipTeeBtn");

  // start fade-out
  img.classList.add("fading");

  // after the fade-out, swap the image, then fade back in
  setTimeout(() => {
    if (img.src.includes("prod-tee-front.png")) {
      img.src = "prod-tee-back.png";
      btn.textContent = "View Front";
    } else {
      img.src = "prod-tee-front.png";
      btn.textContent = "View Back";
    }

    // once the new image is loaded, fade-in
    if (img.complete) {
      img.classList.remove("fading");
    } else {
      img.onload = () => img.classList.remove("fading");
    }
  }, 200); // matches CSS transition
}
