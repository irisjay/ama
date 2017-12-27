var fetch = require ('node-fetch');

var ama = function (x) {
    return fetch (x)
        .then (function (res) {
            return res .buffer ();
        })
};

module .exports = ama;
