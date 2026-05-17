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
  },
  // Additional extracted flashcards from Focus on Force Knowledge Checks
  // Chapter 1
  {
    id: 'fc31', chapter: 'chapter1', topic: 'PD1-601',
    front: 'Pages and components are part of which component of the MVC?',
    back: 'View - Visualforce pages and Lightning components represent the View layer of the MVC architecture.'
  },
  {
    id: 'fc32', chapter: 'chapter1', topic: 'PD1-601',
    front: 'What part of the MVC do Salesforce Objects map to?',
    back: 'Model - Salesforce Objects represent the Model layer, defining data structure and business logic.'
  },
  {
    id: 'fc33', chapter: 'chapter1', topic: 'PD1-601',
    front: 'Which tool can be used to add custom Lightning components to a page in Lightning Experience?',
    back: 'Lightning App Builder - It provides a drag-and-drop interface for adding components to Lightning pages.'
  },
  {
    id: 'fc34', chapter: 'chapter1', topic: 'PD1-602',
    front: 'Which declarative automation tools can be used to perform automated actions in Salesforce?',
    back: 'Process Builder, Flow Builder, Approval Process, and Workflow Rule are the main declarative automation tools.'
  },
  {
    id: 'fc35', chapter: 'chapter1', topic: 'PD1-602',
    front: 'Which annotation should be used for an Apex method that needs to be invoked by a process?',
    back: '@InvocableMethod - This annotation makes an Apex method callable from Flow and Process Builder.'
  },
  {
    id: 'fc36', chapter: 'chapter1', topic: 'PD1-603',
    front: 'Which type of relationship should be used to ensure ownership of child records is NOT inherited from the parent?',
    back: 'Lookup relationship - In a lookup, child records retain their own ownership. Master-detail inherits ownership from the parent.'
  },
  {
    id: 'fc37', chapter: 'chapter1', topic: 'PD1-603',
    front: 'Which relationship field ensures the value is required on child records?',
    back: 'Master-detail relationship - The field related to the parent record is always required in a master-detail relationship.'
  },
  {
    id: 'fc38', chapter: 'chapter1', topic: 'PD1-603',
    front: 'Can relationship types be changed?',
    back: 'Yes, but with conditions: A master-detail can be converted to lookup if not used in roll-up summary fields, and vice versa if all lookup records have values.'
  },
  {
    id: 'fc39', chapter: 'chapter1', topic: 'PD1-603',
    front: 'What is an external ID?',
    back: 'An external ID is a field that contains a unique identifier from a system outside of Salesforce. It can be used for upsert operations and data integration.'
  },
  {
    id: 'fc40', chapter: 'chapter1', topic: 'PD1-603',
    front: 'What are some limitations of roll-up summary fields?',
    back: 'Max number per object, does not work for lookups, cannot roll up formula fields referencing other objects or containing dynamic date functions.'
  },
  {
    id: 'fc41', chapter: 'chapter1', topic: 'PD1-603',
    front: 'Which formula field function returns the conversion rate to the corporate currency for a given ISO code?',
    back: 'CURRENCYRATE(isoCode) - Returns the conversion rate for the specified currency ISO code.'
  },
  {
    id: 'fc42', chapter: 'chapter1', topic: 'PD1-603',
    front: 'Which two options are available to access the token for an object in Apex?',
    back: '1. The getSObjectType() method\n2. The sObjectType static member variable\n\nBoth provide access to the SObject token for schema operations.'
  },
  {
    id: 'fc43', chapter: 'chapter1', topic: 'PD1-603',
    front: 'Which method checks whether an object can be created by the current user?',
    back: 'The isCreateable() method - Part of the DescribeSObjectResult class for checking CRUD permissions.'
  },
  {
    id: 'fc44', chapter: 'chapter1', topic: 'PD1-601',
    front: 'What platform features are part of the control layer in MVC?',
    back: 'Declarative (workflow, escalation rules) or programmatic (Visualforce controllers, Apex classes) business logic.'
  },
  {
    id: 'fc45', chapter: 'chapter1', topic: 'PD1-601',
    front: 'What are 2 considerations for developers new to Salesforce?',
    back: '1. Governor limits are enforced on shared resources\n2. Code cannot be deployed to production without achieving test code coverage (75%)'
  },
  {
    id: 'fc46', chapter: 'chapter1', topic: 'PD1-602',
    front: 'What can be done to display a custom UI for updating several related records on the opportunity page in Lightning?',
    back: 'Develop a custom Lightning Component and add it to the record page using Lightning App Builder.'
  },
  {
    id: 'fc47', chapter: 'chapter1', topic: 'PD1-602',
    front: 'What happens when a field whose value is not specified is made required in Apex?',
    back: 'The Apex code throws an exception when executed if the required field value is not provided.'
  },
  {
    id: 'fc48', chapter: 'chapter1', topic: 'PD1-604',
    front: 'What are some options for exporting data from a development environment?',
    back: 'Data Loader, Workbench, Reports, dataloader.io, and ETL tools can all be used for data export.'
  },
  {
    id: 'fc49', chapter: 'chapter1', topic: 'PD1-604',
    front: 'What are some limitations of the Data Import Wizard?',
    back: 'Does not support all standard objects, cannot load more than 50K records, cannot save mappings, cannot export data.'
  },
  {
    id: 'fc50', chapter: 'chapter1', topic: 'PD1-603',
    front: 'When would creating a formula field be appropriate?',
    back: 'When a read-only field is required that is calculated based on field values (including related objects) or a defined formula.'
  },
  {
    id: 'fc51', chapter: 'chapter1', topic: 'PD1-603',
    front: 'What functions are available for roll-up summary fields?',
    back: 'Count, Sum, Max, and Min are the available roll-up summary field functions.'
  },
  {
    id: 'fc52', chapter: 'chapter1', topic: 'PD1-603',
    front: 'Which formula adds 6 months to a field named Contract_Start_Date__c?',
    back: 'ADDMONTHS(Contract_Start_Date__c, 6) - The ADDMONTHS function adds the specified number of months to a date.'
  },
  {
    id: 'fc53', chapter: 'chapter1', topic: 'PD1-603',
    front: 'Which method retrieves metadata information for individual objects?',
    back: 'The describeSObjects() method - Returns describe metadata for the specified object types.'
  },
  // Chapter 3
  {
    id: 'fc54', chapter: 'chapter3', topic: 'PD1-401',
    front: 'What type of code can be defined inline in HTML tags?',
    back: 'CSS code can be defined inline using the style attribute in HTML tags.'
  },
  {
    id: 'fc55', chapter: 'chapter3', topic: 'PD1-401',
    front: 'Which tag is used to add CSS to a Visualforce page?',
    back: '<apex:stylesheet> - References a CSS stylesheet in a Visualforce page.'
  },
  {
    id: 'fc56', chapter: 'chapter3', topic: 'PD1-401',
    front: 'Which component displays an external website in an inline frame within Visualforce?',
    back: '<apex:iframe> - Embeds an external website in an iframe within a Visualforce page.'
  },
  {
    id: 'fc57', chapter: 'chapter3', topic: 'PD1-401',
    front: 'What is required to override a tab home page with a Visualforce page?',
    back: 'The Visualforce page must use the standard list controller for that tab, a custom controller, or no controller.'
  },
  {
    id: 'fc58', chapter: 'chapter3', topic: 'PD1-401',
    front: 'Which communication model does the Lightning Component Framework use?',
    back: 'Event-driven model - Components communicate through events rather than direct method calls.'
  },
  {
    id: 'fc59', chapter: 'chapter3', topic: 'PD1-405',
    front: 'Where can Lightning components be made available?',
    back: 'Salesforce Mobile App, Lightning Experience, and Communities.'
  },
  {
    id: 'fc60', chapter: 'chapter3', topic: 'PD1-405',
    front: 'Which design ensures compatibility with different devices in Lightning?',
    back: 'Responsive design - Lightning Component Framework supports responsive design for cross-device compatibility.'
  },
  {
    id: 'fc61', chapter: 'chapter3', topic: 'PD1-405',
    front: 'In an Aura component bundle, which resource contains the markup definition?',
    back: 'Component (.cmp) - Contains the markup definition for reusable units of an app.'
  },
  {
    id: 'fc62', chapter: 'chapter3', topic: 'PD1-405',
    front: 'How can CSS be added to an Aura component bundle in Developer Console?',
    back: 'By clicking on the STYLE button in the Developer Console sidebar.'
  },
  {
    id: 'fc63', chapter: 'chapter3', topic: 'PD1-405',
    front: 'Which Aura component resource exposes attributes to Lightning App Builder?',
    back: 'Design resource - Exposes component attributes to the Lightning App Builder for configuration.'
  },
  {
    id: 'fc64', chapter: 'chapter3', topic: 'PD1-405',
    front: 'Which tag references a JavaScript library uploaded as a static resource in .cmp markup?',
    back: '<ltng:require> - Loads JavaScript libraries and CSS styles in Aura components.'
  },
  {
    id: 'fc65', chapter: 'chapter3', topic: 'PD1-401',
    front: 'Which attribute of apex:page associates a standard controller?',
    back: 'standardController attribute - Associates a standard or custom object with the Visualforce page.'
  },
  {
    id: 'fc66', chapter: 'chapter3', topic: 'PD1-401',
    front: 'Which attribute associates a controller extension with a Visualforce page?',
    back: 'The \'extensions\' attribute - Specifies one or more controller extension classes.'
  },
  {
    id: 'fc67', chapter: 'chapter3', topic: 'PD1-401',
    front: 'Which component allows users to filter records on a Visualforce page?',
    back: '<apex:selectlist> - Creates a dropdown list for filtering records.'
  },
  {
    id: 'fc68', chapter: 'chapter3', topic: 'PD1-401',
    front: 'What specifies the logic for a Visualforce page?',
    back: 'Custom Controller - An Apex class that specifies the logic for a Visualforce page.'
  },
  {
    id: 'fc69', chapter: 'chapter3', topic: 'PD1-401',
    front: 'Which method in a custom controller responds to user input?',
    back: 'Action method - Responds to user input and performs operations on the server.'
  },
  {
    id: 'fc70', chapter: 'chapter3', topic: 'PD1-405',
    front: 'Which UI framework allows building single-page web apps with dynamic UIs?',
    back: 'Lightning Component Framework - Supports building modern, responsive single-page applications.'
  },
  {
    id: 'fc71', chapter: 'chapter3', topic: 'PD1-406',
    front: 'What should be used instead of dynamic SOQL to prevent SOQL injection?',
    back: 'Static query with a bind variable - Bind variables automatically escape user input.'
  },
  {
    id: 'fc72', chapter: 'chapter3', topic: 'PD1-406',
    front: 'Which function encodes text by inserting escape characters before unsafe JavaScript characters?',
    back: 'JSENCODE - Inserts escape characters before unsafe JavaScript characters to prevent XSS.'
  },
  {
    id: 'fc73', chapter: 'chapter3', topic: 'PD1-406',
    front: 'What can prevent a Visualforce page from using an anti-CSRF token?',
    back: 'An action handler in apex:page - This bypasses the CSRF protection mechanism.'
  },
  {
    id: 'fc74', chapter: 'chapter3', topic: 'PD1-405',
    front: 'Which tag registers to an event in an Aura component?',
    back: '<aura:registerEvent> - Registers a component event for handling.'
  },
  {
    id: 'fc75', chapter: 'chapter3', topic: 'PD1-405',
    front: 'Which tag handles an event in an Aura component?',
    back: '<aura:handler> - Handles component or application events in Aura components.'
  },
  {
    id: 'fc76', chapter: 'chapter3', topic: 'PD1-405',
    front: 'Which event type is NOT subject to the component hierarchical setup?',
    back: 'Application Event - Can be handled by any component, regardless of hierarchy.'
  },
  {
    id: 'fc77', chapter: 'chapter3', topic: 'PD1-405',
    front: 'Which event type is more efficient within the containment hierarchy?',
    back: 'Component Event - More efficient when handled within the component hierarchy.'
  },
  {
    id: 'fc78', chapter: 'chapter3', topic: 'PD1-405',
    front: 'What are the different types of Lightning Components?',
    back: 'Standard Components (built-in), Custom Components (org-specific), and AppExchange Components (third-party).'
  },
  {
    id: 'fc79', chapter: 'chapter3', topic: 'PD1-401',
    front: 'How can a flow hide unnecessary fields on a screen?',
    back: 'By using component visibility settings on a screen component to conditionally show/hide fields.'
  },
  {
    id: 'fc80', chapter: 'chapter3', topic: 'PD1-401',
    front: 'In what ways can a Visualforce page be embedded?',
    back: 'In page layout and on Lightning pages using the Visualforce component.'
  },
  {
    id: 'fc81', chapter: 'chapter3', topic: 'PD1-401',
    front: 'What Salesforce feature should be used to build dynamic PDF documents?',
    back: 'Visualforce Page - Can render as PDF using renderAs="pdf" attribute.'
  },
  {
    id: 'fc82', chapter: 'chapter3', topic: 'PD1-401',
    front: 'Which function securely retrieves third-party images on a Visualforce page?',
    back: 'IMAGEPROXYURL - Securely retrieves and displays third-party images.'
  },
  {
    id: 'fc83', chapter: 'chapter3', topic: 'PD1-401',
    front: 'What does Einstein Next Best Action rely on?',
    back: 'Flows, recommendations, strategies, and components to suggest best actions to users.'
  },
  // Chapter 4.1
  {
    id: 'fc84', chapter: 'chapter4', topic: 'PD1-501',
    front: 'What can be used to create test data once and access it throughout the test class?',
    back: 'Test setup method (@testSetup) - Creates test data that is available to all test methods in the class.'
  },
  {
    id: 'fc85', chapter: 'chapter4', topic: 'PD1-501',
    front: 'Which class contains reusable code for test data creation?',
    back: 'Public test utility class, also known as Test Data Factory - Contains reusable methods for creating test data.'
  },
  {
    id: 'fc86', chapter: 'chapter4', topic: 'PD1-501',
    front: 'What populates test data without code to create test records?',
    back: 'Test.loadData method with a static resource for the CSV file containing test records.'
  },
  {
    id: 'fc87', chapter: 'chapter4', topic: 'PD1-501',
    front: 'What percentage of Apex code must be covered by unit tests before deployment?',
    back: 'At least 75% cumulative code coverage across all Apex classes and triggers.'
  },
  {
    id: 'fc88', chapter: 'chapter4', topic: 'PD1-501',
    front: 'Which tests are run by default for deployment to production?',
    back: 'All local tests - Tests from the org and all installed packages are run by default.'
  },
  {
    id: 'fc89', chapter: 'chapter4', topic: 'PD1-501',
    front: 'Which method verifies whether a test achieves expected results?',
    back: 'System.assert() - Verifies a condition is true. Also System.assertEquals() and System.assertNotEquals().'
  },
  {
    id: 'fc90', chapter: 'chapter4', topic: 'PD1-501',
    front: 'Which static methods assign a new set of governor limits?',
    back: 'Test.startTest() and Test.stopTest() - Reset governor limits and isolate test logic.'
  },
  {
    id: 'fc91', chapter: 'chapter4', topic: 'PD1-501',
    front: 'Which page allows unit class testing in the Salesforce UI?',
    back: 'Apex Test Execution page in Setup - Allows running and monitoring test execution.'
  },
  {
    id: 'fc92', chapter: 'chapter4', topic: 'PD1-501',
    front: 'What creates or deletes tests that can be run together?',
    back: 'Suite Manager in Developer Console - Creates and manages test suites.'
  },
  {
    id: 'fc93', chapter: 'chapter4', topic: 'PD1-501',
    front: 'Which code is not stored in metadata but can be compiled and executed?',
    back: 'Execute Anonymous Block - Code executed in Developer Console or via API, not stored as metadata.'
  },
  {
    id: 'fc94', chapter: 'chapter4', topic: 'PD1-501',
    front: 'What does NOT affect actual data after successful code execution?',
    back: 'Unit Tests - Test data changes are rolled back after execution, not affecting actual data.'
  },
  {
    id: 'fc95', chapter: 'chapter4', topic: 'PD1-501',
    front: 'Which default sharing mode is used for anonymous block execution?',
    back: 'User mode with sharing - Execute Anonymous respects the current user\'s sharing rules.'
  },
  // Chapter 4.2
  {
    id: 'fc96', chapter: 'chapter4', topic: 'PD1-509',
    front: 'What are unmanaged packages typically used for?',
    back: 'Distributing free software, templates, and open source components - They cannot be upgraded.'
  },
  {
    id: 'fc97', chapter: 'chapter4', topic: 'PD1-509',
    front: 'What is the difference between managed and unmanaged packages?',
    back: 'Managed: Protected, upgradeable, sold on AppExchange.\nUnmanaged: Not protected, cannot be upgraded, used for free distribution.'
  },
  {
    id: 'fc98', chapter: 'chapter4', topic: 'PD1-509',
    front: 'What can a change set be used for?',
    back: 'Moving metadata between related orgs (sandbox to production). Cannot be used for moving data.'
  },
  {
    id: 'fc99', chapter: 'chapter4', topic: 'PD1-509',
    front: 'What is required to use change sets between 2 orgs?',
    back: 'A deployment connection between the orgs, and each org must explicitly authorize the other.'
  },
  {
    id: 'fc100', chapter: 'chapter4', topic: 'PD1-509',
    front: 'What are some restrictions of change sets?',
    back: '75% test coverage required, not all metadata supported, cannot specify deploy order, cannot rename/delete components.'
  },
  {
    id: 'fc101', chapter: 'chapter4', topic: 'PD1-509',
    front: 'What option distributes metadata to multiple unrelated orgs?',
    back: 'Unmanaged packages can distribute metadata to unrelated orgs.'
  },
  {
    id: 'fc102', chapter: 'chapter4', topic: 'PD1-509',
    front: 'What moves metadata in a scripted manner to multiple environments?',
    back: 'Force.com Migration Tool (ANT) - Script deployments to multiple environments.'
  },
  {
    id: 'fc103', chapter: 'chapter4', topic: 'PD1-502',
    front: 'What are the different log levels available in Apex?',
    back: 'NONE, ERROR, WARN, INFO, DEBUG, FINE, FINER, FINEST - From least to most verbose.'
  },
  {
    id: 'fc104', chapter: 'chapter4', topic: 'PD1-509',
    front: 'What are the options for moving metadata between environments?',
    back: 'Change Sets, Force.com Migration Tool, VS Code, Workbench, Unmanaged Packages.'
  },
  {
    id: 'fc105', chapter: 'chapter4', topic: 'PD1-502',
    front: 'What records database operations, system processes, and errors during unit tests?',
    back: 'Debug Logs - Capture execution details for troubleshooting.'
  },
  {
    id: 'fc106', chapter: 'chapter4', topic: 'PD1-502',
    front: 'Where can debug logs be viewed, downloaded, and deleted?',
    back: 'Developer Console and Setup (Debug Logs panel).'
  },
  {
    id: 'fc107', chapter: 'chapter4', topic: 'PD1-502',
    front: 'Which suite queries, updates, deletes, and inserts data via Force.com APIs?',
    back: 'Workbench - Web-based tool for Salesforce data and metadata operations.'
  },
  {
    id: 'fc108', chapter: 'chapter4', topic: 'PD1-502',
    front: 'Which feature provides a Query Editor for SOQL and SOSL?',
    back: 'Developer Console - Includes Query Editor for executing SOQL and SOSL queries.'
  },
  {
    id: 'fc109', chapter: 'chapter4', topic: 'PD1-505',
    front: 'Which environment migrates and combines changes from different dev environments?',
    back: 'Integration environment - Used for combining and testing changes from multiple developers.'
  },
  {
    id: 'fc110', chapter: 'chapter4', topic: 'PD1-505',
    front: 'Which environment is used for test deployment before production?',
    back: 'Staging environment - Used for final testing before deploying to production.'
  },
  {
    id: 'fc111', chapter: 'chapter4', topic: 'PD1-505',
    front: 'Which type of tests are conducted in a UAT environment?',
    back: 'User acceptance tests - Final validation by end users before production deployment.'
  },
  {
    id: 'fc112', chapter: 'chapter4', topic: 'PD1-502',
    front: 'How many checkpoints can be set in Apex code at a time?',
    back: 'Five checkpoints maximum in Apex code.'
  },
  {
    id: 'fc113', chapter: 'chapter4', topic: 'PD1-502',
    front: 'What investigates objects in memory at a checkpoint?',
    back: 'Checkpoint Inspector - Shows objects in memory and their references at a specific checkpoint.'
  },
  {
    id: 'fc114', chapter: 'chapter4', topic: 'PD1-509',
    front: 'Which file must be created to delete metadata components?',
    back: 'destructiveChanges.xml - Specifies metadata components to be deleted during deployment.'
  },
  {
    id: 'fc115', chapter: 'chapter4', topic: 'PD1-505',
    front: 'Which API provides fine-grained access to org metadata?',
    back: 'Tooling API - Retrieves smaller pieces of metadata for more granular access.'
  },
  {
    id: 'fc116', chapter: 'chapter4', topic: 'PD1-505',
    front: 'Which tools access Metadata API functionality?',
    back: 'Visual Studio Code and Ant Migration Tool.'
  },
  {
    id: 'fc117', chapter: 'chapter4', topic: 'PD1-505',
    front: 'What shows Metadata types supported in the latest Metadata API version?',
    back: 'Metadata Coverage Report - Shows which metadata types are supported.'
  },
  {
    id: 'fc118', chapter: 'chapter4', topic: 'PD1-502',
    front: 'Where can debug mode be enabled for Lightning components?',
    back: 'Debug Mode setting in Setup - Enables detailed error messages for Lightning components.'
  },
  {
    id: 'fc119', chapter: 'chapter4', topic: 'PD1-505',
    front: 'What are the key milestones when using a sandbox in the application lifecycle?',
    back: 'Manage Requirements → Develop in Sandbox → Test Changes → Deploy to Production → Notify Users.'
  },
  {
    id: 'fc120', chapter: 'chapter4', topic: 'PD1-505',
    front: 'What is the difference between Developer and Developer Pro sandbox?',
    back: 'Developer Pro has higher storage limit. Both copy production config (not data). Both refresh once daily.'
  },
  {
    id: 'fc121', chapter: 'chapter4', topic: 'PD1-505',
    front: 'Why use Partial Copy instead of Full Copy sandbox?',
    back: 'Partial Copy is cheaper, refreshes more frequently (5 days), uses templates for selective data (up to 10K records).'
  },
  {
    id: 'fc122', chapter: 'chapter4', topic: 'PD1-505',
    front: 'What is a Full Copy sandbox usually used for?',
    back: 'When identical-to-production environment is needed for performance, load, regression, or UAT testing.'
  },
  {
    id: 'fc123', chapter: 'chapter4', topic: 'PD1-505',
    front: 'When creating a new sandbox, how can you copy from an existing sandbox?',
    back: 'Clone the existing sandbox - Creates a copy of the source sandbox.'
  },
  {
    id: 'fc124', chapter: 'chapter4', topic: 'PD1-505',
    front: 'What happens to email addresses when a new sandbox is created?',
    back: 'Salesforce appends .invalid to email addresses (e.g., name@email.com becomes name@email.com.invalid).'
  },
  {
    id: 'fc125', chapter: 'chapter4', topic: 'PD1-505',
    front: 'Which IDE creates/edits Apex, Visualforce, Lightning components, and migrates metadata?',
    back: 'Visual Studio Code with Salesforce Extension Pack.'
  },
  {
    id: 'fc126', chapter: 'chapter4', topic: 'PD1-505',
    front: 'What must be installed in VS Code to create Apex, Visualforce, Aura, and LWC?',
    back: 'Salesforce Extension Pack - Provides all necessary tools for Salesforce development.'
  },
  {
    id: 'fc127', chapter: 'chapter4', topic: 'PD1-505',
    front: 'What allows running SOQL queries and anonymous Apex in VS Code?',
    back: 'Salesforce CLI - Command-line interface integrated with VS Code.'
  },
  {
    id: 'fc128', chapter: 'chapter4', topic: 'PD1-502',
    front: 'What needs to be set up to generate debug logs for a specific user action?',
    back: 'User trace flag - Configures debug logging for a specific user.'
  },
  {
    id: 'fc129', chapter: 'chapter4', topic: 'PD1-502',
    front: 'What does each debug log contain?',
    back: 'Header, execution units, code units, log lines, and other log data.'
  },
  {
    id: 'fc130', chapter: 'chapter4', topic: 'PD1-502',
    front: 'Which Log Inspector panel shows information top-down from initiating calls?',
    back: 'Stack Tree - Shows call hierarchy from top-level initiating calls downward.'
  },
  {
    id: 'fc131', chapter: 'chapter4', topic: 'PD1-502',
    front: 'What is the significance of myVariable_current and myVariable_old in process troubleshooting?',
    back: 'myVariable_current = field value when process executed\nmyVariable_old = most recent previous value'
  },
  {
    id: 'fc132', chapter: 'chapter4', topic: 'PD1-505',
    front: 'In Salesforce DX, what is the source of truth?',
    back: 'Version Control System - In SFDX, the VCS is the authoritative source for code and metadata.'
  },
  {
    id: 'fc133', chapter: 'chapter4', topic: 'PD1-502',
    front: 'What makes code changes effective immediately without installing software?',
    back: 'Developer Console - Allows direct code editing and execution in the org.'
  },
  {
    id: 'fc134', chapter: 'chapter4', topic: 'PD1-502',
    front: 'What external web-based platform queries, inserts, updates, and deletes Salesforce data?',
    back: 'Workbench - External web-based tool for Salesforce data and metadata operations.'
  }
];

export const getFlashcardsByChapter = (chapterId) => {
  return flashcards.filter(f => f.chapter === chapterId);
};

export const getAllChapters = () => {
  return [...new Set(flashcards.map(f => f.chapter))];
};
