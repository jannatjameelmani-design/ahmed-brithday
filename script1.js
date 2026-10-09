
function celebrate() {
    for (let i = 0; i < 45; i++) {
        setTimeout(createHeart, i * 70);
    }

    document.querySelector(".cake").textContent = "🎂✨🎉";
}

function showLove() {
    document.getElementById("secret").style.display = "block";

    for (let i = 0; i < 30; i++) {
        setTimeout(createHeart, i * 90);
    }
}

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";

    const symbols = ["❤️", "💗", "💕", "💖", "✨"];

    heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (18 + Math.random() * 22) + "px";

    heart.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 7500);
}

setInterval(createHeart, 700);

