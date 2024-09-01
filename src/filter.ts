export function filter(words: string[]): string[] {
  let longWords: string[] = [];
  words.forEach((word: string) => {
    if (word.length > 5) {
      longWords.push(word);
    }
  });
  return longWords;
}