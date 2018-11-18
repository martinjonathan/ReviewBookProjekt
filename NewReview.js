<!--JavaScript Datei zur bearbeitung des Eingabeformulars-->
<!--Die classList muss noch erstellt werden!-->

const MAX_NUMBER_OF_REVIEW = 5;

const validateForm = event => {
    let okay = true;
    let message = "";
    const titel = document.getElementById("titel").value;
    const genre = document.getElementById("genre").value;
    const regisseur = document.getElementById("regisseur").value;
    const erscheinungsjahr = document.getElementById("erscheinungsjahr").value;
    const bewertungSelect = document.getElementById("bewertung");
    const bewertungIndex = bewertungSelect.selectedIndex;
    const kritik = document.getElementById("kritik").value;


    if (genre === "") {
        okay = false;
        message += "Geben Sie bitte ein Genre ein. <br />";
    }

    if (titel === "") {
        okay = false;
        message += "Geben Sie bitte einen Titel ein. <br />";
    }

    if (regisseur === "") {
        okay = false;
        message += "Geben Sie bitte einen Regisseur ein. <br />";
    }

    if (erscheinungsjahr === "") {
        okay = false;
        message += "Geben Sie bitte ein Erscheinungsjahr ein. <br />";
    }

    if (kritik === "") {
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
    return okay;
}

const submitForm = () => {

    // read from the form the values of the review attributes
    const titel = document.getElementById("titel").value;
    const genre = document.getElementById("genre").value;
    const regisseur = document.getElementById("regisseur").value;
    const erscheinungsjahr = document.getElementById("erscheinungsjahr").value;
    const bewertungSelect = document.getElementById("bewertung");
    const bewertungIndex = bewertungSelect.selectedIndex;
    const kritik = document.getElementById("kritik").value;

    const review = {
        titel,
        genre,
        regisseur,
        erscheinungsjahr,
        bewertungIndex,
        kritik,
    };
    // check if reviews are already in the local localStorage
    // if not then add a new array with the review in the local storage
    // if yes add the new review to the array already in the local storage
    let reviews = localStorage.getItem("reviews");
    if (reviews === null || reviews === undefined) {
        reviews = [review];
    } else {
        reviews = JSON.parse(reviews);
        if (reviews.length < MAX_NUMBER_OF_REVIEW) {
            reviews.push(review);
        } else{
            reviews.unshift(review);
            reviews.pop();
        }
    }
    localStorage.setItem("reviews", JSON.stringify(reviews));
    alert("Review erfolgreich gespeichert. Weiter zur Startseite.")
    location = "Startseite.html";
}


const validateAndSubmitForm = (event) => {
    const validated = validateForm(event);
    if (validated) {
        submitForm();
    }
};
