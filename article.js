(function() {

    var save_article = document.getElementsByClassName('save_article')[0];
    save_article.addEventListener('click', function(){
        var article = {};
        article.name = document.getElementsByClassName('title')[0]
        article.link = document.getElementsByClassName('link')[0]
        article.date = document.getElementsByClassName('date')[0]
        article.snippet = document.getElementsByClassName('snippet')[0]
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementsByClassName("article")[0].innerHTML = this.responseText;
            }
        };
        xhttp.open("POST", "https://jv1drclnm5.execute-api.us-east-2.amazonaws.com/beta/");
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify(article));
    })

})()

;
// var url = "https://jv1drclnm5.execute-api.us-east-2.amazonaws.com/beta/";
// $.ajax({
//     url: url,
//     type: 'POST',
//     data: JSON.stringify(article),
//     dataType: 'json',
//     crossDomain: true,
//     contentType: 'application/json',
//     success: function(data) {
//         alert(JSON.stringify(data));
//     },
//     error: function(e) {
//         alert("failed" + JSON.stringify(e));}})