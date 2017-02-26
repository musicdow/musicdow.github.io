function getXmlHttp() {
    var a;
    try {
        a = new ActiveXObject("Msxml2.XMLHTTP")
    } catch (b) {
        try {
            a = new ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
            a = !1
        }
    }
    return a || "undefined" == typeof XMLHttpRequest || (a = new XMLHttpRequest), a
}

function createCORSRequest(a, b) {
    var c = getXmlHttp();
    return "withCredentials" in c ? c.open(a, b, !0) : "undefined" != typeof XDomainRequest ? (c = new XDomainRequest, c.open(a, b)) : c = null, c
}

function getJson(a, b) {
    var c = createCORSRequest("GET", a);
    return c ? (c.onload = function() {
        var a = c.responseText;
        b(a)
    }, c.onerror = function() {
        console.log("Error happen")
    }, void c.send(null)) : (console.log("Cannot create request"), !1)
}

function YQL(a, b) {
    if ("json" == b) var c = "select * from json where url = '" + a + "'",
        d = "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(c) + "&format=json" ;
    else var c = "select * from html where url = '" + a + "'and compat='html5' and xpath = '" + b + "'",
        d = "https://query.yahooapis.com/v1/public/yql?format=xml&q=" + encodeURIComponent(c);
    return d
}