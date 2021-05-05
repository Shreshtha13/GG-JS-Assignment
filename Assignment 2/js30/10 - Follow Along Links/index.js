var triggers = document.querySelectorAll("a");

var highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {

    var linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);

    highlight.style.width = `${linkCoords.width}px`;
    highlight.style.height = `${linkCoords.height}px`;
    highlight.style.transform = `translate(${linkCoords.left + window.scrollX}px , ${linkCoords.top + window.scrollY}px)`;

}


triggers.forEach(element => {

    element.addEventListener('mouseenter', highlightLink);

});