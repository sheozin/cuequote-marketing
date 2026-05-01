import type { Tutorial } from './types'

export const TUTORIALS_FR: Tutorial[] = [
  {
    slug: 'getting-started',
    title: 'Premiers pas',
    description: 'Créez votre compte CueQuote et envoyez votre premier devis AV généré par IA en moins de 10 minutes.',
    duration: '5 min',
    difficulty: 'beginner',
    category: 'Bases',
    videoUrl: '/videos/cuequote-walkthrough-master.mp4',
    whatYouLearn: [
      'Comment créer votre compte CueQuote',
      'Configurer votre profil d\'entreprise et votre image de marque',
      'Créer votre premier devis généré par IA',
      'Télécharger un PDF professionnel',
    ],
    steps: [
      {
        title: 'Inscrivez-vous sur CueQuote',
        content: 'Rendez-vous sur app.cuequote.com et cliquez sur « Créer un compte ». Saisissez votre nom complet, votre adresse e-mail et un mot de passe (8 caractères minimum). Vous recevrez un e-mail de confirmation — cliquez sur le lien pour vérifier votre compte. L\'écran de confirmation vous redirigera automatiquement une fois la vérification effectuée.',
        tip: 'Utilisez votre adresse e-mail professionnelle afin que vos clients voient un expéditeur professionnel lorsque vous partagez des devis.',
      },
      {
        title: 'Complétez l\'onboarding de votre entreprise',
        content: 'Après avoir vérifié votre e-mail, vous serez guidé à travers un onboarding en 3 étapes : Informations sur l\'entreprise (nom, pays, adresse, numéro de TVA), Image de marque (choisissez la couleur de votre marque — elle colorera l\'ensemble de votre PDF) et Devise (votre devise par défaut pour les devis). Remplissez le plus d\'informations possible — tout cela apparaît sur vos devis.',
      },
      {
        title: 'Téléchargez le logo de votre entreprise',
        content: 'Allez dans Paramètres depuis la barre latérale. Dans la section Profil de l\'entreprise, cliquez sur « Télécharger » à côté de l\'emplacement du logo. Téléchargez un fichier PNG, JPG ou SVG (2 Mo maximum). Votre logo apparaîtra sur chaque PDF de devis et chaque page partagée, offrant à vos devis un aspect professionnel.',
        tip: 'Utilisez un logo carré avec un fond transparent pour un rendu optimal sur les modèles PDF clairs et sombres.',
      },
      {
        title: 'Ajoutez du matériel à votre catalogue',
        content: 'Allez dans Catalogue depuis la barre latérale. Cliquez sur « Ajouter un article » et renseignez les détails de votre matériel : nom, catégorie (Audio, Vidéo, Éclairage, etc.), unité par défaut (jour, pièce, lot) et prix par défaut. Lorsque l\'IA génère des devis, elle utilise VOS prix de catalogue plutôt que des estimations génériques. Plus vous ajoutez d\'articles, plus vos devis deviennent précis.',
        tip: 'Commencez par les 10 à 20 articles que vous devisez le plus fréquemment. Vous pourrez toujours en ajouter d\'autres plus tard.',
      },
      {
        title: 'Créez votre premier devis',
        content: 'Cliquez sur « Nouveau devis » dans la barre latérale ou sur le bouton du tableau de bord. Décrivez votre événement en langage naturel — par exemple : « Conférence d\'entreprise pour 200 participants avec système de sonorisation, 6 micros-cravates, 2 micros main, mur LED 3x2 m et éclairage de scène basique. » Ajoutez la date de l\'événement, le lieu et le nombre de participants. Cliquez sur « Générer le devis » et regardez l\'IA construire votre liste de matériel en temps réel.',
      },
      {
        title: 'Examinez et personnalisez',
        content: 'Après la génération, examinez les lignes suggérées par l\'IA, organisées par catégorie (Audio, Vidéo, Éclairage, Main-d\'œuvre, Transport). Vous pouvez modifier les quantités, les prix, ajouter ou supprimer des articles, et marquer certains articles comme optionnels. Passez à l\'onglet « Conditions et détails » pour personnaliser les inclusions, les exclusions, les conditions de paiement et les CGV pour ce devis spécifique.',
      },
      {
        title: 'Téléchargez votre PDF',
        content: 'Cliquez sur l\'icône de téléchargement dans l\'en-tête du devis pour générer un PDF professionnel. La couleur de votre marque, votre logo, les informations sur votre entreprise et toutes les lignes sont mises en forme dans un document multi-pages soigné, avec section de couverture, tableaux de matériel, totaux, échéancier de paiement, bloc de signature d\'acceptation et conditions générales.',
        tip: 'Essayez différents modèles PDF (Modern, Bold, Classic, Minimal) dans les Paramètres pour trouver celui qui correspond à votre marque.',
      },
    ],
  },
  {
    slug: 'ai-proposal-generation',
    title: 'Génération de devis par IA',
    description: 'Découvrez comment l\'IA de CueQuote analyse la description de votre événement et génère une liste complète de matériel avec des prix précis.',
    duration: '4 min',
    difficulty: 'beginner',
    category: 'Devis',
    whatYouLearn: [
      'Comment rédiger des descriptions d\'événement efficaces pour l\'IA',
      'Comment l\'IA sélectionne le matériel en fonction de votre catalogue',
      'Votre quota mensuel de générations IA et comment éviter de le gaspiller',
      'Comprendre le processus de génération en streaming',
      'Comment le contexte de l\'événement influe sur les conditions générées',
    ],
    steps: [
      {
        title: 'Démarrez un nouveau devis',
        content: 'Cliquez sur « Nouveau devis » depuis la barre latérale ou le tableau de bord. Vous accéderez à l\'assistant en 3 étapes : Décrire → Générer → Examiner. La première étape est celle où vous indiquez à l\'IA les informations sur votre événement.',
      },
      {
        title: 'Rédigez une description d\'événement détaillée',
        content: 'Plus vous fournissez de détails, meilleur est le résultat de l\'IA. Incluez : le type d\'événement (conférence, gala, festival), les besoins précis en matériel (par exemple, « 6 micros-cravates Sennheiser EW-D »), les dimensions ou l\'agencement de la salle, et toute exigence particulière (streaming, interprétation simultanée, installation en extérieur). L\'IA suit les règles de cadrage de l\'industrie AV — elle ajoute automatiquement des consoles de mixage lorsque des micros sont spécifiés, des mélangeurs vidéo pour les configurations multi-sources et des structures (truss) pour l\'éclairage en hauteur.',
        tip: 'Vous pouvez coller directement le brief d\'un client dans le champ de description. L\'IA en extrait ce dont elle a besoin.',
      },
      {
        title: 'Renseignez les détails de l\'événement',
        content: 'Sous la description, indiquez la date de l\'événement, le nom/la ville du lieu, le nombre de participants attendus et la durée en jours. Ces détails aident l\'IA à prendre des décisions plus pertinentes — les événements sur plusieurs jours voient leur main-d\'œuvre multipliée par le nombre de jours, les événements de grande ampleur (500+ participants) bénéficient de considérations de sécurité supplémentaires, et le lieu aide à déterminer les besoins en transport.',
      },
      {
        title: 'Sélectionnez un client',
        content: 'Choisissez un client existant ou passez cette étape. Si vous sélectionnez un client, son type (Direct, Agence, Lieu, Corporate) influence les conditions de paiement générées par l\'IA. Les clients de type Agence obtiennent automatiquement des conditions NET-30, tandis que les clients Corporate obtiennent l\'acompte standard de 50 %.',
        tip: 'Créer les clients au préalable permet que leurs informations se pré-remplissent sur le PDF — nom, personne de contact, e-mail, téléphone.',
      },
      {
        title: 'Choisissez la devise',
        content: 'Sélectionnez la devise de ce devis dans le menu déroulant (EUR, USD, GBP, PLN, AED, EGP, CHF). Elle peut différer de la devise par défaut de votre entreprise — utile lorsque vous devisez des clients internationaux.',
      },
      {
        title: 'Confirmez avant que l\'IA se lance',
        content: 'Avant que CueQuote ne génère votre devis, une boîte de dialogue de confirmation s\'affiche : « Cela utilisera 1 de vos X devis IA ce mois-ci. Il vous en reste Y sur votre plan <plan>. » Chaque plan dispose d\'un quota mensuel d\'IA — Free : 3, Starter : 15, Pro : 50, Business : illimité. Chaque génération (y compris les relances) est décomptée de ce quota, vérifiez donc bien votre description avant de confirmer. Sur les plans illimités, cette boîte de dialogue est ignorée.',
        tip: 'Passer 30 secondes de plus à affiner votre description vous fait généralement économiser un créneau entier — l\'IA récompense la précision, et une génération gaspillée vous coûte un devis complet sur votre plafond mensuel.',
      },
      {
        title: 'Regardez l\'IA générer',
        content: 'Cliquez sur « Générer le devis » et observez l\'IA diffuser les lignes de matériel en temps réel. Les articles apparaissent organisés par catégorie avec leurs quantités, unités et prix. L\'IA utilise les articles et les prix de votre catalogue lorsqu\'ils sont disponibles et propose des prix aux tarifs du marché pour les articles absents de votre catalogue (signalés comme prix estimé). Un total courant se met à jour au fur et à mesure que les articles s\'affichent.',
        tip: 'L\'IA utilise Claude Haiku pour les événements simples (moins de 50 participants, une seule journée) et Claude Sonnet pour les événements complexes — optimisant le coût sans sacrifier la qualité.',
      },
      {
        title: 'Examinez le devis généré',
        content: 'Une fois la génération terminée, vous verrez toutes les lignes regroupées par catégorie avec un sous-total complet. L\'IA génère également des inclusions pertinentes (par exemple, « Installation et démontage professionnels »), des exclusions (par exemple, « Location de groupe électrogène pour un lieu en extérieur ») et des conditions de paiement suggérées selon le contexte de l\'événement. Cliquez sur « Examiner et enregistrer » pour enregistrer le devis et ouvrir l\'éditeur complet.',
      },
      {
        title: 'Affinez dans l\'éditeur',
        content: 'L\'éditeur comporte deux onglets : « Équipement » pour les lignes (modifier les quantités, les prix, ajouter/supprimer des lignes) et « Conditions et détails » pour les inclusions, les exclusions, l\'échéancier de paiement et les CGV. Tout ce que l\'IA a généré est entièrement modifiable — considérez-le comme un point de départ intelligent, et non comme le produit final.',
      },
    ],
  },
  {
    slug: 'customizing-pdf-templates',
    title: 'Personnaliser les modèles PDF',
    description: 'Basculez entre 4 styles de PDF professionnels et appliquez la couleur de votre marque pour un rendu cohérent sur tous vos devis.',
    duration: '2 min',
    difficulty: 'beginner',
    category: 'Image de marque',
    whatYouLearn: [
      'Les 4 styles de modèle PDF et quand utiliser chacun',
      'Comment la couleur de marque influe sur l\'ensemble du PDF',
      'Prévisualiser les modèles avant envoi',
    ],
    steps: [
      {
        title: 'Allez dans Paramètres',
        content: 'Cliquez sur « Paramètres » dans la barre latérale pour ouvrir la page des paramètres de votre entreprise. Faites défiler jusqu\'à la section « Image de marque des devis » — c\'est là que vous contrôlez l\'apparence de chaque PDF.',
      },
      {
        title: 'Définissez la couleur de votre marque',
        content: 'Cliquez sur le sélecteur de couleur ou saisissez directement un code hexadécimal. La couleur de votre marque pilote l\'ensemble du design du PDF — la bande d\'accentuation en haut, les barres de titre de section, les badges de catégorie, la mise en évidence de l\'investissement total, les puces et la bordure du bloc d\'acceptation. Choisissez une couleur qui représente votre entreprise.',
        tip: 'Testez avec une couleur de saturation moyenne. Les couleurs très claires peuvent être peu visibles, et les couleurs très sombres peuvent paraître lourdes.',
      },
      {
        title: 'Choisissez un modèle PDF',
        content: 'Quatre cartes de modèle sont affichées avec des mini-aperçus. Modern : en-tête clair avec cartes et tableaux à rayures — épuré et professionnel. Bold : section d\'en-tête sombre mettant fortement en valeur la couleur de marque. Classic : style papier à en-tête traditionnel sans bloc d\'en-tête — formel et discret. Minimal : ultra-épuré avec des lignes fines et un maximum d\'espace blanc.',
      },
      {
        title: 'Comprenez chaque modèle',
        content: 'Modern convient à la plupart des entreprises AV — il équilibre professionnalisme et attrait visuel. Bold est idéal lorsque votre couleur de marque est distinctive et que vous souhaitez faire impression. Classic convient aux clients corporate qui préfèrent une mise en forme de document traditionnelle. Minimal s\'adapte bien aux entreprises AV haut de gamme et boutique.',
      },
      {
        title: 'Enregistrez et prévisualisez',
        content: 'Cliquez sur « Enregistrer les modifications » en bas. Ensuite, ouvrez n\'importe quel devis, cliquez sur l\'icône de téléchargement pour générer un PDF. Ouvrez-le pour voir votre modèle avec la couleur de votre marque appliquée partout. Chaque nouveau devis utilisera automatiquement ce modèle.',
      },
      {
        title: 'Changez de modèle à tout moment',
        content: 'Vous pouvez changer de modèle à tout moment dans les Paramètres. Le changement s\'applique immédiatement à tous les futurs téléchargements PDF. Les devis déjà partagés utiliseront le nouveau modèle la prochaine fois qu\'ils seront consultés. Cela vous permet d\'expérimenter jusqu\'à trouver l\'apparence parfaite.',
        tip: 'Essayez les 4 modèles avec un vrai devis avant de choisir. Les mini-aperçus donnent une indication, mais voir un PDF complet reste la meilleure façon de décider.',
      },
    ],
  },
  {
    slug: 'managing-equipment-catalog',
    title: 'Gérer votre catalogue de matériel',
    description: 'Constituez votre base de matériel pour que l\'IA génère des devis précis avec vos prix réels.',
    duration: '5 min',
    difficulty: 'intermediate',
    category: 'Configuration',
    whatYouLearn: [
      'Comment ajouter et organiser des articles de matériel',
      'Comprendre les catégories de matériel',
      'Comment le catalogue alimente les devis générés par IA',
      'Importer en masse depuis des feuilles de calcul',
    ],
    steps: [
      {
        title: 'Accédez au Catalogue',
        content: 'Cliquez sur « Catalogue » dans la barre latérale. Vous verrez la liste de votre matériel organisée par catégorie. Si vous débutez, elle sera vide — c\'est normal. Le catalogue est la base de matériel de votre entreprise que l\'IA utilise lors de la génération des devis.',
      },
      {
        title: 'Ajoutez votre premier article',
        content: 'Cliquez sur « Ajouter un article » (ou sur le bouton « + »). Renseignez le nom de l\'article (par exemple, « Micro-cravate Sennheiser EW-D »), sélectionnez une catégorie (Audio), choisissez l\'unité par défaut (pcs, jour, lot, m², mètre, événement, déplacement) et saisissez votre prix de location par défaut. C\'est le prix que l\'IA utilisera lorsqu\'elle inclura cet article dans un devis.',
        tip: 'Utilisez des noms de modèles précis. « Sennheiser EW-D cravate » est préférable à « Micro sans fil » — cela montre à vos clients que vous disposez de matériel de qualité.',
      },
      {
        title: 'Comprenez les catégories',
        content: 'CueQuote propose 10 catégories de matériel : Audio, Vidéo, Éclairage, Interprétation simultanée, Streaming, Affichage numérique, Scénographie, Main-d\'œuvre, Transport et Autre. Les catégories déterminent la façon dont les articles sont regroupés dans les devis et les PDF. L\'IA utilise des règles de cadrage spécifiques à chaque catégorie — par exemple, elle ajoute automatiquement une console de mixage lorsque des micros figurent dans la catégorie Audio.',
      },
      {
        title: 'Définissez des prix par défaut précis',
        content: 'Les prix par défaut doivent refléter vos tarifs de location habituels. Lorsque l\'IA génère un devis, elle associe les articles de votre catalogue par leur nom et utilise vos prix. Les articles absents de votre catalogue reçoivent des prix estimés au tarif du marché. Plus vous ajoutez d\'articles avec des prix justes, moins vous aurez de modifications à faire après la génération IA.',
      },
      {
        title: 'Importez depuis une feuille de calcul',
        content: 'Pour un import en masse, cliquez sur le bouton d\'import et téléchargez un fichier XLSX. Votre feuille de calcul doit comporter des colonnes pour : nom, catégorie, unité et prix. C\'est le moyen le plus rapide de remplir votre catalogue si vous disposez déjà d\'une liste de matériel dans Excel ou Google Sheets.',
      },
      {
        title: 'Gérez les articles actifs',
        content: 'Chaque article possède un interrupteur actif/inactif. Désactiver un article le conserve dans votre base mais le masque à l\'IA lors de la génération de devis. Utilisez cela pour le matériel saisonnier ou temporairement indisponible. Vous pouvez le réactiver à tout moment.',
      },
      {
        title: 'Comment le catalogue alimente la génération IA',
        content: 'Lorsque vous créez un devis, l\'IA reçoit l\'intégralité de votre catalogue actif comme contexte. Elle associe le matériel décrit dans l\'événement aux articles de votre catalogue, en utilisant vos noms et vos prix exacts. Si l\'événement requiert un élément absent de votre catalogue, l\'IA l\'ajoute avec un préfixe [CUSTOM] et un prix estimé — vous pouvez ensuite mettre à jour le prix manuellement.',
        tip: 'Un catalogue de 50 à 100 articles couvre la plupart des besoins AV. Commencez par votre matériel principal et étoffez-le au fil du temps.',
      },
    ],
  },
  {
    slug: 'client-management',
    title: 'Gestion des clients',
    description: 'Ajoutez et organisez vos clients pour que les devis soient automatiquement personnalisés avec leurs informations.',
    duration: '3 min',
    difficulty: 'beginner',
    category: 'Bases',
    whatYouLearn: [
      'Ajouter et modifier des profils clients',
      'Comment les types de clients influent sur les conditions générées par l\'IA',
      'Associer des clients aux devis',
    ],
    steps: [
      {
        title: 'Allez dans Clients',
        content: 'Cliquez sur « Clients » dans la barre latérale. Cette page affiche tous vos clients dans une liste consultable. Chaque carte client indique son nom, sa personne de contact, son e-mail, son type et le nombre de devis que vous lui avez envoyés.',
      },
      {
        title: 'Ajoutez un nouveau client',
        content: 'Cliquez sur « Ajouter un client » et renseignez : nom du client/de l\'entreprise, nom de la personne de contact, adresse e-mail, numéro de téléphone et éventuelles notes. Toutes ces informations apparaissent sur le PDF du devis dans la section « Préparé pour » — assurez-vous donc de leur exactitude.',
      },
      {
        title: 'Choisissez le bon type de client',
        content: 'Sélectionnez l\'un des quatre types : Direct (clients finaux réservant directement vos services), Agence (agences événementielles qui gèrent la relation client), Lieu (hôtels ou lieux ayant des besoins AV internes) ou Corporate (entreprises avec des programmes événementiels récurrents). Le type de client n\'est pas qu\'une étiquette — il influence la façon dont l\'IA génère les conditions de paiement.',
        tip: 'Les clients de type Agence obtiennent automatiquement des conditions de paiement NET-30 (0 % d\'acompte, solde à 30 jours) car les agences paient généralement sur facture. Les clients Corporate obtiennent l\'acompte standard de 50 %.',
      },
      {
        title: 'Associez les clients aux devis',
        content: 'Lors de la création d\'un nouveau devis, vous pouvez sélectionner un client existant dans le menu déroulant. Le nom du client, sa personne de contact, son e-mail et son téléphone apparaîtront sur la couverture du PDF et dans la section « Préparé pour ». Vous pouvez également créer un nouveau client directement depuis le flux de création de devis.',
      },
      {
        title: 'Consultez l\'historique des devis du client',
        content: 'Cliquez sur n\'importe quel client pour voir tous les devis qui lui sont associés. Cela vous donne un aperçu rapide de votre relation — nombre de devis envoyés, leurs statuts (brouillon, envoyé, gagné, perdu) et la valeur totale. Utile lorsqu\'un client récurrent vous demande un nouveau devis.',
      },
      {
        title: 'Modifiez les informations du client',
        content: 'Cliquez sur le bouton de modification sur n\'importe quelle carte client pour mettre à jour ses informations. Les modifications s\'appliquent à tous les devis futurs — les devis existants conservent les informations qu\'ils avaient au moment de leur création. Cela garantit que vos devis envoyés restent exacts même si les coordonnées du client changent.',
      },
    ],
  },
  {
    slug: 'terms-details-editor',
    title: 'Éditeur de conditions et détails',
    description: 'Personnalisez les inclusions, les exclusions, les conditions de paiement et les CGV pour chaque devis individuellement.',
    duration: '4 min',
    difficulty: 'intermediate',
    category: 'Devis',
    whatYouLearn: [
      'Modifier les inclusions et exclusions par devis',
      'Définir des conditions de paiement personnalisées',
      'Gérer les sections de CGV',
      'Utiliser les avertissements intelligents pour éviter les erreurs',
    ],
    steps: [
      {
        title: 'Ouvrez l\'onglet Conditions',
        content: 'Ouvrez n\'importe quel devis dans l\'éditeur. Vous verrez deux onglets sous l\'en-tête : « Équipement » (par défaut, affichant les lignes) et « Conditions et détails ». Cliquez sur « Conditions et détails » pour accéder à l\'éditeur de conditions. Chaque section est pré-remplie par l\'IA en fonction de la description de votre événement, ou à partir des valeurs par défaut de votre entreprise si aucune condition IA n\'a été générée.',
      },
      {
        title: 'Modifiez les inclusions',
        content: 'La section « Ce qui est inclus » liste tout ce qui est couvert par votre devis. Chaque élément est une zone de texte — modifiez-la directement en cliquant. Supprimez des éléments avec le bouton X, ajoutez-en de nouveaux avec « + Ajouter une inclusion ». Inclusions courantes : matériel listé ci-dessus, installation et démontage professionnels, support technique sur site, assurance du matériel.',
      },
      {
        title: 'Modifiez les exclusions',
        content: 'La section « Ce qui n\'est pas inclus » précise ce qui est hors périmètre. Cela évite les litiges ultérieurs. Exclusions courantes : frais de lieu et permis, raccordements électriques au-delà du standard, création de contenu (graphiques, vidéo), modifications demandées à moins de 48 heures avant l\'événement. L\'IA ajoute des exclusions spécifiques au contexte — les événements extérieurs reçoivent « Location de groupe électrogène », les événements internationaux reçoivent « Douanes et droits d\'importation ».',
        tip: 'Des exclusions claires sont aussi importantes que les inclusions. Elles vous protègent contre la dérive du périmètre et fixent les bonnes attentes chez le client.',
      },
      {
        title: 'Définissez les conditions de paiement',
        content: 'Deux champs contrôlent votre échéancier de paiement : % d\'acompte (0-100) et solde dû (jours avant l\'événement). Une ligne d\'aperçu montre exactement ce qu\'indiquera le PDF : « 50 % d\'acompte à l\'acceptation, 50 % de solde dû 7 jours avant l\'événement ». L\'IA les fixe en fonction du type de client — les agences reçoivent 0 % d\'acompte avec des conditions à 30 jours.',
      },
      {
        title: 'Modifiez les Conditions Générales',
        content: 'La section CGV est un accordéon — cliquez sur n\'importe quel titre de section pour la déplier et la modifier. Les sections par défaut incluent Validité, Conditions de paiement, Politique d\'annulation, Matériel et dommages, et Disponibilité. Vous pouvez modifier le titre et le texte intégral de chaque section, en ajouter de nouvelles ou supprimer celles dont vous n\'avez pas besoin.',
      },
      {
        title: 'Utilisez l\'espace réservé {company_name}',
        content: 'Dans le texte des CGV, saisissez {company_name} et il sera automatiquement remplacé par le nom réel de votre entreprise dans le PDF. Par exemple : « Tout le matériel reste la propriété de {company_name} » devient « Tout le matériel reste la propriété de AVE Events » dans le PDF généré.',
      },
      {
        title: 'Réinitialisez aux valeurs par défaut de l\'entreprise',
        content: 'Chaque section comporte un lien « Réinitialiser aux valeurs par défaut » dans son en-tête. Cliquer dessus restaure cette section aux valeurs par défaut de votre entreprise (définies dans Paramètres → Valeurs par défaut des devis). Utile lorsque vous avez personnalisé les conditions pour un client mais souhaitez repartir de zéro pour un autre.',
      },
      {
        title: 'Surveillez les avertissements intelligents',
        content: 'Des bannières d\'avertissement jaunes apparaissent en haut de l\'onglet Conditions lorsque quelque chose peut nécessiter votre attention. Les avertissements incluent : 0 % d\'acompte sur des devis dépassant 5 000 (risqué), inclusions vides (peut entraîner des litiges), CGV manquantes (peu professionnel) et lieu de l\'événement différent de l\'adresse de votre entreprise (envisager des conditions internationales). Ce sont des informations — vous pouvez les ignorer si elles ne s\'appliquent pas.',
      },
    ],
  },
  {
    slug: 'sharing-tracking-proposals',
    title: 'Partager et suivre les devis',
    description: 'Envoyez les devis à vos clients et suivez quand ils les consultent, les acceptent ou les refusent.',
    duration: '3 min',
    difficulty: 'beginner',
    category: 'Devis',
    whatYouLearn: [
      'Envoyer des devis par e-mail',
      'Partager via un lien',
      'Suivre l\'engagement client',
      'Comment les clients acceptent ou refusent',
    ],
    steps: [
      {
        title: 'Ouvrez la boîte de dialogue Envoyer',
        content: 'Depuis l\'éditeur de devis, cliquez sur le bouton vert « Envoyer » dans le coin supérieur droit. Une fenêtre s\'ouvre dans laquelle vous pouvez composer l\'e-mail qui accompagnera votre devis. Si un client est associé, son e-mail est pré-rempli.',
      },
      {
        title: 'Message d\'accueil personnalisé — pré-rempli',
        content: 'CueQuote remplit automatiquement un message personnalisé adressé au nom de votre client, avec référence au titre du devis. Il indique au client d\'utiliser le lien pour consulter et répondre, et se termine par le nom de votre entreprise. Vous pouvez modifier ou supprimer le message avant l\'envoi. L\'e-mail inclut le logo de votre entreprise, les détails du devis, le prix total et un bouton « Voir le devis » bien visible.',
      },
      {
        title: 'Envoyez ou copiez le lien',
        content: 'Cliquez sur « Envoyer » pour expédier l\'e-mail, ou cliquez sur l\'icône de lien pour copier l\'URL de partage. Le lien de partage fonctionne sans connexion — toute personne disposant du lien peut consulter le devis. Utilisez l\'option copier le lien pour WhatsApp, Slack ou d\'autres canaux de messagerie.',
        tip: 'Le statut du devis passe automatiquement à « Envoyé » lorsque vous l\'envoyez par e-mail.',
      },
      {
        title: 'Suivez quand les clients consultent',
        content: 'De retour sur le tableau de bord et la liste des devis, vous verrez les mises à jour de statut. Lorsqu\'un client ouvre votre devis, le statut passe à « Consulté » et vous pouvez voir la date de première consultation, la date de dernière consultation et le nombre total de vues. Cela vous indique si votre devis est activement étudié.',
      },
      {
        title: 'Le client examine le devis',
        content: 'La page de partage présente une vue professionnelle et personnalisée de votre devis : en-tête de l\'entreprise, détails de l\'événement, tout le matériel par catégorie avec les prix, totaux, inclusions/exclusions, conditions de paiement et une section de notes. Elle est conçue pour ressembler à un document professionnel formel, et non à un simple devis.',
      },
      {
        title: 'Le client accepte ou refuse',
        content: 'En bas de la page de partage, le client voit les boutons « Accepter le devis » et « Refuser ». Lorsqu\'il clique sur Accepter, le statut du devis passe à « Gagné » dans votre tableau de bord. S\'il refuse, il passe à « Perdu ». Vous êtes notifié dans les deux cas, et le statut est visible dans la liste des devis.',
      },
      {
        title: 'Signature électronique à l\'acceptation',
        content: 'Lors de l\'acceptation, le client dessine sa signature sur un canevas, saisit son nom complet et confirme son accord avec les conditions. La signature dessinée, l\'horodatage et les informations de l\'appareil sont enregistrés comme preuve légale et apparaissent sur le PDF téléchargé.',
      },
      {
        title: 'Suivez l\'engagement client',
        content: 'Après qu\'un client a consulté votre devis, l\'éditeur de devis affiche un panneau d\'analyse avec le temps total passé, la profondeur de défilement, les visites, les téléchargements PDF et la répartition du temps par section. Utilisez ces informations pour relancer efficacement.',
      },
      {
        title: 'Téléchargez le PDF à tout moment',
        content: 'Cliquez sur l\'icône de téléchargement dans l\'en-tête du devis pour générer le PDF. Le PDF inclut tout : section de couverture avec l\'image de marque de l\'entreprise, périmètre des prestations, tableaux de matériel par catégorie, carte des totaux, inclusions/exclusions, échéancier de paiement, bloc de signature et CGV complètes. Partagez le PDF en pièce jointe ou imprimez-le pour les réunions en présentiel.',
      },
    ],
  },
  {
    slug: 'billing-subscription',
    title: 'Facturation et abonnement',
    description: 'Comprenez les plans de CueQuote, passez à la version supérieure et gérez votre facturation.',
    duration: '3 min',
    difficulty: 'intermediate',
    category: 'Compte',
    whatYouLearn: [
      'Comparer les 4 plans d\'abonnement',
      'Comment passer à la version supérieure avec un essai gratuit',
      'Gérer les moyens de paiement et les factures',
      'Packs de crédits pour le paiement à l\'usage',
    ],
    steps: [
      {
        title: 'Allez dans Facturation',
        content: 'Cliquez sur « Facturation » dans la barre latérale. La page de facturation affiche votre plan actuel, les devis utilisés ce mois-ci et tous les plans disponibles. Si vous êtes sur le plan Free, vous pouvez créer 3 devis par mois.',
      },
      {
        title: 'Comparez les plans',
        content: 'Quatre plans sont disponibles : Free (3 devis/mois, PDF basique), Starter à 39 par mois (15 devis, image de marque complète, gestion des clients), Pro à 99 par mois (50 devis, modèles personnalisés, analytics) et Business à 199 par mois (devis illimités, accès API, support dédié). Basculez entre facturation mensuelle et annuelle — l\'annuel vous fait économiser 20 %.',
      },
      {
        title: 'Passez à un plan payant',
        content: 'Cliquez sur « Démarrer l\'essai de 3 jours » sur n\'importe quel plan payant. Vous serez redirigé vers Stripe Checkout où vous saisirez vos informations de paiement. Tous les plans payants incluent un essai gratuit de 3 jours — vous ne serez pas débité avant la fin de l\'essai. Vous pouvez annuler à tout moment pendant l\'essai sans frais.',
        tip: 'Vous recevrez un e-mail de confirmation détaillant votre plan et ses fonctionnalités après la mise à niveau.',
      },
      {
        title: 'Gérez votre abonnement',
        content: 'Une fois abonné, cliquez sur « Gérer la facturation » pour accéder au Portail Client Stripe. Vous pouvez y mettre à jour votre moyen de paiement, consulter et télécharger les factures passées, changer de plan ou annuler votre abonnement. Toutes les modifications prennent effet à la fin de votre cycle de facturation en cours.',
      },
      {
        title: 'Téléchargez les factures',
        content: 'Dans le portail Stripe, cliquez sur n\'importe quel paiement passé pour consulter et télécharger le PDF de la facture. Les factures incluent le nom de votre entreprise, l\'adresse, le numéro de TVA et les informations de paiement — prêtes pour votre service comptable.',
      },
      {
        title: 'Achetez des packs de crédits',
        content: 'Vous ne souhaitez pas d\'abonnement mensuel ? Achetez plutôt des crédits de devis. Un pack de 3 coûte 19 (6,33 par unité) et un pack de 10 coûte 49 (4,90 par unité). Les crédits n\'expirent jamais et incluent toutes les fonctionnalités premium comme les PDF personnalisés. Idéal pour les entreprises qui devisent de manière saisonnière.',
      },
      {
        title: 'Suivez votre utilisation',
        content: 'La page de facturation indique combien de devis vous avez utilisés ce mois-ci. Le compteur de devis se réinitialise à votre date de facturation. Si vous atteignez votre limite, vous pouvez soit passer à un plan supérieur, soit acheter un pack de crédits pour continuer à créer des devis.',
      },
    ],
  },
  {
    slug: 'client-portal',
    title: 'Portail client',
    description: 'Offrez à vos clients un accès dédié pour consulter tous leurs devis et factures.',
    duration: '2 min',
    difficulty: 'intermediate',
    category: 'Devis',
    whatYouLearn: [
      'Comment les clients s\'inscrivent au portail',
      'Ce que les clients voient dans leur tableau de bord',
      'Gérer les accès et les permissions des clients',
      'Révoquer l\'accès d\'un client si nécessaire',
    ],
    steps: [
      {
        title: 'Processus d\'inscription du client',
        content: 'Lorsque vous envoyez un devis, le client reçoit une invitation à créer un compte sur le portail. Il clique sur le lien dans l\'e-mail, définit un mot de passe et accède à son tableau de bord personnel. Si le client possède déjà un compte, le nouveau devis apparaît automatiquement.',
      },
      {
        title: 'Ce que voient les clients',
        content: 'Dans le portail, les clients voient un tableau de bord listant tous les devis et factures que vous avez partagés avec eux. Chaque entrée affiche le titre, la date, le statut et le montant total. Les clients peuvent ouvrir n\'importe quel devis pour le consulter, l\'accepter ou le refuser, télécharger le PDF et consulter les factures — le tout depuis un seul endroit.',
      },
      {
        title: 'Gérer l\'accès des clients',
        content: 'Dans votre tableau de bord CueQuote, allez dans Clients et sélectionnez un client pour voir le statut de son portail. Vous pouvez renvoyer l\'invitation, réinitialiser son mot de passe ou révoquer entièrement son accès. La révocation désactive immédiatement sa connexion — il ne pourra plus consulter les devis ni les factures tant que vous n\'aurez pas rétabli son accès.',
      },
    ],
  },
]
