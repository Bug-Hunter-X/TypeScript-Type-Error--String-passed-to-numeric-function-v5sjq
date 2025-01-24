function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: string | number, b: string | number): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: parameters must be numbers or parsable strings');
  }
  return numA + numB;
}

const result1 = addSafe(1, 2); // Works correctly
const result2 = addSafe("1", 2); // Works correctly
const result3 = addSafe("1", "2"); // Works correctly
const result4 = addSafe("a", 2); // Throws an error
console.log(result1, result2, result3);
//console.log(result4) 