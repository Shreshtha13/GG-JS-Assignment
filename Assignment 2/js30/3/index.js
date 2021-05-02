var inputs = document.querySelectorAll(".controls input")

inputs.forEach(function (input) {

    input.addEventListener("change", updateValues);
    input.addEventListener("mousemove", updateValues);

});

function updateValues() {

    var suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}` , this.value + suffix);
}