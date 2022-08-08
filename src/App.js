import React, {useState} from 'react';
import './App.css';

function App() {
  const question=[
    {
      questionText:'What is the capital of france?',

      answerOptions:[
    

    
     { answerText:'New York',isCorrect:false},
     { answerText:'London',isCorrect:false},
     { answerText:'Paris',isCorrect:true},
     { answerText:'Dublin',isCorrect:false},
      ],
    },


    {
      questionText:'Who is CEO of Tesla?',

      answerOptions:[
    
     { answerText:'jeff Benos',isCorrect:false},
     { answerText:'Elon Musk',isCorrect:true},
     { answerText:'Bill gates',isCorrect:false},
     { answerText:'Tony stark',isCorrect:false},
      ],
    },
   
{
    questionText:'The iPhone was created by which company?',

    answerOptions:[
  
   { answerText:'Apple',isCorrect:true},
   { answerText:'Intel',isCorrect:false},
   { answerText:'Amazon',isCorrect:false},
   { answerText:'Microsoft',isCorrect:false},
    ],
  },


  {
    questionText:'How many Harry Potter books are there?',

    answerOptions:[
  
   { answerText:'1',isCorrect:true},
   { answerText:'4',isCorrect:false},
   { answerText:'6',isCorrect:false},
   { answerText:'7',isCorrect:true},
    ],
  },


  ];

 
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < question.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {question.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{question.length}
						</div>
						<div className='question-text'>{question[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{question[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
export default App;
