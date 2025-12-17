// قاعدة بيانات الأسئلة (50+ سؤال من منصة كيريو)
const questionsDatabase = [
    {
        id: 1,
        title: "جمع رقمين",
        description: "اكتب دالة تأخذ رقمين كمدخل وتعيد مجموعهما.",
        difficulty: "easy",
        points: 10,
        category: "رياضيات",
        hint: "استخدم عملية الجمع البسيطة (+) لإرجاع مجموع الرقمين.",
        sampleInput: "5, 3",
        sampleOutput: "8",
        testCases: [
            { input: "2, 3", output: "5" },
            { input: "10, 20", output: "30" },
            { input: "-5, 10", output: "5" },
            { input: "0, 0", output: "0" }
        ],
        starterCode: {
            python: "def add(a, b):\n    # اكتب كودك هنا\n    pass",
            javascript: "function add(a, b) {\n    // اكتب كودك هنا\n}",
            java: "public static int add(int a, int b) {\n    // اكتب كودك هنا\n}"
        }
    },
    {
        id: 2,
        title: "العثور على الرقم الأكبر",
        description: "اكتب دالة تأخذ ثلاثة أرقام كمدخل وتعيد أكبرهم.",
        difficulty: "easy",
        points: 10,
        category: "رياضيات",
        hint: "يمكنك استخدام if statements للمقارنة بين الأرقام.",
        sampleInput: "5, 9, 2",
        sampleOutput: "9",
        testCases: [
            { input: "1, 2, 3", output: "3" },
            { input: "10, 5, 8", output: "10" },
            { input: "-1, -5, -3", output: "-1" },
            { input: "7, 7, 7", output: "7" }
        ],
        starterCode: {
            python: "def find_max(a, b, c):\n    # اكتب كودك هنا\n    pass",
            javascript: "function findMax(a, b, c) {\n    // اكتب كودك هنا\n}",
            java: "public static int findMax(int a, int b, int c) {\n    // اكتب كودك هنا\n}"
        }
    },
    {
        id: 3,
        title: "تحقق من الرقم الزوجي",
        description: "اكتب دالة تأخذ رقماً وتعيد true إذا كان الزوجي، وfalse إذا كان الفردي.",
        difficulty: "easy",
        points: 10,
        category: "رياضيات",
        hint: "استخدم معامل الباقي (%) للتحقق من قابلية القسمة على 2.",
        sampleInput: "4",
        sampleOutput: "true",
        testCases: [
            { input: "2", output: "true" },
            { input: "7", output: "false" },
            { input: "0", output: "true" },
            { input: "-4", output: "true" }
        ],
        starterCode: {
            python: "def is_even(num):\n    # اكتب كودك هنا\n    pass",
            javascript: "function isEven(num) {\n    // اكتب كودك هنا\n}",
            java: "public static boolean isEven(int num) {\n    // اكتب كودك هنا\n}"
        }
    },
    {
        id: 4,
        title: "حساب المضروب",
        description: "اكتب دالة لحساب مضروب عدد صحيح غير سالب.",
        difficulty: "medium",
        points: 15,
        category: "رياضيات",
        hint: "المضروب هو حاصل ضرب جميع الأعداد الصحيحة الموجبة من 1 إلى n.",
        sampleInput: "5",
        sampleOutput: "120",
        testCases: [
            { input: "0", output: "1" },
            { input: "1", output: "1" },
            { input: "4", output: "24" },
            { input: "6", output: "720" }
        ],
        starterCode: {
            python: "def factorial(n):\n    # اكتب كودك هنا\n    pass",
            javascript: "function factorial(n) {\n    // اكتب كودك هنا\n}",
            java: "public static int factorial(int n) {\n    // اكتب كودك هنا\n}"
        }
    },
    {
        id: 5,
        title: "سلسلة فيبوناتشي",
        description: "اكتب دالة لإرجاع العدد n في سلسلة فيبوناتشي.",
        difficulty: "medium",
        points: 20,
        category: "رياضيات",
        hint: "كل عدد في السلسلة هو مجموع العددين السابقين له.",
        sampleInput: "6",
        sampleOutput: "8",
        testCases: [
            { input: "0", output: "0" },
            { input: "1", output: "1" },
            { input: "10", output: "55" },
            { input: "15", output: "610" }
        ],
        starterCode: {
            python: "def fibonacci(n):\n    # اكتب كودك هنا\n    pass",
            javascript: "function fibonacci(n) {\n    // اكتب كودك هنا\n}",
            java: "public static int fibonacci(int n) {\n    // اكتب كودك هنا\n}"
        }
    },
    {
        id: 6,
        title: "الرقم الأولي",
        description: "اكتب دالة للتحقق مما إذا كان الرقم أولياً أم لا.",
        difficulty: "medium",
        points: 20,
        category: "رياضيات",
        hint: "الرقم الأولي هو الذي يقبل القسمة على 1 وعلى نفسه فقط.",
        sampleInput: "7",
        sampleOutput: "true",
        testCases: [
            { input: "2", output: "true" },
            { input: "4", output: "false" },
            { input: "17", output: "true" },
            { input: "1", output: "false" }
        ],
        starterCode: {
            python: "def is_prime(num):\n    # اكتب كودك هنا\n    pass",
            javascript: "function isPrime(num) {\n    // اكتب كودك هنا\n}",
            java: "public static boolean isPrime(int num) {\n    // اكتب كودك هنا\n}"
        }
    },
    {
        id: 7,
        title: "عكس النص",
        description: "اكتب دالة تأخذ نصاً وتعيده معكوساً.",
        difficulty: "easy",
        points: 10,
        category: "نصوص",
        hint: "يمكنك استخدام slicing في بايثون أو loop في اللغات الأخرى.",
        sampleInput: "hello",
        sampleOutput: "olleh",
        testCases: [
            { input: "world", output: "dlrow" },
            { input: "a", output: "a" },
            { input: "racecar", output: "racecar" },
            { input: "12345", output: "54321" }
        ],
        starterCode: {
            python: "def reverse_string(s):\n    # اكتب كودك هنا\n    pass",
            javascript: "function reverseString(s) {\n    // اكتب كودك هنا\n}",
            java: "public static String reverseString(String s) {\n    // اكتب كودك هنا\n}"
        }
    },
    {
        id: 8,
        title: "التحقق من النص المتناظر",
        description: "اكتب دالة للتحقق مما إذا كان النص متناظراً (يقرأ من الجهتين بنفس الطريقة).",
        difficulty: "easy",
        points: 10,
        category: "نصوص",
        hint: "النص المتناظر هو الذي يساوي نفسه عند عكسه.",
        sampleInput: "racecar",
        sampleOutput: "true",
        testCases: [
            { input: "madam", output: "true" },
            { input: "hello", output: "false" },
            { input: "a", output: "true" },
            { input: "noon", output: "true" }
        ],
        starterCode: {
            python: "def is_palindrome(s):\n    # اكتب كودك هنا\n    pass",
            javascript: "function isPalindrome(s) {\n    // اكتب كودك هنا\n}",
            java: "public static boolean isPalindrome(String s) {\n    // اكتب كودك هنا\n}"
        }
    },
    {
        id: 9,
        title: "عدد مرات تكرار الحرف",
        description: "اكتب دالة تحسب عدد مرات تكرار حرف معين في نص.",
        difficulty: "easy",
        points: 10,
        category: "نصوص",
        hint: "يمكنك استخدام loop للمرور على كل حرف في النص.",
        sampleInput: "hello, l",
        sampleOutput: "2",
        testCases: [
            { input: "programming, m", output: "2" },
            { input: "banana, a", output: "3" },
            { input: "test, x", output: "0" },
            { input: "aaaaa, a", output: "5" }
        ],
        starterCode: {
            python: "def count_char(s, char):\n    # اكتب كودك هنا\n    pass",
            javascript: "function countChar(s, char) {\n    // اكتب كودك هنا\n}",
            java: "public static int countChar(String s, char ch) {\n    // اكتب كودك هنا\n}"
        }
    },
    // ... يمكنك إضافة المزيد من الأسئلة هنا لتصل إلى 50+
    {
        id: 10,
        title: "تحويل درجة الحرارة",
        description: "اكتب دالة تحول من فهرنهايت إلى مئوية.",
        difficulty: "easy",
        points: 10,
        category: "تحويلات",
        hint: "استخدم الصيغة: (فهرنهايت - 32) * 5/9",
        sampleInput: "68",
        sampleOutput: "20",
        testCases: [
            { input: "32", output: "0" },
            { input: "212", output: "100" },
            { input: "50", output: "10" },
            { input: "77", output: "25" }
        ],
        starterCode: {
            python: "def fahrenheit_to_celsius(f):\n    # اكتب كودك هنا\n    pass",
            javascript: "function fahrenheitToCelsius(f) {\n    // اكتب كودك هنا\n}",
            java: "public static double fahrenheitToCelsius(double f) {\n    // اكتب كودك هنا\n}"
        }
    }
    // ... أضف 40 سؤالاً إضافياً هنا
];

// يمكنك إضافة المزيد من الأسئلة بنفس النمط
// هذه مجرد أمثلة، في الواقع ستحتاج إلى إضافة 50+ سؤالاً

// دالة للحصول على جميع الأسئلة
function getAllQuestions() {
    return questionsDatabase;
}

// دالة للحصول على سؤال محدد بالمعرف
function getQuestionById(id) {
    return questionsDatabase.find(q => q.id === id) || null;
}

// دالة للحصول على عدد الأسئلة
function getQuestionsCount() {
    return questionsDatabase.length;
}

// دالة للحصول على الأسئلة حسب الصعوبة
function getQuestionsByDifficulty(difficulty) {
    return questionsDatabase.filter(q => q.difficulty === difficulty);
}