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

    if (form.erscheinungsjahr.value === "") {
        okay = false;
        message += "Geben Sie bitte ein Erscheinungsjahr ein. <br />";
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
        if (reviews.length < 5) {
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

// this._data = [
//     {
//         genre: "Willy",
//         titel: "Tanner",
//         regisseur: "+49 711 564412",
//         erscheinungsjahr: "willy.tanner@alf.com",
//         bewertung: "",
//         kritik: "wcerferfce"
//     }
// ];
//
//
// getData() {
//     return this._data;
// }
// getDataByIndex(index) {
//     return this._data[index];
// }
// updateDataByIndex(index, dataset) {
//     this._data[index] = dataset;
// }
// deleteDataByIndex(index) {
//     this._data.splice(index, 1);
// }
// appendData(dataset) {
//     this._data.push(dataset);
//     return this._data.length - 1;
// }
//
// let template = document.getElementById("template-page-list-li").innerHTML;
// let index = -1;
//
// data.forEach(dataset => {
//     // Index hochzählen
//     index++;
//
//     // Neues Element auf Basis des Templates erzeugen
//     let dummy = document.createElement("div");
//     dummy.innerHTML = template;
//
//     dummy.innerHTML = dummy.innerHTML.replace("$INDEX$", index);
//     dummy.innerHTML = dummy.innerHTML.replace("$GENRE$", dataset.genre);
//     dummy.innerHTML = dummy.innerHTML.replace("$TITEL", dataset.titel);
//     dummy.innerHTML = dummy.innerHTML.replace("$REGISSEUR$", dataset.regisseur);
//     dummy.innerHTML = dummy.innerHTML.replace("$ERSCHEINUNGSJAHR$$", dataset.erscheinungsjahr);
//     dummy.innerHTML = dummy.innerHTML.replace("$BEWERTUNG$", dataset.bewertung);
//     dummy.innerHTML = dummy.innerHTML.replace("$KRITIK$", dataset.kritik);
//
//     let li = dummy.firstElementChild;
//
//     if (li) {
//         dummy.removeChild(li);
//         ol.appendChild(li);
// }



// let list = getElementById("genre");
//
// function add(){
//     let node = document.createElement("list");
//     let textnode = document.createTextNode(input.value);
//     node.appendChild(textNode);
//
//     document.getElementById("list").appendChild(node);
// }


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
