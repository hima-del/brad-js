function easyHTTP() {
    this.http = new XMLHttpRequest();
}
//make an http get request
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    let self = this;
    this.http.onload = function() {
        if (self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('error:' + self.http.status);
        }
    }
    this.http.send();
}