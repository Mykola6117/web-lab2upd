document.addEventListener("DOMContentLoaded", function() {
    const select = document.getElementById("topicSelect");
    const startBtn = document.getElementById("startLearning");

    startBtn.addEventListener("click", function() {
        const selectedTopic = select.value;
        const words = LearnModel.getWordsByTopic(selectedTopic);
        LearnView.displayWords(words);
    });
});