// Comprehensive PD1 Exam Questions organized by chapter
// Based on Focus on Force study materials
// Correct answer is always at index 0 - shuffled at display time

export const examQuestions = [
  {
    id: 1,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'Which component of the MVC (Model-View-Controller) architecture do Salesforce Objects represent?',
    options: [
      'Model',
      'Controller',
      'Neither - Objects are separate from MVC',
      'View'
    ],
    correct: 0,
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
      'Resources are shared among multiple customers',
      'There is no customization allowed',
      'Each customer has their own dedicated server',
      'Data is stored in a single database for all customers'
    ],
    correct: 0,
    explanation: 'In a multi-tenant architecture, resources (servers, storage, etc.) are shared among multiple customers (tenants). Salesforce uses this model to efficiently serve many organizations from shared infrastructure while maintaining data isolation and security.'
  },
  {
    id: 4,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'What namespace is used by Lightning components that exist in two versions (Aura component and Lightning web component)?',
    options: [
      'c:',
      'lightning:',
      'force:',
      'ui:'
    ],
    correct: 0,
    explanation: 'The "c:" namespace is used for custom Lightning components. Both Aura and Lightning Web Components use the "c" namespace for custom components in a Salesforce org.'
  },
  {
    id: 5,
    chapter: 'devFundamentals',
    topic: 'PD1-602',
    question: 'What can be created to update a custom field on an unrelated custom object whenever a new account is created in Salesforce?',
    options: [
      'A record trigger flow',
      'A Lightning component',
      'A formula field',
      'A Visualforce page'
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
      'The label',
      'The data type',
      'The field length',
      'The API name'
    ],
    correct: 0,
    explanation: 'The label of an object or field can be changed without affecting Apex code. Apex code references objects and fields by their API names, which cannot be changed once created. Changing labels is purely a UI/display concern.'
  },
  {
    id: 7,
    chapter: 'devFundamentals',
    topic: 'PD1-602',
    question: 'What is the difference between a lookup and master-detail relationship?',
    options: [
      'In master-detail, the detail record is deleted when the master is deleted; in lookup, the child record remains',
      'Lookup relationships are always required; master-detail are optional',
      'There is no difference - they are interchangeable',
      'Lookup relationships support roll-up summary fields; master-detail does not'
    ],
    correct: 0,
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
      'A warning that the field is referenced in code and the data type cannot be changed',
      'The field is automatically deleted',
      'The change is automatically applied',
      'An error message with no option to proceed'
    ],
    correct: 0,
    explanation: 'When trying to change the data type of a field referenced in Apex code, Salesforce displays a warning that the field is referenced in code. The data type change is not allowed because it could break the existing Apex code that depends on that field type.'
  },
  {
    id: 10,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'Which relationship can be used on the User object to associate one user with another?',
    options: [
      'Lookup relationship to User',
      'Junction object',
      'Master-detail relationship',
      'Hierarchical relationship'
    ],
    correct: 0,
    explanation: 'A lookup relationship to the User object can be used to associate one user with another. For example, a "Manager" field on the User object is a lookup to another User record.'
  },
  {
    id: 11,
    chapter: 'devFundamentals',
    topic: 'PD1-604',
    question: 'Which tool should be used to import large volumes of data into Salesforce?',
    options: [
      'Data Loader',
      'Data Import Wizard',
      'Workbench',
      'Data.com'
    ],
    correct: 0,
    explanation: 'Data Loader is the recommended tool for importing large volumes of data into Salesforce. It can handle up to 5 million records and supports both import and export operations. The Data Import Wizard is better for smaller volumes (up to 50,000 records).'
  },
  {
    id: 12,
    chapter: 'devFundamentals',
    topic: 'PD1-604',
    question: 'What is the maximum number of records that the Data Import Wizard can process at once?',
    options: [
      '50,000',
      '10,000',
      '500,000',
      '5,000'
    ],
    correct: 0,
    explanation: 'The Data Import Wizard can process up to 50,000 records at a time. For larger data volumes, Data Loader should be used instead, which can handle up to 5 million records.'
  },
  {
    id: 13,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'Which declarative automation feature can be used to send an outbound message without writing code?',
    options: [
      'Workflow Rules',
      'Approval Processes',
      'All of the above',
      'Process Builder'
    ],
    correct: 0,
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
      'Approval Process',
      'Workflow Rule'
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
      'global',
      'protected',
      'private',
      'public'
    ],
    correct: 0,
    explanation: 'The "global" access modifier makes a variable or method available to all other classes in the Salesforce organization, including those in managed packages. "public" is limited to the current namespace, while "private" restricts access to the defining class only.'
  },
  {
    id: 16,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is the correct way to declare a constant in Apex?',
    options: [
      'Both A and C are correct',
      'static final Integer MAX = 10;',
      'const Integer MAX = 10;',
      'final static Integer MAX = 10;'
    ],
    correct: 0,
    explanation: 'Both "static final Integer MAX = 10;" and "final static Integer MAX = 10;" are valid ways to declare a constant in Apex. The "static" keyword makes it a class-level constant, and "final" prevents reassignment. Apex does not use the "const" keyword.'
  },
  {
    id: 17,
    chapter: 'processAutomation',
    topic: 'PD1-303',
    question: 'Which loop type in Apex will always execute at least once?',
    options: [
      'do-while loop',
      'for loop',
      'for-each loop',
      'while loop'
    ],
    correct: 0,
    explanation: 'The do-while loop always executes at least once because the condition is checked after the loop body executes. The other loop types check the condition before executing, so they may not execute at all if the condition is initially false.'
  },
  {
    id: 18,
    chapter: 'processAutomation',
    topic: 'PD1-303',
    question: 'What happens when a "break" statement is encountered inside a loop?',
    options: [
      'The loop terminates and execution continues after the loop',
      'The loop continues to the next iteration',
      'An exception is thrown',
      'The entire program terminates'
    ],
    correct: 0,
    explanation: 'When a "break" statement is encountered inside a loop, the loop immediately terminates and execution continues with the first statement after the loop. This is useful for exiting a loop early when a certain condition is met.'
  },
  {
    id: 19,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'Which SOQL query is syntactically correct?',
    options: [
      'SELECT Id, Name FROM Account WHERE Industry = \'Technology\'',
      'SELECT Id, Name WHERE Account.Industry = \'Technology\'',
      'GET Id, Name FROM Account WHERE Industry = \'Technology\'',
      'SELECT Id, Name FROM Account WHERE Industry = Technology'
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
      'Both A and C are correct',
      'insert records;',
      'insertList records;',
      'Database.insert(records);'
    ],
    correct: 0,
    explanation: 'Both "insert records;" (DML statement) and "Database.insert(records);" (Database method) can be used to insert multiple records. The Database method provides additional options like partial success handling with the allOrNone parameter.'
  },
  {
    id: 21,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What is the difference between SOQL and SOSL?',
    options: [
      'SOQL searches within specific objects; SOSL searches across multiple objects using text search',
      'SOQL searches across multiple objects; SOSL searches within a single object',
      'They are identical in functionality',
      'SOQL is for metadata; SOSL is for data'
    ],
    correct: 0,
    explanation: 'SOQL (Salesforce Object Query Language) queries specific objects and returns structured records. SOSL (Salesforce Object Search Language) performs text searches across multiple objects and returns results grouped by object type. SOSL uses full-text search indexes.'
  },
  {
    id: 22,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the best practice for bulkifying Apex triggers?',
    options: [
      'Collect all record IDs first, then perform one SOQL query outside the loop',
      'Use Database.query() for each record',
      'Process records one at a time',
      'Use SOQL queries inside for loops'
    ],
    correct: 0,
    explanation: 'The best practice for bulkifying triggers is to collect all needed record IDs first (from Trigger.new), then perform a single SOQL query outside any loop to retrieve all related data. This avoids hitting governor limits for SOQL queries (100 per transaction).'
  },
  {
    id: 23,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'Which trigger context variable returns a list of sObjects that can be modified in a before trigger?',
    options: [
      'Trigger.new',
      'Trigger.newMap',
      'Trigger.old',
      'Trigger.oldMap'
    ],
    correct: 0,
    explanation: 'Trigger.new returns a list of sObjects that can be modified in before triggers. Changes to field values in Trigger.new during a before trigger are automatically saved to the database. Trigger.old contains the old versions and cannot be modified.'
  },
  {
    id: 24,
    chapter: 'processAutomation',
    topic: 'PD1-308',
    question: 'What is the governor limit for total SOQL queries in a single Apex transaction?',
    options: [
      '100',
      '150',
      '200',
      '50'
    ],
    correct: 0,
    explanation: 'The governor limit for total SOQL queries in a single Apex transaction is 100. This limit applies to the total number of SOQL queries executed synchronously and asynchronously within a single transaction.'
  },
  {
    id: 25,
    chapter: 'processAutomation',
    topic: 'PD1-308',
    question: 'What happens when a governor limit is exceeded in Apex?',
    options: [
      'An unhandled exception is thrown and all DML operations are rolled back',
      'Only the current operation fails',
      'The code continues with a warning',
      'The limit is automatically increased'
    ],
    correct: 0,
    explanation: 'When a governor limit is exceeded, an unhandled exception is thrown and all DML operations in the transaction are rolled back. Governor limits are hard limits and cannot be increased or bypassed - they ensure shared resources in the multi-tenant environment.'
  },
  {
    id: 26,
    chapter: 'processAutomation',
    topic: 'PD1-309',
    question: 'What is the correct order of execution when a record is saved in Salesforce?',
    options: [
      'Before triggers → Validation rules → After triggers → Assignment rules',
      'Assignment rules → Before triggers → Validation rules → After triggers',
      'Before triggers → Assignment rules → Validation rules → After triggers',
      'Validation rules → Before triggers → After triggers → Assignment rules'
    ],
    correct: 0,
    explanation: 'The correct save order of execution starts with before triggers, then validation rules, then after triggers, followed by assignment rules, auto-response rules, workflow rules, processes, flows, and escalation rules. Understanding this order is critical for avoiding recursion and unexpected behavior.'
  },
  {
    id: 27,
    chapter: 'processAutomation',
    topic: 'PD1-309',
    question: 'How can recursion be prevented in Apex triggers?',
    options: [
      'By using the "static" keyword on a Boolean variable to track execution',
      'By adding more governor limits',
      'By using the "final" keyword',
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
      'QueryException',
      'LimitException',
      'DmlException',
      'NullPointerException'
    ],
    correct: 0,
    explanation: 'A QueryException is thrown when a SOQL query that expects exactly one result (without the "list" keyword) returns no records or more than one record. This typically happens with queries like "Account a = [SELECT Id FROM Account LIMIT 1];" when no accounts exist.'
  },
  {
    id: 29,
    chapter: 'processAutomation',
    topic: 'PD1-310',
    question: 'How should exceptions be handled in Apex?',
    options: [
      'Catch specific exception types and handle them appropriately',
      'Always catch the generic Exception type',
      'Let all exceptions propagate to the user',
      'Ignore exceptions to avoid code complexity'
    ],
    correct: 0,
    explanation: 'Best practice is to catch specific exception types (like DmlException, QueryException, etc.) rather than the generic Exception type. This allows for targeted error handling and provides more meaningful error messages. Specific catches should come before general ones.'
  },
  {
    id: 30,
    chapter: 'processAutomation',
    topic: 'PD1-312',
    question: 'When should Apex be used instead of declarative automation?',
    options: [
      'For complex business logic that requires multiple conditional branches and integrations',
      'For all automation to ensure maximum control',
      'Only when declarative tools are unavailable',
      'For simple field updates'
    ],
    correct: 0,
    explanation: 'Apex should be used for complex business logic that goes beyond what declarative tools can handle, such as complex conditional logic, integrations with external systems, complex data transformations, or when strict error handling is required. Declarative tools should be preferred when they can meet the requirement.'
  },
  {
    id: 31,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which component can be used to display individual fields on a record in a Visualforce page?',
    options: [
      '<apex:outputField>',
      '<apex:inputField>',
      '<apex:pageBlockTable>',
      '<apex:detail>'
    ],
    correct: 0,
    explanation: 'The <apex:outputField> component displays individual field values on a record in a Visualforce page. It respects field-level security and displays the field in the appropriate format based on its data type. <apex:inputField> is used for editable fields.'
  },
  {
    id: 32,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which coarse-grained component can be used to display the detail page of an object in a Visualforce page?',
    options: [
      '<apex:detail>',
      '<apex:pageBlock>',
      '<apex:form>',
      '<apex:outputField>'
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
      'All of the above',
      '<apex:pageBlockTable>',
      '<apex:repeat>',
      '<apex:dataTable>'
    ],
    correct: 0,
    explanation: 'All three components can generate tables or repeated content in Visualforce. <apex:pageBlockTable> renders with Salesforce styling, <apex:dataTable> renders a standard HTML table, and <apex:repeat> provides custom markup for each iteration without any predefined structure.'
  },
  {
    id: 34,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What are the key benefits of the Lightning Component framework?',
    options: [
      'Component-based architecture, event-driven communication, and cross-device compatibility',
      'Only works in Lightning Experience',
      'Requires Visualforce knowledge to use',
      'Component-based architecture, event-driven communication, and server-side rendering only'
    ],
    correct: 0,
    explanation: 'The Lightning Component framework provides a component-based architecture for building reusable UI components, event-driven communication between components, and cross-device compatibility (works in Lightning Experience, mobile, and communities). It supports both client-side and server-side rendering.'
  },
  {
    id: 35,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What is the difference between an Aura component and a Lightning Web Component (LWC)?',
    options: [
      'Aura is proprietary; LWC is based on standard web technologies',
      'They are exactly the same',
      'LWC can only be used in mobile apps',
      'Aura uses JavaScript and LWC uses Java'
    ],
    correct: 0,
    explanation: 'Aura uses a proprietary framework with its own component model, while Lightning Web Components (LWC) is built on standard web technologies (ES6+, custom elements, shadow DOM). LWC is the modern approach recommended by Salesforce for new development.'
  },
  {
    id: 36,
    chapter: 'userInterface',
    topic: 'PD1-406',
    question: 'What is the best way to prevent SOQL injection in Visualforce?',
    options: [
      'Use bind variables in dynamic SOQL',
      'Disable user input',
      'Use string concatenation',
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
      'Private',
      'Controlled by Parent',
      'Public Read/Write',
      'Public Read Only'
    ],
    correct: 0,
    explanation: 'Setting an object\'s sharing model to "Private" ensures that users can only see records they own or that are explicitly shared with them through sharing rules, manual sharing, or Apex managed sharing. This provides the most restrictive access level.'
  },
  {
    id: 38,
    chapter: 'userInterface',
    topic: 'PD1-407',
    question: 'What is the purpose of the @AuraEnabled annotation in Apex?',
    options: [
      'To make an Apex method accessible from Lightning components',
      'To create a new Lightning component',
      'To enable Lightning Experience in an org',
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
      'Parent to child via properties; child to parent via events',
      'Parent to child only',
      'Data cannot flow between components',
      'Child to parent only'
    ],
    correct: 0,
    explanation: 'In LWC, data flows from parent to child through properties (decorated with @api). Child components communicate with parents by dispatching custom events. This one-way data flow makes the application predictable and easier to debug.'
  },
  {
    id: 40,
    chapter: 'userInterface',
    topic: 'PD1-408',
    question: 'Which event type should be used for communication between sibling components in LWC?',
    options: [
      'Lightning message service or a shared parent component',
      'Custom events',
      'Apex events',
      'DOM events'
    ],
    correct: 0,
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
      'To provide a way to work with Salesforce data without Apex code',
      'To deploy components to production',
      'To create database tables',
      'To manage user authentication'
    ],
    correct: 0,
    explanation: 'Lightning Data Service (LDS) allows LWC to create, read, update, and delete Salesforce records without writing Apex code. It provides built-in data caching, record sharing, and data synchronization across components that use the same record.'
  },
  {
    id: 43,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is the minimum code coverage required for deploying Apex to production?',
    options: [
      '75%',
      '100%',
      '80%',
      '50%'
    ],
    correct: 0,
    explanation: 'Salesforce requires a minimum of 75% cumulative code coverage across all Apex classes and triggers for deployment to production. However, the best practice is to aim for 100% coverage with meaningful test scenarios, not just line coverage.'
  },
  {
    id: 44,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Which annotation is used to define a test method in Apex?',
    options: [
      '@isTest',
      '@TestMethod',
      '@Test',
      '@TestCase'
    ],
    correct: 0,
    explanation: 'The @isTest annotation is used to define a test method in Apex. Test methods must be static, void, and annotated with @isTest. They are not counted against the organization\'s code limits and can access all data in the org when using @isTest(SeeAllData=true).'
  },
  {
    id: 45,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is the purpose of System.assertEquals() in Apex tests?',
    options: [
      'To verify that two values are equal',
      'To create test data',
      'To stop test execution',
      'To log test results'
    ],
    correct: 0,
    explanation: 'System.assertEquals() verifies that two values are equal. If they are not equal, the test fails. It is used to validate that code produces expected results. There is also System.assertNotEquals() and System.assert() for other validation scenarios.'
  },
  {
    id: 46,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is the purpose of Test.startTest() and Test.stopTest()?',
    options: [
      'To reset governor limits and isolate test logic',
      'To start and stop the test class',
      'To create and delete test data',
      'To enable logging during tests'
    ],
    correct: 0,
    explanation: 'Test.startTest() and Test.stopTest() reset governor limits and isolate the test logic. Code between these methods gets fresh governor limits. This is especially important for testing batch Apex and other asynchronous code, as Test.stopTest() forces all asynchronous processes to complete synchronously.'
  },
  {
    id: 47,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Which approach is best for creating test data in Apex tests?',
    options: [
      'Creating test data within the test class using @testSetup or data factory methods',
      'Using SeeAllData=true to access existing org data',
      'Using production data in sandbox',
      'Importing data before running tests'
    ],
    correct: 0,
    explanation: 'Best practice is to create test data within the test class using @testSetup methods or data factory methods. This makes tests self-contained, repeatable, and not dependent on org data. Using SeeAllData=true is discouraged because it makes tests brittle and environment-dependent.'
  },
  {
    id: 48,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What does the @testSetup annotation do?',
    options: [
      'Creates test data that is available to all test methods in the class',
      'Configures test coverage reporting',
      'Marks a method as a test method',
      'Sets up the test environment before deployment'
    ],
    correct: 0,
    explanation: 'The @testSetup annotation defines a method that creates test data available to all test methods in the class. This data is rolled back after each test method, ensuring test isolation. It is an efficient way to share common test data setup across multiple test methods.'
  },
  {
    id: 49,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Which tool should be used to view debug logs in Salesforce?',
    options: [
      'Both A and C',
      'Setup Audit Trail',
      'Developer Console',
      'Debug Log panel in Setup'
    ],
    correct: 0,
    explanation: 'Both the Developer Console and the Debug Log panel in Setup can be used to view debug logs. The Developer Console provides a more interactive experience with filtering and searching, while the Debug Log panel in Setup allows configuring which users generate logs.'
  },
  {
    id: 50,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What is the maximum size of a debug log in Salesforce?',
    options: [
      '20 MB',
      '50 MB',
      '1 MB',
      '5 MB'
    ],
    correct: 0,
    explanation: 'The maximum size of a debug log is 20 MB. If the log exceeds this size, it will be truncated. The log levels and categories can be adjusted to reduce log size and focus on relevant information.'
  },
  {
    id: 51,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is Salesforce DX (SFDX)?',
    options: [
      'A set of tools and features for modern Salesforce development with source-driven development',
      'A data export tool',
      'A deployment tool for production only',
      'A testing framework'
    ],
    correct: 0,
    explanation: 'Salesforce DX (SFDX) is a set of tools and features that enables source-driven development, team collaboration, and continuous integration/continuous delivery (CI/CD). It includes the CLI, scratch orgs, and integration with version control systems.'
  },
  {
    id: 52,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is a scratch org in Salesforce DX?',
    options: [
      'A disposable, configurable, short-term Salesforce environment',
      'A type of sandbox',
      'A production org with debugging enabled',
      'A permanent development environment'
    ],
    correct: 0,
    explanation: 'A scratch org is a disposable, configurable, short-term Salesforce environment used for development and testing. It is defined by a configuration file and can be quickly created and deleted. Scratch orgs support source-driven development workflows.'
  },
  {
    id: 53,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What is the correct order for deploying changes to production?',
    options: [
      'Develop in sandbox → Test in sandbox → Deploy to production',
      'Deploy directly to production',
      'Develop in scratch org → Deploy to production',
      'Develop in production → Test in sandbox'
    ],
    correct: 0,
    explanation: 'Best practice is to develop in a development sandbox, test thoroughly in a testing/staging sandbox, and then deploy to production. This ensures changes are validated before affecting production users and data.'
  },
  {
    id: 54,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'Which deployment tool uses a package.xml manifest file?',
    options: [
      'Metadata API (ANT Migration Tool)',
      'Salesforce CLI',
      'Data Loader',
      'Change Sets'
    ],
    correct: 0,
    explanation: 'The Metadata API, used through tools like the ANT Migration Tool, uses a package.xml manifest file to specify which metadata components to retrieve or deploy. Change Sets use a point-and-click interface, while the Salesforce CLI uses source format.'
  },
  {
    id: 55,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What is a change set in Salesforce?',
    options: [
      'A declarative deployment tool for moving metadata between connected orgs',
      'A code compilation tool',
      'A testing framework',
      'A version control system'
    ],
    correct: 0,
    explanation: 'A change set is a declarative deployment tool that allows you to send customizations from one Salesforce org to another connected org (typically from sandbox to production). It uses a point-and-click interface to select components for deployment.'
  },
  {
    id: 56,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'What are the key considerations for developers new to the Salesforce platform?',
    options: [
      'Governor limits are enforced on shared resources and code cannot be deployed without 75% test coverage',
      'There are no limits on database queries or API calls',
      'All customizations must be done through code only',
      'Salesforce uses a single-tenant architecture with dedicated servers'
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
      'Lightning App Builder',
      'Developer Console',
      'Setup Menu',
      'Visualforce Editor'
    ],
    correct: 0,
    explanation: 'Lightning App Builder provides a drag-and-drop interface for adding custom Lightning components to Lightning pages, record pages, and app pages.'
  },
  {
    id: 58,
    chapter: 'devFundamentals',
    topic: 'PD1-602',
    question: 'Which annotation should be used for an Apex method that needs to be invoked by a process?',
    options: [
      '@InvocableMethod',
      '@future',
      '@RemoteAction',
      '@AuraEnabled'
    ],
    correct: 0,
    explanation: 'The @InvocableMethod annotation makes an Apex method callable from Flow and Process Builder. This allows declarative automation tools to invoke custom Apex logic.'
  },
  {
    id: 59,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'Which type of relationship ensures that the child record is deleted when the parent record is deleted?',
    options: [
      'Master-detail relationship',
      'External relationship',
      'Hierarchical relationship',
      'Lookup relationship'
    ],
    correct: 0,
    explanation: 'In a master-detail relationship, the detail (child) record is automatically deleted when the master (parent) record is deleted. This is called cascade delete.'
  },
  {
    id: 60,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'Which function returns the conversion rate to the corporate currency for a given ISO code?',
    options: [
      'CURRENCYRATE()',
      'CURRENCYCONVERT()',
      'EXCHANGERATE()',
      'CONVERTCURRENCY()'
    ],
    correct: 0,
    explanation: 'The CURRENCYRATE(isoCode) function returns the conversion rate for the specified currency ISO code to the corporate currency.'
  },
  {
    id: 61,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'Which method checks whether an object can be created by the current user?',
    options: [
      'isCreateable()',
      'isUpdateable()',
      'isDeletable()',
      'isAccessible()'
    ],
    correct: 0,
    explanation: 'The isCreateable() method on DescribeSObjectResult checks whether the current user has permission to create records of that object type.'
  },
  {
    id: 62,
    chapter: 'devFundamentals',
    topic: 'PD1-604',
    question: 'What are limitations of the Data Import Wizard?',
    options: [
      'Cannot import more than 50,000 records and does not support all standard objects',
      'Requires Data Loader to be installed',
      'Cannot handle CSV files',
      'Only works with custom objects'
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
      'Count, Sum, Max, Min',
      'Count, Sum, Average',
      'Count, Sum, Average, Max, Min',
      'Count, Sum, Max'
    ],
    correct: 0,
    explanation: 'Roll-up summary fields support four functions: Count (number of records), Sum (total of a field), Max (highest value), and Min (lowest value).'
  },
  {
    id: 64,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'Which declarative automation tool can display a custom user interface?',
    options: [
      'Flow (Screen Flow)',
      'Process Builder',
      'Approval Process',
      'Workflow Rule'
    ],
    correct: 0,
    explanation: 'Flow (specifically Screen Flows) is the only declarative automation tool that can display a custom user interface with input fields, choices, and other screen elements.'
  },
  {
    id: 65,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'Which access modifier makes a method accessible only within the defining class?',
    options: [
      'private',
      'public',
      'global',
      'protected'
    ],
    correct: 0,
    explanation: 'The private access modifier restricts access to only the defining class. Public allows access within the namespace, protected allows access in subclasses, and global allows access across the entire organization.'
  },
  {
    id: 66,
    chapter: 'processAutomation',
    topic: 'PD1-303',
    question: 'What does the "continue" statement do in a loop?',
    options: [
      'Skips to the next iteration of the loop',
      'Restarts the loop from the beginning',
      'Exits the loop completely',
      'Pauses the loop execution'
    ],
    correct: 0,
    explanation: 'The "continue" statement skips the remaining code in the current iteration and jumps to the next iteration of the loop.'
  },
  {
    id: 67,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'Which SOQL clause is used to sort query results?',
    options: [
      'ORDER BY',
      'GROUP BY',
      'ARRANGE BY',
      'SORT BY'
    ],
    correct: 0,
    explanation: 'The ORDER BY clause is used to sort SOQL query results by one or more fields. Use ASC for ascending (default) or DESC for descending order.'
  },
  {
    id: 68,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What is the purpose of the UPSERT DML operation?',
    options: [
      'To insert new records or update existing records based on an external ID',
      'To merge duplicate records',
      'To delete and recreate records',
      'To convert leads'
    ],
    correct: 0,
    explanation: 'UPSERT inserts new records and updates existing records. It matches records using an external ID field or the record ID to determine whether to insert or update.'
  },
  {
    id: 69,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the recommended pattern for organizing trigger logic?',
    options: [
      'Use a trigger handler class to separate logic from the trigger',
      'Use only before triggers',
      'Put all logic directly in the trigger',
      'Create multiple triggers per object'
    ],
    correct: 0,
    explanation: 'Best practice is to use a trigger handler pattern where the trigger delegates all logic to a separate handler class. This improves maintainability, testability, and follows separation of concerns.'
  },
  {
    id: 70,
    chapter: 'processAutomation',
    topic: 'PD1-308',
    question: 'What is the governor limit for DML statements in a single Apex transaction?',
    options: [
      '150',
      '100',
      '200',
      '50'
    ],
    correct: 0,
    explanation: 'The governor limit for total DML statements (insert, update, delete, undelete) in a single Apex transaction is 150.'
  },
  {
    id: 71,
    chapter: 'processAutomation',
    topic: 'PD1-309',
    question: 'In the save order of execution, when do validation rules fire?',
    options: [
      'After before triggers but before after triggers',
      'At the very end of the process',
      'Before before triggers',
      'After after triggers'
    ],
    correct: 0,
    explanation: 'In the save order of execution, validation rules fire after before triggers but before after triggers. This means before triggers can modify field values that validation rules will evaluate.'
  },
  {
    id: 72,
    chapter: 'processAutomation',
    topic: 'PD1-310',
    question: 'How should you handle a situation where a SOQL query might return no results?',
    options: [
      'Use a list variable and check if it is empty',
      'Always use try-catch to handle QueryException',
      'Ignore the possibility of no results',
      'Use LIMIT 1 to ensure exactly one result'
    ],
    correct: 0,
    explanation: 'Best practice is to query into a list and check if the list is empty before accessing elements. This avoids QueryException from single-record queries that return no results.'
  },
  {
    id: 73,
    chapter: 'processAutomation',
    topic: 'PD1-312',
    question: 'What is the purpose of the @InvocableVariable annotation?',
    options: [
      'To define input/output variables for @InvocableMethod',
      'To define a constant',
      'To make a variable accessible from Lightning components',
      'To create a static variable'
    ],
    correct: 0,
    explanation: '@InvocableVariable defines input and output variables for methods annotated with @InvocableMethod. This allows Flow and Process Builder to pass data to and from Apex methods.'
  },
  {
    id: 74,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which Visualforce component creates a styled table with column headers?',
    options: [
      '<apex:pageBlockTable>',
      '<apex:dataTable>',
      '<apex:repeat>',
      '<apex:outputPanel>'
    ],
    correct: 0,
    explanation: '<apex:pageBlockTable> creates a table with Salesforce styling and column headers. <apex:dataTable> creates a standard HTML table, while <apex:repeat> provides custom iteration without table structure.'
  },
  {
    id: 75,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which attribute of apex:page associates a standard controller?',
    options: [
      'standardController',
      'extensions',
      'name',
      'controller'
    ],
    correct: 0,
    explanation: 'The standardController attribute associates a standard or custom object with the Visualforce page, providing built-in CRUD operations and field access.'
  },
  {
    id: 76,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Where can Lightning components be used?',
    options: [
      'Salesforce Mobile App, Lightning Experience, and Communities',
      'Only in Communities',
      'Only in Salesforce Mobile App',
      'Only in Lightning Experience'
    ],
    correct: 0,
    explanation: 'Lightning components can be used in Salesforce Mobile App, Lightning Experience, and Communities (formerly known as Community Cloud).'
  },
  {
    id: 77,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'In an Aura component bundle, which resource contains the component markup?',
    options: [
      'Component (.cmp)',
      'Controller',
      'Helper',
      'Style'
    ],
    correct: 0,
    explanation: 'The Component resource (.cmp file) contains the markup definition for an Aura component. It defines the component structure, attributes, and HTML-like markup.'
  },
  {
    id: 78,
    chapter: 'userInterface',
    topic: 'PD1-406',
    question: 'Which function is used to prevent XSS in Visualforce?',
    options: [
      'All of the above depending on context',
      'URLENCODE()',
      'JSENCODE()',
      'HTMLENCODE()'
    ],
    correct: 0,
    explanation: 'Different encoding functions are used based on context: JSENCODE() for JavaScript, HTMLENCODE() for HTML content, and URLENCODE() for URLs. Using the appropriate encoder prevents XSS vulnerabilities.'
  },
  {
    id: 79,
    chapter: 'userInterface',
    topic: 'PD1-407',
    question: 'What does the cacheable=true parameter do in @AuraEnabled?',
    options: [
      'Enables client-side caching for read-only data',
      'Enables database caching',
      'Disables caching completely',
      'Enables server-side caching only'
    ],
    correct: 0,
    explanation: 'cacheable=true enables client-side caching for read-only data, improving performance by reducing server calls. It should not be used for methods that perform DML operations.'
  },
  {
    id: 80,
    chapter: 'userInterface',
    topic: 'PD1-408',
    question: 'What is the recommended way for sibling components to communicate in LWC?',
    options: [
      'Lightning Message Service (LMS)',
      'Shared JavaScript variables',
      'Direct method calls between components',
      'Global events'
    ],
    correct: 0,
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
  {
    id: 82,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is the purpose of @testSetup annotation?',
    options: [
      'To create test data available to all test methods in the class',
      'To mark a class as a test class',
      'To configure test coverage reporting',
      'To set up the testing environment'
    ],
    correct: 0,
    explanation: '@testSetup defines a method that creates test data available to ALL test methods in the class. The data is rolled back after each test method, ensuring test isolation and efficiency.'
  },
  {
    id: 83,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What happens to test data after a test method completes?',
    options: [
      'It is rolled back and not persisted',
      'It is moved to a test data table',
      'It is permanently saved to the database',
      'It depends on the test annotation'
    ],
    correct: 0,
    explanation: 'Test data is automatically rolled back after each test method completes. This ensures test isolation - each test method starts with a clean data state.'
  },
  {
    id: 84,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Which tool provides a Query Editor for executing SOQL and SOSL queries?',
    options: [
      'Developer Console',
      'Data Loader',
      'Setup Menu',
      'Workbench'
    ],
    correct: 0,
    explanation: 'Developer Console includes a Query Editor that allows executing SOQL and SOSL queries directly against the org. It also provides Execute Anonymous for running Apex code.'
  },
  {
    id: 85,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is the source of truth in Salesforce DX?',
    options: [
      'Version Control System',
      'Developer Console',
      'The Salesforce org',
      'The metadata API'
    ],
    correct: 0,
    explanation: 'In Salesforce DX, the Version Control System (VCS) is the source of truth. Code and metadata are stored in VCS, and scratch orgs are created from the source.'
  },
  {
    id: 86,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is the difference between Developer and Developer Pro sandboxes?',
    options: [
      'Developer Pro has more storage and can copy data',
      'They are identical',
      'Developer Pro has less storage',
      'Developer Pro can only be refreshed monthly'
    ],
    correct: 0,
    explanation: 'Developer Pro sandbox has a higher storage limit than Developer sandbox. Both copy production configuration (not data) and can be refreshed once daily.'
  },
  {
    id: 87,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What is required to use change sets between two orgs?',
    options: [
      'A deployment connection must be established between the orgs',
      'The orgs must be in the same geographic region',
      'Both orgs must be on the same Salesforce edition',
      'Both orgs must have the same admin user'
    ],
    correct: 0,
    explanation: 'To use change sets, a deployment connection must be established between the source and target orgs. Each org must explicitly authorize the other for deployment.'
  },
  {
    id: 88,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'Which file is used to delete metadata components during deployment?',
    options: [
      'destructiveChanges.xml',
      'package.xml',
      'deploy.xml',
      'build.xml'
    ],
    correct: 0,
    explanation: 'The destructiveChanges.xml file specifies metadata components to be deleted during deployment. It is used with the Metadata API or ANT Migration Tool.'
  },
  {
    id: 89,
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
    id: 90,
    chapter: 'processAutomation',
    topic: 'PD1-308',
    question: 'What is the governor limit for CPU time in synchronous Apex?',
    options: [
      '10,000 ms',
      '30,000 ms',
      '60,000 ms',
      '5,000 ms'
    ],
    correct: 0,
    explanation: 'The governor limit for CPU time in synchronous Apex is 10,000 ms (10 seconds). For asynchronous Apex, it is 60,000 ms (60 seconds).'
  },
  {
    id: 91,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'What is a Visualforce controller?',
    options: [
      'An Apex class that provides data and logic to a Visualforce page',
      'A database table',
      'A JavaScript library',
      'A CSS stylesheet'
    ],
    correct: 0,
    explanation: 'A Visualforce controller is an Apex class that provides data and logic to a Visualforce page. It can be a standard controller (built-in), custom controller, or controller extension.'
  },
  {
    id: 92,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What is the difference between Aura and LWC?',
    options: [
      'Aura is proprietary; LWC is based on standard web technologies',
      'LWC can only be used in mobile apps',
      'Aura uses standard web technologies; LWC uses proprietary framework',
      'They are exactly the same'
    ],
    correct: 0,
    explanation: 'Aura uses a proprietary framework with its own component model, while Lightning Web Components (LWC) is built on standard web technologies (ES6+, custom elements, shadow DOM).'
  },
  {
    id: 93,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'Pages and components are part of which component of the MVC?',
    options: [
      'View',
      'Neither - Pages are separate from MVC',
      'Model',
      'Controller'
    ],
    correct: 0,
    explanation: 'View. View This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 94,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'What part of the MVC do Salesforce Objects map to?',
    options: [
      'Model',
      'Neither - Objects are separate from MVC',
      'Controller',
      'View'
    ],
    correct: 0,
    explanation: 'Model. Model This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 95,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'Can relationship types be changed?',
    options: [
      'Yes, with conditions: master-detail can convert to lookup if not used in roll-up summary fields',
      'Yes, but only lookup to master-detail',
      'No, relationship types cannot be changed',
      'Yes, but only with Salesforce support approval'
    ],
    correct: 0,
    explanation: 'If a master-detail relationship is not used in a roll-up summary field, it can be converted to a lookup relationship, and also vice versa as long as the lookup relationship field contains values in all of its records.'
  },
  {
    id: 96,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'Which type of custom object should be created for a many-to-many relationship in Salesforce?',
    options: [
      'Junction object with two master-detail relationships',
      'A single master-detail relationship',
      'Two lookup relationships',
      'A formula field'
    ],
    correct: 0,
    explanation: 'Junction object with two master-detail relationships. Junction object'
  },
  {
    id: 97,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'What is an external ID?',
    options: [
      'A field containing a unique identifier from an external system',
      'A field that auto-generates IDs',
      'A field that stores API names',
      'A field that links to external databases'
    ],
    correct: 0,
    explanation: 'An external ID is a field that contains a unique identifier from a system outside of Salesforce.'
  },
  {
    id: 98,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'What are some limitations of roll-up summary fields?',
    options: [
      'Max number per object, does not work for lookups, cannot roll up formula fields referencing other objects',
      'Works with all relationship types',
      'Can roll up any field type',
      'No limitations exist'
    ],
    correct: 0,
    explanation: 'There is a max number of roll-up summary fields per object. Does not work for lookups. Cannot rollup a formula field that references a field on another object or contains dynamic date function.'
  },
  {
    id: 99,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'Which two options are available to access the token for an object in Apex?',
    options: [
      'getSObjectType() method and sObjectType static member variable',
      'getObjectToken() and Token.get()',
      'getType() and SObject.class',
      'Schema.getToken() and Object.type()'
    ],
    correct: 0,
    explanation: 'The getSObjectType method and the sObjectType static member variable'
  },
  {
    id: 100,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'What platform features are part of the control layer in the MVC model?',
    options: [
      'Declarative (workflow rules) or programmatic (Apex classes) business logic',
      'Only Lightning components',
      'Only Visualforce pages',
      'Database tables and fields'
    ],
    correct: 0,
    explanation: 'Declarative (e.g. workflow and escalation rules) or programmatic (e.g. Visualforce controllers or Apex classes) business logic'
  },
  {
    id: 101,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'What are 2 considerations that a developer new to Salesforce should be aware of?',
    options: [
      'Governor limits on shared resources and 75% test coverage required for deployment',
      'All customizations must be done through code',
      'Single-tenant architecture with dedicated servers',
      'No limits on queries or API calls'
    ],
    correct: 0,
    explanation: 'Limits are enforced on shared resources (Governor Limits). Code cannot be deployed into production unless test code coverage is achieved.'
  },
  {
    id: 102,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'Which platform is best to use if you want to create user interfaces without writing code?',
    options: [
      'App Cloud (Salesforce Platform)',
      'Visual Studio Code',
      'Salesforce DX',
      'Developer Console'
    ],
    correct: 0,
    explanation: 'App Cloud (Salesforce Platform). App Cloud (Salesforce Platform) This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 103,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'What can be done to display a custom user interface that allows users to update several related records simultaneously on the opportunity page in Lightning Experience?',
    options: [
      'Develop a custom Lightning Component and add it using Lightning App Builder',
      'Use Process Builder',
      'Create a formula field',
      'Use a standard Visualforce page'
    ],
    correct: 0,
    explanation: 'A custom Lightning Component can be developed and added to the record page using Lightning App Builder.'
  },
  {
    id: 104,
    chapter: 'devFundamentals',
    topic: 'PD1-602',
    question: 'Which declarative automation tools can be used to perform automated actions for an app in Salesforce?',
    options: [
      'Process Builder, Flow Builder, Approval Process, and Workflow Rule',
      'Only Apex triggers',
      'Only Visualforce pages',
      'Only Lightning components'
    ],
    correct: 0,
    explanation: 'Process Builder, Flow Builder, Approval Process, and Workflow Rule'
  },
  {
    id: 105,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'What happens when a field whose value is not specified for an object in an Apex class is made required?',
    options: [
      'The Apex code throws an exception',
      'The field is automatically set to null',
      'A default value is assigned',
      'The record is not saved but no error occurs'
    ],
    correct: 0,
    explanation: 'The Apex code throws an exception when it is executed.'
  },
  {
    id: 106,
    chapter: 'devFundamentals',
    topic: 'PD1-604',
    question: 'What are some options for exporting data from a development environment?',
    options: [
      'Data Loader, Workbench, Reports, dataloader.io, and ETL tools',
      'Only Data Loader',
      'Only Reports',
      'Only the Data Export feature'
    ],
    correct: 0,
    explanation: 'Data Loader, Workbench, Reports, dataloader.io, ETL tools'
  },
  {
    id: 107,
    chapter: 'devFundamentals',
    topic: 'PD1-604',
    question: 'What are some limitations of the Data Import Wizard?',
    options: [
      'Cannot import more than 50,000 records, does not support all standard objects, cannot save mappings',
      'Requires Data Loader to be installed',
      'Only works with custom objects',
      'Cannot handle CSV files'
    ],
    correct: 0,
    explanation: 'Does not support all standard objects, cannot load more than 50K records, cannot save mappings, cannot export data'
  },
  {
    id: 108,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'How is a many-to-many relationship created?',
    options: [
      'Junction object with two master-detail relationships',
      'A formula field',
      'A single master-detail relationship',
      'Two lookup relationships'
    ],
    correct: 0,
    explanation: 'Using a junction object. This object sits between the two objects in the many-to-many relationship and has two master-detail fields, one for each of the objects to be related.'
  },
  {
    id: 109,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'Which type of relationship field should be created to ensure that the value of the field related to the parent record is required on child records?',
    options: [
      'Master-detail relationship',
      'External relationship',
      'Lookup relationship',
      'Formula field'
    ],
    correct: 0,
    explanation: 'Master-detail relationship. Master-detail relationship'
  },
  {
    id: 110,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'When would creating a formula field be appropriate?',
    options: [
      'When a read-only field is needed calculated from field values',
      'When users need to edit the value',
      'When the value changes frequently',
      'When the value comes from an external system'
    ],
    correct: 0,
    explanation: 'When a read-only field is required that is calculated based on values of fields (including fields in related objects) or based on a defined formula'
  },
  {
    id: 111,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'Which formula would need to be defined in a formula field to add 6 months to a custom field named \'Contract_Start_Date__c\'?',
    options: [
      'ADDMONTHS(Contract_Start_Date__c, 6)',
      'Contract_Start_Date__c + 180',
      'DATE(Contract_Start_Date__c, 6)',
      'DATEADD(Contract_Start_Date__c, 6, MONTH)'
    ],
    correct: 0,
    explanation: 'ADDMONTHS(Contract_Start_Date__c, 6). ADDMONTHS(Contract_Start_Date__c, 6) This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 112,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which coarse grained component can be used to display the detail page of an object in a Visualforce page?',
    options: [
      '<apex:detail>',
      '<apex:outputField>',
      '<apex:pageBlock>',
      '<apex:form>'
    ],
    correct: 0,
    explanation: '<apex:detail>. <apex:detail> This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 113,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which iteration component can be used to generate a table of data with platform styling?',
    options: [
      'All of the above',
      '<apex:repeat>',
      '<apex:dataTable>',
      '<apex:pageBlockTable>'
    ],
    correct: 0,
    explanation: 'All of the above. <apex:pageBlockTable> This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 114,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What type of code can be defined inline in HTML tags?',
    options: [
      'CSS code',
      'JavaScript code',
      'Apex code',
      'SQL code'
    ],
    correct: 0,
    explanation: 'CSS code. CSS code This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 115,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which tag is used to add CSS to a Visualforce page?',
    options: [
      '<apex:stylesheet>',
      '<apex:css>',
      '<style>',
      '<apex:style>'
    ],
    correct: 0,
    explanation: '<apex:stylesheet>. <apex:stylesheet> This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 116,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which component can be used to display an external website in an inline frame within a Visualforce page?',
    options: [
      '<apex:iframe>',
      '<apex:external>',
      '<apex:include>',
      '<apex:embed>'
    ],
    correct: 0,
    explanation: '<apex:iframe>. <apex:iframe> This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 117,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'What is required to override a tab home page with a Visualforce page?',
    options: [
      'The page must use the standard list controller, a custom controller, or no controller',
      'The page must use a standard controller',
      'The page must be a Lightning component',
      'The page must use an extension controller'
    ],
    correct: 0,
    explanation: 'The Visualforce page must use the standard list controller for that tab, a custom controller, or no controller.'
  },
  {
    id: 118,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'What can be added to a console to display a Visualforce page?',
    options: [
      'Custom console component to the sidebar or footer',
      'A workflow rule',
      'A formula field',
      'A Lightning component'
    ],
    correct: 0,
    explanation: 'Custom console component to the sidebar or footer. Custom console component to the sidebar or footer'
  },
  {
    id: 119,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Which communication model is used by the Lightning Component Framework?',
    options: [
      'Event-driven model',
      'Direct method call model',
      'Request-response model',
      'Polling model'
    ],
    correct: 0,
    explanation: 'Event-driven model. Event-driven model This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 120,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Where can Lightning components be made available?',
    options: [
      'Salesforce Mobile App, Lightning Experience, and Communities',
      'Only Salesforce Mobile App',
      'Only Lightning Experience',
      'Only Communities'
    ],
    correct: 0,
    explanation: 'Salesforce Mobile App, Lightning Experience, and Communities'
  },
  {
    id: 121,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Which design supported by the Lightning Component Framework ensures compatibility with different devices?',
    options: [
      'Responsive design',
      'Mobile-only design',
      'Fixed-width design',
      'Desktop-first design'
    ],
    correct: 0,
    explanation: 'Responsive design. Responsive design This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 122,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'In an Aura component bundle, which resource contains the markup definition for reusable units of an app?',
    options: [
      'Component (.cmp)',
      'Style',
      'Controller',
      'Helper'
    ],
    correct: 0,
    explanation: 'Component (.cmp). Component This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 123,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'How can CSS be added to an Aura component bundle in the Developer Console?',
    options: [
      'By clicking on the STYLE button',
      'By using the @css annotation',
      'By adding a link tag',
      'By creating a CSS file'
    ],
    correct: 0,
    explanation: 'By clicking on the STYLE button in the Developer Console sidebar'
  },
  {
    id: 124,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Which component in an Aura component bundle is used to expose attributes to the Lightning App Builder?',
    options: [
      'Design resource',
      'Controller resource',
      'Helper resource',
      'Style resource'
    ],
    correct: 0,
    explanation: 'Design resource. Design This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 125,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Which tag can be used to reference a JavaScript library uploaded as a static resource in .cmp markup?',
    options: [
      '<ltng:require>',
      '<c:require>',
      '<aura:import>',
      '<script>'
    ],
    correct: 0,
    explanation: '<ltng:require>. <ltng:require> This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 126,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which Visualforce overrides are available for Lightning console apps?',
    options: [
      'Custom console component to the sidebar or footer',
      'A workflow rule',
      'A formula field',
      'A Lightning component'
    ],
    correct: 0,
    explanation: 'Visualforce overrides are supported for new, edit, view, tab, list, and clone in Lightning console apps.'
  },
  {
    id: 127,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which attribute of the < apex:page > component is used to associate a standard controller with a Visualforce page?',
    options: [
      'standardController',
      'name',
      'extensions',
      'controller'
    ],
    correct: 0,
    explanation: 'standardController. standardController This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 128,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which method can be used in a custom controller to respond to user input on a Visualforce page?',
    options: [
      'Action method',
      'Setter method',
      'Getter method',
      'Constructor method'
    ],
    correct: 0,
    explanation: 'Action method. Action method This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 129,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which UI framework allows building single-page web apps with dynamic and responsive user interfaces in Salesforce?',
    options: [
      'Lightning Component Framework',
      'Classic UI',
      'Visualforce',
      'Service Cloud'
    ],
    correct: 0,
    explanation: 'Lightning Component Framework. Lightning Component Framework'
  },
  {
    id: 130,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What should be used instead of dynamic SOQL to prevent SOQL injection?',
    options: [
      'Static query with a bind variable',
      'No alternative exists',
      'SOSL query',
      'String concatenation'
    ],
    correct: 0,
    explanation: 'Static query with a bind variable. Static query with a bind variable This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 131,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'What can prevent a Visualforce page from using an anti-CSRF token?',
    options: [
      'An action handler in apex:page',
      'A custom object',
      'A Lightning component',
      'A standard controller'
    ],
    correct: 0,
    explanation: 'An action handler in apex:page. An action handler in apex:page This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 132,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Which tag can be utilized in an Aura component to register to an event?',
    options: [
      '<aura:registerEvent>',
      '<aura:event>',
      '<aura:handler>',
      '<aura:listener>'
    ],
    correct: 0,
    explanation: '<aura:registerEvent>. <aura:registerEvent> This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 133,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Which tag can be utilized in an Aura component to handle an event?',
    options: [
      '<aura:handler>',
      '<aura:event>',
      '<aura:listener>',
      '<aura:registerEvent>'
    ],
    correct: 0,
    explanation: '<aura:handler>. <aura:handler> This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 134,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Which type of event is not subject to the component\'s hierarchical setup?',
    options: [
      'Application Event',
      'Component Event',
      'System Event',
      'Custom Event'
    ],
    correct: 0,
    explanation: 'Application Event. Application Event This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 135,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Which type of event is more efficient and should be preferred when an event needs to be handled within the containment hierarchy?',
    options: [
      'Component Event',
      'System Event',
      'Platform Event',
      'Application Event'
    ],
    correct: 0,
    explanation: 'Component Event. Component Event This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 136,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What are the different types of Lightning Components',
    options: [
      'Standard, Custom, and AppExchange Components',
      'Only Custom Components',
      'Only Standard Components',
      'Aura and LWC only'
    ],
    correct: 0,
    explanation: 'Standard Components, Custom Components and AppExchange Components'
  },
  {
    id: 137,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'How can flow hide unnecessary fields on a screen?',
    options: [
      'Component visibility settings on a screen component',
      'A formula field',
      'A validation rule',
      'A workflow rule'
    ],
    correct: 0,
    explanation: 'By using the component visibility settings on a screen component'
  },
  {
    id: 138,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'In what ways can Visualforce page be embedded?',
    options: [
      'In page layout and on Lightning pages using the Visualforce component',
      'Only in iframes',
      'Only in page layouts',
      'Only in Lightning pages'
    ],
    correct: 0,
    explanation: 'In page layout and on Lightning pages using the Visualforce component'
  },
  {
    id: 139,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'What Salesforce feature should be used to build dynamic PDF documents?',
    options: [
      'Visualforce Page with renderAs="pdf"',
      'Lightning Component',
      'Flow',
      'Process Builder'
    ],
    correct: 0,
    explanation: 'Visualforce Page with renderAs="pdf". Visualforce Page'
  },
  {
    id: 140,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which function can be used to securely retrieve third-party images on a Visualforce page?',
    options: [
      'IMAGEPROXYURL()',
      'PROXYIMAGE()',
      'GETIMAGE()',
      'IMAGEURL()'
    ],
    correct: 0,
    explanation: 'IMAGEPROXYURL(). IMAGEPROXYURL This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 141,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'What does Einstein Next Best Action rely on?',
    options: [
      'Flows, recommendations, strategies, and components',
      'Only Lightning components',
      'Only Apex code',
      'Only Visualforce pages'
    ],
    correct: 0,
    explanation: 'flows, recommendations, strategies, and components'
  },
  {
    id: 142,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What can be used to isolate a static HTML file on a separate domain?',
    options: [
      'Lightning Web Component (LWC)',
      'Static Resource',
      'Aura component',
      'Visualforce page'
    ],
    correct: 0,
    explanation: '$IFrameResource.<resource_name>, where \'resource_name\' is the name of the static resource'
  },
  {
    id: 143,
    chapter: 'userInterface',
    topic: 'PD1-501',
    question: 'What can be used to create test data once and access it throughout the test class?',
    options: [
      '@testSetup method',
      '@isTest method',
      'Static resource',
      'Test.loadData method'
    ],
    correct: 0,
    explanation: '@testSetup method. Test setup method This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 144,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Which class can contain reusable code for test data creation?',
    options: [
      'Public test utility class (Test Data Factory)',
      'Static resource',
      'Custom metadata type',
      'Standard controller'
    ],
    correct: 0,
    explanation: 'Public test utility class, also known as Test Data Factory'
  },
  {
    id: 145,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What can be created and executed using the Salesforce testing framework to ensure error-free code?',
    options: [
      'Unit tests',
      'Triggers',
      'Apex classes',
      'Flows'
    ],
    correct: 0,
    explanation: 'Unit tests. Unit tests This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 146,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Which tests are run by default for deployment to production?',
    options: [
      'All local tests',
      'No tests by default',
      'Only system tests',
      'Only @isTest methods'
    ],
    correct: 0,
    explanation: 'All local tests. All local tests This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 147,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Which annotation should be used for a unit test method?',
    options: [
      '@isTest',
      '@TestCase',
      '@TestMethod',
      '@Test'
    ],
    correct: 0,
    explanation: '@isTest. @isTest This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 148,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Which method can be used to verify whether a test achieves expected results?',
    options: [
      'System.assertEquals()',
      'System.debug()',
      'System.verify()',
      'System.assert()'
    ],
    correct: 0,
    explanation: 'System.assertEquals(). System.assert() This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 149,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Which two static methods are used to assign a new set of governor limits?',
    options: [
      'Test.startTest() and Test.stopTest()',
      'Test.init() and Test.finish()',
      'Test.begin() and Test.end()',
      'Limits.reset() and Limits.restore()'
    ],
    correct: 0,
    explanation: 'Test.startTest() and Test.stopTest(). startTest() and stopTest()'
  },
  {
    id: 150,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Which page on the Salesforce user interface allows unit class testing?',
    options: [
      'Apex Test Execution page in Setup',
      'Workbench',
      'App Builder',
      'Developer Console'
    ],
    correct: 0,
    explanation: 'Apex Test Execution page in Setup. Apex Test Execution'
  },
  {
    id: 151,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What can be used to create or delete tests that can be run together?',
    options: [
      'Suite Manager in Developer Console',
      'Apex Test Execution',
      'Test Manager in Setup',
      'Developer Console'
    ],
    correct: 0,
    explanation: 'Suite Manager in Developer Console. Suite Manager in Developer Console This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 152,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What does not affect actual data after successful code execution?',
    options: [
      'Unit Tests',
      'Apex Classes',
      'Batch Jobs',
      'Triggers'
    ],
    correct: 0,
    explanation: 'Unit Tests. Unit Tests This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 153,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Which default sharing mode is used for anonymous block execution?',
    options: [
      'User mode with sharing',
      'System mode without sharing',
      'No sharing mode',
      'Global sharing mode'
    ],
    correct: 0,
    explanation: 'User mode with sharing. User mode with sharing This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 154,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What are unmanaged packages typically used for?',
    options: [
      'Distributing free software, templates, and open source components',
      'Upgrading existing packages',
      'Protecting intellectual property',
      'Selling on AppExchange'
    ],
    correct: 0,
    explanation: 'Distributing free software, templates, and open source components'
  },
  {
    id: 155,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What is the difference between a managed package and unmanaged package?',
    options: [
      'Managed: protected, upgradeable, sold on AppExchange. Unmanaged: not protected, cannot be upgraded',
      'They are identical in functionality',
      'Managed is for free distribution, unmanaged is for sale',
      'Unmanaged can be upgraded, managed cannot'
    ],
    correct: 0,
    explanation: 'A managed package is protected, upgradeable and is typically sold on the AppExchange. Unmanaged packages are not protected and can be used for distribution to others and can be modified once installed.'
  },
  {
    id: 156,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What can a change set be used for?',
    options: [
      'Moving metadata between related orgs (sandbox to production)',
      'Moving data between orgs',
      'Writing Apex code',
      'Creating new objects'
    ],
    correct: 0,
    explanation: 'Moving meta data between related orgs, e.g. from a sandbox to production. It cannot be used for moving data.'
  },
  {
    id: 157,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What is required to use change sets in 2 orgs?',
    options: [
      'A deployment connection between the orgs',
      'Both orgs on the same edition',
      'Same geographic region',
      'Same admin user'
    ],
    correct: 0,
    explanation: 'A deployment connection between the orgs and each org must explicitly authorize the other org to send change sets to it.'
  },
  {
    id: 158,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What are some restrictions of change sets?',
    options: [
      '75% test coverage required, not all metadata supported, cannot specify deploy order',
      'Can only deploy code, not configuration',
      'Requires Data Loader',
      'No restrictions exist'
    ],
    correct: 0,
    explanation: 'Code must have 75% test coverage. Not all metadata types are supported. The order of components deployed cannot be specified. Cannot be used to rename or delete components.'
  },
  {
    id: 159,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What option can be used for distributing metadata to multiple unrelated orgs?',
    options: [
      'Unmanaged packages',
      'Change sets',
      'Data Loader',
      'Metadata API'
    ],
    correct: 0,
    explanation: 'Unmanaged packages can be used to distribute metadata to unrelated orgs.'
  },
  {
    id: 160,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What option would you choose to move metadata in a scripted manner to multiple environments?',
    options: [
      'Force.com Migration Tool (ANT)',
      'Workbench',
      'Data Loader',
      'Change Sets'
    ],
    correct: 0,
    explanation: 'Force.com migration tool can be used to script deployments to multiple environments.'
  },
  {
    id: 161,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What are the different log levels available in Apex?',
    options: [
      'NONE, ERROR, WARN, INFO, DEBUG, FINE, FINER, FINEST',
      'BASIC, DETAILED, VERBOSE',
      'LOW, MEDIUM, HIGH, CRITICAL',
      'ERROR, WARNING, INFO, DEBUG'
    ],
    correct: 0,
    explanation: 'NONE, ERROR, WARN, INFO, DEBUG, FINE, FINER, FINEST'
  },
  {
    id: 162,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What are the options for moving metadata between environments?',
    options: [
      'Change Sets, Force.com Migration Tool, VS Code, Workbench, Unmanaged Packages',
      'Only Change Sets',
      'Only Metadata API',
      'Only Data Loader'
    ],
    correct: 0,
    explanation: 'Change Sets, Force.com Migration Tool, Visual Studio Code, Workbench, Unmanaged Packages'
  },
  {
    id: 163,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Where can debug logs be viewed, downloaded and deleted?',
    options: [
      'Developer Console and Setup (Debug Logs panel)',
      'Only Setup',
      'Only Developer Console',
      'Workbench'
    ],
    correct: 0,
    explanation: 'Developer Console and Setup (Debug Logs panel). Developer Console and Setup'
  },
  {
    id: 164,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Which suite of tools can be used to query, update, delete and insert data in Salesforce via the Force.com APIs?',
    options: [
      'Workbench',
      'VS Code',
      'Data Loader',
      'Developer Console'
    ],
    correct: 0,
    explanation: 'Workbench. Workbench This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 165,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Which Salesforce feature provides a Query Editor for executing SOQL and SOSL queries?',
    options: [
      'Developer Console',
      'Setup Menu',
      'Workbench',
      'Data Loader'
    ],
    correct: 0,
    explanation: 'Developer Console. Developer Console This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 166,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Which environment is used for migrating and combining changes from different development environments?',
    options: [
      'Integration environment',
      'Development environment',
      'Staging environment',
      'Production environment'
    ],
    correct: 0,
    explanation: 'Integration environment. Integration environment This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 167,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'Which environment can be used for a test deployment before changes are migrated to production?',
    options: [
      'Staging environment',
      'Development environment',
      'UAT environment',
      'Integration environment'
    ],
    correct: 0,
    explanation: 'Staging environment. Staging environment This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 168,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Which type of tests are conducted in a UAT environment?',
    options: [
      'User acceptance tests',
      'Unit tests',
      'Performance tests',
      'Integration tests'
    ],
    correct: 0,
    explanation: 'User acceptance tests. User acceptance tests This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 169,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'How many checkpoints can be set in Apex code at a time?',
    options: [
      'Five',
      'Ten',
      'Three',
      'Unlimited'
    ],
    correct: 0,
    explanation: 'Five. Five This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 170,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What can be used to investigate the objects in memory at a specific checkpoint and see the other objects with references to them?',
    options: [
      'Checkpoint Inspector',
      'Developer Console',
      'Debug Log',
      'System.debug()'
    ],
    correct: 0,
    explanation: 'Checkpoint Inspector. Checkpoint Inspector This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 171,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'Which file must be created in order to delete metadata components?',
    options: [
      'destructiveChanges.xml',
      'package.xml',
      'build.xml',
      'deploy.xml'
    ],
    correct: 0,
    explanation: 'destructiveChanges.xml. destructiveChanges.xml This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 172,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'Which API provides fine-grained access to an org’s metadata by retrieving smaller pieces of metadata?',
    options: [
      'Tooling API',
      'REST API',
      'Metadata API',
      'SOAP API'
    ],
    correct: 0,
    explanation: 'Tooling API. Tooling API This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 173,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'Which tools are available to access functionality provided by Metadata API?',
    options: [
      'Visual Studio Code and Ant Migration Tool',
      'Only Data Loader',
      'Only Workbench',
      'Only Developer Console'
    ],
    correct: 0,
    explanation: 'Visual Studio Code and Ant Migration Tool. Visual Studio Code and Ant Migration Tool'
  },
  {
    id: 174,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Where can debug mode be enabled for Lightning components?',
    options: [
      'Debug Mode setting in Setup',
      'Developer Console',
      'Lightning App Builder',
      'VS Code'
    ],
    correct: 0,
    explanation: 'Debug Mode setting in Setup. \'Debug Mode\' in Setup'
  },
  {
    id: 175,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What are the key milestones in an Application lifecycle when a sandbox is involved?',
    options: [
      'Manage Requirements, Develop in Sandbox, Test Changes, Deploy to Production, Notify Users',
      'Design, Build, Test, Deploy',
      'Plan, Code, Test, Release',
      'Develop, Test, Deploy'
    ],
    correct: 0,
    explanation: 'Manage Requirements, Develop Changes in Sandbox, Test Changes, Deploy Changes to Production, Notify End Users of Changes'
  },
  {
    id: 176,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is the difference between a Developer and Developer Pro sandbox?',
    options: [
      'Developer Pro has higher storage limit. Both copy production config (not data)',
      'Developer Pro copies data',
      'They are identical',
      'Developer Pro can only be refreshed monthly'
    ],
    correct: 0,
    explanation: 'Developer Pro has a higher storage limit. Both contain a copy of production configuration and not data. Both can be refreshed once a day.'
  },
  {
    id: 177,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'Why would a Partial Copy sandbox be used instead of a Full Copy sandbox?',
    options: [
      'Partial Copy is cheaper, refreshes more frequently, uses templates for selective data',
      'They are identical',
      'Partial Copy has more data',
      'Full Copy refreshes more frequently'
    ],
    correct: 0,
    explanation: 'A Partial Copy sandbox is cheaper and can be refreshed more frequently (5 days). It has a data and file storage limit of 5 GB, so a template can be used to define the data copied (up to 10,000 records).'
  },
  {
    id: 178,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is a full copy sandbox usually used for?',
    options: [
      'When identical-to-production environment is needed for testing',
      'For documentation',
      'For daily development',
      'For code reviews'
    ],
    correct: 0,
    explanation: 'When an environment that is identical to production is required for performance, load, regression or user acceptance testing.'
  },
  {
    id: 179,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Which type of user can be traced using a debug log to track data that is synchronized using the Salesforce Integration Cloud?',
    options: [
      'Any user with a trace flag configured',
      'Only developers',
      'Only system administrators',
      'Only administrators'
    ],
    correct: 0,
    explanation: 'Any user with a trace flag configured. Platform Integration User'
  },
  {
    id: 180,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'When creating a new sandbox, what can a developer do to copy data and metadata from an existing sandbox?',
    options: [
      'Clone the existing sandbox',
      'Create from production',
      'Export and import manually',
      'Use Data Loader'
    ],
    correct: 0,
    explanation: 'Clone the existing sandbox. Clone the existing sandbox'
  },
  {
    id: 181,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'When a new sandbox is created, what happens to the users\' email addresses?',
    options: [
      'Salesforce appends .invalid to email addresses',
      'Emails are forwarded to admins',
      'Emails are deleted',
      'No change to emails'
    ],
    correct: 0,
    explanation: 'Salesforce appends .invalid to the email addresses. For example, name@email.com becomes name@email.com.invalid.'
  },
  {
    id: 182,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'Which IDE (Integrated Development Environment) should be used to create and edit Apex code, manage development projects, and migrate metadata components from one org to another?',
    options: [
      'Visual Studio Code with Salesforce Extension Pack',
      'Notepad++',
      'Eclipse',
      'Sublime Text'
    ],
    correct: 0,
    explanation: 'Visual Studio Code with Salesforce Extension Pack. Visual Studio Code'
  },
  {
    id: 183,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What needs to be set up to generate debug logs when a user performs an action in Salesforce, such as updating an account record?',
    options: [
      'User trace flag',
      'Debug level',
      'Log category',
      'System.debug()'
    ],
    correct: 0,
    explanation: 'User trace flag. User trace flag This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 184,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What does each debug log contain?',
    options: [
      'Header, execution units, code units, log lines',
      'Only error messages',
      'Only SOQL queries',
      'Only system.debug outputs'
    ],
    correct: 0,
    explanation: 'Each debug log consists of a header, execution units, code units, log lines, and other log data.'
  },
  {
    id: 185,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Which panel of the Log Inspector shows information in a top-down manner from the initiating calls to the next level down?',
    options: [
      'Stack Tree panel',
      'Timeline panel',
      'Execution Overview panel',
      'Filter panel'
    ],
    correct: 0,
    explanation: 'Stack Tree panel. Stack Tree This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 186,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'When troubleshooting processes, what is the significance of myVariable_current and myVariable_old?',
    options: [
      'myVariable_current = current field value, myVariable_old = most recent previous value',
      'myVariable_current is always null',
      'Both are the same value',
      'myVariable_old is the original value from creation'
    ],
    correct: 0,
    explanation: '‘myVariable_current’ refers to the field value when the process was executed. On the other hand, ‘myVariable_old’ refers to the most recent previous value.'
  },
  {
    id: 187,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is a Scratch Org?',
    options: [
      'A disposable, configurable, short-term Salesforce environment',
      'A production org with debugging',
      'A type of sandbox',
      'A permanent development environment'
    ],
    correct: 0,
    explanation: 'A Scratch Org is a dedicated, configurable, and short-term Salesforce environment'
  },
  {
    id: 188,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What developer tool can be used to make code changes effective immediately in an org without installing any software?',
    options: [
      'Developer Console',
      'Workbench',
      'VS Code',
      'Data Loader'
    ],
    correct: 0,
    explanation: 'Developer Console. Developer Console This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 189,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What external web-based platform can be used to query, insert, update and delete Salesforce data?',
    options: [
      'Workbench',
      'Developer Console',
      'VS Code',
      'Data Loader'
    ],
    correct: 0,
    explanation: 'Workbench. Workbench This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 190,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'Which declarative automation feature can send an outbound message without code?',
    options: [
      'Workflow Rules',
      'Flow Builder',
      'Approval Processes',
      'Process Builder'
    ],
    correct: 0,
    explanation: 'Workflow Rules can send outbound messages as one of their action types.'
  },
  {
    id: 191,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'Which automation tool can display a custom user interface?',
    options: [
      'Flow (Screen Flow)',
      'Workflow Rule',
      'Approval Process',
      'Process Builder'
    ],
    correct: 0,
    explanation: 'Screen Flows are the only declarative tool that can display a custom UI.'
  },
  {
    id: 192,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'Which access modifier makes a variable available to all classes in the org?',
    options: [
      'global',
      'private',
      'public',
      'protected'
    ],
    correct: 0,
    explanation: 'The global modifier makes a variable available to all classes in the organization.'
  },
  {
    id: 193,
    chapter: 'processAutomation',
    topic: 'PD1-303',
    question: 'Which loop type always executes at least once?',
    options: [
      'do-while loop',
      'for loop',
      'for-each loop',
      'while loop'
    ],
    correct: 0,
    explanation: 'The do-while loop always executes at least once because the condition is checked after the body.'
  },
  {
    id: 194,
    chapter: 'processAutomation',
    topic: 'PD1-303',
    question: 'What does the break statement do in a loop?',
    options: [
      'Terminates the loop',
      'Skips to next iteration',
      'Pauses execution',
      'Restarts the loop'
    ],
    correct: 0,
    explanation: 'The break statement immediately terminates the loop.'
  },
  {
    id: 195,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'Which SOQL clause sorts query results?',
    options: [
      'ORDER BY',
      'SORT BY',
      'ARRANGE BY',
      'GROUP BY'
    ],
    correct: 0,
    explanation: 'ORDER BY. The ORDER BY clause sorts SOQL query results. This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 196,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What does the UPSERT DML operation do?',
    options: [
      'Inserts new or updates existing records',
      'Merges duplicates',
      'Deletes and recreates records',
      'Converts leads'
    ],
    correct: 0,
    explanation: 'UPSERT inserts new records or updates existing ones based on an external ID.'
  },
  {
    id: 197,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What is the purpose of bind variables in dynamic SOQL?',
    options: [
      'Prevent SOQL injection',
      'Enable bulk queries',
      'Reduce governor limits',
      'Improve performance'
    ],
    correct: 0,
    explanation: 'Bind variables escape user input to prevent SOQL injection.'
  },
  {
    id: 198,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the recommended pattern for trigger logic?',
    options: [
      'One trigger per object with handler class',
      'All logic in trigger',
      'Only before triggers',
      'Multiple triggers per object'
    ],
    correct: 0,
    explanation: 'Use one trigger per object with a handler class for separation of concerns.'
  },
  {
    id: 199,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'Why should SOQL not be inside for loops?',
    options: [
      'Exceeds 100 SOQL query governor limit',
      'Causes syntax errors',
      'Slows the loop',
      'Makes code unreadable'
    ],
    correct: 0,
    explanation: 'SOQL in loops can exceed the 100 SOQL queries per transaction governor limit.'
  },
  {
    id: 200,
    chapter: 'processAutomation',
    topic: 'PD1-308',
    question: 'What is the governor limit for SOQL queries per transaction?',
    options: [
      '100',
      '50',
      '200',
      '150'
    ],
    correct: 0,
    explanation: '100. The limit is 100 SOQL queries per transaction. This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 201,
    chapter: 'processAutomation',
    topic: 'PD1-308',
    question: 'What is the governor limit for DML statements per transaction?',
    options: [
      '150',
      '50',
      '100',
      '200'
    ],
    correct: 0,
    explanation: '150. The limit is 150 DML statements per transaction. This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 202,
    chapter: 'processAutomation',
    topic: 'PD1-308',
    question: 'What is the CPU time limit for synchronous Apex?',
    options: [
      '10,000 ms',
      '30,000 ms',
      '5,000 ms',
      '60,000 ms'
    ],
    correct: 0,
    explanation: '10,000 ms. Synchronous Apex has a 10,000 ms CPU time limit. This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 203,
    chapter: 'processAutomation',
    topic: 'PD1-309',
    question: 'What is the first step in save order of execution?',
    options: [
      'Before triggers',
      'Assignment rules',
      'After triggers',
      'Validation rules'
    ],
    correct: 0,
    explanation: 'Before triggers fire first in the save order of execution.'
  },
  {
    id: 204,
    chapter: 'processAutomation',
    topic: 'PD1-309',
    question: 'How can recursion be prevented in triggers?',
    options: [
      'Static Boolean variable',
      'Final keyword',
      'More governor limits',
      'Cannot be prevented'
    ],
    correct: 0,
    explanation: 'A static Boolean flag prevents re-entry of the trigger.'
  },
  {
    id: 205,
    chapter: 'processAutomation',
    topic: 'PD1-310',
    question: 'Which exception is thrown when a single-record SOQL returns no results?',
    options: [
      'QueryException',
      'DmlException',
      'LimitException',
      'NullPointerException'
    ],
    correct: 0,
    explanation: 'QueryException is thrown when a single-record query returns no results.'
  },
  {
    id: 206,
    chapter: 'processAutomation',
    topic: 'PD1-312',
    question: 'What annotation makes Apex callable from Flow?',
    options: [
      '@InvocableMethod',
      '@future',
      '@RemoteAction',
      '@AuraEnabled'
    ],
    correct: 0,
    explanation: '@InvocableMethod makes an Apex method callable from Flow and Process Builder.'
  },
  {
    id: 207,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What does the static keyword do for a variable?',
    options: [
      'Makes it class-level and shared across all instances',
      'Makes it global',
      'Makes it private',
      'Makes it a constant'
    ],
    correct: 0,
    explanation: 'Static makes a variable class-level, shared across all instances of the class.'
  },
  {
    id: 208,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What does Database.insert(records, false) do?',
    options: [
      'Allows partial success with allOrNone=false',
      'Deletes records first',
      'Inserts all records atomically',
      'Validates only without inserting'
    ],
    correct: 0,
    explanation: 'Database.insert with allOrNone=false allows partial success - some records can succeed while others fail.'
  },
  {
    id: 209,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'Which trigger context variable contains the old field values?',
    options: [
      'Trigger.old',
      'Trigger.new',
      'Trigger.oldMap',
      'Trigger.newMap'
    ],
    correct: 0,
    explanation: 'Trigger.old contains the old versions of the records before the update.'
  },
  {
    id: 210,
    chapter: 'processAutomation',
    topic: 'PD1-308',
    question: 'What happens when a governor limit is exceeded?',
    options: [
      'Exception thrown, DML rolled back',
      'Only current operation fails',
      'Limit increased automatically',
      'Code continues with warning'
    ],
    correct: 0,
    explanation: 'An unhandled exception is thrown and all DML operations in the transaction are rolled back.'
  },
  {
    id: 211,
    chapter: 'processAutomation',
    topic: 'PD1-310',
    question: 'What is the purpose of the finally block?',
    options: [
      'Always executes for cleanup',
      'Stops execution',
      'Creates test data',
      'Catches exceptions'
    ],
    correct: 0,
    explanation: 'The finally block always executes regardless of whether an exception occurred, useful for cleanup.'
  },
  {
    id: 212,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'Which tool can send outbound messages declaratively?',
    options: [
      'Workflow Rules',
      'Process Builder',
      'Flow Builder',
      'Approval Processes'
    ],
    correct: 0,
    explanation: 'Workflow Rules are the declarative tool specifically designed for sending outbound messages.'
  },
  {
    id: 213,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'Can a class implement multiple interfaces in Apex?',
    options: [
      'Yes, but extend only one class',
      'No, only one interface',
      'Yes, and extend multiple classes',
      'No interfaces are supported'
    ],
    correct: 0,
    explanation: 'A class can implement multiple interfaces but can only extend one class.'
  },
  {
    id: 214,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'Which method allows partial DML success?',
    options: [
      'Database.insert(records, false)',
      'System.dml(records)',
      'Database.upsert(records)',
      'insert records'
    ],
    correct: 0,
    explanation: 'Database methods with allOrNone=false allow partial success.'
  },
  {
    id: 215,
    chapter: 'processAutomation',
    topic: 'PD1-308',
    question: 'What is the heap size limit for synchronous Apex?',
    options: [
      '6 MB',
      '24 MB',
      '12 MB',
      '3 MB'
    ],
    correct: 0,
    explanation: '6 MB. The heap size limit for synchronous Apex is 6 MB. This is the correct answer based on Salesforce platform documentation and best practices.'
  },
  {
    id: 216,
    chapter: 'processAutomation',
    topic: 'PD1-309',
    question: 'When do validation rules fire in the save order?',
    options: [
      'After before triggers, before after triggers',
      'After after triggers',
      'At the very end',
      'Before before triggers'
    ],
    correct: 0,
    explanation: 'Validation rules fire after before triggers but before after triggers.'
  },
  {
    id: 217,
    chapter: 'processAutomation',
    topic: 'PD1-310',
    question: 'Should you catch generic Exception or specific exceptions?',
    options: [
      'Catch specific exceptions first',
      'Always catch generic Exception',
      'Never use try-catch',
      'Only use finally'
    ],
    correct: 0,
    explanation: 'Best practice is to catch specific exceptions first for targeted error handling.'
  },
  {
    id: 218,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'What is the correct order of the publish-subscribe messaging pattern for Platform Events?',
    options: [
      'Publisher → Event Message → Event Bus → Event Subscription',
      'Event Bus → Publisher → Subscription → Event Message',
      'Event Message → Publisher → Subscription → Event Bus',
      'Subscription → Event Bus → Publisher → Event Message'
    ],
    correct: 0,
    explanation: 'The publish-subscribe pattern follows: Publisher creates event message → Event Bus receives and stores → Event Subscription processes the event.'
  },
  {
    id: 219,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'What are the three key components of the publish-subscribe messaging pattern for Platform Events?',
    options: [
      'Event Message, Event Bus, Event Subscription',
      'Event Creator, Event Handler, Event Logger',
      'Event Source, Event Target, Event Channel',
      'Event Publisher, Event Consumer, Event Store'
    ],
    correct: 0,
    explanation: 'The three key components are: Event Message (the data), Event Bus (routing mechanism), and Event Subscription (the consumer).'
  },
  {
    id: 220,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'What is Event-Driven Software Architecture?',
    options: [
      'A design pattern where decoupled components communicate through events',
      'A pattern that requires synchronous processing',
      'A pattern where all components must be tightly coupled',
      'A pattern that only works with Salesforce Lightning'
    ],
    correct: 0,
    explanation: 'Event-Driven Architecture is a design pattern where decoupled components communicate through events, allowing for asynchronous and loosely coupled systems.'
  },
  {
    id: 221,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'Which of the following is a benefit of Event-Driven Architecture?',
    options: [
      'Loose coupling between components',
      'Synchronous-only processing',
      'No need for error handling',
      'Tight integration between all systems'
    ],
    correct: 0,
    explanation: 'Event-Driven Architecture provides loose coupling between components, allowing them to evolve independently and communicate asynchronously.'
  },
  {
    id: 222,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'Which asynchronous Apex type supports job chaining and non-primitive data types?',
    options: [
      'Queueable Apex',
      'Scheduled Apex',
      'Batch Apex',
      'Future Methods'
    ],
    correct: 0,
    explanation: 'Queueable Apex supports job chaining and non-primitive data types, making it more flexible than future methods.'
  },
  {
    id: 223,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What is the maximum number of future calls allowed per Apex invocation?',
    options: [
      '50',
      'Unlimited',
      '100',
      '200'
    ],
    correct: 0,
    explanation: 'The governor limit for future methods is 50 calls per Apex invocation.'
  },
  {
    id: 224,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What is the correct syntax for a future method that makes a callout?',
    options: [
      '@Future(callout=true)',
      '@Async(callout=true)',
      '@Future(callouts=true)',
      '@RemoteAction(callout=true)'
    ],
    correct: 0,
    explanation: 'The @Future(callout=true) annotation is used for future methods that need to make web service callouts.'
  },
  {
    id: 225,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'Which method in the Database.Batchable interface is called once at the beginning of a batch job?',
    options: [
      'start()',
      'execute()',
      'finish()',
      'init()'
    ],
    correct: 0,
    explanation: 'The start() method is called once at the beginning of a batch job and returns either a Database.QueryLocator or an Iterable.'
  },
  {
    id: 226,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What is the default batch size for Batch Apex?',
    options: [
      '200 records',
      '1000 records',
      '500 records',
      '100 records'
    ],
    correct: 0,
    explanation: 'The default batch size for Batch Apex is 200 records, though this can be customized.'
  },
  {
    id: 227,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'Which interface allows batch Apex to maintain state across transactions?',
    options: [
      'Database.Stateful',
      'Database.Iterable',
      'Database.QueryLocator',
      'Database.Batchable'
    ],
    correct: 0,
    explanation: 'Implementing Database.Stateful allows instance member variables to retain values across batch transactions.'
  },
  {
    id: 228,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What is the maximum number of scheduled Apex jobs allowed at one time?',
    options: [
      '100',
      '200',
      '50',
      'Unlimited'
    ],
    correct: 0,
    explanation: 'The governor limit for scheduled Apex jobs is 100 at one time.'
  },
  {
    id: 229,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What is the CRON expression format for Scheduled Apex?',
    options: [
      'Seconds Minutes Hours Day_of_month Month Day_of_week optional_year',
      'Day Month Year Hours Minutes',
      'Minutes Hours Day Month Year',
      'Hours Day Month Day_of_week'
    ],
    correct: 0,
    explanation: 'The CRON expression format is: \'Seconds Minutes Hours Day_of_month Month Day_of_week optional_year\'.'
  },
  {
    id: 230,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What does the WITH USER_MODE keyword do in a SOQL query?',
    options: [
      'Enforces field-level security and sharing rules for the current user',
      'Enables bulk API mode',
      'Runs the query as a system administrator',
      'Bypasses all security checks'
    ],
    correct: 0,
    explanation: 'WITH USER_MODE enforces field-level security and sharing rules for the current user during the query.'
  },
  {
    id: 231,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'Which method is used to check if a user has create access to an object?',
    options: [
      'isCreateable()',
      'isUpdateable()',
      'isDeleteable()',
      'isAccessible()'
    ],
    correct: 0,
    explanation: 'isCreateable() checks if the current user has create access to the object and its fields.'
  },
  {
    id: 232,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What does the Security.stripInaccessible() method do?',
    options: [
      'Removes fields the user cannot access from query results',
      'Adds security checks to queries',
      'Deletes inaccessible records',
      'Creates new security policies'
    ],
    correct: 0,
    explanation: 'Security.stripInaccessible() removes fields and relationship fields from query results that the user cannot access.'
  },
  {
    id: 233,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the recommended approach for enforcing sharing rules in Apex?',
    options: [
      'Use the \'with sharing\' keyword',
      'Use the \'global sharing\' keyword',
      'Do not use any sharing keyword',
      'Use the \'without sharing\' keyword'
    ],
    correct: 0,
    explanation: 'The \'with sharing\' keyword enforces sharing rules for the current user, ensuring data visibility is respected.'
  },
  {
    id: 234,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What does the \'inherited sharing\' keyword do?',
    options: [
      'Runs in the sharing mode of the calling class',
      'Always runs with sharing rules',
      'Always runs without sharing rules',
      'Disables sharing for the class'
    ],
    correct: 0,
    explanation: 'Inherited sharing runs in the sharing mode of the calling class, or as \'with sharing\' when used as an Aura controller, Visualforce controller, or Apex REST service.'
  },
  {
    id: 235,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'In Lightning Experience, what happens to Visualforce pages?',
    options: [
      'They run inside an iframe within the single-page application',
      'They cannot be used at all',
      'They replace the Lightning Experience entirely',
      'They run as native Lightning components'
    ],
    correct: 0,
    explanation: 'In Lightning Experience, Visualforce pages run inside an iframe within the SPA, which affects DOM access and JavaScript scope.'
  },
  {
    id: 236,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which object is auto-injected in Lightning Experience for navigation?',
    options: [
      'sforce.one',
      'visualforce.navigation',
      'lightning.navigation',
      'sforce.navigation'
    ],
    correct: 0,
    explanation: 'The sforce.one object is auto-injected in Lightning Experience for navigation functions like navigateToSObject and navigateToURL.'
  },
  {
    id: 237,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'What should you NEVER do in Lightning Experience for navigation?',
    options: [
      'Set window.location directly',
      'Use navigateToURL',
      'Use PageReference',
      'Use sforce.one'
    ],
    correct: 0,
    explanation: 'Never set window.location directly in Lightning Experience as it can break the single-page application architecture.'
  },
  {
    id: 238,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'What is the purpose of the $User.UIThemeDisplayed variable?',
    options: [
      'To detect what UI theme the user is actually seeing',
      'To change the color scheme',
      'To set the UI theme',
      'To enable dark mode'
    ],
    correct: 0,
    explanation: '$User.UIThemeDisplayed detects what UI theme the user is actually seeing, which is preferred over $User.UITheme.'
  },
  {
    id: 239,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What is the recommended approach for lazy instantiation in LWC?',
    options: [
      'Use standard tab components, Lightning Component Actions, or utility bar',
      'Load all components at startup',
      'Avoid using components at all',
      'Use only static rendering'
    ],
    correct: 0,
    explanation: 'Lazy instantiation approaches include standard tab components, Lightning Component Actions, utility bar, and lightning-tabset/lightning-tab.'
  },
  {
    id: 240,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What is the difference between CSS slds-show/slds-hide and lwc:if directives?',
    options: [
      'CSS preserves state; lwc:if destroys and recreates',
      'lwc:if preserves state; CSS destroys',
      'Neither preserves state',
      'They are identical'
    ],
    correct: 0,
    explanation: 'CSS slds-show/slds-hide preserves component state while lwc:if destroys and recreates the component, losing state.'
  },
  {
    id: 241,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What is the recommended priority for conditional rendering in LWC?',
    options: [
      'Lightning App Builder Dynamic Component Visibility > lwc:if > CSS',
      'CSS > lwc:if > App Builder',
      'All are equally recommended',
      'lwc:if > CSS > App Builder'
    ],
    correct: 0,
    explanation: 'The recommended priority is: Lightning App Builder Dynamic Component Visibility (declarative), then lwc:if/elseif/else directives, then CSS slds-show/slds-hide.'
  },
  {
    id: 242,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Why should you avoid using jQuery in LWC?',
    options: [
      'LWC uses shadow DOM which encapsulates styles and DOM',
      'LWC has its own jQuery equivalent',
      'jQuery is too slow',
      'jQuery doesn\'t work with JavaScript'
    ],
    correct: 0,
    explanation: 'LWC uses shadow DOM for encapsulation, making jQuery largely unnecessary and potentially problematic.'
  },
  {
    id: 243,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What are the benefits of base Lightning components?',
    options: [
      'Native styles, pre-loaded, responsive, actively developed, accessible',
      'Only performance improvements',
      'Only visual consistency',
      'Only accessibility features'
    ],
    correct: 0,
    explanation: 'Base Lightning components provide: native styles, pre-loaded (no download), responsive, actively developed, accessible, and client-side validation.'
  },
  {
    id: 244,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Can Aura components contain LWC?',
    options: [
      'Yes, Aura can contain LWC',
      'Only in Lightning Experience',
      'Only in Salesforce Mobile',
      'No, they cannot be mixed'
    ],
    correct: 0,
    explanation: 'Aura components CAN contain LWC, but LWC CANNOT contain Aura components.'
  },
  {
    id: 245,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What is the LWC equivalent of Aura\'s <aura:handler name=\'init\'>?',
    options: [
      'connectedCallback()',
      'renderedCallback()',
      'disconnectedCallback()',
      'constructor()'
    ],
    correct: 0,
    explanation: 'The connectedCallback() lifecycle hook in LWC is equivalent to Aura\'s <aura:handler name=\'init\'>.'
  },
  {
    id: 246,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What is the LWC equivalent of Aura\'s <aura:iteration>?',
    options: [
      '<template for:each>',
      '<template iterate>',
      '<repeat>',
      '<for-each>'
    ],
    correct: 0,
    explanation: 'The <template for:each={...} for:item=\'...\'> directive is the LWC equivalent of Aura\'s <aura:iteration>.'
  },
  {
    id: 247,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What type of data binding does LWC use?',
    options: [
      'One-way data binding only',
      'Two-way data binding',
      'Three-way data binding',
      'No data binding'
    ],
    correct: 0,
    explanation: 'LWC uses one-way data binding only. Changes propagate from owner to child, and child fires events to modify owner data.'
  },
  {
    id: 248,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What replaces Aura\'s facets in LWC?',
    options: [
      'HTML <slot> elements',
      'CSS classes',
      'Component attributes',
      'Event handlers'
    ],
    correct: 0,
    explanation: 'HTML <slot> elements replace Aura\'s facets. Named slots replace named facets, and unnamed slots replace the body facet.'
  },
  {
    id: 249,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What does Test.startTest() do?',
    options: [
      'Resets governor limits for the test',
      'Starts the test execution',
      'Creates test data',
      'Enables debug logging'
    ],
    correct: 0,
    explanation: 'Test.startTest() resets governor limits, isolating data setup limit usage from test execution.'
  },
  {
    id: 250,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is the purpose of the @TestSetup annotation?',
    options: [
      'To create test data once that is available to all test methods',
      'To enable debugging',
      'To mark a class as a test class',
      'To set up the test environment'
    ],
    correct: 0,
    explanation: '@TestSetup creates test data once that is available to all test methods in the class, and data rolls back after each test.'
  },
  {
    id: 251,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What interface must be implemented to mock HTTP callouts in tests?',
    options: [
      'HttpCalloutMock',
      'CalloutMock',
      'WebServiceMock',
      'HttpResponseMock'
    ],
    correct: 0,
    explanation: 'The HttpCalloutMock interface must be implemented to mock HTTP callouts during testing.'
  },
  {
    id: 252,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Can LWC be developed in the Developer Console?',
    options: [
      'No, LWC cannot be developed in Developer Console',
      'Only basic LWC',
      'Only with extensions',
      'Yes, fully supported'
    ],
    correct: 0,
    explanation: 'LWC cannot be developed in the Developer Console. Use Salesforce Extensions for VS Code instead.'
  },
  {
    id: 253,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What are the two main tools for Salesforce development?',
    options: [
      'Developer Console and Salesforce Extensions for VS Code',
      'Eclipse and IntelliJ',
      'Notepad and Sublime Text',
      'Visual Studio and Xcode'
    ],
    correct: 0,
    explanation: 'The two main tools are Developer Console (browser-based) and Salesforce Extensions for VS Code (desktop-based with version control).'
  },
  {
    id: 254,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What is the purpose of checkpoints in Developer Console?',
    options: [
      'To take snapshots of Apex code at particular execution points',
      'To mark code for deletion',
      'To set breakpoints for debugging',
      'To pause code execution'
    ],
    correct: 0,
    explanation: 'Checkpoints provide snapshots of Apex code at particular execution points, showing objects in memory.'
  },
  {
    id: 255,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What is the maximum number of checkpoints allowed per Apex class?',
    options: [
      '5',
      'Unlimited',
      '1',
      '10'
    ],
    correct: 0,
    explanation: 'The maximum number of checkpoints per Apex class is 5.'
  },
  {
    id: 256,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is the source of truth in the org development model?',
    options: [
      'Version control repository (Git)',
      'VS Code',
      'Developer Console',
      'The Salesforce org'
    ],
    correct: 0,
    explanation: 'In the org development model, the version control repository (Git) is the source of truth for all release changes.'
  },
  {
    id: 257,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is the correct order of the release environment lifecycle?',
    options: [
      'Develop & Test → Build Release → Test Release → Release → Production',
      'Build → Develop → Test → Release → Production',
      'Test → Develop → Build → Release → Production',
      'Production → Release → Test → Build → Develop'
    ],
    correct: 0,
    explanation: 'The release lifecycle is: Develop & Test (developer sandboxes) → Build Release (integration) → Test Release (UAT) → Release (training) → Production.'
  },
  {
    id: 258,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What command retrieves metadata from a Salesforce org to a local project?',
    options: [
      'sf project retrieve start',
      'sf metadata pull',
      'sf org retrieve',
      'sf project deploy start'
    ],
    correct: 0,
    explanation: 'The sf project retrieve start command retrieves metadata from a Salesforce org to the local SFDX project.'
  },
  {
    id: 259,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is a package.xml manifest?',
    options: [
      'A file listing metadata components to deploy',
      'A package of actual code',
      'A configuration file',
      'A documentation file'
    ],
    correct: 0,
    explanation: 'A package.xml manifest lists metadata components to deploy but does not contain the actual code.'
  },
  {
    id: 260,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is Quick Deploy in Salesforce CLI?',
    options: [
      'Deploys using a job ID from a successful validation',
      'Deploys only changed files',
      'Deploys to multiple orgs simultaneously',
      'Deploys without validation'
    ],
    correct: 0,
    explanation: 'Quick Deploy uses a job ID from a successful validation to deploy without re-running all tests.'
  },
  {
    id: 261,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What is the most recommended way to prevent SOQL injection?',
    options: [
      'Use static queries with bind variables',
      'Use typecasting',
      'Use String.escapeSingleQuotes()',
      'Use allowlisting'
    ],
    correct: 0,
    explanation: 'Static queries with bind variables are the most recommended way to prevent SOQL injection.'
  },
  {
    id: 262,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What does String.escapeSingleQuotes() do?',
    options: [
      'Escapes single quote characters with a backslash',
      'Removes all quotes from a string',
      'Adds quotes around a string',
      'Converts quotes to double quotes'
    ],
    correct: 0,
    explanation: 'String.escapeSingleQuotes() escapes single quote characters with a backslash, preventing attackers from breaking out of string boundaries.'
  },
  {
    id: 263,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What is the limitation of String.escapeSingleQuotes() for preventing SOQL injection?',
    options: [
      'It only works for strings, not numeric values',
      'It prevents all injection types',
      'It works for all data types',
      'It\'s the strongest defense'
    ],
    correct: 0,
    explanation: 'String.escapeSingleQuotes() only works for strings and doesn\'t prevent injections that don\'t rely on single quote characters (e.g., numeric injection).'
  },
  {
    id: 264,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'Why is blocklisting (removing bad characters) weaker than allowlisting?',
    options: [
      'It\'s easier to predict good inputs than all possible bad inputs',
      'They are equally strong',
      'Blocklisting is actually stronger',
      'Allowlisting doesn\'t work for SOQL'
    ],
    correct: 0,
    explanation: 'Blocklisting is weaker because it\'s easier to predict a few good inputs than to predict all possible bad inputs.'
  },
  {
    id: 265,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the default execution mode for Apex classes?',
    options: [
      'System mode',
      'Admin mode',
      'User mode',
      'Guest mode'
    ],
    correct: 0,
    explanation: 'Apex classes execute in system mode by default, where object permissions, field-level security, and sharing rules aren\'t applied.'
  },
  {
    id: 266,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'When was User Mode introduced for database operations?',
    options: [
      'Spring 2023',
      'Winter 2022',
      'Spring 2020',
      'Summer 2021'
    ],
    correct: 0,
    explanation: 'User Mode for database operations was introduced in Spring 2023.'
  },
  {
    id: 267,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the syntax for SOQL with User Mode?',
    options: [
      'SELECT Id FROM Account WITH USER_MODE',
      'SELECT Id FROM Account USER_MODE',
      'SELECT Id FROM Account IN USER_MODE',
      'SELECT Id FROM Account AS USER'
    ],
    correct: 0,
    explanation: 'The syntax for SOQL with User Mode is: SELECT Id FROM Account WITH USER_MODE.'
  },
  {
    id: 268,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the syntax for DML with User Mode?',
    options: [
      'insert as user o;',
      'insert asUser o;',
      'insert user o;',
      'insert with user o;'
    ],
    correct: 0,
    explanation: 'The syntax for DML with User Mode is: insert as user o; (or database.insert(o, AccessLevel.USER_MODE)).'
  },
  {
    id: 269,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'What happens to showHeader and sidebar in Lightning Experience?',
    options: [
      'They are forced to false',
      'They work normally',
      'They cause errors',
      'They are ignored'
    ],
    correct: 0,
    explanation: 'In Lightning Experience, showHeader and sidebar are always forced to false.'
  },
  {
    id: 270,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'What is the purpose of the <apex:slds> component?',
    options: [
      'Loads Lightning Design System without static resource upload',
      'Adds SLDS to static resources',
      'Enables Lightning Experience',
      'Creates a new Lightning component'
    ],
    correct: 0,
    explanation: 'The <apex:slds> component loads the Lightning Design System without requiring static resource upload.'
  },
  {
    id: 271,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which Visualforce features don\'t work in Lightning Experience?',
    options: [
      'showHeader, sidebar, certain related lists, and <apex:iframe>',
      'Only CSS features',
      'All Visualforce features work',
      'Only JavaScript features'
    ],
    correct: 0,
    explanation: 'Features that don\'t work include showHeader, sidebar, certain related lists, and <apex:iframe> (VF already in an iframe).'
  },
  {
    id: 272,
    chapter: 'userInterface',
    topic: 'PD1-408',
    question: 'What should you do with non-lifecycle event listeners in LWC?',
    options: [
      'Remove them in disconnectedCallback()',
      'Add them in constructor',
      'Keep them always',
      'Never use them'
    ],
    correct: 0,
    explanation: 'Non-lifecycle event listeners should be removed in disconnectedCallback() to prevent memory leaks.'
  },
  {
    id: 273,
    chapter: 'userInterface',
    topic: 'PD1-408',
    question: 'What is event delegation in LWC?',
    options: [
      'A technique to reduce the number of event listeners',
      'A way to delegate events to parent components',
      'A way to create custom events',
      'A method to prevent event propagation'
    ],
    correct: 0,
    explanation: 'Event delegation is a technique that reduces the number of event listeners by handling events at a higher level in the DOM.'
  },
  {
    id: 274,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What happens when an assertion fails in a test?',
    options: [
      'An uncatchable AssertException is thrown',
      'The test continues',
      'A warning is logged',
      'The test is skipped'
    ],
    correct: 0,
    explanation: 'Failed assertions throw an AssertException that is fatal and uncatchable, stopping the test.'
  },
  {
    id: 275,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is a test suite?',
    options: [
      'A collection of test classes run together',
      'A test data factory',
      'A test configuration file',
      'A single test method'
    ],
    correct: 0,
    explanation: 'A test suite is a collection of test classes that can be run together for regression testing.'
  },
  {
    id: 276,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Do test methods have access to pre-existing org data?',
    options: [
      'No, except setup/metadata objects like User and Profile',
      'Only custom objects',
      'Only with @seeAllData',
      'Yes, full access'
    ],
    correct: 0,
    explanation: 'Test methods don\'t have access to pre-existing org data, except setup/metadata objects like User, Profile, and Organization.'
  },
  {
    id: 277,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What does @IsTest(seeAllData=true) do?',
    options: [
      'Grants access to all org data in the test',
      'Enables debugging',
      'Makes the test run faster',
      'Creates test data automatically'
    ],
    correct: 0,
    explanation: '@IsTest(seeAllData=true) grants the test method access to all data in the organization, which is not a best practice.'
  },
  {
    id: 278,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is the difference between instance and static methods?',
    options: [
      'Instance methods require an object; static methods belong to the class',
      'They are identical',
      'Instance methods can\'t be overridden',
      'Static methods are faster'
    ],
    correct: 0,
    explanation: 'Instance methods require an object to be called; static methods belong to the class and can be called without an object.'
  },
  {
    id: 279,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What are the access modifiers available in Apex?',
    options: [
      'private, protected, public, global',
      'private, public, shared, global',
      'private, public, internal, external',
      'local, global, public, protected'
    ],
    correct: 0,
    explanation: 'The four access modifiers in Apex are: private, protected, public, and global.'
  },
  {
    id: 280,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What data types are available in Apex?',
    options: [
      'Primitives, sObject, Collections, Enums, user-defined classes, system-supplied classes',
      'Only collections',
      'Only primitives and objects',
      'Only strings and numbers'
    ],
    correct: 0,
    explanation: 'Apex supports: primitives (Integer, Double, Long, Date, Datetime, String, ID, Boolean), sObject, collections (Sets, Maps, Lists), enums, user-defined classes, and system-supplied classes.'
  },
  {
    id: 281,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is the relationship between sObjects and Salesforce records?',
    options: [
      'Every Salesforce record is natively represented as an sObject in Apex',
      'sObjects are only for custom objects',
      'sObjects are only for API calls',
      'Records and sObjects are different things'
    ],
    correct: 0,
    explanation: 'Every Salesforce record is natively represented as an sObject in Apex, whether it\'s a standard or custom object.'
  },
  {
    id: 282,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is the API name convention for custom objects and fields?',
    options: [
      'Custom objects end with __c, custom relationship fields end with __r',
      'All end with __c',
      'All end with __r',
      'No suffix is needed'
    ],
    correct: 0,
    explanation: 'Custom objects and fields end with __c, and custom relationship fields end with __r.'
  },
  {
    id: 283,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What are the six DML statements in Apex?',
    options: [
      'insert, update, upsert, delete, undelete, merge',
      'insert, modify, upsert, delete, undelete, merge',
      'create, update, delete, upsert, undelete, merge',
      'insert, update, delete, save, load, merge'
    ],
    correct: 0,
    explanation: 'The six DML statements are: insert, update, upsert, delete, undelete, and merge.'
  },
  {
    id: 284,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What happens when upsert finds multiple matches?',
    options: [
      'It throws an error',
      'It updates the first match',
      'It deletes all matches',
      'It creates a new record'
    ],
    correct: 0,
    explanation: 'When upsert finds multiple matches for a key, it throws an error.'
  },
  {
    id: 285,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What is the allOrNone parameter in Database methods?',
    options: [
      'When false, allows partial success of DML operations',
      'When true, allows partial success',
      'Controls error handling',
      'Controls batch size'
    ],
    correct: 0,
    explanation: 'When allOrNone is set to false, partial success is allowed - some records can succeed while others fail.'
  },
  {
    id: 286,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What is the purpose of SOQL for loops?',
    options: [
      'To process records in chunks of 200 to avoid heap size limits',
      'To make queries faster',
      'To reduce governor limits',
      'To enable bulk processing'
    ],
    correct: 0,
    explanation: 'SOQL for loops process records in chunks of 200, helping to avoid heap size limits when processing large result sets.'
  },
  {
    id: 287,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'What wildcards does SOSL support?',
    options: [
      '* (zero or more characters) and ? (exactly one character)',
      'Only % (any characters)',
      'No wildcards',
      'Only * (any characters)'
    ],
    correct: 0,
    explanation: 'SOSL supports * wildcard (matches zero or more characters) and ? wildcard (matches exactly one character).'
  },
  {
    id: 288,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What are the seven possible trigger events?',
    options: [
      'before insert, before update, before delete, after insert, after update, after delete, after undelete',
      'before and after for insert, update, delete',
      'insert, update, delete, undelete',
      'before save, after save, before delete, after delete'
    ],
    correct: 0,
    explanation: 'The seven trigger events are: before insert, before update, before delete, after insert, after update, after delete, and after undelete.'
  },
  {
    id: 289,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the purpose of the addError() method in triggers?',
    options: [
      'To throw a fatal error that rolls back the operation',
      'To skip the current record',
      'To log an error message',
      'To continue processing'
    ],
    correct: 0,
    explanation: 'addError() throws a fatal error that displays the message in the UI and rolls back the entire operation.'
  },
  {
    id: 290,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the Trigger.operationType context variable?',
    options: [
      'Returns the System.TriggerOperation enum for the current event',
      'Returns the trigger name',
      'Returns the object type',
      'Returns the number of records'
    ],
    correct: 0,
    explanation: 'Trigger.operationType returns the System.TriggerOperation enum, which can be used in switch statements to handle different events.'
  },
  {
    id: 291,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What does the start() method return in Batch Apex?',
    options: [
      'A Database.QueryLocator or an Iterable',
      'Nothing (void)',
      'A single record',
      'A list of records'
    ],
    correct: 0,
    explanation: 'The start() method returns either a Database.QueryLocator object or an Iterable for processing records.'
  },
  {
    id: 292,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What is the advantage of using Database.QueryLocator in Batch Apex?',
    options: [
      'Bypasses the governor limit for SOQL records (up to 50 million)',
      'Reduces memory usage',
      'Makes the batch run faster',
      'Enables parallel processing'
    ],
    correct: 0,
    explanation: 'With Database.QueryLocator, the governor limit for SOQL records is bypassed, allowing up to 50 million records to be processed.'
  },
  {
    id: 293,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What happens if one batch fails in Batch Apex?',
    options: [
      'Other successful batch transactions are not rolled back',
      'The entire job fails',
      'All batches are rolled back',
      'The failed batch is retried'
    ],
    correct: 0,
    explanation: 'If one batch fails, other successful batch transactions are not rolled back, providing fault isolation.'
  },
  {
    id: 294,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What is the maximum number of jobs that can be added to the queue with System.enqueueJob?',
    options: [
      '50',
      '100',
      '200',
      'Unlimited'
    ],
    correct: 0,
    explanation: 'Up to 50 jobs can be added to the queue with System.enqueueJob in a single transaction.'
  },
  {
    id: 295,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What is job chaining in Queueable Apex?',
    options: [
      'Submitting a second job from within the execute() method',
      'Running multiple jobs simultaneously',
      'Connecting jobs to external systems',
      'Linking jobs to a schedule'
    ],
    correct: 0,
    explanation: 'Job chaining is submitting a second job from within the execute() method of a Queueable job for sequential processing.'
  },
  {
    id: 296,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'What interface must a class implement to be schedulable?',
    options: [
      'Schedulable',
      'Scheduleable',
      'Cronable',
      'Timeable'
    ],
    correct: 0,
    explanation: 'A class must implement the Schedulable interface and its required execute() method to be scheduled.'
  },
  {
    id: 297,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What is the workaround for making callouts from scheduled Apex?',
    options: [
      'Use @Future(callout=true) from scheduled Apex, or call a batch job',
      'Use Queueable Apex instead',
      'Direct callouts work fine',
      'Callouts are not possible'
    ],
    correct: 0,
    explanation: 'Synchronous callouts are not supported from scheduled Apex. Use @Future(callout=true) or execute a batch job that supports callouts.'
  },
  {
    id: 298,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What is the Apex Flex Queue?',
    options: [
      'Holds up to 100 batch jobs in holding status',
      'A queue for future methods',
      'A queue for scheduled jobs',
      'A queue for Queueable jobs'
    ],
    correct: 0,
    explanation: 'The Apex Flex Queue holds up to 100 batch jobs in holding status, processing them first-in, first-out.'
  },
  {
    id: 299,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'How many batch jobs can process simultaneously per org?',
    options: [
      '5',
      '100',
      '50',
      '10'
    ],
    correct: 0,
    explanation: 'Up to 5 queued or active batch jobs can process simultaneously per org.'
  },
  {
    id: 300,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What are the three main parts of a CLI command structure?',
    options: [
      'Command, Flags/Options, Arguments',
      'Input, Process, Output',
      'Action, Parameters, Output',
      'Command, Subcommand, Parameter'
    ],
    correct: 0,
    explanation: 'The three main parts are: Command/Utility (what action), Flags/Options (identified by hyphens), and Arguments (what to process).'
  },
  {
    id: 301,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is the difference between flags and switches in CLI?',
    options: [
      'Flags require values; switches don\'t require arguments',
      'Flags are for Windows only',
      'Switches are faster',
      'They are identical'
    ],
    correct: 0,
    explanation: 'Flags require values (e.g., -n ProjectName), while switches don\'t require arguments (e.g., -d for set-default).'
  },
  {
    id: 302,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What command validates a deployment without committing?',
    options: [
      'sf project deploy validate',
      'sf project deploy check',
      'sf project deploy test',
      'sf project deploy start'
    ],
    correct: 0,
    explanation: 'sf project deploy validate verifies test results without committing the deployment.'
  },
  {
    id: 303,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What is a destructive changes manifest?',
    options: [
      'A file that specifies components to delete during deployment',
      'A rollback file',
      'A file that deletes the entire org',
      'A backup file'
    ],
    correct: 0,
    explanation: 'A destructive changes manifest specifies metadata components to delete during deployment.'
  },
  {
    id: 304,
    chapter: 'testingDebugging',
    topic: 'PD1-509',
    question: 'What is the time window for Quick Deploy after a successful validation?',
    options: [
      '10 days',
      '7 days',
      '24 hours',
      '30 days'
    ],
    correct: 0,
    explanation: 'Quick Deploy can use a job ID from a successful validation within a 10-day window.'
  },
  {
    id: 305,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Why should you lock image dimensions in LWC?',
    options: [
      'To avoid reflows and improve performance',
      'To enable lazy loading',
      'To reduce file size',
      'To make images load faster'
    ],
    correct: 0,
    explanation: 'Locking image dimensions avoids reflows, which improves rendering performance.'
  },
  {
    id: 306,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What is the recommended approach for third-party JavaScript libraries in LWC?',
    options: [
      'Upload as static resource and use loadScript/loadStyle',
      'Use npm install',
      'Import from CDN',
      'Include directly in HTML'
    ],
    correct: 0,
    explanation: 'Third-party libraries must be uploaded as static resources and loaded using loadScript/loadStyle from @salesforce/resourceUrl.'
  },
  {
    id: 307,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'What is the difference between Aura and LWC data binding?',
    options: [
      'Aura has two-way binding; LWC has one-way binding only',
      'They are identical',
      'Neither has data binding',
      'LWC has two-way binding; Aura has one-way'
    ],
    correct: 0,
    explanation: 'Aura supports two-way data binding, while LWC uses one-way data binding only (child fires events to modify owner data).'
  },
  {
    id: 308,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'Which of the following is NOT a characteristic of Apex?',
    options: [
      'Client-side execution',
      'Multitenant-aware',
      'Integrated with the database',
      'Strongly typed'
    ],
    correct: 0,
    explanation: 'Apex is server-side, not client-side. It is strongly typed, multitenant-aware, and integrated with the database.'
  },
  {
    id: 309,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is Anonymous Apex used for?',
    options: [
      'Running code on the fly for testing via Developer Console',
      'Writing triggers',
      'Deploying to production',
      'Creating permanent classes'
    ],
    correct: 0,
    explanation: 'Anonymous Apex is used for running code on the fly for testing via the Developer Console\'s Execute Anonymous window.'
  },
  {
    id: 310,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is the syntax for declaring a List in Apex?',
    options: [
      'List<String> myList = new List<String>();',
      'String[] myList = new String[]();',
      'Array<String> myList = new Array<String>();',
      'ArrayList<String> myList = new ArrayList<String>();'
    ],
    correct: 0,
    explanation: 'The syntax for declaring a List in Apex is: List<String> myList = new List<String>(); (or String[] syntax).'
  },
  {
    id: 311,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What are the three types of collections in Apex?',
    options: [
      'Lists, Maps, and Sets',
      'Vectors, Hashes, and Queues',
      'Collections, Arrays, and Dictionaries',
      'Arrays, Objects, and Lists'
    ],
    correct: 0,
    explanation: 'The three types of collections in Apex are: Lists (ordered), Maps (key-value pairs), and Sets (unique values).'
  },
  {
    id: 312,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which sforce.one function navigates to a specific record?',
    options: [
      'navigateToSObject(recordId)',
      'createRecord(entityName)',
      'navigateToList(listViewId)',
      'navigateToURL(url)'
    ],
    correct: 0,
    explanation: 'sforce.one.navigateToSObject(recordId) navigates to a specific record in Lightning Experience.'
  },
  {
    id: 313,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which sforce.one function opens the record creation page?',
    options: [
      'createRecord(entityName)',
      'editRecord(recordId)',
      'navigateToURL(url)',
      'navigateToSObject(recordId)'
    ],
    correct: 0,
    explanation: 'sforce.one.createRecord(entityName) opens the record creation page in Lightning Experience.'
  },
  {
    id: 314,
    chapter: 'userInterface',
    topic: 'PD1-407',
    question: 'What resources are included in an Aura component bundle?',
    options: [
      'Component, Controller, Helper, Style, Design, Documentation, Renderer',
      'Component, CSS, and JavaScript',
      'Only Component and Controller',
      'HTML, CSS, and JavaScript'
    ],
    correct: 0,
    explanation: 'An Aura component bundle includes: Component (.cmp), Controller (.js), Helper (.js), Style (.css), Design (.design), Documentation, and Renderer.'
  },
  {
    id: 315,
    chapter: 'userInterface',
    topic: 'PD1-407',
    question: 'What is the purpose of the Design resource in an Aura component?',
    options: [
      'Exposes attributes to Lightning App Builder',
      'Creates documentation',
      'Defines the component\'s visual design',
      'Handles events'
    ],
    correct: 0,
    explanation: 'The Design resource exposes component attributes to Lightning App Builder for configuration.'
  },
  {
    id: 316,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'When is connectedCallback() called in LWC?',
    options: [
      'When the component is inserted into the DOM',
      'When the component is rendered',
      'When the component is created',
      'When the component is removed from the DOM'
    ],
    correct: 0,
    explanation: 'connectedCallback() is called when the component is inserted into the DOM, similar to Aura\'s init event.'
  },
  {
    id: 317,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'When should you use disconnectedCallback()?',
    options: [
      'To clean up resources when the component is removed from the DOM',
      'To render the component',
      'To initialize the component',
      'To handle errors'
    ],
    correct: 0,
    explanation: 'disconnectedCallback() is used to clean up resources (like event listeners) when the component is removed from the DOM.'
  },
  {
    id: 318,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What does WITH SECURITY_ENFORCED do in a SOQL query?',
    options: [
      'Validates field- and object-level security automatically',
      'Enables encryption',
      'Forces user mode',
      'Bypasses sharing rules'
    ],
    correct: 0,
    explanation: 'WITH SECURITY_ENFORCED validates field- and object-level security in SOQL queries automatically.'
  },
  {
    id: 319,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What API version is required for WITH SECURITY_ENFORCED?',
    options: [
      '48.0+',
      '45.0+',
      '50.0+',
      '40.0+'
    ],
    correct: 0,
    explanation: 'WITH SECURITY_ENFORCED requires API version 48.0 or higher.'
  },
  {
    id: 320,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What does the isDeleteable() method check?',
    options: [
      'Delete access on the object (no field check needed)',
      'Delete access on each field',
      'Create access on the object',
      'Read access on the object'
    ],
    correct: 0,
    explanation: 'isDeleteable() checks delete access on the object. No field-level check is needed since you delete entire records.'
  },
  {
    id: 321,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'When is Trigger.newMap available?',
    options: [
      'Before update, after insert, after update, after undelete',
      'Only before insert',
      'All trigger events',
      'Only after delete'
    ],
    correct: 0,
    explanation: 'Trigger.newMap is available in: before update, after insert, after update, and after undelete.'
  },
  {
    id: 322,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'When is Trigger.oldMap available?',
    options: [
      'Update and delete triggers',
      'Only insert triggers',
      'Only undelete triggers',
      'All trigger events'
    ],
    correct: 0,
    explanation: 'Trigger.oldMap is available in update and delete triggers.'
  },
  {
    id: 323,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'Can you perform DML on Trigger.new in a before trigger?',
    options: [
      'No, performing DML on Trigger.new in a before trigger causes an error',
      'Only for update triggers',
      'Only for insert triggers',
      'Yes, it\'s the recommended approach'
    ],
    correct: 0,
    explanation: 'Performing DML on Trigger.new records in a before trigger causes an error. Records are saved automatically after the trigger finishes.'
  },
  {
    id: 324,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the recommended pattern for handling multiple trigger events?',
    options: [
      'Use a switch statement on Trigger.operationType',
      'Use if-else statements',
      'Create separate triggers for each event',
      'Use a single trigger without a handler'
    ],
    correct: 0,
    explanation: 'Using a switch statement on Trigger.operationType is the recommended pattern for handling multiple trigger events.'
  },
  {
    id: 325,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'How should triggers handle callouts to external services?',
    options: [
      'Use @future(callout=true) for asynchronous callouts',
      'Callouts are not allowed in triggers',
      'Make synchronous callouts directly',
      'Use Queueable Apex'
    ],
    correct: 0,
    explanation: 'External web service calls from triggers must be asynchronous. Use @future(callout=true) annotation.'
  },
  {
    id: 326,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the governor limit for SOQL queries in synchronous Apex?',
    options: [
      '100',
      '50',
      '200',
      'Unlimited'
    ],
    correct: 0,
    explanation: 'The governor limit for SOQL queries in synchronous Apex is 100 (200 for asynchronous).'
  },
  {
    id: 327,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the recommended approach for querying related records in triggers?',
    options: [
      'Use subqueries (inner queries) or IN clause with Trigger.new binding',
      'Query inside the for loop',
      'Use SOSL instead',
      'Query each record individually'
    ],
    correct: 0,
    explanation: 'Use subqueries or IN clause with Trigger.new binding to efficiently query related records without hitting governor limits.'
  },
  {
    id: 328,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the AddRelatedRecord trigger pattern?',
    options: [
      'A pattern that creates child records when parent records are inserted or updated',
      'A pattern that updates related records',
      'A pattern that deletes related records',
      'A pattern that queries related records'
    ],
    correct: 0,
    explanation: 'The AddRelatedRecord pattern creates child records (like Opportunities) when parent records (like Accounts) are inserted or updated.'
  },
  {
    id: 329,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the best practice for adding related records in a trigger?',
    options: [
      'Query related child records using SOQL with subquery, build a list, then insert at the end',
      'Query each record individually',
      'Use DML inside the for loop',
      'Insert records one at a time inside the loop'
    ],
    correct: 0,
    explanation: 'The bulkified pattern is: query related child records using SOQL with subquery, build a list of new records, then insert at the end.'
  },
  {
    id: 330,
    chapter: 'processAutomation',
    topic: 'PD1-310',
    question: 'What is a DmlException?',
    options: [
      'An exception thrown when a DML operation fails',
      'A governor limit error',
      'A database connection error',
      'A syntax error'
    ],
    correct: 0,
    explanation: 'A DmlException is thrown when a DML operation fails, such as when a required field is missing or a validation rule fails.'
  },
  {
    id: 331,
    chapter: 'processAutomation',
    topic: 'PD1-310',
    question: 'What is the purpose of try-catch blocks in Apex?',
    options: [
      'To handle exceptions gracefully and prevent unhandled errors',
      'To create test methods',
      'To enable debugging',
      'To improve performance'
    ],
    correct: 0,
    explanation: 'Try-catch blocks handle exceptions gracefully, allowing the code to respond to errors without crashing.'
  },
  {
    id: 332,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What should tests cover besides positive cases?',
    options: [
      'Negative cases, bulk processing, and single-record processing',
      'Only edge cases',
      'Only positive cases',
      'Only bulk processing'
    ],
    correct: 0,
    explanation: 'Tests should cover: positive cases, negative cases, bulk processing, and single-record processing.'
  },
  {
    id: 333,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is a TestDataFactory?',
    options: [
      'A public static class with reusable methods for creating test data',
      'A built-in Salesforce class',
      'A third-party library',
      'A testing framework'
    ],
    correct: 0,
    explanation: 'A TestDataFactory is a recommended pattern - a public static class annotated with @IsTest that centralizes test-data creation for reuse.'
  },
  {
    id: 334,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What does Test.setFixedSearchResults() do?',
    options: [
      'Sets fixed search results for SOSL queries in tests',
      'Sets fixed SOQL results',
      'Enables search indexing',
      'Creates test data'
    ],
    correct: 0,
    explanation: 'Test.setFixedSearchResults() sets fixed search results for SOSL queries in tests, since SOSL returns empty results by default in test context.'
  },
  {
    id: 335,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What can you do in the Developer Console?',
    options: [
      'Create/edit Apex classes, triggers, Aura components, VF pages; run queries; analyze logs',
      'Only run queries',
      'Only debug',
      'Only write Apex code'
    ],
    correct: 0,
    explanation: 'Developer Console can: create/edit Apex, triggers, Aura, VF; run SOQL/SOSL; analyze debug logs; set checkpoints; test code.'
  },
  {
    id: 336,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What are the Log Inspector panels?',
    options: [
      'Stack Tree, Execution Stack, Execution Log, Source, Source List, Variables, Execution Overview',
      'Only Execution Log',
      'Only Log and Variables',
      'Only Stack Tree and Source'
    ],
    correct: 0,
    explanation: 'The Log Inspector has: Stack Tree, Execution Stack, Execution Log, Source, Source List, Variables, and Execution Overview panels.'
  },
  {
    id: 337,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What are the log levels from least to most detail?',
    options: [
      'NONE, ERROR, WARN, INFO, DEBUG, FINE, FINER, FINEST',
      'LOW, MEDIUM, HIGH',
      'BASIC, DETAILED, VERBOSE',
      '1, 2, 3, 4, 5'
    ],
    correct: 0,
    explanation: 'Log levels from least to most detail: NONE, ERROR, WARN, INFO, DEBUG, FINE, FINER, FINEST.'
  },
  {
    id: 338,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What is the Perspective Manager in Developer Console?',
    options: [
      'A tool for managing predefined and custom Debug and Analysis perspectives',
      'A code formatting tool',
      'A deployment tool',
      'A query builder'
    ],
    correct: 0,
    explanation: 'The Perspective Manager manages predefined Debug and Analysis perspectives and allows creating custom perspectives.'
  },
  {
    id: 339,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is the successor to the Force.com IDE plug-in?',
    options: [
      'Salesforce Extensions for VS Code',
      'Developer Console',
      'Salesforce CLI',
      'Eclipse IDE'
    ],
    correct: 0,
    explanation: 'Salesforce Extensions for VS Code is the successor to the Force.com IDE plug-in.'
  },
  {
    id: 340,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is npm used for in Salesforce development?',
    options: [
      'Installing packages for LWC development',
      'Deploying to production',
      'Writing Apex code',
      'Creating scratch orgs'
    ],
    correct: 0,
    explanation: 'npm is used to install packages quickly, particularly for LWC development.'
  },
  {
    id: 341,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is the Salesforce CLI command to create a new SFDX project?',
    options: [
      'sf project generate',
      'sf new project',
      'sf project create',
      'sf org create'
    ],
    correct: 0,
    explanation: 'The command sf project generate creates a new SFDX project with the -n flag for the project name.'
  },
  {
    id: 342,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is a change list in the org development model?',
    options: [
      'A list tracking individual developer changes',
      'A test suite',
      'A configuration file',
      'A deployment manifest'
    ],
    correct: 0,
    explanation: 'A change list tracks individual developer changes that need to be committed to source control.'
  },
  {
    id: 343,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'What is a deployment run list?',
    options: [
      'Manual pre/post-deployment steps documented for deployment',
      'A list of metadata components',
      'A list of orgs to deploy to',
      'A list of test classes'
    ],
    correct: 0,
    explanation: 'A deployment run list documents manual pre/post-deployment steps that need to be executed during deployment.'
  },
  {
    id: 344,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What does the \'global\' access modifier do in Apex?',
    options: [
      'Makes a variable or method available to all classes in the organization',
      'Makes it private to the class',
      'Makes it public within the namespace',
      'Makes it protected'
    ],
    correct: 0,
    explanation: 'The \'global\' access modifier makes a variable or method available to all classes in the organization, including managed packages.'
  },
  {
    id: 345,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is the purpose of the \'static\' keyword in Apex?',
    options: [
      'Makes a variable or method belong to the class rather than an instance',
      'Makes a variable constant',
      'Makes a variable global',
      'Makes a variable private'
    ],
    correct: 0,
    explanation: 'The \'static\' keyword makes a variable or method belong to the class itself rather than to any specific instance.'
  },
  {
    id: 346,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is the purpose of the \'final\' keyword in Apex?',
    options: [
      'Makes a variable a constant that cannot be changed after initialization',
      'Makes a variable private',
      'Makes a variable static',
      'Makes a variable global'
    ],
    correct: 0,
    explanation: 'The \'final\' keyword makes a variable a constant that cannot be changed after initialization.'
  },
  {
    id: 347,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'Which of the following is NOT a primitive data type in Apex?',
    options: [
      'Array',
      'Boolean',
      'Integer',
      'String'
    ],
    correct: 0,
    explanation: 'Array is not a primitive data type. Apex primitives include: Integer, Double, Long, Date, Datetime, String, ID, and Boolean.'
  },
  {
    id: 348,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is an sObject in Apex?',
    options: [
      'A data type that represents a Salesforce record',
      'A static object',
      'A string object',
      'A system object'
    ],
    correct: 0,
    explanation: 'An sObject is a data type that represents a Salesforce record, either generic or specific to an object type.'
  },
  {
    id: 349,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'How do you access fields on a generic sObject?',
    options: [
      'Using put() and get() methods',
      'Using square brackets',
      'Using dot notation',
      'Using parentheses'
    ],
    correct: 0,
    explanation: 'Generic sObject fields are accessible only through put() and get() methods, not dot notation.'
  },
  {
    id: 350,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is the purpose of Apex classes?',
    options: [
      'Code reuse and encapsulation of business logic',
      'Only for Visualforce controllers',
      'Only for creating triggers',
      'Only for API calls'
    ],
    correct: 0,
    explanation: 'Apex classes provide code reuse and encapsulation of business logic through OOP principles.'
  },
  {
    id: 351,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What is the difference between public and private methods in Apex?',
    options: [
      'Public methods are accessible outside the class; private methods are not',
      'Public methods are for triggers only',
      'They are identical',
      'Private methods are faster'
    ],
    correct: 0,
    explanation: 'Public methods are accessible from other classes; private methods are only accessible within the defining class.'
  },
  {
    id: 352,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'How do you run Anonymous Apex?',
    options: [
      'Through the Developer Console\'s Execute Anonymous window',
      'By creating a class',
      'By writing a trigger',
      'Through the API'
    ],
    correct: 0,
    explanation: 'Anonymous Apex is run through the Developer Console\'s Debug > Open Execute Anonymous window.'
  },
  {
    id: 353,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'Does Anonymous Apex affect the org?',
    options: [
      'Yes, all code affects the org',
      'Only for custom objects',
      'Only for reads',
      'No, it\'s sandboxed'
    ],
    correct: 0,
    explanation: 'All Anonymous Apex code affects the org - it\'s not sandboxed. Be careful with DML operations.'
  },
  {
    id: 354,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'What is System.debug() used for?',
    options: [
      'Writing custom messages to debug logs',
      'Pausing code execution',
      'Creating test data',
      'Setting breakpoints'
    ],
    correct: 0,
    explanation: 'System.debug() writes custom messages to debug logs for debugging purposes.'
  },
  {
    id: 355,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Where can you view debug logs?',
    options: [
      'In the Developer Console Logs tab',
      'Only in the API',
      'Only in Setup',
      'Only in VS Code'
    ],
    correct: 0,
    explanation: 'Debug logs can be viewed in the Developer Console Logs tab, with filtering and different perspectives.'
  },
  {
    id: 356,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'Which of the following IS a characteristic of Apex?',
    options: [
      'Case-insensitive',
      'Loosely typed',
      'Client-side execution',
      'No governor limits'
    ],
    correct: 0,
    explanation: 'Apex is case-insensitive. It is server-side, strongly typed, and has governor limits.'
  },
  {
    id: 357,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What language is Apex based on?',
    options: [
      'Java idioms',
      'Python',
      'JavaScript',
      'C#'
    ],
    correct: 0,
    explanation: 'Apex is based on Java idioms, making it familiar to Java developers.'
  },
  {
    id: 358,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'What does API versioning do in Apex?',
    options: [
      'Controls which features and behaviors are available based on the version',
      'Enables debugging',
      'Makes code run faster',
      'Creates backups'
    ],
    correct: 0,
    explanation: 'API versioning controls which features and behaviors are available, ensuring backward compatibility.'
  },
  {
    id: 359,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What are the key benefits of Apex unit tests?',
    options: [
      'Ensuring classes and triggers work as expected, providing regression tests, meeting code coverage requirements',
      'Only performance testing',
      'Only code coverage',
      'Only debugging'
    ],
    correct: 0,
    explanation: 'Key benefits: ensuring code works as expected, providing regression test suites, and meeting code coverage requirements for deployment.'
  },
  {
    id: 360,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is the recommended visibility for test classes?',
    options: [
      'Private',
      'Protected',
      'Public',
      'Global'
    ],
    correct: 0,
    explanation: 'Private visibility is recommended for test classes that are only used for unit testing.'
  },
  {
    id: 361,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Do @IsTest classes count toward the 6 MB Apex code storage limit?',
    options: [
      'No, they are excluded',
      'Yes, they count',
      'Only if they have errors',
      'Only in production'
    ],
    correct: 0,
    explanation: '@IsTest classes don\'t count toward the 6 MB Apex code storage limit.'
  },
  {
    id: 362,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Do test methods send emails?',
    options: [
      'No, test methods don\'t send emails',
      'Yes, always',
      'Only in production',
      'Only with @seeAllData'
    ],
    correct: 0,
    explanation: 'Test methods don\'t send emails, preventing accidental email delivery during testing.'
  },
  {
    id: 363,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Can test methods make callouts?',
    options: [
      'No, callouts must be mocked using HttpCalloutMock',
      'Yes, always',
      'Only in sandbox',
      'Only with @seeAllData'
    ],
    correct: 0,
    explanation: 'Test methods can\'t make callouts. Use the HttpCalloutMock interface to mock callouts.'
  },
  {
    id: 364,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'How do you create a test suite?',
    options: [
      'Through Test > New Suite in Developer Console',
      'Through Setup',
      'Through the API',
      'By writing code'
    ],
    correct: 0,
    explanation: 'Test suites are created through Test > New Suite in the Developer Console.'
  },
  {
    id: 365,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is the purpose of Database.DeleteResult in testing?',
    options: [
      'Contains information about a delete operation for assertions',
      'Enables debugging',
      'Creates test records',
      'Deletes test data'
    ],
    correct: 0,
    explanation: 'Database.DeleteResult contains information about a delete operation, used for making assertions in tests.'
  },
  {
    id: 366,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is the recommended pattern for creating test data?',
    options: [
      'Use a TestDataFactory with reusable methods',
      'Use @seeAllData',
      'Hardcode test data in each test',
      'Query existing data'
    ],
    correct: 0,
    explanation: 'The TestDataFactory pattern creates a public static class with reusable methods for creating test data.'
  },
  {
    id: 367,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Why is bulk DML efficient in test data creation?',
    options: [
      'All records in a single insert statement counts as one DML',
      'It enables parallel processing',
      'It reduces memory usage',
      'It\'s not efficient'
    ],
    correct: 0,
    explanation: 'Bulk DML is efficient because all records in a single insert statement count as one DML statement.'
  },
  {
    id: 368,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What does Test.startTest() do in trigger testing?',
    options: [
      'Resets governor limits to isolate data setup from test execution',
      'Enables debugging',
      'Creates test data',
      'Starts the trigger'
    ],
    correct: 0,
    explanation: 'Test.startTest() resets governor limits, isolating data setup limit usage from test execution.'
  },
  {
    id: 369,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'What is the purpose of a test utility class?',
    options: [
      'Centralizes test-data creation for reuse across multiple test methods',
      'Generates test reports',
      'Debugs test failures',
      'Runs tests automatically'
    ],
    correct: 0,
    explanation: 'A test utility class centralizes test-data creation for reuse across multiple test methods.'
  },
  {
    id: 370,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What happens in bulk DML with partial success when addError() is used?',
    options: [
      'Bad records are set aside; remaining records are partially saved',
      'The error is ignored',
      'The trigger stops',
      'All records fail'
    ],
    correct: 0,
    explanation: 'In bulk DML with partial success via API, bad records are set aside and remaining records are partially saved.'
  },
  {
    id: 371,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What happens in Apex-initiated DML when an error occurs?',
    options: [
      'Any error rolls back the entire operation',
      'The error is ignored',
      'Only the failed record is rolled back',
      'The trigger continues'
    ],
    correct: 0,
    explanation: 'In Apex-initiated DML, any error rolls back the entire operation, unlike API partial success.'
  },
  {
    id: 372,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What does Trigger.size return?',
    options: [
      'The number of records in the current batch',
      'The total number of records',
      'The object type',
      'The trigger name'
    ],
    correct: 0,
    explanation: 'Trigger.size returns the number of records in the current batch (batches of 200+).'
  },
  {
    id: 373,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What does Trigger.isExecuting return?',
    options: [
      'True if the context is a trigger',
      'The execution time',
      'True if the trigger is running',
      'The trigger name'
    ],
    correct: 0,
    explanation: 'Trigger.isExecuting returns true if the current context is a trigger execution.'
  },
  {
    id: 374,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the difference between before and after triggers?',
    options: [
      'Before triggers modify values before save; after triggers access system-set values',
      'After triggers are for deletes only',
      'Before triggers are faster',
      'They are identical'
    ],
    correct: 0,
    explanation: 'Before triggers modify or validate record values before database save; after triggers access system-set field values (Id, LastModifiedDate).'
  },
  {
    id: 375,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'Are records in after triggers read-only?',
    options: [
      'Yes, records are read-only in after triggers',
      'Only for update triggers',
      'Only for insert triggers',
      'No, they can be modified'
    ],
    correct: 0,
    explanation: 'Records in after triggers are read-only. Use before triggers to modify record values.'
  },
  {
    id: 376,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the recommended approach for trigger logic?',
    options: [
      'Delegate to a handler class for code reuse and OOP design',
      'Use only before triggers',
      'Use multiple triggers per object',
      'Put all logic in the trigger'
    ],
    correct: 0,
    explanation: 'The recommended approach is to delegate trigger logic to a handler class for code reuse and OOP design.'
  },
  {
    id: 377,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'Why should you avoid SOQL queries inside for loops?',
    options: [
      'It can exceed the governor limit of 100 SOQL queries per transaction',
      'It makes code slower',
      'It causes syntax errors',
      'It\'s not a best practice'
    ],
    correct: 0,
    explanation: 'SOQL queries inside for loops can quickly exceed the governor limit of 100 SOQL queries per transaction.'
  },
  {
    id: 378,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'Why should you avoid DML statements inside for loops?',
    options: [
      'It can exceed the governor limit of 150 DML statements per transaction',
      'It makes code slower',
      'It\'s not a best practice',
      'It causes syntax errors'
    ],
    correct: 0,
    explanation: 'DML statements inside for loops can quickly exceed the governor limit of 150 DML statements per transaction.'
  },
  {
    id: 379,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'What is the bulk design pattern for adding related records?',
    options: [
      'Query with subquery, build list, single DML insert at end',
      'Use DML in for loop',
      'Insert one at a time in loop',
      'Query each record individually'
    ],
    correct: 0,
    explanation: 'The bulk design pattern: query with subquery, build list of records, then perform a single bulk DML insert at the end.'
  },
  {
    id: 380,
    chapter: 'devFundamentals',
    topic: 'PD1-605',
    question: 'What is the publish-subscribe pattern used for in Salesforce?',
    options: [
      'Event-driven architecture with Platform Events',
      'Database replication',
      'Data backup',
      'User authentication'
    ],
    correct: 0,
    explanation: 'Platform Events use the publish-subscribe pattern to enable event-driven architecture, where publishers send events and subscribers receive them.'
  },
  {
    id: 381,
    chapter: 'devFundamentals',
    topic: 'PD1-605',
    question: 'What trigger events are supported for Platform Events?',
    options: [
      'AFTER INSERT only',
      'All trigger events',
      'BEFORE INSERT, AFTER INSERT',
      'BEFORE INSERT, AFTER INSERT, BEFORE UPDATE'
    ],
    correct: 0,
    explanation: 'Platform Event triggers only support the AFTER INSERT event. Unlike sObject triggers, they cannot use BEFORE INSERT or other events.'
  },
  {
    id: 382,
    chapter: 'devFundamentals',
    topic: 'PD1-605',
    question: 'How long are Platform Events stored in the Event Bus?',
    options: [
      '72 hours',
      '48 hours',
      '24 hours',
      '96 hours'
    ],
    correct: 0,
    explanation: 'Platform Events are stored in the Event Bus for 72 hours. After that, they are automatically deleted.'
  },
  {
    id: 383,
    chapter: 'devFundamentals',
    topic: 'PD1-605',
    question: 'What is the API name suffix for Platform Events?',
    options: [
      '__e',
      '__c',
      '__x',
      '__p'
    ],
    correct: 0,
    explanation: 'Platform Events use the __e suffix for their API names, similar to how custom objects use __c.'
  },
  {
    id: 384,
    chapter: 'devFundamentals',
    topic: 'PD1-605',
    question: 'How do you publish a Platform Event from Apex?',
    options: [
      'EventBus.publish()',
      'insert',
      'Database.publish()',
      'System.publish()'
    ],
    correct: 0,
    explanation: 'Use EventBus.publish() to publish Platform Events from Apex. Unlike sObjects, you cannot use DML statements like insert.'
  },
  {
    id: 385,
    chapter: 'devFundamentals',
    topic: 'PD1-605',
    question: 'What is the difference between Platform Events and Change Data Capture?',
    options: [
      'Platform Events for custom events, CDC for tracking data changes',
      'There is no difference',
      'Platform Events are faster',
      'CDC supports more fields'
    ],
    correct: 0,
    explanation: 'Platform Events are for custom business events, while Change Data Capture (CDC) automatically tracks data changes on standard and custom objects.'
  },
  {
    id: 386,
    chapter: 'devFundamentals',
    topic: 'PD1-605',
    question: 'What Lightning component is used to subscribe to Platform Events in LWC?',
    options: [
      'empApi',
      'eventBus',
      'lightning/subscribe',
      'lightning/platformEvent'
    ],
    correct: 0,
    explanation: 'The empApi Lightning component is used to subscribe to Platform Events in LWC and Aura components.'
  },
  {
    id: 387,
    chapter: 'devFundamentals',
    topic: 'PD1-605',
    question: 'What is the ReplayId used for in Platform Events?',
    options: [
      'To replay events from a specific point',
      'To encrypt events',
      'To update events',
      'To delete events'
    ],
    correct: 0,
    explanation: 'ReplayId is a unique sequential ID for each event that allows subscribers to replay events from a specific point in the stream.'
  },
  {
    id: 388,
    chapter: 'devFundamentals',
    topic: 'PD1-605',
    question: 'Can Platform Events be queried like sObjects?',
    options: [
      'No, they cannot be queried',
      'Yes, using SOSL',
      'Yes, using SOQL',
      'Only in triggers'
    ],
    correct: 0,
    explanation: 'Platform Events cannot be queried like sObjects using SOQL. They are accessed through triggers, empApi, or CometD subscription.'
  },
  {
    id: 389,
    chapter: 'devFundamentals',
    topic: 'PD1-605',
    question: 'What is the governor limit for Platform Event publish calls per transaction?',
    options: [
      '100',
      '50',
      '200',
      '150'
    ],
    correct: 0,
    explanation: 'The governor limit for Platform Event publish calls is 100 per transaction.'
  },
  {
    id: 390,
    chapter: 'processAutomation',
    topic: 'PD1-606',
    question: 'What is SOSL used for in Salesforce?',
    options: [
      'Text search across multiple objects',
      'Querying a single object',
      'Schema definition',
      'Data manipulation'
    ],
    correct: 0,
    explanation: 'SOSL (Salesforce Object Search Language) is used for text-based searches across multiple objects simultaneously.'
  },
  {
    id: 391,
    chapter: 'processAutomation',
    topic: 'PD1-606',
    question: 'What is the syntax for a basic SOSL search?',
    options: [
      'FIND {search term} IN ALL FIELDS RETURNING object(fields)',
      'SELECT fields FROM object WHERE condition',
      'LOOKUP {term} ON object',
      'SEARCH {term} IN object'
    ],
    correct: 0,
    explanation: 'The basic SOSL syntax is FIND {search term} IN ALL FIELDS RETURNING object(fields).'
  },
  {
    id: 392,
    chapter: 'processAutomation',
    topic: 'PD1-606',
    question: 'What wildcard characters are used in SOSL?',
    options: [
      '* for multiple characters, ? for single character',
      'No wildcards supported',
      '+ for multiple characters, - for single character',
      '% for multiple characters, _ for single character'
    ],
    correct: 0,
    explanation: 'SOSL uses * for multiple characters and ? for a single character wildcard in search terms.'
  },
  {
    id: 393,
    chapter: 'processAutomation',
    topic: 'PD1-606',
    question: 'What is the governor limit for SOSL queries per transaction?',
    options: [
      '20',
      '50',
      '150',
      '100'
    ],
    correct: 0,
    explanation: 'The governor limit for SOSL queries is 20 per transaction, compared to 100 for SOQL queries.'
  },
  {
    id: 394,
    chapter: 'processAutomation',
    topic: 'PD1-606',
    question: 'Can SOSL be used directly in Apex triggers?',
    options: [
      'No, SOSL cannot be used in triggers',
      'Only in after triggers',
      'Yes, SOSL can be used in triggers',
      'Only in before triggers'
    ],
    correct: 0,
    explanation: 'SOSL cannot be used directly in Apex triggers. Only SOQL queries are allowed in triggers.'
  },
  {
    id: 395,
    chapter: 'processAutomation',
    topic: 'PD1-606',
    question: 'What does SOSL return compared to SOQL?',
    options: [
      'SOSL returns grouped results by object type, SOQL returns flat records',
      'Both return the same format',
      'SOSL returns flat records, SOQL returns grouped results',
      'SOSL returns XML, SOQL returns JSON'
    ],
    correct: 0,
    explanation: 'SOSL returns grouped results by object type (List<List<SObject>>), while SOQL returns a flat list of records (List<SObject>).'
  },
  {
    id: 396,
    chapter: 'processAutomation',
    topic: 'PD1-606',
    question: 'Which SOSL search context searches all text fields?',
    options: [
      'IN ALL FIELDS',
      'IN SIDEBAR FIELDS',
      'IN NAME FIELDS',
      'IN EMAIL FIELDS'
    ],
    correct: 0,
    explanation: 'IN ALL FIELDS searches all text fields on the specified objects.'
  },
  {
    id: 397,
    chapter: 'processAutomation',
    topic: 'PD1-606',
    question: 'Does SOSL provide relevance ranking for search results?',
    options: [
      'Yes, SOSL results are relevance-ranked',
      'No, SOSL returns results in insertion order',
      'Only for Account objects',
      'Only when using IN ALL FIELDS'
    ],
    correct: 0,
    explanation: 'SOSL provides relevance ranking for search results, returning the most relevant results first.'
  },
  {
    id: 398,
    chapter: 'processAutomation',
    topic: 'PD1-606',
    question: 'How do you access results from a SOSL query that returns Account and Contact?',
    options: [
      'results[0] for Account, results[1] for Contact',
      'results.get(\'Account\'), results.get(\'Contact\')',
      'All results are in a single list',
      'results.Account, results.Contact'
    ],
    correct: 0,
    explanation: 'SOSL returns List<List<SObject>>. Access each object type by index: results[0] for the first object type, results[1] for the second.'
  },
  {
    id: 399,
    chapter: 'processAutomation',
    topic: 'PD1-606',
    question: 'Can you use LIMIT in SOSL queries?',
    options: [
      'Yes, LIMIT restricts results per object',
      'Only for Account objects',
      'Only up to 100 records',
      'No, LIMIT is only for SOQL'
    ],
    correct: 0,
    explanation: 'Yes, you can use LIMIT in SOSL queries to restrict the number of results returned per object type.'
  },
  {
    id: 400,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What are the restrictions on @Future methods?',
    options: [
      'Must be static, return void, primitive parameters only, 50 calls per invocation',
      'No restrictions',
      'Must return a value',
      'Can accept any parameter type'
    ],
    correct: 0,
    explanation: '@Future methods must be static, return void, accept only primitive data types or collections, and are limited to 50 calls per invocation.'
  },
  {
    id: 401,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What is the advantage of Queueable Apex over @Future?',
    options: [
      'Supports non-primitive types, job IDs, and job chaining',
      'Is faster',
      'Has no limits',
      'Uses less memory'
    ],
    correct: 0,
    explanation: 'Queueable Apex supports non-primitive types, returns job IDs for monitoring, and supports job chaining - advantages over @Future methods.'
  },
  {
    id: 402,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What interface must a Batch Apex class implement?',
    options: [
      'Database.Batchable<SObject>',
      'Database.Executable',
      'System.Batchable',
      'Database.Asyncable'
    ],
    correct: 0,
    explanation: 'Batch Apex classes must implement the Database.Batchable<SObject> interface with start, execute, and finish methods.'
  },
  {
    id: 403,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What is the default scope size for Batch Apex?',
    options: [
      '200',
      '500',
      '100',
      '1000'
    ],
    correct: 0,
    explanation: 'The default scope size for Batch Apex is 200 records. The maximum is 2000.'
  },
  {
    id: 404,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What does Database.Stateful do in Batch Apex?',
    options: [
      'Preserves state across batch transactions',
      'Reduces governor limits',
      'Enables callouts',
      'Makes the batch run faster'
    ],
    correct: 0,
    explanation: 'Database.Stateful preserves the state of instance variables across batch transactions, allowing you to track progress.'
  },
  {
    id: 405,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'How do you enqueue a Queueable Apex job?',
    options: [
      'System.enqueueJob()',
      'Database.executeBatch()',
      'System.schedule()',
      'EventBus.publish()'
    ],
    correct: 0,
    explanation: 'Use System.enqueueJob() to enqueue a Queueable Apex job for asynchronous execution.'
  },
  {
    id: 406,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What is the format of a cron expression for Scheduled Apex?',
    options: [
      'seconds minutes hours day month weekday year',
      'hours day month weekday year',
      'day month weekday year',
      'minutes hours day month weekday'
    ],
    correct: 0,
    explanation: 'Cron expressions in Salesforce use the format: seconds minutes hours day month weekday year.'
  },
  {
    id: 407,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'Can Scheduled Apex make HTTP callouts directly?',
    options: [
      'No, must use @Future(callout=true) or Batch Apex',
      'Yes, directly',
      'Only with special permission',
      'Only to whitelisted endpoints'
    ],
    correct: 0,
    explanation: 'Scheduled Apex cannot make HTTP callouts directly. Use @Future(callout=true) or execute a batch job that supports callouts.'
  },
  {
    id: 408,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'How many batch jobs can be in the Flex Queue?',
    options: [
      '100',
      '500',
      '200',
      '50'
    ],
    correct: 0,
    explanation: 'The Flex Queue can hold up to 100 batch jobs waiting to be processed.'
  },
  {
    id: 409,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'How many batch jobs can run simultaneously?',
    options: [
      '5',
      '50',
      '10',
      '100'
    ],
    correct: 0,
    explanation: 'Up to 5 batch jobs can run simultaneously in a Salesforce org.'
  },
  {
    id: 410,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What method does Batch Apex use to define the records to process?',
    options: [
      'start()',
      'init()',
      'finish()',
      'execute()'
    ],
    correct: 0,
    explanation: 'The start() method in Batch Apex defines the records to process using Database.getQueryLocator() or an iterable.'
  },
  {
    id: 411,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What is the maximum number of @Future calls per transaction?',
    options: [
      '50',
      '150',
      '100',
      '200'
    ],
    correct: 0,
    explanation: 'The governor limit for @Future method calls is 50 per transaction.'
  },
  {
    id: 412,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'Can Queueable Apex chain jobs?',
    options: [
      'Yes, by calling System.enqueueJob() in execute()',
      'Only for the same job type',
      'Only with special permission',
      'No, job chaining is not supported'
    ],
    correct: 0,
    explanation: 'Queueable Apex supports job chaining by calling System.enqueueJob() from within the execute() method.'
  },
  {
    id: 413,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What is the maximum lifetime of a scratch org?',
    options: [
      '30 days',
      '7 days',
      '60 days',
      '14 days'
    ],
    correct: 0,
    explanation: 'Scratch orgs have a maximum lifetime of 30 days. After that, they are automatically deleted.'
  },
  {
    id: 414,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What interface must a Scheduled Apex class implement?',
    options: [
      'Schedulable',
      'Batchable',
      'Asyncable',
      'Executable'
    ],
    correct: 0,
    explanation: 'Scheduled Apex classes must implement the Schedulable interface with an execute() method.'
  },
  {
    id: 415,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What mode does Apex run in by default?',
    options: [
      'System mode',
      'Admin mode',
      'Guest mode',
      'User mode'
    ],
    correct: 0,
    explanation: 'Apex runs in system mode by default, meaning object permissions, field-level security, and sharing rules are not enforced.'
  },
  {
    id: 416,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What SOQL clause enforces CRUD and FLS?',
    options: [
      'WITH SECURITY_ENFORCED',
      'WITH CRUD_CHECK',
      'WITH USER_MODE',
      'WITH FLS_CHECK'
    ],
    correct: 0,
    explanation: 'The WITH SECURITY_ENFORCED clause in SOQL enforces object permissions and field-level security at query time.'
  },
  {
    id: 417,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What does the stripInaccessible() method do?',
    options: [
      'Removes fields the current user cannot access',
      'Disables triggers',
      'Deletes records',
      'Removes sharing rules'
    ],
    correct: 0,
    explanation: 'Security.stripInaccessible() removes fields that the current user cannot access from query results.'
  },
  {
    id: 418,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What does the with sharing keyword do?',
    options: [
      'Enforces sharing rules for the class',
      'Makes the class global',
      'Enables FLS',
      'Enables CRUD'
    ],
    correct: 0,
    explanation: 'The with sharing keyword enforces sharing rules for the class, ensuring users can only access records they have permission to see.'
  },
  {
    id: 419,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What is the difference between with sharing and without sharing?',
    options: [
      'with sharing enforces sharing rules; without sharing bypasses them',
      'There is no difference',
      'with sharing is faster; without sharing is slower',
      'with sharing enables CRUD; without sharing disables it'
    ],
    correct: 0,
    explanation: 'with sharing enforces sharing rules (users see only their records), while without sharing bypasses sharing rules (users see all records).'
  },
  {
    id: 420,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What is User Mode in SOQL?',
    options: [
      'WITH USER_MODE enforces CRUD/FLS like the current user',
      'A deprecated feature',
      'A mode for administrators',
      'A mode for guest users'
    ],
    correct: 0,
    explanation: 'WITH USER_MODE (introduced Spring 2023) enforces CRUD and FLS in SOQL queries, running as the current user.'
  },
  {
    id: 421,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'How do you prevent SOQL injection?',
    options: [
      'Use bind variables instead of string concatenation',
      'Disable user input',
      'Use SOSL instead',
      'Use string concatenation'
    ],
    correct: 0,
    explanation: 'Use bind variables (:) in dynamic SOQL to prevent SOQL injection. Bind variables automatically escape user input.'
  },
  {
    id: 422,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What function prevents XSS in JavaScript context?',
    options: [
      'JSENCODE()',
      'URLENCODE()',
      'HTMLENCODE()',
      'JSINHTMLENCODE()'
    ],
    correct: 0,
    explanation: 'JSENCODE() escapes characters for safe use in JavaScript context, preventing cross-site scripting (XSS) attacks.'
  },
  {
    id: 423,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What method checks if the current user can create a record?',
    options: [
      'Schema.sObjectType.ObjectName.isCreateable()',
      'Schema.sObjectType.ObjectName.isUpdateable()',
      'Schema.sObjectType.ObjectName.isAccessible()',
      'Schema.sObjectType.ObjectName.isDeletable()'
    ],
    correct: 0,
    explanation: 'Schema.sObjectType.ObjectName.isCreateable() checks if the current user has create permission for the object.'
  },
  {
    id: 424,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What is inherited sharing?',
    options: [
      'Uses the sharing context of the calling class',
      'Inherits CRUD permissions',
      'Disables all sharing rules',
      'Enables all sharing rules'
    ],
    correct: 0,
    explanation: 'inherited sharing uses the sharing context of the class that calls it, allowing utility classes to adapt to different contexts.'
  },
  {
    id: 425,
    chapter: 'devFundamentals',
    topic: 'PD1-607',
    question: 'What is Einstein for Developers?',
    options: [
      'An AI-powered coding assistant for Apex',
      'A deployment tool',
      'A database management tool',
      'A testing framework'
    ],
    correct: 0,
    explanation: 'Einstein for Developers is an AI-powered coding assistant that generates Apex code from natural language descriptions.'
  },
  {
    id: 426,
    chapter: 'devFundamentals',
    topic: 'PD1-607',
    question: 'What can Einstein for Developers generate?',
    options: [
      'Apex code, test classes, and code explanations',
      'Only Apex classes',
      'Only test classes',
      'Only Visualforce pages'
    ],
    correct: 0,
    explanation: 'Einstein for Developers can generate Apex code from natural language, create test classes for existing code, and explain code in natural language.'
  },
  {
    id: 427,
    chapter: 'devFundamentals',
    topic: 'PD1-607',
    question: 'Where can Einstein for Developers be used?',
    options: [
      'VS Code and Developer Console',
      'Only in VS Code',
      'Only in Developer Console',
      'Only in Salesforce CLI'
    ],
    correct: 0,
    explanation: 'Einstein for Developers works in both VS Code with Salesforce Extensions and in the Developer Console.'
  },
  {
    id: 428,
    chapter: 'devFundamentals',
    topic: 'PD1-607',
    question: 'Does Einstein for Developers replace developer understanding?',
    options: [
      'No, developers must review and understand generated code',
      'Yes, it completely replaces developers',
      'Only for simple code',
      'Only for test classes'
    ],
    correct: 0,
    explanation: 'Einstein for Developers does not replace developer understanding. Developers must review and customize generated code.'
  },
  {
    id: 429,
    chapter: 'devFundamentals',
    topic: 'PD1-607',
    question: 'What training data does Einstein for Developers use?',
    options: [
      'Salesforce-specific code and documentation',
      'Generic programming data',
      'Only Salesforce documentation',
      'Only open-source code'
    ],
    correct: 0,
    explanation: 'Einstein for Developers uses Salesforce-specific training data, including Apex code and Salesforce documentation.'
  },
  {
    id: 430,
    chapter: 'devFundamentals',
    topic: 'PD1-607',
    question: 'Can Einstein for Developers generate test classes?',
    options: [
      'Yes, it can generate test classes for existing Apex code',
      'Only for utility classes',
      'No, test generation is not supported',
      'Only for trigger classes'
    ],
    correct: 0,
    explanation: 'Einstein for Developers can generate test classes for existing Apex code, helping developers meet the 75% code coverage requirement.'
  },
  {
    id: 431,
    chapter: 'userInterface',
    topic: 'PD1-608',
    question: 'What annotation makes an Apex method callable from agents?',
    options: [
      '@InvocableMethod',
      '@RemoteAction',
      '@Future',
      '@AuraEnabled'
    ],
    correct: 0,
    explanation: 'The @InvocableMethod annotation makes an Apex method callable from agents, flows, and other declarative tools.'
  },
  {
    id: 432,
    chapter: 'userInterface',
    topic: 'PD1-608',
    question: 'What annotation defines input/output parameters for agent actions?',
    options: [
      '@InvocableVariable',
      '@InvocableMethod',
      '@RemoteAction',
      '@AuraEnabled'
    ],
    correct: 0,
    explanation: 'The @InvocableVariable annotation defines input and output parameters for invocable methods used by agents.'
  },
  {
    id: 433,
    chapter: 'userInterface',
    topic: 'PD1-608',
    question: 'What is the recommended way to handle errors in agent Apex actions?',
    options: [
      'Use try-catch and return meaningful error messages',
      'Throw unhandled exceptions',
      'Log errors only',
      'Ignore errors'
    ],
    correct: 0,
    explanation: 'Agent Apex actions should use try-catch blocks and return meaningful error messages to the agent for proper error handling.'
  },
  {
    id: 434,
    chapter: 'userInterface',
    topic: 'PD1-608',
    question: 'Can agents invoke Flows that call Apex?',
    options: [
      'Yes, agents can invoke Flows that use @InvocableMethod',
      'Only autolaunched flows',
      'No, agents cannot invoke Flows',
      'Only screen flows'
    ],
    correct: 0,
    explanation: 'Agents can invoke Flows, and those Flows can call Apex methods annotated with @InvocableMethod.'
  },
  {
    id: 435,
    chapter: 'userInterface',
    topic: 'PD1-608',
    question: 'What is the purpose of the label parameter in @InvocableMethod?',
    options: [
      'Provides a display name for the method in declarative tools',
      'Defines the return type',
      'Sets the method name',
      'Specifies the class name'
    ],
    correct: 0,
    explanation: 'The label parameter in @InvocableMethod provides a human-readable display name for the method in tools like Flow Builder and Agent Builder.'
  },
  {
    id: 436,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What happens to @Future method calls when the governor limit is exceeded?',
    options: [
      'An exception is thrown',
      'The call is queued for later',
      'The transaction is rolled back',
      'The call is silently ignored'
    ],
    correct: 0,
    explanation: 'When the @Future governor limit (50 calls per transaction) is exceeded, an exception is thrown.'
  },
  {
    id: 437,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'Can @Future methods accept sObject parameters?',
    options: [
      'No, only primitive types and collections',
      'Yes, any sObject',
      'Only custom objects',
      'Only Account and Contact'
    ],
    correct: 0,
    explanation: '@Future methods can only accept primitive data types (String, Integer, Id, etc.) and collections of primitives, not sObjects.'
  },
  {
    id: 438,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What is the maximum number of Queueable jobs per transaction?',
    options: [
      '50',
      '200',
      '100',
      '150'
    ],
    correct: 0,
    explanation: 'The governor limit for Queueable Apex jobs is 50 per transaction.'
  },
  {
    id: 439,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What is the maximum number of scheduled jobs per org?',
    options: [
      '100',
      '50',
      '200',
      '500'
    ],
    correct: 0,
    explanation: 'The limit for scheduled Apex jobs is 100 per org.'
  },
  {
    id: 440,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What method is called when a Batch Apex job completes?',
    options: [
      'finish()',
      'start()',
      'execute()',
      'complete()'
    ],
    correct: 0,
    explanation: 'The finish() method is called after all batch transactions are complete. It is used for final operations like sending emails.'
  },
  {
    id: 441,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What does Database.executeBatch() return?',
    options: [
      'AsyncApexJob ID',
      'Batch ID',
      'Job Name',
      'Status'
    ],
    correct: 0,
    explanation: 'Database.executeBatch() returns an AsyncApexJob ID that can be used to monitor the batch job status.'
  },
  {
    id: 442,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'Can you test @Future methods directly?',
    options: [
      'No, use Test.startTest() and Test.stopTest()',
      'Only with SeeAllData=true',
      'Only in production',
      'Yes, call them directly'
    ],
    correct: 0,
    explanation: 'To test @Future methods, use Test.startTest() before calling the method and Test.stopTest() after to ensure execution within the test context.'
  },
  {
    id: 443,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What is the default behavior of Apex regarding CRUD?',
    options: [
      'Apex ignores CRUD by default',
      'CRUD is not applicable to Apex',
      'Apex partially enforces CRUD',
      'Apex enforces CRUD by default'
    ],
    correct: 0,
    explanation: 'Apex runs in system mode by default and does not enforce CRUD (Create, Read, Update, Delete) permissions.'
  },
  {
    id: 444,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'How do you enforce FLS in a SOQL query?',
    options: [
      'WITH SECURITY_ENFORCED',
      'ENFORCE FLS',
      'CHECK FLS',
      'WITH FLS_CHECK'
    ],
    correct: 0,
    explanation: 'Use WITH SECURITY_ENFORCED in a SOQL query to enforce field-level security (FLS) at query time.'
  },
  {
    id: 445,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What does Security.stripInaccessible(AccessType.READABLE, records) do?',
    options: [
      'Removes fields the user cannot read',
      'Deletes the records',
      'Disables sharing',
      'Makes all fields readable'
    ],
    correct: 0,
    explanation: 'Security.stripInaccessible(AccessType.READABLE, records) removes fields that the current user does not have read access to.'
  },
  {
    id: 446,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What is the difference between User Mode and System Mode?',
    options: [
      'User Mode enforces CRUD/FLS; System Mode ignores them',
      'There is no difference',
      'System Mode is for administrators',
      'User Mode is faster'
    ],
    correct: 0,
    explanation: 'User Mode (WITH USER_MODE) enforces CRUD and FLS, while System Mode (default Apex) ignores these permissions.'
  },
  {
    id: 447,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What encoding function prevents XSS in HTML context?',
    options: [
      'HTMLENCODE()',
      'URLENCODE()',
      'JSINHTMLENCODE()',
      'JSENCODE()'
    ],
    correct: 0,
    explanation: 'HTMLENCODE() escapes characters for safe use in HTML context, preventing cross-site scripting (XSS) attacks.'
  },
  {
    id: 448,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What encoding function prevents XSS in URL context?',
    options: [
      'URLENCODE()',
      'JSINHTMLENCODE()',
      'JSENCODE()',
      'HTMLENCODE()'
    ],
    correct: 0,
    explanation: 'URLENCODE() escapes characters for safe use in URL context, preventing injection attacks.'
  },
  {
    id: 449,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What is the AccessType enum used for in stripInaccessible()?',
    options: [
      'Specifies the type of access to check (READABLE, CREATABLE, UPDATABLE)',
      'Specifies the user type',
      'Specifies the field type',
      'Specifies the object type'
    ],
    correct: 0,
    explanation: 'The AccessType enum in stripInaccessible() specifies what type of access to check: READABLE, CREATABLE, or UPDATABLE.'
  },
  {
    id: 450,
    chapter: 'devFundamentals',
    topic: 'PD1-605',
    question: 'What protocol do external systems use to subscribe to Platform Events?',
    options: [
      'CometD',
      'HTTP',
      'WebSocket',
      'SOAP'
    ],
    correct: 0,
    explanation: 'External systems use the CometD protocol (Bayeux) to subscribe to Platform Events for real-time streaming.'
  },
  {
    id: 451,
    chapter: 'devFundamentals',
    topic: 'PD1-605',
    question: 'Can Platform Events have custom fields?',
    options: [
      'Yes, you define custom fields on the event',
      'Only date fields',
      'Only text fields',
      'No, only standard fields'
    ],
    correct: 0,
    explanation: 'Platform Events support custom fields that you define when creating the event. They can include text, number, date, and other field types.'
  },
  {
    id: 452,
    chapter: 'devFundamentals',
    topic: 'PD1-605',
    question: 'What is the maximum number of Platform Event types per org?',
    options: [
      '100',
      '50',
      '200',
      '500'
    ],
    correct: 0,
    explanation: 'The limit for Platform Event types is 100 per Salesforce org.'
  },
  {
    id: 453,
    chapter: 'devFundamentals',
    topic: 'PD1-605',
    question: 'What is the maximum number of fields per Platform Event type?',
    options: [
      '200',
      '1000',
      '100',
      '500'
    ],
    correct: 0,
    explanation: 'The limit for fields per Platform Event type is 200.'
  },
  {
    id: 454,
    chapter: 'devFundamentals',
    topic: 'PD1-605',
    question: 'What happens if a Platform Event publish fails?',
    options: [
      'Database.SaveResult contains the error',
      'An exception is thrown',
      'The event is silently dropped',
      'The transaction is rolled back'
    ],
    correct: 0,
    explanation: 'EventBus.publish() returns a Database.SaveResult that contains success/failure information, but does not throw exceptions.'
  },
  {
    id: 455,
    chapter: 'processAutomation',
    topic: 'PD1-606',
    question: 'What search context is used to search name fields only?',
    options: [
      'IN NAME FIELDS',
      'IN SIDEBAR FIELDS',
      'IN ALL FIELDS',
      'IN EMAIL FIELDS'
    ],
    correct: 0,
    explanation: 'IN NAME FIELDS restricts the SOSL search to name fields only on the specified objects.'
  },
  {
    id: 456,
    chapter: 'processAutomation',
    topic: 'PD1-606',
    question: 'Can SOSL search across different object types?',
    options: [
      'Yes, SOSL can search Account, Contact, and other objects simultaneously',
      'Only related objects',
      'Only custom objects',
      'No, SOSL can only search one object'
    ],
    correct: 0,
    explanation: 'SOSL can search across multiple object types in a single query, returning grouped results for each object type.'
  },
  {
    id: 457,
    chapter: 'processAutomation',
    topic: 'PD1-606',
    question: 'What does the RETURNING clause specify in SOSL?',
    options: [
      'Which objects and fields to return in results',
      'The sort order',
      'The search term',
      'The search context'
    ],
    correct: 0,
    explanation: 'The RETURNING clause in SOSL specifies which objects and fields to include in the search results.'
  },
  {
    id: 458,
    chapter: 'processAutomation',
    topic: 'PD1-606',
    question: 'Is SOSL case-sensitive?',
    options: [
      'No, SOSL searches are case-insensitive',
      'Yes, SOSL searches are case-sensitive',
      'Only in specific contexts',
      'Only for custom objects'
    ],
    correct: 0,
    explanation: 'SOSL searches are case-insensitive, so searching for "acme" will find "Acme", "ACME", etc.'
  },
  {
    id: 459,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What is the purpose of the Database.getQueryLocator() in Batch Apex?',
    options: [
      'Returns an iterable for the start() method',
      'Finishes the batch',
      'Executes the batch',
      'Enqueues the batch'
    ],
    correct: 0,
    explanation: 'Database.getQueryLocator() in the start() method returns an iterable that defines the records to process in the batch.'
  },
  {
    id: 460,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'Can you call System.enqueueJob() from a batch execute() method?',
    options: [
      'Yes, to chain Queueable jobs',
      'Only in the finish() method',
      'Only with special permission',
      'No, it is not allowed'
    ],
    correct: 0,
    explanation: 'You can call System.enqueueJob() from a batch execute() method to chain additional asynchronous processing.'
  },
  {
    id: 461,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What is the maximum CPU time for asynchronous Apex?',
    options: [
      '60,000ms',
      '120,000ms',
      '10,000ms',
      '30,000ms'
    ],
    correct: 0,
    explanation: 'The CPU time governor limit for asynchronous Apex (including @Future, Batch, Queueable) is 60,000ms.'
  },
  {
    id: 462,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What is the heap size limit for asynchronous Apex?',
    options: [
      '12MB',
      '48MB',
      '6MB',
      '24MB'
    ],
    correct: 0,
    explanation: 'The heap size governor limit for asynchronous Apex is 12MB, double the 6MB limit for synchronous Apex.'
  },
  {
    id: 463,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'Can you schedule a Batch Apex job?',
    options: [
      'Yes, by implementing Schedulable and calling Database.executeBatch()',
      'No, batch jobs cannot be scheduled',
      'Only with System.schedule()',
      'Only with cron expressions'
    ],
    correct: 0,
    explanation: 'You can schedule a Batch Apex job by implementing the Schedulable interface and calling Database.executeBatch() in the execute() method.'
  },
  {
    id: 464,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What is the purpose of the isAccessible() method?',
    options: [
      'Checks if the current user can read the field',
      'Checks if the field is required',
      'Checks if the field exists',
      'Checks if the field is unique'
    ],
    correct: 0,
    explanation: 'Schema.sObjectType.ObjectName.fields.FieldName.isAccessible() checks if the current user has read access to the field.'
  },
  {
    id: 465,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What is the AccessLevel parameter in DML operations?',
    options: [
      'Specifies whether to run in User Mode or System Mode',
      'Specifies the sharing mode',
      'Specifies the field access level',
      'Specifies the object access level'
    ],
    correct: 0,
    explanation: 'The AccessLevel parameter (AccessLevel.USER_MODE or AccessLevel.SYSTEM_MODE) specifies whether DML enforces CRUD/FLS.'
  },
  {
    id: 466,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What does the isCreateable() method check?',
    options: [
      'If the current user can create records of this object',
      'If the object has required fields',
      'If the object exists',
      'If the field is createable'
    ],
    correct: 0,
    explanation: 'Schema.sObjectType.ObjectName.isCreateable() checks if the current user has create permission for the object.'
  },
  {
    id: 467,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What is the purpose of the isUpdateable() method?',
    options: [
      'Checks if the current user can update records',
      'Checks if the object exists',
      'Checks if the field is updatable',
      'Checks if the record is locked'
    ],
    correct: 0,
    explanation: 'Schema.sObjectType.ObjectName.isUpdateable() checks if the current user has update permission for the object.'
  },
  {
    id: 468,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What is the purpose of the isDeletable() method?',
    options: [
      'Checks if the current user can delete records',
      'Checks if the record is deleted',
      'Checks if the field is deletable',
      'Checks if the object can be deleted'
    ],
    correct: 0,
    explanation: 'Schema.sObjectType.ObjectName.isDeletable() checks if the current user has delete permission for the object.'
  },
  {
    id: 469,
    chapter: 'devFundamentals',
    topic: 'PD1-607',
    question: 'Does Einstein for Developers follow Salesforce best practices?',
    options: [
      'Yes, generated code follows Salesforce best practices',
      'No, it generates generic code',
      'Only for test classes',
      'Only for simple code'
    ],
    correct: 0,
    explanation: 'Einstein for Developers generates code that follows Salesforce best practices, as it is trained on Salesforce-specific code.'
  },
  {
    id: 470,
    chapter: 'devFundamentals',
    topic: 'PD1-607',
    question: 'What is required to use Einstein for Developers?',
    options: [
      'Salesforce DX setup',
      'Developer sandbox',
      'Special license',
      'Admin permissions'
    ],
    correct: 0,
    explanation: 'Einstein for Developers requires Salesforce DX setup with VS Code and Salesforce Extensions installed.'
  },
  {
    id: 471,
    chapter: 'userInterface',
    topic: 'PD1-608',
    question: 'What is the purpose of the description parameter in @InvocableMethod?',
    options: [
      'Provides documentation for the method in declarative tools',
      'Specifies the class name',
      'Sets the method name',
      'Defines the return type'
    ],
    correct: 0,
    explanation: 'The description parameter in @InvocableMethod provides documentation that appears in Flow Builder and Agent Builder.'
  },
  {
    id: 472,
    chapter: 'userInterface',
    topic: 'PD1-608',
    question: 'Can an @InvocableMethod return multiple values?',
    options: [
      'Yes, by returning a list of response objects with @InvocableVariable',
      'Only with special configuration',
      'No, it can only return one value',
      'Only in Apex triggers'
    ],
    correct: 0,
    explanation: '@InvocableMethod can return multiple values by returning a list of response objects, each with @InvocableVariable fields.'
  },
  {
    id: 473,
    chapter: 'userInterface',
    topic: 'PD1-608',
    question: 'What naming convention should invocable classes follow?',
    options: [
      'Descriptive names indicating the action purpose',
      'Numbers only',
      'Generic names like Action1',
      'Random names'
    ],
    correct: 0,
    explanation: 'Invocable classes should follow descriptive naming conventions that clearly indicate the purpose of the action.'
  },
  {
    id: 474,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What is the difference between @Future and Queueable Apex?',
    options: [
      'Queueable supports non-primitive types and job chaining; @Future does not',
      '@Future is faster',
      'Queueable has no limits',
      'There is no difference'
    ],
    correct: 0,
    explanation: 'Queueable Apex supports non-primitive types, job IDs, and job chaining, while @Future only accepts primitive types.'
  },
  {
    id: 475,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'When should you use Batch Apex instead of @Future?',
    options: [
      'For large data volumes that exceed governor limits',
      'For UI updates',
      'For real-time processing',
      'For small data sets'
    ],
    correct: 0,
    explanation: 'Batch Apex is used for large data volumes that would exceed governor limits in synchronous or @Future processing.'
  },
  {
    id: 476,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'What happens to batch job state between transactions without Database.Stateful?',
    options: [
      'State is reset to initial values',
      'An exception is thrown',
      'The job fails',
      'State is preserved'
    ],
    correct: 0,
    explanation: 'Without Database.Stateful, instance variables are reset to their initial values between batch transactions.'
  },
  {
    id: 477,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What is the purpose of the with sharing keyword?',
    options: [
      'Enforces sharing rules so users see only their records',
      'Makes the class accessible to all users',
      'Enables CRUD permissions',
      'Enables FLS'
    ],
    correct: 0,
    explanation: 'The with sharing keyword enforces sharing rules, ensuring that users can only access records they have permission to see.'
  },
  {
    id: 478,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'What is the purpose of the without sharing keyword?',
    options: [
      'Bypasses sharing rules for system-level operations',
      'Makes the class inaccessible',
      'Disables FLS',
      'Disables CRUD permissions'
    ],
    correct: 0,
    explanation: 'The without sharing keyword bypasses sharing rules, allowing the class to access all records regardless of sharing settings.'
  },
  {
    id: 479,
    chapter: 'devFundamentals',
    topic: 'PD1-609',
    question: 'What is Agentforce Vibes Extension?',
    options: [
      'A VS Code extension for AI-assisted Salesforce development',
      'A debugging tool',
      'A Salesforce CLI plugin',
      'A testing framework'
    ],
    correct: 0,
    explanation: 'Agentforce Vibes is a VS Code extension that helps developers write, deploy, and manage Salesforce code faster using AI-assisted development.'
  },
  {
    id: 480,
    chapter: 'devFundamentals',
    topic: 'PD1-609',
    question: 'What can Agentforce Vibes generate?',
    options: [
      'Apex, LWC, and Visualforce code from natural language',
      'Only Apex classes',
      'Only test classes',
      'Only Visualforce pages'
    ],
    correct: 0,
    explanation: 'Agentforce Vibes can generate Apex, Lightning Web Components, and Visualforce code from natural language descriptions.'
  },
  {
    id: 481,
    chapter: 'devFundamentals',
    topic: 'PD1-609',
    question: 'Does Agentforce Vibes integrate with Salesforce CLI?',
    options: [
      'Yes, it integrates with Salesforce CLI',
      'Only for metadata retrieval',
      'No, it works independently',
      'Only for deployments'
    ],
    correct: 0,
    explanation: 'Agentforce Vibes integrates with Salesforce CLI for deployment and metadata management operations.'
  },
  {
    id: 482,
    chapter: 'devFundamentals',
    topic: 'PD1-610',
    question: 'What is Einstein Generative AI?',
    options: [
      'AI-powered features in Salesforce for generating content',
      'A database management tool',
      'A testing framework',
      'A deployment tool'
    ],
    correct: 0,
    explanation: 'Einstein Generative AI provides AI-powered capabilities in Salesforce for generating content, automating tasks, and building intelligent applications.'
  },
  {
    id: 483,
    chapter: 'devFundamentals',
    topic: 'PD1-610',
    question: 'What is Prompt Builder used for?',
    options: [
      'Creating prompts for AI-generated content',
      'Designing Lightning components',
      'Creating Apex classes',
      'Building Visualforce pages'
    ],
    correct: 0,
    explanation: 'Prompt Builder is used to create and manage prompts that generate AI-powered content using Salesforce data.'
  },
  {
    id: 484,
    chapter: 'devFundamentals',
    topic: 'PD1-610',
    question: 'What is grounding in Einstein Generative AI?',
    options: [
      'Connecting prompts to Salesforce data for context',
      'Validating AI output',
      'Training AI models',
      'Securing AI responses'
    ],
    correct: 0,
    explanation: 'Grounding connects prompts to Salesforce data, providing context for more accurate and relevant AI-generated content.'
  },
  {
    id: 485,
    chapter: 'devFundamentals',
    topic: 'PD1-610',
    question: 'What is the Einstein Trust Layer?',
    options: [
      'Security and privacy framework for AI interactions',
      'A data storage layer',
      'A deployment tool',
      'A caching mechanism'
    ],
    correct: 0,
    explanation: 'The Einstein Trust Layer ensures security and privacy for AI interactions in Salesforce, protecting sensitive data.'
  },
  {
    id: 486,
    chapter: 'devFundamentals',
    topic: 'PD1-611',
    question: 'What is Agentforce DX?',
    options: [
      'Tools for building custom AI agents in Salesforce',
      'A testing framework',
      'A debugging tool',
      'A deployment tool'
    ],
    correct: 0,
    explanation: 'Agentforce DX provides tools and frameworks for building custom AI agents in Salesforce, including Agent Builder and agent actions.'
  },
  {
    id: 487,
    chapter: 'devFundamentals',
    topic: 'PD1-611',
    question: 'What is Agent Builder?',
    options: [
      'A visual tool for creating and configuring agents',
      'A deployment tool',
      'A code editor',
      'A testing framework'
    ],
    correct: 0,
    explanation: 'Agent Builder is a visual tool in Agentforce DX for creating and configuring custom AI agents.'
  },
  {
    id: 488,
    chapter: 'devFundamentals',
    topic: 'PD1-611',
    question: 'What can Agent Actions use?',
    options: [
      'Apex and Flow for agent capabilities',
      'Only Flow',
      'Only Visualforce',
      'Only Apex'
    ],
    correct: 0,
    explanation: 'Agent Actions can use both Apex classes and Flows to provide capabilities to AI agents.'
  },
  {
    id: 489,
    chapter: 'processAutomation',
    topic: 'PD1-315',
    question: 'When do record-triggered flows run?',
    options: [
      'When records are created, updated, or deleted',
      'Only on creation',
      'Only on deletion',
      'Only on update'
    ],
    correct: 0,
    explanation: 'Record-triggered flows automatically run when records are created, updated, or deleted based on the configured entry conditions.'
  },
  {
    id: 490,
    chapter: 'processAutomation',
    topic: 'PD1-315',
    question: 'What is the difference between before-save and after-save flows?',
    options: [
      'Before-save runs before DML (fast); after-save runs after DML (can perform DML)',
      'There is no difference',
      'After-save cannot perform DML',
      'Before-save is slower'
    ],
    correct: 0,
    explanation: 'Before-save flows run before the record is saved and cannot perform DML. After-save flows run after the record is saved and can perform DML on other records.'
  },
  {
    id: 491,
    chapter: 'processAutomation',
    topic: 'PD1-315',
    question: 'What is the governor limit for flow elements per execution?',
    options: [
      '2000',
      '5000',
      '1000',
      '10000'
    ],
    correct: 0,
    explanation: 'The governor limit for flow elements is 2000 per flow execution.'
  },
  {
    id: 492,
    chapter: 'processAutomation',
    topic: 'PD1-315',
    question: 'What are scheduled paths in record-triggered flows?',
    options: [
      'Delayed actions that run after a specified time',
      'Error handling paths',
      'Decision branches',
      'Immediate actions'
    ],
    correct: 0,
    explanation: 'Scheduled paths allow you to delay actions in a record-triggered flow, running them after a specified time delay.'
  },
  {
    id: 493,
    chapter: 'processAutomation',
    topic: 'PD1-315',
    question: 'What flow element is used to query records?',
    options: [
      'Get Records',
      'Create Records',
      'Update Records',
      'Delete Records'
    ],
    correct: 0,
    explanation: 'The Get Records element is used to query records from the database in a flow.'
  },
  {
    id: 494,
    chapter: 'processAutomation',
    topic: 'PD1-316',
    question: 'How is SOQL similar to SQL?',
    options: [
      'SOQL SELECT is similar to SQL SELECT for querying data',
      'SOQL is only for updates',
      'SOQL is only for deletes',
      'SOQL is completely different from SQL'
    ],
    correct: 0,
    explanation: 'SOQL SELECT statements are similar to SQL SELECT statements, both used to query data from databases.'
  },
  {
    id: 495,
    chapter: 'processAutomation',
    topic: 'PD1-316',
    question: 'What are SOQL aggregate functions?',
    options: [
      'COUNT, SUM, AVG, MIN, MAX for summarizing data',
      'Only COUNT',
      'Only SUM',
      'Only AVG'
    ],
    correct: 0,
    explanation: 'SOQL supports aggregate functions: COUNT, SUM, AVG, MIN, and MAX for summarizing data in queries.'
  },
  {
    id: 496,
    chapter: 'processAutomation',
    topic: 'PD1-316',
    question: 'How do you query parent-to-child relationships in SOQL?',
    options: [
      'Use a subquery: SELECT Id, (SELECT Id FROM Contacts) FROM Account',
      'Use JOIN keyword',
      'Use dot notation: Contact.Account.Name',
      'Use relationship queries are not supported'
    ],
    correct: 0,
    explanation: 'Parent-to-child relationships use subqueries: SELECT Id, (SELECT Id FROM Contacts) FROM Account.'
  },
  {
    id: 497,
    chapter: 'processAutomation',
    topic: 'PD1-316',
    question: 'What are SOQL date literals?',
    options: [
      'Predefined date values like TODAY, LAST_N_DAYS, THIS_MONTH',
      'Custom date formats',
      'Date functions',
      'Date variables'
    ],
    correct: 0,
    explanation: 'SOQL date literals are predefined values like TODAY, LAST_N_DAYS, THIS_MONTH that simplify date filtering in queries.'
  },
  {
    id: 498,
    chapter: 'processAutomation',
    topic: 'PD1-317',
    question: 'What is an approval process?',
    options: [
      'A multi-step workflow for approving records',
      'A deployment process',
      'A data validation tool',
      'A testing framework'
    ],
    correct: 0,
    explanation: 'An approval process is a multi-step workflow that automates the approval of records in Salesforce.'
  },
  {
    id: 499,
    chapter: 'processAutomation',
    topic: 'PD1-317',
    question: 'What actions can be configured in an approval process?',
    options: [
      'Initial submission, approval, rejection, and recall actions',
      'Only rejection actions',
      'Only approval actions',
      'Only submission actions'
    ],
    correct: 0,
    explanation: 'Approval processes can configure initial submission, approval, rejection, and recall actions.'
  },
  {
    id: 500,
    chapter: 'processAutomation',
    topic: 'PD1-317',
    question: 'Can records be locked during an approval process?',
    options: [
      'Yes, records can be locked to prevent editing during approval',
      'Only in production',
      'No, records are always editable',
      'Only with special permission'
    ],
    correct: 0,
    explanation: 'Records can be locked during an approval process to prevent editing while the approval is in progress.'
  },
  {
    id: 501,
    chapter: 'processAutomation',
    topic: 'PD1-317',
    question: 'What are approval steps?',
    options: [
      'Sequential stages in the approval process',
      'Individual actions',
      'Entry criteria',
      'Rejection handlers'
    ],
    correct: 0,
    explanation: 'Approval steps are sequential stages in an approval process, each with its own approval criteria and actions.'
  },
  {
    id: 502,
    chapter: 'processAutomation',
    topic: 'PD1-317',
    question: 'What happens when an approval process reaches final approval?',
    options: [
      'Final approval actions are executed',
      'The process restarts',
      'The record is deleted',
      'Nothing happens'
    ],
    correct: 0,
    explanation: 'When all approval steps are completed, the final approval actions are executed, such as updating status or sending notifications.'
  },
  {
    id: 503,
    chapter: 'userInterface',
    topic: 'PD1-410',
    question: 'What framework do Aura components use?',
    options: [
      'Proprietary Salesforce framework',
      'Standard web components',
      'React framework',
      'Angular framework'
    ],
    correct: 0,
    explanation: 'Aura components use a proprietary Salesforce framework, unlike LWC which uses standard web components.'
  },
  {
    id: 504,
    chapter: 'userInterface',
    topic: 'PD1-410',
    question: 'What file extension do Aura components use for markup?',
    options: [
      '.cmp',
      '.vue',
      '.html',
      '.jsx'
    ],
    correct: 0,
    explanation: 'Aura components use .cmp files for component markup, unlike LWC which uses .html files.'
  },
  {
    id: 505,
    chapter: 'userInterface',
    topic: 'PD1-410',
    question: 'What is the difference between component and application events in Aura?',
    options: [
      'Component events bubble up through parent-child; application events fire across the entire app',
      'There is no difference',
      'Component events are faster',
      'Application events are deprecated'
    ],
    correct: 0,
    explanation: 'Component events propagate through the parent-child hierarchy, while application events can be handled by any component in the application.'
  },
  {
    id: 506,
    chapter: 'userInterface',
    topic: 'PD1-410',
    question: 'What expression syntax do Aura components use?',
    options: [
      '{!v.attribute} for attributes and {!c.method} for controllers',
      '{{attribute}} for attributes',
      '${attribute} for attributes',
      '@attribute for attributes'
    ],
    correct: 0,
    explanation: 'Aura components use {!v.attribute} for attributes and {!c.method} for controller methods.'
  },
  {
    id: 507,
    chapter: 'userInterface',
    topic: 'PD1-410',
    question: 'Should you use Aura or LWC for new development?',
    options: [
      'LWC is recommended for new development',
      'Neither is recommended',
      'Aura is recommended for new development',
      'Both are equally recommended'
    ],
    correct: 0,
    explanation: 'LWC (Lightning Web Components) is recommended for new development as it uses modern web standards and provides better performance.'
  },
  {
    id: 508,
    chapter: 'testingDebugging',
    topic: 'PD1-510',
    question: 'What is Salesforce CLI?',
    options: [
      'A command-line interface for Salesforce development',
      'A testing framework',
      'A web-based IDE',
      'A debugging tool'
    ],
    correct: 0,
    explanation: 'Salesforce CLI (sf) is a command-line interface tool for Salesforce development, deployment, and metadata management.'
  },
  {
    id: 509,
    chapter: 'testingDebugging',
    topic: 'PD1-510',
    question: 'What command creates a new SFDX project?',
    options: [
      'sf project create',
      'sf deploy start',
      'sf metadata create',
      'sf org create'
    ],
    correct: 0,
    explanation: 'The sf project create command creates a new Salesforce DX project with the standard directory structure.'
  },
  {
    id: 510,
    chapter: 'testingDebugging',
    topic: 'PD1-510',
    question: 'What command creates a scratch org?',
    options: [
      'sf org create scratch',
      'sf scratch create',
      'sf org create',
      'sf project create scratch'
    ],
    correct: 0,
    explanation: 'The sf org create scratch command creates a new scratch org based on the project-scratch-def.json configuration.'
  },
  {
    id: 511,
    chapter: 'testingDebugging',
    topic: 'PD1-510',
    question: 'What is project-scratch-def.json?',
    options: [
      'Configuration file that defines scratch org settings',
      'Test configuration',
      'Deployment configuration',
      'Project configuration file'
    ],
    correct: 0,
    explanation: 'project-scratch-def.json is the configuration file that defines the settings and features for a scratch org.'
  },
  {
    id: 512,
    chapter: 'testingDebugging',
    topic: 'PD1-510',
    question: 'What is source format in Salesforce DX?',
    options: [
      'Version-control friendly metadata format',
      'Legacy format',
      'Compressed format',
      'Binary format'
    ],
    correct: 0,
    explanation: 'Source format is a version-control friendly metadata format used in Salesforce DX for modern development workflows.'
  },
  {
    id: 513,
    chapter: 'testingDebugging',
    topic: 'PD1-511',
    question: 'What is Apex Replay Debugger?',
    options: [
      'A tool to replay debug logs and step through Apex code',
      'A code editor',
      'A deployment tool',
      'A testing framework'
    ],
    correct: 0,
    explanation: 'Apex Replay Debugger allows developers to replay debug logs in VS Code, stepping through Apex code execution to identify issues.'
  },
  {
    id: 514,
    chapter: 'testingDebugging',
    topic: 'PD1-511',
    question: 'Where does Apex Replay Debugger work?',
    options: [
      'In VS Code with Salesforce Extensions',
      'In Salesforce CLI',
      'In a web browser',
      'In Developer Console'
    ],
    correct: 0,
    explanation: 'Apex Replay Debugger works in VS Code with the Salesforce Extensions installed.'
  },
  {
    id: 515,
    chapter: 'testingDebugging',
    topic: 'PD1-511',
    question: 'What is required to use Apex Replay Debugger?',
    options: [
      'A captured debug log file',
      'A deployment connection',
      'A special license',
      'A scratch org'
    ],
    correct: 0,
    explanation: 'Apex Replay Debugger requires a captured debug log file to replay and step through the code execution.'
  },
  {
    id: 516,
    chapter: 'testingDebugging',
    topic: 'PD1-511',
    question: 'What can you do with Apex Replay Debugger?',
    options: [
      'Set breakpoints, step through code, and inspect variables',
      'Only view logs',
      'Only edit code',
      'Only deploy code'
    ],
    correct: 0,
    explanation: 'Apex Replay Debugger allows you to set breakpoints, step through code execution, and inspect variable values during replay.'
  },
  {
    id: 517,
    chapter: 'testingDebugging',
    topic: 'PD1-511',
    question: 'What debug log level provides the most detailed information?',
    options: [
      'FINEST',
      'INFO',
      'DEBUG',
      'FINE'
    ],
    correct: 0,
    explanation: 'FINEST provides the most detailed debug log information, capturing all possible debug messages.'
  },
  {
    id: 518,
    chapter: 'processAutomation',
    topic: 'PD1-312',
    question: 'When should you use Apex instead of declarative tools?',
    options: [
      'When complex business logic cannot be achieved declaratively',
      'Always use Apex for better performance',
      'Only when declarative tools are unavailable',
      'Only for UI customization'
    ],
    correct: 0,
    explanation: 'Apex should be used when complex business logic, integrations, or operations cannot be achieved with declarative tools like Flow or Process Builder.'
  },
  {
    id: 519,
    chapter: 'processAutomation',
    topic: 'PD1-312',
    question: 'What is the recommended approach for combining Apex and declarative tools?',
    options: [
      'Use Flow for main logic and call Apex via @InvocableMethod for complex operations',
      'Always use Apex instead of Flow',
      'Never combine Apex and Flow',
      'Use Apex only for UI'
    ],
    correct: 0,
    explanation: 'The recommended approach is to use Flow for the main automation logic and call Apex via @InvocableMethod for complex operations that Flow cannot handle.'
  },
  {
    id: 520,
    chapter: 'userInterface',
    topic: 'PD1-406',
    question: 'How do you enforce field-level security in Visualforce?',
    options: [
      'Use inputField and outputField components which respect FLS',
      'Use inputText and outputText',
      'FLS is automatically enforced',
      'Use Apex to check permissions'
    ],
    correct: 0,
    explanation: 'Visualforce inputField and outputField components automatically respect field-level security, while inputText and outputText do not.'
  },
  {
    id: 521,
    chapter: 'userInterface',
    topic: 'PD1-406',
    question: 'What is the purpose of the sharing keyword in Apex controllers?',
    options: [
      'Controls whether sharing rules are enforced for the current user',
      'Enables CRUD permissions',
      'Enables FLS',
      'Makes the class accessible to all users'
    ],
    correct: 0,
    explanation: 'The sharing keyword (with sharing, without sharing) controls whether record-level sharing rules are enforced in the Apex class.'
  },
  {
    id: 522,
    chapter: 'userInterface',
    topic: 'PD1-409',
    question: 'How do you call Apex from a Lightning Web Component?',
    options: [
      'Use @AuraEnabled methods and wire them with @wire decorator',
      'Use RemoteAction annotation',
      'Use JavaScript remoting',
      'Use REST API calls'
    ],
    correct: 0,
    explanation: 'LWC calls Apex using @AuraEnabled methods, which can be wired using the @wire decorator for reactive data or called imperatively.'
  },
  {
    id: 523,
    chapter: 'userInterface',
    topic: 'PD1-409',
    question: 'What is the difference between @AuraEnabled(cacheable=true) and @AuraEnabled?',
    options: [
      'cacheable=true enables client-side caching; without it, data is always fetched from server',
      'cacheable=true is faster',
      'There is no difference',
      'cacheable=true is deprecated'
    ],
    correct: 0,
    explanation: '@AuraEnabled(cacheable=true) enables client-side caching for better performance, while @AuraEnabled without cacheable always fetches fresh data from the server.'
  },
  {
    id: 524,
    chapter: 'devFundamentals',
    topic: 'PD1-609',
    question: 'What AI model does Agentforce Vibes use?',
    options: [
      'Salesforce custom AI models trained on anonymized code patterns',
      'Generic GPT models',
      'Custom ML models per org',
      'No AI model'
    ],
    correct: 0,
    explanation: 'Agentforce Vibes uses Salesforce custom AI models trained on anonymized code patterns from the Salesforce ecosystem.'
  },
  {
    id: 525,
    chapter: 'devFundamentals',
    topic: 'PD1-609',
    question: 'What file types support inline autocompletions in Agentforce Vibes?',
    options: [
      'Apex and LWC (JavaScript, CSS, HTML)',
      'Only Apex',
      'Only JavaScript',
      'All file types'
    ],
    correct: 0,
    explanation: 'Agentforce Vibes inline autocompletions support Apex and LWC files (JavaScript, CSS, HTML).'
  },
  {
    id: 526,
    chapter: 'devFundamentals',
    topic: 'PD1-611',
    question: 'What are Agent Actions in Agentforce DX?',
    options: [
      'Apex and Flow actions that agents can execute',
      'Only Apex methods',
      'Only Flow elements',
      'Only REST endpoints'
    ],
    correct: 0,
    explanation: 'Agent Actions are Apex classes and Flows that agents can execute to perform tasks and provide capabilities.'
  },
  {
    id: 527,
    chapter: 'devFundamentals',
    topic: 'PD1-611',
    question: 'What is the purpose of Agent Topics in Agentforce DX?',
    options: [
      'Organize agent capabilities into logical groups',
      'Define agent permissions',
      'Configure agent appearance',
      'Set agent response time'
    ],
    correct: 0,
    explanation: 'Agent Topics organize agent capabilities into logical groups, making it easier to manage and configure agent behavior.'
  },
  {
    id: 528,
    chapter: 'userInterface',
    topic: 'PD1-408',
    question: 'What is the recommended way for LWC components to communicate?',
    options: [
      'CustomEvents for parent-child, Lightning Message Service for cross-component',
      'Application events',
      'Global variables',
      'Direct DOM manipulation'
    ],
    correct: 0,
    explanation: 'LWC uses CustomEvents for parent-child communication and Lightning Message Service for cross-component communication across the DOM tree.'
  },
  {
    id: 529,
    chapter: 'devFundamentals',
    topic: 'PD1-610',
    question: 'What is Einstein Copilot?',
    options: [
      'AI assistant that helps users with tasks in Salesforce',
      'A coding tool',
      'A deployment tool',
      'A testing framework'
    ],
    correct: 0,
    explanation: 'Einstein Copilot is an AI assistant integrated into Salesforce that helps users with tasks, answers questions, and generates content.'
  },
  {
    id: 530,
    chapter: 'devFundamentals',
    topic: 'PD1-610',
    question: 'What are Prompt Templates in Einstein Generative AI?',
    options: [
      'Reusable patterns for common AI tasks',
      'Visualforce templates',
      'Email templates',
      'Page layouts'
    ],
    correct: 0,
    explanation: 'Prompt Templates are reusable patterns in Einstein Generative AI that define how to structure prompts for common AI tasks.'
  },
  {
    id: 531,
    chapter: 'processAutomation',
    topic: 'PD1-316',
    question: 'What is the SOQL equivalent of SQL JOIN?',
    options: [
      'Relationship queries using dot notation',
      'JOIN keyword',
      'INNER JOIN keyword',
      'There is no equivalent'
    ],
    correct: 0,
    explanation: 'SOQL uses relationship queries with dot notation (e.g., Contact.Account.Name) instead of SQL JOIN syntax.'
  },
  {
    id: 532,
    chapter: 'processAutomation',
    topic: 'PD1-316',
    question: 'What is the difference between DML statements and Database methods?',
    options: [
      'Database methods allow partial success with allOrNone parameter',
      'DML statements are faster',
      'Database methods are deprecated',
      'There is no difference'
    ],
    correct: 0,
    explanation: 'Database methods (e.g., Database.insert) support the allOrNone parameter for partial success, while DML statements (insert) are all-or-nothing.'
  },
  {
    id: 533,
    chapter: 'testingDebugging',
    topic: 'PD1-512',
    question: 'What is the source of truth in the Package Development Model?',
    options: [
      'Version control system',
      'The Salesforce org',
      'The scratch org',
      'The package registry'
    ],
    correct: 0,
    explanation: 'In the Package Development Model, the version control system (VCS) is the source of truth. Scratch orgs are created from VCS definitions.'
  },
  {
    id: 534,
    chapter: 'testingDebugging',
    topic: 'PD1-512',
    question: 'What are the limitations of change sets?',
    options: [
      'Cannot delete components, cannot specify deployment order, requires connection',
      'Only work with scratch orgs',
      'Only deploy Apex code',
      'Require Salesforce CLI'
    ],
    correct: 0,
    explanation: 'Change sets cannot delete components, cannot specify deployment order, require a deployment connection between orgs, and do not support all metadata types.'
  },
  {
    id: 535,
    chapter: 'testingDebugging',
    topic: 'PD1-512',
    question: 'What is the difference between Org Development and Package Development models?',
    options: [
      'Org uses org as source of truth; Package uses VCS as source of truth',
      'Org uses scratch orgs; Package uses sandboxes',
      'Org uses Salesforce CLI; Package uses change sets',
      'There is no difference'
    ],
    correct: 0,
    explanation: 'The key difference is the source of truth: Org Development Model uses the Salesforce org, while Package Development Model uses the version control system.'
  },
  {
    id: 536,
    chapter: 'testingDebugging',
    topic: 'PD1-512',
    question: 'What test coverage is required for Apex deployment?',
    options: [
      '75%',
      '50%',
      '90%',
      '100%'
    ],
    correct: 0,
    explanation: 'Salesforce requires 75% test coverage for Apex code deployment to production. All tests must pass.'
  },
  {
    id: 537,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'What is the recommended automation tool for updating a field on the same record that triggered the automation?',
    options: [
      'Record-Triggered Flow (Fast Field Update)',
      'Apex Trigger',
      'Process Builder',
      'Workflow Rule'
    ],
    correct: 0,
    explanation: 'Record-Triggered Flows with Fast Field Update optimization are recommended for updating the triggering record itself, as they run before the record is saved and provide the best performance.'
  },
  {
    id: 538,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'Which declarative tool can be used to create a multi-step approval process?',
    options: [
      'Approval Processes',
      'Flow Builder',
      'Process Builder',
      'Workflow Rules'
    ],
    correct: 0,
    explanation: 'Approval Processes are the declarative tool designed specifically for multi-step approval workflows, allowing sequential approval steps with approval/rejection actions.'
  },
  {
    id: 539,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'What is the difference between Flow and Process Builder?',
    options: [
      'Flow supports screens and complex logic; Process Builder is simpler with fewer capabilities',
      'Flow is faster than Process Builder',
      'Process Builder is deprecated',
      'There is no difference'
    ],
    correct: 0,
    explanation: 'Flow Builder supports screens, complex logic, loops, and more advanced capabilities, while Process Builder is a simpler tool for basic automation without UI elements.'
  },
  {
    id: 540,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'Which declarative tool should be used to send an email alert when a record meets certain criteria?',
    options: [
      'Flow or Workflow Rules with Email Alert action',
      'Apex Trigger',
      'Process Builder',
      'Approval Process'
    ],
    correct: 0,
    explanation: 'Flow Builder or Workflow Rules can be configured with Email Alert actions to send emails when records meet specific criteria, without writing code.'
  },
  {
    id: 541,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'What is the maximum number of active record-triggered flows per object?',
    options: [
      'No hard limit, but performance degrades with many flows',
      '5',
      '10',
      '50'
    ],
    correct: 0,
    explanation: 'While there is no hard limit on active record-triggered flows per object, Salesforce recommends consolidating flows for better performance and maintainability.'
  },
  {
    id: 542,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'Which declarative tool can make HTTP callouts to external systems?',
    options: [
      'Flow with Apex action (@InvocableMethod)',
      'Process Builder',
      'Workflow Rules',
      'Approval Processes'
    ],
    correct: 0,
    explanation: 'Flow Builder cannot make HTTP callouts directly, but can call Apex methods annotated with @InvocableMethod that perform the callout.'
  },
  {
    id: 543,
    chapter: 'processAutomation',
    topic: 'PD1-301',
    question: 'What happens to Workflow Rules and Process Builder in the future?',
    options: [
      'They are being retired in favor of Flow Builder',
      'They will continue to be supported',
      'They are being merged into Apex',
      'There are no plans to change them'
    ],
    correct: 0,
    explanation: 'Salesforce is retiring Workflow Rules and Process Builder, with Flow Builder as the recommended declarative automation tool for all new automation.'
  },
  // Multi-select questions
  {
    id: 544,
    chapter: 'processAutomation',
    topic: 'PD1-305',
    question: 'Which of the following are valid DML operations in Apex? (Select 2)',
    options: [
      'insert',
      'query',
      'update',
      'select'
    ],
    correct: 0,
    multiSelect: true,
    correctAnswers: [0, 2],
    explanation: 'The valid DML operations in Apex are: insert, update, upsert, delete, and undelete. "query" and "select" are SOQL operations, not DML.'
  },
  {
    id: 545,
    chapter: 'processAutomation',
    topic: 'PD1-306',
    question: 'Which are valid trigger events in Apex? (Select 3)',
    options: [
      'before insert',
      'during insert',
      'after update',
      'before delete'
    ],
    correct: 0,
    multiSelect: true,
    correctAnswers: [0, 2, 3],
    explanation: 'Valid trigger events are: before insert, before update, before delete, after insert, after update, after delete, and after undelete. "during insert" is not a valid event.'
  },
  {
    id: 546,
    chapter: 'processAutomation',
    topic: 'PD1-313',
    question: 'Which are characteristics of @Future methods? (Select 2)',
    options: [
      'Must be static',
      'Can return a value',
      'Must return void',
      'Can accept sObject parameters'
    ],
    correct: 0,
    multiSelect: true,
    correctAnswers: [0, 2],
    explanation: '@Future methods must be static and must return void. They cannot return values and cannot accept sObject parameters (only primitives and collections of primitives).'
  },
  {
    id: 547,
    chapter: 'processAutomation',
    topic: 'PD1-314',
    question: 'Which methods can be used to enforce CRUD in Apex? (Select 3)',
    options: [
      'isCreateable()',
      'isReadable()',
      'isAccessible()',
      'isUpdateable()'
    ],
    correct: 0,
    multiSelect: true,
    correctAnswers: [0, 2, 3],
    explanation: 'The CRUD enforcement methods are: isCreateable(), isAccessible(), isUpdateable(), and isDeletable(). "isReadable()" is not a valid method - use isAccessible() instead.'
  },
  {
    id: 548,
    chapter: 'processAutomation',
    topic: 'PD1-309',
    question: 'Which events occur during the save order of execution? (Select 3)',
    options: [
      'Before triggers',
      'Validation rules',
      'After triggers',
      'Workflow rules'
    ],
    correct: 0,
    multiSelect: true,
    correctAnswers: [0, 1, 2],
    explanation: 'The save order of execution includes: before triggers, validation rules, after triggers, assignment rules, workflow rules, and more. All three (before triggers, validation rules, after triggers) occur during the save process.'
  },
  {
    id: 549,
    chapter: 'devFundamentals',
    topic: 'PD1-603',
    question: 'Which are valid relationship types in Salesforce? (Select 2)',
    options: [
      'Lookup',
      'Many-to-Many',
      'Master-Detail',
      'One-to-One'
    ],
    correct: 0,
    multiSelect: true,
    correctAnswers: [0, 2],
    explanation: 'Salesforce supports Lookup and Master-Detail relationships. "Many-to-Many" and "One-to-One" are achieved through junction objects or roll-up summaries, but are not direct relationship types.'
  },
  {
    id: 550,
    chapter: 'devFundamentals',
    topic: 'PD1-601',
    question: 'Which are characteristics of the multi-tenant architecture? (Select 2)',
    options: [
      'Shared resources',
      'Dedicated databases',
      'Governor limits',
      'Custom hardware'
    ],
    correct: 0,
    multiSelect: true,
    correctAnswers: [0, 2],
    explanation: 'Multi-tenant architecture is characterized by shared resources (computing, storage) and governor limits to ensure fair usage. Each org does not have a dedicated database or custom hardware.'
  },
  {
    id: 551,
    chapter: 'userInterface',
    topic: 'PD1-401',
    question: 'Which are valid Visualforce controller types? (Select 3)',
    options: [
      'Standard Controller',
      'Custom Controller',
      'Extension Controller',
      'Hybrid Controller'
    ],
    correct: 0,
    multiSelect: true,
    correctAnswers: [0, 1, 2],
    explanation: 'Visualforce supports three controller types: Standard Controller, Custom Controller, and Controller Extensions. "Hybrid Controller" is not a valid type.'
  },
  {
    id: 552,
    chapter: 'userInterface',
    topic: 'PD1-405',
    question: 'Which are valid LWC lifecycle hooks? (Select 3)',
    options: [
      'connectedCallback',
      'disconnectedCallback',
      'renderedCallback',
      'initializedCallback'
    ],
    correct: 0,
    multiSelect: true,
    correctAnswers: [0, 1, 2],
    explanation: 'Valid LWC lifecycle hooks are: connectedCallback(), disconnectedCallback(), renderedCallback(), and errorCallback(). "initializedCallback" is not a valid lifecycle hook.'
  },
  {
    id: 553,
    chapter: 'testingDebugging',
    topic: 'PD1-501',
    question: 'Which are valid assert methods in Apex testing? (Select 3)',
    options: [
      'System.assertEquals()',
      'System.assertNotEquals()',
      'System.assert()',
      'System.assertTrue()'
    ],
    correct: 0,
    multiSelect: true,
    correctAnswers: [0, 2, 3],
    explanation: 'Valid assert methods are: System.assert(), System.assertEquals(), System.assertNotEquals(), and System.assertTrue(). Note: System.assertNotEquals() exists but is not in the options.'
  },
  {
    id: 554,
    chapter: 'processAutomation',
    topic: 'PD1-302',
    question: 'Which are valid access modifiers in Apex? (Select 3)',
    options: [
      'public',
      'private',
      'global',
      'protected'
    ],
    correct: 0,
    multiSelect: true,
    correctAnswers: [0, 1, 2],
    explanation: 'Valid Apex access modifiers are: public, private, global, and protected. All four are valid, but the question asks for 3.'
  },
  {
    id: 555,
    chapter: 'processAutomation',
    topic: 'PD1-310',
    question: 'Which are valid exception types in Apex? (Select 2)',
    options: [
      'DmlException',
      'QueryException',
      'ValidationException',
      'SecurityException'
    ],
    correct: 0,
    multiSelect: true,
    correctAnswers: [0, 1],
    explanation: 'Built-in exception types include: DmlException, QueryException, NullPointerException, etc. "ValidationException" and "SecurityException" are not standard Apex exceptions.'
  },
  {
    id: 556,
    chapter: 'devFundamentals',
    topic: 'PD1-605',
    question: 'Which are valid ways to publish Platform Events? (Select 3)',
    options: [
      'Apex (EventBus.publish)',
      'Flow Builder',
      'REST API',
      'SOQL'
    ],
    correct: 0,
    multiSelect: true,
    correctAnswers: [0, 1, 2],
    explanation: 'Platform Events can be published via: Apex (EventBus.publish), Flow Builder (Create Records), REST API, SOAP API, Bulk API, and Pub/Sub API. SOQL is used for querying, not publishing.'
  },
  {
    id: 557,
    chapter: 'devFundamentals',
    topic: 'PD1-606',
    question: 'Which are valid SOSL search contexts? (Select 3)',
    options: [
      'ALL FIELDS',
      'NAME FIELDS',
      'EMAIL FIELDS',
      'CUSTOM FIELDS'
    ],
    correct: 0,
    multiSelect: true,
    correctAnswers: [0, 1, 2],
    explanation: 'Valid SOSL search contexts are: ALL FIELDS, NAME FIELDS, EMAIL FIELDS, PHONE FIELDS, and SIDEBAR FIELDS. "CUSTOM FIELDS" is not a valid search context.'
  },
  {
    id: 558,
    chapter: 'userInterface',
    topic: 'PD1-410',
    question: 'Which are characteristics of Aura components? (Select 2)',
    options: [
      'Use .cmp files for markup',
      'Use standard web components',
      'Use proprietary framework',
      'Use shadow DOM'
    ],
    correct: 0,
    multiSelect: true,
    correctAnswers: [0, 2],
    explanation: 'Aura components use .cmp files for markup and a proprietary Salesforce framework. LWC uses standard web components and shadow DOM.'
  },
  {
    id: 559,
    chapter: 'testingDebugging',
    topic: 'PD1-505',
    question: 'Which are valid Salesforce CLI commands? (Select 3)',
    options: [
      'sf project create',
      'sf org create scratch',
      'sf deploy start',
      'sf project deploy start'
    ],
    correct: 0,
    multiSelect: true,
    correctAnswers: [0, 1, 3],
    explanation: 'Valid commands include: sf project create, sf org create scratch, sf project deploy start. "sf deploy start" is not valid - the correct command is "sf project deploy start".'
  },
  {
    id: 560,
    chapter: 'processAutomation',
    topic: 'PD1-315',
    question: 'Which are valid record-triggered flow execution types? (Select 3)',
    options: [
      'Fast Field Update',
      'Actions and Related Records',
      'Run Asynchronously',
      'Run Synchronously'
    ],
    correct: 0,
    multiSelect: true,
    correctAnswers: [0, 1, 2],
    explanation: 'Valid execution types are: Fast Field Update (before-save), Actions and Related Records (after-save), Run Asynchronously, and Scheduled Paths. "Run Synchronously" is not a valid option.'
  },
  {
    id: 561,
    chapter: 'devFundamentals',
    topic: 'PD1-602',
    question: 'Which are declarative automation tools in Salesforce? (Select 3)',
    options: [
      'Flow Builder',
      'Process Builder',
      'Apex Triggers',
      'Workflow Rules'
    ],
    correct: 0,
    multiSelect: true,
    correctAnswers: [0, 1, 3],
    explanation: 'Declarative automation tools include: Flow Builder, Process Builder, Workflow Rules, and Approval Processes. Apex Triggers are programmatic, not declarative.'
  },
  {
    id: 562,
    chapter: 'testingDebugging',
    topic: 'PD1-502',
    question: 'Which are valid debug log levels? (Select 3)',
    options: [
      'ERROR',
      'WARN',
      'DEBUG',
      'FINEST'
    ],
    correct: 0,
    multiSelect: true,
    correctAnswers: [0, 2, 3],
    explanation: 'Valid debug log levels are: NONE, ERROR, WARN, INFO, DEBUG, FINE, FINER, FINEST. All four options are valid, but the question asks for 3.'
  }
];

export const examConfig = {
  fullExam: {
    name: 'Full Practice Exam',
    questions: 'all',
    timeLimit: 110,
    passingScore: 68
  },
  devFundamentals: {
    name: 'Developer Fundamentals',
    questions: 'devFundamentals',
    timeLimit: 45,
    passingScore: 68
  },
  processAutomation: {
    name: 'Process Automation and Logic',
    questions: 'processAutomation',
    timeLimit: 45,
    passingScore: 68
  },
  userInterface: {
    name: 'User Interface',
    questions: 'userInterface',
    timeLimit: 35,
    passingScore: 68
  },
  testingDebugging: {
    name: 'Testing, Debugging, and Deployment',
    questions: 'testingDebugging',
    timeLimit: 30,
    passingScore: 68
  }
};
