//title, rating, hasWatched
$(document).ready(function () {
    var movieDB = [
        {
            title: "Frozen",
            rating: "4 stars",
            hasWatched: true
        },
        {
            title: "Alice in Wonderland",
            rating: "5 stars",
            hasWatched: true
        },
        {
            title: "Pokemon Movie",
            rating: "5 stars",
            hasWatched: true
        },
        {
            title: "Power Rangers",
            rating: "3 stars",
            hasWatched: false
        }];
    var watched = false;
    for (var i = 0; i < movieDB.length; ++i) {
        watched = movieDB[i]["hasWatched"];
        if (watched) {
            console.log("You have watched \"" + movieDB[i]["title"] + "\" - " + movieDB[i]["rating"]);
        } else {
            console.log("You have not seen \"" + movieDB[i]["title"] + "\" - " + movieDB[i]["rating"]);
        }
    }
});
