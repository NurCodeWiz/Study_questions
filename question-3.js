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
