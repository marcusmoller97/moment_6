import { wordToUpperCase } from "../js/modules.js";

describe("Convertion to uppercase letters", () => {
    test("Test case lowercase to uppercase", () => {
        const inputWord = "hello";
        const result = wordToUpperCase(inputWord);
        expect(result).toBe("HELLO");
    }),
    test("Lower and uppercase letters to uppercase", () => {
        const inputWord = "HellO";
        const result = wordToUpperCase(inputWord);
        expect(result).toBe("HELLO");
    }),
    test("Upper to uppercase letters", () => {
        const inputWord = "HELLO";
        const result = wordToUpperCase(inputWord);
        expect(result).toBe("HELLO");
    })
});
