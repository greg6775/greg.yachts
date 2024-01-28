var score = 0;
var shape = confetti.shapeFromText({ text: '💀' });
function increaseScore() {
    score++;
    document.getElementById("score").innerText = score;
    if (score % 25 === 0 && score !== 0) {
        var random = Math.floor(Math.random() * 3) + 1;
        var sound = new Audio("sounds/" + random + ".mp3");
        sound.play();
    }
    confetti({
        shapes: [shape],
        particleCount: 50,
        scalar: 3,
        spread: 360,
        gravity: 5
    });
}

function spinPicture() {
    img.classList.add("spin");
    setTimeout(function () {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }, 1000);
}

const queue = []
document.addEventListener("keydown", function (event) {
    queue.push(event.key);
    if (queue.length > 10) {
        queue.shift();
    }
    if (queue.join("") === "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba") {
        img.src = "https://media.tenor.com/X0MEYkfcPAMAAAAi/dance-gif-sofia-alengoz-gif.gif";
    }
})
