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
