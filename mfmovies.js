
   $(document).ready(function () {
    // Base url for main API call
    var apiBaseURL = "https://api.themoviedb.org/3/configuration?api_key=56f6c2183bfbb1abccc25877c84a0b7e";
    /* Base Url for the image poster
     1. Declaring the variable that will hold the image result */
    var config;

    $.ajax({
     url : apiBaseURL,
    }).then(function(result){
     config = result.images.base_url;
     });


    $("button").on("click", function (){
      var a = $(this).attr("data-name");
      //comedy - happy queryURL1
      var queryURL1 = "http://api.themoviedb.org/3/discover/movie?api_key=56f6c2183bfbb1abccc25877c84a0b7e&sort_by=popularity.desc&language=en-US&include_adult=false&with_genres=35";
      //horror - sad queryURL2
      var queryURL2 = "http://api.themoviedb.org/3/discover/movie?api_key=56f6c2183bfbb1abccc25877c84a0b7e&sort_by=popularity.desc&language=en-US&include_adult=false&with_genres=27";
      //action - bored queryURL3
      var queryURL3 = "http://api.themoviedb.org/3/discover/movie?api_key=56f6c2183bfbb1abccc25877c84a0b7e&sort_by=popularity.desc&language=en-US&include_adult=false&with_genres=28";
      //fantasy - sleepy queryURL4
      var queryURL4 = "http://api.themoviedb.org/3/discover/movie?api_key=56f6c2183bfbb1abccc25877c84a0b7e&sort_by=popularity.desc&language=en-US&include_adult=false&with_genres=14";
      //romance - love queryURL5
      var queryURL5 = "http://api.themoviedb.org/3/discover/movie?api_key=56f6c2183bfbb1abccc25877c84a0b7e&sort_by=popularity.desc&language=en-US&include_adult=false&with_genres=10749";
      //drama - angry queryURL
      var queryURL6 = "http://api.themoviedb.org/3/discover/movie?api_key=56f6c2183bfbb1abccc25877c84a0b7e&sort_by=popularity.desc&language=en-US&inculude_adult=false&with_genres=18";
     
      if (a === "happy"){
        queryURL = queryURL1;
        //console.log("Comedy");
        $("#movietitle").html("<h3>Comedy<h3>");
      }

   
      if (a === "sad"){
       queryURL = queryURL2;
       $("#movietitle").html("<h3>Horror<h3>");

      }

      if (a === "bored"){
       queryURL = queryURL3;
       $("#movietitle").html("<h3>Action<h3>");
      }

      if (a === "sleepy"){
       queryURL = queryURL4;
       $("#movietitle").html("<h3>Fantasy<h3>");
      }

      if (a === "love"){
       queryURL = queryURL5;
       $("#movietitle").html("<h3>Romance<h3>");
      }

      if (a === "angry"){
       queryURL = queryURL6;
       $("#movietitle").html("<h3>Drama<h3>");
      }

     
       $.ajax({
         url: queryURL,
         dataType: 'json',
         jsonpCallback: 'testing'
       }).then(function(response) {
         console.log(response);

         /* var rImageResult = response.results;
         var randomImageResult = [Math.floor((Math.random()*rImageResult.length)+1)];
         console.log(randomImageResult); */

         for (var i = 0; i < response.results.length;i++) {

         //image result
         var imageResult = config +'w300' + response.results[i].poster_path;
         var movieDiv = $('<div class="movie col-md-4">');
         var image = $("<img>").attr("src", imageResult);

         //movie title
         var movieTitle = response.results[i].title;
         var movieHeaderTitle = $("<h3>").text(movieTitle);

         //movie rating - not available in the response
         //var rating = response.;

         // movie vote average 
         var voteAverage = response.results[i].vote_average;
         var voteaverageRated = $("<p>").text("Rating: " + voteAverage);

         //var overview
         var overview = response.results[i].overview;
         var overviewText = $("<p>").text("Plot: " + overview);

         //var genre = response.results.id;
         //console.log(genre);s

  
         
         movieDiv.append(image);
         movieDiv.prepend(movieHeaderTitle);
         movieDiv.append(voteaverageRated);
         movieDiv.append(overviewText);
         
         $("#movieresults").prepend(movieDiv);
         // $("#moviestitle").append(genre);
        
           }

       });
  


      });

     });

     