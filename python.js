const quizData = [
    {
        question: "Who developed Python Programming Language?",
        a: "Wick van Rossum",
        b: "Rasmus Lerdorf",
        c: " Guido van Rossum",
        d: "Niene Stom",
        correct: "c",
    },
    {
        question: "Which type of Programming does Python support?",
        a: "object-oriented programming",
        b: "structured programming",
        c: "functional programming",
        d: " all of the mentioned",
        correct: "d",
    },
    {
        question: "Is Python case sensitive when dealing with identifiers?",
        a: "no",
        b: "yes",
        c: "machine dependent",
        d: "none of the mentioned",
        correct: "b",
    },
    {
        question: "Is Python code compiled or interpreted?",
        a: "Python code is both compiled and interpreted",
        b: "Python code is neither compiled nor interpreted",
        c: "Python code is only compiled",
        d: " Python code is only interpreted",
        correct: "a",
    },
    {
        question: " All keywords in Python are in _________",
        a: "Capitalized",
        b: "lower case",
        c: "UPPER CASE",
        d: " None of the mentioned",
        correct: "d",
    },
    {
        question:"What will be the value of the following Python expression? 4 + 3 % 5",
        a: "7",
        b: "2",
        c: "4",
        d: "1",
        correct: "a",
    },
    {
        question: "Which of the following is used to define a block of code in Python language?",
        a: "Indentation",
        b: "key",
        c: "Brackets",
        d: "All of the mentioned",
        correct: "a",
    },
    {
        question: " Which keyword is used for function in Python language?",
        a: "Function",
        b: "def",
        c: "fun",
        d: "Define",
        correct: "b",
    },
    {
        question: "Which of the following functions can help us to find the version of python that we are currently working on?",
        a: "sys.version(1)",
        b: "sys.version(0)",
        c: "sys.version()",
        d: "sys.version",
        correct: "d",
    },
    {
        question: " Python supports the creation of anonymous functions at runtime, using a construct called __________",
        a: "pi",
        b: "anonymous",
        c: "lambda",
        d: "none of above",
        correct: "c",
    },
    {
        question: " What is the order of precedence in python?",
        a: "Exponential, Parentheses, Multiplication, Division, Addition, Subtraction",
        b: " Exponential, Parentheses, Division, Multiplication, Addition, Subtraction",
        c: " Parentheses, Exponential, Multiplication, Division, Subtraction, Addition",
        d: "Parentheses, Exponential, Multiplication, Division, Addition, Subtraction",
        correct: "d",
    },
    {
        question: " What does pip stand for python?",
        a: " Pip Installs Python",
        b: " Pip Installs Packages",
        c: "Preferred Installer Program",
        d: "All of the mentioned",
        correct: "c",
    },
    {
        question: "Which of the following is true for variable names in Python?",
        a: "underscore and ampersand are the only two special characters allowed",
        b: "unlimited length",
        c: "all private members must have leading and trailing underscores",
        d: "none of the mentioned",
        correct: "b",
    },
    {
        question: "Which of the following is the truncation division operator in Python?",
        a: "|",
        b: "//",
        c: "/",
        d: "%",
        correct: "b",
    },
    {
        question: " Which of the following is the use of id() function in python?",
        a: " Every object doesn’t have a unique id",
        b: "Id returns the identity of the object",
        c: "All of the mentioned",
        d: "None of the mentioned",
        correct: "b",
    },
    {
        question: "Which of the following is not a core data type in Python programming?",
        a: "Tuples",
        b: "List",
        c: "Class",
        d: "Dictionary",
        correct: "c",
    },
    {
        question: "Which of these is the definition for packages in Python?",
        a: "A set of main modules",
        b: "A folder of python modules",
        c: "A number of files containing Python definitions and statements",
        d: " A set of programs making use of Python modules",
        correct: "b",
    },
    {
        question: " What is the order of namespaces in which Python looks for an identifier?",
        a: "Python first searches the built-in namespace, then the global namespace and finally the local namespace",
        b: "Python first searches the built-in namespace, then the local namespace and finally the global namespace",
        c: "Python first searches the local namespace, then the global namespace and finally the built-in namespace",
        d: "Python first searches the global namespace, then the local namespace and finally the built-in namespace",
        correct: "c",
    },
    {
        question: "Which module in the python standard library parses options received from the command line?",
        a: "getarg",
        b: "getopt",
        c: "main",
        d: "os",
        correct: "b",
    },
    {
        question: " What arithmetic operators cannot be used with strings in Python?",
        a: "*",
        b: "-",
        c: "+",
        d: "All of Above",
        correct: "b",
    },
    {
        question: "Which one of the following is not a keyword in Python language?",
        a: "pass",
        b: "eval",
        c: "assert",
        d: "nonlocal",
        correct: "b",
    },
    {
        question: " To add a new element to a list we use which Python command?",
        a: "list1.addEnd(5)",
        b: "list1.addLast(5)",
        c: "list1.append(5)",
        d: "list1.add(5)",
        correct: "c",
    },
    {
        question: "Which one of the following is the use of function in python?",
        a: " Functions don’t provide better modularity for your application",
        b: " you can’t also create your own functions",
        c: " Functions are reusable pieces of programs",
        d: "All of the mentioned",
        correct: "c",
    },
    {
        question: " Which of the following is a feature of Python DocString?",
        a: "In Python all functions should have a docstring",
        b: " Docstrings can be accessed by the __doc__ attribute on objects",
        c: " It provides a convenient way of associating documentation with Python modules, functions, classes, and methods",
        d: "All of the mentioned",
        correct: "d",
    },
    {
        question: " The process of pickling in Python includes ____________",
        a: "conversion of a Python object hierarchy into byte stream",
        b: "conversion of a datatable into a list",
        c: "conversion of a byte stream into Python object hierarchy",
        d: " conversion of a list into a datatable",
        correct: "a",
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
const nextBtn = document.getElementById('next')
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
        quiz.innerHTML = `
        <h2> In Python You Scored ${score} Out Of ${quizData.length}</h2>
        <button onclick="man()">Reload</button>
        `
       
       
    }
})
    nextBtn.addEventListener('click', () => {
        const answer = getSelected()
        if(answer) {
           if(answer === quizData[currentQuiz].correct) {
               score++
           }
           currentQuiz++
           if(currentQuiz < quizData.length) {
               loadQuiz()
           }
           else{
            quiz.innerHTML = `
            <h2> In Python You Scored ${score} Out Of ${quizData.length}</h2>
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
let btn=document.getElementById("next");
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
