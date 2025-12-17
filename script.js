// ===== التطبيق الرئيسي =====
const JSPlayground = {
    // الإعدادات
    config: {
        isRunning: false,
        runCount: 0,
        successCount: 0,
        errorCount: 0,
        currentTab: 'editor',
        autoSave: true,
        fontSize: 16
    },
    
    // الأمثلة التعليمية
    examples: [
        {
            id: 1,
            title: "العمليات الحسابية",
            description: "جمع، طرح، ضرب، وقسمة",
            category: "أساسيات",
            code: `// العمليات الأساسية
console.log(10 + 5);  // 15
console.log(20 - 8);  // 12
console.log(6 * 7);   // 42
console.log(50 / 10); // 5

// العمليات المتقدمة
console.log(17 % 5);  // باقي القسمة = 2
console.log(2 ** 3);  // أس = 8

// مع المتغيرات
let a = 25;
let b = 5;
console.log("a + b =", a + b);
console.log("a * b =", a * b);`
        },
        {
            id: 2,
            title: "النصوص والجمل",
            description: "التعامل مع النصوص في JavaScript",
            category: "أساسيات",
            code: `// النصوص الأساسية
let name = "محمود";
console.log("مرحباً " + name);

// خصائص النصوص
let text = "JavaScript";
console.log("طول النص:", text.length);
console.log("نص كبير:", text.toUpperCase());
console.log("نص صغير:", text.toLowerCase());

// البحث في النص
let sentence = "أتعلم البرمجة بلغة JavaScript";
console.log("هل يحتوي على 'برمجة'؟", sentence.includes("برمجة"));
console.log("موقع كلمة 'JavaScript':", sentence.indexOf("JavaScript"));

// القوالب النصية
let age = 25;
let city = "القاهرة";
console.log(\`أنا \${name}، عمري \${age} سنة من \${city}\`);`
        },
        {
            id: 3,
            title: "المصفوفات",
            description: "التعامل مع مجموعات البيانات",
            category: "هياكل البيانات",
            code: `// إنشاء مصفوفة
let fruits = ["تفاح", "موز", "برتقال"];
console.log("الفواكه:", fruits);

// الوصول للعناصر
console.log("أول فاكهة:", fruits[0]);
console.log("آخر فاكهة:", fruits[fruits.length - 1]);

// إضافة عناصر
fruits.push("عنب");
console.log("بعد إضافة عنب:", fruits);

// حذف عناصر
let removed = fruits.pop();
console.log("تم حذف:", removed);
console.log("الباقي:", fruits);

// البحث في المصفوفة
console.log("هل يوجد موز؟", fruits.includes("موز"));
console.log("موقع البرتقال:", fruits.indexOf("برتقال"));

// تكرار على المصفوفة
console.log("جميع الفواكه:");
fruits.forEach((fruit, i) => {
    console.log(\`\${i + 1}. \${fruit}\`);
});`
        },
        {
            id: 4,
            title: "الدوال الأساسية",
            description: "إنشاء واستخدام الدوال",
            category: "الدوال",
            code: `// دالة بسيطة
function greet(name) {
    return "أهلاً وسهلاً " + name;
}

console.log(greet("محمود"));
console.log(greet("سلمي"));

// دالة مع معاملات
function calculate(a, b, op) {
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
    if (op === '/') return a / b;
    return "عملية غير معروفة";
}

console.log("10 + 5 =", calculate(10, 5, '+'));
console.log("10 × 3 =", calculate(10, 3, '*'));

// دالة سهمية
const square = x => x * x;
console.log("مربع 8 هو:", square(8));

// دالة داخلية
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const increment = counter();
console.log("العداد:", increment());
console.log("العداد:", increment());`
        },
        {
            id: 5,
            title: "الشروط والقرارات",
            description: "if, else, switch",
            category: "تحكم",
            code: `// if else
let score = 85;

if (score >= 90) {
    console.log("ممتاز! 🎉");
} else if (score >= 80) {
    console.log("جيد جداً 👍");
} else if (score >= 70) {
    console.log("جيد 👌");
} else {
    console.log("يحتاج تحسين 💪");
}

// switch
let day = "السبت";
switch(day) {
    case "السبت":
    case "الأحد":
        console.log("إجازة 🏖️");
        break;
    case "الجمعة":
        console.log("يوم الجمعة 🕌");
        break;
    default:
        console.log("يوم عمل 💼");
}

// العامل الثلاثي
let age = 20;
let status = age >= 18 ? "بالغ" : "قاصر";
console.log(status);`
        },
        {
            id: 6,
            title: "الحلقات",
            description: "for, while, do while",
            category: "تحكم",
            code: `// for loop
console.log("الأرقام من 1 إلى 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// while loop
console.log("عد تنازلي:");
let count = 5;
while (count > 0) {
    console.log(count);
    count--;
}
console.log("انطلق! 🚀");

// for...of على مصفوفة
let colors = ["أحمر", "أخضر", "أزرق"];
console.log("\\nالألوان:");
for (let color of colors) {
    console.log(color);
}

// for...in على كائن
let person = { name: "أحمد", age: 25, city: "الرياض" };
console.log("\\nخصائص الكائن:");
for (let key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}`
        },
        {
            id: 7,
            title: "الكائنات",
            description: "إنشاء والتعامل مع الكائنات",
            category: "هياكل البيانات",
            code: `// إنشاء كائن
let student = {
    name: "سلمي",
    age: 22,
    grade: "A+",
    courses: ["رياضيات", "فيزياء", "برمجة"],
    
    // دالة داخل الكائن
    introduce: function() {
        return \`أنا \${this.name}، عمري \${this.age}\`;
    },
    
    // طريقة مختصرة للدوال
    getGrade() {
        return this.grade;
    }
};

console.log("الاسم:", student.name);
console.log("العمر:", student.age);
console.log("المقررات:", student.courses);
console.log(student.introduce());
console.log("التقدير:", student.getGrade());

// إضافة خاصية جديدة
student.university = "جامعة القاهرة";
console.log("الجامعة:", student.university);

// حذف خاصية
delete student.grade;
console.log("بعد الحذف:", student);`
        },
        {
            id: 8,
            title: "التواريخ والوقت",
            description: "التعامل مع التاريخ والوقت",
            category: "مدمج",
            code: `// التاريخ الحالي
let now = new Date();
console.log("التاريخ الكامل:", now);
console.log("السنة:", now.getFullYear());
console.log("الشهر:", now.getMonth() + 1); // الأشهر من 0-11
console.log("اليوم:", now.getDate());
console.log("الساعة:", now.getHours());
console.log("الدقائق:", now.getMinutes());

// تاريخ محدد
let birthday = new Date(2000, 0, 15); // 15 يناير 2000
console.log("تاريخ الميلاد:", birthday);

// الفرق بين تاريخين
let diff = now - birthday;
let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
console.log("العمر بالسنوات:", years);

// تنسيق التاريخ
console.log("التاريخ بصيغة نصية:", now.toDateString());
console.log("الوقت بصيغة نصية:", now.toTimeString());
console.log("التاريخ المحلي:", now.toLocaleDateString('ar-EG'));

// إضافة وقت
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
console.log("تاريخ الغد:", tomorrow);`
        }
    ],
    
    // حالة المحرر
    editorState: {
        code: '',
        lastRun: null,
        lastError: null,
        history: []
    }
};

// ===== تهيئة التطبيق =====
document.addEventListener('DOMContentLoaded', function() {
    initApp();
    loadExamples();
    setupEventListeners();
    restoreFromStorage();
    showWelcome();
});

// تهيئة التطبيق
function initApp() {
    // تعيين النص الافتراضي
    const codeInput = document.getElementById('code-input');
    
    if (!codeInput.value.trim()) {
        codeInput.value = `// مرحباً بك في مشغل JavaScript! 👋
// هذا المكان الآمن لتعلم وتجربة JavaScript

// 1. اكتب أي كود JavaScript هنا
console.log("مرحباً بالعالم!");

// 2. استخدم console.log() لعرض النتائج
let num1 = 15;
let num2 = 3;
console.log("15 + 3 =", num1 + num2);
console.log("15 × 3 =", num1 * num2);

// 3. جرب الأمثلة التعليمية
// 4. اضغط على زر "تشغيل" أو استخدم Ctrl+Enter للتنفيذ`;
    }
    
    // تحديث حالة المحرر
    JSPlayground.editorState.code = codeInput.value;
    
    // ضبط حجم الخط
    updateFontSize();
}

// تحديث حجم الخط
function updateFontSize() {
    const codeInput = document.getElementById('code-input');
    codeInput.style.fontSize = `${JSPlayground.config.fontSize}px`;
    codeInput.style.lineHeight = `${JSPlayground.config.fontSize * 1.5}px`;
}

// تحميل الأمثلة
function loadExamples() {
    const examplesGrid = document.getElementById('examples-grid');
    if (!examplesGrid) return;
    
    examplesGrid.innerHTML = '';
    
    // تجميع الأمثلة حسب الفئة
    const categories = {};
    JSPlayground.examples.forEach(example => {
        if (!categories[example.category]) {
            categories[example.category] = [];
        }
        categories[example.category].push(example);
    });
    
    // عرض الأمثلة مصنفة
    for (const [category, examples] of Object.entries(categories)) {
        // عنوان الفئة
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-header';
        categoryHeader.innerHTML = `<h4>${category}</h4>`;
        examplesGrid.appendChild(categoryHeader);
        
        // أمثلة الفئة
        examples.forEach(example => {
            const card = document.createElement('div');
            card.className = 'example-card';
            card.setAttribute('data-id', example.id);
            
            card.innerHTML = `
                <div class="example-title">
                    <i class="fas fa-code"></i>
                    <span>${example.title}</span>
                </div>
                <div class="example-desc">${example.description}</div>
                <div class="example-code">${example.code.substring(0, 100)}...</div>
            `;
            
            card.addEventListener('click', () => loadExample(example));
            examplesGrid.appendChild(card);
        });
    }
}

// تحميل مثال إلى المحرر
function loadExample(example) {
    const codeInput = document.getElementById('code-input');
    codeInput.value = example.code;
    
    // حفظ في السجل
    JSPlayground.editorState.code = example.code;
    JSPlayground.editorState.history.push({
        type: 'load_example',
        title: example.title,
        timestamp: new Date()
    });
    
    // التبديل إلى تبويب المحرر
    switchTab('editor');
    
    // إظهار إشعار
    showNotification(`تم تحميل مثال: ${example.title}`, 'success');
    
    // تأثير بسيط
    codeInput.focus();
    codeInput.style.transform = 'scale(1.01)';
    setTimeout(() => {
        codeInput.style.transform = 'scale(1)';
    }, 200);
    
    // حفظ في التخزين المحلي
    if (JSPlayground.config.autoSave) {
        saveToStorage();
    }
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // التبديل بين التبويبات
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
    
    // زر التشغيل
    const runBtn = document.getElementById('run-btn');
    if (runBtn) {
        runBtn.addEventListener('click', runCode);
    }
    
    // زر المسح
    const clearBtn = document.getElementById('clear-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearCode);
    }
    
    // اختصارات لوحة المفاتيح
    document.addEventListener('keydown', function(e) {
        // Ctrl+Enter لتشغيل الكود
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            runCode();
            showNotification('تم تشغيل الكود (Ctrl+Enter)', 'success');
        }
        
        // Ctrl+S للحفظ
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            saveCode();
        }
        
        // Ctrl+L لمسح الكود
        if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
            e.preventDefault();
            clearCode();
        }
    });
    
    // تتبع التغييرات في المحرر
    const codeInput = document.getElementById('code-input');
    if (codeInput) {
        codeInput.addEventListener('input', function() {
            JSPlayground.editorState.code = this.value;
            updateStatus('معدل', 'info');
            
            // حفظ تلقائي
            if (JSPlayground.config.autoSave) {
                saveToStorage();
            }
        });
        
        // حفظ السجل
        codeInput.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = this.selectionStart;
                const end = this.selectionEnd;
                
                // إضافة 4 مسافات
                this.value = this.value.substring(0, start) + '    ' + this.value.substring(end);
                
                // تحريك المؤشر
                this.selectionStart = this.selectionEnd = start + 4;
                
                // تحديث حالة المحرر
                JSPlayground.editorState.code = this.value;
            }
        });
    }
}

// التبديل بين التبويبات
function switchTab(tabId) {
    // تحديث التبويبات النشطة
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-tab') === tabId) {
            tab.classList.add('active');
        }
    });
    
    // تحديث المحتوى النشط
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        if (content.id === `${tabId}-tab`) {
            content.classList.add('active');
            
            // تأثير أنيميشن
            content.style.animation = 'fadeIn 0.3s ease';
            setTimeout(() => {
                content.style.animation = '';
            }, 300);
        }
    });
    
    // حفظ التبويب الحالي
    JSPlayground.config.currentTab = tabId;
    
    // حفظ في التخزين المحلي
    saveToStorage();
}

// تشغيل الكود
function runCode() {
    // التحقق من عدم وجود تشغيل حالياً
    if (JSPlayground.config.isRunning) {
        showNotification('جاري تنفيذ كود آخر...', 'warning');
        return;
    }
    
    // الحصول على الكود
    const codeInput = document.getElementById('code-input');
    const code = codeInput.value.trim();
    const outputContent = document.getElementById('output-content');
    
    // التحقق من وجود كود
    if (!code) {
        showNotification('اكتب بعض الكود أولاً!', 'error');
        return;
    }
    
    // تعيين حالة التشغيل
    JSPlayground.config.isRunning = true;
    JSPlayground.config.runCount++;
    updateStatus('جاري التنفيذ...', 'running');
    
    // التبديل إلى تبويب النتيجة
    switchTab('output');
    
    // إظهار مؤشر التحميل
    showLoading();
    
    // حفظ السجل
    JSPlayground.editorState.lastRun = new Date();
    JSPlayground.editorState.history.push({
        type: 'run_code',
        codeLength: code.length,
        timestamp: new Date()
    });
    
    // تنفيذ الكود بعد تأخير بسيط
    setTimeout(() => {
        try {
            // تجميع المخرجات
            const outputs = {
                logs: [],
                errors: [],
                warns: [],
                infos: []
            };
            
            // حفظ الـ console الأصلي
            const originalConsole = {
                log: console.log,
                error: console.error,
                warn: console.warn,
                info: console.info
            };
            
            // تجميع المخرجات
            console.log = function(...args) {
                outputs.logs.push(args);
                originalConsole.log(...args);
            };
            
            console.error = function(...args) {
                outputs.errors.push(args);
                originalConsole.error(...args);
            };
            
            console.warn = function(...args) {
                outputs.warns.push(args);
                originalConsole.warn(...args);
            };
            
            console.info = function(...args) {
                outputs.infos.push(args);
                originalConsole.info(...args);
            };
            
            // تنفيذ الكود
            const result = eval(code);
            
            // استعادة الـ console الأصلي
            console.log = originalConsole.log;
            console.error = originalConsole.error;
            console.warn = originalConsole.warn;
            console.info = originalConsole.info;
            
            // عرض النتائج
            displayResults(outputs, result);
            
            // تحديث الإحصائيات
            JSPlayground.config.successCount++;
            showNotification('تم التنفيذ بنجاح! 🎉', 'success');
            
            // حفظ السجل
            JSPlayground.editorState.lastError = null;
            
        } catch (error) {
            // في حالة حدوث خطأ
            JSPlayground.config.errorCount++;
            displayError(error);
            showNotification('حدث خطأ أثناء التنفيذ ❌', 'error');
            
            // حفظ السجل
            JSPlayground.editorState.lastError = {
                message: error.message,
                stack: error.stack,
                timestamp: new Date()
            };
        }
        
        // إعادة تعيين الحالة
        JSPlayground.config.isRunning = false;
        updateStatus('جاهز', 'ready');
        
        // تحديث الإحصائيات
        updateStats();
        
        // حفظ في التخزين المحلي
        saveToStorage();
        
    }, 300); // تأخير بسيط لمحاكاة التنفيذ
}

// عرض مؤشر التحميل
function showLoading() {
    const outputContent = document.getElementById('output-content');
    
    outputContent.innerHTML = `
        <div class="loading-container">
            <div class="spinner">
                <div class="spinner-circle"></div>
                <div class="spinner-circle"></div>
                <div class="spinner-circle"></div>
            </div>
            <h3>جاري تنفيذ الكود...</h3>
            <p>يرجى الانتظار بينما نقوم بتنفيذ كود JavaScript</p>
        </div>
    `;
    
    // إضافة أنيميشن للـ spinner
    const style = document.createElement('style');
    style.textContent = `
        .loading-container {
            text-align: center;
            padding: 50px 20px;
        }
        
        .spinner {
            display: inline-flex;
            gap: 8px;
            margin-bottom: 20px;
        }
        
        .spinner-circle {
            width: 20px;
            height: 20px;
            background: var(--primary-color);
            border-radius: 50%;
            animation: bounce 0.6s infinite alternate;
        }
        
        .spinner-circle:nth-child(2) {
            animation-delay: 0.2s;
            background: var(--secondary-color);
        }
        
        .spinner-circle:nth-child(3) {
            animation-delay: 0.4s;
            background: var(--info-color);
        }
        
        @keyframes bounce {
            from { transform: translateY(0); }
            to { transform: translateY(-15px); }
        }
    `;
    document.head.appendChild(style);
}

// عرض النتائج
function displayResults(outputs, returnValue) {
    const outputContent = document.getElementById('output-content');
    let html = '';
    
    // حساب الإجمالي
    const totalLogs = outputs.logs.length + outputs.errors.length + 
                     outputs.warns.length + outputs.infos.length;
    
    // إذا لم يكن هناك مخرجات
    if (totalLogs === 0 && returnValue === undefined) {
        html += `
            <div class="message info">
                <i class="fas fa-info-circle"></i>
                <div>
                    <h4>تم التنفيذ</h4>
                    <p>الكود تم تنفيذه بنجاح ولكن لم يظهر أي إخراج.</p>
                    <p class="hint">💡 استخدم <code>console.log()</code> لعرض النتائج</p>
                </div>
            </div>
        `;
    } else {
        // عرض المخرجات حسب النوع
        
        // الإخراج العادي (console.log)
        if (outputs.logs.length > 0) {
            html += `<div class="output-section">
                <div class="section-header">
                    <span class="badge success">${outputs.logs.length}</span>
                    <h4>الإخراج العادي</h4>
                </div>
                <div class="section-content">`;
            
            outputs.logs.forEach((log, index) => {
                html += `<div class="log-item ${index % 2 === 0 ? 'even' : 'odd'}">
                    ${log.map(arg => formatOutput(arg)).join(' ')}
                </div>`;
            });
            
            html += `</div></div>`;
        }
        
        // المعلومات (console.info)
        if (outputs.infos.length > 0) {
            html += `<div class="output-section info-section">
                <div class="section-header">
                    <span class="badge info">${outputs.infos.length}</span>
                    <h4>معلومات</h4>
                </div>
                <div class="section-content">`;
            
            outputs.infos.forEach(info => {
                html += `<div class="info-item">
                    ${info.map(arg => formatOutput(arg)).join(' ')}
                </div>`;
            });
            
            html += `</div></div>`;
        }
        
        // التحذيرات (console.warn)
        if (outputs.warns.length > 0) {
            html += `<div class="output-section warning-section">
                <div class="section-header">
                    <span class="badge warning">${outputs.warns.length}</span>
                    <h4>تحذيرات</h4>
                </div>
                <div class="section-content">`;
            
            outputs.warns.forEach(warn => {
                html += `<div class="warn-item">
                    ${warn.map(arg => formatOutput(arg)).join(' ')}
                </div>`;
            });
            
            html += `</div></div>`;
        }
        
        // الأخطاء (console.error)
        if (outputs.errors.length > 0) {
            html += `<div class="output-section error-section">
                <div class="section-header">
                    <span class="badge error">${outputs.errors.length}</span>
                    <h4>أخطاء</h4>
                </div>
                <div class="section-content">`;
            
            outputs.errors.forEach(error => {
                html += `<div class="error-item">
                    ${error.map(arg => formatOutput(arg)).join(' ')}
                </div>`;
            });
            
            html += `</div></div>`;
        }
        
        // القيمة المعادة
        if (returnValue !== undefined) {
            html += `<div class="return-value">
                <div class="section-header">
                    <i class="fas fa-arrow-right"></i>
                    <h4>القيمة المعادة</h4>
                </div>
                <div class="section-content">
                    <div class="return-item">
                        ${formatOutput(returnValue)}
                    </div>
                </div>
            </div>`;
        }
        
        // إحصائيات التنفيذ
        html += `
            <div class="execution-stats">
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-value">${outputs.logs.length}</div>
                        <div class="stat-label">إخراج عادي</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${outputs.infos.length}</div>
                        <div class="stat-label">معلومات</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${outputs.warns.length}</div>
                        <div class="stat-label">تحذيرات</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${outputs.errors.length}</div>
                        <div class="stat-label">أخطاء</div>
                    </div>
                </div>
                <div class="execution-time">
                    <i class="fas fa-clock"></i>
                    تم التنفيذ في <strong>${new Date().toLocaleTimeString('ar-EG')}</strong>
                </div>
            </div>
        `;
    }
    
    outputContent.innerHTML = html;
    
    // التمرير إلى الأعلى
    outputContent.scrollTop = 0;
    
    // إضافة أنيميشن للعناصر الجديدة
    setTimeout(() => {
        document.querySelectorAll('.output-section, .return-value').forEach((el, i) => {
            el.style.animationDelay = `${i * 0.1}s`;
            el.classList.add('fade-in');
        });
    }, 100);
}

// عرض الخطأ
function displayError(error) {
    const outputContent = document.getElementById('output-content');
    
    const html = `
        <div class="error-container">
            <div class="error-header">
                <i class="fas fa-exclamation-triangle"></i>
                <div>
                    <h3>${error.name}</h3>
                    <p class="error-message">${error.message}</p>
                </div>
            </div>
            
            <div class="error-details">
                <h4>تفاصيل الخطأ:</h4>
                <pre class="error-stack">${error.stack || 'لا توجد تفاصيل إضافية'}</pre>
            </div>
            
            <div class="error-tips">
                <h4>🛠️ نصائح للإصلاح:</h4>
                <ul>
                    <li>تأكد من صيغة الكود وأقواسه</li>
                    <li>تحقق من تعريف المتغيرات قبل استخدامها</li>
                    <li>تأكد من أسماء الدوال والمتغيرات</li>
                    <li>راجع الكود خطوة بخطوة</li>
                    <li>استخدم console.log() لمتابعة تنفيذ الكود</li>
                </ul>
            </div>
        </div>
    `;
    
    outputContent.innerHTML = html;
    
    // التمرير إلى الأعلى
    outputContent.scrollTop = 0;
}

// تنسيق الإخراج
function formatOutput(value) {
    // القيم الخاصة
    if (value === null) return '<span class="null-value">null</span>';
    if (value === undefined) return '<span class="undefined-value">undefined</span>';
    
    // الأنواع الأساسية
    const type = typeof value;
    
    switch(type) {
        case 'boolean':
            return `<span class="boolean-value">${value}</span>`;
            
        case 'number':
            return `<span class="number-value">${value}</span>`;
            
        case 'string':
            return `<span class="string-value">"${value}"</span>`;
            
        case 'function':
            const name = value.name || 'anonymous';
            return `<span class="function-value">[Function: ${name}]</span>`;
            
        case 'object':
            // المصفوفات
            if (Array.isArray(value)) {
                const items = value.map(item => formatOutput(item)).join(', ');
                return `<span class="array-value">[${items}]</span>`;
            }
            
            // الكائنات
            try {
                // محاولة تنسيق JSON
                const json = JSON.stringify(value, null, 2);
                return `<pre class="object-value">${json}</pre>`;
            } catch {
                // إذا فشل التنسيق
                return `<span class="object-value">${String(value)}</span>`;
            }
            
        default:
            return `<span class="default-value">${String(value)}</span>`;
    }
}

// مسح الكود
function clearCode() {
    // طلب التأكيد
    if (!confirm('هل تريد مسح الكود الحالي؟')) return;
    
    const codeInput = document.getElementById('code-input');
    
    // تأثير أنيميشن
    codeInput.style.opacity = '0.7';
    codeInput.style.transform = 'translateX(-10px)';
    
    setTimeout(() => {
        // مسح المحتوى
        codeInput.value = '';
        codeInput.focus();
        
        // استعادة الأنيميشن
        codeInput.style.opacity = '1';
        codeInput.style.transform = 'translateX(0)';
        codeInput.style.animation = 'pulse 0.5s ease';
        
        setTimeout(() => {
            codeInput.style.animation = '';
        }, 500);
        
        // تحديث الحالة
        JSPlayground.editorState.code = '';
        JSPlayground.editorState.history.push({
            type: 'clear_code',
            timestamp: new Date()
        });
        
        // إظهار إشعار
        showNotification('تم مسح الكود', 'info');
        updateStatus('جاهز', 'ready');
        
        // حفظ في التخزين المحلي
        if (JSPlayground.config.autoSave) {
            saveToStorage();
        }
    }, 200);
}

// حفظ الكود
function saveCode() {
    const code = document.getElementById('code-input').value;
    
    if (!code.trim()) {
        showNotification('لا يوجد كود لحفظه!', 'warning');
        return;
    }
    
    try {
        // إنشاء ملف للتحميل
        const blob = new Blob([code], { type: 'text/javascript' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        
        a.href = url;
        a.download = `js-code-${Date.now()}.js`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        // إظهار إشعار
        showNotification('تم حفظ الكود في ملف', 'success');
        
        // حفظ السجل
        JSPlayground.editorState.history.push({
            type: 'save_code',
            timestamp: new Date(),
            size: blob.size
        });
        
    } catch (error) {
        showNotification('حدث خطأ أثناء الحفظ', 'error');
        console.error('Save error:', error);
    }
}

// تحديث الحالة
function updateStatus(text, type = 'ready') {
    const statusElement = document.getElementById('status');
    if (!statusElement) return;
    
    // تحديث النص
    const textSpan = statusElement.querySelector('span:not(.status-indicator)');
    if (textSpan) {
        textSpan.textContent = text;
    }
    
    // تحديث المؤشر
    const indicator = statusElement.querySelector('.status-indicator');
    if (indicator) {
        indicator.className = 'status-indicator';
        
        switch(type) {
            case 'ready':
                indicator.classList.add('ready');
                indicator.style.backgroundColor = '#4CAF50'; // أخضر
                break;
            case 'running':
                indicator.classList.add('running');
                indicator.style.backgroundColor = '#FF9800'; // برتقالي
                indicator.style.animation = 'pulse 1s infinite';
                break;
            case 'error':
                indicator.classList.add('error');
                indicator.style.backgroundColor = '#F44336'; // أحمر
                break;
            case 'info':
                indicator.style.backgroundColor = '#2196F3'; // أزرق
                break;
        }
    }
}

// تحديث الإحصائيات
function updateStats() {
    // يمكنك تحديث أي عداد هنا
    console.log('الإحصائيات:', JSPlayground.config);
}

// إظهار إشعار
function showNotification(message, type = 'info') {
    // إنشاء عنصر الإشعار
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // الأيقونة المناسبة
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    else if (type === 'error') icon = '❌';
    else if (type === 'warning') icon = '⚠️';
    
    notification.innerHTML = `
        <div class="notification-icon">${icon}</div>
        <div class="notification-content">${message}</div>
        <button class="notification-close">&times;</button>
    `;
    
    // إضافة الإشعار إلى الصفحة
    const container = document.getElementById('notification-area') || createNotificationArea();
    container.appendChild(notification);
    
    // إضافة مستمع للإغلاق
    const closeBtn = notification.querySelector('.notification-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        });
    }
    
    // إزالة تلقائية بعد 5 ثوان
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// إنشاء منطقة الإشعارات إذا لم تكن موجودة
function createNotificationArea() {
    const area = document.createElement('div');
    area.id = 'notification-area';
    area.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 350px;
    `;
    document.body.appendChild(area);
    return area;
}

// إظهار رسالة الترحيب
function showWelcome() {
    const outputContent = document.getElementById('output-content');
    if (!outputContent) return;
    
    const welcomeHTML = `
        <div class="welcome-screen">
            <div class="welcome-icon">👨‍💻</div>
            <h2>مرحباً بك في مشغل JavaScript!</h2>
            <p class="welcome-text">مكانك الآمن لتعلم وتجربة JavaScript</p>
            
            <div class="welcome-features">
                <div class="feature">
                    <i class="fas fa-edit"></i>
                    <div>
                        <h4>محرر متقدم</h4>
                        <p>اكتب كود JavaScript مع دعم التنسيق</p>
                    </div>
                </div>
                <div class="feature">
                    <i class="fas fa-bolt"></i>
                    <div>
                        <h4>تشغيل فوري</h4>
                        <p>اضغط تشغيل أو Ctrl+Enter للتنفيذ</p>
                    </div>
                </div>
                <div class="feature">
                    <i class="fas fa-book"></i>
                    <div>
                        <h4>أمثلة تعليمية</h4>
                        <p>تعلم من خلال أمثلة جاهزة</p>
                    </div>
                </div>
            </div>
            
            <div class="quick-start">
                <h4>🚀 ابدأ بسرعة:</h4>
                <ol>
                    <li>اكتب كود JavaScript في المحرر</li>
                    <li>اضغط على زر <strong>تشغيل</strong></li>
                    <li>شاهد النتيجة في تبويب <strong>النتيجة</strong></li>
                    <li>جرب <strong>الأمثلة</strong> للتعلم السريع</li>
                </ol>
            </div>
            
            <div class="team-info">
                <p>تطوير: <strong>محمود أحمد سعيد</strong> | فكرة: <strong>سلمي سيد سخيل</strong></p>
            </div>
        </div>
    `;
    
    outputContent.innerHTML = welcomeHTML;
}

// حفظ في التخزين المحلي
function saveToStorage() {
    try {
        const data = {
            config: JSPlayground.config,
            editorState: JSPlayground.editorState,
            code: document.getElementById('code-input').value,
            currentTab: JSPlayground.config.currentTab
        };
        
        localStorage.setItem('jsPlaygroundData', JSON.stringify(data));
    } catch (error) {
        console.warn('فشل حفظ البيانات:', error);
    }
}

// استعادة من التخزين المحلي
function restoreFromStorage() {
    try {
        const saved = localStorage.getItem('jsPlaygroundData');
        if (!saved) return;
        
        const data = JSON.parse(saved);
        
        // استعادة الإعدادات
        if (data.config) {
            JSPlayground.config = { ...JSPlayground.config, ...data.config };
        }
        
        // استعادة حالة المحرر
        if (data.editorState) {
            JSPlayground.editorState = { ...JSPlayground.editorState, ...data.editorState };
        }
        
        // استعادة الكود
        if (data.code) {
            const codeInput = document.getElementById('code-input');
            if (codeInput) {
                codeInput.value = data.code;
            }
        }
        
        // استعادة التبويب الحالي
        if (data.currentTab) {
            setTimeout(() => {
                switchTab(data.currentTab);
            }, 100);
        }
        
        // تحديث الإحصائيات
        updateStats();
        
        console.log('تم استعادة البيانات من التخزين المحلي');
    } catch (error) {
        console.warn('فشل استعادة البيانات:', error);
    }
}

// إضافة أنيميشن للعناصر
function initAnimations() {
    // إضافة أنيميشن للعناصر عند ظهورها
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });
    
    // مراقبة العناصر
    document.querySelectorAll('.example-card, .feature, .stat-item').forEach(el => {
        observer.observe(el);
    });
}

// وظائف مساعدة
function formatCode() {
    const codeInput = document.getElementById('code-input');
    let code = codeInput.value;
    
    // تحسين التنسيق البسيط
    code = code
        .replace(/\t/g, '    ')  // استبدال tab بـ 4 مسافات
        .replace(/\n\s*\n\s*\n/g, '\n\n')  // إزالة الأسطر الفارغة الزائدة
        .replace(/\{\s*\n/g, '{\n')  // تحسين الأقواس
        .replace(/\n\s*\}/g, '\n}');
    
    codeInput.value = code;
    showNotification('تم تنسيق الكود', 'success');
}

function increaseFontSize() {
    if (JSPlayground.config.fontSize < 24) {
        JSPlayground.config.fontSize += 2;
        updateFontSize();
        showNotification(`حجم الخط: ${JSPlayground.config.fontSize}px`, 'info');
    }
}

function decreaseFontSize() {
    if (JSPlayground.config.fontSize > 12) {
        JSPlayground.config.fontSize -= 2;
        updateFontSize();
        showNotification(`حجم الخط: ${JSPlayground.config.fontSize}px`, 'info');
    }
}

function toggleAutoSave() {
    JSPlayground.config.autoSave = !JSPlayground.config.autoSave;
    const status = JSPlayground.config.autoSave ? 'مفعل' : 'معطل';
    showNotification(`الحفظ التلقائي ${status}`, JSPlayground.config.autoSave ? 'success' : 'warning');
}

// تهيئة الأنيميشن عند التحميل
window.addEventListener('load', function() {
    setTimeout(initAnimations, 1000);
    
    // إظهار رسالة ترحيب متأخرة
    setTimeout(() => {
        const codeInput = document.getElementById('code-input');
        if (codeInput && !codeInput.value.trim()) {
            showWelcome();
        }
    }, 500);
});