const practicedata = {
    part1: {
        eyebrow: "Part 1 · Introduction & Interview",
        label: "Part 1 Practice",
        title: "Introduction & Interview",
        description: "Practice short answers on familiar topics and everyday subjects."
    },

    part2: {
        eyebrow: "Part 2 · Long Turn",
        label: "Part 2 Practice",
        title: "Long Turn",
        description: "Speak for one to two minutes about a given topic."
    },

    part3: {
        eyebrow: "Part 3 · Discussion",
        label: "Part 3 Practice",
        title: "Discussion",
        description: "Give longer answers and discuss ideas in more depth."
    }
};

const practicecarddata = {
    part1: {
        eyebrow: "Part 1 · Introduction & Interview",
        label: "Part 1 Practice",
        number: "01",
        title: "Introduction & Interview",
        description: "Practice short answers on familiar topics and everyday subjects.",
        questions: "5 Questions",
        time: "~5 Minutes",
        mode: "Answer Aloud"
    },

    part2: {
        eyebrow: "Part 2 · Long Turn",
        label: "Part 2 Practice",
        number: "02",
        title: "Long Turn",
        description: "Speak for one to two minutes about a given topic.",
        questions: "1 Task",
        time: "~3 Minutes",
        mode: "Answer Aloud"
    },

    part3: {
        eyebrow: "Part 3 · Discussion",
        label: "Part 3 Practice",
        number: "03",
        title: "Discussion",
        description: "Discuss ideas and give longer answers about broader topics.",
        questions: "5 Questions",
        time: "~5 Minutes",
        mode: "Answer Aloud"
    }
};




const part1questions = {
    studies: [
        "What do you study?",
        "Why did you choose the subject you are currently studying?",
        "What do you enjoy most about your studies?",
        "What is the most difficult part of your studies?",
        "Do you prefer studying alone or with other people?",
        "How do you usually prepare for an important exam?",
        "What subject would you like to study in the future?",
        "Do you think your studies will be useful for your future career?"
    ],

    hometown: [
        "Where is your hometown?",
        "What do you like most about your hometown?",
        "What is the most interesting place in your hometown?",
        "Has your hometown changed much in recent years?",
        "Would you like to continue living in your hometown in the future?",
        "What do people usually do for fun in your hometown?",
        "Is your hometown a good place for young people?",
        "What would you like to change about your hometown?"
    ],

    home: [
        "Do you live in a house or an apartment?",
        "Who do you live with?",
        "What is your favourite room in your home?",
        "What do you usually do at home in your free time?",
        "Is there anything you would like to change about your home?",
        "Do you prefer spending time at home or going outside?",
        "What makes your home comfortable for you?",
        "Would you like to live in a different type of home in the future?"
    ],

    family: [
        "How many people are there in your family?",
        "Who are you closest to in your family?",
        "How often do you spend time with your family?",
        "What do you usually do together?",
        "Do you think family members should spend more time together?",
        "Is family life different from when you were a child?",
        "What is something you enjoy doing with your family?",
        "How important is family to you?"
    ],

    friends: [
        "How often do you meet your friends?",
        "What do you usually do together?",
        "How do you usually make new friends?",
        "Do you prefer having a few close friends or many friends?",
        "What qualities do you look for in a friend?",
        "Do you usually stay in contact with old friends?",
        "Have your friendships changed as you have grown older?",
        "What is your favourite thing to do with your friends?"
    ],

    hobbies: [
        "What do you like doing in your free time?",
        "Do you have any hobbies?",
        "How did you become interested in the activities you enjoy?",
        "How often do you spend time on your hobbies?",
        "Do you prefer indoor or outdoor hobbies?",
        "Is there a new hobby you would like to try?",
        "Did you have the same hobbies when you were younger?",
        "Do you think hobbies are important?"
    ],

    food: [
        "What kind of food do you enjoy eating?",
        "What is your favourite meal?",
        "Do you prefer eating at home or in restaurants?",
        "How often do you eat out?",
        "Is there any food you do not like?",
        "Do you enjoy cooking?",
        "Has your taste in food changed over the years?",
        "What food would you recommend to a visitor to your country?"
    ],

    music: [
        "What kind of music do you like?",
        "How often do you listen to music?",
        "When do you usually listen to music?",
        "Do you prefer listening to music alone or with others?",
        "Has your taste in music changed over time?",
        "Is there a type of music you do not enjoy?",
        "Do you ever listen to live music?",
        "How does music affect your mood?"
    ],

    technology: [
        "What piece of technology do you use most often?",
        "How often do you use your phone?",
        "What do you usually use your phone for?",
        "Do you think technology makes life easier?",
        "Is there any technology you find difficult to use?",
        "What was the first piece of technology you used regularly?",
        "Do you prefer using technology for studying or entertainment?",
        "How has technology changed the way you communicate?"
    ],

    weekends: [
        "What do you usually do at the weekend?",
        "Do you prefer busy weekends or relaxing weekends?",
        "Do you usually spend weekends with your family or friends?",
        "What was your last weekend like?",
        "Do you study or work at the weekend?",
        "Is there anything you would like to do more often at weekends?",
        "Did you spend your weekends differently when you were younger?",
        "What would your ideal weekend look like?"
    ]
};


const part2questions = [
    {
        intro: "Describe a place",
        title: "Describe a place you would like to visit.",
        prompts: [
            "where the place is",
            "what you would do there",
            "who you would go with",
            "and explain why you would like to visit it"
        ]
    },

    {
        intro: "Describe a person",
        title: "Describe a person who has influenced you.",
        prompts: [
            "who the person is",
            "how you know them",
            "what they have taught you",
            "and explain how they influenced you"
        ]
    },

    {
        intro: "Describe an experience",
        title: "Describe an experience that made you feel proud.",
        prompts: [
            "what the experience was",
            "when it happened",
            "who was involved",
            "and explain why you felt proud"
        ]
    },

    {
        intro: "Describe an object",
        title: "Describe something you use every day.",
        prompts: [
            "what it is",
            "how long you have used it",
            "how you use it",
            "and explain why it is useful to you"
        ]
    },

    {
        intro: "Describe an activity",
        title: "Describe an activity you enjoy doing in your free time.",
        prompts: [
            "what the activity is",
            "when you usually do it",
            "who you do it with",
            "and explain why you enjoy it"
        ]
    },

    {
        intro: "Describe a journey",
        title: "Describe a memorable journey you have taken.",
        prompts: [
            "where you went",
            "how you travelled",
            "who you travelled with",
            "and explain why you remember the journey"
        ]
    },

    {
        intro: "Describe a skill",
        title: "Describe a skill you would like to learn.",
        prompts: [
            "what the skill is",
            "why you want to learn it",
            "how you would learn it",
            "and explain how it could help you"
        ]
    },

    {
        intro: "Describe an event",
        title: "Describe an event that you enjoyed attending.",
        prompts: [
            "what the event was",
            "where and when it happened",
            "who you went with",
            "and explain why you enjoyed it"
        ]
    },

    {
        intro: "Describe a book",
        title: "Describe a book that you found interesting.",
        prompts: [
            "what the book is",
            "when you read it",
            "what it was about",
            "and explain why you found it interesting"
        ]
    },

    {
        intro: "Describe a piece of advice",
        title: "Describe a piece of advice that was useful to you.",
        prompts: [
            "what the advice was",
            "who gave it to you",
            "when you received it",
            "and explain why it was useful"
        ]
    },

    {
        intro: "Describe a change",
        title: "Describe a change that improved your daily life.",
        prompts: [
            "what the change was",
            "when you made it",
            "why you decided to make it",
            "and explain how it improved your life"
        ]
    },

    {
        intro: "Describe a meal",
        title: "Describe a meal that you really enjoyed.",
        prompts: [
            "what you ate",
            "where you had the meal",
            "who you were with",
            "and explain why you enjoyed it"
        ]
    },

    {
        intro: "Describe a goal",
        title: "Describe a goal you would like to achieve.",
        prompts: [
            "what the goal is",
            "why it is important to you",
            "what you are doing to achieve it",
            "and explain how you will feel after achieving it"
        ]
    },

    {
        intro: "Describe a useful place",
        title: "Describe a place near your home that you often visit.",
        prompts: [
            "where it is",
            "how often you visit it",
            "what you do there",
            "and explain why you like going there"
        ]
    },

    {
        intro: "Describe a difficult decision",
        title: "Describe a difficult decision you had to make.",
        prompts: [
            "what the decision was",
            "when you made it",
            "what choices you had",
            "and explain why the decision was difficult"
        ]
    },

    {
        intro: "Describe a memorable conversation",
        title: "Describe a conversation that you remember well.",
        prompts: [
            "who you spoke with",
            "when and where the conversation happened",
            "what you talked about",
            "and explain why you remember it"
        ]
    },

    {
        intro: "Describe a hobby",
        title: "Describe a hobby you would like to spend more time doing.",
        prompts: [
            "what the hobby is",
            "how you became interested in it",
            "how often you do it now",
            "and explain why you want to spend more time on it"
        ]
    },

    {
        intro: "Describe a helpful person",
        title: "Describe someone who helped you when you needed it.",
        prompts: [
            "who the person is",
            "what problem you had",
            "how they helped you",
            "and explain why you appreciated their help"
        ]
    },

    {
        intro: "Describe a memorable day",
        title: "Describe a day that you remember clearly.",
        prompts: [
            "when it was",
            "what happened that day",
            "who you spent the day with",
            "and explain why you remember it"
        ]
    },

    {
        intro: "Describe something you want to improve",
        title: "Describe something about yourself that you would like to improve.",
        prompts: [
            "what you would like to improve",
            "why you want to improve it",
            "what you are doing about it",
            "and explain how the improvement could help you"
        ]
    }
];