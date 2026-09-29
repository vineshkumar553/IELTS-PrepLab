const readingdata = [
    {
        id: "passage1",
        title: "The Quiet Work of Urban Trees",
        topic: "Environment & Cities",
        difficulty: "medium",
        estimatedtime: 20,

        paragraphs: [
            {
                id: "A",
                text: "In many cities, trees are still described as decoration: pleasant to look at, useful for shade, but secondary to roads and buildings. That view is becoming harder to defend. A mature tree can alter the temperature of a street, slow rainwater before it reaches drains, and make a heavily built area more comfortable to walk through. For that reason, some city plans now treat tree canopy as part of basic urban infrastructure. Yet planting a tree and creating a healthy urban tree population are not the same thing. A young tree may be celebrated at a planting ceremony and then struggle for years in a tiny patch of soil. The difficult work often begins after the tree is put in the ground."
            },
            {
                id: "B",
                text: "One reason urban planting schemes fail is that the visible part of a tree attracts far more attention than the hidden part. Roots need room to spread, exchange gases and find water, but pavement leaves little space for them in many streets. The choice of species also matters. A tree that grows well in an open field may perform poorly beside a road where the soil is compacted and the air is hotter. This does not mean that native species are automatically the best choice, nor that large trees should always be selected. The more useful question is whether a particular tree is suited to the exact conditions of the site. In other words, successful planting begins with matching a species to a place, rather than simply counting how many trees can be bought."
            },
            {
                id: "C",
                text: "The problem becomes especially complicated when streets are redesigned. Underground pipes, cables and foundations may occupy much of the available space, while car parks and building entrances compete for the surface. A tree pit can look generous from above while offering very little usable soil below. Some designers therefore plan the underground space before they finalize the pavement, leaving larger connected areas where roots can grow. This approach is less visible than choosing a striking tree for a public square, but it can make a greater difference over the next decade. A city that thinks about roots only after the concrete has been laid is often forced into expensive repairs later."
            },
            {
                id: "D",
                text: "After planting, the first years require a different kind of attention. Young trees are particularly vulnerable during their first two summers, when a short period of dry weather can undo months of growth. Watering schedules, protective supports and checks for damage may appear unremarkable, but they are often what separates a healthy tree from a replacement project. Local residents can help. In some neighborhoods, volunteers report broken branches or water newly planted trees during dry spells. Their involvement can be valuable, but it should support rather than replace a reliable maintenance system. A city cannot reasonably depend on a different group of volunteers appearing every week for the entire life of a public tree."
            },
            {
                id: "E",
                text: "Another weakness in urban tree programs is the way success is measured. Planting numbers are easy to announce: a council can say that five thousand trees were planted in a year. Survival rates, canopy growth and the condition of the soil are harder to summarize, but they reveal much more. A street with fifty young trees that are struggling may contribute less shade and cooling than a street with twenty healthy, established trees. Measuring what actually survives can therefore change the priorities of a program. Instead of competing to plant the largest number of trees in one season, planners may begin to value fewer projects that are more likely to succeed."
            },
            {
                id: "F",
                text: "The final challenge is time. Urban trees are slow infrastructure. Roads can be resurfaced within a few years, while a tree may need decades before it reaches its full size. This makes tree planning awkward for institutions that are judged on short reporting cycles. A planting scheme can look impressive in its first year and disappointing in its third if maintenance has been neglected. The opposite can also happen: a modest project may appear unimportant at first but become one of the most valuable parts of a neighborhood twenty years later. The quiet nature of that progress is precisely why urban forestry requires patience as well as enthusiasm."
            }
        ],

        headings: [
            { id: "I", text: "The challenge hidden beneath the pavement" },
            { id: "II", text: "Why early maintenance matters" },
            { id: "III", text: "Measuring success in a different way" },
            { id: "IV", text: "Thinking beyond the planting day" },
            { id: "V", text: "Matching trees to their surroundings" },
            { id: "VI", text: "The pressure of short-term planning" }
        ],

        questions: [
            {
                id: 1,
                type: "mcq",
                question: "What is the main point of the passage?",
                options: [
                    "Cities should replace roads with trees wherever possible.",
                    "Urban tree projects succeed only when the largest species are chosen.",
                    "Healthy urban trees require planning and care that continue long after planting.",
                    "Residents should be responsible for maintaining all public trees."
                ],
                answer: "C",
                explanation: "The passage repeatedly shows that planting alone is not enough; site planning, maintenance, measurement and long-term care all matter."
            },
            {
                id: 2,
                type: "mcq",
                question: "According to paragraph B, what is often given too little attention when urban trees are planted?",
                options: [
                    "The colour of the leaves",
                    "The condition of the roots and soil",
                    "The height of nearby buildings",
                    "The number of people using the street"
                ],
                answer: "B",
                explanation: "Paragraph B contrasts the attention given to the visible tree with the limited space available for roots beneath the pavement."
            },
            {
                id: 3,
                type: "mcq",
                question: "What does paragraph C suggest planners should do before finalizing new pavement?",
                options: [
                    "Choose the most unusual tree species available",
                    "Reserve enough underground space for roots",
                    "Ask residents to redesign the street",
                    "Remove all existing underground pipes"
                ],
                answer: "B",
                explanation: "The paragraph says some designers plan underground space before finalizing the pavement so roots have room to grow."
            },
            {
                id: 4,
                type: "mcq",
                question: "What does paragraph E imply about a city that focuses heavily on planting numbers?",
                options: [
                    "It may overlook whether the trees remain healthy.",
                    "It is likely to choose too many native species.",
                    "It will always spend less money on maintenance.",
                    "It will produce more shade immediately."
                ],
                answer: "A",
                explanation: "The paragraph argues that planting totals can hide poor survival and that health and survival rates are more useful measures."
            },
            {
                id: 5,
                type: "tfng",
                question: "Some city plans now consider tree canopy to be part of urban infrastructure.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "TRUE",
                explanation: "Paragraph A states this directly."
            },
            {
                id: 6,
                type: "tfng",
                question: "The passage says native tree species are always the most suitable option for city streets.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "FALSE",
                explanation: "Paragraph B specifically says native species are not automatically the best choice."
            },
            {
                id: 7,
                type: "tfng",
                question: "The passage says city councils have stopped using professional maintenance staff in neighborhoods where volunteers help.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "NOT GIVEN",
                explanation: "The passage says volunteer help should support a reliable maintenance system, but it does not discuss councils stopping professional staff."
            },
            {
                id: 8,
                type: "tfng",
                question: "A tree can experience problems several years after it is first planted.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "TRUE",
                explanation: "Paragraph F explains that trees can develop slowly and that the value or problems of a planting project may become clear years later."
            },
            {
                id: 9,
                type: "matching-headings",
                question: "Which heading best matches paragraph C?",
                paragraph: "C",
                options: [
                    "I",
                    "II",
                    "III",
                    "IV",
                    "V",
                    "VI"
                ],
                answer: "I",
                explanation: "Paragraph C focuses on underground pipes, foundations and the limited space available for roots beneath streets."
            },
            {
                id: 10,
                type: "matching-headings",
                question: "Which heading best matches paragraph D?",
                paragraph: "D",
                options: [
                    "I",
                    "II",
                    "III",
                    "IV",
                    "V",
                    "VI"
                ],
                answer: "II",
                explanation: "Paragraph D is mainly about watering, protection and other care during the first years after planting."
            },
            {
                id: 11,
                type: "matching-headings",
                question: "Which heading best matches paragraph E?",
                paragraph: "E",
                options: [
                    "I",
                    "II",
                    "III",
                    "IV",
                    "V",
                    "VI"
                ],
                answer: "III",
                explanation: "Paragraph E argues that survival and health are better measures of success than planting totals."
            },
            {
                id: 12,
                type: "sentence-completion",
                instruction: "Complete the sentence using NO MORE THAN TWO WORDS.",
                question: "Young street trees are particularly vulnerable during their first __________.",
                answer: "two summers",
                acceptedanswers: [
                    "two summers"
                ],
                explanation: "Paragraph D states that young trees are especially vulnerable during their first two summers."
            },
            {
                id: 13,
                type: "sentence-completion",
                instruction: "Complete the sentence using NO MORE THAN TWO WORDS.",
                question: "A city can plant thousands of trees but still see little improvement if the trees do not __________.",
                answer: "survive",
                acceptedanswers: [
                    "survive"
                ],
                explanation: "The passage emphasizes survival rather than planting numbers as a meaningful sign of success."
            }
        ]
    },

    {
        id: "passage2",
        title: "The People Who Keep Things Repairable",
        topic: "Technology & Society",
        difficulty: "medium",
        estimatedtime: 20,

        paragraphs: [
            {
                id: "A",
                text: "For much of the last century, repairing an everyday object was ordinary behaviour. A radio might stay in a family for years because a loose connection could be fixed, a worn part replaced or a manual consulted. Today, many products are harder to repair, not necessarily because they are more complicated, but because information, spare parts and access to the inside of the product may be limited. When a small fault leads to the replacement of an entire device, the cost is not only financial. Skills disappear when there are fewer opportunities to use them, and objects that might have remained useful become waste. This has led to renewed interest in the people and systems that keep repair possible."
            },
            {
                id: "B",
                text: "One of the most basic tools in repair is information. A technician can have excellent practical skills and still be unable to fix a device if the relevant service instructions are unavailable. Digital manuals have made some information easier to distribute, but they have not solved every problem. Websites can disappear, links can break and documents may be stored in formats that become difficult to open years later. Printed instructions have their own advantages: they can remain with the object, require no internet connection and sometimes contain diagrams that are easier to consult beside a workbench. In practice, the most useful systems make technical information available in more than one form."
            },
            {
                id: "C",
                text: "Independent repair shops also possess a kind of knowledge that cannot always be written into a manual. A skilled repairer gradually builds a memory of recurring faults: the strange noise that usually means a worn bearing, the model that often develops a loose connector, or the unusual failure that only appears after several years of use. This experience can speed up diagnosis, particularly when a product is old or when its official documentation is incomplete. Repairers therefore do more than replace parts. They interpret symptoms and make judgments about whether a repair is worth attempting at all. That practical judgment is one reason local repair businesses can remain useful even when consumers have access to large amounts of information online."
            },
            {
                id: "D",
                text: "A different kind of repair culture has grown around repair cafés and community workshops. These places are often described simply as locations where people bring broken objects, but the social side can be just as important as the repair itself. Someone who arrives with a faulty lamp may leave having learned how to test a cable. A teenager may watch an older participant open a sewing machine and discover that the mysterious object on the kitchen table is not beyond understanding. The exchange of practical knowledge becomes part of the event. In that sense, a repair café can produce a second outcome besides a working object: it can make repair seem less intimidating."
            },
            {
                id: "E",
                text: "Repair becomes easier when products are designed with future access in mind. A device that uses standard fasteners and clearly separated components may be opened with ordinary tools, while one sealed with unusual screws or permanent adhesives can discourage even experienced users. Designers who plan for disassembly do not have to make products primitive. They can still use modern materials and electronics while allowing worn parts to be removed without destroying the surrounding structure. The important shift is to think about the product not only at the moment it is sold, but also at the moment someone needs to replace a battery, clean a component or diagnose a fault."
            },
            {
                id: "F",
                text: "There is also a cultural reason to care about repair. Objects often carry stories that have nothing to do with their market value. A desk lamp may have belonged to a grandparent; a camera may be associated with family holidays; a jacket may have been altered repeatedly until it fits perfectly. Repair can preserve these connections. Not every object is worth saving, and replacement will sometimes be the sensible choice, but the decision should not be made only because repair feels unfamiliar. When people understand how objects work and have access to the information and skills needed to maintain them, they gain more control over the things they own."
            }
        ],

        headings: [
            { id: "I", text: "Why practical experience still matters" },
            { id: "II", text: "Designing products for a second life" },
            { id: "III", text: "The social value of learning to repair" },
            { id: "IV", text: "Repair depends on access to information" },
            { id: "V", text: "When replacement becomes the easiest answer" },
            { id: "VI", text: "The emotional side of keeping objects" }
        ],

        questions: [
            {
                id: 14,
                type: "mcq",
                question: "What is the main argument of the passage?",
                options: [
                    "Modern products are always more difficult to repair than older ones.",
                    "Repair depends on a combination of information, skills, design and opportunity to practise.",
                    "Community workshops are replacing professional repair businesses.",
                    "Consumers should avoid buying products that contain electronics."
                ],
                answer: "B",
                explanation: "The passage presents repair as a system involving information, practical experience, community learning and product design."
            },
            {
                id: 15,
                type: "mcq",
                question: "Why can printed manuals still be useful, according to paragraph B?",
                options: [
                    "They are always more detailed than digital manuals.",
                    "They can stay with the object and do not depend on internet access.",
                    "They are cheaper for manufacturers to produce.",
                    "They make technical problems disappear more quickly."
                ],
                answer: "B",
                explanation: "Paragraph B highlights the fact that printed instructions remain available without internet access and can stay with the product."
            },
            {
                id: 16,
                type: "mcq",
                question: "What particular advantage do experienced repairers have?",
                options: [
                    "They can always obtain spare parts at lower prices.",
                    "They remember common faults that may not be obvious from a manual.",
                    "They never need to consult technical information.",
                    "They can repair every type of product."
                ],
                answer: "B",
                explanation: "Paragraph C explains that repairers build practical memories of recurring faults and use them during diagnosis."
            },
            {
                id: 17,
                type: "mcq",
                question: "What does paragraph D suggest is one benefit of a repair café besides fixing objects?",
                options: [
                    "It teaches people that professional technicians are unnecessary.",
                    "It encourages people to feel more comfortable investigating broken objects.",
                    "It provides free replacement products.",
                    "It guarantees that every object can be repaired."
                ],
                answer: "B",
                explanation: "The paragraph says repair cafés can make repair seem less intimidating by allowing people to learn through participation."
            },
            {
                id: 18,
                type: "tfng",
                question: "The passage says all manufacturers now provide the same technical information to independent repairers.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "FALSE",
                explanation: "The passage discusses situations where information may be limited or unavailable, so the statement is contradicted."
            },
            {
                id: 19,
                type: "tfng",
                question: "Digital technical information can become difficult to access over time.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "TRUE",
                explanation: "Paragraph B mentions disappearing websites, broken links and outdated formats."
            },
            {
                id: 20,
                type: "tfng",
                question: "Repair cafés charge visitors for every hour spent repairing an object.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "NOT GIVEN",
                explanation: "The passage describes repair cafés but gives no information about an hourly charging system."
            },
            {
                id: 21,
                type: "tfng",
                question: "Product designers can make modern devices easier to repair without necessarily making them technologically simple.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "TRUE",
                explanation: "Paragraph E explicitly says modern materials and electronics can still be used while allowing easier disassembly."
            },
            {
                id: 22,
                type: "matching-headings",
                question: "Which heading best matches paragraph B?",
                paragraph: "B",
                options: [
                    "I",
                    "II",
                    "III",
                    "IV",
                    "V",
                    "VI"
                ],
                answer: "IV",
                explanation: "Paragraph B is centered on the importance of manuals, technical documents and reliable access to information."
            },
            {
                id: 23,
                type: "matching-headings",
                question: "Which heading best matches paragraph C?",
                paragraph: "C",
                options: [
                    "I",
                    "II",
                    "III",
                    "IV",
                    "V",
                    "VI"
                ],
                answer: "I",
                explanation: "Paragraph C focuses on the practical knowledge repairers gain from experience with recurring faults."
            },
            {
                id: 24,
                type: "matching-headings",
                question: "Which heading best matches paragraph E?",
                paragraph: "E",
                options: [
                    "I",
                    "II",
                    "III",
                    "IV",
                    "V",
                    "VI"
                ],
                answer: "II",
                explanation: "Paragraph E discusses designing products so that future repairs and disassembly are easier."
            },
            {
                id: 25,
                type: "sentence-completion",
                instruction: "Complete the sentence using NO MORE THAN TWO WORDS.",
                question: "A technician may struggle to repair a product when its service __________ are unavailable.",
                answer: "instructions",
                acceptedanswers: [
                    "instructions"
                ],
                explanation: "Paragraph B says a technician may be unable to fix a device when the relevant service instructions are unavailable."
            },
            {
                id: 26,
                type: "sentence-completion",
                instruction: "Complete the sentence using NO MORE THAN TWO WORDS.",
                question: "A repair café can help make the process of repairing an object seem less __________.",
                answer: "intimidating",
                acceptedanswers: [
                    "intimidating"
                ],
                explanation: "Paragraph D states that the social learning environment can make repair seem less intimidating."
            }
        ]
    },

    {
        id: "passage3",
        title: "The Psychology of Waiting Spaces",
        topic: "Behaviour & Design",
        difficulty: "hard",
        estimatedtime: 20,

        paragraphs: [
            {
                id: "A",
                text: "Waiting is one of those everyday experiences that people usually notice only when it goes badly. A ten-minute delay in a comfortable café can feel harmless, while the same ten minutes in a silent clinic corridor may seem much longer. This difference has interested designers and behavioural researchers because waiting is not simply a matter of elapsed time. The space in which people wait, the information they receive and the amount of uncertainty they feel can all change their perception of the delay. A waiting area therefore has a job beyond providing chairs. It can either make an unavoidable pause feel manageable or make a short delay feel frustratingly long."
            },
            {
                id: "B",
                text: "One of the strongest influences on perceived waiting time is uncertainty. People tend to cope better when they know what is happening, even if the final wait remains unchanged. A sign saying that a service is delayed by approximately fifteen minutes gives a person something to plan around; a silent line with no explanation leaves them guessing. Uncertainty also creates room for inaccurate comparisons. Someone who sees another person arrive later but receive attention sooner may assume that the system is unfair, even when there is a valid reason for the difference. Clear updates do not necessarily make a queue move faster, but they can make the experience easier to interpret."
            },
            {
                id: "C",
                text: "The visibility of progress matters as well. In some situations, people are more patient when they can see movement toward the end point. A numbered queue, a visible progress indicator or even a clear sequence of steps can provide this sense of movement. The system does not have to be literally faster. What changes is the person's ability to understand where they are within it. By contrast, an undefined wait can feel endless because there is no obvious sign that anything is happening. This is one reason a well-designed queue often communicates progress even when the underlying service speed has not changed."
            },
            {
                id: "D",
                text: "The physical arrangement of a waiting area can also influence behaviour. Rows of seats encourage people to face the same direction and tend to reduce conversation between strangers. Smaller clusters can make brief interaction more natural, although they may not suit everyone. Designers must therefore think about the purpose of the space. A dental clinic may benefit from quiet individual seating, while a community advice centre might prefer an arrangement that allows people to exchange information. Privacy is another issue. A comfortable chair placed too close to a stranger may be physically pleasant but socially awkward."
            },
            {
                id: "E",
                text: "Sound and light can alter the atmosphere without anyone consciously analysing them. Repeated announcements, loud conversations or harsh lighting can make a waiting period feel more tiring. Softer sound levels and varied lighting may create a calmer environment, but there is no universal formula. What helps in one setting may be distracting in another. A lively reception area can feel appropriate in a children's centre but unsuitable in a room where people are waiting for difficult medical news. Good design therefore depends on matching the sensory character of a space to the emotional demands of the people using it."
            },
            {
                id: "F",
                text: "Finally, giving people something small to do can change the experience of waiting. Reading a short notice, completing a form or checking a list of available services can make a delay feel less empty. However, activity should not become another task imposed on someone who is already tired or anxious. The most successful waiting spaces tend to offer choices rather than instructions: something to read for those who want distraction, clear information for those who want certainty and enough quiet for those who simply want to sit. In that sense, good waiting-room design is less about filling every second and more about giving people some control over the time they have."
            }
        ],

        headings: [
            { id: "I", text: "Why uncertainty can be harder than delay" },
            { id: "II", text: "Small activities that restore a sense of control" },
            { id: "III", text: "How the arrangement of seats affects social behaviour" },
            { id: "IV", text: "The importance of visible progress" },
            { id: "V", text: "A space should match the mood of its users" },
            { id: "VI", text: "Waiting is more than an amount of time" }
        ],

        questions: [
            {
                id: 27,
                type: "mcq",
                question: "What is the main idea of the passage?",
                options: [
                    "Waiting areas should always be designed to keep people entertained.",
                    "The speed of a service is the only factor that affects satisfaction.",
                    "The design and information provided in waiting spaces can change how delays are experienced.",
                    "People generally dislike sitting near strangers."
                ],
                answer: "C",
                explanation: "The passage argues that perception of waiting is shaped by uncertainty, progress, physical layout, sensory conditions and choice."
            },
            {
                id: 28,
                type: "mcq",
                question: "Why can clear delay information help people cope with waiting?",
                options: [
                    "It guarantees that the service will become faster.",
                    "It gives people a clearer idea of what to expect.",
                    "It allows people to leave the queue immediately.",
                    "It prevents other customers from arriving."
                ],
                answer: "B",
                explanation: "Paragraph B explains that clear information reduces uncertainty by giving people something to plan around."
            },
            {
                id: 29,
                type: "mcq",
                question: "What does a visible progress indicator provide?",
                options: [
                    "Proof that the service is operating perfectly",
                    "A sense that the person is moving toward the end point",
                    "A guarantee that no one will be delayed",
                    "An alternative to speaking with staff"
                ],
                answer: "B",
                explanation: "Paragraph C says visible progress helps people understand where they are within the process."
            },
            {
                id: 30,
                type: "mcq",
                question: "Why might a community advice centre use a different seating arrangement from a dental clinic?",
                options: [
                    "The two buildings normally have different lighting.",
                    "The people using them may have different social and practical needs.",
                    "Dental clinics usually have fewer chairs.",
                    "Advice centres do not need privacy."
                ],
                answer: "B",
                explanation: "Paragraph D explains that layout should reflect the purpose of the space and the behaviour it needs to support."
            },
            {
                id: 31,
                type: "tfng",
                question: "A ten-minute wait is always experienced in the same way by different people.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "FALSE",
                explanation: "Paragraph A gives examples showing that the same amount of time can feel very different in different environments."
            },
            {
                id: 32,
                type: "tfng",
                question: "Providing information about a delay can make a queue physically move faster.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "FALSE",
                explanation: "Paragraph B says clear updates do not necessarily make the queue move faster."
            },
            {
                id: 33,
                type: "tfng",
                question: "A queue must become faster before people can feel that it is making progress.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "FALSE",
                explanation: "Paragraph C explains that a sense of progress can come from visible indicators even when service speed has not changed."
            },
            {
                id: 34,
                type: "tfng",
                question: "The passage recommends the same lighting conditions for every type of waiting room.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "FALSE",
                explanation: "Paragraph E says there is no universal formula and that sensory design should match the setting."
            },
            {
                id: 35,
                type: "matching-headings",
                question: "Which heading best matches paragraph B?",
                paragraph: "B",
                options: [
                    "I",
                    "II",
                    "III",
                    "IV",
                    "V",
                    "VI"
                ],
                answer: "I",
                explanation: "Paragraph B focuses on how uncertainty makes waiting harder and how information can reduce that problem."
            },
            {
                id: 36,
                type: "matching-headings",
                question: "Which heading best matches paragraph D?",
                paragraph: "D",
                options: [
                    "I",
                    "II",
                    "III",
                    "IV",
                    "V",
                    "VI"
                ],
                answer: "III",
                explanation: "Paragraph D examines seating arrangements, conversation and privacy."
            },
            {
                id: 37,
                type: "matching-headings",
                question: "Which heading best matches paragraph F?",
                paragraph: "F",
                options: [
                    "I",
                    "II",
                    "III",
                    "IV",
                    "V",
                    "VI"
                ],
                answer: "II",
                explanation: "Paragraph F explains how giving people optional activities can make waiting feel less empty while preserving a sense of choice."
            },
            {
                id: 38,
                type: "sentence-completion",
                instruction: "Complete the sentence using NO MORE THAN TWO WORDS.",
                question: "A silent queue can feel especially frustrating when people are left in a state of __________.",
                answer: "uncertainty",
                acceptedanswers: [
                    "uncertainty"
                ],
                explanation: "Paragraph B identifies uncertainty as one of the strongest influences on how waiting is perceived."
            },
            {
                id: 39,
                type: "sentence-completion",
                instruction: "Complete the sentence using NO MORE THAN TWO WORDS.",
                question: "A numbered queue or visible indicator can create a sense of __________ toward the final stage.",
                answer: "progress",
                acceptedanswers: [
                    "progress"
                ],
                explanation: "Paragraph C explains that visible indicators give people a sense of progress toward the end point."
            },
            {
                id: 40,
                type: "sentence-completion",
                instruction: "Complete the sentence using NO MORE THAN TWO WORDS.",
                question: "The most successful waiting spaces offer people a degree of __________ over how they spend their waiting time.",
                answer: "control",
                acceptedanswers: [
                    "control"
                ],
                explanation: "Paragraph F concludes that good waiting-room design gives people some control over the time they have."
            }
        ]
    }
];