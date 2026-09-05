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
        title: 'Start from the cost calculator (optional)',
        content: 'If you are not sure what your event should cost, open the AV cost calculator on cuequote.com first. Choose the country where the event takes place, set the attendee count and days, and pick your video, lighting and staging. When the estimate looks right, click "Continue with this estimate" — your configuration travels with you through signup and your first proposal opens already filled in.',
        tip: 'Equipment and crew are priced separately by market, so the estimate reflects where your event actually is rather than a single global average.',
      },
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
        content: 'Before CueQuote generates your proposal, it shows a confirmation dialog: "This will use 1 of your X AI proposals this month. You have Y remaining on your <plan> plan." Each plan has a monthly AI quota — Free: 3, Starter: 10, Pro: 40, Business: 120. Every generation (including retries) counts against that quota, so double-check your description before confirming. On unlimited plans the dialog is skipped.',
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
        content: 'Two ways to set the deposit: as a percentage (0-100), or as an agreed amount, using the small selector beside the field. A fixed amount is what you want when the figure was negotiated rather than calculated, and it stays put when line items change. Either way the deposit and the balance are shown as money next to your totals, and the Payment Terms clause in your T&C rewrites itself to match, so a proposal never states two different figures. If you have written that clause yourself it is left alone, and a note offers to update it for you.',
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
        content: 'In T&C text, type {company_name} and it will be automatically replaced with your actual company name in the PDF. For example: "All equipment remains the property of {company_name}" becomes "All equipment remains the property of AVE Event Solutions" in the generated PDF.',
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
      'How to upgrade from the free plan',
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
        content: 'Click "Start Free" on any paid plan. You\'ll be redirected to Stripe Checkout where you enter your payment details. Your subscription starts immediately after checkout.',
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
        content: 'Hit your monthly limit? Buy a 5-pack of proposal credits for 29 (5.80 each). Credits are valid for 12 months and include all premium features like branded PDFs. Great for companies that need a few extra proposals beyond their plan limit.',
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
        content: 'Open any proposal that has been sent or accepted. Click the "Create Invoice" button in the header. You\'ll be asked to choose between a Deposit Invoice (for the deposit you set, whether a percentage or a fixed amount) or a Full Invoice (100% of the total). CueQuote copies all line items, client details, and pricing from the proposal.',
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
    videoUrl: '',
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
    slug: 'supplier-work-orders',
    title: 'Subbing Work Out to Suppliers',
    description: 'Issue a work order to a dealer or dry-hire house: their scope, their price, and nothing about your client.',
    duration: '6 min',
    difficulty: 'intermediate',
    category: 'Setup',
    mode: 'both',
    videoUrl: '',
    whatYouLearn: [
      'Issuing a work order from inside a job, in AV or Planner mode',
      'What a supplier sees \u2014 and the client details that never leave',
      'Insurance checked against your load-out date, not against today',
      'Accepting, revoking, and what is recorded on the order',
      'How many work orders each plan can keep live',
    ],
    steps: [
      {
        title: 'Open the Suppliers tab',
        content: 'Open any job with line items and go to the Suppliers tab, then click \u201cSub work out\u201d. In AV mode you tick the individual line items you are subbing out. In Planner mode you award a whole section \u2014 Catering, Production, Transport \u2014 in one go.',
        tip: 'Suppliers are created inside a job and nowhere else, so you never face an empty directory to fill in before you can start.',
      },
      {
        title: 'Pick or create the supplier',
        content: 'Choose an existing supplier, or create one on the spot with just a name. Add their public liability expiry at the same time: a work order cannot be sent to a supplier with no insurance date on file, and this is the one moment the answer is in front of you.',
      },
      {
        title: 'Check the scope you are sending',
        content: 'The scope text is written from the lines you picked, so it describes what the supplier is supplying rather than what the event is about. Edit it if you need to \u2014 it is what they sign. If it names your client, CueQuote refuses to issue the order and tells you which line to fix.',
        tip: 'Item descriptions are written for your client and get copied onto the order. That is why the check reads them too, not just the text you typed.',
      },
      {
        title: 'Send the link and get an answer',
        content: 'Copy the link to the supplier. They open it with no login and see their scope, their price, the venue, the load-in window and the site contact \u2014 never the end client, and never your sell price. They accept by typing their name, and the date, time and answer are recorded on the order.',
      },
      {
        title: 'Revoke when it changes',
        content: 'If the job changes or the link gets forwarded, revoke it. Both reading and accepting stop at once, and the supplier sees the same message a wrong link would give. Revoking also frees a slot: Free plans keep 2 work orders live at a time, Starter 10, Pro and above unlimited.',
        tip: 'A revoked link that could still confirm a booking would be worse than one that could still read a venue name, so both halves close together.',
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
    videoUrl: '',
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
    videoUrl: '',
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
    videoUrl: '',
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
    videoUrl: '',
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
  {
    slug: 'vendor-management',
    title: 'Vendor Management',
    description: 'Add AV vendors to your network, manage contacts, and track relationships so you always know who to call when you need to source equipment.',
    duration: '4 min',
    difficulty: 'beginner',
    category: 'Planner',
    mode: 'planner',
    icon: '🏪',
    whatYouLearn: [
      'Adding vendor companies and contacts to your vendor list',
      'Categorizing vendors by speciality (Audio, Video, Lighting, Full-Service)',
      'Tracking relationship notes and past interactions',
      'Requesting quotes from vendors directly from an event',
      'Keeping your preferred vendor list organized and up to date',
    ],
    steps: [
      {
        title: 'Navigate to Vendors',
        content: 'Click "Vendors" in the sidebar. This is your AV supplier address book — a centralized list of every vendor you\'ve worked with or want to work with. Each vendor card shows the company name, primary contact, speciality, location, and a quick badge indicating whether they are an active, preferred, or new vendor.',
      },
      {
        title: 'Add a new vendor',
        content: 'Click "Add Vendor" and fill in the company details: name, website, city and country, and their AV speciality (Audio, Video, Lighting, Simultaneous Interpretation, Full-Service AV, or Other). Add the primary contact person\'s name, email, and phone number. You can add multiple contacts per vendor — useful for large suppliers where you deal with different people for sales and technical queries.',
        tip: 'Add vendors as you discover them, even before you\'ve worked with them. A broad vendor list gives you more options when sourcing for unusual or high-spec events.',
      },
      {
        title: 'Set vendor status and tags',
        content: 'Assign a status to each vendor: Preferred (vendors you actively recommend or use regularly), Active (vendors you\'ve worked with and would use again), Prospect (vendors you\'re evaluating), or Inactive (vendors you\'ve stopped working with). Add tags such as "outdoor specialist", "LED walls", or "rigging" to help filter vendors quickly when sourcing for specific event requirements.',
      },
      {
        title: 'Add relationship notes',
        content: 'Click on any vendor to open their detail view. Use the Notes section to log important relationship context: lead times they typically need, minimum order values, preferred communication channels, pricing tendencies, or any past issues to be aware of. Notes are internal only — vendors never see them. They\'re invaluable when a colleague is sourcing from a vendor you know well.',
        tip: 'Note the vendor\'s typical response time to quote requests. This helps you decide when to reach out based on your event timeline.',
      },
      {
        title: 'Request a quote from a vendor',
        content: 'From any event in your planner dashboard, open the Sourcing tab and click "Request Quote". Select one or more vendors from your list, choose the equipment categories you need them to quote on, set a response deadline, and add any specific notes or technical requirements. CueQuote sends a structured quote request to each selected vendor with the event details and your requirements pre-filled.',
      },
      {
        title: 'Track vendor requests and responses',
        content: 'All outgoing quote requests appear under the Sourcing tab with their status: Sent, Viewed, Responded, or Declined. When a vendor responds with a CueQuote proposal, it appears automatically in your Quote Comparison view. When they respond outside CueQuote (by email or file), you can upload their quote manually and link it to the request so everything stays in one place.',
        tip: 'Send requests to at least 2-3 vendors per equipment category. Competition keeps pricing honest and gives you a fallback if your preferred vendor is unavailable.',
      },
    ],
  },
  {
    slug: 'quote-comparison',
    title: 'Comparing Vendor Quotes',
    description: 'Receive quotes from multiple AV vendors, compare them side by side on price and scope, and select the best supplier for your event.',
    duration: '5 min',
    difficulty: 'intermediate',
    category: 'Planner',
    mode: 'planner',
    icon: '📊',
    whatYouLearn: [
      'Loading vendor quotes into the comparison view',
      'Reading the vendor summary cards and value scores',
      'Comparing line items across vendors with cheapest/most expensive flags',
      'Reviewing payment terms and cancellation policies side by side',
      'Using the AI insight panel to get a ranked recommendation',
      'Selecting a vendor and moving an event forward',
    ],
    steps: [
      {
        title: 'Open the Quote Comparison view',
        content: 'From your event dashboard, open the event you\'re sourcing for and click the "Quote Comparison" tab. If you\'ve already sent quote requests and vendors have responded with CueQuote proposals, their submissions appear automatically. If vendors sent proposals by email or as files, click "Add Quote" and paste the CueQuote share URL or upload the document manually.',
        tip: 'You can add up to 4 vendor proposals to a single comparison. This is enough for most sourcing decisions — beyond 4 the comparison becomes unwieldy.',
      },
      {
        title: 'Read the vendor summary cards',
        content: 'Each vendor gets a summary card at the top of the comparison showing: company name, total price in your event currency, quote validity date, and a value score (1-10). The value score is a composite of price competitiveness, scope completeness, and payment terms flexibility. The vendor with the lowest total is highlighted in green — a quick visual anchor for budget-conscious decisions.',
      },
      {
        title: 'Compare line items in detail',
        content: 'Scroll down to the line item comparison table. Items are grouped by category (Audio, Video, Lighting, Labor, Transport) and matched across all vendors. The cheapest price for each item gets a green "Cheapest" badge; the most expensive gets an amber badge. Items a vendor hasn\'t included appear as a dash — these gaps are often where the real pricing differences lie. A vendor quoting 10% less but missing 5 line items may actually be more expensive once those items are sourced separately.',
        tip: 'Pay special attention to Labor and Transport line items — these are frequently omitted from initial quotes to make the headline price look competitive.',
      },
      {
        title: 'Review payment terms and cancellation policies',
        content: 'The Terms section shows each vendor\'s payment schedule side by side: deposit percentage, balance due date, and cancellation policy. A vendor asking for 100% upfront represents a cash flow risk compared to one asking for 30% on acceptance and 70% two weeks before the event. Factor payment terms into your overall vendor evaluation — a slightly higher price with better terms can be a better deal for your client.',
      },
      {
        title: 'Generate the AI insight',
        content: 'Click "Generate AI Insight" in the comparison toolbar. The AI analyzes all loaded quotes across price, scope, terms, and completeness, then produces a ranked recommendation with explanatory text. It highlights which vendor offers the best overall value for your specific event context, where each vendor falls short, and what to ask them to revise before you award the contract.',
        tip: 'Use the AI insight as a starting point for your decision — it\'s a fast way to synthesize complex data. Always apply your own judgement based on the vendor relationship and event stakes.',
      },
      {
        title: 'Select a vendor and update the event',
        content: 'Once you\'ve made your decision, click "Select Vendor" on the winning card. The event status updates to "Vendor Confirmed" and the selected vendor\'s proposal is linked as the primary quote for the event. CueQuote sends an automatic notification to the chosen vendor and an optional decline notification to the others. The accepted quote total flows into your event budget tracker automatically.',
      },
    ],
  },
  {
    slug: 'market-rate-budgets',
    title: 'Market-Rate Budget Estimates',
    description: 'Understand how CueQuote\'s AI generates realistic AV budget ranges for your events, and use those estimates to plan effectively before sourcing vendors.',
    duration: '4 min',
    difficulty: 'beginner',
    category: 'Planner',
    mode: 'planner',
    icon: '💰',
    whatYouLearn: [
      'How the AI generates low and high budget ranges for AV events',
      'What factors drive the estimate (attendees, venue, equipment type)',
      'Reading the budget breakdown by category',
      'Using budget estimates early in the planning process',
      'Understanding crew recommendations included in the estimate',
      'When to use an estimate vs. a live vendor quote',
    ],
    steps: [
      {
        title: 'Create an event and request a budget estimate',
        content: 'From the planner dashboard, click "New Event" and fill in the basic details: event name, type (conference, gala, product launch, etc.), date, venue name and city, and expected attendee count. Once the event is created, go to the Budget tab and click "Generate Budget Estimate". Describe your AV requirements in the text field — the more detail you provide, the more accurate the range.',
        tip: 'Even a rough description like "corporate conference for 300 people, main stage presentation, breakout rooms" gives the AI enough context to produce a useful range. You can refine it later.',
      },
      {
        title: 'Understand the low and high range',
        content: 'CueQuote returns a budget estimate as a range rather than a single number — for example, "USD 14,500 – USD 22,000". The low end reflects a lean setup using standard-grade equipment with a local vendor; the high end reflects premium equipment, multiple redundant systems, and a full-service vendor with crew. Your actual quote will typically land somewhere in between, depending on your vendor selection and final spec.',
      },
      {
        title: 'Read the category breakdown',
        content: 'Below the headline range, the estimate is broken down by AV category: Audio, Video, Lighting, Staging, Simultaneous Interpretation (if applicable), Labor, and Transport. Each category shows its own low-high range and a percentage of the total budget. This breakdown helps you prioritize — if a client has a fixed budget, you can see instantly where to trim (e.g., reducing lighting spend to protect the Audio budget for a keynote-heavy event).',
        tip: 'Labor typically accounts for 25-35% of a full-service AV budget. If the labor line looks low in your estimate, double-check that multi-day setup and strike are accounted for in your event description.',
      },
      {
        title: 'Review crew recommendations',
        content: 'The estimate includes a recommended crew list for your event: roles (FOH Engineer, Lighting Operator, Video Technician, Stage Manager, etc.), suggested headcount per role, and the number of days each role is needed. These recommendations are driven by your attendee count, event type, and equipment complexity. Use them as a staffing guide when briefing vendors or when reviewing crew line items in received quotes.',
      },
      {
        title: 'Use the estimate in client conversations',
        content: 'Share the budget estimate with your client early in the planning process to align on AV spend before going to market. The estimate is formatted as a clean summary you can copy or export — it shows the range, category breakdown, and a note that final pricing will depend on vendor selection and final specification. Setting client budget expectations upfront prevents difficult conversations when live quotes arrive.',
        tip: 'If a client\'s stated budget is significantly below the low end of your estimate, flag it immediately. It\'s better to adjust scope or expectations before issuing RFQs than after vendors have submitted.',
      },
      {
        title: 'Know when to move from estimate to live quote',
        content: 'Budget estimates are planning tools — they are not substitutes for vendor quotes. Use estimates during early-stage planning, client budget discussions, and internal budget approvals. Once your event brief is finalized (venue confirmed, agenda set, technical rider available), move to live vendor sourcing via the Vendors tab. The estimate gives you confidence going into sourcing that the quotes you receive are within a reasonable market range.',
      },
    ],
  },
  {
    slug: 'feedback-support',
    title: 'Feedback & Support',
    description: 'Submit bugs, request features, or get support — all without leaving the app.',
    duration: '3 min',
    difficulty: 'beginner',
    category: 'Basics',
    mode: 'both',
    videoUrl: '',
    whatYouLearn: [
      'How to submit feedback, bug reports, and feature requests',
      'Tracking the status of your submissions',
      'Getting support directly from the app',
      'Using the Help Center for quick answers',
    ],
    steps: [
      {
        title: 'Navigate to Feedback & Support',
        content: 'Click "Feedback & Support" in the sidebar. This is your direct line to the CueQuote team — you can report bugs, request features, ask for help, or leave general feedback without leaving the app.',
      },
      {
        title: 'Choose your feedback type',
        content: 'Select from four types: Bug Report (something isn\'t working), Feature Request (something you\'d like added), General Feedback (anything else), or Support Request (you need help with something). The form adjusts based on your selection.',
        tip: 'The app automatically captures your browser, current plan, and page context when you submit — so you don\'t need to include technical details manually.',
      },
      {
        title: 'Fill in the details and submit',
        content: 'Enter a subject line and a description of your issue or request. The more detail you include, the faster the team can help. Click "Submit" — your submission is logged immediately and you\'ll see it appear in the My Submissions tab.',
      },
      {
        title: 'Track your submissions',
        content: 'Click the "My Submissions" tab to see all your past submissions. Each shows a status badge: Submitted (received), In Review (being looked at), Planned (scheduled for development), or Shipped (completed). When the team replies, their response appears inline.',
      },
      {
        title: 'Use the Help Center',
        content: 'The "Help Center" tab has links to tutorials, full documentation, and answers to frequently asked questions. Check here first before submitting a support request — many common questions are already answered.',
      },
    ],
  },
  {
    slug: 'catalog-suggestions',
    title: 'Growing Your Catalog with AI',
    description: 'When the AI uses items not in your catalog, add them with one click.',
    duration: '2 min',
    difficulty: 'beginner',
    category: 'Setup',
    mode: 'av',
    videoUrl: '',
    whatYouLearn: [
      'How the AI flags items not in your catalog',
      'Adding suggested items to your catalog with one click',
      'Adding all suggestions at once',
      'Why catalog prices make future proposals more accurate',
    ],
    steps: [
      {
        title: 'Generate a proposal with AI',
        content: 'Create a new proposal as usual and let the AI generate the equipment list. When the AI includes items that are not in your equipment catalog, it marks them with [CUSTOM] and uses an estimated market-rate price.',
      },
      {
        title: 'Review the suggestion bar',
        content: 'After generation, if any items weren\'t found in your catalog, an amber suggestion bar appears on the Review step. Click it to expand a list of new items with their category, unit, and AI-suggested price.',
        tip: 'The suggested price is based on market rates — you can adjust it to your actual rate after adding to the catalog.',
      },
      {
        title: 'Add items to your catalog',
        content: 'Click "Add to Catalog" on any individual item to save it, or click "Add all" to save everything at once. Items are added to your catalog immediately with the AI-suggested price as a starting point.',
      },
      {
        title: 'Future proposals use your exact prices',
        content: 'Once items are in your catalog, the next time the AI generates a proposal that needs them, it will use your catalog price instead of an estimate. Your catalog becomes more complete with every proposal you generate.',
      },
    ],
  },
  {
    slug: 'planner-budget-review',
    title: 'Understanding Your Event Budget',
    description: 'Read and use the AI-generated budget plan in Planner mode.',
    duration: '7 min',
    difficulty: 'beginner',
    category: 'Planner',
    mode: 'planner',
    videoUrl: '',
    whatYouLearn: [
      'Reading the plan by section, and renaming the sections yourself',
      'Reading the budget overview with low-high range',
      'Understanding crew recommendations and roles',
      'Using the event timeline for planning',
      'Applying pro tips when working with AV vendors',
      'Understanding inclusions and exclusions',
      'Costing setup and strike days the way an organizer pays for them',
      'Resolving the planning notes in the editor and spotting when they are out of date',
      'Reading the market price check and the list of unmet scope',
    ],
    steps: [
      {
        title: 'Generate a budget plan',
        content: 'Switch to Planner mode and describe your event — include the venue, attendee count, and what you need (presentations, live music, branding, simultaneous interpretation, etc.). Click "Generate" and the AI produces a full budget plan with market-rate pricing.',
      },
      {
        title: 'Review the budget overview',
        content: 'The top section shows your total estimated budget as a range — for example €12,500 — €18,200. The low end reflects a lean, standard-grade setup; the high end reflects premium equipment and full-service crew. Your actual vendor quotes will typically land within this range.',
        tip: 'Use the budget range when setting client expectations before going to market. If a client\'s budget is below the low end, discuss scope reduction before requesting quotes.',
      },
      {
        title: 'Check crew recommendations',
        content: 'Scroll to the Crew Recommendations section. The AI lists the technical roles you\'ll need (FOH Engineer, Lighting Operator, Video Tech, etc.), how many people per role, and a typical daily rate range for each. Use this when reviewing crew line items from vendor quotes.',
      },
      {
        title: 'Review the event timeline',
        content: 'The Event Timeline section shows a suggested schedule — setup day(s), show day(s), and strike. It includes time estimates for each phase and key technical milestones. Share this with vendors when requesting quotes so they can factor in the correct number of labor days.',
      },
      {
        title: 'Read pro tips and inclusions/exclusions',
        content: 'The Pro Tips section gives practical advice specific to your event type — things to watch out for, questions to ask vendors, and common cost drivers. The Inclusions/Exclusions section clarifies what the budget estimate covers and what is not included (e.g., venue fees, content creation, customs duties for international events).',
      },
      {
        title: 'Tell the plan how long you have to build and clear',
        content: 'On the new-proposal form, Setup days and Strike days are the days the venue is yours before and after the event. In Planner mode they are priced where an organizer actually pays \u2014 venue occupancy and crew time \u2014 rather than as extra days of equipment rental, which is why there is no equipment-rate option beside them. If the event realistically cannot be cleared on the final night and you have left strike at zero, the plan says so.',
        tip: 'Ask the venue for the load-in and load-out windows before filling these in. A room you only get at 6am on show day is a very different budget from one you have the night before.',
      },
      {
        title: 'Read the plan by section, and name the sections yourself',
        content: 'Open the proposal and the Plan tab groups your lines the way an organizer thinks about a budget \u2014 Venue, Catering, Production, Staffing, Transport and so on, in that order, with Other last. Click any section title to rename it: \u201cCatering\u201d becomes \u201cFood & Beverage\u201d if that is what your client calls it. The names you choose carry through to the PDF and to the link you share with the client.',
        tip: 'Rename sections before you send, not after. The client reads your wording, and matching the language of their own budget sheet saves a round of questions.',
      },
      {
        title: 'Keep the planning notes working while you edit',
        content: 'Open the proposal and the planning notes sit above your line items on the Plan tab, as things to resolve rather than text to scroll past. Tick one off once you have confirmed it, or mark it not applicable. If you then change the headcount, the number of days, the budget or the event date, the panel names exactly what moved \u2014 so you know the advice was written against different numbers.',
        tip: 'The notes are the questions the AI could not answer for you: power supply, load-in window, permits. Resolving them is usually where an estimate turns into a real budget.',
      },
      {
        title: 'Check the flagged prices and the scope gaps',
        content: 'The same panel raises two other things. A price check compares each line with what that item usually costs in your event\'s region, judging equipment rates and crew rates separately, so a day rate typed as an hourly one stands out. A scope list shows anything your attached brief asked for that the plan does not yet cover \u2014 catering, permits, photography, guest transport \u2014 and each entry disappears as soon as you add the line that fills it.',
        tip: 'The price bands are deliberately wide. They catch a missing zero, not a 15% difference of opinion \u2014 read a flag as \u201clook again\u201d, not \u201cthis is wrong\u201d.',
      },
    ],
  },
  {
    slug: 'multi-currency-pricing',
    title: 'Multi-Currency Pricing',
    description: 'Set per-currency prices in your catalog so proposals automatically use the right rate for each currency without manual conversion.',
    duration: '4 min',
    difficulty: 'intermediate',
    category: 'Setup',
    mode: 'both',
    icon: '💱',
    whatYouLearn: [
      'How to add USD, EUR, and other currency prices to catalog items',
      'How proposal generation picks the correct currency price',
      'How auto-conversion fallback works when no local price is set',
      'Best practices for keeping multi-currency prices up to date',
    ],
    steps: [
      {
        title: 'Open a catalog item for editing',
        content: 'Go to Catalog from the sidebar and click on any item to open its detail panel, then click Edit. Below the default price field you\'ll see a "Multi-Currency Prices" section. This is where you can set prices in additional currencies beyond your company default.',
        tip: 'Start with the currencies you quote most frequently — typically EUR, USD, and GBP for international AV companies.',
      },
      {
        title: 'Add a price for each currency',
        content: 'Click "Add Currency Price" and select a currency from the dropdown (EUR, USD, GBP, PLN, AED, EGP, CHF). Enter the rental price in that currency. Repeat for each additional currency you want to set. Each currency price you enter is an exact rate — not a conversion. This lets you reflect local market rates and negotiated pricing for different regions.',
      },
      {
        title: 'Understand how proposal generation picks the price',
        content: 'When the AI generates a proposal in a specific currency, it looks for a matching catalog price in that same currency first. If you have set a USD price on an item and the proposal is in USD, that exact price is used. This ensures your proposals always reflect your real rates for each market — not floating exchange rates.',
        tip: 'Set realistic local market prices rather than converting your home currency. A PA system that rents for €500/day in Poland may have a different market rate at $600/day in the US.',
      },
      {
        title: 'Auto-conversion fallback',
        content: 'If a proposal uses a currency for which you have not set a specific price on a catalog item, CueQuote falls back to converting your default currency price using the current market exchange rate. The converted price is flagged in the proposal editor with a small exchange icon so you can verify it before sending. You can override any auto-converted price manually in the editor.',
      },
      {
        title: 'Keep prices current',
        content: 'Multi-currency prices are static — they do not update automatically with exchange rate movements. Review your currency prices periodically (quarterly is a good cadence) and update any that have drifted significantly from current market rates. For items you sub-hire, align your catalog currency prices with your supplier\'s invoicing currency to protect your margins.',
        tip: 'Add a calendar reminder every quarter to review your top 20 catalog items across all currencies. Five minutes of price maintenance prevents margin surprises on large proposals.',
      },
    ],
  },
  {
    slug: 'proposal-approval-workflow',
    title: 'Proposal Approval Workflow',
    description: 'Enable internal approval so proposals are reviewed and signed off by a manager before they reach clients.',
    duration: '5 min',
    difficulty: 'intermediate',
    category: 'Proposals',
    mode: 'both',
    icon: '✅',
    whatYouLearn: [
      'Enabling the approval workflow in Settings',
      'How to submit a proposal for manager approval',
      'The manager review process and internal comments',
      'Understanding approval statuses (pending, approved, rejected)',
      'What happens to a proposal after approval or rejection',
    ],
    steps: [
      {
        title: 'Enable approval in Settings',
        content: 'Go to Settings from the sidebar and open the "Proposals" tab. Toggle on "Require approval before sending". Once enabled, any proposal created by a Sales role member must be approved by an Admin or Owner before it can be sent to a client. Owners and Admins can send proposals directly without going through the approval flow.',
        tip: 'Enable approval when you have a sales team creating proposals — it gives managers a quality gate before anything reaches clients.',
      },
      {
        title: 'Submit a proposal for approval',
        content: 'When a Sales team member finishes building a proposal, they click "Submit for Approval" instead of "Send". This locks the proposal from further editing and changes its status to "Pending Approval". The proposal appears in the manager\'s approval queue immediately. The submitting team member can add an optional note explaining anything the reviewer should know.',
      },
      {
        title: 'Manager reviews the proposal',
        content: 'Managers (Admins and Owners) see a notification in the app and an email alert when a proposal enters their approval queue. They open the proposal in full read-only view — all line items, pricing, terms, inclusions, exclusions, and totals are visible. The manager can also download the PDF preview to see exactly what the client would receive.',
        tip: 'Review the proposal total, payment terms, and T&C carefully — these are the three areas that most often need adjustment before a proposal should go to a client.',
      },
      {
        title: 'Leave internal comments',
        content: 'In the approval panel on the right side of the proposal, managers can leave internal comments visible only to the team — not to the client. Use comments to explain what needs changing: "Reduce the discount to 10% max" or "Add the outdoor generator exclusion to the terms". The submitter sees these comments immediately and can unlock the proposal to make edits.',
      },
      {
        title: 'Approve or reject',
        content: 'After reviewing, the manager clicks "Approve" or "Reject". Approving unlocks the Send button for the submitter — they receive a notification that the proposal is cleared to go. Rejecting sends the proposal back to Draft status with the manager\'s comments visible, so the submitter knows exactly what to fix before resubmitting.',
      },
      {
        title: 'Approval statuses at a glance',
        content: 'Proposals in the approval workflow show one of four statuses on the proposals list: Draft (not yet submitted), Pending Approval (waiting for manager review), Approved (cleared to send), or Rejected (sent back for revision). Filter the proposals list by status to see your full approval queue at once. Approved proposals that have been sent then follow the normal Sent → Viewed → Won/Lost flow.',
        tip: 'Set a team norm for approval turnaround time — 4 business hours is a common target. Slow approvals can delay time-sensitive event quotes.',
      },
    ],
  },
  {
    slug: 'price-sync',
    title: 'Price Sync — Matching Catalog & Proposal Prices',
    description: 'Automatically detect and fix price mismatches between your equipment catalog and active proposals.',
    duration: '3 min',
    difficulty: 'intermediate',
    category: 'Proposals',
    mode: 'av',
    icon: '🔄',
    videoUrl: '',
    whatYouLearn: [
      'How to spot price mismatches between your catalog and proposal line items',
      'Using "Use catalog price" to pull the correct price into a proposal',
      'Using "Update catalog" to push a proposal price back as the new standard',
      'Bulk-matching all mismatched items at once',
    ],
    steps: [
      {
        title: 'Open a proposal — Price Sync banner appears',
        content: 'Open any proposal in the editor. If one or more line item prices differ from your equipment catalog, a blue "Price Sync" banner appears above the line items table. The banner shows how many items are out of sync at a glance.',
        tip: 'Price Sync is especially useful right after AI generation — the AI matches catalog items but may occasionally use slightly different prices.',
      },
      {
        title: 'Review mismatches',
        content: 'Click the banner to expand the Price Sync panel. Each mismatched item is listed with its name, the current proposal price, the catalog price, and the percentage difference. Items with a difference greater than 10% are highlighted in red; smaller differences appear in amber.',
      },
      {
        title: 'Choose an action per item',
        content: 'For each mismatched item, choose one of two actions: "Use catalog price" updates the proposal line item to match your catalog — use this when the catalog is correct. "Update catalog" sets the proposal price as the new standard in your catalog — use this when you have intentionally changed the price for this job and want it to become your default going forward.',
        tip: 'Use "Update catalog" sparingly — it changes the price for all future proposals. Use it only when you have a deliberate new rate, not for one-off discounts.',
      },
      {
        title: 'Bulk match all items',
        content: 'If you want to fix all mismatches at once, click "Match all to catalog" at the top of the Price Sync panel. CueQuote updates every mismatched line item to the catalog price in one go. Green checkmarks appear next to each item as they sync. The banner disappears once all items are in sync.',
      },
    ],
  },
  {
    slug: 'production-budget-planning',
    title: 'Production Budget Planning for Event Planners',
    description: 'Generate comprehensive AV production budgets with equipment, crew, and timeline recommendations tailored to your event.',
    duration: '5 min',
    difficulty: 'beginner',
    category: 'Planner',
    mode: 'planner',
    videoUrl: '',
    whatYouLearn: [
      'Switching to Planner mode for event production budgeting',
      'Describing your event for accurate AI-generated budget estimates',
      'Reading and interpreting the AV & Technical card with grouped categories',
      'Understanding budget ranges and crew recommendations',
      'Using the production timeline and pro tips for vendor conversations',
    ],
    steps: [
      {
        title: 'Switch to Planner mode',
        content: 'From your dashboard, click the mode toggle in the top right and select "Planner". This switches your interface from AV Company proposal mode to event production planning mode. Planner mode uses market-rate pricing instead of your catalog, making it ideal for event professionals who need independent budget guidance.',
        tip: 'You can switch between modes at any time — your proposals and settings for each mode are kept separate.',
      },
      {
        title: 'Create a new production budget',
        content: 'Click "Generate Production Budget" and describe your event in natural language. Include: event type (conference, gala, festival, etc.), venue name and type, expected attendee count, date and duration, and specific AV needs (presentations, live music, streaming, simultaneous interpretation, branding). The more detail you provide, the more accurate the AI-generated plan.',
        tip: 'You can paste an RFP or event brief directly into the description — the AI extracts the key requirements automatically.',
      },
      {
        title: 'Choose a template',
        content: 'Select a template that matches your event type — Conference, Gala, Corporate Event, Festival, or Custom. The template helps guide the AI to suggest appropriate equipment and crew roles for similar events. You can always skip template selection and provide your own detailed description.',
        tip: 'Using a template often produces results 20% faster because the AI starts with a reference frame instead of inferring everything from your description.',
      },
      {
        title: 'Review the AV & Technical card',
        content: 'After generation, the first section shows an "AV & Technical" card that groups Audio, Video, Lighting, and Staging together. This card displays the total item count for all AV categories, the budget range (low-high), and a subtotal. Click the card to expand and see individual line items with descriptions, quantities, and per-item budget ranges. This unified view makes it easy to understand your full technical production cost at a glance.',
        tip: 'The budget range reflects market variation — the low end is for standard-grade equipment with local vendors, the high end for premium solutions with crew redundancy.',
      },
      {
        title: 'Check crew recommendations and timeline',
        content: 'Scroll down to review the Crew Recommendations section (roles, headcount per role, daily rates) and the Event Timeline (suggested setup days, show days, strike, and technical milestones). Use these to inform your vendor quote requests and to set realistic expectations with your client about labor and scheduling. Save or export the entire plan as a PDF to share with stakeholders.',
        tip: 'Share the budget range with your client early to align on spend before going to market — this prevents sticker shock when vendor quotes arrive.',
      },
    ],
  },
  {
    slug: 'event-layout-designer',
    title: 'Event Layout Designer',
    description: 'Design your event floor plan visually — choose a venue template, place AV equipment shapes, and export a polished layout to PDF or PNG.',
    duration: '4 min',
    difficulty: 'intermediate',
    category: 'Proposals',
    mode: 'av',
    videoUrl: '',
    whatYouLearn: [
      'Opening the Layout tab inside a proposal',
      'Choosing a venue template as a starting point',
      'Adding and positioning AV equipment shapes',
      'Saving your layout to the proposal',
      'Exporting the layout as PDF or PNG',
    ],
    steps: [
      {
        title: 'Open the Layout tab',
        content: 'Open any proposal in the editor. In the tab bar at the top (Equipment | Terms & Details | Risk Plan | Layout), click "Layout". The Layout designer opens as a full-width canvas — blank if this is a new proposal, or showing a previously saved layout if you\'ve been here before.',
      },
      {
        title: 'Choose a venue template',
        content: 'In the left panel, click "Templates" and browse the available venue templates: Ballroom, Conference Room, Theatre, Outdoor Stage, Boardroom, and Exhibition Hall. Click a template to load it onto the canvas as a starting point. The template pre-draws the room boundaries, stage area, and standard seating rows so you don\'t have to start from scratch.',
        tip: 'Templates are starting points, not fixed layouts — every element can be moved, resized, or deleted after loading.',
      },
      {
        title: 'Add AV equipment shapes',
        content: 'In the left panel, switch to the "AV Elements" tab. Shapes are grouped by category: Audio (speakers, subwoofers, mixing position), Video (screens, LED panels, projectors, cameras), Lighting (moving heads, PAR cans, follow spots), and Staging (stage blocks, podium, truss). Drag any shape onto the canvas, then drag to reposition it. Use the handles to resize, and the rotate handle to angle speakers or screens correctly.',
      },
      {
        title: 'Save the layout',
        content: 'Click "Save Layout" in the top-right of the designer. The layout is attached to this proposal and visible to your client on the share page below the equipment table. Saving does not affect your equipment line items — it is a visual companion to the proposal, not a separate document.',
      },
      {
        title: 'Export to PDF or PNG',
        content: 'Click the "Export" button and choose PDF (for print-quality output suitable for including in a proposal pack) or PNG (for embedding in emails, presentations, or WhatsApp). The exported file includes your company logo in the corner, the event name, and a legend identifying each AV shape. PDF exports are A3 landscape by default for maximum detail.',
        tip: 'Include the layout PDF with your proposal PDF when quoting large or complex events — clients appreciate seeing exactly where each piece of gear will be placed.',
      },
    ],
  },
  {
    slug: 'two-factor-authentication',
    title: 'Two-Factor Authentication',
    description: 'Add an extra layer of security to your account by enabling two-factor authentication (2FA) with an authenticator app.',
    duration: '3 min',
    difficulty: 'beginner',
    category: 'Account',
    mode: 'both',
    videoUrl: '',
    whatYouLearn: [
      'Enabling 2FA from your Account settings',
      'Scanning the QR code with an authenticator app',
      'Entering the 6-digit code to confirm setup',
      'Storing backup codes safely',
    ],
    steps: [
      {
        title: 'Go to Account settings',
        content: 'Click "Account" in the sidebar (or click your profile avatar in the bottom-left and select "Account Settings"). Scroll down to the "Security" section. You\'ll see a "Two-Factor Authentication" card showing the current status — Disabled by default.',
      },
      {
        title: 'Click Enable 2FA',
        content: 'Click the "Enable 2FA" button. A setup dialog opens showing a QR code and a manual setup key below it. Open your authenticator app (Google Authenticator, Authy, 1Password, or any TOTP-compatible app) and scan the QR code. If your app doesn\'t support QR scanning, tap "Enter code manually" and type the key shown below the QR code.',
      },
      {
        title: 'Enter the 6-digit code',
        content: 'Your authenticator app will show a 6-digit time-based code that refreshes every 30 seconds. Enter the current code in the confirmation field in CueQuote and click "Verify & Enable". Once verified, 2FA is active immediately — every future login will require your password plus a code from your authenticator app.',
        tip: 'Enter the code promptly — TOTP codes expire after 30 seconds. If the code is rejected, wait for the next one to appear in your app and try again.',
      },
      {
        title: 'Save your backup codes',
        content: 'After enabling 2FA, CueQuote shows you 8 one-time backup codes. Download or copy them and store them in a secure place (password manager, printed sheet in a safe). If you ever lose access to your authenticator app, a backup code lets you log in and disable or reset 2FA. Each code can only be used once.',
        tip: 'Never store backup codes in the same place as your password. If someone gets both, 2FA provides no protection. A password manager with a separate 2FA-codes note is a good approach.',
      },
    ],
  },
  {
    slug: 'ocr-file-attachments',
    title: 'OCR File Attachments',
    description: 'Attach scanned PDFs or images to a proposal and let CueQuote automatically extract the text so the AI can read and use technical riders and equipment lists.',
    duration: '3 min',
    difficulty: 'beginner',
    category: 'Proposals',
    mode: 'both',
    videoUrl: '',
    whatYouLearn: [
      'Attaching files to a new proposal',
      'How OCR runs automatically on scanned documents',
      'Verifying the extracted text before generating',
      'Which file types and languages are supported',
    ],
    steps: [
      {
        title: 'Click Attachments on a new proposal',
        content: 'Start a new proposal and go to the "Attachments" section below the event description field. Click "Upload File" or drag and drop a file onto the upload zone. Supported formats are PDF, JPG, PNG, and TIFF. You can attach up to 5 files per proposal — each file can be up to 10 MB.',
      },
      {
        title: 'Upload a scanned PDF or image',
        content: 'Select your scanned technical rider, equipment list, venue floor plan, or event brief. Files that are already machine-readable PDFs (exported from Word, Excel, or a design tool) are processed instantly. Scanned documents and images are automatically sent to the OCR engine, which detects and extracts all text from the file. A processing spinner appears while OCR runs — this usually takes 5-15 seconds per page.',
      },
      {
        title: 'Verify the extracted text',
        content: 'Once OCR completes, click the attachment chip to expand the extracted text preview. Review the output to check that key details — equipment names, quantities, technical specifications — were captured correctly. If a scan is low resolution or skewed, some words may be misread. You can edit the extracted text directly in the preview field before generating the proposal.',
        tip: 'For best OCR accuracy, use scans at 300 DPI or higher. Avoid files where text overlaps graphics or uses very small fonts.',
      },
      {
        title: 'Generate the proposal with extracted content',
        content: 'Click "Generate Proposal". The AI receives both your written description and the full extracted text from all attachments as combined context. It merges both sources intelligently — picking up specific model numbers, quantities, and technical requirements from the rider even if you only wrote a brief summary in the description field.',
        tip: 'OCR supports English and Arabic text. Mixed-language documents (e.g., an Arabic rider with English equipment model names) are handled correctly — the AI reads both languages in the same document.',
      },
    ],
  },
  {
    slug: 'real-time-comment-notifications',
    title: 'Real-Time Comment Notifications',
    description: 'Get instant notifications when clients comment on your shared proposals so you never miss important feedback or revision requests.',
    duration: '2 min',
    difficulty: 'beginner',
    category: 'Proposals',
    mode: 'both',
    videoUrl: '',
    whatYouLearn: [
      'How real-time notifications work when clients comment',
      'What you see in the toast notification',
      'How to access comments from the bell icon',
      'Replying to comments directly from the editor',
    ],
    steps: [
      {
        title: 'Client comments on your shared proposal',
        content: 'When you send a proposal to a client, they receive a share link. On the share page, they can leave comments in the Comments panel at the bottom. Each comment is timestamped and attributed to their name. The moment they submit a comment, you are notified instantly.',
      },
      {
        title: 'You receive an instant toast notification',
        content: 'A toast notification appears in the bottom-right corner of your screen, showing the client\'s name, a preview of their comment (first ~50 characters), and the proposal title. The notification is color-coded by priority — revision requests appear in amber, general comments in blue. The toast auto-dismisses after 5 seconds, but you can click it to jump directly to the proposal.',
        tip: 'Keep the CueQuote app active in your browser to see toast notifications. If the app is not open, you\'ll still be notified via email and the bell icon.',
      },
      {
        title: 'Access comments via the bell icon',
        content: 'Click the bell icon (🔔) at the top-right of the navigation bar. A dropdown appears showing all unread comments and notifications, grouped by proposal. Each line shows the client name, preview text, and proposal title. Click any comment to open that proposal and jump to the Comments tab. Once you open the Comments tab, the bell badge count decreases.',
      },
      {
        title: 'Click "View & Reply" to respond',
        content: 'From the notification toast or bell dropdown, click the "View & Reply" link to jump directly to the proposal editor with the Comments tab open. All client comments appear in chronological order. Type your reply in the text field below any comment and press Send. Your reply is visible to the client immediately on the share page.',
        tip: 'Clients see a red badge on the Comments panel showing how many unread replies from you exist. Replying quickly keeps the conversation active.',
      },
    ],
  },
  {
    slug: 'website-quote-form',
    title: 'Put a quote form on your website',
    description: 'Let visitors describe their event on your own site and get an instant budget range — while you get the lead and a costed draft proposal.',
    duration: '4 min',
    difficulty: 'beginner',
    category: 'Setup',
    mode: 'av',
    whatYouLearn: [
      'Creating a widget key for your domains',
      'Pasting the form into your website',
      'What visitors see, and what stays private',
      'Handling the leads that arrive',
    ],
    steps: [
      {
        title: 'Create the form in Settings',
        content: 'Open Settings and find "Website quote form". Click "Set up the form", give it a name like "Main website", and list the domains it will run on. Enter both yourcompany.com and www.yourcompany.com if your site answers on both — the form only works on the domains you list, so a missing www is the most common reason it appears to do nothing.',
        tip: 'The widget is available on the Pro plan and above.',
      },
      {
        title: 'Copy the script tag',
        content: 'CueQuote shows a finished script tag with your key and brand colour already filled in. Copy it — there is nothing to edit.',
        tip: 'The key starts with cq_pub_ and is meant to be public. Never paste a cq_live_ API key onto a website; it is a secret.',
      },
      {
        title: 'Paste it into your website',
        content: 'Put the tag on the page where you want the form to appear. In WordPress use a Custom HTML block; in Squarespace a Code block; in Wix or Webflow an embed element. The form renders exactly where the tag sits, or you can point it somewhere specific with data-target.',
        tip: 'It renders in an isolated shadow root, so it cannot break your site layout and your CSS cannot break it.',
      },
      {
        title: 'Try it as a visitor would',
        content: 'Load the page, describe a real event, add a guest count and your own name and email, and submit. You should get a total budget range with a breakdown by category within a minute.',
        tip: 'If you see "This key is not enabled for…", the domain you are testing on is not on the key list — add it in Settings.',
      },
      {
        title: 'Handle the lead',
        content: 'You get an email straight away with the visitor\'s details, the range they were shown, and a button to the draft. In CueQuote there is a fully costed proposal waiting with the client already attached. Review the pricing, adjust anything, and send it.',
        tip: 'Visitors only ever see ranges. Your unit prices and equipment list are never exposed on your public site.',
      },
    ],
  },
  {
    slug: 'webhooks',
    title: 'Send proposal events to your CRM',
    description: 'Get an instant signed callback when a client views, accepts or rejects a proposal — so your own systems stay in step without anyone re-typing anything.',
    duration: '5 min',
    difficulty: 'advanced',
    category: 'Setup',
    mode: 'av',
    whatYouLearn: [
      'Adding an endpoint and choosing events',
      'Keeping your signing secret safe',
      'Verifying that a request really came from CueQuote',
      'Spotting an endpoint that has stopped working',
    ],
    steps: [
      {
        title: 'Add your endpoint',
        content: 'Open Settings and find "Webhooks". Click "Add endpoint" and paste the https URL that should receive the events. Tick the events you care about — most people start with proposal.accepted, because that is the one worth telling a CRM about.',
        tip: 'Webhooks are available on the Business plan. The URL must be https; plain http is refused.',
      },
      {
        title: 'Copy the signing secret',
        content: 'As soon as the endpoint is created you are shown a secret starting whsec_. Copy it into your environment variables now — it is shown exactly once, and there is no way to display it again.',
        tip: 'Lost it? Delete the endpoint and add it back. You will get a fresh secret.',
      },
      {
        title: 'Verify the signature',
        content: 'Every request carries an X-CueQuote-Signature header holding a timestamp and an HMAC-SHA256 of that timestamp plus the raw body, keyed with your secret. Recompute it and compare before trusting anything. Without this check, anyone who learns your URL can post fake proposals at you.',
        tip: 'Hash the raw body bytes. Parsing the JSON and re-serialising it changes the bytes, and the signature will never match — this is the single most common mistake.',
      },
      {
        title: 'Answer quickly',
        content: 'Return any 2xx status as soon as you have accepted the payload, then do the slow work afterwards. We give up after 10 seconds, and a timeout is recorded as a failure.',
        tip: 'Treat your handler as idempotent — key off the proposal id and event rather than assuming each event arrives exactly once.',
      },
      {
        title: 'Watch for failures',
        content: 'Back in Settings, each endpoint shows how many deliveries it received in the last 7 days and how many failed. A red "Failing" badge means your endpoint returned an error or timed out.',
        tip: 'Worth glancing at occasionally: when a CRM integration quietly breaks, nothing else tells you — proposals simply stop arriving.',
      },
    ],
  },
  {
    slug: 'getting-supplier-quotes',
    title: 'Getting Quotes From Suppliers',
    description: 'Ask several subcontractors what they charge, compare the answers side by side, and award one — without any of them seeing your prices or your client.',
    duration: '5 min',
    difficulty: 'intermediate',
    category: 'Setup',
    mode: 'both',
    whatYouLearn: [
      'Asking several suppliers for a price in one action',
      'What a supplier sees when they open the link',
      'Comparing quotes, including the ones that are not like-for-like',
      'Awarding a quote and turning it into a work order',
      'How many open inquiries each plan allows',
    ],
    steps: [
      {
        title: 'Open the Suppliers tab and click Get quotes',
        content: 'Open a job with line items, go to the Suppliers tab and click “Get quotes”. It sits next to “Sub work out”, and reads before it, because asking what something costs comes before committing to pay it.',
        tip: 'In AV mode you tick individual line items. In Planner mode you choose a whole section, exactly as work orders do.',
      },
      {
        title: 'Pick more than one supplier',
        content: 'The supplier list is multi-select on purpose. Asking one at a time is how you end up with a single quote and nothing to compare it against — tick every dry-hire house or trade you want a price from, and they each get their own link.',
      },
      {
        title: 'Say when you need the price',
        content: 'Set a “price needed by” date and add a covering note if the number depends on something — delivery included, crew not included, that sort of thing. The scope text is generated from the lines you picked and describes what they are supplying, not what the event is about.',
        tip: 'If the scope or your note names your client, CueQuote refuses to send and tells you which word to fix. An RFQ leaves the building exactly as a work order does.',
      },
      {
        title: 'Send, and pass on the links',
        content: 'Each supplier gets their own link with a Copy button. What they see is the quantities, the dates and the venue. What they never see is your prices, your client, or who else you asked.',
      },
      {
        title: 'Read the comparison properly',
        content: 'Quotes come back in the same tab, cheapest first, with the gap to the next quote shown in money rather than left for you to work out. Lines a supplier said they cannot cover are flagged on their card.',
        tip: 'A quote missing two of your six lines is not the cheapest quote — it is a different quote. That is why the flag is there rather than letting a smaller total speak for itself.',
      },
      {
        title: 'Award one',
        content: '“Award this quote” turns the winner into a work order at the price that supplier actually gave you, not at your own estimate. Their link stops working, and the work order behaves exactly like one you issued directly — same insurance check, same acceptance, same signature.',
        tip: 'Free plans can keep 6 inquiries open at once, Starter 30, Pro and above unlimited. Withdrawing one frees the slot.',
      },
    ],
  },
  {
    slug: 'supplier-compliance',
    title: 'Supplier Certificates and Expiry Alerts',
    description: 'Collect public liability, LOLER and the rest from each supplier, verify them yourself, and get told before they lapse.',
    duration: '6 min',
    difficulty: 'intermediate',
    category: 'Setup',
    mode: 'both',
    whatYouLearn: [
      'Seeing what a supplier holds and what is missing for this job',
      'Asking a supplier to upload certificates with no account',
      'Verifying an upload before it counts',
      'Why the check is dated against your load-out',
      'Expiry reminders, and who gets them',
    ],
    steps: [
      {
        title: 'Look at what is missing',
        content: 'Open a job\'s Suppliers tab and pick a supplier. Above the work orders you see what they hold and what is missing — dated against the day your crew is on site, not against today.',
        tip: 'Cover that is valid when you book and expires the week of the show is the failure this exists to catch. Checking against today would wave it straight through.',
      },
      {
        title: 'Ask for what is missing',
        content: 'Click “Request documents”. Whatever is already missing is pre-ticked; add anything else you want on file. You get a link to send them.',
        tip: 'Ask for what you actually need. Requesting everything every time is how a supplier learns to ignore your requests.',
      },
      {
        title: 'The supplier uploads',
        content: 'They open the link with no account and no password, and upload each certificate with an issue and expiry date. The expiry is required — a certificate with no expiry cannot satisfy a check dated against your load-out, so accepting one would be an upload that changes nothing.',
      },
      {
        title: 'Verify before it counts',
        content: 'An uploaded document sits as “Awaiting your check”. It does not clear the send gate until you verify it, so a supplier cannot unblock their own job by attaching a blank PDF. Rejecting one records why.',
        tip: 'This is deliberate. The screen never shows a document as satisfying a requirement that the database does not honour.',
      },
      {
        title: 'Blocked? Ask instead of overriding',
        content: 'If a work order is blocked, you now have three ways forward: override with a recorded reason, change supplier, or “Ask the supplier for it” — which sends the upload link without touching the draft order. Only the last one actually fixes the problem.',
      },
      {
        title: 'Expiry reminders',
        content: 'On Pro and above you are told 30 days out, 7 days out and on the day — but only for suppliers you have actually worked with in the last year. A certificate expiring for someone you used once in 2024 is not news, and a reminder feature that cries wolf gets filtered to trash.',
        tip: 'The vault itself — uploads, storage, verification and the send gate — is free on every plan. What the paid plans add is breadth and the automatic reminders.',
      },
    ],
  },
]
