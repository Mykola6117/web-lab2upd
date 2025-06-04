const LearnView = {
    displayWords(words) {
        const container = document.getElementById("wordsContainer");
        container.innerHTML = "";
        words.forEach(word => {
            const p = document.createElement("p");
            p.textContent = word;
            container.appendChild(p);
        });
    }
};