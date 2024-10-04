function longestConsecutive(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const numSet = new Set(nums);
    let longestSequence = 0;

    for (let num of numSet) {
        // Only check if num is the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentSequence = 1;

            // Count how long the consecutive sequence goes
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentSequence++;
            }

            longestSequence = Math.max(longestSequence, currentSequence);
        }
    }

    return longestSequence;
}
// Time Complexity:
// O(n): We perform constant-time operations for each number using the set, leading to an overall linear time complexity.
// Space Complexity:
// O(n): We use a set to store the unique numbers, which requires space proportional to the input array size.
