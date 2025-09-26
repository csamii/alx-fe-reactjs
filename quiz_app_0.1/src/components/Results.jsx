import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from './QuizStore';
import Button from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Trophy, RotateCcw, Home, Target, CheckCircle } from 'lucide-react';

export default function Results() {
  const navigate = useNavigate();
  const {
    questions,
    score,
    username,
    correctionRounds,
    settings,
    startTime,
    resetQuiz
  } = useQuizStore();

  useEffect(() => {
    if (questions.length === 0) {
      navigate('/');
      return;
    }

    // Save to leaderboard
    saveToLeaderboard();
  }, []);

  const saveToLeaderboard = () => {
    const entry = {
      username: username,
      score: score,
      totalQuestions: questions.length,
      date: new Date().toISOString(),
      correctionRounds: correctionRounds,
    };

    const existingEntries = JSON.parse(localStorage.getItem('quizLeaderboard') || '[]');
    const updatedEntries = [...existingEntries, entry];
    localStorage.setItem('quizLeaderboard', JSON.stringify(updatedEntries));
  };

  const handleNewQuiz = () => {
    resetQuiz();
    navigate('/settings');
  };

  const handleHome = () => {
    resetQuiz();
    navigate('/');
  };

  const scorePercentage = Math.round((score / questions.length) * 100);
  const correctedQuestions = questions.filter(q => 
    !q.isCorrect && q.userAnswer === q.correct_answer
  ).length;

  const getScoreColor = (percentage) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadgeVariant = (percentage) => {
    if (percentage >= 80) return 'default';
    if (percentage >= 60) return 'secondary';
    return 'destructive';
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Trophy className="w-12 h-12 text-primary mr-3" />
          <h1>Quiz Complete!</h1>
        </div>
        <p className="text-muted-foreground">
          Great job, {username}! Here's how you performed.
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Final Score</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className={`text-6xl mb-2 ${getScoreColor(scorePercentage)}`}>
              {score}
            </div>
            <div className="text-2xl text-slate-800 mb-4">
              out of {questions.length}
            </div>
            <Badge variant={getScoreBadgeVariant(scorePercentage)} className="text-3xl px-4 py-1">
              {scorePercentage}%
            </Badge>
          </CardContent>
        </Card>

        {correctionRounds > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 mb-4">
                <RotateCcw className="w-5 h-5" />
                <span className='font-bold'>Practice Summary</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Practice rounds completed:</span>
                  <span>{correctionRounds - 1}</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">All questions now answered correctly!</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle className='font-bold mb-4'>Quiz Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Categories:</span>
                <span className="text-right text-sm">
                  {settings.categories.length} selected
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Difficulty:</span>
                <span className="capitalize">{settings.difficulty}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Question type:</span>
                <span className="capitalize">{settings.type}</span>
              </div>
              {/* <div className="flex justify-between items-center">
                <span>Total time:</span>
                <span>{Math.ceil((Date.now() - startTime) / 1000 / 60)} minutes</span>
              </div> */}
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col space-y-3 items-center">
            <Button 
                onClick={() => navigate('/leaderboard')}
                className='bg-black text-white hover:bg-slate-700 px-12'
            >
                <Trophy className="w-4 h-4 mr-2" />
                View Leaderboard
            </Button>
            
            <Button 
                onClick={handleNewQuiz}
                className='border hover:bg-slate-400 hover:text-white px-12'
            >
                <RotateCcw className="w-4 h-4 mr-2" />
                Take Another Quiz
            </Button>
            
            <Button 
                className='border hover:bg-slate-400 hover:text-white px-12'
                onClick={handleHome}
            >
                <Home className="w-4 h-4 mr-2" />
                Back to Home
            </Button>
        </div>
      </div>
    </div>
  );
}