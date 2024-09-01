"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomeStuff = doSomeStuff;
const map_1 = require("./map");
const fruit_1 = require("./fruit");
const slice_1 = require("./slice");
const filter_1 = require("./filter");
console.log('Try npm run lint/fix!');
const longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';
const trailing = 'Semicolon';
const why = { am: 'I tabbed?' };
const iWish = "I didn't have a trailing space...";
const sicilian = true;
const vizzini = sicilian ? !sicilian : sicilian;
const re = /foo {3}bar/;
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
const numbers = [2, 4, 6, 8];
console.log((0, map_1.sqaureNumber)(numbers));
const stringArray = ["apple", "sofa", "fan", "banana"];
const filtered = (0, filter_1.filter)(stringArray);
filtered.forEach((filteredString) => {
    console.log(filteredString);
});
const fruits = ['apple', 'banana', 'mango', 'grape'];
(0, fruit_1.default)(fruits);
const singleString = "single";
const slicedFruits = (0, slice_1.sliced)(singleString, 1, 3);
console.log(slicedFruits);
//# sourceMappingURL=index.js.map