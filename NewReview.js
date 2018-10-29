<!--JavaScript Datei zur bearbeitung des Eingabeformulars-->
<!--Die classList muss noch erstellt werden!-->

let validateForm = event => {
    let form = event.target;
    let okay = true;
    let message = "";

    if (form.genre.value === "") {
        okay = false;
        message += "Geben Sie bitte ein Genre ein. <br />";
    }

    if (form.titel.value === "") {
        okay = false;
        message += "Geben Sie bitte einen Titel ein. <br />";
    }

    if (form.regisseur.value === "") {
        okay = false;
        message += "Geben Sie bitte einen Regisseur ein. <br />";
    }

    if (form.kritik.value === "") {
        okay = false;
        message += "Geben Sie bitte eine Kritik ein. <br />";
    }

    let resultElement = document.getElementById("result");

    if (okay) {
        message = "Vielen Dank für Ihre Kritik!";
        resultElement.style.color = "darkgreen";
                <!--classList muss noch erstellt werden-->
    } else {
                <!--classList muss noch erstellt werden-->
    }

    resultElement.innerHTML = message;
}

//let submitbutton = document.getElementById("submit");
// let genre = document.getElementById("genre");
// let titel = document.getElementById("titel");
// let regisseur = document.getElementById("regisseur");
// let Bewertung = document.getElementById("text");
// let error = document.getElementById("error");
//
// submitbutton.addEventListener("click", validate);
//
// function validate(){
//     if (genre.value === "" || titel.value === "" || regisseur.value === "" || Bewertung
// .value === "") {
// error.innerHTML = "Bitte tragen Sie alle leeren Felder ein.";
// } else {
//
// }
// };
