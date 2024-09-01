"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = filter;
function filter(words) {
    let longWords = [];
    words.forEach(function (word) {
        if (word.length > 5) {
            longWords.push(word);
        }
    });
    return longWords;
}
