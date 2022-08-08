import React, {useState} from 'react';
import './App.css';

function App() {
  const question=[
    {
      questionText:'Which of the following command is used to create react-js-app ?',

      answerOptions:[
    

    
     { answerText:'npx install create-react-app -g',isCorrect:false},
     { answerText:'install - l create-react-app',isCorrect:false},
     { answerText:'	npx create-react-app appname',isCorrect:true},
     { answerText:'npm install create-react-app',isCorrect:false},
      ],
    },


    {
      questionText:'Which of the following is must for the API in React.js ?',

      answerOptions:[
    
     { answerText:'render',isCorrect:false},
     { answerText:'renderComponent',isCorrect:true},
     { answerText:'SetinitialComponent',isCorrect:false},
     { answerText:'All of the above',isCorrect:false},
      ],
    },
   
{
    questionText:'What of the following is used in React.js to increase performance?',

    answerOptions:[
  
   { answerText:'Virtual DOM',isCorrect:true},
   { answerText:'Original DOM',isCorrect:false},
   { answerText:'Both A and B',isCorrect:false},
   { answerText:'None of the above',isCorrect:false},
    ],
  },


  {
    questionText:' Which of the following acts as the input of a class-based component?',

    answerOptions:[
  
   { answerText:'Class',isCorrect:false},
   { answerText:'Factory',isCorrect:false},
   { answerText:'Render',isCorrect:false},
   { answerText:'Props',isCorrect:true},
    ],
  },

  {
    questionText:'  What is the declarative way to render a dynamic list of components based on values in an array?',

    answerOptions:[
  
   { answerText:'With a for/while loop',isCorrect:false},
   { answerText:'Using the <Each /> component',isCorrect:false},
   { answerText:'Using the reduce array method',isCorrect:false},
   { answerText:'Using the Array.map() method',isCorrect:true},
    ],
  },




  {
    questionText:'What is a state in React?',

    answerOptions:[
  
   { answerText:'Internal storage of the component.',isCorrect:true},
   { answerText:'A permanent storage.',isCorrect:false},
   { answerText:'External storage of the component.',isCorrect:false},
   { answerText:'None of the above.',isCorrect:false},
    ],
  },



  {
    questionText:'Which of the following function is called to render HTML to the web page in React?',

    answerOptions:[
  
   { answerText:'Render()',isCorrect:false},
   { answerText:'render()',isCorrect:true},
   { answerText:'ReactDOM_render()',isCorrect:false},
   { answerText:'Reactdom_render()',isCorrect:false},
    ],
  },



  {
    questionText:'Everything in React is a _____________',

    answerOptions:[
  
   { answerText:'Class',isCorrect:false},
   { answerText:'Package',isCorrect:false},
   { answerText:'Module',isCorrect:false},
   { answerText:'COmponent',isCorrect:true},
    ],
  },


  {
    questionText:'What is Babel?',

    answerOptions:[
  
   { answerText:'A transpiler',isCorrect:false},
   { answerText:'Both Compiler and Transpiler',isCorrect:true},
   { answerText:'An interpreter',isCorrect:false},
   { answerText:'A compiler',isCorrect:false},
    ],
  },

  {
    questionText:'Props are __________ into other components',

    answerOptions:[
  
   { answerText:'Injected',isCorrect:false},
   { answerText:'Methods',isCorrect:true},
   { answerText:'Both A and B',isCorrect:false},
   { answerText:'All OF these',isCorrect:false},
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
				Congrats You scored {score} out of {question.length} !!
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
