export interface Question {
  id: number;
  image: string;
  options: string[];
  correct_answer: number;
}

// Sample questions - Add your 100 questions here following this format
export const questions: Question[] = [
  {
    id: 1,
    image: "/images/q1.jpg",
    options: ["Circle", "Square", "Triangle", "Rectangle"],
    correct_answer: 1
  },
  {
    id: 2,
    image: "/images/q2.jpg",
    options: ["Pattern A", "Pattern B", "Pattern C", "Pattern D"],
    correct_answer: 3
  },
  {
    id: 3,
    image: "/images/q3.jpg",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct_answer: 2
  },
  {
    id: 4,
    image: "/images/q4.jpg",
    options: ["Choice A", "Choice B", "Choice C", "Choice D"],
    correct_answer: 4
  },
  {
    id: 5,
    image: "/images/q5.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 2
  },
  {
    id: 6,
    image: "/images/q6.jpg",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct_answer: 1
  },
  {
    id: 7,
    image: "/images/q7.jpg",
    options: ["Pattern 1", "Pattern 2", "Pattern 3", "Pattern 4"],
    correct_answer: 3
  },
  {
    id: 8,
    image: "/images/q8.jpg",
    options: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    correct_answer: 2
  },
  {
    id: 9,
    image: "/images/q9.jpg",
    options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correct_answer: 4
  },
  {
    id: 10,
    image: "/images/q10.jpg",
    options: ["Option W", "Option X", "Option Y", "Option Z"],
    correct_answer: 1
  },
  {
    id: 11,
    image: "/images/q11.jpg",
    options: ["Option W", "Option X", "Option Y", "Option Z"],
    correct_answer: 1
  }
];

// TODO: Add remaining 90 questions here to reach 100 total
// Each question should have:
// - id: sequential number (11-100)
// - image: path to image in /images folder (e.g., "/images/q11.jpg")
// - options: array of 4 option strings
// - correct_answer: number 1-4 indicating the correct option
