#!/usr/bin/env node

var read_stdin = require ('get-stdin');
var ama = require ('./ama');
var write_stdout = function (x) {
    process .stdout .write (x);
};


read_stdin () .then (ama)
    .then (write_stdout);
