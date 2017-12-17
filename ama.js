var fetch = require ('node-fetch');

var ama = function (x) {
    return fetch (x)
        .then (function (res) {
            return res .text ();
        })
};

module .exports = ama;
