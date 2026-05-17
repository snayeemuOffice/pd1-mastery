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
