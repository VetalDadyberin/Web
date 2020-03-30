onmessage = function (e) {
    buff = 0;
    for (var i = 0; i < e.data.length; i++) {
        if (e.data[i] != '') {
                buff = buff + 1;
        }
    }
    console.log(buff);
    this.postMessage(buff);
}