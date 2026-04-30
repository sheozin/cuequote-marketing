import type { Tutorial } from './types'

export const TUTORIALS_PL: Tutorial[] = [
  {
    slug: 'getting-started',
    title: 'Pierwsze kroki',
    description: 'Załóż konto CueQuote i wyślij pierwszą ofertę AV opartą na AI w mniej niż 10 minut.',
    duration: '5 min',
    difficulty: 'beginner',
    category: 'Podstawy',
    videoUrl: '/videos/cuequote-walkthrough-master.mp4',
    whatYouLearn: [
      'Jak założyć konto CueQuote',
      'Konfiguracja profilu firmy i brandingu',
      'Tworzenie pierwszej oferty generowanej przez AI',
      'Pobieranie profesjonalnego PDF-a',
    ],
    steps: [
      {
        title: 'Zarejestruj się w CueQuote',
        content: 'Wejdź na app.cuequote.com i kliknij „Utwórz konto”. Wpisz imię i nazwisko, adres e-mail oraz hasło (minimum 8 znaków). Otrzymasz e-mail z potwierdzeniem — kliknij link, aby zweryfikować konto. Ekran potwierdzenia automatycznie Cię przekieruje po weryfikacji.',
        tip: 'Użyj służbowego adresu e-mail, aby klienci widzieli profesjonalnego nadawcę podczas udostępniania ofert.',
      },
      {
        title: 'Dokończ wdrożenie firmy',
        content: 'Po weryfikacji e-maila przejdziesz przez 3-etapowe wdrożenie: Dane firmy (nazwa, kraj, adres, NIP), Branding (wybierz kolor marki — nadaje on barwę całemu PDF-owi) oraz Waluta (domyślna waluta dla ofert). Wypełnij jak najwięcej pól — wszystkie te dane pojawią się w Twoich ofertach.',
      },
      {
        title: 'Prześlij logo firmy',
        content: 'Przejdź do Ustawień z paska bocznego. W sekcji Profil firmy kliknij „Prześlij” obok miejsca na logo. Wgraj plik PNG, JPG lub SVG (maks. 2 MB). Twoje logo pojawi się w każdym PDF-ie oferty oraz na stronie udostępniania, nadając Twoim wycenom profesjonalny wygląd.',
        tip: 'Użyj kwadratowego logo z przezroczystym tłem, aby uzyskać najlepszy efekt na jasnych i ciemnych szablonach PDF.',
      },
      {
        title: 'Dodaj sprzęt do katalogu',
        content: 'Przejdź do Katalogu z paska bocznego. Kliknij „Dodaj element” i wpisz dane sprzętu: nazwę, kategorię (Audio, Wideo, Oświetlenie itd.), domyślną jednostkę (dzień, szt., komplet) oraz domyślną cenę. Gdy AI generuje oferty, używa cen z TWOJEGO katalogu zamiast ogólnych szacunków. Im więcej dodasz pozycji, tym dokładniejsze będą wyceny.',
        tip: 'Zacznij od 10-20 najczęściej wycenianych pozycji. Zawsze możesz dodać więcej później.',
      },
      {
        title: 'Stwórz pierwszą ofertę',
        content: 'Kliknij „Nowa oferta” na pasku bocznym lub przycisk na pulpicie. Opisz wydarzenie naturalnym językiem — np.: „Konferencja korporacyjna dla 200 uczestników z nagłośnieniem PA, 6 mikrofonami krawatowymi, 2 ręcznymi, ścianą LED 3x2 m oraz podstawowym oświetleniem sceny”. Dodaj datę wydarzenia, miejsce i liczbę uczestników. Kliknij „Wygeneruj ofertę” i obserwuj, jak AI buduje listę sprzętu w czasie rzeczywistym.',
      },
      {
        title: 'Przejrzyj i dostosuj',
        content: 'Po wygenerowaniu przejrzyj zaproponowane przez AI pozycje pogrupowane według kategorii (Audio, Wideo, Oświetlenie, Obsługa, Transport). Możesz edytować ilości, ceny, dodawać lub usuwać pozycje oraz oznaczać je jako opcjonalne. Przełącz się na zakładkę „Warunki i szczegóły”, aby dostosować to, co jest w cenie, wykluczenia, warunki płatności i regulamin dla tej konkretnej oferty.',
      },
      {
        title: 'Pobierz PDF',
        content: 'Kliknij ikonę pobierania w nagłówku oferty, aby wygenerować profesjonalny PDF. Twój kolor marki, logo, dane firmy i wszystkie pozycje zostaną sformatowane w dopracowany, wielostronicowy dokument z okładką, tabelami sprzętu, podsumowaniem, harmonogramem płatności, miejscem na akceptację i podpis oraz regulaminem.',
        tip: 'Wypróbuj różne szablony PDF (Modern, Bold, Classic, Minimal) w Ustawieniach, aby znaleźć ten pasujący do Twojej marki.',
      },
    ],
  },
  {
    slug: 'ai-proposal-generation',
    title: 'Generowanie ofert przez AI',
    description: 'Dowiedz się, jak AI w CueQuote analizuje opis Twojego wydarzenia i generuje pełną listę sprzętu z dokładną wyceną.',
    duration: '4 min',
    difficulty: 'beginner',
    category: 'Oferty',
    whatYouLearn: [
      'Jak pisać skuteczne opisy wydarzeń dla AI',
      'Jak AI dobiera sprzęt na podstawie Twojego katalogu',
      'Miesięczny limit generacji AI i jak go nie marnować',
      'Zrozumienie procesu generowania strumieniowego',
      'Jak kontekst wydarzenia wpływa na wygenerowane warunki',
    ],
    steps: [
      {
        title: 'Rozpocznij nową ofertę',
        content: 'Kliknij „Nowa oferta” na pasku bocznym lub pulpicie. Wejdziesz w 3-etapowy kreator: Opisz → Generuj → Przejrzyj. Pierwszy krok to miejsce, w którym opowiadasz AI o swoim wydarzeniu.',
      },
      {
        title: 'Napisz szczegółowy opis wydarzenia',
        content: 'Im więcej szczegółów podasz, tym lepszy wynik AI. Uwzględnij: typ wydarzenia (konferencja, gala, festiwal), konkretne wymagania sprzętowe (np. „6 mikrofonów krawatowych Sennheiser EW-D”), rozmiar lub układ sali oraz wszelkie wymagania szczególne (streaming, tłumaczenie symultaniczne, realizacja na zewnątrz). AI stosuje zasady branży AV — automatycznie dodaje stoły mikserskie, gdy wskazane są mikrofony, mikser wideo przy wielu źródłach obrazu oraz konstrukcje kratowe pod oświetlenie nad sceną.',
        tip: 'Możesz wkleić brief klienta bezpośrednio w polu opisu. AI wyciągnie to, czego potrzebuje.',
      },
      {
        title: 'Uzupełnij szczegóły wydarzenia',
        content: 'Pod opisem ustaw datę wydarzenia, nazwę/miasto obiektu, spodziewaną liczbę uczestników oraz czas trwania w dniach. Te dane pomagają AI podejmować lepsze decyzje — wydarzenia wielodniowe mają pracę ludzką mnożoną przez liczbę dni, duże wydarzenia (500+ uczestników) otrzymują dodatkowe zabezpieczenia, a miejsce pomaga określić wymagania transportowe.',
      },
      {
        title: 'Wybierz klienta',
        content: 'Wybierz istniejącego klienta lub pomiń ten krok. Jeśli wybierzesz klienta, jego typ (Direct, Agency, Venue, Corporate) wpływa na wygenerowane przez AI warunki płatności. Klienci typu Agency automatycznie otrzymują warunki NET-30, a klienci Corporate standardową zaliczkę 50%.',
        tip: 'Wcześniejsze utworzenie klientów oznacza, że ich dane automatycznie uzupełnią się w PDF-ie — nazwa, osoba kontaktowa, e-mail, telefon.',
      },
      {
        title: 'Wybierz walutę',
        content: 'Wybierz walutę dla tej oferty z listy rozwijanej (EUR, USD, GBP, PLN, AED, EGP, CHF). Może być inna niż domyślna dla Twojej firmy — przydatne przy wycenach dla klientów zagranicznych.',
      },
      {
        title: 'Potwierdź przed uruchomieniem AI',
        content: 'Zanim CueQuote wygeneruje ofertę, pokaże okno potwierdzenia: „To wykorzysta 1 z X Twoich ofert AI w tym miesiącu. Zostało Ci Y w planie <plan>”. Każdy plan ma miesięczny limit AI — Free: 3, Starter: 15, Pro: 50, Business: bez limitu. Każda generacja (w tym ponowne próby) zmniejsza ten limit, więc sprawdź dokładnie opis przed potwierdzeniem. W planach bez limitu okno jest pomijane.',
        tip: 'Poświęcenie 30 dodatkowych sekund na doprecyzowanie opisu zwykle oszczędza cały slot — AI nagradza konkret, a zmarnowana generacja to pełna oferta z Twojego miesięcznego limitu.',
      },
      {
        title: 'Obserwuj generowanie przez AI',
        content: 'Kliknij „Wygeneruj ofertę” i obserwuj, jak AI strumieniuje pozycje sprzętu w czasie rzeczywistym. Pozycje pojawiają się pogrupowane według kategorii, z ilościami, jednostkami i cenami. AI korzysta z Twoich pozycji katalogowych i cen, gdy są dostępne, a dla pozycji spoza katalogu proponuje ceny rynkowe (oznaczone jako szacunkowe). Suma bieżąca aktualizuje się w miarę pojawiania się pozycji.',
        tip: 'AI używa Claude Haiku dla prostych wydarzeń (poniżej 50 osób, jednodniowych) i Claude Sonnet dla złożonych — optymalizując koszty bez utraty jakości.',
      },
      {
        title: 'Przejrzyj wygenerowaną ofertę',
        content: 'Po zakończeniu generacji zobaczysz wszystkie pozycje pogrupowane według kategorii z pełnym podsumowaniem. AI generuje również inteligentne pozycje w cenie (np. „Profesjonalny montaż i demontaż”), wykluczenia (np. „Wynajem agregatu dla obiektu plenerowego”) oraz sugerowane warunki płatności na podstawie kontekstu wydarzenia. Kliknij „Przejrzyj i zapisz”, aby zapisać ofertę i otworzyć pełny edytor.',
      },
      {
        title: 'Dopracuj w edytorze',
        content: 'Edytor ma dwie zakładki: „Sprzęt” dla pozycji (edycja ilości, cen, dodawanie/usuwanie wierszy) oraz „Warunki i szczegóły” dla tego, co jest w cenie, wykluczeń, harmonogramu płatności i regulaminu. Wszystko, co wygenerowało AI, jest w pełni edytowalne — traktuj to jako inteligentny punkt wyjścia, nie produkt końcowy.',
      },
    ],
  },
  {
    slug: 'customizing-pdf-templates',
    title: 'Personalizacja szablonów PDF',
    description: 'Przełączaj się między 4 profesjonalnymi stylami PDF i stosuj swój kolor marki, aby uzyskać spójny wygląd wszystkich ofert.',
    duration: '2 min',
    difficulty: 'beginner',
    category: 'Branding',
    whatYouLearn: [
      '4 style szablonów PDF i kiedy używać każdego z nich',
      'Jak kolor marki wpływa na cały PDF',
      'Podgląd szablonów przed wysłaniem',
    ],
    steps: [
      {
        title: 'Przejdź do Ustawień',
        content: 'Kliknij „Ustawienia” na pasku bocznym, aby otworzyć stronę ustawień firmy. Przewiń do sekcji „Branding oferty” — tutaj kontrolujesz wygląd każdego PDF-a.',
      },
      {
        title: 'Ustaw kolor marki',
        content: 'Kliknij próbnik kolorów lub wpisz kod hex bezpośrednio. Twój kolor marki nadaje ton całemu projektowi PDF — pasek akcentujący na górze, paski tytułów sekcji, etykiety kategorii, wyróżnienie sumy, kolory punktorów oraz obramowanie pola akceptacji. Wybierz kolor reprezentujący Twoją firmę.',
        tip: 'Testuj z kolorem o średnim nasyceniu. Bardzo jasne mogą być niewidoczne, a bardzo ciemne mogą wyglądać ciężko.',
      },
      {
        title: 'Wybierz szablon PDF',
        content: 'Wyświetlane są cztery karty szablonów z mini-podglądami. Modern: jasny hero z kartami i tabelami w paski zebry — czysty i profesjonalny. Bold: ciemna sekcja hero z mocnym akcentem koloru marki. Classic: tradycyjny styl papieru firmowego bez bloku hero — formalny i stonowany. Minimal: ultra-czysty, z cienkimi liniami i maksymalną ilością białej przestrzeni.',
      },
      {
        title: 'Poznaj każdy szablon',
        content: 'Modern sprawdza się dla większości firm AV — łączy profesjonalizm z atrakcyjnością wizualną. Bold jest świetny, gdy Twój kolor marki jest wyrazisty i chcesz zrobić wrażenie. Classic pasuje klientom korporacyjnym, którzy wolą tradycyjne formatowanie dokumentów. Minimal dobrze pasuje do ekskluzywnych, butikowych firm AV.',
      },
      {
        title: 'Zapisz i sprawdź podgląd',
        content: 'Kliknij „Zapisz zmiany” na dole. Następnie przejdź do dowolnej oferty, kliknij ikonę pobierania, aby wygenerować PDF. Otwórz go, aby zobaczyć swój szablon z kolorem marki zastosowanym w całym dokumencie. Każda nowa oferta będzie automatycznie używać tego szablonu.',
      },
      {
        title: 'Zmień szablon w dowolnym momencie',
        content: 'Szablony możesz zmienić w każdej chwili w Ustawieniach. Zmiana obowiązuje natychmiast dla wszystkich przyszłych pobrań PDF. Istniejące udostępnione oferty użyją nowego szablonu przy kolejnym wyświetleniu. Dzięki temu możesz eksperymentować, aż znajdziesz idealny wygląd.',
        tip: 'Wypróbuj wszystkie 4 szablony na prawdziwej ofercie przed wyborem. Mini-podglądy dają wskazówkę, ale pełny PDF to najlepszy sposób na decyzję.',
      },
    ],
  },
  {
    slug: 'managing-equipment-catalog',
    title: 'Zarządzanie katalogiem sprzętu',
    description: 'Zbuduj bazę sprzętu, aby AI generowało dokładne oferty z Twoimi rzeczywistymi cenami.',
    duration: '5 min',
    difficulty: 'intermediate',
    category: 'Konfiguracja',
    whatYouLearn: [
      'Jak dodawać i organizować pozycje sprzętu',
      'Zrozumienie kategorii sprzętu',
      'Jak katalog zasila oferty generowane przez AI',
      'Masowy import z arkuszy kalkulacyjnych',
    ],
    steps: [
      {
        title: 'Przejdź do Katalogu',
        content: 'Kliknij „Katalog” na pasku bocznym. Zobaczysz listę sprzętu pogrupowaną według kategorii. Jeśli dopiero zaczynasz, będzie pusta — to normalne. Katalog to baza sprzętu Twojej firmy, z której AI korzysta przy generowaniu ofert.',
      },
      {
        title: 'Dodaj pierwszą pozycję',
        content: 'Kliknij „Dodaj element” (lub przycisk „+”). Uzupełnij nazwę pozycji (np. „Sennheiser EW-D mikrofon krawatowy”), wybierz kategorię (Audio), wybierz domyślną jednostkę (szt., dzień, komplet, m², metr, wydarzenie, wyjazd) i wpisz domyślną cenę wynajmu. To cena, której AI użyje, gdy włączy tę pozycję do oferty.',
        tip: 'Używaj konkretnych nazw modeli. „Sennheiser EW-D krawatowy” jest lepsze niż „Mikrofon bezprzewodowy” — pokazuje klientom, że masz wysokiej jakości sprzęt.',
      },
      {
        title: 'Poznaj kategorie',
        content: 'CueQuote ma 10 kategorii sprzętu: Audio, Wideo, Oświetlenie, Tłumaczenie symultaniczne, Streaming, Digital Signage, Scena, Obsługa, Transport i Inne. Kategorie decydują o sposobie grupowania pozycji w ofertach i PDF-ach. AI stosuje reguły specyficzne dla kategorii — na przykład automatycznie dodaje stół mikserski, gdy w kategorii Audio są mikrofony.',
      },
      {
        title: 'Ustaw dokładne domyślne ceny',
        content: 'Domyślne ceny powinny odzwierciedlać Twoje standardowe stawki wynajmu. Kiedy AI generuje ofertę, dopasowuje pozycje z Twojego katalogu po nazwie i używa Twoich cen. Pozycje nieznalezione w katalogu otrzymują szacunkowe ceny rynkowe. Im więcej pozycji dodasz z dokładnymi cenami, tym mniej edycji po generacji AI.',
      },
      {
        title: 'Importuj z arkusza',
        content: 'Aby zaimportować dane masowo, kliknij przycisk importu i prześlij plik XLSX. Arkusz powinien zawierać kolumny: nazwa, kategoria, jednostka i cena. To najszybszy sposób zapełnienia katalogu, jeśli masz już listę sprzętu w Excelu lub Arkuszach Google.',
      },
      {
        title: 'Zarządzaj aktywnymi pozycjami',
        content: 'Każda pozycja ma przełącznik aktywny/nieaktywny. Dezaktywacja zachowuje pozycję w bazie, ale ukrywa ją przed AI podczas generowania ofert. Używaj tego dla sprzętu sezonowego lub chwilowo niedostępnego. Możesz ponownie aktywować w każdej chwili.',
      },
      {
        title: 'Jak katalog zasila generowanie AI',
        content: 'Kiedy tworzysz ofertę, AI otrzymuje cały Twój aktywny katalog jako kontekst. Dopasowuje sprzęt z opisu wydarzenia do pozycji w katalogu, używając dokładnie Twoich nazw i cen. Jeśli wydarzenie wymaga czegoś spoza katalogu, AI dodaje pozycję z prefiksem [CUSTOM] i szacunkową ceną — następnie możesz ręcznie zaktualizować cenę.',
        tip: 'Katalog z 50-100 pozycjami pokrywa większość potrzeb AV. Zacznij od kluczowego sprzętu i rozbudowuj z czasem.',
      },
    ],
  },
  {
    slug: 'client-management',
    title: 'Zarządzanie klientami',
    description: 'Dodawaj i porządkuj klientów, aby oferty były automatycznie personalizowane ich danymi.',
    duration: '3 min',
    difficulty: 'beginner',
    category: 'Podstawy',
    whatYouLearn: [
      'Dodawanie i edycja profili klientów',
      'Jak typy klientów wpływają na warunki generowane przez AI',
      'Łączenie klientów z ofertami',
    ],
    steps: [
      {
        title: 'Przejdź do Klientów',
        content: 'Kliknij „Klienci” na pasku bocznym. Ta strona pokazuje wszystkich Twoich klientów na przeszukiwalnej liście. Każda karta klienta pokazuje nazwę, osobę kontaktową, e-mail, typ oraz liczbę wysłanych mu ofert.',
      },
      {
        title: 'Dodaj nowego klienta',
        content: 'Kliknij „Dodaj klienta” i uzupełnij: nazwę klienta/firmy, osobę kontaktową, adres e-mail, numer telefonu i ewentualne notatki. Wszystkie te dane pojawią się w PDF-ie oferty w sekcji „Dla” — upewnij się, że są poprawne.',
      },
      {
        title: 'Wybierz właściwy typ klienta',
        content: 'Wybierz jeden z czterech typów: Direct (klienci końcowi rezerwujący usługi bezpośrednio), Agency (agencje eventowe zarządzające relacją z klientem), Venue (hotele lub obiekty z własnymi potrzebami AV) lub Corporate (firmy z cyklicznymi programami eventowymi). Typ klienta to nie tylko etykieta — wpływa na to, jak AI generuje warunki płatności.',
        tip: 'Klienci Agency automatycznie otrzymują warunki NET-30 (0% zaliczki, saldo w 30 dni), ponieważ agencje zwykle płacą na fakturę. Klienci Corporate otrzymują standardową zaliczkę 50%.',
      },
      {
        title: 'Łącz klientów z ofertami',
        content: 'Przy tworzeniu nowej oferty możesz wybrać istniejącego klienta z listy. Nazwa klienta, osoba kontaktowa, e-mail i telefon pojawią się na okładce PDF-a i w sekcji „Dla”. Możesz też utworzyć nowego klienta bezpośrednio w procesie tworzenia oferty.',
      },
      {
        title: 'Zobacz historię ofert klienta',
        content: 'Kliknij dowolnego klienta, aby zobaczyć wszystkie powiązane z nim oferty. Daje to szybki przegląd relacji — ile ofert wysłano, ich statusy (szkic, wysłana, wygrana, przegrana) oraz łączną wartość. Przydatne, gdy powracający klient prosi o nową wycenę.',
      },
      {
        title: 'Edytuj dane klienta',
        content: 'Kliknij przycisk edycji na karcie dowolnego klienta, aby zaktualizować jego dane. Zmiany dotyczą wszystkich przyszłych ofert — istniejące oferty zachowują dane z momentu ich utworzenia. Dzięki temu wysłane oferty pozostają dokładne nawet po zmianie danych kontaktowych klienta.',
      },
    ],
  },
  {
    slug: 'terms-details-editor',
    title: 'Edytor warunków i szczegółów',
    description: 'Dostosuj to, co jest w cenie, wykluczenia, warunki płatności i regulamin dla każdej oferty indywidualnie.',
    duration: '4 min',
    difficulty: 'intermediate',
    category: 'Oferty',
    whatYouLearn: [
      'Edycja pozycji w cenie i wykluczeń dla każdej oferty',
      'Ustawianie niestandardowych warunków płatności',
      'Zarządzanie sekcjami regulaminu',
      'Korzystanie z inteligentnych ostrzeżeń, aby unikać błędów',
    ],
    steps: [
      {
        title: 'Otwórz zakładkę Warunki',
        content: 'Otwórz dowolną ofertę w edytorze. Pod nagłówkiem zobaczysz dwie zakładki: „Sprzęt” (domyślna, z pozycjami) oraz „Warunki i szczegóły”. Kliknij „Warunki i szczegóły”, aby przejść do edytora warunków. Każda sekcja jest wstępnie uzupełniona przez AI na podstawie opisu wydarzenia lub z domyślnych ustawień firmy, jeśli warunki AI nie zostały wygenerowane.',
      },
      {
        title: 'Edytuj pozycje w cenie',
        content: 'Sekcja „Co obejmuje oferta” zawiera wszystko, co jest zawarte w ofercie. Każda pozycja to pole tekstowe — edytuj bezpośrednio klikając. Usuwaj pozycje przyciskiem X, dodawaj nowe za pomocą „+ Dodaj pozycję w cenie”. Typowe pozycje w cenie: sprzęt wymieniony powyżej, profesjonalny montaż i demontaż, wsparcie techniczne na miejscu, ubezpieczenie sprzętu.',
      },
      {
        title: 'Edytuj wykluczenia',
        content: 'Sekcja „Czego nie obejmuje oferta” wyjaśnia, co jest poza zakresem. Zapobiega to późniejszym sporom. Typowe wykluczenia: opłaty obiektowe i pozwolenia, przyłącza energetyczne ponad standard, tworzenie treści (grafika, wideo), zmiany zgłoszone na mniej niż 48 godzin przed wydarzeniem. AI dodaje wykluczenia kontekstowe — wydarzenia plenerowe otrzymują „Wynajem agregatu”, międzynarodowe „Cło i opłaty importowe”.',
        tip: 'Jasne wykluczenia są równie ważne jak pozycje w cenie. Chronią Cię przed rozszerzaniem zakresu i ustawiają właściwe oczekiwania klienta.',
      },
      {
        title: 'Ustaw warunki płatności',
        content: 'Dwa pola kontrolują harmonogram płatności: Zaliczka % (0-100) oraz Saldo płatne (dni przed wydarzeniem). Linia podglądu pokazuje dokładnie, co będzie w PDF-ie: „50% zaliczki przy akceptacji, 50% salda płatne 7 dni przed wydarzeniem”. AI ustawia je na podstawie typu klienta — agencje otrzymują 0% zaliczki z warunkami 30-dniowymi.',
      },
      {
        title: 'Edytuj Regulamin',
        content: 'Sekcja regulaminu jest rozwijana — kliknij tytuł dowolnej sekcji, aby ją rozwinąć i edytować. Domyślne sekcje to Ważność oferty, Warunki płatności, Polityka anulowania, Sprzęt i szkody oraz Dostępność. Możesz edytować tytuł i pełny tekst każdej sekcji, dodawać nowe lub usuwać te, których nie potrzebujesz.',
      },
      {
        title: 'Używaj znacznika {company_name}',
        content: 'W tekście regulaminu wpisz {company_name}, a zostanie on automatycznie zastąpiony rzeczywistą nazwą Twojej firmy w PDF-ie. Na przykład: „Cały sprzęt pozostaje własnością {company_name}” stanie się „Cały sprzęt pozostaje własnością AVE Events” w wygenerowanym PDF-ie.',
      },
      {
        title: 'Przywróć ustawienia domyślne firmy',
        content: 'Każda sekcja ma w nagłówku link „Przywróć domyślne”. Kliknięcie go przywraca sekcję do ogólnofirmowych ustawień domyślnych (ustawianych w Ustawienia → Domyślne ustawienia ofert). Przydatne, gdy dostosowałeś warunki dla jednego klienta, ale chcesz zacząć od nowa dla innego.',
      },
      {
        title: 'Zwracaj uwagę na inteligentne ostrzeżenia',
        content: 'Żółte banery ostrzegawcze pojawiają się na górze zakładki Warunki, gdy coś może wymagać uwagi. Ostrzeżenia obejmują: 0% zaliczki w ofertach powyżej 5 000 (ryzykowne), puste pozycje w cenie (mogą prowadzić do sporów), brak regulaminu (nieprofesjonalne) oraz lokalizację obiektu różną od adresu firmy (rozważ warunki międzynarodowe). Mają charakter informacyjny — możesz je odrzucić, jeśli nie dotyczą Twojej oferty.',
      },
    ],
  },
  {
    slug: 'sharing-tracking-proposals',
    title: 'Udostępnianie i śledzenie ofert',
    description: 'Wysyłaj oferty klientom i śledź, kiedy je przeglądają, akceptują lub odrzucają.',
    duration: '3 min',
    difficulty: 'beginner',
    category: 'Oferty',
    whatYouLearn: [
      'Wysyłanie ofert e-mailem',
      'Udostępnianie przez link',
      'Śledzenie aktywności klienta',
      'Jak klienci akceptują lub odrzucają ofertę',
    ],
    steps: [
      {
        title: 'Otwórz okno Wyślij',
        content: 'W edytorze oferty kliknij zielony przycisk „Wyślij” w prawym górnym rogu. Otworzy się okno, w którym możesz napisać e-mail towarzyszący ofercie. Jeśli klient jest powiązany, jego adres e-mail zostanie wstępnie wpisany.',
      },
      {
        title: 'Spersonalizowane powitanie — wypełniane automatycznie',
        content: 'CueQuote automatycznie wypełnia spersonalizowane powitanie skierowane do klienta po imieniu, z odwołaniem do tytułu oferty. Informuje klienta, aby użył linku do przeglądu i odpowiedzi, a podpis zawiera nazwę Twojej firmy. Możesz edytować lub wyczyścić wiadomość przed wysłaniem. E-mail zawiera logo firmy, szczegóły oferty, łączną cenę oraz wyróżniony przycisk „Zobacz ofertę”.',
      },
      {
        title: 'Wyślij lub skopiuj link',
        content: 'Kliknij „Wyślij”, aby dostarczyć e-mail, lub kliknij ikonę linku, aby skopiować URL udostępniania. Link działa bez logowania — każdy, kto go ma, może zobaczyć ofertę. Użyj opcji kopiowania linku do WhatsAppa, Slacka lub innych komunikatorów.',
        tip: 'Status oferty zmienia się automatycznie na „Wysłana” po wysyłce e-mailem.',
      },
      {
        title: 'Śledź, kiedy klienci przeglądają',
        content: 'Po powrocie do pulpitu i listy ofert zobaczysz aktualizacje statusów. Gdy klient otworzy Twoją ofertę, status zmieni się na „Wyświetlona” i zobaczysz datę pierwszego i ostatniego wyświetlenia oraz łączną liczbę wyświetleń. Podpowiada to, czy Twoja oferta jest aktywnie analizowana.',
      },
      {
        title: 'Klient przegląda ofertę',
        content: 'Strona udostępniania pokazuje profesjonalny, spójny z marką widok oferty: nagłówek firmowy, szczegóły wydarzenia, cały sprzęt według kategorii z cenami, sumy, pozycje w cenie/wykluczenia, warunki płatności oraz sekcję notatek. Jest zaprojektowana tak, aby wyglądać jak formalny dokument biznesowy, a nie zwykła wycena.',
      },
      {
        title: 'Klient akceptuje lub odrzuca',
        content: 'Na dole strony udostępniania klient widzi przyciski „Zaakceptuj ofertę” oraz „Odrzuć”. Gdy kliknie Zaakceptuj, status oferty w Twoim pulpicie zmieni się na „Wygrana”. Jeśli odrzuci, stanie się „Przegrana”. Otrzymasz powiadomienie o każdej odpowiedzi, a status będzie widoczny na liście ofert.',
      },
      {
        title: 'Pobierz PDF w dowolnym momencie',
        content: 'Kliknij ikonę pobierania w nagłówku oferty, aby wygenerować PDF. PDF zawiera wszystko: okładkę z brandingiem firmy, zakres prac, tabele sprzętu według kategorii, kartę podsumowań, pozycje w cenie/wykluczenia, harmonogram płatności, blok podpisu oraz pełny regulamin. Udostępniaj PDF jako załącznik lub drukuj na spotkania osobiste.',
      },
    ],
  },
  {
    slug: 'billing-subscription',
    title: 'Rozliczenia i subskrypcja',
    description: 'Poznaj plany CueQuote, ulepsz swoje konto i zarządzaj rozliczeniami.',
    duration: '3 min',
    difficulty: 'intermediate',
    category: 'Konto',
    whatYouLearn: [
      'Porównanie 4 planów subskrypcji',
      'Jak ulepszyć plan z darmowym okresem próbnym',
      'Zarządzanie metodami płatności i fakturami',
      'Pakiety kredytów do płatności za wykorzystanie',
    ],
    steps: [
      {
        title: 'Przejdź do Rozliczeń',
        content: 'Kliknij „Rozliczenia” na pasku bocznym. Strona rozliczeń pokazuje Twój bieżący plan, ofert wykorzystanych w tym miesiącu oraz wszystkie dostępne plany. Jeśli korzystasz z planu Free, możesz utworzyć 3 oferty miesięcznie.',
      },
      {
        title: 'Porównaj plany',
        content: 'Dostępne są cztery plany: Free (3 oferty/mies., podstawowy PDF), Starter za 39 miesięcznie (15 ofert, pełny branding, zarządzanie klientami), Pro za 99 miesięcznie (50 ofert, niestandardowe szablony, analityka) oraz Business za 199 miesięcznie (nielimitowane oferty, dostęp do API, dedykowane wsparcie). Przełączaj między rozliczeniem miesięcznym i rocznym — rocznie oszczędzasz 20%.',
      },
      {
        title: 'Ulepsz do planu płatnego',
        content: 'Kliknij „Rozpocznij 3-dniowy okres próbny” w dowolnym planie płatnym. Zostaniesz przekierowany do Stripe Checkout, gdzie wpiszesz dane płatności. Wszystkie plany płatne obejmują 3-dniowy darmowy okres próbny — nie zostaniesz obciążony do zakończenia okresu próbnego. Możesz anulować w dowolnym momencie w trakcie próby bez kosztów.',
        tip: 'Po ulepszeniu planu otrzymasz e-mail potwierdzający z danymi planu i funkcjami.',
      },
      {
        title: 'Zarządzaj subskrypcją',
        content: 'Po subskrypcji kliknij „Zarządzaj rozliczeniami”, aby przejść do Portalu Klienta Stripe. Tutaj możesz zaktualizować metodę płatności, zobaczyć i pobrać dotychczasowe faktury, zmienić plan lub anulować subskrypcję. Wszystkie zmiany obowiązują od końca bieżącego cyklu rozliczeniowego.',
      },
      {
        title: 'Pobieraj faktury',
        content: 'W portalu Stripe kliknij dowolną poprzednią płatność, aby zobaczyć i pobrać PDF faktury. Faktury zawierają nazwę firmy, adres, NIP oraz dane płatności — gotowe dla Twojego działu księgowego.',
      },
      {
        title: 'Kup pakiety kredytów',
        content: 'Nie chcesz subskrypcji miesięcznej? Kup kredyty na oferty. Pakiet 3-sztuk kosztuje 19 (po 6,33 za sztukę), a pakiet 10-sztuk 49 (po 4,90 za sztukę). Kredyty nie wygasają i obejmują wszystkie funkcje premium, jak brandowane PDF-y. Świetne dla firm wyceniających sezonowo.',
      },
      {
        title: 'Monitoruj zużycie',
        content: 'Strona rozliczeń pokazuje, ile ofert wykorzystałeś w tym miesiącu. Licznik ofert resetuje się w dniu rozliczeniowym. Jeśli osiągniesz limit, możesz albo ulepszyć plan, albo kupić pakiet kredytów, aby dalej tworzyć oferty.',
      },
    ],
  },
]
