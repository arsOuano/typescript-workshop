"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomeStuff = doSomeStuff;
var map_1 = require("./map");
var fruit_1 = require("./fruit");
var slice_1 = require("./slice");
var filter_1 = require("./filter");
console.log('Try npm run lint/fix!');
var longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';
var trailing = 'Semicolon';
var why = { am: 'I tabbed?' };
var iWish = "I didn't have a trailing space...";
var sicilian = true;
var vizzini = sicilian ? !sicilian : sicilian;
var re = /foo {3}bar/;
function doSomeStuff(withThis, andThat, andThose) {
    //function on one line
    if (!andThose.length) {
        return false;
    }
    console.log(withThis);
    console.log(andThat);
    console.dir(andThose);
    console.log(longString, trailing, why, iWish, vizzini, re);
    return;
}
// TODO: more examples
var numbers = [2, 4, 6, 8];
console.log((0, map_1.sqaureNumber)(numbers));
var stringArray = ["apple", "sofa", "fan", "banana"];
var filtered = (0, filter_1.filter)(stringArray);
filtered.forEach(function (filteredString) {
    console.log(filteredString);
});
var fruits = ['apple', 'banana', 'mango', 'grape'];
(0, fruit_1.default)(fruits);
var singleString = "single";
var slicedFruits = (0, slice_1.sliced)(singleString, 1, 3);
console.log(slicedFruits);
