export const chapters = [
  {
    id: 'devFundamentals',
    name: 'Developer Fundamentals',
    description: 'Multi-tenant architecture, MVC, data model, and declarative vs programmatic customizations (27%)',
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
        ],
        detailedContent: [
          { type: 'heading', text: 'Multi-Tenant Architecture' },
          { type: 'paragraph', text: 'Salesforce uses a multi-tenant architecture, meaning multiple organizations (tenants) share the same infrastructure, servers, and database. Each tenant\'s data is isolated and invisible to other tenants, but they share computing resources.' },
          { type: 'heading', text: 'Why Multi-Tenant Matters for Developers' },
          { type: 'list', items: [
            'Governor limits exist to prevent any single tenant from consuming too many shared resources',
            'You cannot access raw database servers or file systems directly',
            'All customizations must go through the platform APIs and tools',
            'Code must be efficient to stay within governor limits',
            'Test coverage of 75% is required before deploying to production'
          ]},
          { type: 'heading', text: 'MVC Architecture in Salesforce' },
          { type: 'paragraph', text: 'Salesforce follows the Model-View-Controller (MVC) design pattern:' },
          { type: 'list', items: [
            'Model = Objects and Fields (data structure and business logic)',
            'View = Visualforce pages, Lightning Components, LWC (user interface)',
            'Controller = Apex classes (business logic and data manipulation)'
          ]},
          { type: 'heading', text: 'Lightning Component Framework' },
          { type: 'paragraph', text: 'Two programming models exist for building Lightning components:' },
          { type: 'list', items: [
            'Aura Components: The original proprietary framework using .cmp markup files',
            'Lightning Web Components (LWC): Modern standards-based framework using ES6+, Custom Elements, and Shadow DOM',
            'Both use the "c:" namespace for custom components',
            'Both can coexist on the same page',
            'LWC is the recommended approach for new development'
          ]},
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A developer needs to add a custom component to a record page. Which tool should they use? Answer: Lightning App Builder provides a drag-and-drop interface for adding components to Lightning pages.' }
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
        ],
        detailedContent: [
          { type: 'heading', text: 'Declarative vs Programmatic Customizations' },
          { type: 'paragraph', text: 'Salesforce provides two approaches for customizations: declarative (point-and-click) and programmatic (code). Always prefer declarative tools when they meet the requirements.' },
          { type: 'heading', text: 'Declarative Tools' },
          { type: 'list', items: [
            'Formula Fields: Read-only fields calculated from other fields',
            'Roll-Up Summary Fields: Aggregate child records (Count, Sum, Max, Min)',
            'Workflow Rules: Field updates, email alerts, outbound messages, tasks',
            'Process Builder: Create records, invoke processes, call Apex',
            'Flow Builder: Most powerful - complex logic, UI screens, loops, decisions',
            'Approval Processes: Multi-step approval workflows',
            'Validation Rules: Enforce data quality rules'
          ]},
          { type: 'heading', text: 'When to Use Apex' },
          { type: 'list', items: [
            'Complex business logic with multiple conditional branches',
            'Integration with external systems (callouts)',
            'Complex error handling requirements',
            'Operations on multiple objects in a single transaction',
            'Batch processing of large data volumes',
            'Custom REST/SOAP API endpoints'
          ]},
          { type: 'heading', text: 'Bridging Declarative and Programmatic' },
          { type: 'code', language: 'java', code: '// Make Apex callable from Flow\n@InvocableMethod(label=\'Update Records\' description=\'Updates related records\')\npublic static void updateRecords(List<Id> recordIds) {\n    // Complex logic here\n}' },
          { type: 'paragraph', text: 'The @InvocableMethod annotation allows Flow and Process Builder to call Apex methods. Use @InvocableVariable to define input/output parameters.' },
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A requirement asks to update a custom field on an unrelated object when an Account is created. Flow can handle this declaratively using a Record-Triggered Flow. Only use Apex if the logic is too complex for Flow.' }
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
        ],
        detailedContent: [
          { type: 'heading', text: 'Lookup vs Master-Detail Relationships' },
          { type: 'table', headers: ['Feature', 'Lookup', 'Master-Detail'], rows: [
            ['Parent-child relationship', 'Loose coupling', 'Tight coupling'],
            ['Cascade delete', 'No (optional)', 'Yes (automatic)'],
            ['Roll-up summary', 'No', 'Yes'],
            ['Required field', 'Optional', 'Required'],
            ['Ownership', 'Child has own owner', 'Child inherits parent owner'],
            ['Sharing', 'Independent', 'Inherited from parent'],
            ['Max per object', '40', '2']
          ]},
          { type: 'heading', text: 'Many-to-Many Relationships' },
          { type: 'paragraph', text: 'Created using a junction object with two master-detail relationships:' },
          { type: 'code', language: 'text', code: 'Object A ←—[Master-Detail]— Junction Object —[Master-Detail]—→ Object B\n\nExample: Student ←— StudentCourse —→ Course\n(StudentCourse has Master-Detail to both Student and Course)' },
          { type: 'heading', text: 'Key Functions' },
          { type: 'list', items: [
            'CURRENCYRATE(isoCode): Returns conversion rate to corporate currency',
            'ADDMONTHS(date, months): Adds months to a date',
            'isCreateable(): Checks if current user can create records',
            'isUpdateable(): Checks if current user can update records',
            'getSObjectType(): Returns the SObject token for the object',
            'describeSObjects(): Retrieves metadata information about objects'
          ]},
          { type: 'heading', text: 'Important Rules' },
          { type: 'list', items: [
            'API names cannot be changed once created; labels can be changed',
            'Changing data type of a field referenced in Apex is blocked',
            'Roll-up summary fields only work on master-detail relationships',
            'Roll-up summary functions: Count, Sum, Max, Min (not Average)',
            'Formula fields are read-only and calculated based on expressions',
            'Relationship types can be converted with conditions'
          ]},
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A developer needs to create a many-to-many relationship between two custom objects. They should create a junction object with two master-detail relationships, one to each parent object.' }
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
        ],
        detailedContent: [
          { type: 'heading', text: 'Data Import Tools Comparison' },
          { type: 'table', headers: ['Feature', 'Data Import Wizard', 'Data Loader'], rows: [
            ['Max records', '50,000', '5 million'],
            ['Interface', 'Point-and-click', 'Desktop app / CLI'],
            ['Standard objects', 'Limited support', 'All standard objects'],
            ['Custom objects', 'Yes', 'Yes'],
            ['Export', 'No', 'Yes'],
            ['Save mappings', 'No', 'Yes'],
            ['Command line', 'No', 'Yes'],
            ['Duplicate detection', 'Yes', 'No (built-in)'],
            ['Bulk API', 'No', 'Yes']
          ]},
          { type: 'heading', text: 'Data Import Considerations' },
          { type: 'list', items: [
            'Consider data relationships - parent records must exist before children',
            'External IDs enable upsert operations (insert or update)',
            'Map fields carefully to avoid data corruption',
            'Test imports in sandbox before production',
            'Handle duplicates using matching rules',
            'Consider using Bulk API for very large data volumes'
          ]},
          { type: 'heading', text: 'Export Options' },
          { type: 'list', items: [
            'Data Loader: Full data export with filtering',
            'Reports: Export filtered data to CSV/Excel',
            'Workbench: Query and export via API',
            'Data Export Service: Weekly/monthly full backups',
            'ETL tools: Third-party tools for complex transformations'
          ]},
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A developer needs to import 100,000 Account records with relationships to Contacts. They should use Data Loader (not Data Import Wizard which is limited to 50,000 records) and ensure parent Account records are imported before child Contact records.' }
        ]
      }
    ]
  },
  {
    id: 'processAutomation',
    name: 'Process Automation and Logic',
    description: 'Declarative automation, Apex programming, SOQL, DML, triggers, governor limits, and exception handling (28%)',
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
        ],
        detailedContent: [
          { type: 'heading', text: 'Declarative Automation Tools' },
          { type: 'table', headers: ['Tool', 'Capabilities', 'Limitations'], rows: [
            ['Workflow Rules', 'Field updates, email alerts, outbound messages, tasks', 'No record creation, limited logic'],
            ['Process Builder', 'Create records, invoke processes, call Apex', 'No UI, complex error handling'],
            ['Flow Builder', 'Complex logic, UI screens, loops, decisions, Apex calls', 'Learning curve'],
            ['Approval Processes', 'Multi-step approvals, routing, escalation', 'Approval-specific only']
          ]},
          { type: 'heading', text: 'When to Use Each Tool' },
          { type: 'list', items: [
            'Workflow Rules: Simple field updates and email alerts',
            'Process Builder: Record creation and multi-step automation',
            'Flow Builder: Complex logic, user interfaces, loops, and integrations',
            'Approval Processes: Multi-step approval workflows with routing',
            'Apex: Complex business logic, integrations, and error handling'
          ]},
          { type: 'heading', text: 'Flow Capabilities' },
          { type: 'list', items: [
            'Screen Flows: Display custom user interface with input fields',
            'Auto-launched Flows: Run automatically without UI',
            'Record-Triggered Flows: Run when records are created/updated/deleted',
            'Schedule-Triggered Flows: Run on a schedule',
            'Platform Event-Triggered Flows: Run when platform events occur',
            'Subflows: Call other flows for reusability'
          ]},
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A requirement asks to display a custom UI for users to update multiple related records. Screen Flow is the best declarative tool for this. If complex error handling is needed, combine Flow with an @InvocableMethod Apex action.' }
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
        ],
        detailedContent: [
          { type: 'heading', text: 'Access Modifiers' },
          { type: 'table', headers: ['Modifier', 'Scope', 'Use Case'], rows: [
            ['private', 'Defining class only', 'Internal helper methods and variables'],
            ['public', 'Current namespace', 'Methods accessible within the app'],
            ['protected', 'Subclasses', 'Methods that subclasses can override'],
            ['global', 'Entire organization', 'Methods callable from anywhere (managed packages)']
          ]},
          { type: 'heading', text: 'Variables and Constants' },
          { type: 'code', language: 'java', code: '// Instance variable - unique per instance\npublic String name;\n\n// Static variable - shared across all instances\npublic static Integer counter = 0;\n\n// Constant - cannot be changed after initialization\npublic static final Integer MAX_SIZE = 100;\npublic final static String DEFAULT_NAME = \'Default\';' },
          { type: 'heading', text: 'Interfaces vs Abstract Classes' },
          { type: 'table', headers: ['Feature', 'Interface', 'Abstract Class'], rows: [
            ['Implementation', 'No implementation', 'Can have partial implementation'],
            ['Multiple inheritance', 'Can implement multiple', 'Can extend only one'],
            ['Methods', 'All abstract', 'Mix of abstract and concrete'],
            ['Constructors', 'No constructors', 'Can have constructors'],
            ['Variables', 'Only constants', 'Instance and static variables']
          ]},
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A developer needs to create a method that can be called from any class in the organization, including managed packages. They should use the global access modifier. Note: global methods cannot be removed in managed packages.' }
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
        ],
        detailedContent: [
          { type: 'heading', text: 'Loop Types in Apex' },
          { type: 'code', language: 'java', code: '// for loop - iterate with counter\nfor (Integer i = 0; i < 10; i++) {\n    System.debug(i);\n}\n\n// for-each loop - iterate over collection\nfor (Account acc : accountList) {\n    System.debug(acc.Name);\n}\n\n// while loop - condition checked before body\nwhile (condition) {\n    // body\n}\n\n// do-while loop - condition checked after body\n// Always executes at least once\ndo {\n    // body\n} while (condition);' },
          { type: 'heading', text: 'Loop Control Statements' },
          { type: 'list', items: [
            'break: Exits the loop immediately',
            'continue: Skips to the next iteration of the loop',
            'return: Exits the method entirely'
          ]},
          { type: 'heading', text: 'Switch Statement (when clauses)' },
          { type: 'code', language: 'java', code: 'switch on expression {\n    when \'value1\' {\n        // code for value1\n    }\n    when \'value2\', \'value3\' {\n        // code for value2 or value3\n    }\n    when else {\n        // default code\n    }\n}' },
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A loop must execute at least once regardless of the condition. Use a do-while loop because it checks the condition after executing the loop body.' }
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
        ],
        detailedContent: [
          { type: 'heading', text: 'SOQL vs SOSL' },
          { type: 'table', headers: ['Feature', 'SOQL', 'SOSL'], rows: [
            ['Purpose', 'Query specific objects', 'Text search across objects'],
            ['Syntax', 'SELECT fields FROM object', 'FIND {term} RETURNING object'],
            ['Returns', 'Structured records', 'Search results by object'],
            ['Relationships', 'Yes (subqueries)', 'No'],
            ['Full text search', 'No', 'Yes'],
            ['Governor limit', '100 queries/txn', '20 queries/txn']
          ]},
          { type: 'heading', text: 'SOQL Examples' },
          { type: 'code', language: 'java', code: '// Basic SOQL\nList<Account> accounts = [SELECT Id, Name FROM Account WHERE Industry = \'Technology\'];\n\n// SOQL with relationship\nList<Contact> contacts = [SELECT Name, Account.Name FROM Contact WHERE Account.Industry = \'Technology\'];\n\n// SOQL with ORDER BY and LIMIT\nList<Account> topAccounts = [SELECT Name, Revenue FROM Account ORDER BY Revenue DESC LIMIT 10];\n\n// Dynamic SOQL with bind variables (prevents SOQL injection)\nString industry = \'Technology\';\nList<Account> results = Database.query(\'SELECT Id, Name FROM Account WHERE Industry = :industry\');' },
          { type: 'heading', text: 'DML Operations' },
          { type: 'table', headers: ['Operation', 'DML Statement', 'Database Method'], rows: [
            ['Insert', 'insert records;', 'Database.insert(records);'],
            ['Update', 'update records;', 'Database.update(records);'],
            ['Upsert', 'upsert records;', 'Database.upsert(records);'],
            ['Delete', 'delete records;', 'Database.delete(records);'],
            ['Undelete', 'undelete records;', 'Database.undelete(records);']
          ]},
          { type: 'paragraph', text: 'Database methods support partial success with allOrNone=false parameter. DML statements do not.' },
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A developer needs to insert 200 records but allow some to fail without rolling back the entire operation. Use Database.insert(records, false) with allOrNone=false.' }
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
        ],
        detailedContent: [
          { type: 'heading', text: 'Trigger Handler Pattern' },
          { type: 'paragraph', text: 'Best practice is to use one trigger per object with a handler class that separates business logic from the trigger itself.' },
          { type: 'code', language: 'java', code: '// AccountTrigger.trigger\ntrigger AccountTrigger on Account (before insert, after insert, before update, after update) {\n    AccountTriggerHandler handler = new AccountTriggerHandler();\n    \n    if (Trigger.isBefore && Trigger.isInsert) {\n        handler.beforeInsert(Trigger.new);\n    }\n    if (Trigger.isAfter && Trigger.isInsert) {\n        handler.afterInsert(Trigger.new);\n    }\n    // ... other events\n}\n\n// AccountTriggerHandler.cls\npublic class AccountTriggerHandler {\n    public void beforeInsert(List<Account> newAccounts) {\n        // Business logic here\n    }\n}' },
          { type: 'heading', text: 'Bulkification Best Practices' },
          { type: 'list', items: [
            'Process collections, not individual records',
            'Collect all IDs first, then perform one SOQL query outside the loop',
            'Use Maps for efficient data lookups',
            'Avoid SOQL queries inside for loops (governor limit: 100 per transaction)',
            'Avoid DML statements inside for loops (governor limit: 150 per transaction)',
            'Use Trigger.new for before triggers (modifiable)',
            'Use Trigger.old for update/delete triggers (old values)'
          ]},
          { type: 'heading', text: 'Trigger Context Variables' },
          { type: 'table', headers: ['Variable', 'Description', 'Available In'], rows: [
            ['Trigger.new', 'New versions of records', 'Before/After Insert, Update'],
            ['Trigger.old', 'Old versions of records', 'Before/After Update, Delete'],
            ['Trigger.newMap', 'Map of new records by ID', 'After Insert, Update'],
            ['Trigger.oldMap', 'Map of old records by ID', 'After Update, Delete'],
            ['Trigger.isInsert', 'True if trigger is insert', 'All events'],
            ['Trigger.isUpdate', 'True if trigger is update', 'All events'],
            ['Trigger.isDelete', 'True if trigger is delete', 'All events'],
            ['Trigger.isBefore', 'True if before trigger', 'All events'],
            ['Trigger.isAfter', 'True if after trigger', 'All events']
          ]},
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A trigger needs to update related records when an Account is modified. Use the trigger handler pattern, collect all Account IDs, query related records in one SOQL query outside the loop, then update the related records in one DML statement.' }
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
        ],
        detailedContent: [
          { type: 'heading', text: 'Key Governor Limits' },
          { type: 'table', headers: ['Resource', 'Synchronous', 'Asynchronous'], rows: [
            ['SOQL queries', '100', '200'],
            ['DML statements', '150', '150'],
            ['Records retrieved by SOQL', '50,000', '50,000'],
            ['Records processed by DML', '10,000', '10,000'],
            ['CPU time', '10,000 ms', '60,000 ms'],
            ['Heap size', '6 MB', '12 MB'],
            ['Callouts', '100', '100'],
            ['Callout timeout', '120 seconds', '120 seconds'],
            ['Future methods', '50', '50'],
            ['Queueable jobs', '50', '50']
          ]},
          { type: 'heading', text: 'What Happens When Limits Are Exceeded' },
          { type: 'list', items: [
            'An unhandled exception is thrown',
            'All DML operations in the transaction are rolled back',
            'The entire transaction fails',
            'No partial success is possible',
            'The exception cannot be caught in most cases'
          ]},
          { type: 'heading', text: 'Best Practices for Working Within Limits' },
          { type: 'list', items: [
            'Use collections to process records in bulk',
            'Avoid SOQL and DML inside loops',
            'Use Maps for efficient data lookups',
            'Leverage Test.startTest()/Test.stopTest() to reset limits in tests',
            'Use @future or Queueable for long-running operations',
            'Consider Batch Apex for very large data volumes'
          ]},
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A trigger processes 200 records and needs to query related data. If the query is inside the for loop, it will hit the 100 SOQL query limit. Solution: Collect all IDs first, then perform one SOQL query outside the loop.' }
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
        ],
        detailedContent: [
          { type: 'heading', text: 'Save Order of Execution' },
          { type: 'paragraph', text: 'When a record is saved, Salesforce executes the following steps in order:' },
          { type: 'list', items: [
            '1. Before triggers',
            '2. System validation rules',
            '3. Duplicate rules',
            '4. After triggers',
            '5. Assignment rules',
            '6. Auto-response rules',
            '7. Workflow rules',
            '8. Processes (Process Builder)',
            '9. Flows',
            '10. Escalation rules',
            '11. Roll-up summary field calculations',
            '12. Entitlement rules',
            '13. Criteria-based sharing',
            '14. Commit to database',
            '15. Post-commit logic'
          ]},
          { type: 'heading', text: 'Preventing Recursion' },
          { type: 'code', language: 'java', code: 'public class AccountTriggerHandler {\n    // Static flag to prevent recursion\n    private static Boolean isFirstRun = true;\n    \n    public void afterUpdate(List<Account> newAccounts, Map<Id, Account> oldMap) {\n        if (!isFirstRun) return; // Prevent recursion\n        isFirstRun = false;\n        \n        // Logic here - will only run once\n        List<Account> toUpdate = new List<Account>();\n        for (Account acc : newAccounts) {\n            if (acc.Status != oldMap.get(acc.Id).Status) {\n                toUpdate.add(new Account(Id = acc.Id, Processed__c = true));\n            }\n        }\n        if (!toUpdate.isEmpty()) {\n            update toUpdate; // This won\'t trigger the handler again\n        }\n    }\n}' },
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A before trigger modifies a field value. When do validation rules fire? Answer: After the before trigger but before the after trigger. The modified value is available to validation rules.' }
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
        ],
        detailedContent: [
          { type: 'heading', text: 'Exception Handling in Apex' },
          { type: 'code', language: 'java', code: 'try {\n    // Code that might throw an exception\n    Account acc = [SELECT Id, Name FROM Account WHERE Id = :accId];\n} catch (QueryException e) {\n    // Handle specific exception\n    System.debug(\'Account not found: \' + e.getMessage());\n} catch (DmlException e) {\n    // Handle DML exception\n    System.debug(\'DML failed: \' + e.getMessage());\n} catch (Exception e) {\n    // Handle generic exception (catch-all)\n    System.debug(\'Unexpected error: \' + e.getMessage());\n} finally {\n    // Always executes - cleanup code\n    System.debug(\'Cleanup complete\');\n}' },
          { type: 'heading', text: 'Common Exception Types' },
          { type: 'table', headers: ['Exception', 'When Thrown'], rows: [
            ['QueryException', 'Single-record query returns no results or multiple results'],
            ['DmlException', 'DML operation fails (validation, required fields, etc.)'],
            ['NullPointerException', 'Accessing null object or variable'],
            ['LimitException', 'Governor limit exceeded'],
            ['ListException', 'List index out of bounds'],
            ['TypeException', 'Invalid type conversion']
          ]},
          { type: 'heading', text: 'Custom Exceptions' },
          { type: 'code', language: 'java', code: 'public class MyCustomException extends Exception {}\n\n// Usage\npublic class MyService {\n    public static void doSomething() {\n        if (condition) {\n            throw new MyCustomException(\'Custom error message\');\n        }\n    }\n}' },
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A SOQL query using a single record assignment (Account acc = [...]) returns no results. A QueryException is thrown. Solution: Query into a list and check if empty, or use try-catch.' }
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
        ],
        detailedContent: [
          { type: 'heading', text: 'Bridging Flow and Apex' },
          { type: 'paragraph', text: 'Use @InvocableMethod to make Apex methods callable from Flow and Process Builder. This allows you to combine the power of declarative tools with complex Apex logic.' },
          { type: 'code', language: 'java', code: 'public class AccountService {\n    @InvocableMethod(label=\'Process Accounts\' description=\'Performs complex account processing\')\n    public static void processAccounts(List<Id> accountIds) {\n        // Complex logic that Flow cannot handle\n        List<Account> accounts = [SELECT Id, Name, Industry FROM Account WHERE Id IN :accountIds];\n        \n        for (Account acc : accounts) {\n            // Complex business logic\n            if (acc.Industry == \'Technology\') {\n                // Custom logic\n            }\n        }\n        \n        update accounts;\n    }\n}' },
          { type: 'heading', text: 'When to Combine Tools' },
          { type: 'list', items: [
            'Use Flow for the main automation logic and UI',
            'Call Apex for complex calculations or external integrations',
            'Use Apex for error handling that Flow cannot handle',
            'Combine for scenarios requiring both declarative and programmatic logic',
            'Consider order of execution when combining tools'
          ]},
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A Flow needs to call an external API to process data. Flow cannot make HTTP callouts directly. Solution: Create an @InvocableMethod Apex class that makes the callout, and call it from the Flow.' }
        ]
      }
    ]
  },
  {
    id: 'userInterface',
    name: 'User Interface',
    description: 'Visualforce, Lightning Component Framework, LWC events, and UI security (25%)',
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
        ],
        detailedContent: [
          { type: 'heading', text: 'Visualforce Components' },
          { type: 'table', headers: ['Component', 'Purpose', 'Example'], rows: [
            ['<apex:outputField>', 'Display field value (read-only)', '<apex:outputField value="{!Account.Name}"/>'],
            ['<apex:inputField>', 'Editable field input', '<apex:inputField value="{!Account.Name}"/>'],
            ['<apex:detail>', 'Complete record detail page', '<apex:detail subject="{!Account.Id}"/>'],
            ['<apex:pageBlockTable>', 'Styled table with headers', '<apex:pageBlockTable value="{!accounts}" var="a">'],
            ['<apex:dataTable>', 'Standard HTML table', '<apex:dataTable value="{!accounts}" var="a">'],
            ['<apex:repeat>', 'Custom iteration markup', '<apex:repeat value="{!accounts}" var="a">']
          ]},
          { type: 'heading', text: 'Controllers' },
          { type: 'list', items: [
            'Standard Controller: Automatic CRUD/FLS enforcement, built-in methods',
            'Custom Controller: Full control over logic, must enforce CRUD/FLS manually',
            'Controller Extension: Adds functionality to standard controller'
          ]},
          { type: 'code', language: 'html', code: '<!-- Standard Controller -->\n<apex:page standardController="Account">\n    <apex:outputField value="{!Account.Name}"/>\n    <apex:outputField value="{!Account.Industry}"/>\n</apex:page>\n\n<!-- Controller Extension -->\n<apex:page standardController="Account" extensions="AccountExtension">\n    <apex:outputField value="{!Account.Name}"/>\n    <apex:outputText value="{!customField}"/>\n</apex:page>' },
          { type: 'heading', text: 'PDF Generation' },
          { type: 'code', language: 'html', code: '<apex:page renderAs="pdf" standardController="Account">\n    <h1>Account Details</h1>\n    <p>Name: {!Account.Name}</p>\n    <p>Industry: {!Account.Industry}</p>\n</apex:page>' },
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A developer needs to display a list of contacts with Salesforce styling. Use <apex:pageBlockTable> instead of <apex:dataTable> for built-in Salesforce styling.' }
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
        ],
        detailedContent: [
          { type: 'heading', text: 'Aura vs LWC' },
          { type: 'table', headers: ['Feature', 'Aura', 'LWC'], rows: [
            ['Framework', 'Proprietary', 'Standards-based (ES6+, Shadow DOM)'],
            ['Markup', '.cmp files', '.html files'],
            ['Controller', '.js controller', '.js class'],
            ['Events', 'Component & Application events', 'CustomEvent & Lightning Message Service'],
            ['State Management', '@track decorator', 'Reactive properties'],
            ['Performance', 'Slower', 'Faster (native browser APIs)'],
            ['Recommendation', 'Legacy', 'Recommended for new development']
          ]},
          { type: 'heading', text: 'Component Bundle Resources (Aura)' },
          { type: 'list', items: [
            'Component (.cmp): Markup definition',
            'Controller (.js): Event handlers',
            'Helper (.js): Reusable functions',
            'Style (.css): Component CSS',
            'Design (.design): Expose attributes to App Builder',
            'Documentation: Component documentation',
            'Renderer: Custom rendering logic',
            '<ltng:require>: Load JavaScript libraries'
          ]},
          { type: 'heading', text: 'LWC Component Structure' },
          { type: 'code', language: 'javascript', code: '// accountCard.js\nimport { LightningElement, api, wire } from \'lwc\';\nimport { getRecord } from \'lightning/uiRecordApi\';\n\nconst FIELDS = [\'Account.Name\', \'Account.Industry\'];\n\nexport default class AccountCard extends LightningElement {\n    @api recordId; // Public property\n    \n    @wire(getRecord, { recordId: \'$recordId\', fields: FIELDS })\n    account; // Reactive wire service\n    \n    handleClick() {\n        // Dispatch custom event\n        this.dispatchEvent(new CustomEvent(\'accountclick\', {\n            detail: { recordId: this.recordId }\n        }));\n    }\n}' },
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A developer needs to create a reusable component for Lightning Experience. They should use LWC (Lightning Web Components) as it is the modern, standards-based framework recommended for new development.' }
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
        ],
        detailedContent: [
          { type: 'heading', text: 'SOQL Injection Prevention' },
          { type: 'paragraph', text: 'SOQL injection occurs when user input is directly concatenated into SOQL queries. Always use bind variables to prevent this.' },
          { type: 'code', language: 'java', code: '// VULNERABLE - DO NOT USE\nString userInput = ApexPages.currentPage().getParameters().get(\'name\');\nList<Account> accounts = Database.query(\'SELECT Id FROM Account WHERE Name = \' + userInput);\n\n// SAFE - Use bind variables\nString userInput = ApexPages.currentPage().getParameters().get(\'name\');\nList<Account> accounts = Database.query(\'SELECT Id FROM Account WHERE Name = :userInput\');' },
          { type: 'heading', text: 'XSS Prevention' },
          { type: 'table', headers: ['Context', 'Function', 'Use Case'], rows: [
            ['JavaScript', 'JSENCODE()', 'User input in JavaScript context'],
            ['HTML', 'HTMLENCODE()', 'User input in HTML context'],
            ['URL', 'URLENCODE()', 'User input in URL context'],
            ['Attribute', 'URLENCODE()', 'User input in HTML attributes']
          ]},
          { type: 'heading', text: 'Sharing Modes' },
          { type: 'table', headers: ['Mode', 'Effect', 'Use Case'], rows: [
            ['with sharing', 'Enforces sharing rules', 'User-facing operations'],
            ['without sharing', 'Bypasses sharing rules', 'System-level operations (use cautiously)'],
            ['inherited sharing', 'Uses caller\'s sharing context', 'Utility classes called from various contexts']
          ]},
          { type: 'heading', text: 'CRUD/FLS Enforcement' },
          { type: 'code', language: 'java', code: '// Check before performing operations\nif (Schema.sObjectType.Account.isCreateable()) {\n    Account acc = new Account(Name = \'Test\');\n    insert acc;\n}\n\nif (Schema.sObjectType.Account.fields.Name.isAccessible()) {\n    String name = acc.Name;\n}' },
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A Visualforce page accepts user input and uses it in a SOQL query. The developer must use bind variables to prevent SOQL injection, not string concatenation.' }
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
        ],
        detailedContent: [
          { type: 'heading', text: '@AuraEnabled Methods' },
          { type: 'code', language: 'java', code: '// Read-only method (cacheable)\n@AuraEnabled(cacheable=true)\npublic static List<Account> getAccounts() {\n    return [SELECT Id, Name, Industry FROM Account];\n}\n\n// DML method (not cacheable)\n@AuraEnabled\npublic static void updateAccount(Id accountId, String newName) {\n    Account acc = new Account(Id = accountId, Name = newName);\n    update acc;\n}' },
          { type: 'heading', text: 'Wire Service vs Imperative Calls' },
          { type: 'table', headers: ['Feature', 'Wire Service', 'Imperative'], rows: [
            ['Reactivity', 'Automatic refresh', 'Manual invocation'],
            ['Cache', 'Cached by LDS', 'Not cached'],
            ['DML', 'Cannot perform DML', 'Can perform DML'],
            ['Error handling', 'Automatic', 'Manual try-catch'],
            ['Use case', 'Read-only data', 'DML and complex logic']
          ]},
          { type: 'heading', text: 'Lightning Data Service (LDS)' },
          { type: 'list', items: [
            'Provides CRUD operations without writing Apex',
            'Handles record caching and sharing',
            'Automatically refreshes when data changes',
            'Use getRecord, createRecord, updateRecord, deleteRecord',
            'Built-in error handling and validation'
          ]},
          { type: 'heading', text: 'Error Handling in Lightning' },
          { type: 'code', language: 'java', code: '@AuraEnabled\npublic static void updateAccount(Id accountId, String newName) {\n    try {\n        Account acc = new Account(Id = accountId, Name = newName);\n        update acc;\n    } catch (DmlException e) {\n        throw new AuraHandledException(\'Failed to update account: \' + e.getMessage());\n    }\n}' },
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A Lightning component needs to display account data that refreshes automatically when the record changes. Use @AuraEnabled(cacheable=true) with the wire service for reactive data binding.' }
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
        ],
        detailedContent: [
          { type: 'heading', text: 'LWC Event Communication' },
          { type: 'paragraph', text: 'LWC uses standard web events for component communication:' },
          { type: 'list', items: [
            'CustomEvent: Standard web events for child-to-parent communication',
            'Event bubbling: Events propagate up the DOM tree',
            'Lightning Message Service (LMS): Cross-DOM communication for unrelated components',
            'Event detail: Carries the payload data'
          ]},
          { type: 'heading', text: 'CustomEvent Example' },
          { type: 'code', language: 'javascript', code: '// Child component\nhandleClick() {\n    this.dispatchEvent(new CustomEvent(\'accountclick\', {\n        detail: { recordId: this.recordId, name: this.name },\n        bubbles: true,       // Event bubbles up\n        composed: false      // Does not cross shadow DOM\n    }));\n}\n\n// Parent component\nhandleAccountClick(event) {\n    const recordId = event.detail.recordId;\n    // Handle the event\n}' },
          { type: 'heading', text: 'Lightning Message Service (LMS)' },
          { type: 'code', language: 'javascript', code: '// Message Channel (messageChannels/AccountChannel.messageChannel-meta.xml)\n// Publish\nimport { publish, MessageContext } from \'lightning/messageService\';\nimport ACCOUNT_CHANNEL from \'@salesforce/messageChannel/AccountChannel__c\';\n\nexport default class Publisher extends LightningElement {\n    @wire(MessageContext)\n    messageContext;\n    \n    publishMessage() {\n        publish(this.messageContext, ACCOUNT_CHANNEL, { recordId: this.recordId });\n    }\n}\n\n// Subscribe\nimport { subscribe, MessageContext, unsubscribe } from \'lightning/messageService\';\n\nexport default class Subscriber extends LightningElement {\n    @wire(MessageContext)\n    messageContext;\n    subscription = null;\n    \n    connectedCallback() {\n        this.subscription = subscribe(this.messageContext, ACCOUNT_CHANNEL, (message) => {\n            this.handleMessage(message);\n        });\n    }\n}' },
          { type: 'heading', text: 'Aura Events' },
          { type: 'list', items: [
            'Component Events: Handled within the component hierarchy',
            'Application Events: Handled by any component that registers',
            '<aura:registerEvent>: Registers an event',
            '<aura:handler>: Handles an event'
          ]},
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'Two sibling components need to communicate. Since they don\'t have a parent-child relationship, use Lightning Message Service (LMS) with a message channel.' }
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
        ],
        detailedContent: [
          { type: 'heading', text: 'Apex Integration with Page Components' },
          { type: 'paragraph', text: 'Apex can be integrated with both Visualforce and Lightning components for server-side processing.' },
          { type: 'heading', text: 'Visualforce Integration' },
          { type: 'code', language: 'java', code: '// Apex Controller\npublic class AccountController {\n    public Account acc { get; set; }\n    \n    public AccountController() {\n        acc = [SELECT Id, Name, Industry FROM Account LIMIT 1];\n    }\n    \n    public PageReference save() {\n        update acc;\n        return null;\n    }\n}\n\n// Visualforce Page\n// <apex:page controller="AccountController">\n//     <apex:outputField value="{!acc.Name}"/>\n//     <apex:commandButton value="Save" action="{!save}"/>\n// </apex:page>' },
          { type: 'heading', text: 'Lightning Integration' },
          { type: 'code', language: 'java', code: '// Apex for Lightning\npublic with sharing class AccountService {\n    @AuraEnabled(cacheable=true)\n    public static List<Account> getAccounts() {\n        return [SELECT Id, Name, Industry FROM Account];\n    }\n    \n    @AuraEnabled\n    public static void updateAccount(Id accountId, String newName) {\n        Account acc = new Account(Id = accountId, Name = newName);\n        update acc;\n    }\n}' },
          { type: 'heading', text: 'Controller Extensions' },
          { type: 'code', language: 'java', code: 'public class AccountExtension {\n    private final Account acc;\n    \n    public AccountExtension(ApexPages.StandardController stdController) {\n        this.acc = (Account)stdController.getRecord();\n    }\n    \n    public String getCustomField() {\n        // Add custom logic\n        return \'Custom Value\';\n    }\n}' },
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A Lightning component needs to call Apex to update a record. Use @AuraEnabled (without cacheable=true) for DML operations. The method should handle errors with AuraHandledException.' }
        ]
      }
    ]
  },
  {
    id: 'testingDebugging',
    name: 'Testing, Debugging, and Deployment',
    description: 'Test classes, debugging techniques, developer tools, and deployment processes (20%)',
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
        ],
        detailedContent: [
          { type: 'heading', text: 'Test Class Structure' },
          { type: 'code', language: 'java', code: '@isTest\nprivate class AccountServiceTest {\n    \n    @testSetup\n    static void setupTestData() {\n        // Runs once per test class - data is rolled back after each test method\n        List<Account> accounts = new List<Account>();\n        for (Integer i = 0; i < 10; i++) {\n            accounts.add(new Account(Name = \'Test Account \' + i));\n        }\n        insert accounts;\n    }\n    \n    @isTest\n    static void testGetAccounts() {\n        // Test data from @testSetup is available\n        List<Account> accounts = AccountService.getAccounts();\n        System.assertEquals(10, accounts.size(), \'Should return 10 accounts\');\n    }\n    \n    @isTest\n    static void testUpdateAccount() {\n        Account acc = [SELECT Id, Name FROM Account LIMIT 1];\n        \n        Test.startTest(); // Reset governor limits\n        AccountService.updateAccount(acc.Id, \'Updated Name\');\n        Test.stopTest(); // Reset governor limits\n        \n        Account updated = [SELECT Name FROM Account WHERE Id = :acc.Id];\n        System.assertEquals(\'Updated Name\', updated.Name);\n    }\n}' },
          { type: 'heading', text: 'Test Data Strategies' },
          { type: 'table', headers: ['Strategy', 'Description', 'Use Case'], rows: [
            ['@testSetup', 'Runs once per test class', 'Shared test data'],
            ['Test.loadData', 'Load from static resource CSV', 'Bulk test data'],
            ['Test Data Factory', 'Reusable Apex class', 'Consistent test data'],
            ['SeeAllData=true', 'Access org data', 'Rarely recommended']
          ]},
          { type: 'heading', text: 'Code Coverage Requirements' },
          { type: 'list', items: [
            '75% minimum overall code coverage for deployment',
            'All triggers must have some test coverage',
            'Test coverage must include meaningful assertions',
            'Coverage is calculated across all Apex classes and triggers',
            'Aim for 100% coverage with meaningful tests, not just coverage'
          ]},
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A developer needs to test an @future method. They must use Test.startTest() before calling the method and Test.stopTest() after to ensure the future method executes within the test context.' }
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
        ],
        detailedContent: [
          { type: 'heading', text: 'Debugging Tools' },
          { type: 'table', headers: ['Tool', 'Purpose', 'Access'], rows: [
            ['Developer Console', 'Interactive debugging, logs, query editor', 'Setup > Developer Console'],
            ['Debug Logs', 'Capture execution details', 'Setup > Debug Logs'],
            ['System.debug()', 'Output messages to debug logs', 'In Apex code'],
            ['Checkpoints', 'Set breakpoints in Developer Console', 'Developer Console'],
            ['Workbench', 'External tool for data/metadata', 'workbench.developerforce.com']
          ]},
          { type: 'heading', text: 'Debug Log Levels' },
          { type: 'table', headers: ['Level', 'Description', 'Use Case'], rows: [
            ['NONE', 'No logging', 'Disable logging'],
            ['ERROR', 'Errors only', 'Production monitoring'],
            ['WARN', 'Warnings and errors', 'Basic debugging'],
            ['INFO', 'Informational messages', 'General debugging'],
            ['DEBUG', 'Debug messages', 'Detailed debugging'],
            ['FINE', 'Fine-grained messages', 'Deep debugging'],
            ['FINER', 'More detailed', 'Very deep debugging'],
            ['FINEST', 'Most detailed', 'Maximum detail']
          ]},
          { type: 'heading', text: 'Using System.debug()' },
          { type: 'code', language: 'java', code: 'public class MyService {\n    public static void processData() {\n        System.debug(\'Starting processData\');\n        \n        List<Account> accounts = [SELECT Id, Name FROM Account];\n        System.debug(\'Found \' + accounts.size() + \' accounts\');\n        \n        for (Account acc : accounts) {\n            System.debug(\'Processing: \' + acc.Name);\n            // Process logic\n        }\n        \n        System.debug(\'Completed processData\');\n    }\n}' },
          { type: 'heading', text: 'User Trace Flags' },
          { type: 'list', items: [
            'Configure logging for specific users',
            'Set log levels per category (Database, Workflow, etc.)',
            'Set expiration date/time',
            'Maximum 20 MB per debug log',
            'Logs are automatically deleted when they expire'
          ]},
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A developer needs to debug a trigger that\'s failing. They should enable debug logs for the user, reproduce the issue, then check the debug log in Developer Console for error messages and execution flow.' }
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
        ],
        detailedContent: [
          { type: 'heading', text: 'Salesforce DX' },
          { type: 'paragraph', text: 'Salesforce DX (SFDX) is a source-driven development framework that enables modern development workflows with version control as the source of truth.' },
          { type: 'heading', text: 'Scratch Orgs' },
          { type: 'list', items: [
            'Disposable, configurable, short-term Salesforce environments',
            'Defined by a configuration file (project-scratch-def.json)',
            'Can be quickly created and deleted',
            'Support source-driven development workflows',
            'Maximum lifetime: 30 days',
            'Used for development and testing, not production'
          ]},
          { type: 'heading', text: 'Sandbox Types' },
          { type: 'table', headers: ['Type', 'Data', 'Storage', 'Refresh Interval'], rows: [
            ['Developer', 'No data', '200 MB', '1 day'],
            ['Developer Pro', 'No data', '1 GB', '1 day'],
            ['Partial Copy', 'Sample data (template)', '5 GB', '5 days'],
            ['Full Copy', 'All production data', 'Same as prod', '29 days']
          ]},
          { type: 'heading', text: 'Salesforce CLI' },
          { type: 'code', language: 'bash', code: '# Create a scratch org\nsf org create scratch -f config/project-scratch-def.json -a MyScratch\n\n# Push source to scratch org\nsf project deploy start\n\n# Pull source from scratch org\nsf project retrieve start\n\n# Run Apex tests\nsf apex run test -r human\n\n# Open scratch org\nsf org open' },
          { type: 'heading', text: 'VS Code with Salesforce Extensions' },
          { type: 'list', items: [
            'Salesforce Extension Pack for VS Code',
            'IntelliSense for Apex, Visualforce, and Lightning',
            'Integrated debugging and testing',
            'Salesforce CLI integration',
            'Source format support',
            'Deploy and retrieve commands'
          ]},
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A developer needs to create a fresh, clean environment for development. They should use a scratch org defined by a configuration file, not a sandbox which copies production data and configuration.' }
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
        ],
        detailedContent: [
          { type: 'heading', text: 'Deployment Tools' },
          { type: 'table', headers: ['Tool', 'Interface', 'Use Case', 'Limitations'], rows: [
            ['Change Sets', 'Point-and-click', 'Connected orgs (sandbox to prod)', 'No delete, no order control'],
            ['Metadata API (ANT)', 'XML/CLI', 'Automated deployments', 'Complex setup'],
            ['Salesforce CLI', 'CLI', 'Modern deployments', 'Requires CLI setup'],
            ['Unlocked Packages', 'CLI', 'Modular deployments', 'Requires package namespace'],
            ['Workbench', 'Web UI', 'Quick deployments', 'Manual process']
          ]},
          { type: 'heading', text: 'Change Sets' },
          { type: 'list', items: [
            'Point-and-click interface for deploying metadata',
            'Requires deployment connection between orgs',
            'Cannot delete components or specify deployment order',
            '75% test coverage required for Apex',
            'Upload from source, deploy in target',
            'Not all metadata types are supported'
          ]},
          { type: 'heading', text: 'Deployment Process' },
          { type: 'list', items: [
            '1. Develop in sandbox or scratch org',
            '2. Test thoroughly in sandbox',
            '3. Create change set or deployment package',
            '4. Upload/deploy to target org',
            '5. Run all tests (75% coverage required)',
            '6. Validate and deploy',
            '7. Notify users of changes'
          ]},
          { type: 'heading', text: 'Destructive Changes' },
          { type: 'code', language: 'xml', code: '<!-- destructiveChanges.xml -->\n<Package xmlns="http://soap.sforce.com/2006/04/metadata">\n    <types>\n        <members>MyOldClass</members>\n        <name>ApexClass</name>\n    </types>\n    <version>60.0</version>\n</Package>' },
          { type: 'heading', text: 'Key Exam Scenario' },
          { type: 'paragraph', text: 'A developer needs to deploy changes from a sandbox to production. They should use Change Sets for simple deployments, or Salesforce CLI for automated deployments with more control over the process.' }
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
