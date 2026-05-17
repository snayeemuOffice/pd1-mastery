// Flashcard data extracted from Focus on Force Knowledge Checks
export const flashcards = [
  // Chapter 1: Salesforce Fundamentals (knowledge-check-88)
  {
    id: 'fc1',
    chapter: 'chapter1',
    topic: 'PD1-601',
    front: 'Which component of the MVC architecture do Salesforce Objects represent?',
    back: 'Salesforce Objects represent the Model layer of the MVC architecture. Objects define the data structure (fields, relationships) and business logic (validation rules, triggers). They represent the "data" part of the application.'
  },
  {
    id: 'fc2',
    chapter: 'chapter1',
    topic: 'PD1-601',
    front: 'Which two programming models are available for building Lightning components?',
    back: 'The two programming models are:\n1. Aura Components - The original proprietary framework\n2. Lightning Web Components (LWC) - Modern standard-based framework using ES6+, Custom Elements, Shadow DOM'
  },
  {
    id: 'fc3',
    chapter: 'chapter1',
    topic: 'PD1-601',
    front: 'What namespace is used by Lightning components that exist in two versions (Aura and LWC)?',
    back: 'The "c:" namespace is used for custom Lightning components. Both Aura and Lightning Web Components use this namespace for custom components within a Salesforce organization.'
  },
  {
    id: 'fc4',
    chapter: 'chapter1',
    topic: 'PD1-602',
    front: 'What can be created to update a custom field on an unrelated custom object whenever a new account is created?',
    back: 'A Record-Triggered Flow can update a custom field on an unrelated custom object when a new account is created. Flows are the preferred declarative tool for cross-object automation without writing code.'
  },
  {
    id: 'fc5',
    chapter: 'chapter1',
    topic: 'PD1-602',
    front: 'Which property of an object or field can be changed when it is referenced in Apex code?',
    back: 'The Label can be changed without affecting Apex code. Apex references objects and fields by their API names (which cannot be changed). Labels are purely UI/display concerns and can be modified freely.'
  },
  {
    id: 'fc6',
    chapter: 'chapter1',
    topic: 'PD1-603',
    front: 'How is a many-to-many relationship created in Salesforce?',
    back: 'A many-to-many relationship is created using a Junction Object that has two Master-Detail relationships. The junction object sits between the two objects, allowing records on both sides to relate to multiple records on the other side.'
  },
  {
    id: 'fc7',
    chapter: 'chapter1',
    topic: 'PD1-603',
    front: 'What is the difference between a Lookup and Master-Detail relationship?',
    back: 'Lookup: Optional, no cascade delete, child remains if parent deleted, no roll-up summaries by default.\n\nMaster-Detail: Required, cascade delete (child deleted with parent), roll-up summaries available, child inherits parent sharing.'
  },
  {
    id: 'fc8',
    chapter: 'chapter1',
    topic: 'PD1-604',
    front: 'What is the maximum number of records the Data Import Wizard can process?',
    back: 'The Data Import Wizard can process up to 50,000 records at a time. For larger data volumes, Data Loader should be used, which can handle up to 5 million records.'
  },

  // Chapter 3: User Interface (knowledge-check-69)
  {
    id: 'fc9',
    chapter: 'chapter3',
    topic: 'PD1-401',
    front: 'Which component can be used to display individual fields on a record in a Visualforce page?',
    back: 'The <apex:outputField> component displays individual field values. It respects field-level security and displays the field in the appropriate format based on its data type. Use <apex:inputField> for editable fields.'
  },
  {
    id: 'fc10',
    chapter: 'chapter3',
    topic: 'PD1-401',
    front: 'Which coarse-grained component displays the detail page of an object in Visualforce?',
    back: 'The <apex:detail> component renders the entire detail page for a record, including related lists, buttons, and record detail. It\'s a quick way to display a complete record page without manually laying out each field.'
  },
  {
    id: 'fc11',
    chapter: 'chapter3',
    topic: 'PD1-401',
    front: 'Which iteration component can generate a table in Visualforce?',
    back: 'Three options: <apex:pageBlockTable> (Salesforce styled), <apex:dataTable> (HTML table), <apex:repeat> (custom markup). All can iterate over collections to generate tabular content.'
  },
  {
    id: 'fc12',
    chapter: 'chapter3',
    topic: 'PD1-405',
    front: 'What are the key benefits of the Lightning Component framework?',
    back: '1. Component-based architecture for reusable UI components\n2. Event-driven communication between components\n3. Cross-device compatibility (Lightning, Mobile, Communities)\n4. Built-in security and data access\n5. Performance optimization with client-side rendering'
  },
  {
    id: 'fc13',
    chapter: 'chapter3',
    topic: 'PD1-406',
    front: 'What is the best way to prevent SOQL injection in Visualforce?',
    back: 'Use bind variables in dynamic SOQL queries. Bind variables automatically escape user input, preventing malicious SOQL from being injected. Never use string concatenation with user input in SOQL queries.'
  },
  {
    id: 'fc14',
    chapter: 'chapter3',
    topic: 'PD1-407',
    front: 'What is the purpose of the @AuraEnabled annotation?',
    back: 'The @AuraEnabled annotation makes an Apex method accessible from Lightning components (both Aura and LWC). Add cacheable=true for read-only methods to enable caching and improve performance.'
  },
  {
    id: 'fc15',
    chapter: 'chapter3',
    topic: 'PD1-407',
    front: 'How does data flow in Lightning Web Components?',
    back: 'One-way data flow:\n• Parent → Child: Via @api properties\n• Child → Parent: Via custom events dispatched with dispatchEvent()\n• Sibling/Cross-DOM: Via Lightning Message Service'
  },

  // Chapter 4.1: Testing (knowledge-check-70)
  {
    id: 'fc16',
    chapter: 'chapter4',
    topic: 'PD1-501',
    front: 'What is the minimum code coverage required for deploying Apex to production?',
    back: '75% cumulative code coverage across all Apex classes and triggers is required for deployment. However, best practice is to aim for 100% with meaningful test scenarios, not just line coverage.'
  },
  {
    id: 'fc17',
    chapter: 'chapter4',
    topic: 'PD1-501',
    front: 'What is the purpose of Test.startTest() and Test.stopTest()?',
    back: 'They reset governor limits and isolate test logic:\n• Code between them gets fresh governor limits\n• Test.stopTest() forces all asynchronous processes to complete synchronously\n• Essential for testing batch Apex, @future methods, and queueable jobs'
  },
  {
    id: 'fc18',
    chapter: 'chapter4',
    topic: 'PD1-501',
    front: 'What does the @testSetup annotation do?',
    back: '@testSetup defines a method that creates test data available to ALL test methods in the class. The data is rolled back after each test method, ensuring test isolation. It\'s efficient for sharing common test data setup.'
  },
  {
    id: 'fc19',
    chapter: 'chapter4',
    topic: 'PD1-501',
    front: 'Which annotation defines a test method in Apex?',
    back: 'The @isTest annotation defines a test method. Test methods must be static, void, and annotated with @isTest. They don\'t count against code limits and can access all data with @isTest(SeeAllData=true).'
  },

  // Chapter 4.2: Debug & Deployment (knowledge-check-71)
  {
    id: 'fc20',
    chapter: 'chapter4',
    topic: 'PD1-502',
    front: 'Which tool should be used to view debug logs in Salesforce?',
    back: 'Both the Developer Console and the Debug Log panel in Setup can view debug logs:\n• Developer Console: Interactive filtering, searching, execution overview\n• Setup Debug Log Panel: Configure which users generate logs\n• System.debug() messages appear in both'
  },
  {
    id: 'fc21',
    chapter: 'chapter4',
    topic: 'PD1-505',
    front: 'What is Salesforce DX (SFDX)?',
    back: 'Salesforce DX is a set of tools for modern Salesforce development:\n• Source-driven development with version control\n• Scratch orgs: Disposable, configurable environments\n• Salesforce CLI: Command-line interface\n• Enables CI/CD workflows\n• Package development model'
  },
  {
    id: 'fc22',
    chapter: 'chapter4',
    topic: 'PD1-505',
    front: 'What is a scratch org in Salesforce DX?',
    back: 'A scratch org is a disposable, configurable, short-term Salesforce environment for development and testing. It\'s defined by a configuration file (project-scratch-def.json), can be quickly created and deleted, and supports source-driven development.'
  },
  {
    id: 'fc23',
    chapter: 'chapter4',
    topic: 'PD1-509',
    front: 'What is a change set in Salesforce?',
    back: 'A change set is a declarative deployment tool for moving metadata between connected Salesforce orgs (typically sandbox → production). It uses a point-and-click interface to select components. Only works between connected orgs (not for cross-org deployments).'
  },
  {
    id: 'fc24',
    chapter: 'chapter4',
    topic: 'PD1-509',
    front: 'What is the correct order for deploying changes to production?',
    back: 'Best practice deployment order:\n1. Develop in a development sandbox or scratch org\n2. Test thoroughly in a testing/staging sandbox\n3. Deploy to production with 75%+ code coverage\n4. Validate in production\n\nNever develop directly in production!'
  },

  // Additional comprehensive flashcards
  {
    id: 'fc25',
    chapter: 'chapter2',
    topic: 'PD1-305',
    front: 'What is the difference between SOQL and SOSL?',
    back: 'SOQL (Salesforce Object Query Language):\n• Queries specific objects\n• Returns structured records\n• SELECT fields FROM object\n\nSOSL (Salesforce Object Search Language):\n• Text search across multiple objects\n• Returns results grouped by object type\n• FIND {term} IN ALL FIELDS RETURNING object'
  },
  {
    id: 'fc26',
    chapter: 'chapter2',
    topic: 'PD1-306',
    front: 'What is the best practice for bulkifying Apex triggers?',
    back: 'Bulkification best practices:\n1. Collect all record IDs first from Trigger.new\n2. Perform ONE SOQL query outside the loop\n3. Process records as a collection, not individually\n4. Avoid SOQL/DML inside for loops\n5. Use maps for efficient lookups\n\nThis prevents hitting governor limits (100 SOQL, 150 DML).'
  },
  {
    id: 'fc27',
    chapter: 'chapter2',
    topic: 'PD1-308',
    front: 'What are the key governor limits in Apex?',
    back: 'Key governor limits per transaction:\n• SOQL queries: 100\n• DML statements: 150\n• Records retrieved by SOQL: 50,000\n• Total DML records: 10,000\n• CPU time: 10s (sync), 60s (async)\n• Heap size: 6MB (sync), 12MB (async)\n• Callout timeout: 120 seconds'
  },
  {
    id: 'fc28',
    chapter: 'chapter2',
    topic: 'PD1-309',
    front: 'What is the save order of execution in Salesforce?',
    back: 'Key order: Before Triggers → Validation Rules → After Triggers → Assignment Rules → Auto-Response Rules → Workflow Rules → Processes → Flows → Escalation Rules → Roll-up Summaries\n\nUnderstanding this order prevents recursion and unexpected behavior.'
  },
  {
    id: 'fc29',
    chapter: 'chapter2',
    topic: 'PD1-302',
    front: 'What is the difference between public and global access modifiers?',
    back: 'public: Accessible within the current namespace (and by classes that extend it)\n\nglobal: Accessible by ALL classes in the Salesforce organization, including managed packages. Use sparingly - once global, you can\'t remove it in managed packages.'
  },
  {
    id: 'fc30',
    chapter: 'chapter3',
    topic: 'PD1-406',
    front: 'What is the difference between "with sharing" and "without sharing"?',
    back: 'with sharing: Enforces the current user\'s sharing rules and record-level security\n\nwithout sharing: Bypasses sharing rules - the code runs in system context\n\ninherited sharing: Uses the sharing context of the class that calls it\n\nBest practice: Always use "with sharing" unless you have a specific reason not to.'
  }
];

export const getFlashcardsByChapter = (chapterId) => {
  return flashcards.filter(f => f.chapter === chapterId);
};

export const getAllChapters = () => {
  return [...new Set(flashcards.map(f => f.chapter))];
};
