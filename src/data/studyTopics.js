export const chapters = [
  {
    id: 'chapter1',
    name: 'Salesforce Fundamentals',
    description: 'Multi-tenant architecture, MVC, data model, and declarative vs programmatic customizations',
    icon: '🏛️',
    color: '#0176D3',
    topics: [
      {
        id: 'pd1-601',
        code: 'PD1-601',
        title: 'Multi-Tenant Architecture & MVC',
        description: 'Understand multi-tenant concepts and design frameworks, such as MVC architecture and Lightning Component Framework',
        weight: '10%',
        keyPoints: [
          'Multi-tenant architecture means shared resources among multiple customers (tenants)',
          'Salesforce uses a multi-tenant architecture to efficiently serve many organizations from shared infrastructure',
          'Governor limits are enforced to ensure fair resource sharing in multi-tenant environment',
          'MVC: Model (Objects/Data) → View (UI/Lightning/VF) → Controller (Apex)',
          'Objects represent the Model layer, defining data structure and business logic',
          'Visualforce pages and Lightning components represent the View layer',
          'Apex controllers represent the Controller layer',
          'Lightning Component Framework: Aura and LWC are the two models',
          'LWC uses standard web technologies (ES6+, Custom Elements, Shadow DOM)',
          'Aura uses proprietary framework with component markup (.cmp)',
          'Both use "c:" namespace for custom components',
          'Lightning App Builder is used to add components to pages',
          'Components can be used in Lightning Experience, Mobile, and Communities'
        ],
        examTips: [
          'Remember the MVC mapping: Objects = Model, UI = View, Apex = Controller',
          'Know the difference between Aura and LWC - LWC is the modern standard',
          'Understand that multi-tenant means shared infrastructure with data isolation',
          'Governor limits exist because of multi-tenant architecture',
          'Lightning App Builder is the tool for adding components to pages'
        ]
      },
      {
        id: 'pd1-602',
        code: 'PD1-602',
        title: 'Declarative vs Programmatic',
        description: 'Given a scenario, identify common use cases and best practices for declarative versus programmatic customizations',
        weight: '10%',
        keyPoints: [
          'Declarative tools: Flows, Process Builder, Workflow Rules, Approval Processes',
          'Programmatic tools: Apex classes, triggers, Visualforce, Lightning components',
          'Use declarative when possible; code only when complex logic needed',
          'Formula fields and roll-up summaries are declarative',
          'Governor limits apply to programmatic customizations',
          'Flow can handle complex logic including loops and decisions',
          '@InvocableMethod makes Apex callable from Flow and Process Builder',
          'When a required field value is not specified, Apex code throws an exception',
          'Flow can display custom user interfaces (Screen Flows)',
          'Workflow Rules can send outbound messages',
          'Process Builder can create records and invoke processes',
          'Approval Processes handle multi-step approval workflows'
        ],
        examTips: [
          'Declarative tools should be first choice when they meet requirements',
          'Apex needed for: complex logic, integrations, complex error handling',
          'Know when formula fields and roll-up summaries are appropriate',
          '@InvocableMethod bridges declarative and programmatic',
          'Understand the capabilities and limitations of each automation tool'
        ]
      },
      {
        id: 'pd1-603',
        code: 'PD1-603',
        title: 'Data Model & Relationships',
        description: 'Given a scenario, determine, create, and access the appropriate data model including objects, fields, relationships, and external IDs',
        weight: '15%',
        keyPoints: [
          'Lookup: Optional relationship, no cascade delete, child retains ownership',
          'Master-Detail: Required relationship, cascade delete, roll-up summaries, child inherits ownership',
          'Many-to-many: Junction object with two master-detail relationships',
          'External IDs: Used for data integration and upsert operations',
          'Changing data type of field referenced in Apex is blocked',
          'API names cannot be changed once created; labels can',
          'Roll-up summary fields: Count, Sum, Max, Min (only on master-detail)',
          'Formula fields: Read-only, calculated based on expressions',
          'CURRENCYRATE() function for currency conversion',
          'ADDMONTHS() function for date calculations',
          'isCreateable() method checks if user can create records',
          'getSObjectType() method returns the SObject token',
          'describeSObjects() method retrieves metadata information',
          'Relationship types can be converted with conditions',
          'Lookup field values are optional by default'
        ],
        examTips: [
          'Know the difference between lookup and master-detail thoroughly',
          'Understand junction objects for many-to-many relationships',
          'Remember: labels can change, API names cannot',
          'Roll-up summary fields only work on master-detail relationships',
          'Know the available functions: CURRENCYRATE, ADDMONTHS, etc.',
          'Understand isCreateable() and other CRUD methods'
        ]
      },
      {
        id: 'pd1-604',
        code: 'PD1-604',
        title: 'Data Import & Export',
        description: 'Given a scenario, identify the options and considerations when importing and exporting data',
        weight: '5%',
        keyPoints: [
          'Data Import Wizard: Up to 50,000 records, point-and-click interface',
          'Data Loader: Up to 5 million records, command-line capable',
          'Bulk API: For very large data volumes',
          'Import considerations: data mapping, duplicate handling, relationships',
          'Export options: Data Loader, reports, API, Workbench',
          'Data Import Wizard limitations: Cannot save mappings, cannot export',
          'Data Import Wizard does not support all standard objects',
          'Data Loader supports command-line operations',
          'ETL tools can also be used for data operations',
          'Consider data relationships when importing',
          'External IDs enable upsert operations',
          'Duplicate handling rules can be configured'
        ],
        examTips: [
          'Data Import Wizard = small volumes (≤50K), Data Loader = large volumes',
          'Know the differences and when to use each tool',
          'Understand the impact on relationships during import',
          'Data Import Wizard has significant limitations',
          'External IDs are important for data integration'
        ]
      }
    ]
  },
  {
    id: 'chapter2',
    name: 'Apex Programming',
    description: 'Variables, control flow, SOQL, DML, triggers, best practices, governor limits, and exception handling',
    icon: '⚡',
    color: '#FF6B35',
    topics: [
      {
        id: 'pd1-301',
        code: 'PD1-301',
        title: 'Declarative Process Automation',
        description: 'Identify the capabilities of the declarative process automation features',
        weight: '10%',
        keyPoints: [
          'Workflow Rules: Field updates, email alerts, outbound messages, tasks',
          'Process Builder: More powerful than workflows, can create records',
          'Flow: Most powerful, can have UI (Screen Flows), complex logic',
          'Approval Processes: Multi-step approval workflows',
          'Each tool has specific use cases and limitations',
          'Order of execution matters when combining tools',
          'Flow can display custom user interfaces',
          'Process Builder can invoke Apex with @InvocableMethod',
          'Workflow Rules can send outbound messages',
          'Approval Processes support multiple approval steps'
        ],
        examTips: [
          'Flow is the most versatile declarative tool',
          'Know what each automation tool can and cannot do',
          'Understand the order of execution',
          'Screen Flows can display custom UI',
          '@InvocableMethod bridges Apex and Flow'
        ]
      },
      {
        id: 'pd1-302',
        code: 'PD1-302',
        title: 'Variables, Constants & Methods',
        description: 'Declare variables, constants, methods, and use modifiers and Apex interfaces',
        weight: '10%',
        keyPoints: [
          'Access modifiers: private, public, protected, global',
          'private: Only accessible within the defining class',
          'public: Accessible within the current namespace',
          'protected: Accessible in subclasses',
          'global: Accessible by ALL classes in the organization',
          'static: Class-level, shared across all instances',
          'final: Cannot be reassigned after initialization',
          'Constants: static final (or final static)',
          'Interfaces: Define method signatures without implementation',
          'Classes can implement multiple interfaces but extend one class',
          'Use global sparingly - cannot be removed in managed packages'
        ],
        examTips: [
          'global = entire org, public = namespace, private = class only',
          'static final for constants - both keywords matter',
          'Know interface vs abstract class differences',
          'Understand when to use each access modifier',
          'global has implications for managed packages'
        ]
      },
      {
        id: 'pd1-303',
        code: 'PD1-303',
        title: 'Control Flow Statements',
        description: 'Given a scenario, use and apply Apex control flow statements',
        weight: '10%',
        keyPoints: [
          'if-else: Conditional execution',
          'for: Iterate with counter or collection',
          'while: Loop with condition checked before body',
          'do-while: Loop with condition checked after body (executes at least once)',
          'break: Exit the loop immediately',
          'continue: Skip to next iteration',
          'switch (when): Pattern matching (Apex v45+)',
          'Nested loops are supported',
          'for-each loop: Iterate over collections',
          'Loop control affects program flow'
        ],
        examTips: [
          'do-while always executes at least once',
          'break exits the loop; continue skips to next iteration',
          'Know when to use each loop type',
          'switch statement uses when clauses',
          'Understand loop control flow'
        ]
      },
      {
        id: 'pd1-305',
        code: 'PD1-305',
        title: 'SOQL, SOSL & DML',
        description: 'Given a scenario, write SOSL, SOQL, and DML statements in Apex',
        weight: '15%',
        keyPoints: [
          'SOQL: SELECT fields FROM object WHERE condition',
          'SOSL: FIND {search term} IN ALL FIELDS RETURNING object(fields)',
          'DML: insert, update, upsert, delete, undelete',
          'Database methods: More options (allOrNone parameter)',
          'Bind variables prevent SOQL injection',
          'SOQL returns structured records; SOSL returns search results',
          'ORDER BY clause sorts query results',
          'GROUP BY clause groups results for aggregation',
          'LIMIT clause restricts number of records returned',
          'UPSERT inserts new or updates existing records',
          'Database.insert(records, false) allows partial success',
          'SOQL can query related objects using relationship queries',
          'SOSL searches across multiple objects',
          'Dynamic SOQL uses Database.query()'
        ],
        examTips: [
          'SOQL for specific object queries; SOSL for text search across objects',
          'Always use bind variables for dynamic SOQL',
          'Database methods allow partial success (allOrNone=false)',
          'Know ORDER BY, GROUP BY, LIMIT clauses',
          'UPSERT uses external ID or record ID for matching',
          'Understand the difference between DML statements and Database methods'
        ]
      },
      {
        id: 'pd1-306',
        code: 'PD1-306',
        title: 'Apex Classes & Triggers Best Practices',
        description: 'Given a scenario, follow best practices to write Apex classes and triggers',
        weight: '15%',
        keyPoints: [
          'Bulkification: Process collections, not individual records',
          'One trigger per object (trigger handler pattern)',
          'Avoid SOQL/DML in loops (governor limits)',
          'Use Trigger.new for before triggers (modifiable)',
          'Separate business logic from triggers into handler classes',
          'Use proper naming conventions',
          'Trigger handler pattern improves maintainability',
          'Maps for efficient lookups',
          'Collect IDs before querying',
          'Process records as collections',
          'Avoid hardcoding IDs',
          'Use constants for magic numbers'
        ],
        examTips: [
          'Bulkification is critical - always think about collections',
          'One trigger per object using handler pattern',
          'Never put SOQL or DML inside for loops',
          'Use maps for efficient data lookups',
          'Trigger handler pattern is the recommended approach',
          'Understand the trigger context variables'
        ]
      },
      {
        id: 'pd1-308',
        code: 'PD1-308',
        title: 'Governor Limits',
        description: 'Given a scenario, identify the implications of governor limits on Apex transactions',
        weight: '10%',
        keyPoints: [
          'SOQL queries: 100 per transaction',
          'DML statements: 150 per transaction',
          'Records retrieved by SOQL: 50,000',
          'Total records processed by DML: 10,000',
          'CPU time: 10,000ms (synchronous), 60,000ms (asynchronous)',
          'Heap size: 6MB (synchronous), 12MB (asynchronous)',
          'Exceeding limits throws unhandled exception, rolls back DML',
          'Governor limits ensure fair resource sharing',
          'Limits apply per transaction',
          'Asynchronous limits are higher than synchronous'
        ],
        examTips: [
          'Memorize key limits: 100 SOQL, 150 DML, 50K records, 10s CPU',
          'Exceeding limits = exception + rollback',
          'Governor limits ensure fair resource sharing in multi-tenant',
          'Asynchronous limits are higher than synchronous',
          'Understand the consequences of exceeding limits'
        ]
      },
      {
        id: 'pd1-309',
        code: 'PD1-309',
        title: 'Save Order of Execution',
        description: 'Describe the relationship between Apex transactions, the save order of execution, and the potential for recursion',
        weight: '5%',
        keyPoints: [
          'Order: Before triggers → Validation rules → After triggers → Assignment rules → Auto-response → Workflow → Processes → Flows → Escalation rules → Roll-up summaries → Entitlement rules → Criteria-based sharing',
          'Recursion: Use static Boolean flag to prevent re-entry',
          'Understanding order is critical for avoiding unexpected behavior',
          'before triggers can modify Trigger.new values',
          'Validation rules fire after before triggers',
          'Static variables persist within a transaction'
        ],
        examTips: [
          'Know the order: Before triggers FIRST, then validation rules',
          'Static Boolean flag prevents recursion',
          'before triggers fire before validation rules',
          'Understand how each step affects the transaction',
          'Recursion can occur if not properly handled'
        ]
      },
      {
        id: 'pd1-310',
        code: 'PD1-310',
        title: 'Exception Handling',
        description: 'Implement exception handling in Apex, including custom exceptions as needed',
        weight: '5%',
        keyPoints: [
          'try-catch-finally: Standard exception handling',
          'Specific exceptions: DmlException, QueryException, etc.',
          'Custom exceptions: Extend Exception class',
          'Catch specific before generic Exception',
          'finally block always executes',
          'Unhandled exceptions roll back the transaction',
          'QueryException thrown when single query returns no results',
          'DmlException thrown for DML operation failures',
          'Custom exceptions can have custom messages',
          'Exception handling improves code robustness'
        ],
        examTips: [
          'Catch specific exceptions first, then generic',
          'Custom exceptions extend the Exception class',
          'finally always executes - useful for cleanup',
          'QueryException for single-record queries with no results',
          'Understand when to use custom exceptions'
        ]
      },
      {
        id: 'pd1-312',
        code: 'PD1-312',
        title: 'Apex vs Declarative Integration',
        description: 'Given a scenario, use declarative functionality and Apex together to automate business logic',
        weight: '5%',
        keyPoints: [
          'Combine Flow with Apex actions for complex scenarios',
          'Invocable methods: Apex methods callable from Flow',
          'Flow can call Apex for complex logic or external integrations',
          'Consider order of execution when combining tools',
          'Use declarative first, extend with code when needed',
          '@InvocableMethod annotation bridges Flow and Apex',
          '@InvocableVariable defines input/output for invocable methods',
          'Flow can pass data to Apex and receive results',
          'Apex provides error handling capabilities',
          'Declarative tools handle simple scenarios well'
        ],
        examTips: [
          '@InvocableMethod makes Apex callable from Flow',
          'Declarative first, then code for complex requirements',
          'Understand how Flow and triggers interact',
          '@InvocableVariable defines data for invocable methods',
          'Know when to use Apex vs declarative tools'
        ]
      }
    ]
  },
  {
    id: 'chapter3',
    name: 'User Interface',
    description: 'Visualforce, Lightning Component Framework, LWC events, and UI security',
    icon: '🖥️',
    color: '#1B96FF',
    topics: [
      {
        id: 'pd1-401',
        code: 'PD1-401',
        title: 'Visualforce Pages & Controllers',
        description: 'Given a scenario, display content or modify Salesforce data using a Visualforce page and the appropriate controllers',
        weight: '10%',
        keyPoints: [
          '<apex:outputField>: Display individual field values',
          '<apex:inputField>: Editable field input',
          '<apex:detail>: Complete record detail page',
          '<apex:pageBlockTable>: Styled table with column headers',
          '<apex:dataTable>: Standard HTML table',
          '<apex:repeat>: Custom iteration markup',
          'Standard controllers: Automatic CRUD/FLS',
          'Custom controllers: Full control over logic',
          'Controller extensions: Add to standard controllers',
          'standardController attribute associates object',
          'extensions attribute adds custom logic',
          'Visualforce can render as PDF',
          'CSS can be added with <apex:stylesheet>',
          '<apex:iframe> embeds external websites',
          'Action methods respond to user input'
        ],
        examTips: [
          'outputField for display, inputField for editing',
          'pageBlockTable has Salesforce styling; dataTable is plain HTML',
          'Standard controllers respect FLS; custom controllers must enforce it manually',
          'Know when to use standard vs custom controllers',
          'Visualforce can generate PDF documents',
          'Understand controller extensions'
        ]
      },
      {
        id: 'pd1-405',
        code: 'PD1-405',
        title: 'Lightning Component Framework',
        description: 'Describe the Lightning Component framework, its benefits, and the types of content that can be contained in a component',
        weight: '10%',
        keyPoints: [
          'Component-based architecture for reusable UI',
          'Event-driven communication between components',
          'Aura: Proprietary framework, .cmp markup',
          'LWC: Standard web technologies (ES6+, Shadow DOM)',
          'Works in Lightning Experience, Mobile, Communities',
          'Both use @AuraEnabled Apex methods',
          'Component resource contains markup definition',
          'Controller resource handles events',
          'Helper resource contains reusable functions',
          'Style resource contains CSS',
          'Design resource exposes attributes to App Builder',
          '<ltng:require> loads JavaScript libraries',
          'Standard, Custom, and AppExchange components',
          'Responsive design for cross-device compatibility',
          '<aura:registerEvent> registers events',
          '<aura:handler> handles events'
        ],
        examTips: [
          'LWC is the modern standard; Aura is legacy',
          'Components communicate via events (Aura) or properties+events (LWC)',
          'Both frameworks can coexist in the same page',
          'Know the component bundle resources',
          'Understand event types: component vs application',
          'Lightning App Builder adds components to pages'
        ]
      },
      {
        id: 'pd1-406',
        code: 'PD1-406',
        title: 'UI & Data Security',
        description: 'Given a scenario, prevent user interface and data access security vulnerabilities',
        weight: '10%',
        keyPoints: [
          'SOQL injection: Use bind variables, not string concatenation',
          'XSS prevention: Use appropriate encoding functions',
          'JSENCODE() for JavaScript context',
          'HTMLENCODE() for HTML context',
          'URLENCODE() for URL context',
          'CRUD/FLS enforcement: isAccessible(), isCreateable(), etc.',
          'With Sharing: Enforces sharing rules',
          'Without Sharing: Bypasses sharing rules (use cautiously)',
          'Inherited Sharing: Uses caller\'s sharing context',
          'CSRF protection with anti-CSRF tokens',
          'Component visibility settings control display'
        ],
        examTips: [
          'Bind variables are the #1 defense against SOQL injection',
          'With Sharing enforces sharing; Without Sharing bypasses it',
          'Always check CRUD/FLS in custom controllers',
          'Use appropriate encoding for different contexts',
          'CSRF protection is automatic in most cases',
          'Understand sharing modes and their implications'
        ]
      },
      {
        id: 'pd1-407',
        code: 'PD1-407',
        title: 'Lightning Data & Apex Integration',
        description: 'Describe how to implement Apex to work with Lightning components',
        weight: '10%',
        keyPoints: [
          '@AuraEnabled annotation makes methods available to LWC/Aura',
          '@AuraEnabled(cacheable=true) for read-only data',
          'Imperative calls: Direct method invocation from JS',
          'Wire service: Reactive data binding',
          'Lightning Data Service: CRUD without Apex',
          'Error handling: AuraHandledException for user-friendly errors',
          'Cacheable methods should not perform DML',
          'Wire service automatically refreshes when data changes',
          'Imperative calls provide more control',
          'LDS handles record caching and sharing'
        ],
        examTips: [
          'cacheable=true for wire service; omit for DML operations',
          'AuraHandledException for proper error messages in UI',
          'LDS can replace simple CRUD Apex methods',
          'Know when to use wire vs imperative calls',
          'Understand caching implications',
          'LDS provides built-in data synchronization'
        ]
      },
      {
        id: 'pd1-408',
        code: 'PD1-408',
        title: 'LWC Events',
        description: 'Describe the use cases and best practices for Lightning Web Component events',
        weight: '5%',
        keyPoints: [
          'CustomEvent: Standard web events for child-to-parent',
          'Event bubbling: Events propagate up the DOM',
          'dispatchEvent(): Sends the event',
          'Lightning Message Service: Cross-DOM communication',
          'Publish-subscribe pattern for unrelated components',
          'Event detail: Carries the payload data',
          'Component events handled within hierarchy',
          'Application events handled by any component',
          'Event propagation can be stopped',
          'LMS uses message channels'
        ],
        examTips: [
          'CustomEvent for child-to-parent communication',
          'LMS for sibling or cross-DOM communication',
          'Use composed: true for shadow DOM traversal',
          'Understand event bubbling and propagation',
          'Component events are more efficient within hierarchy',
          'Application events work across hierarchy'
        ]
      },
      {
        id: 'pd1-409',
        code: 'PD1-409',
        title: 'Apex with Page Components',
        description: 'Given a scenario, implement Apex to work with various types of page components, including Lightning Components, and controllers',
        weight: '10%',
        keyPoints: [
          '@AuraEnabled for LWC/Aura methods',
          'Standard controllers: Built-in CRUD operations',
          'Custom controllers: Complete control',
          'Controller extensions: Add functionality to standard controllers',
          'Lightning Data Service: Record UI without Apex',
          '@wire decorator for reactive data fetching',
          'Apex methods can be called from Visualforce',
          'Remote actions for AJAX calls',
          'Apex provides server-side processing',
          'Controller extensions combine standard and custom logic'
        ],
        examTips: [
          '@AuraEnabled is the bridge between Apex and Lightning',
          'Extensions add to standard controllers; custom controllers replace them',
          'LDS handles basic CRUD; Apex needed for complex logic',
          'Know when to use standard vs custom controllers',
          'Understand @wire decorator for reactive data',
          'Controller extensions provide best of both worlds'
        ]
      }
    ]
  },
  {
    id: 'chapter4',
    name: 'Testing, Debugging & Deployment',
    description: 'Test classes, debugging techniques, developer tools, and deployment processes',
    icon: '🔧',
    color: '#032D60',
    topics: [
      {
        id: 'pd1-501',
        code: 'PD1-501',
        title: 'Writing & Executing Tests',
        description: 'Write and execute tests for triggers, controllers, classes, flows, and processes using various sources of test data',
        weight: '15%',
        keyPoints: [
          '@isTest annotation for test classes and methods',
          'Test.startTest()/Test.stopTest(): Reset governor limits',
          'System.assertEquals(): Verify expected results',
          '@testSetup: Create shared test data',
          '75% minimum code coverage for deployment',
          'SeeAllData=true: Access org data (discouraged)',
          'Test data factories: Reusable test data creation',
          'Test.loadData: Load data from static resource',
          'Suite Manager: Create and manage test suites',
          'Execute Anonymous: Run code without storing',
          'Test data is rolled back after each method',
          'All local tests run by default for deployment',
          'System.assert() verifies conditions',
          'Test execution page in Setup',
          'Unit tests don\'t affect actual data'
        ],
        examTips: [
          '75% minimum coverage, but aim for 100% with meaningful tests',
          'Test.startTest() resets limits - critical for async testing',
          '@testSetup runs once per test method - data is rolled back after each',
          'Use test data factories for reusable test data creation',
          'Test.loadData loads data from static resource CSV',
          'Understand when to use SeeAllData (rarely)'
        ]
      },
      {
        id: 'pd1-502',
        code: 'PD1-502',
        title: 'Debugging & Monitoring',
        description: 'Describe how to approach debugging system issues and monitoring flows, processes, and asynchronous and batch jobs',
        weight: '10%',
        keyPoints: [
          'Developer Console: Interactive debugging, logs, query editor',
          'Debug Logs: Capture execution details, configurable levels',
          'Log categories: Database, Workflow, Validation, etc.',
          'Checkpoint debugging: Set breakpoints in Developer Console',
          'System.debug(): Output messages to debug logs',
          'Log levels: NONE, ERROR, WARN, INFO, DEBUG, FINE, FINER, FINEST',
          'Maximum debug log size: 20 MB',
          'User trace flags configure logging for specific users',
          'Checkpoint Inspector examines objects in memory',
          'Maximum 5 checkpoints at a time',
          'Stack Tree panel shows call hierarchy',
          'myVariable_current and myVariable_old in troubleshooting',
          'Workbench: External tool for data/metadata operations',
          'Query Editor for SOQL/SOSL in Developer Console',
          'Debug mode for Lightning components'
        ],
        examTips: [
          'Developer Console is the primary debugging tool',
          'Debug logs have a 20MB maximum size',
          'System.debug() messages appear in debug logs',
          'Know the log levels and when to use each',
          'Checkpoint Inspector helps examine memory',
          'User trace flags enable logging for specific users'
        ]
      },
      {
        id: 'pd1-505',
        code: 'PD1-505',
        title: 'Salesforce Developer Tools',
        description: 'Given a scenario, know how and when to use the Salesforce Developer tools such as Salesforce DX, Salesforce CLI, and Developer Console',
        weight: '10%',
        keyPoints: [
          'Salesforce DX: Source-driven development framework',
          'Salesforce CLI: Command-line interface for SFDX',
          'Scratch orgs: Disposable, configurable dev environments',
          'Developer Console: Browser-based IDE',
          'VS Code with Salesforce Extensions: Full IDE experience',
          'Source format: Version-control friendly metadata format',
          'VCS is the source of truth in SFDX',
          'Sandbox types: Developer, Developer Pro, Partial, Full',
          'Developer Pro has higher storage than Developer',
          'Partial Copy uses templates for selective data',
          'Full Copy is identical to production',
          'Sandbox refresh limits vary by type',
          'Email addresses get .invalid appended in sandboxes',
          'Tooling API for fine-grained metadata access',
          'Metadata Coverage Report shows supported types',
          'ANT Migration Tool for scripted deployments',
          'Salesforce Extension Pack for VS Code'
        ],
        examTips: [
          'Scratch orgs are defined by config files, not org settings',
          'SFDX enables CI/CD workflows',
          'CLI is the backbone of Salesforce DX',
          'Know sandbox types and their differences',
          'VCS is source of truth in SFDX',
          'VS Code with Salesforce Extensions is the recommended IDE'
        ]
      },
      {
        id: 'pd1-509',
        code: 'PD1-509',
        title: 'Deployment Process',
        description: 'Describe the environments, requirements, and process for deploying code and associated configurations',
        weight: '10%',
        keyPoints: [
          'Change Sets: Point-and-click, connected orgs only',
          'Metadata API: Package.xml manifest, ANT Migration Tool',
          'Salesforce CLI: sf project deploy start',
          'Unlocked Packages: Modular, version-controlled deployments',
          'Deployment order: Metadata dependencies matter',
          'Test requirements: 75% coverage for Apex deployment',
          'Change sets require deployment connection',
          'destructiveChanges.xml deletes components',
          'Unmanaged packages for free distribution',
          'Managed packages for AppExchange',
          '75% test coverage required for production deployment',
          'Change sets cannot rename/delete components',
          'Integration environment combines changes',
          'Staging environment for test deployment',
          'UAT environment for user acceptance tests'
        ],
        examTips: [
          'Change Sets for simple deployments between connected orgs',
          'Metadata API/CLI for automated deployments',
          'Understand deployment dependencies and order',
          '75% test coverage is mandatory for production',
          'destructiveChanges.xml removes components',
          'Know the different deployment tools and when to use each'
        ]
      }
    ]
  }
];

export const getTopicById = (topicId) => {
  for (const chapter of chapters) {
    const topic = chapter.topics.find(t => t.id === topicId);
    if (topic) return { ...topic, chapter };
  }
  return null;
};

export const getChapterById = (chapterId) => {
  return chapters.find(c => c.id === chapterId);
};
