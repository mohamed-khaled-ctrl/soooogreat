import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const QuizPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);

  // Load saved progress from localStorage
  useEffect(() => {
    const savedAnswers = localStorage.getItem("quiz_answers");
    const savedQuestion = localStorage.getItem("quiz_current");
    if (savedAnswers) setAnswers(JSON.parse(savedAnswers));
    if (savedQuestion) setCurrentQuestion(parseInt(savedQuestion));
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem("quiz_answers", JSON.stringify(answers));
    localStorage.setItem("quiz_current", currentQuestion.toString());
  }, [answers, currentQuestion]);

  const handleSelectOption = (optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("quiz_answers", JSON.stringify(answers));
    localStorage.setItem("quiz_completed", "true");
    navigate("/results");
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            ITI-English-Exam 1
          </h1>
          <div className="flex items-center justify-between text-muted-foreground mb-4">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Object.keys(answers).length} answered</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="p-6 md:p-8 mb-6 smooth-transition animate-fade-in">
          <div className="text-center">
            {/* Question Image */}
            <div className="mb-6 rounded-lg overflow-hidden bg-muted/20 flex items-center justify-center min-h-[300px]">
              <img
                src={currentQ.image}
                alt={`Question ${currentQ.id}`}
                className="max-w-full max-h-[400px] object-contain rounded-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23202329' width='400' height='300'/%3E%3Ctext fill='%237cdbff' font-family='system-ui' font-size='20' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EQuestion ${currentQ.id}%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQ.options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswer === index + 1 ? "default" : "outline"}
                  className={`h-auto py-4 px-6 text-lg hover-lift ${
                    selectedAnswer === index + 1 ? "glow-effect" : ""
                  }`}
                  onClick={() => handleSelectOption(index + 1)}
                >
                  <span className="font-semibold mr-2">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </Button>
              ))}
            </div>
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="hover-lift"
          >
            Previous
          </Button>

          <div className="flex gap-2">
            {currentQuestion === questions.length - 1 ? (
              <Button
                onClick={() => setShowSubmitDialog(true)}
                className="hover-lift glow-effect"
              >
                Submit Answers
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                className="hover-lift"
              >
                Next
              </Button>
            )}
          </div>
        </div>

        {/* Submit Confirmation Dialog */}
        <AlertDialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Submit Your Answers?
              </AlertDialogTitle>
              <AlertDialogDescription>
                You have answered {Object.keys(answers).length} out of {questions.length} questions.
                {Object.keys(answers).length < questions.length && (
                  <span className="block mt-2 text-destructive">
                    You still have {questions.length - Object.keys(answers).length} unanswered questions.
                  </span>
                )}
                <br />
                Are you sure you want to submit your answers? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleSubmit}>
                Yes, Submit
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default QuizPage;
