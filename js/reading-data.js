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
    },
    {
        id: "passage4",
        title: "The New Life of Old Railway Stations",
        topic: "History & Cities",
        difficulty: "medium",
        estimatedtime: 20,

        paragraphs: [
            {
                id: "A",
                text: "Railway stations were once designed mainly as places of movement. Passengers arrived, bought tickets and left as quickly as possible. In many cities, however, older stations have gradually acquired a second life. As rail routes changed and passenger numbers shifted, some buildings became too large for their original purpose. Instead of demolishing them, city authorities and private organisations have experimented with new uses. Former waiting halls have become libraries, restaurants, studios and exhibition spaces. The buildings survive not because their original function remains unchanged, but because people have found new reasons to use them."
            },
            {
                id: "B",
                text: "Reusing a station is not as simple as placing new furniture inside an old building. Many historic stations contain large open halls, high ceilings and complicated circulation routes. These features can make some modern uses attractive but can also create practical difficulties. A library, for example, may benefit from the open floor area while needing quieter rooms for study. Designers therefore have to balance the character of the original structure with the requirements of its new users. In successful projects, the building's past remains visible rather than being completely covered by the new design."
            },
            {
                id: "C",
                text: "One of the strongest arguments for reuse is that transport buildings are often located in places that are already connected to the rest of the city. A station that has lost its railway function may still stand beside major roads, bus routes or busy pedestrian areas. This can make it easier for a new public facility to attract visitors. Reuse can also reduce the environmental cost of replacing a large existing structure with a completely new building. The advantage is not automatic, however. An empty station can remain unused if its new purpose does not match the needs of the surrounding neighbourhood."
            },
            {
                id: "D",
                text: "Community involvement can influence whether a reused station becomes genuinely useful. Residents often know how a building has been used in the past and what services are missing in the area now. In one neighbourhood, a former station might be most useful as a cultural venue; in another, affordable workspaces may be more valuable. Public meetings and local surveys can help reveal these differences. Consultation does not guarantee agreement, and large projects still involve difficult financial decisions, but it can prevent planners from assuming that every empty station needs the same solution."
            },
            {
                id: "E",
                text: "There is also a question of memory. Railway stations are often connected with personal experiences: journeys to school, visits to relatives, departures for university or the arrival of someone returning home. When a station is converted into another kind of public space, some people worry that its history will disappear. For this reason, successful projects often preserve signs, platforms, ticket windows or other visible features. These details may have little practical value, but they allow visitors to understand that the building once served a different purpose."
            },
            {
                id: "F",
                text: "The future of reused railway stations will depend partly on whether cities can treat them as flexible public assets rather than frozen historical objects. A building may need to change again as neighbourhood needs change. A former station that becomes a market today could become an educational centre years later. The aim is not to preserve every part exactly as it was, nor to erase its history in the name of convenience. The most successful approach may be to keep enough of the old structure and identity while allowing the building to remain useful."
            }
        ],

        headings: [
            { id: "I", text: "Keeping memories visible" },
            { id: "II", text: "A building can continue to change" },
            { id: "III", text: "Why location still matters" },
            { id: "IV", text: "Finding a balance between old and new" },
            { id: "V", text: "Different communities need different uses" },
            { id: "VI", text: "From transport space to public space" }
        ],

        questions: [
            {
                id: 41,
                type: "mcq",
                question: "What is the main idea of the passage?",
                options: [
                    "Old railway stations should always remain transport buildings.",
                    "Historic stations can remain useful when cities adapt them to new purposes.",
                    "Modern railway stations are cheaper to build than older ones.",
                    "Communities usually oppose changes to historic buildings."
                ],
                answer: "B",
                explanation: "The passage explains how old stations can gain new functions while retaining parts of their history and identity."
            },
            {
                id: 42,
                type: "mcq",
                question: "Why can the design of an old station create difficulties for a new user?",
                options: [
                    "Historic buildings are always too small.",
                    "Their original layout may not fit modern needs perfectly.",
                    "They are usually located outside cities.",
                    "Their original materials cannot be repaired."
                ],
                answer: "B",
                explanation: "Paragraph B explains that large halls and complex layouts can be useful but may also create practical challenges."
            },
            {
                id: 43,
                type: "mcq",
                question: "What advantage can a former station's location provide?",
                options: [
                    "It guarantees that the building will be profitable.",
                    "It can make the new facility easier for people to reach.",
                    "It prevents residents from using private cars.",
                    "It removes the need for community consultation."
                ],
                answer: "B",
                explanation: "Former stations are often still connected to roads, buses and pedestrian routes."
            },
            {
                id: 44,
                type: "mcq",
                question: "What does paragraph D suggest about community consultation?",
                options: [
                    "It removes all financial difficulties.",
                    "It can help planners understand local needs.",
                    "It should replace professional design work.",
                    "It guarantees that residents will agree."
                ],
                answer: "B",
                explanation: "Consultation can reveal differences between neighbourhood needs, although it cannot eliminate disagreement."
            },
            {
                id: 45,
                type: "tfng",
                question: "All old railway stations are now being converted into libraries.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "FALSE",
                explanation: "The passage lists many possible uses, including libraries, restaurants, studios and exhibition spaces."
            },
            {
                id: 46,
                type: "tfng",
                question: "Some reused stations retain visible features from their railway past.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "TRUE",
                explanation: "Paragraph E mentions signs, platforms and ticket windows being preserved."
            },
            {
                id: 47,
                type: "tfng",
                question: "Community surveys always produce complete agreement about the future of a station.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "FALSE",
                explanation: "The passage says consultation does not guarantee agreement."
            },
            {
                id: 48,
                type: "tfng",
                question: "A reused station may need another new purpose in the future.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "TRUE",
                explanation: "Paragraph F says a building may need to change again as neighbourhood needs change."
            },
            {
                id: 49,
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
                explanation: "Paragraph B focuses on balancing historic character with the requirements of new users."
            },
            {
                id: 50,
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
                answer: "V",
                explanation: "Paragraph D explains that different neighbourhoods may need different uses."
            },
            {
                id: 51,
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
                answer: "I",
                explanation: "Paragraph E focuses on preserving visible reminders of the building's past."
            },
            {
                id: 52,
                type: "sentence-completion",
                instruction: "Complete the sentence using NO MORE THAN TWO WORDS.",
                question: "Former stations can attract visitors because they may already be connected to major roads, bus routes and busy __________ areas.",
                answer: "pedestrian",
                acceptedanswers: [
                    "pedestrian"
                ],
                explanation: "Paragraph C mentions busy pedestrian areas as part of the existing connections."
            },
            {
                id: 53,
                type: "sentence-completion",
                instruction: "Complete the sentence using NO MORE THAN TWO WORDS.",
                question: "Some people worry that converting a station could make its __________ disappear.",
                answer: "history",
                acceptedanswers: [
                    "history"
                ],
                explanation: "Paragraph E discusses concerns that the station's history may disappear."
            },
            {
                id: 54,
                type: "sentence-completion",
                instruction: "Complete the sentence using NO MORE THAN TWO WORDS.",
                question: "The writer suggests that reused stations should remain useful rather than becoming __________ historical objects.",
                answer: "frozen",
                acceptedanswers: [
                    "frozen"
                ],
                explanation: "Paragraph F contrasts flexible public assets with frozen historical objects."
            }
        ]
    },

    {
        id: "passage5",
        title: "Why We Notice Certain Sounds",
        topic: "Psychology & Science",
        difficulty: "hard",
        estimatedtime: 20,

        paragraphs: [
            {
                id: "A",
                text: "A busy street can contain hundreds of sounds at once, yet people rarely notice all of them equally. A conversation nearby may suddenly attract attention while a distant engine becomes part of the background. Researchers studying attention have found that hearing is not simply a matter of receiving every sound with equal importance. The brain constantly selects information that may be relevant to the current situation. This selection helps people function in noisy environments, but it also means that the same sound can seem either highly noticeable or almost invisible depending on what a person is doing."
            },
            {
                id: "B",
                text: "One important factor is expectation. When people are waiting for a particular signal, they become more sensitive to sounds that match what they are looking for. A train passenger listening for an announcement may notice a speaker turning on before noticing nearby conversations. The expected sound effectively receives a larger share of attention. However, expectation is not always helpful. People can become so focused on one type of signal that they fail to notice an unexpected but important change elsewhere. Attention therefore involves both selection and risk."
            },
            {
                id: "C",
                text: "Emotional meaning also changes how sounds are experienced. A familiar voice can be recognised quickly even in a crowded room because the listener has learned its pattern over time. In contrast, an unfamiliar alarm may attract attention precisely because it has not yet been linked to a predictable source. Emotional associations can strengthen this effect. A sound connected with a pleasant memory may feel comforting, while one associated with a stressful experience can produce tension before the listener has identified its exact cause. The reaction is not necessarily conscious."
            },
            {
                id: "D",
                text: "Background noise provides another challenge. Some environments contain constant low-level sound that people gradually learn to ignore. This process is useful because it prevents attention from being exhausted by information that does not change. Yet the same adaptation can create problems when the background signal contains something meaningful. A person working beside an air-conditioning system may stop noticing its steady hum but become distracted if the machine changes pitch. A small difference stands out because the listener has already learned the normal pattern."
            },
            {
                id: "E",
                text: "The design of public spaces can take advantage of these principles. Transport systems often use repeated tones or carefully chosen announcements to attract attention at the right moment. Museums may deliberately reduce background noise around a particular exhibit. Workplaces sometimes use sound zones so that conversation is separated from areas requiring concentration. These choices are not simply about making places quieter. In many cases, the aim is to make important sounds easier to distinguish without eliminating every other source of information."
            },
            {
                id: "F",
                text: "There is no single ideal amount of sound for every task. Complete silence can help with some forms of concentration, but it can also make small interruptions more noticeable. Moderate background sound may help some people maintain focus because it masks unpredictable noises. Individual differences matter as well. Someone who is accustomed to working in a busy office may find a quiet room uncomfortable, while another person may regard the same room as ideal. Effective sound design therefore depends on context rather than a universal rule."
            }
        ],

        headings: [
            { id: "I", text: "People do not react equally to all noise" },
            { id: "II", text: "The danger of focusing too narrowly" },
            { id: "III", text: "Familiar and unfamiliar sounds" },
            { id: "IV", text: "Why changes in regular noise attract attention" },
            { id: "V", text: "Using sound deliberately in shared spaces" },
            { id: "VI", text: "Different people need different sound environments" }
        ],

        questions: [
            {
                id: 55,
                type: "mcq",
                question: "What is the main point of the passage?",
                options: [
                    "People should avoid noisy public places.",
                    "The brain constantly treats sounds as equally important.",
                    "Attention influences which sounds people notice and how they respond to them.",
                    "Modern buildings are usually too quiet."
                ],
                answer: "C",
                explanation: "The passage explains how expectation, emotion, background noise and context influence auditory attention."
            },
            {
                id: 56,
                type: "mcq",
                question: "Why might a passenger notice an announcement system more than nearby conversations?",
                options: [
                    "The announcement is always louder.",
                    "The passenger expects useful information from it.",
                    "Conversations are impossible to understand.",
                    "The passenger has trained as a station employee."
                ],
                answer: "B",
                explanation: "Expectation makes people more sensitive to sounds relevant to what they are waiting for."
            },
            {
                id: 57,
                type: "mcq",
                question: "What can happen when people concentrate too heavily on one expected signal?",
                options: [
                    "They may miss an unexpected change.",
                    "They automatically hear every background noise.",
                    "They become unable to recognise familiar voices.",
                    "They stop reacting emotionally to sounds."
                ],
                answer: "A",
                explanation: "Paragraph B explains that narrow attention can cause people to miss unexpected but important changes."
            },
            {
                id: 58,
                type: "mcq",
                question: "Why can a change in a familiar background noise be noticeable?",
                options: [
                    "The listener has learned what the normal pattern sounds like.",
                    "The new sound is always louder than the old one.",
                    "Background noises are normally impossible to ignore.",
                    "The listener is expecting an alarm."
                ],
                answer: "A",
                explanation: "Paragraph D says that once people learn a normal sound pattern, changes to it can stand out."
            },
            {
                id: 59,
                type: "tfng",
                question: "People hear every sound around them with exactly the same level of attention.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "FALSE",
                explanation: "Paragraph A says people rarely notice all sounds equally."
            },
            {
                id: 60,
                type: "tfng",
                question: "Emotional reactions to sounds are always fully conscious.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "FALSE",
                explanation: "Paragraph C says the reaction is not necessarily conscious."
            },
            {
                id: 61,
                type: "tfng",
                question: "Museums sometimes reduce background noise around particular exhibits.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "TRUE",
                explanation: "Paragraph E gives this as an example of deliberate sound design."
            },
            {
                id: 62,
                type: "tfng",
                question: "The passage identifies complete silence as the best environment for everyone.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "FALSE",
                explanation: "Paragraph F says different people and tasks may require different sound environments."
            },
            {
                id: 63,
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
                answer: "II",
                explanation: "Paragraph B focuses on the risk of becoming so focused on one expected signal that another important sound is missed."
            },
            {
                id: 64,
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
                answer: "IV",
                explanation: "Paragraph D explains why changes to a familiar background pattern attract attention."
            },
            {
                id: 65,
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
                answer: "V",
                explanation: "Paragraph E discusses how public spaces deliberately use sound to guide attention."
            },
            {
                id: 66,
                type: "sentence-completion",
                instruction: "Complete the sentence using NO MORE THAN TWO WORDS.",
                question: "People waiting for a train may pay particular attention to an expected __________.",
                answer: "announcement",
                acceptedanswers: [
                    "announcement"
                ],
                explanation: "Paragraph B uses a train announcement as an example of an expected signal."
            },
            {
                id: 67,
                type: "sentence-completion",
                instruction: "Complete the sentence using NO MORE THAN TWO WORDS.",
                question: "People gradually learn to ignore some constant __________ noise.",
                answer: "background",
                acceptedanswers: [
                    "background"
                ],
                explanation: "Paragraph D describes constant low-level background sound becoming less noticeable."
            },
            {
                id: 68,
                type: "sentence-completion",
                instruction: "Complete the sentence using NO MORE THAN TWO WORDS.",
                question: "Effective sound design does not always try to make a place completely __________.",
                answer: "quiet",
                acceptedanswers: [
                    "quiet"
                ],
                explanation: "Paragraph E explains that the aim can be to make important sounds clearer rather than remove all sound."
            }
        ]
    },

    {
        id: "passage6",
        title: "Growing Food Above the Street",
        topic: "Environment & Food",
        difficulty: "medium",
        estimatedtime: 20,

        paragraphs: [
            {
                id: "A",
                text: "Rooftop gardens have moved from being a novelty to becoming a practical experiment in some cities. Flat roofs that once held only air-conditioning equipment can now support vegetables, herbs and even small fruit trees. The appeal is obvious: food is grown close to consumers, unused space gains a purpose and plants can make hard urban surfaces less severe. Yet rooftop farming is not simply ordinary agriculture moved several floors higher. Weight, water access, wind exposure and maintenance all create different conditions. The success of a rooftop garden depends on whether these constraints are understood before planting begins."
            },
            {
                id: "B",
                text: "The first challenge is structural. Soil and water are heavy, and a roof designed to support people and equipment may not automatically be suitable for a deep growing bed. For this reason, some rooftop projects use lightweight growing media made partly from materials that hold water without adding as much weight as traditional soil. Structural engineers may also inspect the building before the garden is installed. These precautions are less visible than the plants themselves, but they determine whether the project is safe enough to operate over several years."
            },
            {
                id: "C",
                text: "Water presents another problem. Rooftops can become extremely hot, particularly during clear summer days, so plants may lose moisture quickly. Carrying large quantities of water upstairs is expensive and inefficient. Some gardens collect rainwater, while others use drip systems that deliver small amounts directly to plant roots. These systems can reduce waste, but they require monitoring. A garden that depends on automated irrigation is not automatically low-maintenance; blocked pipes or a broken pump can cause serious damage if no one notices the problem quickly."
            },
            {
                id: "D",
                text: "Wind changes the growing environment as well. Tall buildings can create strong air movement, especially around corners and between neighbouring structures. Young plants may be damaged before they have established strong stems, while loose containers can become dangerous objects during storms. Gardeners therefore use sheltered areas, wind-resistant structures and careful positioning. Some crops perform poorly on exposed roofs even when temperature and water conditions are suitable. Choosing what not to grow can therefore be as important as selecting productive crops."
            },
            {
                id: "E",
                text: "The social benefits of rooftop gardens can extend beyond food production. Schools may use them as outdoor classrooms, office buildings can create shared spaces for employees and community projects can provide residents with opportunities to learn practical skills. A rooftop garden can also make people more aware of where food comes from. However, access matters. A garden that is technically communal but difficult to reach may be used by very few people. The best projects consider who can enter the space, how often they can visit and what activities the garden is intended to support."
            },
            {
                id: "F",
                text: "Rooftop farming is unlikely to replace conventional agriculture, and that is not necessarily its purpose. The greatest value may come from combining modest food production with environmental and social benefits. A small roof cannot supply a city's entire vegetable demand, but it can provide herbs to a nearby kitchen, habitat for insects, a cooler surface and a place for people to learn. Seen this way, the success of rooftop agriculture should not be measured only in kilograms of food. Its wider contribution may be the reason cities continue experimenting with it."
            }
        ],

        headings: [
            { id: "I", text: "The structure must come first" },
            { id: "II", text: "Water requires constant attention" },
            { id: "III", text: "Why some crops should be avoided" },
            { id: "IV", text: "A garden can have several purposes" },
            { id: "V", text: "Rooftop farming has wider limits" },
            { id: "VI", text: "Making shared spaces genuinely accessible" }
        ],

        questions: [
            {
                id: 69,
                type: "mcq",
                question: "What is the main point of the passage?",
                options: [
                    "Rooftop farming can replace most conventional agriculture.",
                    "Rooftop gardens are simple to create if a roof is flat.",
                    "Rooftop food production can work when structural, environmental and social limits are considered.",
                    "Cities should convert every unused roof into a vegetable garden."
                ],
                answer: "C",
                explanation: "The passage presents rooftop farming as useful but dependent on careful planning and realistic expectations."
            },
            {
                id: 70,
                type: "mcq",
                question: "Why might rooftop projects use lightweight growing media?",
                options: [
                    "It always produces larger vegetables.",
                    "It reduces the weight placed on the building.",
                    "It eliminates the need for irrigation.",
                    "It protects plants from sunlight."
                ],
                answer: "B",
                explanation: "Paragraph B explains that lightweight materials can hold water without adding as much weight as traditional soil."
            },
            {
                id: 71,
                type: "mcq",
                question: "Why are irrigation systems not necessarily low-maintenance?",
                options: [
                    "They cannot be used on rooftops.",
                    "They require warm weather throughout the year.",
                    "A failure may cause serious problems if nobody notices it.",
                    "They always waste more water than hand watering."
                ],
                answer: "C",
                explanation: "Paragraph C warns that blocked pipes or broken pumps can quickly damage a garden."
            },
            {
                id: 72,
                type: "mcq",
                question: "What can strong wind affect besides the plants themselves?",
                options: [
                    "The colour of the roof",
                    "The safety of loose containers",
                    "The amount of sunlight in nearby offices",
                    "The number of people living in the building"
                ],
                answer: "B",
                explanation: "Paragraph D says loose containers can become dangerous during storms."
            },
            {
                id: 73,
                type: "tfng",
                question: "Every flat roof is automatically suitable for growing vegetables.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "FALSE",
                explanation: "Paragraph A explains that roof structure and weight limits need to be considered."
            },
            {
                id: 74,
                type: "tfng",
                question: "Some rooftop gardens collect rainwater for use on plants.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "TRUE",
                explanation: "Paragraph C mentions rainwater collection as one approach."
            },
            {
                id: 75,
                type: "tfng",
                question: "The passage says schools are never suitable places for rooftop gardens.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "FALSE",
                explanation: "Paragraph E specifically gives schools as an example of a possible use."
            },
            {
                id: 76,
                type: "tfng",
                question: "The main purpose of rooftop farming should be to maximise the amount of food produced.",
                options: ["TRUE", "FALSE", "NOT GIVEN"],
                answer: "FALSE",
                explanation: "Paragraph F argues that social and environmental benefits can be as important as food production."
            },
            {
                id: 77,
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
                explanation: "Paragraph B focuses on structural safety and the weight of soil and water."
            },
            {
                id: 78,
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
                answer: "VI",
                explanation: "Paragraph E discusses whether people can actually access and use shared rooftop gardens."
            },
            {
                id: 79,
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
                answer: "V",
                explanation: "Paragraph F explains the wider limits and broader value of rooftop farming."
            },
            {
                id: 80,
                type: "sentence-completion",
                instruction: "Complete the sentence using NO MORE THAN TWO WORDS.",
                question: "Rooftops may become especially hot during clear __________ days.",
                answer: "summer",
                acceptedanswers: [
                    "summer"
                ],
                explanation: "Paragraph C states that rooftops can become extremely hot during clear summer days."
            },
            {
                id: 81,
                type: "sentence-completion",
                instruction: "Complete the sentence using NO MORE THAN TWO WORDS.",
                question: "Young plants can be damaged by strong __________ around tall buildings.",
                answer: "wind",
                acceptedanswers: [
                    "wind"
                ],
                explanation: "Paragraph D explains that tall buildings can create strong air movement."
            },
            {
                id: 82,
                type: "sentence-completion",
                instruction: "Complete the sentence using NO MORE THAN TWO WORDS.",
                question: "The value of a rooftop garden should not be measured only by the amount of __________ it produces.",
                answer: "food",
                acceptedanswers: [
                    "food"
                ],
                explanation: "Paragraph F argues that environmental and social benefits should also be considered."
            }
        ]
    },

];
