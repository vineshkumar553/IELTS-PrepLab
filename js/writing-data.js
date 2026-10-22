const writingtasks = [
    {
        id: "task1-academic",
        task: 1,
        category: "academic",
        title: "Academic Writing Task 1",
        description: "Original practice tasks using invented figures, places, layouts, and processes.",
        instructions: "Write at least 150 words. Describe the main features of the visual and include an overview.",
        wordlimit: 150,
        duration: 20,
        questions: [
            {
                id: "academic-bar-01",
                task: 1,
                category: "academic",
                type: "bar-chart",
                title: "Attendance at Public Library Activities",
                prompt: "The bar chart compares average monthly attendance at four types of activity at Brindleford Public Library in 2015 and 2025.",
                instructions: "Write at least 150 words. Select the key features, provide an overview, and make relevant comparisons using the information in the chart.",
                wordlimit: 150,
                duration: 20,
                visual: {
                    type: "bar-chart",
                    asset: null,
                    description: "A grouped bar chart with four library activities on the horizontal axis and average monthly attendances on the vertical axis. Each activity has one bar for 2015 and one for 2025. Figures count attendances, so a person attending twice is counted twice.",
                    data: {
                        layout: "grouped",
                        period: "2015 and 2025",
                        unit: "attendances per month",
                        xaxis: "Library activity",
                        yaxis: "Average monthly attendances",
                        ymin: 0,
                        ymax: 250,
                        ystep: 50,
                        legend: "Year",
                        categories: ["Book clubs", "Language classes", "Digital skills", "Children's storytelling"],
                        series: [
                            { label: "2015", values: [140, 90, 60, 180] },
                            { label: "2025", values: [170, 150, 210, 160] }
                        ]
                    }
                }
            },
            {
                id: "academic-bar-02",
                task: 1,
                category: "academic",
                type: "bar-chart",
                title: "Daily Household Water Use in Two Towns",
                prompt: "The bar chart shows average daily water use for four activities in four-person households in the towns of Elmswick and Norhaven in 2025.",
                instructions: "Write at least 150 words. Describe the main patterns, provide an overview, and compare the two towns where useful.",
                wordlimit: 150,
                duration: 20,
                visual: {
                    type: "bar-chart",
                    asset: null,
                    description: "A grouped bar chart comparing litres of water used per household per day. The sample contains 500 four-person households in each town. The four activities account for all water use measured in the study.",
                    data: {
                        layout: "grouped",
                        period: "2025",
                        unit: "litres per household per day",
                        xaxis: "Activity",
                        yaxis: "Average daily water use",
                        ymin: 0,
                        ymax: 160,
                        ystep: 20,
                        legend: "Town",
                        categories: ["Bathing", "Laundry", "Kitchen use", "Gardening"],
                        series: [
                            { label: "Elmswick", values: [140, 85, 70, 55] },
                            { label: "Norhaven", values: [125, 75, 65, 110] }
                        ]
                    }
                }
            },
            {
                id: "academic-line-01",
                task: 1,
                category: "academic",
                type: "line-graph",
                title: "Buildings with Rooftop Solar Panels",
                prompt: "The line graph shows the number of homes and small business premises with rooftop solar panels in Lydmere at the end of each year from 2018 to 2025.",
                instructions: "Write at least 150 words. Describe the trends, include an overview, and compare the two types of building.",
                wordlimit: 150,
                duration: 20,
                visual: {
                    type: "line-graph",
                    asset: null,
                    description: "Two lines show year-end totals of buildings with rooftop solar panels. Values are the total number of equipped buildings at each date, not the number of new installations during that year. Series values follow the order of the years array.",
                    data: {
                        unit: "buildings",
                        xaxis: "Year",
                        yaxis: "Buildings with rooftop solar panels",
                        ymin: 0,
                        ymax: 3500,
                        ystep: 500,
                        legend: "Building type",
                        years: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
                        series: [
                            { label: "Homes", values: [320, 450, 650, 930, 1320, 1770, 2350, 3010] },
                            { label: "Small business premises", values: [45, 70, 105, 150, 225, 320, 460, 650] }
                        ]
                    }
                }
            },
            {
                id: "academic-line-02",
                task: 1,
                category: "academic",
                type: "line-graph",
                title: "Weekly Exercise Time by Age Group",
                prompt: "The line graph compares the average amount of time adults in three age groups in Valden spent exercising each week between 2005 and 2025.",
                instructions: "Write at least 150 words. Describe the main changes, provide an overview, and compare the age groups.",
                wordlimit: 150,
                duration: 20,
                visual: {
                    type: "line-graph",
                    asset: null,
                    description: "Three lines plot average weekly minutes of exercise at five-year intervals. Figures refer to all surveyed adults in each age group, including those reporting no exercise. Series values follow the order of the years array.",
                    data: {
                        unit: "minutes per person per week",
                        xaxis: "Year",
                        yaxis: "Average weekly exercise time",
                        ymin: 0,
                        ymax: 200,
                        ystep: 25,
                        legend: "Age group",
                        years: [2005, 2010, 2015, 2020, 2025],
                        series: [
                            { label: "18-34", values: [170, 160, 145, 155, 175] },
                            { label: "35-54", values: [120, 125, 135, 150, 160] },
                            { label: "55 and over", values: [75, 85, 110, 130, 150] }
                        ]
                    }
                }
            },
            {
                id: "academic-pie-01",
                task: 1,
                category: "academic",
                type: "pie-chart",
                title: "How a Town Council Allocated Its Budget",
                prompt: "The pie charts show how Bellhaven Town Council divided its annual spending among six categories in 2010 and 2025. Total spending is also provided for each year.",
                instructions: "Write at least 150 words. Describe the main features, provide an overview, and compare the allocation of spending in the two years.",
                wordlimit: 150,
                duration: 20,
                visual: {
                    type: "pie-chart",
                    asset: null,
                    description: "Two equal-sized pie charts show percentage shares of annual council spending. Each chart has six mutually exclusive slices that total 100 percent. The total annual budget appears beneath each pie, and identical categories use identical colours across both pies.",
                    data: {
                        unit: "percent of annual spending",
                        totalunit: "million US dollars",
                        legend: "Spending category",
                        categories: ["Transport", "Education", "Parks", "Waste services", "Administration", "Other services"],
                        charts: [
                            { label: "2010", total: 40, values: [22, 30, 12, 14, 16, 6] },
                            { label: "2025", total: 60, values: [28, 26, 18, 12, 10, 6] }
                        ]
                    }
                }
            },
            {
                id: "academic-pie-02",
                task: 1,
                category: "academic",
                type: "pie-chart",
                title: "Composition of Household Waste in Two Districts",
                prompt: "The pie charts compare the composition of household waste collected in Eastmere and Westmere during 2025. The total weight collected in each district is also shown.",
                instructions: "Write at least 150 words. Summarise the main differences, include an overview, and make relevant comparisons between the districts.",
                wordlimit: 150,
                duration: 20,
                visual: {
                    type: "pie-chart",
                    asset: null,
                    description: "Two equal-sized pie charts divide collected household waste into five categories by weight. Glass and metal form one combined category. Each waste item belongs to one category, and each pie totals 100 percent. Total collected weight is displayed beneath each pie.",
                    data: {
                        period: "2025",
                        unit: "percent of collected waste by weight",
                        totalunit: "tonnes",
                        legend: "Waste category",
                        categories: ["Food", "Paper and cardboard", "Plastic", "Glass and metal", "Other waste"],
                        charts: [
                            { label: "Eastmere", total: 14000, values: [40, 25, 20, 10, 5] },
                            { label: "Westmere", total: 18000, values: [30, 20, 28, 15, 7] }
                        ]
                    }
                }
            },
            {
                id: "academic-table-01",
                task: 1,
                category: "academic",
                type: "table",
                title: "Four Commuter Ferry Routes",
                prompt: "The table compares four commuter ferry routes serving Harrowbay in 2025, including their average weekday passenger numbers, journey times, and single-ticket prices.",
                instructions: "Write at least 150 words. Identify the main features, provide an overview, and compare the routes using the figures provided.",
                wordlimit: 150,
                duration: 20,
                visual: {
                    type: "table",
                    asset: null,
                    description: "A table has four route rows and three numerical columns. Passenger numbers are average total boardings in both directions on a weekday. Journey time and ticket price refer to one one-way journey. Each row's values follow the order of the columns array.",
                    data: {
                        period: "2025",
                        rowheading: "Ferry route",
                        columns: [
                            { label: "Average weekday passenger boardings", unit: "boardings per weekday" },
                            { label: "One-way journey time", unit: "minutes" },
                            { label: "Single-ticket price", unit: "US dollars" }
                        ],
                        rows: [
                            { label: "Central Pier - Northbank", values: [2400, 18, 3.5] },
                            { label: "Central Pier - East Quay", values: [1850, 25, 4.2] },
                            { label: "Central Pier - Southport", values: [3100, 32, 5.1] },
                            { label: "Central Pier - West Island", values: [950, 45, 6.8] }
                        ]
                    }
                }
            },
            {
                id: "academic-table-02",
                task: 1,
                category: "academic",
                type: "table",
                title: "Business Websites and Online Sales",
                prompt: "The table shows the percentages of businesses in four size groups in Corven that had a website and sold goods or services online in 2015 and 2025.",
                instructions: "Write at least 150 words. Describe the main patterns and changes, include an overview, and compare businesses of different sizes.",
                wordlimit: 150,
                duration: 20,
                visual: {
                    type: "table",
                    asset: null,
                    description: "Four business-size rows are compared across four percentage columns. Each percentage uses all businesses in the relevant size group and year as its denominator. Website ownership and online selling can overlap, so columns should not be added together. Values follow the order of the columns array.",
                    data: {
                        period: "2015 and 2025",
                        rowheading: "Business size",
                        columns: [
                            { label: "Had a website in 2015", unit: "percent of businesses" },
                            { label: "Had a website in 2025", unit: "percent of businesses" },
                            { label: "Sold online in 2015", unit: "percent of businesses" },
                            { label: "Sold online in 2025", unit: "percent of businesses" }
                        ],
                        rows: [
                            { label: "Micro: 1-9 employees", values: [35, 72, 12, 38] },
                            { label: "Small: 10-49 employees", values: [65, 90, 25, 56] },
                            { label: "Medium: 50-249 employees", values: [82, 97, 40, 74] },
                            { label: "Large: 250 or more employees", values: [95, 99, 60, 88] }
                        ]
                    }
                }
            },
            {
                id: "academic-map-01",
                task: 1,
                category: "academic",
                type: "map",
                title: "Proposed Changes to Willowbank Community Park",
                prompt: "The maps show the layout of Willowbank Community Park in 2025 and the proposed layout following redevelopment in 2030.",
                instructions: "Write at least 150 words. Give an overview of the redevelopment and compare the locations and uses of the main features in the two layouts.",
                wordlimit: 150,
                duration: 20,
                visual: {
                    type: "map",
                    asset: null,
                    description: "Two maps use the same rectangular boundary, scale, and north-up orientation. Coordinates are measured east and north from the south-west corner. All listed areas have rectangular footprints, and unmarked land is grass. The entrance and the two intersecting paths are shared by both layouts.",
                    data: {
                        unit: "metres",
                        width: 200,
                        height: 160,
                        origin: "south-west corner",
                        north: "up",
                        background: "grass",
                        areashape: "rectangle",
                        coordinaterule: "For areas, x and y locate the south-west corner; width extends east and height extends north. Path points use the same coordinate system. Paths are clipped at the park boundary.",
                        entrances: [
                            { label: "Main entrance", point: [100, 0] }
                        ],
                        paths: [
                            { label: "North-south path", width: 10, points: [[100, 0], [100, 160]] },
                            { label: "East-west path", width: 10, points: [[0, 80], [200, 80]] }
                        ],
                        layouts: [
                            {
                                year: 2025,
                                status: "existing",
                                areas: [
                                    { label: "Playground", x: 15, y: 100, width: 55, height: 40 },
                                    { label: "Pond", x: 130, y: 100, width: 50, height: 35 },
                                    { label: "Tennis court", x: 15, y: 20, width: 60, height: 40 },
                                    { label: "Car park", x: 125, y: 15, width: 60, height: 40 },
                                    { label: "Cafe", x: 145, y: 60, width: 25, height: 10 }
                                ]
                            },
                            {
                                year: 2030,
                                status: "proposed",
                                areas: [
                                    { label: "Playground", x: 10, y: 95, width: 70, height: 50 },
                                    { label: "Outdoor fitness area", x: 130, y: 100, width: 50, height: 35 },
                                    { label: "Community garden", x: 15, y: 20, width: 60, height: 40 },
                                    { label: "Car park", x: 145, y: 15, width: 40, height: 35 },
                                    { label: "Cafe", x: 130, y: 55, width: 55, height: 15 },
                                    { label: "Bicycle parking", x: 115, y: 20, width: 20, height: 25 }
                                ]
                            }
                        ]
                    }
                }
            },
            {
                id: "academic-process-01",
                task: 1,
                category: "academic",
                type: "process",
                title: "Making Seedling Pots from Used Cardboard",
                prompt: "The diagram illustrates how a small workshop makes seedling pots from used cardboard and recovers water during production.",
                instructions: "Write at least 150 words. Provide an overview, describe the main stages in order, and explain the connections shown in the diagram.",
                wordlimit: 150,
                duration: 20,
                visual: {
                    type: "process",
                    asset: null,
                    description: "A production diagram has eight main stages from cardboard collection to packing finished pots. A separate recovery tank receives water from pressing and returns it to soaking. Fresh water enters soaking when needed, and non-paper waste leaves at sorting.",
                    data: {
                        layout: "Arrange the main sequence from left to right. Place the recovery tank below the main sequence, with labelled water arrows linking pressing to the tank and the tank to soaking.",
                        mainsequence: ["collection", "sorting", "shredding", "soaking", "moulding", "pressing", "drying", "packing"],
                        stages: [
                            { id: "collection", label: "Collect cardboard", details: "Used cardboard is delivered to the workshop." },
                            { id: "sorting", label: "Sort materials", details: "Workers remove plastic tape and other non-paper materials." },
                            { id: "shredding", label: "Shred cardboard", details: "A machine cuts the sorted cardboard into small pieces." },
                            { id: "soaking", label: "Soak and mix", details: "The pieces are mixed with water for two hours to form pulp." },
                            { id: "moulding", label: "Fill pot moulds", details: "Wet pulp is placed in pot-shaped mesh moulds." },
                            { id: "pressing", label: "Press the pulp", details: "A press compresses the pulp in the moulds and extracts water." },
                            { id: "drying", label: "Air-dry the pots", details: "The formed pots are removed from the moulds and dried on racks for 24 hours." },
                            { id: "packing", label: "Stack and pack", details: "Dry pots are stacked and packed for distribution." },
                            { id: "water-tank", label: "Recovery tank", details: "Extracted water is collected and returned to the soaking stage." }
                        ],
                        flows: [
                            { from: "collection", to: "sorting", kind: "material", label: "Used cardboard" },
                            { from: "sorting", to: "shredding", kind: "material", label: "Sorted cardboard" },
                            { from: "shredding", to: "soaking", kind: "material", label: "Small cardboard pieces" },
                            { from: "soaking", to: "moulding", kind: "material", label: "Wet pulp" },
                            { from: "moulding", to: "pressing", kind: "material", label: "Filled moulds" },
                            { from: "pressing", to: "drying", kind: "material", label: "Formed pots" },
                            { from: "drying", to: "packing", kind: "material", label: "Dry pots" },
                            { from: "pressing", to: "water-tank", kind: "water", label: "Extracted water" },
                            { from: "water-tank", to: "soaking", kind: "water", label: "Recovered water" }
                        ],
                        inputs: [
                            { to: "soaking", label: "Fresh water when needed" }
                        ],
                        outputs: [
                            { from: "sorting", label: "Plastic tape and other non-paper waste" },
                            { from: "packing", label: "Packed seedling pots" }
                        ]
                    }
                }
            }
        ]
    },
    {
        id: "task1-general",
        task: 1,
        category: "general",
        title: "General Training Writing Task 1",
        description: "Original letter-writing situations covering formal, semi-formal, and informal communication.",
        instructions: "Write at least 150 words. Address all three bullet points and use a tone suitable for the recipient. Postal addresses are not required.",
        wordlimit: 150,
        duration: 20,
        questions: [
            {
                id: "general-formal-01",
                task: 1,
                category: "general",
                type: "letter",
                letterstyle: "formal",
                title: "A Postponed Photography Course",
                prompt: "You paid for a weekend photography course at a training centre. The centre has postponed the course, and you cannot attend on the replacement dates. Write a letter to the course administrator.",
                instructions: "Write at least 150 words. Address all three bullet points in an appropriately formal letter. Postal addresses are not required.",
                bullets: [
                    "Give details of your booking and the course you paid for.",
                    "Explain why the replacement dates are unsuitable for you.",
                    "State what you would like the training centre to do."
                ],
                wordlimit: 150,
                duration: 20
            },
            {
                id: "general-formal-02",
                task: 1,
                category: "general",
                type: "letter",
                letterstyle: "formal",
                title: "Requesting a Hall for a Repair Event",
                prompt: "You are helping to organise a neighbourhood event where volunteers will repair small household items. You would like to hold the event in a council-owned hall. Write a letter to the council's facilities officer.",
                instructions: "Write at least 150 words. Address all three bullet points in an appropriately formal letter. Postal addresses are not required.",
                bullets: [
                    "Describe the event and who you expect to attend.",
                    "Explain which hall facilities you need and when you need them.",
                    "Ask about permission, availability, and any conditions for using the hall."
                ],
                wordlimit: 150,
                duration: 20
            },
            {
                id: "general-semi-formal-01",
                task: 1,
                category: "general",
                type: "letter",
                letterstyle: "semi-formal",
                title: "Workshop Noise During Your Exams",
                prompt: "A neighbour you know has recently begun doing noisy repair work in the evenings. You are preparing for important examinations at home. Write a letter to your neighbour.",
                instructions: "Write at least 150 words. Address all three bullet points in a polite, semi-formal letter. Postal addresses are not required.",
                bullets: [
                    "Explain your current situation and when your examinations take place.",
                    "Describe how the evening noise is affecting you.",
                    "Suggest a practical arrangement for the repair work during this period."
                ],
                wordlimit: 150,
                duration: 20
            },
            {
                id: "general-semi-formal-02",
                task: 1,
                category: "general",
                type: "letter",
                letterstyle: "semi-formal",
                title: "Adjusting Your Hours for a Training Course",
                prompt: "Your manager, whom you have worked with for several years, has encouraged you to develop your professional skills. You have found a part-time course, but attending it would require a temporary change to your working hours. Write a letter to your manager.",
                instructions: "Write at least 150 words. Address all three bullet points in a respectful, semi-formal letter. Postal addresses are not required.",
                bullets: [
                    "Describe the course and explain its relevance to your work.",
                    "Specify the temporary changes to your working hours that you are requesting.",
                    "Explain how you would continue to meet your work responsibilities."
                ],
                wordlimit: 150,
                duration: 20
            },
            {
                id: "general-informal-01",
                task: 1,
                category: "general",
                type: "letter",
                letterstyle: "informal",
                title: "Helping a Friend Move to Your Town",
                prompt: "A close friend is moving to your town to study and has asked for your advice about settling in. Write a letter to your friend.",
                instructions: "Write at least 150 words. Address all three bullet points in a friendly, informal letter. Postal addresses are not required.",
                bullets: [
                    "Recommend an area to live in and explain why it would suit your friend.",
                    "Explain how your friend could travel around the town.",
                    "Suggest when and how you could help with the move."
                ],
                wordlimit: 150,
                duration: 20
            }
        ]
    },
    {
        id: "task2-essay",
        task: 2,
        category: "essay",
        title: "Writing Task 2",
        description: "Original essay prompts covering five question types and a range of social, educational, and environmental topics.",
        instructions: "Write at least 250 words. Give reasons for your answer and support your ideas with relevant examples from your knowledge or experience.",
        wordlimit: 250,
        duration: 40,
        questions: [
            {
                id: "essay-opinion-01",
                task: 2,
                category: "essay",
                type: "opinion",
                title: "Financial Skills in Secondary Schools",
                prompt: "Secondary schools should set aside time every week to teach students how to manage personal finances. This is as important as preparing them for academic examinations. To what extent do you agree or disagree?",
                instructions: "Write at least 250 words. Give reasons for your answer and support your ideas with relevant examples from your knowledge or experience.",
                wordlimit: 250,
                duration: 40
            },
            {
                id: "essay-opinion-02",
                task: 2,
                category: "essay",
                type: "opinion",
                title: "Affordable Repairs for Electronic Devices",
                prompt: "Companies that sell electronic devices should be required to offer affordable repairs for at least five years after each device is purchased. To what extent do you agree or disagree?",
                instructions: "Write at least 250 words. Give reasons for your answer and support your ideas with relevant examples from your knowledge or experience.",
                wordlimit: 250,
                duration: 40
            },
            {
                id: "essay-opinion-03",
                task: 2,
                category: "essay",
                type: "opinion",
                title: "Walking Routes or More Parking",
                prompt: "When public space is limited, cities should give priority to shaded walking routes rather than additional car parking. To what extent do you agree or disagree?",
                instructions: "Write at least 250 words. Give reasons for your answer and support your ideas with relevant examples from your knowledge or experience.",
                wordlimit: 250,
                duration: 40
            },
            {
                id: "essay-discussion-01",
                task: 2,
                category: "essay",
                type: "discussion",
                title: "Experience and Achievement in Promotion Decisions",
                prompt: "Some people believe that promotion at work should mainly depend on how many years an employee has served a company. Others think that demonstrated skills and achievements should matter more. Discuss both views and give your own opinion.",
                instructions: "Write at least 250 words. Give reasons for your answer and support your ideas with relevant examples from your knowledge or experience.",
                wordlimit: 250,
                duration: 40
            },
            {
                id: "essay-discussion-02",
                task: 2,
                category: "essay",
                type: "discussion",
                title: "The Focus of Museum Collections",
                prompt: "Some people think museums should concentrate on the history and culture of their own region. Others believe they should introduce visitors to a wide range of cultures from around the world. Discuss both views and give your own opinion.",
                instructions: "Write at least 250 words. Give reasons for your answer and support your ideas with relevant examples from your knowledge or experience.",
                wordlimit: 250,
                duration: 40
            },
            {
                id: "essay-discussion-03",
                task: 2,
                category: "essay",
                type: "discussion",
                title: "Local Spending on Healthier Lifestyles",
                prompt: "Some people believe local governments should invest more in sports facilities to improve public health. Others think teaching residents how to prepare healthy, low-cost meals would be more effective. Discuss both views and give your own opinion.",
                instructions: "Write at least 250 words. Give reasons for your answer and support your ideas with relevant examples from your knowledge or experience.",
                wordlimit: 250,
                duration: 40
            },
            {
                id: "essay-advantages-01",
                task: 2,
                category: "essay",
                type: "advantages-disadvantages",
                title: "Digital Assistants in the Home",
                prompt: "More households are using voice-controlled digital assistants to organise daily tasks and operate devices at home. What are the advantages and disadvantages of this development?",
                instructions: "Write at least 250 words. Give reasons for your answer and support your ideas with relevant examples from your knowledge or experience.",
                wordlimit: 250,
                duration: 40
            },
            {
                id: "essay-advantages-02",
                task: 2,
                category: "essay",
                type: "advantages-disadvantages",
                title: "Recorded Lectures at University",
                prompt: "Some universities are replacing a proportion of their classroom lectures with recorded lessons that students can watch at a time they choose. What are the advantages and disadvantages of this approach for students?",
                instructions: "Write at least 250 words. Give reasons for your answer and support your ideas with relevant examples from your knowledge or experience.",
                wordlimit: 250,
                duration: 40
            },
            {
                id: "essay-advantages-03",
                task: 2,
                category: "essay",
                type: "advantages-disadvantages",
                title: "Shared Workspaces in Small Towns",
                prompt: "Some small towns are converting empty shops into shared workspaces for people who work remotely. What are the advantages and disadvantages of this change for these towns?",
                instructions: "Write at least 250 words. Give reasons for your answer and support your ideas with relevant examples from your knowledge or experience.",
                wordlimit: 250,
                duration: 40
            },
            {
                id: "essay-problems-01",
                task: 2,
                category: "essay",
                type: "problems-solutions",
                title: "Edible Food in Household Bins",
                prompt: "In many residential areas, large amounts of edible food are thrown away each week. What problems does this cause, and what can households and local councils do to reduce this waste?",
                instructions: "Write at least 250 words. Give reasons for your answer and support your ideas with relevant examples from your knowledge or experience.",
                wordlimit: 250,
                duration: 40
            },
            {
                id: "essay-problems-02",
                task: 2,
                category: "essay",
                type: "problems-solutions",
                title: "Delivery Vehicles on Busy City Streets",
                prompt: "In fast-growing cities, delivery vehicles often stop on pavements or close to junctions while goods are unloaded. What problems can this create, and what measures could city authorities and delivery companies take to address them?",
                instructions: "Write at least 250 words. Give reasons for your answer and support your ideas with relevant examples from your knowledge or experience.",
                wordlimit: 250,
                duration: 40
            },
            {
                id: "essay-problems-03",
                task: 2,
                category: "essay",
                type: "problems-solutions",
                title: "Access to Essential Services for Older Residents",
                prompt: "Some older residents struggle to use essential services when appointments and applications move entirely online. What problems can this create for them, and how could service providers make access easier?",
                instructions: "Write at least 250 words. Give reasons for your answer and support your ideas with relevant examples from your knowledge or experience.",
                wordlimit: 250,
                duration: 40
            },
            {
                id: "essay-two-part-01",
                task: 2,
                category: "essay",
                type: "two-part",
                title: "Following the News Through Short Videos",
                prompt: "Short video clips have become a common way for young people to follow the news. Why might they choose this format? How could this habit affect their understanding of important events?",
                instructions: "Write at least 250 words. Give reasons for your answer and support your ideas with relevant examples from your knowledge or experience.",
                wordlimit: 250,
                duration: 40
            },
            {
                id: "essay-two-part-02",
                task: 2,
                category: "essay",
                type: "two-part",
                title: "Participation in Local Festivals",
                prompt: "In some communities, fewer people take part in local festivals than in the past. Why might participation be declining? What role could these festivals play in community life today?",
                instructions: "Write at least 250 words. Give reasons for your answer and support your ideas with relevant examples from your knowledge or experience.",
                wordlimit: 250,
                duration: 40
            },
            {
                id: "essay-two-part-03",
                task: 2,
                category: "essay",
                type: "two-part",
                title: "Making Time for Practical Crafts",
                prompt: "Some people with busy schedules spend part of their free time learning practical crafts such as pottery or woodwork. Why might these activities appeal to them? Is this a positive or negative way to use limited free time?",
                instructions: "Write at least 250 words. Give reasons for your answer and support your ideas with relevant examples from your knowledge or experience.",
                wordlimit: 250,
                duration: 40
            }
        ]
    }
];