 
 
 function ShowHeadline(){
 
 var SearchT= $("#searchTerm").val();
 var SearchTerm= SearchT.trim();
 console.log(SearchTerm);
 var Pages= $("#form-control").val();
 var BeginD= $("#startYear").val();
 var BeginDate= BeginD+"0101";
 console.log(BeginDate);
 var EndD= $("#endYear").val();
 var EndDate= EndD+"0101";
 console.log(EndDate);
 
 
 // This is our API key. Add your own API key between the ""
 var APIKey = "Ii3njx05nbjP142su0k8NmFO7dABjhMp";

 // Here we are building the URL we need to query the database
 var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + BeginDate + "&end_date=" + EndDate + "&fq=" + SearchTerm + "&page=" + Pages + "&api-key=" + APIKey;


// We then created an AJAX call
 $.ajax({
   url: queryURL,
   method: "GET"
 }).then(function(response) {

   // Create CODE HERE to Log the queryURL
console.log(response.response.docs[0]);


    $("#articles").empty();
   resultArray = response.response.docs;
   for(var i=0;i<Pages;i++){
       var listEl = $("<li>");
       console.log(resultArray[i].headline.main);
       var articleName = $("<div>");
       articleName.text(resultArray[i].headline.main);
       listEl.append(articleName);
       var author = $("<div>");
       author.text(resultArray[i].byline.original);
       listEl.append(author);
       $("#articles").append(listEl);
   }

   




 });
}
 $("#searchBtn").on("click", ShowHeadline);
