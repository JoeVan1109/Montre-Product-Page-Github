function addFav() {
    const favButton = document.getElementById("add-favoris");
    const favIcone = document.querySelector(".heart-icone");

    favButton.addEventListener("click", () => {

        // Stocker l'état actuel de l'icône
        const favIconeClicked = favIcone.getAttribute("src");

        // Si l'icône est cliquée, changer l'icône en coeur plein
        if (favButton && favIconeClicked === "../assets/icones/heart-regular.svg") {
            favIcone.setAttribute("src", "../assets/icones/heart-solid.svg");

        // Si l'icône n'est pas cliquée, changer l'icône en coeur vide
        } else {
            favIcone.setAttribute("src", "../assets/icones/heart-regular.svg");
        }
    });
}

addFav();