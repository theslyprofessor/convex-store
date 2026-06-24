export type ModuleCategory =
  | 'communication'
  | 'project'
  | 'education'
  | 'operations'
  | 'content'
  | 'personal'
  | 'utility';

// Honest status vocabulary. Nothing here is a published, installable npm package yet.
//   beta        = runs in a real production deployment, mid-extraction into a module
//   coming-soon = exists as code in a production deployment, extraction not started
//   roadmap     = planned, not yet built as a domain in a production deployment
// (the 'live' value is retained for type-compatibility but is deliberately unused;
//  no module is a shipped, installable package today.)
export type ModuleStatus = 'live' | 'beta' | 'coming-soon' | 'roadmap';

export interface Module {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ModuleCategory;
  status: ModuleStatus;
  icon?: string;
  highlights: string[];
  // Every module ships as the same three-part shape (the contract):
  //   a Convex Component + headless hooks + an OPTIONAL reference UI.
  // A Next dev can take the Component and hooks and bring their own UI.
  delivery: {
    component: string;
    hooks: string;
    referenceUi: string;
  };
}

const defaultDelivery = {
  component: 'A Convex Component (convex.config.ts + schema + functions), app.use()-installable into your deployment',
  hooks: 'Headless useX() hooks: router-free, style-free, navigation passed in as callbacks',
  referenceUi: 'An OPTIONAL React Native + NativeWind reference UI; ignore it and bring your own surface',
};

export const modules: Module[] = [
  {
    slug: 'convex-garden',
    name: 'Garden',
    tagline: 'The lead example: first module being extracted to the contract',
    description:
      'A small, complete plant/garden tracker used as the worked example for the whole contract. It is the first domain being extracted from a real production deployment into a fully contract-conformant ConvexCompose module: a Convex Component, headless useGarden() hooks, a portal.config.ts manifest, and an optional reference UI. Use it to learn the shape every other module follows.',
    category: 'personal',
    status: 'beta',
    icon: 'Sprout',
    highlights: [
      'Lead worked example for the module contract',
      'Real (non-conforming) garden exists in a production deployment today',
      'Mid-extraction into a defineComponent("garden") Component',
      'Authorization from ctx; cross-module links by explicit passed-in userId',
      'Ships Component + useGarden() hook + optional reference UI',
    ],
    delivery: defaultDelivery,
  },
  {
    slug: 'convex-mail',
    name: 'Mail',
    tagline: 'Inbox, helpdesk, and transactional email',
    description:
      'Inbox threading, contact management, transactional sending, and bulk campaigns, with pluggable SMTP adapters (SES, Resend, Gmail, generic SMTP). This runs in a real production deployment today as a plain function module; it is mid-extraction into a contract-conformant Component plus headless hooks, not yet a published installable package.',
    category: 'communication',
    status: 'beta',
    icon: 'Mail',
    highlights: [
      'Runs in a real production deployment',
      'Mid-extraction: not yet a published installable package',
      'Inbox threading with In-Reply-To matching',
      'Pluggable SMTP adapters (SES, Resend, Gmail)',
      'Bulk campaign orchestration',
    ],
    delivery: defaultDelivery,
  },
  {
    slug: 'convex-tasks',
    name: 'Tasks',
    tagline: 'Issues, projects, and bug reports, composed',
    description:
      'Polymorphic issues (task / bug / feature / equipment / support) with inline list editing, projects, sprints, and entity linking by explicit ID. This runs in a real production deployment today as a plain function module; it is mid-extraction into a contract-conformant Component plus headless hooks, not yet a published installable package.',
    category: 'project',
    status: 'beta',
    icon: 'ListChecks',
    highlights: [
      'Runs in a real production deployment',
      'Mid-extraction: not yet a published installable package',
      'Polymorphic issues with type discriminator',
      'Inline list editing',
      'Cross-module entity linking by explicit ID',
    ],
    delivery: defaultDelivery,
  },
  {
    slug: 'convex-lms',
    name: 'LMS',
    tagline: 'Courses, students, grades, and attendance',
    description:
      'Courses, enrollments, assignments, quizzes, attendance tracking, and grade computation. This is used daily in a real production deployment by a working college professor for actual classes; it runs as a plain function module on one deployment and is mid-extraction into a contract-conformant Component plus headless hooks, not yet a published installable package.',
    category: 'education',
    status: 'beta',
    icon: 'GraduationCap',
    highlights: [
      'Used daily in a production deployment for real college classes',
      'Mid-extraction: not yet a published installable package',
      'Cross-listed course support',
      'Attendance and late tracking',
      'Grade categories with drop-lowest',
    ],
    delivery: defaultDelivery,
  },
  {
    slug: 'convex-booking',
    name: 'Booking',
    tagline: 'Resource scheduling without the conflicts',
    description:
      'Schedule rooms, equipment, or any resource with conflict detection, recurring bookings, and Google Calendar sync. This runs in a real production deployment today as a plain function module; it is mid-extraction into a contract-conformant Component plus headless hooks, not yet a published installable package.',
    category: 'operations',
    status: 'beta',
    icon: 'Calendar',
    highlights: [
      'Runs in a real production deployment',
      'Mid-extraction: not yet a published installable package',
      'Per-resource booking calendar',
      'Conflict detection',
      'Google Calendar sync',
    ],
    delivery: defaultDelivery,
  },
  {
    slug: 'convex-inventory',
    name: 'Inventory',
    tagline: 'Asset tracking, checkouts, and maintenance',
    description:
      'Track physical assets across locations with checkout/return workflows, condition tracking, and maintenance scheduling. Originally built for studio gear; it exists as code in a production deployment but extraction into a contract-conformant module has not started.',
    category: 'operations',
    status: 'coming-soon',
    icon: 'Package',
    highlights: [
      'Exists in a production deployment; extraction not started',
      'Per-unit checkout tracking',
      'Condition and maintenance history',
      'Photo galleries per item',
      'Multi-location support',
    ],
    delivery: defaultDelivery,
  },
  {
    slug: 'convex-access',
    name: 'Access',
    tagline: 'Granular per-resource sharing',
    description:
      'Email-based allowlists for sharing specific resources with people outside your auth system, for "share this one document with my advisor" cases where role-based access is too coarse. It exists as code in a production deployment but extraction into a contract-conformant module has not started.',
    category: 'utility',
    status: 'coming-soon',
    icon: 'Key',
    highlights: [
      'Exists in a production deployment; extraction not started',
      'Per-resource grants',
      'Email-based allowlists',
      'Expiration and revocation',
      'Audit log',
    ],
    delivery: defaultDelivery,
  },
  {
    slug: 'convex-content',
    name: 'Content',
    tagline: 'Articles, MDX, and Obsidian vault sync',
    description:
      'A content module for publishing markdown/MDX articles, with Obsidian vault sync for writers who prefer their notes app. Planned, not yet built as a contract-conformant module.',
    category: 'content',
    status: 'roadmap',
    icon: 'FileText',
    highlights: [
      'Planned, not yet built as a module',
      'MDX article rendering',
      'Obsidian vault one-way sync',
      'Asset upload and storage',
      'Tag-based categorization',
    ],
    delivery: defaultDelivery,
  },
  {
    slug: 'convex-quiz',
    name: 'Quiz',
    tagline: 'Subject-agnostic question packs and sessions',
    description:
      'Quizzes, trivia, or knowledge-check sessions built from reusable question packs, tracking answers, computing scores, and surfacing analytics. Planned, not yet built as a contract-conformant module.',
    category: 'education',
    status: 'roadmap',
    icon: 'HelpCircle',
    highlights: [
      'Planned, not yet built as a module',
      'Question pack reusability',
      'Multiple question types',
      'Session-based answer tracking',
      'Analytics per question',
    ],
    delivery: defaultDelivery,
  },
  {
    slug: 'convex-clipper',
    name: 'Clipper',
    tagline: 'Save anything from the web',
    description:
      'A universal web clipper: save articles, videos, or any URL with metadata, screenshots, and tags, paired with a browser extension and reading queues. Planned, not yet built as a contract-conformant module.',
    category: 'personal',
    status: 'roadmap',
    icon: 'Bookmark',
    highlights: [
      'Planned, not yet built as a module',
      'Browser extension support',
      'Auto metadata extraction',
      'Read-later queue',
      'Full-text search',
    ],
    delivery: defaultDelivery,
  },
  {
    slug: 'convex-reader',
    name: 'Reader',
    tagline: 'PDF library with bookmarks and highlights',
    description:
      'An e-library for managing PDFs and books with reading positions, bookmarks, highlights, and notes, built for research workflows. Planned, not yet built as a contract-conformant module.',
    category: 'personal',
    status: 'roadmap',
    icon: 'BookOpen',
    highlights: [
      'Planned, not yet built as a module',
      'PDF storage and viewer',
      'Per-user reading position',
      'Highlights and annotations',
      'Search across library',
    ],
    delivery: defaultDelivery,
  },
];

export const statusLabels: Record<ModuleStatus, string> = {
  live: 'Live',
  beta: 'In production',
  'coming-soon': 'Extraction pending',
  roadmap: 'Roadmap',
};

export const statusClasses: Record<ModuleStatus, string> = {
  live: 'bg-green-500/15 text-green-400 border-green-500/30',
  beta: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
  'coming-soon': 'bg-neutral-500/15 text-neutral-400 border-neutral-500/30',
  roadmap: 'bg-transparent text-neutral-400 border-neutral-700',
};

export const categoryLabels: Record<ModuleCategory, string> = {
  communication: 'Communication',
  project: 'Project Mgmt',
  education: 'Education',
  operations: 'Operations',
  content: 'Content',
  personal: 'Personal',
  utility: 'Utility',
};
