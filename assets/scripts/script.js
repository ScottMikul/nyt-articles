 
 var SearchTerm= "donald%20Trump";
 var Pages= "1";
 var BeginDate= "20180101";
 var EndDate= "20190101";
 
 
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









 });