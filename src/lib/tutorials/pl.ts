import type { Tutorial } from './types'

export const TUTORIALS_PL: Tutorial[] = [
  {
    slug: 'getting-started',
    title: 'Pierwsze kroki',
    description: 'Załóż konto CueQuote i wyślij pierwszą ofertę AV opartą na AI w mniej niż 10 minut.',
    duration: '5 min',
    difficulty: 'beginner',
    category: 'Podstawy',
    mode: 'both',
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
    mode: 'both',
    videoUrl: '/videos/getting-started.mp4',
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
        title: 'Załącz pliki z wymaganiami',
        content: 'Prześlij PDF-y z riderami technicznymi, arkusze Excel z listami sprzętu, briefy wydarzeń w formacie Word lub zdjęcia planów sal obok opisu wydarzenia. CueQuote wyodrębnia tekst i przekazuje go AI jako dodatkowy kontekst, generując dokładniejsze oferty.',
        tip: 'Połącz krótki opis tekstowy z załączonym riderem, aby uzyskać najlepsze wyniki — AI łączy oba źródła.',
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
    mode: 'both',
    videoUrl: '/videos/pdf-templates.mp4',
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
    mode: 'av',
    videoUrl: '/videos/getting-started.mp4',
    whatYouLearn: [
      'Jak dodawać i organizować pozycje sprzętu',
      'Zrozumienie kategorii sprzętu',
      'Jak katalog zasila oferty generowane przez AI',
      'Śledzenie cen kosztowych i marż na sprzęt podnajmowany',
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
        title: 'Śledź koszty i marże',
        content: 'Dla pozycji podnajmowanych od innych dostawców dodaj cenę kosztową w katalogu. Edytor ofert wyświetla wewnętrzny panel marży z Przychodem, Kosztem, Zyskiem i Marżą % — nigdy niewidoczny dla klientów. Zostaw koszt pusty dla własnego sprzętu.',
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
    mode: 'both',
    videoUrl: '/videos/client-management.mp4',
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
    mode: 'both',
    videoUrl: '/videos/sharing-and-tracking.mp4',
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
        title: 'Wycena dni montażu i demontażu',
        content: 'Skonfiguruj, jak naliczany jest sprzęt w dni montażu i demontażu. Wybierz 0% (gratis), 50% (połowa stawki) lub 100% (pełna stawka) w Ustawieniach. Każda oferta może nadpisać wartość domyślną. Praca ludzka jest zawsze naliczana w pełnej stawce za wszystkie dni.',
        tip: 'Większość firm AV nalicza 50% za dni montażu/demontażu — klienci tego oczekują, a pokrywa to czas, w którym sprzęt jest zajęty bez pełnego wykorzystania na pokazie.',
      },
      {
        title: 'Edytuj Regulamin',
        content: 'Sekcja regulaminu jest rozwijana — kliknij tytuł dowolnej sekcji, aby ją rozwinąć i edytować. Domyślne sekcje to Ważność oferty, Warunki płatności, Polityka anulowania, Sprzęt i szkody oraz Dostępność. Możesz edytować tytuł i pełny tekst każdej sekcji, dodawać nowe lub usuwać te, których nie potrzebujesz.',
      },
      {
        title: 'Używaj znacznika {company_name}',
        content: 'W tekście regulaminu wpisz {company_name}, a zostanie on automatycznie zastąpiony rzeczywistą nazwą Twojej firmy w PDF-ie. Na przykład: „Cały sprzęt pozostaje własnością {company_name}” stanie się „Cały sprzęt pozostaje własnością AVE Event Solutions” w wygenerowanym PDF-ie.',
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
    mode: 'both',
    videoUrl: '/videos/sharing-and-tracking.mp4',
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
        title: 'E-podpis przy akceptacji',
        content: 'Podczas akceptacji klient rysuje podpis na płótnie, wpisuje imię i nazwisko oraz potwierdza, że zgadza się z warunkami. Narysowany podpis, znacznik czasu i dane urządzenia są zapisywane jako dowód prawny i pojawiają się w pobranym pliku PDF.',
      },
      {
        title: 'Śledź zaangażowanie klienta',
        content: 'Po tym, jak klient obejrzy Twoją ofertę, edytor oferty wyświetla panel analityczny z łącznym czasem przeglądania, głębokością przewijania, liczbą wizyt, pobraniami PDF oraz rozbiciem czasu na poszczególne sekcje. Wykorzystaj te dane, aby skutecznie kontynuować rozmowy.',
      },
      {
        title: 'Pobierz PDF w dowolnym momencie',
        content: 'Kliknij ikonę pobierania w nagłówku oferty, aby wygenerować PDF. PDF zawiera wszystko: okładkę z brandingiem firmy, zakres prac, tabele sprzętu według kategorii, kartę podsumowań, pozycje w cenie/wykluczenia, harmonogram płatności, blok podpisu oraz pełny regulamin. Udostępniaj PDF jako załącznik lub drukuj na spotkania osobiste.',
      },
      {
        title: 'Plan oceny ryzyka',
        content: 'Wygeneruj opartą na AI ocenę ryzyka dla swojego wydarzenia z zakładki Plan ryzyka. AI analizuje Twój sprzęt, obiekt i liczbę uczestników, aby zidentyfikować zagrożenia i plany łagodzące w 8 kategoriach: awaria sprzętu, przerwa w zasilaniu, sieć, tłumaczenie, pogoda, ekipa, harmonogram i bezpieczeństwo. Plan Starter obejmuje 3 podstawowe kategorie; Pro odblokowuje wszystkie 8 z możliwością edycji i włączenia do PDF.',
      },
      {
        title: 'Regeneracja ofert',
        content: 'Musisz zaktualizować ofertę? Użyj opcji Regeneruj z menu Więcej zamiast tworzenia nowej. Wybierz Pełna (zamień wszystkie pozycje), Inteligentna (zachowaj swoje edycje) lub Z pliku (wgraj zaktualizowaną specyfikację). Twój klient, daty, obiekt i warunki zostają zachowane. Regeneracja nie wlicza się do miesięcznego limitu ofert.',
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
    mode: 'both',
    videoUrl: '/videos/billing-and-subscriptions.mp4',
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
  {
    slug: 'client-portal',
    title: 'Portal klienta',
    description: 'Daj swoim klientom dedykowane logowanie do przeglądania wszystkich ofert i faktur.',
    duration: '2 min',
    difficulty: 'intermediate',
    category: 'Oferty',
    mode: 'both',
    videoUrl: '/videos/client-portal.mp4',
    whatYouLearn: [
      'Jak klienci rejestrują się w portalu',
      'Co klienci widzą w swoim pulpicie portalu',
      'Zarządzanie dostępem i uprawnieniami klientów',
      'Odbieranie dostępu klientom w razie potrzeby',
    ],
    steps: [
      {
        title: 'Proces rejestracji klienta',
        content: 'Gdy wysyłasz ofertę, klient otrzymuje zaproszenie do utworzenia konta w portalu. Klika link w e-mailu, ustawia hasło i uzyskuje dostęp do swojego osobistego pulpitu. Jeśli klient ma już konto, nowa oferta pojawia się automatycznie.',
      },
      {
        title: 'Co widzą klienci',
        content: 'W portalu klienci widzą pulpit z listą wszystkich ofert i faktur, które im udostępniłeś. Każda pozycja pokazuje tytuł, datę, status i łączną kwotę. Klienci mogą otworzyć dowolną ofertę, aby ją przejrzeć, zaakceptować lub odrzucić, pobrać PDF i przeglądać faktury — wszystko z jednego miejsca.',
      },
      {
        title: 'Zarządzanie dostępem klientów',
        content: 'W pulpicie CueQuote przejdź do Klientów i wybierz klienta, aby zobaczyć status jego portalu. Możesz ponownie wysłać zaproszenie, zresetować hasło lub całkowicie odebrać dostęp. Odebranie dostępu natychmiast wyłącza logowanie — klient nie będzie mógł przeglądać ofert ani faktur, dopóki nie przywrócisz mu dostępu.',
      },
    ],
  },
  {
    slug: 'invoice-payments-corrections',
    title: 'Płatności i korekty faktur',
    description: 'Rejestruj płatności częściowe, śledź historię płatności, wystawiaj faktury korygujące i zarządzaj statusami faktur.',
    duration: '4 min',
    difficulty: 'intermediate',
    category: 'Faktury',
    mode: 'both',
    videoUrl: '/videos/invoice-payments.mp4',
    whatYouLearn: [
      'Rejestrowanie pełnych i częściowych płatności',
      'Przeglądanie historii płatności i cofanie statusu opłaconej',
      'Wystawianie faktur korygujących z porównaniem przed/po',
      'Ręczna zmiana statusu faktury',
    ],
    steps: [
      { title: 'Zapisz płatność', content: 'Otwórz fakturę i spójrz na panel Podsumowanie po prawej. Pod "Kwota do zapłaty" kliknij zielony przycisk "Zapisz płatność". Wpisz kwotę, datę, metodę płatności i opcjonalnie numer referencyjny. Kliknij "Zapisz" — faktura automatycznie zmieni status na "częściowa" lub "opłacona".', tip: 'Możesz rejestrować wiele częściowych płatności. Każda jest śledzona osobno w sekcji Historia płatności.' },
      { title: 'Historia płatności', content: 'Przewiń w dół pod sekcję Notatki, aby zobaczyć kartę Historia płatności. Każda płatność pokazuje kwotę, datę, metodę i notatki. Suma wszystkich płatności jest wyświetlana na dole. Możesz usunąć błędnie wprowadzone płatności klikając ikonę kosza.' },
      { title: 'Cofnij status opłaconej', content: 'Jeśli przypadkowo oznaczyłeś fakturę jako opłaconą, pod zielonym znaczkiem "Opłacona" znajdziesz link "Cofnij — oznacz jako nieopłaconą". Kliknij i potwierdź — faktura wróci do prawidłowego statusu na podstawie rzeczywistych płatności.' },
      { title: 'Zmień status faktury', content: 'Kliknij kolorowy znaczek statusu obok numeru faktury. Pojawi się lista rozwijana ze wszystkimi statusami: Szkic, Wysłana, Wyświetlona, Częściowa, Opłacona, Przeterminowana, Anulowana. Wybierz nowy status — zapisze się natychmiast.' },
      { title: 'Wystaw korektę', content: 'Dla wysłanych lub opłaconych faktur wymagających korekty, kliknij ikonę korekty (okrągła strzałka) w pasku narzędzi. Potwierdź — zostanie utworzona nowa faktura korygująca z sufiksem "/COR". Wszystkie pozycje są kopiowane z oryginału z zapisem oryginalnych wartości.' },
      { title: 'Edytuj korektę', content: 'Na fakturze korygującej edytuj pozycje wymagające korekty. Zmienione pozycje automatycznie pokazują oryginalną kwotę przekreśloną obok nowej. Wypełnij pole "Powód korekty" i wyślij korektę do klienta. Oryginalna faktura pozostaje nienaruszona z banerem linkującym do korekty.', tip: 'Pełna ścieżka audytu — oryginał i korekta są ze sobą połączone.' },
    ],
  },
  {
    slug: 'invoicing',
    title: 'Wystawianie faktur',
    description: 'Generuj profesjonalne faktury z zaakceptowanych ofert, dodaj dane płatności i wyślij je klientom.',
    duration: '4 min',
    difficulty: 'intermediate',
    category: 'Faktury',
    mode: 'both',
    videoUrl: '/videos/invoicing.mp4',
    whatYouLearn: [
      'Jak tworzyć faktury z ofert',
      'Konfiguracja metod płatności (przelew, PayPal)',
      'Wysyłanie faktur i śledzenie płatności',
      'Faktura zaliczkowa vs pełna',
      'Wycena dni montażu i demontażu',
    ],
    steps: [
      {
        title: 'Dodaj metody płatności',
        content: 'Przejdź do Ustawienia → zakładka Płatności. Kliknij „Dodaj metodę płatności" i wpisz dane bankowe (nazwa rachunku, bank, IBAN, SWIFT) lub adres PayPal. Te dane pojawią się na każdej wysyłanej fakturze. Możesz dodać wiele metod i ustawić jedną jako domyślną.',
        tip: 'Dodaj przynajmniej jedno konto bankowe — większość klientów B2B preferuje przelew za sprzęt AV.',
      },
      {
        title: 'Utwórz fakturę z oferty',
        content: 'Otwórz dowolną ofertę, która została wysłana lub zaakceptowana. Kliknij przycisk „Utwórz fakturę" w nagłówku. Zostaniesz zapytany o wybór między fakturą zaliczkową (na podstawie procentu zaliczki) a fakturą pełną (100% kwoty). CueQuote kopiuje wszystkie pozycje, dane klienta i ceny z oferty.',
      },
      {
        title: 'Przejrzyj i dostosuj fakturę',
        content: 'Edytor faktury otwiera się z danymi wstępnie wypełnionymi z oferty. Sprawdź numer faktury (generowany automatycznie jako INV-0001, INV-0002...), datę wystawienia, termin płatności i pozycje. Możesz edytować dowolne pole, dodawać lub usuwać pozycje oraz zmieniać ilości i ceny.',
      },
      {
        title: 'Wybierz metodę płatności',
        content: 'Wybierz z listy, którą metodę płatności wyświetlić na fakturze. Dane wybranej metody (IBAN, SWIFT itp.) pojawią się w sekcji „Instrukcje płatności" w PDF-ie faktury, wraz z numerem faktury jako referencją.',
      },
      {
        title: 'Pobierz PDF faktury',
        content: 'Kliknij przycisk pobierania, aby wygenerować profesjonalny PDF faktury. Zawiera branding firmy, formalny nagłówek „FAKTURA", tabelę pozycji, sumy z VAT, instrukcje płatności z danymi bankowymi oraz numer referencyjny. Gdy faktura jest oznaczona jako opłacona, pojawia się zielony znak wodny „OPŁACONA".',
      },
      {
        title: 'Wyślij i śledź fakturę',
        content: 'Kliknij „Wyślij", aby wysłać fakturę e-mailem do klienta z załączonym PDF. CueQuote automatycznie dodaje spersonalizowane powitanie z imieniem klienta. Status faktury zmienia się ze Szkic na Wysłana. Po otrzymaniu płatności kliknij „Oznacz jako opłaconą". Możesz też rejestrować płatności częściowe.',
        tip: 'Dodaj notatkę z prośbą, aby klienci podawali numer faktury jako tytuł przelewu — to bardzo ułatwia uzgadnianie płatności.',
      },
      {
        title: 'Wycena dni montażu i demontażu',
        content: 'CueQuote rozdziela dni eventowe od dni montażu (instalacja) i demontażu (rozbiórka). Sprzęt jest naliczany według konfigurowalnej stawki za dni montażu/demontażu — 0% (gratis), 50% (połowa stawki) lub 100% (pełna stawka). Praca ludzka jest zawsze naliczana w pełnej stawce za wszystkie dni. Ustaw domyślną wartość firmy w Ustawienia > Oferty.',
        tip: 'W Polsce 50% stawki za sprzęt w dni montażowe to standard. W regionie Zatoki Perskiej i MENA standardem jest 100%. Ustaw domyślnie raz i zapomnij.',
      },
    ],
  },
  {
    slug: 'team-management',
    title: 'Zarządzanie zespołem',
    description: 'Zapraszaj członków zespołu, przydzielaj role i współpracuj nad ofertami w całej organizacji.',
    duration: '3 min',
    difficulty: 'intermediate',
    category: 'Konto',
    mode: 'both',
    videoUrl: '/videos/team-management.mp4',
    whatYouLearn: [
      'Jak zapraszać członków zespołu do workspace',
      'Cztery role i co każda z nich daje',
      'Zarządzanie członkami zespołu i ich usuwanie',
      'Jak dane migrują po dołączeniu członka',
    ],
    steps: [
      {
        title: 'Wejdź na stronę Zespół',
        content: 'Przejdź do Zespół z paska bocznego. Zobaczysz listę wszystkich obecnych członków zespołu z ich imionami, e-mailami, rolami i datą dołączenia.',
      },
      {
        title: 'Zaproś nowego członka',
        content: 'Kliknij „Zaproś członka" i wpisz adres e-mail osoby. Wybierz rolę: Owner (pełny dostęp wraz z rozliczeniami), Admin (pełny dostęp oprócz rozliczeń), Sales (tworzenie ofert, zarządzanie klientami i katalogiem) lub Viewer (dostęp tylko do odczytu pulpitu).',
        tip: 'Użyj roli Sales dla swojego zespołu wyceniającego — mogą tworzyć oferty i zarządzać klientami, ale nie mogą zmieniać rozliczeń ani ustawień firmy.',
      },
      {
        title: 'Członek zespołu dołącza',
        content: 'Zaproszona osoba otrzymuje e-mail z linkiem. Jeśli ma już konto CueQuote, klika link, loguje się i widzi stronę akceptacji/odrzucenia. Jeśli jest nowa, najpierw się rejestruje, a następnie akceptuje zaproszenie.',
      },
      {
        title: 'Dane migrują automatycznie',
        content: 'Gdy członek zespołu zaakceptuje zaproszenie, jego istniejące oferty, klienci, pozycje katalogowe i faktury automatycznie przenoszą się do workspace Twojego zespołu. Nic nie jest tracone — jego stary pusty workspace jest czyszczony. Widzi potwierdzenie przed akceptacją.',
        tip: 'To znaczy, że nowi pracownicy mogą zacząć wyceniać na własnym koncie, a gdy dołączą do Twojego zespołu, cała ich praca przenosi się razem z nimi.',
      },
      {
        title: 'Zmień role lub usuń członków',
        content: 'Kliknij dowolnego członka zespołu, aby zmienić jego rolę lub usunąć go z workspace. Tylko właściciele mogą zarządzać innymi członkami zespołu. Usunięcie członka natychmiast odbiera mu dostęp.',
      },
    ],
  },
  {
    slug: 'scope-templates',
    title: 'Szablony zakresów',
    description: 'Zapisuj i ponownie wykorzystuj konfiguracje ofert dla powtarzających się typów wydarzeń, aby przyspieszyć wycenianie.',
    duration: '4 min',
    difficulty: 'intermediate',
    category: 'Oferty',
    mode: 'both',
    videoUrl: '/videos/scope-templates.mp4',
    whatYouLearn: [
      'Tworzenie szablonów od podstaw',
      'Zapisywanie istniejących ofert jako szablony',
      'Szablony samego zakresu vs pełne szablony (z pozycjami)',
      'Używanie szablonów do przyspieszenia wyceniania',
    ],
    steps: [
      {
        title: 'Wejdź na stronę Szablony',
        content: 'Przejdź do Szablony z paska bocznego. Zobaczysz wszystkie zapisane szablony z typem wydarzenia, opisem, zakresem liczby uczestników oraz informacją, czy zawierają wstępnie skonfigurowane pozycje.',
      },
      {
        title: 'Utwórz szablon od podstaw',
        content: 'Kliknij „Nowy szablon" i skonfiguruj typ wydarzenia, nazwę, opis oraz zakres liczby uczestników. Opcjonalnie możesz dodać pozycje z ilościami i cenami, tworząc pełny szablon.',
        tip: 'Zacznij od najczęstszego typu wydarzenia — konferencje, gale lub premiery produktów. Każdy szablon oszczędza 5-10 minut na ofertę.',
      },
      {
        title: 'Zapisz ofertę jako szablon',
        content: 'Otwórz dowolną ukończoną ofertę w edytorze i kliknij „Zapisz jako szablon". Wszystkie pozycje, ilości i ceny zostaną zapisane. Nadaj mu opisową nazwę i zapisz.',
      },
      {
        title: 'Użyj szablonu przy tworzeniu oferty',
        content: 'Przy tworzeniu nowej oferty Twoje szablony pojawiają się jako karty szybkiego startu nad polem opisu wydarzenia. Kliknij, aby wstępnie wypełnić opis i ustawienia. Jeśli to pełny szablon z pozycjami, możesz całkowicie pominąć generowanie AI.',
      },
      {
        title: 'Szablon zakresu vs pełny szablon',
        content: 'Szablony samego zakresu wstępnie wypełniają opis wydarzenia, ale nadal używają AI do wygenerowania listy sprzętu. Pełne szablony zawierają wstępnie skonfigurowane pozycje i pomijają generowanie AI — kliknij „Użyj szablonu", aby natychmiast utworzyć ofertę bez kosztu AI.',
        tip: 'Używaj pełnych szablonów dla wydarzeń, które wyceniasz identycznie za każdym razem (np. standardowa konfiguracja sali konferencyjnej). Używaj szablonów zakresu, gdy opis jest podobny, ale sprzęt się zmienia.',
      },
    ],
  },
  {
    slug: 'smart-suggestions',
    title: 'Inteligentne sugestie',
    description: 'CueQuote analizuje Twoje poprzednie oferty, aby sugerować brakujące pozycje, sygnalizować niespójności cenowe i identyfikować braki w katalogu.',
    duration: '3 min',
    difficulty: 'intermediate',
    category: 'Oferty',
    mode: 'both',
    videoUrl: '/videos/smart-suggestions.mp4',
    whatYouLearn: [
      'Włączanie inteligentnych sugestii',
      'Dodawanie często używanych pozycji, które mogłeś pominąć',
      'Korygowanie cen na podstawie historycznych średnich',
      'Rozbudowa katalogu na podstawie danych z ofert',
    ],
    steps: [
      { title: 'Włącz sugestie', content: 'Otwórz ofertę i spójrz na pasek zakładek. Po prawej stronie znajdziesz przycisk "Smart" z ikoną żarówki. Kliknij, aby włączyć — zmieni kolor na bursztynowy. Preferencja zapisuje się automatycznie.', tip: 'Sugestie wymagają minimum 3 wysłanych ofert z podobnymi pozycjami.' },
      { title: 'Brakujące pozycje', content: 'Rozwiń panel "Inteligentne sugestie" nad tabelą sprzętu. Zakładka "Brakujące pozycje" pokazuje elementy, które zwykle dodajesz, ale pominąłeś w tej ofercie. Każda sugestia ma procent pewności i średnią cenę z historii. Kliknij "Dodaj", aby wstawić pozycję.' },
      { title: 'Korekta cen', content: 'Zakładka "Korekta cen" sygnalizuje pozycje wycenione powyżej lub poniżej 15% Twojej zwykłej stawki. Pokazuje cenę aktualną vs średnią historyczną plus zakres min-max. Kliknij "Użyj śr." aby zastosować średnią cenę.' },
      { title: 'Braki w katalogu', content: 'Zakładka "Dodaj do katalogu" pokazuje pozycje użyte w 2+ ofertach, ale nieobecne w katalogu. Kliknij "Dodaj do katalogu", aby utworzyć wpis z wypełnioną średnią ceną.' },
    ],
  },
  {
    slug: 'inventory-management',
    title: 'Zarządzanie inwentarzem',
    description: 'Śledź fizyczny sprzęt AV z numerami seryjnymi, stanami technicznymi, kalendarzem dostępności i przypisaniem do konkretnych wydarzeń.',
    duration: '5 min',
    difficulty: 'intermediate',
    category: 'Konfiguracja',
    mode: 'av',
    whatYouLearn: [
      'Dodawanie jednostek sprzętu z numerami seryjnymi i stanami technicznymi',
      'Filtrowanie i przeglądanie inwentarza według kategorii, stanu i lokalizacji',
      'Przypisywanie konkretnych jednostek sprzętu do wydarzeń',
      'Śledzenie dostępności sprzętu i wykrywanie konfliktów w kalendarzu',
      'Rejestrowanie przeglądów serwisowych i zarządzanie harmonogramem konserwacji',
    ],
    steps: [
      {
        title: 'Dodaj jednostkę sprzętu',
        content: 'Przejdź do Inwentarza z paska bocznego i kliknij „Dodaj jednostkę". Uzupełnij nazwę, kategorię, numer seryjny, stan techniczny (Doskonały, Dobry, Wymaga serwisu, Poza użyciem) oraz lokalizację magazynową. Każda jednostka w inwentarzu jest śledzona niezależnie od pozycji katalogowych — katalog reprezentuje Twój asortyment, a inwentarz — każdy fizyczny egzemplarz sprzętu, który posiadasz.',
        tip: 'Zrób zdjęcie każdej jednostki podczas dodawania — ułatwi to identyfikację przy wydawaniu i przyjmowaniu sprzętu na wypadek uszkodzeń.',
      },
      {
        title: 'Przeglądaj i filtruj inwentarz',
        content: 'Widok listy inwentarza pozwala filtrować według kategorii (Audio, Wideo, Oświetlenie itd.), stanu technicznego oraz lokalizacji magazynowej. Możesz też wyszukiwać po numerze seryjnym lub nazwie. Każda pozycja pokazuje aktualny status — Dostępny, Przypisany do wydarzenia, W serwisie lub Poza użyciem — dzięki czemu masz zawsze aktualny obraz zasobów.',
      },
      {
        title: 'Przypisz sprzęt do wydarzenia',
        content: 'Otwórz wydarzenie lub ofertę i przejdź do zakładki Inwentarz. Kliknij „Przypisz sprzęt" i wybierz konkretne jednostki z listy dostępnych zasobów. System automatycznie sprawdza konflikty kalendarza — jeśli dana jednostka jest już przypisana do innego wydarzenia w tym samym terminie, zostaniesz o tym poinformowany przed potwierdzeniem przypisania.',
        tip: 'Przypisuj sprzęt jak najwcześniej, aby uniknąć podwójnej rezerwacji przy intensywnym sezonie eventowym.',
      },
      {
        title: 'Śledź dostępność',
        content: 'Widok kalendarza w sekcji Inwentarz pokazuje każdą jednostkę sprzętu na osi czasu z zaznaczonymi rezerwacjami. Możesz szybko sprawdzić, które urządzenia są wolne w danym terminie, a które już zajęte. Konflikty są oznaczane na czerwono, ułatwiając planowanie obsady technicznej i organizację transportu.',
      },
      {
        title: 'Zarządzaj konserwacją',
        content: 'Dla każdej jednostki możesz rejestrować wpisy serwisowe: datę przeglądu, opis wykonanych prac, koszt oraz zaplanować kolejny termin konserwacji. Sprzęt oznaczony jako „W serwisie" jest automatycznie wykluczany z dostępnych zasobów podczas planowania wydarzeń. Historia serwisowa jest w pełni przeszukiwalna i eksportowalna.',
      },
    ],
  },
  {
    slug: 'crew-scheduling',
    title: 'Planowanie obsady technicznej',
    description: 'Zarządzaj listą ekipy technicznej — pracowników etatowych i freelancerów — przypisuj ich do wydarzeń, generuj karty przygotowania ekipy i przeglądaj kalendarz obsady.',
    duration: '5 min',
    difficulty: 'intermediate',
    category: 'Konfiguracja',
    mode: 'av',
    whatYouLearn: [
      'Dodawanie członków ekipy technicznej z rolami, stawkami i dostępnością',
      'Filtrowanie listy ekipy według specjalizacji, statusu zatrudnienia i dostępności',
      'Przypisywanie ekipy do wydarzeń z określeniem ról i godzin pracy',
      'Generowanie kart przygotowania ekipy z harmonogramem i listą sprzętu',
      'Przeglądanie kalendarza dostępności ekipy w celu unikania konfliktów',
    ],
    steps: [
      {
        title: 'Dodaj członków ekipy',
        content: 'Przejdź do sekcji Ekipa z paska bocznego i kliknij „Dodaj członka ekipy". Uzupełnij imię i nazwisko, specjalizację (Technik dźwięku, Technik oświetlenia, Realizator wideo, Kierownik techniczny, Kierowca itd.), stawkę dzienną lub godzinową, dane kontaktowe oraz typ zatrudnienia (Etatowy lub Freelancer). Możesz też dodać notatki z certyfikatami lub specjalnymi umiejętnościami.',
        tip: 'Dodaj prywatny numer telefonu każdego technika — przyda się przy nagłych zmianach obsady tuż przed wydarzeniem.',
      },
      {
        title: 'Filtruj listę ekipy',
        content: 'Lista ekipy technicznej umożliwia filtrowanie według specjalizacji, statusu zatrudnienia (Etatowy/Freelancer) oraz dostępności w wybranym zakresie dat. Dzięki temu szybko znajdziesz odpowiednich techników bez ręcznego przeglądania całej listy. Każda karta pokazuje aktualny status dostępności danej osoby.',
      },
      {
        title: 'Przypisz ekipę do wydarzeń',
        content: 'W widoku wydarzenia przejdź do zakładki Ekipa i kliknij „Przypisz członków ekipy". Wybierz techników z listy dostępnych zasobów, określ rolę pełnioną na tym konkretnym wydarzeniu oraz zaplanowane godziny pracy. System sprawdza konflikty kalendarza w czasie rzeczywistym — jeśli technik jest już zajęty w danym terminie, zostaniesz o tym poinformowany.',
        tip: 'Wyznacz kierownika technicznego dla każdego wydarzenia — usprawni to komunikację na miejscu i ułatwi koordynację logistyki.',
      },
      {
        title: 'Generuj karty przygotowania ekipy',
        content: 'Po skompletowaniu obsady kliknij „Generuj kartę ekipy", aby pobrać PDF z harmonogramem dla całej ekipy technicznej. Dokument zawiera listę przypisanych techników z ich rolami, harmonogram zbiórek i przerw, listę sprzętu wymagającą załadunku, dane kontaktowe miejsca realizacji oraz instrukcje specjalne. Karty ekipy można wysyłać bezpośrednio e-mailem do każdego technika.',
      },
      {
        title: 'Przeglądaj kalendarz ekipy',
        content: 'Widok kalendarza ekipy technicznej prezentuje wszystkich członków na wspólnej osi czasu z zaznaczonymi ich przypisaniami. Pozwala to błyskawicznie zidentyfikować wolnych techników w danym terminie oraz ocenić obciążenie pracą całego zespołu. Widok jest przydatny przy planowaniu wielu równoległych wydarzeń i optymalizacji wykorzystania zasobów ludzkich.',
      },
    ],
  },
  {
    slug: 'proposal-comparison',
    title: 'Porównanie ofert',
    description: 'Porównuj oferty dostawców za pomocą tokenów udostępniania, ocen wartości, zestawień pozycji, warunków i rekomendacji AI.',
    duration: '4 min',
    difficulty: 'intermediate',
    category: 'Oferty',
    mode: 'both',
    whatYouLearn: [
      'Dodawanie ofert dostawców do porównania za pomocą linków udostępniania',
      'Przeglądanie kart dostawców z ocenami wartości i kluczowymi wskaźnikami',
      'Porównywanie pozycji kosztowych między ofertami dostawców',
      'Zestawianie warunków płatności, kar i wyłączeń odpowiedzialności',
    ],
    steps: [
      {
        title: 'Dodaj oferty do porównania',
        content: 'Przejdź do sekcji Porównanie ofert i kliknij „Dodaj ofertę". Wklej token udostępniania lub link do oferty dostawcy — CueQuote automatycznie pobiera dane oferty i dodaje ją do zestawienia. Możesz dodać do 5 ofert równocześnie. Każda dodana oferta jest walidowana pod kątem kompletności i wymaganych sekcji.',
        tip: 'Poproś dostawców o udostępnienie ofert bezpośrednio przez CueQuote — tokeny udostępniania gwarantują, że porównujesz aktualne wersje dokumentów.',
      },
      {
        title: 'Przeglądaj karty dostawców',
        content: 'Każdy dostawca jest prezentowany na osobnej karcie z automatycznie obliczoną oceną wartości (0–100), łączną ceną, liczbą pozycji oraz kluczowymi parametrami oferty. Ocena wartości uwzględnia stosunek ceny do zakresu świadczeń i jakości warunków. Karty można sortować według ceny, oceny wartości lub nazwy dostawcy.',
      },
      {
        title: 'Porównuj pozycje kosztowe',
        content: 'Widok porównania pozycji zestawia każdą linię kosztową ze wszystkich ofert w jednej tabeli. Brakujące pozycje (gdy jeden dostawca wycenił coś, czego inny nie uwzględnił) są wyraźnie oznaczane, ułatwiając ocenę kompletności zakresu. Możesz filtrować widok według kategorii (Audio, Wideo, Oświetlenie itd.) lub sortować według różnicy cenowej.',
      },
      {
        title: 'Zestawiaj warunki i wyłączenia',
        content: 'Zakładka Warunki prezentuje obok siebie harmonogramy płatności, polityki anulowania, wyłączenia odpowiedzialności i terminy ważności ofert wszystkich dostawców. Różnice są automatycznie zaznaczane na żółto, dzięki czemu nie przegapisz istotnych rozbieżności w warunkach umownych.',
      },
      {
        title: 'Skorzystaj z rekomendacji AI',
        content: 'Kliknij „Analiza AI", aby otrzymać automatyczną ocenę zebranych ofert. AI wskazuje najmocniejszą propozycję pod kątem wartości, identyfikuje brakujące pozycje u poszczególnych dostawców, sygnalizuje niestandardowe warunki wymagające uwagi oraz formułuje rekomendację z uzasadnieniem. Analiza jest gotowa do skopiowania i wklejenia do raportu decyzyjnego dla klienta.',
      },
    ],
  },
  {
    slug: 'proposal-comments',
    title: 'Komentarze do ofert',
    description: 'Klienci mogą zostawiać komentarze bezpośrednio w ofercie, odwoływać się do konkretnych pozycji, zgłaszać prośby o rewizję, a właściciel konta może na nie odpowiadać.',
    duration: '3 min',
    difficulty: 'beginner',
    category: 'Oferty',
    mode: 'both',
    whatYouLearn: [
      'Jak klienci dodają komentarze do oferty i odwołują się do pozycji',
      'Przesyłanie sformalizowanych próśb o rewizję z opisem zmian',
      'Odpowiadanie na komentarze klientów z poziomu edytora oferty',
      'Oznaczanie rewizji jako rozwiązanych i zarządzanie historią zmian',
    ],
    steps: [
      {
        title: 'Komentarze klienta',
        content: 'Na stronie udostępniania oferty klient widzi ikonę komentarza obok każdej pozycji oraz przycisk „Dodaj komentarz" w sekcji zbiorczej. Kliknięcie otwiera panel komentarza, w którym klient może opisać swoje wątpliwości lub pytania. Komentarz jest natychmiast widoczny dla właściciela konta w edytorze oferty — bez konieczności odświeżania strony.',
        tip: 'Poinformuj klienta o możliwości komentowania podczas przesyłania oferty — znacznie skraca to czas iteracji w porównaniu z wymianą e-maili.',
      },
      {
        title: 'Prośby o rewizję',
        content: 'Klient może sformalizować prośbę o zmianę klikając „Zgłoś rewizję" przy konkretnej pozycji lub dla całej oferty. W formularzu opisuje żądane zmiany (np. zmiana ilości, zastąpienie pozycji, modyfikacja warunków płatności). Prośba trafia do edytora oferty oznaczona jako wymagająca uwagi, wraz z numerem referencyjnym ułatwiającym śledzenie.',
      },
      {
        title: 'Odpowiedzi właściciela konta',
        content: 'Otwórz ofertę w edytorze i przejdź do zakładki Komentarze. Przy każdym komentarzu klienta widoczne jest pole odpowiedzi. Możesz odpisać z wyjaśnieniem, potwierdzić wprowadzoną zmianę lub poprosić o doprecyzowanie. Odpowiedź jest natychmiast dostępna dla klienta na stronie udostępniania oferty. Cała korespondencja jest archiwizowana w chronologicznym wątku.',
      },
      {
        title: 'Rozwiązywanie rewizji',
        content: 'Po wprowadzeniu żądanych zmian w ofercie kliknij „Oznacz jako rozwiązane" przy danej prośbie o rewizję. Status zmienia się na Rozwiązano i jest widoczny zarówno dla Ciebie, jak i dla klienta. Możesz filtrować komentarze według statusu (Otwarte, Rozwiązane, Wszystkie), co ułatwia kontrolę nad postępem negocjacji i finalizacją dokumentu.',
      },
    ],
  },
  {
    slug: 'costing-margins',
    title: 'Koszty i marże',
    description: 'Konfiguruj widoczność kosztów, ustalaj cele marżowe, wprowadzaj ceny kosztowe, monitoruj alerty marżowe i śledź zyski — koszty nigdy nie są pokazywane klientom.',
    duration: '5 min',
    difficulty: 'advanced',
    category: 'Konfiguracja',
    mode: 'av',
    whatYouLearn: [
      'Konfigurowanie widoczności kosztów i dostępu do panelu marż w ramach ról zespołu',
      'Ustalanie docelowych progów marżowych na poziomie firmy i poszczególnych ofert',
      'Dodawanie cen kosztowych do pozycji katalogowych i ofertowych',
      'Monitorowanie alertów marżowych i reagowanie na pozycje poniżej progu rentowności',
      'Śledzenie zysku brutto i marży łącznej na pulpicie analitycznym',
    ],
    steps: [
      {
        title: 'Konfiguruj widoczność kosztów',
        content: 'Przejdź do Ustawień → zakładka Oferty i znajdź sekcję „Widoczność kosztów". Możesz określić, które role zespołu mają dostęp do panelu marż w edytorze oferty (Owner, Admin, Sales lub Viewer). Koszty i marże nigdy nie są eksportowane do PDF ani widoczne na stronie udostępniania — są wyłącznie wewnętrznym narzędziem analitycznym Twojej firmy.',
        tip: 'Ogranicz widoczność kosztów do ról Owner i Admin, jeśli chcesz, aby handlowcy skupiali się na wartości oferty, a nie na marżach.',
      },
      {
        title: 'Ustal cele marżowe',
        content: 'W sekcji Koszty i marże w Ustawieniach określ docelowy próg marżowy dla całej firmy (np. 35%). Możesz też nadpisać ten cel dla konkretnej oferty bezpośrednio w edytorze. Gdy marża oferty spada poniżej progu, w nagłówku edytora pojawia się żółty alert widoczny tylko dla uprawnionego użytkownika. Próg jest również widoczny jako linia referencyjna na wykresie marż.',
      },
      {
        title: 'Dodaj ceny kosztowe',
        content: 'Ceny kosztowe możesz dodawać na dwóch poziomach: w katalogu sprzętu (jako domyślny koszt dla danej pozycji) oraz bezpośrednio w edytorze oferty dla konkretnej pozycji. Kliknij ikonę kosztów przy dowolnej pozycji oferty, aby wprowadzić lub edytować cenę kosztową. Cena kosztowa jest automatycznie przenoszona z katalogu przy dodaniu pozycji — możesz ją nadpisać dla konkretnej wyceny.',
        tip: 'Dla sprzętu własnego zostaw koszt pusty lub wpisz amortyzację. Dla sprzętu podnajmowanego wpisz zawsze aktualną stawkę dostawcy.',
      },
      {
        title: 'Monitoruj marże i alerty',
        content: 'Panel marż w edytorze oferty wyświetla dla każdej pozycji: przychód, koszt, zysk i marżę %. Pozycje poniżej docelowej marży są oznaczone czerwoną ikoną ostrzeżenia. Na dole panelu widoczne jest podsumowanie całej oferty: łączny przychód, łączny koszt, zysk brutto i marża łączna — porównana z celem. Kliknij dowolną pozycję, aby bezpośrednio edytować jej koszt lub cenę sprzedaży.',
      },
      {
        title: 'Śledź zyski na pulpicie',
        content: 'Pulpit analityczny (Ustawienia → Analityka lub dedykowana zakładka Dashboard) prezentuje miesięczne i kwartalne zestawienia zysku brutto ze wszystkich wysłanych i wygranych ofert. Wykresy trendów pokazują zmiany marży w czasie, a ranking pozycji identyfikuje Twój najbardziej i najmniej rentowny sprzęt. Dane są filtrowane według statusu oferty, klienta i okresu.',
      },
    ],
  },
  {
    slug: 'vendor-management',
    title: 'Zarządzanie dostawcami AV',
    description: 'Dodawaj firmy AV do swojej sieci kontaktów, zarządzaj danymi dostawców i śledź relacje — zawsze wiesz, do kogo zadzwonić, gdy potrzebujesz sprzętu.',
    duration: '4 min',
    difficulty: 'beginner',
    category: 'Planner',
    mode: 'planner',
    icon: '🏪',
    whatYouLearn: [
      'Dodawanie firm i kontaktów do listy dostawców AV',
      'Kategoryzowanie dostawców według specjalizacji (Audio, Video, Oświetlenie, Full-Service)',
      'Zapisywanie notatek i historii współpracy',
      'Wysyłanie zapytań ofertowych bezpośrednio z poziomu wydarzenia',
      'Utrzymywanie uporządkowanej listy preferowanych dostawców',
    ],
    steps: [
      {
        title: 'Przejdź do sekcji Dostawcy',
        content: 'Kliknij „Dostawcy" w pasku bocznym. To Twoja książka adresowa firm AV — centralny rejestr wszystkich dostawców, z którymi współpracujesz lub planujesz współpracować. Każda karta dostawcy wyświetla nazwę firmy, główny kontakt, specjalizację, lokalizację i oznaczenie statusu: aktywny, preferowany lub nowy.',
      },
      {
        title: 'Dodaj nowego dostawcę',
        content: 'Kliknij „Dodaj dostawcę" i uzupełnij dane firmy: nazwę, stronę internetową, miasto i kraj oraz specjalizację AV (Audio, Video, Oświetlenie, Tłumaczenie symultaniczne, Full-Service AV lub Inne). Dodaj dane głównej osoby kontaktowej: imię i nazwisko, adres e-mail i numer telefonu. Możesz dodać wiele kontaktów na jednego dostawcę — przydatne w przypadku dużych firm, gdzie sprzedaż i wsparcie techniczne obsługują różne osoby.',
        tip: 'Dodawaj dostawców na bieżąco, nawet zanim zaczniesz z nimi współpracować. Szersza lista daje Ci więcej opcji przy pozyskiwaniu sprzętu na niestandardowe lub wymagające technicznie wydarzenia.',
      },
      {
        title: 'Ustaw status i tagi dostawcy',
        content: 'Przypisz każdemu dostawcy status: Preferowany (aktywnie polecani lub regularnie używani), Aktywny (sprawdzeni w praktyce), Kandydat (w trakcie oceny) lub Nieaktywny (z którymi przestałeś współpracować). Dodaj tagi, np. „outdoor", „ściany LED" lub „rigging", aby szybko filtrować dostawców według wymagań konkretnego wydarzenia.',
      },
      {
        title: 'Zapisuj notatki o relacji',
        content: 'Kliknij na dowolnego dostawcę, aby otworzyć jego widok szczegółowy. W sekcji Notatki zapisuj istotny kontekst: czas potrzebny na przygotowanie oferty, minimalna wartość zamówienia, preferowany kanał komunikacji, tendencje cenowe lub wcześniejsze problemy. Notatki są widoczne wyłącznie wewnętrznie — dostawcy nigdy ich nie widzą. Są nieocenione, gdy kolega pozyskuje sprzęt od dostawcy, którego dobrze znasz.',
        tip: 'Zanotuj typowy czas odpowiedzi dostawcy na zapytanie ofertowe. To pomaga ocenić, kiedy wysłać zapytanie w zależności od harmonogramu wydarzenia.',
      },
      {
        title: 'Wyślij zapytanie ofertowe',
        content: 'Z poziomu dowolnego wydarzenia w panelu planisty otwórz zakładkę Pozyskiwanie i kliknij „Zapytaj o ofertę". Wybierz jednego lub kilku dostawców z listy, wskaż kategorie sprzętu, których dotyczy zapytanie, ustaw termin odpowiedzi i dodaj szczegółowe wymagania techniczne. CueQuote wysyła ustrukturyzowane zapytanie ofertowe do każdego wybranego dostawcy z danymi wydarzenia i wymaganiami już wstępnie uzupełnionymi.',
      },
      {
        title: 'Śledź zapytania i odpowiedzi',
        content: 'Wszystkie wysłane zapytania widoczne są w zakładce Pozyskiwanie ze statusem: Wysłane, Wyświetlone, Odpowiedziano lub Odrzucono. Gdy dostawca odpowie ofertą przez CueQuote, pojawia się ona automatycznie w widoku Porównania Ofert. Jeśli odpowiedź przyszła e-mailem lub jako plik, możesz ją wgrać ręcznie i powiązać z zapytaniem — wszystko pozostaje w jednym miejscu.',
        tip: 'Wysyłaj zapytania do co najmniej 2-3 dostawców na kategorię sprzętu. Konkurencja pilnuje uczciwych cen i daje Ci alternatywę, gdy preferowany dostawca jest niedostępny.',
      },
    ],
  },
  {
    slug: 'quote-comparison',
    title: 'Porównywanie ofert dostawców',
    description: 'Odbieraj oferty od wielu firm AV, porównuj je równolegle pod kątem ceny i zakresu, i wybieraj najlepszego dostawcę dla swojego wydarzenia.',
    duration: '5 min',
    difficulty: 'intermediate',
    category: 'Planner',
    mode: 'planner',
    icon: '📊',
    whatYouLearn: [
      'Wczytywanie ofert dostawców do widoku porównania',
      'Odczytywanie kart dostawców i wskaźników wartości',
      'Porównywanie pozycji cenowych z oznaczeniami najtańszego i najdroższego',
      'Zestawienie warunków płatności i polityk anulowania',
      'Korzystanie z panelu rekomendacji AI',
      'Wybór dostawcy i aktualizacja statusu wydarzenia',
    ],
    steps: [
      {
        title: 'Otwórz widok Porównania Ofert',
        content: 'Z panelu wydarzeń otwórz event, dla którego prowadzisz sourcing, i kliknij zakładkę „Porównanie Ofert". Jeśli wysłałeś już zapytania ofertowe i dostawcy odpowiedzieli ofertami CueQuote, ich propozycje pojawiają się automatycznie. Jeśli dostawcy przesłali oferty e-mailem lub jako pliki, kliknij „Dodaj ofertę" i wklej link udostępniania CueQuote lub wgraj dokument ręcznie.',
        tip: 'Do jednego porównania możesz dodać maksymalnie 4 oferty. To wystarczy przy większości decyzji zakupowych — przy większej liczbie porównanie staje się nieczytelne.',
      },
      {
        title: 'Odczytaj karty podsumowania dostawców',
        content: 'Każdy dostawca otrzymuje kartę podsumowania na górze widoku: nazwa firmy, łączna cena w walucie wydarzenia, data ważności oferty i wskaźnik wartości (1-10). Wskaźnik wartości to wypadkowa konkurencyjności cenowej, kompletności zakresu i elastyczności warunków płatności. Dostawca z najniższą ceną jest zaznaczony na zielono — szybki punkt odniesienia dla decyzji budżetowych.',
      },
      {
        title: 'Porównaj pozycje cenowe w szczegółach',
        content: 'Przewiń do tabeli porównania pozycji. Sprzęt jest zgrupowany według kategorii (Audio, Video, Oświetlenie, Praca, Transport) i zestawiony między wszystkimi dostawcami. Najtańsza cena dla każdej pozycji jest oznaczona zielonym znacznikiem „Najtaniej"; najdroższa — bursztynowym. Pozycje nieuwzględnione przez dostawcę wyświetlane są jako kreska — te braki często kryją prawdziwe różnice cenowe. Dostawca z ceną o 10% niższą, ale z 5 brakującymi pozycjami, może być faktycznie droższy po doliceniu tych elementów.',
        tip: 'Zwróć szczególną uwagę na pozycje Praca i Transport — są one często pomijane w pierwszych ofertach, by wyróżnić się niską ceną nagłówkową.',
      },
      {
        title: 'Porównaj warunki płatności i polityki anulowania',
        content: 'Sekcja Warunki zestawia harmonogram płatności każdego dostawcy obok siebie: procent zaliczki, termin płatności salda i warunki anulowania. Dostawca żądający 100% płatności z góry to ryzyko dla płynności finansowej w porównaniu z tym, który prosi o 30% przy akceptacji i 70% na dwa tygodnie przed wydarzeniem. Uwzględnij warunki płatności w całościowej ocenie — nieznacznie wyższa cena z lepszymi warunkami może być korzystniejsza dla klienta.',
      },
      {
        title: 'Wygeneruj rekomendację AI',
        content: 'Kliknij „Generuj rekomendację AI" na pasku narzędzi porównania. AI analizuje wszystkie wczytane oferty pod kątem ceny, zakresu, warunków i kompletności, a następnie tworzy ranking z uzasadnieniem. Wskazuje, który dostawca oferuje najlepszą wartość dla Twojego konkretnego wydarzenia, gdzie inne oferty mają braki i co warto wynegocjować przed podpisaniem umowy.',
        tip: 'Traktuj rekomendację AI jako punkt wyjścia do decyzji — to szybki sposób na syntezę złożonych danych. Zawsze stosuj własny osąd oparty na relacji z dostawcą i ważności wydarzenia.',
      },
      {
        title: 'Wybierz dostawcę i zaktualizuj wydarzenie',
        content: 'Po podjęciu decyzji kliknij „Wybierz dostawcę" na karcie wybranej firmy. Status wydarzenia zmienia się na „Dostawca potwierdzony", a oferta wybranego dostawcy zostaje powiązana jako główna wycena dla wydarzenia. CueQuote wysyła automatyczne powiadomienie do wybranego dostawcy i opcjonalne powiadomienie o odrzuceniu do pozostałych. Wartość zaakceptowanej oferty automatycznie trafia do śledzenia budżetu wydarzenia.',
      },
    ],
  },
  {
    slug: 'market-rate-budgets',
    title: 'Szacowanie budżetu AV',
    description: 'Dowiedz się, jak AI CueQuote generuje realistyczne widełki budżetowe AV dla Twoich wydarzeń i jak używać tych szacunków do planowania przed pozyskaniem dostawców.',
    duration: '4 min',
    difficulty: 'beginner',
    category: 'Planner',
    mode: 'planner',
    icon: '💰',
    whatYouLearn: [
      'Jak AI generuje widełki budżetowe (niski/wysoki) dla wydarzeń AV',
      'Jakie czynniki wpływają na szacunek (liczba uczestników, venue, typ sprzętu)',
      'Odczytywanie podziału budżetu według kategorii',
      'Kiedy używać szacunku, a kiedy przejść do realnych ofert od dostawców',
      'Rozumienie rekomendacji ekipy technicznej zawartych w szacunku',
    ],
    steps: [
      {
        title: 'Utwórz wydarzenie i poproś o szacunek budżetu',
        content: 'Na pulpicie planisty kliknij „Nowe wydarzenie" i uzupełnij podstawowe dane: nazwę, typ (konferencja, gala, premiera produktu itp.), datę, nazwę i miasto venue oraz przewidywaną liczbę uczestników. Po utworzeniu wydarzenia przejdź do zakładki Budżet i kliknij „Generuj szacunek budżetu". W polu tekstowym opisz swoje wymagania AV — im więcej szczegółów, tym trafniejszy zakres.',
        tip: 'Nawet ogólny opis, np. „konferencja korporacyjna dla 300 osób, scena główna, sale breakoutowe", daje AI wystarczający kontekst, by wygenerować użyteczny zakres. Możesz go doprecyzować później.',
      },
      {
        title: 'Zrozum widełki niski-wysoki',
        content: 'CueQuote zwraca szacunek jako zakres, a nie pojedynczą liczbę — np. „14 500 USD – 22 000 USD". Dolna granica odzwierciedla minimalistyczne rozwiązanie z standardowym sprzętem i lokalnym dostawcą; górna — sprzęt premium, wielokrotne systemy redundantne i dostawcę full-service z własną ekipą. Twoja rzeczywista oferta zazwyczaj mieści się gdzieś pośrodku, zależnie od wyboru dostawcy i ostatecznej specyfikacji.',
      },
      {
        title: 'Przeanalizuj podział według kategorii',
        content: 'Poniżej głównego zakresu szacunek jest rozbity na kategorie AV: Audio, Video, Oświetlenie, Scena, Tłumaczenie symultaniczne (jeśli dotyczy), Praca i Transport. Każda kategoria ma własny zakres niski-wysoki oraz udział procentowy w łącznym budżecie. Ten podział pomaga ustalić priorytety — jeśli klient ma stały budżet, od razu widzisz, gdzie ciąć (np. zmniejszyć wydatki na oświetlenie, by chronić budżet Audio przy wydarzeniu zdominowanym przez keynotes).',
        tip: 'Praca stanowi zazwyczaj 25-35% pełnego budżetu AV. Jeśli pozycja Praca wydaje się za niska, sprawdź, czy w opisie wydarzenia uwzględniłeś wielodniowy montaż i demontaż.',
      },
      {
        title: 'Sprawdź rekomendacje ekipy',
        content: 'Szacunek zawiera rekomendowaną listę ekipy dla Twojego wydarzenia: role (Inżynier FOH, Operator oświetlenia, Technik video, Kierownik sceny itp.), sugerowaną liczbę osób na każdą rolę i liczbę dni pracy. Rekomendacje wynikają z liczby uczestników, typu wydarzenia i złożoności technicznej. Traktuj je jako wskazówkę kadrową przy briefowaniu dostawców lub weryfikacji pozycji ekipy w otrzymanych ofertach.',
      },
      {
        title: 'Wykorzystaj szacunek w rozmowach z klientem',
        content: 'Podziel się szacunkiem budżetu z klientem wcześnie w procesie planowania, by uzgodnić nakłady na AV przed wyjściem na rynek. Szacunek jest sformatowany jako czytelne podsumowanie, które możesz skopiować lub wyeksportować — pokazuje zakres, podział kategorii i informację, że ostateczna cena zależy od wyboru dostawcy i finalnej specyfikacji. Ustalenie oczekiwań budżetowych klienta z wyprzedzeniem zapobiega trudnym rozmowom po otrzymaniu realnych ofert.',
        tip: 'Jeśli budżet podany przez klienta jest znacząco poniżej dolnej granicy szacunku, zasygnalizuj to natychmiast. Lepiej dostosować zakres lub oczekiwania przed wysłaniem zapytań ofertowych niż po ich otrzymaniu.',
      },
      {
        title: 'Wiedz, kiedy przejść od szacunku do realnej oferty',
        content: 'Szacunki budżetowe to narzędzia planistyczne — nie zastępują ofert dostawców. Używaj ich na wczesnym etapie planowania, podczas rozmów o budżecie z klientem i przy wewnętrznych zatwierdzeniach finansowych. Gdy brief wydarzenia jest gotowy (venue potwierdzone, agenda ustalona, rider techniczny dostępny), przejdź do pozyskiwania realnych ofert w zakładce Dostawcy. Szacunek daje Ci pewność, że oferty, które otrzymasz, mieszczą się w rozsądnym przedziale rynkowym.',
      },
    ],
  },
  {
    slug: 'feedback-support',
    title: 'Zgłoszenia i pomoc techniczna',
    description: 'Zgłaszaj błędy, wnioskuj o funkcje lub uzyskaj pomoc — bez wychodzenia z aplikacji.',
    duration: '3 min',
    difficulty: 'beginner',
    category: 'Podstawy',
    mode: 'both',
    videoUrl: '',
    whatYouLearn: [
      'Jak zgłaszać opinie, raporty błędów i wnioski o funkcje',
      'Śledzenie statusu swoich zgłoszeń',
      'Uzyskiwanie wsparcia bezpośrednio z aplikacji',
      'Korzystanie z Centrum pomocy',
    ],
    steps: [
      {
        title: 'Przejdź do sekcji Zgłoszenia i pomoc',
        content: 'Kliknij „Zgłoszenia i pomoc" na pasku bocznym. To Twój bezpośredni kontakt z zespołem CueQuote — możesz zgłaszać błędy, wnioskować o funkcje, prosić o pomoc lub zostawić opinię bez wychodzenia z aplikacji.',
      },
      {
        title: 'Wybierz typ zgłoszenia',
        content: 'Wybierz jeden z czterech typów: Raport błędu, Wniosek o funkcję, Ogólna opinia lub Prośba o wsparcie. Formularz dostosowuje się do wybranego typu.',
        tip: 'Aplikacja automatycznie przechwytuje informacje o przeglądarce, planie i bieżącej stronie przy zgłoszeniu.',
      },
      {
        title: 'Uzupełnij szczegóły i wyślij',
        content: 'Wpisz temat i opis problemu lub prośby. Kliknij „Wyślij" — zgłoszenie jest rejestrowane natychmiast i pojawi się w zakładce Moje zgłoszenia.',
      },
      {
        title: 'Śledź swoje zgłoszenia',
        content: 'Kliknij zakładkę „Moje zgłoszenia", aby zobaczyć wszystkie poprzednie zgłoszenia z ich statusem: Zgłoszono, W trakcie przeglądu, Zaplanowano lub Wdrożono.',
      },
      {
        title: 'Skorzystaj z Centrum pomocy',
        content: 'Zakładka „Centrum pomocy" zawiera linki do samouczków, dokumentacji i odpowiedzi na najczęstsze pytania. Sprawdź ją przed wysłaniem prośby o wsparcie.',
      },
    ],
  },
  {
    slug: 'catalog-suggestions',
    title: 'Rozbudowywanie katalogu z pomocą AI',
    description: 'Gdy AI używa elementów spoza katalogu, dodaj je jednym kliknięciem.',
    duration: '2 min',
    difficulty: 'beginner',
    category: 'Konfiguracja',
    mode: 'av',
    videoUrl: '',
    whatYouLearn: [
      'Jak AI oznacza elementy spoza katalogu',
      'Dodawanie sugerowanych elementów do katalogu jednym kliknięciem',
      'Dodawanie wszystkich sugestii naraz',
      'Dlaczego ceny katalogowe poprawiają dokładność przyszłych ofert',
    ],
    steps: [
      {
        title: 'Wygeneruj ofertę przy użyciu AI',
        content: 'Utwórz nową ofertę jak zwykle. Gdy AI uwzględni elementy nieobecne w katalogu, oznaczy je jako [CUSTOM] i użyje szacunkowej ceny rynkowej.',
      },
      {
        title: 'Sprawdź pasek sugestii',
        content: 'Po wygenerowaniu bursztynowy pasek sugestii pojawia się na etapie Przeglądu. Kliknij go, aby rozwinąć listę nowych elementów z kategorią, jednostką i sugerowaną ceną.',
        tip: 'Sugerowana cena jest oparta na stawkach rynkowych — możesz ją dostosować do swojej rzeczywistej stawki po dodaniu do katalogu.',
      },
      {
        title: 'Dodaj elementy do katalogu',
        content: 'Kliknij „Dodaj do katalogu" przy dowolnym elemencie lub „Dodaj wszystkie", aby zapisać wszystko naraz. Elementy są natychmiast dodawane z sugerowaną ceną jako punktem wyjścia.',
      },
      {
        title: 'Przyszłe oferty używają Twoich dokładnych cen',
        content: 'Gdy elementy są w katalogu, następnym razem AI użyje ceny katalogowej zamiast szacunku. Katalog staje się pełniejszy z każdą wygenerowaną ofertą.',
      },
    ],
  },
  {
    slug: 'planner-budget-review',
    title: 'Rozumienie budżetu wydarzenia',
    description: 'Czytaj i wykorzystuj plan budżetowy generowany przez AI w trybie Planner.',
    duration: '4 min',
    difficulty: 'beginner',
    category: 'Planner',
    mode: 'planner',
    videoUrl: '',
    whatYouLearn: [
      'Odczytywanie przeglądu budżetu z zakresem niski-wysoki',
      'Rozumienie rekomendacji ekipy i ról',
      'Używanie harmonogramu wydarzenia do planowania',
      'Stosowanie wskazówek podczas pracy z dostawcami AV',
      'Rozumienie elementów uwzględnionych i wyłączonych',
    ],
    steps: [
      {
        title: 'Wygeneruj plan budżetowy',
        content: 'Przełącz się na tryb Planner i opisz swoje wydarzenie. Kliknij „Generuj", a AI stworzy pełny plan budżetowy z cenami rynkowymi.',
      },
      {
        title: 'Sprawdź przegląd budżetu',
        content: 'Górna sekcja pokazuje całkowity szacowany budżet jako zakres — na przykład 12 500 € — 18 200 €. Dolna granica odzwierciedla oszczędne rozwiązanie ze standardowym sprzętem; górna — sprzęt premium i pełną obsługę.',
        tip: 'Użyj zakresu budżetu przy ustalaniu oczekiwań klienta przed wyjściem na rynek.',
      },
      {
        title: 'Sprawdź rekomendacje ekipy',
        content: 'Sekcja Rekomendacje ekipy wymienia potrzebne role techniczne z liczbą osób i typowymi stawkami dziennymi.',
      },
      {
        title: 'Przejrzyj harmonogram wydarzenia',
        content: 'Sekcja Harmonogram pokazuje sugerowany plan — montaż, show i demontaż — z szacunkami czasu dla każdej fazy.',
      },
      {
        title: 'Przeczytaj wskazówki i elementy uwzględnione/wyłączone',
        content: 'Sekcja Wskazówki zawiera praktyczne porady specyficzne dla Twojego typu wydarzenia. Sekcja Uwzględnione/Wyłączone precyzuje, co obejmuje szacunek budżetowy.',
      },
    ],
  },
  {
    slug: 'multi-currency-pricing',
    title: 'Wycena w wielu walutach',
    description: 'Ustaw ceny w poszczególnych walutach w katalogu, aby oferty automatycznie używały właściwego kursu bez ręcznego przeliczania.',
    duration: '4 min',
    difficulty: 'intermediate',
    category: 'Konfiguracja',
    mode: 'both',
    icon: '💱',
    whatYouLearn: [
      'Jak dodawać ceny w USD, EUR i innych walutach do pozycji katalogu',
      'Jak generowanie ofert wybiera właściwą cenę walutową',
      'Jak działa automatyczne przeliczanie przy braku lokalnej ceny',
      'Najlepsze praktyki aktualizacji cen walutowych',
    ],
    steps: [
      {
        title: 'Otwórz pozycję katalogu do edycji',
        content: 'Przejdź do Katalogu z paska bocznego i kliknij dowolną pozycję, aby otworzyć panel szczegółów, a następnie kliknij Edytuj. Poniżej pola ceny domyślnej zobaczysz sekcję „Ceny w wielu walutach". Tu możesz ustawić ceny w walutach dodatkowych, poza domyślną walutą firmy.',
        tip: 'Zacznij od walut, w których najczęściej wystawiasz oferty — najczęściej EUR, USD i GBP dla firm AV obsługujących klientów zagranicznych.',
      },
      {
        title: 'Dodaj cenę dla każdej waluty',
        content: 'Kliknij „Dodaj cenę walutową" i wybierz walutę z listy (EUR, USD, GBP, PLN, AED, EGP, CHF). Wpisz cenę najmu w tej walucie. Powtórz dla każdej kolejnej waluty. Każda wpisana cena jest kursem dokładnym — nie przeliczeniem. Dzięki temu możesz odzwierciedlić stawki rynku lokalnego i ceny negocjowane dla różnych regionów.',
      },
      {
        title: 'Zrozum, jak generowanie ofert wybiera cenę',
        content: 'Gdy AI generuje ofertę w określonej walucie, najpierw szuka pasującej ceny katalogowej w tej samej walucie. Jeśli ustawiłeś cenę w USD dla pozycji, a oferta jest w USD, użyta zostanie dokładnie ta cena. Zapewnia to, że Twoje oferty zawsze odzwierciedlają rzeczywiste stawki dla każdego rynku — a nie zmienne kursy wymiany.',
        tip: 'Ustalaj realistyczne lokalne ceny rynkowe zamiast przeliczać walutę domową. System PA wynajmowany za 500 €/dzień w Polsce może mieć inną stawkę rynkową — 600 $/dzień w USA.',
      },
      {
        title: 'Automatyczne przeliczanie jako rezerwa',
        content: 'Jeśli oferta używa waluty, dla której nie ustawiłeś ceny dla danej pozycji katalogu, CueQuote automatycznie przelicza cenę w walucie domyślnej po bieżącym kursie rynkowym. Przeliczona cena jest oznaczona w edytorze oferty małą ikoną wymiany, abyś mógł ją zweryfikować przed wysłaniem. Każdą automatycznie przeliczoną cenę możesz ręcznie nadpisać w edytorze.',
      },
      {
        title: 'Utrzymuj ceny na bieżąco',
        content: 'Ceny w wielu walutach są statyczne — nie aktualizują się automatycznie wraz ze zmianami kursów walut. Przeglądaj je regularnie (zalecany cykl kwartalny) i aktualizuj pozycje, które znacząco odbiegają od aktualnych stawek rynkowych. Dla pozycji podnajmowanych od dostawców synchronizuj ceny walutowe w katalogu z walutą fakturowania dostawcy, aby chronić marże.',
        tip: 'Ustaw kwartalny przypomnienie w kalendarzu, aby przejrzeć 20 najważniejszych pozycji katalogu we wszystkich walutach. Pięć minut konserwacji cen zapobiega nieprzyjemnym niespodziankom marżowym przy dużych ofertach.',
      },
    ],
  },
  {
    slug: 'proposal-approval-workflow',
    title: 'Przepływ zatwierdzania ofert',
    description: 'Włącz wewnętrzne zatwierdzanie, aby oferty były przeglądane i zatwierdzane przez menedżera przed wysłaniem do klientów.',
    duration: '5 min',
    difficulty: 'intermediate',
    category: 'Oferty',
    mode: 'both',
    icon: '✅',
    whatYouLearn: [
      'Włączanie przepływu zatwierdzania w Ustawieniach',
      'Jak przesłać ofertę do zatwierdzenia przez menedżera',
      'Proces przeglądu przez menedżera i komentarze wewnętrzne',
      'Statusy zatwierdzania (oczekuje, zatwierdzona, odrzucona)',
      'Co dzieje się z ofertą po zatwierdzeniu lub odrzuceniu',
    ],
    steps: [
      {
        title: 'Włącz zatwierdzanie w Ustawieniach',
        content: 'Przejdź do Ustawień z paska bocznego i otwórz zakładkę „Oferty". Włącz opcję „Wymagaj zatwierdzenia przed wysłaniem". Po włączeniu każda oferta utworzona przez członka zespołu z rolą Sprzedaż musi zostać zatwierdzona przez Administratora lub Właściciela przed wysłaniem do klienta. Właściciele i Administratorzy mogą wysyłać oferty bezpośrednio bez przechodzenia przez przepływ zatwierdzania.',
        tip: 'Włącz zatwierdzanie, gdy masz zespół sprzedaży tworzący oferty — daje menedżerom punkt kontroli jakości przed wysłaniem czegokolwiek do klientów.',
      },
      {
        title: 'Prześlij ofertę do zatwierdzenia',
        content: 'Gdy członek zespołu sprzedaży kończy budowanie oferty, klika „Prześlij do zatwierdzenia" zamiast „Wyślij". Blokuje to ofertę przed dalszą edycją i zmienia jej status na „Oczekuje na zatwierdzenie". Oferta pojawia się natychmiast w kolejce zatwierdzania menedżera. Osoba przesyłająca może dodać opcjonalną notatkę wyjaśniającą recenzentowi ważne informacje.',
      },
      {
        title: 'Menedżer przegląda ofertę',
        content: 'Menedżerowie (Administratorzy i Właściciele) widzą powiadomienie w aplikacji i alert e-mail, gdy oferta trafia do ich kolejki zatwierdzania. Otwierają ofertę w pełnym widoku tylko do odczytu — widoczne są wszystkie pozycje, ceny, warunki, elementy uwzględnione, wyłączenia i sumy. Menedżer może też pobrać podgląd PDF, aby zobaczyć dokładnie to, co otrzymałby klient.',
        tip: 'Uważnie sprawdź sumę oferty, warunki płatności i regulamin — to trzy obszary, które najczęściej wymagają korekty przed wysłaniem oferty do klienta.',
      },
      {
        title: 'Zostaw komentarze wewnętrzne',
        content: 'W panelu zatwierdzania po prawej stronie oferty menedżerowie mogą zostawiać komentarze wewnętrzne widoczne tylko dla zespołu — nie dla klienta. Używaj komentarzy, aby wyjaśnić, co należy zmienić: „Zredukuj rabat do maksymalnie 10%" lub „Dodaj wykluczenie generatora dla plenerów do warunków". Osoba przesyłająca widzi te komentarze natychmiast i może odblokować ofertę w celu wprowadzenia poprawek.',
      },
      {
        title: 'Zatwierdź lub odrzuć',
        content: 'Po sprawdzeniu menedżer klika „Zatwierdź" lub „Odrzuć". Zatwierdzenie odblokowuje przycisk Wyślij dla osoby przesyłającej — otrzymuje ona powiadomienie, że oferta jest gotowa do wysłania. Odrzucenie odsyła ofertę do statusu Szkic z widocznymi komentarzami menedżera, dzięki czemu osoba przesyłająca wie dokładnie, co poprawić przed ponownym przesłaniem.',
      },
      {
        title: 'Statusy zatwierdzania na pierwszy rzut oka',
        content: 'Oferty w przepływie zatwierdzania pokazują jeden z czterech statusów na liście ofert: Szkic (jeszcze nieprzesłana), Oczekuje na zatwierdzenie (czeka na przegląd menedżera), Zatwierdzona (gotowa do wysłania) lub Odrzucona (odesłana do poprawek). Filtruj listę ofert według statusu, aby zobaczyć całą kolejkę zatwierdzania. Zatwierdzone i wysłane oferty przechodzą następnie przez normalny przepływ: Wysłana → Wyświetlona → Wygrana/Przegrana.',
        tip: 'Ustal w zespole normę czasu realizacji zatwierdzenia — 4 godziny robocze to częsty cel. Opóźnione zatwierdzenia mogą utrudniać oferty związane z napiętymi terminami.',
      },
    ],
  },
]
