// Face control variables
const face = document.getElementById("face");
let posX = 150;
let posY = 150;
const step = 10;

// Move the face using arrow keys
document.addEventListener("keydown", (event) => {
    switch(event.key){
        case "ArrowUp":
            posY -= step;
            break;
        case "ArrowDown":
            posY += step;
            break;
        case "ArrowLeft":
            posX -= step;
            break;
        case "ArrowRight":
            posX += step;
            break;
    }
    face.style.left = posX + "px";
    face.style.top = posY + "px";
});
// Face control variables
const face = document.getElementById("face");
const leftEye = document.querySelector(".left-eye");
const rightEye = document.querySelector(".right-eye");
let posX = 150;
let posY = 150;
const step = 10;

// Keyboard controls to move face
document.addEventListener("keydown", (event) => {
    switch(event.key){
        case "ArrowUp": posY -= step; break;
        case "ArrowDown": posY += step; break;
        case "ArrowLeft": posX -= step; break;
        case "ArrowRight": posX += step; break;
    }
    face.style.left = posX + "px";
    face.style.top = posY + "px";
});

// Mouse movement to make eyes follow cursor
document.addEventListener("mousemove", (event) => {
    const faceRect = face.getBoundingClientRect();
    const faceCenterX = faceRect.left + faceRect.width / 2;
    const faceCenterY = faceRect.top + faceRect.height / 2;

    // Calculate angle from face center to mouse
    const dx = event.clientX - faceCenterX;
    const dy = event.clientY - faceCenterY;

    // Limit eye movement
    const maxOffset = 5;
    const angle = Math.atan2(dy, dx);
    const offsetX = Math.cos(angle) * maxOffset;
    const offsetY = Math.sin(angle) * maxOffset;

    leftEye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    rightEye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});