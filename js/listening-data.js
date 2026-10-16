window.listeningdata = {
    quick: [
        {
            id: "quick-01",
            title: "Doctor's Appointment",
            audio: "audio/listening/quick/quick-01.mp3",
            questions: [
                {
                    id: 1,
                    type: "mcq",
                    question: "Why does Daniel want to visit the doctor?",
                    options: [
                        "He has had a cough for four days",
                        "He has a headache",
                        "He needs a routine health check"
                    ],
                    answer: 0
                },
                {
                    id: 2,
                    type: "mcq",
                    question: "What time is Daniel's appointment?",
                    options: [
                        "9:30 am",
                        "11:15 am",
                        "2:15 pm"
                    ],
                    answer: 1
                },
                {
                    id: 3,
                    type: "mcq",
                    question: "Where is the appointment?",
                    options: [
                        "The branch on Park Road",
                        "The university health centre",
                        "The main clinic on King Street"
                    ],
                    answer: 2
                },
                {
                    id: 4,
                    type: "mcq",
                    question: "How much does a standard consultation cost?",
                    options: [
                        "£25",
                        "£35",
                        "£45"
                    ],
                    answer: 1
                },
                {
                    id: 5,
                    type: "mcq",
                    question: "How early should Daniel arrive?",
                    options: [
                        "5 minutes early",
                        "10 minutes early",
                        "20 minutes early"
                    ],
                    answer: 1
                }
            ]
        },
        {
            id: "quick-02",
            title: "University Library",
            audio: "audio/listening/quick/quick-02.mp3",
            questions: [
                {
                    id: 6,
                    type: "mcq",
                    question: "What time does the library close on Saturdays?",
                    options: [
                        "3:00 pm",
                        "5:00 pm",
                        "8:00 pm"
                    ],
                    answer: 1
                },
                {
                    id: 7,
                    type: "mcq",
                    question: "How many books can students borrow at one time?",
                    options: [
                        "Four",
                        "Six",
                        "Eight"
                    ],
                    answer: 1
                },
                {
                    id: 8,
                    type: "mcq",
                    question: "Where is the silent study room?",
                    options: [
                        "On the ground floor",
                        "On the first floor",
                        "On the second floor"
                    ],
                    answer: 2
                },
                {
                    id: 9,
                    type: "form",
                    question: "Complete the library information.",
                    prompt: "Library Information",
                    fields: [
                        {
                            id: "q9",
                            label: "Normal book loan period:",
                            answer: "14 days"
                        }
                    ]
                },
                {
                    id: 10,
                    type: "form",
                    question: "Complete the library information.",
                    prompt: "Printing Costs",
                    fields: [
                        {
                            id: "q10",
                            label: "Cost of colour printing per page:",
                            answer: "15 pence"
                        }
                    ]
                }
            ]
        },
        {
            id: "quick-03",
            title: "Weekend Trip",
            audio: "audio/listening/quick/quick-03.mp3",
            questions: [
                {
                    id: 11,
                    type: "mcq",
                    question: "How long does the train journey to Lakewood take?",
                    options: [
                        "About 45 minutes",
                        "About 90 minutes",
                        "About 2 hours"
                    ],
                    answer: 1
                },
                {
                    id: 12,
                    type: "mcq",
                    question: "What is the price of a return ticket before the student discount?",
                    options: [
                        "$30",
                        "$40",
                        "$50"
                    ],
                    answer: 1
                },
                {
                    id: 13,
                    type: "mcq",
                    question: "How long does the walking trail usually take?",
                    options: [
                        "One hour",
                        "Two hours",
                        "Three hours"
                    ],
                    answer: 1
                },
                {
                    id: 14,
                    type: "mcq",
                    question: "When is rain expected?",
                    options: [
                        "Early Saturday morning",
                        "Around midday",
                        "After 3 pm"
                    ],
                    answer: 2
                },
                {
                    id: 15,
                    type: "mcq",
                    question: "What time will they meet outside Central Station?",
                    options: [
                        "7:40 am",
                        "7:55 am",
                        "8:20 am"
                    ],
                    answer: 1
                }
            ]
        },
        {
            id: "quick-04",
            title: "Part-Time Job",
            audio: "audio/listening/quick/quick-04.mp3",
            questions: [
                {
                    id: 16,
                    type: "mcq",
                    question: "What did Aisha do in her previous summer job?",
                    options: [
                        "Worked in a bookshop",
                        "Worked in a clothing store",
                        "Worked in a restaurant"
                    ],
                    answer: 1
                },
                {
                    id: 17,
                    type: "mcq",
                    question: "How long is a typical part-time shift?",
                    options: [
                        "Three hours",
                        "Four hours",
                        "Six hours"
                    ],
                    answer: 1
                },
                {
                    id: 18,
                    type: "mcq",
                    question: "What is the starting hourly pay?",
                    options: [
                        "£10.50",
                        "£12.50",
                        "£15.00"
                    ],
                    answer: 1
                },
                {
                    id: 19,
                    type: "mcq",
                    question: "What must Aisha upload with her application?",
                    options: [
                        "Her university transcript",
                        "A photograph",
                        "Her CV"
                    ],
                    answer: 2
                },
                {
                    id: 20,
                    type: "mcq",
                    question: "When is the application deadline?",
                    options: [
                        "Friday the 11th",
                        "Friday the 18th",
                        "Friday the 25th"
                    ],
                    answer: 1
                }
            ]
        },
    ],

    full: {
        section1: [
            {
                id: "full-s1-01",
                title: "Language Course Enquiry",
                audio: "audio/listening/full/section-1/full-s1-01.mp3",
                questions: [
                    {
                        id: 1,
                        type: "mcq",
                        question: "Why does the student want to improve her English?",
                        options: [
                            "To get a job at the college",
                            "To prepare for university",
                            "To travel abroad",
                            "To teach English"
                        ],
                        answer: 1
                    },
                    {
                        id: 2,
                        type: "mcq",
                        question: "Which skills does the student particularly want to improve?",
                        options: [
                            "Reading and writing",
                            "Grammar and vocabulary",
                            "Speaking and listening",
                            "Writing and pronunciation"
                        ],
                        answer: 2
                    },
                    {
                        id: 3,
                        type: "mcq",
                        question: "On which days are the classes held?",
                        options: [
                            "Tuesday, Thursday and Saturday",
                            "Monday, Wednesday and Friday",
                            "Monday, Tuesday and Thursday",
                            "Wednesday, Friday and Saturday"
                        ],
                        answer: 1
                    },
                    {
                        id: 4,
                        type: "mcq",
                        question: "What time do the classes finish?",
                        options: [
                            "11:00 a.m.",
                            "11:30 a.m.",
                            "12:00 noon",
                            "12:30 p.m."
                        ],
                        answer: 2
                    },
                    {
                        id: 5,
                        type: "mcq",
                        question: "How long does the course last?",
                        options: [
                            "Six weeks",
                            "Eight weeks",
                            "Ten weeks",
                            "Twelve weeks"
                        ],
                        answer: 3
                    },
                    {
                        id: 6,
                        type: "mcq",
                        question: "When does the course begin?",
                        options: [
                            "7 September",
                            "12 September",
                            "14 September",
                            "21 September"
                        ],
                        answer: 2
                    },
                    {
                        id: 7,
                        type: "mcq",
                        question: "What is included in the course fee?",
                        options: [
                            "A notebook and a dictionary",
                            "All classroom materials",
                            "Accommodation",
                            "Examination fees"
                        ],
                        answer: 1
                    },
                    {
                        id: 8,
                        type: "mcq",
                        question: "How much is the separate registration fee?",
                        options: [
                            "£10",
                            "£15",
                            "£20",
                            "£25"
                        ],
                        answer: 1
                    },
                    {
                        id: 9,
                        type: "mcq",
                        question: "Where is the West Building located?",
                        options: [
                            "Behind the library",
                            "Next to the main gate",
                            "Opposite the student café",
                            "Behind the college office"
                        ],
                        answer: 2
                    },
                    {
                        id: 10,
                        type: "mcq",
                        question: "What is the deadline for online registration?",
                        options: [
                            "5 September",
                            "7 September",
                            "12 September",
                            "14 September"
                        ],
                        answer: 1
                    }
                ]
            },
            {
                id: "full-s1-02",
                title: "Sports Centre Membership",
                audio: "audio/listening/full/section-1/full-s1-02.mp3",
                questions: [
                    {
                        id: 1,
                        type: "mcq",
                        question: "Why is the customer interested in joining the sports centre?",
                        options: [
                            "To train for a competition",
                            "To exercise regularly",
                            "To learn how to swim",
                            "To meet new people"
                        ],
                        answer: 1
                    },
                    {
                        id: 2,
                        type: "mcq",
                        question: "How much does the standard membership cost per month?",
                        options: [
                            "£25",
                            "£30",
                            "£35",
                            "£50"
                        ],
                        answer: 2
                    },
                    {
                        id: 3,
                        type: "mcq",
                        question: "What is included in the premium membership but not the standard membership?",
                        options: [
                            "Gym access",
                            "Changing facilities",
                            "Free lockers",
                            "Swimming pool access"
                        ],
                        answer: 3
                    },
                    {
                        id: 4,
                        type: "mcq",
                        question: "What time does the centre open on weekdays?",
                        options: [
                            "6:00 am",
                            "6:30 am",
                            "7:00 am",
                            "8:00 am"
                        ],
                        answer: 1
                    },
                    {
                        id: 5,
                        type: "mcq",
                        question: "What is the usual joining fee?",
                        options: [
                            "£10",
                            "£15",
                            "£20",
                            "£25"
                        ],
                        answer: 2
                    },
                    {
                        id: 6,
                        type: "mcq",
                        question: "How can new members avoid paying the joining fee?",
                        options: [
                            "Choose the standard membership",
                            "Register before 25 October",
                            "Pay for six months in advance",
                            "Register at the reception desk"
                        ],
                        answer: 1
                    },
                    {
                        id: 7,
                        type: "mcq",
                        question: "How much does it cost to rent a towel?",
                        options: [
                            "£1 per visit",
                            "£2 per visit",
                            "£2 per week",
                            "£5 per month"
                        ],
                        answer: 1
                    },
                    {
                        id: 8,
                        type: "mcq",
                        question: "What must members bring to use the lockers?",
                        options: [
                            "A membership form",
                            "A towel",
                            "A padlock",
                            "A locker key"
                        ],
                        answer: 2
                    },
                    {
                        id: 9,
                        type: "mcq",
                        question: "Where is the sports centre located?",
                        options: [
                            "Behind the public library",
                            "Opposite the public library",
                            "Next to the bus station",
                            "Near the main hospital"
                        ],
                        answer: 1
                    },
                    {
                        id: 10,
                        type: "mcq",
                        question: "What must the customer do after completing the online application?",
                        options: [
                            "Pay an additional registration fee",
                            "Attend a swimming assessment",
                            "Visit the centre to collect the card and complete an induction",
                            "Send proof of employment by email"
                        ],
                        answer: 2
                    }
                ]
            },
            {
                id: "full-s1-03",
                title: "Hotel Reservation",
                audio: "audio/listening/full/section-1/full-s1-03.mp3",
                questions: [
                    {
                        id: 1,
                        type: "mcq",
                        question: "On which date will the customer arrive at the hotel?",
                        options: [
                            "10 November",
                            "12 November",
                            "13 November",
                            "15 November"
                        ],
                        answer: 1
                    },
                    {
                        id: 2,
                        type: "mcq",
                        question: "How long will the customer stay at the hotel?",
                        options: [
                            "Two nights",
                            "Three nights",
                            "Four nights",
                            "Five nights"
                        ],
                        answer: 1
                    },
                    {
                        id: 3,
                        type: "mcq",
                        question: "What type of room does the customer need?",
                        options: [
                            "A single room",
                            "A double room with one bed",
                            "A twin room with separate beds",
                            "A family room"
                        ],
                        answer: 2
                    },
                    {
                        id: 4,
                        type: "mcq",
                        question: "What is the price of the room per night?",
                        options: [
                            "£65",
                            "£75",
                            "£80",
                            "£85"
                        ],
                        answer: 3
                    },
                    {
                        id: 5,
                        type: "mcq",
                        question: "Which two facilities are free for hotel guests?",
                        options: [
                            "Breakfast and bus tickets",
                            "Parking and Wi-Fi",
                            "Laundry and parking",
                            "Wi-Fi and airport transfers"
                        ],
                        answer: 1
                    },
                    {
                        id: 6,
                        type: "mcq",
                        question: "What time does check-in begin?",
                        options: [
                            "11:00 am",
                            "12:00 pm",
                            "2:00 pm",
                            "2:30 pm"
                        ],
                        answer: 3
                    },
                    {
                        id: 7,
                        type: "mcq",
                        question: "How long does it take to walk from the train station to the hotel?",
                        options: [
                            "Five minutes",
                            "Ten minutes",
                            "Fifteen minutes",
                            "Twenty minutes"
                        ],
                        answer: 2
                    },
                    {
                        id: 8,
                        type: "mcq",
                        question: "How much is the booking deposit?",
                        options: [
                            "£20",
                            "£25",
                            "£30",
                            "£35"
                        ],
                        answer: 2
                    },
                    {
                        id: 9,
                        type: "mcq",
                        question: "When can the customer cancel without paying a cancellation charge?",
                        options: [
                            "Up to 24 hours before arrival",
                            "Up to 48 hours before arrival",
                            "Up to 72 hours before arrival",
                            "At any time before check-in"
                        ],
                        answer: 1
                    },
                    {
                        id: 10,
                        type: "mcq",
                        question: "What is the customer's full name?",
                        options: [
                            "Sarah Mitchell",
                            "Sarah Miller",
                            "Susan Mitchell",
                            "Susan Miller"
                        ],
                        answer: 0
                    }
                ]
            }
        ],



        section2: [
            {
                id: "full-s2-01",
                title: "Riverside Community Centre",
                audio: "audio/listening/full/section-2/full-s2-01.mp3",
                questions: [
                    {
                        id: 1,
                        type: "mcq",
                        question: "What time does the community centre open on weekdays?",
                        options: ["7:30 am", "8:30 am", "9:00 am", "10:00 am"],
                        answer: 1
                    },
                    {
                        id: 2,
                        type: "mcq",
                        question: "How much is the annual membership fee for adults?",
                        options: ["£15", "£20", "£25", "£30"],
                        answer: 3
                    },
                    {
                        id: 3,
                        type: "mcq",
                        question: "When does the yoga class take place?",
                        options: ["Monday evening", "Tuesday morning", "Wednesday afternoon", "Friday evening"],
                        answer: 0
                    },
                    {
                        id: 4,
                        type: "mcq",
                        question: "What is provided for the Wednesday art workshop?",
                        options: ["Free refreshments", "A notebook", "Art materials", "A certificate"],
                        answer: 2
                    },
                    {
                        id: 5,
                        type: "mcq",
                        question: "Where is the Saturday cooking club held?",
                        options: ["Studio One", "The first-floor kitchen", "The café", "The ground-floor kitchen"],
                        answer: 3
                    },
                    {
                        id: 6,
                        type: "mcq",
                        question: "How far in advance should participants book activities?",
                        options: ["One day", "At least two days", "Three days", "One week"],
                        answer: 1
                    },
                    {
                        id: 7,
                        type: "mcq",
                        question: "How many desks are available in the library and study room?",
                        options: ["8", "10", "12", "15"],
                        answer: 2
                    },
                    {
                        id: 8,
                        type: "mcq",
                        question: "What discount do members receive at the café?",
                        options: ["5%", "10%", "15%", "20%"],
                        answer: 1
                    },
                    {
                        id: 9,
                        type: "mcq",
                        question: "When will the family fun day take place?",
                        options: ["15 November", "18 November", "20 November", "22 November"],
                        answer: 3
                    },
                    {
                        id: 10,
                        type: "mcq",
                        question: "How long does the centre take to respond to emails?",
                        options: ["Within 24 hours", "Within two working days", "Within five working days", "Within one week"],
                        answer: 1
                    }
                ]
            },
            {
                id: "full-s2-02",
                title: "Greenfield Botanical Gardens",
                audio: "audio/listening/full/section-2/full-s2-02.mp3",
                questions: [
                    {
                        id: 11,
                        type: "mcq",
                        question: "What days are the botanical gardens open?",
                        options: [
                            "Monday to Friday",
                            "Tuesday to Sunday",
                            "Every day of the week",
                            "Wednesday to Sunday"
                        ],
                        answer: 1
                    },
                    {
                        id: 12,
                        type: "mcq",
                        question: "How much does an adult ticket cost?",
                        options: ["£8", "£10", "£12", "£15"],
                        answer: 2
                    },
                    {
                        id: 13,
                        type: "mcq",
                        question: "Where is the Japanese garden located?",
                        options: [
                            "Beside the main entrance",
                            "To the left of the fountain",
                            "Beside the café",
                            "Behind the visitor centre"
                        ],
                        answer: 3
                    },
                    {
                        id: 14,
                        type: "mcq",
                        question: "What must visitors bring to the photography workshop?",
                        options: [
                            "A notebook",
                            "Their own camera",
                            "Gardening tools",
                            "A printed ticket"
                        ],
                        answer: 1
                    },
                    {
                        id: 15,
                        type: "matching",
                        question: "Match each garden area with the correct description.",
                        options: [
                            "Contains tropical plants",
                            "Located beside the central fountain",
                            "Contains medicinal herbs"
                        ],
                        items: [
                            {
                                id: "15a",
                                text: "Glasshouse",
                                answer: 0
                            },
                            {
                                id: "15b",
                                text: "Rose garden",
                                answer: 1
                            },
                            {
                                id: "15c",
                                text: "Medicinal herb collection",
                                answer: 2
                            }
                        ]
                    },


                    {
                        id: 18,
                        type: "form",
                        question: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
                        prompt: "Garden Visitor Information",
                        fields: [
                            {
                                id: "18a",
                                label: "Café closing time:",
                                answer: "5:30 pm"
                            }
                        ]
                    },
                    {
                        id: 19,
                        type: "form",
                        question: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
                        prompt: "Garden Visitor Information",
                        fields: [
                            {
                                id: "19a",
                                label: "Discount for garden members:",
                                answer: "10%"
                            }
                        ]
                    },
                    {
                        id: 20,
                        type: "form",
                        question: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
                        prompt: "Annual Flower Exhibition",
                        fields: [
                            {
                                id: "20a",
                                label: "Date of exhibition:",
                                answer: "24 October"
                            }
                        ]
                    }
                ]
            },
            {
                id: "full-s2-03",
                title: "City Transport Information",
                audio: "audio/listening/full/section-2/full-s2-03.mp3",
                questions: [

                    {
                        id: 22,
                        type: "mcq",
                        question: "At what time does the first weekday bus leave the central station?",
                        options: [
                            "5:45 am",
                            "6:00 am",
                            "6:15 am",
                            "6:30 am"
                        ],
                        answer: 2
                    },
                    {
                        id: 23,
                        type: "mcq",
                        question: "Where can passengers buy travel passes in person?",
                        options: [
                            "At the bus driver's seat only",
                            "Inside the public library",
                            "At the transport information office",
                            "At the railway platform"
                        ],
                        answer: 2
                    },
                    {
                        id: 24,
                        type: "matching",
                        question: "Match each transport service with its operating hours.",
                        options: [
                            "Until midnight",
                            "Until 10:30 pm",
                            "Until 8:00 pm"
                        ],
                        items: [
                            {
                                id: "24a",
                                text: "City buses",
                                answer: 1
                            },
                            {
                                id: "24b",
                                text: "Tram service",
                                answer: 0
                            },
                            {
                                id: "24c",
                                text: "Information office",
                                answer: 2
                            }
                        ]
                    },
                    {
                        id: 25,
                        type: "mcq",
                        question: "What should passengers do if their travel pass is lost or stolen?",
                        options: [
                            "Buy a replacement immediately",
                            "Report it through the transport website",
                            "Contact the bus driver",
                            "Wait until the following day"
                        ],
                        answer: 1
                    },
                    {
                        id: 26,
                        type: "form",
                        question: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
                        prompt: "Travel Pass Information",
                        fields: [
                            {
                                id: "26",
                                label: "Weekly adult pass price:",
                                answer: "24"
                            }
                        ]
                    },
                    {
                        id: 27,
                        type: "form",
                        question: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
                        prompt: "Travel Pass Information",
                        fields: [
                            {
                                id: "27",
                                label: "Discounted pass available to:",
                                answer: "students"
                            }
                        ]
                    },
                    {
                        id: 28,
                        type: "form",
                        question: "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER.",
                        prompt: "City Attractions",
                        fields: [
                            {
                                id: "28",
                                label: "Bus stop nearest to the City Museum:",
                                answer: "Market Square"
                            }
                        ]
                    },

                    {
                        id: 30,
                        type: "mcq",
                        question: "Where should passengers check for the latest service changes?",
                        options: [
                            "The transport authority's website",
                            "The city museum noticeboard",
                            "The local newspaper only",
                            "The railway ticket machine"
                        ],
                        answer: 0
                    }
                ]
            }

        ],
        section3: [
            {
                id: "full-s3-01",
                title: "University Group Project Discussion",
                audio: "audio/listening/full/section-3/full-s3-01.mp3",
                questions: [
                    {
                        id: 31,
                        type: "mcq",
                        question: "What topic does the group finally choose for its research?",
                        options: [
                            "Recycling habits among university students",
                            "Factors influencing students' transport choices",
                            "Energy consumption in university buildings",
                            "The cost of university accommodation"
                        ],
                        answer: 1
                    },
                    {
                        id: 32,
                        type: "mcq",
                        question: "Why does the group move away from studying energy consumption?",
                        options: [
                            "The topic has already been completed",
                            "The university refuses to participate",
                            "Access to the necessary records is uncertain",
                            "The research period is too short"
                        ],
                        answer: 2
                    },
                    {
                        id: 33,
                        type: "multiple",
                        question: "Which TWO methods will the group use to distribute its questionnaire?",
                        options: [
                            "The student portal",
                            "Telephone interviews",
                            "QR posters in the library and cafeteria",
                            "Letters sent to students' homes",
                            "Printed questionnaires in classrooms"
                        ],
                        answers: [0, 2]
                    },
                    {
                        id: 34,
                        type: "mcq",
                        question: "What is the group's target number of responses?",
                        options: [
                            "100",
                            "150",
                            "200",
                            "250"
                        ],
                        answer: 2
                    },
                    {
                        id: 35,
                        type: "mcq",
                        question: "What is the minimum acceptable number of responses?",
                        options: [
                            "100",
                            "125",
                            "150",
                            "200"
                        ],
                        answer: 2
                    },
                    {
                        id: 36,
                        type: "matching",
                        question: "Which chart will show the proportions of students using different transport modes?",
                        options: [
                            "Pie chart",
                            "Bar chart",
                            "Line graph",
                            "Scatter graph"
                        ],
                        items: [
                            {
                                id: 36,
                                text: "Proportions of students by transport mode",
                                answer: 0
                            }
                        ]
                    },
                    {
                        id: 37,
                        type: "matching",
                        question: "Which chart will compare transport choices across academic years?",
                        options: [
                            "Pie chart",
                            "Bar chart",
                            "Line graph",
                            "Scatter graph"
                        ],
                        items: [
                            {
                                id: 37,
                                text: "Transport choices across academic years",
                                answer: 1
                            }
                        ]
                    },
                    {
                        id: 38,
                        type: "mcq",
                        question: "How long will the group collect questionnaire responses?",
                        options: [
                            "Five days",
                            "One week",
                            "Ten days",
                            "Two weeks"
                        ],
                        answer: 2
                    },
                    {
                        id: 39,
                        type: "mcq",
                        question: "How many students will take part in the pilot test?",
                        options: [
                            "Two or three",
                            "Five or six",
                            "Ten or twelve",
                            "Fifteen or twenty"
                        ],
                        answer: 1
                    },
                    {
                        id: 40,
                        type: "mcq",
                        question: "When must the group send the final questionnaire to the Administrator?",
                        options: [
                            "By Wednesday morning",
                            "By Thursday evening",
                            "By Friday afternoon",
                            "By the end of the weekend"
                        ],
                        answer: 2
                    }
                ]
            },
            {
                id: "full-s3-02",
                title: "University Research Presentation",
                audio: "audio/listening/full/section-3/full-s3-02.mp3",
                questions: [
                    {
                        id: 41,
                        type: "mcq",
                        question: "What is the group's main research question?",
                        options: [
                            "Why students visit museums less frequently than older adults",
                            "How museums preserve historical objects",
                            "Why museum admission prices have increased",
                            "How museums attract international tourists"
                        ],
                        answer: 0
                    },
                    {
                        id: 42,
                        type: "mcq",
                        question: "What percentage of weekday visitors at the City Museum are students?",
                        options: [
                            "12%",
                            "18%",
                            "22%",
                            "30%"
                        ],
                        answer: 1
                    },
                    {
                        id: 43,
                        type: "multiple",
                        question: "Which TWO factors does the National Museum Association report suggest can influence attendance?",
                        options: [
                            "Admission prices",
                            "Museum building age",
                            "Transport costs",
                            "Weather forecasts",
                            "The number of museum employees"
                        ],
                        answers: [0, 2]
                    },
                    {
                        id: 44,
                        type: "mcq",
                        question: "How many questionnaire responses has the group received so far?",
                        options: [
                            "68",
                            "80",
                            "86",
                            "150"
                        ],
                        answer: 2
                    },
                    {
                        id: 45,
                        type: "mcq",
                        question: "By when does the group hope to reach its target of 150 responses?",
                        options: [
                            "This Monday",
                            "Next Thursday",
                            "The following Wednesday",
                            "Three weeks from now"
                        ],
                        answer: 1
                    },
                    {
                        id: 46,
                        type: "matching",
                        question: "Which chart is suggested for showing the main reasons students do not visit museums?",
                        options: [
                            "Pie chart",
                            "Bar chart",
                            "Line graph",
                            "Scatter graph"
                        ],
                        items: [
                            {
                                id: 46,
                                text: "Main reasons students avoid museum visits",
                                answer: 0
                            }
                        ]
                    },
                    {
                        id: 47,
                        type: "matching",
                        question: "Which chart will compare undergraduate and postgraduate responses?",
                        options: [
                            "Pie chart",
                            "Bar chart",
                            "Line graph",
                            "Scatter graph"
                        ],
                        items: [
                            {
                                id: 47,
                                text: "Comparison of undergraduate and postgraduate responses",
                                answer: 1
                            }
                        ]
                    },
                    {
                        id: 48,
                        type: "mcq",
                        question: "What is the planned length of the presentation?",
                        options: [
                            "Nine minutes",
                            "Twelve minutes",
                            "Fifteen minutes",
                            "Eighteen minutes"
                        ],
                        answer: 1
                    },
                    {
                        id: 49,
                        type: "mcq",
                        question: "When must the group email its revised research question and presentation outline?",
                        options: [
                            "Thursday morning",
                            "Friday at noon",
                            "Monday afternoon",
                            "The following Wednesday"
                        ],
                        answer: 1
                    },
                    {
                        id: 50,
                        type: "mcq",
                        question: "When will the Administrator return comments on the outline?",
                        options: [
                            "Friday evening",
                            "Saturday morning",
                            "Monday afternoon",
                            "Wednesday afternoon"
                        ],
                        answer: 2
                    }
                ]
            },
            {
                id: "full-s3-03",
                title: "Urban Wildlife Research Project",
                audio: "audio/listening/full/section-3/full-s3-03.mp3",
                questions: [
                    {
                        id: 51,
                        type: "mcq",
                        question: "Which three parks has the group selected for its research?",
                        options: [
                            "Central Park, Riverside Park and Hilltop Park",
                            "Central Park, Greenfield Park and East Park",
                            "Riverside Park, Hilltop Park and Forest Park",
                            "Hilltop Park, City Park and Greenfield Park"
                        ],
                        answer: 0
                    },
                    {
                        id: 52,
                        type: "mcq",
                        question: "Why did the group decide not to study five parks?",
                        options: [
                            "Some parks were closed",
                            "The project would be too difficult to manage",
                            "The university did not approve the idea",
                            "There were too few birds"
                        ],
                        answer: 1
                    },
                    {
                        id: 53,
                        type: "multiple",
                        question: "Which TWO things will the group record during its observations?",
                        options: [
                            "Bird species",
                            "Visitors' names",
                            "Weather conditions",
                            "The cost of park maintenance",
                            "The age of every bird"
                        ],
                        answers: [0, 2]
                    },
                    {
                        id: 54,
                        type: "mcq",
                        question: "When will the group conduct its observations?",
                        options: [
                            "Monday and Friday afternoons",
                            "Tuesday and Saturday mornings",
                            "Wednesday and Sunday evenings",
                            "Thursday and Saturday afternoons"
                        ],
                        answer: 1
                    },
                    {
                        id: 55,
                        type: "mcq",
                        question: "What time will the students meet at the university library?",
                        options: [
                            "6:00 am",
                            "6:30 am",
                            "7:00 am",
                            "7:30 am"
                        ],
                        answer: 1
                    },
                    {
                        id: 56,
                        type: "matching",
                        question: "Which park feature might attract water birds?",
                        options: [
                            "Feeding stations",
                            "Residential streets",
                            "A wetland area",
                            "Open lawns"
                        ],
                        items: [
                            {
                                id: 56,
                                text: "Feature that might attract water birds",
                                answer: 2
                            }
                        ]
                    },
                    {
                        id: 57,
                        type: "matching",
                        question: "Which chart will compare the total number of birds observed at each park?",
                        options: [
                            "Pie chart",
                            "Bar chart",
                            "Line graph",
                            "Scatter graph"
                        ],
                        items: [
                            {
                                id: 57,
                                text: "Comparing total bird counts",
                                answer: 1
                            }
                        ]
                    },
                    {
                        id: 58,
                        type: "mcq",
                        question: "By when must the group collect the binoculars?",
                        options: [
                            "Wednesday morning",
                            "Thursday afternoon",
                            "Friday afternoon",
                            "The following Monday"
                        ],
                        answer: 1
                    },
                    {
                        id: 59,
                        type: "mcq",
                        question: "When does the group aim to finish its first report draft?",
                        options: [
                            "By the end of week two",
                            "By the end of week three",
                            "By the end of week four",
                            "By the end of week five"
                        ],
                        answer: 2
                    },
                    {
                        id: 60,
                        type: "mcq",
                        question: "When must the group submit its observation plan and equipment list?",
                        options: [
                            "Wednesday at 3 pm",
                            "Thursday at 9 am",
                            "Friday at noon",
                            "Saturday at 7 am"
                        ],
                        answer: 0
                    }
                ]
            }
        ],
        section4: [
            {
                id: "full-s4-01",
                title: "Urban Water Management",
                audio: "audio/listening/full/section-4/full-s4-01.mp3",
                questions: [
                    {
                        id: 61,
                        type: "form",
                        question: "Complete the notes about traditional urban water supplies.",
                        prompt: "Traditional Water Systems",
                        fields: [
                            { id: "61a", label: "1. Water is traditionally collected in large ______.", answer: "reservoirs" },
                            { id: "61b", label: "2. Ageing pipes can cause significant water ______.", answer: "losses" }
                        ]
                    },
                    {
                        id: 62,
                        type: "form",
                        question: "Complete the notes about rainwater harvesting.",
                        prompt: "Rainwater Harvesting",
                        fields: [
                            { id: "62a", label: "3. Rainwater can be collected from ______.", answer: "rooftops" },
                            { id: "62b", label: "4. Storage tanks must be maintained to prevent ______.", answer: "contamination" }
                        ]
                    },
                    {
                        id: 63,
                        type: "form",
                        question: "Complete the notes about wastewater recycling.",
                        prompt: "Wastewater Recycling",
                        fields: [
                            { id: "63a", label: "5. Advanced treatment removes substances that ______ treatment may leave behind.", answer: "standard" },
                            { id: "63b", label: "6. Additional treatment processes increase ______.", answer: "costs" }
                        ]
                    },
                    {
                        id: 64,
                        type: "form",
                        question: "Complete the notes about permeable surfaces.",
                        prompt: "Permeable Surfaces",
                        fields: [
                            { id: "64a", label: "7. Rainwater passes through openings into layers of ______.", answer: "gravel" },
                            { id: "64b", label: "8. These surfaces can help replenish ______.", answer: "groundwater" }
                        ]
                    },
                    {
                        id: 65,
                        type: "form",
                        question: "Complete the notes about smart water technology.",
                        prompt: "Smart Water Management",
                        fields: [
                            { id: "65a", label: "9. Smart meters can help identify a possible ______.", answer: "leak" },
                            { id: "65b", label: "10. Engineers can investigate unexpected changes in water ______.", answer: "pressure" }
                        ]
                    }
                ]
            },
            {
                id: "full-s4-02",
                title: "Sleep and Memory",
                audio: "audio/listening/full/section-4/full-s4-02.mp3",
                questions: [
                    {
                        id: 66,
                        type: "form",
                        question: "Complete the notes about memory.",
                        prompt: "Types of Memory",
                        fields: [
                            { id: "66a", label: "1. ______ memory holds information for a brief period.", answer: "Short-term" },
                            { id: "66b", label: "2. Sleep helps ______ certain memories.", answer: "stabilise" }
                        ]
                    },
                    {
                        id: 67,
                        type: "form",
                        question: "Complete the notes about sleep stages.",
                        prompt: "Sleep Stages",
                        fields: [
                            { id: "67a", label: "3. NREM sleep produces patterns of electrical ______.", answer: "activity" },
                            { id: "67b", label: "4. REM sleep has been linked to emotional memory and ______ thinking.", answer: "creative" }
                        ]
                    },
                    {
                        id: 68,
                        type: "form",
                        question: "Complete the notes about the word-learning experiment.",
                        prompt: "Word-Learning Experiment",
                        fields: [
                            { id: "68a", label: "5. Participants who slept generally remembered more ______.", answer: "words" },
                            { id: "68b", label: "6. The timing of learning can influence how effectively information is ______.", answer: "retained" }
                        ]
                    },
                    {
                        id: 69,
                        type: "form",
                        question: "Complete the notes about effective studying.",
                        prompt: "Revision and Sleep",
                        fields: [
                            { id: "69a", label: "7. Procedural memory involves skills developed through ______.", answer: "practice" },
                            { id: "69b", label: "8. Active recall requires students to ______ information.", answer: "retrieve" }
                        ]
                    },
                    {
                        id: 70,
                        type: "form",
                        question: "Complete the lecturer's conclusions.",
                        prompt: "Conclusions",
                        fields: [
                            { id: "70a", label: "9. Frequent sleep interruptions can reduce its ______.", answer: "benefits" },
                            { id: "70b", label: "10. Regular sleep patterns and effective revision can support ______.", answer: "memory" }
                        ]
                    }
                ]
            },
            {
                id: "full-s4-03",
                title: "Renewable Energy and the Electricity Grid",
                audio: "audio/listening/full/section-4/full-s4-03.mp3",
                questions: [
                    {
                        id: 71,
                        type: "form",
                        question: "Complete the notes about renewable energy.",
                        prompt: "Energy Generation",
                        fields: [
                            { id: "71a", label: "1. Solar and wind electricity production depends on ______ conditions.", answer: "weather" },
                            { id: "71b", label: "2. Electricity providers must constantly balance supply and ______.", answer: "demand" }
                        ]
                    },
                    {
                        id: 72,
                        type: "form",
                        question: "Complete the notes about energy storage.",
                        prompt: "Battery Storage",
                        fields: [
                            { id: "72a", label: "3. Batteries store electricity when generation exceeds ______.", answer: "demand" },
                            { id: "72b", label: "4. Battery performance declines with repeated ______ and discharging.", answer: "charging" }
                        ]
                    },
                    {
                        id: 73,
                        type: "form",
                        question: "Complete the notes about hydrogen.",
                        prompt: "Hydrogen Production",
                        fields: [
                            { id: "73a", label: "5. Hydrogen can be produced through a process known as ______.", answer: "electrolysis" },
                            { id: "73b", label: "6. Energy is lost during production, storage, and ______.", answer: "conversion" }
                        ]
                    },
                    {
                        id: 74,
                        type: "form",
                        question: "Complete the notes about electricity transmission.",
                        prompt: "Transmission Networks",
                        fields: [
                            { id: "74a", label: "7. Wind farms are often located far from major ______.", answer: "cities" },
                            { id: "74b", label: "8. New power lines may face opposition because of their visual impact and effects on ______.", answer: "wildlife" }
                        ]
                    },
                    {
                        id: 75,
                        type: "form",
                        question: "Complete the notes about modern electricity systems.",
                        prompt: "Smart Grids and Sustainability",
                        fields: [
                            { id: "75a", label: "9. Smart grids use digital monitoring and ______ systems.", answer: "communication" },
                            { id: "75b", label: "10. Renewable energy requires coordinated investment in storage, transmission, and demand ______.", answer: "management" }
                        ]
                    }
                ]
            }
        ]
    }

};
