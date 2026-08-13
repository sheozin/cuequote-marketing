import type { Tutorial } from './types'

export const TUTORIALS_DE: Tutorial[] = [
  {
    slug: 'getting-started',
    title: 'Erste Schritte',
    description: 'Erstellen Sie Ihr CueQuote-Konto und versenden Sie Ihr erstes KI-gestütztes AV-Angebot in unter 10 Minuten.',
    duration: '5 Min.',
    difficulty: 'beginner',
    category: 'Grundlagen',
    mode: 'both',
    videoUrl: '/videos/cuequote-walkthrough-master.mp4',
    whatYouLearn: [
      'Wie Sie Ihr CueQuote-Konto erstellen',
      'Einrichtung Ihres Unternehmensprofils und Brandings',
      'Erstellung Ihres ersten KI-generierten Angebots',
      'Herunterladen eines professionellen PDFs',
    ],
    steps: [
      {
        title: 'Mit dem Kostenrechner beginnen (optional)',
        content: 'Wenn Sie unsicher sind, was Ihre Veranstaltung kosten sollte, öffnen Sie zuerst den AV-Kostenrechner auf cuequote.com. Wählen Sie das Land der Veranstaltung, legen Sie Teilnehmerzahl und Tage fest und wählen Sie Video, Licht und Bühne. Passt die Schätzung, klicken Sie auf „Mit dieser Schätzung fortfahren“ — Ihre Konfiguration wird durch die Registrierung mitgenommen und Ihr erstes Angebot öffnet sich bereits ausgefüllt.',
        tip: 'Technik und Personal werden je Markt getrennt kalkuliert, sodass die Schätzung den tatsächlichen Veranstaltungsort abbildet statt eines globalen Mittelwerts.',
      },
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
    mode: 'both',
    videoUrl: '/videos/getting-started.mp4',
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
        content: 'Bevor CueQuote Ihr Angebot generiert, erscheint ein Bestätigungsdialog: "Dies verbraucht 1 Ihrer X KI-Angebote in diesem Monat. Sie haben Y verbleibend in Ihrem <Plan>-Tarif." Jeder Tarif hat ein monatliches KI-Kontingent — Free: 3, Starter: 10, Pro: 40, Business: 120. Jede Generierung (einschließlich Wiederholungen) wird auf dieses Kontingent angerechnet, prüfen Sie daher Ihre Beschreibung vor der Bestätigung doppelt. Bei unbegrenzten Tarifen wird der Dialog übersprungen.',
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
    mode: 'both',
    videoUrl: '/videos/pdf-templates.mp4',
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
    mode: 'av',
    videoUrl: '/videos/getting-started.mp4',
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
    mode: 'both',
    videoUrl: '/videos/client-management.mp4',
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
    mode: 'both',
    videoUrl: '/videos/sharing-and-tracking.mp4',
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
        content: 'Geben Sie in AGB-Texten {company_name} ein und er wird im PDF automatisch durch den tatsächlichen Namen Ihres Unternehmens ersetzt. Zum Beispiel: "Das gesamte Equipment bleibt Eigentum von {company_name}" wird im generierten PDF zu "Das gesamte Equipment bleibt Eigentum von AVE Event Solutions".',
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
    mode: 'both',
    videoUrl: '/videos/sharing-and-tracking.mp4',
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
    mode: 'both',
    videoUrl: '/videos/billing-and-subscriptions.mp4',
    whatYouLearn: [
      'Die 4 Abo-Tarife vergleichen',
      'Wie Sie auf einen kostenpflichtigen Tarif upgraden',
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
        content: 'Vier Tarife stehen zur Auswahl: Free (3 Angebote/Monat, Basis-PDF), Starter für €29 pro Monat (10 Angebote, vollständiges Branding, Kundenverwaltung), Pro für €79 pro Monat (40 Angebote, individuelle Vorlagen, Analytics) und Business für €179 pro Monat (120 Angebote, API-Zugriff, Premium-Support). Wechseln Sie zwischen monatlicher und jährlicher Abrechnung — die jährliche spart 20 %.',
      },
      {
        title: 'Auf einen kostenpflichtigen Tarif upgraden',
        content: 'Klicken Sie bei einem kostenpflichtigen Tarif auf "Kostenlos starten". Sie werden zum Stripe Checkout weitergeleitet, wo Sie Ihre Zahlungsdaten eingeben. Ihr Abonnement beginnt sofort nach der Zahlung.',
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
        content: 'Monatslimit erreicht? Kaufen Sie ein 5er-Paket Angebots-Credits für 29 (5,80 je Credit). Credits sind 12 Monate gültig und enthalten alle Premium-Funktionen wie gebrandete PDFs. Ideal für Unternehmen, die einige zusätzliche Angebote über ihr Planlimit hinaus benötigen.',
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
    mode: 'both',
    videoUrl: '/videos/client-portal.mp4',
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
  {
    slug: 'invoice-payments-corrections',
    title: 'Zahlungen & Rechnungskorrekturen',
    description: 'Teilzahlungen erfassen, Zahlungsverlauf verfolgen, Korrekturrechnungen ausstellen und Rechnungsstatus verwalten.',
    duration: '4 Min.',
    difficulty: 'intermediate',
    category: 'Rechnungen',
    mode: 'both',
    videoUrl: '/videos/invoice-payments.mp4',
    whatYouLearn: [
      'Voll- und Teilzahlungen auf Rechnungen erfassen',
      'Zahlungsverlauf einsehen und Bezahlt-Status zurücksetzen',
      'Korrekturrechnungen mit Vorher/Nachher-Nachverfolgung ausstellen',
      'Rechnungsstatus manuell ändern',
    ],
    steps: [
      {
        title: 'Zahlung erfassen',
        content: 'Öffnen Sie eine beliebige Rechnung und sehen Sie sich die Zusammenfassungs-Seitenleiste rechts an. Unter „Offener Betrag" klicken Sie auf die grüne Schaltfläche „Zahlung erfassen". Geben Sie den erhaltenen Betrag ein, wählen Sie das Datum, eine Zahlungsmethode (Überweisung, Bargeld, Karte, Scheck oder Sonstige) und optional eine Referenznummer. Klicken Sie auf „Zahlung speichern" — die Rechnung wird automatisch auf „Teilweise" gesetzt, wenn der Betrag unter dem Gesamtbetrag liegt, oder auf „Bezahlt", wenn vollständig beglichen.',
        tip: 'Sie können mehrere Teilzahlungen über die Zeit erfassen. Jede wird separat im Zahlungsverlauf unterhalb der Notizen nachverfolgt.',
      },
      {
        title: 'Zahlungsverlauf einsehen',
        content: 'Scrollen Sie unter den Notizbereich, um die Zahlungsverlauf-Karte zu sehen. Jede erfasste Zahlung zeigt den Betrag, das Datum, ein Zahlungsmethoden-Badge und Referenznotizen. Die Summe aller Zahlungen wird unten angezeigt. Sie können einzelne Zahlungseinträge löschen, falls diese fehlerhaft eingegeben wurden — klicken Sie auf das Papierkorb-Symbol neben der jeweiligen Zahlung.',
      },
      {
        title: 'Bezahlte Rechnung zurücksetzen',
        content: 'Wenn Sie eine Rechnung versehentlich als bezahlt markiert haben, sehen Sie in der Zusammenfassungs-Seitenleiste unter dem grünen „Bezahlt"-Badge den Link „Rückgängig — als unbezahlt markieren". Klicken Sie darauf und bestätigen Sie. Die Rechnung wird auf den korrekten Status basierend auf den tatsächlich erfassten Zahlungen zurückgesetzt: „Teilweise" bei vorhandenen Zahlungen, „Gesendet" bei vorherigem Versand oder andernfalls „Entwurf".',
      },
      {
        title: 'Rechnungsstatus ändern',
        content: 'Klicken Sie auf das farbige Status-Badge neben der Rechnungsnummer (z. B. „Entwurf", „Gesendet"). Ein Dropdown erscheint mit allen verfügbaren Status: Entwurf, Gesendet, Angesehen, Teilweise, Bezahlt, Überfällig und Storniert. Wählen Sie den neuen Status — er wird sofort gespeichert. Bei Wechsel zu „Gesendet" wird der Versandzeitstempel automatisch erfasst.',
        tip: 'Nutzen Sie dies, um Rechnungen manuell als „Überfällig" zu markieren oder einen Status bei Bedarf zurückzusetzen.',
      },
      {
        title: 'Korrekturrechnung ausstellen',
        content: 'Für Rechnungen, die bereits gesendet oder bezahlt wurden und Korrekturen benötigen, klicken Sie auf das Korrektursymbol (kreisförmiger Pfeil) in der Kopfzeilen-Toolbar. Bestätigen Sie die Aktion — eine neue Korrekturrechnung wird mit dem Suffix „/COR" erstellt (z. B. INV-0006/COR). Alle Positionen werden vom Original kopiert, wobei die ursprünglichen Werte als Snapshot gespeichert werden.',
      },
      {
        title: 'Korrektur bearbeiten',
        content: 'Bearbeiten Sie auf der Korrekturrechnung die zu korrigierenden Positionen — ändern Sie Mengen, Preise oder fügen Sie Positionen hinzu/entfernen Sie diese. Geänderte Positionen zeigen automatisch den ursprünglichen Betrag durchgestrichen neben dem neuen Betrag an, sodass der Kunde genau sehen kann, was sich geändert hat. Füllen Sie das Feld „Korrekturgrund" aus, um zu erläutern, warum die Rechnung angepasst wurde (z. B. „Preisanpassung gemäß Kundenvereinbarung"). Senden Sie die Korrekturrechnung an den Kunden.',
        tip: 'Die Originalrechnung bleibt unverändert mit einem Banner, das auf die Korrektur verweist. Die Korrekturrechnung hat ein Banner, das zurück zum Original verlinkt — vollständiger Prüfpfad.',
      },
    ],
  },
  {
    slug: 'invoicing',
    title: 'Rechnungen erstellen',
    description: 'Erstellen Sie professionelle Rechnungen aus Ihren angenommenen Angeboten mit Ihren Zahlungsdetails und versenden Sie sie an Kunden.',
    duration: '4 Min.',
    difficulty: 'intermediate',
    category: 'Rechnungen',
    mode: 'both',
    videoUrl: '/videos/invoicing.mp4',
    whatYouLearn: [
      'Wie Sie Rechnungen aus Angeboten erstellen',
      'Einrichtung Ihrer Zahlungsmethoden (Bank, PayPal)',
      'Rechnungen versenden und Zahlungen nachverfolgen',
      'Anzahlungs- vs. Gesamtrechnungen',
      'Auf-/Abbautage-Preisgestaltung',
    ],
    steps: [
      {
        title: 'Zahlungsmethoden hinzufügen',
        content: 'Gehen Sie zu Einstellungen → Tab Zahlungen. Klicken Sie auf „Zahlungsmethode hinzufügen" und geben Sie Ihre Bankdaten ein (Kontoinhaber, Bank, IBAN, SWIFT) oder Ihre PayPal-E-Mail. Diese Angaben erscheinen auf jeder Rechnung, die Sie versenden. Sie können mehrere Methoden hinzufügen und eine als Standard festlegen.',
        tip: 'Fügen Sie mindestens ein Bankkonto hinzu — die meisten B2B-Kunden bevorzugen Banküberweisung für AV-Equipment-Zahlungen.',
      },
      {
        title: 'Rechnung aus einem Angebot erstellen',
        content: 'Öffnen Sie ein beliebiges Angebot, das gesendet oder angenommen wurde. Klicken Sie auf die Schaltfläche „Rechnung erstellen" in der Kopfzeile. Sie werden gefragt, ob eine Anzahlungsrechnung (basierend auf Ihrem Anzahlungsprozentsatz) oder eine Gesamtrechnung (100 % der Summe) erstellt werden soll. CueQuote übernimmt alle Positionen, Kundendaten und Preise aus dem Angebot.',
      },
      {
        title: 'Rechnung prüfen und anpassen',
        content: 'Der Rechnungseditor öffnet sich mit vorausgefüllten Daten aus dem Angebot. Prüfen Sie die Rechnungsnummer (automatisch generiert als INV-0001, INV-0002...), Ausstellungsdatum, Fälligkeitsdatum und Positionen. Sie können jedes Feld bearbeiten, Artikel hinzufügen oder entfernen sowie Mengen oder Preise anpassen.',
      },
      {
        title: 'Zahlungsmethode auswählen',
        content: 'Wählen Sie im Dropdown aus, welche Zahlungsmethode auf der Rechnung angezeigt werden soll. Die Details der gewählten Methode (IBAN, SWIFT usw.) erscheinen im Abschnitt „Zahlungshinweise" des Rechnungs-PDFs zusammen mit der Rechnungsnummer als Referenz.',
      },
      {
        title: 'Rechnungs-PDF herunterladen',
        content: 'Klicken Sie auf die Download-Schaltfläche, um ein professionelles Rechnungs-PDF zu erstellen. Es enthält Ihr Unternehmens-Branding, eine formelle „RECHNUNG"-Kopfzeile, Positionstabelle, Summen mit MwSt., Zahlungshinweise mit Ihren Bankdaten und eine Referenznummer. Wenn eine Rechnung als bezahlt markiert ist, erscheint ein grünes „BEZAHLT"-Wasserzeichen.',
      },
      {
        title: 'Rechnung senden und nachverfolgen',
        content: 'Klicken Sie auf „Senden", um die Rechnung per E-Mail an Ihren Kunden zu versenden — mit dem PDF im Anhang. CueQuote ergänzt automatisch eine personalisierte Begrüßung mit dem Namen Ihres Kunden. Der Rechnungsstatus wechselt von Entwurf auf Gesendet. Sobald Sie die Zahlung erhalten, klicken Sie auf „Als bezahlt markieren", um sie zu erfassen. Sie können auch Teilzahlungen erfassen.',
        tip: 'Bitten Sie Ihre Kunden in einer Notiz, die Rechnungsnummer als Zahlungsreferenz anzugeben — das erleichtert den Abgleich erheblich.',
      },
      {
        title: 'Auf-/Abbautage-Preisgestaltung',
        content: 'CueQuote unterscheidet zwischen Eventtagen und Aufbau- (Installation) sowie Abbautagen (Demontage). Equipment wird an Auf-/Abbautagen zu einem konfigurierbaren Satz berechnet — 0 % (kostenlos), 50 % (halber Tarif) oder 100 % (voller Tarif). Personal wird immer zum vollen Tagessatz für alle Tage berechnet. Ihren Unternehmensstandard legen Sie unter Einstellungen > Angebote fest.',
        tip: 'In Polen sind 50 % Equipment-Satz an Aufbautagen üblich. Im Golf und MENA-Raum sind 100 % typisch. Legen Sie Ihren Standard einmal fest und vergessen Sie es.',
      },
    ],
  },
  {
    slug: 'team-management',
    title: 'Teamverwaltung',
    description: 'Laden Sie Teammitglieder ein, weisen Sie Rollen zu und arbeiten Sie gemeinsam an Angeboten in Ihrem Unternehmen.',
    duration: '3 Min.',
    difficulty: 'intermediate',
    category: 'Konto',
    mode: 'both',
    videoUrl: '/videos/team-management.mp4',
    whatYouLearn: [
      'Wie Sie Teammitglieder zu Ihrem Workspace einladen',
      'Die vier Rollen und was jede darf',
      'Teammitglieder verwalten und entfernen',
      'Wie Daten beim Beitritt eines Mitglieds migriert werden',
    ],
    steps: [
      {
        title: 'Teamseite aufrufen',
        content: 'Gehen Sie in der Seitenleiste zu Team. Sie sehen eine Liste aller aktuellen Teammitglieder mit Namen, E-Mail-Adressen, Rollen und dem Beitrittsdatum.',
      },
      {
        title: 'Neues Mitglied einladen',
        content: 'Klicken Sie auf „Mitglied einladen" und geben Sie die E-Mail-Adresse der Person ein. Wählen Sie eine Rolle: Owner (Vollzugriff einschließlich Abrechnung), Admin (Vollzugriff außer Abrechnung), Sales (Angebote erstellen, Kunden und Katalog verwalten) oder Viewer (nur Dashboard-Lesezugriff).',
        tip: 'Verwenden Sie die Sales-Rolle für Ihr Angebotsteam — sie können Angebote erstellen und Kunden verwalten, aber keine Abrechnungs- oder Unternehmenseinstellungen ändern.',
      },
      {
        title: 'Teammitglied tritt bei',
        content: 'Die eingeladene Person erhält eine E-Mail mit einem Link. Hat sie bereits ein CueQuote-Konto, klickt sie auf den Link, meldet sich an und sieht eine Seite zum Annehmen/Ablehnen. Ist sie neu, registriert sie sich zuerst und nimmt dann die Einladung an.',
      },
      {
        title: 'Daten werden automatisch migriert',
        content: 'Wenn ein Teammitglied Ihre Einladung annimmt, werden seine bestehenden Angebote, Kunden, Katalogartikel und Rechnungen automatisch in den Workspace Ihres Teams verschoben. Nichts geht verloren — der alte, leere Workspace wird bereinigt. Eine Bestätigung wird vor dem Annehmen angezeigt.',
        tip: 'Das bedeutet, neue Mitarbeiter können auf ihrem eigenen Konto Angebote erstellen, und wenn sie Ihrem Team beitreten, kommt die gesamte Arbeit mit.',
      },
      {
        title: 'Rollen ändern oder Mitglieder entfernen',
        content: 'Klicken Sie auf ein Teammitglied, um dessen Rolle zu ändern oder es aus Ihrem Workspace zu entfernen. Nur Owner können andere Teammitglieder verwalten. Das Entfernen eines Mitglieds entzieht sofort den Zugriff.',
      },
    ],
  },
  {
    slug: 'scope-templates',
    title: 'Scope-Vorlagen',
    description: 'Speichern und verwenden Sie Angebotskonfigurationen für wiederkehrende Eventtypen wieder, um schneller Angebote zu erstellen.',
    duration: '4 Min.',
    difficulty: 'intermediate',
    category: 'Angebote',
    mode: 'both',
    videoUrl: '/videos/scope-templates.mp4',
    whatYouLearn: [
      'Vorlagen von Grund auf erstellen',
      'Bestehende Angebote als Vorlage speichern',
      'Scope-only vs. vollständige Vorlagen (mit Positionen)',
      'Vorlagen nutzen, um schneller Angebote zu erstellen',
    ],
    steps: [
      {
        title: 'Vorlagenseite aufrufen',
        content: 'Gehen Sie in der Seitenleiste zu Vorlagen. Hier sehen Sie alle gespeicherten Vorlagen mit Eventtyp, Beschreibung, Teilnehmerbereich und ob sie vorkonfigurierte Positionen enthalten.',
      },
      {
        title: 'Vorlage von Grund auf erstellen',
        content: 'Klicken Sie auf „Neue Vorlage" und konfigurieren Sie Eventtyp, Name, Beschreibung und Teilnehmerbereich. Optional können Sie Positionen mit Mengen und Preisen hinzufügen, um eine vollständige Vorlage zu erstellen.',
        tip: 'Beginnen Sie mit Ihrem häufigsten Eventtyp — Konferenzen, Gala-Dinners oder Produktpräsentationen. Jede Vorlage spart Ihnen 5–10 Minuten pro Angebot.',
      },
      {
        title: 'Angebot als Vorlage speichern',
        content: 'Öffnen Sie ein fertiges Angebot im Editor und klicken Sie auf „Als Vorlage speichern". Alle Positionen, Mengen und Preise werden übernommen. Geben Sie einen aussagekräftigen Namen ein und speichern Sie.',
      },
      {
        title: 'Vorlage beim Erstellen eines Angebots verwenden',
        content: 'Beim Erstellen eines neuen Angebots erscheinen Ihre Vorlagen als Schnellstart-Karten über dem Beschreibungsfeld. Klicken Sie auf eine, um Beschreibung und Einstellungen vorzufüllen. Handelt es sich um eine vollständige Vorlage mit Positionen, können Sie die KI-Generierung komplett überspringen.',
      },
      {
        title: 'Scope-only vs. vollständige Vorlagen',
        content: 'Scope-only-Vorlagen füllen die Eventbeschreibung vor, nutzen aber dennoch die KI, um die Equipment-Liste zu generieren. Vollständige Vorlagen enthalten vorkonfigurierte Positionen und überspringen die KI-Generierung — klicken Sie auf „Vorlage verwenden" für ein sofortiges Angebot ohne KI-Kosten.',
        tip: 'Verwenden Sie vollständige Vorlagen für Events, die Sie jedes Mal identisch anbieten (z. B. einen Standard-Konferenzraum-Aufbau). Verwenden Sie Scope-only-Vorlagen, wenn die Beschreibung ähnlich ist, aber das Equipment variiert.',
      },
    ],
  },
  {
    slug: 'smart-suggestions',
    title: 'Intelligente Vorschläge',
    description: 'CueQuote analysiert Ihre bisherigen Angebote, um fehlende Artikel vorzuschlagen, Preisinkonsistenzen zu erkennen und Kataloglücken zu identifizieren.',
    duration: '3 Min.',
    difficulty: 'intermediate',
    category: 'Angebote',
    mode: 'both',
    videoUrl: '/videos/smart-suggestions.mp4',
    whatYouLearn: [
      'Intelligente Vorschläge in Angeboten aktivieren',
      'Häufig verwendete Artikel hinzufügen, die möglicherweise fehlen',
      'Preise anhand Ihrer historischen Durchschnittswerte anpassen',
      'Ihren Katalog aus echten Angebotsdaten erweitern',
    ],
    steps: [
      {
        title: 'Intelligente Vorschläge aktivieren',
        content: 'Öffnen Sie ein beliebiges Angebot und sehen Sie sich die Tab-Leiste an (Equipment | Bedingungen & Details | Risikoplan). Auf der rechten Seite finden Sie einen Glühbirnen-Toggle „Smart". Klicken Sie darauf, um Vorschläge zu aktivieren — er wird bernsteinfarben, wenn aktiv. Ihre Einstellung wird automatisch gespeichert und gilt für alle Angebote.',
        tip: 'Intelligente Vorschläge benötigen mindestens 3 gesendete Angebote mit ähnlichen Artikeln, um aussagekräftige Empfehlungen zu generieren. Je mehr Angebote Sie erstellen, desto intelligenter wird es.',
      },
      {
        title: 'Fehlende Artikel prüfen',
        content: 'Klicken Sie auf das Banner „Intelligente Vorschläge" über der Equipment-Tabelle, um es aufzuklappen. Der Tab „Fehlende Artikel" zeigt Artikel, die Sie häufig in ähnlichen Angeboten verwenden, aber in diesem noch nicht hinzugefügt haben. Jeder Vorschlag zeigt einen Konfidenzprozentsatz (z. B. „85 %" bedeutet, dass Sie ihn in 85 % Ihrer vergangenen Angebote verwenden), durchschnittliche Preise aus Ihrer Historie und mit welchen aktuellen Artikeln er üblicherweise kombiniert wird. Klicken Sie auf „Hinzufügen", um einen Vorschlag mit seinem Durchschnittspreis einzufügen.',
      },
      {
        title: 'Preishinweise prüfen',
        content: 'Wechseln Sie zum Tab „Preisanpassung". Hier werden Artikel in Ihrem aktuellen Angebot markiert, die mehr als 15 % über oder unter Ihrem üblichen Preis liegen. Jeder Hinweis zeigt Ihren aktuellen Preis im Vergleich zum historischen Durchschnitt sowie die Min-Max-Spanne aus vergangenen Angeboten. Ein roter Pfeil bedeutet, dass Sie mehr als üblich berechnen; ein grüner weniger. Klicken Sie auf „Durchschnitt verwenden", um Ihren historischen Durchschnittspreis anzuwenden.',
        tip: 'Dies ist besonders nützlich, wenn Sie Artikel über mehrere Angebote wiederverwenden — es erkennt versehentliche Preisänderungen oder veraltete Tarife.',
      },
      {
        title: 'Kataloglücken füllen',
        content: 'Der Tab „Zum Katalog hinzufügen" zeigt Artikel, die Sie in 2 oder mehr Angeboten verwendet, aber nie in Ihren Equipment-Katalog aufgenommen haben. Jeder Eintrag zeigt, wie oft Sie ihn verwendet haben, und den Durchschnittspreis. Klicken Sie auf „Zum Katalog hinzufügen", um einen Katalogeintrag mit dem vorausgefüllten Durchschnittspreis zu erstellen — beim nächsten Mal können Sie ihn aus Ihrem Katalog auswählen, anstatt ihn manuell einzugeben.',
      },
    ],
  },
  {
    slug: 'inventory-management',
    title: 'Inventarverwaltung',
    description: 'Verfolgen Sie physisches AV-Equipment mit Seriennummern, Zustandsbewertungen, Verfügbarkeitskalender und Zuweisung zu einzelnen Veranstaltungen.',
    duration: '5 Min.',
    difficulty: 'intermediate',
    category: 'Setup',
    mode: 'av',
    whatYouLearn: [
      'Equipment-Einheiten mit Seriennummern und Zustandsbewertungen anlegen',
      'Inventar nach Kategorie, Zustand und Standort filtern und durchsuchen',
      'Konkrete Equipment-Einheiten zu Veranstaltungen zuweisen',
      'Verfügbarkeit verfolgen und Kalenderkonflikte erkennen',
      'Servicelogs erfassen und Wartungspläne verwalten',
    ],
    steps: [
      {
        title: 'Equipment-Einheit hinzufügen',
        content: 'Gehen Sie in der Seitenleiste zu Inventar und klicken Sie auf „Einheit hinzufügen". Geben Sie Name, Kategorie, Seriennummer, Zustand (Ausgezeichnet, Gut, Wartung erforderlich, Außer Betrieb) und Lagerort ein. Jede Inventareinheit wird unabhängig von den Katalogpositionen nachverfolgt — der Katalog repräsentiert Ihr Sortiment, das Inventar jedes einzelne physische Gerät, das Sie besitzen.',
        tip: 'Fotografieren Sie jede Einheit beim Anlegen — das erleichtert die Identifikation bei Ausgabe und Rücknahme im Schadensfall.',
      },
      {
        title: 'Inventar durchsuchen und filtern',
        content: 'Die Inventarliste ermöglicht die Filterung nach Kategorie (Audio, Video, Licht usw.), Zustand und Lagerort. Sie können auch nach Seriennummer oder Name suchen. Jede Position zeigt ihren aktuellen Status — Verfügbar, Einer Veranstaltung zugewiesen, In Wartung oder Außer Betrieb — so haben Sie stets einen aktuellen Überblick über Ihre Ressourcen.',
      },
      {
        title: 'Equipment zu Veranstaltungen zuweisen',
        content: 'Öffnen Sie eine Veranstaltung oder ein Angebot und wechseln Sie zum Tab Inventar. Klicken Sie auf „Equipment zuweisen" und wählen Sie konkrete Einheiten aus der Liste verfügbarer Ressourcen. Das System prüft automatisch Kalenderkonflikte — ist eine Einheit im gleichen Zeitraum bereits einer anderen Veranstaltung zugewiesen, werden Sie vor der Bestätigung darüber informiert.',
        tip: 'Weisen Sie Equipment frühzeitig zu, um Doppelbuchungen in der Hochsaison zu vermeiden.',
      },
      {
        title: 'Verfügbarkeit verfolgen',
        content: 'Die Kalenderansicht im Bereich Inventar zeigt jede Equipment-Einheit auf einer Zeitachse mit den eingetragenen Buchungen. So sehen Sie auf einen Blick, welche Geräte an einem bestimmten Datum frei und welche belegt sind. Konflikte werden rot hervorgehoben, was die Planung der technischen Crew und die Transportkoordination erleichtert.',
      },
      {
        title: 'Wartung verwalten',
        content: 'Für jede Einheit können Sie Serviceeinträge erfassen: Prüfdatum, Beschreibung der durchgeführten Arbeiten, Kosten und den nächsten Wartungstermin planen. Als „In Wartung" markiertes Equipment wird bei der Veranstaltungsplanung automatisch aus den verfügbaren Ressourcen ausgeschlossen. Der Serviceverlauf ist vollständig durchsuchbar und exportierbar.',
      },
    ],
  },
  {
    slug: 'crew-scheduling',
    title: 'Crew-Einsatzplanung',
    description: 'Verwalten Sie Ihr technisches Personal — Festangestellte und Freelancer — weisen Sie es Veranstaltungen zu, erstellen Sie Crew-Vorbereitungsbögen und verfolgen Sie den Verfügbarkeitskalender.',
    duration: '5 Min.',
    difficulty: 'intermediate',
    category: 'Setup',
    mode: 'av',
    whatYouLearn: [
      'Crew-Mitglieder mit Rollen, Honoraren und Verfügbarkeit anlegen',
      'Crew-Liste nach Spezialisierung, Beschäftigungsstatus und Verfügbarkeit filtern',
      'Crew zu Veranstaltungen mit Rollen und Arbeitszeiten zuweisen',
      'Crew-Vorbereitungsbögen mit Zeitplan und Equipment-Liste generieren',
      'Crew-Verfügbarkeitskalender einsehen, um Konflikte zu vermeiden',
    ],
    steps: [
      {
        title: 'Crew-Mitglieder hinzufügen',
        content: 'Gehen Sie in der Seitenleiste zum Bereich Crew und klicken Sie auf „Crew-Mitglied hinzufügen". Geben Sie Vor- und Nachname, Spezialisierung (Tontechniker, Lichttechniker, Videotechniker, Technischer Leiter, Fahrer usw.), Tages- oder Stundenhonorar, Kontaktdaten und Beschäftigungsart (Festangestellt oder Freelancer) ein. Optional können Sie Notizen zu Zertifikaten oder Spezialfähigkeiten hinzufügen.',
        tip: 'Hinterlegen Sie die private Telefonnummer jedes Technikers — das ist unerlässlich bei kurzfristigen Crew-Änderungen kurz vor einer Veranstaltung.',
      },
      {
        title: 'Crew-Liste filtern',
        content: 'Die Crew-Liste lässt sich nach Spezialisierung, Beschäftigungsstatus (Festangestellt/Freelancer) und Verfügbarkeit in einem bestimmten Zeitraum filtern. So finden Sie schnell geeignete Techniker, ohne die gesamte Liste manuell durchzusehen. Jede Karte zeigt den aktuellen Verfügbarkeitsstatus der betreffenden Person.',
      },
      {
        title: 'Crew zu Veranstaltungen zuweisen',
        content: 'Wechseln Sie in der Veranstaltungsansicht zum Tab Crew und klicken Sie auf „Crew-Mitglieder zuweisen". Wählen Sie Techniker aus der Liste verfügbarer Ressourcen, legen Sie die Rolle für diese konkrete Veranstaltung fest und geben Sie die geplanten Arbeitsstunden ein. Das System prüft Kalenderkonflikte in Echtzeit — ist ein Techniker zum gleichen Zeitpunkt bereits anderweitig eingeplant, werden Sie sofort informiert.',
        tip: 'Bestimmen Sie für jede Veranstaltung einen technischen Leiter — das verbessert die Kommunikation vor Ort und erleichtert die Logistikkoordination.',
      },
      {
        title: 'Crew-Vorbereitungsbögen generieren',
        content: 'Nach Abschluss der Crew-Zusammenstellung klicken Sie auf „Crew-Vorbereitungsbogen generieren", um ein PDF mit dem vollständigen Zeitplan herunterzuladen. Das Dokument enthält die zugewiesenen Techniker mit ihren Rollen, den Zeitplan für Anreise und Pausen, die Equipment-Liste für die Beladung, Kontaktdaten des Veranstaltungsortes sowie Sonderanweisungen. Die Bögen können direkt per E-Mail an jeden Techniker versendet werden.',
      },
      {
        title: 'Crew-Kalender einsehen',
        content: 'Der Crew-Kalender zeigt alle Mitglieder auf einer gemeinsamen Zeitachse mit ihren eingetragenen Einsätzen. So erkennen Sie auf Anhieb, welche Techniker an einem bestimmten Datum verfügbar sind, und können die Arbeitsbelastung des gesamten Teams beurteilen. Die Ansicht ist besonders hilfreich bei der Planung mehrerer paralleler Veranstaltungen und der Optimierung des Personaleinsatzes.',
      },
    ],
  },
  {
    slug: 'proposal-comparison',
    title: 'Angebotsvergleich',
    description: 'Vergleichen Sie Lieferantenangebote anhand von Share-Tokens, Wertebewertungen, Positionsvergleichen, Konditionen und KI-Empfehlungen.',
    duration: '4 Min.',
    difficulty: 'intermediate',
    category: 'Angebote',
    mode: 'both',
    whatYouLearn: [
      'Lieferantenangebote über Share-Links zum Vergleich hinzufügen',
      'Lieferantenkarten mit Wertebewertungen und Kennzahlen einsehen',
      'Kostenpositionen über Lieferantenangebote hinweg vergleichen',
      'Zahlungskonditionen, Vertragsstrafen und Haftungsausschlüsse gegenüberstellen',
    ],
    steps: [
      {
        title: 'Angebote zum Vergleich hinzufügen',
        content: 'Gehen Sie zum Bereich Angebotsvergleich und klicken Sie auf „Angebot hinzufügen". Fügen Sie den Share-Token oder -Link eines Lieferantenangebots ein — CueQuote ruft die Angebotsdaten automatisch ab und fügt sie der Vergleichstabelle hinzu. Sie können bis zu 5 Angebote gleichzeitig hinzufügen. Jedes hinzugefügte Angebot wird auf Vollständigkeit und erforderliche Abschnitte validiert.',
        tip: 'Bitten Sie Lieferanten, ihre Angebote direkt über CueQuote zu teilen — Share-Tokens stellen sicher, dass Sie die aktuellen Dokumentversionen vergleichen.',
      },
      {
        title: 'Lieferantenkarten einsehen',
        content: 'Jeder Lieferant wird auf einer eigenen Karte mit automatisch berechnetem Wert-Score (0–100), Gesamtpreis, Positionsanzahl und Kernangebots-Parametern angezeigt. Der Wert-Score berücksichtigt das Preis-Leistungs-Verhältnis und die Qualität der Konditionen. Karten können nach Preis, Wert-Score oder Lieferantenname sortiert werden.',
      },
      {
        title: 'Kostenpositionen vergleichen',
        content: 'Die Positionsvergleichsansicht stellt jede Kostenposition aus allen Angeboten in einer Tabelle gegenüber. Fehlende Positionen (wenn ein Lieferant etwas berechnet hat, was ein anderer nicht berücksichtigt hat) werden klar markiert, was die Beurteilung der Leistungsumfänge erleichtert. Die Ansicht kann nach Kategorie (Audio, Video, Licht usw.) gefiltert oder nach Preisdifferenz sortiert werden.',
      },
      {
        title: 'Konditionen und Ausschlüsse gegenüberstellen',
        content: 'Der Tab Konditionen stellt Zahlungspläne, Stornierungsrichtlinien, Haftungsausschlüsse und Angebotsgültigkeiten aller Lieferanten nebeneinander dar. Unterschiede werden automatisch gelb hervorgehoben, damit Sie keine wesentlichen Abweichungen in den Vertragsbedingungen übersehen.',
      },
      {
        title: 'KI-Empfehlung nutzen',
        content: 'Klicken Sie auf „KI-Analyse", um eine automatische Auswertung der gesammelten Angebote zu erhalten. Die KI identifiziert das stärkste Angebot nach Preis-Leistung, erkennt fehlende Positionen bei einzelnen Lieferanten, weist auf nicht standardkonforme Klauseln hin und formuliert eine Empfehlung mit Begründung. Die Analyse ist direkt in einen Entscheidungsbericht für Ihren Kunden kopierbar.',
      },
    ],
  },
  {
    slug: 'proposal-comments',
    title: 'Angebots-Kommentare',
    description: 'Kunden können direkt im Angebot kommentieren, auf einzelne Positionen verweisen, Revisionsanfragen stellen, und der Kontoinhaber kann antworten.',
    duration: '3 Min.',
    difficulty: 'beginner',
    category: 'Angebote',
    mode: 'both',
    whatYouLearn: [
      'Wie Kunden Kommentare zu einem Angebot hinzufügen und auf Positionen verweisen',
      'Formalisierte Revisionsanfragen mit Änderungsbeschreibung einreichen',
      'Auf Kundenkommentare aus dem Angebots-Editor heraus antworten',
      'Revisionen als erledigt markieren und den Änderungsverlauf verwalten',
    ],
    steps: [
      {
        title: 'Kundenkommentare',
        content: 'Auf der Angebots-Share-Seite sieht der Kunde ein Kommentar-Symbol neben jeder Position sowie einen Button „Kommentar hinzufügen" im Gesamtbereich. Ein Klick öffnet das Kommentar-Panel, in dem der Kunde seine Bedenken oder Fragen beschreiben kann. Der Kommentar erscheint sofort im Angebots-Editor des Kontoinhabers — ohne Seitenaktualisierung.',
        tip: 'Informieren Sie Ihren Kunden beim Versand des Angebots über die Kommentarfunktion — sie verkürzt die Revisionsdauer erheblich im Vergleich zur E-Mail-Korrespondenz.',
      },
      {
        title: 'Revisionsanfragen',
        content: 'Der Kunde kann eine Änderungsanfrage formalisieren, indem er bei einer bestimmten Position oder für das gesamte Angebot auf „Revision anfordern" klickt. Im Formular beschreibt er die gewünschten Änderungen (z. B. Mengenänderung, Positionsersatz, Anpassung der Zahlungskonditionen). Die Anfrage gelangt als Aufmerksamkeit-erfordernder Eintrag mit einer Referenznummer zur Nachverfolgung in den Angebots-Editor.',
      },
      {
        title: 'Antworten des Kontoinhabers',
        content: 'Öffnen Sie das Angebot im Editor und wechseln Sie zum Tab Kommentare. Neben jedem Kundenkommentar wird ein Antwortfeld angezeigt. Sie können mit einer Erklärung antworten, eine vorgenommene Änderung bestätigen oder um Präzisierung bitten. Die Antwort ist sofort auf der Angebots-Share-Seite für den Kunden sichtbar. Die gesamte Korrespondenz wird in einem chronologischen Thread archiviert.',
      },
      {
        title: 'Revisionen abschließen',
        content: 'Nach Umsetzung der gewünschten Änderungen klicken Sie bei der jeweiligen Revisionsanfrage auf „Als erledigt markieren". Der Status wechselt zu Erledigt und ist sowohl für Sie als auch für den Kunden sichtbar. Kommentare können nach Status gefiltert werden (Offen, Erledigt, Alle), was die Nachverfolgung des Verhandlungsfortschritts und den Abschluss des Dokuments erleichtert.',
      },
    ],
  },
  {
    slug: 'costing-margins',
    title: 'Kalkulation & Margen',
    description: 'Konfigurieren Sie die Kostensichtbarkeit, legen Sie Margenziele fest, hinterlegen Sie Einkaufspreise, überwachen Sie Margenwarnungen und verfolgen Sie Gewinne — Kosten werden Kunden niemals angezeigt.',
    duration: '5 Min.',
    difficulty: 'advanced',
    category: 'Setup',
    mode: 'av',
    whatYouLearn: [
      'Kostensichtbarkeit und Zugriff auf das Margenpanel nach Teamrollen konfigurieren',
      'Unternehmensweit und je Angebot individuelle Margen-Schwellwerte festlegen',
      'Einkaufspreise zu Katalog- und Angebotspositionen hinzufügen',
      'Margenwarnungen überwachen und Positionen unterhalb der Rentabilitätsschwelle beheben',
      'Bruttogewinn und Gesamtmarge im Analyse-Dashboard verfolgen',
    ],
    steps: [
      {
        title: 'Kostensichtbarkeit konfigurieren',
        content: 'Gehen Sie zu Einstellungen → Tab Angebote und suchen Sie den Abschnitt „Kostensichtbarkeit". Sie legen fest, welche Teamrollen auf das Margenpanel im Angebots-Editor zugreifen dürfen (Owner, Admin, Sales oder Viewer). Kosten und Margen werden niemals in das PDF exportiert oder auf der Share-Seite angezeigt — sie sind ausschließlich ein internes Analysetool Ihres Unternehmens.',
        tip: 'Beschränken Sie die Kostensichtbarkeit auf die Rollen Owner und Admin, wenn Sie möchten, dass das Vertriebsteam sich auf den Angebotswert konzentriert und nicht auf die Margen.',
      },
      {
        title: 'Margenziele festlegen',
        content: 'Im Bereich Kosten & Margen in den Einstellungen legen Sie den unternehmensweiten Margen-Zielwert fest (z. B. 35 %). Diesen Zielwert können Sie für ein konkretes Angebot direkt im Editor überschreiben. Fällt die Marge eines Angebots unter den Schwellenwert, erscheint im Editor-Header ein gelbes Alert-Banner, das nur für autorisierte Nutzer sichtbar ist. Der Zielwert wird auch als Referenzlinie im Margendiagramm angezeigt.',
      },
      {
        title: 'Einkaufspreise hinzufügen',
        content: 'Einkaufspreise können auf zwei Ebenen hinterlegt werden: im Equipment-Katalog (als Standardkosten für eine bestimmte Position) und direkt im Angebots-Editor für eine konkrete Position. Klicken Sie auf das Kostensymbol bei einer beliebigen Angebotsposition, um den Einkaufspreis einzugeben oder zu bearbeiten. Der Einkaufspreis wird beim Hinzufügen einer Position automatisch aus dem Katalog übernommen — er kann für ein einzelnes Angebot überschrieben werden.',
        tip: 'Für eigenes Equipment lassen Sie die Kosten leer oder tragen den Abschreibungswert ein. Für zugekauftes Equipment erfassen Sie stets den aktuellen Lieferantenpreis.',
      },
      {
        title: 'Margen und Warnungen überwachen',
        content: 'Das Margenpanel im Angebots-Editor zeigt für jede Position: Erlös, Kosten, Gewinn und Marge %. Positionen unterhalb des Margensziels sind mit einem roten Warnsymbol gekennzeichnet. Am unteren Rand des Panels erscheint eine Gesamtzusammenfassung: Gesamterlös, Gesamtkosten, Bruttogewinn und Gesamtmarge — verglichen mit dem Zielwert. Klicken Sie auf eine Position, um deren Einkaufspreis oder Verkaufspreis direkt zu bearbeiten.',
      },
      {
        title: 'Gewinne im Dashboard verfolgen',
        content: 'Das Analyse-Dashboard (Einstellungen → Analysen oder das dedizierte Dashboard-Tab) zeigt monatliche und quartalsweise Bruttogewinnübersichten aus allen gesendeten und gewonnenen Angeboten. Trenddiagramme visualisieren Margenveränderungen über die Zeit, und ein Positions-Ranking identifiziert Ihr rentabelstes und unrentabelstes Equipment. Die Daten lassen sich nach Angebotsstatus, Kunde und Zeitraum filtern.',
      },
    ],
  },
  {
    slug: 'vendor-management',
    title: 'Lieferantenverwaltung',
    description: 'Fügen Sie AV-Dienstleister zu Ihrem Netzwerk hinzu, verwalten Sie Ansprechpartner und verfolgen Sie Lieferantenbeziehungen — damit Sie immer wissen, wen Sie bei Equipmentbedarf kontaktieren.',
    duration: '4 Min.',
    difficulty: 'beginner',
    category: 'Planer',
    mode: 'planner',
    icon: '🏪',
    whatYouLearn: [
      'Unternehmen und Kontakte zur Lieferantenliste hinzufügen',
      'Lieferanten nach Spezialisierung kategorisieren (Audio, Video, Licht, Full-Service)',
      'Beziehungsnotizen und Verlauf hinterlegen',
      'Angebote direkt aus einer Veranstaltung bei Lieferanten anfragen',
      'Die bevorzugte Lieferantenliste aktuell und übersichtlich halten',
    ],
    steps: [
      {
        title: 'Zum Bereich Lieferanten navigieren',
        content: 'Klicken Sie in der Seitenleiste auf „Lieferanten". Das ist Ihr AV-Adressbuch — eine zentrale Liste aller Lieferanten, mit denen Sie zusammenarbeiten oder arbeiten möchten. Jede Lieferantenkarte zeigt Firmenname, Hauptansprechpartner, Spezialisierung, Standort und ein Statusbadge: aktiv, bevorzugt oder neu.',
      },
      {
        title: 'Neuen Lieferanten anlegen',
        content: 'Klicken Sie auf „Lieferant hinzufügen" und tragen Sie die Firmendaten ein: Name, Website, Stadt und Land sowie AV-Spezialisierung (Audio, Video, Licht, Simultandolmetschen, Full-Service AV oder Sonstiges). Hinterlegen Sie die Daten des Hauptansprechpartners: Name, E-Mail und Telefonnummer. Sie können mehrere Kontakte pro Lieferant anlegen — hilfreich bei großen Dienstleistern, bei denen verschiedene Personen Vertrieb und technischen Support übernehmen.',
        tip: 'Erfassen Sie Lieferanten laufend, auch bevor Sie mit ihnen zusammengearbeitet haben. Eine breite Lieferantenliste gibt Ihnen mehr Optionen bei speziellen oder technisch anspruchsvollen Veranstaltungen.',
      },
      {
        title: 'Status und Tags setzen',
        content: 'Weisen Sie jedem Lieferanten einen Status zu: Bevorzugt (Lieferanten, die Sie aktiv empfehlen oder regelmäßig nutzen), Aktiv (bewährt, würden Sie wieder beauftragen), Interessent (in Prüfung) oder Inaktiv (Zusammenarbeit eingestellt). Vergeben Sie Tags wie „Outdoor-Spezialist", „LED-Wände" oder „Rigging", um Lieferanten bei der Beschaffung für bestimmte Anforderungen schnell zu filtern.',
      },
      {
        title: 'Beziehungsnotizen hinterlegen',
        content: 'Klicken Sie auf einen Lieferanten, um die Detailansicht zu öffnen. Nutzen Sie den Bereich Notizen für wichtige Kontextinformationen: typische Vorlaufzeiten, Mindestbestellwerte, bevorzugte Kommunikationswege, Preistendenzen oder bekannte Probleme. Notizen sind intern und für Lieferanten niemals sichtbar. Sie sind unverzichtbar, wenn ein Kollege einen Lieferanten anfragen möchte, den Sie gut kennen.',
        tip: 'Notieren Sie die typische Antwortzeit des Lieferanten auf Angebotsanfragen. Das hilft Ihnen, den richtigen Anfragezeitpunkt je nach Veranstaltungsplanung zu wählen.',
      },
      {
        title: 'Angebot beim Lieferanten anfragen',
        content: 'Öffnen Sie in Ihrem Planer-Dashboard eine Veranstaltung, klicken Sie auf den Tab Beschaffung und dann auf „Angebot anfragen". Wählen Sie einen oder mehrere Lieferanten aus Ihrer Liste, geben Sie die benötigten Equipmentkategorien an, setzen Sie einen Antworttermin und fügen Sie spezifische Anforderungen oder technische Details hinzu. CueQuote sendet eine strukturierte Angebotsanfrage mit den Veranstaltungsdetails und Ihren Anforderungen an alle ausgewählten Lieferanten.',
      },
      {
        title: 'Anfragen und Antworten verfolgen',
        content: 'Alle ausgehenden Angebotsanfragen erscheinen im Tab Beschaffung mit ihrem Status: Gesendet, Angesehen, Beantwortet oder Abgelehnt. Antwortet ein Lieferant mit einem CueQuote-Angebot, erscheint es automatisch in der Angebotsvergleichs-Ansicht. Antwortet er per E-Mail oder als Datei, können Sie sein Angebot manuell hochladen und mit der Anfrage verknüpfen — alles bleibt an einem Ort.',
        tip: 'Senden Sie Anfragen an mindestens 2–3 Lieferanten pro Equipmentkategorie. Wettbewerb hält Preise fair und gibt Ihnen eine Alternative, wenn Ihr bevorzugter Lieferant nicht verfügbar ist.',
      },
    ],
  },
  {
    slug: 'quote-comparison',
    title: 'Lieferantenangebote vergleichen',
    description: 'Erhalten Sie Angebote von mehreren AV-Dienstleistern, vergleichen Sie sie nach Preis und Leistungsumfang und wählen Sie den besten Lieferanten für Ihre Veranstaltung.',
    duration: '5 Min.',
    difficulty: 'intermediate',
    category: 'Planer',
    mode: 'planner',
    icon: '📊',
    whatYouLearn: [
      'Lieferantenangebote in die Vergleichsansicht laden',
      'Lieferantenzusammenfassungskarten und Wertkennzahlen lesen',
      'Positionen lieferantenübergreifend mit Günstigster-/Teuerster-Kennzeichnung vergleichen',
      'Zahlungskonditionen und Stornierungsregeln nebeneinander prüfen',
      'KI-Empfehlungspanel für eine priorisierte Empfehlung nutzen',
      'Lieferant auswählen und Veranstaltungsstatus aktualisieren',
    ],
    steps: [
      {
        title: 'Angebotsvergleichs-Ansicht öffnen',
        content: 'Öffnen Sie im Veranstaltungs-Dashboard die Veranstaltung, für die Sie beschaffen, und klicken Sie auf den Tab „Angebotsvergleich". Haben Sie bereits Anfragen gesendet und Lieferanten mit CueQuote-Angeboten geantwortet, erscheinen deren Angebote automatisch. Haben Lieferanten per E-Mail oder Datei geantwortet, klicken Sie auf „Angebot hinzufügen", fügen Sie den CueQuote-Freigabelink ein oder laden Sie das Dokument manuell hoch.',
        tip: 'Sie können bis zu 4 Lieferantenangebote in einem Vergleich laden. Das reicht für die meisten Beschaffungsentscheidungen — bei mehr als 4 wird der Vergleich unübersichtlich.',
      },
      {
        title: 'Lieferantenzusammenfassungskarten lesen',
        content: 'Jeder Lieferant erhält oben im Vergleich eine Zusammenfassungskarte mit: Firmenname, Gesamtpreis in der Veranstaltungswährung, Angebotsgültigkeitsdatum und Wertkennzahl (1–10). Die Wertkennzahl ist ein Komposit aus Preiswettbewerbsfähigkeit, Vollständigkeit des Leistungsumfangs und Flexibilität der Zahlungskonditionen. Der Lieferant mit dem niedrigsten Gesamtpreis wird grün hervorgehoben — ein schneller visueller Ankerpunkt für budgetorientierte Entscheidungen.',
      },
      {
        title: 'Positionen im Detail vergleichen',
        content: 'Scrollen Sie zur Positionsvergleichstabelle. Positionen sind nach Kategorie gruppiert (Audio, Video, Licht, Arbeit, Transport) und lieferantenübergreifend abgeglichen. Der günstigste Preis je Position erhält ein grünes „Günstigster"-Badge, der teuerste ein bernsteinfarbenes. Nicht enthaltene Positionen erscheinen als Strich — diese Lücken verbergen oft die eigentlichen Preisunterschiede. Ein Lieferant mit 10 % niedrigerem Gesamtpreis, aber 5 fehlenden Positionen, kann bei nachträglicher Beschaffung dieser Positionen tatsächlich teurer sein.',
        tip: 'Achten Sie besonders auf Arbeits- und Transportpositionen — diese werden in Erstangeboten häufig weggelassen, um den Gesamtpreis attraktiver wirken zu lassen.',
      },
      {
        title: 'Zahlungskonditionen und Stornierungsregeln vergleichen',
        content: 'Der Bereich Konditionen zeigt den Zahlungsplan jedes Lieferanten nebeneinander: Anzahlungsprozentsatz, Fälligkeitsdatum des Restbetrags und Stornierungsregeln. Ein Lieferant, der 100 % im Voraus verlangt, stellt ein Liquiditätsrisiko dar verglichen mit einem, der 30 % bei Auftragsbestätigung und 70 % zwei Wochen vor der Veranstaltung fordert. Beziehen Sie die Zahlungskonditionen in Ihre Gesamtbewertung ein — ein leicht höherer Preis mit besseren Konditionen kann für Ihren Kunden die bessere Wahl sein.',
      },
      {
        title: 'KI-Empfehlung generieren',
        content: 'Klicken Sie in der Vergleichs-Symbolleiste auf „KI-Empfehlung generieren". Die KI analysiert alle geladenen Angebote nach Preis, Umfang, Konditionen und Vollständigkeit und erstellt eine priorisierte Empfehlung mit Begründung. Sie zeigt, welcher Lieferant für Ihren spezifischen Veranstaltungskontext den besten Gesamtwert bietet, wo andere Angebote schwächeln und was Sie von jedem Lieferanten vor der Auftragsvergabe nachverhandeln sollten.',
        tip: 'Nutzen Sie die KI-Empfehlung als Ausgangspunkt — sie ist ein schneller Weg, komplexe Daten zu verdichten. Wenden Sie stets Ihr eigenes Urteil an, basierend auf der Lieferantenbeziehung und der Bedeutung der Veranstaltung.',
      },
      {
        title: 'Lieferant auswählen und Veranstaltung aktualisieren',
        content: 'Klicken Sie nach Ihrer Entscheidung auf der Gewinnerkarte auf „Lieferant auswählen". Der Veranstaltungsstatus ändert sich zu „Lieferant bestätigt" und das Angebot des ausgewählten Lieferanten wird als Hauptangebot für die Veranstaltung verknüpft. CueQuote sendet automatisch eine Benachrichtigung an den gewählten Lieferanten und optional eine Absage an die anderen. Die Gesamtsumme des akzeptierten Angebots fließt automatisch in das Veranstaltungsbudget-Tracking ein.',
      },
    ],
  },
  {
    slug: 'market-rate-budgets',
    title: 'Marktübliche Budgetschätzungen',
    description: 'Verstehen Sie, wie CueQuotes KI realistische AV-Budgetbandbreiten für Ihre Veranstaltungen erstellt, und nutzen Sie diese Schätzungen zur frühzeitigen Planung vor der Lieferantenauswahl.',
    duration: '4 Min.',
    difficulty: 'beginner',
    category: 'Planer',
    mode: 'planner',
    icon: '💰',
    whatYouLearn: [
      'Wie die KI niedrige und hohe Budgetbandbreiten für AV-Veranstaltungen generiert',
      'Welche Faktoren die Schätzung bestimmen (Teilnehmerzahl, Venue, Equipmentart)',
      'Budgetaufschlüsselung nach Kategorie lesen',
      'Schätzungen in der frühen Planungsphase nutzen',
      'Crew-Empfehlungen aus der Schätzung verstehen',
      'Wann von einer Schätzung zu einem Live-Lieferantenangebot wechseln',
    ],
    steps: [
      {
        title: 'Veranstaltung anlegen und Budgetschätzung anfordern',
        content: 'Klicken Sie im Planer-Dashboard auf „Neue Veranstaltung" und tragen Sie die Grunddaten ein: Name, Art (Konferenz, Gala, Produktlaunch usw.), Datum, Venue-Name und -Stadt sowie die erwartete Teilnehmerzahl. Nach dem Erstellen der Veranstaltung wechseln Sie zum Tab Budget und klicken auf „Budgetschätzung generieren". Beschreiben Sie im Textfeld Ihre AV-Anforderungen — je mehr Details, desto genauer die Bandbreite.',
        tip: 'Selbst eine grobe Beschreibung wie „Unternehmenskonferenz für 300 Personen, Hauptbühne, Breakout-Räume" gibt der KI genug Kontext für eine brauchbare Schätzung. Sie können später verfeinern.',
      },
      {
        title: 'Bandbreite verstehen: Niedrig und Hoch',
        content: 'CueQuote gibt die Budgetschätzung als Bandbreite aus, nicht als Einzelzahl — zum Beispiel „14.500 USD – 22.000 USD". Der untere Wert spiegelt ein schlankes Setup mit Standardequipment und einem lokalen Lieferanten wider; der obere Wert steht für Premium-Equipment, mehrfach redundante Systeme und einen Full-Service-Dienstleister mit eigenem Crew. Ihr tatsächliches Angebot liegt erfahrungsgemäß irgendwo dazwischen, abhängig von Lieferantenwahl und finaler Spezifikation.',
      },
      {
        title: 'Aufschlüsselung nach Kategorie lesen',
        content: 'Unterhalb der Hauptbandbreite wird die Schätzung nach AV-Kategorien aufgegliedert: Audio, Video, Licht, Bühne, Simultandolmetschen (falls relevant), Arbeit und Transport. Jede Kategorie hat eine eigene Niedrig-Hoch-Bandbreite und einen prozentualen Anteil am Gesamtbudget. Diese Aufschlüsselung hilft bei der Priorisierung — hat ein Kunde ein fixes Budget, sehen Sie sofort, wo gekürzt werden kann (z. B. Lichtbudget reduzieren, um das Audiobudget bei einer keynote-lastigen Veranstaltung zu schützen).',
        tip: 'Arbeit macht typischerweise 25–35 % eines Full-Service-AV-Budgets aus. Erscheint die Arbeitsposition in Ihrer Schätzung zu niedrig, prüfen Sie, ob mehrtägiger Auf- und Abbau in der Veranstaltungsbeschreibung berücksichtigt wurde.',
      },
      {
        title: 'Crew-Empfehlungen prüfen',
        content: 'Die Schätzung enthält eine empfohlene Crew-Liste für Ihre Veranstaltung: Rollen (FOH-Ingenieur, Lichtoperator, Videotechniker, Bühnenmanager usw.), empfohlene Personenzahl je Rolle und Anzahl der benötigten Arbeitstage. Die Empfehlungen basieren auf Teilnehmerzahl, Veranstaltungsart und technischer Komplexität. Nutzen Sie sie als Personalplanung beim Briefing von Lieferanten oder beim Prüfen von Crew-Positionen in eingehenden Angeboten.',
      },
      {
        title: 'Schätzung in Kundengesprächen nutzen',
        content: 'Teilen Sie die Budgetschätzung früh im Planungsprozess mit dem Kunden, um AV-Ausgaben vor der Marktanfrage abzustimmen. Die Schätzung wird als saubere Zusammenfassung formatiert, die Sie kopieren oder exportieren können — mit Bandbreite, Kategorienaufschlüsselung und dem Hinweis, dass die finale Preisgestaltung vom Lieferanten und der endgültigen Spezifikation abhängt. Frühzeitige Budgeterwartungen verhindern schwierige Gespräche, wenn Live-Angebote eintreffen.',
        tip: 'Liegt das genannte Kundenbudget deutlich unterhalb des Schätzungs-Minimums, sprechen Sie das sofort an. Umfang oder Erwartungen vor dem Versand von Anfragen anzupassen ist besser als danach.',
      },
      {
        title: 'Wissen, wann von der Schätzung zum Live-Angebot zu wechseln ist',
        content: 'Budgetschätzungen sind Planungsinstrumente — sie ersetzen keine Lieferantenangebote. Verwenden Sie Schätzungen in der frühen Planungsphase, bei Budget-Kundengesprächen und internen Budget-Freigaben. Sobald das Veranstaltungs-Briefing abgeschlossen ist (Venue bestätigt, Agenda festgelegt, technischer Rider verfügbar), wechseln Sie über den Tab Lieferanten zur Live-Beschaffung. Die Schätzung gibt Ihnen die Gewissheit, dass die eingehenden Angebote im marktüblichen Rahmen liegen.',
      },
    ],
  },
  {
    slug: 'feedback-support',
    title: 'Feedback & Support',
    description: 'Melden Sie Fehler, beantragen Sie Funktionen oder erhalten Sie Support — ohne die App zu verlassen.',
    duration: '3 Min.',
    difficulty: 'beginner',
    category: 'Grundlagen',
    mode: 'both',
    videoUrl: '',
    whatYouLearn: [
      'Wie Sie Feedback, Fehlerberichte und Funktionsanfragen senden',
      'Den Status Ihrer Anfragen verfolgen',
      'Direkt aus der App Support erhalten',
      'Das Help Center für schnelle Antworten nutzen',
    ],
    steps: [
      {
        title: 'Zu Feedback & Support navigieren',
        content: 'Klicken Sie in der Seitenleiste auf „Feedback & Support" — Ihre direkte Verbindung zum CueQuote-Team.',
      },
      {
        title: 'Feedback-Typ auswählen',
        content: 'Wählen Sie aus: Fehlerbericht, Funktionsanfrage, Allgemeines Feedback oder Support-Anfrage. Das Formular passt sich an.',
        tip: 'Die App erfasst automatisch Ihren Browser, Plan und Seitenkontext beim Senden.',
      },
      {
        title: 'Details ausfüllen und senden',
        content: 'Geben Sie Betreff und Beschreibung ein und klicken Sie „Senden" — Ihre Anfrage wird sofort erfasst und im Tab Meine Anfragen angezeigt.',
      },
      {
        title: 'Anfragen verfolgen',
        content: 'Im Tab „Meine Anfragen" sehen Sie alle bisherigen Anfragen mit Status-Badges: Eingereicht, In Prüfung, Geplant oder Umgesetzt.',
      },
      {
        title: 'Das Help Center nutzen',
        content: 'Im Tab „Help Center" finden Sie Links zu Tutorials, Dokumentation und häufig gestellten Fragen.',
      },
    ],
  },
  {
    slug: 'catalog-suggestions',
    title: 'Katalog mit KI erweitern',
    description: 'Wenn die KI Elemente verwendet, die nicht in Ihrem Katalog sind, fügen Sie sie mit einem Klick hinzu.',
    duration: '2 Min.',
    difficulty: 'beginner',
    category: 'Einrichtung',
    mode: 'av',
    videoUrl: '',
    whatYouLearn: [
      'Wie die KI Elemente kennzeichnet, die nicht in Ihrem Katalog sind',
      'Vorgeschlagene Elemente mit einem Klick zum Katalog hinzufügen',
      'Alle Vorschläge auf einmal hinzufügen',
      'Warum Katalogpreise zukünftige Angebote genauer machen',
    ],
    steps: [
      {
        title: 'Angebot mit KI erstellen',
        content: 'Erstellen Sie ein neues Angebot. Elemente außerhalb Ihres Katalogs werden mit [CUSTOM] und einem geschätzten Marktpreis markiert.',
      },
      {
        title: 'Vorschlagsleiste prüfen',
        content: 'Nach der Generierung erscheint eine bernsteinfarbene Vorschlagsleiste im Prüfschritt. Klicken Sie darauf, um neue Elemente mit KI-vorgeschlagenen Preisen einzusehen.',
        tip: 'Der vorgeschlagene Preis basiert auf Marktpreisen — passen Sie ihn nach dem Hinzufügen zum Katalog an.',
      },
      {
        title: 'Elemente zum Katalog hinzufügen',
        content: 'Klicken Sie „Zum Katalog hinzufügen" für einzelne Elemente oder „Alle hinzufügen", um alles auf einmal zu speichern.',
      },
      {
        title: 'Zukünftige Angebote nutzen Ihre genauen Preise',
        content: 'Sobald Elemente im Katalog sind, verwendet die KI beim nächsten Angebot Ihren Katalogpreis statt einer Schätzung.',
      },
    ],
  },
  {
    slug: 'planner-budget-review',
    title: 'Ihr Veranstaltungsbudget verstehen',
    description: 'Lesen und nutzen Sie den KI-generierten Budgetplan im Planner-Modus.',
    duration: '7 Min.',
    difficulty: 'beginner',
    category: 'Planner',
    mode: 'planner',
    videoUrl: '',
    whatYouLearn: [
      'Budget-Übersicht mit Niedrig-Hoch-Spanne lesen',
      'Crew-Empfehlungen und Rollen verstehen',
      'Den Veranstaltungszeitplan für die Planung nutzen',
      'Profitipps bei der Arbeit mit AV-Dienstleistern anwenden',
      'Inklusivleistungen und Ausschlüsse verstehen',
      'Auf- und Abbautage so kalkulieren, wie ein Veranstalter sie bezahlt',
      'Planungsnotizen im Editor kl\u00e4ren und erkennen, wann sie veraltet sind',
      'Die Marktpreispr\u00fcfung und die Liste offener Leistungen lesen',
    ],
    steps: [
      {
        title: 'Budgetplan generieren',
        content: 'Wechseln Sie in den Planner-Modus, beschreiben Sie Ihre Veranstaltung und klicken Sie auf „Generieren" für einen vollständigen Budgetplan mit Marktpreisen.',
      },
      {
        title: 'Budget-Übersicht prüfen',
        content: 'Der obere Abschnitt zeigt Ihr geschätztes Gesamtbudget als Spanne — z. B. 12.500 € — 18.200 €. Das untere Ende steht für ein schlankes Setup, das obere für Premium-Ausrüstung und Full-Service.',
        tip: 'Nutzen Sie die Spanne für Kundenerwartungen vor dem Marktzugang.',
      },
      {
        title: 'Crew-Empfehlungen prüfen',
        content: 'Der Abschnitt Crew-Empfehlungen listet benötigte Rollen, Anzahl der Personen und typische Tagesratespannen auf.',
      },
      {
        title: 'Veranstaltungszeitplan prüfen',
        content: 'Der Zeitplan-Abschnitt zeigt vorgeschlagene Aufbau-, Show- und Abbauphasen mit Zeitschätzungen und technischen Meilensteinen.',
      },
      {
        title: 'Profitipps und Inklusivleistungen/Ausschlüsse lesen',
        content: 'Praxistipps speziell für Ihren Veranstaltungstyp und eine Übersicht, was die Schätzung abdeckt und was nicht.',
      },
      {
        title: 'Sagen Sie dem Plan, wie lange Sie zum Auf- und Abbau haben',
        content: 'Im Formular f\u00fcr ein neues Angebot sind Aufbautage und Abbautage die Tage, an denen die Location vor und nach der Veranstaltung Ihnen geh\u00f6rt. Im Planner-Modus werden sie dort kalkuliert, wo ein Veranstalter tats\u00e4chlich zahlt \u2014 Hallenbelegung und Crew-Zeit \u2014 und nicht als zus\u00e4tzliche Miettage f\u00fcr Technik; deshalb steht daneben auch keine Ger\u00e4tesatz-Option. L\u00e4sst sich die Veranstaltung realistisch nicht am letzten Abend r\u00e4umen und haben Sie den Abbau auf null gelassen, weist der Plan darauf hin.',
        tip: 'Fragen Sie vorher die Location nach den Load-in- und Load-out-Fenstern. Ein Raum, den Sie erst um 6 Uhr am Showtag bekommen, ist ein ganz anderes Budget als einer, den Sie am Vorabend haben.',
      },
      {
        title: 'Halten Sie die Planungsnotizen beim Bearbeiten in Gebrauch',
        content: '\u00d6ffnen Sie das Angebot, und die Planungsnotizen stehen im Tab Equipment \u00fcber Ihren Positionen \u2014 als Punkte zum Kl\u00e4ren, nicht als Text zum \u00dcberscrollen. Haken Sie einen Punkt ab, sobald Sie ihn best\u00e4tigt haben, oder markieren Sie ihn als nicht zutreffend. \u00c4ndern Sie danach Teilnehmerzahl, Tage, Budget oder Datum, benennt das Panel genau, was sich verschoben hat \u2014 so wissen Sie, dass der Rat auf anderen Zahlen beruhte.',
        tip: 'Die Notizen sind die Fragen, die die KI nicht f\u00fcr Sie beantworten konnte: Stromversorgung, Load-in-Fenster, Genehmigungen. Genau dort wird aus einer Sch\u00e4tzung ein echtes Budget.',
      },
      {
        title: 'Pr\u00fcfen Sie markierte Preise und L\u00fccken im Leistungsumfang',
        content: 'Dasselbe Panel meldet zwei weitere Dinge. Eine Preispr\u00fcfung vergleicht jede Position mit dem, was dieser Posten in der Region Ihrer Veranstaltung \u00fcblicherweise kostet, wobei Ger\u00e4te- und Crew-S\u00e4tze getrennt bewertet werden \u2014 so f\u00e4llt ein als Stundensatz eingetragener Tagessatz sofort auf. Eine Umfangsliste zeigt alles, was Ihr angeh\u00e4ngtes Briefing verlangt hat und der Plan noch nicht abdeckt \u2014 Catering, Genehmigungen, Fotografie, G\u00e4stetransport \u2014 und jeder Eintrag verschwindet, sobald Sie die passende Position erg\u00e4nzen.',
        tip: 'Die Preisspannen sind bewusst weit. Sie fangen eine fehlende Null ab, nicht 15% Meinungsverschiedenheit \u2014 lesen Sie eine Markierung als \u201enochmal ansehen\u201c, nicht als \u201edas ist falsch\u201c.',
      },
    ],
  },
  {
    slug: 'multi-currency-pricing',
    title: 'Mehrwährungspreise',
    description: 'Legen Sie währungsspezifische Preise in Ihrem Katalog fest, damit Angebote automatisch den richtigen Kurs für jede Währung verwenden – ohne manuelle Umrechnung.',
    duration: '4 Min.',
    difficulty: 'intermediate',
    category: 'Einrichtung',
    mode: 'both',
    icon: '💱',
    whatYouLearn: [
      'Wie Sie USD-, EUR- und andere Währungspreise zu Katalogpositionen hinzufügen',
      'Wie die Angebotserstellung den richtigen Währungspreis auswählt',
      'Wie die automatische Umrechnungs-Fallback-Funktion bei fehlendem Lokalpreis funktioniert',
      'Best Practices zur Aktualisierung von Mehrwährungspreisen',
    ],
    steps: [
      {
        title: 'Katalogposition zur Bearbeitung öffnen',
        content: 'Gehen Sie über die Seitenleiste zu Katalog und klicken Sie auf eine beliebige Position, um das Detailpanel zu öffnen, dann auf Bearbeiten. Unterhalb des Standard-Preisfeldes sehen Sie den Abschnitt „Mehrwährungspreise". Hier können Sie Preise in weiteren Währungen über die Firmenstandard-Währung hinaus festlegen.',
        tip: 'Beginnen Sie mit den Währungen, die Sie am häufigsten verwenden — in der Regel EUR, USD und GBP für international tätige AV-Unternehmen.',
      },
      {
        title: 'Preis für jede Währung hinzufügen',
        content: 'Klicken Sie auf „Währungspreis hinzufügen" und wählen Sie eine Währung aus der Dropdown-Liste (EUR, USD, GBP, PLN, AED, EGP, CHF). Geben Sie den Mietpreis in dieser Währung ein. Wiederholen Sie dies für jede weitere Währung. Jeder eingetragene Preis ist ein fester Kurs — keine Umrechnung. So können Sie lokale Marktpreise und ausgehandelte Preise für verschiedene Regionen abbilden.',
      },
      {
        title: 'Verstehen, wie die Angebotserstellung den Preis auswählt',
        content: 'Wenn die KI ein Angebot in einer bestimmten Währung erstellt, sucht sie zuerst nach einem passenden Katalogpreis in derselben Währung. Haben Sie für eine Position einen USD-Preis festgelegt und das Angebot ist in USD, wird genau dieser Preis verwendet. So spiegeln Ihre Angebote immer Ihre tatsächlichen Sätze für jeden Markt wider — keine schwankenden Wechselkurse.',
        tip: 'Legen Sie realistische lokale Marktpreise fest, anstatt Ihre Heimatwährung umzurechnen. Ein PA-System, das in Polen für 500 €/Tag vermietet wird, kann in den USA einen anderen Marktpreis von 600 $/Tag haben.',
      },
      {
        title: 'Automatische Umrechnungs-Fallback',
        content: 'Wenn ein Angebot eine Währung verwendet, für die Sie keinen Preis für eine Katalogposition festgelegt haben, rechnet CueQuote automatisch Ihren Standard-Währungspreis zum aktuellen Markt-Wechselkurs um. Der umgerechnete Preis wird im Angebotseditor mit einem kleinen Wechselkurs-Symbol markiert, damit Sie ihn vor dem Versand prüfen können. Sie können jeden automatisch umgerechneten Preis manuell im Editor überschreiben.',
      },
      {
        title: 'Preise aktuell halten',
        content: 'Mehrwährungspreise sind statisch — sie aktualisieren sich nicht automatisch mit Wechselkursbewegungen. Überprüfen Sie sie regelmäßig (vierteljährlich empfohlen) und aktualisieren Sie Positionen, die erheblich von aktuellen Marktpreisen abgewichen sind. Für zugekaufte Positionen stimmen Sie Ihre Katalog-Währungspreise mit der Abrechnungswährung des Lieferanten ab, um Ihre Margen zu schützen.',
        tip: 'Setzen Sie eine vierteljährliche Kalendererinnerung, um Ihre 20 wichtigsten Katalogpositionen in allen Währungen zu überprüfen. Fünf Minuten Preispflege verhindern unangenehme Margenüberraschungen bei großen Angeboten.',
      },
    ],
  },
  {
    slug: 'proposal-approval-workflow',
    title: 'Angebots-Freigabeprozess',
    description: 'Aktivieren Sie die interne Freigabe, damit Angebote vor dem Versand an Kunden von einem Manager geprüft und genehmigt werden.',
    duration: '5 Min.',
    difficulty: 'intermediate',
    category: 'Angebote',
    mode: 'both',
    icon: '✅',
    whatYouLearn: [
      'Freigabeprozess in den Einstellungen aktivieren',
      'Wie Sie ein Angebot zur Freigabe einreichen',
      'Der Manager-Überprüfungsprozess und interne Kommentare',
      'Freigabestatus verstehen (ausstehend, genehmigt, abgelehnt)',
      'Was nach der Genehmigung oder Ablehnung mit einem Angebot passiert',
    ],
    steps: [
      {
        title: 'Freigabe in den Einstellungen aktivieren',
        content: 'Gehen Sie über die Seitenleiste zu Einstellungen und öffnen Sie den Tab „Angebote". Aktivieren Sie „Freigabe vor dem Versand erforderlich". Sobald aktiviert, muss jedes von einem Vertriebsmitarbeiter erstellte Angebot von einem Admin oder Inhaber genehmigt werden, bevor es an einen Kunden versendet werden kann. Inhaber und Admins können Angebote direkt versenden, ohne den Freigabeprozess zu durchlaufen.',
        tip: 'Aktivieren Sie die Freigabe, wenn Sie ein Vertriebsteam haben, das Angebote erstellt — so haben Manager eine Qualitätsstufe, bevor etwas die Kunden erreicht.',
      },
      {
        title: 'Angebot zur Freigabe einreichen',
        content: 'Wenn ein Vertriebsmitarbeiter ein Angebot fertiggestellt hat, klickt er auf „Zur Freigabe einreichen" statt auf „Senden". Dadurch wird das Angebot für weitere Bearbeitungen gesperrt und der Status auf „Freigabe ausstehend" geändert. Das Angebot erscheint sofort in der Freigabe-Warteschlange des Managers. Der Einreichende kann eine optionale Notiz hinzufügen, die dem Prüfer wichtige Informationen erläutert.',
      },
      {
        title: 'Manager prüft das Angebot',
        content: 'Manager (Admins und Inhaber) sehen eine Benachrichtigung in der App und einen E-Mail-Alert, wenn ein Angebot in ihre Freigabe-Warteschlange gelangt. Sie öffnen das Angebot in der vollständigen Nur-Lese-Ansicht — alle Positionen, Preise, Konditionen, Inklusivleistungen, Ausschlüsse und Gesamtbeträge sind sichtbar. Der Manager kann auch die PDF-Vorschau herunterladen, um genau zu sehen, was der Kunde erhalten würde.',
        tip: 'Prüfen Sie den Gesamtbetrag des Angebots, die Zahlungsbedingungen und die AGB sorgfältig — das sind die drei Bereiche, die vor dem Versand an Kunden am häufigsten angepasst werden müssen.',
      },
      {
        title: 'Interne Kommentare hinterlassen',
        content: 'Im Freigabe-Panel auf der rechten Seite des Angebots können Manager interne Kommentare hinterlassen, die nur für das Team sichtbar sind — nicht für den Kunden. Verwenden Sie Kommentare, um zu erläutern, was geändert werden muss: „Rabatt auf maximal 10% reduzieren" oder „Generatorausschluss für Außenveranstaltungen in die Konditionen aufnehmen". Der Einreichende sieht diese Kommentare sofort und kann das Angebot für Korrekturen entsperren.',
      },
      {
        title: 'Genehmigen oder ablehnen',
        content: 'Nach der Prüfung klickt der Manager auf „Genehmigen" oder „Ablehnen". Eine Genehmigung entsperrt die Schaltfläche „Senden" für den Einreichenden — er erhält eine Benachrichtigung, dass das Angebot versandbereit ist. Eine Ablehnung sendet das Angebot mit den sichtbaren Kommentaren des Managers zurück in den Entwurfsstatus, damit der Einreichende genau weiß, was vor der erneuten Einreichung zu beheben ist.',
      },
      {
        title: 'Freigabestatus auf einen Blick',
        content: 'Angebote im Freigabeprozess zeigen in der Angebotsliste einen von vier Status: Entwurf (noch nicht eingereicht), Freigabe ausstehend (wartet auf Manager-Prüfung), Genehmigt (versandbereit) oder Abgelehnt (zur Überarbeitung zurückgesendet). Filtern Sie die Angebotsliste nach Status, um Ihre gesamte Freigabe-Warteschlange auf einmal zu sehen. Genehmigte und versendete Angebote folgen dann dem normalen Ablauf: Gesendet → Angesehen → Gewonnen/Verloren.',
        tip: 'Legen Sie im Team eine Norm für die Bearbeitungszeit der Freigabe fest — 4 Arbeitsstunden ist ein häufiges Ziel. Verzögerte Freigaben können zeitkritische Angebote gefährden.',
      },
    ],
  },
  {
    slug: 'price-sync',
    title: 'Preisabgleich — Katalog- und Angebotspreise synchronisieren',
    description: 'Erkennen und beheben Sie automatisch Preisabweichungen zwischen Ihrem Gerätekatalog und aktiven Angeboten.',
    duration: '3 Min.',
    difficulty: 'intermediate',
    category: 'Angebote',
    mode: 'av',
    icon: '🔄',
    videoUrl: '',
    whatYouLearn: [
      'Wie Sie Preisabweichungen zwischen Katalog und Angebotspositionen erkennen',
      'Verwendung von „Katalogpreis verwenden" zur Aktualisierung des Angebots',
      'Verwendung von „Katalog aktualisieren" zum Festlegen eines neuen Standards',
      'Massenabgleich aller abweichenden Positionen auf einmal',
    ],
    steps: [
      {
        title: 'Angebot öffnen — Preisabgleich-Banner erscheint',
        content: 'Öffnen Sie ein Angebot im Editor. Weichen ein oder mehrere Positionspreise vom Gerätekatalog ab, erscheint über der Positionstabelle ein blauer „Preisabgleich"-Banner. Der Banner zeigt die Anzahl der nicht synchronisierten Positionen.',
        tip: 'Der Preisabgleich ist besonders nützlich direkt nach der KI-Generierung — die KI gleicht Katalogpositionen ab, kann aber gelegentlich leicht abweichende Preise verwenden.',
      },
      {
        title: 'Abweichungen überprüfen',
        content: 'Klicken Sie auf den Banner, um das Preisabgleich-Panel zu öffnen. Jede abweichende Position wird mit Name, aktuellem Angebotspreis, Katalogpreis und prozentualem Unterschied aufgelistet. Positionen mit mehr als 10% Unterschied sind rot markiert; kleinere Abweichungen erscheinen in Gelb.',
      },
      {
        title: 'Aktion pro Position wählen',
        content: 'Für jede abweichende Position stehen zwei Aktionen zur Auswahl: „Katalogpreis verwenden" aktualisiert die Angebotsposition auf den Katalogpreis — verwenden Sie dies, wenn der Katalog korrekt ist. „Katalog aktualisieren" setzt den Angebotspreis als neuen Standard im Katalog — verwenden Sie dies, wenn Sie den Preis für diesen Auftrag bewusst geändert haben.',
        tip: 'Verwenden Sie „Katalog aktualisieren" sparsam — es ändert den Preis für alle zukünftigen Angebote. Nur bei bewusst neuem Tarif verwenden, nicht bei Einmalrabatten.',
      },
      {
        title: 'Alle Positionen auf einmal abgleichen',
        content: 'Um alle Abweichungen auf einmal zu beheben, klicken Sie oben im Preisabgleich-Panel auf „Alle mit Katalog abgleichen". CueQuote aktualisiert alle abweichenden Positionen auf den Katalogpreis. Grüne Häkchen erscheinen neben jeder Position während der Synchronisation. Der Banner verschwindet, sobald alle Positionen synchronisiert sind.',
      },
    ],
  },
  {
    slug: 'production-budget-planning',
    title: 'Produktionsbudgetplanung für Veranstaltungsplaner',
    description: 'Generieren Sie umfassende AV-Produktionsbudgets mit Geräte-, Team- und Terminempfehlungen, die auf Ihre Veranstaltung zugeschnitten sind.',
    duration: '5 min',
    difficulty: 'beginner',
    category: 'Planer',
    mode: 'planner',
    videoUrl: '',
    whatYouLearn: [
      'Umschalten in den Planer-Modus für Veranstaltungsproduktionsbudgetierung',
      'Beschreiben Ihrer Veranstaltung für genaue KI-generierte Budgetschätzungen',
      'Lesen und Interpretieren der AV-Karte mit gruppierten Kategorien',
      'Verstehen von Budgetspannen und Teamempfehlungen',
      'Verwendung des Produktionszeitplans und Tipps für Lieferantengespräche',
    ],
    steps: [
      {
        title: 'Wechsel in den Planer-Modus',
        content: 'Klicken Sie im Dashboard auf den Modusschalter oben rechts und wählen Sie "Planer". Dies wechselt Ihre Oberfläche vom AV-Unternehmens-Angebotsmodus zum Veranstaltungsplanungsmodus. Der Planer-Modus verwendet Marktpreise statt Ihres Katalogs und ist ideal für Veranstaltungsprofis, die unabhängige Budgetanleitungen benötigen.',
        tip: 'Sie können jederzeit zwischen den Modi wechseln — Ihre Angebote und Einstellungen für jeden Modus werden separat gespeichert.',
      },
      {
        title: 'Neues Produktionsbudget erstellen',
        content: 'Klicken Sie auf "Produktionsbudget generieren" und beschreiben Sie Ihre Veranstaltung in natürlicher Sprache. Geben Sie an: Veranstaltungstyp (Konferenz, Gala, Festival usw.), Ortsname und -typ, erwartete Besucherzahl, Datum und Dauer sowie spezifische AV-Anforderungen (Präsentationen, Live-Musik, Streaming, Simultanübersetzung, Branding). Je mehr Details Sie angeben, desto genauer ist der KI-generierte Plan.',
        tip: 'Sie können eine RFP oder ein Veranstaltungs-Brief direkt in die Beschreibung einfügen — die KI extrahiert die Schlüsselanforderungen automatisch.',
      },
      {
        title: 'Wählen Sie eine Vorlage',
        content: 'Wählen Sie eine Vorlage, die Ihrem Veranstaltungstyp entspricht — Konferenz, Gala, Unternehmensveranstaltung, Festival oder Benutzerdefiniert. Die Vorlage hilft, die KI anzuleiten, um angemessene Geräte und Teamrollen für ähnliche Veranstaltungen vorzuschlagen. Sie können die Vorlagenauswahl immer überspringen und Ihre eigene detaillierte Beschreibung angeben.',
        tip: 'Die Verwendung einer Vorlage beschleunigt die Ergebnisse normalerweise um 20%, da die KI mit einem Bezugsrahmen startet, anstatt alles aus Ihrer Beschreibung abzuleiten.',
      },
      {
        title: 'Überprüfen Sie die AV-Karte',
        content: 'Nach der Generierung zeigt der erste Abschnitt eine Karte "AV & Technical" an, die Audio, Video, Beleuchtung und Staging zusammenfasst. Diese Karte zeigt die Gesamtanzahl der Elemente für alle AV-Kategorien, die Budgetspanne (niedrig-hoch) und eine Zwischensumme. Klicken Sie auf die Karte, um sie zu erweitern und einzelne Positionen mit Beschreibungen, Mengen und Budgetspannen pro Element zu sehen. Diese einheitliche Ansicht macht es einfach, Ihre gesamten technischen Produktionskosten auf einen Blick zu verstehen.',
        tip: 'Die Budgetspanne spiegelt Marktschwankungen wider — das untere Ende ist für Standard-Geräte mit lokalen Lieferanten, das obere Ende für Premium-Lösungen mit Team-Redundanz.',
      },
      {
        title: 'Überprüfen Sie Teamempfehlungen und Zeitplan',
        content: 'Scrollen Sie nach unten, um den Abschnitt "Teamempfehlungen" (Rollen, Personalzahl pro Rolle, Tagessätze) und den "Veranstaltungszeitplan" (empfohlene Aufbautage, Veranstaltungstage, Abbau und technische Meilensteine) zu überprüfen. Verwenden Sie diese zur Unterrichtung Ihrer Angebotsanfragen bei Lieferanten und um realistische Erwartungen mit Ihrem Kunden bezüglich Arbeit und Zeitplanung zu setzen. Speichern oder exportieren Sie den gesamten Plan als PDF, um ihn mit Stakeholdern zu teilen.',
        tip: 'Teilen Sie die Budgetspanne frühzeitig mit Ihrem Kunden, um die Ausgaben abzustimmen, bevor Sie zum Markt gehen — dies verhindert Preisschock, wenn Lieferantenangebote eintreffen.',
      },
    ],
  },
  {
    slug: 'event-layout-designer',
    title: 'Veranstaltungs-Layout-Designer',
    description: 'Gestalten Sie Ihren Veranstaltungsgrundriss visuell — wählen Sie eine Veranstaltungsort-Vorlage, platzieren Sie AV-Equipment-Formen und exportieren Sie ein professionelles Layout als PDF oder PNG.',
    duration: '4 Min.',
    difficulty: 'intermediate',
    category: 'Proposals',
    mode: 'av',
    videoUrl: '',
    whatYouLearn: [
      'Öffnen des Layout-Tabs in einem Angebot',
      'Auswählen einer Veranstaltungsort-Vorlage als Ausgangspunkt',
      'Hinzufügen und Positionieren von AV-Equipment-Formen',
      'Speichern des Layouts im Angebot',
      'Exportieren des Layouts als PDF oder PNG',
    ],
    steps: [
      {
        title: 'Öffnen Sie den Layout-Tab',
        content: 'Öffnen Sie ein beliebiges Angebot im Editor. Klicken Sie in der Tab-Leiste oben (Ausrüstung | Bedingungen & Details | Risikoplan | Layout) auf "Layout". Der Layout-Designer öffnet sich als vollbreite Leinwand — leer für neue Angebote oder mit einem zuvor gespeicherten Layout.',
      },
      {
        title: 'Wählen Sie eine Veranstaltungsort-Vorlage',
        content: 'Klicken Sie im linken Panel auf "Vorlagen" und durchsuchen Sie die verfügbaren Veranstaltungsort-Vorlagen: Ballsaal, Konferenzraum, Theater, Freilichtbühne, Konferenzraum und Ausstellungshalle. Klicken Sie auf eine Vorlage, um sie als Ausgangspunkt auf die Leinwand zu laden. Die Vorlage zeichnet vorab die Raumgrenzen, den Bühnenbereich und standardmäßige Sitzreihen.',
        tip: 'Vorlagen sind Ausgangspunkte, keine festen Layouts — jedes Element kann nach dem Laden verschoben, in der Größe verändert oder gelöscht werden.',
      },
      {
        title: 'Fügen Sie AV-Equipment-Formen hinzu',
        content: 'Wechseln Sie im linken Panel zum Tab "AV-Elemente". Formen sind nach Kategorie gruppiert: Audio (Lautsprecher, Subwoofer, Mischpult-Position), Video (Bildschirme, LED-Panels, Projektoren, Kameras), Beleuchtung (Moving Heads, PAR-Strahler, Verfolger) und Bühnenbau (Bühnenblöcke, Podium, Traverse). Ziehen Sie eine beliebige Form auf die Leinwand und positionieren Sie sie per Drag.',
      },
      {
        title: 'Speichern Sie das Layout',
        content: 'Klicken Sie oben rechts im Designer auf "Layout speichern". Das Layout wird an dieses Angebot angehängt und ist für den Kunden auf der Freigabeseite unterhalb der Ausrüstungstabelle sichtbar. Das Speichern hat keinen Einfluss auf Ihre Ausrüstungszeilen — es ist ein visuelles Begleitdokument zum Angebot.',
      },
      {
        title: 'Als PDF oder PNG exportieren',
        content: 'Klicken Sie auf "Exportieren" und wählen Sie PDF (druckqualitätsgemäße Ausgabe, geeignet für die Aufnahme in ein Angebotspaket) oder PNG (zum Einbetten in E-Mails, Präsentationen oder WhatsApp). Die exportierte Datei enthält Ihr Firmenlogo in der Ecke, den Veranstaltungsnamen und eine Legende, die jede AV-Form identifiziert.',
        tip: 'Fügen Sie das Layout-PDF bei Angeboten für große oder komplexe Veranstaltungen dem Angebot-PDF bei — Kunden schätzen es zu sehen, wo jedes Gerät platziert wird.',
      },
    ],
  },
  {
    slug: 'two-factor-authentication',
    title: 'Zwei-Faktor-Authentifizierung',
    description: 'Fügen Sie Ihrem Konto eine zusätzliche Sicherheitsebene hinzu, indem Sie die Zwei-Faktor-Authentifizierung (2FA) mit einer Authentifizierungs-App aktivieren.',
    duration: '3 Min.',
    difficulty: 'beginner',
    category: 'Account',
    mode: 'both',
    videoUrl: '',
    whatYouLearn: [
      '2FA in den Kontoeinstellungen aktivieren',
      'QR-Code mit einer Authentifizierungs-App scannen',
      '6-stelligen Code zur Bestätigung der Einrichtung eingeben',
      'Backup-Codes sicher aufbewahren',
    ],
    steps: [
      {
        title: 'Gehen Sie zu Kontoeinstellungen',
        content: 'Klicken Sie in der Seitenleiste auf "Konto" (oder klicken Sie auf Ihr Profilbild unten links und wählen Sie "Kontoeinstellungen"). Scrollen Sie zum Abschnitt "Sicherheit". Sie sehen eine Karte "Zwei-Faktor-Authentifizierung", die den aktuellen Status anzeigt — standardmäßig deaktiviert.',
      },
      {
        title: 'Klicken Sie auf 2FA aktivieren',
        content: 'Klicken Sie auf die Schaltfläche "2FA aktivieren". Ein Einrichtungsdialog öffnet sich mit einem QR-Code und einem manuellen Einrichtungsschlüssel darunter. Öffnen Sie Ihre Authentifizierungs-App (Google Authenticator, Authy, 1Password oder eine TOTP-kompatible App) und scannen Sie den QR-Code. Wenn Ihre App kein QR-Scannen unterstützt, tippen Sie auf "Code manuell eingeben" und geben Sie den angezeigten Schlüssel ein.',
      },
      {
        title: 'Geben Sie den 6-stelligen Code ein',
        content: 'Ihre Authentifizierungs-App zeigt einen zeitbasierten 6-stelligen Code an, der alle 30 Sekunden aktualisiert wird. Geben Sie den aktuellen Code in das Bestätigungsfeld in CueQuote ein und klicken Sie auf "Verifizieren und aktivieren". Nach der Verifizierung ist 2FA sofort aktiv — jede zukünftige Anmeldung erfordert Ihr Passwort plus einen Code aus Ihrer Authentifizierungs-App.',
        tip: 'Geben Sie den Code zügig ein — TOTP-Codes laufen nach 30 Sekunden ab. Wenn der Code abgelehnt wird, warten Sie auf den nächsten Code in Ihrer App und versuchen Sie es erneut.',
      },
      {
        title: 'Backup-Codes speichern',
        content: 'Nach der Aktivierung von 2FA zeigt CueQuote 8 Einmal-Backup-Codes. Laden Sie diese herunter oder kopieren Sie sie und bewahren Sie sie an einem sicheren Ort auf (Passwort-Manager, ausgedrucktes Blatt in einem Safe). Wenn Sie jemals den Zugang zu Ihrer Authentifizierungs-App verlieren, ermöglicht Ihnen ein Backup-Code die Anmeldung und das Deaktivieren oder Zurücksetzen von 2FA. Jeder Code kann nur einmal verwendet werden.',
        tip: 'Bewahren Sie Backup-Codes niemals am selben Ort wie Ihr Passwort auf. Ein Passwort-Manager mit einer separaten Notiz für 2FA-Codes ist ein guter Ansatz.',
      },
    ],
  },
  {
    slug: 'ocr-file-attachments',
    title: 'OCR-Dateianhänge',
    description: 'Fügen Sie gescannte PDFs oder Bilder zu einem Angebot hinzu und lassen Sie CueQuote automatisch Text extrahieren, damit die KI technische Rider und Ausrüstungslisten lesen und verwenden kann.',
    duration: '3 Min.',
    difficulty: 'beginner',
    category: 'Proposals',
    mode: 'both',
    videoUrl: '',
    whatYouLearn: [
      'Anhängen von Dateien an ein neues Angebot',
      'Automatisches Ausführen von OCR bei gescannten Dokumenten',
      'Überprüfen des extrahierten Textes vor der Generierung',
      'Unterstützte Dateitypen und Sprachen',
    ],
    steps: [
      {
        title: 'Klicken Sie auf Anhänge in einem neuen Angebot',
        content: 'Starten Sie ein neues Angebot und navigieren Sie zum Abschnitt "Anhänge" unterhalb des Ereignisbeschreibungsfeldes. Klicken Sie auf "Datei hochladen" oder ziehen Sie eine Datei in die Upload-Zone. Unterstützte Formate sind PDF, JPG, PNG und TIFF. Sie können bis zu 5 Dateien pro Angebot anhängen — jede Datei kann bis zu 10 MB groß sein.',
      },
      {
        title: 'Laden Sie ein gescanntes PDF oder Bild hoch',
        content: 'Wählen Sie Ihren gescannten technischen Rider, Ihre Ausrüstungsliste, Ihren Grundriss oder Ihr Veranstaltungs-Briefing. Bereits maschinenlesbare PDFs (exportiert aus Word, Excel oder einem Design-Tool) werden sofort verarbeitet. Gescannte Dokumente und Bilder werden automatisch an die OCR-Engine gesendet, die den gesamten Text aus der Datei erkennt und extrahiert.',
      },
      {
        title: 'Überprüfen Sie den extrahierten Text',
        content: 'Nach Abschluss der OCR klicken Sie auf den Anhang-Chip, um die Vorschau des extrahierten Textes zu erweitern. Überprüfen Sie die Ausgabe, um sicherzustellen, dass wichtige Details — Ausrüstungsnamen, Mengen, technische Spezifikationen — korrekt erfasst wurden. Sie können den extrahierten Text direkt im Vorschaufeld bearbeiten, bevor Sie das Angebot generieren.',
        tip: 'Für beste OCR-Genauigkeit verwenden Sie Scans mit 300 DPI oder höher. Vermeiden Sie Dateien, bei denen Text Grafiken überlagert oder sehr kleine Schriftarten verwendet werden.',
      },
      {
        title: 'Generieren Sie das Angebot mit extrahiertem Inhalt',
        content: 'Klicken Sie auf "Angebot generieren". Die KI erhält sowohl Ihre schriftliche Beschreibung als auch den vollständigen extrahierten Text aus allen Anhängen als kombinierten Kontext. Sie fügt beide Quellen intelligent zusammen — dabei werden spezifische Modellnummern, Mengen und technische Anforderungen aus dem Rider aufgegriffen.',
        tip: 'OCR unterstützt englischen und arabischen Text. Mehrsprachige Dokumente (z. B. ein arabischer Rider mit englischen Gerätemodellnamen) werden korrekt verarbeitet — die KI liest beide Sprachen im selben Dokument.',
      },
    ],
  },
  {
    slug: 'real-time-comment-notifications',
    title: 'Echtzeit-Kommentar-Benachrichtigungen',
    description: 'Erhalten Sie sofortige Benachrichtigungen, wenn Kunden Ihre freigegebenen Angebote kommentieren, damit Sie wichtige Rückmeldungen oder Überarbeitungsanfragen nie verpassen.',
    duration: '2 Min.',
    difficulty: 'beginner',
    category: 'Angebote',
    mode: 'both',
    videoUrl: '',
    whatYouLearn: [
      'Wie Echtzeit-Benachrichtigungen funktionieren, wenn Kunden kommentieren',
      'Was Sie in der Toast-Benachrichtigung sehen',
      'Wie Sie auf Kommentare über das Glockensymbol zugreifen',
      'Direkt vom Editor aus auf Kommentare antworten',
    ],
    steps: [
      {
        title: 'Kunde kommentiert Ihr freigegebenes Angebot',
        content: 'Wenn Sie ein Angebot an einen Kunden senden, erhält dieser einen Freigabe-Link. Auf der Freigabe-Seite kann er Kommentare im Kommentar-Bereich unten hinterlassen. Jeder Kommentar wird mit einem Zeitstempel versehen und dem Namen des Kunden zugeordnet. In dem Moment, in dem er seinen Kommentar absendet, erhalten Sie sofort eine Benachrichtigung.',
      },
      {
        title: 'Sie erhalten sofort eine Toast-Benachrichtigung',
        content: 'Eine Toast-Benachrichtigung erscheint in der unteren rechten Ecke Ihres Bildschirms und zeigt den Namen des Kunden, eine Vorschau seines Kommentars (erste ~50 Zeichen) und den Angebotstitel. Die Benachrichtigung ist farbcodiert nach Priorität — Überarbeitungsanfragen erscheinen in Bernsteinfarbe, allgemeine Kommentare in Blau. Der Toast verschwindet nach 5 Sekunden automatisch, aber Sie können darauf klicken, um direkt zum Angebot zu springen.',
        tip: 'Halten Sie die CueQuote-App aktiv in Ihrem Browser, um Toast-Benachrichtigungen zu sehen. Wenn die App nicht offen ist, erhalten Sie weiterhin eine E-Mail-Benachrichtigung und das Glockensymbol.',
      },
      {
        title: 'Rufen Sie Kommentare über das Glockensymbol auf',
        content: 'Klicken Sie auf das Glockensymbol (🔔) in der oberen rechten Ecke der Navigationsleiste. Ein Dropdown-Menü erscheint, das alle ungelesenen Kommentare und Benachrichtigungen anzeigt, gruppiert nach Angebot. Jede Zeile zeigt den Namen des Kunden, einen Vorschautext und den Angebotstitel. Klicken Sie auf einen Kommentar, um das Angebot zu öffnen und zum Kommentar-Tab zu springen. Sobald Sie den Kommentar-Tab öffnen, sinkt der Benachrichtigungs-Zähler an der Glocke.',
      },
      {
        title: 'Klicken Sie auf "Ansicht & Antwort", um zu antworten',
        content: 'Klicken Sie in der Toast-Benachrichtigung oder im Dropdown der Glocke auf den Link "Ansicht & Antwort", um direkt zum Angebots-Editor mit dem geöffneten Kommentar-Tab zu springen. Alle Kundenkommentare erscheinen in chronologischer Reihenfolge. Geben Sie Ihre Antwort in das Textfeld unter einem beliebigen Kommentar ein und drücken Sie Senden. Ihre Antwort ist für den Kunden sofort auf der Freigabe-Seite sichtbar.',
        tip: 'Kunden sehen ein rotes Abzeichen auf dem Kommentar-Bereich, das anzeigt, wie viele ungelesene Antworten von Ihnen vorhanden sind. Schnelle Antworten halten das Gespräch aktiv.',
      },
    ],
  },
  {
    slug: 'website-quote-form',
    title: 'Angebotsformular auf Ihrer Website',
    description: 'Besucher beschreiben ihre Veranstaltung auf Ihrer eigenen Website und erhalten sofort eine Budgetspanne — Sie erhalten den Kontakt und ein kalkuliertes Angebot als Entwurf.',
    duration: '4 Min.',
    difficulty: 'beginner',
    category: 'Setup',
    mode: 'av',
    whatYouLearn: [
      'Einen Widget-Schlüssel für Ihre Domains anlegen',
      'Das Formular in die Website einfügen',
      'Was Besucher sehen und was privat bleibt',
      'Eingehende Anfragen bearbeiten',
    ],
    steps: [
      {
        title: 'Formular in den Einstellungen anlegen',
        content: 'Öffnen Sie die Einstellungen und suchen Sie „Angebotsformular für die Website". Klicken Sie auf „Formular einrichten", vergeben Sie einen Namen wie „Hauptwebsite" und tragen Sie die Domains ein, auf denen es laufen soll. Tragen Sie ihrefirma.de und www.ihrefirma.de ein, wenn Ihre Seite auf beiden antwortet — das Formular läuft nur auf den eingetragenen Domains, und ein fehlendes www ist der häufigste Grund, warum scheinbar nichts passiert.',
        tip: 'Das Widget ist ab dem Pro-Plan verfügbar.',
      },
      {
        title: 'Script-Tag kopieren',
        content: 'CueQuote zeigt ein fertiges Script-Tag mit Ihrem Schlüssel und Ihrer Markenfarbe. Kopieren Sie es — es gibt nichts zu bearbeiten.',
        tip: 'Der Schlüssel beginnt mit cq_pub_ und ist für die Öffentlichkeit gedacht. Fügen Sie niemals einen cq_live_ API-Schlüssel auf einer Website ein; der ist geheim.',
      },
      {
        title: 'In die Website einfügen',
        content: 'Setzen Sie das Tag auf die Seite, wo das Formular erscheinen soll. In WordPress nutzen Sie einen Custom-HTML-Block, in Squarespace einen Code-Block, in Wix oder Webflow ein Embed-Element. Das Formular erscheint genau dort, wo das Tag steht, oder per data-target an einer bestimmten Stelle.',
        tip: 'Es rendert in einem isolierten Shadow Root: Es kann Ihr Layout nicht zerstören und Ihr CSS kann es nicht zerstören.',
      },
      {
        title: 'Wie ein Besucher testen',
        content: 'Laden Sie die Seite, beschreiben Sie eine echte Veranstaltung, geben Sie Gästezahl sowie Ihren Namen und Ihre E-Mail an und senden Sie ab. Innerhalb einer Minute sollten Sie eine Budgetspanne mit Aufschlüsselung nach Kategorien sehen.',
        tip: 'Erscheint „This key is not enabled for…", steht die getestete Domain nicht auf der Liste — ergänzen Sie sie in den Einstellungen.',
      },
      {
        title: 'Die Anfrage bearbeiten',
        content: 'Sie erhalten sofort eine E-Mail mit den Daten des Besuchers, der gezeigten Spanne und einem Button zum Entwurf. In CueQuote wartet ein vollständig kalkuliertes Angebot mit bereits zugeordnetem Kunden. Preise prüfen, anpassen, senden.',
        tip: 'Besucher sehen ausschließlich Spannen. Ihre Einzelpreise und Ihre Geräteliste erscheinen nie auf Ihrer öffentlichen Seite.',
      },
    ],
  },
  {
    slug: 'webhooks',
    title: 'Angebotsereignisse an Ihr CRM senden',
    description: 'Erhalten Sie einen sofortigen signierten Rückruf, wenn ein Kunde ein Angebot ansieht, annimmt oder ablehnt — so bleiben Ihre eigenen Systeme auf dem Stand, ohne dass jemand etwas abtippt.',
    duration: '5 Min.',
    difficulty: 'advanced',
    category: 'Setup',
    mode: 'av',
    whatYouLearn: [
      'Einen Endpunkt hinzufügen und Ereignisse auswählen',
      'Ihr Signaturgeheimnis sicher aufbewahren',
      'Prüfen, ob eine Anfrage wirklich von CueQuote stammt',
      'Einen Endpunkt erkennen, der nicht mehr funktioniert',
    ],
    steps: [
      {
        title: 'Endpunkt hinzufügen',
        content: 'Öffnen Sie die Einstellungen und suchen Sie „Webhooks“. Klicken Sie auf „Endpunkt hinzufügen“ und fügen Sie die https-URL ein, die die Ereignisse empfangen soll. Haken Sie die gewünschten Ereignisse an — die meisten beginnen mit proposal.accepted, denn das ist das Ereignis, das ein CRM wissen sollte.',
        tip: 'Webhooks sind im Business-Tarif enthalten. Die URL muss https sein; einfaches http wird abgelehnt.',
      },
      {
        title: 'Signaturgeheimnis kopieren',
        content: 'Sobald der Endpunkt angelegt ist, wird Ihnen ein Geheimnis angezeigt, das mit whsec_ beginnt. Kopieren Sie es jetzt in Ihre Umgebungsvariablen — es wird genau einmal angezeigt und kann nicht erneut aufgerufen werden.',
        tip: 'Verloren? Löschen Sie den Endpunkt und legen Sie ihn neu an. Sie erhalten ein neues Geheimnis.',
      },
      {
        title: 'Signatur prüfen',
        content: 'Jede Anfrage enthält einen X-CueQuote-Signature-Header mit einem Zeitstempel und einem HMAC-SHA256 aus diesem Zeitstempel und dem Rohtext, signiert mit Ihrem Geheimnis. Berechnen Sie ihn neu und vergleichen Sie, bevor Sie irgendetwas vertrauen. Ohne diese Prüfung kann jeder, der Ihre URL kennt, Ihnen gefälschte Angebote schicken.',
        tip: 'Hashen Sie die rohen Bytes. Das JSON zu parsen und neu zu serialisieren ändert die Bytes, und die Signatur passt nie — das ist der mit Abstand häufigste Fehler.',
      },
      {
        title: 'Schnell antworten',
        content: 'Geben Sie einen beliebigen 2xx-Status zurück, sobald Sie das Payload angenommen haben, und erledigen Sie die langsame Arbeit danach. Wir brechen nach 10 Sekunden ab, und eine Zeitüberschreitung wird als Fehler erfasst.',
        tip: 'Behandeln Sie Ihren Handler als idempotent — richten Sie sich nach Angebots-ID und Ereignis, statt davon auszugehen, dass jedes Ereignis genau einmal ankommt.',
      },
      {
        title: 'Auf Fehler achten',
        content: 'In den Einstellungen zeigt jeder Endpunkt, wie viele Zustellungen er in den letzten 7 Tagen erhalten hat und wie viele fehlgeschlagen sind. Ein rotes „Fehlerhaft“-Abzeichen bedeutet, dass Ihr Endpunkt einen Fehler zurückgab oder das Zeitlimit überschritt.',
        tip: 'Ein gelegentlicher Blick lohnt sich: Wenn eine CRM-Integration stillschweigend ausfällt, sagt Ihnen nichts anderes Bescheid — es kommen einfach keine Angebote mehr an.',
      },
    ],
  },
]
