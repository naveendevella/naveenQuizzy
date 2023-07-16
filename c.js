const quizData = [
    {
        question: "Who is the father of C language?",
        a: "Steve jobs",
        b: "James Gosling",
        c: "Dennis Ritchie",
        d: "Rasmus Lerdorf",
        correct: "c",
    },
    {
        question: "All Keywords in C are in_________",
        a: "LowerCase letters",
        b: "UpperCase letters",
        c: "Camelcase letters",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which of the following cannot be a variable name in C?",
        a: "Volatile",
        b: "true",
        c: "friend",
        d: "export",
        correct: "a",
    },
    {
        question: "Which Keyword is used to prevent any changes in the variable with in a C program?",
        a: "immutable",
        b: "mutable",
        c: "const",
        d: "volatile",
        correct: "c",
    },
    {
        question: "Which of the following type casting is accepted by C language?",
        a: "widening Conversions",
        b: "Narrowing Conversions",
        c: "Widening & narrowing Conversions",
        d: "None of the above",
        correct: "c",
    },
    {
        question: " Where in C the order of precedence of operators do not exist?",
        a: "Within conditional statements, if, else",
        b: "Within while, do-while",
        c: "Within a macro definition",
        d: " None of the mentioned",
        correct: "d",
    },
    {
        question: "Functions can return enumeration constants in C?",
        a: "true",
        b: "false",
        c: " depends on the compiler",
        d: "depends on the standard",
        correct: "a",
    },
    {
        question: "Functions in C Language are always _________",
        a: "Internal",
        b: "External",
        c: "Internal&External",
        d: "None of above",
        correct: "b",
    },
    {
        question: " The C-preprocessors are specified with _________ symbol.",
        a: "#",
        b: "$",
        c: "&",
        d: "^",
        correct: "a",
    },
    {
        question: "How many number of pointer (*) does C have against a pointer variable declaration?",
        a: "7",
        b: "127",
        c: "255",
        d: "No Limits",
        correct: "d",
    },
    {
        question: " Which of the following is not possible statically in C language?",
        a: "Jagged Array",
        b: "Rectangular Array",
        c: "Cuboidal Array",
        d: "Multidimensional Array",
        correct: "a",
    },
    {
        question: "Which of the following return-type cannot be used for a function in C?",
        a: "char *",
        b: "struct",
        c: "void",
        d: "None of the above",
        correct: "d",
    },
    {
        question: " The standard header _______ is used for variable list arguments (…) in C?",
        a: " <stdio.h >",
        b: "<stdlib.h>",
        c: "<math.h>",
        d: "<stdarg.h>",
        correct: "d",
    },
    {
        question: "When a C program is started, O.S environment is responsible for opening file and providing pointer for that file?",
        a: "Standard input",
        b: "Standard output",
        c: "Standard error",
        d: "All of Mentioned",
        correct: "d",
    },
    {
        question: " In C language, FILE is of which data type?",
        a: "int",
        b: "char*",
        c: "Struct",
        d: "None of above",
        correct: "c",
    },
    {
        question: "What are the types of functions in C Language?",
        a: "Library Functions",
        b: "User Defined Functions",
        c: "Both Library and User Defined",
        d: " None of the mentioned",
        correct: "c",
    },
    {
        question: "What characters are allowed in a C function name identifier?",
        a: " Alphabets, Numbers, %, $, _",
        b: "Alphabets, Numbers, Underscore (_)",
        c: " Alphabets, Numbers, dollar $",
        d: " Alphabets, Numbers, %",
        correct: "b",
    },
    {
        question: "Arguments received by a function in C language are called ___ arguments.",
        a: "Definite arguments",
        b: "Formal arguments",
        c: "Actual arguments",
        d: "Ideal arguments",
        correct: "b",
    },
    {
        question: "Choose a corrects statement about C language function arguments.",
        a: " Number of arguments should be same when sending and receiving",
        b: "Type of each argument should match exactly",
        c: " Order of each argument should be same",
        d: "All the above",
        correct: "d",
    },
    {
        question: "What is the default return value of a C function if not specified explicitly?",
        a: "1",
        b: "-1",
        c: "0",
        d: "None of Above",
        correct: "c",
    },
    {
        question: "Which one of the following is correct syntax for opening a file?",
        a: " FILE *fopen(const *filename, const char *mode)",
        b: "FILE *fopen(const *filename)",
        c: "FILE *open(const *filename, const char *mode)",
        d: " FILE open(const*filename)",
        correct: "a",
    },
    {
        question: "What is the function of the mode ‘ w+’?",
        a: "create text file for writing, discard previous contents if any",
        b: " create text file for update, discard previous contents if any",
        c: "create text file for writing, do not discard previous contents if any",
        d: " create text file for update, do not discard previous contents if any",
        correct: "b",
    },
    {
        question: " What is the function of FILE *tmpfile(void)?",
        a: "creates a temporary file of mode “wb+”",
        b: "creates a temporary file of mode “wb”",
        c: " creates a temporary file of mode ” w”",
        d: "creates a temporary file of mode “w+”",
        correct: "a",
    },
    {
        question: " If the mode includes b after the initial letter, what does it indicates?",
        a: "text file",
        b: "big text file",
        c: "binary file",
        d: "blueprint text",
        correct: "c",
    },
    {
        question: "Which of the following mode argument is used to truncate?",
        a: "a",
        b: "w",
        c: "f",
        d: "t",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2> In C You Scored ${score} Out Of ${quizData.length}</h2>
           <button onclick="man()">Reload</button>
           `
       }
    }
})
function man()
{
    window.location.href="main.html";
}
let count=1;
let btn=document.getElementById("submit");
let d=document.getElementById("dis");
btn.onclick=function(){
    count++;
    if(count<=25)
    {
        d.innerHTML=count;
    }
    else
    {
        d.innerHTML=25;
    }
}
