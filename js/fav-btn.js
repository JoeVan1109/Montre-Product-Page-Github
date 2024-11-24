function addFav() {
    const favButton = document.getElementById("add-favoris");
    const favIcone = document.querySelector(".heart-icone");

    favButton.addEventListener("click", () => {
        console.log("fav");
        favIcone.setAttribute("src", "../assets/icones/heart-solid.svg");
    });
}

addFav();