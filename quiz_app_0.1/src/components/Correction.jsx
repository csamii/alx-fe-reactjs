import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from './QuizStore';
import Button from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Progress } from '../ui/Progress';
import { AlertCircle, CheckCircle, RotateCcw, ArrowRight, XCircle } from 'lucide-react';

export default function Correction() {
  const navigate = useNavigate();
  const {
    questions,
    correctionQuestions,
    currentQuestionIndex,
    correctionRounds,
    score,
    startCorrection,
    completeCorrection,
    setQuestions,
    nextQuestion,
    updateCorrectionQuestion, // ✅ using the new store action
  } = useQuizStore();

  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [submittedAnswer, setSubmittedAnswer] = useState('');

  const currentQuestion = correctionQuestions[currentQuestionIndex];

  // Shuffle answers only when question changes
  const allAnswers = useMemo(() => {
    if (!currentQuestion) return [];
    return [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers]
      .sort(() => Math.random() - 0.5);
  }, [currentQuestion?.question, currentQuestion?.correct_answer]);

  useEffect(() => {
    if (correctionQuestions.length === 0) {
      navigate('/results');
      return;
    }

    if (correctionRounds === 0) {
      startCorrection(correctionQuestions);
    }
  }, []);

  useEffect(() => {
    setSelectedAnswer('');
    setShowFeedback(false);
    setSubmittedAnswer('');
  }, [currentQuestionIndex]);

  const handleSubmitAnswer = () => {
    if (!selectedAnswer || showFeedback) return;

    setSubmittedAnswer(selectedAnswer);
    setShowFeedback(true);

    setTimeout(() => {
      const isCorrect = selectedAnswer === currentQuestion.correct_answer;

      // ✅ Update correction question in the store
      updateCorrectionQuestion(
        currentQuestion.originalIndex,
        selectedAnswer,
        isCorrect
      );

      // ✅ Update original questions array
      const updatedOriginalQuestions = questions.map((q) =>
        q.originalIndex === currentQuestion.originalIndex
          ? { ...q, isAnswered: true, userAnswer: selectedAnswer, isCorrect }
          : q
      );
      setQuestions(updatedOriginalQuestions);

      if (currentQuestionIndex + 1 < correctionQuestions.length) {
        // Move to next question in this round
        nextQuestion();
      } else {
        // Check all answers from the updated correctionQuestions in store
        const allCorrect = useQuizStore
          .getState()
          .correctionQuestions.every((q) => q.userAnswer === q.correct_answer);

        if (allCorrect) {
          completeCorrection();
          navigate('/results');
        } else {
          const stillIncorrect = useQuizStore
            .getState()
            .correctionQuestions.filter(
              (q) => q.userAnswer !== q.correct_answer
            );
          startCorrection(stillIncorrect);
        }
      }

      setShowFeedback(false);
    }, 2000);
  };

  const handleSkipToResults = () => {
    completeCorrection();
    navigate('/results');
  };

  if (!currentQuestion) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Loading correction questions...</p>
      </div>
    );
  }

  const progress =
    ((currentQuestionIndex + 1) / correctionQuestions.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-6">
        <div className="flex items-center justify-center mb-4 space-x-2">
          <RotateCcw className="w-5 h-5 text-primary" />
          <h1>Practice Round {correctionRounds - 1}</h1>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-orange-600" />
              <p className="text-sm text-orange-800">
                Practice mode - no timer, scores don't change. Answer all
                questions correctly to complete the quiz.
              </p>
            </div>
            <Button
              onClick={handleSkipToResults}
              className="ml-4"
            >
              <ArrowRight className="w-4 h-4 mr-1" />
              Skip to Results
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <span>Q{currentQuestion.originalIndex}</span>
            <span className="text-muted-foreground">
              {currentQuestionIndex + 1} of {correctionQuestions.length} missed
              questions
            </span>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="mb-6">
        <CardHeader className='mb-4'>
          <div className="flex items-center justify-between">
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
              let buttonClassName =
                'flex w-full h-13 items-center justify-start';

              if (showFeedback) {
                if (answer === currentQuestion.correct_answer) {
                  buttonClassName +=
                    ' !bg-green-500 !hover:bg-green-600 !text-white !border-green-500';
                } else if (
                  answer === submittedAnswer &&
                  submittedAnswer !== currentQuestion.correct_answer
                ) {
                  buttonClassName +=
                    ' !bg-red-500 !hover:bg-red-600 !text-white !border-red-500';
                }
              } else if (selectedAnswer === answer) {
                buttonClassName += ' bg-black text-white';
              }

              return (
                <Button
                  key={index}
                  className={`h-auto p-4 border hover:bg-slate-500 ${buttonClassName}`}
                  onClick={() =>
                    !showFeedback && setSelectedAnswer(answer)
                  }
                  disabled={showFeedback}
                >
                  {answer}
                  {showFeedback &&
                    answer === currentQuestion.correct_answer && (
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
          {/* {currentQuestion.userAnswer && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <AlertCircle className="w-4 h-4 text-orange-600" />
                <span className="text-sm">Your previous answer:</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {currentQuestion.userAnswer || 'No answer (time expired)'}
              </p>
            </div>
          )} */}
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          {/* Original Score: {score}/{questions.length} */}
        </div>
        <Button
          className='bg-black text-white hover:bg-slate-800'
          onClick={handleSubmitAnswer}
          disabled={!selectedAnswer || showFeedback}
        >
          {showFeedback ? 'Processing...' : 'Submit Answer'}
        </Button>
      </div>
    </div>
  );
}