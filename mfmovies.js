
     $("button").on("click", function (){

       var a = $(this).attr("data-mood");
       var queryURL1 = "http://api.themoviedb.org/3/discover/tv?api_key=56f6c2183bfbb1abccc25877c84a0b7e&sort_by=popularity.desc&with_genres=35";
       var queryURL2 = "http://api.themoviedb.org/3/discover/tv?api_key=56f6c2183bfbb1abccc25877c84a0b7e&sort_by=popularity.desc&with_genres=18";
       var queryURL3 = "http://api.themoviedb.org/3/discover/tv?api_key=56f6c2183bfbb1abccc25877c84a0b7e&sort_by=popularity.desc&with_genres=14";
      
       if (a === "happy"){
         queryURL = queryURL1;
       }

           
       if (a === "sad"){
        queryURL = queryURL2;
       }

       if (a === "tired"){
        queryURL = queryURL3;
       }
      
      $.ajax({
        url: queryURL,
        dataType: 'jsonp',
        jsonpCallback:'testing',
        type: "GET"
      }).error(function(){
          console.log('error');
      }).done(function (response) {
          console.log(response);
       

            
       });


       });

      
    



	
