document.querySelectorAll(".carousel-wrapper").forEach(wrapper => {
    const carousel = wrapper.querySelector(".carousel");
    const items = wrapper.querySelectorAll(".carousel-item");
    let currentPosition = 0;

    const visibleItems = window.innerWidth < 1000 ? 1 : 3;
    const itemWidth = window.innerWidth < 1000 ? items[0].offsetWidth : items[0].offsetWidth + 20;

    wrapper.querySelector(".next").addEventListener("click", () => {
        if (currentPosition > -(itemWidth * (items.length - visibleItems))) {
            currentPosition -= itemWidth;
            carousel.style.transform = `translateX(${currentPosition}px)`;
        }
    });

    wrapper.querySelector(".prev").addEventListener("click", () => {
        if (currentPosition < 0) {
            currentPosition += itemWidth;
            carousel.style.transform = `translateX(${currentPosition}px)`;
        }
    });
});

document.querySelectorAll(".custom-video").forEach(videoContainer => {
    const video = videoContainer.querySelector("video");
    const playButton = videoContainer.querySelector(".play-button");
    const playIcon = playButton.querySelector(".play-icon");
    const pauseIcon = playButton.querySelector(".pause-icon");

    playButton.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            playIcon.style.display = "none";
            pauseIcon.style.display = "inline";
            playButton.classList.add("active");
        } else {
            video.pause();
            playIcon.style.display = "inline";
            pauseIcon.style.display = "none";
            playButton.classList.remove("active");
        }
    });

    video.addEventListener("ended", () => {
        playIcon.style.display = "inline";
        pauseIcon.style.display = "none";
        playButton.classList.remove("active");
    });
});

const burgerMenu = document.getElementById("burgerMenu");
const burgerOverlay = document.getElementById("burgerOverlay");

burgerMenu.addEventListener("click", () => {
    burgerOverlay.classList.toggle("burger-overlay--active");
});