//var queryURL = "https://api.giphy.com/v1/gifs/search?q=api_key=xkRLAHLHkerYvir7nngZgs54AB50oylI&tag=&rating=G";

// $.ajax({
//     url: "https://api.giphy.com/v1/gifs/search?q=api_key=xkRLAHLHkerYvir7nngZgs54AB50oylI&tag=&rating=G",
//     method: "GET"
// }) .then(function(response){
//     console.log(response);
// });
var sampleGifs = ["Trending", "Pups", "Babies", "Reactions"];


function displayGifs() {
    // var gifs = $(this).attr("data-name");

    // protocol://domain/route..../otherroute?param1=value1&param2=value2.....
    //"https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=xkRLAHLHkerYvir7nngZgs54AB50oylI";
    $("button").on("click", function () {
        var gifExamp = $(this).attr("data-name");









    })
    var gifExamp = $(this).attr("data-name");
    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function (response) {
        console.log(response)
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var gifDisplay = $("<div>");

                var rating = results[i].rating;
                var p = $("<p>").text("Rating:" + rating);
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.original_still.url);
                gifDisplay.append(p);
                gifDisplay.append(gifImage);

                $("#gifDisplay").prepend(gifDisplay);
            }
        }





    });

}



function buttonRender() {
    $("#createBtn_div").empty();

    for (var x = 0; x < sampleGifs.length; x++) {
        
        var a = $("<button>");
        
        a.addClass("gif_btn");
        
        a.attr("data-name", sampleGifs[x]);
        
        a.text(sampleGifs[x]);
        
        $("#createBtn_div").append(a);
        console.log();
    }
}
$("#addGif_btn").on("click", function (event) {
    event.preventDefault();
    
    console.log("submit btn clicked");
    displayGifs();
    var giphy = $("#gif-input").val().trim();

    sampleGifs.push(giphy);
    
    buttonRender();
});

$(document).on("click", ".gifBTN", sampleGifs);

buttonRender();