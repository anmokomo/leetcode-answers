/* 
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string ""
Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    if (strs[0] === '') return ''
    const findIndex = (charIndex) => {
        const letterA = strs[0].charAt(charIndex)
        for(let i = 1; i <= strs.length-1; i++) {
            const letterB = strs[i].charAt(charIndex)
            const exists = letterA && letterB
            const match = letterA === letterB
//return the index where the letters stop matching
            if(!exists) return charIndex 
//if we're at the last word in the array,start at the top(first) word, next letter column
            else if(match && i === strs.length-1) {
                return findIndex(charIndex+1)
            } else if (match) {
                continue
            } else {
                return charIndex
            }
        }
    }
//findIndex will return the letter index/'column'where the letters stopped matching 
    return strs[0].substring(0, findIndex(0))
};
