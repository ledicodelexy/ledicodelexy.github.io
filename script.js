document.addEventListener("DOMContentLoaded", function() {
    var tempsAttente = 30000;

    function afficherEasterEgg() {
        var imageEasterEgg = document.createElement("img");

        imageEasterEgg.src = "o.png";

        imageEasterEgg.style.width = "200px";
        imageEasterEgg.style.height = "auto";

        document.getElementById("image-container").appendChild(imageEasterEgg);
    }

    setTimeout(afficherEasterEgg, tempsAttente);
});
