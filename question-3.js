// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.



// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    // Sol pointer
    let left = 0;
    // En yüksek karakter sayısını tutar
    let maxCount = 0;
    // Karakter sayısını tutmak için bir dizi
    let charCount = new Array(26).fill(0);
    // En uzun geçerli pencerenin uzunluğu
    let maxLength = 0;

    // Sağ pointer ile string üzerinde dolaşır
    for (let right = 0; right < s.length; right++) {
        // Sağdaki karakterin ASCII değerini bul ve sayısını arttır
        charCount[s.charCodeAt(right) - 'A'.charCodeAt(0)]++;
        // Mevcut penceredeki en yüksek karakter sayısını güncelle
        maxCount = Math.max(maxCount, charCount[s.charCodeAt(right) - 'A'.charCodeAt(0)]);

        // Eğer pencere boyutu - en yüksek karakter sayısı > k ise sol pointer'ı kaydır
        while ((right - left + 1) - maxCount > k) {
            // Soldaki karakterin sayısını azalt
            charCount[s.charCodeAt(left) - 'A'.charCodeAt(0)]--;
            // Sol pointer'ı sağa kaydır
            left++;
        }

        // En uzun geçerli pencerenin uzunluğunu güncelle
        maxLength = Math.max(maxLength, right - left + 1);
    }

    // En uzun geçerli pencerenin uzunluğunu döndür
    return maxLength;
};


console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));
