document.addEventListener("DOMContentLoaded", function () {
    const wordCard = document.querySelector(".word-card");
    const hungarianWordEl = document.getElementById("hungarian-word");
    const englishWordEl = document.getElementById("english-word");

    // Word list
    const words = [
        { hungarian: "szerelem", english: "love" },
        { hungarian: "barát", english: "friend" },
        { hungarian: "iskola", english: "school" },
        { hungarian: "könyv", english: "book" },
        { hungarian: "zene", english: "music" },
    ];

    // Pick a random word
    const randomWord = words[Math.floor(Math.random() * words.length)];
    hungarianWordEl.textContent = randomWord.hungarian;
    englishWordEl.textContent = randomWord.english;

    // Add flip functionality
    wordCard.addEventListener("click", function () {
        wordCard.classList.toggle("flipped");
    });
}); 
