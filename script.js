const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
    if (arr.length === 0) return [];

    let chunks = [];
    let currentChunk = [];
    let currentSum = 0;

    for (let num of arr) {
        // Check if adding the next number exceeds the limit n
        if (currentSum + num > n) {
            // "Close" this chunk and save it
            chunks.push(currentChunk);
            // Start a new chunk with the current number
            currentChunk = [num];
            currentSum = num;
        } else {
            // Keep adding to the current chunk
            currentChunk.push(num);
            currentSum += num;
        }
    }

    // Push the final remaining chunk
    if (currentChunk.length > 0) {
        chunks.push(currentChunk);
    }

    return chunks;
}

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));

