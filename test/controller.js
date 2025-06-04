const TestController = {
    currentTopic: "",
    questions: [],
    currentQuestionIndex: 0,
    score: 0,

    startTest(topic) {
        this.currentTopic = topic;
        this.questions = TestModel.getQuestionsByTopic(topic);
        this.currentQuestionIndex = 0;
        this.score = 0;

        if (this.questions.length === 0) {
            alert("Немає запитань для цієї теми.");
            return;
        }

        TestView.showQuestionContainer();
        this.displayCurrentQuestion();
    },

    displayCurrentQuestion() {
        const questionObj = this.questions[this.currentQuestionIndex];
        TestView.displayQuestion(
            questionObj,
            this.currentQuestionIndex,
            this.questions.length
        );
    },

    checkAnswer(selectedOption) {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if (selectedOption === currentQuestion.answer) {
            this.score++;
        }

        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questions.length) {
            this.displayCurrentQuestion();
        } else {
            TestView.showResult(this.score, this.questions.length);
        }
    }
};