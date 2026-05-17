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
          'Multi-tenant architecture means shared resources among customers',
          'MVC: Model (Objects/Data) → View (UI/Lightning/VF) → Controller (Apex)',
          'Lightning Component Framework: Aura and LWC are the two models',
          'LWC uses standard web technologies (ES6+, Custom Elements, Shadow DOM)',
          'Aura uses proprietary framework with component markup',
          'Both use "c:" namespace for custom components'
        ],
        examTips: [
          'Remember the MVC mapping: Objects = Model, UI = View, Apex = Controller',
          'Know the difference between Aura and LWC',
          'Understand that multi-tenant means shared infrastructure with data isolation'
        ]
      },
      {
        id: 'pd1-602',
        code: 'PD1-602',
        title: 'Declarative vs Programmatic',
        description: 'Given a scenario, identify common use cases and best practices for declarative versus programmatic customizations',
        weight: '10%',
        keyPoints: [
          'Declarative: Flows, Process Builder, Workflow Rules, Approval Processes',
          'Programmatic: Apex classes, triggers, Visualforce, Lightning components',
          'Use declarative when possible; code when complex logic needed',
          'Formula fields and roll-up summaries are declarative',
          'Governor limits apply to programmatic customizations',
          'Flow can handle complex logic including loops and decisions'
        ],
        examTips: [
          'Declarative tools should be first choice when they meet requirements',
          'Apex needed for: complex logic, integrations, complex error handling',
          'Know when formula fields and roll-up summaries are appropriate'
        ]
      },
      {
        id: 'pd1-603',
        code: 'PD1-603',
        title: 'Data Model & Relationships',
        description: 'Given a scenario, determine, create, and access the appropriate data model including objects, fields, relationships, and external IDs',
        weight: '15%',
        keyPoints: [
          'Lookup: Optional relationship, no cascade delete',
          'Master-Detail: Required relationship, cascade delete, roll-up summaries',
          'Many-to-many: Junction object with two master-detail relationships',
          'External IDs: Used for data integration and upsert operations',
          'Changing data type of field referenced in Apex is blocked',
          'API names cannot be changed once created; labels can'
        ],
        examTips: [
          'Know the difference between lookup and master-detail thoroughly',
          'Understand junction objects for many-to-many relationships',
          'Remember: labels can change, API names cannot'
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
          'Export options: Data Loader, reports, API'
        ],
        examTips: [
          'Data Import Wizard = small volumes (≤50K), Data Loader = large volumes',
          'Know the differences and when to use each tool',
          'Understand the impact on relationships during import'
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
          'Order of execution matters when combining tools'
        ],
        examTips: [
          'Flow is the most versatile declarative tool',
          'Know what each automation tool can and cannot do',
          'Understand the order of execution'
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
          'static: Class-level, shared across all instances',
          'final: Cannot be reassigned after initialization',
          'Constants: static final (or final static)',
          'Interfaces: Define method signatures without implementation',
          'Classes can implement multiple interfaces but extend one class'
        ],
        examTips: [
          'global = entire org, public = namespace, private = class only',
          'static final for constants - both keywords matter',
          'Know interface vs abstract class differences'
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
          'switch (when): Pattern matching (Apex v45+)'
        ],
        examTips: [
          'do-while always executes at least once',
          'break exits the loop; continue skips to next iteration',
          'Know when to use each loop type'
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
          'SOQL returns structured records; SOSL returns search results'
        ],
        examTips: [
          'SOQL for specific object queries; SOSL for text search across objects',
          'Always use bind variables for dynamic SOQL',
          'Database methods allow partial success (allOrNone=false)'
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
          'Use proper naming conventions'
        ],
        examTips: [
          'Bulkification is critical - always think about collections',
          'One trigger per object using handler pattern',
          'Never put SOQL or DML inside for loops'
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
          'Exceeding limits throws unhandled exception, rolls back DML'
        ],
        examTips: [
          'Memorize key limits: 100 SOQL, 150 DML, 50K records, 10s CPU',
          'Exceeding limits = exception + rollback',
          'Governor limits ensure fair resource sharing in multi-tenant'
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
          'before triggers can modify Trigger.new values'
        ],
        examTips: [
          'Know the order: Before triggers FIRST, then validation rules',
          'Static Boolean flag prevents recursion',
          'before triggers fire before validation rules'
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
          'Unhandled exceptions roll back the transaction'
        ],
        examTips: [
          'Catch specific exceptions first, then generic',
          'Custom exceptions extend the Exception class',
          'finally always executes - useful for cleanup'
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
          'Use declarative first, extend with code when needed'
        ],
        examTips: [
          '@InvocableMethod makes Apex callable from Flow',
          'Declarative first, then code for complex requirements',
          'Understand how Flow and triggers interact'
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
          '<apex:repeat>: Custom iteration markup',
          'Standard controllers: Automatic CRUD/FLS',
          'Custom controllers: Full control over logic'
        ],
        examTips: [
          'outputField for display, inputField for editing',
          'pageBlockTable has Salesforce styling; dataTable is plain HTML',
          'Standard controllers respect FLS; custom controllers must enforce it manually'
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
          'Both use @AuraEnabled Apex methods'
        ],
        examTips: [
          'LWC is the modern standard; Aura is legacy',
          'Components communicate via events (Aura) or properties+events (LWC)',
          'Both frameworks can coexist in the same page'
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
          'XSS prevention: Use outputText with escape attribute',
          'CRUD/FLS enforcement: isAccessible(), isCreateable(), etc.',
          'With Sharing: Enforces sharing rules',
          'Without Sharing: Bypasses sharing rules (use cautiously)',
          'Inherited Sharing: Uses caller\'s sharing context'
        ],
        examTips: [
          'Bind variables are the #1 defense against SOQL injection',
          'With Sharing enforces sharing; Without Sharing bypasses it',
          'Always check CRUD/FLS in custom controllers'
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
          'Error handling: AuraHandledException for user-friendly errors'
        ],
        examTips: [
          'cacheable=true for wire service; omit for DML operations',
          'AuraHandledException for proper error messages in UI',
          'LDS can replace simple CRUD Apex methods'
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
          'Event detail: Carries the payload data'
        ],
        examTips: [
          'CustomEvent for child-to-parent communication',
          'LMS for sibling or cross-DOM communication',
          'Use composed: true for shadow DOM traversal'
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
          '@wire decorator for reactive data fetching'
        ],
        examTips: [
          '@AuraEnabled is the bridge between Apex and Lightning',
          'Extensions add to standard controllers; custom controllers replace them',
          'LDS handles basic CRUD; Apex needed for complex logic'
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
          'Test data factories: Reusable test data creation'
        ],
        examTips: [
          '75% minimum coverage, but aim for 100% with meaningful tests',
          'Test.startTest() resets limits - critical for async testing',
          '@testSetup runs once per test method - data is rolled back after each'
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
          'Log levels: NONE, ERROR, WARN, INFO, DEBUG, FINE, FINER, FINEST'
        ],
        examTips: [
          'Developer Console is the primary debugging tool',
          'Debug logs have a 20MB maximum size',
          'System.debug() messages appear in debug logs'
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
          'Source format: Version-control friendly metadata format'
        ],
        examTips: [
          'Scratch orgs are defined by config files, not org settings',
          'SFDX enables CI/CD workflows',
          'CLI is the backbone of Salesforce DX'
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
          'Test requirements: 75% coverage for Apex deployment'
        ],
        examTips: [
          'Change Sets for simple deployments between connected orgs',
          'Metadata API/CLI for automated deployments',
          'Understand deployment dependencies and order'
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
