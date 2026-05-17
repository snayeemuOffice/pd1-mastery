// Comprehensive PD1 Exam Questions organized by chapter
// Based on Focus on Force study materials

export const examQuestions = [
  // Chapter 1: Salesforce Fundamentals (601-604)
  {
    id: 1,
    chapter: 'chapter1',
    topic: 'PD1-601',
    question: 'Which component of the MVC (Model-View-Controller) architecture do Salesforce Objects represent?',
    options: [
      'View',
      'Controller',
      'Model',
      'Neither - Objects are separate from MVC'
    ],
    correct: 2,
    explanation: 'Salesforce Objects represent the Model layer of the MVC architecture. Objects define the data structure and business logic. Visualforce pages and Lightning components represent the View, while Apex controllers represent the Controller layer.'
  },
  {
    id: 2,
    chapter: 'chapter1',
    topic: 'PD1-601',
    question: 'Which two programming models are available for building Lightning components?',
    options: [
      'Aura and Lightning Web Components (LWC)',
      'Visualforce and Aura',
      'Lightning Web Components and Visualforce',
      'Apex and Lightning Web Components'
    ],
    correct: 0,
    explanation: 'The two programming models for building Lightning components are Aura (the original framework) and Lightning Web Components (LWC), which is the modern standards-based framework built on web standards like ES6+, custom elements, and shadow DOM.'
  },
  {
    id: 3,
    chapter: 'chapter1',
    topic: 'PD1-601',
    question: 'What is a key characteristic of a multi-tenant architecture?',
    options: [
      'Each customer has their own dedicated server',
      'Resources are shared among multiple customers',
      'There is no customization allowed',
      'Data is stored in a single database for all customers'
    ],
    correct: 1,
    explanation: 'In a multi-tenant architecture, resources (servers, storage, etc.) are shared among multiple customers (tenants). Salesforce uses this model to efficiently serve many organizations from shared infrastructure while maintaining data isolation and security.'
  },
  {
    id: 4,
    chapter: 'chapter1',
    topic: 'PD1-601',
    question: 'What namespace is used by Lightning components that exist in two versions (Aura component and Lightning web component)?',
    options: [
      'lightning:',
      'c:',
      'force:',
      'ui:'
    ],
    correct: 1,
    explanation: 'The "c:" namespace is used for custom Lightning components. Both Aura and Lightning Web Components use the "c" namespace for custom components in a Salesforce org.'
  },
  {
    id: 5,
    chapter: 'chapter1',
    topic: 'PD1-602',
    question: 'What can be created to update a custom field on an unrelated custom object whenever a new account is created in Salesforce?',
    options: [
      'A record trigger flow',
      'A Visualforce page',
      'A Lightning component',
      'A formula field'
    ],
    correct: 0,
    explanation: 'A record-triggered flow can be used to update a custom field on an unrelated custom object when a new account is created. Flows are the preferred declarative automation tool for this type of cross-object update without writing code.'
  },
  {
    id: 6,
    chapter: 'chapter1',
    topic: 'PD1-602',
    question: 'Which property of an object or field can be changed when it is referenced in Apex code?',
    options: [
      'The API name',
      'The label',
      'The data type',
      'The field length'
    ],
    correct: 1,
    explanation: 'The label of an object or field can be changed without affecting Apex code. Apex code references objects and fields by their API names, which cannot be changed once created. Changing labels is purely a UI/display concern.'
  },
  {
    id: 7,
    chapter: 'chapter1',
    topic: 'PD1-602',
    question: 'What is the difference between a lookup and master-detail relationship?',
    options: [
      'Lookup relationships are always required; master-detail are optional',
      'In master-detail, the detail record is deleted when the master is deleted; in lookup, the child record remains',
      'Lookup relationships support roll-up summary fields; master-detail does not',
      'There is no difference - they are interchangeable'
    ],
    correct: 1,
    explanation: 'In a master-detail relationship, the detail (child) record is automatically deleted when the master (parent) record is deleted (cascade delete). In a lookup relationship, the child record remains and the lookup field is simply cleared. Master-detail also tightly couples security and ownership.'
  },
  {
    id: 8,
    chapter: 'chapter1',
    topic: 'PD1-603',
    question: 'How is a many-to-many relationship created in Salesforce?',
    options: [
      'Using a junction object with two master-detail relationships',
      'Using two lookup relationships',
      'Using a single master-detail relationship',
      'Using a formula field'
    ],
    correct: 0,
    explanation: 'A many-to-many relationship is created using a junction object that has two master-detail relationships. This junction object sits between the two objects and allows records on both sides to be related to multiple records on the other side.'
  },
  {
    id: 9,
    chapter: 'chapter1',
    topic: 'PD1-603',
    question: 'What does the user interface display when a user tries to change the data type of a field that is referenced in Apex code?',
    options: [
      'The change is automatically applied',
      'A warning that the field is referenced in code and the data type cannot be changed',
      'The field is automatically deleted',
      'An error message with no option to proceed'
    ],
    correct: 1,
    explanation: 'When trying to change the data type of a field referenced in Apex code, Salesforce displays a warning that the field is referenced in code. The data type change is not allowed because it could break the existing Apex code that depends on that field type.'
  },
  {
    id: 10,
    chapter: 'chapter1',
    topic: 'PD1-603',
    question: 'Which relationship can be used on the User object to associate one user with another?',
    options: [
      'Master-detail relationship',
      'Lookup relationship to User',
      'Junction object',
      'Hierarchical relationship'
    ],
    correct: 1,
    explanation: 'A lookup relationship to the User object can be used to associate one user with another. For example, a "Manager" field on the User object is a lookup to another User record.'
  },
  {
    id: 11,
    chapter: 'chapter1',
    topic: 'PD1-604',
    question: 'Which tool should be used to import large volumes of data into Salesforce?',
    options: [
      'Data Import Wizard',
      'Data Loader',
      'Data.com',
      'Workbench'
    ],
    correct: 1,
    explanation: 'Data Loader is the recommended tool for importing large volumes of data into Salesforce. It can handle up to 5 million records and supports both import and export operations. The Data Import Wizard is better for smaller volumes (up to 50,000 records).'
  },
  {
    id: 12,
    chapter: 'chapter1',
    topic: 'PD1-604',
    question: 'What is the maximum number of records that the Data Import Wizard can process at once?',
    options: [
      '5,000',
      '10,000',
      '50,000',
      '500,000'
    ],
    correct: 2,
    explanation: 'The Data Import Wizard can process up to 50,000 records at a time. For larger data volumes, Data Loader should be used instead, which can handle up to 5 million records.'
  },

  // Chapter 2: Apex Programming (301-312)
  {
    id: 13,
    chapter: 'chapter2',
    topic: 'PD1-301',
    question: 'Which declarative automation feature can be used to send an outbound message without writing code?',
    options: [
      'Process Builder',
      'Workflow Rules',
      'Approval Processes',
      'All of the above'
    ],
    correct: 1,
    explanation: 'Workflow Rules can send outbound messages as an action without writing code. While Process Builder and Flow can also trigger actions, Workflow Rules is the declarative feature specifically designed for outbound messages.'
  },
  {
    id: 14,
    chapter: 'chapter2',
    topic: 'PD1-301',
    question: 'Which automation tool should be used when you need to display a custom user interface?',
    options: [
      'Flow',
      'Process Builder',
      'Workflow Rule',
      'Approval Process'
    ],
    correct: 0,
    explanation: 'Flow (specifically Screen Flows) is the only declarative automation tool that can display a custom user interface. It can present screens with input fields, choices, and other elements to guide users through a business process.'
  },
  {
    id: 15,
    chapter: 'chapter2',
    topic: 'PD1-302',
    question: 'Which access modifier makes a variable or method available to all other classes in the Salesforce organization?',
    options: [
      'private',
      'public',
      'global',
      'protected'
    ],
    correct: 2,
    explanation: 'The "global" access modifier makes a variable or method available to all other classes in the Salesforce organization, including those in managed packages. "public" is limited to the current namespace, while "private" restricts access to the defining class only.'
  },
  {
    id: 16,
    chapter: 'chapter2',
    topic: 'PD1-302',
    question: 'What is the correct way to declare a constant in Apex?',
    options: [
      'static final Integer MAX = 10;',
      'const Integer MAX = 10;',
      'final static Integer MAX = 10;',
      'Both A and C are correct'
    ],
    correct: 3,
    explanation: 'Both "static final Integer MAX = 10;" and "final static Integer MAX = 10;" are valid ways to declare a constant in Apex. The "static" keyword makes it a class-level constant, and "final" prevents reassignment. Apex does not use the "const" keyword.'
  },
  {
    id: 17,
    chapter: 'chapter2',
    topic: 'PD1-303',
    question: 'Which loop type in Apex will always execute at least once?',
    options: [
      'for loop',
      'while loop',
      'do-while loop',
      'for-each loop'
    ],
    correct: 2,
    explanation: 'The do-while loop always executes at least once because the condition is checked after the loop body executes. The other loop types check the condition before executing, so they may not execute at all if the condition is initially false.'
  },
  {
    id: 18,
    chapter: 'chapter2',
    topic: 'PD1-303',
    question: 'What happens when a "break" statement is encountered inside a loop?',
    options: [
      'The loop continues to the next iteration',
      'The loop terminates and execution continues after the loop',
      'The entire program terminates',
      'An exception is thrown'
    ],
    correct: 1,
    explanation: 'When a "break" statement is encountered inside a loop, the loop immediately terminates and execution continues with the first statement after the loop. This is useful for exiting a loop early when a certain condition is met.'
  },
  {
    id: 19,
    chapter: 'chapter2',
    topic: 'PD1-305',
    question: 'Which SOQL query is syntactically correct?',
    options: [
      'SELECT Id, Name FROM Account WHERE Industry = \'Technology\'',
      'SELECT Id, Name FROM Account WHERE Industry = Technology',
      'SELECT Id, Name WHERE Account.Industry = \'Technology\'',
      'GET Id, Name FROM Account WHERE Industry = \'Technology\''
    ],
    correct: 0,
    explanation: 'The correct SOQL syntax uses SELECT fields FROM object WHERE condition. String values must be enclosed in single quotes. The query selects Id and Name fields from Account records where the Industry field equals "Technology".'
  },
  {
    id: 20,
    chapter: 'chapter2',
    topic: 'PD1-305',
    question: 'Which DML statement is used to insert multiple records at once?',
    options: [
      'insert records;',
      'insertList records;',
      'Database.insert(records);',
      'Both A and C are correct'
    ],
    correct: 3,
    explanation: 'Both "insert records;" (DML statement) and "Database.insert(records);" (Database method) can be used to insert multiple records. The Database method provides additional options like partial success handling with the allOrNone parameter.'
  },
  {
    id: 21,
    chapter: 'chapter2',
    topic: 'PD1-305',
    question: 'What is the difference between SOQL and SOSL?',
    options: [
      'SOQL searches across multiple objects; SOSL searches within a single object',
      'SOQL searches within specific objects; SOSL searches across multiple objects using text search',
      'They are identical in functionality',
      'SOQL is for metadata; SOSL is for data'
    ],
    correct: 1,
    explanation: 'SOQL (Salesforce Object Query Language) queries specific objects and returns structured records. SOSL (Salesforce Object Search Language) performs text searches across multiple objects and returns results grouped by object type. SOSL uses full-text search indexes.'
  },
  {
    id: 22,
    chapter: 'chapter2',
    topic: 'PD1-306',
    question: 'What is the best practice for bulkifying Apex triggers?',
    options: [
      'Use SOQL queries inside for loops',
      'Collect all record IDs first, then perform one SOQL query outside the loop',
      'Process records one at a time',
      'Use Database.query() for each record'
    ],
    correct: 1,
    explanation: 'The best practice for bulkifying triggers is to collect all needed record IDs first (from Trigger.new), then perform a single SOQL query outside any loop to retrieve all related data. This avoids hitting governor limits for SOQL queries (100 per transaction).'
  },
  {
    id: 23,
    chapter: 'chapter2',
    topic: 'PD1-306',
    question: 'Which trigger context variable returns a list of sObjects that can be modified in a before trigger?',
    options: [
      'Trigger.old',
      'Trigger.new',
      'Trigger.oldMap',
      'Trigger.newMap'
    ],
    correct: 1,
    explanation: 'Trigger.new returns a list of sObjects that can be modified in before triggers. Changes to field values in Trigger.new during a before trigger are automatically saved to the database. Trigger.old contains the old versions and cannot be modified.'
  },
  {
    id: 24,
    chapter: 'chapter2',
    topic: 'PD1-308',
    question: 'What is the governor limit for total SOQL queries in a single Apex transaction?',
    options: [
      '50',
      '100',
      '150',
      '200'
    ],
    correct: 1,
    explanation: 'The governor limit for total SOQL queries in a single Apex transaction is 100. This limit applies to the total number of SOQL queries executed synchronously and asynchronously within a single transaction.'
  },
  {
    id: 25,
    chapter: 'chapter2',
    topic: 'PD1-308',
    question: 'What happens when a governor limit is exceeded in Apex?',
    options: [
      'The code continues with a warning',
      'An unhandled exception is thrown and all DML operations are rolled back',
      'The limit is automatically increased',
      'Only the current operation fails'
    ],
    correct: 1,
    explanation: 'When a governor limit is exceeded, an unhandled exception is thrown and all DML operations in the transaction are rolled back. Governor limits are hard limits and cannot be increased or bypassed - they ensure shared resources in the multi-tenant environment.'
  },
  {
    id: 26,
    chapter: 'chapter2',
    topic: 'PD1-309',
    question: 'What is the correct order of execution when a record is saved in Salesforce?',
    options: [
      'Validation rules → Before triggers → After triggers → Assignment rules',
      'Before triggers → Validation rules → After triggers → Assignment rules',
      'Assignment rules → Before triggers → Validation rules → After triggers',
      'Before triggers → Assignment rules → Validation rules → After triggers'
    ],
    correct: 1,
    explanation: 'The correct save order of execution starts with before triggers, then validation rules, then after triggers, followed by assignment rules, auto-response rules, workflow rules, processes, flows, and escalation rules. Understanding this order is critical for avoiding recursion and unexpected behavior.'
  },
  {
    id: 27,
    chapter: 'chapter2',
    topic: 'PD1-309',
    question: 'How can recursion be prevented in Apex triggers?',
    options: [
      'By using the "static" keyword on a Boolean variable to track execution',
      'By using the "final" keyword',
      'By adding more governor limits',
      'Recursion cannot be prevented'
    ],
    correct: 0,
    explanation: 'Recursion can be prevented by using a static Boolean variable as a flag. Set it to "true" when the trigger first executes, and check it at the beginning of the trigger to prevent re-entry. Since static variables persist within a transaction, this effectively prevents recursive trigger execution.'
  },
  {
    id: 28,
    chapter: 'chapter2',
    topic: 'PD1-310',
    question: 'Which exception type is thrown when a record is not found in a SOQL query that expects exactly one result?',
    options: [
      'DmlException',
      'QueryException',
      'NullPointerException',
      'LimitException'
    ],
    correct: 1,
    explanation: 'A QueryException is thrown when a SOQL query that expects exactly one result (without the "list" keyword) returns no records or more than one record. This typically happens with queries like "Account a = [SELECT Id FROM Account LIMIT 1];" when no accounts exist.'
  },
  {
    id: 29,
    chapter: 'chapter2',
    topic: 'PD1-310',
    question: 'How should exceptions be handled in Apex?',
    options: [
      'Always catch the generic Exception type',
      'Catch specific exception types and handle them appropriately',
      'Let all exceptions propagate to the user',
      'Ignore exceptions to avoid code complexity'
    ],
    correct: 1,
    explanation: 'Best practice is to catch specific exception types (like DmlException, QueryException, etc.) rather than the generic Exception type. This allows for targeted error handling and provides more meaningful error messages. Specific catches should come before general ones.'
  },
  {
    id: 30,
    chapter: 'chapter2',
    topic: 'PD1-312',
    question: 'When should Apex be used instead of declarative automation?',
    options: [
      'For simple field updates',
      'For complex business logic that requires multiple conditional branches and integrations',
      'For all automation to ensure maximum control',
      'Only when declarative tools are unavailable'
    ],
    correct: 1,
    explanation: 'Apex should be used for complex business logic that goes beyond what declarative tools can handle, such as complex conditional logic, integrations with external systems, complex data transformations, or when strict error handling is required. Declarative tools should be preferred when they can meet the requirement.'
  },

  // Chapter 3: User Interface (401-409)
  {
    id: 31,
    chapter: 'chapter3',
    topic: 'PD1-401',
    question: 'Which component can be used to display individual fields on a record in a Visualforce page?',
    options: [
      '<apex:detail>',
      '<apex:inputField>',
      '<apex:outputField>',
      '<apex:pageBlockTable>'
    ],
    correct: 2,
    explanation: 'The <apex:outputField> component displays individual field values on a record in a Visualforce page. It respects field-level security and displays the field in the appropriate format based on its data type. <apex:inputField> is used for editable fields.'
  },
  {
    id: 32,
    chapter: 'chapter3',
    topic: 'PD1-401',
    question: 'Which coarse-grained component can be used to display the detail page of an object in a Visualforce page?',
    options: [
      '<apex:detail>',
      '<apex:outputField>',
      '<apex:pageBlock>',
      '<apex:form>'
    ],
    correct: 0,
    explanation: 'The <apex:detail> component is a coarse-grained component that renders the entire detail page for a record, including related lists, buttons, and the record detail. It is a quick way to display a complete record page without manually laying out each field.'
  },
  {
    id: 33,
    chapter: 'chapter3',
    topic: 'PD1-401',
    question: 'Which iteration component can be used to generate a table in Visualforce?',
    options: [
      '<apex:repeat>',
      '<apex:pageBlockTable>',
      '<apex:dataTable>',
      'All of the above'
    ],
    correct: 3,
    explanation: 'All three components can generate tables or repeated content in Visualforce. <apex:pageBlockTable> renders with Salesforce styling, <apex:dataTable> renders a standard HTML table, and <apex:repeat> provides custom markup for each iteration without any predefined structure.'
  },
  {
    id: 34,
    chapter: 'chapter3',
    topic: 'PD1-405',
    question: 'What are the key benefits of the Lightning Component framework?',
    options: [
      'Component-based architecture, event-driven communication, and server-side rendering only',
      'Component-based architecture, event-driven communication, and cross-device compatibility',
      'Only works in Lightning Experience',
      'Requires Visualforce knowledge to use'
    ],
    correct: 1,
    explanation: 'The Lightning Component framework provides a component-based architecture for building reusable UI components, event-driven communication between components, and cross-device compatibility (works in Lightning Experience, mobile, and communities). It supports both client-side and server-side rendering.'
  },
  {
    id: 35,
    chapter: 'chapter3',
    topic: 'PD1-405',
    question: 'What is the difference between an Aura component and a Lightning Web Component (LWC)?',
    options: [
      'Aura uses JavaScript and LWC uses Java',
      'Aura is proprietary; LWC is based on standard web technologies',
      'They are exactly the same',
      'LWC can only be used in mobile apps'
    ],
    correct: 1,
    explanation: 'Aura uses a proprietary framework with its own component model, while Lightning Web Components (LWC) is built on standard web technologies (ES6+, custom elements, shadow DOM). LWC is the modern approach recommended by Salesforce for new development.'
  },
  {
    id: 36,
    chapter: 'chapter3',
    topic: 'PD1-406',
    question: 'What is the best way to prevent SOQL injection in Visualforce?',
    options: [
      'Use bind variables in dynamic SOQL',
      'Use string concatenation',
      'Disable user input',
      'Use SOSL instead of SOQL'
    ],
    correct: 0,
    explanation: 'Using bind variables in dynamic SOQL is the best way to prevent SOQL injection. Bind variables automatically escape user input, preventing malicious SOQL from being injected. String concatenation with user input creates a SOQL injection vulnerability.'
  },
  {
    id: 37,
    chapter: 'chapter3',
    topic: 'PD1-406',
    question: 'Which sharing setting should be used to ensure users can only see records they own or are shared with them?',
    options: [
      'Public Read/Write',
      'Private',
      'Public Read Only',
      'Controlled by Parent'
    ],
    correct: 1,
    explanation: 'Setting an object\'s sharing model to "Private" ensures that users can only see records they own or that are explicitly shared with them through sharing rules, manual sharing, or Apex managed sharing. This provides the most restrictive access level.'
  },
  {
    id: 38,
    chapter: 'chapter3',
    topic: 'PD1-407',
    question: 'What is the purpose of the @AuraEnabled annotation in Apex?',
    options: [
      'To make an Apex method accessible from Lightning components',
      'To enable Lightning Experience in an org',
      'To create a new Lightning component',
      'To configure Lightning pages'
    ],
    correct: 0,
    explanation: 'The @AuraEnabled annotation makes an Apex method accessible from Lightning components (both Aura and LWC). Methods marked with this annotation can be called from client-side JavaScript using the appropriate framework mechanisms.'
  },
  {
    id: 39,
    chapter: 'chapter3',
    topic: 'PD1-407',
    question: 'How does data flow in Lightning Web Components?',
    options: [
      'Parent to child only',
      'Child to parent only',
      'Parent to child via properties; child to parent via events',
      'Data cannot flow between components'
    ],
    correct: 2,
    explanation: 'In LWC, data flows from parent to child through properties (decorated with @api). Child components communicate with parents by dispatching custom events. This one-way data flow makes the application predictable and easier to debug.'
  },
  {
    id: 40,
    chapter: 'chapter3',
    topic: 'PD1-408',
    question: 'Which event type should be used for communication between sibling components in LWC?',
    options: [
      'Custom events',
      'DOM events',
      'Lightning message service or a shared parent component',
      'Apex events'
    ],
    correct: 2,
    explanation: 'For sibling component communication in LWC, you should use Lightning Message Service (LMS) for cross-DOM communication, or have the parent component manage state and pass data between siblings through properties and events.'
  },
  {
    id: 41,
    chapter: 'chapter3',
    topic: 'PD1-409',
    question: 'How can an Apex controller be used with a Lightning component?',
    options: [
      'By using the @AuraEnabled annotation on methods',
      'By extending the Controller class',
      'By implementing the LightningController interface',
      'By using the controller="ApexClassName" attribute'
    ],
    correct: 0,
    explanation: 'Apex methods are made available to Lightning components using the @AuraEnabled annotation. For LWC, these methods are imported using the @salesforce/apex module. For Aura components, they are called using the "c.methodName" syntax.'
  },
  {
    id: 42,
    chapter: 'chapter3',
    topic: 'PD1-409',
    question: 'What is the purpose of a Lightning Data Service (LDS) in LWC?',
    options: [
      'To create database tables',
      'To provide a way to work with Salesforce data without Apex code',
      'To manage user authentication',
      'To deploy components to production'
    ],
    correct: 1,
    explanation: 'Lightning Data Service (LDS) allows LWC to create, read, update, and delete Salesforce records without writing Apex code. It provides built-in data caching, record sharing, and data synchronization across components that use the same record.'
  },

  // Chapter 4.1: Testing (501)
  {
    id: 43,
    chapter: 'chapter4',
    topic: 'PD1-501',
    question: 'What is the minimum code coverage required for deploying Apex to production?',
    options: [
      '50%',
      '75%',
      '80%',
      '100%'
    ],
    correct: 1,
    explanation: 'Salesforce requires a minimum of 75% cumulative code coverage across all Apex classes and triggers for deployment to production. However, the best practice is to aim for 100% coverage with meaningful test scenarios, not just line coverage.'
  },
  {
    id: 44,
    chapter: 'chapter4',
    topic: 'PD1-501',
    question: 'Which annotation is used to define a test method in Apex?',
    options: [
      '@Test',
      '@isTest',
      '@TestMethod',
      '@TestCase'
    ],
    correct: 1,
    explanation: 'The @isTest annotation is used to define a test method in Apex. Test methods must be static, void, and annotated with @isTest. They are not counted against the organization\'s code limits and can access all data in the org when using @isTest(SeeAllData=true).'
  },
  {
    id: 45,
    chapter: 'chapter4',
    topic: 'PD1-501',
    question: 'What is the purpose of System.assertEquals() in Apex tests?',
    options: [
      'To create test data',
      'To verify that two values are equal',
      'To stop test execution',
      'To log test results'
    ],
    correct: 1,
    explanation: 'System.assertEquals() verifies that two values are equal. If they are not equal, the test fails. It is used to validate that code produces expected results. There is also System.assertNotEquals() and System.assert() for other validation scenarios.'
  },
  {
    id: 46,
    chapter: 'chapter4',
    topic: 'PD1-501',
    question: 'What is the purpose of Test.startTest() and Test.stopTest()?',
    options: [
      'To start and stop the test class',
      'To reset governor limits and isolate test logic',
      'To create and delete test data',
      'To enable logging during tests'
    ],
    correct: 1,
    explanation: 'Test.startTest() and Test.stopTest() reset governor limits and isolate the test logic. Code between these methods gets fresh governor limits. This is especially important for testing batch Apex and other asynchronous code, as Test.stopTest() forces all asynchronous processes to complete synchronously.'
  },
  {
    id: 47,
    chapter: 'chapter4',
    topic: 'PD1-501',
    question: 'Which approach is best for creating test data in Apex tests?',
    options: [
      'Using SeeAllData=true to access existing org data',
      'Creating test data within the test class using @testSetup or data factory methods',
      'Importing data before running tests',
      'Using production data in sandbox'
    ],
    correct: 1,
    explanation: 'Best practice is to create test data within the test class using @testSetup methods or data factory methods. This makes tests self-contained, repeatable, and not dependent on org data. Using SeeAllData=true is discouraged because it makes tests brittle and environment-dependent.'
  },
  {
    id: 48,
    chapter: 'chapter4',
    topic: 'PD1-501',
    question: 'What does the @testSetup annotation do?',
    options: [
      'Marks a method as a test method',
      'Creates test data that is available to all test methods in the class',
      'Sets up the test environment before deployment',
      'Configures test coverage reporting'
    ],
    correct: 1,
    explanation: 'The @testSetup annotation defines a method that creates test data available to all test methods in the class. This data is rolled back after each test method, ensuring test isolation. It is an efficient way to share common test data setup across multiple test methods.'
  },

  // Chapter 4.2: Debug & Deployment (502-509)
  {
    id: 49,
    chapter: 'chapter4',
    topic: 'PD1-502',
    question: 'Which tool should be used to view debug logs in Salesforce?',
    options: [
      'Developer Console',
      'Setup Audit Trail',
      'Debug Log panel in Setup',
      'Both A and C'
    ],
    correct: 3,
    explanation: 'Both the Developer Console and the Debug Log panel in Setup can be used to view debug logs. The Developer Console provides a more interactive experience with filtering and searching, while the Debug Log panel in Setup allows configuring which users generate logs.'
  },
  {
    id: 50,
    chapter: 'chapter4',
    topic: 'PD1-502',
    question: 'What is the maximum size of a debug log in Salesforce?',
    options: [
      '1 MB',
      '5 MB',
      '20 MB',
      '50 MB'
    ],
    correct: 2,
    explanation: 'The maximum size of a debug log is 20 MB. If the log exceeds this size, it will be truncated. The log levels and categories can be adjusted to reduce log size and focus on relevant information.'
  },
  {
    id: 51,
    chapter: 'chapter4',
    topic: 'PD1-505',
    question: 'What is Salesforce DX (SFDX)?',
    options: [
      'A deployment tool for production only',
      'A set of tools and features for modern Salesforce development with source-driven development',
      'A data export tool',
      'A testing framework'
    ],
    correct: 1,
    explanation: 'Salesforce DX (SFDX) is a set of tools and features that enables source-driven development, team collaboration, and continuous integration/continuous delivery (CI/CD). It includes the CLI, scratch orgs, and integration with version control systems.'
  },
  {
    id: 52,
    chapter: 'chapter4',
    topic: 'PD1-505',
    question: 'What is a scratch org in Salesforce DX?',
    options: [
      'A permanent development environment',
      'A disposable, configurable, short-term Salesforce environment',
      'A production org with debugging enabled',
      'A type of sandbox'
    ],
    correct: 1,
    explanation: 'A scratch org is a disposable, configurable, short-term Salesforce environment used for development and testing. It is defined by a configuration file and can be quickly created and deleted. Scratch orgs support source-driven development workflows.'
  },
  {
    id: 53,
    chapter: 'chapter4',
    topic: 'PD1-509',
    question: 'What is the correct order for deploying changes to production?',
    options: [
      'Deploy directly to production',
      'Develop in sandbox → Test in sandbox → Deploy to production',
      'Develop in production → Test in sandbox',
      'Develop in scratch org → Deploy to production'
    ],
    correct: 1,
    explanation: 'Best practice is to develop in a development sandbox, test thoroughly in a testing/staging sandbox, and then deploy to production. This ensures changes are validated before affecting production users and data.'
  },
  {
    id: 54,
    chapter: 'chapter4',
    topic: 'PD1-509',
    question: 'Which deployment tool uses a package.xml manifest file?',
    options: [
      'Change Sets',
      'Metadata API (ANT Migration Tool)',
      'Data Loader',
      'Salesforce CLI'
    ],
    correct: 1,
    explanation: 'The Metadata API, used through tools like the ANT Migration Tool, uses a package.xml manifest file to specify which metadata components to retrieve or deploy. Change Sets use a point-and-click interface, while the Salesforce CLI uses source format.'
  },
  {
    id: 55,
    chapter: 'chapter4',
    topic: 'PD1-509',
    question: 'What is a change set in Salesforce?',
    options: [
      'A version control system',
      'A declarative deployment tool for moving metadata between connected orgs',
      'A code compilation tool',
      'A testing framework'
    ],
    correct: 1,
    explanation: 'A change set is a declarative deployment tool that allows you to send customizations from one Salesforce org to another connected org (typically from sandbox to production). It uses a point-and-click interface to select components for deployment.'
  }
];

export const examConfig = {
  fullExam: {
    name: 'Full Practice Exam',
    description: '60 questions covering all PD1 exam topics',
    timeLimit: 110,
    passingScore: 68,
    questions: 'all'
  },
  chapter1: {
    name: 'Chapter 1: Salesforce Fundamentals',
    description: 'Questions on MVC, data model, and declarative vs programmatic',
    timeLimit: 25,
    passingScore: 68,
    questions: 'chapter1'
  },
  chapter2: {
    name: 'Chapter 2: Apex Programming',
    description: 'Questions on Apex fundamentals, triggers, and best practices',
    timeLimit: 35,
    passingScore: 68,
    questions: 'chapter2'
  },
  chapter3: {
    name: 'Chapter 3: User Interface',
    description: 'Questions on Visualforce, Lightning Components, and LWC',
    timeLimit: 30,
    passingScore: 68,
    questions: 'chapter3'
  },
  chapter4: {
    name: 'Chapter 4: Testing & Deployment',
    description: 'Questions on testing, debugging, and deployment',
    timeLimit: 20,
    passingScore: 68,
    questions: 'chapter4'
  }
};
