const TestView = {
    displayQuestion(questionObj, currentIndex, totalQuestions) {
        const questionText = document.getElementById("questionText");
        const answersContainer = document.getElementById("answersContainer");

        questionText.textContent = `Питання ${currentIndex + 1} з ${totalQuestions}: ${questionObj.question}`;
        answersContainer.innerHTML = "";

        questionObj.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.className = "btn btn-outline-primary m-2";
            button.addEventListener("click", () => {
                TestController.checkAnswer(option);
            });
            answersContainer.appendChild(button);
        });
    },

    showResult(score, totalQuestions) {
        const container = document.getElementById("questionContainer");
        container.innerHTML = `
            <h3>Тест завершено!</h3>
            <p>Ваш результат: ${score} з ${totalQuestions} правильних відповідей.</p>
            <button id="restartBtn" class="btn btn-secondary mt-3">Спробувати ще раз</button>
        `;
        document.getElementById("restartBtn").addEventListener("click", () => {
            location.reload();
        });
    },

    showQuestionContainer() {
        document.getElementById("questionContainer").style.display = "block";
    }
};