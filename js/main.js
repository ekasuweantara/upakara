(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}]},{},[1])

// SEARCH SET FOCUS
$(function () {
    $('span[data-focus="search"]').on('click', function(event) {
        event.preventDefault();
        // $('.overlay').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
});

function() {
  d.$element.one("mouseup.dismiss.bs.modal", function(b) {
    a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
  })
}