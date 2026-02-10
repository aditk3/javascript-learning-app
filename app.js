// JavaScript Learning App - Main Application Logic

// JavaScript syntax highlighter for examples
function highlightJS(code) {
    const tokens = [];
    const save = (match, type) => {
        tokens.push(`<span class="${type}">${match}</span>`);
        return `___TOKEN${tokens.length - 1}___`;
    };

    // 1. Strings and Comments first
    code = code.replace(/`([^`\\]|\\.)*`/g, m => save(m, 'syn-string'))
        .replace(/"([^"\\]|\\.)*"/g, m => save(m, 'syn-string'))
        .replace(/'([^'\\]|\\.)*'/g, m => save(m, 'syn-string'))
        .replace(/\/\/.*$/gm, m => save(m, 'syn-comment'))
        .replace(/\/\*[\s\S]*?\*\//g, m => save(m, 'syn-comment'));

    // 2. Keywords
    code = code.replace(/\b(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|new|class|extends|static|async|await|typeof|instanceof|in|of|default|export|import)\b/g, '<span class="syn-reserved">$1</span>');

    // 3. Boolean/Null
    code = code.replace(/\b(true|false|null|undefined)\b/g, '<span class="syn-reserved">$1</span>');

    // 4. Numbers
    code = code.replace(/\b\d+\.?\d*\b/g, '<span class="syn-number">$&</span>');

    // 5. Restore tokens
    for (let i = tokens.length - 1; i >= 0; i--) {
        code = code.replace(`___TOKEN${i}___`, tokens[i]);
    }

    return code;
}

function formatPlainCode(code) {
    return escapeHtml(code);
}

// Build navigation from JAVASCRIPT_CONTENT
function buildNavigation() {
    const navMenu = document.getElementById('navMenu');
    const sections = [
        { label: 'Fundamentals', ids: ['introduction', 'datatypes', 'variables', 'control_flow', 'operators_expressions', 'arrays', 'objects', 'strings', 'numbers_math', 'functions', 'template_literals', 'strict_mode'] },
        { label: 'Language Features', ids: ['this_keyword', 'classes', 'hoisting', 'error_handling', 'spread_rest', 'arrow_functions', 'destructuring', 'modules', 'data_structures', 'dates'] },
        { label: 'Advanced & Web APIs', ids: ['dom_manipulation', 'events', 'event_bubbling', 'event_loop', 'httprequest', 'json', 'promises', 'async_await', 'fetch', 'axios'] }
    ];

    let html = '';
    sections.forEach(section => {
        html += `<div class="nav-section">${section.label}</div>`;
        section.ids.forEach(id => {
            const topic = JAVASCRIPT_CONTENT[id];
            if (topic) {
                html += `<a class="nav-item" data-id="${id}">${topic.title}</a>`;
            }
        });
    });
    navMenu.innerHTML = html;
}

// JavaScript runs as-is; no wrapping needed. Optional runnableStarter can be provided per exercise.
function prepareCodeForExecution(code) {
    return code;
}

// Execute JavaScript via Piston API (Node.js)
async function executeJS(code, stdin = '') {
    const PISTON_API = 'https://emkc.org/api/v2/piston/execute';

    const response = await fetch(PISTON_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            language: 'javascript',
            version: '18.15.0',
            files: [{ name: 'main.js', content: code }],
            stdin: stdin,
            run_timeout: 5000
        })
    });

    if (!response.ok) {
        throw new Error('Execution service unavailable. Please check your internet connection.');
    }

    const result = await response.json();
    const run = result.run || {};
    const hasError = run.code !== 0;
    const output = (run.stderr || '') + (run.stdout || '');

    return {
        success: !hasError,
        output: output.trim() || '(no output)',
        isError: hasError
    };
}

const exerciseEditors = {};
const exerciseStarters = {};
const exerciseStdin = {};
const exerciseStdinAsset = {};
const stdinAssetCache = new Map();

function initExerciseStdin(topicId, exercises) {
    if (!exerciseStdin[topicId]) exerciseStdin[topicId] = {};
    if (!exerciseStdinAsset[topicId]) exerciseStdinAsset[topicId] = {};
    exercises.forEach((ex, i) => {
        exerciseStdin[topicId][i] = ex.stdin || '';
        exerciseStdinAsset[topicId][i] = ex.stdinAsset || '';
    });
}

async function resolveExerciseStdin(topicId, index) {
    const assetPath = exerciseStdinAsset[topicId]?.[index];
    if (assetPath) {
        if (!stdinAssetCache.has(assetPath)) {
            const fetchPromise = fetch(assetPath).then(async (res) => {
                if (!res.ok) {
                    throw new Error(`Failed to load input file: ${assetPath} (${res.status})`);
                }
                return await res.text();
            });
            stdinAssetCache.set(assetPath, fetchPromise);
        }
        return await stdinAssetCache.get(assetPath);
    }
    return exerciseStdin[topicId]?.[index] || '';
}

function createExerciseEditor(containerId, initialCode, topicId, exerciseIndex) {
    const container = document.getElementById(containerId);
    if (!container) return null;

    const textarea = document.createElement('textarea');
    textarea.value = initialCode;
    textarea.className = 'exercise-textarea';
    textarea.spellcheck = false;
    container.appendChild(textarea);

    let editor = null;
    if (typeof CodeMirror !== 'undefined') {
        try {
            editor = CodeMirror.fromTextArea(textarea, {
                mode: 'javascript',
                lineNumbers: true,
                indentUnit: 2,
                tabSize: 2,
                indentWithTabs: false,
                lineWrapping: true,
                viewportMargin: Infinity
            });
            editor.setSize('100%', '100%');
            const resizeObserver = new ResizeObserver(() => editor.refresh());
            resizeObserver.observe(container);
        } catch (e) {
            console.warn('CodeMirror failed, using textarea:', e);
        }
    }

    const editorApi = editor ? {
        getValue: () => editor.getValue(),
        setValue: (v) => editor.setValue(v)
    } : {
        getValue: () => textarea.value,
        setValue: (v) => { textarea.value = v; }
    };

    exerciseEditors[containerId] = editorApi;
    if (!exerciseStarters[topicId]) exerciseStarters[topicId] = {};
    exerciseStarters[topicId][exerciseIndex] = initialCode;
    return editorApi;
}

function renderLesson(id) {
    window.scrollTo(0, 0);
    const topic = JAVASCRIPT_CONTENT[id];
    if (!topic) return;

    Object.keys(exerciseEditors).forEach(key => delete exerciseEditors[key]);

    const contentArea = document.getElementById('lessonContent');
    let html = `
        <h1>${topic.title}</h1>
        <p class="subtitle">${topic.subtitle}</p>
        ${topic.content}
    `;

    if (topic.examples && topic.examples.length > 0) {
        html += '<h2>Code Examples</h2>';
        topic.examples.forEach((ex, i) => {
            html += `
                <div class="example-block">
                    <div class="example-label">Example ${i + 1}</div>
                    <div class="code-block">
                        <pre>${highlightJS(escapeHtml(ex.code))}</pre>
                    </div>
                    ${ex.caption ? `<p class="code-caption">${ex.caption}</p>` : ''}
                </div>
            `;
        });
    }

    if (topic.exercises && topic.exercises.length > 0) {
        html += '<h2>Exercises</h2>';
        topic.exercises.forEach((ex, i) => {
            const solutionId = `solution-${id}-${i}`;
            const editorId = `editor-${id}-${i}`;
            const outputId = `output-${id}-${i}`;
            html += `
                <div class="exercise-section">
                    <h3>Exercise ${i + 1}</h3>
                    <div class="exercise-question">${ex.question}</div>
                    <div class="exercise-editor-wrapper">
                        <div class="exercise-buttons">
                            <button class="btn-run" data-editor="${editorId}" data-output="${outputId}" data-topic="${id}" data-index="${i}">
                                Run Code
                            </button>
                            <button class="btn-reset" data-editor="${editorId}" data-topic="${id}" data-index="${i}">
                                Reset
                            </button>
                        </div>
                        <div id="${editorId}" class="exercise-editor-container"></div>
                        <div class="output-section">
                            <div class="output-label">Output</div>
                            <div id="${outputId}" class="output-display">Run your code to see output here.</div>
                        </div>
                    </div>
                    <button class="toggle-solution" data-target="${solutionId}">
                        <span>Show Solution</span>
                    </button>
                    <div class="solution-content hidden" id="${solutionId}">
                        <h4>Solution</h4>
                        <div class="code-block">
                            <pre>${formatPlainCode(ex.solution)}</pre>
                        </div>
                        <h4>Explanation</h4>
                        <p>${ex.explanation}</p>
                    </div>
                </div>
            `;
        });
    }

    if (topic.quizzes && topic.quizzes.length > 0) {
        html += '<h2>Knowledge Check</h2>';
        topic.quizzes.forEach((quiz, i) => {
            const feedbackId = `quiz-feedback-${id}-${i}`;
            let optionsHtml = '';
            quiz.options.forEach((opt, optIndex) => {
                optionsHtml += `
                    <div class="quiz-option" data-quiz-index="${i}" data-opt-index="${optIndex}" data-correct="${quiz.answer === optIndex}">
                        <span class="option-marker">${String.fromCharCode(65 + optIndex)}.</span>
                        ${opt}
                    </div>
                `;
            });
            html += `
                <div class="quiz-section">
                    <div class="quiz-question">${quiz.question}</div>
                    <div class="quiz-options" id="quiz-options-${id}-${i}">${optionsHtml}</div>
                    <div id="${feedbackId}" class="quiz-feedback"></div>
                </div>
            `;
        });
    }

    contentArea.innerHTML = html;

    if (topic.quizzes) {
        contentArea.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', () => {
                const quizIndex = option.dataset.quizIndex;
                const optionsContainer = document.getElementById(`quiz-options-${id}-${quizIndex}`);
                const feedbackEl = document.getElementById(`quiz-feedback-${id}-${quizIndex}`);
                const isCorrect = option.dataset.correct === 'true';
                const quiz = topic.quizzes[quizIndex];
                optionsContainer.querySelectorAll('.quiz-option').forEach(opt => {
                    opt.style.pointerEvents = 'none';
                    if (opt.dataset.correct === 'true') opt.classList.add('correct');
                    else if (opt === option) opt.classList.add('incorrect');
                });
                feedbackEl.textContent = (isCorrect ? 'Correct! ' : 'Incorrect. ') + quiz.explanation;
                feedbackEl.className = `quiz-feedback visible ${isCorrect ? 'success' : 'error'}`;
            });
        });
    }

    if (topic.exercises && topic.exercises.length > 0) {
        initExerciseStdin(id, topic.exercises);
        topic.exercises.forEach((ex, i) => {
            const editorId = `editor-${id}-${i}`;
            const runnableStarter = ex.runnableStarter != null ? ex.runnableStarter : (ex.starter || '');
            createExerciseEditor(editorId, runnableStarter, id, i);
        });
    }

    contentArea.querySelectorAll('.btn-run').forEach(btn => {
        btn.addEventListener('click', async () => {
            const editorId = btn.dataset.editor;
            const outputId = btn.dataset.output;
            const topicId = btn.dataset.topic;
            const index = parseInt(btn.dataset.index, 10);
            const editor = exerciseEditors[editorId];
            const code = editor ? editor.getValue() : '';
            const outputEl = document.getElementById(outputId);
            outputEl.textContent = 'Running...';
            outputEl.className = 'output-display running';
            try {
                const stdin = await resolveExerciseStdin(topicId, index);
                const result = await executeJS(code, stdin);
                outputEl.textContent = result.output;
                outputEl.className = 'output-display ' + (result.isError ? 'error' : 'success');
            } catch (err) {
                outputEl.textContent = 'Error: ' + err.message + '\n\nTip: For exercises that load assets, run "npm run dev" and open the served URL.';
                outputEl.className = 'output-display error';
            }
        });
    });

    contentArea.querySelectorAll('.btn-reset').forEach(btn => {
        btn.addEventListener('click', () => {
            const editor = exerciseEditors[btn.dataset.editor];
            const starter = exerciseStarters[btn.dataset.topic]?.[parseInt(btn.dataset.index, 10)];
            if (editor && starter) editor.setValue(starter);
        });
    });

    contentArea.querySelectorAll('.toggle-solution').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = document.getElementById(btn.dataset.target);
            const span = btn.querySelector('span');
            if (target.classList.contains('hidden')) {
                target.classList.remove('hidden');
                span.textContent = 'Hide Solution';
            } else {
                target.classList.add('hidden');
                span.textContent = 'Show Solution';
            }
        });
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function init() {
    buildNavigation();
    const hashId = window.location.hash.slice(1);
    const validIds = Object.keys(JAVASCRIPT_CONTENT);
    const initialId = validIds.includes(hashId) ? hashId : validIds[0];
    const initialNavItem = document.querySelector(`[data-id="${initialId}"]`);
    if (initialNavItem) initialNavItem.classList.add('active');
    renderLesson(initialId);

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const id = item.dataset.id;
            history.pushState(null, null, `#${id}`);
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            renderLesson(id);
        });
    });

    window.addEventListener('popstate', () => {
        const hashId = window.location.hash.slice(1);
        const validIds = Object.keys(JAVASCRIPT_CONTENT);
        const targetId = validIds.includes(hashId) ? hashId : validIds[0];
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        const navItem = document.querySelector(`[data-id="${targetId}"]`);
        if (navItem) navItem.classList.add('active');
        renderLesson(targetId);
    });
}

document.addEventListener('DOMContentLoaded', init);
