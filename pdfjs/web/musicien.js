
window.addEventListener("load", () => {


  let timer = null;
  let speed = 1;

  const panel = document.createElement("div");

  panel.style.position = "fixed";
  panel.style.bottom = "20px";
  panel.style.right = "20px";
  panel.style.zIndex = "999999";
  panel.style.background = "white";
  panel.style.border = "2px solid black";
  panel.style.padding = "10px";

  panel.innerHTML = `
    <button id="startBtn">▶</button>
    <button id="stopBtn">⏸</button>
    <button id="slowBtn">🐢</button>
    <button id="medBtn">🚶</button>
    <button id="fastBtn">🏃</button>
  `;

  document.body.appendChild(panel);

  document.getElementById("slowBtn").onclick = () => speed = 0.5;
  document.getElementById("medBtn").onclick = () => speed = 1;
  document.getElementById("fastBtn").onclick = () => speed = 2;

document.getElementById("startBtn").onclick = () => {


  const viewer =
    document.getElementById("viewerContainer");


  if (timer) clearInterval(timer);

  // délai de 5 secondes
  setTimeout(() => {

    timer = setInterval(() => {

      const viewer =
        document.getElementById("viewerContainer");

      if (viewer) {
        viewer.scrollTop += speed;
      }

    }, 200);

  }, 5000);

};

  document.getElementById("stopBtn").onclick = () => {

    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };

});