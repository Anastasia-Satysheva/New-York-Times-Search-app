const searchterm = $("#searchterm");
      const numrecs = $("#numrecs");
      const startyear = $("#startyear");
      const endyear = $("#endyear");
      const article = $("#articles");
      const search = $("#search");
      const clear = $("#clear");
      search.on("click", function(e) {
        e.preventDefault();
        let terms = searchterm.val();
        let numRecords = numrecs.val();
        console.log(` ${terms}  ${numRecords}`);
        //key   GeaRnIRjrUw3Rob73v2s8tUChbULenLG
        //url https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=GeaRnIRjrUw3Rob73v2s8tUChbULenL
        //page page=0
        let encode = encodeURI(searchterm);
        let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encode}&api-key=GeaRnIRjrUw3Rob73v2s8tUChbULenLG `;
        $.get(queryURL)
          // destructure data attribute from the response object
          .then(function(response) {
            const { docs } = response.response;
            console.log(docs);
            // console.log(typeof docs);
            for (i = 0; i < numRecords; i++) {
              let abstract = docs[i].abstract;
              let url = docs[i].url;
              let div = $("<div>");
              let a = $("<a>");
              let title = $("<h4>");
              title.text(docs[i].headline.main);
              a.text("Read more here...");
              a.attr("href", docs[i].web_url);
              let p = $("<p>").text(abstract);
              div.append(title);
              div.append(a);
              div.append(p);
              article.append(div);
            }
            console.log(docs);
          });
      });
      
//click events
$("#search").on("click", function(event) {
  event.preventDefault();


  clear();

  let queryURL = QueryURL();
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(updatePage);
});

$("#clear").on("click", clear);

// Function for Retrieving Number of records
$(function(){
    var $select = $(".1-10");
    for (i=1;i<=10;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});