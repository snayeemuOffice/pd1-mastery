// Comprehensive PD1 Exam Questions organized by chapter
// Based on Focus on Force study materials

export const examQuestions = [
  // Developer Fundamentals (601-604)
  {
    id: 1,
    chapter: 'devFundamentals',
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
    chapter: 'devFundamentals',
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
    chapter: 'devFundamentals',
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
    chapter: 'devFundamentals',
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
    chapter: 'devFundamentals',
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
    chapter: 'devFundamentals',
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
    chapter: 'devFundamentals',
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
    chapter: 'devFundamentals',
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
    chapter: 'devFundamentals',
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
    chapter: 'devFundamentals',
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
    chapter: 'devFundamentals',
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
    chapter: 'devFundamentals',
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

  // Process Automation and Logic (301-312)
  {
    id: 13,
    chapter: 'processAutomation',
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
    chapter: 'processAutomation',
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
    chapter: 'processAutomation',
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
    chapter: 'processAutomation',
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
    chapter: 'processAutomation',
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
    chapter: 'processAutomation',
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
    chapter: 'processAutomation',
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
    chapter: 'processAutomation',
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
    chapter: 'processAutomation',
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
    chapter: 'processAutomation',
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
    chapter: 'processAutomation',
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
    chapter: 'processAutomation',
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
    chapter: 'processAutomation',
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
    chapter: 'processAutomation',
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
    chapter: 'processAutomation',
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
    chapter: 'processAutomation',
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
    chapter: 'processAutomation',
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
    chapter: 'processAutomation',
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
    chapter: 'userInterface',
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
    chapter: 'userInterface',
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
    chapter: 'userInterface',
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
    chapter: 'userInterface',
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
    chapter: 'userInterface',
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
    chapter: 'userInterface',
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
    chapter: 'userInterface',
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
    chapter: 'userInterface',
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
    chapter: 'userInterface',
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
    chapter: 'userInterface',
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
    chapter: 'userInterface',
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
    chapter: 'userInterface',
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
    chapter: 'testingDebugging',
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
    chapter: 'testingDebugging',
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
    chapter: 'testingDebugging',
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
    chapter: 'testingDebugging',
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
    chapter: 'testingDebugging',
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
    chapter: 'testingDebugging',
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
    chapter: 'testingDebugging',
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
    chapter: 'testingDebugging',
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
    chapter: 'testingDebugging',
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
    chapter: 'testingDebugging',
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
    chapter: 'testingDebugging',
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
    chapter: 'testingDebugging',
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
    chapter: 'testingDebugging',
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
  },
  // Additional comprehensive questions from PDF materials
  // Chapter 1 Additional Questions
  {
    id: 56,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'What are the key considerations for developers new to the Salesforce platform?',
    options: [
      'Governor limits are enforced on shared resources and code cannot be deployed without 75% test coverage',
      'Salesforce uses a single-tenant architecture with dedicated servers',
      'There are no limits on database queries or API calls',
      'All customizations must be done through code only'
    ],
    correct: 0,
    explanation: 'Key considerations for Salesforce developers include: Governor limits are enforced on shared resources in the multi-tenant environment, and code cannot be deployed to production without achieving at least 75% test code coverage.'
  },
  {
    id: 57,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'Which tool can be used to add custom Lightning components to a page in Lightning Experience?',
    options: [
      'Setup Menu',
      'Lightning App Builder',
      'Developer Console',
      'Visualforce Editor'
    ],
    correct: 1,
    explanation: 'Lightning App Builder provides a drag-and-drop interface for adding custom Lightning components to Lightning pages, record pages, and app pages.'
  },
  {
    id: 58,
    chapter: 'devFundamentals',
    topic: 'PD1-602',
    question: 'Which annotation should be used for an Apex method that needs to be invoked by a process?',
    options: [
      '@AuraEnabled',
      '@InvocableMethod',
      '@RemoteAction',
      '@future'
    ],
    correct: 1,
    explanation: 'The @InvocableMethod annotation makes an Apex method callable from Flow and Process Builder. This allows declarative automation tools to invoke custom Apex logic.'
  },
  {
    id: 59,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'Which type of relationship ensures that the child record is deleted when the parent record is deleted?',
    options: [
      'Lookup relationship',
      'Master-detail relationship',
      'External relationship',
      'Hierarchical relationship'
    ],
    correct: 1,
    explanation: 'In a master-detail relationship, the detail (child) record is automatically deleted when the master (parent) record is deleted. This is called cascade delete.'
  },
  {
    id: 60,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'Which function returns the conversion rate to the corporate currency for a given ISO code?',
    options: [
      'CURRENCYCONVERT()',
      'CURRENCYRATE()',
      'EXCHANGERATE()',
      'CONVERTCURRENCY()'
    ],
    correct: 1,
    explanation: 'The CURRENCYRATE(isoCode) function returns the conversion rate for the specified currency ISO code to the corporate currency.'
  },
  {
    id: 61,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'Which method checks whether an object can be created by the current user?',
    options: [
      'isUpdateable()',
      'isCreateable()',
      'isAccessible()',
      'isDeletable()'
    ],
    correct: 1,
    explanation: 'The isCreateable() method on DescribeSObjectResult checks whether the current user has permission to create records of that object type.'
  },
  {
    id: 62,
    chapter: 'devFundamentals',
    topic: 'PD1-604',
    question: 'What are limitations of the Data Import Wizard?',
    options: [
      'Cannot import more than 50,000 records and does not support all standard objects',
      'Only works with custom objects',
      'Requires Data Loader to be installed',
      'Cannot handle CSV files'
    ],
    correct: 0,
    explanation: 'The Data Import Wizard has limitations including: cannot import more than 50,000 records, does not support all standard objects, cannot save field mappings, and cannot export data.'
  },
  {
    id: 63,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'What functions are available for roll-up summary fields?',
    options: [
      'Count, Sum, Average, Max, Min',
      'Count, Sum, Max, Min',
      'Count, Sum, Average',
      'Count, Sum, Max'
    ],
    correct: 1,
    explanation: 'Roll-up summary fields support four functions: Count (number of records), Sum (total of a field), Max (highest value), and Min (lowest value).'
  },
  // Chapter 2 Additional Questions
  {
    id: 64,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'Which declarative automation tool can display a custom user interface?',
    options: [
      'Workflow Rule',
      'Process Builder',
      'Flow (Screen Flow)',
      'Approval Process'
    ],
    correct: 2,
    explanation: 'Flow (specifically Screen Flows) is the only declarative automation tool that can display a custom user interface with input fields, choices, and other screen elements.'
  },
  {
    id: 65,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'Which access modifier makes a method accessible only within the defining class?',
    options: [
      'public',
      'private',
      'protected',
      'global'
    ],
    correct: 1,
    explanation: 'The private access modifier restricts access to only the defining class. Public allows access within the namespace, protected allows access in subclasses, and global allows access across the entire organization.'
  },
  {
    id: 66,
    chapter: 'processAutomation',
    topic: 'PD1-303',
    question: 'What does the "continue" statement do in a loop?',
    options: [
      'Exits the loop completely',
      'Skips to the next iteration of the loop',
      'Pauses the loop execution',
      'Restarts the loop from the beginning'
    ],
    correct: 1,
    explanation: 'The "continue" statement skips the remaining code in the current iteration and jumps to the next iteration of the loop.'
  },
  {
    id: 67,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'Which SOQL clause is used to sort query results?',
    options: [
      'SORT BY',
      'ORDER BY',
      'GROUP BY',
      'ARRANGE BY'
    ],
    correct: 1,
    explanation: 'The ORDER BY clause is used to sort SOQL query results by one or more fields. Use ASC for ascending (default) or DESC for descending order.'
  },
  {
    id: 68,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What is the purpose of the UPSERT DML operation?',
    options: [
      'To delete and recreate records',
      'To insert new records or update existing records based on an external ID',
      'To merge duplicate records',
      'To convert leads'
    ],
    correct: 1,
    explanation: 'UPSERT inserts new records and updates existing records. It matches records using an external ID field or the record ID to determine whether to insert or update.'
  },
  {
    id: 69,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the recommended pattern for organizing trigger logic?',
    options: [
      'Put all logic directly in the trigger',
      'Use a trigger handler class to separate logic from the trigger',
      'Create multiple triggers per object',
      'Use only before triggers'
    ],
    correct: 1,
    explanation: 'Best practice is to use a trigger handler pattern where the trigger delegates all logic to a separate handler class. This improves maintainability, testability, and follows separation of concerns.'
  },
  {
    id: 70,
    chapter: 'processAutomation',
    topic: 'PD1-308',
    question: 'What is the governor limit for DML statements in a single Apex transaction?',
    options: [
      '50',
      '100',
      '150',
      '200'
    ],
    correct: 2,
    explanation: 'The governor limit for total DML statements (insert, update, delete, undelete) in a single Apex transaction is 150.'
  },
  {
    id: 71,
    chapter: 'processAutomation',
    topic: 'PD1-309',
    question: 'In the save order of execution, when do validation rules fire?',
    options: [
      'Before before triggers',
      'After before triggers but before after triggers',
      'After after triggers',
      'At the very end of the process'
    ],
    correct: 1,
    explanation: 'In the save order of execution, validation rules fire after before triggers but before after triggers. This means before triggers can modify field values that validation rules will evaluate.'
  },
  {
    id: 72,
    chapter: 'processAutomation',
    topic: 'PD1-310',
    question: 'How should you handle a situation where a SOQL query might return no results?',
    options: [
      'Always use try-catch to handle QueryException',
      'Use a list variable and check if it is empty',
      'Use LIMIT 1 to ensure exactly one result',
      'Ignore the possibility of no results'
    ],
    correct: 1,
    explanation: 'Best practice is to query into a list and check if the list is empty before accessing elements. This avoids QueryException from single-record queries that return no results.'
  },
  {
    id: 73,
    chapter: 'processAutomation',
    topic: 'PD1-312',
    question: 'What is the purpose of the @InvocableVariable annotation?',
    options: [
      'To make a variable accessible from Lightning components',
      'To define input/output variables for @InvocableMethod',
      'To create a static variable',
      'To define a constant'
    ],
    correct: 1,
    explanation: '@InvocableVariable defines input and output variables for methods annotated with @InvocableMethod. This allows Flow and Process Builder to pass data to and from Apex methods.'
  },
  // Chapter 3 Additional Questions
  {
    id: 74,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which Visualforce component creates a styled table with column headers?',
    options: [
      '<apex:dataTable>',
      '<apex:pageBlockTable>',
      '<apex:repeat>',
      '<apex:outputPanel>'
    ],
    correct: 1,
    explanation: '<apex:pageBlockTable> creates a table with Salesforce styling and column headers. <apex:dataTable> creates a standard HTML table, while <apex:repeat> provides custom iteration without table structure.'
  },
  {
    id: 75,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which attribute of apex:page associates a standard controller?',
    options: [
      'controller',
      'standardController',
      'extensions',
      'name'
    ],
    correct: 1,
    explanation: 'The standardController attribute associates a standard or custom object with the Visualforce page, providing built-in CRUD operations and field access.'
  },
  {
    id: 76,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Where can Lightning components be used?',
    options: [
      'Only in Lightning Experience',
      'Salesforce Mobile App, Lightning Experience, and Communities',
      'Only in Salesforce Mobile App',
      'Only in Communities'
    ],
    correct: 1,
    explanation: 'Lightning components can be used in Salesforce Mobile App, Lightning Experience, and Communities (formerly known as Community Cloud).'
  },
  {
    id: 77,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'In an Aura component bundle, which resource contains the component markup?',
    options: [
      'Controller',
      'Helper',
      'Component (.cmp)',
      'Style'
    ],
    correct: 2,
    explanation: 'The Component resource (.cmp file) contains the markup definition for an Aura component. It defines the component structure, attributes, and HTML-like markup.'
  },
  {
    id: 78,
    chapter: 'userInterface',
    topic: 'PD1-406',
    question: 'Which function is used to prevent XSS in Visualforce?',
    options: [
      'JSENCODE()',
      'HTMLENCODE()',
      'URLENCODE()',
      'All of the above depending on context'
    ],
    correct: 3,
    explanation: 'Different encoding functions are used based on context: JSENCODE() for JavaScript, HTMLENCODE() for HTML content, and URLENCODE() for URLs. Using the appropriate encoder prevents XSS vulnerabilities.'
  },
  {
    id: 79,
    chapter: 'userInterface',
    topic: 'PD1-407',
    question: 'What does the cacheable=true parameter do in @AuraEnabled?',
    options: [
      'Enables server-side caching only',
      'Enables client-side caching for read-only data',
      'Enables database caching',
      'Disables caching completely'
    ],
    correct: 1,
    explanation: 'cacheable=true enables client-side caching for read-only data, improving performance by reducing server calls. It should not be used for methods that perform DML operations.'
  },
  {
    id: 80,
    chapter: 'userInterface',
    topic: 'PD1-408',
    question: 'What is the recommended way for sibling components to communicate in LWC?',
    options: [
      'Direct method calls between components',
      'Lightning Message Service (LMS)',
      'Global events',
      'Shared JavaScript variables'
    ],
    correct: 1,
    explanation: 'Lightning Message Service (LMS) is the recommended way for sibling components or components in different DOM trees to communicate. It uses a publish-subscribe pattern.'
  },
  {
    id: 81,
    chapter: 'userInterface',
    topic: 'PD1-409',
    question: 'Which decorator is used to expose Apex methods to LWC?',
    options: [
      '@AuraEnabled',
      '@RemoteAction',
      '@InvocableMethod',
      '@WebService'
    ],
    correct: 0,
    explanation: 'The @AuraEnabled annotation makes Apex methods accessible from Lightning Web Components and Aura components. It is the bridge between server-side Apex and client-side JavaScript.'
  },
  // Chapter 4 Additional Questions
  {
    id: 82,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is the purpose of @testSetup annotation?',
    options: [
      'To mark a class as a test class',
      'To create test data available to all test methods in the class',
      'To set up the testing environment',
      'To configure test coverage reporting'
    ],
    correct: 1,
    explanation: '@testSetup defines a method that creates test data available to ALL test methods in the class. The data is rolled back after each test method, ensuring test isolation and efficiency.'
  },
  {
    id: 83,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What happens to test data after a test method completes?',
    options: [
      'It is permanently saved to the database',
      'It is rolled back and not persisted',
      'It is moved to a test data table',
      'It depends on the test annotation'
    ],
    correct: 1,
    explanation: 'Test data is automatically rolled back after each test method completes. This ensures test isolation - each test method starts with a clean data state.'
  },
  {
    id: 84,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What is the maximum size of a debug log in Salesforce?',
    options: [
      '5 MB',
      '10 MB',
      '20 MB',
      '50 MB'
    ],
    correct: 2,
    explanation: 'The maximum size of a debug log is 20 MB. If the log exceeds this size, it will be truncated. Adjusting log levels can help reduce log size.'
  },
  {
    id: 85,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Which tool provides a Query Editor for executing SOQL and SOSL queries?',
    options: [
      'Setup Menu',
      'Developer Console',
      'Data Loader',
      'Workbench'
    ],
    correct: 1,
    explanation: 'Developer Console includes a Query Editor that allows executing SOQL and SOSL queries directly against the org. It also provides Execute Anonymous for running Apex code.'
  },
  {
    id: 86,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is the source of truth in Salesforce DX?',
    options: [
      'The Salesforce org',
      'Version Control System',
      'Developer Console',
      'The metadata API'
    ],
    correct: 1,
    explanation: 'In Salesforce DX, the Version Control System (VCS) is the source of truth. Code and metadata are stored in VCS, and scratch orgs are created from the source.'
  },
  {
    id: 87,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is the difference between Developer and Developer Pro sandboxes?',
    options: [
      'Developer Pro has more storage and can copy data',
      'Developer Pro has less storage',
      'They are identical',
      'Developer Pro can only be refreshed monthly'
    ],
    correct: 0,
    explanation: 'Developer Pro sandbox has a higher storage limit than Developer sandbox. Both copy production configuration (not data) and can be refreshed once daily.'
  },
  {
    id: 88,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What is required to use change sets between two orgs?',
    options: [
      'Both orgs must be on the same Salesforce edition',
      'A deployment connection must be established between the orgs',
      'The orgs must be in the same geographic region',
      'Both orgs must have the same admin user'
    ],
    correct: 1,
    explanation: 'To use change sets, a deployment connection must be established between the source and target orgs. Each org must explicitly authorize the other for deployment.'
  },
  {
    id: 89,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'Which file is used to delete metadata components during deployment?',
    options: [
      'package.xml',
      'destructiveChanges.xml',
      'build.xml',
      'deploy.xml'
    ],
    correct: 1,
    explanation: 'The destructiveChanges.xml file specifies metadata components to be deleted during deployment. It is used with the Metadata API or ANT Migration Tool.'
  },
  {
    id: 90,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'What does MVC stand for in the Salesforce architecture?',
    options: [
      'Model-View-Controller',
      'Managed-Visual-Cloud',
      'Multi-View-Component',
      'Metadata-Version-Control'
    ],
    correct: 0,
    explanation: 'MVC stands for Model-View-Controller, a software design pattern. In Salesforce: Model = Objects/Data, View = UI (Visualforce/Lightning), Controller = Apex classes.'
  },
  {
    id: 91,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What is the difference between SOQL and SOSL?',
    options: [
      'SOQL searches across multiple objects; SOSL searches within a single object',
      'SOQL searches within specific objects; SOSL searches across multiple objects using text search',
      'They are identical in functionality',
      'SOQL is for metadata; SOSL is for data'
    ],
    correct: 1,
    explanation: 'SOQL (Salesforce Object Query Language) queries specific objects and returns structured records. SOSL (Salesforce Object Search Language) performs text searches across multiple objects and returns results grouped by object type.'
  },
  {
    id: 92,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the best practice for bulkifying Apex triggers?',
    options: [
      'Use SOQL queries inside for loops',
      'Collect all record IDs first, then perform one SOQL query outside the loop',
      'Process records one at a time',
      'Use Database.query() for each record'
    ],
    correct: 1,
    explanation: 'The best practice for bulkifying triggers is to collect all needed record IDs first (from Trigger.new), then perform a single SOQL query outside any loop to retrieve all related data.'
  },
  {
    id: 93,
    chapter: 'processAutomation',
    topic: 'PD1-308',
    question: 'What is the governor limit for CPU time in synchronous Apex?',
    options: [
      '5,000 ms',
      '10,000 ms',
      '30,000 ms',
      '60,000 ms'
    ],
    correct: 1,
    explanation: 'The governor limit for CPU time in synchronous Apex is 10,000 ms (10 seconds). For asynchronous Apex, it is 60,000 ms (60 seconds).'
  },
  {
    id: 94,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'What is a Visualforce controller?',
    options: [
      'A database table',
      'An Apex class that provides data and logic to a Visualforce page',
      'A CSS stylesheet',
      'A JavaScript library'
    ],
    correct: 1,
    explanation: 'A Visualforce controller is an Apex class that provides data and logic to a Visualforce page. It can be a standard controller (built-in), custom controller, or controller extension.'
  },
  {
    id: 95,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What is the difference between Aura and LWC?',
    options: [
      'Aura uses standard web technologies; LWC uses proprietary framework',
      'Aura is proprietary; LWC is based on standard web technologies',
      'They are exactly the same',
      'LWC can only be used in mobile apps'
    ],
    correct: 1,
    explanation: 'Aura uses a proprietary framework with its own component model, while Lightning Web Components (LWC) is built on standard web technologies (ES6+, custom elements, shadow DOM).'
  },
  {
    id: 96,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is the minimum code coverage required for deploying Apex to production?',
    options: [
      '50%',
      '75%',
      '80%',
      '100%'
    ],
    correct: 1,
    explanation: 'Salesforce requires a minimum of 75% cumulative code coverage across all Apex classes and triggers for deployment to production.'
  },
  {
    id: 97,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is the correct way to declare a constant in Apex?',
    options: [
      'const Integer MAX = 10;',
      'static final Integer MAX = 10;',
      'final static Integer MAX = 10;',
      'Both B and C are correct'
    ],
    correct: 3,
    explanation: 'Both "static final Integer MAX = 10;" and "final static Integer MAX = 10;" are valid ways to declare a constant in Apex. The "static" keyword makes it a class-level constant, and "final" prevents reassignment.'
  },
  {
    id: 98,
    chapter: 'devFundamentals',
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
    id: 99,
    chapter: 'processAutomation',
    topic: 'PD1-309',
    question: 'How can recursion be prevented in Apex triggers?',
    options: [
      'By using the "static" keyword on a Boolean variable to track execution',
      'By using the "final" keyword',
      'By adding more governor limits',
      'Recursion cannot be prevented'
    ],
    correct: 0,
    explanation: 'Recursion can be prevented by using a static Boolean variable as a flag. Set it to "true" when the trigger first executes, and check it at the beginning of the trigger to prevent re-entry.'
  },
  {
    id: 100,
    chapter: 'userInterface',
    topic: 'PD1-406',
    question: 'What is the best way to prevent SOQL injection in Visualforce?',
    options: [
      'Use bind variables in dynamic SOQL',
      'Use string concatenation',
      'Disable user input',
      'Use SOSL instead of SOQL'
    ],
    correct: 0,
    explanation: 'Using bind variables in dynamic SOQL is the best way to prevent SOQL injection. Bind variables automatically escape user input, preventing malicious SOQL from being injected.'
  },
  {
    id: 101,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'Pages and components are part of which component of the MVC?',
    options: ["View", "Controller", "Model", "Neither - Pages are separate from MVC"],
    correct: 0,
    explanation: 'View'
  },
  {
    id: 102,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'What part of the MVC do Salesforce Objects map to?',
    options: ["Model", "View", "Controller", "Neither - Objects are separate from MVC"],
    correct: 0,
    explanation: 'Model'
  },
  {
    id: 103,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'What can be created to update a custom field on an unrelated custom object whenever a new account is created in Salesforce?',
    options: ["A record-triggered flow", "A Visualforce page", "A Lightning component", "A formula field"],
    correct: 0,
    explanation: 'A flow for simpler scenarios. An Apex trigger for more complex scenarios.'
  },
  {
    id: 104,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'Which two programming models are available for building Lightning components?',
    options: ["Aura Components and Lightning Web Components (LWC)", "Visualforce and Aura", "Lightning Web Components and Visualforce", "Apex and Lightning Web Components"],
    correct: 0,
    explanation: 'Aura Components and Lightning Web Components (LWC)'
  },
  {
    id: 105,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'Which tool can be used to add custom Lightning components to a page in Lightning Experience?',
    options: ["Lightning App Builder", "Setup Menu", "Developer Console", "Visualforce Editor"],
    correct: 0,
    explanation: 'Lightning App Builder'
  },
  {
    id: 106,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'What namespace is used by Lightning components that exist in two versions (Aura component and Lightning web component)?',
    options: ["c:", "lightning:", "force:", "ui:"],
    correct: 0,
    explanation: '‘lightning’ namespace'
  },
  {
    id: 107,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'Which property of an object or field can be changed when it is referenced in Apex code?',
    options: ["The label", "The API name", "The data type", "The field length"],
    correct: 0,
    explanation: 'Label Name'
  },
  {
    id: 108,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'What does the user interface display when a user tries to change the data type of a field that is referenced in Apex code?',
    options: ["A warning that the field is referenced in code and the data type cannot be changed", "The change is automatically applied", "The field is automatically deleted", "An error message with no option to proceed"],
    correct: 0,
    explanation: 'Validation Error'
  },
  {
    id: 109,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'Can relationship types be changed?',
    options: ["Yes, with conditions: master-detail can convert to lookup if not used in roll-up summary fields", "No, relationship types cannot be changed", "Yes, but only lookup to master-detail", "Yes, but only with Salesforce support approval"],
    correct: 0,
    explanation: 'If a master-detail relationship is not used in a roll-up summary field, it can be converted to a lookup relationship, and also vice versa as long as the lookup relationship field contains values in all of its records.'
  },
  {
    id: 110,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'Which relationship can be used on the User object to associate one user with another?',
    options: ["Lookup relationship to User", "Master-detail relationship", "Junction object", "Hierarchical relationship"],
    correct: 0,
    explanation: 'Hierarchical relationship'
  },
  {
    id: 111,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'Which type of custom object should be created for a many-to-many relationship in Salesforce?',
    options: ["Junction object with two master-detail relationships", "Two lookup relationships", "A single master-detail relationship", "A formula field"],
    correct: 0,
    explanation: 'Junction object'
  },
  {
    id: 112,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'What is an external ID?',
    options: ["A field containing a unique identifier from an external system", "A field that auto-generates IDs", "A field that links to external databases", "A field that stores API names"],
    correct: 0,
    explanation: 'An external ID is a field that contains a unique identifier from a system outside of Salesforce.'
  },
  {
    id: 113,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'What are some limitations of roll-up summary fields?',
    options: ["Max number per object, does not work for lookups, cannot roll up formula fields referencing other objects", "Works with all relationship types", "Can roll up any field type", "No limitations exist"],
    correct: 0,
    explanation: 'There is a max number of roll-up summary fields per object. Does not work for lookups. Cannot rollup a formula field that references a field on another object or contains dynamic date function.'
  },
  {
    id: 114,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'Which two options are available to access the token for an object in Apex?',
    options: ["getSObjectType() method and sObjectType static member variable", "getObjectToken() and Token.get()", "Schema.getToken() and Object.type()", "getType() and SObject.class"],
    correct: 0,
    explanation: 'The getSObjectType method and the sObjectType static member variable'
  },
  {
    id: 115,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'What platform features are part of the control layer in the MVC model?',
    options: ["Declarative (workflow rules) or programmatic (Apex classes) business logic", "Only Visualforce pages", "Only Lightning components", "Database tables and fields"],
    correct: 0,
    explanation: 'Declarative (e.g. workflow and escalation rules) or programmatic (e.g. Visualforce controllers or Apex classes) business logic'
  },
  {
    id: 116,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'What are 2 considerations that a developer new to Salesforce should be aware of?',
    options: ["Governor limits on shared resources and 75% test coverage required for deployment", "No limits on queries or API calls", "Single-tenant architecture with dedicated servers", "All customizations must be done through code"],
    correct: 0,
    explanation: 'Limits are enforced on shared resources (Governor Limits). Code cannot be deployed into production unless test code coverage is achieved.'
  },
  {
    id: 117,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'Which platform is best to use if you want to create user interfaces without writing code?',
    options: ["App Cloud (Salesforce Platform)", "Salesforce DX", "Visual Studio Code", "Developer Console"],
    correct: 0,
    explanation: 'App Cloud (Salesforce Platform)'
  },
  {
    id: 118,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'What can be done to display a custom user interface that allows users to update several related records simultaneously on the opportunity page in Lightning Experience?',
    options: ["Develop a custom Lightning Component and add it using Lightning App Builder", "Use a standard Visualforce page", "Create a formula field", "Use Process Builder"],
    correct: 0,
    explanation: 'A custom Lightning Component can be developed and added to the record page using Lightning App Builder.'
  },
  {
    id: 119,
    chapter: 'devFundamentals',
    topic: 'PD1-602',
    question: 'Which declarative automation tools can be used to perform automated actions for an app in Salesforce?',
    options: ["Process Builder, Flow Builder, Approval Process, and Workflow Rule", "Only Apex triggers", "Only Visualforce pages", "Only Lightning components"],
    correct: 0,
    explanation: 'Process Builder, Flow Builder, Approval Process, and Workflow Rule'
  },
  {
    id: 120,
    chapter: 'devFundamentals',
    topic: 'PD1-602',
    question: 'Which annotation should be used for an Apex method that needs to be invoked by a process?',
    options: ["@InvocableMethod", "@AuraEnabled", "@RemoteAction", "@future"],
    correct: 0,
    explanation: '@InvocableMethod'
  },
  {
    id: 121,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'What happens when a field whose value is not specified for an object in an Apex class is made required?',
    options: ["The Apex code throws an exception", "The field is automatically set to null", "A default value is assigned", "The record is not saved but no error occurs"],
    correct: 0,
    explanation: 'The Apex code throws an exception when it is executed.'
  },
  {
    id: 122,
    chapter: 'devFundamentals',
    topic: 'PD1-604',
    question: 'What are some options for exporting data from a development environment?',
    options: ["Data Loader, Workbench, Reports, dataloader.io, and ETL tools", "Only Data Loader", "Only Reports", "Only the Data Export feature"],
    correct: 0,
    explanation: 'Data Loader, Workbench, Reports, dataloader.io, ETL tools'
  },
  {
    id: 123,
    chapter: 'devFundamentals',
    topic: 'PD1-604',
    question: 'What are some limitations of the Data Import Wizard?',
    options: ["Cannot import more than 50,000 records, does not support all standard objects, cannot save mappings", "Only works with custom objects", "Requires Data Loader to be installed", "Cannot handle CSV files"],
    correct: 0,
    explanation: 'Does not support all standard objects, cannot load more than 50K records, cannot save mappings, cannot export data'
  },
  {
    id: 124,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'How is a many-to-many relationship created?',
    options: ["Junction object with two master-detail relationships", "Two lookup relationships", "A single master-detail relationship", "A formula field"],
    correct: 0,
    explanation: 'Using a junction object. This object sits between the two objects in the many-to-many relationship and has two master-detail fields, one for each of the objects to be related.'
  },
  {
    id: 125,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'Which type of relationship field should be created to ensure that the value of the field related to the parent record is required on child records?',
    options: ["Master-detail relationship", "Lookup relationship", "External relationship", "Formula field"],
    correct: 0,
    explanation: 'Master-detail relationship'
  },
  {
    id: 126,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'When would creating a formula field be appropriate?',
    options: ["When a read-only field is needed calculated from field values", "When users need to edit the value", "When the value changes frequently", "When the value comes from an external system"],
    correct: 0,
    explanation: 'When a read-only field is required that is calculated based on values of fields (including fields in related objects) or based on a defined formula'
  },
  {
    id: 127,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'What functions are available for roll-up summary fields?',
    options: ["Count, Sum, Max, Min", "Count, Sum, Average, Max, Min", "Count, Sum, Average", "Count, Sum, Max"],
    correct: 0,
    explanation: 'Count, Sum, Max, Min'
  },
  {
    id: 128,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'Which formula would need to be defined in a formula field to add 6 months to a custom field named \'Contract_Start_Date__c\'?',
    options: ["ADDMONTHS(Contract_Start_Date__c, 6)", "DATEADD(Contract_Start_Date__c, 6, MONTH)", "Contract_Start_Date__c + 180", "DATE(Contract_Start_Date__c, 6)"],
    correct: 0,
    explanation: 'ADDMONTHS(Contract_Start_Date__c, 6)'
  },
  {
    id: 129,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which component can be used to display individual fields on a record in a Visualforce page?',
    options: ["<apex:outputField>", "<apex:inputField>", "<apex:detail>", "<apex:pageBlockTable>"],
    correct: 0,
    explanation: '<apex:outputField>'
  },
  {
    id: 130,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which coarse grained component can be used to display the detail page of an object in a Visualforce page?',
    options: ["<apex:detail>", "<apex:outputField>", "<apex:pageBlock>", "<apex:form>"],
    correct: 0,
    explanation: '<apex:detail>'
  },
  {
    id: 131,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which iteration component can be used to generate a table of data with platform styling?',
    options: ["<apex:pageBlockTable>", "<apex:dataTable>", "<apex:repeat>", "All of the above"],
    correct: 3,
    explanation: '<apex:pageBlockTable>'
  },
  {
    id: 132,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What type of code can be defined inline in HTML tags?',
    options: ["CSS code", "JavaScript code", "Apex code", "SQL code"],
    correct: 0,
    explanation: 'CSS code'
  },
  {
    id: 133,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which tag is used to add CSS to a Visualforce page?',
    options: ["<apex:stylesheet>", "<apex:style>", "<apex:css>", "<style>"],
    correct: 0,
    explanation: '<apex:stylesheet>'
  },
  {
    id: 134,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which component can be used to display an external website in an inline frame within a Visualforce page?',
    options: ["<apex:iframe>", "<apex:include>", "<apex:embed>", "<apex:external>"],
    correct: 0,
    explanation: '<apex:iframe>'
  },
  {
    id: 135,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'What is required to override a tab home page with a Visualforce page?',
    options: ["The page must use the standard list controller, a custom controller, or no controller", "The page must use a standard controller", "The page must be a Lightning component", "The page must use an extension controller"],
    correct: 0,
    explanation: 'The Visualforce page must use the standard list controller for that tab, a custom controller, or no controller.'
  },
  {
    id: 136,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'What can be added to a console to display a Visualforce page?',
    options: ["Custom console component to the sidebar or footer", "A Lightning component", "A formula field", "A workflow rule"],
    correct: 0,
    explanation: 'Custom console component to the sidebar or footer'
  },
  {
    id: 137,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Which communication model is used by the Lightning Component Framework?',
    options: ["Event-driven model", "Request-response model", "Polling model", "Direct method call model"],
    correct: 0,
    explanation: 'Event-driven model'
  },
  {
    id: 138,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Where can Lightning components be made available?',
    options: ["Salesforce Mobile App, Lightning Experience, and Communities", "Only Lightning Experience", "Only Salesforce Mobile App", "Only Communities"],
    correct: 0,
    explanation: 'Salesforce Mobile App, Lightning Experience, and Communities'
  },
  {
    id: 139,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Which design supported by the Lightning Component Framework ensures compatibility with different devices?',
    options: ["Responsive design", "Fixed-width design", "Desktop-first design", "Mobile-only design"],
    correct: 0,
    explanation: 'Responsive design'
  },
  {
    id: 140,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'In an Aura component bundle, which resource contains the markup definition for reusable units of an app?',
    options: ["Component (.cmp)", "Controller", "Helper", "Style"],
    correct: 0,
    explanation: 'Component'
  },
  {
    id: 141,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'How can CSS be added to an Aura component bundle in the Developer Console?',
    options: ["By clicking on the STYLE button", "By creating a CSS file", "By using the @css annotation", "By adding a link tag"],
    correct: 0,
    explanation: 'By clicking on the STYLE button in the Developer Console sidebar'
  },
  {
    id: 142,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Which component in an Aura component bundle is used to expose attributes to the Lightning App Builder?',
    options: ["Design resource", "Controller resource", "Helper resource", "Style resource"],
    correct: 0,
    explanation: 'Design'
  },
  {
    id: 143,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Which tag can be used to reference a JavaScript library uploaded as a static resource in .cmp markup?',
    options: ["<ltng:require>", "<script>", "<aura:import>", "<c:require>"],
    correct: 0,
    explanation: '<ltng:require>'
  },
  {
    id: 144,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which Visualforce overrides are available for Lightning console apps?',
    options: ["Custom console component to the sidebar or footer", "A Lightning component", "A formula field", "A workflow rule"],
    correct: 0,
    explanation: 'Visualforce overrides are supported for new, edit, view, tab, list, and clone in Lightning console apps.'
  },
  {
    id: 145,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which attribute of the < apex:page > component is used to associate a standard controller with a Visualforce page?',
    options: ["standardController", "controller", "extensions", "name"],
    correct: 0,
    explanation: 'standardController'
  },
  {
    id: 146,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which method can be used in a custom controller to respond to user input on a Visualforce page?',
    options: ["Action method", "Getter method", "Setter method", "Constructor method"],
    correct: 0,
    explanation: 'Action method'
  },
  {
    id: 147,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which UI framework allows building single-page web apps with dynamic and responsive user interfaces in Salesforce?',
    options: ["Lightning Component Framework", "Visualforce", "Classic UI", "Service Cloud"],
    correct: 0,
    explanation: 'Lightning Component Framework'
  },
  {
    id: 148,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What should be used instead of dynamic SOQL to prevent SOQL injection?',
    options: ["Static query with a bind variable", "String concatenation", "SOSL query", "No alternative exists"],
    correct: 0,
    explanation: 'Static query with a bind variable'
  },
  {
    id: 149,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'What can prevent a Visualforce page from using an anti-CSRF token?',
    options: ["An action handler in apex:page", "A standard controller", "A Lightning component", "A custom object"],
    correct: 0,
    explanation: 'An action handler in apex:page'
  },
  {
    id: 150,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Which tag can be utilized in an Aura component to register to an event?',
    options: ["<aura:registerEvent>", "<aura:handler>", "<aura:event>", "<aura:listener>"],
    correct: 0,
    explanation: '<aura:registerEvent>'
  },
  {
    id: 151,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Which tag can be utilized in an Aura component to handle an event?',
    options: ["<aura:handler>", "<aura:registerEvent>", "<aura:listener>", "<aura:event>"],
    correct: 0,
    explanation: '<aura:handler>'
  },
  {
    id: 152,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Which type of event is not subject to the component\'s hierarchical setup?',
    options: ["Application Event", "Component Event", "System Event", "Custom Event"],
    correct: 0,
    explanation: 'Application Event'
  },
  {
    id: 153,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Which type of event is more efficient and should be preferred when an event needs to be handled within the containment hierarchy?',
    options: ["Component Event", "Application Event", "System Event", "Platform Event"],
    correct: 0,
    explanation: 'Component Event'
  },
  {
    id: 154,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What are the different types of Lightning Components',
    options: ["Standard, Custom, and AppExchange Components", "Only Standard Components", "Only Custom Components", "Aura and LWC only"],
    correct: 0,
    explanation: 'Standard Components, Custom Components and AppExchange Components'
  },
  {
    id: 155,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'How can flow hide unnecessary fields on a screen?',
    options: ["Component visibility settings on a screen component", "A formula field", "A validation rule", "A workflow rule"],
    correct: 0,
    explanation: 'By using the component visibility settings on a screen component'
  },
  {
    id: 156,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'In what ways can Visualforce page be embedded?',
    options: ["In page layout and on Lightning pages using the Visualforce component", "Only in page layouts", "Only in Lightning pages", "Only in iframes"],
    correct: 0,
    explanation: 'In page layout and on Lightning pages using the Visualforce component'
  },
  {
    id: 157,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'What Salesforce feature should be used to build dynamic PDF documents?',
    options: ["Visualforce Page with renderAs=\"pdf\"", "Lightning Component", "Flow", "Process Builder"],
    correct: 0,
    explanation: 'Visualforce Page'
  },
  {
    id: 158,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which function can be used to securely retrieve third-party images on a Visualforce page?',
    options: ["IMAGEPROXYURL()", "IMAGEURL()", "PROXYIMAGE()", "GETIMAGE()"],
    correct: 0,
    explanation: 'IMAGEPROXYURL'
  },
  {
    id: 159,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'What does Einstein Next Best Action rely on?',
    options: ["Flows, recommendations, strategies, and components", "Only Apex code", "Only Lightning components", "Only Visualforce pages"],
    correct: 0,
    explanation: 'flows, recommendations, strategies, and components'
  },
  {
    id: 160,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What can be used to isolate a static HTML file on a separate domain?',
    options: ["Lightning Web Component (LWC)", "Visualforce page", "Aura component", "Static Resource"],
    correct: 0,
    explanation: '$IFrameResource.<resource_name>, where \'resource_name\' is the name of the static resource'
  },
  {
    id: 161,
    chapter: 'userInterface',
    topic: 'PD1-501',
    question: 'What can be used to create test data once and access it throughout the test class?',
    options: ["@testSetup method", "@isTest method", "Test.loadData method", "Static resource"],
    correct: 0,
    explanation: 'Test setup method'
  },
  {
    id: 162,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Which class can contain reusable code for test data creation?',
    options: ["Public test utility class (Test Data Factory)", "Standard controller", "Custom metadata type", "Static resource"],
    correct: 0,
    explanation: 'Public test utility class, also known as Test Data Factory'
  },
  {
    id: 163,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What can be created and executed using the Salesforce testing framework to ensure error-free code?',
    options: ["Unit tests", "Apex classes", "Triggers", "Flows"],
    correct: 0,
    explanation: 'Unit tests'
  },
  {
    id: 164,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Which tests are run by default for deployment to production?',
    options: ["All local tests", "Only @isTest methods", "Only system tests", "No tests by default"],
    correct: 0,
    explanation: 'All local tests'
  },
  {
    id: 165,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Which annotation should be used for a unit test method?',
    options: ["@isTest", "@Test", "@TestMethod", "@TestCase"],
    correct: 0,
    explanation: '@isTest'
  },
  {
    id: 166,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Which method can be used to verify whether a test achieves expected results?',
    options: ["System.assertEquals()", "System.assert()", "System.debug()", "System.verify()"],
    correct: 0,
    explanation: 'System.assert()'
  },
  {
    id: 167,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Which two static methods are used to assign a new set of governor limits?',
    options: ["Test.startTest() and Test.stopTest()", "Test.begin() and Test.end()", "Limits.reset() and Limits.restore()", "Test.init() and Test.finish()"],
    correct: 0,
    explanation: 'startTest() and stopTest()'
  },
  {
    id: 168,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Which page on the Salesforce user interface allows unit class testing?',
    options: ["Apex Test Execution page in Setup", "Developer Console", "Workbench", "App Builder"],
    correct: 0,
    explanation: 'Apex Test Execution'
  },
  {
    id: 169,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What can be used to create or delete tests that can be run together?',
    options: ["Suite Manager in Developer Console", "Test Manager in Setup", "Apex Test Execution", "Developer Console"],
    correct: 0,
    explanation: 'Suite Manager in Developer Console'
  },
  {
    id: 170,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What does not affect actual data after successful code execution?',
    options: ["Unit Tests", "Apex Classes", "Triggers", "Batch Jobs"],
    correct: 0,
    explanation: 'Unit Tests'
  },
  {
    id: 171,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Which default sharing mode is used for anonymous block execution?',
    options: ["User mode with sharing", "System mode without sharing", "No sharing mode", "Global sharing mode"],
    correct: 0,
    explanation: 'User mode with sharing'
  },
  {
    id: 172,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What are unmanaged packages typically used for?',
    options: ["Distributing free software, templates, and open source components", "Selling on AppExchange", "Upgrading existing packages", "Protecting intellectual property"],
    correct: 0,
    explanation: 'Distributing free software, templates, and open source components'
  },
  {
    id: 173,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What is the difference between a managed package and unmanaged package?',
    options: ["Managed: protected, upgradeable, sold on AppExchange. Unmanaged: not protected, cannot be upgraded", "They are identical in functionality", "Managed is for free distribution, unmanaged is for sale", "Unmanaged can be upgraded, managed cannot"],
    correct: 0,
    explanation: 'A managed package is protected, upgradeable and is typically sold on the AppExchange. Unmanaged packages are not protected and can be used for distribution to others and can be modified once installed.'
  },
  {
    id: 174,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What can a change set be used for?',
    options: ["Moving metadata between related orgs (sandbox to production)", "Moving data between orgs", "Creating new objects", "Writing Apex code"],
    correct: 0,
    explanation: 'Moving meta data between related orgs, e.g. from a sandbox to production. It cannot be used for moving data.'
  },
  {
    id: 175,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What is required to use change sets in 2 orgs?',
    options: ["A deployment connection between the orgs", "Both orgs on the same edition", "Same geographic region", "Same admin user"],
    correct: 0,
    explanation: 'A deployment connection between the orgs and each org must explicitly authorize the other org to send change sets to it.'
  },
  {
    id: 176,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What are some restrictions of change sets?',
    options: ["75% test coverage required, not all metadata supported, cannot specify deploy order", "No restrictions exist", "Can only deploy code, not configuration", "Requires Data Loader"],
    correct: 0,
    explanation: 'Code must have 75% test coverage. Not all metadata types are supported. The order of components deployed cannot be specified. Cannot be used to rename or delete components.'
  },
  {
    id: 177,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What option can be used for distributing metadata to multiple unrelated orgs?',
    options: ["Unmanaged packages", "Change sets", "Data Loader", "Metadata API"],
    correct: 0,
    explanation: 'Unmanaged packages can be used to distribute metadata to unrelated orgs.'
  },
  {
    id: 178,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What option would you choose to move metadata in a scripted manner to multiple environments?',
    options: ["Force.com Migration Tool (ANT)", "Change Sets", "Data Loader", "Workbench"],
    correct: 0,
    explanation: 'Force.com migration tool can be used to script deployments to multiple environments.'
  },
  {
    id: 179,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What are the different log levels available in Apex?',
    options: ["NONE, ERROR, WARN, INFO, DEBUG, FINE, FINER, FINEST", "ERROR, WARNING, INFO, DEBUG", "LOW, MEDIUM, HIGH, CRITICAL", "BASIC, DETAILED, VERBOSE"],
    correct: 0,
    explanation: 'NONE, ERROR, WARN, INFO, DEBUG, FINE, FINER, FINEST'
  },
  {
    id: 180,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What are the options for moving metadata between environments?',
    options: ["Change Sets, Force.com Migration Tool, VS Code, Workbench, Unmanaged Packages", "Only Change Sets", "Only Data Loader", "Only Metadata API"],
    correct: 0,
    explanation: 'Change Sets, Force.com Migration Tool, Visual Studio Code, Workbench, Unmanaged Packages'
  },
  {
    id: 181,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Where can debug logs be viewed, downloaded and deleted?',
    options: ["Developer Console and Setup (Debug Logs panel)", "Only Developer Console", "Only Setup", "Workbench"],
    correct: 0,
    explanation: 'Developer Console and Setup'
  },
  {
    id: 182,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Which suite of tools can be used to query, update, delete and insert data in Salesforce via the Force.com APIs?',
    options: ["Workbench", "Data Loader", "Developer Console", "VS Code"],
    correct: 0,
    explanation: 'Workbench'
  },
  {
    id: 183,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Which Salesforce feature provides a Query Editor for executing SOQL and SOSL queries?',
    options: ["Developer Console", "Setup Menu", "Data Loader", "Workbench"],
    correct: 0,
    explanation: 'Developer Console'
  },
  {
    id: 184,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Which environment is used for migrating and combining changes from different development environments?',
    options: ["Integration environment", "Development environment", "Production environment", "Staging environment"],
    correct: 0,
    explanation: 'Integration environment'
  },
  {
    id: 185,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'Which environment can be used for a test deployment before changes are migrated to production?',
    options: ["Staging environment", "Development environment", "Integration environment", "UAT environment"],
    correct: 0,
    explanation: 'Staging environment'
  },
  {
    id: 186,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Which type of tests are conducted in a UAT environment?',
    options: ["User acceptance tests", "Unit tests", "Integration tests", "Performance tests"],
    correct: 0,
    explanation: 'User acceptance tests'
  },
  {
    id: 187,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'How many checkpoints can be set in Apex code at a time?',
    options: ["Five", "Three", "Ten", "Unlimited"],
    correct: 0,
    explanation: 'Five'
  },
  {
    id: 188,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What can be used to investigate the objects in memory at a specific checkpoint and see the other objects with references to them?',
    options: ["Checkpoint Inspector", "Debug Log", "Developer Console", "System.debug()"],
    correct: 0,
    explanation: 'Checkpoint Inspector'
  },
  {
    id: 189,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'Which file must be created in order to delete metadata components?',
    options: ["destructiveChanges.xml", "package.xml", "build.xml", "deploy.xml"],
    correct: 0,
    explanation: 'destructiveChanges.xml'
  },
  {
    id: 190,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'Which API provides fine-grained access to an org’s metadata by retrieving smaller pieces of metadata?',
    options: ["Tooling API", "Metadata API", "REST API", "SOAP API"],
    correct: 0,
    explanation: 'Tooling API'
  },
  {
    id: 191,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'Which tools are available to access functionality provided by Metadata API?',
    options: ["Visual Studio Code and Ant Migration Tool", "Only Developer Console", "Only Workbench", "Only Data Loader"],
    correct: 0,
    explanation: 'Visual Studio Code and Ant Migration Tool'
  },
  {
    id: 192,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Where can debug mode be enabled for Lightning components?',
    options: ["Debug Mode setting in Setup", "Developer Console", "VS Code", "Lightning App Builder"],
    correct: 0,
    explanation: '\'Debug Mode\' in Setup'
  },
  {
    id: 193,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What are the key milestones in an Application lifecycle when a sandbox is involved?',
    options: ["Manage Requirements, Develop in Sandbox, Test Changes, Deploy to Production, Notify Users", "Develop, Test, Deploy", "Plan, Code, Test, Release", "Design, Build, Test, Deploy"],
    correct: 0,
    explanation: 'Manage Requirements, Develop Changes in Sandbox, Test Changes, Deploy Changes to Production, Notify End Users of Changes'
  },
  {
    id: 194,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is the difference between a Developer and Developer Pro sandbox?',
    options: ["Developer Pro has higher storage limit. Both copy production config (not data)", "Developer Pro copies data", "They are identical", "Developer Pro can only be refreshed monthly"],
    correct: 0,
    explanation: 'Developer Pro has a higher storage limit. Both contain a copy of production configuration and not data. Both can be refreshed once a day.'
  },
  {
    id: 195,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'Why would a Partial Copy sandbox be used instead of a Full Copy sandbox?',
    options: ["Partial Copy is cheaper, refreshes more frequently, uses templates for selective data", "Partial Copy has more data", "They are identical", "Full Copy refreshes more frequently"],
    correct: 0,
    explanation: 'A Partial Copy sandbox is cheaper and can be refreshed more frequently (5 days). It has a data and file storage limit of 5 GB, so a template can be used to define the data copied (up to 10,000 records).'
  },
  {
    id: 196,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is a full copy sandbox usually used for?',
    options: ["When identical-to-production environment is needed for testing", "For daily development", "For code reviews", "For documentation"],
    correct: 0,
    explanation: 'When an environment that is identical to production is required for performance, load, regression or user acceptance testing.'
  },
  {
    id: 197,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Which type of user can be traced using a debug log to track data that is synchronized using the Salesforce Integration Cloud?',
    options: ["Any user with a trace flag configured", "Only administrators", "Only developers", "Only system administrators"],
    correct: 0,
    explanation: 'Platform Integration User'
  },
  {
    id: 198,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'When creating a new sandbox, what can a developer do to copy data and metadata from an existing sandbox?',
    options: ["Clone the existing sandbox", "Use Data Loader", "Export and import manually", "Create from production"],
    correct: 0,
    explanation: 'Clone the existing sandbox'
  },
  {
    id: 199,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'When a new sandbox is created, what happens to the users\' email addresses?',
    options: ["Salesforce appends .invalid to email addresses", "Emails are deleted", "Emails are forwarded to admins", "No change to emails"],
    correct: 0,
    explanation: 'Salesforce appends .invalid to the email addresses. For example, name@email.com becomes name@email.com.invalid.'
  },
  {
    id: 200,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'Which IDE (Integrated Development Environment) should be used to create and edit Apex code, manage development projects, and migrate metadata components from one org to another?',
    options: ["Visual Studio Code with Salesforce Extension Pack", "Eclipse", "Notepad++", "Sublime Text"],
    correct: 0,
    explanation: 'Visual Studio Code'
  },
  {
    id: 201,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What needs to be set up to generate debug logs when a user performs an action in Salesforce, such as updating an account record?',
    options: ["User trace flag", "Debug level", "Log category", "System.debug()"],
    correct: 0,
    explanation: 'User trace flag'
  },
  {
    id: 202,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What does each debug log contain?',
    options: ["Header, execution units, code units, log lines", "Only error messages", "Only system.debug outputs", "Only SOQL queries"],
    correct: 0,
    explanation: 'Each debug log consists of a header, execution units, code units, log lines, and other log data.'
  },
  {
    id: 203,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Which panel of the Log Inspector shows information in a top-down manner from the initiating calls to the next level down?',
    options: ["Stack Tree panel", "Execution Overview panel", "Timeline panel", "Filter panel"],
    correct: 0,
    explanation: 'Stack Tree'
  },
  {
    id: 204,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'When troubleshooting processes, what is the significance of myVariable_current and myVariable_old?',
    options: ["myVariable_current = current field value, myVariable_old = most recent previous value", "Both are the same value", "myVariable_current is always null", "myVariable_old is the original value from creation"],
    correct: 0,
    explanation: '‘myVariable_current’ refers to the field value when the process was executed. On the other hand, ‘myVariable_old’ refers to the most recent previous value.'
  },
  {
    id: 205,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is a Scratch Org?',
    options: ["A disposable, configurable, short-term Salesforce environment", "A permanent development environment", "A production org with debugging", "A type of sandbox"],
    correct: 0,
    explanation: 'A Scratch Org is a dedicated, configurable, and short-term Salesforce environment'
  },
  {
    id: 206,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What developer tool can be used to make code changes effective immediately in an org without installing any software?',
    options: ["Developer Console", "VS Code", "Data Loader", "Workbench"],
    correct: 0,
    explanation: 'Developer Console'
  },
  {
    id: 207,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What external web-based platform can be used to query, insert, update and delete Salesforce data?',
    options: ["Workbench", "Data Loader", "Developer Console", "VS Code"],
    correct: 0,
    explanation: 'Workbench'
  },
  {
    id: 208,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'Which declarative automation feature can send an outbound message without code?',
    options: ["Workflow Rules","Process Builder","Approval Processes","Flow Builder"],
    correct: 0,
    explanation: 'Workflow Rules can send outbound messages as one of their action types.'
  },
  {
    id: 209,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'Which automation tool can display a custom user interface?',
    options: ["Flow (Screen Flow)","Process Builder","Workflow Rule","Approval Process"],
    correct: 0,
    explanation: 'Screen Flows are the only declarative tool that can display a custom UI.'
  },
  {
    id: 210,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'Which access modifier makes a variable available to all classes in the org?',
    options: ["global","public","private","protected"],
    correct: 0,
    explanation: 'The global modifier makes a variable available to all classes in the organization.'
  },
  {
    id: 211,
    chapter: 'processAutomation',
    topic: 'PD1-303',
    question: 'Which loop type always executes at least once?',
    options: ["do-while loop","for loop","while loop","for-each loop"],
    correct: 0,
    explanation: 'The do-while loop always executes at least once because the condition is checked after the body.'
  },
  {
    id: 212,
    chapter: 'processAutomation',
    topic: 'PD1-303',
    question: 'What does the break statement do in a loop?',
    options: ["Terminates the loop","Skips to next iteration","Pauses execution","Restarts the loop"],
    correct: 0,
    explanation: 'The break statement immediately terminates the loop.'
  },
  {
    id: 213,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'Which SOQL clause sorts query results?',
    options: ["ORDER BY","SORT BY","GROUP BY","ARRANGE BY"],
    correct: 0,
    explanation: 'The ORDER BY clause sorts SOQL query results.'
  },
  {
    id: 214,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What does the UPSERT DML operation do?',
    options: ["Inserts new or updates existing records","Deletes and recreates records","Merges duplicates","Converts leads"],
    correct: 0,
    explanation: 'UPSERT inserts new records or updates existing ones based on an external ID.'
  },
  {
    id: 215,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What is the purpose of bind variables in dynamic SOQL?',
    options: ["Prevent SOQL injection","Improve performance","Reduce governor limits","Enable bulk queries"],
    correct: 0,
    explanation: 'Bind variables escape user input to prevent SOQL injection.'
  },
  {
    id: 216,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the recommended pattern for trigger logic?',
    options: ["One trigger per object with handler class","Multiple triggers per object","All logic in trigger","Only before triggers"],
    correct: 0,
    explanation: 'Use one trigger per object with a handler class for separation of concerns.'
  },
  {
    id: 217,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'Why should SOQL not be inside for loops?',
    options: ["Exceeds 100 SOQL query governor limit","Causes syntax errors","Makes code unreadable","Slows the loop"],
    correct: 0,
    explanation: 'SOQL in loops can exceed the 100 SOQL queries per transaction governor limit.'
  },
  {
    id: 218,
    chapter: 'processAutomation',
    topic: 'PD1-308',
    question: 'What is the governor limit for SOQL queries per transaction?',
    options: ["100","50","150","200"],
    correct: 0,
    explanation: 'The limit is 100 SOQL queries per transaction.'
  },
  {
    id: 219,
    chapter: 'processAutomation',
    topic: 'PD1-308',
    question: 'What is the governor limit for DML statements per transaction?',
    options: ["150","50","100","200"],
    correct: 0,
    explanation: 'The limit is 150 DML statements per transaction.'
  },
  {
    id: 220,
    chapter: 'processAutomation',
    topic: 'PD1-308',
    question: 'What is the CPU time limit for synchronous Apex?',
    options: ["10,000 ms","5,000 ms","30,000 ms","60,000 ms"],
    correct: 0,
    explanation: 'Synchronous Apex has a 10,000 ms CPU time limit.'
  },
  {
    id: 221,
    chapter: 'processAutomation',
    topic: 'PD1-309',
    question: 'What is the first step in save order of execution?',
    options: ["Before triggers","Validation rules","After triggers","Assignment rules"],
    correct: 0,
    explanation: 'Before triggers fire first in the save order of execution.'
  },
  {
    id: 222,
    chapter: 'processAutomation',
    topic: 'PD1-309',
    question: 'How can recursion be prevented in triggers?',
    options: ["Static Boolean variable","Final keyword","More governor limits","Cannot be prevented"],
    correct: 0,
    explanation: 'A static Boolean flag prevents re-entry of the trigger.'
  },
  {
    id: 223,
    chapter: 'processAutomation',
    topic: 'PD1-310',
    question: 'Which exception is thrown when a single-record SOQL returns no results?',
    options: ["QueryException","DmlException","NullPointerException","LimitException"],
    correct: 0,
    explanation: 'QueryException is thrown when a single-record query returns no results.'
  },
  {
    id: 224,
    chapter: 'processAutomation',
    topic: 'PD1-312',
    question: 'What annotation makes Apex callable from Flow?',
    options: ["@InvocableMethod","@AuraEnabled","@RemoteAction","@future"],
    correct: 0,
    explanation: '@InvocableMethod makes an Apex method callable from Flow and Process Builder.'
  },
  {
    id: 225,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What does the static keyword do for a variable?',
    options: ["Makes it class-level and shared across all instances","Makes it a constant","Makes it private","Makes it global"],
    correct: 0,
    explanation: 'Static makes a variable class-level, shared across all instances of the class.'
  },
  {
    id: 226,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What does Database.insert(records, false) do?',
    options: ["Allows partial success with allOrNone=false","Inserts all records atomically","Deletes records first","Validates only without inserting"],
    correct: 0,
    explanation: 'Database.insert with allOrNone=false allows partial success - some records can succeed while others fail.'
  },
  {
    id: 227,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'Which trigger context variable contains the old field values?',
    options: ["Trigger.old","Trigger.new","Trigger.oldMap","Trigger.newMap"],
    correct: 0,
    explanation: 'Trigger.old contains the old versions of the records before the update.'
  },
  {
    id: 228,
    chapter: 'processAutomation',
    topic: 'PD1-308',
    question: 'What happens when a governor limit is exceeded?',
    options: ["Exception thrown, DML rolled back","Code continues with warning","Limit increased automatically","Only current operation fails"],
    correct: 0,
    explanation: 'An unhandled exception is thrown and all DML operations in the transaction are rolled back.'
  },
  {
    id: 229,
    chapter: 'processAutomation',
    topic: 'PD1-310',
    question: 'What is the purpose of the finally block?',
    options: ["Always executes for cleanup","Catches exceptions","Stops execution","Creates test data"],
    correct: 0,
    explanation: 'The finally block always executes regardless of whether an exception occurred, useful for cleanup.'
  },
  {
    id: 230,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'Which tool can send outbound messages declaratively?',
    options: ["Workflow Rules","Flow Builder","Process Builder","Approval Processes"],
    correct: 0,
    explanation: 'Workflow Rules are the declarative tool specifically designed for sending outbound messages.'
  },
  {
    id: 231,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'Can a class implement multiple interfaces in Apex?',
    options: ["Yes, but extend only one class","No, only one interface","Yes, and extend multiple classes","No interfaces are supported"],
    correct: 0,
    explanation: 'A class can implement multiple interfaces but can only extend one class.'
  },
  {
    id: 232,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'Which method allows partial DML success?',
    options: ["Database.insert(records, false)","insert records","Database.upsert(records)","System.dml(records)"],
    correct: 0,
    explanation: 'Database methods with allOrNone=false allow partial success.'
  },
  {
    id: 233,
    chapter: 'processAutomation',
    topic: 'PD1-308',
    question: 'What is the heap size limit for synchronous Apex?',
    options: ["6 MB","3 MB","12 MB","24 MB"],
    correct: 0,
    explanation: 'The heap size limit for synchronous Apex is 6 MB.'
  },
  {
    id: 234,
    chapter: 'processAutomation',
    topic: 'PD1-309',
    question: 'When do validation rules fire in the save order?',
    options: ["After before triggers, before after triggers","Before before triggers","After after triggers","At the very end"],
    correct: 0,
    explanation: 'Validation rules fire after before triggers but before after triggers.'
  },
  {
    id: 235,
    chapter: 'processAutomation',
    topic: 'PD1-310',
    question: 'Should you catch generic Exception or specific exceptions?',
    options: ["Catch specific exceptions first","Always catch generic Exception","Never use try-catch","Only use finally"],
    correct: 0,
    explanation: 'Best practice is to catch specific exceptions first for targeted error handling.'
  },
  {
    id: 236,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'What is the correct order of the publish-subscribe messaging pattern for Platform Events?',
    options: ["Publisher \u2192 Event Message \u2192 Event Bus \u2192 Event Subscription", "Event Bus \u2192 Publisher \u2192 Subscription \u2192 Event Message", "Subscription \u2192 Event Bus \u2192 Publisher \u2192 Event Message", "Event Message \u2192 Publisher \u2192 Subscription \u2192 Event Bus"],
    correct: 0,
    explanation: 'The publish-subscribe pattern follows: Publisher creates event message → Event Bus receives and stores → Event Subscription processes the event.'
  },
  {
    id: 237,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'What are the three key components of the publish-subscribe messaging pattern for Platform Events?',
    options: ["Event Message, Event Bus, Event Subscription", "Event Publisher, Event Consumer, Event Store", "Event Creator, Event Handler, Event Logger", "Event Source, Event Target, Event Channel"],
    correct: 0,
    explanation: 'The three key components are: Event Message (the data), Event Bus (routing mechanism), and Event Subscription (the consumer).'
  },
  {
    id: 238,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'What is Event-Driven Software Architecture?',
    options: ["A design pattern where decoupled components communicate through events", "A pattern where all components must be tightly coupled", "A pattern that only works with Salesforce Lightning", "A pattern that requires synchronous processing"],
    correct: 0,
    explanation: 'Event-Driven Architecture is a design pattern where decoupled components communicate through events, allowing for asynchronous and loosely coupled systems.'
  },
  {
    id: 239,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'Which of the following is a benefit of Event-Driven Architecture?',
    options: ["Loose coupling between components", "Tight integration between all systems", "Synchronous-only processing", "No need for error handling"],
    correct: 0,
    explanation: 'Event-Driven Architecture provides loose coupling between components, allowing them to evolve independently and communicate asynchronously.'
  },
  {
    id: 240,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'Which asynchronous Apex type supports job chaining and non-primitive data types?',
    options: ["Queueable Apex", "Future Methods", "Batch Apex", "Scheduled Apex"],
    correct: 0,
    explanation: 'Queueable Apex supports job chaining and non-primitive data types, making it more flexible than future methods.'
  },
  {
    id: 241,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'What is the maximum number of future calls allowed per Apex invocation?',
    options: ["50", "100", "200", "Unlimited"],
    correct: 0,
    explanation: 'The governor limit for future methods is 50 calls per Apex invocation.'
  },
  {
    id: 242,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'What is the correct syntax for a future method that makes a callout?',
    options: ["@Future(callout=true)", "@Future(callouts=true)", "@Async(callout=true)", "@RemoteAction(callout=true)"],
    correct: 0,
    explanation: 'The @Future(callout=true) annotation is used for future methods that need to make web service callouts.'
  },
  {
    id: 243,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'Which method in the Database.Batchable interface is called once at the beginning of a batch job?',
    options: ["start()", "execute()", "finish()", "init()"],
    correct: 0,
    explanation: 'The start() method is called once at the beginning of a batch job and returns either a Database.QueryLocator or an Iterable.'
  },
  {
    id: 244,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'What is the default batch size for Batch Apex?',
    options: ["200 records", "100 records", "500 records", "1000 records"],
    correct: 0,
    explanation: 'The default batch size for Batch Apex is 200 records, though this can be customized.'
  },
  {
    id: 245,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'Which interface allows batch Apex to maintain state across transactions?',
    options: ["Database.Stateful", "Database.Batchable", "Database.QueryLocator", "Database.Iterable"],
    correct: 0,
    explanation: 'Implementing Database.Stateful allows instance member variables to retain values across batch transactions.'
  },
  {
    id: 246,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'What is the maximum number of scheduled Apex jobs allowed at one time?',
    options: ["100", "50", "200", "Unlimited"],
    correct: 0,
    explanation: 'The governor limit for scheduled Apex jobs is 100 at one time.'
  },
  {
    id: 247,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'What is the CRON expression format for Scheduled Apex?',
    options: ["Seconds Minutes Hours Day_of_month Month Day_of_week optional_year", "Minutes Hours Day Month Year", "Hours Day Month Day_of_week", "Day Month Year Hours Minutes"],
    correct: 0,
    explanation: 'The CRON expression format is: \'Seconds Minutes Hours Day_of_month Month Day_of_week optional_year\'.'
  },
  {
    id: 248,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What does the WITH USER_MODE keyword do in a SOQL query?',
    options: ["Enforces field-level security and sharing rules for the current user", "Bypasses all security checks", "Runs the query as a system administrator", "Enables bulk API mode"],
    correct: 0,
    explanation: 'WITH USER_MODE enforces field-level security and sharing rules for the current user during the query.'
  },
  {
    id: 249,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'Which method is used to check if a user has create access to an object?',
    options: ["isCreateable()", "isAccessible()", "isUpdateable()", "isDeleteable()"],
    correct: 0,
    explanation: 'isCreateable() checks if the current user has create access to the object and its fields.'
  },
  {
    id: 250,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What does the Security.stripInaccessible() method do?',
    options: ["Removes fields the user cannot access from query results", "Adds security checks to queries", "Creates new security policies", "Deletes inaccessible records"],
    correct: 0,
    explanation: 'Security.stripInaccessible() removes fields and relationship fields from query results that the user cannot access.'
  },
  {
    id: 251,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the recommended approach for enforcing sharing rules in Apex?',
    options: ["Use the 'with sharing' keyword", "Use the 'without sharing' keyword", "Do not use any sharing keyword", "Use the 'global sharing' keyword"],
    correct: 0,
    explanation: 'The \'with sharing\' keyword enforces sharing rules for the current user, ensuring data visibility is respected.'
  },
  {
    id: 252,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What does the \'inherited sharing\' keyword do?',
    options: ["Runs in the sharing mode of the calling class", "Always runs with sharing rules", "Always runs without sharing rules", "Disables sharing for the class"],
    correct: 0,
    explanation: 'Inherited sharing runs in the sharing mode of the calling class, or as \'with sharing\' when used as an Aura controller, Visualforce controller, or Apex REST service.'
  },
  {
    id: 253,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'In Lightning Experience, what happens to Visualforce pages?',
    options: ["They run inside an iframe within the single-page application", "They replace the Lightning Experience entirely", "They cannot be used at all", "They run as native Lightning components"],
    correct: 0,
    explanation: 'In Lightning Experience, Visualforce pages run inside an iframe within the SPA, which affects DOM access and JavaScript scope.'
  },
  {
    id: 254,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which object is auto-injected in Lightning Experience for navigation?',
    options: ["sforce.one", "sforce.navigation", "lightning.navigation", "visualforce.navigation"],
    correct: 0,
    explanation: 'The sforce.one object is auto-injected in Lightning Experience for navigation functions like navigateToSObject and navigateToURL.'
  },
  {
    id: 255,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'What should you NEVER do in Lightning Experience for navigation?',
    options: ["Set window.location directly", "Use sforce.one", "Use PageReference", "Use navigateToURL"],
    correct: 0,
    explanation: 'Never set window.location directly in Lightning Experience as it can break the single-page application architecture.'
  },
  {
    id: 256,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'What is the purpose of the $User.UIThemeDisplayed variable?',
    options: ["To detect what UI theme the user is actually seeing", "To set the UI theme", "To change the color scheme", "To enable dark mode"],
    correct: 0,
    explanation: '$User.UIThemeDisplayed detects what UI theme the user is actually seeing, which is preferred over $User.UITheme.'
  },
  {
    id: 257,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What is the recommended approach for lazy instantiation in LWC?',
    options: ["Use standard tab components, Lightning Component Actions, or utility bar", "Load all components at startup", "Use only static rendering", "Avoid using components at all"],
    correct: 0,
    explanation: 'Lazy instantiation approaches include standard tab components, Lightning Component Actions, utility bar, and lightning-tabset/lightning-tab.'
  },
  {
    id: 258,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What is the difference between CSS slds-show/slds-hide and lwc:if directives?',
    options: ["CSS preserves state; lwc:if destroys and recreates", "They are identical", "lwc:if preserves state; CSS destroys", "Neither preserves state"],
    correct: 0,
    explanation: 'CSS slds-show/slds-hide preserves component state while lwc:if destroys and recreates the component, losing state.'
  },
  {
    id: 259,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What is the recommended priority for conditional rendering in LWC?',
    options: ["Lightning App Builder Dynamic Component Visibility > lwc:if > CSS", "CSS > lwc:if > App Builder", "lwc:if > CSS > App Builder", "All are equally recommended"],
    correct: 0,
    explanation: 'The recommended priority is: Lightning App Builder Dynamic Component Visibility (declarative), then lwc:if/elseif/else directives, then CSS slds-show/slds-hide.'
  },
  {
    id: 260,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Why should you avoid using jQuery in LWC?',
    options: ["LWC uses shadow DOM which encapsulates styles and DOM", "jQuery is too slow", "jQuery doesn't work with JavaScript", "LWC has its own jQuery equivalent"],
    correct: 0,
    explanation: 'LWC uses shadow DOM for encapsulation, making jQuery largely unnecessary and potentially problematic.'
  },
  {
    id: 261,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What are the benefits of base Lightning components?',
    options: ["Native styles, pre-loaded, responsive, actively developed, accessible", "Only visual consistency", "Only performance improvements", "Only accessibility features"],
    correct: 0,
    explanation: 'Base Lightning components provide: native styles, pre-loaded (no download), responsive, actively developed, accessible, and client-side validation.'
  },
  {
    id: 262,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Can Aura components contain LWC?',
    options: ["Yes, Aura can contain LWC", "No, they cannot be mixed", "Only in Lightning Experience", "Only in Salesforce Mobile"],
    correct: 0,
    explanation: 'Aura components CAN contain LWC, but LWC CANNOT contain Aura components.'
  },
  {
    id: 263,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What is the LWC equivalent of Aura\'s <aura:handler name=\'init\'>?',
    options: ["connectedCallback()", "renderedCallback()", "disconnectedCallback()", "constructor()"],
    correct: 0,
    explanation: 'The connectedCallback() lifecycle hook in LWC is equivalent to Aura\'s <aura:handler name=\'init\'>.'
  },
  {
    id: 264,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What is the LWC equivalent of Aura\'s <aura:iteration>?',
    options: ["<template for:each>", "<template iterate>", "<for-each>", "<repeat>"],
    correct: 0,
    explanation: 'The <template for:each={...} for:item=\'...\'> directive is the LWC equivalent of Aura\'s <aura:iteration>.'
  },
  {
    id: 265,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What type of data binding does LWC use?',
    options: ["One-way data binding only", "Two-way data binding", "No data binding", "Three-way data binding"],
    correct: 0,
    explanation: 'LWC uses one-way data binding only. Changes propagate from owner to child, and child fires events to modify owner data.'
  },
  {
    id: 266,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What replaces Aura\'s facets in LWC?',
    options: ["HTML <slot> elements", "Component attributes", "Event handlers", "CSS classes"],
    correct: 0,
    explanation: 'HTML <slot> elements replace Aura\'s facets. Named slots replace named facets, and unnamed slots replace the body facet.'
  },
  {
    id: 267,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is the minimum code coverage required for deploying Apex to production?',
    options: ["75%", "50%", "80%", "100%"],
    correct: 0,
    explanation: 'At least 75% of Apex code must be covered by tests, and all tests must pass before deployment.'
  },
  {
    id: 268,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What does Test.startTest() do?',
    options: ["Resets governor limits for the test", "Starts the test execution", "Creates test data", "Enables debug logging"],
    correct: 0,
    explanation: 'Test.startTest() resets governor limits, isolating data setup limit usage from test execution.'
  },
  {
    id: 269,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is the purpose of the @TestSetup annotation?',
    options: ["To create test data once that is available to all test methods", "To mark a class as a test class", "To enable debugging", "To set up the test environment"],
    correct: 0,
    explanation: '@TestSetup creates test data once that is available to all test methods in the class, and data rolls back after each test.'
  },
  {
    id: 270,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What interface must be implemented to mock HTTP callouts in tests?',
    options: ["HttpCalloutMock", "HttpResponseMock", "CalloutMock", "WebServiceMock"],
    correct: 0,
    explanation: 'The HttpCalloutMock interface must be implemented to mock HTTP callouts during testing.'
  },
  {
    id: 271,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Can LWC be developed in the Developer Console?',
    options: ["No, LWC cannot be developed in Developer Console", "Yes, fully supported", "Only basic LWC", "Only with extensions"],
    correct: 0,
    explanation: 'LWC cannot be developed in the Developer Console. Use Salesforce Extensions for VS Code instead.'
  },
  {
    id: 272,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What are the two main tools for Salesforce development?',
    options: ["Developer Console and Salesforce Extensions for VS Code", "Notepad and Sublime Text", "Eclipse and IntelliJ", "Visual Studio and Xcode"],
    correct: 0,
    explanation: 'The two main tools are Developer Console (browser-based) and Salesforce Extensions for VS Code (desktop-based with version control).'
  },
  {
    id: 273,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What is the purpose of checkpoints in Developer Console?',
    options: ["To take snapshots of Apex code at particular execution points", "To pause code execution", "To set breakpoints for debugging", "To mark code for deletion"],
    correct: 0,
    explanation: 'Checkpoints provide snapshots of Apex code at particular execution points, showing objects in memory.'
  },
  {
    id: 274,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What is the maximum number of checkpoints allowed per Apex class?',
    options: ["5", "10", "Unlimited", "1"],
    correct: 0,
    explanation: 'The maximum number of checkpoints per Apex class is 5.'
  },
  {
    id: 275,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is the source of truth in the org development model?',
    options: ["Version control repository (Git)", "The Salesforce org", "Developer Console", "VS Code"],
    correct: 0,
    explanation: 'In the org development model, the version control repository (Git) is the source of truth for all release changes.'
  },
  {
    id: 276,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is the correct order of the release environment lifecycle?',
    options: ["Develop & Test \u2192 Build Release \u2192 Test Release \u2192 Release \u2192 Production", "Production \u2192 Release \u2192 Test \u2192 Build \u2192 Develop", "Build \u2192 Develop \u2192 Test \u2192 Release \u2192 Production", "Test \u2192 Develop \u2192 Build \u2192 Release \u2192 Production"],
    correct: 0,
    explanation: 'The release lifecycle is: Develop & Test (developer sandboxes) → Build Release (integration) → Test Release (UAT) → Release (training) → Production.'
  },
  {
    id: 277,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What command retrieves metadata from a Salesforce org to a local project?',
    options: ["sf project retrieve start", "sf project deploy start", "sf org retrieve", "sf metadata pull"],
    correct: 0,
    explanation: 'The sf project retrieve start command retrieves metadata from a Salesforce org to the local SFDX project.'
  },
  {
    id: 278,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is a package.xml manifest?',
    options: ["A file listing metadata components to deploy", "A package of actual code", "A configuration file", "A documentation file"],
    correct: 0,
    explanation: 'A package.xml manifest lists metadata components to deploy but does not contain the actual code.'
  },
  {
    id: 279,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is Quick Deploy in Salesforce CLI?',
    options: ["Deploys using a job ID from a successful validation", "Deploys without validation", "Deploys only changed files", "Deploys to multiple orgs simultaneously"],
    correct: 0,
    explanation: 'Quick Deploy uses a job ID from a successful validation to deploy without re-running all tests.'
  },
  {
    id: 280,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What is the most recommended way to prevent SOQL injection?',
    options: ["Use static queries with bind variables", "Use String.escapeSingleQuotes()", "Use typecasting", "Use allowlisting"],
    correct: 0,
    explanation: 'Static queries with bind variables are the most recommended way to prevent SOQL injection.'
  },
  {
    id: 281,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What does String.escapeSingleQuotes() do?',
    options: ["Escapes single quote characters with a backslash", "Removes all quotes from a string", "Converts quotes to double quotes", "Adds quotes around a string"],
    correct: 0,
    explanation: 'String.escapeSingleQuotes() escapes single quote characters with a backslash, preventing attackers from breaking out of string boundaries.'
  },
  {
    id: 282,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What is the limitation of String.escapeSingleQuotes() for preventing SOQL injection?',
    options: ["It only works for strings, not numeric values", "It works for all data types", "It's the strongest defense", "It prevents all injection types"],
    correct: 0,
    explanation: 'String.escapeSingleQuotes() only works for strings and doesn\'t prevent injections that don\'t rely on single quote characters (e.g., numeric injection).'
  },
  {
    id: 283,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'Why is blocklisting (removing bad characters) weaker than allowlisting?',
    options: ["It's easier to predict good inputs than all possible bad inputs", "Blocklisting is actually stronger", "They are equally strong", "Allowlisting doesn't work for SOQL"],
    correct: 0,
    explanation: 'Blocklisting is weaker because it\'s easier to predict a few good inputs than to predict all possible bad inputs.'
  },
  {
    id: 284,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the default execution mode for Apex classes?',
    options: ["System mode", "User mode", "Guest mode", "Admin mode"],
    correct: 0,
    explanation: 'Apex classes execute in system mode by default, where object permissions, field-level security, and sharing rules aren\'t applied.'
  },
  {
    id: 285,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'When was User Mode introduced for database operations?',
    options: ["Spring 2023", "Winter 2022", "Summer 2021", "Spring 2020"],
    correct: 0,
    explanation: 'User Mode for database operations was introduced in Spring 2023.'
  },
  {
    id: 286,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the syntax for SOQL with User Mode?',
    options: ["SELECT Id FROM Account WITH USER_MODE", "SELECT Id FROM Account IN USER_MODE", "SELECT Id FROM Account AS USER", "SELECT Id FROM Account USER_MODE"],
    correct: 0,
    explanation: 'The syntax for SOQL with User Mode is: SELECT Id FROM Account WITH USER_MODE.'
  },
  {
    id: 287,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the syntax for DML with User Mode?',
    options: ["insert as user o;", "insert user o;", "insert with user o;", "insert asUser o;"],
    correct: 0,
    explanation: 'The syntax for DML with User Mode is: insert as user o; (or database.insert(o, AccessLevel.USER_MODE)).'
  },
  {
    id: 288,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'What happens to showHeader and sidebar in Lightning Experience?',
    options: ["They are forced to false", "They work normally", "They are ignored", "They cause errors"],
    correct: 0,
    explanation: 'In Lightning Experience, showHeader and sidebar are always forced to false.'
  },
  {
    id: 289,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'What is the purpose of the <apex:slds> component?',
    options: ["Loads Lightning Design System without static resource upload", "Creates a new Lightning component", "Enables Lightning Experience", "Adds SLDS to static resources"],
    correct: 0,
    explanation: 'The <apex:slds> component loads the Lightning Design System without requiring static resource upload.'
  },
  {
    id: 290,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which Visualforce features don\'t work in Lightning Experience?',
    options: ["showHeader, sidebar, certain related lists, and <apex:iframe>", "All Visualforce features work", "Only JavaScript features", "Only CSS features"],
    correct: 0,
    explanation: 'Features that don\'t work include showHeader, sidebar, certain related lists, and <apex:iframe> (VF already in an iframe).'
  },
  {
    id: 291,
    chapter: 'userInterface',
    topic: 'PD1-408',
    question: 'What should you do with non-lifecycle event listeners in LWC?',
    options: ["Remove them in disconnectedCallback()", "Keep them always", "Add them in constructor", "Never use them"],
    correct: 0,
    explanation: 'Non-lifecycle event listeners should be removed in disconnectedCallback() to prevent memory leaks.'
  },
  {
    id: 292,
    chapter: 'userInterface',
    topic: 'PD1-408',
    question: 'What is event delegation in LWC?',
    options: ["A technique to reduce the number of event listeners", "A way to delegate events to parent components", "A method to prevent event propagation", "A way to create custom events"],
    correct: 0,
    explanation: 'Event delegation is a technique that reduces the number of event listeners by handling events at a higher level in the DOM.'
  },
  {
    id: 293,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What happens when an assertion fails in a test?',
    options: ["An uncatchable AssertException is thrown", "The test continues", "A warning is logged", "The test is skipped"],
    correct: 0,
    explanation: 'Failed assertions throw an AssertException that is fatal and uncatchable, stopping the test.'
  },
  {
    id: 294,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is a test suite?',
    options: ["A collection of test classes run together", "A single test method", "A test configuration file", "A test data factory"],
    correct: 0,
    explanation: 'A test suite is a collection of test classes that can be run together for regression testing.'
  },
  {
    id: 295,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Do test methods have access to pre-existing org data?',
    options: ["No, except setup/metadata objects like User and Profile", "Yes, full access", "Only with @seeAllData", "Only custom objects"],
    correct: 0,
    explanation: 'Test methods don\'t have access to pre-existing org data, except setup/metadata objects like User, Profile, and Organization.'
  },
  {
    id: 296,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What does @IsTest(seeAllData=true) do?',
    options: ["Grants access to all org data in the test", "Makes the test run faster", "Enables debugging", "Creates test data automatically"],
    correct: 0,
    explanation: '@IsTest(seeAllData=true) grants the test method access to all data in the organization, which is not a best practice.'
  },
  {
    id: 297,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is the difference between instance and static methods?',
    options: ["Instance methods require an object; static methods belong to the class", "They are identical", "Static methods are faster", "Instance methods can't be overridden"],
    correct: 0,
    explanation: 'Instance methods require an object to be called; static methods belong to the class and can be called without an object.'
  },
  {
    id: 298,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What are the access modifiers available in Apex?',
    options: ["private, protected, public, global", "private, public, internal, external", "local, global, public, protected", "private, public, shared, global"],
    correct: 0,
    explanation: 'The four access modifiers in Apex are: private, protected, public, and global.'
  },
  {
    id: 299,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What data types are available in Apex?',
    options: ["Primitives, sObject, Collections, Enums, user-defined classes, system-supplied classes", "Only primitives and objects", "Only strings and numbers", "Only collections"],
    correct: 0,
    explanation: 'Apex supports: primitives (Integer, Double, Long, Date, Datetime, String, ID, Boolean), sObject, collections (Sets, Maps, Lists), enums, user-defined classes, and system-supplied classes.'
  },
  {
    id: 300,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is the relationship between sObjects and Salesforce records?',
    options: ["Every Salesforce record is natively represented as an sObject in Apex", "sObjects are only for custom objects", "Records and sObjects are different things", "sObjects are only for API calls"],
    correct: 0,
    explanation: 'Every Salesforce record is natively represented as an sObject in Apex, whether it\'s a standard or custom object.'
  },
  {
    id: 301,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is the API name convention for custom objects and fields?',
    options: ["Custom objects end with __c, custom relationship fields end with __r", "All end with __c", "All end with __r", "No suffix is needed"],
    correct: 0,
    explanation: 'Custom objects and fields end with __c, and custom relationship fields end with __r.'
  },
  {
    id: 302,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What are the six DML statements in Apex?',
    options: ["insert, update, upsert, delete, undelete, merge", "insert, update, delete, save, load, merge", "create, update, delete, upsert, undelete, merge", "insert, modify, upsert, delete, undelete, merge"],
    correct: 0,
    explanation: 'The six DML statements are: insert, update, upsert, delete, undelete, and merge.'
  },
  {
    id: 303,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What happens when upsert finds multiple matches?',
    options: ["It throws an error", "It updates the first match", "It creates a new record", "It deletes all matches"],
    correct: 0,
    explanation: 'When upsert finds multiple matches for a key, it throws an error.'
  },
  {
    id: 304,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What is the allOrNone parameter in Database methods?',
    options: ["When false, allows partial success of DML operations", "When true, allows partial success", "Controls batch size", "Controls error handling"],
    correct: 0,
    explanation: 'When allOrNone is set to false, partial success is allowed - some records can succeed while others fail.'
  },
  {
    id: 305,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What is the purpose of SOQL for loops?',
    options: ["To process records in chunks of 200 to avoid heap size limits", "To make queries faster", "To reduce governor limits", "To enable bulk processing"],
    correct: 0,
    explanation: 'SOQL for loops process records in chunks of 200, helping to avoid heap size limits when processing large result sets.'
  },
  {
    id: 306,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What is the difference between SOQL and SOSL?',
    options: ["SOQL queries one object; SOSL can search multiple objects simultaneously", "They are identical", "SOQL is faster", "SOSL is for text only"],
    correct: 0,
    explanation: 'SOQL queries one object at a time with exact matching; SOSL can search multiple objects simultaneously with word matching.'
  },
  {
    id: 307,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What wildcards does SOSL support?',
    options: ["* (zero or more characters) and ? (exactly one character)", "Only * (any characters)", "Only % (any characters)", "No wildcards"],
    correct: 0,
    explanation: 'SOSL supports * wildcard (matches zero or more characters) and ? wildcard (matches exactly one character).'
  },
  {
    id: 308,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What are the seven possible trigger events?',
    options: ["before insert, before update, before delete, after insert, after update, after delete, after undelete", "before and after for insert, update, delete", "insert, update, delete, undelete", "before save, after save, before delete, after delete"],
    correct: 0,
    explanation: 'The seven trigger events are: before insert, before update, before delete, after insert, after update, after delete, and after undelete.'
  },
  {
    id: 309,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the purpose of the addError() method in triggers?',
    options: ["To throw a fatal error that rolls back the operation", "To log an error message", "To skip the current record", "To continue processing"],
    correct: 0,
    explanation: 'addError() throws a fatal error that displays the message in the UI and rolls back the entire operation.'
  },
  {
    id: 310,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the Trigger.operationType context variable?',
    options: ["Returns the System.TriggerOperation enum for the current event", "Returns the trigger name", "Returns the object type", "Returns the number of records"],
    correct: 0,
    explanation: 'Trigger.operationType returns the System.TriggerOperation enum, which can be used in switch statements to handle different events.'
  },
  {
    id: 311,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'What does the start() method return in Batch Apex?',
    options: ["A Database.QueryLocator or an Iterable", "A list of records", "A single record", "Nothing (void)"],
    correct: 0,
    explanation: 'The start() method returns either a Database.QueryLocator object or an Iterable for processing records.'
  },
  {
    id: 312,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'What is the advantage of using Database.QueryLocator in Batch Apex?',
    options: ["Bypasses the governor limit for SOQL records (up to 50 million)", "Makes the batch run faster", "Reduces memory usage", "Enables parallel processing"],
    correct: 0,
    explanation: 'With Database.QueryLocator, the governor limit for SOQL records is bypassed, allowing up to 50 million records to be processed.'
  },
  {
    id: 313,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'What happens if one batch fails in Batch Apex?',
    options: ["Other successful batch transactions are not rolled back", "All batches are rolled back", "The entire job fails", "The failed batch is retried"],
    correct: 0,
    explanation: 'If one batch fails, other successful batch transactions are not rolled back, providing fault isolation.'
  },
  {
    id: 314,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'What is the maximum number of jobs that can be added to the queue with System.enqueueJob?',
    options: ["50", "100", "200", "Unlimited"],
    correct: 0,
    explanation: 'Up to 50 jobs can be added to the queue with System.enqueueJob in a single transaction.'
  },
  {
    id: 315,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'What is job chaining in Queueable Apex?',
    options: ["Submitting a second job from within the execute() method", "Running multiple jobs simultaneously", "Linking jobs to a schedule", "Connecting jobs to external systems"],
    correct: 0,
    explanation: 'Job chaining is submitting a second job from within the execute() method of a Queueable job for sequential processing.'
  },
  {
    id: 316,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'What interface must a class implement to be schedulable?',
    options: ["Schedulable", "Scheduleable", "Cronable", "Timeable"],
    correct: 0,
    explanation: 'A class must implement the Schedulable interface and its required execute() method to be scheduled.'
  },
  {
    id: 317,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'What is the workaround for making callouts from scheduled Apex?',
    options: ["Use @Future(callout=true) from scheduled Apex, or call a batch job", "Direct callouts work fine", "Use Queueable Apex instead", "Callouts are not possible"],
    correct: 0,
    explanation: 'Synchronous callouts are not supported from scheduled Apex. Use @Future(callout=true) or execute a batch job that supports callouts.'
  },
  {
    id: 318,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What is the Apex Flex Queue?',
    options: ["Holds up to 100 batch jobs in holding status", "A queue for future methods", "A queue for scheduled jobs", "A queue for Queueable jobs"],
    correct: 0,
    explanation: 'The Apex Flex Queue holds up to 100 batch jobs in holding status, processing them first-in, first-out.'
  },
  {
    id: 319,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'How many batch jobs can process simultaneously per org?',
    options: ["5", "10", "50", "100"],
    correct: 0,
    explanation: 'Up to 5 queued or active batch jobs can process simultaneously per org.'
  },
  {
    id: 320,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What are the three main parts of a CLI command structure?',
    options: ["Command, Flags/Options, Arguments", "Action, Parameters, Output", "Input, Process, Output", "Command, Subcommand, Parameter"],
    correct: 0,
    explanation: 'The three main parts are: Command/Utility (what action), Flags/Options (identified by hyphens), and Arguments (what to process).'
  },
  {
    id: 321,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is the difference between flags and switches in CLI?',
    options: ["Flags require values; switches don't require arguments", "They are identical", "Switches are faster", "Flags are for Windows only"],
    correct: 0,
    explanation: 'Flags require values (e.g., -n ProjectName), while switches don\'t require arguments (e.g., -d for set-default).'
  },
  {
    id: 322,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What command validates a deployment without committing?',
    options: ["sf project deploy validate", "sf project deploy start", "sf project deploy check", "sf project deploy test"],
    correct: 0,
    explanation: 'sf project deploy validate verifies test results without committing the deployment.'
  },
  {
    id: 323,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What is a destructive changes manifest?',
    options: ["A file that specifies components to delete during deployment", "A file that deletes the entire org", "A backup file", "A rollback file"],
    correct: 0,
    explanation: 'A destructive changes manifest specifies metadata components to delete during deployment.'
  },
  {
    id: 324,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What is the time window for Quick Deploy after a successful validation?',
    options: ["10 days", "24 hours", "7 days", "30 days"],
    correct: 0,
    explanation: 'Quick Deploy can use a job ID from a successful validation within a 10-day window.'
  },
  {
    id: 325,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Why should you lock image dimensions in LWC?',
    options: ["To avoid reflows and improve performance", "To make images load faster", "To reduce file size", "To enable lazy loading"],
    correct: 0,
    explanation: 'Locking image dimensions avoids reflows, which improves rendering performance.'
  },
  {
    id: 326,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What is the recommended approach for third-party JavaScript libraries in LWC?',
    options: ["Upload as static resource and use loadScript/loadStyle", "Include directly in HTML", "Use npm install", "Import from CDN"],
    correct: 0,
    explanation: 'Third-party libraries must be uploaded as static resources and loaded using loadScript/loadStyle from @salesforce/resourceUrl.'
  },
  {
    id: 327,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What is the difference between Aura and LWC data binding?',
    options: ["Aura has two-way binding; LWC has one-way binding only", "They are identical", "LWC has two-way binding; Aura has one-way", "Neither has data binding"],
    correct: 0,
    explanation: 'Aura supports two-way data binding, while LWC uses one-way data binding only (child fires events to modify owner data).'
  },
  {
    id: 328,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'Which of the following is NOT a characteristic of Apex?',
    options: ["Client-side execution", "Strongly typed", "Multitenant-aware", "Integrated with the database"],
    correct: 0,
    explanation: 'Apex is server-side, not client-side. It is strongly typed, multitenant-aware, and integrated with the database.'
  },
  {
    id: 329,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is Anonymous Apex used for?',
    options: ["Running code on the fly for testing via Developer Console", "Creating permanent classes", "Deploying to production", "Writing triggers"],
    correct: 0,
    explanation: 'Anonymous Apex is used for running code on the fly for testing via the Developer Console\'s Execute Anonymous window.'
  },
  {
    id: 330,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is the syntax for declaring a List in Apex?',
    options: ["List<String> myList = new List<String>();", "Array<String> myList = new Array<String>();", "String[] myList = new String[]();", "ArrayList<String> myList = new ArrayList<String>();"],
    correct: 0,
    explanation: 'The syntax for declaring a List in Apex is: List<String> myList = new List<String>(); (or String[] syntax).'
  },
  {
    id: 331,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What are the three types of collections in Apex?',
    options: ["Lists, Maps, and Sets", "Arrays, Objects, and Lists", "Vectors, Hashes, and Queues", "Collections, Arrays, and Dictionaries"],
    correct: 0,
    explanation: 'The three types of collections in Apex are: Lists (ordered), Maps (key-value pairs), and Sets (unique values).'
  },
  {
    id: 332,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which sforce.one function navigates to a specific record?',
    options: ["navigateToSObject(recordId)", "navigateToURL(url)", "navigateToList(listViewId)", "createRecord(entityName)"],
    correct: 0,
    explanation: 'sforce.one.navigateToSObject(recordId) navigates to a specific record in Lightning Experience.'
  },
  {
    id: 333,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which sforce.one function opens the record creation page?',
    options: ["createRecord(entityName)", "editRecord(recordId)", "navigateToSObject(recordId)", "navigateToURL(url)"],
    correct: 0,
    explanation: 'sforce.one.createRecord(entityName) opens the record creation page in Lightning Experience.'
  },
  {
    id: 334,
    chapter: 'userInterface',
    topic: 'PD1-407',
    question: 'What resources are included in an Aura component bundle?',
    options: ["Component, Controller, Helper, Style, Design, Documentation, Renderer", "Only Component and Controller", "Component, CSS, and JavaScript", "HTML, CSS, and JavaScript"],
    correct: 0,
    explanation: 'An Aura component bundle includes: Component (.cmp), Controller (.js), Helper (.js), Style (.css), Design (.design), Documentation, and Renderer.'
  },
  {
    id: 335,
    chapter: 'userInterface',
    topic: 'PD1-407',
    question: 'What is the purpose of the Design resource in an Aura component?',
    options: ["Exposes attributes to Lightning App Builder", "Defines the component's visual design", "Creates documentation", "Handles events"],
    correct: 0,
    explanation: 'The Design resource exposes component attributes to Lightning App Builder for configuration.'
  },
  {
    id: 336,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'When is connectedCallback() called in LWC?',
    options: ["When the component is inserted into the DOM", "When the component is removed from the DOM", "When the component is rendered", "When the component is created"],
    correct: 0,
    explanation: 'connectedCallback() is called when the component is inserted into the DOM, similar to Aura\'s init event.'
  },
  {
    id: 337,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'When should you use disconnectedCallback()?',
    options: ["To clean up resources when the component is removed from the DOM", "To initialize the component", "To handle errors", "To render the component"],
    correct: 0,
    explanation: 'disconnectedCallback() is used to clean up resources (like event listeners) when the component is removed from the DOM.'
  },
  {
    id: 338,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What does WITH SECURITY_ENFORCED do in a SOQL query?',
    options: ["Validates field- and object-level security automatically", "Enables encryption", "Forces user mode", "Bypasses sharing rules"],
    correct: 0,
    explanation: 'WITH SECURITY_ENFORCED validates field- and object-level security in SOQL queries automatically.'
  },
  {
    id: 339,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What API version is required for WITH SECURITY_ENFORCED?',
    options: ["48.0+", "40.0+", "50.0+", "45.0+"],
    correct: 0,
    explanation: 'WITH SECURITY_ENFORCED requires API version 48.0 or higher.'
  },
  {
    id: 340,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What does the isDeleteable() method check?',
    options: ["Delete access on the object (no field check needed)", "Delete access on each field", "Read access on the object", "Create access on the object"],
    correct: 0,
    explanation: 'isDeleteable() checks delete access on the object. No field-level check is needed since you delete entire records.'
  },
  {
    id: 341,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'When is Trigger.newMap available?',
    options: ["Before update, after insert, after update, after undelete", "All trigger events", "Only before insert", "Only after delete"],
    correct: 0,
    explanation: 'Trigger.newMap is available in: before update, after insert, after update, and after undelete.'
  },
  {
    id: 342,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'When is Trigger.oldMap available?',
    options: ["Update and delete triggers", "All trigger events", "Only insert triggers", "Only undelete triggers"],
    correct: 0,
    explanation: 'Trigger.oldMap is available in update and delete triggers.'
  },
  {
    id: 343,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'Can you perform DML on Trigger.new in a before trigger?',
    options: ["No, performing DML on Trigger.new in a before trigger causes an error", "Yes, it's the recommended approach", "Only for insert triggers", "Only for update triggers"],
    correct: 0,
    explanation: 'Performing DML on Trigger.new records in a before trigger causes an error. Records are saved automatically after the trigger finishes.'
  },
  {
    id: 344,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the recommended pattern for handling multiple trigger events?',
    options: ["Use a switch statement on Trigger.operationType", "Use if-else statements", "Create separate triggers for each event", "Use a single trigger without a handler"],
    correct: 0,
    explanation: 'Using a switch statement on Trigger.operationType is the recommended pattern for handling multiple trigger events.'
  },
  {
    id: 345,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'How should triggers handle callouts to external services?',
    options: ["Use @future(callout=true) for asynchronous callouts", "Make synchronous callouts directly", "Use Queueable Apex", "Callouts are not allowed in triggers"],
    correct: 0,
    explanation: 'External web service calls from triggers must be asynchronous. Use @future(callout=true) annotation.'
  },
  {
    id: 346,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the governor limit for SOQL queries in synchronous Apex?',
    options: ["100", "50", "200", "Unlimited"],
    correct: 0,
    explanation: 'The governor limit for SOQL queries in synchronous Apex is 100 (200 for asynchronous).'
  },
  {
    id: 347,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the governor limit for DML statements per transaction?',
    options: ["150", "100", "200", "Unlimited"],
    correct: 0,
    explanation: 'The governor limit for DML statements per transaction is 150.'
  },
  {
    id: 348,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the recommended approach for querying related records in triggers?',
    options: ["Use subqueries (inner queries) or IN clause with Trigger.new binding", "Query inside the for loop", "Use SOSL instead", "Query each record individually"],
    correct: 0,
    explanation: 'Use subqueries or IN clause with Trigger.new binding to efficiently query related records without hitting governor limits.'
  },
  {
    id: 349,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the AddRelatedRecord trigger pattern?',
    options: ["A pattern that creates child records when parent records are inserted or updated", "A pattern that deletes related records", "A pattern that updates related records", "A pattern that queries related records"],
    correct: 0,
    explanation: 'The AddRelatedRecord pattern creates child records (like Opportunities) when parent records (like Accounts) are inserted or updated.'
  },
  {
    id: 350,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the best practice for adding related records in a trigger?',
    options: ["Query related child records using SOQL with subquery, build a list, then insert at the end", "Insert records one at a time inside the loop", "Use DML inside the for loop", "Query each record individually"],
    correct: 0,
    explanation: 'The bulkified pattern is: query related child records using SOQL with subquery, build a list of new records, then insert at the end.'
  },
  {
    id: 351,
    chapter: 'processAutomation',
    topic: 'PD1-310',
    question: 'What is a DmlException?',
    options: ["An exception thrown when a DML operation fails", "A database connection error", "A syntax error", "A governor limit error"],
    correct: 0,
    explanation: 'A DmlException is thrown when a DML operation fails, such as when a required field is missing or a validation rule fails.'
  },
  {
    id: 352,
    chapter: 'processAutomation',
    topic: 'PD1-310',
    question: 'What is the purpose of try-catch blocks in Apex?',
    options: ["To handle exceptions gracefully and prevent unhandled errors", "To improve performance", "To enable debugging", "To create test methods"],
    correct: 0,
    explanation: 'Try-catch blocks handle exceptions gracefully, allowing the code to respond to errors without crashing.'
  },
  {
    id: 353,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What should tests cover besides positive cases?',
    options: ["Negative cases, bulk processing, and single-record processing", "Only positive cases", "Only edge cases", "Only bulk processing"],
    correct: 0,
    explanation: 'Tests should cover: positive cases, negative cases, bulk processing, and single-record processing.'
  },
  {
    id: 354,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is a TestDataFactory?',
    options: ["A public static class with reusable methods for creating test data", "A built-in Salesforce class", "A third-party library", "A testing framework"],
    correct: 0,
    explanation: 'A TestDataFactory is a recommended pattern - a public static class annotated with @IsTest that centralizes test-data creation for reuse.'
  },
  {
    id: 355,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What does Test.setFixedSearchResults() do?',
    options: ["Sets fixed search results for SOSL queries in tests", "Sets fixed SOQL results", "Enables search indexing", "Creates test data"],
    correct: 0,
    explanation: 'Test.setFixedSearchResults() sets fixed search results for SOSL queries in tests, since SOSL returns empty results by default in test context.'
  },
  {
    id: 356,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What can you do in the Developer Console?',
    options: ["Create/edit Apex classes, triggers, Aura components, VF pages; run queries; analyze logs", "Only write Apex code", "Only run queries", "Only debug"],
    correct: 0,
    explanation: 'Developer Console can: create/edit Apex, triggers, Aura, VF; run SOQL/SOSL; analyze debug logs; set checkpoints; test code.'
  },
  {
    id: 357,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What are the Log Inspector panels?',
    options: ["Stack Tree, Execution Stack, Execution Log, Source, Source List, Variables, Execution Overview", "Only Log and Variables", "Only Stack Tree and Source", "Only Execution Log"],
    correct: 0,
    explanation: 'The Log Inspector has: Stack Tree, Execution Stack, Execution Log, Source, Source List, Variables, and Execution Overview panels.'
  },
  {
    id: 358,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What are the log levels from least to most detail?',
    options: ["NONE, ERROR, WARN, INFO, DEBUG, FINE, FINER, FINEST", "LOW, MEDIUM, HIGH", "BASIC, DETAILED, VERBOSE", "1, 2, 3, 4, 5"],
    correct: 0,
    explanation: 'Log levels from least to most detail: NONE, ERROR, WARN, INFO, DEBUG, FINE, FINER, FINEST.'
  },
  {
    id: 359,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What is the Perspective Manager in Developer Console?',
    options: ["A tool for managing predefined and custom Debug and Analysis perspectives", "A code formatting tool", "A query builder", "A deployment tool"],
    correct: 0,
    explanation: 'The Perspective Manager manages predefined Debug and Analysis perspectives and allows creating custom perspectives.'
  },
  {
    id: 360,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is the successor to the Force.com IDE plug-in?',
    options: ["Salesforce Extensions for VS Code", "Developer Console", "Salesforce CLI", "Eclipse IDE"],
    correct: 0,
    explanation: 'Salesforce Extensions for VS Code is the successor to the Force.com IDE plug-in.'
  },
  {
    id: 361,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is npm used for in Salesforce development?',
    options: ["Installing packages for LWC development", "Deploying to production", "Creating scratch orgs", "Writing Apex code"],
    correct: 0,
    explanation: 'npm is used to install packages quickly, particularly for LWC development.'
  },
  {
    id: 362,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is the Salesforce CLI command to create a new SFDX project?',
    options: ["sf project generate", "sf org create", "sf project create", "sf new project"],
    correct: 0,
    explanation: 'The command sf project generate creates a new SFDX project with the -n flag for the project name.'
  },
  {
    id: 363,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is a change list in the org development model?',
    options: ["A list tracking individual developer changes", "A deployment manifest", "A test suite", "A configuration file"],
    correct: 0,
    explanation: 'A change list tracks individual developer changes that need to be committed to source control.'
  },
  {
    id: 364,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is a deployment run list?',
    options: ["Manual pre/post-deployment steps documented for deployment", "A list of test classes", "A list of metadata components", "A list of orgs to deploy to"],
    correct: 0,
    explanation: 'A deployment run list documents manual pre/post-deployment steps that need to be executed during deployment.'
  },
  {
    id: 365,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What does the \'global\' access modifier do in Apex?',
    options: ["Makes a variable or method available to all classes in the organization", "Makes it private to the class", "Makes it public within the namespace", "Makes it protected"],
    correct: 0,
    explanation: 'The \'global\' access modifier makes a variable or method available to all classes in the organization, including managed packages.'
  },
  {
    id: 366,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is the purpose of the \'static\' keyword in Apex?',
    options: ["Makes a variable or method belong to the class rather than an instance", "Makes a variable constant", "Makes a variable private", "Makes a variable global"],
    correct: 0,
    explanation: 'The \'static\' keyword makes a variable or method belong to the class itself rather than to any specific instance.'
  },
  {
    id: 367,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is the purpose of the \'final\' keyword in Apex?',
    options: ["Makes a variable a constant that cannot be changed after initialization", "Makes a variable static", "Makes a variable global", "Makes a variable private"],
    correct: 0,
    explanation: 'The \'final\' keyword makes a variable a constant that cannot be changed after initialization.'
  },
  {
    id: 368,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'Which of the following is NOT a primitive data type in Apex?',
    options: ["Array", "Integer", "String", "Boolean"],
    correct: 0,
    explanation: 'Array is not a primitive data type. Apex primitives include: Integer, Double, Long, Date, Datetime, String, ID, and Boolean.'
  },
  {
    id: 369,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is an sObject in Apex?',
    options: ["A data type that represents a Salesforce record", "A string object", "A system object", "A static object"],
    correct: 0,
    explanation: 'An sObject is a data type that represents a Salesforce record, either generic or specific to an object type.'
  },
  {
    id: 370,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'How do you access fields on a generic sObject?',
    options: ["Using put() and get() methods", "Using dot notation", "Using square brackets", "Using parentheses"],
    correct: 0,
    explanation: 'Generic sObject fields are accessible only through put() and get() methods, not dot notation.'
  },
  {
    id: 371,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is the purpose of Apex classes?',
    options: ["Code reuse and encapsulation of business logic", "Only for creating triggers", "Only for Visualforce controllers", "Only for API calls"],
    correct: 0,
    explanation: 'Apex classes provide code reuse and encapsulation of business logic through OOP principles.'
  },
  {
    id: 372,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is the difference between public and private methods in Apex?',
    options: ["Public methods are accessible outside the class; private methods are not", "They are identical", "Private methods are faster", "Public methods are for triggers only"],
    correct: 0,
    explanation: 'Public methods are accessible from other classes; private methods are only accessible within the defining class.'
  },
  {
    id: 373,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'How do you run Anonymous Apex?',
    options: ["Through the Developer Console's Execute Anonymous window", "By creating a class", "Through the API", "By writing a trigger"],
    correct: 0,
    explanation: 'Anonymous Apex is run through the Developer Console\'s Debug > Open Execute Anonymous window.'
  },
  {
    id: 374,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'Does Anonymous Apex affect the org?',
    options: ["Yes, all code affects the org", "No, it's sandboxed", "Only for reads", "Only for custom objects"],
    correct: 0,
    explanation: 'All Anonymous Apex code affects the org - it\'s not sandboxed. Be careful with DML operations.'
  },
  {
    id: 375,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What is System.debug() used for?',
    options: ["Writing custom messages to debug logs", "Pausing code execution", "Setting breakpoints", "Creating test data"],
    correct: 0,
    explanation: 'System.debug() writes custom messages to debug logs for debugging purposes.'
  },
  {
    id: 376,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Where can you view debug logs?',
    options: ["In the Developer Console Logs tab", "Only in VS Code", "Only in the API", "Only in Setup"],
    correct: 0,
    explanation: 'Debug logs can be viewed in the Developer Console Logs tab, with filtering and different perspectives.'
  },
  {
    id: 377,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'Which of the following IS a characteristic of Apex?',
    options: ["Case-insensitive", "Client-side execution", "Loosely typed", "No governor limits"],
    correct: 0,
    explanation: 'Apex is case-insensitive. It is server-side, strongly typed, and has governor limits.'
  },
  {
    id: 378,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What language is Apex based on?',
    options: ["Java idioms", "Python", "JavaScript", "C#"],
    correct: 0,
    explanation: 'Apex is based on Java idioms, making it familiar to Java developers.'
  },
  {
    id: 379,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What does API versioning do in Apex?',
    options: ["Controls which features and behaviors are available based on the version", "Makes code run faster", "Enables debugging", "Creates backups"],
    correct: 0,
    explanation: 'API versioning controls which features and behaviors are available, ensuring backward compatibility.'
  },
  {
    id: 380,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What are the key benefits of Apex unit tests?',
    options: ["Ensuring classes and triggers work as expected, providing regression tests, meeting code coverage requirements", "Only code coverage", "Only debugging", "Only performance testing"],
    correct: 0,
    explanation: 'Key benefits: ensuring code works as expected, providing regression test suites, and meeting code coverage requirements for deployment.'
  },
  {
    id: 381,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is the recommended visibility for test classes?',
    options: ["Private", "Public", "Global", "Protected"],
    correct: 0,
    explanation: 'Private visibility is recommended for test classes that are only used for unit testing.'
  },
  {
    id: 382,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Do @IsTest classes count toward the 6 MB Apex code storage limit?',
    options: ["No, they are excluded", "Yes, they count", "Only if they have errors", "Only in production"],
    correct: 0,
    explanation: '@IsTest classes don\'t count toward the 6 MB Apex code storage limit.'
  },
  {
    id: 383,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Do test methods send emails?',
    options: ["No, test methods don't send emails", "Yes, always", "Only with @seeAllData", "Only in production"],
    correct: 0,
    explanation: 'Test methods don\'t send emails, preventing accidental email delivery during testing.'
  },
  {
    id: 384,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Can test methods make callouts?',
    options: ["No, callouts must be mocked using HttpCalloutMock", "Yes, always", "Only with @seeAllData", "Only in sandbox"],
    correct: 0,
    explanation: 'Test methods can\'t make callouts. Use the HttpCalloutMock interface to mock callouts.'
  },
  {
    id: 385,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'How do you create a test suite?',
    options: ["Through Test > New Suite in Developer Console", "By writing code", "Through Setup", "Through the API"],
    correct: 0,
    explanation: 'Test suites are created through Test > New Suite in the Developer Console.'
  },
  {
    id: 386,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is the purpose of Database.DeleteResult in testing?',
    options: ["Contains information about a delete operation for assertions", "Deletes test data", "Creates test records", "Enables debugging"],
    correct: 0,
    explanation: 'Database.DeleteResult contains information about a delete operation, used for making assertions in tests.'
  },
  {
    id: 387,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is the recommended pattern for creating test data?',
    options: ["Use a TestDataFactory with reusable methods", "Hardcode test data in each test", "Use @seeAllData", "Query existing data"],
    correct: 0,
    explanation: 'The TestDataFactory pattern creates a public static class with reusable methods for creating test data.'
  },
  {
    id: 388,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Why is bulk DML efficient in test data creation?',
    options: ["All records in a single insert statement counts as one DML", "It's not efficient", "It reduces memory usage", "It enables parallel processing"],
    correct: 0,
    explanation: 'Bulk DML is efficient because all records in a single insert statement count as one DML statement.'
  },
  {
    id: 389,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What does Test.startTest() do in trigger testing?',
    options: ["Resets governor limits to isolate data setup from test execution", "Starts the trigger", "Creates test data", "Enables debugging"],
    correct: 0,
    explanation: 'Test.startTest() resets governor limits, isolating data setup limit usage from test execution.'
  },
  {
    id: 390,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is the purpose of a test utility class?',
    options: ["Centralizes test-data creation for reuse across multiple test methods", "Runs tests automatically", "Generates test reports", "Debugs test failures"],
    correct: 0,
    explanation: 'A test utility class centralizes test-data creation for reuse across multiple test methods.'
  },
  {
    id: 391,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What happens in bulk DML with partial success when addError() is used?',
    options: ["Bad records are set aside; remaining records are partially saved", "All records fail", "The error is ignored", "The trigger stops"],
    correct: 0,
    explanation: 'In bulk DML with partial success via API, bad records are set aside and remaining records are partially saved.'
  },
  {
    id: 392,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What happens in Apex-initiated DML when an error occurs?',
    options: ["Any error rolls back the entire operation", "Only the failed record is rolled back", "The error is ignored", "The trigger continues"],
    correct: 0,
    explanation: 'In Apex-initiated DML, any error rolls back the entire operation, unlike API partial success.'
  },
  {
    id: 393,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What does Trigger.size return?',
    options: ["The number of records in the current batch", "The total number of records", "The trigger name", "The object type"],
    correct: 0,
    explanation: 'Trigger.size returns the number of records in the current batch (batches of 200+).'
  },
  {
    id: 394,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What does Trigger.isExecuting return?',
    options: ["True if the context is a trigger", "True if the trigger is running", "The trigger name", "The execution time"],
    correct: 0,
    explanation: 'Trigger.isExecuting returns true if the current context is a trigger execution.'
  },
  {
    id: 395,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the difference between before and after triggers?',
    options: ["Before triggers modify values before save; after triggers access system-set values", "They are identical", "Before triggers are faster", "After triggers are for deletes only"],
    correct: 0,
    explanation: 'Before triggers modify or validate record values before database save; after triggers access system-set field values (Id, LastModifiedDate).'
  },
  {
    id: 396,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'Are records in after triggers read-only?',
    options: ["Yes, records are read-only in after triggers", "No, they can be modified", "Only for insert triggers", "Only for update triggers"],
    correct: 0,
    explanation: 'Records in after triggers are read-only. Use before triggers to modify record values.'
  },
  {
    id: 397,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the recommended approach for trigger logic?',
    options: ["Delegate to a handler class for code reuse and OOP design", "Put all logic in the trigger", "Use multiple triggers per object", "Use only before triggers"],
    correct: 0,
    explanation: 'The recommended approach is to delegate trigger logic to a handler class for code reuse and OOP design.'
  },
  {
    id: 398,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'Why should you avoid SOQL queries inside for loops?',
    options: ["It can exceed the governor limit of 100 SOQL queries per transaction", "It makes code slower", "It's not a best practice", "It causes syntax errors"],
    correct: 0,
    explanation: 'SOQL queries inside for loops can quickly exceed the governor limit of 100 SOQL queries per transaction.'
  },
  {
    id: 399,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'Why should you avoid DML statements inside for loops?',
    options: ["It can exceed the governor limit of 150 DML statements per transaction", "It makes code slower", "It's not a best practice", "It causes syntax errors"],
    correct: 0,
    explanation: 'DML statements inside for loops can quickly exceed the governor limit of 150 DML statements per transaction.'
  },
  {
    id: 400,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the bulk design pattern for adding related records?',
    options: ["Query with subquery, build list, single DML insert at end", "Insert one at a time in loop", "Use DML in for loop", "Query each record individually"],
    correct: 0,
    explanation: 'The bulk design pattern: query with subquery, build list of records, then perform a single bulk DML insert at the end.'
  }
];

export const examConfig = {
  fullExam: {
    name: 'Full Practice Exam',
    description: '60 questions following official PD1 exam format and marking ratios',
    timeLimit: 105,
    passingScore: 68,
    questions: 'all'
  },
  devFundamentals: {
    name: 'Developer Fundamentals (27%)',
    description: 'Multi-tenant architecture, MVC, data model, relationships, and data import/export',
    timeLimit: 25,
    passingScore: 68,
    questions: 'devFundamentals'
  },
  processAutomation: {
    name: 'Process Automation and Logic (28%)',
    description: 'Declarative automation, Apex programming, SOQL, DML, triggers, and governor limits',
    timeLimit: 35,
    passingScore: 68,
    questions: 'processAutomation'
  },
  userInterface: {
    name: 'User Interface (25%)',
    description: 'Visualforce, Lightning Components, LWC, events, and UI security',
    timeLimit: 30,
    passingScore: 68,
    questions: 'userInterface'
  },
  testingDebugging: {
    name: 'Testing, Debugging, and Deployment (20%)',
    description: 'Test classes, debugging, developer tools, and deployment processes',
    timeLimit: 20,
    passingScore: 68,
    questions: 'testingDebugging'
  }
};
