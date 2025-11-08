import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, CheckCircle2, XCircle, Download, Eye } from "lucide-react";

const ResultsPage = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    const savedAnswers = localStorage.getItem("quiz_answers");
    const completed = localStorage.getItem("quiz_completed");
    
    if (!completed || !savedAnswers) {
      navigate("/");
      return;
    }
    
    setAnswers(JSON.parse(savedAnswers));
  }, [navigate]);

  const calculateResults = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correct_answer) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateResults();
  const percentage = Math.round((score / questions.length) * 100);

  const getPerformanceLabel = () => {
    if (percentage >= 90) return { label: "Excellent", color: "text-secondary" };
    if (percentage >= 75) return { label: "Very Good", color: "text-primary" };
    if (percentage >= 50) return { label: "Average", color: "text-accent" };
    return { label: "Needs Improvement", color: "text-destructive" };
  };

  const performance = getPerformanceLabel();

  const handlePrint = () => {
    window.print();
  };

  const handleRestart = () => {
    localStorage.removeItem("quiz_answers");
    localStorage.removeItem("quiz_current");
    localStorage.removeItem("quiz_completed");
    navigate("/");
  };

  if (!showReview) {
    return (
      <div className="min-h-screen bg-background p-4 md:p-8 flex items-center justify-center">
        <Card className="max-w-2xl w-full p-8 md:p-12 text-center animate-scale-in">
          <div className="mb-8">
            <Award className="w-20 h-20 mx-auto mb-4 text-primary glow-effect" />
            <h1 className="text-4xl font-bold mb-2">Exam Complete!</h1>
            <p className="text-muted-foreground">ITI-English-Exam 1</p>
          </div>

          <div className="mb-8 space-y-4">
            <div className="text-6xl font-bold text-primary glow-effect">
              {score} / {questions.length}
            </div>
            <div className="text-3xl font-semibold text-muted-foreground">
              {percentage}%
            </div>
            <div className={`text-2xl font-bold ${performance.color}`}>
              {performance.label}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-muted/20 rounded-lg">
            <div>
              <div className="text-success text-2xl font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-6 h-6" />
                {score}
              </div>
              <div className="text-muted-foreground">Correct</div>
            </div>
            <div>
              <div className="text-destructive text-2xl font-bold flex items-center justify-center gap-2">
                <XCircle className="w-6 h-6" />
                {questions.length - score}
              </div>
              <div className="text-muted-foreground">Incorrect</div>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => setShowReview(true)}
              className="w-full hover-lift glow-effect"
            >
              <Eye className="w-4 h-4 mr-2" />
              Review Answers
            </Button>
            <Button
              onClick={handlePrint}
              variant="outline"
              className="w-full hover-lift"
            >
              <Download className="w-4 h-4 mr-2" />
              Download / Print Results
            </Button>
            <Button
              onClick={handleRestart}
              variant="outline"
              className="w-full hover-lift"
            >
              Take Test Again
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Answer Review</h1>
            <p className="text-muted-foreground">
              Score: {score}/{questions.length} ({percentage}%)
            </p>
          </div>
          <Button onClick={() => setShowReview(false)} variant="outline">
            Back to Results
          </Button>
        </div>

        <div className="space-y-6">
          {questions.map((question, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === question.correct_answer;

            return (
              <Card
                key={question.id}
                className={`p-6 ${
                  isCorrect ? "border-success/50" : "border-destructive/50"
                } border-2`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {isCorrect ? (
                      <CheckCircle2 className="w-6 h-6 text-success" />
                    ) : (
                      <XCircle className="w-6 h-6 text-destructive" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">
                        Question {question.id}
                      </h3>
                      <span
                        className={`text-sm font-medium ${
                          isCorrect ? "text-success" : "text-destructive"
                        }`}
                      >
                        {isCorrect ? "Correct" : "Incorrect"}
                      </span>
                    </div>

                    <img
                      src={question.image}
                      alt={`Question ${question.id}`}
                      className="w-full max-w-md rounded-lg mb-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%23202329' width='400' height='200'/%3E%3Ctext fill='%237cdbff' font-family='system-ui' font-size='16' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EQuestion ${question.id}%3C/text%3E%3C/svg%3E`;
                      }}
                    />

                    <div className="space-y-2">
                      {question.options.map((option, optIndex) => {
                        const optionNumber = optIndex + 1;
                        const isUserAnswer = userAnswer === optionNumber;
                        const isCorrectAnswer =
                          question.correct_answer === optionNumber;

                        return (
                          <div
                            key={optIndex}
                            className={`p-3 rounded-lg ${
                              isCorrectAnswer
                                ? "bg-success/20 border-success border"
                                : isUserAnswer
                                ? "bg-destructive/20 border-destructive border"
                                : "bg-muted/20"
                            }`}
                          >
                            <span className="font-semibold mr-2">
                              {String.fromCharCode(65 + optIndex)}.
                            </span>
                            {option}
                            {isCorrectAnswer && (
                              <span className="ml-2 text-success text-sm font-medium">
                                (Correct Answer)
                              </span>
                            )}
                            {isUserAnswer && !isCorrectAnswer && (
                              <span className="ml-2 text-destructive text-sm font-medium">
                                (Your Answer)
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Button onClick={handleRestart} className="hover-lift">
            Take Test Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
