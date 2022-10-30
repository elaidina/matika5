const quizData = [
    {
        question: "-12-2 =",
        a: "-20",
        b: "-12",
        c: "-14",
        d: "-15",
        correct: "c",
    },
    {
        question: "47+24 =",
        a: "57",
        b: "61",
        c: "71",
        d: "90",
        correct: "c",
    },
    {
        question: "22.2 =",
        a: "7",
        b: "20",
        c: "42",
        d: "44",
        correct: "d",
    },
    {
        question: "(8.8)+2 =",
        a: "64",
        b: "24",
        c: "66",
        d: "69",
        correct: "c",
    },
    {
      question: "15+5+5+5 =",
      a: "30",
      b: "24",
      c: "25",
      d: "28",
      correct: "a",
  },{
    question: "15.5 =",
    a: "30",
    b: "40",
    c: "75",
    d: "60",
    correct: "c",
  },{
    question: "(10.10) - (5.5)=",
    a: "75",
    b: "100",
    c: "125",
    d: "50",
    correct: "a",
  },{
    question: "(2+3).(1+4) =",
    a: "30",
    b: "25",
    c: "10",
    d: "20",
    correct: "b",
  },{
    question: "(2.2)+(8.2) =",
    a: "20",
    b: "8",
    c: "9",
    d: "10",
    correct: "a",
  },{
    question: "36+15 =",
    a: "41",
    b: "51",
    c: "55",
    d: "61",
    correct: "b",
  },{
    question: "19+19 =",
    a: "38",
    b: "78",
    c: "68",
    d: "58",
    correct: "a",
  },{
    question: "-2+102",
    a: "100",
    b: "105",
    c: "110",
    d: "120",
    correct: "a",
  },{
    question: "5+5-50 =",
    a: "-50",
    b: "-100",
    c: "50",
    d: "-40",
    correct: "d",
  },{
    question: "80:2 =",
    a: "20",
    b: "40",
    c: "60",
    d: "80",
    correct: "b",
  },{
    question: "(2.2) + (2.2) =",
    a: "4",
    b: "6",
    c: "8",
    d: "10",
    correct: "c",
  },{
    question: "(10+5+5).0 =",
    a: "15",
    b: "20",
    c: "25",
    d: "0",
    correct: "d",
  },{
    question: "100-11 =",
    a: "91",
    b: "90",
    c: "89",
    d: "100",
    correct: "c",
  },{
    question: "(8.8)+1,5+0,5 =",
    a: "60",
    b: "62",
    c: "66",
    d: "72",
    correct: "c",
  },{
    question: "100+100+100+100 =",
    a: "100",
    b: "110",
    c: "400",
    d: "10 000",
    correct: "c",
  },{
    question: "16+17 =",
    a: "30",
    b: "31",
    c: "32",
    d: "33",
    correct: "d",
  },{
    question: "3.6 =",
    a: "16",
    b: "17",
    c: "18",
    d: "19",
    correct: "c",
  },{
    question: "23-4 =",
    a: "18",
    b: "19",
    c: "20",
    d: "21",
    correct: "b",
  },{
    question: "666+333 =",
    a: "900",
    b: "936",
    c: "963",
    d: "999",
    correct: "d",
  },{
    question: "160:2 =",
    a: "60",
    b: "80",
    c: "100",
    d: "12",
    correct: "b",
  },{
    question: "13+8,5 =",
    a: "18",
    b: "21,5",
    c: "24",
    d: "27,5",
    correct: "b",
  },{
    question: "(20-6):2 =",
    a: "12",
    b: "7",
    c: "6",
    d: "8",
    correct: "b",
  },{
    question: "55+6 =",
    a: "61",
    b: "55",
    c: "16",
    d: "70",
    correct: "a",
  },{
    question: "48+12 =",
    a: "30",
    b: "40",
    c: "50",
    d: "60",
    correct: "d",
  },{
    question: "36:6 =",
    a: "6",
    b: "7",
    c: "8",
    d: "9",
    correct: "a",
  },{
    question: "22:2 =",
    a: "11",
    b: "12",
    c: "13",
    d: "14",
    correct: "a",
  },{
    question: "6.4 =",
    a: "18",
    b: "20",
    c: "22",
    d: "24",
    correct: "d",
  },{
    question: "8.5 =",
    a: "24",
    b: "40",
    c: "32",
    d: "36",
    correct: "b",
  },{
    question: "34:2 =",
    a: "14",
    b: "15",
    c: "16",
    d: "17",
    correct: "d",
  },{
    question: "7.5 =",
    a: "14",
    b: "21",
    c: "28",
    d: "35",
    correct: "d",
  },{
    question: "(4.3)+8 =",
    a: "8",
    b: "12",
    c: "16",
    d: "20",
    correct: "d",
  },{
    question: "10:4 =",
    a: "2",
    b: "2,5",
    c: "3",
    d: "4",
    correct: "b",
  },{
    question: "10+20+35 =",
    a: "45",
    b: "50",
    c: "65",
    d: "70",
    correct: "c",
  },{
    question: "990-10 =",
    a: "980",
    b: "990",
    c: "890",
    d: "890",
    correct: "a",
  },{
    question: "6.8 =",
    a: "12",
    b: "24",
    c: "36",
    d: "48",
    correct: "d",
  },{
    question: "92+98 =",
    a: "99",
    b: "190",
    c: "101",
    d: "102",
    correct: "b",
  },
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
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
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="c" class="answer">
                    <label for="c" id="c_text">${question.c}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="d" class="answer">
                    <label for="d" id="d_text">${question.d}</label>
                  </li>
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })