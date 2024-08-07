// Stripping Names: Store a person’s name, and
// include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.

const name = " Ali Raza ";
console.log(name);
console.log(name.trim());

const name1 = " Ali\tRaza ";
console.log(name1);
console.log(name1.trim());

const name2 = " Ali\nRaza ";
console.log(name2);
console.log(name2.trim());

export {};