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
    const div = document.querySelector("div");

    const input = document.createElement("input");
    input.type = "text";
    input.id = "wordUpper";
    input.placeholder = "Skriv ett ord...";
    div.appendChild(input);

    const btn = document.createElement("button");
    const p = document.createElement("p");

    btn.type = "button";
    btn.innerHTML = "Submit";
    div.appendChild(btn);
    div.appendChild(p);
}

/**
 * Function for clickevent.
 */
function clickEvent () {
    const input = document.querySelector("#wordUpper");
    const p = document.querySelector("p")
    p.textContent = wordToUpperCase(input.value);
    input.value = ""
}
export { wordToUpperCase, formBtnInput, clickEvent };
