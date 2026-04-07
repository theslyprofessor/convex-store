export type ModuleCategory =
  | 'communication'
  | 'project'
  | 'education'
  | 'operations'
  | 'content'
  | 'personal'
  | 'utility';

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
}

export const modules: Module[] = [
  {
    slug: 'convex-mail',
    name: 'Mail',
    tagline: 'Inbox, helpdesk, and transactional email',
    description:
      'A complete email module with inbox threading, contact management, transactional sending, and bulk campaigns. Pluggable SMTP adapters (SES, Resend, Gmail, generic SMTP) let you choose your provider without rewriting code.',
    category: 'communication',
    status: 'beta',
    icon: 'Mail',
    highlights: [
      '8 reactive Convex tables',
      'Inbox threading with In-Reply-To matching',
      'Pluggable SMTP adapters (SES, Resend, Gmail)',
      'Bulk campaign orchestration',
      'Auto contact management',
    ],
  },
  {
    slug: 'convex-tasks',
    name: 'Tasks',
    tagline: 'Issues, projects, and bug reports — composed',
    description:
      'A task and issue management module that replaces standalone tools like Linear and Jira. Polymorphic issues (task / bug / feature / equipment / support) with inline list editing, projects, sprints, and entity linking to any other table in your app.',
    category: 'project',
    status: 'beta',
    icon: 'ListChecks',
    highlights: [
      'Polymorphic issues with type discriminator',
      'NocoDB-style inline list editing',
      'Auto context capture for bug reports',
      'Comments thread per issue',
      'Entity linking across modules',
    ],
  },
  {
    slug: 'convex-inventory',
    name: 'Inventory',
    tagline: 'Asset tracking, checkouts, and maintenance',
    description:
      'Track physical assets across locations. Checkout/return workflows, condition tracking, maintenance scheduling, and equipment lifecycle management. Originally built for studio gear, now generalizes to any organizational asset.',
    category: 'operations',
    status: 'coming-soon',
    icon: 'Package',
    highlights: [
      'Per-unit checkout tracking',
      'Condition + maintenance history',
      'Photo galleries per item',
      'Power supply tracking (often missing!)',
      'Multi-location support',
    ],
  },
  {
    slug: 'convex-lms',
    name: 'LMS',
    tagline: 'Courses, students, grades, and attendance',
    description:
      'A learning management system module — courses, enrollments, assignments, quizzes, attendance tracking, and grade computation. Built for institutions that need integrated education tooling without the bloat of Canvas or Moodle.',
    category: 'education',
    status: 'coming-soon',
    icon: 'GraduationCap',
    highlights: [
      'Cross-listed course support',
      'Attendance + late tracking',
      'Grade categories with drop-lowest',
      'Assignment submissions',
      'Discussion threads',
    ],
  },
  {
    slug: 'convex-booking',
    name: 'Booking',
    tagline: 'Resource scheduling without the conflicts',
    description:
      'Schedule rooms, equipment, or any resource with conflict detection, recurring bookings, and Google Calendar sync. Built for studios; adapts to any space-or-resource scheduling problem.',
    category: 'operations',
    status: 'coming-soon',
    icon: 'Calendar',
    highlights: [
      'Per-resource booking calendar',
      'Conflict detection',
      'Google Calendar sync',
      'Recurring booking support',
      'Multi-resource booking',
    ],
  },
  {
    slug: 'convex-content',
    name: 'Content',
    tagline: 'Articles, MDX, and Obsidian vault sync',
    description:
      'A content management module for publishing markdown/MDX articles. Includes Obsidian vault sync for writers who prefer their notes app, with hierarchy preservation and asset upload.',
    category: 'content',
    status: 'roadmap',
    icon: 'FileText',
    highlights: [
      'MDX article rendering',
      'Obsidian vault one-way sync',
      'Asset upload + storage',
      'Article visibility (public/private/family)',
      'Tag-based categorization',
    ],
  },
  {
    slug: 'convex-access',
    name: 'Access',
    tagline: 'Granular per-resource sharing',
    description:
      'Email-based allowlists for sharing specific resources with people outside your auth system. Perfect for "share this one document with my advisor" scenarios where role-based access is too coarse.',
    category: 'utility',
    status: 'coming-soon',
    icon: 'Key',
    highlights: [
      'Per-resource grants',
      'Email-based allowlists',
      'Expiration + revocation',
      'CLI grant management',
      'Audit log',
    ],
  },
  {
    slug: 'convex-quiz',
    name: 'Quiz',
    tagline: 'Subject-agnostic question packs and sessions',
    description:
      'Build quizzes, trivia games, or knowledge-check sessions with reusable question packs. Tracks individual answers, computes scores, and surfaces analytics. Domain-neutral — drop it into any app that needs assessment.',
    category: 'education',
    status: 'roadmap',
    icon: 'HelpCircle',
    highlights: [
      'Question pack reusability',
      'Multiple question types',
      'Session-based answer tracking',
      'Score computation',
      'Analytics per question',
    ],
  },
  {
    slug: 'convex-clipper',
    name: 'Clipper',
    tagline: 'Save anything from the web',
    description:
      'A universal web clipper module — save articles, videos, tweets, or any URL with metadata, screenshots, and tags. Works with a browser extension and pairs with reading queues.',
    category: 'personal',
    status: 'roadmap',
    icon: 'Bookmark',
    highlights: [
      'Browser extension support',
      'Auto metadata extraction',
      'Tag-based organization',
      'Read-later queue',
      'Full-text search',
    ],
  },
  {
    slug: 'convex-reader',
    name: 'Reader',
    tagline: 'PDF library with bookmarks and highlights',
    description:
      'An e-library module for managing PDFs and books with reading positions, bookmarks, highlights, and notes. Built for research workflows.',
    category: 'personal',
    status: 'roadmap',
    icon: 'BookOpen',
    highlights: [
      'PDF storage + viewer',
      'Per-user reading position',
      'Highlights + annotations',
      'Collection organization',
      'Search across library',
    ],
  },
];

export const statusLabels: Record<ModuleStatus, string> = {
  live: 'Live',
  beta: 'Beta',
  'coming-soon': 'Coming Soon',
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
