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