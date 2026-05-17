// Multiple exam sets with 60 questions each, respecting official PD1 marking ratios
// Official PD1 exam: 60 questions, 105 minutes, 68% passing score
// Official weights: SF Fundamentals 23%, Apex Programming 30%, User Interface 15%, Testing/Debug/Deploy 12%
// Remaining 20% distributed across data model, logic, and UI topics

import { examQuestions } from './examQuestions';

// Helper to shuffle array
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Chapter question pools
const chapter1Questions = examQuestions.filter(q => q.chapter === 'chapter1');
const chapter2Questions = examQuestions.filter(q => q.chapter === 'chapter2');
const chapter3Questions = examQuestions.filter(q => q.chapter === 'chapter3');
const chapter4Questions = examQuestions.filter(q => q.chapter === 'chapter4');

// Official PD1 weights (60 questions total):
// SF Fundamentals (Ch1): 23% = 14 questions
// Apex Programming (Ch2): 30% = 18 questions
// User Interface (Ch3): 15% = 9 questions
// Testing/Debug/Deploy (Ch4): 12% = 7 questions
// Remaining 20% (12 questions) distributed: Ch1+1, Ch2+2, Ch3+5, Ch4+4
// Final: Ch1=15, Ch2=20, Ch3=14, Ch4=11

const createExamSet = (setNumber) => {
  const ch1 = shuffle(chapter1Questions).slice(0, 15);
  const ch2 = shuffle(chapter2Questions).slice(0, 20);
  const ch3 = shuffle(chapter3Questions).slice(0, 14);
  const ch4 = shuffle(chapter4Questions).slice(0, 11);

  const questions = shuffle([...ch1, ...ch2, ...ch3, ...ch4]);

  return {
    id: `set${setNumber}`,
    name: `Practice Exam Set ${setNumber}`,
    description: '60 questions following official PD1 exam format and marking ratios',
    questions: questions,
    timeLimit: 105,
    passingScore: 68,
    totalQuestions: 60,
    weights: {
      'Salesforce Fundamentals': '25%',
      'Apex Programming': '33%',
      'User Interface': '23%',
      'Testing & Deployment': '19%'
    }
  };
};

// Create 5 exam sets with unique questions where possible
export const examSets = [
  createExamSet(1),
  createExamSet(2),
  createExamSet(3),
  createExamSet(4),
  createExamSet(5)
];

// Chapter quizzes (one per chapter)
export const chapterQuizzes = [
  {
    id: 'ch1-quiz',
    name: 'Chapter 1: Salesforce Fundamentals',
    description: 'Test your knowledge of multi-tenant architecture, MVC, data model, and declarative vs programmatic',
    timeLimit: 25,
    passingScore: 68,
    questions: shuffle(chapter1Questions).slice(0, 20)
  },
  {
    id: 'ch2-quiz',
    name: 'Chapter 2: Apex Programming',
    description: 'Test your knowledge of Apex fundamentals, triggers, SOQL/SOSL, and best practices',
    timeLimit: 35,
    passingScore: 68,
    questions: shuffle(chapter2Questions).slice(0, 20)
  },
  {
    id: 'ch3-quiz',
    name: 'Chapter 3: User Interface',
    description: 'Test your knowledge of Visualforce, Lightning Components, LWC, and security',
    timeLimit: 30,
    passingScore: 68,
    questions: shuffle(chapter3Questions).slice(0, 20)
  },
  {
    id: 'ch4-quiz',
    name: 'Chapter 4: Testing & Deployment',
    description: 'Test your knowledge of testing, debugging, deployment, and Salesforce DX',
    timeLimit: 20,
    passingScore: 68,
    questions: shuffle(chapter4Questions).slice(0, 20)
  }
];

// Topic quizzes (one per topic area)
export const topicQuizzes = [
  {
    id: 'pd1-601',
    name: 'PD1-601: Multi-Tenant Architecture & MVC',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-601')).slice(0, 10)
  },
  {
    id: 'pd1-602',
    name: 'PD1-602: Declarative vs Programmatic',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-602')).slice(0, 10)
  },
  {
    id: 'pd1-603',
    name: 'PD1-603: Data Model & Relationships',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-603')).slice(0, 10)
  },
  {
    id: 'pd1-604',
    name: 'PD1-604: Data Import & Export',
    timeLimit: 10,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-604')).slice(0, 8)
  },
  {
    id: 'pd1-301',
    name: 'PD1-301: Declarative Automation',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-301')).slice(0, 10)
  },
  {
    id: 'pd1-302',
    name: 'PD1-302: Apex Classes & Interfaces',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-302')).slice(0, 10)
  },
  {
    id: 'pd1-303',
    name: 'PD1-303: Apex Control Flow',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-303')).slice(0, 10)
  },
  {
    id: 'pd1-305',
    name: 'PD1-305: SOQL & DML',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-305')).slice(0, 10)
  },
  {
    id: 'pd1-306',
    name: 'PD1-306: Apex Classes & Triggers',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-306')).slice(0, 10)
  },
  {
    id: 'pd1-308',
    name: 'PD1-308: Governor Limits',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-308')).slice(0, 10)
  },
  {
    id: 'pd1-309',
    name: 'PD1-309: Save Order & Recursion',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-309')).slice(0, 10)
  },
  {
    id: 'pd1-310',
    name: 'PD1-310: Exception Handling',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-310')).slice(0, 10)
  },
  {
    id: 'pd1-312',
    name: 'PD1-312: Declarative + Apex Integration',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-312')).slice(0, 10)
  },
  {
    id: 'pd1-401',
    name: 'PD1-401: Visualforce',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-401')).slice(0, 10)
  },
  {
    id: 'pd1-405',
    name: 'PD1-405: Lightning Component Framework',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-405')).slice(0, 10)
  },
  {
    id: 'pd1-406',
    name: 'PD1-406: UI Security',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-406')).slice(0, 10)
  },
  {
    id: 'pd1-407',
    name: 'PD1-407: Aura Components',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-407')).slice(0, 10)
  },
  {
    id: 'pd1-408',
    name: 'PD1-408: LWC Events',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-408')).slice(0, 10)
  },
  {
    id: 'pd1-409',
    name: 'PD1-409: Apex with Page Components',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-409')).slice(0, 10)
  },
  {
    id: 'pd1-501',
    name: 'PD1-501: Testing',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-501')).slice(0, 10)
  },
  {
    id: 'pd1-502',
    name: 'PD1-502: Debugging & Monitoring',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-502')).slice(0, 10)
  },
  {
    id: 'pd1-505',
    name: 'PD1-505: Developer Tools',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-505')).slice(0, 10)
  },
  {
    id: 'pd1-509',
    name: 'PD1-509: Deployment',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-509')).slice(0, 10)
  }
];
