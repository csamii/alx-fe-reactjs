import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from './QuizStore';
import Button from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Progress } from '../ui/Progress';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

export default function Quiz() {
  const navigate = useNavigate();
  const {
    questions,
    currentQuestionIndex,
    score,
    timeRemaining,
    isQuizActive,
    quizCompleted,
    correctionQuestions,
    startQuiz,
    answerQuestion,
    nextQuestion,
    completeQuiz,
    setTimeRemaining
  } = useQuizStore();
  
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [showFeedback, setShowFeedback] = useState(false);
  const [submittedAnswer, setSubmittedAnswer] = useState('');
  const [timerStopped, setTimerStopped] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  // Current Question & Shuffled Answers so they don't change on every render
  const allAnswers = useMemo(() => {
    if (!currentQuestion) return [];
    return [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers]
      .sort(() => Math.random() - 0.5);
  }, [currentQuestion?.question, currentQuestion?.correct_answer]);

  // Auto-Start Quiz
  useEffect(() => {
    if (!isQuizActive && questions.length > 0) {
      startQuiz();
    }
  }, []);

  // Handle navigation after quiz completion
  useEffect(() => {
    if (quizCompleted && !isQuizActive) {
      if (correctionQuestions.length > 0) {
        navigate('/correction');
      } else {
        navigate('/results');
      }
    }
  }, [quizCompleted, isQuizActive, correctionQuestions.length, navigate]);

  // Handles Timer on each quiz displayed
  useEffect(() => {
    if (!isQuizActive || timerStopped) return;

    const timer = setInterval(() => {
      setTimeRemaining(Math.max(0, timeRemaining - 1));
    }, 1000);

    if (timeRemaining === 0) {
      handleTimeUp();
    }

    return () => clearInterval(timer);
  }, [timeRemaining, isQuizActive, timerStopped]);

  // Resetting answer and timeRemaining Per Question
  useEffect(() => {
    setSelectedAnswer('');
    setQuestionStartTime(Date.now());
    setShowFeedback(false);
    setSubmittedAnswer('');
    setIsTimeUp(false);
    setTimerStopped(false);
  }, [currentQuestionIndex]);

  const handleTimeUp = () => {
    const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
    setSubmittedAnswer('');
    setShowFeedback(true);
    setIsTimeUp(true);
    
    // Record the answer as incorrect but don't automatically proceed
    answerQuestion('', timeSpent);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer || showFeedback) return;
    setTimerStopped(true);
    const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
    setSubmittedAnswer(selectedAnswer);
    setShowFeedback(true);
    
    // Show feedback for 2 seconds before enabling next question
    setTimeout(() => {
      answerQuestion(selectedAnswer, timeSpent);
    }, 200);
  };

  const handleManualNext = () => {
    setShowFeedback(false);
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      nextQuestion();
    } else {
      completeQuiz();
    }
  };

  if (!currentQuestion) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="mb-4">No Quiz Available</h2>
          <p className="text-muted-foreground mb-6">
            Please configure your quiz settings to get started.
          </p>
          <Button 
            className='bg-black text-white hover:bg-slate-500'
            onClick={() => navigate('/settings')}>
            Go to Settings
          </Button>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <span>Q{currentQuestion.originalIndex}</span>
            <span className="text-muted-foreground">
              {currentQuestionIndex + 1} of {questions.length}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="size-3" />
            <span className={`${timeRemaining <= 10 ? 'text-red-500' : ''} font-bold`}>
              {/* {String(Math.floor(timeRemaining / 60)).padStart(2, '0')}: */}
              {String(timeRemaining % 60).padStart(2, '0')}
            </span>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <CardTitle className="text-lg">
              {currentQuestion.question}
            </CardTitle>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span className="capitalize">{currentQuestion.difficulty}</span>
              <span>•</span>
              <span className="capitalize">{currentQuestion.category}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {allAnswers.map((answer, index) => {
              let buttonClassName = "flex w-full h-13 items-center justify-start";

              if (showFeedback) {
                // Show feedback colors
                if (answer === currentQuestion.correct_answer) {
                  buttonClassName += " !bg-myGreen !hover:bg-green-600 !text-white !border-green-500";
                } else if (
                  answer === submittedAnswer &&
                  submittedAnswer !== currentQuestion.correct_answer
                ) {
                  buttonClassName += " !bg-myRed !hover:bg-red-600 !text-white !border-red-500";
                }
              } else if (selectedAnswer === answer) {
                buttonClassName += " bg-black text-white"; // selected state
              }

              return (
                <Button
                  key={index}
                  className={`h-auto p-4 border hover:bg-slate-500 ${buttonClassName}`}
                  onClick={() => !showFeedback && setSelectedAnswer(answer)}
                  disabled={showFeedback}
                >
                  {answer}
                  {showFeedback && answer === currentQuestion.correct_answer && (
                    <CheckCircle className="w-4 h-4 ml-auto text-white" />
                  )}
                  {showFeedback &&
                    answer === submittedAnswer &&
                    submittedAnswer !== currentQuestion.correct_answer && (
                      <XCircle className="w-4 h-4 ml-auto text-white" />
                    )}
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          {/* Score: {score}/{currentQuestionIndex + 1} */}
        </div>
        {showFeedback ? (
          <Button 
            className='bg-black text-white hover:bg-slate-800'
            onClick={handleManualNext}
          >
            {currentQuestionIndex + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
          </Button>
        ) : (
          <Button 
            className='bg-black text-white hover:bg-slate-800'
            onClick={handleSubmitAnswer} 
            disabled={!selectedAnswer}
          >
            Submit Answer
          </Button>
        )}
      </div>
    </div>
  );
}