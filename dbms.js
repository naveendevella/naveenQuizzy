const quizData = [
    {
       
        question: "Who created the first DBMS?",
        a: "Edgar Frank Codd",
        b: " Charles Bachman",
        c: " Charles Babbage",
        d: "Sharon B. Codd",
        correct: "b",
    },
    {
       question: "What is the full form of DBMS?",
        a: "Data of Binary Management System",
        b: "Database Management System",
        c: "Database Management Service",
        d: " Data Backup Management System",
        correct: "b",
    },
    {
        question: "Which type of data can be stored in the database?",
        a: " Image oriented data",
        b: "Text, files containing data",
        c: " Data in the form of audio or video",
        d: "All of the above",
        correct: "d",
    },
    {
        question: " In which of the following formats data is stored in the database management system?",
        a: "Image",
        b: "Text",
        c: "Table",
        d: "Graph",
        correct: "c",
    },
    {
        question: "Which of the following is not a type of database?",
        a: "Hierarchical",
        b: "Network",
        c: "Distributed",
        d: "Decentralized",
        correct: "d",
    },
    {
        question: "Which of the following is not an example of DBMS?",
        a: "MySQL",
        b: "Microsoft Acess",
        c: "IBM DB2",
        d: "Google",
        correct: "d",
    },
    {
        question: "Which of the following is not a feature of DBMS?",
        a: "Minimum Duplication and Redundancy of Data",
        b: "High Level of Security",
        c: "Single-user Access only",
        d: "Support ACID Property",
        correct: "c",
    },
    {
        question: " Which of the following is not a function of the database?",
        a: "Managing stored data",
        b: "Manipulating data",
        c: "Security for stored data",
        d: "Analysing code",
        correct: "d",
    },
    {
        question: " Which of the following is a component of the DBMS?",
        a: "Data",
        b: " Data Languages",
        c: "Data Manager",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "What is information about data called?",
        a: "Hyper data",
        b: " Tera data",
        c: "Meta data",
        d: "Relations",
        correct: "c",
    },
    {
        question: " The values appearing in given attributes of any tuple in the referencing relation must likewise occur in specified attributes of at least one tuple in the referenced relation, according to _____________________ integrity constraint.",
        a: "Referential",
        b: "Primary",
        c: "Referencing ",
        d: "Specific",
        correct: "a",
    },
    {
        question: " _____________ is a hardware component that is most important for the operation of a database management system.",
        a: "Microphone",
        b: "High speed, large capacity disk to store data",
        c: "High-resolution video display",
        d: "Printer",
        correct: "b",
    },
    {
        question: "The DBMS acts as an interface between ________________ and ________________ of an enterprise-class system.",
        a: "Data and the DBMS",
        b: "Application and SQL",
        c: "Database application and the database",
        d: "The user and the software",
        correct: "c",
    },
    {
        question: " The ability to query data, as well as insert, delete, and alter tuples, is offered by ____________",
        a: " TCL (Transaction Control Language)",
        b: "DCL (Data Control Language)",
        c: "DDL (Data Definition Langauge)",
        d: "DML (Data Manipulation Langauge)",
        correct: "d",
    },
    {
        question: " ______________ is a set of one or more attributes taken collectively to uniquely identify a record.",
        a: " Primary Key",
        b: "Foreign key",
        c: "Super key",
        d: "Candidate Key",
        correct: "c",
    },
    {
        question: "Which command is used to remove a relation from an SQL?",
        a: "Drop table",
        b: "Delete",
        c: "Purge",
        d: "Remove",
        correct: "a",
    },
    {
        question: " Which of the following set should be associated with weak entity set for weak entity to be meaningful?",
        a: " Neighbour set",
        b: "Strong entity set ",
        c: "Owner set",
        d: " Identifying set",
        correct: "d",
    },
    {
        question: " Procedural language among the following is __________",
        a: "Domain relational calculus",
        b: "Tuple relational calculus",
        c: "Relational algebra",
        d: " Query language",
        correct: "c",
    },
    {
        question: "_________________ operations do not preserve non-matched tuples.",
        a: " Left outer join",
        b: " Inner join",
        c: " Natural join",
        d: "Right outer join",
        correct: "b",
    },
    {
        question: " Which forms have a relation that contains information about a single entity?",
        a: "4NF",
        b: "2NF",
        c: "5NF",
        d: "3NF",
        correct: "a",
    },
    {
        question: "The top level of the hierarchy consists of ______ each of which can contain _____.",
        a: "Schemas, Catalogs",
        b: "Schemas, Environment",
        c: " Environment, Schemas",
        d: " Catalogs, Schemas",
        correct: "d",
    },
    {
        question: " The user IDs can be added or removed using which of the following fixed roles?",
        a: "db_sysadmin",
        b: "db_accessadmin",
        c: "db_securityadmin",
        d: "db_setupadmin",
        correct: "b",
    },
    {
        question: " The traditional storage of data organized by the customer, stored in separate folders in filing cabinets is an example of ______________ type of ‘database’ management system.",
        a: "Object-oriented database management system",
        b: "Relational database management system",
        c: "Network database management system",
        d: "Hierarchical database management system",
        correct: "d",
    },
    {
        question: " Which of the following is not the utility of DBMS?i) Backup ii) Loading iii) Process Organization iv) File organization",
        a: " i, ii, and iv only",
        b: "i, ii and iii only",
        c: " i, iii and iv only",
        d: "All i, ii, iii, and iv",
        correct: "a",
    },
    {
        question: " Which of the following is correct regarding the file produced by a spreadsheet?",
        a: " can be used as it is by the DBMS",
        b: " stored on disk in an ASCII text format",
        c: "all of the mentioned",
        d: "none of the mentioned",
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
        <h2> In DBMS You Scored ${score} Out Of ${quizData.length}</h2>
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
            <h2> In DBMS You Scored ${score} Out Of ${quizData.length}</h2>
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
