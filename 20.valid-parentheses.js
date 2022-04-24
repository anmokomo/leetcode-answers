/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Runtime: 66 ms, faster than 80.73% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 43.6 MB, less than 14.44% of JavaScript online submissions for Valid Parentheses.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
const charsR = {
    '}':'curly',
    ']':'bracket',
    ')':'parenth'
}
const charsL = {
    '{':'curly',
    '[':'bracket',
    '(':'parenth'
}
const validTest = (s) => {
    if (s.length % 2 !== 0) return false
    if (Object.keys(charsR).find(x => x === s.charAt(0))) {
        return false
    }
    if (Object.keys(charsL).find(x => x === s.charAt(s.length-1))) {
        return false
    }
    else return true
}

const isLeft = (char) => {
    return Object.keys(charsL).some(x => x === char)
}

var isValid = function(s) {
    const arr = Array.from(s)
    if (!validTest(s)) return false
    let leftStack = []
    for (let i = 0; i < arr.length; i++) {
        const isLastElem = i === arr.length-1
        const char = s.charAt(i)
        if (isLeft(char)) {
            const leftType = charsL[char]
            leftStack.push(leftType)
            if (leftStack.length > 0 && isLastElem) {
                    return false
                }
        } else {
            const rightType = charsR[char]
            if (leftStack[leftStack.length - 1] === rightType) {
                leftStack.pop()
                if (leftStack.length === 0 && isLastElem) {
                    return true
                } else if (leftStack.length > 0 && isLastElem) {
                    return false
                }
            } else {
                return false
            }
        }
    }
    
}
