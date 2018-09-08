(function(){
    var articles = document.getElementsByClassName('leftcolumn')[0];
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = this.responseText;
            data = JSON.parse(data);
            
            data.forEach(function(article){

                var child = document.createElement('div');
                
                var el = '<div class="card">' + 
                    '<h2>' + article['name']['S'] + '</h2>' +
                    '<h5>Published ' + article['date']['S'] + '</h5>' +
                    '<p>' + article['snippet']['S'] + '</p>' +
                    '<a target="_blank" href=' + article['link']['S'] + '>Read here</a>' +
                '</div>'

                child.innerHTML = el;
                child = child.firstChild;
                articles.appendChild(child);
            })
        }
    };
    xhttp.open("GET", "https://jv1drclnm5.execute-api.us-east-2.amazonaws.com/beta/");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send();
})()