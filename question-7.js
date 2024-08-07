// Isomorphic Strings
// Easy
// Topics
// Companies
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.



// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true


// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

var isIsomorphic = function(s,t) {
    if (s.length != t.length){
        return false
    }
    const mapStoT = new Map();
    const mapTtoS = new Map();
    for (let i=0; i<s.length; i++) {
        const charS = s[i]
        const charT = t[i]

        if (mapStoT.has(charS)){
            if(mapStoT.get(charS)!==charT)
                return false

        } else {
            mapStoT.set(charS,charT)
        }
        if (mapTtoS.has(charT)) {
            if (mapTtoS.get(charT) !== charS) {
                return false;
            }
        } else {
            mapTtoS.set(charT, charS);
        }


    }
    return true


}
console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); //false
console.log(isIsomorphic("paper", "title")); // true
