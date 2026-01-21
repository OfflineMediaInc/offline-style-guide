// Badge Mappings
// Status to badge variant mappings

export const badgeMappings = {
  /** Status badge variants */
  status: {
    // Positive states
    active: "success",
    live: "success",
    complete: "success",
    completed: "success",
    approved: "success",
    verified: "success",
    published: "success",
    online: "success",

    // Pending/in-progress states
    pending: "warning",
    pendingReview: "warning",
    inReview: "warning",
    processing: "warning",
    scheduled: "warning",

    // Neutral/draft states
    draft: "secondary",
    inProgress: "secondary",
    paused: "secondary",
    inactive: "secondary",
    offline: "secondary",

    // Negative states
    error: "destructive",
    failed: "destructive",
    cancelled: "destructive",
    rejected: "destructive",
    expired: "destructive",
    overdue: "destructive",

    // Past/archived states
    archived: "outline",
    closed: "outline",
    ended: "outline",
    past: "outline",
  },

  /** Generic tag styling */
  tags: "outline",

  /** Premium/VIP styling (use CSS class, not Badge component) */
  premium: {
    className: "badge-premium",
    note: "Use badge-premium CSS class, not Badge component variant",
  },

  /** Badge with shadow for floating effect */
  floating: {
    additionalClass: "shadow-tag",
    note: "Add shadow-tag class to Badge for floating effect",
  },
} as const;

// Helper to get badge variant for a status
export const getBadgeVariant = (status: string): string => {
  const normalizedStatus = status.toLowerCase().replace(/[\s-_]/g, "");
  const statusMap = badgeMappings.status as Record<string, string>;

  // Try exact match first
  if (statusMap[normalizedStatus]) {
    return statusMap[normalizedStatus];
  }

  // Try partial matches
  for (const [key, variant] of Object.entries(statusMap)) {
    if (normalizedStatus.includes(key.toLowerCase())) {
      return variant;
    }
  }

  // Default to secondary for unknown statuses
  return "secondary";
};

// Status to badge text mappings (for consistent labeling)
export const statusLabels: Record<string, string> = {
  active: "Active",
  live: "Live",
  complete: "Complete",
  completed: "Completed",
  approved: "Approved",
  verified: "Verified",
  published: "Published",
  online: "Online",
  pending: "Pending",
  pendingReview: "Pending Review",
  inReview: "In Review",
  processing: "Processing",
  scheduled: "Scheduled",
  draft: "Draft",
  inProgress: "In Progress",
  paused: "Paused",
  inactive: "Inactive",
  offline: "Offline",
  error: "Error",
  failed: "Failed",
  cancelled: "Cancelled",
  rejected: "Rejected",
  expired: "Expired",
  overdue: "Overdue",
  archived: "Archived",
  closed: "Closed",
  ended: "Ended",
  past: "Past",
};

export type BadgeMappings = typeof badgeMappings;
