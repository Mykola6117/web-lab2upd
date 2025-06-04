const TestModel = {
    topics: {
        basic: [
            { question: "apple", options: ["яблуко", "груша", "виноград"], answer: "яблуко" },
            { question: "cat", options: ["кіт", "собака", "миша"], answer: "кіт" },
            { question: "house", options: ["будинок", "літак", "машина"], answer: "будинок" }
        ],
        travel: [
            { question: "airport", options: ["вокзал", "аеропорт", "метро"], answer: "аеропорт" },
            { question: "ticket", options: ["паспорт", "квиток", "валіза"], answer: "квиток" }
        ],
        food: [
            { question: "bread", options: ["молоко", "хліб", "сир"], answer: "хліб" },
            { question: "cheese", options: ["сир", "риба", "фрукт"], answer: "сир" }
        ],
        business: [
            { question: "contract", options: ["контракт", "прибуток", "бюджет"], answer: "контракт" },
            { question: "profit", options: ["витрати", "прибуток", "податки"], answer: "прибуток" }
        ]
    },

    getQuestionsByTopic(topic) {
        return this.topics[topic] || [];
    }
};