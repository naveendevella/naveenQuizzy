const quizData = [
    {
        question: "Who is the father of Java language?",
        a: "Steve jobs",
        b: "Rasmus Lerdorf",
        c: "Dennis Ritchie",
        d: "James Gosling",
        correct: "d",
    },
    {
        question: "Number of primitive data types in Java are?",
        a: "6",
        b: "7",
        c: "8",
        d: "9",
        correct: "c",
    },
    {
        question: "Automatic type conversion is possible in which of the possible cases?",
        a: "Byte to Int",
        b: "Int to Long",
        c: "Long to Int",
        d: "Short to Int",
        correct: "b",
    },
    {
        question: "Which statement is true about Java?",
        a: "Java is a sequence-dependent programming language",
        b: " Java is a code dependent programming language",
        c: " Java is a platform-dependent programming language",
        d: " Java is a platform-independent programming language",
        correct: "d",
    },
    {
        question: "Which component is used to compile, debug and execute the java programs?",
        a: "JRE",
        b: "JIT",
        c: "JDK",
        d: "JVM",
        correct: "c",
    },
    {
        question: "Which one of the following is not a Java feature?",
        a: "Object-oriented",
        b: " Use of pointers",
        c: "Portable",
        d: "Dynamic and Extensible",
        correct: "b",
    },
    {
        question: "Which environment variable is used to set the java path?",
        a: "MAVEN_Path",
        b: "JavaPATH",
        c: "JAVA",
        d: " JAVA_HOME",
        correct: "d",
    },
    {
        question: "Which of the following is not an OOPS concept in Java?",
        a: "Polymorphism",
        b: "Inheritance",
        c: " Compilation",
        d: "Encapsulation",
        correct: "c",
    },
    {
        question: "What is not the use of “this” keyword in Java?",
        a: "Referring to the instance variable when a local variable has the same name",
        b: " Passing itself to the method of the same class",
        c: "Passing itself to another method",
        d: "Calling another constructor in constructor chaining",
        correct: "b",
    },
    {
        question: "Which of the following is a type of polymorphism in Java Programming?",
        a: "Multiple polymorphism",
        b: "Compile time polymorphism",
        c: "Multilevel polymorphism",
        d: "Execution time polymorphism",
        correct: "b",
    },
    {
        question: " What is Truncation in Java?",
        a: "Floating-point value assigned to a Floating type",
        b: "Integer value assigned to floating type",
        c: " Floating-point value assigned to an integer type",
        d: "Integer value assigned to floating type",
        correct: "c",
    },
    {
        question: "Which exception is thrown when java is out of memory?",
        a: "MemoryError",
        b: "OutOfMemoryError",
        c: "MemoryOutOfBoundsException",
        d: " MemoryFullException",
        correct: "b",
    },
    {
        question: " Which of these are selection statements in Java?",
        a: "break",
        b: "continue",
        c: "for()",
        d: "if()",
        correct: "d",
    },
    {
        question: "Which of these keywords is used to define interfaces in Java?",
        a: "interface",
        b: "inft",
        c: "intf",
        d: "abstract",
        correct: "a",
    },
    {
        question: " Which of the following is a superclass of every class in Java?",
        a: "ArrayList",
        b: "Abstract class",
        c: "Object class",
        d: " String",
        correct: "c",
    },
    {
        question: "Which of the below is not a Java Profiler?",
        a: "JVM",
        b: "Eclipse Profiler",
        c: "JProfiler",
        d: "JConsole",
        correct: "a",
    },
    {
        question: "Which of these packages contains the exception Stack Overflow in Java?",
        a: "java.io",
        b: " java.system",
        c: "java.lang",
        d: "java.util",
        correct: "c",
    },
    {
        question: " Which of these statements is incorrect about Thread?",
        a: "start() method is used to begin execution of the thread",
        b: "run() method is used to begin execution of a thread before start() method in special cases",
        c: " A thread can be formed by implementing Runnable interface only",
        d: " A thread can be formed by a class that extends Thread class",
        correct: "b",
    },
    {
        question: " Which of these keywords are used for the block to be examined for exceptions?",
        a: "check",
        b: "catch",
        c: "throw",
        d: "try",
        correct: "d",
    },
    {
        question: " Which one of the following is not an access modifier?",
        a: "Protected",
        b: "void",
        c: "public",
        d: "private",
        correct: "b",
    },
    {
        question: " Which class provides system independent server side implementation?",
        a: "Server",
        b: "ServerReader",
        c: "Socket",
        d: "ServerSocket",
        correct: "d",
    },
    {
        question: "Which of the following is true about servlets?",
        a: "Servlets can use the full functionality of the Java class libraries",
        b: " Servlets execute within the address space of web server, platform independent and uses the functionality of java class libraries",
        c: "Servlets execute within the address space of web server",
        d: " Servlets are platform-independent because they are written in java",
        correct: "b",
    },
    {
        question: "Which of these stream contains the classes which can work on character stream?",
        a: "InputStream",
        b: "OutputStream",
        c: "Character Stream",
        d: "All of the mentioned",
        correct: "c",
    },
    {
        question: " Which of these class is used to read characters in a file?",
        a: "FileReader",
        b: "FileWriter",
        c: "FileInputStream",
        d: " InputStreamReader",
        correct: "a",
    },
    {
        question: "Which of these classes can return more than one character to be returned to input stream?",
        a: "BufferedReader",
        b: "Bufferedwriter",
        c: "PushbachReader",
        d: "CharArrayReader",
        correct: "c",
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
        <h2> In Java You Scored ${score} Out Of ${quizData.length}</h2>
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
            <h2> In Java You Scored ${score} Out Of ${quizData.length}</h2>
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
