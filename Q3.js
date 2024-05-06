function firstNonRepeatedCharacter(string) {
    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        if (string.indexOf(char) === i && string.indexOf(char, i + 1) === -1) {
            return char;
        }
    }
    return null;
}
console.log(firstNonRepeatedCharacter("hello"));
console.log(firstNonRepeatedCharacter("iimmraan"));
export {};
