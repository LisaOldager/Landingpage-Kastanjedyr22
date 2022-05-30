const vote = document.querySelectorAll(".vote");
const popUp = document.querySelector(".modular");
const closePopup = document.querySelector(".modular__content-close");

vote.forEach((vote) => {
    vote.addEventListener("click", function() {
        popUp.classList.add("show");
    })
})

closePopup.addEventListener("click", function () {
    popUp.classList.remove("show"); 
});