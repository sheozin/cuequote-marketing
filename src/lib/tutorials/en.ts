import type { Tutorial } from './types'

export const TUTORIALS_EN: Tutorial[] = [
  {
    slug: 'getting-started',
    title: 'Getting Started',
    description: 'Create your CueQuote account and send your first AI-powered AV proposal in under 10 minutes.',
    duration: '5 min',
    difficulty: 'beginner',
    category: 'Basics',
    mode: 'both',
    videoUrl: '/videos/cuequote-walkthrough-master.mp4',
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
    mode: 'both',
    videoUrl: '/videos/getting-started.mp4',
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
        title: 'Attach requirement files',
        content: 'Upload PDF technical riders, Excel equipment lists, Word event briefs, or venue floor plan images alongside your event description. CueQuote extracts the text and feeds it to the AI as additional context, producing more accurate proposals.',
        tip: 'Combine a short written description with an attached rider for best results — the AI merges both sources.',
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
    mode: 'both',
    videoUrl: '/videos/pdf-templates.mp4',
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
    mode: 'av',
    videoUrl: '/videos/getting-started.mp4',
    whatYouLearn: [
      'How to add and organize equipment items',
      'Understanding equipment categories',
      'How the catalog powers AI-generated proposals',
      'Tracking cost prices and margins for sub-hired equipment',
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
        title: 'Track costs and margins',
        content: 'For items you sub-hire from other suppliers, add your cost price in the catalog. The proposal editor shows an internal margin panel with Revenue, Cost, Profit, and Margin % — never visible to clients. Leave cost empty for your own equipment.',
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
    mode: 'both',
    videoUrl: '/videos/client-management.mp4',
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
    mode: 'both',
    videoUrl: '/videos/sharing-and-tracking.mp4',
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
        title: 'Setup & strike day pricing',
        content: 'Configure how equipment is charged on setup and strike days. Choose 0% (free), 50% (half rate), or 100% (full rate) in Settings. Each proposal can override the default. Labor is always full rate for all days.',
        tip: 'Most AV companies charge 50% for setup/strike days — clients expect it, and it covers your gear being tied up without full show usage.',
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
    mode: 'both',
    videoUrl: '/videos/sharing-and-tracking.mp4',
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
        title: 'Personalized greeting — auto-filled',
        content: 'CueQuote automatically fills in a personalized greeting addressed to your client by name, referencing the proposal title. It tells the client to review and respond using the link, and signs off with your company name. You can edit or clear this message before sending. The email also includes your company logo, proposal details, total price, and a prominent "View Proposal" button.',
        tip: 'Make sure your client records have a contact name for the best personalization. You can always tweak the message before hitting Send.',
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
        title: 'E-signature on acceptance',
        content: 'When accepting, clients draw their signature on a canvas, type their full name, and confirm they agree to the terms. The drawn signature, timestamp, and device info are stored as legal proof and appear on the downloaded PDF.',
      },
      {
        title: 'Track client engagement',
        content: 'After a client views your proposal, the proposal editor shows an analytics panel with total time spent, scroll depth, visits, PDF downloads, and time per section breakdown. Use these insights to follow up effectively.',
      },
      {
        title: 'Download the PDF anytime',
        content: 'Click the download icon in the proposal header to generate the PDF. The PDF includes everything: cover section with company branding, scope of work, equipment tables by category, totals card, inclusions/exclusions, payment schedule, signature block, and full T&C. Share the PDF as an attachment or print it for in-person meetings.',
      },
      {
        title: 'Risk assessment plan',
        content: 'Generate an AI-powered risk assessment for your event from the Risk Plan tab. The AI analyzes your equipment, venue, and attendee count to identify risks and mitigation plans across 8 categories: equipment failure, power outage, network, interpretation, weather, crew, timeline, and security. Starter plans get 3 basic categories; Pro unlocks all 8 with editing and PDF inclusion.',
      },
      {
        title: 'Regenerate proposals',
        content: 'Need to update a proposal? Use Regenerate from the More menu instead of creating a new one. Choose Full (replace all items), Smart (keep your edits), or From File (upload an updated spec). Your client, dates, venue, and terms are preserved. Regenerating does not count against your monthly proposal quota.',
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
    mode: 'both',
    videoUrl: '/videos/billing-and-subscriptions.mp4',
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
        content: 'Four plans are available: Free (3 proposals/month, basic PDF), Starter at 29 per month (10 proposals, full branding, client management), Pro at 79 per month (40 proposals, custom templates, analytics), and Business at 179 per month (120 proposals, API access, dedicated support). Toggle between monthly and annual billing — annual saves 20%.',
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
  {
    slug: 'client-portal',
    title: 'Client Portal',
    description: 'Give your clients a dedicated login to view all their proposals and invoices.',
    duration: '2 min',
    difficulty: 'intermediate',
    category: 'Proposals',
    mode: 'both',
    videoUrl: '/videos/client-portal.mp4',
    whatYouLearn: [
      'How clients register for the portal',
      'What clients see in their portal dashboard',
      'Managing client access and permissions',
      'Revoking client access when needed',
    ],
    steps: [
      {
        title: 'Client registration flow',
        content: 'When you send a proposal, the client receives an invitation to create a portal account. They click the link in the email, set a password, and gain access to their personal dashboard. If a client already has an account, the new proposal appears automatically.',
      },
      {
        title: 'What clients see',
        content: 'Inside the portal, clients see a dashboard listing all proposals and invoices you\'ve shared with them. Each entry shows the title, date, status, and total amount. Clients can open any proposal to review it, accept or decline, download the PDF, and view invoices — all from one place.',
      },
      {
        title: 'Managing client access',
        content: 'In your CueQuote dashboard, go to Clients and select a client to see their portal status. You can resend the invitation, reset their password, or revoke access entirely. Revoking access disables their login immediately — they can no longer view proposals or invoices until you restore access.',
      },
    ],
  },
  {
    slug: 'invoice-payments-corrections',
    title: 'Invoice Payments & Corrections',
    description: 'Record partial payments, track payment history, issue corrective invoices, and manage invoice status.',
    duration: '4 min',
    difficulty: 'intermediate',
    category: 'Invoices',
    mode: 'both',
    videoUrl: '/videos/invoice-payments.mp4',
    whatYouLearn: [
      'Recording full and partial payments on invoices',
      'Viewing payment history and reverting paid status',
      'Issuing corrective invoices with before/after tracking',
      'Changing invoice status manually',
    ],
    steps: [
      {
        title: 'Record a payment',
        content: 'Open any invoice and look at the Summary sidebar on the right. Below "Amount Due", click the green "Record Payment" button. Enter the amount received, select the date, choose a payment method (bank transfer, cash, card, check, or other), and optionally add a reference number. Click "Save Payment" — the invoice automatically updates to "partial" status if the amount is less than the total, or "paid" if fully covered.',
        tip: 'You can record multiple partial payments over time. Each one is tracked separately in the Payment History section below the notes.',
      },
      {
        title: 'View payment history',
        content: 'Scroll down below the Notes section to see the Payment History card. Each recorded payment shows the amount, date, payment method badge, and reference notes. The total of all payments is displayed at the bottom. You can delete individual payment records if entered incorrectly — click the trash icon next to any payment.',
      },
      {
        title: 'Revert a paid invoice',
        content: 'If you accidentally marked an invoice as paid, look at the Summary sidebar — below the green "Paid" badge, there\'s an "Undo — mark as unpaid" link. Click it and confirm. The invoice will revert to its correct status based on actual recorded payments: "partial" if some payments exist, "sent" if it was previously sent, or "draft" otherwise.',
      },
      {
        title: 'Change invoice status',
        content: 'Click the colored status badge next to the invoice number (e.g., "Draft", "Sent"). A dropdown appears with all available statuses: Draft, Sent, Viewed, Partial, Paid, Overdue, and Cancelled. Select the new status — it saves immediately. When you change to "Sent", the sent timestamp is recorded automatically.',
        tip: 'Use this to manually mark invoices as "Overdue" or to revert a status if needed.',
      },
      {
        title: 'Issue a corrective invoice',
        content: 'For invoices that have already been sent or paid and need corrections, click the correction icon (circular arrow) in the header toolbar. Confirm the action — a new corrective invoice is created with a "/COR" suffix (e.g., INV-0006/COR). All line items are copied from the original with their original values stored as a snapshot.',
      },
      {
        title: 'Edit the correction',
        content: 'On the corrective invoice, edit the items that need correcting — change quantities, prices, or add/remove items. Modified items automatically show the original total with a strikethrough next to the new total, so the client can see exactly what changed. Fill in the "Reason for Correction" field to explain why the invoice was adjusted (e.g., "Price adjusted per client agreement"). Send the corrective invoice to the client.',
        tip: 'The original invoice stays untouched with a banner linking to the correction. The corrective invoice has a banner linking back to the original — full audit trail.',
      },
    ],
  },
  {
    slug: 'invoicing',
    title: 'Creating Invoices',
    description: 'Generate professional invoices from your accepted proposals with your payment details and send them to clients.',
    duration: '4 min',
    difficulty: 'intermediate',
    category: 'Invoices',
    mode: 'both',
    videoUrl: '/videos/invoicing.mp4',
    whatYouLearn: [
      'How to create invoices from proposals',
      'Setting up your payment methods (bank, PayPal)',
      'Sending invoices and tracking payments',
      'Deposit vs full invoices',
      'Setup & strike day pricing',
    ],
    steps: [
      {
        title: 'Add your payment methods',
        content: 'Go to Settings → Payments tab. Click "Add Payment Method" and enter your bank details (account name, bank, IBAN, SWIFT) or PayPal email. These details will appear on every invoice you send. You can add multiple methods and set one as default.',
        tip: 'Add at least one bank account — most B2B clients prefer bank transfer for AV equipment payments.',
      },
      {
        title: 'Create an invoice from a proposal',
        content: 'Open any proposal that has been sent or accepted. Click the "Create Invoice" button in the header. You\'ll be asked to choose between a Deposit Invoice (based on your deposit percentage) or a Full Invoice (100% of the total). CueQuote copies all line items, client details, and pricing from the proposal.',
      },
      {
        title: 'Review and customize the invoice',
        content: 'The invoice editor opens with pre-filled data from the proposal. Review the invoice number (auto-generated as INV-0001, INV-0002...), issue date, due date, and line items. You can edit any field, add or remove items, and adjust quantities or prices.',
      },
      {
        title: 'Select a payment method',
        content: 'Choose which payment method to display on the invoice from the dropdown. The selected method\'s details (IBAN, SWIFT, etc.) will appear in the "Payment Instructions" section of the invoice PDF, along with the invoice number as reference.',
      },
      {
        title: 'Download the invoice PDF',
        content: 'Click the download button to generate a professional invoice PDF. It includes your company branding, a formal "INVOICE" header, line items table, totals with VAT, payment instructions with your bank details, and a reference number. When an invoice is marked as paid, a green "PAID" watermark appears.',
      },
      {
        title: 'Send and track the invoice',
        content: 'Click "Send" to email the invoice to your client with the PDF attached. CueQuote automatically adds a personalized greeting addressed to your client by name. The invoice status changes from Draft to Sent. Once you receive payment, click "Mark as Paid" to record it. You can also record partial payments.',
        tip: 'Add a note asking clients to include the invoice number as the payment reference — this makes reconciliation much easier.',
      },
      {
        title: 'Setup & strike day pricing',
        content: 'CueQuote separates event days from setup (installation) and strike (teardown) days. Equipment is charged at a configurable rate for setup/strike days — 0% (included free), 50% (half rate), or 100% (full rate). Labor is always charged at full rate for all days. Set your company default in Settings > Proposals.',
        tip: 'In Poland, 50% equipment rate on setup days is standard. In the Gulf and MENA, 100% is typical. Set your default once and forget.',
      },
    ],
  },
  {
    slug: 'team-management',
    title: 'Team Management',
    description: 'Invite team members, assign roles, and collaborate on proposals across your organization.',
    duration: '3 min',
    difficulty: 'intermediate',
    category: 'Account',
    mode: 'both',
    videoUrl: '/videos/team-management.mp4',
    whatYouLearn: [
      'How to invite team members to your workspace',
      'The four roles and what each can access',
      'Managing and removing team members',
      'How data migrates when a member joins',
    ],
    steps: [
      {
        title: 'Access the Team page',
        content: 'Go to Team from the sidebar. You\'ll see a list of all current team members with their names, emails, roles, and when they joined.',
      },
      {
        title: 'Invite a new member',
        content: 'Click "Invite Member" and enter the person\'s email address. Select a role: Owner (full access including billing), Admin (full access except billing), Sales (create proposals, manage clients and catalog), or Viewer (read-only dashboard access).',
        tip: 'Use the Sales role for your quoting team — they can create proposals and manage clients but can\'t change billing or company settings.',
      },
      {
        title: 'Team member joins',
        content: 'The invited person receives an email with a link. If they already have a CueQuote account, they click the link, log in, and see an accept/decline page. If they\'re new, they sign up first, then accept the invite.',
      },
      {
        title: 'Data migrates automatically',
        content: 'When a team member accepts your invite, their existing proposals, clients, catalog items, and invoices automatically move to your team\'s workspace. Nothing is lost — their old empty workspace is cleaned up. They see a confirmation before accepting.',
        tip: 'This means new hires can start quoting on their own account, and when they join your team, all their work comes with them.',
      },
      {
        title: 'Change roles or remove members',
        content: 'Click on any team member to change their role or remove them from your workspace. Only owners can manage other team members. Removing a member revokes their access immediately.',
      },
    ],
  },
  {
    slug: 'scope-templates',
    title: 'Scope Templates',
    description: 'Save and reuse proposal configurations for recurring event types to speed up quoting.',
    duration: '4 min',
    difficulty: 'intermediate',
    category: 'Proposals',
    mode: 'both',
    videoUrl: '/videos/scope-templates.mp4',
    whatYouLearn: [
      'Creating templates from scratch',
      'Saving existing proposals as templates',
      'Scope-only vs full templates (with line items)',
      'Using templates to speed up quoting',
    ],
    steps: [
      {
        title: 'Access the Templates page',
        content: 'Go to Templates from the sidebar. Here you\'ll see all your saved templates with their event type, description, attendee range, and whether they include pre-configured line items.',
      },
      {
        title: 'Create a template from scratch',
        content: 'Click "New Template" and configure the event type, name, description, and attendee range. You can optionally add line items with quantities and prices to create a full template.',
        tip: 'Start with your most common event type — conferences, gala dinners, or product launches. Each template saves you 5-10 minutes per proposal.',
      },
      {
        title: 'Save a proposal as a template',
        content: 'Open any completed proposal in the editor and click "Save as Template". All line items, quantities, and prices are captured. Give it a descriptive name and save.',
      },
      {
        title: 'Use a template when creating a proposal',
        content: 'When creating a new proposal, your templates appear as quick-start cards above the event description. Click one to pre-fill the description and settings. If it\'s a full template with line items, you can skip AI generation entirely.',
      },
      {
        title: 'Scope-only vs full templates',
        content: 'Scope-only templates pre-fill the event description but still use AI to generate the equipment list. Full templates include pre-configured line items and skip AI generation — click "Use Template" for an instant proposal with no AI cost.',
        tip: 'Use full templates for events you quote identically every time (e.g., a standard conference room setup). Use scope-only templates when the description is similar but equipment varies.',
      },
    ],
  },
  {
    slug: 'smart-suggestions',
    title: 'Smart Suggestions',
    description: 'Let CueQuote analyze your past proposals to suggest missing items, flag pricing inconsistencies, and identify catalog gaps.',
    duration: '3 min',
    difficulty: 'intermediate',
    category: 'Proposals',
    mode: 'both',
    videoUrl: '/videos/smart-suggestions.mp4',
    whatYouLearn: [
      'Enabling Smart Suggestions on proposals',
      'Adding frequently used items you may have missed',
      'Adjusting prices based on your historical averages',
      'Growing your catalog from real proposal data',
    ],
    steps: [
      {
        title: 'Enable Smart Suggestions',
        content: 'Open any proposal and look at the tab bar (Equipment | Terms & Details | Risk Plan). On the right side, you\'ll see a lightbulb "Smart" toggle button. Click it to turn suggestions on — it turns amber when active. Your preference is saved automatically, so it stays on/off across all proposals.',
        tip: 'Smart Suggestions need at least 3 sent proposals with similar items to generate meaningful recommendations. The more proposals you create, the smarter it gets.',
      },
      {
        title: 'Review missing items',
        content: 'Click the "Smart Suggestions" banner above the equipment table to expand it. The "Missing Items" tab shows items you frequently include in similar proposals but haven\'t added to this one. Each suggestion shows a confidence percentage (e.g., "85%" means you include it in 85% of past proposals), average pricing from your history, and which current items it\'s commonly paired with. Click "Add" to insert any suggestion with its average pricing.',
      },
      {
        title: 'Check repricing alerts',
        content: 'Switch to the "Repricing" tab. This flags items in your current proposal that are priced more than 15% above or below your usual rate. Each alert shows your current price vs. historical average, plus the min-max range from past proposals. A red arrow means you\'re charging more than usual; green means less. Click "Use Avg" to apply your historical average price.',
        tip: 'This is especially useful when reusing items across proposals — it catches accidental price changes or outdated rates.',
      },
      {
        title: 'Fill catalog gaps',
        content: 'The "Add to Catalog" tab shows items you\'ve used in 2 or more proposals but never added to your equipment catalog. Each entry shows how many times you\'ve used it and the average pricing. Click "Add to Catalog" to create a catalog entry with the average price pre-filled — next time, you can pick it from your catalog instead of typing it manually.',
      },
    ],
  },
  {
    slug: 'inventory-management',
    title: 'Inventory Management',
    description: 'Track your physical equipment units with serial numbers, condition status, and assignment to events — so you always know where every piece of gear is.',
    duration: '5 min',
    difficulty: 'intermediate',
    category: 'Setup',
    mode: 'av',
    videoUrl: '/videos/inventory-management.mp4',
    whatYouLearn: [
      'Adding units with serial numbers and asset tags',
      'Tracking condition and status (available, assigned, maintenance, retired)',
      'Assigning units to won proposals with auto-populated dates',
      'Reading the mini availability calendar by category',
      'Plan limits for inventory unit count',
    ],
    steps: [
      {
        title: 'Add a unit',
        content: 'Go to Inventory from the sidebar and click "Add Unit". Select the equipment item from your catalog, enter a serial number and optional asset tag, and set the condition (Excellent, Good, Fair, or Poor). The unit is created with a status of "available" and is immediately trackable. Every physical piece of gear in your fleet gets its own unit record.',
        tip: 'Use your own asset tagging system (e.g., AVE-001, AVE-002) in the asset tag field — it prints on your internal sheets and makes gear identification fast on-site.',
      },
      {
        title: 'View and filter your inventory',
        content: 'The Inventory page lists all units with their item name, serial number, condition, current status, and assigned event (if any). Use the search bar to find a unit by serial number or name. Filter by category (Audio, Video, Lighting, etc.) or by status to quickly see all units in maintenance, all available units, or everything assigned to active events.',
      },
      {
        title: 'Assign a unit to an event',
        content: 'Click on any available unit and select "Assign to Event". Choose a won proposal from the dropdown — only proposals with status "Won" appear here. The event start and end dates auto-fill from the proposal. Confirm to mark the unit as "assigned" for that date range. The unit will show as unavailable to other events during the same period.',
        tip: 'Assign units after a proposal is won, not before. This keeps your availability data accurate and avoids phantom conflicts.',
      },
      {
        title: 'Track availability with the mini calendar',
        content: 'The right sidebar on the Inventory page shows a mini availability calendar. Select a category to see weekly availability: green cells mean units are available for that week, amber cells mean all units in that category are assigned. Use this before quoting a large event to confirm you have enough gear in stock without double-booking.',
      },
      {
        title: 'Maintenance and retirement',
        content: 'To mark a unit as needing service, click its status badge and select "Maintenance". The unit is removed from available inventory until you change the status back. When equipment reaches end of life, set it to "Retired" — it stays in your records for audit purposes but is excluded from availability counts. Plan limits apply to total active units: check your plan page for your current cap.',
      },
    ],
  },
  {
    slug: 'crew-scheduling',
    title: 'Crew Scheduling',
    description: 'Manage your crew roster, assign staff and freelancers to events, and share public prep sheets so your team arrives fully briefed.',
    duration: '5 min',
    difficulty: 'intermediate',
    category: 'Setup',
    mode: 'av',
    videoUrl: '/videos/crew-scheduling.mp4',
    whatYouLearn: [
      'Building your crew roster with roles, skills, and day rates',
      'Assigning crew members to won proposals',
      'Reading the mini crew calendar for staffing conflicts',
      'Sharing public prep sheets (equipment list, no prices)',
      'Crew stats and active/inactive management',
    ],
    steps: [
      {
        title: 'Add crew members',
        content: 'Go to Crew from the sidebar and click "Add Crew Member". Enter their name, type (Staff or Freelancer), primary role (e.g., Sound Engineer, Lighting Tech, AV Technician), and skills. For freelancers, add their day rate — this feeds into your internal cost tracking without appearing on client-facing documents. Staff members have a fixed salary and no per-day rate.',
        tip: 'Add skills as comma-separated tags (e.g., "FOH mixing, RF coordination, Dante networking"). This helps when filtering crew by capability for specialist events.',
      },
      {
        title: 'Filter and manage your roster',
        content: 'The Crew page shows all members in a searchable list. Use the type filter to see only Staff or only Freelancers, or filter by skill to find the right person for a job. Toggle the "Active only" switch to hide inactive members — useful for seasonal freelancers you work with intermittently. Inactive crew can be reactivated anytime.',
      },
      {
        title: 'Assign crew to an event',
        content: 'Click "Assign to Event" on any crew member\'s card. Select a won proposal from the dropdown — the event dates auto-populate from the proposal. You can override the role for this specific event (e.g., assign your Sound Engineer as "Lead Tech" for a particular show). One crew member can be assigned to multiple non-overlapping events.',
        tip: 'The assignment dialog shows any date conflicts before you confirm, so you can\'t accidentally double-book a person.',
      },
      {
        title: 'Share a crew prep sheet',
        content: 'Open any event from the Crew calendar and click "Share Prep Sheet". A unique public link is generated that you can send to your crew. The prep sheet shows the event name, date, venue, schedule, and the full equipment list from the proposal — but no prices are visible. It\'s designed to brief your team without exposing your commercial terms.',
      },
      {
        title: 'View the crew calendar',
        content: 'The mini crew calendar in the sidebar shows weekly staffing status by event. Green indicates events that are fully staffed, amber means events that need more crew assigned. Click the "Events needing crew" widget at the top of the page to jump directly to upcoming events with open staffing gaps. Crew stats (total staff, total freelancers, events this month) appear in the summary header.',
      },
    ],
  },
  {
    slug: 'proposal-comparison',
    title: 'Proposal Comparison',
    description: 'Compare proposals from multiple vendors side by side — line items, pricing, terms, and an AI insight panel — so you can make the best decision fast.',
    duration: '4 min',
    difficulty: 'intermediate',
    category: 'Proposals',
    mode: 'both',
    videoUrl: '/videos/proposal-comparison.mp4',
    whatYouLearn: [
      'Adding proposals to a comparison via share URLs or tokens',
      'Reading vendor cards with value scores',
      'Comparing line items with cheapest/most expensive badges',
      'Comparing payment terms and cancellation policies',
      'Using the AI insight panel to get a ranked recommendation',
    ],
    steps: [
      {
        title: 'Add proposals to compare',
        content: 'Go to Comparison from the sidebar and click "Add Proposal". Paste a CueQuote share URL or a raw share token from any vendor using CueQuote. You can add up to 4 proposals at once — from different vendors competing for the same event, or your own alternative versions. The comparison tool works entirely via share tokens, so no login is required from the other vendors.',
        tip: 'If you\'re comparing your own proposals (e.g., two versions you created), just open each proposal, copy the share link, and paste both here.',
      },
      {
        title: 'Review vendor cards',
        content: 'Each vendor gets a summary card showing their company name, total price, currency, validity date, and a value score. The value score is a composite rating based on price competitiveness, completeness of inclusions, and payment terms flexibility. The card with the lowest total is highlighted — useful for quick budget comparisons at a glance.',
      },
      {
        title: 'Compare line items',
        content: 'Scroll to the line item comparison table. Items are grouped by category (Audio, Video, Lighting, etc.) and cross-matched across vendors. The cheapest price for each item gets a green "Cheapest" badge; the most expensive gets an amber "Most Expensive" badge. Items that a vendor hasn\'t included appear as a dash — helping you spot scope gaps between proposals.',
        tip: 'A vendor with a lower total but several dashes may be cheaper because they\'ve omitted items, not because they\'re more efficient. Check the gaps carefully.',
      },
      {
        title: 'Compare terms',
        content: 'The Terms section shows payment terms side by side: deposit percentage, balance due date, validity period, and cancellation policy for each vendor. This is often where proposals diverge most — a cheaper quote with a 100% upfront deposit may be riskier than a slightly pricier one with 30% deposit on acceptance.',
      },
      {
        title: 'Read the AI insight panel',
        content: 'Click "Generate AI Insight" to get a ranked recommendation based on price, terms, and scope completeness. The AI panel explains its reasoning — which vendor offers the best overall value, where others fall short, and what to ask each vendor to revise before accepting. Use the suggested next steps to negotiate or move forward with your preferred option.',
      },
    ],
  },
  {
    slug: 'proposal-comments',
    title: 'Proposal Comments & Activity',
    description: 'Clients can leave comments on shared proposals, request revisions on specific line items, and get replies from you — all tracked in real time.',
    duration: '3 min',
    difficulty: 'beginner',
    category: 'Proposals',
    mode: 'both',
    videoUrl: '/videos/proposal-comments.mp4',
    whatYouLearn: [
      'How clients leave comments on the share page',
      'Referencing specific line items in a comment',
      'Flagging comments as revision requests',
      'Replying from the proposal editor',
      'Resolving revisions and clearing the badge count',
    ],
    steps: [
      {
        title: 'Client leaves a comment',
        content: 'When a client opens a shared proposal, they\'ll see a "Comments" panel at the bottom of the page. They can type a message and optionally reference a specific line item by clicking the item name before submitting. The comment is timestamped and attributed to their name, and you\'re notified immediately.',
        tip: 'Clients don\'t need a CueQuote account to leave comments — the share link gives them access to the comment panel automatically.',
      },
      {
        title: 'Revision requests',
        content: 'When leaving a comment, clients can check "Flag as revision request". This marks the comment with a pending status and signals to you that a change is expected before they\'ll accept. Revision requests are visually distinct from general comments — they appear with an amber indicator so nothing gets missed in a busy thread.',
      },
      {
        title: 'Reply from the editor',
        content: 'Open the proposal in your editor and click the "Comments" tab. All client comments appear here in chronological order. Type your reply in the text field below any comment and press Send. Replies are visible to the client the next time they view the share page — the comment thread updates in near real time via polling.',
        tip: 'A red badge on the Comments tab shows how many unread or unresolved comments are waiting. It resets once you\'ve opened the tab.',
      },
      {
        title: 'Resolve revisions',
        content: 'Once you\'ve made the requested changes (edited the line item, adjusted pricing, updated terms), return to the Comments tab and click "Mark Resolved" on the revision request. The comment moves to a resolved state and the client sees it as closed when they next visit the share page. Resolved items are kept in the thread for audit purposes but no longer count toward the unresolved badge.',
      },
    ],
  },
  {
    slug: 'costing-margins',
    title: 'Costing & Margins',
    description: 'Track cost prices, set margin targets, and monitor profitability per proposal — all invisible to clients.',
    duration: '5 min',
    difficulty: 'advanced',
    category: 'Setup',
    mode: 'av',
    videoUrl: '/videos/costing-margins.mp4',
    whatYouLearn: [
      'Configuring who can see cost data (owner/admin vs. sales)',
      'Setting a default margin target and per-category overrides',
      'Adding cost prices to catalog items and individual line items',
      'Reading the margin summary panel and responding to alerts',
      'Tracking overall profitability from the dashboard widget',
    ],
    steps: [
      {
        title: 'Configure cost visibility',
        content: 'Go to Settings → Costing & Margins. The visibility toggle controls who sees cost data inside the editor: "Owner & Admin only" restricts it to those roles, while "Include Sales" lets the Sales role see costs and margins too. Cost prices are never shown on client-facing share pages or PDFs — this setting only affects internal team visibility.',
        tip: 'Start with "Owner & Admin only" if your sales team is new. You can open it up to the full team once everyone understands how margin targets work.',
      },
      {
        title: 'Set margin targets',
        content: 'Enter your default target margin percentage in the "Default Margin Target" field — this is the minimum profit margin you want across all proposals. Below it, you can add per-category overrides: for example, Labor at 40%, Sub-hired Video at 20%, and owned Audio at 60%. Category overrides take precedence over the default when the margin summary runs its calculations.',
      },
      {
        title: 'Add cost prices',
        content: 'Cost prices can be set in two places. In the Catalog, edit any item and fill in the "Cost Price" field for sub-hired or purchased equipment. In the proposal editor, turn on the cost toggle (the eye icon next to the line items table) — a "Cost" column appears beside each line item where you can enter or override the cost for that specific job. Leave cost empty for equipment you own outright.',
        tip: 'Sub-hired equipment almost always needs a cost price. Enter the supplier\'s rate so the margin panel reflects your true profit after paying them.',
      },
      {
        title: 'Monitor margins in the editor',
        content: 'With the cost toggle enabled, the margin summary panel appears at the bottom of the Equipment tab. It shows Revenue (your sale price), Cost (sum of cost prices), Profit (the difference), and Margin % for the entire proposal. Items below your target margin threshold are highlighted with an amber alert. Items with no cost price set show a "Missing cost" warning so nothing slips through.',
      },
      {
        title: 'Track profit from the dashboard',
        content: 'The dashboard profit summary widget shows aggregate revenue, cost, and profit for the current month across all won proposals. Use it for a quick financial health check without opening individual proposals. The widget respects the same visibility settings — Sales role members see it only if "Include Sales" is enabled in Costing & Margins settings.',
      },
    ],
  },
]
