/**
 * @module
 * @author Marcus Möller
 */

/**
 * Function that converts a word to uppercase letters.
 * @param {*} word The word to be converted to capital letters.
 */
function wordToUpperCase (word) {
    return word.toUpperCase();
}

/**
 * Function to create input and button.
 */
function formBtnInput () {
    const body = document.querySelector("div");

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Skriv ett ord...";
    body.appendChild(input);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.innerHTML = "Submit";
    body.appendChild(btn);
}

export { wordToUpperCase, formBtnInput };
