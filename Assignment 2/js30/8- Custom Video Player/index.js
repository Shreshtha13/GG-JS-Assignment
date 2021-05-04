const player = document.querySelector('.player');

const video = player.querySelector('.viewer');

const progress = player.querySelector('.progress');

const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');

const skipButtons = player.querySelectorAll('[data-skip]');

const ranges = player.querySelectorAll('.player__slider');


function togglePlay() {

    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }

}

// to play video by click on the play/pause button or on the video itself



function updateToggleButton() {

    const icon = this.paused ? '►' : '❚ ❚';
    toggle.innerHTML = icon;

}

function skip() {

    video.currentTime += parseFloat(this.dataset.skip);

}

function handleRange() {
    var property = this.name;
    var propertyValue = this.value;

    video[property] = propertyValue;

}

function updateProgressBar() {

    console.log(video.currentTime);

    var percent = (video.currentTime / 316.325442) * 100;

    progressBar.style.flexBasis = `${percent}%`;

}

function scrub(e) {
    console.log(e);
    console.log('hello');
    const scrubTime = (e.offsetX / progress.offsetWidth) * 316.325442;
    video.currentTime = scrubTime;

}

toggle.addEventListener("click", togglePlay);

video.addEventListener("play", updateToggleButton);

video.addEventListener("pause", updateToggleButton);
video.addEventListener("timeupdate", updateProgressBar);

skipButtons.forEach(button => button.addEventListener("click", skip));

ranges.forEach(range => range.addEventListener('change', handleRange));

ranges.forEach(range => range.addEventListener('mousemove', handleRange));

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", function (e) {

    if (mousedown) {
        scrub(e);
    }
});
var mousedown = false;
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);

video.addEventListener("click", togglePlay);

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 32) {
        togglePlay();
    }
})

