const MainText = document.getElementById("userText");
const reversedOutput = document.getElementById("reversedOutput");
const Details = document.getElementById("Details");

function validateText() {
  const text = MainText.value;
  const wordCount = text.trim().split(/\s+/).length;
  const charCount = text.length;
  Details.textContent =
    "Word Count: " + wordCount + "\n" + "Character Count: " + charCount;
}

function reverseText() {
  const text = MainText.value;
  const reversedText = text.split("").reverse().join("");
  reversedOutput.textContent = reversedText;
}
