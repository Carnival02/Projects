 import { quizData } from "./data.js"
   

    let currentQuiz=0;
    let score=0;

    const questionEl=document.getElementById("question")
    const answerEls=document.querySelectorAll(".answer")

    const a_text=document.getElementById('a_text');
    const b_text=document.getElementById('b_text');
    const c_text=document.getElementById('c_text');
    const d_text=document.getElementById('d_text');
    const submitBtn = document.getElementById("submit");

    loadQuiz();


    function loadQuiz(){
        deselectAnswers();

        const currentQuizData=quizData[currentQuiz];
        questionEl.innerText=currentQuizData.question;

        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    }


    function deselectAnswers() {
    answerEls.forEach(answer => answer.checked = false);
    }

    function getSelected() {
    let answer;
    answerEls.forEach(ans => {
        if (ans.checked) {
        answer = ans.id;
        }
    });
    return answer;
    }

    submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
        score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
        loadQuiz();
        } else {
        document.body.innerHTML = `
            <h2>You scored ${score} / ${quizData.length}</h2>
            <button onclick="location.reload()">Restart</button>
        `;
        }
            
    } } )
