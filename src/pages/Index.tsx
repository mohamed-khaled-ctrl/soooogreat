import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Brain, CheckCircle } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    // Clear any previous test data
    localStorage.removeItem("quiz_completed");
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-3xl w-full p-8 md:p-12 text-center animate-fade-in">
        <div className="mb-8">
          <Brain className="w-20 h-20 mx-auto mb-6 text-primary glow-effect" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            ITI-English-Exam 1
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            100 image-based IQ questions designed for ITI preparation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
          <div className="flex items-start gap-3 p-4 bg-muted/20 rounded-lg">
            <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">100 Questions</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive image-based assessment
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-muted/20 rounded-lg">
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">No Time Limit</h3>
              <p className="text-sm text-muted-foreground">
                Take your time to think and answer
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-muted/20 rounded-lg">
            <Brain className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Save Progress</h3>
              <p className="text-sm text-muted-foreground">
                Your answers are automatically saved
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Button
            onClick={handleStartTest}
            size="lg"
            className="w-full md:w-auto px-12 text-lg hover-lift glow-effect"
          >
            Start Test
          </Button>
          <p className="text-sm text-muted-foreground">
            Click "Start Test" to begin your assessment
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Index;
