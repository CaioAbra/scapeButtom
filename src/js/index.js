var btn = document.querySelector(".btn");
var position;


btn.addEventListener("mouseover", function () {
    if ($('input').val().length === 0) {
        position ? (position = 0) : (position = 5);
        btn.style.transform = `translate(${position}em, 0px)`;
        btn.style.transition = "all 0.3s ease";
    }

    if ($('input').val().length > 0) {
        position = 0;

    }
});