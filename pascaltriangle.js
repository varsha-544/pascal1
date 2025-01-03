// Function to generate Pascal's Triangle
function generatePascalsTriangle(rows) {
    for (let i = 0; i < rows; i++) {
        // Print spaces for alignment
        let row = ' '.repeat(rows - i - 1);

        // Calculate and append the values in the row
        let number = 1;
        for (let j = 0; j <= i; j++) {
            row += number + ' ';
            number = (number * (i - j)) / (j + 1);
        }

        // Print the current row
        console.log(row.trimEnd());
    }
}

// Number of rows for Pascal's Triangle
const rows = 5;

// Generate Pascal's Triangle
generatePascalsTriangle(rows);
