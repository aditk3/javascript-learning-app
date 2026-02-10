// Complete JavaScript Learning Content
const JAVASCRIPT_CONTENT = {
    introduction: {
        id: 'introduction',
        title: 'Introduction to JavaScript',
        subtitle: 'What is JavaScript and where does it run?',
        content: `
            <h2>What is JavaScript?</h2>
            <p>JavaScript is a dynamic, interpreted programming language created by Brendan Eich at Netscape in 1995. Originally designed to add interactivity to web pages, JavaScript has evolved into one of the most versatile languages in the world — running in browsers, servers (Node.js), mobile apps, desktop apps, and even IoT devices.</p>

            <h2>Key Features of JavaScript</h2>
            <ul>
                <li><strong>Dynamic Typing:</strong> Variables don't have fixed types. A variable can hold a number, then a string, then an object — the type is determined at runtime.</li>
                <li><strong>First-Class Functions:</strong> Functions are values. You can assign them to variables, pass them as arguments, and return them from other functions.</li>
                <li><strong>Prototype-Based OOP:</strong> JavaScript uses prototypes rather than classical inheritance, though ES6 added <code>class</code> syntax as syntactic sugar.</li>
                <li><strong>Single-Threaded with Event Loop:</strong> JavaScript runs on a single thread but handles concurrency through an event loop and asynchronous callbacks.</li>
                <li><strong>Ubiquitous:</strong> JavaScript is the only language that runs natively in every web browser. With Node.js it also runs on the server.</li>
            </ul>

            <h2>Where JavaScript Runs</h2>
            <ul>
                <li><strong>Browser:</strong> The <code>&lt;script&gt;</code> tag or linked <code>.js</code> files. Access to DOM, <code>window</code>, <code>document</code>, browser APIs.</li>
                <li><strong>Node.js:</strong> Server-side runtime. Access to file system, HTTP server, npm packages — no DOM or <code>window</code>.</li>
            </ul>

            <h2>Output: console.log</h2>
            <p>In Node.js and in browser developer tools, <code>console.log()</code> prints to the console. Use it to see the result of your code. Other useful methods include <code>console.error()</code>, <code>console.warn()</code>, and <code>console.table()</code> for tabular data.</p>
        `,
        examples: [
            {
                code: `const name = "Alice";\nconst age = 30;\nconsole.log(\`Hello, \${name}! You are \${age} years old.\`);\n\n// Expressions inside \${}\nconsole.log(\`Next year: \${age + 1}\`);\nconsole.log(\`Is adult: \${age >= 18 ? "Yes" : "No"}\`);\n\n// Multi-line\nconst html = \`\n<div class="card">\n    <h2>\${name}</h2>\n    <p>Age: \${age}</p>\n</div>\n\`;\nconsole.log(html);`,
                caption: 'Template literals make string building clean and readable.'
            }
        ],
        exercises: [
            {
                question: 'Print your name and your favorite number using two <code>console.log</code> calls.',
                starter: `// Your code here`,
                solution: `console.log("Alice");
console.log(7);`,
                explanation: 'Each <code>console.log()</code> prints its arguments and adds a newline. You can pass multiple arguments; they are separated by spaces.'
            },
            {
                question: 'Print the result of <code>10 * 5</code>.',
                starter: `// Your code here`,
                solution: `console.log(10 * 5);`,
                explanation: 'Expressions are evaluated before being passed to <code>console.log</code>. The output will be <code>50</code>.'
            },
            {
                question: 'Create two variables: <code>language</code> (set to "JavaScript") and <code>version</code> (set to "ES2024") using the <code>let</code> keyword. Print them in a single sentence using string concatenation.',
                starter: `// Create variables and print a sentence\n`,
                solution: `let language = "JavaScript";\nlet version = "ES2024";\nconsole.log(language + " latest standard is " + version);`,
                explanation: 'The <code>+</code> operator joins strings together. We use <code>let</code> because these values could change. Template literals (covered later) offer a cleaner alternative.'
            }
        ],
        quizzes: [
            { question: 'Where can JavaScript run?', options: ['Only in the browser', 'Only on the server', 'In browsers, Node.js, and other runtimes', 'Only in HTML files'], answer: 2, explanation: 'JavaScript runs in browsers, in Node.js on the server, and in many other environments.' },
            { question: 'Which method is commonly used to print output in JavaScript?', options: ['print()', 'System.out.println()', 'console.log()', 'echo'], answer: 2, explanation: 'console.log() is the standard way to print to the console in JavaScript.' },
            {
                question: 'What is the primary runtime for JavaScript in the browser?',
                options: ['JVM', 'V8 / Browser JS Engine', 'Python Interpreter', '.NET CLR'],
                answer: 1,
                explanation: 'Browsers include JavaScript engines (V8 in Chrome/Edge, SpiderMonkey in Firefox) that parse and execute JS code.'
            },
            {
                question: 'Which best describes JavaScript\'s typing system?',
                options: ['Statically typed', 'Dynamically typed', 'Untyped', 'Weakly generic'],
                answer: 1,
                explanation: 'JavaScript is dynamically typed — variable types are determined at runtime and can change during execution.'
            }
        ]
    },
    variables: {
        id: 'variables',
        title: 'Variables & Scope',
        subtitle: '<code>var</code>, <code>let</code>, <code>const</code> — declarations and scope rules',
        content: `
            <h2>Three Ways to Declare Variables</h2>
            <ul>
            <li><code>const</code>: Block-scoped; must be initialized; the binding cannot be reassigned. For objects/arrays, the reference is constant but properties/elements can change.</li>
            <li><code>let</code>: Block-scoped; can be reassigned; cannot be redeclared in the same scope.</li>
            <li><code>var</code>: Function-scoped; can be redeclared. Avoid in modern code.</li>
            </ul>
            <div class="info-box tip">
                <strong> Best Practice</strong>
                Start with <code>const</code>. Change to <code>let</code> only if you need to reassign. Never use <code>var</code> in new code.
            </div>

            <h2>Scope Types</h2>
            <ul>
                <li><strong>Global:</strong> Variables declared outside any function (or with <code>var</code> at top level) are global.</li>
                <li><strong>Function:</strong> Parameters and variables declared with <code>var</code>/<code>let</code>/<code>const</code> inside a function are visible only inside that function.</li>
                <li><strong>Block:</strong> <code>let</code> and <code>const</code> are block-scoped (inside <code>{ }</code>, <code>if</code>, <code>for</code>, etc.). <code>var</code> is not block-scoped.</li>
            </ul>

            <h2>The Temporal Dead Zone (TDZ)</h2>
            <p>Occurs when <code>let</code> and <code>const</code> are hoisted but not initialized. Accessing them before their declaration throws a <code>ReferenceError</code>.</p>
        `,
        examples: [
            {
                code: `let count = 0;
count = count + 1;

const name = "Alice";
name = "Bob";  // Error: Assignment to constant variable

const arr = [1, 2, 3];
arr.push(4);  // OK: mutating the array is allowed

// const with objects - reference is constant, not contents
const person = { name: "Alice" };
person.name = "Bob";  // OK! Mutating the object
// person = {};       // TypeError! Can't reassign`, caption: '<code>const</code> prevents reassignment of the binding, but object contents can still be modified.'
            },
            {
                code: `// Block scope vs function scope\nfunction scopeDemo() {\n    var x = 1;\n    let y = 2;\n\n    if (true) {\n        var x = 10;   // Same x! var is function-scoped\n        let y = 20;   // Different y! let is block-scoped\n        console.log("Inside block: x =", x, "y =", y); // 10 20\n    }\n\n    console.log("Outside block: x =", x, "y =", y); // 10 2\n}\nscopeDemo();`,
                caption: '<code>var</code> ignores block boundaries. <code>let</code> and <code>const</code> respect them.'
            }
        ],
        exercises: [
            {
                question: 'Declare a <code>const</code> variable <code>PI</code> with value <code>3.14159</code> and print it.',
                starter: `// Your code here`,
                solution: `const PI = 3.14159;
console.log(PI);`,
                explanation: '<code>const</code> creates a read-only binding. You must provide an initial value.'
            },
            {
                question: 'Use <code>let</code> to declare a variable <code>score</code>, set it to 10, then add 5 and print the result.',
                starter: `// Your code here`,
                solution: `let score = 10;
score = score + 5;
console.log(score);`,
                explanation: '<code>let</code> allows reassignment. After adding 5, score is 15.'
            },
            {
                question: 'Write a function <code>greet</code> that declares a variable <code>message = "Hello"</code> inside it and logs <code>message</code>. Call the function.',
                starter: `// Your code here`,
                solution: `function greet() {
  const message = "Hello";
  console.log(message);
}
greet();`,
                explanation: 'Variables declared inside a function are function-scoped and not visible outside.'
            },
            {
                question: 'Predict the output. What happens with <code>var</code> vs <code>let</code> inside a loop?',
                starter: `// What does this print?\nfor (var i = 0; i < 3; i++) {}\nconsole.log("var i after loop:", i);\n\nfor (let j = 0; j < 3; j++) {}\n// console.log("let j after loop:", j)  // (uncomment after running the code the first time);`,
                solution: `for (var i = 0; i < 3; i++) {}\nconsole.log("var i after loop:", i); // 3 (var leaks out)\n\nfor (let j = 0; j < 3; j++) {}\n// console.log("let j after loop:", j); // ReferenceError!\nconsole.log("let j is not accessible outside its block");`,
                explanation: '<code>var i</code> leaks out of the for-loop because var is function-scoped. <code>let j</code> stays contained within the block.'
            },
            {
                question: 'Fix this code: remove all <code>var</code>, use <code>const</code> or <code>let</code> as appropriate.',
                starter: `var name = "Alice";\nvar age = 25;\nage = age + 1;  // Birthday! Now she's 26
var greeting = "Hello, " + name + ", you are " + age + " years old!";\n\nvar items = [1, 2, 3];\nvar total = 0;\nfor (var i = 0; i < items.length; i++) {\n    total = total + items[i];\n}\n\nconsole.log(greeting);\nconsole.log("Total:", total);`,
                solution: `const name = "Alice";\nlet age = 25;\nage = age + 1;\nconst greeting = "Hello, " + name + ", you are " + age + " years old!";\n\nconst items = [1, 2, 3];\nlet total = 0;\nfor (let i = 0; i < items.length; i++) {\n    total = total + items[i];\n}\n\nconsole.log(greeting);\nconsole.log("Total:", total);`,
                explanation: 'Use <code>const</code> for values never reassigned (name, greeting, items reference). Use <code>let</code> for values that change (age, total, loop counter).'
            }
        ],
        quizzes: [
            { question: 'Which keyword creates a variable that cannot be reassigned?', options: ['var', 'let', 'const', 'fixed'], answer: 2, explanation: 'const creates a binding that cannot be reassigned. For objects/arrays, the reference is constant but contents can change.' },
            {
                question: 'What is the Temporal Dead Zone?',
                options: ['The time between page load and script execution', 'The period between hoisting and declaration of let/const', 'The delay before setTimeout fires', 'A deprecated JavaScript feature'],
                answer: 1,
                explanation: 'The TDZ is the region where a let/const variable has been hoisted but not yet initialized. Accessing it throws a ReferenceError.'
            }
        ]
    },
    control_flow: {
        id: 'control_flow',
        title: 'Control Flow',
        subtitle: 'Conditionals, loops, break and continue',
        content: `
            <h2>Conditionals: if / else / else if</h2>
            <p><code>if (condition) { }</code> runs the block when the condition is truthy. Use <code>else</code> for the alternative and <code>else if</code> for multiple branches.</p>

            <h2>switch</h2>
            <p><code>switch (value) { case x: ... break; default: ... }</code> compares <code>value</code> to each <code>case</code> (using strict equality). Without <code>break</code>, execution <strong>falls through</strong> to the next case.</p>

            <h2>Ternary Operator</h2>
            <p><code>condition ? valueIfTrue : valueIfFalse</code> — a shorthand for a simple if/else that returns a value.</p>

            <h2>Loops</h2>
            <ul>
                <li><code>for (init; condition; update) { }</code> — Classic loop with counter.</li>
                <li><code>while (condition) { }</code> — Repeats while condition is true.</li>
                <li><code>do { } while (condition)</code> — Runs at least once, then checks condition.</li>
                <li><code>for (const item of iterable)</code> — Iterates over values (arrays, strings, etc.).</li>
                <li><code>for (const key in object)</code> — Iterates over enumerable property keys (use with objects; prefer <code>for...of</code> with arrays).</li>
            </ul>

            <h2>break and continue</h2>
            <p><code>break</code> exits the loop entirely. <code>continue</code> skips the rest of the current iteration and moves to the next.</p>
        `,
        examples: [
            {
                code: `const score = 85;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("C or below");
}

const grade = score >= 60 ? "Pass" : "Fail";
console.log(grade);`,
                caption: '<code>if/else</code> and ternary for simple branching.'
            },
            {
                code: `const day = 3;
switch (day) {
    case 1: console.log("Mon"); break;
    case 2: console.log("Tue"); break;
    case 3: console.log("Wed"); break;
    default: console.log("Other");
}

// Fall-through (no break)
switch (day) {
    case 1:
    case 2:
    case 3: console.log("Weekday"); break;
    default: console.log("Other");
}`,
                caption: '<code>switch</code> with <code>break</code> and fall-through.'
            },
            {
                code: `const arr = [10, 20, 30];
let sum = 0;
for (const num of arr) {
    sum += num;
}
console.log(sum); // 60

const obj = { a: 1, b: 2 };
for (const key in obj) {
    console.log(key, obj[key]);
}`,
                caption: '<code>for...of</code> over array values; <code>for...in</code> over object keys.'
            }
        ],
        exercises: [
            {
                question: 'Use a classic <code>for</code> loop to sum the numbers in <code>const nums = [1, 2, 3, 4, 5]</code> and print the result.',
                starter: `const nums = [1, 2, 3, 4, 5];
// Your code here`,
                solution: `let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
console.log(sum);

// or using for...of
const nums = [1, 2, 3, 4, 5];
let sum = 0;
for (const num of nums) {
    sum += num;
}
console.log(sum);`,
                explanation: 'Classic <code>for</code> loop with index; you can also use <code>for...of</code> and <code>sum += num</code>.'
            },
            {
                question: 'Use <code>for...of</code> to loop over <code>["a", "b", "c"]</code> and log each character.',
                starter: `const letters = ["a", "b", "c"];
// Your code here`,
                solution: `for (const char of letters) {
    console.log(char);
}`,
                explanation: '<code>for...of</code> gives you each value directly.'
            },
            {
                question: 'Use <code>switch</code> on a variable <code>fruit = "apple"</code> to log "red" for apple, "yellow" for banana, "orange" for orange, and "unknown" for default.',
                starter: `const fruit = "banana";
// Your code here`,
                solution: `switch (fruit) {
    case "apple": console.log("red"); break;
    case "banana": console.log("yellow"); break;
    case "orange": console.log("orange"); break;
    default: console.log("unknown");
}`,
                explanation: 'Each case ends with break to avoid fall-through.'
            }
        ],
        quizzes: [
            { question: 'What does <code>continue</code> do inside a loop?', options: ['Exits the loop', 'Skips the rest of the current iteration and continues to the next', 'Restarts the loop', 'Pauses the loop'], answer: 1, explanation: 'continue skips the remainder of the current iteration and proceeds to the next one.' },
            { question: 'In a <code>switch</code>, what happens if you omit <code>break</code> after a case?', options: ['The <code>switch</code> throws an error', 'Execution falls through to the next case', 'The <code>default</code> case runs', 'Nothing'], answer: 1, explanation: 'Without break, execution falls through to the next case (and so on until a break or the end).' },
            { question: 'Which loop iterates over the values of an array (not indexes)?', options: ['<code>for (let i = 0; i < arr.length; i++)</code>', '<code>for (const x of arr)</code>', '<code>for (const x in arr)</code>', '<code>while (arr.length)</code>'], answer: 1, explanation: 'for...of gives you each value; for...in gives keys (and is for objects).' }
        ]
    },
    datatypes: {
        id: 'datatypes',
        title: 'Data Types',
        subtitle: 'Primitives and reference types',
        content: `
            <h2>Primitive Types</h2>
            <p>JavaScript has <strong>7 primitive types</strong>. Primitives are immutable and compared by value.</p>
            <ul>
                <li><code>number</code> — Integers and floating-point (64-bit IEEE 754). Examples: <code>42</code>, <code>3.14</code>, <code>Infinity</code>, <code>NaN</code></li>
                <li><code>string</code> — Text, enclosed in <code>'single'</code>, <code>"double"</code>, or <code>\`backtick\`</code> quotes</li>
                <li><code>boolean</code> — <code>true</code> or <code>false</code></li>
                <li><code>undefined</code> — A variable declared but not assigned a value</li>
                <li><code>null</code> — An intentional absence of any value</li>
                <li><code>symbol</code> — A unique, immutable identifier (ES6)</li>
                <li><code>bigint</code> — Arbitrary-precision integers: <code>9007199254740991n</code></li>
            </ul>

            <h2>Reference Types</h2>
            <p>Everything that isn't a primitive is an <strong>object</strong>. Objects are stored by reference. Variables hold a reference to the value. Comparison uses reference equality (<code>===</code> for same reference).</p>
            <ul>
                <li><code>Object</code> — key-value pairs: <code>{ name: "Alice", age: 30 }</code></li>
                <li><code>Array</code> — ordered list: <code>[1, 2, 3]</code></li>
                <li><code>Function</code> — callable object</li>
                <li><code>Date</code>, <code>RegExp</code>, <code>Map</code>, <code>Set</code>, etc.</li>
            </ul>
            
            <h2>typeof</h2>
            <p><code>typeof x</code> returns a string describing the type: <code>"number"</code>, <code>"string"</code>, <code>"boolean"</code>, <code>"undefined"</code>, <code>"object"</code> (for null and objects), <code>"function"</code> (for functions).</p>
            <p>Be aware of the famous quirk: <code>typeof null === "object"</code>.</p>

            <h2>Explicit Type Conversion</h2>
            <p>Convert between types with <code>String(value)</code>, <code>Number(value)</code>, and <code>Boolean(value)</code>. These are constructor calls used as functions and give predictable results (e.g. <code>Number("42")</code> → 42, <code>String(42)</code> → <code>"42"</code>).</p>

            <h2>parseInt and Radix</h2>
            <p><code>parseInt(string, radix)</code> parses an integer. The <strong>radix</strong> (second argument) is the base: <code>10</code> for decimal, <code>2</code> for binary, <code>16</code> for hex. Always pass the radix to avoid surprises (e.g. <code>parseInt("08")</code> in old engines could be 8 or 0). <code>parseInt("11", 2)</code> → 3.</p>

            <h2>Type Coercion</h2>
            <p>JavaScript automatically converts types in certain contexts. This is called <strong>type coercion</strong>.</p>
            <div class="info-box warning">
                <strong>⚠️ Note: <code>==</code> vs <code>===</code></strong>
                <code>==</code> performs type coercion before comparing. <code>===</code> (strict equality) does not. Always prefer <code>===</code>.
            </div>
        `,
        examples: [
            {
                code: `// Primitive types\nconsole.log(typeof 42);          // "number"\nconsole.log(typeof "hello");     // "string"\nconsole.log(typeof true);        // "boolean"\nconsole.log(typeof undefined);   // "undefined"\nconsole.log(typeof null);        // "object" (historical bug!)\nconsole.log(typeof Symbol());    // "symbol"\nconsole.log(typeof 42n);         // "bigint"`,
                caption: '<code>typeof</code> returns a string indicating the type of the operand.'
            },
            {
                code: `// Type coercion examples\nconsole.log("5" + 3);       // "53"  (number coerced to string)\nconsole.log("5" - 3);       // 2     (string coerced to number)\nconsole.log(true + 1);      // 2     (true becomes 1)\nconsole.log("" == false);   // true  (both coerce to 0)\nconsole.log("" === false);  // false (strict: no coercion)\nconsole.log(null == undefined);  // true\nconsole.log(null === undefined); // false`,
                caption: 'Type coercion is the source of many JavaScript surprises. Use <code>===</code> to avoid them.'
            },
            {
                code: `console.log(String(42));      // "42"
console.log(Number("3.14"));  // 3.14
console.log(Boolean(1));       // true
console.log(Boolean(0));      // false

console.log(parseInt("10", 10));  // 10 (decimal)
console.log(parseInt("10", 2));   // 2 (binary)
console.log(parseInt("11", 2));   // 3`,
                caption: '<code>String()</code>, <code>Number()</code>, <code>Boolean()</code> for explicit conversion; <code>parseInt</code> with radix.'
            }
        ],
        exercises: [
            {
                question: 'Declare variables: a number <code>age</code> (25), a string <code>city</code> ("NYC"), and a boolean <code>active</code> (true). Print each with <code>typeof</code>.',
                starter: `// Your code here`,
                solution: `const age = 25;
const city = "NYC";
const active = true;
console.log(typeof age, typeof city, typeof active);`,
                explanation: 'typeof returns a string. You can pass multiple arguments to console.log.'
            },
            {
                question: 'Predict and log the <code>typeof</code> each variable. Run to check your predictions.',
                starter: `let a = 42;\nlet b = "hello";\nlet c = true;\nlet d = null;\nlet e = undefined;\nlet f = [1, 2, 3];\nlet g = { name: "JS" };\n\n// Log typeof each variable\nconsole.log(typeof a);\n// Add the rest...`,
                solution: `let a = 42;\nlet b = "hello";\nlet c = true;\nlet d = null;\nlet e = undefined;\nlet f = [1, 2, 3];\nlet g = { name: "JS" };\n\nconsole.log(typeof a);  // "number"\nconsole.log(typeof b);  // "string"\nconsole.log(typeof c);  // "boolean"\nconsole.log(typeof d);  // "object" (null quirk!)\nconsole.log(typeof e);  // "undefined"\nconsole.log(typeof f);  // "object" (arrays are objects)\nconsole.log(typeof g);  // "object"`,
                explanation: 'Key surprises: <code>typeof null</code> is <code>"object"</code> (a legacy bug), and arrays are also <code>"object"</code>. To check for arrays, use <code>Array.isArray()</code>.'
            },
            {
                question: 'Show at least 3 cases where <code>==</code> and <code>===</code> give different results.',
                starter: `// Compare == and === for different value pairs\n`,
                solution: `console.log(0 == false);         // true\nconsole.log(0 === false);        // false\n\nconsole.log("" == false);        // true\nconsole.log("" === false);       // false\n\nconsole.log("1" == 1);           // true\nconsole.log("1" === 1);          // false\n\nconsole.log(null == undefined);  // true\nconsole.log(null === undefined); // false`,
                explanation: '<code>==</code> tries to convert both sides to the same type before comparing. <code>===</code> checks type and value without conversion. Always prefer <code>===</code>.'
            },
            {
                question: 'Convert the number <code>100</code> to a string and the string <code>"50"</code> to a number. Log both results.',
                starter: `// Your code here`,
                solution: `console.log(String(100));\nconsole.log(Number("50"));`,
                explanation: '<code>String()</code> and <code>Number()</code> are explicit conversion functions.'
            },
            {
                question: 'Use <code>parseInt</code> to parse the <b>binary</b> string <code>"1010"</code> and log the decimal result.',
                starter: `// Your code here`,
                solution: `console.log(parseInt("1010", 2));  // 10`,
                explanation: 'Radix 2 means the string is in binary; <code>"1010"</code> in binary is <code>10</code> in decimal.'
            }
        ],
        quizzes: [
            {
                question: 'What does <code>typeof null</code> return?',
                options: ['"null"', '"undefined"', '"object"', '"boolean"'],
                answer: 2,
                explanation: 'This is a well-known JavaScript bug from the original implementation. typeof null returns "object" even though null is a primitive.'
            },
            {
                question: 'What does <code>parseInt("11", 2)</code> return?',
                options: ['11', '3', '2', 'NaN'],
                answer: 1,
                explanation: 'Radix 2 means binary; 11 in binary is 3 in decimal.'
            }
        ]
    },
    operators_expressions: {
        id: 'operators_expressions',
        title: 'Operators & Expressions',
        subtitle: 'Arithmetic, comparison, logical, nullish coalescing, optional chaining, precedence',
        content: `
            <h2>Arithmetic and Assignment</h2>
            <p>Arithmetic: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>, <code>**</code>. Assignment: <code>=</code>, <code>+=</code>, <code>-=</code>, etc.</p>

            <h2>Comparison and Logical</h2>
            <p>Comparison: <code>==</code>, <code>===</code>, <code>!=</code>, <code>!==</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>. Prefer <code>===</code> for strict equality. Logical: <code>&amp;&amp;</code>, <code>||</code>, <code>!</code>.</p>

            <h2>Nullish Coalescing (<code>??</code>)</h2>
            <p><code>value ?? fallback</code> returns <code>fallback</code> only when <code>value</code> is <code>null</code> or <code>undefined</code>. Unlike <code>||</code>, it does not treat <code>0</code> or <code>""</code> as "missing".</p>

            <h2>Optional Chaining (<code>?.</code>)</h2>
            <p><code>obj?.prop</code> or <code>obj?.method()</code> — if <code>obj</code> is <code>null</code> or <code>undefined</code>, the expression short-circuits to <code>undefined</code> instead of throwing.</p>

            <h2>typeof and instanceof</h2>
            <p><code>typeof x</code> returns a string (e.g. <code>"number"</code>, <code>"object"</code>). <code>value instanceof Constructor</code> checks whether <code>value</code> was created by <code>Constructor</code> (or its prototype chain).</p>

            <h2>Operator Precedence</h2>
            <p>Operators are evaluated in a fixed order. Higher precedence: <code>!</code>, <code>typeof</code>, <code>*</code>, <code>/</code>, <code>+</code>, <code>-</code>, <code>&lt;</code>, <code>===</code>, <code>&amp;&amp;</code>, <code>||</code>, <code>??</code>, then <code>=</code>. Use parentheses to make intent clear.</p>
        `,
        examples: [
            {
                code: `const n = null;
const z = 0;
console.log(n ?? 10);   // 10 (null -> fallback)
console.log(z ?? 10);   // 0 (0 is not null/undefined)
console.log(z || 10);   // 10 (0 is falsy for ||)`,
                caption: '<code>??</code> only falls back for null or undefined.'
            },
            {
                code: `const user = { name: "Alice", address: { city: "NYC" } };
console.log(user?.address?.city);  // "NYC"

const missing = null;
console.log(missing?.address?.city);  // undefined (no error)`,
                caption: 'Optional chaining avoids errors on missing nested properties.'
            },
            {
                code: `console.log(typeof 42);        // "number"
console.log(typeof {});        // "object"
const d = new Date();
console.log(d instanceof Date);  // true`,
                caption: '<code>typeof</code> and <code>instanceof</code> for type checks.'
            }
        ],
        exercises: [
            {
                question: 'Use <code>??</code> to provide a default of <code>100</code> when <code>count</code> is <code>null</code> or <code>undefined</code>. Log the result for <code>count = null</code> and <code>count = 0</code>.',
                starter: `let count = null;
// Your code here
count = 0;
// Your code here`,
                solution: `let count = null;
console.log(count ?? 100);  // 100
count = 0;
console.log(count ?? 100);  // 0 (0 is kept)`,
                explanation: '<code>??</code> only replaces null/undefined; 0 is a valid value.'
            },
            {
                question: 'Given <code>const data = { user: { name: "Bob" } }</code>, safely log <code>data.user.profile.avatar</code> using optional chaining (it may be missing).',
                starter: `const data = { user: { name: "Bob" } };
// Your code here`,
                solution: `const data = { user: { name: "Bob" } };
console.log(data?.user?.profile?.avatar);  // undefined`,
                explanation: '<code>?.</code> short-circuits to undefined when any part of the chain is null/undefined.'
            }
        ],
        quizzes: [
            { question: 'What does <code>value ?? "default"</code> return when value is <code>0</code>?', options: ['"default"', '0', 'undefined', 'null'], answer: 1, explanation: '?? only uses the default for null or undefined; 0 is kept.' },
            { question: 'What does <code>obj?.prop</code> evaluate to if obj is null?', options: ['Throws an error', 'null', 'undefined', 'false'], answer: 2, explanation: 'Optional chaining returns undefined when the left side is null or undefined.' },
            { question: 'Which has higher precedence: <code>&&</code> or <code>||</code>?', options: ['They are equal', '&&', '||', 'Depends on context'], answer: 1, explanation: '&& has higher precedence than ||, so a || b && c is parsed as a || (b && c).' }
        ]
    },
    arrays: {
        id: 'arrays',
        title: 'Arrays',
        subtitle: 'Creation, methods, and manipulation',
        content: `
            <h2>What are Arrays?</h2>
            <p>Arrays are ordered, zero-indexed collections that can hold any type of value. JavaScript arrays are dynamic — they grow and shrink automatically.</p>
            
            <h2>Creating Arrays</h2>
            <ul>
                <li><code>const arr = [1, 2, 3];</code> — Array literal (preferred)</li>
                <li><code>const arr = new Array(3);</code> — Creates array with 3 empty slots</li>
                <li><code>const arr = Array.from("hello");</code> — Creates from iterable</li>
            </ul>
            <p>Arrays are zero-indexed and have a <code>length</code> property.</p>

            <h2>Common Methods</h2>
            <ul>
                <li><code>push</code>, <code>pop</code>, <code>shift</code>, <code>unshift</code> — add/remove at end/start</li>
                <li><code>slice(start, end)</code> — copy portion (does not mutate)</li>
                <li><code>splice(start, deleteCount, ...items)</code> — remove/insert in place</li>
                <li><code>map</code>, <code>filter</code>, <code>reduce</code> — transform and aggregate</li>
                <li><code>forEach(callback)</code> — run a function for each element (no new array)</li>
                <li><code>find(predicate)</code> — first element that passes, or <code>undefined</code></li>
                <li><code>some(predicate)</code>, <code>every(predicate)</code> — boolean: any/all pass</li>
                <li><code>sort(compareFn)</code> — sort in place; use <code>(a, b) => a - b</code> for numbers</li>
                <li><code>join(separator)</code> — join elements into a string (does not mutate)</li>
                <li><code>indexOf</code>, <code>includes</code> — search</li>
            </ul>

            <h2>Mutating vs Non-Mutating</h2>
            <p><strong>Mutating</strong> (change the array in place): <code>push</code>, <code>pop</code>, <code>shift</code>, <code>unshift</code>, <code>splice</code>, <code>sort</code>, <code>reverse</code>.</p>
            <p><strong>Non-mutating</strong> (return a new array or value): <code>slice</code>, <code>map</code>, <code>filter</code>, <code>reduce</code>, <code>concat</code>, <code>join</code> (returns string). <code>find</code>, <code>some</code>, <code>every</code> return a single value and do not mutate.</p>
            <div class="info-box tip">
                <strong>Rule of Thumb</strong>
                Prefer non-mutating methods when you need to keep the original array. Use a comparator with <code>sort</code> (e.g. <code>(a, b) => a - b</code>) for numbers — without it, sort converts to strings and orders lexicographically.
            </div>
        `,
        examples: [
            {
                code: `// Creating and modifying arrays\nconst fruits = ["apple", "banana", "cherry"];\nconsole.log(fruits[0]);          // "apple"\nconsole.log(fruits.length);      // 3\n\nfruits.push("date");             // Add to end\nfruits.unshift("avocado");       // Add to beginning\nconsole.log(fruits);\n\nconst last = fruits.pop();       // Remove from end\nconsole.log(last);               // "date"\nconsole.log(fruits.includes("banana")); // true`,
                caption: '<code>push</code>/<code>pop</code> work at the end; <code>unshift</code>/<code>shift</code> work at the beginning.'
            },
            {
                code: `// map, filter, reduce — the big three\nconst numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\nconst doubled = numbers.map(n => n * 2);\nconsole.log("Doubled:", doubled);\n\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log("Evens:", evens);\n\nconst sum = numbers.reduce((acc, n) => acc + n, 0);\nconsole.log("Sum:", sum); // 55\n\n// Chaining\nconst result = numbers\n    .filter(n => n % 2 === 0)\n    .map(n => n * 2)\n    .reduce((acc, n) => acc + n, 0);\nconsole.log("Doubled evens sum:", result); // 60`,
                caption: '<code>map</code>/<code>filter</code>/<code>reduce</code> are the workhorses of functional-style JavaScript.'
            },
            {
                code: `const arr = [5, 2, 8, 1, 9];\narr.forEach((n, i) => console.log(\`[\${i}]=\${n}\`));\n\nconst firstBig = arr.find(n => n > 5);\nconsole.log(firstBig);  // 8\n\nconsole.log(arr.some(n => n > 10));   // false\nconsole.log(arr.every(n => n >= 1));  // true`,
                caption: '<code>forEach</code>, <code>find</code>, <code>some</code>, <code>every</code> — iteration and boolean checks.'
            },
            {
                code: `const nums = [3, 1, 4, 1, 5];\nnums.sort((a, b) => a - b);  // ascending; without comparator sorts as strings!\nconsole.log(nums);  // [1, 1, 3, 4, 5]\n\nconst words = ["apple", "banana", "cherry"];\nconsole.log(words.join(", "));  // "apple, banana, cherry"`,
                caption: '<code>sort</code> with comparator for numbers; <code>join</code> to build a string.'
            }
        ],
        exercises: [
            {
                question: 'Create an array of numbers 1, 2, 3, 4, 5. Print its length and the first element.',
                starter: `// Your code here`,
                solution: `const nums = [1, 2, 3, 4, 5];
console.log(nums.length, nums[0]);`,
                explanation: '<code>length</code> is a property; first element is at index 0.'
            },
            {
                question: 'Given <code>const arr = [3, 1, 4, 1, 5]</code>, use <code>filter</code> to create a new array of elements greater than 2 and print it.',
                starter: `const arr = [3, 1, 4, 1, 5];
// Your code here`,
                solution: `const arr = [3, 1, 4, 1, 5];
const result = arr.filter(x => x > 2);
console.log(result);`,
                explanation: '<code>filter</code> returns a new array with elements that pass the predicate function.'
            },
            {
                question: 'Given an array of numbers, use <code>filter</code> to get only numbers greater than 5, then use <code>map</code> to square each result.',
                starter: `const numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];\n\n// Filter numbers > 5, then square them\n`,
                solution: `const numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];\n\nconst result = numbers\n    .filter(n => n > 5)\n    .map(n => n * n);\n\nconsole.log(result); // [49, 81, 36, 64, 100]`,
                explanation: '<code>filter</code> keeps elements where the callback returns true. <code>map</code> transforms each element. Chaining creates a pipeline.'
            },
            {
                question: 'Use <code>find</code> on <code>const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]</code> to get the user with <code>id === 2</code> and log their name.',
                starter: `const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
// Your code here`,
                solution: `const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const user = users.find(u => u.id === 2);
console.log(user?.name);`,
                explanation: '<code>find</code> returns the first element that passes the predicate, or undefined.'
            },
            {
                question: 'Sort <code>const nums = [40, 100, 1, 5, 25]</code> numerically in ascending order using <code>sort</code> with a comparator, then log the array.',
                starter: `const nums = [40, 100, 1, 5, 25];
// Your code here`,
                solution: `const nums = [40, 100, 1, 5, 25];
nums.sort((a, b) => a - b);
console.log(nums);`,
                explanation: 'Comparator (a, b) => a - b sorts numbers ascending; without it, sort treats elements as strings.'
            },
            {
                question: 'Given <code>const parts = ["hello", "world", "js"]</code>, use <code>join</code> to create the string <code>"hello-world-js"</code> and log it.',
                starter: `const parts = ["hello", "world", "js"];
// Your code here`,
                solution: `const parts = ["hello", "world", "js"];
console.log(parts.join("-"));`,
                explanation: 'join(separator) concatenates array elements with the separator between them.'
            }
        ],
        quizzes: [
            { question: 'Which of these array methods mutates the array?', options: ['<code>slice</code>', '<code>map</code>', '<code>sort</code>', '<code>filter</code>'], answer: 2, explanation: 'sort mutates the array in place. slice, map, and filter return new arrays.' },
            { question: 'What does <code>sort()</code> do without a comparator function?', options: ['Sorts numbers numerically', 'Converts elements to strings and sorts lexicographically', 'Throws an error', 'Does nothing'], answer: 1, explanation: 'Without a comparator, sort converts elements to strings and compares them, so [10, 2, 1] becomes [1, 10, 2].' },
            { question: 'What does <code>find()</code> return when no element passes the predicate?', options: ['null', 'undefined', '-1', 'The last element'], answer: 1, explanation: 'find returns undefined when no element matches.' }
        ]
    },
    objects: {
        id: 'objects',
        title: 'Objects',
        subtitle: 'Creation, properties, methods, and iteration',
        content: `
            <h2>Object Creation</h2>
            <p>Literal (preferred): <code>const obj = { name: "Alice", age: 30 }</code>. Or <code>new Object()</code>.</p>

            <h2>Property Access: Dot vs Bracket</h2>
            <p><code>obj.name</code> — dot notation; property name must be a valid identifier.</p>
            <p><code>obj["name"]</code> or <code>obj[variable]</code> — bracket notation; use for dynamic keys or names that are not valid identifiers.</p>

            <h2>Adding and Removing Properties</h2>
            <p>Add: <code>obj.newProp = value</code> or <code>obj[key] = value</code>.</p>
            <p>Remove: <code>delete obj.prop</code>.</p>

            <h2>Object.keys / values / entries</h2>
            <p><code>Object.keys(obj)</code> — array of own enumerable keys.</p>
            <p><code>Object.values(obj)</code> — array of values.</p>
            <p><code>Object.entries(obj)</code> — array of <code>[key, value]</code> pairs.</p>

            <h2>Method Shorthand</h2>
            <p>In object literals: <code>{ greet() { return "Hi"; } }</code> is shorthand for <code>{ greet: function() { return "Hi"; } }</code>.</p>

            <h2>Iterating Over Objects</h2>
            <p>Use <code>for (const key in obj)</code> for keys (beware of inherited props), or iterate <code>Object.keys(obj)</code>, <code>Object.entries(obj)</code>, etc.</p>

            <h2>Optional Chaining (?.)</h2>
            <p>The <code>?.</code> operator accesses an object's property or calls a function. If the object accessed or function called is <code>undefined</code> or <code>null</code>, the expression short circuits and evaluates to <code>undefined</code> instead of throwing an error.</p>
        `,
        examples: [
            {
                code: `const user = { name: "Alice", age: 30 };
console.log(user.name);      // dot
const key = "age";
console.log(user[key]);      // bracket for dynamic key

user.email = "alice@example.com";
delete user.age;
console.log(user);`,
                caption: 'Dot vs bracket access; adding and removing properties.'
            },
            {
                code: `const config = { host: "localhost", port: 3000 };
console.log(Object.keys(config));    // ["host", "port"]
console.log(Object.values(config));  // ["localhost", 3000]
console.log(Object.entries(config)); // [["host","localhost"], ["port",3000]]

for (const [k, v] of Object.entries(config)) {
    console.log(k, v);
}`,
                caption: 'Object.keys, values, entries and iteration.'
            },
            {
                code: `const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName); // undefined

console.log(adventurer.someNonExistentMethod?.()); // undefined`,
                caption: 'Optional chaining (<code>?.</code>) for safe property access.'
            }
        ],
        exercises: [
            {
                question: 'Create an object <code>book</code> with <code>title</code> and <code>year</code>. Add a property <code>author</code> afterward. Log the object after each step.',
                starter: `// Your code here`,
                solution: `const book = { title: "JS Guide", year: 2024 };
console.log(book);
book.author = "Alice";
console.log(book);`,
                explanation: 'Add properties with dot or bracket notation after creation.'
            },
            {
                question: 'Given <code>const o = { a: 1, b: 2, c: 3 }</code>, log each key-value pair.',
                starter: `const o = { a: 1, b: 2, c: 3 };
// Your code here`,
                solution: `const o = { a: 1, b: 2, c: 3 };
for (const [key, value] of Object.entries(o)) {
    console.log(key, value);
}`,
                explanation: '<code>Object.entries</code> returns <code>[key, value]</code> pairs; destructure in the loop.'
            },
            {
                question: 'Use optional chaining to safely access <code>user.profile.details.age</code> from <code>user</code>. Log the result.',
                starter: `const user = { name: "Bob" }; // no profile
// Your code here`,
                solution: `const user = { name: "Bob" };
console.log(user.profile?.details?.age);`,
                explanation: '<code>?.</code> stops and returns undefined if the property before it is null/undefined.'
            }
        ],
        quizzes: [
            { question: 'When must you use bracket notation instead of dot notation?', options: ['Always', 'When the property name is in a variable or not a valid identifier', 'Only for numbers', 'Never'], answer: 1, explanation: 'Bracket notation is required for dynamic keys (variables) or keys that are not valid identifiers.' },
            { question: 'What does <code>Object.keys(obj)</code> return?', options: ['An object', 'An array of the object\'s own enumerable property names', 'An array of values', 'A string'], answer: 1, explanation: 'Object.keys returns an array of the object\'s own enumerable keys.' },
            { question: 'What does <code>a?.b</code> return if <code>a</code> is null?', options: ['Throws an error', 'null', 'undefined', 'false'], answer: 2, explanation: 'Optional chaining returns undefined if the left-hand side is null or undefined.' }
        ]
    },
    strings: {
        id: 'strings',
        title: 'Strings',
        subtitle: 'String methods: slice, split, includes, trim, and more',
        content: `
            <h2>String Methods</h2>
            <ul>
                <li><code>slice(start, end)</code> — Extract substring (end optional). Negative indexes count from end.</li>
                <li><code>substring(start, end)</code> — Similar to slice; negative indexes treated as 0.</li>
                <li><code>split(separator)</code> — Split into array of substrings.</li>
                <li><code>includes(substr)</code>, <code>startsWith(substr)</code>, <code>endsWith(substr)</code> — Boolean checks.</li>
                <li><code>toLowerCase()</code>, <code>toUpperCase()</code> — Return new string in that case.</li>
                <li><code>trim()</code> — Remove whitespace from both ends.</li>
            </ul>
            <p>Strings are immutable; these methods return new strings.</p>

            <h2>slice() vs substring()</h2>
            <p><code>slice()</code> works like <code>substring()</code> with a few different behaviors.</p>
            <p><strong>Syntax:</strong> <code>string.slice(start, stop)</code> / <code>string.substring(start, stop)</code></p>

            <h3>Common Behavior</h3>
            <ul>
                <li>If <code>start === stop</code>: returns an empty string.</li>
                <li>If <code>stop</code> is omitted: extracts characters to the end of the string.</li>
                <li>If either argument > string length: string length is used instead.</li>
            </ul>

            <h3>Distinctions</h3>
            <div class="comparison-table">
                <div class="comparison-header">
                    <div>Condition</div>
                    <div>substring()</div>
                    <div>slice()</div>
                </div>
                <div class="comparison-row">
                    <div><code>start > stop</code></div>
                    <div>Swaps arguments (e.g. <code>(4, 2)</code> becomes <code>(2, 4)</code>)</div>
                    <div>Returns empty string <code>""</code></div>
                </div>
                <div class="comparison-row">
                    <div>Negative / NaN argument</div>
                    <div>Treated as 0</div>
                    <div>
                        <strong>Start:</strong> Sets char from end of string.<br>
                        <strong>Stop:</strong> Sets to <code>Math.max(0, length + stop)</code>.
                    </div>
                </div>
            </div>
        `,
        examples: [
            {
                code: `const s = "Hello, World!";
console.log(s.slice(0, 5));          // "Hello"
console.log(s.slice(-6));            // "World!"
console.log(s.includes("World"));    // true
console.log(s.startsWith("Hello"));  // true
console.log(s.toLowerCase());        // "hello, world!"
console.log("  hi  ".trim());        // "hi"`,
                caption: '<code>slice</code>, <code>includes</code>, <code>startsWith</code>, <code>toLowerCase</code>, <code>trim</code>.'
            },
            {
                code: `const str = "Mozilla";
console.log(str.substring(5, 2)); // "zil" (swaps to 2, 5)
console.log(str.slice(5, 2));     // "" (empty, start > stop)

console.log(str.substring(-5, 2)); // "Mo" (0, 2)
console.log(str.slice(-5, 2));     // "" (slice(-5) is "zilla", stop at 2 is before start)
console.log(str.slice(-5));        // "zilla"`,
                caption: '<code>slice</code> vs <code>substring</code> distinct behaviors.'
            },
            {
                code: `const csv = "a,b,c";
const parts = csv.split(",");
console.log(parts);            // ["a", "b", "c"]
console.log(parts.join("-"));  // "a-b-c"`,
                caption: '<code>split</code> and <code>join</code> for parsing and building strings.'
            }
        ],
        exercises: [
            {
                question: 'Given <code>const text = "  JavaScript  "</code>, use <code>trim</code> and <code>toLowerCase</code> and log the result.',
                starter: `const text = "  JavaScript  ";
// Your code here`,
                solution: `const text = "  JavaScript  ";
console.log(text.trim().toLowerCase());`,
                explanation: 'Methods can be chained; trim then toLowerCase.'
            },
            {
                question: 'Predict the output of <code>"Text".slice(3, 1)</code> vs <code>"Text".substring(3, 1)</code>. Log them.',
                starter: `const s = "Text";
// Your code here`,
                solution: `const s = "Text";
console.log(s.slice(3, 1));      // ""
console.log(s.substring(3, 1));  // "ex" (swaps to 1, 3)`,
                explanation: '<code>slice</code> returns empty if start > stop. <code>substring</code> swaps arguments.'
            },
            {
                question: 'Split <code>const line = "one-two-three"</code> by <code>"-"</code> and then join the parts with <code>" "</code>. Log the result.',
                starter: `const line = "one-two-three";
// Your code here`,
                solution: `const line = "one-two-three";
console.log(line.split("-").join(" "));`,
                explanation: 'split returns an array; join builds a string from the array.'
            }
        ],
        quizzes: [
            { question: 'What does <code>"hello".toUpperCase()</code> return?', options: ['"hello"', '"HELLO"', 'undefined', 'mutates the string'], answer: 1, explanation: 'toUpperCase returns a new string in uppercase; strings are immutable.' },
            { question: 'What does <code>"a,b,c".split(",")</code> return?', options: ['A string', 'An array: ["a", "b", "c"]', 'A number', 'null'], answer: 1, explanation: 'split returns an array of substrings.' }
        ]
    },
    numbers_math: {
        id: 'numbers_math',
        title: 'Numbers & Math',
        subtitle: 'Number(), parseInt, parseFloat, NaN, Math, floating-point',
        content: `
            <h2>Number() and Parsing</h2>
            <p><code>Number(value)</code> converts to number</p>
            <p><code>parseInt(string, radix)</code> parses an integer (radix 10 for decimal, 2 for binary, etc.)</p>
            <p><code>parseFloat(string)</code> parses a float</p>

            <h2>NaN and isNaN</h2>
            <p>Invalid numeric operations produce <code>NaN</code> (Not-a-Number). The key difference between the two check functions is <strong>type coercion</strong>:</p>
            <ul>
                <li><code>isNaN(x)</code> — Coerces the argument to a number first, then checks if it's <code>NaN</code>. This can lead to surprising results where non-numeric values like <code>"hello"</code> or <code>undefined</code> return <code>true</code>.</li>
                <li><code>Number.isNaN(x)</code> — Does <strong>not</strong> coerce; it only returns <code>true</code> if the value is currently <code>NaN</code> and its type is <code>Number</code>.</li>
            </ul>
            <div class="info-box important">
                <strong>TL;DR:</strong>
                <p><code>isNaN()</code>: "Is this NaN <em>after</em> converting to a number?"</p>
                <p><code>Number.isNaN()</code>: "Is this <em>actually</em> NaN right now?"</p>
                <p><code>Number.isNaN()</code> is generally safer and more predictable because it avoids the pitfalls of type coercion.</p>
            </div>

            <h2>Math.round / floor / ceil</h2>
            <p><code>Math.round(x)</code> — nearest integer</p>
            <p><code>Math.floor(x)</code> — round down</p>
            <p><code>Math.ceil(x)</code> — round up</p>

            <h2>Floating-Point Precision</h2>
            <p>JavaScript numbers use the <strong>IEEE 754</strong> standard (double-precision 64-bit binary). Because binary cannot represent certain decimal fractions (like 0.1 or 0.2) exactly, small rounding errors occur.</p>
            <p>Example: <code>0.1 + 0.2</code> results in <code>0.30000000000000004</code>. For precise calculations like money, always work with integers (e.g., cents instead of dollars) or use specialized libraries.</p>
        `,
        examples: [
            {
                code: `console.log(Number("42"));     // 42
console.log(Number("3.14"));   // 3.14
console.log(Number("abc"));    // NaN
console.log(parseInt("10", 10)); // 10
console.log(parseInt("10", 2));  // 2 (binary)
console.log(parseFloat("3.14")); // 3.14`,
                caption: 'Number, parseInt with radix, parseFloat.'
            },
            {
                code: `// isNaN (with coercion)
console.log(isNaN("hello"));    // true ("hello" -> NaN)
console.log(isNaN(undefined));  // true (undefined -> NaN)
console.log(isNaN("123"));      // false ("123" -> 123)

// Number.isNaN (no coercion)
console.log(Number.isNaN("hello"));   // false (string != NaN)
console.log(Number.isNaN(undefined)); // false (undefined != NaN)
console.log(Number.isNaN(NaN));       // true`,
                caption: 'Difference between <code>isNaN()</code> and <code>Number.isNaN()</code>.'
            },
            {
                code: `console.log(Math.round(4.7));  // 5
console.log(Math.floor(4.7));  // 4
console.log(Math.ceil(4.2));   // 5

console.log(0.1 + 0.2);        // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false`,
                caption: 'Math rounding and floating-point precision.'
            }
        ],
        exercises: [
            {
                question: 'Parse <code>"123"</code> and <code>"45.67"</code> to numbers using <code>Number</code> or <code>parseFloat</code>. Log their sum.',
                starter: `// Your code here`,
                solution: `const a = Number("123");
const b = parseFloat("45.67");
console.log(a + b);`,
                explanation: '<code>Number</code> and <code>parseFloat</code> both produce numbers for numeric strings.'
            },
            {
                question: 'Round down <code>7.9</code> and log the result. Then use <code>parseInt</code> to parse <code>"1010"</code> (binary) and log the result (binary to decimal).',
                starter: `// Your code here`,
                solution: `console.log(Math.floor(7.9));   // 7
console.log(parseInt("1010", 2)); // 10`,
                explanation: '<code>Math.floor</code> rounds down; <code>parseInt</code> with radix 2 parses binary.'
            }
        ],
        quizzes: [
            { question: 'What does <code>parseInt("11", 2)</code> return?', options: ['11', '3', '2', 'NaN'], answer: 1, explanation: 'Radix 2 means binary; 11 in binary is 3 in decimal.' },
            { question: 'Why does <code>0.1 + 0.2 === 0.3</code> evaluate to false?', options: ['A bug in JavaScript', 'Floating-point representation cannot store some decimals exactly', 'Strings are involved', 'Rounding is required'], answer: 1, explanation: 'IEEE 754 floating-point cannot represent 0.1 and 0.2 exactly, so the sum is slightly off.' }
        ]
    },
    functions: {
        id: 'functions',
        title: 'Functions',
        subtitle: 'Declarations, expressions, and parameters',
        content: `

            <h2>What are Functions?</h2>
            <p>Functions are reusable blocks of code. In JavaScript, functions are <strong>first-class citizens</strong> — they can be assigned to variables, passed as arguments, and returned from other functions.</p>
            <h2>Function Declaration vs Expression</h2>
            <p><strong>Hoisting</strong> is JavaScript's default behavior of moving declarations to the top of the current scope (script or function). This affects how you can call functions.</p>
            <ul>
                <li>
                    <strong>Function Declaration:</strong> <code>function greet() { ... }</code>
                    <br>Declarations are <em>hoisted</em>. You can call the function <em>before</em> you write it in the code.
                </li>
                <li>
                    <strong>Function Expression:</strong> <code>const greet = function() { ... }</code>
                    <br>Expressions are <em>not hoisted</em>. The variable <code>greet</code> is hoisted (if using <code>var</code>) or in the Temporal Dead Zone (if using <code>const</code>/<code>let</code>), but the function assignment hasn't happened yet. You MUST define it before you call it.
                </li>
            </ul>
            <h2>Parameters and Return</h2>
            <p>Parameters are passed by value (primitives) or by reference (objects). Use <code>return</code> to send a value back. Without return, the function returns <code>undefined</code>.</p>

            <h2>Default Parameters</h2>
            <p>Default parameters (ES6) provide fallback values when arguments are <code>undefined</code> or omitted.</p>
            <p>Syntax: <code>function greet(name = "World") { }</code>.</p>
            <p>Defaults are used only for <code>undefined</code> — <code>null</code> does not trigger the default.</p>
            <p>Later default parameters can reference earlier ones:</p>
            <p><code>function add(a = 1, b = a * 2) { return a + b; }</code></p>
            <ul>
                <li><code>add()</code> returns <code>3</code> (<code>a=1</code>, <code>b=2</code>)</li>
                <li><code>add(5)</code> returns <code>15</code> (<code>a=5</code>, <code>b=10</code>)</li>
            </ul>

            <h2>Rest Parameters</h2>
            <p>The rest parameter (<code>...rest</code>) gathers the remaining arguments into an array. It must be the last parameter.</p>
            <p>Example: <code>function log(first, ...rest) { }</code> — when you call <code>log(1, 2, 3)</code>, <code>first</code> is <code>1</code> and <code>rest</code> is <code>[2, 3]</code>.</p>

            <h2>Anonymous Functions</h2>
            <p>An <strong>anonymous function</strong> is a function without a name. They are often used as arguments to other functions or assigned to variables.</p>
            <ul>
                <li><code>function() { ... }</code> — Traditional syntax.</li>
                <li><code>() => { ... }</code> — Arrow function syntax (more concise).</li>
            </ul>
            <p>Common use cases: passing a callback to <code>map</code>, <code>filter</code>, or <code>addEventListener</code>.</p>
            
            <h2>Callback Functions</h2>
            <p>A <strong>callback</strong> is a function passed as an argument to another function. The receiving function executes (calls back) your function later. This pattern is essential for:</p>
            <ul>
                <li><strong>Asynchronous tasks:</strong> e.g., "Run this code when the data loads."</li>
                <li><strong>Custom logic:</strong> e.g., "Here is how I want you to sort this list."</li>
            </ul>

            <h2>Closures</h2>
            <p>A <strong>closure</strong> happens when a function remembers the variables from where it was created, even after that outer scope has finished. Closures are used for:</p>
            <ul>
                <li><strong>Data Privacy:</strong> Hiding variables so they can't be changed from outside.</li>
                <li><strong>State:</strong> Maintaining a state (like a counter) between function calls.</li>
            </ul>
        `,
        examples: [
            {
                code: `// Function declaration (hoisted)\nfunction greet(name) {\n    return "Hello, " + name + "!";\n}\nconsole.log(greet("Alice"));\n\n// Function expression (not hoisted)\nconst square = function(x) {\n    return x * x;\n};\nconsole.log(square(5)); // 25\n\n// Functions as arguments (callbacks)\nfunction applyOp(a, b, operation) {\n    return operation(a, b);\n}\nconst add = function(x, y) { return x + y; };\nconsole.log(applyOp(3, 4, add)); // 7`,
                caption: 'Functions are values in JavaScript — store them, pass them, return them.'
            },
            {
                code: `// Closure example\nfunction createCounter() {\n    let count = 0;  // "closed over"\n    return {\n        increment() { return ++count; },\n        decrement() { return --count; },\n        getCount() { return count; }\n    };\n}\n\nconst counter = createCounter();\nconsole.log(counter.increment()); // 1\nconsole.log(counter.increment()); // 2\nconsole.log(counter.decrement()); // 1\nconsole.log(counter.getCount());  // 1`,
                caption: 'Closures let inner functions remember variables from their outer scope.'
            },
            {
                code: `function greet(name = "World") {\n    console.log("Hello, " + name + "!");\n}\ngreet("Alice");\ngreet();\n\nfunction multiply(a, b = 1) { return a * b; }\nconsole.log(multiply(5), multiply(5, 2));`,
                caption: 'Default parameters replace manual undefined checks.'
            },
            {
                code: `function logAll(first, ...rest) {\n    console.log("First:", first);\n    console.log("Rest:", rest);\n}\nlogAll(1, 2, 3);  // First: 1, Rest: [2, 3]\n\nfunction greetMany(msg, ...names) {\n    names.forEach(n => console.log(msg, n));\n}\ngreetMany("Hi", "Alice", "Bob");`,
                caption: 'Rest parameters gather remaining arguments into an array.'
            }
        ],
        exercises: [
            {
                question: 'Write a function <code>double</code> that takes a number and returns its double. Call it with 7 and print the result.',
                starter: `// Your code here`,
                solution: `function double(n) {
  return n * 2;
}
console.log(double(7));`,
                explanation: 'Return the value; then pass that to <code>console.log</code>.'
            },
            {
                question: 'Write a function <code>isEven</code> that takes a number and returns <code>true</code> if it is even, <code>false</code> otherwise. Test with 4 and 5.',
                starter: `// Your code here`,
                solution: `function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(4), isEven(5));`,
                explanation: 'A number is even when <code>n % 2 === 0</code>.'
            },
            {
                question: 'Write <code>multiply(a, b)</code> with <code>b</code> defaulting to <code>1</code>. Call <code>multiply(5)</code> and <code>multiply(5, 2)</code> and print both results.',
                starter: `// Your code here`,
                solution: `function multiply(a, b = 1) {\n  return a * b;\n}\nconsole.log(multiply(5));\nconsole.log(multiply(5, 2));`,
                explanation: 'When <code>b</code> is omitted it is <code>undefined</code>, so the default <code>1</code> is used.'
            },
            {
                question: 'Write a function <code>greetAll</code> that takes a <code>message</code> and any number of <code>names</code> (rest parameter), and logs <code>message</code> once for each name. Call it with <code>greetAll("Hello", "Alice", "Bob")</code>.',
                starter: `// Your code here`,
                solution: `function greetAll(message, ...names) {\n  names.forEach(n => console.log(message, n));\n}\ngreetAll("Hello", "Alice", "Bob");`,
                explanation: 'Rest parameters collect remaining arguments into an array; forEach runs the callback for each name.'
            },
            {
                question: 'Write a function <code>compose</code> that takes two functions <code>f</code> and <code>g</code> and returns a new function computing <code>f(g(x))</code>.',
                starter: `function compose(f, g) {\n    // Return a new function\n}\n\nconst double = x => x * 2;\nconst addOne = x => x + 1;\n\nconst doubleAfterAddOne = compose(double, addOne);\nconsole.log(doubleAfterAddOne(5)); // Should print 12`,
                solution: `function compose(f, g) {\n    return function(x) {\n        return f(g(x));\n    };\n}`,
                explanation: '<code>compose</code> returns a closure that captures <code>f</code> and <code>g</code>. When called, it applies <code>g</code> first, then <code>f</code> to the result.'
            },
            {
                question: 'Write a function <code>once</code> that wraps another function so it can only be called once. Subsequent calls return the first result.',
                starter: `function once(fn) {\n    // Your implementation\n}\n\nconst calc = once(function(x) {\n    console.log("Computing...");\n    return x * x;\n});\n\nconsole.log(calc(5));  // "Computing..." then 25\nconsole.log(calc(5));  // 25 (no "Computing...")\nconsole.log(calc(10)); // 25 (still cached)`,
                solution: `function once(fn) {\n    let called = false;\n    let result;\n    return function(...args) {\n        if (!called) {\n            called = true;\n            result = fn(...args);\n        }\n        return result;\n    };\n}`,
                explanation: 'The closure captures <code>called</code> and <code>result</code>. On first call it runs the function and caches; subsequent calls return the cached result.'
            }
        ],
        quizzes: [
            { question: 'When is the default parameter value used in a function?', options: ['When the argument is null', 'When the argument is undefined or omitted', 'When the argument is 0', 'Only when no arguments are passed'], answer: 1, explanation: 'Default parameters are used when the argument is undefined or the argument is omitted. null is a valid value and does not trigger the default.' }
        ]
    },
    template_literals: {
        id: 'template_literals',
        title: 'Template Literals',
        subtitle: 'String interpolation and multi-line strings',
        content: `
            <h2>What are Template Literals?</h2>
            <p>Template literals (introduced in ES6) use backticks (<code>\`</code>) instead of single or double quotes. They provide a more powerful way to work with strings, supporting <strong>string interpolation</strong> and <strong>multi-line strings</strong>.</p>
            
            <h2>String Interpolation</h2>
            <p>You can embed any JavaScript expression inside <code>\${...}</code>. The expression is evaluated and converted to a string. For example: <code>\`Hello, \${name}!\`</code>.</p>
            
            <h2>Multi-line Strings</h2>
            <p>Template literals preserve line breaks, so you don't need to use <code>\\n</code> for newlines. Just hit enter.</p>
        `,
        examples: [
            {
                code: `const name = "Alice";\nconst age = 30;\nconsole.log(\`Hello, \${name}! You are \${age} years old.\`);\n\n// Expressions inside \${}\nconsole.log(\`Next year: \${age + 1}\`);\nconsole.log(\`Is adult: \${age >= 18 ? "Yes" : "No"}\`);\n\n// Multi-line\nconst html = \`\n<div class="card">\n    <h2>\${name}</h2>\n    <p>Age: \${age}</p>\n</div>\n\`;\nconsole.log(html);`,
                caption: 'Template literals make string building clean and readable.'
            }
        ],
        exercises: [
            {
                question: 'Create variables <code>product</code> ("Apple") and <code>price</code> (1.5). Use a template literal to print: "Product: Apple costs $1.5".',
                starter: `// Your code here`,
                solution: 'const product = "Apple";\nconst price = 1.5;\nconsole.log(`Product: ${product} costs $${price}`);',
                explanation: 'Use backticks and <code>${}</code> for variables and expressions.'
            },
            {
                question: 'Rewrite this concatenation-heavy code using template literals.',
                starter: `const firstName = "John";\nconst lastName = "Doe";\nconst score = 95;\nconst maxScore = 100;\n\n// Rewrite using template literals\nconst message = firstName + " " + lastName + " scored " + score + "/" + maxScore + " (" + ((score / maxScore) * 100) + "%)";\nconsole.log(message);`,
                solution: `const firstName = "John";\nconst lastName = "Doe";\nconst score = 95;\nconst maxScore = 100;\n\nconst message = \`\${firstName} \${lastName} scored \${score}/\${maxScore} (\${(score / maxScore) * 100}%)\`;\nconsole.log(message);`,
                explanation: 'Template literals replace messy concatenation with clean <code>${}</code> interpolation. Any expression works inside the braces.'
            }
        ],
        quizzes: [
            { question: 'What character is used to embed expressions inside a template literal?', options: ['<code>{{ }}</code>', '<code>${ }</code>', '<code>( )</code>', '<code>[ ]</code>'], answer: 1, explanation: 'Template literals use ${ } to embed expressions (e.g. `Hello ${name}`).' }
        ]
    },
    strict_mode: {
        id: 'strict_mode',
        title: 'Strict Mode',
        subtitle: '"use strict" and its effects',
        content: `
            <h2>What is Strict Mode?</h2>
            <p><code>"use strict";</code> opts into a restricted, cleaner version of JavaScript. It catches common mistakes, prevents accidental globals, and throws errors for unsafe actions.</p>
            
            <h2>How to Enable</h2>
            <ul>
                <li><strong>Entire script:</strong> Place <code>"use strict";</code> as the first statement in a file.</li>
                <li><strong>Per function:</strong> First statement inside a function body.</li>
                <li><strong>Automatic:</strong> ES6 modules and classes are always in strict mode.</li>
            </ul>

            <h2>What Strict Mode Prevents</h2>
            <ul>
                <li>Using undeclared variables (prevents global pollution).</li>
                <li>Assigning to read-only properties.</li>
                <li>Duplicate parameter names in functions.</li>
                <li><code>this</code> defaults to <code>undefined</code> instead of the global object (<code>window</code>) in simple calls.</li>
                <li>Deleting variables or functions.</li>
            </ul>

            <div class="info-box tip">
                <strong>✅ Best Practice</strong>
                Always use strict mode. ES6 modules are automatically strict.
            </div>
        `,
        examples: [
            {
                code: `"use strict";\n\n// Must declare variables\nlet x = 10;\nconsole.log(x);\n\n// this is undefined in regular function calls\nfunction showThis() {\n    console.log("this is:", typeof this);\n}\nshowThis(); // "undefined" in strict mode\n\nconsole.log("Strict mode is active!");`,
                caption: 'Strict mode turns silent errors into thrown errors.'
            }
        ],
        exercises: [
            {
                question: 'Add <code>"use strict";</code> and fix all the problems in this code.',
                starter: `// Add strict mode and fix the issues\nfunction processOrder(quantity, price) {\n    total = quantity * price;\n    let discount = 0.1;\n    let discount = 0.2;\n    finalPrice = total * (1 - discount);\n    console.log("Final price: $" + finalPrice);\n}\nprocessOrder(5, 20);`,
                solution: `"use strict";\n\nfunction processOrder(quantity, price) {\n    let total = quantity * price;\n    let discount = 0.1;\n    discount = 0.2;\n    const finalPrice = total * (1 - discount);\n    console.log("Final price: $" + finalPrice);\n}\nprocessOrder(5, 20);`,
                explanation: 'Fixed: declared <code>total</code> with let, removed duplicate <code>let discount</code> (reassign instead), declared <code>finalPrice</code> with const.'
            }
        ],
        quizzes: [
            { question: 'In strict mode, what is <code>this</code> in a normal function call (not a method)?', options: ['The global object', 'undefined', 'null', 'The function itself'], answer: 1, explanation: 'In strict mode, this is undefined in simple function calls instead of the global object.' }
        ]
    },
    this_keyword: {
        id: 'this_keyword',
        title: "The 'this' Keyword",
        subtitle: 'Context and binding rules',
        content: `
            <h2>What is <code>this</code>?</h2>
            <p>In JavaScript, the <code>this</code> keyword refers to an <strong>object</strong>. Which object it refers to depends on how the function is being called (the "execution context").</p>
            <p>Unlike many other languages where <code>this</code> is fixed to the instance of a class, in JavaScript <code>this</code> is dynamic and determined at runtime.</p>

            <h2>The Four Binding Rules</h2>
            <ol>
                <li><strong>Method Binding:</strong> When a function is called as a method (<code>obj.method()</code>), <code>this</code> is the object before the dot (<code>obj</code>).</li>
                <li><strong>Simple Function Call:</strong> In non-strict mode, <code>this</code> is the global object (<code>window</code> in browsers). In <strong>strict mode</strong>, <code>this</code> is <code>undefined</code>.</li>
                <li><strong>Arrow Functions:</strong> Arrow functions do <em>not</em> have their own <code>this</code>. They inherit it from the surrounding scope where they were defined. This is called <strong>lexical scoping</strong>.</li>
                <li><strong>Explicit Binding:</strong> You can manually set <code>this</code> using <code>.call()</code>, <code>.apply()</code>, or <code>.bind()</code>.</li>
            </ol>

            <div class="info-box tip">
                <strong>💡 Pro Tip</strong>
                If you ever lose the context of <code>this</code> (common in callbacks or <code>setTimeout</code>), use an arrow function or <code>.bind()</code> to "lock" the context.
            </div>
        `,
        examples: [
            {
                code: `const person = {
  name: "JS Developer",
  greet() {
    console.log("Hello, I am " + this.name);
  }
};

person.greet(); // "this" is person`,
                caption: 'Method binding: "this" points to the object the method is called on.'
            },
            {
                code: `// Simple function call
function showThis() {
  console.log(this);
}

// In non-strict mode: logs Window/Global
// In strict mode: logs undefined
showThis();`,
                caption: 'In simple function calls, "this" depends on strict mode.'
            },
            {
                code: `const user = {
  name: "Alice",
  // Regular function: this is user
  greetRegular: function() {
    console.log("Regular:", this.name);
  },
  // Arrow function: this is inherited (likely Global/Undefined)
  greetArrow: () => {
    console.log("Arrow:", this.name);
  }
};

user.greetRegular(); // Alice
user.greetArrow();   // undefined (or Error)`,
                caption: 'Arrow functions capture "this" from the parent scope, not the object.'
            },
            {
                code: `const car = { brand: "Tesla" };
function drive(speed) {
  console.log(\`Driving \${this.brand} at \${speed}mph\`);
}

// Explicitly set "this" to car
drive.call(car, 100);
drive.apply(car, [80]);

const teslaDrive = drive.bind(car);
teslaDrive(60);`,
                caption: 'Using call, apply, and bind to explicitly control the value of "this".'
            }
        ],
        exercises: [
            {
                question: 'Create an object <code>user</code> with <code>name: "Alice"</code> and a method <code>sayName</code> that logs <code>this.name</code>. Call <code>user.sayName()</code>.',
                starter: `// Your code here`,
                solution: `const user = {
  name: "Alice",
  sayName() {
    console.log(this.name);
  }
};
user.sayName();`,
                explanation: 'When called as user.sayName(), this inside sayName is user.'
            },
            {
                question: 'Fix the code below using an <strong>arrow function</strong> so that <code>this.name</code> correctly logs "Bob" after 100ms.',
                starter: `const person = {
  name: "Bob",
  greet() {
    setTimeout(function() {
      console.log("Hello, " + this.name);
    }, 100);
  }
};
person.greet();`,
                solution: `const person = {
  name: "Bob",
  greet() {
    // Arrow function uses "this" from greet()
    setTimeout(() => {
      console.log("Hello, " + this.name);
    }, 100);
  }
};
person.greet();`,
                explanation: 'Regular functions inside <code>setTimeout</code> lose their <code>this</code> context. Arrow functions fix this by inheriting <code>this</code> from the method.'
            }
        ],
        quizzes: [
            {
                question: 'What is "this" in a simple function call when "use strict" is active?',
                options: ['The window object', 'The function itself', 'undefined', 'null'],
                answer: 2,
                explanation: 'Strict mode prevents "this" from defaulting to the global object, setting it to undefined instead.'
            },
            {
                question: 'Do arrow functions have their own "this" context?',
                options: ['Yes', 'No, they inherit it lexically', 'Only if they are methods', 'Only in strict mode'],
                answer: 1,
                explanation: 'Arrow functions do not bind their own "this"; they use "this" from the enclosing execution context.'
            }
        ]
    },
    classes: {
        id: 'classes',
        title: 'Classes (ES6)',
        subtitle: 'Class syntax, constructors, and methods',
        content: `
            <h2>Class Syntax</h2>
            <p>The <code>class</code> keyword provides syntactic sugar over constructor functions and prototypes. Use <code>new ClassName()</code> to create instances.</p>
            <h2>Class Anatomy</h2>
            <ul>
                <li><code>constructor()</code> — Called with <code>new</code>. Initializes instance properties.</li>
                <li><strong>Instance methods</strong> — Added to the prototype.</li>
                <li><code>static</code> methods — Called on the class itself.</li>
                <li><strong>Getters/Setters</strong> — <code>get</code> and <code>set</code> for computed properties.</li>
                <li><strong>Private fields</strong> — Prefix with <code>#</code> (ES2022).</li>
            </ul>
            <h2>Inheritance</h2>
            <p>Use <code>extends</code> to create a subclass. Use <code>super()</code> to call the parent constructor.</p>
        `,
        examples: [
            {
                code: `class Animal {\n    #sound;\n\n    constructor(name, sound) {\n        this.name = name;\n        this.#sound = sound;\n    }\n\n    speak() {\n        console.log(\`\${this.name} says \${this.#sound}\`);\n    }\n\n    // Not necessary, but shows how to use static methods\n    static create(name, sound) {\n        return new Animal(name, sound);\n    }\n}\n\nclass Dog extends Animal {\n    constructor(name) {\n        super(name, "Woof");\n    }\n    fetch(item) {\n        console.log(\`\${this.name} fetches the \${item}!\`);\n    }\n}\n\nconst dog = new Dog("Rex");\ndog.speak();\ndog.fetch("ball");\n\nconst cat = Animal.create("Whiskers", "Meow");\ncat.speak();`,
                caption: 'Classes provide clean syntax for constructor functions, inheritance, and private fields.'
            }
        ],
        exercises: [
            {
                question: 'Define a class <code>Rectangle</code> with a constructor that takes <code>width</code> and <code>height</code> and stores them. Add a method <code>area()</code> that returns width * height. Create an instance and print its area.',
                starter: `// Your code here`,
                solution: `class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}
const r = new Rectangle(4, 5);
console.log(r.area());`,
                explanation: 'constructor sets instance properties; methods can use this to access them.'
            },
            {
                question: 'Create a <code>BankAccount</code> class with a private balance, deposit/withdraw methods with validation, and a getter for balance.',
                starter: `class BankAccount {\n    // Private balance field\n    // Constructor: ownerName, initialBalance (default 0)\n    // deposit(amount) — throw if <= 0\n    // withdraw(amount) — throw if > balance\n    // get balance\n    // toString()\n}\n\nconst account = new BankAccount("Alice", 100);\naccount.deposit(50);\naccount.withdraw(30);\nconsole.log(account.balance);\nconsole.log(account.toString());`,
                solution: `class BankAccount {\n    #balance;\n    #owner;\n\n    constructor(ownerName, initialBalance = 0) {\n        this.#owner = ownerName;\n        this.#balance = initialBalance;\n    }\n\n    deposit(amount) {\n        if (amount <= 0) throw new Error("Deposit must be positive");\n        this.#balance += amount;\n    }\n\n    withdraw(amount) {\n        if (amount > this.#balance) throw new Error("Insufficient funds");\n        this.#balance -= amount;\n    }\n\n    get balance() {\n        return this.#balance;\n    }\n\n    toString() {\n        return \`Account(\${this.#owner}: $\${this.#balance})\`;\n    }\n}\n\nconst account = new BankAccount("Alice", 100);\naccount.deposit(50);\naccount.withdraw(30);\nconsole.log(account.balance);\nconsole.log(account.toString());`,
                explanation: 'Private fields (<code>#balance</code>) cannot be accessed outside the class. The getter provides read-only access. Validation in deposit/withdraw prevents invalid operations.'
            }
        ],
        quizzes: [
            {
                question: 'What keyword is used to call the parent class constructor?',
                options: ['this()', 'super()', 'parent()', 'extends()'],
                answer: 1,
                explanation: 'super() calls the constructor of the parent class.'
            },
            {
                question: 'How do you define a private field in a class?',
                options: ['private name;', '_name;', '#name;', 'hidden name;'],
                answer: 2,
                explanation: 'Private fields are prefixed with # (e.g. #name).'
            }
        ]
    },
    hoisting: {
        id: 'hoisting',
        title: 'Hoisting',
        subtitle: 'Variable and function hoisting',
        content: `
            <h2>What is Hoisting?</h2>
            <p>Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation, before the code runs. Only the <strong>declaration</strong> is hoisted — not the initialization.</p>
            <h2>What Gets Hoisted</h2>
            <ul>
                <li><code>var</code> — Hoisted, initialized to <code>undefined</code>.</li>
                <li><code>function</code> declarations — Fully hoisted (declaration + body).</li>
                <li><code>let</code>/<code>const</code> — Hoisted but NOT initialized (Temporal Dead Zone).</li>
                <li><code>class</code> — Hoisted but NOT initialized (like let/const).</li>
            </ul>
            <div class="info-box important">
                <strong>Key Insight</strong>
                The engine "scans" the code first to register all declarations, then executes line by line.
            </div>
        `,
        examples: [
            {
                code: `sayHi();  // Works: function declaration is hoisted
function sayHi() {
  console.log("Hi");
}

// sayBye(); // TypeError\nconst sayBye = function() {\n    console.log("Bye!");\n};\nsayBye(); // Works here

// console.log(x);  // ReferenceError with let
let x = 10;
console.log(x);`, caption: 'Function hoisting'
            },
            {
                code: `// var hoisting\nconsole.log(x); // undefined (not ReferenceError!)\nvar x = 5;\nconsole.log(x); // 5

// console.log(y);  // ReferenceError with let
let y = 10;
console.log(y);`, caption: 'Variable hoisting'
            }
        ],
        exercises: [
            {
                question: 'Write a function declaration <code>greet</code> that logs "Hello". Call <code>greet()</code> before the function definition in your code (to show hoisting).',
                starter: `// Call first, then define
// Your code here`,
                solution: `greet();
function greet() {
  console.log("Hello");
}`,
                explanation: 'Function declarations are hoisted, so the call can appear above the definition.'
            },
            {
                question: 'Predict the output of each <code>console.log</code> without running first, then verify.',
                starter: `console.log("a:", a);\nconsole.log("b:", b());\n\nvar a = 10;\nfunction b() {\n    return 20;\n}\n\n// What about this?\n// console.log("c:", c);  // Uncomment — what happens?\n// let c = 30;`,
                solution: `console.log("a:", a);   // a: undefined (var hoisted)\nconsole.log("b:", b()); // b: 20 (function fully hoisted)\n\nvar a = 10;\nfunction b() {\n    return 20;\n}\n\n// console.log("c:", c); // ReferenceError (TDZ)\n// let c = 30;\nconsole.log("All outputs match predictions!");`,
                explanation: '<code>var a</code> is hoisted and initialized to <code>undefined</code>. Function <code>b</code> is fully hoisted. <code>let c</code> would be in the TDZ.'
            }
        ]
    },
    error_handling: {
        id: 'error_handling',
        title: 'Error Handling',
        subtitle: 'try/catch/finally and Error types',
        content: `
            <h2>try / catch / finally</h2>
            <p>Wrap risky code in <code>try { }</code>. Use <code>catch (err) { }</code> to handle errors. <code>finally { }</code> runs whether or not an error occurred.</p>

            <h2>JavaScript Error Types</h2>
            <ul>
                <li><code>Error</code> — Base error type</li>
                <li><code>SyntaxError</code> — Invalid code structure</li>
                <li><code>ReferenceError</code> — Variable doesn't exist</li>
                <li><code>TypeError</code> — Wrong type (e.g., calling a non-function)</li>
                <li><code>RangeError</code> — Value out of allowed range</li>
            </ul>

            <h2>Throwing Errors</h2>
            <p>Use <code>throw</code> to create custom errors. Prefer <code>Error</code> objects for stack traces. (eg. <code>throw new Error("Oops")</code>)</p>

            <h2>Async Error Handling</h2>
            <p>With <code>async/await</code>, use <code>try/catch</code> around <code>await</code> to handle promise rejections.</p>
            <p>With promise chains, use <code>.catch()</code> to handle rejections.</p>
            <p>Unhandled rejections can crash or warn depending on the environment.</p>

            <h2>Rethrowing vs Swallowing</h2>
            <p><strong>Rethrowing:</strong> In a <code>catch</code> block, call <code>throw err;</code> (or <code>throw error;</code>) to pass the error up so callers can handle it. Use this when you log or augment but cannot fully handle the error.</p>
            <p><strong>Swallowing:</strong> If you <code>catch</code> and only log (or do nothing) without rethrowing, the error is "swallowed" — the caller no longer sees it. Only do this when you intentionally want to absorb the error.</p>
        `,
        examples: [
            {
                code: `try {\n    const data = JSON.parse('{"name": "Alice"}');\n    console.log(data.name);\n\n    const bad = JSON.parse('not valid json');\n} catch (error) {\n    console.log("Error type:", error.constructor.name);\n    console.log("Message:", error.message);\n} finally {\n    console.log("This always runs");\n}`,
                caption: '<code>try</code>/<code>catch</code> prevents runtime errors from crashing your program.'
            },
            {
                code: `class ValidationError extends Error {\n    constructor(field, message) {\n        super(message);\n        this.name = "ValidationError";\n        this.field = field;\n    }\n}\n\nfunction validateAge(age) {\n    if (typeof age !== "number") {\n        throw new ValidationError("age", "Age must be a number");\n    }\n    if (age < 0 || age > 150) {\n        throw new ValidationError("age", "Age must be between 0 and 150");\n    }\n    return true;\n}\n\ntry {\n    validateAge("twenty");\n} catch (e) {\n    if (e instanceof ValidationError) {\n        console.log(\`Validation failed on \${e.field}: \${e.message}\`);\n        // Validation failed on age: Age must be a number\n    }\n}`,
                caption: 'Custom errors make it easy to handle different error types differently.'
            },
            {
                code: `async function fetchUser(id) {\n  try {\n    const res = await fetch(\`/api/users/\${id}\`);\n    if (!res.ok) throw new Error(res.statusText);\n    return await res.json();\n  } catch (err) {\n    console.error("Fetch failed:", err.message);\n    throw err;  // rethrow so caller can handle\n  }\n}`,
                caption: '<code>async/await</code>: wrap await in <code>try/catch</code>; rethrow after logging so callers still see the error.'
            },
            {
                code: `Promise.reject(new Error("Fail"))\n  .catch(err => {\n    console.log("Caught:", err.message);\n    throw err;  // rethrow: next .catch or unhandled rejection\n  })\n  .catch(err => console.log("Second catch:", err.message));`,
                caption: 'In a promise chain, <code>.catch</code> can rethrow so a later <code>.catch</code> or the caller sees the error.'
            }
        ],
        exercises: [
            {
                question: 'Use try/catch. In try, throw <code>new Error("Oops")</code>. In catch, log <code>err.message</code>.',
                starter: `// Your code here`,
                solution: `try {
  throw new Error("Oops");
} catch (err) {
  console.log(err.message);
}`,
                explanation: 'The thrown error is caught and err.message holds "Oops".'
            },
            {
                question: 'Write <code>safeDivide(a, b)</code> that throws descriptive errors for zero division or non-number arguments.',
                starter: `function safeDivide(a, b) {\n    // Your implementation\n}\n\ntry {\n    console.log(safeDivide(10, 2));\n    console.log(safeDivide(10, 0));\n} catch (e) {\n    console.log("Error:", e.message);\n}\n\ntry {\n    console.log(safeDivide("10", 2));\n} catch (e) {\n    console.log("Error:", e.message);\n}`,
                solution: `function safeDivide(a, b) {\n    if (typeof a !== "number" || typeof b !== "number") {\n        throw new TypeError("Both arguments must be numbers");\n    }\n    if (b === 0) {\n        throw new RangeError("Cannot divide by zero");\n    }\n    return a / b;\n}\n\ntry {\n    console.log(safeDivide(10, 2));\n    console.log(safeDivide(10, 0));\n} catch (e) {\n    console.log("Error:", e.message);\n}\n\ntry {\n    console.log(safeDivide("10", 2));\n} catch (e) {\n    console.log("Error:", e.message);\n}`,
                explanation: 'Use <code>TypeError</code> for wrong types and <code>RangeError</code> for invalid values. Specific error types let callers handle different errors differently.'
            },
            {
                question: 'Simulate async: <code>const fetchData = () => Promise.reject(new Error("Network error"))</code>. Use <code>async/await</code> with try/catch: call <code>await fetchData()</code>, in catch log the error message, then rethrow with <code>throw err</code>. Call the async function and catch again to log "Caller caught it".',
                starter: `const fetchData = () => Promise.reject(new Error("Network error"));\nasync function main() {\n  try {\n    await fetchData();\n  } catch (err) {\n    console.log(err.message);\n    throw err;\n  }\n}\n// Your code: call main() and catch to log "Caller caught it"`,
                solution: `const fetchData = () => Promise.reject(new Error("Network error"));\nasync function main() {\n  try {\n    await fetchData();\n  } catch (err) {\n    console.log(err.message);\n    throw err;\n  }\n}\nmain().catch(() => console.log("Caller caught it"));`,
                explanation: 'Rethrowing in the inner <code>catch</code> lets the caller (<code>main().catch</code>) still handle the error.'
            },
            {
                question: 'In a <code>catch</code> block, log <code>err.message</code> then rethrow with <code>throw err</code>. Call a function that throws <code>new Error("Test")</code> and use an outer <code>try/catch</code> to log "Outer catch".',
                starter: `function fail() { throw new Error("Test"); }\nfunction middle() {\n  try {\n    fail();\n  } catch (err) {\n    console.log(err.message);\n    throw err;\n  }\n}\ntry {\n  middle();\n} catch (e) {\n  console.log("Outer catch");\n}`,
                solution: `function fail() { throw new Error("Test"); }\nfunction middle() {\n  try {\n    fail();\n  } catch (err) {\n    console.log(err.message);\n    throw err;\n  }\n}\ntry {\n  middle();\n} catch (e) {\n  console.log("Outer catch");\n}`,
                explanation: 'Rethrowing propagates the error to the outer <code>try/catch</code>.'
            }
        ],
        quizzes: [
            {
                question: 'If you catch an error and only log it without rethrowing, what happens to the error from the caller\'s perspective?',
                options: ['The caller still receives the error', 'The error is swallowed — the caller does not see it', 'The program crashes', 'finally always rethrows'],
                answer: 1,
                explanation: 'Swallowing (catching without rethrowing) means the caller no longer sees the error; the promise resolves normally or execution continues.'
            }
        ]
    },
    spread_rest: {
        id: 'spread_rest',
        title: 'Spread and Rest Operators',
        subtitle: '...syntax for gathering and spreading elements',
        content: `
            <h2>Same Syntax, Different Meaning</h2>
            <p>JavaScript uses the same <code>...</code> (three dots) in two different places. The <em>context</em> determines whether it means <strong>rest</strong> or <strong>spread</strong>.</p>

            <h3>Rest — when you're <em>receiving</em> values</h3>
            <p><strong>Rest</strong> collects many items into a single array. You use it where values are being <em>assigned in</em>: function parameters or the left side of destructuring.</p>
            <p>Example: <code>function log(first, ...rest) { }</code> — when you call <code>log(1, 2, 3)</code>, <code>first</code> is <code>1</code> and <code>rest</code> is <code>[2, 3]</code>. The rest parameter "gathers" everything that didn't get a named parameter.</p>

            <h3>Spread — when you're <em>sending</em> or <em>placing</em> values</h3>
            <p><strong>Spread</strong> does the opposite: it takes one array or object and "unpacks" it into separate pieces. You use it where multiple values or properties are expected: inside function calls, array literals <code>[...]</code>, or object literals <code>{ ... }</code>.</p>
            <p>Example: <code>Math.max(...[5, 10, 15])</code> is the same as <code>Math.max(5, 10, 15)</code>. The spread operator turns the array into three separate arguments.</p>

            <div class="info-box tip">
                <strong>Quick rule</strong>
                Rest = many → one (collect into an array). Spread = one → many (expand from an array or object).
            </div>
        `,
        examples: [
            {
                code: `// REST: Gathering arguments
function sum(...nums) {
  // nums is an array: [1, 2, 3, 4]
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// REST: Destructuring
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]`,
                caption: 'Rest collects multiple values into a single array.'
            },
            {
                code: `// SPREAD: Function calls
const numbers = [5, 10, 15];
console.log(Math.max(...numbers)); // Same as Math.max(5, 10, 15)

// SPREAD: Array copying/merging
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; 
console.log(arr2); // [1, 2, 3, 4]

// SPREAD: Object copying/merging
const user = { name: "Alice", role: "Admin" };
const updatedUser = { ...user, age: 30 }; 
console.log(updatedUser); // { name: "Alice", role: "Admin", age: 30 }`,
                caption: 'Spread expands arrays or objects into individual elements/properties.'
            }
        ],
        exercises: [
            {
                question: 'Write a function <code>max</code> that takes any number of arguments with rest (<code>...nums</code>) and returns the maximum. Use <code>Math.max</code> with spread. Call with <code>max(1, 5, 3, 9, 2)</code> and print the result.',
                starter: `// Your code here`,
                solution: `function max(...nums) {
  return Math.max(...nums);
}
console.log(max(1, 5, 3, 9, 2));`,
                explanation: 'Rest collects arguments into an array; spread passes them to Math.max.'
            },
            {
                question: 'Combine two arrays <code>[1, 2]</code> and <code>[3, 4]</code> into a new array <code>combined</code> using the spread operator. Print the result.',
                starter: `const arr1 = [1, 2];
const arr2 = [3, 4];
// Your code here`,
                solution: `const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined);`,
                explanation: 'Spread expands both arrays into the new array literal.'
            },
            {
                question: 'Use object spread to create a new object <code>userWithId</code> from <code>user</code> that adds an <code>id: 1</code> property. Log the new object.',
                starter: `const user = { name: "Bob", email: "bob@example.com" };
// Your code here`,
                solution: `const user = { name: "Bob", email: "bob@example.com" };
const userWithId = { ...user, id: 1 };
console.log(userWithId);`,
                explanation: 'Object spread copies properties from the source object into the new one.'
            }
        ],
        quizzes: [
            {
                question: 'What does the spread operator (...) do inside a function call like func(...arr)?',
                options: ['Collects arguments into an array', 'Expands an array into individual arguments', 'Copies the function', 'Does nothing'],
                answer: 1,
                explanation: 'In a function call, spread expands an iterable (like an array) into individual arguments.'
            }
        ]
    },
    arrow_functions: {
        id: 'arrow_functions',
        title: 'Arrow Functions',
        subtitle: 'Syntax and lexical this',
        content: `
            <h2>Arrow Function Syntax (ES6)</h2>
            <p>Arrow functions provide shorter syntax. They also don't have their own <code>this</code>, <code>arguments</code>, or <code>super</code>.</p>
            <h2>Syntax Variations</h2>
            <ul>
                <li><code>(a, b) => a + b</code> — Implicit return (single expression)</li>
                <li><code>(a, b) => { return a + b; }</code> — Explicit return (block body)</li>
                <li><code>x => x * 2</code> — Single param: parens optional</li>
                <li><code>() => console.log("hi")</code> — No params: parens required</li>
            </ul>
            <h2>Key Differences from Regular Functions</h2>
            <ul>
                <li>No own <code>this</code> — inherits from enclosing scope</li>
                <li>No <code>arguments</code> object — use rest parameters</li>
                <li>Cannot be used as constructors</li>
            </ul>
            <div class="info-box tip">
                <strong>✅ When to Use</strong>
                Arrows for callbacks and short functions. Regular functions for methods, constructors, and when you need <code>arguments</code>.
            </div>
        `,
        examples: [
            {
                code: `const add = (a, b) => a + b;\nconst square = x => x * x;\nconst greet = () => "Hello!";\n\nconsole.log(add(2, 3));    // 5\nconsole.log(square(4));    // 16\nconsole.log(greet());      // "Hello!"\n\n// Arrow functions in practice\nconst numbers = [1, 2, 3, 4, 5];\nconst result = numbers\n    .filter(n => n % 2 !== 0)\n    .map(n => n ** 2)\n    .reduce((sum, n) => sum + n, 0);\nconsole.log(result); // 1 + 9 + 25 = 35`,
                caption: 'Arrow functions make array method chains much more readable.'
            }
        ],
        exercises: [
            {
                question: 'Convert all regular functions to arrow functions using the most concise form.',
                starter: `const numbers = [10, 25, 30, 45, 50];\n\nconst isEven = function(n) {\n    return n % 2 === 0;\n};\n\nconst double = function(n) {\n    return n * 2;\n};\n\nconst add = function(a, b) {\n    return a + b;\n};\n\nconst result = numbers.filter(isEven).map(double).reduce(add, 0);\nconsole.log(result);`,
                solution: `const numbers = [10, 25, 30, 45, 50];\n\nconst isEven = n => n % 2 === 0;\nconst double = n => n * 2;\nconst add = (a, b) => a + b;\n\nconst result = numbers.filter(isEven).map(double).reduce(add, 0);\nconsole.log(result); // (10+30+50) * 2 = 180`,
                explanation: 'Each function has a single expression, so we use implicit return. Single-parameter arrows don\'t need parentheses.'
            },
            {
                question: 'Create an array <code>[1, 2, 3, 4, 5]</code>. Use <code>.map()</code> with an arrow function to double each element and print the result.',
                starter: `const arr = [1, 2, 3, 4, 5];
// Your code here`,
                solution: `const arr = [1, 2, 3, 4, 5];
const doubled = arr.map(x => x * 2);
console.log(doubled);`,
                explanation: 'Arrow function <code>x => x * 2</code> is passed to <code>map</code>; it runs for each element.'
            }
        ]
    },
    destructuring: {
        id: 'destructuring',
        title: 'Destructuring',
        subtitle: 'Unpacking values from arrays and objects',
        content: `
            <h2>What is Destructuring?</h2>
            <p>Destructuring (ES6) is a concise way to extract values from arrays or properties from objects into separate variables — no need for repeated <code>arr[0]</code> or <code>obj.property</code>.</p>

            <h3>Array Destructuring</h3>
            <p>Extract by <strong>position</strong>. Syntax: <code>const [a, b] = [1, 2];</code> — <code>a</code> is 1, <code>b</code> is 2. You can skip elements with empty slots, set defaults (<code>[a = 0, b] = arr</code>), or gather the rest: <code>const [first, ...rest] = arr;</code>.</p>

            <h3>Object Destructuring</h3>
            <p>Extract by <strong>property name</strong>. Syntax: <code>const { name, age } = user;</code> binds <code>user.name</code> and <code>user.age</code> to variables. Rename with <code>const { name: n } = user;</code>. Defaults: <code>const { x = 0 } = obj;</code>. You can also use rest for remaining properties.</p>

            <h3>In Function Parameters</h3>
            <p>Destructuring in parameter lists is extremely useful for options objects: one parameter object with many optional properties, each with defaults.</p>
        `,
        examples: [
            {
                code: `// Array: by position, rest, and swap
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first, second, rest); // 1 2 [3, 4, 5]

let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1`,
                caption: 'Array destructuring extracts by position; rest collects the remainder. Handy for swapping variables.'
            },
            {
                code: `// Object: by name, rename, and defaults
const user = { name: "Alice", age: 30, role: "admin" };
const { name, age, role } = user;
console.log(name, age, role);

const { name: userName, email = "N/A" } = user;
console.log(userName, email); // "Alice" "N/A"`,
                caption: 'Object destructuring extracts by property name. Use <code>prop: newName</code> to rename; <code>prop = value</code> for defaults.'
            }
        ],
        exercises: [
            {
                question: 'Destructure the first two elements of <code>[100, 200, 300]</code> into variables <code>x</code> and <code>y</code>. Print them.',
                starter: `const arr = [100, 200, 300];
// Your code here`,
                solution: `const arr = [100, 200, 300];
const [x, y] = arr;
console.log(x, y);`,
                explanation: 'Array destructuring assigns by position: first value to first variable, second to second.'
            },
            {
                question: 'Given <code>const obj = { a: 1, b: 2, c: 3 }</code>, destructure <code>a</code> and <code>c</code> and print them.',
                starter: `const obj = { a: 1, b: 2, c: 3 };
// Your code here`,
                solution: `const obj = { a: 1, b: 2, c: 3 };
const { a, c } = obj;
console.log(a, c);`,
                explanation: 'Object destructuring uses property names; order does not matter.'
            },
            {
                question: 'Use nested destructuring to extract <code>status</code>, <code>name</code>, <code>city</code>, and the first post\'s <code>title</code> from <code>apiResponse</code>. Log all four.',
                starter: `const apiResponse = {
    status: 200,
    data: {
        user: {
            id: 42,
            name: "Alice",
            address: { city: "Portland", state: "OR" }
        },
        posts: [
            { id: 1, title: "Hello World" },
            { id: 2, title: "JavaScript Tips" }
        ]
    }
};

// Extract: status, name, city, and first post title
`,
                solution: `const apiResponse = {
    status: 200,
    data: {
        user: {
            id: 42,
            name: "Alice",
            address: { city: "Portland", state: "OR" }
        },
        posts: [
            { id: 1, title: "Hello World" },
            { id: 2, title: "JavaScript Tips" }
        ]
    }
};

const {
    status,
    data: {
        user: { name, address: { city } },
        posts: [{ title: firstPostTitle }]
    }
} = apiResponse;

console.log(status, name, city, firstPostTitle);`,
                explanation: 'Nested destructuring follows the shape of the data. <code>data:</code> navigates into the property; array destructuring <code>[{ title: firstPostTitle }]</code> grabs the first element and renames <code>title</code>.'
            },
            {
                question: 'Write <code>createServer</code> that accepts one config object. Required: <code>host</code>. Optional: <code>port</code> (default 3000), <code>protocol</code> (default "http"), <code>debug</code> (default false). Use parameter destructuring. Log: <code>Server: protocol://host:port (debug: debug)</code>.',
                starter: `function createServer(/* destructured config */) {
    // console.log("Server: ...");
}

createServer({ host: "localhost" });
createServer({ host: "api.example.com", port: 443, protocol: "https", debug: true });`,
                solution: `function createServer({ host, port = 3000, protocol = "http", debug = false }) {
    console.log(\`Server: \${protocol}://\${host}:\${port} (debug: \${debug})\`);
}

createServer({ host: "localhost" });
createServer({ host: "api.example.com", port: 443, protocol: "https", debug: true });`,
                explanation: 'Destructuring with defaults in parameters is the standard pattern for options objects; callers only pass what they need.'
            }
        ]
    },
    modules: {
        id: 'modules',
        title: 'Modules',
        subtitle: 'import/export, default vs named, CommonJS',
        content: `
            <h2>ES Modules: import and export</h2>
            <p>Modules let you split code across files. <strong>Export</strong> from one file; <strong>import</strong> in another.</p>

            <h2>Named vs Default Exports</h2>
            <ul>
                <li><strong>Named:</strong> <code>export const x = 1;</code> or <code>export { x, y };</code>. Import with <code>import { x, y } from "./file.js";</code> — names must match.</li>
                <li><strong>Default:</strong> <code>export default function App() { }</code> or <code>export default class Foo { }</code>. Import with <code>import App from "./App.js";</code> — any name is fine.</li>
            </ul>
            <p>A module can have one default export and many named exports.</p>

            <h2>CommonJS (Node.js legacy)</h2>
            <p>Node traditionally uses <code>require("module")</code> and <code>module.exports = ...</code>. ES modules use <code>import</code>/<code>export</code>. In modern Node you can use ES modules with <code>"type": "module"</code> in package.json.</p>
        `,
        examples: [
            {
                code: `// utils.js (conceptually)
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// app.js (conceptually)
import { add, multiply } from "./utils.js";
console.log(add(2, 3), multiply(2, 3));`,
                caption: 'Named exports and named imports; names must match.'
            },
            {
                code: `// logger.js (conceptually)
export default function log(msg) {
    console.log("[LOG]", msg);
}

// app.js
import myLog from "./logger.js";
myLog("Hello");`,
                caption: 'Default export: one per module; import with <b>any</b> name.'
            }
        ],
        exercises: [
            {
                question: 'Simulate a module: create an object <code>math</code> with <code>add</code> and <code>subtract</code> functions. "Export" by assigning to a variable <code>exports</code>, then "import" by reading from it and call both functions.',
                starter: `// Simulated module
const math = {};
const exports = math;
// Your code: use exports to call add(5,3) and subtract(5,3)`,
                solution: `const math = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};
const exports = math;
console.log(exports.add(5, 3));
console.log(exports.subtract(5, 3));`,
                explanation: 'In real ES modules you import the same way: import { add, subtract } from "./math.js".'
            }
        ],
        quizzes: [
            { question: 'How many default exports can a single ES module have?', options: ['Zero', 'One', 'Two', 'Unlimited'], answer: 1, explanation: 'A module can have at most one default export.' },
            { question: 'With named exports, how do you import?', options: ['Import names must match the exported names', 'You can use any names', 'You must use * as namespace', 'Named exports are not supported'], answer: 0, explanation: 'Named imports use the same names as the exports: import { add } from "./utils.js".' }
        ]
    },
    data_structures: {
        id: 'data_structures',
        title: 'Data Structures (Map & Set)',
        subtitle: 'Map and Set with examples and use cases',
        content: `
            <h2>Map</h2>
            <ul>
                <li>
                    <strong>Description:</strong> <code>Map</code> holds key-value pairs. Keys can be any type (objects or primitives), and insertion order is preserved.
                </li>
                <li>
                    <strong>Core Methods:</strong>
                    <ul>
                        <li><code>set(key, value)</code></li>
                        <li><code>get(key)</code></li>
                        <li><code>has(key)</code></li>
                        <li><code>delete(key)</code></li>
                        <li><code>size</code> (property)</li>
                    </ul>
                </li>
                <li>
                    <strong>Iteration:</strong>
                    <ul>
                        <li><code>for (const [k, v] of map)</code></li>
                        <li><code>map.forEach(...)</code></li>
                    </ul>
                </li>
                <li>
                    <strong>Use Cases:</strong>
                    <span>Non-string keys, maintaining insertion order, frequent add/delete of entries.</span>
                </li>
            </ul>

            <h2>Set</h2>
            <ul>
                <li>
                    <strong>Description:</strong> <code>Set</code> holds unique values (no duplicates allowed).
                </li>
                <li>
                    <strong>Core Methods:</strong>
                    <ul>
                        <li><code>add(value)</code></li>
                        <li><code>has(value)</code></li>
                        <li><code>delete(value)</code></li>
                        <li><code>size</code> (property)</li>
                    </ul>
                </li>
                <li>
                    <strong>Iteration:</strong>
                    <ul>
                        <li><code>for (const x of set)</code></li>
                    </ul>
                </li>
                <li>
                    <strong>Use Cases:</strong>
                    <span>Deduplication of values, fast membership checks.</span>
                </li>
            </ul>
        `,
        examples: [
            {
                code: `const map = new Map();
map.set("name", "Alice");
map.set(1, "one");
map.set({ id: 1 }, "object key");

console.log(map.get("name")); // Alice
console.log(map.size);        // 3

for (const [k, v] of map) {
    console.log(k, v);
}
// "name" "Alice"
// 1 "one"
// { id: 1 } "object key"`,
                caption: '<code>Map</code>: any key type, set/get/has, iteration.'
            },
            {
                code: `const set = new Set([1, 2, 2, 3, 3, 3]);
console.log(set);       // Set(3) { 1, 2, 3 }
set.add(4);
console.log(set.has(2)); // true
const arr = [...set];   // back to array, unique
console.log(arr);  // [1, 2, 3, 4]`,
                caption: '<code>Set</code>: removes duplicates; useful for unique lists.'
            }
        ],
        exercises: [
            {
                question: 'Use a <code>Map</code> to count how many times each word appears in <code>["a", "b", "a", "c", "b", "a"]</code>. Log the Map.',
                starter: `const words = ["a", "b", "a", "c", "b", "a"];
// Your code here`,
                solution: `const words = ["a", "b", "a", "c", "b", "a"];
const counts = new Map();
for (const w of words) {
    counts.set(w, (counts.get(w) || 0) + 1);
}
console.log(counts);`,
                explanation: 'Map is ideal for counting: get current count, increment, set back.'
            },
            {
                question: 'Remove duplicates from <code>const nums = [1, 2, 2, 3, 3, 3, 4]</code> using a <code>Set</code>, then log the result as an array.',
                starter: `const nums = [1, 2, 2, 3, 3, 3, 4];
// Your code here`,
                solution: `const nums = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(nums)];
console.log(unique);`,
                explanation: 'Set keeps unique values; spread into array to get back a list.'
            }
        ],
        quizzes: [
            { question: 'What does <code>new Set([1, 1, 2, 2])</code> contain?', options: ['[1, 1, 2, 2]', 'Set with two elements: 1 and 2', 'An error', '[]'], answer: 1, explanation: 'Set stores unique values; duplicates are ignored.' },
            { question: 'How do you get the number of entries in a Map?', options: ['map.length', 'map.size', 'map.count', 'map.entries()'], answer: 1, explanation: 'Map uses the .size property, not .length.' }
        ]
    },
    dates: {
        id: 'dates',
        title: 'Dates',
        subtitle: 'Date basics, toISOString, parsing pitfalls',
        content: `
            <h2>Date Basics</h2>
            <ul>
                <li><code>new Date()</code> — current time.</li>
                <li><code>new Date(milliseconds)</code> — from Unix timestamp (milliseconds since Jan 1, 1970).</li>
                <li><code>new Date(dateString)</code> — from date string.</li>
                <li><code>new Date(year, month, day, ...)</code> — year, month, day (month is <strong>0-indexed</strong>, so <code>0</code> = January).</li>
            </ul>

            <h2>toISOString</h2>
            <ul>
                <li><code>date.toISOString()</code> returns a string in ISO 8601 format (UTC): e.g. <code>2024-01-15T12:00:00.000Z</code>.</li>
                <li>Useful for APIs and storage.</li>
            </ul>

            <h2>Parsing Pitfalls</h2>
            <ul>
                <li><code>Date.parse(string)</code> is implementation-dependent; timezone and format can surprise you.</li>
                <li>Prefer explicit <code>new Date(year, month, day)</code> or ISO strings.</li>
                <li>Some formats parse as UTC, others as local time.</li>
            </ul>
        `,
        examples: [
            {
                code: `const now = new Date();
console.log(now.toISOString());

const d = new Date(2024, 0, 15);  // Jan 15, 2024 (month 0-indexed)
console.log(d.getFullYear(), d.getMonth(), d.getDate());`,
                caption: 'Current date; constructing with year, month, day; toISOString.'
            },
            {
                code: `console.log(Date.parse("2024-01-15"));  // UTC midnight
const d = new Date("2024-01-15");
console.log(d.toISOString());  // timezone can vary by environment`,
                caption: 'Date.parse and string formats can behave differently across environments.'
            }
        ],
        exercises: [
            {
                question: 'Create a <code>Date</code> for January 1, 2025 (month 0), and log its <code>toISOString()</code>.',
                starter: `// Your code here`,
                solution: `const d = new Date(2025, 0, 1);
console.log(d.toISOString());`,
                explanation: 'Month is 0-indexed; 0 is January.'
            },
            {
                question: 'Get the current date with <code>new Date()</code>, then log the result of <code>getFullYear()</code> and <code>getMonth()</code>.',
                starter: `// Your code here`,
                solution: `const now = new Date();
console.log(now.getFullYear(), now.getMonth());`,
                explanation: 'getMonth() returns 0–11; getFullYear() returns the 4-digit year.'
            }
        ],
        quizzes: [
            { question: 'In <code>new Date(year, month, day)</code>, what does month 0 represent?', options: ['December', 'January', 'February', 'Invalid'], answer: 1, explanation: 'Months are 0-indexed in JavaScript: 0 = January, 11 = December.' },
            { question: 'What does toISOString() return?', options: ['Local time string', 'UTC ISO 8601 string', 'A number', 'A Date object'], answer: 1, explanation: 'toISOString() returns a string in UTC, e.g. 2024-01-15T12:00:00.000Z.' }
        ]
    },
    dom_manipulation: {
        id: 'dom_manipulation',
        title: 'DOM Manipulation',
        subtitle: 'Selecting, creating, and modifying elements',
        content: `
            <h2>What is the DOM?</h2>
            <p>The <strong>Document Object Model</strong> (DOM) is a tree-structured representation of an HTML document. JavaScript can read and modify this tree, updating what the user sees in real time.</p>
            <h2>Selecting Elements</h2>
            <ul>
                <li><code>document.getElementById("id")</code> — One element by ID</li>
                <li><code>document.querySelector(".class")</code> — First match (CSS selector)</li>
                <li><code>document.querySelectorAll("div")</code> — All matches (NodeList)</li>
                <li><code>element.closest(".parent")</code> — Nearest ancestor matching selector</li>
            </ul>
            <h2>Modifying Elements</h2>
            <ul>
                <li><code>el.textContent</code> — Get/set text (no HTML)</li>
                <li><code>el.innerHTML</code> — Get/set HTML content</li>
                <li><code>el.classList.add/remove/toggle("class")</code> — Modify CSS classes</li>
                <li><code>el.style.color = "red"</code> — Inline styles (use sparingly)</li>
            </ul>
            <h2>Creating & Removing Elements</h2>
            <ul>
                <li><code>document.createElement("div")</code> — Create new element</li>
                <li><code>parent.appendChild(child)</code> — Add to end</li>
                <li><code>el.remove()</code> — Remove from DOM</li>
            </ul>
        `,
        examples: [
            {
                code: `// Run in browser console or script in HTML:
const div = document.createElement('div');
div.textContent = 'Hello DOM';
document.body.appendChild(div);`, caption: 'DOM code runs in browser only'
            },
            {
                code: `// Common DOM patterns (pure logic versions)\n\n// Building a list from data\nfunction buildList(items) {\n    return items.map(item => \`<li>\${item}</li>\`).join("\\n");\n}\nconsole.log(buildList(["Apple", "Banana", "Cherry"]));`,
                caption: 'DOM patterns can be practiced as pure functions. The concepts transfer directly to browser code.'
            }
        ],
        exercises: [
            {
                question: 'Simulate DOM logic: create an object <code>el</code> with <code>tagName: "div"</code> and <code>textContent: "Hello"</code>. Log <code>el.tagName</code> and <code>el.textContent</code>. (Real DOM requires a browser.)',
                starter: `// Simulate element-like object
// Your code here`,
                solution: `const el = { tagName: "div", textContent: "" };
el.textContent = "Hello";
console.log(el.tagName, el.textContent);`,
                explanation: 'In a real browser you would use document.createElement and appendChild. Here we simulate with a plain object.'
            },
            {
                question: 'Write a function that takes an array of user objects and generates an HTML table string with name, email, and role columns.',
                starter: `function generateTable(users) {\n    // Return an HTML string for a table\n}\n\nconst users = [\n    { name: "Alice", email: "alice@test.com", role: "Admin" },\n    { name: "Bob", email: "bob@test.com", role: "User" },\n    { name: "Charlie", email: "charlie@test.com", role: "Editor" }\n];\n\nconsole.log(generateTable(users));`,
                solution: `function generateTable(users) {\n    const header = "<tr><th>Name</th><th>Email</th><th>Role</th></tr>";\n    const rows = users.map(u =>\n        \`<tr><td>\${u.name}</td><td>\${u.email}</td><td>\${u.role}</td></tr>\`\n    ).join("\\n");\n    return \`<table>\\n\${header}\\n\${rows}\\n</table>\`;\n}\n\nconst users = [\n    { name: "Alice", email: "alice@test.com", role: "Admin" },\n    { name: "Bob", email: "bob@test.com", role: "User" },\n    { name: "Charlie", email: "charlie@test.com", role: "Editor" }\n];\n\nconsole.log(generateTable(users));`,
                explanation: 'Transform data into HTML using <code>map</code> and template literals. In a real app, you would use <code>innerHTML</code> or <code>createElement</code> to insert this into the page.'
            }
        ]
    },
    events: {
        id: 'events',
        title: 'Events and Listeners',
        subtitle: 'Handling user interactions and browser events',
        content: `
            <h2>What are Events?</h2>
            <p>Events are actions in the browser — clicks, key presses, form submissions, page load. JavaScript <strong>listens</strong> for events and runs code in response.</p>
            <h2>addEventListener</h2>
            <p>The modern way to attach event handlers is <code>element.addEventListener(type, handler)</code>.</p>
            <p>When the event happens, the browser calls your <code>handler</code> function and passes an <strong>Event object</strong> containing details about what happened.</p>
            <p>You can also use <strong>arrow functions</strong> for inline handlers: <code>btn.addEventListener("click", () => console.log("Clicked!"))</code>.</p>
            
            <h2>The Event Object</h2>
            <ul>
                <li><code>event.target</code> — Element that triggered the event</li>
                <li><code>event.type</code> — Event name (e.g. "click")</li>
                <li><code>event.preventDefault()</code> — Stop default browser action (e.g. form submit, link navigation)</li>
                <li><code>event.stopPropagation()</code> — Stop the event from bubbling to parent elements</li>
            </ul>

            <h2>preventDefault vs stopPropagation</h2>
            <p><strong>preventDefault()</strong> cancels the browser's default action for the event.<br/>Example: on a form's <code>submit</code> event, <code>event.preventDefault()</code> stops the page from reloading and submitting to the server so you can validate or send via AJAX.</p>
            <p><strong>stopPropagation()</strong> stops the event from reaching other elements.<br/>Example: a button inside a form — if the button's click handler calls <code>event.stopPropagation()</code>, the form's submit handler (or click on the form) will not run. The default action (if any) of the button still runs unless you also call <code>preventDefault()</code>.</p>

            <h2>Event Delegation</h2>
            <p>Attach one listener to a <strong>parent</strong> element and use <code>event.target</code> to identify which child was clicked. This is useful for dynamic lists: new items automatically "participate" without attaching listeners to each. Check <code>event.target.matches(selector)</code> to see if the target is the element you care about.</p>
        `,
        examples: [
            {
                code: `// 1. Select the element
const btn = document.querySelector("#myBtn");

// 2. Define the handler function
function handleClick(event) {
    console.log("Button clicked!");
    console.log("Event type:", event.type);
}

// 3. Attach the listener
btn.addEventListener("click", handleClick);`, caption: 'Standard browser pattern'
            },
            {
                code: `// Inline arrow function
btn.addEventListener("click", (event) => {
    console.log("Button clicked!");
    console.log("Event type:", event.type);
});`,
                caption: 'Arrow functions are concise and great for short handlers.'
            },
            {
                code: `// Simulating how listeners work (runnable example):
const btn = {
    listeners: [],
    addEventListener(type, fn) {
        this.listeners.push(fn); 
        console.log(\`Attached '\${type}' listener\`);
    },
    click() {
        const event = { type: 'click', target: this };
        this.listeners.forEach(fn => fn(event));
    }
};

// Use it just like a real DOM element:
btn.addEventListener("click", (e) => {
    console.log("Handler ran!");
});

btn.click(); // Trigger it`,
                caption: 'Under the hood, listeners are just functions stored in a list and called when the event happens.'
            },
            {
                code: `// Event delegation: one listener on parent, use event.target
const list = { children: [
    { tagName: "LI", textContent: "A", dataset: { id: "1" } },
    { tagName: "LI", textContent: "B", dataset: { id: "2" } }
] };
list.listeners = [];
list.addEventListener = function(type, fn) { this.listeners.push(fn); };
list.click = function(target) {
    const event = { type: "click", target };
    this.listeners.forEach(fn => fn(event));
};
list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") console.log("Clicked:", e.target.dataset.id);
});
list.click(list.children[1]);  // Clicked: 2`,
                caption: 'Delegation: parent listens; event.target identifies the clicked child.'
            },
            {
                code: `// Form: preventDefault stops submit; stopPropagation stops parent from seeing click
const form = {
    submitCount: 0,
    addEventListener(type, fn) {
        if (!this._handlers) this._handlers = {};
        if (!this._handlers[type]) this._handlers[type] = [];
        this._handlers[type].push(fn);
    },
    submit(e) {
        e.preventDefault();
        this.submitCount++;
        console.log("Submit blocked, count:", this.submitCount);
    },
    fireSubmit() {
        const e = { preventDefault: () => {} };
        this._handlers?.submit?.forEach(fn => fn(e));
    }
};
form.addEventListener("submit", (e) => form.submit(e));
form.fireSubmit();`,
                caption: 'preventDefault on form submit prevents the default page reload.'
            }
        ],
        exercises: [
            {
                question: 'We have a <code>button</code> object mimicking a DOM element. Attach a <code>"click"</code> event listener that logs <code>"Submitted!"</code>.',
                starter: `const button = {
    listeners: [],
    addEventListener(type, fn) {
        if (type === 'click') this.listeners.push(fn);
    },
    trigger() {
        this.listeners.forEach(fn => fn({ type: 'click' }));
    }
};

// TODO: Add your event listener here

// Verify:
button.trigger();`,
                solution: `button.addEventListener("click", () => {
    console.log("Submitted!");
});`,
                explanation: 'You used <code>addEventListener</code> to register a callback. When the event fired, your callback executed.'
            },
            {
                question: 'The handler receives an <code>event</code> object. Attach a listener to <code>input</code> that logs <code>event.target.value</code>.',
                starter: `const input = {
    value: "Typed Text",
    listeners: [],
    addEventListener(type, fn) { this.listeners.push(fn); },
    type() {
        // Simulate user typing
        this.listeners.forEach(fn => fn({ target: this, type: 'input' }));
    }
};

// TODO: Add listener for 'input' event


input.type();`,
                solution: `const input = {
    value: "Typed Text",
    listeners: [],
    addEventListener(type, fn) { this.listeners.push(fn); },
    type() {
        this.listeners.forEach(fn => fn({ target: this, type: 'input' }));
    }
};

input.addEventListener('input', (event) => {
    console.log(event.target.value);
});

input.type();`,
                explanation: 'Accessing <code>event.target.value</code> is the standard way to get input text in the browser.'
            },
//             {
//                 question: 'Simulate event delegation: a parent <code>list</code> has <code>children: [{ tagName: "LI", id: "1" }, { tagName: "LI", id: "2" }]</code>. Attach one "click" listener to <code>list</code> that logs <code>event.target.id</code> when the target is an "LI". Trigger a click on the second child.',
//                 starter: `const list = {
//     children: [
//         { tagName: "LI", id: "1" },
//         { tagName: "LI", id: "2" }
//     ],
//     listeners: [],
//     addEventListener(type, fn) { this.listeners.push(fn); },
//     click(target) {
//         this.listeners.forEach(fn => fn({ target }));
//     }
// };
// // Your code: add listener, then list.click(list.children[1])`,
//                 solution: `const list = {
//     children: [
//         { tagName: "LI", id: "1" },
//         { tagName: "LI", id: "2" }
//     ],
//     listeners: [],
//     addEventListener(type, fn) { this.listeners.push(fn); },
//     click(target) {
//         this.listeners.forEach(fn => fn({ target }));
//     }
// };
// list.addEventListener("click", (e) => {
//     if (e.target.tagName === "LI") console.log(e.target.id);
// });
// list.click(list.children[1]);`,
//                 explanation: 'With delegation, one listener on the parent handles clicks on any child; event.target identifies which child.'
//             }
        ]
    },
    event_bubbling: {
        id: 'event_bubbling',
        title: 'Event Bubbling and Capturing',
        subtitle: 'How click events travel through nested elements',
        content: `
            <p>See the <strong>Events</strong> section for <code>preventDefault</code> vs <code>stopPropagation</code> with form examples.</p>
            <h2>Why This Matters</h2>
            <p>HTML is nested: a button sits inside a <code>div</code>, which sits inside <code>body</code>, which sits inside <code>document</code>. When you click the button, the click physically happened on the button — but it also happened <em>inside</em> the div, body, and document. So who gets to handle the event, and in what order?</p>
            <p>The browser runs the event through <strong>three phases</strong>. Your listeners run in one of those phases depending on how you registered them.</p>

            <h2>The Three Phases (in order)</h2>
            <ol>
                <li><strong>Capturing:</strong> The event travels <em>down</em> from the root (<code>document</code> → <code>body</code> → … → the element you clicked). Listeners that registered with <code>capture: true</code> run in this phase.</li>
                <li><strong>Target:</strong> The event has reached the element that was actually clicked (the "target"). Any listener on that element runs here.</li>
                <li><strong>Bubbling:</strong> The event travels <em>up</em> from the target back to <code>document</code> (target → parent → … → <code>document</code>). By default, your listeners run in this phase.</li>
            </ol>
            <p>So for a click on a button inside a div: <strong>capture</strong> runs on document, then body, then div (going down); <strong>target</strong> runs on the button; <strong>bubble</strong> runs on div, then body, then document (going up).</p>

            <h2>Default: Bubbling</h2>
            <p><code>addEventListener('click', handler)</code> (with no third argument, or <code>false</code>) registers for the <strong>bubbling</strong> phase. So when you click a button inside a div and both have click listeners, the <strong>button’s handler runs first</strong> (target phase), then the <strong>div’s handler</strong> (bubbling phase). That’s "bubbling" — the event bubbles up from the inner element to the outer ones.</p>

            <h2>Capturing: Run on the Way Down</h2>
            <p>If you need your handler to run <em>before</em> the target (e.g. a global click logger, or something that must run first), use the third argument: <code>addEventListener('click', handler, { capture: true })</code> (or the old form <code>true</code>). Your listener then runs during the capturing phase — when the event is traveling down toward the target. Capture listeners run from outermost to innermost.</p>

            <h2>Stopping Propagation</h2>
            <ul>
                <li><code>event.stopPropagation()</code> — Stops the event from continuing to other elements. If you call it in a bubbling listener on the button, the div’s click handler will never run. If you call it in a capturing listener, the event never reaches the target or bubbling phase.</li>
                <li><code>event.stopImmediatePropagation()</code> — Same as above, plus it stops any <em>other</em> listeners on the <em>same</em> element from running.</li>
            </ul>
        `,
        examples: [
            {
                code: `// Nested structure: outer > middle > inner (e.g. div > div > button)
// All use default (bubbling). Click the innermost element.
const phases = [];
document.querySelector('.outer')?.addEventListener('click', () => {
    phases.push('outer-bubble');
});
document.querySelector('.middle')?.addEventListener('click', () => {
    phases.push('middle-bubble');
});
document.querySelector('.inner')?.addEventListener('click', () => {
    phases.push('inner-target');
});
// After click on inner: phases = ['inner-target', 'middle-bubble', 'outer-bubble']
console.log('Order (default):', phases.join(' → '));`,
                caption: 'Default listeners run in target order then bubble up: inner first, then middle, then outer.'
            },
            {
                code: `// Same structure. One listener with capture: true on outer.
document.querySelector('.outer')?.addEventListener(
    'click', () => console.log('outer-CAPTURE'), { capture: true });
document.querySelector('.outer')?.addEventListener(
    'click', () => console.log('outer-bubble'));
document.querySelector('.inner')?.addEventListener(
    'click', () => console.log('inner-target'));
// Click inner: "outer-CAPTURE" first, then "inner-target", then "outer-bubble".`,
                caption: 'Capture runs on the way down; it fires before the target and before bubble.'
            },
            {
                code: `// Third argument: false (or omit) = bubble, true or { capture: true } = capture
element.addEventListener('click', handler);                    // bubble (default)
element.addEventListener('click', handler, false);             // bubble
element.addEventListener('click', handler, true);              // capture (old style)
element.addEventListener('click', handler, { capture: true});  // capture (preferred)`,
                caption: 'How to choose the phase when adding a listener.'
            },
            {
                code: `// On button click, stop propagation so the parent div listener never runs
button.addEventListener('click', (e) => {
    console.log('Button clicked');
    e.stopPropagation();  // divs click listener will NOT run
});

// never runs if button called stopPropagation
div.addEventListener('click', () => console.log('Div clicked'));`,
                caption: 'stopPropagation() prevents the event from reaching other elements (e.g. parent).'
            }
        ],
        quizzes: [
            {
                question: 'When you click a button inside a div, and both have default click listeners, which runs first?',
                options: ['The div\'s listener', 'The button\'s listener', 'They run at the same time', 'Only the button\'s listener runs'],
                answer: 1,
                explanation: 'The button is the target, so its listener runs in the target phase. Then the event bubbles up, so the div\'s listener runs in the bubbling phase. Target runs before bubble.'
            },
            {
                question: 'In what order do the three event phases always occur?',
                options: ['Target → Capture → Bubble', 'Capture → Target → Bubble', 'Bubble → Target → Capture', 'Target → Bubble → Capture'],
                answer: 1,
                explanation: 'The event always goes: first capturing (down from document to target), then target, then bubbling (up from target to document).'
            },
            {
                question: 'You add a click listener with { capture: true } on a div. The user clicks a button inside that div. When does your div\'s listener run?',
                options: ['After the button\'s listener', 'At the same time as the button\'s listener', 'Before the button\'s listener', 'Only if the button has no listener'],
                answer: 2,
                explanation: 'Capture phase runs on the way down to the target. So the div\'s capture listener runs before the event reaches the button (target phase).'
            },
            {
                question: 'What does event.stopPropagation() do?',
                options: ['Prevents the default browser action (e.g. following a link)', 'Stops the event from reaching other elements\' listeners', 'Removes all listeners from the element', 'Pauses the event for 1 second'],
                answer: 1,
                explanation: 'stopPropagation() stops the event from continuing to the next phase or to parent/child elements, so other listeners on other elements do not run.'
            },
            {
                question: 'What is the difference between stopPropagation() and stopImmediatePropagation()?',
                options: ['There is no difference', 'stopImmediatePropagation() also stops other listeners on the same element', 'stopImmediatePropagation() only works in the capturing phase', 'stopPropagation() only works for click events'],
                answer: 1,
                explanation: 'Both stop the event from reaching other elements. stopImmediatePropagation() additionally prevents any other listeners attached to the same element from running.'
            }
        ]
    },
    event_loop: {
        id: 'event_loop',
        title: 'The Event Loop',
        subtitle: 'How JavaScript schedules async work on one thread',
        content: `
            <h2>JavaScript is Single-Threaded</h2>
            <p>JavaScript runs your code on a single call stack, one function at a time. So how can it handle timers, network requests, and user events without freezing? The <strong>event loop</strong> coordinates what runs next.</p>

            <h2>The Components</h2>
            <ul>
                <li><strong>Call Stack:</strong> Where functions execute (synchronous code runs here).</li>
                <li><strong>Web APIs:</strong> Browser-provided features that handle async work like timers, <code>fetch</code>, and DOM events.</li>
                <li><strong>Callback Queue (Macrotask Queue):</strong> Completed callbacks (like <code>setTimeout</code>) wait here.</li>
                <li><strong>Microtask Queue:</strong> Higher priority. Promise callbacks and <code>queueMicrotask</code> go here.</li>
            </ul>
            <p>Async work runs outside the call stack. When it completes, its callback is placed into either the macrotask queue (e.g. timers) or the microtask queue (e.g. Promise reactions), waiting for the event loop to schedule it.</p>

            <h2>How the Event Loop Works</h2>
            <ol>
                <li>Execute all synchronous code on the call stack</li>
                <li>When the stack is empty, drain <strong>all</strong> microtasks</li>
                <li>Take <strong>one</strong> macrotask from the callback queue</li>
                <li>Repeat from step 2</li>
            </ol>

            <div class="info-box important">
                <strong>Microtasks &gt; Macrotasks</strong>
                Promise callbacks always run before <code>setTimeout</code>/<code>setInterval</code> callbacks scheduled for “as soon as possible”.
            </div>
        `,
        examples: [
            {
                code: `// Classic event loop puzzle
console.log("1: Start");

setTimeout(() => {
    console.log("2: Timeout (macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("3: Promise (microtask)");
});

console.log("4: End");

// Output: 1: Start, 4: End, 3: Promise, 2: Timeout`,
                caption: 'Even with a 0ms timeout, microtasks (Promises) always run before macrotasks (setTimeout).'
            },
            {
                code: `// Microtasks drain fully before the next macrotask
console.log("A");

setTimeout(() => console.log("B (macrotask)"), 0);

Promise.resolve().then(() => {
    console.log("C (microtask 1)");
    queueMicrotask(() => console.log("D (microtask 2)"));
});

console.log("E");

// Output: A, E, C (microtask 1), D (microtask 2), B (macrotask)`,
                caption: 'Microtasks run to completion (including microtasks created inside microtasks) before the next macrotask.'
            }
        ],
        exercises: [
            {
                question: 'Predict the exact output order. Write predictions as comments first, then run to verify.',
                starter: `// Predict the output order!
console.log("1");

setTimeout(() => console.log("2"), 100);
setTimeout(() => console.log("3"), 0);

Promise.resolve()
    .then(() => {
        console.log("4");
        setTimeout(() => console.log("5"), 0);
    })
    .then(() => console.log("6"));

Promise.resolve().then(() => console.log("7"));

console.log("8");`,
                solution: `Order: 1, 8, 4, 7, 6, 3, 5, 2`,
                explanation: 'Sync first (1, 8). Then microtasks drain: first <code>.then</code> callbacks (4, 7), then the chained one (6). Then macrotasks in order: 3, 5, and finally 2 (after ~100ms).'
            }
        ],
        quizzes: [
            {
                question: 'Which runs first: <code>Promise.then()</code> or <code>setTimeout(fn, 0)</code>?',
                options: ['setTimeout — it was in the API first', 'Promise.then — microtasks have priority', 'They run simultaneously', 'It depends on the browser'],
                answer: 1,
                explanation: 'Promise callbacks are microtasks and are drained before the next macrotask (like setTimeout).'
            }
        ]
    },
    httprequest: {
        id: 'http',
        title: 'HTTP Basics',
        subtitle: 'Requests, responses, methods, and status codes',
        content: `
            <h2>HTTP Basics</h2>
            <p>HTTP is how browsers communicate with servers. JavaScript uses HTTP to fetch data, submit forms, and interact with APIs.</p>

            <h2>Request vs Response</h2>
            <p>Think of HTTP like sending a message and getting a reply. The client (browser/app) sends a <strong>request</strong>, and the server returns a <strong>response</strong>.</p>
            <ul>
                <li><strong>Request</strong>: method + URL + headers + optional body</li>
                <li><strong>Response</strong>: status code + headers + body (often JSON)</li>
            </ul>

            <h2>URLs (Paths & Query Params)</h2>
            <p>A URL often contains a <strong>path</strong> (what resource you want) and optional <strong>query parameters</strong> (filters/options).</p>
            <ul>
                <li><strong>Path</strong>: <code>/users/123</code> (a specific user)</li>
                <li><strong>Query</strong>: <code>?limit=10&amp;sort=name</code> (options for the request)</li>
            </ul>

            <h2>HTTP Methods</h2>
            <p>Methods describe the <em>intent</em> of your request.</p>
            <ul>
                <li><code>GET</code> — Retrieve data (safe, should not change server state)</li>
                <li><code>POST</code> — Create new data</li>
                <li><code>PUT</code> — Replace existing data (usually idempotent)</li>
                <li><code>PATCH</code> — Partial update (change only specific fields)</li>
                <li><code>DELETE</code> — Remove data (usually idempotent)</li>
            </ul>
            <p><strong>Safe</strong> means “should not change server data” (GET). <strong>Idempotent</strong> means “repeating the same request has the same end result” (PUT/DELETE are commonly designed this way).</p>

            <h2>Status Codes</h2>
            <p>Status codes are quick summaries of what happened. Don’t guess success from the body — check the status.</p>
            <ul>
                <li><code>2xx</code> — Success (200 OK, 201 Created, 204 No Content)</li>
                <li><code>3xx</code> — Redirect</li>
                <li><code>4xx</code> — Client Error (400 Bad Request, 401 Unauthorized, 404 Not Found, 409 Conflict)</li>
                <li><code>5xx</code> — Server Error (500)</li>
            </ul>
            <p>Two common “gotchas”: <code>204</code> means success with <em>no body</em>, and <code>401</code> is about authentication (missing/invalid login), while <code>403</code> is authorization (logged in but not allowed).</p>

            <h2>Headers & JSON</h2>
            <p>Headers are key/value metadata about the request or response.</p>
            <ul>
                <li><code>Content-Type</code> — what you are sending (e.g. <code>application/json</code>)</li>
                <li><code>Accept</code> — what you want back (often <code>application/json</code>)</li>
                <li><code>Authorization</code> — credentials (for protected endpoints)</li>
            </ul>
            <p>When sending JSON, you usually <code>JSON.stringify</code> a JavaScript object into a string. When receiving JSON, you parse it into an object before reading properties.</p>
            <p><strong>HTTP errors vs network errors:</strong> a request can “succeed” at the network level but still return a <code>404</code> or <code>500</code>. Your code should handle both kinds of failures.</p>
        `,
        examples: [
            {
                code: `// Mock API to practice HTTP concepts
function createMockAPI() {
    const store = {};
    return {
        get(key) {
            if (key in store) return { status: 200, data: store[key] };
            return { status: 404, error: "Not found" };
        },
        post(key, data) {
            if (key in store) return { status: 409, error: "Exists" };
            store[key] = data;
            return { status: 201, data: store[key] };
        },
        put(key, data) {
            if (!(key in store)) return { status: 404, error: "Not found" };
            store[key] = data;
            return { status: 200, data: store[key] };
        },
        delete(key) {
            if (!(key in store)) return { status: 404, error: "Not found" };
            delete store[key];
            return { status: 204, data: null };
        }
    };
}

const api = createMockAPI();
console.log(api.post("user1", { name: "Alice" }));
console.log(api.get("user1"));
console.log(api.put("user1", { name: "Alice Updated" }));
console.log(api.delete("user1"));
console.log(api.get("user1"));`,
                caption: 'A mock API following REST conventions — useful for practicing without a real backend.'
            }
        ],
        exercises: [
            {
                question: 'Add a <code>patch</code> method to this mock API that partially updates a resource (merges fields instead of replacing).',
                starter: `function createMockAPI() {
    const store = {};
    return {
        post(key, data) {
            store[key] = data;
            return { status: 201, data: store[key] };
        },
        get(key) {
            return key in store
                ? { status: 200, data: store[key] }
                : { status: 404, error: "Not found" };
        },
        patch(key, partialData) {
            // Merge partialData into existing resource
        }
    };
}

const api = createMockAPI();
api.post("user1", { name: "Alice", age: 30, role: "user" });
console.log(api.get("user1"));

api.patch("user1", { role: "admin" });
console.log(api.get("user1"));
// Should show { name: "Alice", age: 30, role: "admin" }`,
                solution: `patch(key, partialData) {
    if (!(key in store)) return { status: 404, error: "Not found" };
    store[key] = { ...store[key], ...partialData };
    return { status: 200, data: store[key] };
}`,
                explanation: 'PATCH merges partial data using object spread: <code>{ ...existing, ...partial }</code>. Only the specified fields change — unlike PUT which replaces the entire resource.'
            }
        ]
    },
    json: {
        id: 'json',
        title: 'JSON',
        subtitle: 'Parsing, stringifying, and working with JSON',
        content: `
            <h2>What is JSON?</h2>
            <p>JSON is a lightweight text format for exchanging data. It's the standard for APIs and config files.</p>
            <h2>JSON Rules</h2>
            <ul>
                <li>Keys must be double-quoted strings</li>
                <li>Values: strings, numbers, booleans, null, arrays, objects</li>
                <li>No trailing commas, no comments, no <code>undefined</code>, no functions</li>
            </ul>
            <h2>JavaScript JSON Methods</h2>
            <ul>
                <li><code>JSON.stringify(obj)</code> — Converts a JavaScript value to a JSON string</li>
                <li><code>JSON.parse(str)</code> — Parses a JSON string into a JavaScript value. Invalid JSON throws.</li>
                <li><code>JSON.stringify(obj, null, 2)</code> — Pretty-print (2-space indent)</li>
                <li><code>JSON.stringify(obj, replacer)</code> — Custom serialization (replacer function or key array)</li>
                <li><code>JSON.parse(str, reviver)</code> — Optional <strong>reviver</strong> function <code>(key, value) => ...</code> called for each key-value pair; return the transformed value (e.g. turn ISO date strings into <code>Date</code> objects).</li>
            </ul>

            <h2>Circular Reference Error</h2>
            <p>If an object references itself (e.g. <code>obj.self = obj</code>), <code>JSON.stringify</code> will throw a <code>TypeError</code> because JSON cannot represent cycles. Use try/catch when stringifying unknown structures, or detect cycles and skip/serialize by id.</p>

            <div class="info-box warning">
                <strong>⚠️ What JSON Cannot Represent</strong>
                <code>undefined</code>, functions, <code>Symbol</code>, <code>Infinity</code>, <code>NaN</code>, circular references, <code>Date</code> objects (become strings).
            </div>
        `,
        examples: [
            {
                code: `const user = {\n    name: "Alice",\n    age: 30,\n    hobbies: ["reading", "coding"]\n};\n\n// Object -> JSON string\nconst jsonStr = JSON.stringify(user);\nconsole.log(jsonStr);
// Output: {"name":"Alice","age":30,"hobbies":["reading","coding"]}
\n// Pretty print\nconsole.log(JSON.stringify(user, null, 2));
// Output: {
//           "name": "Alice",
//           "age": 30,
//           "hobbies": [
//                "reading",
//               "coding"
//           ]
//         }

// JSON string -> Object\nconst parsed = JSON.parse(jsonStr);\nconsole.log(parsed.name);  // Output: "Alice"\n\n// Deep clone trick\nconst original = { a: 1, b: { c: 2 } };\nconst clone = JSON.parse(JSON.stringify(original));\nclone.b.c = 99;\nconsole.log(original.b.c);  // 2 (unaffected)`,
                caption: '<code>JSON.stringify</code> and <code>JSON.parse</code> are inverse operations. Also useful for deep cloning.'
            },
            {
                code: `const user = { id: 1, name: "Bob", password: "secret", role: "admin" };
const safe = JSON.stringify(user, ["id", "name", "role"]);
console.log(safe);  // Output: {"id":1,"name":"Bob","role":"admin"}`, caption: 'Replacer: serialize only selected keys (e.g. omit password)'
            },
            {
                code: `const o = { a: 1, b: undefined, c: function() {} };
console.log(JSON.stringify(o));  // Output: {"a":1}`, caption: '<code>undefined</code> and functions are omitted from JSON output'
            },
            {
                code: `const obj = { name: "loop" };
obj.self = obj;
try {
    JSON.stringify(obj);
} catch (e) {
    console.log(e.name, e.message);  // TypeError: circular structure`,
                caption: 'Circular references cause JSON.stringify to throw.'
            },
            {
                code: `const json = '{"name":"Alice","created":"2024-01-15T12:00:00.000Z"}';
const parsed = JSON.parse(json, (key, value) => {
    if (key === "created" && typeof value === "string") return new Date(value);
    return value;
});
console.log(parsed.created instanceof Date);  // true`,
                caption: 'Reviver can turn ISO date strings into Date objects.'
            }
        ],
        exercises: [
            {
                question: 'Parse the string <code>\'{"x": 10, "y": 20}\'</code> with <code>JSON.parse</code>, then log the sum of <code>x</code> and <code>y</code>.',
                starter: `// Your code here`,
                solution: `const data = JSON.parse('{"x": 10, "y": 20}');
console.log(data.x + data.y);`,
                explanation: '<code>JSON.parse</code> returns a plain object; access properties normally.'
            },
            {
                question: 'Create an object <code>{ id: 1, name: "Test" }</code> and convert it to a JSON string with <code>JSON.stringify</code>. Print the string.',
                starter: `// Your code here`,
                solution: `const obj = { id: 1, name: "Test" };
console.log(JSON.stringify(obj));`,
                explanation: '<code>JSON.stringify</code> produces a string representation of the object.'
            },
            {
                question: 'Pretty-print an object <code>{ title: "JSON", topics: ["parse", "stringify"] }</code> and log the result.',
                starter: `// Your code here`,
                solution: `const obj = { title: "JSON", topics: ["parse", "stringify"] };
console.log(JSON.stringify(obj, null, 2));`,
                explanation: 'The third argument to <code>JSON.stringify</code> is the indent (number of spaces or string) for readable output.'
            },
            {
                question: 'Write <code>safeJsonParse</code> that returns a default value instead of throwing on invalid JSON.',
                starter: `function safeJsonParse(str, fallback) {\n    // Parse str, return fallback if invalid\n}\n\nconsole.log(safeJsonParse('{"name":"Alice"}', {}));\nconsole.log(safeJsonParse('invalid json', {}));\nconsole.log(safeJsonParse('null', "default"));\nconsole.log(safeJsonParse(undefined, []));`,
                solution: `function safeJsonParse(str, fallback) {\n    try {\n        return JSON.parse(str);\n    } catch {\n        return fallback;\n    }\n}`,
                explanation: '<code>JSON.parse</code> throws on invalid input. try/catch with a fallback is a common utility. Note: <code>"null"</code> is valid JSON.'
            },
            {
                question: 'Write <code>safeStringify(obj)</code> that returns <code>JSON.stringify(obj)</code> or the string <code>"{}"</code> if stringify throws (e.g. circular reference).',
                starter: `function safeStringify(obj) {\n    // Your code\n}\nconst a = {};\na.self = a;\nconsole.log(safeStringify({ x: 1 }));\nconsole.log(safeStringify(a));`,
                solution: `function safeStringify(obj) {\n    try {\n        return JSON.stringify(obj);\n    } catch {\n        return "{}";\n    }\n}\nconst a = {};\na.self = a;\nconsole.log(safeStringify({ x: 1 }));\nconsole.log(safeStringify(a));`,
                explanation: 'try/catch around JSON.stringify handles circular references (and other non-serializable values) gracefully.'
            },
            {
                question: 'Parse <code>\'{"title":"Event","date":"2024-06-01T00:00:00.000Z"}\'</code> with <code>JSON.parse</code> and a <strong>reviver</strong> that converts the <code>date</code> string into a <code>Date</code> object. Log <code>parsed.date instanceof Date</code>.',
                starter: `const str = '{"title":"Event","date":"2024-06-01T00:00:00.000Z"}';
// Your code: parse with reviver`,
                solution: `const str = '{"title":"Event","date":"2024-06-01T00:00:00.000Z"}';
const parsed = JSON.parse(str, (key, value) => {
    if (key === "date" && typeof value === "string") return new Date(value);
    return value;
});
console.log(parsed.date instanceof Date);`,
                explanation: 'The reviver runs for each key-value pair; return the value (or a transformed value like new Date(value)).'
            }
        ],
        quizzes: [
            {
                question: 'What happens when you call JSON.stringify on an object that contains a circular reference?',
                options: ['It serializes as "undefined"', 'It throws a TypeError', 'It ignores the circular property', 'It creates an infinite string'],
                answer: 1,
                explanation: 'JSON.stringify cannot represent cycles, so it throws a TypeError (circular structure).'
            },
            {
                question: 'What is the purpose of the reviver parameter in JSON.parse?',
                options: ['To validate the JSON string', 'To transform values during parsing (e.g. date strings to Date objects)', 'To remove keys', 'To pretty-print the result'],
                answer: 1,
                explanation: 'The reviver function (key, value) is called for each property; you can return a transformed value (e.g. new Date(value) for date strings).'
            }
        ]
    },
    promises: {
        id: 'promises',
        title: 'Promises',
        subtitle: 'Creation, chaining, and error handling',
        content: `
            <h2>What is a Promise?</h2>
            <p>A Promise represents the eventual completion (or failure) of an async operation. It provides a clean, chainable way to handle async results.</p>
            <p>Create with <code>new Promise((resolve, reject) => { ... })</code></p>
            <p>Call <code>resolve(value)</code> or <code>reject(err)</code> when done.</p>
            <h2>Promise States & Usage</h2>
            <ul>
                <li><strong>Pending:</strong> Operation in progress.</li>
                <li><strong>Fulfilled (Success):</strong> <code>.then(value => ...)</code> runs.</li>
                <li><strong>Rejected (Failure):</strong> <code>.catch(error => ...)</code> runs.</li>
            </ul>
            <p><strong>Handling Results:</strong> Prefer chaining <code>.then().catch()</code> over the older <code>.then(success, fail)</code> pattern. Use <code>.finally()</code> to run code regardless of outcome.</p>
            <p><strong>Chaining:</strong> Returning a value from <code>.then()</code> passes it to the next <code>.then()</code>.</p>
            <h2>Promise Combinators</h2>
            <ul>
                <li><code>Promise.all([])</code> — Wait for ALL to resolve (fail-fast)</li>
                <li><code>Promise.allSettled([])</code> — Wait for ALL to settle (never fails)</li>
                <li><code>Promise.race([])</code> — First to settle wins</li>
                <li><code>Promise.any([])</code> — First to fulfill wins</li>
            </ul>
        `,
        examples: [
            {
                code: `const check = (success) => new Promise((resolve, reject) => {
  success ? resolve("Ok!") : reject(new Error("Fail!"));
});

check(true).then(console.log);                   // "Ok!"
check(false).catch(e => console.log(e.message)); // "Fail!"`, caption: 'Handling success (<code>.then</code>) and failure (<code>.catch</code>)'
            },
            {
                code: `const a = Promise.resolve(1);
const b = Promise.resolve(2);
Promise.all([a, b]).then(([x, y]) => console.log(x + y));  // 3`, caption: '<code>Promise.all</code>: wait for all, get array of results'
            },
            {
                code: `const fast = Promise.resolve("first");
const slow = new Promise(r => setTimeout(() => r("second"), 100));
Promise.race([fast, slow]).then(console.log);  // "first"`, caption: '<code>Promise.race</code>: first to settle wins'
            },
            {
                code: `// Creating and chaining Promises\nfunction fetchUser(id) {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            if (id > 0) resolve({ id, name: "User " + id });\n            else reject(new Error("Invalid user ID"));\n        }, 100);\n    });\n}\n\nfetchUser(1)\n    .then(user => {\n        console.log("Got:", user.name);\n        return fetchUser(2);\n    })\n    .then(user => console.log("Got:", user.name))\n    .catch(err => console.error("Error:", err.message))\n    .finally(() => console.log("Done!"));`,
                caption: 'Promises chain with <code>.then()</code>. Each receives the return value of the previous one.'
            }
        ],
        exercises: [
            {
                question: 'Create a Promise that resolves with the string <code>"Hello"</code> after 0ms (use <code>setTimeout</code> inside the executor). Then use <code>.then</code> to log the value.',
                starter: `// Your code here`,
                solution: `const p = new Promise((resolve) => {
  setTimeout(() => resolve("Hello"), 0);
});
p.then(value => console.log(value));`,
                explanation: 'The executor runs immediately; resolve is called when the timeout fires.'
            },
            {
                question: 'Create a Promise that resolves with the number 42. Chain <code>.then</code> to multiply by 2 and log the result.',
                starter: `// Your code here`,
                solution: `const p = Promise.resolve(42);
p.then(n => n * 2).then(result => console.log(result));`,
                explanation: 'Returning a value from then passes it to the next then.'
            },
            {
                question: 'Use <code>Promise.all</code> on an array of two promises: <code>Promise.resolve(10)</code> and <code>Promise.resolve(20)</code>. In <code>.then</code>, destructure the result as <code>[a, b]</code> and log <code>a + b</code>.',
                starter: `// Your code here`,
                solution: `Promise.all([Promise.resolve(10), Promise.resolve(20)])
  .then(([a, b]) => console.log(a + b));`,
                explanation: '<code>Promise.all</code> resolves with an array of results in the same order as the input promises.'
            },
            {
                question: 'Implement <code>promiseTimeout</code> that rejects with "Timeout" if a promise doesn\'t resolve in time.',
                starter: `function promiseTimeout(promise, ms) {\n    // Use Promise.race\n}\n\n// Fast enough\nconst fast = new Promise(r => setTimeout(() => r("done!"), 50));\npromiseTimeout(fast, 200)\n    .then(v => console.log("Success:", v))\n    .catch(e => console.log("Failed:", e));\n\n// Too slow\nconst slow = new Promise(r => setTimeout(() => r("done!"), 500));\npromiseTimeout(slow, 100)\n    .then(v => console.log("Success:", v))\n    .catch(e => console.log("Failed:", e));`,
                solution: `function promiseTimeout(promise, ms) {\n    const timeout = new Promise((_, reject) => {\n        setTimeout(() => reject("Timeout"), ms);\n    });\n    return Promise.race([promise, timeout]);\n}`,
                explanation: '<code>Promise.race</code> settles as soon as the first promise does. We race against a timeout — if the timeout fires first, the race rejects.'
            }
        ],
        quizzes: [
            { question: 'What are the possible states of a <code>Promise</code>?', options: ['pending and done', 'pending, fulfilled, rejected', 'running and stopped', 'sync and async'], answer: 1, explanation: 'A Promise is pending until it is either fulfilled with a value or rejected with a reason.' },
            { question: 'What does <code>Promise.all</code> do if one promise rejects?', options: ['Waits for the rest', 'Resolves with undefined', 'Rejects immediately (fail-fast)', 'Retries the rejected promise'], answer: 2, explanation: '<code>Promise.all</code> is fail-fast: if any promise rejects, the whole thing rejects.' }
        ]
    },
    fetch: {
        id: 'fetch',
        title: 'Fetch API',
        subtitle: 'The modern way to make HTTP requests',
        content: `
        <h2>What is the Fetch API?</h2>
            <p>The Fetch API is the modern, Promise-based replacement for XMLHttpRequest.</p>
            <div class="info-box note">
                <strong>Legacy: XMLHttpRequest (XHR)</strong>
                Before <code>fetch</code>, developers used <code>XMLHttpRequest</code>. It was event-based, verbose, and lacked native Promise support (leading to "callback hell").
            </div>

            <h2>fetch(url, options?)</h2>
            <p>Starts a network request and returns a Promise that resolves to a Response object.</p>
            <ul>
                <li><strong>Check Status:</strong> Use <code>response.ok</code> (true if 200-299) or <code>response.status</code>.</li>
                <li><strong>Read Body:</strong> Use <code>response.json()</code> or <code>response.text()</code> (both return Promises).</li>
                <li><strong>POST:</strong> Pass options: <code>{ method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }</code>.</li>
            </ul>
        `,
        examples: [
            {
                code: `// Mock implementation for demo environment
const fetch = (url) => Promise.resolve({
  ok: true,
  status: 200,
  json: () => Promise.resolve({ id: 1, name: "Alice" })
});

// 1. Start request
fetch('https://api.example.com/data')
  // 2. Wait for headers, check status, parse body
  .then(res => {
    if (!res.ok) throw new Error("HTTP error " + res.status);
    return res.json(); // Returns a promise for the JSON body
  })
  // 3. Receive parsed data
  .then(data => console.log(data))
  .catch(err => console.error("Fetch failed:", err));`, caption: '<code>GET</code> request with error handling'
            },
            {
                code: `// Mock implementation for demo environment
const fetch = (url, options) => Promise.resolve({
  ok: true,
  json: () => Promise.resolve({ id: 101, ...JSON.parse(options.body) })
});

const postData = { title: "New Post", body: "Hello World" };

fetch('https://api.example.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }, // Tell server we're sending JSON
  body: JSON.stringify(postData) // Convert object to JSON string
})
  .then(res => res.json())
  .then(savedPost => console.log("Saved:", savedPost));`, caption: '<code>POST</code> request sending JSON data'
            }
        ],
        exercises: [
            {
                question: 'Simulate a fetch response: create <code>const res = { ok: true, json: () => Promise.resolve({ title: "Hello" }) }</code>. Call <code>res.json()</code> and use <code>.then</code> to log <code>data.title</code>.',
                starter: `// Your code here`,
                solution: `const res = { ok: true, json: () => Promise.resolve({ title: "Hello" }) };
res.json().then(data => console.log(data.title));`,
                explanation: 'In real code you would use <code>fetch(url).then(r => r.json()).then(...)</code>.'
            },
            {
                question: 'Write the <code>options</code> object for a POST request to send <code>{ name: "Alice" }</code> as JSON.',
                starter: `const options = {
  // method, headers, body...
};`,
                solution: `const options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: "Alice" })
};`,
                explanation: 'Set method to POST, Content-Type header to application/json, and body to the stringified object.'
            },
            {
                question: 'Write a complete fetch chain using <code>mockFetch()</code>. 1. Check <code>res.ok</code> (throw if false). 2. Return <code>res.json()</code>. 3. Log the data. 4. Catch and log errors.',
                starter: `const mockFetch = (success = true) => Promise.resolve({
  ok: success,
  status: success ? 200 : 404,
  json: () => Promise.resolve({ message: "Data received" })
});

mockFetch(true)
  // Your code here: chain .then, check ok, parse json, log data, .catch`,
                solution: `mockFetch(true)
  .then(res => {
    if (!res.ok) throw new Error("Error: " + res.status);
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.log(err.message));`,
                explanation: 'A robust fetch chain handles the status check, JSON parsing, data usage, and error catching.'
            }
        ],
        quizzes: [
            { question: 'What does <code>fetch(url)</code> return?', options: ['The JSON data directly', 'A Promise that resolves to a Response object', 'The HTML content string', 'undefined'], answer: 1, explanation: 'Fetch returns a Promise that resolves to the Response object, representing the entire HTTP response.' },
            { question: 'Why must we use <code>response.json()</code>?', options: ['To decrypt the data', 'To parse the body stream as JSON', 'To check the status code', 'To send data to the server'], answer: 1, explanation: 'The response body is a readable stream; .json() reads it to completion and parses it.' },
            { question: 'True or False: fetch() rejects the promise on HTTP 404 error.', options: ['True', 'False'], answer: 1, explanation: 'False. Fetch only rejects on network failure. You must check res.ok for HTTP errors.' }
        ]
    },
    async_await: {
        id: 'async_await',
        title: 'Async/Await',
        subtitle: 'Writing asynchronous code that reads like synchronous code',
        content: `
            <h2>What is async/await?</h2>
            <p>Introduced in ES2017, <code>async/await</code> is syntactic sugar over Promises. It allows you to write asynchronous code that looks and behaves like synchronous code, avoiding "callback hell" or complex <code>.then()</code> chains.</p>
            <h2>How It Works</h2>
            <ul>
                <li><code>async function</code> — Always returns a Promise. If you return a value, it wraps it; if you throw, it rejects.</li>
                <li><code>await</code> — Pauses execution of the function until the Promise settles. Can only be used inside an <code>async</code> function.</li>
                <li><strong>Error handling:</strong> Use standard <code>try/catch</code> blocks instead of <code>.catch()</code>.</li>
            </ul>
            <h2>Common Patterns</h2>
            <ul>
                <li><strong>Sequential:</strong> <code>await</code> one after another (slower, but order guaranteed).</li>
                <li><strong>Parallel:</strong> <code>const [a, b] = await Promise.all([p1, p2])</code> (faster).</li>
            </ul>
            <div class="info-box tip">
                <strong>✅ Best Practice</strong>
                Use <code>async/await</code> for most logic. Fall back to direct Promise chains only when dealing with complex combinators or simple one-liners.
            </div>
        `,
        examples: [
            {
                code: `// Simulated async API
const delay = (ms) => new Promise(r => setTimeout(r, ms));

async function fetchUser(id) {
    await delay(100);
    return { id, name: \`User \${id}\` };
}

async function fetchPosts(userId) {
    await delay(100);
    return [{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" }];
}

// Sequential: wait for user, THEN wait for posts
async function getUserWithPosts(id) {
    const user = await fetchUser(id);
    const posts = await fetchPosts(user.id);
    console.log("Sequential:", { user, posts });
}

// Parallel: start both, wait for BOTH
async function getParallelData() {
    const [user, posts] = await Promise.all([
        fetchUser(1),
        fetchPosts(1)
    ]);
    console.log("Parallel:", { user, posts });
}`,
                caption: 'Sequential execution (easier to read) vs Parallel execution (faster)'
            },
            {
                code: `async function riskyTask() {
  // Simulate a promise that rejects
  const p = Promise.reject(new Error("Something went wrong!"));
  
  try {
    const result = await p; // This throws!
    console.log(result);
  } catch (err) {
    console.error("Caught error:", err.message);
  } finally {
    console.log("Cleanup always runs");
  }
}`,
                caption: 'Error handling with <code>try</code>/<code>catch</code>/<code>finally</code>'
            }
        ],
        exercises: [
            {
                question: 'Convert this .then() chain to async/await with proper error handling.',
                starter: `const delay = (ms) => new Promise(r => setTimeout(r, ms));
const getUser = () => delay(50).then(() => ({ id: 1, name: "Alice" }));
const getOrders = (uid) => delay(50).then(() => [{ id: 101, amt: 25 }, { id: 102, amt: 50 }]);

// Convert to async/await
getUser()
    .then(user => getOrders(user.id))
    .then(orders => console.log("Orders:", orders))
    .catch(err => console.error(err));`,
                solution: `async function main() {
    try {
        const user = await getUser();
        const orders = await getOrders(user.id);
        console.log("Orders:", orders);
    } catch (err) {
        console.error(err);
    }
}
main();`,
                explanation: 'Wrap the logic in an <code>async function</code> (like <code>main</code>), <code>await</code> each step, and wrap the whole thing in <code>try/catch</code>.'
            },
            {
                question: 'Fetch data from 3 mock endpoints in PARALLEL using <code>Promise.all</code> and <code>await</code>.',
                starter: `const delay = (ms) => new Promise(r => setTimeout(r, ms));
const fetchA = () => delay(100).then(() => "A");
const fetchB = () => delay(200).then(() => "B");
const fetchC = () => delay(50).then(() => "C");

async function getAll() {
    // Your code here: await Promise.all(...)
}`,
                solution: `async function getAll() {
    const [a, b, c] = await Promise.all([fetchA(), fetchB(), fetchC()]);
    console.log(a, b, c);
    return [a, b, c];
}
getAll();`,
                explanation: 'Using <code>Promise.all</code> allows the delays to overlap. Total time is the max delay (200ms) rather than the sum (350ms).'
            }
        ],
        quizzes: [
            {
                question: 'What does an async function always return?',
                options: ['undefined', 'A callback', 'A Promise', 'The awaited value directly'],
                answer: 2,
                explanation: 'An async function always returns a Promise. If you return a value, it is wrapped in Promise.resolve(). If you throw, it becomes Promise.reject().'
            }
        ]
    },
    axios: {
        id: 'axios',
        title: 'Axios',
        subtitle: 'A popular HTTP client library with powerful features',
        content: `
            <h2>What is Axios?</h2>
            <p>Axios is a popular third-party HTTP client for JavaScript. It works in both browsers and Node.js, and it builds on top of the native <code>fetch</code> API (or <code>XMLHttpRequest</code> in older environments) to give you a simpler, more predictable API. You install it via <code>npm install axios</code> (or include it via a script tag), then use it anywhere you need to talk to a backend or external API.</p>
            <p>In practice, that means you call methods like <code>axios.get(url)</code> or <code>axios.post(url, data)</code> and work with Promises. The response you get back has a consistent shape: <code>{ data, status, statusText, headers, config }</code>, and the actual response body is always in <code>response.data</code>. You don't have to call <code>.json()</code> yourself — Axios does that for you when the server sends JSON.</p>
            <h2>Why use Axios over Fetch?</h2>
            <p>The native <code>fetch</code> API is built into the browser and is perfectly fine for simple requests. Axios doesn't replace it; it wraps similar ideas in a more convenient package. Here's what you gain when you choose Axios:</p>
            <ul>
                <li><strong>Automatic JSON:</strong> Axios automatically parses JSON responses into <code>response.data</code> and stringifies JavaScript objects when you send a request body. With <code>fetch</code>, you must call <code>response.json()</code> yourself and remember to <code>JSON.stringify</code> bodies.</li>
                <li><strong>Error handling:</strong> With <code>fetch</code>, a 404 or 500 response still resolves — you have to check <code>response.ok</code> or <code>response.status</code> and throw yourself. Axios rejects the Promise for any HTTP status outside 2xx, so a single <code>try/catch</code> or <code>.catch()</code> handles both network failures and server errors. The error object includes <code>error.response</code> (status, data, headers) when the server responded.</li>
                <li><strong>Interceptors:</strong> You can attach request and response interceptors to run logic for every request or every response. That's where you add auth tokens, log requests, or handle 401s globally instead of repeating that logic in every component or service.</li>
                <li><strong>Request cancellation and timeout:</strong> Axios has built-in support for timeouts and for cancelling in-flight requests (e.g. when the user navigates away), which you can wire up with <code>AbortController</code> or Axios's own cancel tokens.</li>
                <li><strong>Instances:</strong> <code>axios.create(config)</code> gives you a new client with a fixed <code>baseURL</code>, default headers, and timeouts. You then use that instance everywhere you talk to that API, and any interceptors you add apply only to that instance.</li>
            </ul>
            <h2>Basic Axios API</h2>
            <p>These are the methods you'll use most often. They all return Promises and accept optional config (e.g. headers, params, timeout).</p>
            <ul>
                <li><code>axios.get(url [, config])</code> — GET request; response body is in <code>res.data</code>.</li>
                <li><code>axios.post(url, data [, config])</code> — POST request; <code>data</code> is sent as the request body (often JSON).</li>
                <li><code>axios.put(url, data [, config])</code> — PUT request for full updates.</li>
                <li><code>axios.patch(url, data [, config])</code> — PATCH request for partial updates.</li>
                <li><code>axios.delete(url [, config])</code> — DELETE request.</li>
                <li><code>axios.create(config)</code> — Returns a new instance with <code>baseURL</code>, <code>timeout</code>, default <code>headers</code>, and its own interceptors.</li>
            </ul>
            <p>Success responses are in the form <code>{ data, status, statusText, headers, config }</code>. Failed requests (network error or HTTP 4xx/5xx) throw; the error has <code>error.response</code> when the server sent a response, and <code>error.message</code> for network-level failures.</p>
            <h2>Using Axios in a React (or other) app</h2>
            <p>In a React app you typically create one or more Axios instances (e.g. <code>apiClient</code>) near the top of your app or in a dedicated API module. You set <code>baseURL</code>, default headers, and add interceptors there. Then inside components or custom hooks you just call <code>apiClient.get('/users')</code>, <code>apiClient.post('/login', credentials)</code>, etc., and handle loading/error state in the component. The code in the examples above is the same style you'd write in production; the only difference in this learning environment is that real HTTP calls aren't available, so we use a mock with the same API shape for the exercises.</p>
            <div class="info-box tip">
                <strong>✅ Axios vs Fetch</strong>
                Fetch is built-in and lighter. Axios adds convenience (JSON, error semantics, interceptors, instances). For simple one-off requests, <code>fetch</code> is fine. For apps with many API calls, shared auth, and consistent error handling, Axios (or a small wrapper around fetch) tends to be easier to maintain.
            </div>
        `,
        examples: [
            {
                code: `// --- Real World Axios Usage ---
// In a real app, you would install it: npm install axios
// import axios from 'axios';

async function getUserData() {
    try {
        // 1. GET Request
        // Axios automatically parses the response JSON into 'res.data'
        const response = await axios.get('https://api.example.com/users/1');
        console.log("User Name:", response.data.name);

        // 2. POST Request
        // Axios automatically stringifies the object into the request body
        const newUser = await axios.post('https://api.example.com/users', {
            name: 'Charlie',
            email: 'charlie@example.com'
        });
        console.log("Created user ID:", newUser.data.id);

    } catch (error) {
        // 3. Automatic Error Handling
        // Unlike fetch, Axios enters the catch block for 4xx/5xx responses
        if (error.response) {
            console.error("Server Error:", error.response.status, error.response.data);
        } else {
            console.error("Network Error:", error.message);
        }
    }
}

getUserData();`,
                caption: 'Standard Axios usage with async/await. Notice how much cleaner the JSON handling and error catching are compared to fetch.'
            },
            {
                code: `// --- Creating an Axios Instance & Interceptors ---
// This is how you would set up a client for a specific API in a React/Vue app

const apiClient = axios.create({
    baseURL: 'https://api.myshop.com/v1',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});

// Request Interceptor: Add Auth Token to EVERY request automatically
apiClient.interceptors.request.use(config => {
    const token = 'my-secret-token'; // Usually from localStorage or Redux
    config.headers.Authorization = \`Bearer \${token}\`;
    return config;
}, error => {
    return Promise.reject(error);
});

// Response Interceptor: Handle global errors (like 401 Unauthorized)
apiClient.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response && error.response.status === 401) {
        console.log("Session expired. Redirecting to login...");
    }
    return Promise.reject(error);
});

// Now you use 'apiClient' instead of 'axios' throughout your app
apiClient.get('/products').then(res => console.log("Products:", res.data));`,
                caption: 'Instances and interceptors allow you to centralize your API logic (auth, base URLs, error logging) in one place.'
            }
        ],
        exercises: [
            {
                question: 'Using the mock API below (same response shape as Axios), write async code to: (1) GET <code>/users/1</code> and log the user\'s name from <code>res.data</code>, and (2) GET <code>/users/999</code> and in the <code>catch</code> block log <code>error.response.status</code>. Use <code>async/await</code> and <code>try/catch</code> — the same style you\'d use with real Axios.',
                starter: `// Mock API with Axios-style responses (runs in this app; real apps use axios)
const mockApi = {
    get(path) {
        const id = path.split('/').pop();
        if (id === '1') return Promise.resolve({ data: { id: 1, name: 'Alice', email: 'alice@example.com' }, status: 200 });
        if (id === '2') return Promise.resolve({ data: { id: 2, name: 'Bob', email: 'bob@example.com' }, status: 200 });
        return Promise.reject({ response: { status: 404, data: 'Not found' } });
    }
};

async function run() {
    // 1. GET /users/1 and log res.data.name
    // 2. GET /users/999 in a try/catch and log error.response.status
}`,
                solution: `// Mock API with Axios-style responses (runs in this app; real apps use axios)
const mockApi = {
    get(path) {
        const id = path.split('/').pop();
        if (id === '1') return Promise.resolve({ data: { id: 1, name: 'Alice', email: 'alice@example.com' }, status: 200 });
        if (id === '2') return Promise.resolve({ data: { id: 2, name: 'Bob', email: 'bob@example.com' }, status: 200 });
        return Promise.reject({ response: { status: 404, data: 'Not found' } });
    }
};

async function run() {
    try {
        const res = await mockApi.get('/users/1');
        console.log('User name:', res.data.name);
    } catch (err) {
        if (err.response) console.log('Error status:', err.response.status);
    }
    try {
        await mockApi.get('/users/999');
    } catch (err) {
        if (err.response) console.log('Error status:', err.response.status);
    }
}
run();`,
                explanation: 'You use the same pattern as with real Axios: await the request, read the body from res.data, and catch errors where error.response holds status and data. The mock just simulates success and 404 so this runs without a real server.'
            },
            {
                question: 'Using the same mock API, POST a new user with <code>mockApi.post(\'/users\', { name: \'Charlie\', email: \'charlie@example.com\' })</code>. Log the created user from <code>res.data</code> (the mock returns <code>{ data: { id, ...body }, status: 201 }</code>). Use async/await and try/catch.',
                starter: `const mockApi = {
    get(path) {
        const id = path.split('/').pop();
        if (id === '1') return Promise.resolve({ data: { id: 1, name: 'Alice' }, status: 200 });
        return Promise.reject({ response: { status: 404, data: 'Not found' } });
    },
    post(path, data) {
        return Promise.resolve({ data: { id: 3, ...data }, status: 201 });
    }
};

async function run() {
    // POST a user and log res.data (id and name)
}`,
                solution: `const mockApi = {
    get(path) {
        const id = path.split('/').pop();
        if (id === '1') return Promise.resolve({ data: { id: 1, name: 'Alice' }, status: 200 });
        return Promise.reject({ response: { status: 404, data: 'Not found' } });
    },
    post(path, data) {
        return Promise.resolve({ data: { id: 3, ...data }, status: 201 });
    }
};

async function run() {
    try {
        const res = await mockApi.post('/users', { name: 'Charlie', email: 'charlie@example.com' });
        console.log('Created:', res.data);
    } catch (err) {
        if (err.response) console.log('Error:', err.response.status, err.response.data);
    }
}
run();`,
                explanation: 'Same as real Axios: you pass the body as the second argument and read the server response from res.data. The mock returns a created resource with an id; in production the server would do that.'
            },
            {
                question: 'Fetch two users in parallel with the mock API. Use <code>Promise.all([ mockApi.get(\'/users/1\'), mockApi.get(\'/users/2\') ])</code> and then log both names from the results. This is the same pattern you use with Axios when loading multiple resources at once.',
                starter: `const mockApi = {
    get(path) {
        const id = path.split('/').pop();
        if (id === '1') return Promise.resolve({ data: { id: 1, name: 'Alice' }, status: 200 });
        if (id === '2') return Promise.resolve({ data: { id: 2, name: 'Bob' }, status: 200 });
        return Promise.reject({ response: { status: 404, data: 'Not found' } });
    }
};

async function run() {
    // Use Promise.all to fetch /users/1 and /users/2, then log both names
}`,
                solution: `const mockApi = {
    get(path) {
        const id = path.split('/').pop();
        if (id === '1') return Promise.resolve({ data: { id: 1, name: 'Alice' }, status: 200 });
        if (id === '2') return Promise.resolve({ data: { id: 2, name: 'Bob' }, status: 200 });
        return Promise.reject({ response: { status: 404, data: 'Not found' } });
    }
};

async function run() {
    const [res1, res2] = await Promise.all([
        mockApi.get('/users/1'),
        mockApi.get('/users/2')
    ]);
    console.log(res1.data.name, res2.data.name);
}
run();`,
                explanation: 'With Axios you often use Promise.all to run several requests in parallel and await them together. Each result still has .data with the response body — same shape as a single request.'
            }
        ],
        quizzes: [
            {
                question: 'How does Axios differ from the native Fetch API in error handling?',
                options: [
                    'They handle errors identically',
                    'Axios rejects on HTTP errors (4xx/5xx), Fetch only rejects on network errors',
                    'Fetch rejects on HTTP errors, Axios does not',
                    'Neither rejects on HTTP errors'
                ],
                answer: 1,
                explanation: 'Axios automatically rejects the promise for HTTP error status codes (4xx, 5xx). Fetch only rejects on network failures — a 404 response still resolves successfully with response.ok = false.'
            }
        ]
    }
};
