const LearnModel = {
    topics: {
        basic: [
            "apple - яблуко",
            "cat - кіт",
            "house - будинок",
            "car - машина",
            "sun - сонце",
            "tree - дерево"
        ],
        travel: [
            "airport - аеропорт",
            "ticket - квиток",
            "luggage - багаж",
            "passport - паспорт",
            "hotel - готель"
        ],
        food: [
            "bread - хліб",
            "cheese - сир",
            "milk - молоко",
            "meat - м'ясо",
            "vegetables - овочі"
        ],
        business: [
            "contract - контракт",
            "profit - прибуток",
            "meeting - зустріч",
            "salary - зарплата",
            "manager - менеджер"
        ]
    },
    getWordsByTopic(topic) {
        return this.topics[topic] || [];
    }
};