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
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 3
  },
  {
    id: 2,
    image: "/images/q2.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 5
  },
  {
    id: 3,
    image: "/images/q3.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 4
  },
  {
    id: 4,
    image: "/images/q4.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E", "Answer F"],
    correct_answer: 6
  },
  {
    id: 5,
    image: "/images/q5.jpg",
    options: ["24", "32", "36", "40"],
    correct_answer: 3
  },
  {
    id: 6,
    image: "/images/q6.jpg",
    options: ["5", "8", "10", "12"],
    correct_answer: 1
  },
  {
    id: 7,
    image: "/images/q7.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 3
  },
  {
    id: 8,
    image: "/images/q8.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E", "Answer F"],
    correct_answer: 3
  },
  {
    id: 9,
    image: "/images/q9.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 5
  },
  {
    id: 10,
    image: "/images/q10.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 10
  },
  {
    id: 11,
    image: "/images/q11.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E", "Answer F"],
    correct_answer: 5
  },
  {
    id: 12,
    image: "/images/q12.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 1
  }
  ,
  {
    id: 13,
    image: "/images/q13.jpg",
    options: ["5", "6", "7", "8"],
    correct_answer: 2
  },
  {
    id: 14,
    image: "/images/q14.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 2
  },
  {
    id: 15,
    image: "/images/q15.jpg",
    options: ["First Triangle from the left",
              "Second Triangle from the left",
              "Third Triangle from the left",
              "Fourth Triangle from the left"],

    correct_answer: 4
  },
  {
    id: 16,
    image: "/images/q16.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 2
  },
  {
    id: 17,
    image: "/images/q17.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 2
  },
  {
    id: 18,
    image: "/images/q18.jpg",
    options: ["15", "17", "19", "21", ],
    correct_answer: 2
  },
  {
    id: 19,
    image: "/images/q19.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 5
  },
  {
    id: 20,
    image: "/images/q20.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 3
  },
  {
    id: 21,
    image: "/images/q21.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 4
  },
  {
    id: 22,
    image: "/images/q22.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 4
  },
  {
    id: 23,
    image: "/images/q23.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 3
  },
  {
    id: 24,
    image: "/images/q24.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E", "Answer F"],
    correct_answer: 2
  },
  {
    id: 25,
    image: "/images/q25.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 2
  },
  {
    id: 26,
    image: "/images/q26.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 3
  },
  {
    id: 27,
    image: "/images/q27.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 5
  },
  {
    id: 28,
    image: "/images/q28.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 1
  },
  {
    id: 29,
    image: "/images/q29.jpg",
    options: ["4", "5", "6", "7" ],
    correct_answer: 4
  },
  {
    id: 30,
    image: "/images/q30.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 2
  },
  {
    id: 31,
    image: "/images/q31.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 3
  },
  {
    id: 32,
    image: "/images/q32.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 4
  },
  {
    id: 33,
    image: "/images/q33.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 5
  },
  {
    id: 34,
    image: "/images/q34.jpg",
    options: ["Switch A", "Switch B", "Switch C", "Switch D"],
    correct_answer: 1
  },
  {
    id: 35,
    image: "/images/q35.jpg",
    options: ["Switch A", "Switch B", "Switch C", "Switch D"],
    correct_answer: 1
  },
  {
    id: 36,
    image: "/images/q36.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 2
  },
  {
    id: 37,
    image: "/images/q37.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 4
  },
  {
    id: 38,
    image: "/images/q38.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 5
  },
  {
    id: 39,
    image: "/images/q39.jpg",
    options: ["A. Ω#", "B. -Ω", "C. ##", "D. =#", "E. -="],
    correct_answer: 4
  },
  {
    id: 40,
    image: "/images/q40.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 1
  },
  {
    id: 41,
    image: "/images/q41.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 1
  },
  {
    id: 42,
    image: "/images/q42.jpg",
    options: ["ABC", "ABD", "BDC", "ADC"],
    correct_answer: 3
  },
  {
    id: 43,
    image: "/images/q43.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 2
  },
  {
    id: 44,
    image: "/images/q44.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 2
  },
  {
    id: 45,
    image: "/images/q45.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 2
  },
  {
    id: 46,
    image: "/images/q46.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 4
  },
  {
    id: 47,
    image: "/images/q47.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 5
  },
  {
    id: 48,
    image: "/images/q48.jpg",
    options: ["35", "45", "55", "65"],
    correct_answer: 3
  },
  {
    id: 49,
    image: "/images/q49.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 3
  },
  {
    id: 50,
    image: "/images/q50.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 4
  },
  {
    id: 51,
    image: "/images/q51.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 3
  },{
    id: 52,
    image: "/images/q52.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 4
  },
  {
    id: 53,
    image: "/images/q53.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 4
  },
  {
    id: 54,
    image: "/images/q54.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 1
  },
  {
    id: 55,
    image: "/images/q55.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 2  
  },
  {
    id: 56,
    image: "/images/q56.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 2
  },
  {
    id: 57,
    image: "/images/q57.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 3
  },
  {
    id: 58,
    image: "/images/q58.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 1
  },
  {
    id: 59,
    image: "/images/q59.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 4
  },
  {
    id: 60,
    image: "/images/q60.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 4
  },
  {
    id: 61,
    image: "/images/q61.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 4
  },
  {
    id: 62,
    image: "/images/q62.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 4
  },
  {
    id: 63,
    image: "/images/q63.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 3
  },{
    id: 64,
    image: "/images/q64.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 2
  },
  {
    id: 65,
    image: "/images/q65.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 1
  },
  {
    id: 66,
    image: "/images/q66.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 4
  },
  {
    id: 67,
    image: "/images/q67.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 2
  },
  {
    id: 68,
    image: "/images/q68.jpg",
    options: ["10", "11", "12", "13", "14", "15"],
    correct_answer: 2
  },
  {
    id: 69,
    image: "/images/q69.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct_answer: 3
  },
  {
    id: 70,
    image: "/images/q70.jpg",
    options: ["LAND & LOCKED", "WIND & RIDER", "HANG & GLIDER", "SOAR & PLANE"],
    correct_answer: 3
  },
  {
    id: 71,
    image: "/images/q71.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 3
  },{
    id: 72,
    image: "/images/q72.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E", "Answer F", "Answer G", "Answer H"],
    correct_answer: 2
  },
  {
    id: 73,
    image: "/images/q73.jpg",
    options: ["Switch A", "Switch B", "Switch C", "Switch D"],
    correct_answer: 2
  },
  {
    id: 74,
    image: "/images/q74.jpg",
    options: ["Switch A", "Switch B", "Switch C", "Switch D"],
    correct_answer: 3
  },
  {
    id: 75,
    image: "/images/q75.jpg",
    options: ["Switch A", "Switch B", "Switch C", "Switch D"],
    correct_answer: 2
  },
  {
    id: 76,
    image: "/images/q76.jpg",
    options: ["4", "5", "9", "10", "11", "21"],
    correct_answer: 1
  },
  {
    id: 77,
    image: "/images/q77.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 2
  },
  {
    id: 78,
    image: "/images/q78.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 2
  },
  {
    id: 79,
    image: "/images/q79.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 5
  },
  {
    id: 80,
    image: "/images/q80.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 1
  },
  {
    id: 81,
    image: "/images/q81.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E", "Answer F"],
    correct_answer: 6
  },
  {
    id: 82,
    image: "/images/q82.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E", "Answer F"],
    correct_answer: 4
  },
  {
    id: 83,
    image: "/images/q83.jpg",
    options: ["1= 6 uints, 2= 4 units, 3= 3 uints, 4= 2 units",
              "1= 3 uints, 2= 2 units, 3= 6 uints, 4= 3 units",
              "1= 3 uints, 2= 4 units, 3= 2 uints, 4= 6 units",
              "1= 6 uints, 2= 2 units, 3= 3 uints, 4= 4 units"],
    correct_answer: 4
  },
  {
    id: 84,
    image: "/images/q84.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E", "Answer F", "Answer G", "Answer H"],
    correct_answer: 1
  },
  {
    id: 85,
    image: "/images/q85.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 4
  },
  {
    id: 86,
    image: "/images/q86.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 5
  },
  {
    id: 87,
    image: "/images/q87.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 4
  },
  {
    id: 88,
    image: "/images/q88.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 3
  },
  {
    id: 89,
    image: "/images/q89.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E", "Answer F"],
    correct_answer: 3
  },
  {
    id: 90,
    image: "/images/q90.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 2
  },
  {
    id: 91,
    image: "/images/q91.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E", "Answer F"],
    correct_answer: 3
  },
  {
    id: 92,
    image: "/images/q92.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 5
  },
  {
    id: 93,
    image: "/images/q93.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E", "Answer F"],
    correct_answer: 3
  },
  {
    id: 94,
    image: "/images/q94.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 1
  },
  {
    id: 95,
    image: "/images/q95.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 4
  },
  {
    id: 96,
    image: "/images/q96.jpg",
    options: ["Answer A", "Answer B", "Answer C"],
    correct_answer: 2
  },
  {
    id: 97,
    image: "/images/q97.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 1
  },
  {
    id: 98,
    image: "/images/q98.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 2
  },
  {
    id: 99,
    image: "/images/q99.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 2
  },
  {
    id: 100,
    image: "/images/q100.jpg",
    options: ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"],
    correct_answer: 2
  }
];

// TODO: Add remaining 90 questions here to reach 100 total
// Each question should have:
// - id: sequential number (11-100)
// - image: path to image in /images folder (e.g., "/images/q11.jpg")
// - options: array of 4 option strings
// - correct_answer: number 1-4 indicating the correct option
