import type { Tutorial } from './types'

export const TUTORIALS_EN: Tutorial[] = [
  {
    slug: 'getting-started',
    title: 'Getting Started',
    description: 'Create your CueQuote account and send your first AI-powered AV proposal in under 10 minutes.',
    duration: '5 min',
    difficulty: 'beginner',
    category: 'Basics',
    whatYouLearn: [
      'How to create your CueQuote account',
      'Setting up your company profile and branding',
      'Creating your first AI-generated proposal',
      'Downloading a professional PDF',
    ],
    steps: [
      {
        title: 'Sign up for CueQuote',
        content: 'Go to app.cuequote.com and click "Create account". Enter your full name, email address, and a password (minimum 8 characters). You\'ll receive a confirmation email — click the link to verify your account. The confirmation screen will automatically redirect you once verified.',
        tip: 'Use your work email so clients see a professional sender when you share proposals.',
      },
      {
        title: 'Complete company onboarding',
        content: 'After verifying your email, you\'ll be guided through a 3-step onboarding: Company Details (name, country, address, VAT number), Branding (pick your brand color — this colors your entire PDF), and Currency (your default currency for proposals). Fill in as much as you can — all of this appears on your proposals.',
      },
      {
        title: 'Upload your company logo',
        content: 'Go to Settings from the sidebar. In the Company Profile section, click "Upload" next to the logo placeholder. Upload a PNG, JPG, or SVG file (max 2 MB). Your logo will appear on every proposal PDF and share page, giving your quotes a professional look.',
        tip: 'Use a square logo with a transparent background for the best result on both light and dark PDF templates.',
      },
      {
        title: 'Add equipment to your catalog',
        content: 'Go to Catalog from the sidebar. Click "Add Item" and enter your equipment details: name, category (Audio, Video, Lighting, etc.), default unit (day, piece, set), and default price. When the AI generates proposals, it uses YOUR catalog prices instead of generic estimates. The more items you add, the more accurate your quotes become.',
        tip: 'Start with your 10-20 most commonly quoted items. You can always add more later.',
      },
      {
        title: 'Create your first proposal',
        content: 'Click "New Proposal" in the sidebar or the button on the dashboard. Describe your event in natural language — for example: "Corporate conference for 200 attendees with PA system, 6 lapel mics, 2 handhelds, LED wall 3x2m, and basic stage lighting." Add the event date, venue, and attendee count. Click "Generate Proposal" and watch the AI build your equipment list in real-time.',
      },
      {
        title: 'Review and customize',
        content: 'After generation, review the AI-suggested line items organized by category (Audio, Video, Lighting, Labor, Transport). You can edit quantities, prices, add or remove items, and mark items as optional. Switch to the "Terms & Details" tab to customize inclusions, exclusions, payment terms, and T&C for this specific proposal.',
      },
      {
        title: 'Download your PDF',
        content: 'Click the download icon in the proposal header to generate a professional PDF. Your brand color, logo, company details, and all line items are formatted into a polished multi-page document with cover section, equipment tables, totals, payment schedule, acceptance signature block, and terms & conditions.',
        tip: 'Try different PDF templates (Modern, Bold, Classic, Minimal) in Settings to find the one that matches your brand.',
      },
    ],
  },
  {
    slug: 'ai-proposal-generation',
    title: 'AI Proposal Generation',
    description: 'Learn how CueQuote\'s AI analyzes your event description and generates a complete equipment list with accurate pricing.',
    duration: '4 min',
    difficulty: 'beginner',
    category: 'Proposals',
    whatYouLearn: [
      'How to write effective event descriptions for the AI',
      'How the AI selects equipment based on your catalog',
      'Your monthly AI generation quota and how to avoid wasting it',
      'Understanding the streaming generation process',
      'How event context affects the generated terms',
    ],
    steps: [
      {
        title: 'Start a new proposal',
        content: 'Click "New Proposal" from the sidebar or dashboard. You\'ll enter the 3-step wizard: Describe → Generate → Review. The first step is where you tell the AI about your event.',
      },
      {
        title: 'Write a detailed event description',
        content: 'The more detail you provide, the better the AI\'s output. Include: the type of event (conference, gala, festival), specific equipment requirements (e.g., "6 Sennheiser EW-D lapel microphones"), room size or layout details, and any special requirements (streaming, simultaneous interpretation, outdoor setup). The AI follows AV industry scoping rules — it automatically adds mixing consoles when mics are specified, video switchers for multi-source setups, and truss for overhead lighting.',
        tip: 'You can paste a client\'s brief directly into the description field. The AI extracts what it needs.',
      },
      {
        title: 'Fill in event details',
        content: 'Below the description, set the event date, venue name/city, expected attendees, and duration in days. These details help the AI make smarter decisions — multi-day events get labor multiplied by days, large events (500+ attendees) get additional safety considerations, and the venue helps determine transport requirements.',
      },
      {
        title: 'Select a client',
        content: 'Choose an existing client or skip this step. If you select a client, their type (Direct, Agency, Venue, Corporate) influences the AI-generated payment terms. Agency clients get NET-30 terms automatically, while corporate clients get the standard 50% deposit.',
        tip: 'Creating clients first means their details auto-populate on the PDF — name, contact person, email, phone.',
      },
      {
        title: 'Choose the currency',
        content: 'Select the currency for this proposal from the dropdown (EUR, USD, GBP, PLN, AED, EGP, CHF). This can differ from your company default — useful when quoting international clients.',
      },
      {
        title: 'Confirm before the AI runs',
        content: 'Before CueQuote generates your proposal, it shows a confirmation dialog: "This will use 1 of your X AI proposals this month. You have Y remaining on your <plan> plan." Each plan has a monthly AI quota — Free: 3, Starter: 15, Pro: 50, Business: unlimited. Every generation (including retries) counts against that quota, so double-check your description before confirming. On unlimited plans the dialog is skipped.',
        tip: 'Spending 30 extra seconds tightening your description usually saves a whole slot — the AI rewards specificity, and a wasted generation costs you a full proposal from your monthly cap.',
      },
      {
        title: 'Watch the AI generate',
        content: 'Click "Generate Proposal" and watch the AI stream equipment line items in real-time. Items appear organized by category with quantities, units, and prices. The AI uses your catalog items and prices when available, and suggests market-rate prices for items not in your catalog (marked with estimated pricing). A running total updates as items stream in.',
        tip: 'The AI uses Claude Haiku for simple events (under 50 attendees, single day) and Claude Sonnet for complex ones — optimizing cost without sacrificing quality.',
      },
      {
        title: 'Review the generated proposal',
        content: 'Once generation completes, you\'ll see all line items grouped by category with a full subtotal. The AI also generates smart inclusions (e.g., "Professional setup and teardown"), exclusions (e.g., "Generator rental for outdoor venue"), and suggested payment terms based on the event context. Click "Review & Save" to save the proposal and open the full editor.',
      },
      {
        title: 'Fine-tune in the editor',
        content: 'The editor has two tabs: "Equipment" for line items (edit quantities, prices, add/remove rows) and "Terms & Details" for inclusions, exclusions, payment schedule, and T&C. Everything the AI generated is fully editable — treat it as a smart starting point, not the final product.',
      },
    ],
  },
  {
    slug: 'customizing-pdf-templates',
    title: 'Customizing PDF Templates',
    description: 'Switch between 4 professional PDF styles and apply your brand color for a consistent look across all proposals.',
    duration: '2 min',
    difficulty: 'beginner',
    category: 'Branding',
    whatYouLearn: [
      'The 4 PDF template styles and when to use each',
      'How brand color affects the entire PDF',
      'Previewing templates before sending',
    ],
    steps: [
      {
        title: 'Go to Settings',
        content: 'Click "Settings" in the sidebar to open your company settings page. Scroll down to the "Proposal Branding" section — this is where you control how every PDF looks.',
      },
      {
        title: 'Set your brand color',
        content: 'Click the color picker or type a hex code directly. Your brand color drives the entire PDF design — the accent stripe at the top, section title bars, category badges, total investment highlight, bullet point colors, and the acceptance box border. Choose a color that represents your company.',
        tip: 'Test with a medium-saturation color. Very light colors may not be visible, and very dark colors can look heavy.',
      },
      {
        title: 'Choose a PDF template',
        content: 'Four template cards are shown with mini previews. Modern: light hero with cards and zebra-striped tables — clean and professional. Bold: dark hero section with strong brand color emphasis. Classic: traditional letterhead style with no hero block — formal and understated. Minimal: ultra-clean with thin lines and maximum whitespace.',
      },
      {
        title: 'Understand each template',
        content: 'Modern works for most AV companies — it balances professionalism with visual appeal. Bold is great when your brand color is distinctive and you want to make an impression. Classic suits corporate clients who prefer traditional document formatting. Minimal works well for high-end boutique AV companies.',
      },
      {
        title: 'Save and preview',
        content: 'Click "Save Changes" at the bottom. Then go to any proposal, click the download icon to generate a PDF. Open it to see your template with your brand color applied throughout. Every new proposal will use this template automatically.',
      },
      {
        title: 'Switch templates anytime',
        content: 'You can change templates at any time in Settings. The change applies to all future PDF downloads immediately. Existing shared proposals will use the new template the next time someone views them. This lets you experiment until you find the perfect look.',
        tip: 'Try all 4 templates with a real proposal before deciding. The mini previews give a hint, but seeing a full PDF is the best way to choose.',
      },
    ],
  },
  {
    slug: 'managing-equipment-catalog',
    title: 'Managing Your Equipment Catalog',
    description: 'Build your equipment database so the AI generates accurate proposals with your real prices.',
    duration: '5 min',
    difficulty: 'intermediate',
    category: 'Setup',
    whatYouLearn: [
      'How to add and organize equipment items',
      'Understanding equipment categories',
      'How the catalog powers AI-generated proposals',
      'Bulk importing from spreadsheets',
    ],
    steps: [
      {
        title: 'Navigate to the Catalog',
        content: 'Click "Catalog" in the sidebar. You\'ll see your equipment list organized by category. If you\'re just starting, it will be empty — that\'s normal. The catalog is your company\'s equipment database that the AI uses when generating proposals.',
      },
      {
        title: 'Add your first item',
        content: 'Click "Add Item" (or the "+" button). Fill in the item name (e.g., "Sennheiser EW-D Lapel Microphone"), select a category (Audio), choose the default unit (pcs, day, set, sqm, meter, event, trip), and enter your default rental price. This is the price the AI will use when it includes this item in a proposal.',
        tip: 'Use specific model names. "Sennheiser EW-D Lapel" is better than "Wireless Mic" — it shows clients you have quality gear.',
      },
      {
        title: 'Understand categories',
        content: 'CueQuote has 10 equipment categories: Audio, Video, Lighting, Simultaneous Interpretation, Streaming, Digital Signage, Staging, Labor, Transport, and Other. Categories determine how items are grouped in proposals and PDFs. The AI uses category-specific scoping rules — for example, it automatically adds a mixing console when microphones are in the Audio category.',
      },
      {
        title: 'Set accurate default prices',
        content: 'Default prices should reflect your standard rental rates. When the AI generates a proposal, it matches items from your catalog by name and uses your prices. Items not found in your catalog get estimated market-rate prices. The more items you add with accurate prices, the less editing you need after AI generation.',
      },
      {
        title: 'Import from a spreadsheet',
        content: 'For bulk importing, click the import button and upload an XLSX file. Your spreadsheet should have columns for: name, category, unit, and price. This is the fastest way to populate your catalog if you already have an equipment list in Excel or Google Sheets.',
      },
      {
        title: 'Manage active items',
        content: 'Each item has an active/inactive toggle. Deactivating an item keeps it in your database but hides it from the AI during proposal generation. Use this for seasonal equipment or items temporarily unavailable. You can reactivate anytime.',
      },
      {
        title: 'How the catalog feeds AI generation',
        content: 'When you create a proposal, the AI receives your entire active catalog as context. It matches equipment from the event description to your catalog items, using your exact names and prices. If the event requires something not in your catalog, the AI adds it with a [CUSTOM] prefix and an estimated price — you can then update the price manually.',
        tip: 'A catalog with 50-100 items covers most AV needs. Start with your core gear and expand over time.',
      },
    ],
  },
  {
    slug: 'client-management',
    title: 'Client Management',
    description: 'Add and organize your clients so proposals are automatically personalized with their details.',
    duration: '3 min',
    difficulty: 'beginner',
    category: 'Basics',
    whatYouLearn: [
      'Adding and editing client profiles',
      'How client types affect AI-generated terms',
      'Linking clients to proposals',
    ],
    steps: [
      {
        title: 'Go to Clients',
        content: 'Click "Clients" in the sidebar. This page shows all your clients in a searchable list. Each client card shows their name, contact person, email, type, and how many proposals you\'ve sent them.',
      },
      {
        title: 'Add a new client',
        content: 'Click "Add Client" and fill in: client/company name, contact person name, email address, phone number, and any notes. All of this information appears on the proposal PDF in the "Prepared For" section — so make sure it\'s accurate.',
      },
      {
        title: 'Choose the right client type',
        content: 'Select one of four types: Direct (end clients booking your services directly), Agency (event agencies who manage the client relationship), Venue (hotels or venues with in-house AV needs), or Corporate (companies with recurring event programs). Client type is not just a label — it affects how the AI generates payment terms.',
        tip: 'Agency clients automatically get NET-30 payment terms (0% deposit, 30-day balance) because agencies typically pay on invoice. Corporate clients get the standard 50% deposit.',
      },
      {
        title: 'Link clients to proposals',
        content: 'When creating a new proposal, you can select an existing client from the dropdown. The client\'s name, contact person, email, and phone will appear on the PDF cover and in the "Prepared For" section. You can also create a new client directly from the proposal creation flow.',
      },
      {
        title: 'View client proposal history',
        content: 'Click on any client to see all proposals associated with them. This gives you a quick overview of your relationship — how many proposals sent, their statuses (draft, sent, won, lost), and total value. Useful when a returning client asks for a new quote.',
      },
      {
        title: 'Edit client details',
        content: 'Click the edit button on any client card to update their information. Changes apply to all future proposals — existing proposals keep the details they had at the time of creation. This ensures your sent proposals remain accurate even if client contact info changes.',
      },
    ],
  },
  {
    slug: 'terms-details-editor',
    title: 'Terms & Details Editor',
    description: 'Customize inclusions, exclusions, payment terms, and T&C for each proposal individually.',
    duration: '4 min',
    difficulty: 'intermediate',
    category: 'Proposals',
    whatYouLearn: [
      'Editing per-proposal inclusions and exclusions',
      'Setting custom payment terms',
      'Managing T&C sections',
      'Using smart warnings to avoid mistakes',
    ],
    steps: [
      {
        title: 'Open the Terms tab',
        content: 'Open any proposal in the editor. You\'ll see two tabs below the header: "Equipment" (the default, showing line items) and "Terms & Details". Click "Terms & Details" to access the terms editor. Each section is pre-filled by the AI based on your event description, or from your company defaults if no AI terms were generated.',
      },
      {
        title: 'Edit inclusions',
        content: 'The "What\'s Included" section lists everything covered by your proposal. Each item is a text input — edit directly by clicking. Remove items with the X button, add new ones with "+ Add inclusion". Common inclusions: equipment listed above, professional setup and teardown, on-site technical support, equipment insurance.',
      },
      {
        title: 'Edit exclusions',
        content: 'The "What\'s Not Included" section clarifies what\'s outside scope. This prevents disputes later. Common exclusions: venue fees and permits, power connections beyond standard, content creation (graphics, video), changes requested less than 48 hours before event. The AI adds context-specific exclusions — outdoor events get "Generator rental", international events get "Customs and import duties".',
        tip: 'Clear exclusions are as important as inclusions. They protect you from scope creep and set correct client expectations.',
      },
      {
        title: 'Set payment terms',
        content: 'Two fields control your payment schedule: Deposit % (0-100) and Balance due (days before event). A preview line shows exactly what the PDF will say: "50% deposit on acceptance, 50% balance due 7 days before event". The AI sets these based on client type — agencies get 0% deposit with 30-day terms.',
      },
      {
        title: 'Edit Terms & Conditions',
        content: 'The T&C section is an accordion — click any section title to expand and edit. Default sections include Validity, Payment Terms, Cancellation Policy, Equipment & Damages, and Availability. You can edit the title and full text of each section, add new sections, or remove ones you don\'t need.',
      },
      {
        title: 'Use the {company_name} placeholder',
        content: 'In T&C text, type {company_name} and it will be automatically replaced with your actual company name in the PDF. For example: "All equipment remains the property of {company_name}" becomes "All equipment remains the property of AVE Events" in the generated PDF.',
      },
      {
        title: 'Reset to company defaults',
        content: 'Each section has a "Reset to defaults" link in its header. Clicking it restores that section to your company-wide defaults (set in Settings → Proposal Defaults). This is useful when you\'ve customized terms for one client but want to start fresh for another.',
      },
      {
        title: 'Watch for smart warnings',
        content: 'Yellow warning banners appear at the top of the Terms tab when something might need attention. Warnings include: 0% deposit on proposals over 5,000 (risky), empty inclusions (may cause disputes), missing T&C (unprofessional), and venue location differing from your company address (consider international terms). These are informational — you can dismiss them if they don\'t apply.',
      },
    ],
  },
  {
    slug: 'sharing-tracking-proposals',
    title: 'Sharing & Tracking Proposals',
    description: 'Send proposals to clients and track when they view, accept, or decline.',
    duration: '3 min',
    difficulty: 'beginner',
    category: 'Proposals',
    whatYouLearn: [
      'Sending proposals via email',
      'Sharing via link',
      'Tracking client engagement',
      'How clients accept or decline',
    ],
    steps: [
      {
        title: 'Open the Send dialog',
        content: 'From the proposal editor, click the green "Send" button in the top-right corner. A modal opens where you can compose the email that accompanies your proposal. If a client is linked, their email is pre-filled.',
      },
      {
        title: 'Write a personal message',
        content: 'Add a personal note that will appear in the email body — for example, "Hi Jake, here\'s the AV proposal for the Warsaw conference. Happy to adjust anything." This personal touch makes a big difference compared to sending a bare link. The email includes your company logo, proposal title, event details, total price, and a prominent "View Proposal" button.',
      },
      {
        title: 'Send or copy link',
        content: 'Click "Send" to deliver the email, or click the link icon to copy the share URL. The share link works without login — anyone with the link can view the proposal. Use the copy link option for WhatsApp, Slack, or other messaging channels.',
        tip: 'The proposal status changes to "Sent" automatically when you send via email.',
      },
      {
        title: 'Track when clients view',
        content: 'Back on the dashboard and proposals list, you\'ll see status updates. When a client opens your proposal, the status changes to "Viewed" and you can see the first viewed date, last viewed date, and total view count. This tells you if your proposal is being actively reviewed.',
      },
      {
        title: 'Client reviews the proposal',
        content: 'The share page shows a professional, branded view of your proposal: company header, event details, all equipment by category with pricing, totals, inclusions/exclusions, payment terms, and a notes section. It\'s designed to look like a formal business document, not a simple quote.',
      },
      {
        title: 'Client accepts or declines',
        content: 'At the bottom of the share page, the client sees "Accept Proposal" and "Decline" buttons. When they click Accept, the proposal status updates to "Won" in your dashboard. If they decline, it becomes "Lost". You\'re notified of either response, and the status is visible on the proposals list.',
      },
      {
        title: 'Download the PDF anytime',
        content: 'Click the download icon in the proposal header to generate the PDF. The PDF includes everything: cover section with company branding, scope of work, equipment tables by category, totals card, inclusions/exclusions, payment schedule, signature block, and full T&C. Share the PDF as an attachment or print it for in-person meetings.',
      },
    ],
  },
  {
    slug: 'billing-subscription',
    title: 'Billing & Subscription',
    description: 'Understand CueQuote\'s plans, upgrade your account, and manage your billing.',
    duration: '3 min',
    difficulty: 'intermediate',
    category: 'Account',
    whatYouLearn: [
      'Comparing the 4 subscription plans',
      'How to upgrade with a free trial',
      'Managing payment methods and invoices',
      'Credit packs for pay-as-you-go',
    ],
    steps: [
      {
        title: 'Go to Billing',
        content: 'Click "Billing" in the sidebar. The billing page shows your current plan, proposals used this month, and all available plans. If you\'re on the Free plan, you can create 3 proposals per month.',
      },
      {
        title: 'Compare plans',
        content: 'Four plans are available: Free (3 proposals/month, basic PDF), Starter at 39 per month (15 proposals, full branding, client management), Pro at 99 per month (50 proposals, custom templates, analytics), and Business at 199 per month (unlimited proposals, API access, dedicated support). Toggle between monthly and annual billing — annual saves 20%.',
      },
      {
        title: 'Upgrade to a paid plan',
        content: 'Click "Start 3-day Trial" on any paid plan. You\'ll be redirected to Stripe Checkout where you enter your payment details. All paid plans include a 3-day free trial — you won\'t be charged until the trial ends. You can cancel anytime during the trial at no cost.',
        tip: 'You\'ll receive a confirmation email with your plan details and features after upgrading.',
      },
      {
        title: 'Manage your subscription',
        content: 'Once subscribed, click "Manage Billing" to access the Stripe Customer Portal. Here you can update your payment method, view and download past invoices, switch between plans, or cancel your subscription. All changes take effect at the end of your current billing cycle.',
      },
      {
        title: 'Download invoices',
        content: 'In the Stripe portal, click on any past payment to view and download the invoice PDF. Invoices include your company name, address, VAT number, and payment details — ready for your accounting department.',
      },
      {
        title: 'Buy credit packs',
        content: 'Don\'t want a monthly subscription? Buy proposal credits instead. A 3-pack costs 19 (6.33 each) and a 10-pack costs 49 (4.90 each). Credits never expire and include all premium features like branded PDFs. Great for companies that quote seasonally.',
      },
      {
        title: 'Monitor your usage',
        content: 'The billing page shows how many proposals you\'ve used this month. The proposal counter resets on your billing date. If you hit your limit, you can either upgrade to a higher plan or buy a credit pack to continue creating proposals.',
      },
    ],
  },
]
