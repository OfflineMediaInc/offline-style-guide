// Icon Mappings
// Consistent icon usage from lucide-react

export const iconMappings = {
  /** Action icons - for buttons and interactive elements */
  actions: {
    edit: "Pencil",
    delete: "Trash2",
    add: "Plus",
    create: "Plus",
    close: "X",
    cancel: "X",
    menu: "MoreVertical",
    menuHorizontal: "MoreHorizontal",
    settings: "Settings",
    copy: "Copy",
    duplicate: "Copy",
    download: "Download",
    upload: "Upload",
    refresh: "RefreshCw",
    save: "Save",
    send: "Send",
    search: "Search",
    filter: "Filter",
    sort: "ArrowUpDown",
    archive: "Archive",
    restore: "ArchiveRestore",
    undo: "Undo2",
    redo: "Redo2",
    print: "Printer",
    export: "FileDown",
    import: "FileUp",
  },

  /** Navigation icons */
  navigation: {
    back: "ArrowLeft",
    forward: "ArrowRight",
    up: "ArrowUp",
    down: "ArrowDown",
    external: "ExternalLink",
    expand: "ChevronDown",
    collapse: "ChevronUp",
    chevronLeft: "ChevronLeft",
    chevronRight: "ChevronRight",
    home: "Home",
    menu: "Menu",
    sidebar: "PanelLeft",
    grid: "LayoutGrid",
    list: "List",
  },

  /** Status icons */
  status: {
    success: "CheckCircle",
    check: "Check",
    warning: "AlertTriangle",
    error: "AlertCircle",
    info: "Info",
    loading: "Loader2",
    pending: "Clock",
    scheduled: "CalendarClock",
    draft: "FileEdit",
    active: "CircleDot",
    inactive: "Circle",
    verified: "BadgeCheck",
    locked: "Lock",
    unlocked: "Unlock",
    visible: "Eye",
    hidden: "EyeOff",
  },

  /** Domain-specific icons */
  domain: {
    calendar: "Calendar",
    date: "Calendar",
    time: "Clock",
    location: "MapPin",
    address: "MapPin",
    team: "Users",
    user: "User",
    profile: "UserCircle",
    email: "Mail",
    phone: "Phone",
    money: "DollarSign",
    payment: "CreditCard",
    invoice: "Receipt",
    rating: "Star",
    favorite: "Heart",
    bookmark: "Bookmark",
    share: "Share2",
    link: "Link",
    attachment: "Paperclip",
    image: "Image",
    file: "File",
    folder: "Folder",
    document: "FileText",
    chart: "BarChart3",
    analytics: "TrendingUp",
    dashboard: "LayoutDashboard",
    notification: "Bell",
    message: "MessageSquare",
    comment: "MessageCircle",
    tag: "Tag",
    category: "Folder",
    partner: "Building2",
    company: "Building",
    store: "Store",
    product: "Package",
    inventory: "Boxes",
    order: "ShoppingCart",
    offer: "Ticket",
    event: "CalendarDays",
    campaign: "Megaphone",
  },

  /** Form icons */
  form: {
    required: "Asterisk",
    optional: "Circle",
    help: "HelpCircle",
    clear: "XCircle",
    show: "Eye",
    hide: "EyeOff",
    increment: "Plus",
    decrement: "Minus",
  },

  /** Empty state icons */
  emptyStates: {
    noData: "Inbox",
    noResults: "SearchX",
    noItems: "PackageOpen",
    noContent: "FileX",
    noAccess: "ShieldX",
    error: "AlertOctagon",
    maintenance: "Wrench",
    construction: "Construction",
  },
} as const;

// Helper to get icon name by category and key
export const getIcon = (
  category: keyof typeof iconMappings,
  key: string
): string | undefined => {
  const categoryIcons = iconMappings[category];
  return (categoryIcons as Record<string, string>)[key];
};

export type IconMappings = typeof iconMappings;
