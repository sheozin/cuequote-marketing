import type { Tutorial } from './types'

export const TUTORIALS_DE: Tutorial[] = [
  {
    slug: 'getting-started',
    title: 'Erste Schritte',
    description: 'Erstellen Sie Ihr CueQuote-Konto und versenden Sie Ihr erstes KI-gestütztes AV-Angebot in unter 10 Minuten.',
    duration: '5 Min.',
    difficulty: 'beginner',
    category: 'Grundlagen',
    videoUrl: '/videos/cuequote-walkthrough-master.mp4',
    whatYouLearn: [
      'Wie Sie Ihr CueQuote-Konto erstellen',
      'Einrichtung Ihres Unternehmensprofils und Brandings',
      'Erstellung Ihres ersten KI-generierten Angebots',
      'Herunterladen eines professionellen PDFs',
    ],
    steps: [
      {
        title: 'Bei CueQuote registrieren',
        content: 'Rufen Sie app.cuequote.com auf und klicken Sie auf "Konto erstellen". Geben Sie Ihren vollständigen Namen, Ihre E-Mail-Adresse und ein Passwort (mindestens 8 Zeichen) ein. Sie erhalten eine Bestätigungs-E-Mail — klicken Sie auf den Link, um Ihr Konto zu verifizieren. Der Bestätigungsbildschirm leitet Sie nach der Verifizierung automatisch weiter.',
        tip: 'Verwenden Sie Ihre geschäftliche E-Mail-Adresse, damit Kunden beim Versand von Angeboten einen professionellen Absender sehen.',
      },
      {
        title: 'Unternehmens-Onboarding abschließen',
        content: 'Nach der Verifizierung Ihrer E-Mail-Adresse werden Sie durch ein dreistufiges Onboarding geführt: Unternehmensdaten (Name, Land, Adresse, USt-IdNr.), Branding (Wahl Ihrer Markenfarbe — diese färbt Ihr gesamtes PDF) und Währung (Ihre Standardwährung für Angebote). Füllen Sie so viel wie möglich aus — all diese Informationen erscheinen auf Ihren Angeboten.',
      },
      {
        title: 'Firmenlogo hochladen',
        content: 'Gehen Sie in der Seitenleiste zu Einstellungen. Klicken Sie im Bereich Unternehmensprofil neben dem Logo-Platzhalter auf "Hochladen". Laden Sie eine PNG-, JPG- oder SVG-Datei hoch (max. 2 MB). Ihr Logo erscheint auf jedem Angebots-PDF und jeder Share-Seite und verleiht Ihren Angeboten ein professionelles Erscheinungsbild.',
        tip: 'Verwenden Sie ein quadratisches Logo mit transparentem Hintergrund für das beste Ergebnis auf hellen und dunklen PDF-Vorlagen.',
      },
      {
        title: 'Equipment zum Katalog hinzufügen',
        content: 'Gehen Sie in der Seitenleiste zu Katalog. Klicken Sie auf "Artikel hinzufügen" und geben Sie die Equipment-Details ein: Name, Kategorie (Audio, Video, Licht usw.), Standardeinheit (Tag, Stück, Set) und Standardpreis. Wenn die KI Angebote generiert, verwendet sie IHRE Katalogpreise anstelle generischer Schätzungen. Je mehr Artikel Sie hinzufügen, desto genauer werden Ihre Angebote.',
        tip: 'Beginnen Sie mit Ihren 10–20 am häufigsten angebotenen Artikeln. Sie können jederzeit weitere hinzufügen.',
      },
      {
        title: 'Ihr erstes Angebot erstellen',
        content: 'Klicken Sie in der Seitenleiste auf "Neues Angebot" oder auf die Schaltfläche im Dashboard. Beschreiben Sie Ihr Event in natürlicher Sprache — zum Beispiel: "Firmenkonferenz für 200 Teilnehmer mit PA-System, 6 Lavaliermikrofonen, 2 Handmikrofonen, LED-Wand 3x2m und einfacher Bühnenbeleuchtung." Fügen Sie Eventdatum, Veranstaltungsort und Teilnehmerzahl hinzu. Klicken Sie auf "Angebot generieren" und beobachten Sie, wie die KI Ihre Equipment-Liste in Echtzeit erstellt.',
      },
      {
        title: 'Prüfen und anpassen',
        content: 'Nach der Generierung prüfen Sie die von der KI vorgeschlagenen Positionen, organisiert nach Kategorie (Audio, Video, Licht, Personal, Transport). Sie können Mengen und Preise bearbeiten, Artikel hinzufügen oder entfernen sowie Artikel als optional kennzeichnen. Wechseln Sie zum Tab "Bedingungen & Details", um Einschlüsse, Ausschlüsse, Zahlungsbedingungen und AGB für dieses spezifische Angebot anzupassen.',
      },
      {
        title: 'PDF herunterladen',
        content: 'Klicken Sie auf das Download-Symbol in der Angebotskopfzeile, um ein professionelles PDF zu erstellen. Ihre Markenfarbe, Ihr Logo, Ihre Firmendetails und alle Positionen werden in einem hochwertigen, mehrseitigen Dokument formatiert — mit Deckblatt, Equipment-Tabellen, Summen, Zahlungsplan, Unterschriftenblock für die Annahme sowie AGB.',
        tip: 'Testen Sie verschiedene PDF-Vorlagen (Modern, Bold, Classic, Minimal) in den Einstellungen, um die passende für Ihre Marke zu finden.',
      },
    ],
  },
  {
    slug: 'ai-proposal-generation',
    title: 'KI-Angebotserstellung',
    description: 'Lernen Sie, wie die KI von CueQuote Ihre Eventbeschreibung analysiert und eine vollständige Equipment-Liste mit präziser Preisgestaltung erstellt.',
    duration: '4 Min.',
    difficulty: 'beginner',
    category: 'Angebote',
    whatYouLearn: [
      'Wie Sie effektive Eventbeschreibungen für die KI verfassen',
      'Wie die KI Equipment auf Basis Ihres Katalogs auswählt',
      'Ihr monatliches KI-Generierungskontingent und wie Sie es nicht verschwenden',
      'Den Streaming-Generierungsprozess verstehen',
      'Wie der Eventkontext die generierten Bedingungen beeinflusst',
    ],
    steps: [
      {
        title: 'Neues Angebot starten',
        content: 'Klicken Sie in der Seitenleiste oder im Dashboard auf "Neues Angebot". Sie gelangen in den dreistufigen Assistenten: Beschreiben → Generieren → Prüfen. Im ersten Schritt teilen Sie der KI mit, worum es bei Ihrem Event geht.',
      },
      {
        title: 'Eine detaillierte Eventbeschreibung verfassen',
        content: 'Je mehr Details Sie angeben, desto besser das Ergebnis der KI. Nennen Sie: die Art des Events (Konferenz, Gala, Festival), spezifische Equipment-Anforderungen (z. B. "6 Sennheiser EW-D Lavaliermikrofone"), Raumgröße oder Layoutdetails sowie besondere Anforderungen (Streaming, Simultandolmetschen, Outdoor-Aufbau). Die KI folgt den Scoping-Regeln der AV-Branche — sie ergänzt automatisch Mischpulte, wenn Mikrofone angegeben sind, Videomischer für Multi-Source-Setups und Traversen für Overhead-Beleuchtung.',
        tip: 'Sie können das Briefing eines Kunden direkt in das Beschreibungsfeld einfügen. Die KI extrahiert daraus, was sie benötigt.',
      },
      {
        title: 'Eventdetails eingeben',
        content: 'Unterhalb der Beschreibung legen Sie Eventdatum, Veranstaltungsort/Stadt, erwartete Teilnehmerzahl und Dauer in Tagen fest. Diese Angaben helfen der KI, klügere Entscheidungen zu treffen — mehrtägige Events werden beim Personal mit der Anzahl der Tage multipliziert, große Events (500+ Teilnehmer) erhalten zusätzliche Sicherheitsüberlegungen, und der Veranstaltungsort hilft bei der Bestimmung der Transportanforderungen.',
      },
      {
        title: 'Anforderungsdateien anhängen',
        content: 'Laden Sie technische Rider als PDF, Gerätelisten in Excel, Event-Briefs in Word oder Bilder von Raumplänen zusammen mit Ihrer Eventbeschreibung hoch. CueQuote extrahiert den Text und übergibt ihn der KI als zusätzlichen Kontext, was präzisere Angebote ermöglicht.',
        tip: 'Kombinieren Sie eine kurze schriftliche Beschreibung mit einem angehängten Rider für beste Ergebnisse — die KI verbindet beide Quellen.',
      },
      {
        title: 'Kunden auswählen',
        content: 'Wählen Sie einen bestehenden Kunden aus oder überspringen Sie diesen Schritt. Wenn Sie einen Kunden auswählen, beeinflusst dessen Typ (Direct, Agency, Venue, Corporate) die von der KI generierten Zahlungsbedingungen. Agency-Kunden erhalten automatisch NET-30-Bedingungen, während Corporate-Kunden die Standard-Anzahlung von 50 % erhalten.',
        tip: 'Wenn Sie Kunden zuerst anlegen, werden deren Daten automatisch ins PDF übernommen — Name, Ansprechpartner, E-Mail, Telefon.',
      },
      {
        title: 'Währung auswählen',
        content: 'Wählen Sie im Dropdown die Währung für dieses Angebot (EUR, USD, GBP, PLN, AED, EGP, CHF). Diese kann von Ihrer Unternehmensstandardwährung abweichen — nützlich bei internationalen Kunden.',
      },
      {
        title: 'Bestätigen, bevor die KI startet',
        content: 'Bevor CueQuote Ihr Angebot generiert, erscheint ein Bestätigungsdialog: "Dies verbraucht 1 Ihrer X KI-Angebote in diesem Monat. Sie haben Y verbleibend in Ihrem <Plan>-Tarif." Jeder Tarif hat ein monatliches KI-Kontingent — Free: 3, Starter: 15, Pro: 50, Business: unbegrenzt. Jede Generierung (einschließlich Wiederholungen) wird auf dieses Kontingent angerechnet, prüfen Sie daher Ihre Beschreibung vor der Bestätigung doppelt. Bei unbegrenzten Tarifen wird der Dialog übersprungen.',
        tip: '30 zusätzliche Sekunden für eine präzisere Beschreibung sparen meist einen ganzen Slot — die KI belohnt Genauigkeit, und eine verschwendete Generierung kostet Sie ein komplettes Angebot aus Ihrem Monatskontingent.',
      },
      {
        title: 'Der KI bei der Generierung zusehen',
        content: 'Klicken Sie auf "Angebot generieren" und beobachten Sie, wie die KI Equipment-Positionen in Echtzeit streamt. Artikel erscheinen nach Kategorie geordnet mit Mengen, Einheiten und Preisen. Die KI verwendet Ihre Katalogartikel und -preise, wenn verfügbar, und schlägt marktübliche Preise für Artikel außerhalb Ihres Katalogs vor (mit geschätztem Preis gekennzeichnet). Eine laufende Gesamtsumme aktualisiert sich, während die Artikel eingehen.',
        tip: 'Die KI verwendet Claude Haiku für einfache Events (unter 50 Teilnehmern, ein Tag) und Claude Sonnet für komplexe — so werden Kosten optimiert, ohne Qualität einzubüßen.',
      },
      {
        title: 'Das generierte Angebot prüfen',
        content: 'Nach Abschluss der Generierung sehen Sie alle Positionen nach Kategorie gruppiert mit einer vollständigen Zwischensumme. Die KI generiert außerdem sinnvolle Einschlüsse (z. B. "Professioneller Auf- und Abbau"), Ausschlüsse (z. B. "Generator-Miete für Outdoor-Veranstaltungsort") und vorgeschlagene Zahlungsbedingungen basierend auf dem Eventkontext. Klicken Sie auf "Prüfen & Speichern", um das Angebot zu speichern und den vollständigen Editor zu öffnen.',
      },
      {
        title: 'Im Editor feinjustieren',
        content: 'Der Editor hat zwei Tabs: "Equipment" für Positionen (Mengen und Preise bearbeiten, Zeilen hinzufügen/entfernen) und "Bedingungen & Details" für Einschlüsse, Ausschlüsse, Zahlungsplan und AGB. Alles, was die KI erzeugt hat, ist vollständig editierbar — betrachten Sie es als intelligenten Ausgangspunkt, nicht als Endprodukt.',
      },
    ],
  },
  {
    slug: 'customizing-pdf-templates',
    title: 'PDF-Vorlagen anpassen',
    description: 'Wechseln Sie zwischen 4 professionellen PDF-Stilen und verwenden Sie Ihre Markenfarbe für ein einheitliches Erscheinungsbild aller Angebote.',
    duration: '2 Min.',
    difficulty: 'beginner',
    category: 'Branding',
    whatYouLearn: [
      'Die 4 PDF-Vorlagenstile und wann man welchen verwendet',
      'Wie die Markenfarbe das gesamte PDF beeinflusst',
      'Vorlagen vor dem Versand in der Vorschau ansehen',
    ],
    steps: [
      {
        title: 'Zu den Einstellungen gehen',
        content: 'Klicken Sie in der Seitenleiste auf "Einstellungen", um Ihre Unternehmenseinstellungen zu öffnen. Scrollen Sie zum Bereich "Angebots-Branding" — hier steuern Sie das Erscheinungsbild jedes PDFs.',
      },
      {
        title: 'Markenfarbe festlegen',
        content: 'Klicken Sie auf die Farbauswahl oder geben Sie direkt einen Hex-Code ein. Ihre Markenfarbe prägt das gesamte PDF-Design — den Akzentstreifen oben, die Abschnittstitelbalken, Kategorie-Badges, die Hervorhebung des Gesamtbetrags, die Farben der Aufzählungspunkte und den Rand des Annahmekästchens. Wählen Sie eine Farbe, die Ihr Unternehmen repräsentiert.',
        tip: 'Testen Sie mit einer mittelgesättigten Farbe. Sehr helle Farben sind möglicherweise nicht sichtbar, und sehr dunkle Farben können zu schwer wirken.',
      },
      {
        title: 'PDF-Vorlage auswählen',
        content: 'Es werden vier Vorlagenkarten mit Mini-Vorschauen angezeigt. Modern: heller Hero-Bereich mit Karten und zebragestreiften Tabellen — klar und professionell. Bold: dunkler Hero-Bereich mit starker Betonung der Markenfarbe. Classic: traditioneller Briefkopf-Stil ohne Hero-Block — formal und zurückhaltend. Minimal: ultra-sauber mit dünnen Linien und maximalem Weißraum.',
      },
      {
        title: 'Jede Vorlage verstehen',
        content: 'Modern passt zu den meisten AV-Unternehmen — sie verbindet Professionalität mit visueller Wirkung. Bold ist ideal, wenn Ihre Markenfarbe markant ist und Sie Eindruck hinterlassen möchten. Classic eignet sich für Corporate-Kunden, die traditionelle Dokumentformate bevorzugen. Minimal funktioniert gut für High-End-Boutique-AV-Unternehmen.',
      },
      {
        title: 'Speichern und in Vorschau ansehen',
        content: 'Klicken Sie unten auf "Änderungen speichern". Öffnen Sie dann ein beliebiges Angebot und klicken Sie auf das Download-Symbol, um ein PDF zu erstellen. Öffnen Sie es, um Ihre Vorlage mit Ihrer Markenfarbe durchgängig angewendet zu sehen. Jedes neue Angebot verwendet diese Vorlage automatisch.',
      },
      {
        title: 'Vorlagen jederzeit wechseln',
        content: 'Sie können Vorlagen jederzeit in den Einstellungen ändern. Die Änderung wird sofort auf alle zukünftigen PDF-Downloads angewendet. Bereits geteilte Angebote verwenden die neue Vorlage beim nächsten Aufruf. So können Sie experimentieren, bis Sie das perfekte Erscheinungsbild gefunden haben.',
        tip: 'Testen Sie alle 4 Vorlagen mit einem echten Angebot, bevor Sie sich entscheiden. Die Mini-Vorschauen geben einen Hinweis, aber ein vollständiges PDF zu sehen, ist die beste Grundlage für die Wahl.',
      },
    ],
  },
  {
    slug: 'managing-equipment-catalog',
    title: 'Equipment-Katalog verwalten',
    description: 'Bauen Sie Ihre Equipment-Datenbank auf, damit die KI präzise Angebote mit Ihren tatsächlichen Preisen erstellt.',
    duration: '5 Min.',
    difficulty: 'intermediate',
    category: 'Setup',
    whatYouLearn: [
      'Wie Sie Equipment-Artikel anlegen und organisieren',
      'Equipment-Kategorien verstehen',
      'Wie der Katalog KI-generierte Angebote antreibt',
      'Einkaufspreise und Margen für zugekauftes Equipment nachverfolgen',
      'Massenimport aus Tabellenkalkulationen',
    ],
    steps: [
      {
        title: 'Zum Katalog navigieren',
        content: 'Klicken Sie in der Seitenleiste auf "Katalog". Sie sehen Ihre Equipment-Liste nach Kategorien geordnet. Wenn Sie gerade erst anfangen, ist sie leer — das ist normal. Der Katalog ist die Equipment-Datenbank Ihres Unternehmens, die die KI bei der Angebotserstellung nutzt.',
      },
      {
        title: 'Ersten Artikel hinzufügen',
        content: 'Klicken Sie auf "Artikel hinzufügen" (oder die "+"-Schaltfläche). Geben Sie den Artikelnamen ein (z. B. "Sennheiser EW-D Lavaliermikrofon"), wählen Sie eine Kategorie (Audio), die Standardeinheit (Stk., Tag, Set, qm, Meter, Event, Fahrt) und den Standardmietpreis. Dies ist der Preis, den die KI verwendet, wenn sie diesen Artikel in ein Angebot aufnimmt.',
        tip: 'Verwenden Sie konkrete Modellbezeichnungen. "Sennheiser EW-D Lavalier" ist besser als "Funkmikrofon" — es zeigt Kunden, dass Sie hochwertiges Equipment haben.',
      },
      {
        title: 'Kategorien verstehen',
        content: 'CueQuote hat 10 Equipment-Kategorien: Audio, Video, Licht, Simultandolmetschen, Streaming, Digital Signage, Bühne, Personal, Transport und Sonstiges. Die Kategorien bestimmen, wie Artikel in Angeboten und PDFs gruppiert werden. Die KI verwendet kategoriespezifische Scoping-Regeln — so ergänzt sie zum Beispiel automatisch ein Mischpult, wenn in der Kategorie Audio Mikrofone enthalten sind.',
      },
      {
        title: 'Genaue Standardpreise festlegen',
        content: 'Die Standardpreise sollten Ihre üblichen Miettarife widerspiegeln. Wenn die KI ein Angebot generiert, gleicht sie Artikel aus Ihrem Katalog anhand des Namens ab und verwendet Ihre Preise. Artikel, die nicht in Ihrem Katalog gefunden werden, erhalten geschätzte Marktpreise. Je mehr Artikel Sie mit korrekten Preisen hinzufügen, desto weniger müssen Sie nach der KI-Generierung nachbearbeiten.',
      },
      {
        title: 'Kosten und Margen verfolgen',
        content: 'Für Equipment, das Sie von anderen Anbietern zumieten, hinterlegen Sie Ihren Einkaufspreis im Katalog. Der Angebotseditor zeigt ein internes Margenpanel mit Umsatz, Kosten, Gewinn und Marge % — für Kunden niemals sichtbar. Lassen Sie die Kosten leer für Ihr eigenes Equipment.',
      },
      {
        title: 'Aus einer Tabellenkalkulation importieren',
        content: 'Für den Massenimport klicken Sie auf die Import-Schaltfläche und laden eine XLSX-Datei hoch. Ihre Tabelle sollte Spalten für Name, Kategorie, Einheit und Preis enthalten. Dies ist der schnellste Weg, Ihren Katalog zu füllen, wenn Sie bereits eine Equipment-Liste in Excel oder Google Sheets haben.',
      },
      {
        title: 'Aktive Artikel verwalten',
        content: 'Jeder Artikel hat einen Aktiv/Inaktiv-Schalter. Wird ein Artikel deaktiviert, bleibt er in Ihrer Datenbank, ist aber während der Angebotserstellung für die KI ausgeblendet. Nutzen Sie dies für saisonales Equipment oder vorübergehend nicht verfügbare Artikel. Sie können jederzeit reaktivieren.',
      },
      {
        title: 'Wie der Katalog die KI-Generierung speist',
        content: 'Wenn Sie ein Angebot erstellen, erhält die KI Ihren gesamten aktiven Katalog als Kontext. Sie gleicht Equipment aus der Eventbeschreibung mit Ihren Katalogartikeln ab und verwendet Ihre exakten Bezeichnungen und Preise. Wenn das Event etwas erfordert, das nicht im Katalog steht, fügt die KI es mit dem Präfix [CUSTOM] und einem geschätzten Preis hinzu — den Preis können Sie dann manuell anpassen.',
        tip: 'Ein Katalog mit 50–100 Artikeln deckt die meisten AV-Anforderungen ab. Beginnen Sie mit Ihrem Kern-Equipment und erweitern Sie ihn mit der Zeit.',
      },
    ],
  },
  {
    slug: 'client-management',
    title: 'Kundenverwaltung',
    description: 'Legen Sie Ihre Kunden an und organisieren Sie sie, damit Angebote automatisch mit deren Daten personalisiert werden.',
    duration: '3 Min.',
    difficulty: 'beginner',
    category: 'Grundlagen',
    whatYouLearn: [
      'Kundenprofile anlegen und bearbeiten',
      'Wie Kundentypen die KI-generierten Bedingungen beeinflussen',
      'Kunden mit Angeboten verknüpfen',
    ],
    steps: [
      {
        title: 'Zu Kunden gehen',
        content: 'Klicken Sie in der Seitenleiste auf "Kunden". Auf dieser Seite sehen Sie alle Ihre Kunden in einer durchsuchbaren Liste. Jede Kundenkarte zeigt Name, Ansprechpartner, E-Mail, Typ sowie die Anzahl der an ihn gesendeten Angebote.',
      },
      {
        title: 'Neuen Kunden anlegen',
        content: 'Klicken Sie auf "Kunden hinzufügen" und füllen Sie aus: Kunden-/Firmenname, Name des Ansprechpartners, E-Mail-Adresse, Telefonnummer und eventuelle Notizen. Alle diese Informationen erscheinen auf dem Angebots-PDF im Abschnitt "Angebot für" — achten Sie daher auf Korrektheit.',
      },
      {
        title: 'Den richtigen Kundentyp wählen',
        content: 'Wählen Sie einen von vier Typen: Direct (Endkunden, die Ihre Leistungen direkt buchen), Agency (Event-Agenturen, die die Kundenbeziehung betreuen), Venue (Hotels oder Veranstaltungsorte mit eigenem AV-Bedarf) oder Corporate (Unternehmen mit wiederkehrenden Eventprogrammen). Der Kundentyp ist nicht nur ein Etikett — er beeinflusst, wie die KI Zahlungsbedingungen generiert.',
        tip: 'Agency-Kunden erhalten automatisch NET-30-Zahlungsbedingungen (0 % Anzahlung, Restzahlung in 30 Tagen), da Agenturen typischerweise auf Rechnung zahlen. Corporate-Kunden erhalten die Standard-Anzahlung von 50 %.',
      },
      {
        title: 'Kunden mit Angeboten verknüpfen',
        content: 'Beim Erstellen eines neuen Angebots können Sie im Dropdown einen bestehenden Kunden auswählen. Name, Ansprechpartner, E-Mail und Telefon des Kunden erscheinen auf dem PDF-Deckblatt und im Abschnitt "Angebot für". Sie können auch direkt aus dem Angebotserstellungs-Workflow einen neuen Kunden anlegen.',
      },
      {
        title: 'Angebotsverlauf des Kunden ansehen',
        content: 'Klicken Sie auf einen beliebigen Kunden, um alle zugehörigen Angebote zu sehen. So erhalten Sie einen schnellen Überblick über die Geschäftsbeziehung — Anzahl der gesendeten Angebote, deren Status (Entwurf, gesendet, gewonnen, verloren) und Gesamtvolumen. Nützlich, wenn ein wiederkehrender Kunde nach einem neuen Angebot fragt.',
      },
      {
        title: 'Kundendaten bearbeiten',
        content: 'Klicken Sie auf die Bearbeiten-Schaltfläche auf einer Kundenkarte, um die Informationen zu aktualisieren. Änderungen wirken sich auf alle zukünftigen Angebote aus — bestehende Angebote behalten die Daten, die sie zum Zeitpunkt der Erstellung hatten. So bleiben versendete Angebote korrekt, selbst wenn sich die Kontaktdaten des Kunden ändern.',
      },
    ],
  },
  {
    slug: 'terms-details-editor',
    title: 'Bedingungen & Details-Editor',
    description: 'Passen Sie Einschlüsse, Ausschlüsse, Zahlungsbedingungen und AGB für jedes Angebot individuell an.',
    duration: '4 Min.',
    difficulty: 'intermediate',
    category: 'Angebote',
    whatYouLearn: [
      'Einschlüsse und Ausschlüsse pro Angebot bearbeiten',
      'Individuelle Zahlungsbedingungen festlegen',
      'AGB-Abschnitte verwalten',
      'Intelligente Warnungen zur Fehlervermeidung nutzen',
    ],
    steps: [
      {
        title: 'Tab "Bedingungen" öffnen',
        content: 'Öffnen Sie ein Angebot im Editor. Unterhalb der Kopfzeile sehen Sie zwei Tabs: "Equipment" (Standard, zeigt Positionen) und "Bedingungen & Details". Klicken Sie auf "Bedingungen & Details", um den Bedingungs-Editor zu öffnen. Jeder Abschnitt wird anhand Ihrer Eventbeschreibung von der KI vorausgefüllt oder aus Ihren Unternehmensstandards, wenn keine KI-Bedingungen generiert wurden.',
      },
      {
        title: 'Einschlüsse bearbeiten',
        content: 'Im Abschnitt "Was enthalten ist" ist alles aufgeführt, was Ihr Angebot abdeckt. Jeder Eintrag ist ein Textfeld — per Klick direkt bearbeiten. Einträge mit der X-Schaltfläche entfernen, neue mit "+ Einschluss hinzufügen" ergänzen. Typische Einschlüsse: oben gelistetes Equipment, professioneller Auf- und Abbau, technischer Support vor Ort, Equipment-Versicherung.',
      },
      {
        title: 'Ausschlüsse bearbeiten',
        content: 'Der Abschnitt "Was nicht enthalten ist" grenzt ab, was außerhalb des Leistungsumfangs liegt. Das verhindert spätere Streitigkeiten. Typische Ausschlüsse: Location-Gebühren und Genehmigungen, Stromanschlüsse über Standard hinaus, Content-Erstellung (Grafiken, Video), Änderungen weniger als 48 Stunden vor dem Event. Die KI fügt kontextspezifische Ausschlüsse hinzu — Outdoor-Events erhalten "Generator-Miete", internationale Events "Zoll und Einfuhrabgaben".',
        tip: 'Klare Ausschlüsse sind ebenso wichtig wie Einschlüsse. Sie schützen Sie vor Scope Creep und schaffen die richtigen Kundenerwartungen.',
      },
      {
        title: 'Zahlungsbedingungen festlegen',
        content: 'Zwei Felder steuern Ihren Zahlungsplan: Anzahlung in % (0–100) und Restzahlung (Tage vor dem Event). Eine Vorschauzeile zeigt genau, was im PDF stehen wird: "50 % Anzahlung bei Annahme, 50 % Restzahlung 7 Tage vor dem Event". Die KI setzt diese Werte anhand des Kundentyps — Agenturen erhalten 0 % Anzahlung mit 30-Tage-Bedingungen.',
      },
      {
        title: 'Auf-/Abbautage-Preisgestaltung',
        content: 'Konfigurieren Sie, wie Equipment an Auf- und Abbautagen berechnet wird. Wählen Sie 0 % (kostenlos), 50 % (halber Tarif) oder 100 % (voller Tarif) in den Einstellungen. Jedes Angebot kann den Standard überschreiben. Personal wird immer zum vollen Tagessatz für alle Tage berechnet.',
        tip: 'Die meisten AV-Unternehmen berechnen 50 % für Auf-/Abbautage — Kunden erwarten es, und es deckt ab, dass Ihr Equipment gebunden ist, ohne im Showbetrieb genutzt zu werden.',
      },
      {
        title: 'AGB bearbeiten',
        content: 'Der AGB-Bereich ist ein Akkordeon — klicken Sie auf einen Abschnittstitel, um ihn auszuklappen und zu bearbeiten. Standardabschnitte umfassen Gültigkeit, Zahlungsbedingungen, Stornierungsrichtlinie, Equipment & Schäden sowie Verfügbarkeit. Sie können Titel und Fließtext jedes Abschnitts bearbeiten, neue Abschnitte hinzufügen oder nicht benötigte entfernen.',
      },
      {
        title: 'Den Platzhalter {company_name} verwenden',
        content: 'Geben Sie in AGB-Texten {company_name} ein und er wird im PDF automatisch durch den tatsächlichen Namen Ihres Unternehmens ersetzt. Zum Beispiel: "Das gesamte Equipment bleibt Eigentum von {company_name}" wird im generierten PDF zu "Das gesamte Equipment bleibt Eigentum von AVE Events".',
      },
      {
        title: 'Auf Unternehmensstandards zurücksetzen',
        content: 'Jeder Abschnitt hat in der Kopfzeile einen Link "Auf Standard zurücksetzen". Ein Klick stellt diesen Abschnitt auf Ihre unternehmensweiten Standards zurück (in Einstellungen → Angebots-Standards festgelegt). Das ist nützlich, wenn Sie Bedingungen für einen Kunden angepasst haben und für einen anderen frisch starten möchten.',
      },
      {
        title: 'Auf intelligente Warnungen achten',
        content: 'Gelbe Warnbanner erscheinen oben im Tab "Bedingungen", wenn etwas Ihre Aufmerksamkeit verdient. Warnungen umfassen: 0 % Anzahlung bei Angeboten über 5.000 (riskant), leere Einschlüsse (können zu Streit führen), fehlende AGB (unprofessionell) sowie ein Veranstaltungsort, der von Ihrer Unternehmensadresse abweicht (internationale Bedingungen in Betracht ziehen). Diese Hinweise sind rein informativ — Sie können sie schließen, wenn sie nicht zutreffen.',
      },
    ],
  },
  {
    slug: 'sharing-tracking-proposals',
    title: 'Angebote teilen & nachverfolgen',
    description: 'Senden Sie Angebote an Kunden und verfolgen Sie, wann diese sie ansehen, annehmen oder ablehnen.',
    duration: '3 Min.',
    difficulty: 'beginner',
    category: 'Angebote',
    whatYouLearn: [
      'Angebote per E-Mail versenden',
      'Per Link teilen',
      'Kundenengagement nachverfolgen',
      'Wie Kunden annehmen oder ablehnen',
    ],
    steps: [
      {
        title: 'Senden-Dialog öffnen',
        content: 'Klicken Sie im Angebots-Editor oben rechts auf die grüne Schaltfläche "Senden". Es öffnet sich ein Dialog, in dem Sie die E-Mail zu Ihrem Angebot verfassen können. Ist ein Kunde verknüpft, wird dessen E-Mail-Adresse vorausgefüllt.',
      },
      {
        title: 'Personalisierte Begrüßung — automatisch ausgefüllt',
        content: 'CueQuote füllt automatisch eine personalisierte Begrüßung aus, die Ihren Kunden namentlich anspricht und den Angebotstitel erwähnt. Die E-Mail weist den Kunden darauf hin, den Link zur Überprüfung und Beantwortung zu nutzen, und wird mit Ihrem Firmennamen unterzeichnet. Sie können die Nachricht vor dem Senden bearbeiten oder löschen. Die E-Mail enthält Ihr Firmenlogo, Angebotsdetails, den Gesamtpreis und eine auffällige Schaltfläche „Angebot ansehen".',
      },
      {
        title: 'Senden oder Link kopieren',
        content: 'Klicken Sie auf "Senden", um die E-Mail zu versenden, oder auf das Link-Symbol, um die Share-URL zu kopieren. Der Share-Link funktioniert ohne Login — jeder mit dem Link kann das Angebot ansehen. Nutzen Sie die Option Link kopieren für WhatsApp, Slack oder andere Messaging-Kanäle.',
        tip: 'Der Angebotsstatus wechselt beim E-Mail-Versand automatisch auf "Gesendet".',
      },
      {
        title: 'Verfolgen, wann Kunden ansehen',
        content: 'Zurück im Dashboard und in der Angebotsliste sehen Sie Statusaktualisierungen. Öffnet ein Kunde Ihr Angebot, wechselt der Status auf "Angesehen" und Sie sehen das Datum der ersten Ansicht, das Datum der letzten Ansicht sowie die Gesamtzahl der Aufrufe. So wissen Sie, ob Ihr Angebot aktiv geprüft wird.',
      },
      {
        title: 'Kunde prüft das Angebot',
        content: 'Die Share-Seite zeigt eine professionelle, gebrandete Ansicht Ihres Angebots: Firmenkopf, Eventdetails, alle Equipment-Positionen nach Kategorie mit Preisen, Summen, Einschlüsse/Ausschlüsse, Zahlungsbedingungen und einen Notizbereich. Sie ist bewusst wie ein formales Geschäftsdokument gestaltet und nicht wie ein schlichter Kostenvoranschlag.',
      },
      {
        title: 'Kunde nimmt an oder lehnt ab',
        content: 'Am Ende der Share-Seite sieht der Kunde die Schaltflächen "Angebot annehmen" und "Ablehnen". Klickt er auf Annehmen, wechselt der Angebotsstatus in Ihrem Dashboard auf "Gewonnen". Lehnt er ab, wird er zu "Verloren". Sie werden über beide Antworten informiert, und der Status ist in der Angebotsliste sichtbar.',
      },
      {
        title: 'E-Signatur bei der Annahme',
        content: 'Bei der Annahme zeichnet der Kunde seine Unterschrift auf einer Zeichenfläche, gibt seinen vollständigen Namen ein und bestätigt, dass er den Bedingungen zustimmt. Die gezeichnete Unterschrift, der Zeitstempel und die Geräteinformationen werden als rechtlicher Nachweis gespeichert und erscheinen im heruntergeladenen PDF.',
      },
      {
        title: 'Kundenengagement verfolgen',
        content: 'Nachdem ein Kunde Ihr Angebot angesehen hat, zeigt der Angebots-Editor ein Analyse-Panel mit der Gesamtverweildauer, Scrolltiefe, Aufrufen, PDF-Downloads und einer Aufschlüsselung der Zeit pro Abschnitt. Nutzen Sie diese Erkenntnisse für eine effektive Nachverfolgung.',
      },
      {
        title: 'Jederzeit das PDF herunterladen',
        content: 'Klicken Sie auf das Download-Symbol in der Angebotskopfzeile, um das PDF zu erstellen. Das PDF enthält alles: Deckblatt mit Firmen-Branding, Leistungsumfang, Equipment-Tabellen nach Kategorie, Summen-Karte, Einschlüsse/Ausschlüsse, Zahlungsplan, Unterschriftenblock und vollständige AGB. Teilen Sie das PDF als Anhang oder drucken Sie es für persönliche Termine aus.',
      },
      {
        title: 'Risikobewertungsplan',
        content: 'Erstellen Sie eine KI-gestützte Risikobewertung für Ihr Event im Tab Risikoplan. Die KI analysiert Ihr Equipment, den Veranstaltungsort und die Teilnehmerzahl, um Risiken und Maßnahmenpläne in 8 Kategorien zu identifizieren: Geräteausfall, Stromausfall, Netzwerk, Dolmetschen, Wetter, Crew, Zeitplan und Sicherheit. Starter-Tarife erhalten 3 Basiskategorien; Pro schaltet alle 8 mit Bearbeitung und PDF-Einbindung frei.',
      },
      {
        title: 'Angebote regenerieren',
        content: 'Müssen Sie ein Angebot aktualisieren? Nutzen Sie Regenerieren im Mehr-Menü, anstatt ein neues zu erstellen. Wählen Sie Vollständig (alle Positionen ersetzen), Intelligent (Ihre Bearbeitungen beibehalten) oder Aus Datei (aktualisierte Spezifikation hochladen). Ihr Kunde, Termine, Veranstaltungsort und Konditionen bleiben erhalten. Die Regenerierung wird nicht auf Ihr monatliches Angebotskontingent angerechnet.',
      },
    ],
  },
  {
    slug: 'billing-subscription',
    title: 'Abrechnung & Abonnement',
    description: 'Verstehen Sie die Tarife von CueQuote, upgraden Sie Ihr Konto und verwalten Sie Ihre Abrechnung.',
    duration: '3 Min.',
    difficulty: 'intermediate',
    category: 'Konto',
    whatYouLearn: [
      'Die 4 Abo-Tarife vergleichen',
      'Wie Sie mit einer kostenlosen Testphase upgraden',
      'Zahlungsmethoden und Rechnungen verwalten',
      'Credit-Pakete für Pay-as-you-go',
    ],
    steps: [
      {
        title: 'Zu Abrechnung gehen',
        content: 'Klicken Sie in der Seitenleiste auf "Abrechnung". Die Abrechnungsseite zeigt Ihren aktuellen Tarif, die in diesem Monat verbrauchten Angebote und alle verfügbaren Tarife. Im Free-Tarif können Sie 3 Angebote pro Monat erstellen.',
      },
      {
        title: 'Tarife vergleichen',
        content: 'Vier Tarife stehen zur Auswahl: Free (3 Angebote/Monat, Basis-PDF), Starter für 39 pro Monat (15 Angebote, vollständiges Branding, Kundenverwaltung), Pro für 99 pro Monat (50 Angebote, individuelle Vorlagen, Analytics) und Business für 199 pro Monat (unbegrenzte Angebote, API-Zugriff, Premium-Support). Wechseln Sie zwischen monatlicher und jährlicher Abrechnung — die jährliche spart 20 %.',
      },
      {
        title: 'Auf einen kostenpflichtigen Tarif upgraden',
        content: 'Klicken Sie bei einem kostenpflichtigen Tarif auf "3-Tage-Test starten". Sie werden zum Stripe Checkout weitergeleitet, wo Sie Ihre Zahlungsdaten eingeben. Alle kostenpflichtigen Tarife enthalten eine 3-tägige kostenlose Testphase — es erfolgt keine Belastung bis zum Ende der Testphase. Sie können während der Testphase jederzeit kostenlos kündigen.',
        tip: 'Nach dem Upgrade erhalten Sie eine Bestätigungs-E-Mail mit Ihren Tarifdetails und Funktionen.',
      },
      {
        title: 'Abonnement verwalten',
        content: 'Nach Abschluss des Abos klicken Sie auf "Abrechnung verwalten", um das Stripe Customer Portal zu öffnen. Hier können Sie Ihre Zahlungsmethode aktualisieren, frühere Rechnungen einsehen und herunterladen, zwischen Tarifen wechseln oder Ihr Abonnement kündigen. Alle Änderungen werden zum Ende des aktuellen Abrechnungszeitraums wirksam.',
      },
      {
        title: 'Rechnungen herunterladen',
        content: 'Klicken Sie im Stripe-Portal auf eine frühere Zahlung, um die Rechnung als PDF anzusehen und herunterzuladen. Die Rechnungen enthalten Firmenname, Adresse, USt-IdNr. und Zahlungsdetails — fertig für Ihre Buchhaltung.',
      },
      {
        title: 'Credit-Pakete kaufen',
        content: 'Sie möchten kein monatliches Abonnement? Kaufen Sie stattdessen Angebots-Credits. Ein 3er-Paket kostet 19 (6,33 je Credit) und ein 10er-Paket 49 (4,90 je Credit). Credits verfallen nie und enthalten alle Premium-Funktionen wie gebrandete PDFs. Ideal für Unternehmen, die saisonal Angebote erstellen.',
      },
      {
        title: 'Nutzung überwachen',
        content: 'Die Abrechnungsseite zeigt, wie viele Angebote Sie in diesem Monat verbraucht haben. Der Angebotszähler wird an Ihrem Abrechnungsdatum zurückgesetzt. Wenn Sie Ihr Limit erreichen, können Sie entweder auf einen höheren Tarif upgraden oder ein Credit-Paket kaufen, um weitere Angebote zu erstellen.',
      },
    ],
  },
  {
    slug: 'client-portal',
    title: 'Kundenportal',
    description: 'Bieten Sie Ihren Kunden einen eigenen Zugang, um alle ihre Angebote und Rechnungen einzusehen.',
    duration: '2 Min.',
    difficulty: 'intermediate',
    category: 'Angebote',
    whatYouLearn: [
      'Wie sich Kunden für das Portal registrieren',
      'Was Kunden in ihrem Portal-Dashboard sehen',
      'Kundenzugang und Berechtigungen verwalten',
      'Kundenzugang bei Bedarf widerrufen',
    ],
    steps: [
      {
        title: 'Kundenregistrierung',
        content: 'Wenn Sie ein Angebot senden, erhält der Kunde eine Einladung zur Erstellung eines Portal-Kontos. Er klickt auf den Link in der E-Mail, legt ein Passwort fest und erhält Zugang zu seinem persönlichen Dashboard. Hat der Kunde bereits ein Konto, erscheint das neue Angebot automatisch.',
      },
      {
        title: 'Was Kunden sehen',
        content: 'Im Portal sehen Kunden ein Dashboard mit allen Angeboten und Rechnungen, die Sie mit ihnen geteilt haben. Jeder Eintrag zeigt Titel, Datum, Status und Gesamtbetrag. Kunden können jedes Angebot öffnen, um es zu prüfen, anzunehmen oder abzulehnen, das PDF herunterzuladen und Rechnungen einzusehen — alles an einem Ort.',
      },
      {
        title: 'Kundenzugang verwalten',
        content: 'Gehen Sie in Ihrem CueQuote-Dashboard zu Kunden und wählen Sie einen Kunden aus, um seinen Portal-Status zu sehen. Sie können die Einladung erneut senden, das Passwort zurücksetzen oder den Zugang vollständig widerrufen. Das Widerrufen des Zugangs deaktiviert die Anmeldung sofort — der Kunde kann Angebote und Rechnungen erst wieder einsehen, wenn Sie den Zugang wiederherstellen.',
      },
    ],
  },
]
