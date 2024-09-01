import {sqaureNumber} from "./map";
import printArray from "./fruit";
import {sliced} from "./slice";
import { filter } from "./filter";

console.log('Try npm run lint/fix!');

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = {am: 'I tabbed?'};

const iWish = "I didn't have a trailing space...";

const sicilian = true;

const vizzini = sicilian ? !sicilian : sicilian;

const re = /foo {3}bar/;

export function doSomeStuff(
  withThis: string,
  andThat: string,
  andThose: string[]
) {
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

const numbers = [2,4,6,8];

console.log(sqaureNumber(numbers));

const stringArray: string[] = ['apple', 'sofa', 'fan', 'banana'];
const filtered = filter(stringArray);
filtered.forEach((filteredString: string) => {
  console.log(filteredString);
});

const fruits = ['apple', 'banana', 'mango', 'grape'];
printArray(fruits);

const singleString = 'single';
const slicedFruits = sliced(singleString, 1, 3);
console.log(slicedFruits);

