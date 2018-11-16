$(document).ready(function() {

    restoreContents();

//    $('#edit').bind('click', toggleEditContent);
//    $('#clear').bind('click', resetContent);


    function restoreContents() {
        // get the reviews from the local storage
        const reviewsString = localStorage.getItem("reviews");
        if (!reviewsString) {
            return;
        }
        const reviews = JSON.parse(reviewsString);

        // create the list of reviews in html and add it to the page in the "reviewList" HTML Element
        const parent = $("#reviewList");
        reviews.forEach((review, reviewIndex) => {
            let content = "<div>";
            content += `
                <div><label id="label" for="genre">
                    Genre:
                </label>
                <span class="genre">
                    ${review.genre}
                </span></div>
            `;
            content += `
                <div><label for="titel">
                    Titel:
                </label>
                <span class="titel">
                    ${review.titel}
                </span></div>
            `;
            content += `
                <div><label for="regisseur">
                    Regisseur:
                </label>
                <span class="regisseur">
                    ${review.regisseur}
                </span></div>
            `;
            content += `
                <div><label for="erscheinungsjahr">
                    Erscheinungsjahr:
                </label>
                <span class="erscheinungsjahr">
                    ${review.erscheinungsjahr}
                </span></div>
            `;
            content += `
                <div><!--Bewertung mit Sternchen-->
                <label for="bewertung">
                    Bewertung:
                </label>
                <span class="Bewertung">
            `;
            for (let i=0; i<=review.bewertungIndex; i++) {
                content += "⭐";
            }
            content += "</span></div>";
            content += `
                <div><label for="kritik">
                    Ihre Kritik:
                </label>
                <div>
                    ${review.kritik}
                </div></div>
            `;
            content += "</div>";
            parent.append(content);
        });
    }


    function resetContent(e) {
        localStorage.clear();
        window.location.reload();
    }

});
