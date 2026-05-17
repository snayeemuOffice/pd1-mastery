// Multiple exam sets with 60 questions each, respecting official PD1 marking ratios
// Official PD1 exam: 60 questions, 105 minutes, 68% passing score
// Official weights:
//   Developer Fundamentals: 27% (16 questions)
//   Process Automation and Logic: 28% (17 questions)
//   User Interface: 25% (15 questions)
//   Testing, Debugging, and Deployment: 20% (12 questions)

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

// Official chapter question pools
const devFundamentalsQuestions = examQuestions.filter(q => q.chapter === 'devFundamentals');
const processAutomationQuestions = examQuestions.filter(q => q.chapter === 'processAutomation');
const userInterfaceQuestions = examQuestions.filter(q => q.chapter === 'userInterface');
const testingDebuggingQuestions = examQuestions.filter(q => q.chapter === 'testingDebugging');

// Official PD1 weights (60 questions total):
// Developer Fundamentals: 27% = 16 questions
// Process Automation and Logic: 28% = 17 questions
// User Interface: 25% = 15 questions
// Testing, Debugging, and Deployment: 20% = 12 questions

const createExamSet = (setNumber) => {
  const ch1 = shuffle(devFundamentalsQuestions).slice(0, 16);
  const ch2 = shuffle(processAutomationQuestions).slice(0, 17);
  const ch3 = shuffle(userInterfaceQuestions).slice(0, 15);
  const ch4 = shuffle(testingDebuggingQuestions).slice(0, 12);

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
      'Developer Fundamentals': '27%',
      'Process Automation and Logic': '28%',
      'User Interface': '25%',
      'Testing, Debugging, and Deployment': '20%'
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

// Chapter quizzes (one per official chapter)
export const chapterQuizzes = [
  {
    id: 'quiz-devFundamentals',
    name: 'Developer Fundamentals Quiz',
    description: 'Multi-tenant architecture, MVC, data model, relationships, and data import/export',
    timeLimit: 25,
    passingScore: 68,
    questions: shuffle(devFundamentalsQuestions).slice(0, 20)
  },
  {
    id: 'quiz-processAutomation',
    name: 'Process Automation and Logic Quiz',
    description: 'Declarative automation, Apex programming, SOQL, DML, triggers, and governor limits',
    timeLimit: 35,
    passingScore: 68,
    questions: shuffle(processAutomationQuestions).slice(0, 20)
  },
  {
    id: 'quiz-userInterface',
    name: 'User Interface Quiz',
    description: 'Visualforce, Lightning Components, LWC, events, and UI security',
    timeLimit: 30,
    passingScore: 68,
    questions: shuffle(userInterfaceQuestions).slice(0, 20)
  },
  {
    id: 'quiz-testingDebugging',
    name: 'Testing, Debugging, and Deployment Quiz',
    description: 'Test classes, debugging, developer tools, and deployment processes',
    timeLimit: 20,
    passingScore: 68,
    questions: shuffle(testingDebuggingQuestions).slice(0, 20)
  }
];

// Topic quizzes (one per topic area)
export const topicQuizzes = [
  {
    id: 'quiz-601',
    name: 'PD1-601: Multi-Tenant Architecture & MVC',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-601')).slice(0, 10)
  },
  {
    id: 'quiz-602',
    name: 'PD1-602: Declarative vs Programmatic',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-602')).slice(0, 10)
  },
  {
    id: 'quiz-603',
    name: 'PD1-603: Data Model & Relationships',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-603')).slice(0, 10)
  },
  {
    id: 'quiz-604',
    name: 'PD1-604: Data Import & Export',
    timeLimit: 10,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-604')).slice(0, 8)
  },
  {
    id: 'quiz-301',
    name: 'PD1-301: Declarative Automation',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-301')).slice(0, 10)
  },
  {
    id: 'quiz-302',
    name: 'PD1-302: Variables, Constants & Methods',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-302')).slice(0, 10)
  },
  {
    id: 'quiz-303',
    name: 'PD1-303: Control Flow Statements',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-303')).slice(0, 10)
  },
  {
    id: 'quiz-305',
    name: 'PD1-305: SOQL, SOSL & DML',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-305')).slice(0, 10)
  },
  {
    id: 'quiz-306',
    name: 'PD1-306: Apex Classes & Triggers',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-306')).slice(0, 10)
  },
  {
    id: 'quiz-308',
    name: 'PD1-308: Governor Limits',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-308')).slice(0, 10)
  },
  {
    id: 'quiz-309',
    name: 'PD1-309: Save Order of Execution',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-309')).slice(0, 10)
  },
  {
    id: 'quiz-310',
    name: 'PD1-310: Exception Handling',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-310')).slice(0, 10)
  },
  {
    id: 'quiz-312',
    name: 'PD1-312: Declarative + Apex Integration',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-312')).slice(0, 10)
  },
  {
    id: 'quiz-401',
    name: 'PD1-401: Visualforce',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-401')).slice(0, 10)
  },
  {
    id: 'quiz-405',
    name: 'PD1-405: Lightning Component Framework',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-405')).slice(0, 10)
  },
  {
    id: 'quiz-406',
    name: 'PD1-406: UI Security',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-406')).slice(0, 10)
  },
  {
    id: 'quiz-407',
    name: 'PD1-407: Aura Components',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-407')).slice(0, 10)
  },
  {
    id: 'quiz-408',
    name: 'PD1-408: LWC Events',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-408')).slice(0, 10)
  },
  {
    id: 'quiz-409',
    name: 'PD1-409: Apex with Page Components',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-409')).slice(0, 10)
  },
  {
    id: 'quiz-501',
    name: 'PD1-501: Testing',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-501')).slice(0, 10)
  },
  {
    id: 'quiz-502',
    name: 'PD1-502: Debugging & Monitoring',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-502')).slice(0, 10)
  },
  {
    id: 'quiz-505',
    name: 'PD1-505: Developer Tools',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-505')).slice(0, 10)
  },
  {
    id: 'quiz-509',
    name: 'PD1-509: Deployment',
    timeLimit: 15,
    passingScore: 70,
    questions: shuffle(examQuestions.filter(q => q.topic === 'PD1-509')).slice(0, 10)
  }
];
