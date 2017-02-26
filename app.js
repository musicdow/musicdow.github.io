u('.inpp').on('change', function(){
u(".jj").html("");
var search = document.getElementById("search").value;
var url = YQL("http://mob.peggo.tv/cc/search?maxResults=12&pageToken=&query="+ search.replace(/ /g, "+") , "json");
    getJson(url, function(data) {
    var datax = JSON.parse(data);
    var z = 0;
    var ii = 0;
    var nn = "";
    u(datax.query.results.json.results).each(function(node, i){
    nn = i++;   
        u(".jj").append('<div class="item" data-tooltip="Descargar" data-id="'+ node.vidid +'" style="background-image: url(https://img.youtube.com/vi/'+node.vidid+'/hqdefault.jpg);"><h4 class="title-t">'+node.title+'</h4></div>')
});
u('.item').on('click', function(e) {
var id = u(this).data("id");
theyou(id);
});
});
});

function theyou(id){
var url = "http://www.theyoump3.com/a/itemInfo/?video_id=" + id;
var qq = YQL(url, "//body");
getJson(qq, function(data) {
    var jo = u(data).find("results");
    var dd = u(jo).text();
    var re = dd.replace(/;|info \= /g, "");
    var json = JSON.stringify(re);
    var ff = JSON.parse(json);
    var parsed = JSON.parse(ff);
    var ud = "http://www.theyoump3.com/get?f=yt&ab=320&video_id="+ id +"&h=" + parsed["h"];
    location.href = ud;
});
}