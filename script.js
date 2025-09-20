let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks += 1;
    document.getElementById("mainDiv").textContent =
        "Button clicked times: " + numButtonClicks;
}


window.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            const audio = new Audio("linksound.mp3");
            audio.play();
        });
    });
});
