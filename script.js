document.getElementById('year').textContent = new Date().getFullYear();
function flipTee() {
  const teeImg = document.getElementById("teeImage");
  if (teeImg.src.includes("prod-tee-front.png")) {
    teeImg.src = "prod-tee-back.png";
  } else {
    teeImg.src = "prod-tee-front.png";
  }
}
