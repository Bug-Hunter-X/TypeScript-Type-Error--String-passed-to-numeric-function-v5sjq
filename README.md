# TypeScript Type Error: String passed to numeric function

This repository demonstrates a common TypeScript type error. The `add` function is defined to accept two numbers, but it is called with a string and a number, resulting in a type error.

The solution involves stricter type checking and handling of potential string inputs. 

## Running the code:

1. Clone the repository.
2. Navigate to the repository directory in your terminal.
3. Run `tsc bug.ts` to compile the buggy code and see the error.
4. Run `tsc bugSolution.ts` to see the corrected version compile successfully.
