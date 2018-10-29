<!--JavaScript Datei zur bearbeitung des Eingabeformulars-->
<!--Die classList muss noch erstellt werden!-->

let validateForm = event => {
    let form = event.target;
    let okay = true;
    let message = "";

    if (form.Genre.value == "") {
        okay = false;
        message += "Geben Sie bitte ein Genre ein. <br />";
    }

    if (form.Titel.value == "") {
        okay = false;
        message += "Geben Sie bitte einen Titel ein. <br />";
    }

    if (form.Regisseur.value == "") {
        okay = false;
        message += "Geben Sie bitte einen Regisseur ein. <br />";
    }

    if (form.Kritik.value == "") {
        okay = false;
        message += "Geben Sie bitte eine Kritik ein. <br />";
    }

    let resultElement = document.getElementById("result");

    if (okay) {
        message = "Vielen Dank für Ihre Kritik!";
        resultElement.classList.add("okay");        <!--classList muss noch erstellt werden-->
    } else {
        resultElement.classList.remove("okay");     <!--classList muss noch erstellt werden-->
    }

    resultElement.innerHTML = message;


}
