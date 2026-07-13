function showMessage() {
    alert("Welcome to Tasty Restaurant!\nThank you for choosing us.");
}

// Smooth fade-in animation while scrolling
window.addEventListener("scroll", function () {

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let position = card.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});