import type { Tutorial } from './types'

export const TUTORIALS_FR: Tutorial[] = [
  {
    slug: 'getting-started',
    title: 'Premiers pas',
    description: 'Créez votre compte CueQuote et envoyez votre premier devis AV généré par IA en moins de 10 minutes.',
    duration: '5 min',
    difficulty: 'beginner',
    category: 'Bases',
    mode: 'both',
    videoUrl: '/videos/cuequote-walkthrough-master.mp4',
    whatYouLearn: [
      'Comment créer votre compte CueQuote',
      'Configurer votre profil d\'entreprise et votre image de marque',
      'Créer votre premier devis généré par IA',
      'Télécharger un PDF professionnel',
    ],
    steps: [
      {
        title: 'Démarrer depuis le calculateur de coûts (facultatif)',
        content: 'Si vous ne savez pas ce que devrait coûter votre événement, ouvrez d’abord le calculateur de coûts AV sur cuequote.com. Choisissez le pays de l’événement, indiquez le nombre de participants et de jours, puis vidéo, éclairage et scène. Quand l’estimation vous convient, cliquez sur « Continuer avec cette estimation » : votre configuration vous suit à travers l’inscription et votre premier devis s’ouvre déjà rempli.',
        tip: 'Le matériel et les équipes sont chiffrés séparément selon le marché, donc l’estimation reflète le lieu réel de l’événement plutôt qu’une moyenne mondiale.',
      },
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
    mode: 'both',
    videoUrl: '/videos/getting-started.mp4',
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
        title: 'Joindre des fichiers d\'exigences',
        content: 'Téléchargez des fiches techniques PDF, des listes de matériel Excel, des briefs événementiels Word ou des images de plans de salle en complément de votre description d\'événement. CueQuote extrait le texte et le transmet à l\'IA comme contexte supplémentaire, ce qui produit des devis plus précis.',
        tip: 'Combinez une courte description écrite avec une fiche technique jointe pour de meilleurs résultats — l\'IA fusionne les deux sources.',
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
        content: 'Avant que CueQuote ne génère votre devis, une boîte de dialogue de confirmation s\'affiche : « Cela utilisera 1 de vos X devis IA ce mois-ci. Il vous en reste Y sur votre plan <plan>. » Chaque plan dispose d\'un quota mensuel d\'IA — Free : 3, Starter : 10, Pro : 40, Business : 120. Chaque génération (y compris les relances) est décomptée de ce quota, vérifiez donc bien votre description avant de confirmer. Sur les plans illimités, cette boîte de dialogue est ignorée.',
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
    mode: 'both',
    videoUrl: '/videos/pdf-templates.mp4',
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
    mode: 'av',
    videoUrl: '/videos/getting-started.mp4',
    whatYouLearn: [
      'Comment ajouter et organiser des articles de matériel',
      'Comprendre les catégories de matériel',
      'Comment le catalogue alimente les devis générés par IA',
      'Suivi des prix de revient et des marges pour le matériel sous-loué',
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
        title: 'Suivez les coûts et les marges',
        content: 'Pour le matériel que vous sous-louez auprès d\'autres fournisseurs, ajoutez votre prix de revient dans le catalogue. L\'éditeur de devis affiche un panneau interne de marge avec Chiffre d\'affaires, Coût, Bénéfice et Marge % — jamais visible par les clients. Laissez le coût vide pour votre propre matériel.',
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
    mode: 'both',
    videoUrl: '/videos/client-management.mp4',
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
    mode: 'both',
    videoUrl: '/videos/sharing-and-tracking.mp4',
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
        title: 'Tarification des jours de montage et démontage',
        content: 'Configurez comment le matériel est facturé les jours de montage et de démontage. Choisissez 0 % (gratuit), 50 % (demi-tarif) ou 100 % (plein tarif) dans les Paramètres. Chaque devis peut remplacer la valeur par défaut. La main-d\'œuvre est toujours au plein tarif pour tous les jours.',
        tip: 'La plupart des sociétés AV facturent 50 % pour les jours de montage/démontage — les clients s\'y attendent, et cela couvre le fait que votre matériel est mobilisé sans être utilisé en conditions de spectacle.',
      },
      {
        title: 'Modifiez les Conditions Générales',
        content: 'La section CGV est un accordéon — cliquez sur n\'importe quel titre de section pour la déplier et la modifier. Les sections par défaut incluent Validité, Conditions de paiement, Politique d\'annulation, Matériel et dommages, et Disponibilité. Vous pouvez modifier le titre et le texte intégral de chaque section, en ajouter de nouvelles ou supprimer celles dont vous n\'avez pas besoin.',
      },
      {
        title: 'Utilisez l\'espace réservé {company_name}',
        content: 'Dans le texte des CGV, saisissez {company_name} et il sera automatiquement remplacé par le nom réel de votre entreprise dans le PDF. Par exemple : « Tout le matériel reste la propriété de {company_name} » devient « Tout le matériel reste la propriété de AVE Event Solutions » dans le PDF généré.',
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
    mode: 'both',
    videoUrl: '/videos/sharing-and-tracking.mp4',
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
      {
        title: 'Plan d\'évaluation des risques',
        content: 'Générez une évaluation des risques alimentée par l\'IA pour votre événement depuis l\'onglet Plan de risques. L\'IA analyse votre équipement, le lieu et le nombre de participants pour identifier les risques et les plans d\'atténuation dans 8 catégories : panne d\'équipement, coupure de courant, réseau, interprétation, météo, équipe, planning et sécurité. Les plans Starter donnent accès à 3 catégories de base ; Pro débloque les 8 avec édition et inclusion dans le PDF.',
      },
      {
        title: 'Régénérer les devis',
        content: 'Besoin de mettre à jour un devis ? Utilisez Régénérer depuis le menu Plus au lieu d\'en créer un nouveau. Choisissez Complète (remplacer tous les articles), Intelligente (conserver vos modifications) ou Depuis un fichier (téléverser un cahier des charges mis à jour). Votre client, dates, lieu et conditions sont préservés. La régénération ne compte pas dans votre quota mensuel de devis.',
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
    mode: 'both',
    videoUrl: '/videos/billing-and-subscriptions.mp4',
    whatYouLearn: [
      'Comparer les 4 plans d\'abonnement',
      'Comment passer à un plan payant',
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
        content: 'Quatre plans sont disponibles : Free (3 devis/mois, PDF basique), Starter à €29 par mois (10 devis, image de marque complète, gestion des clients), Pro à €79 par mois (40 devis, modèles personnalisés, analytics) et Business à €179 par mois (120 devis, accès API, support dédié). Basculez entre facturation mensuelle et annuelle — l\'annuel vous fait économiser 20 %.',
      },
      {
        title: 'Passez à un plan payant',
        content: 'Cliquez sur « Commencer gratuitement » sur n\'importe quel plan payant. Vous serez redirigé vers Stripe Checkout où vous saisirez vos informations de paiement. Votre abonnement commence immédiatement après le paiement.',
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
        content: 'Limite mensuelle atteinte ? Achetez un pack de 5 crédits de devis pour 29 (5,80 par unité). Les crédits sont valables 12 mois et incluent toutes les fonctionnalités premium comme les PDF personnalisés. Idéal pour les entreprises qui ont besoin de quelques devis supplémentaires au-delà de leur limite de plan.',
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
    mode: 'both',
    videoUrl: '/videos/client-portal.mp4',
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
  {
    slug: 'invoice-payments-corrections',
    title: 'Paiements et corrections de factures',
    description: 'Enregistrez les paiements partiels, suivez l\'historique des paiements, émettez des factures correctives et gérez le statut des factures.',
    duration: '4 min',
    difficulty: 'intermediate',
    category: 'Factures',
    mode: 'both',
    videoUrl: '/videos/invoice-payments.mp4',
    whatYouLearn: [
      'Enregistrer les paiements complets et partiels sur les factures',
      'Consulter l\'historique des paiements et annuler le statut payé',
      'Émettre des factures correctives avec suivi avant/après',
      'Modifier manuellement le statut d\'une facture',
    ],
    steps: [
      {
        title: 'Enregistrer un paiement',
        content: 'Ouvrez n\'importe quelle facture et regardez la barre latérale Résumé à droite. Sous « Montant dû », cliquez sur le bouton vert « Enregistrer un paiement ». Saisissez le montant reçu, sélectionnez la date, choisissez un mode de paiement (virement bancaire, espèces, carte, chèque ou autre) et ajoutez éventuellement un numéro de référence. Cliquez sur « Enregistrer le paiement » — la facture passe automatiquement au statut « partiel » si le montant est inférieur au total, ou « payé » si le montant couvre la totalité.',
        tip: 'Vous pouvez enregistrer plusieurs paiements partiels au fil du temps. Chacun est suivi séparément dans la section Historique des paiements sous les notes.',
      },
      {
        title: 'Consulter l\'historique des paiements',
        content: 'Faites défiler sous la section Notes pour voir la carte Historique des paiements. Chaque paiement enregistré affiche le montant, la date, le badge du mode de paiement et les notes de référence. Le total de tous les paiements est affiché en bas. Vous pouvez supprimer des enregistrements de paiement saisis par erreur — cliquez sur l\'icône de corbeille à côté du paiement concerné.',
      },
      {
        title: 'Annuler une facture payée',
        content: 'Si vous avez marqué une facture comme payée par erreur, regardez la barre latérale Résumé — sous le badge vert « Payé », il y a un lien « Annuler — marquer comme impayé ». Cliquez dessus et confirmez. La facture reviendra à son statut correct en fonction des paiements réellement enregistrés : « partiel » si des paiements existent, « envoyé » si elle avait été précédemment envoyée, ou « brouillon » sinon.',
      },
      {
        title: 'Modifier le statut de la facture',
        content: 'Cliquez sur le badge de statut coloré à côté du numéro de facture (par ex. « Brouillon », « Envoyé »). Un menu déroulant apparaît avec tous les statuts disponibles : Brouillon, Envoyé, Vu, Partiel, Payé, En retard et Annulé. Sélectionnez le nouveau statut — il est enregistré immédiatement. Lorsque vous passez à « Envoyé », l\'horodatage d\'envoi est enregistré automatiquement.',
        tip: 'Utilisez cette fonction pour marquer manuellement les factures comme « En retard » ou pour rétablir un statut si nécessaire.',
      },
      {
        title: 'Émettre une facture corrective',
        content: 'Pour les factures déjà envoyées ou payées nécessitant des corrections, cliquez sur l\'icône de correction (flèche circulaire) dans la barre d\'outils de l\'en-tête. Confirmez l\'action — une nouvelle facture corrective est créée avec le suffixe « /COR » (par ex. INV-0006/COR). Tous les postes sont copiés de l\'original avec leurs valeurs d\'origine conservées comme instantané.',
      },
      {
        title: 'Modifier la correction',
        content: 'Sur la facture corrective, modifiez les postes nécessitant une correction — changez les quantités, les prix, ou ajoutez/supprimez des articles. Les postes modifiés affichent automatiquement le total original barré à côté du nouveau total, pour que le client voie exactement ce qui a changé. Renseignez le champ « Motif de la correction » pour expliquer pourquoi la facture a été ajustée (par ex. « Prix ajusté selon accord client »). Envoyez la facture corrective au client.',
        tip: 'La facture originale reste intacte avec une bannière renvoyant vers la correction. La facture corrective comporte une bannière renvoyant vers l\'originale — traçabilité complète.',
      },
    ],
  },
  {
    slug: 'invoicing',
    title: 'Créer des factures',
    description: 'Générez des factures professionnelles à partir de vos devis acceptés avec vos coordonnées de paiement et envoyez-les à vos clients.',
    duration: '4 min',
    difficulty: 'intermediate',
    category: 'Factures',
    mode: 'both',
    videoUrl: '/videos/invoicing.mp4',
    whatYouLearn: [
      'Comment créer des factures à partir de devis',
      'Configurer vos modes de paiement (banque, PayPal)',
      'Envoyer des factures et suivre les paiements',
      'Factures d\'acompte vs factures complètes',
      'Tarification des jours de montage et démontage',
    ],
    steps: [
      {
        title: 'Ajoutez vos modes de paiement',
        content: 'Allez dans Paramètres → onglet Paiements. Cliquez sur « Ajouter un mode de paiement » et saisissez vos coordonnées bancaires (titulaire du compte, banque, IBAN, SWIFT) ou votre adresse PayPal. Ces informations apparaîtront sur chaque facture que vous envoyez. Vous pouvez ajouter plusieurs modes et en définir un par défaut.',
        tip: 'Ajoutez au moins un compte bancaire — la plupart des clients B2B préfèrent le virement bancaire pour les paiements de matériel AV.',
      },
      {
        title: 'Créez une facture à partir d\'un devis',
        content: 'Ouvrez n\'importe quel devis qui a été envoyé ou accepté. Cliquez sur le bouton « Créer une facture » dans l\'en-tête. On vous demandera de choisir entre une facture d\'acompte (basée sur votre pourcentage d\'acompte) ou une facture complète (100 % du total). CueQuote copie tous les postes, les informations client et les prix depuis le devis.',
      },
      {
        title: 'Vérifiez et personnalisez la facture',
        content: 'L\'éditeur de facture s\'ouvre avec les données pré-remplies du devis. Vérifiez le numéro de facture (généré automatiquement en INV-0001, INV-0002...), la date d\'émission, la date d\'échéance et les postes. Vous pouvez modifier n\'importe quel champ, ajouter ou supprimer des articles, et ajuster les quantités ou les prix.',
      },
      {
        title: 'Sélectionnez un mode de paiement',
        content: 'Choisissez dans le menu déroulant le mode de paiement à afficher sur la facture. Les coordonnées du mode sélectionné (IBAN, SWIFT, etc.) apparaîtront dans la section « Instructions de paiement » du PDF de la facture, accompagnées du numéro de facture comme référence.',
      },
      {
        title: 'Téléchargez le PDF de la facture',
        content: 'Cliquez sur le bouton de téléchargement pour générer un PDF de facture professionnel. Il comprend l\'image de marque de votre entreprise, un en-tête « FACTURE » formel, le tableau des postes, les totaux avec TVA, les instructions de paiement avec vos coordonnées bancaires et un numéro de référence. Lorsqu\'une facture est marquée comme payée, un filigrane vert « PAYÉ » apparaît.',
      },
      {
        title: 'Envoyez et suivez la facture',
        content: 'Cliquez sur « Envoyer » pour envoyer la facture par e-mail à votre client avec le PDF en pièce jointe. CueQuote ajoute automatiquement un message personnalisé adressé au nom de votre client. Le statut de la facture passe de Brouillon à Envoyé. Une fois le paiement reçu, cliquez sur « Marquer comme payé » pour l\'enregistrer. Vous pouvez aussi enregistrer des paiements partiels.',
        tip: 'Ajoutez une note demandant aux clients d\'indiquer le numéro de facture comme référence de paiement — cela facilite grandement le rapprochement.',
      },
      {
        title: 'Tarification des jours de montage et démontage',
        content: 'CueQuote distingue les jours d\'événement des jours de montage (installation) et de démontage. Le matériel est facturé à un taux configurable pour les jours de montage/démontage — 0 % (gratuit), 50 % (demi-tarif) ou 100 % (plein tarif). La main-d\'œuvre est toujours au plein tarif pour tous les jours. Définissez la valeur par défaut de votre entreprise dans Paramètres > Devis.',
        tip: 'En Pologne, 50 % du tarif matériel pour les jours de montage est la norme. Dans le Golfe et au MENA, c\'est 100 %. Définissez votre valeur par défaut une fois pour toutes.',
      },
    ],
  },
  {
    slug: 'team-management',
    title: 'Gestion de l\'équipe',
    description: 'Invitez des membres d\'équipe, attribuez des rôles et collaborez sur les devis au sein de votre organisation.',
    duration: '3 min',
    difficulty: 'intermediate',
    category: 'Compte',
    mode: 'both',
    videoUrl: '/videos/team-management.mp4',
    whatYouLearn: [
      'Comment inviter des membres d\'équipe dans votre espace de travail',
      'Les quatre rôles et ce que chacun peut faire',
      'Gérer et supprimer des membres d\'équipe',
      'Comment les données migrent lorsqu\'un membre rejoint l\'équipe',
    ],
    steps: [
      {
        title: 'Accédez à la page Équipe',
        content: 'Allez dans Équipe depuis la barre latérale. Vous verrez la liste de tous les membres actuels de l\'équipe avec leurs noms, e-mails, rôles et dates d\'adhésion.',
      },
      {
        title: 'Invitez un nouveau membre',
        content: 'Cliquez sur « Inviter un membre » et saisissez l\'adresse e-mail de la personne. Sélectionnez un rôle : Owner (accès complet y compris la facturation), Admin (accès complet sauf la facturation), Sales (créer des devis, gérer les clients et le catalogue) ou Viewer (accès en lecture seule au tableau de bord).',
        tip: 'Utilisez le rôle Sales pour votre équipe commerciale — ils peuvent créer des devis et gérer les clients mais ne peuvent pas modifier la facturation ni les paramètres de l\'entreprise.',
      },
      {
        title: 'Le membre d\'équipe rejoint',
        content: 'La personne invitée reçoit un e-mail avec un lien. Si elle possède déjà un compte CueQuote, elle clique sur le lien, se connecte et voit une page d\'acceptation/refus. Si elle est nouvelle, elle s\'inscrit d\'abord puis accepte l\'invitation.',
      },
      {
        title: 'Les données migrent automatiquement',
        content: 'Lorsqu\'un membre d\'équipe accepte votre invitation, ses devis, clients, articles de catalogue et factures existants sont automatiquement déplacés vers l\'espace de travail de votre équipe. Rien n\'est perdu — son ancien espace de travail vide est nettoyé. Une confirmation est affichée avant l\'acceptation.',
        tip: 'Cela signifie que les nouvelles recrues peuvent commencer à créer des devis sur leur propre compte, et lorsqu\'elles rejoignent votre équipe, tout leur travail les accompagne.',
      },
      {
        title: 'Modifier les rôles ou supprimer des membres',
        content: 'Cliquez sur n\'importe quel membre d\'équipe pour modifier son rôle ou le retirer de votre espace de travail. Seuls les owners peuvent gérer les autres membres de l\'équipe. La suppression d\'un membre révoque immédiatement son accès.',
      },
    ],
  },
  {
    slug: 'scope-templates',
    title: 'Modèles de scope',
    description: 'Enregistrez et réutilisez des configurations de devis pour les types d\'événements récurrents afin d\'accélérer la création de devis.',
    duration: '4 min',
    difficulty: 'intermediate',
    category: 'Devis',
    mode: 'both',
    videoUrl: '/videos/scope-templates.mp4',
    whatYouLearn: [
      'Créer des modèles de zéro',
      'Enregistrer des devis existants comme modèles',
      'Modèles scope-only vs modèles complets (avec postes)',
      'Utiliser les modèles pour accélérer la création de devis',
    ],
    steps: [
      {
        title: 'Accédez à la page Modèles',
        content: 'Allez dans Modèles depuis la barre latérale. Vous y verrez tous vos modèles enregistrés avec leur type d\'événement, description, plage de participants et s\'ils incluent des postes pré-configurés.',
      },
      {
        title: 'Créez un modèle de zéro',
        content: 'Cliquez sur « Nouveau modèle » et configurez le type d\'événement, le nom, la description et la plage de participants. Vous pouvez optionnellement ajouter des postes avec des quantités et des prix pour créer un modèle complet.',
        tip: 'Commencez par votre type d\'événement le plus courant — conférences, dîners de gala ou lancements de produits. Chaque modèle vous fait gagner 5 à 10 minutes par devis.',
      },
      {
        title: 'Enregistrez un devis comme modèle',
        content: 'Ouvrez n\'importe quel devis finalisé dans l\'éditeur et cliquez sur « Enregistrer comme modèle ». Tous les postes, quantités et prix sont capturés. Donnez-lui un nom descriptif et enregistrez.',
      },
      {
        title: 'Utilisez un modèle lors de la création d\'un devis',
        content: 'Lors de la création d\'un nouveau devis, vos modèles apparaissent sous forme de cartes de démarrage rapide au-dessus de la description de l\'événement. Cliquez sur un modèle pour pré-remplir la description et les paramètres. S\'il s\'agit d\'un modèle complet avec des postes, vous pouvez ignorer entièrement la génération par IA.',
      },
      {
        title: 'Modèles scope-only vs modèles complets',
        content: 'Les modèles scope-only pré-remplissent la description de l\'événement mais utilisent toujours l\'IA pour générer la liste de matériel. Les modèles complets incluent des postes pré-configurés et ignorent la génération IA — cliquez sur « Utiliser le modèle » pour un devis instantané sans coût IA.',
        tip: 'Utilisez les modèles complets pour les événements que vous devisez de manière identique à chaque fois (par ex. une configuration standard de salle de conférence). Utilisez les modèles scope-only lorsque la description est similaire mais le matériel varie.',
      },
    ],
  },
  {
    slug: 'smart-suggestions',
    title: 'Suggestions intelligentes',
    description: 'CueQuote analyse vos devis précédents pour suggérer les éléments manquants, signaler les incohérences de prix et identifier les lacunes du catalogue.',
    duration: '3 min',
    difficulty: 'intermediate',
    category: 'Devis',
    mode: 'both',
    videoUrl: '/videos/smart-suggestions.mp4',
    whatYouLearn: [
      'Activer les Suggestions intelligentes sur les devis',
      'Ajouter les articles fréquemment utilisés que vous avez peut-être oubliés',
      'Ajuster les prix en fonction de vos moyennes historiques',
      'Enrichir votre catalogue à partir des données réelles de vos devis',
    ],
    steps: [
      {
        title: 'Activer les Suggestions intelligentes',
        content: 'Ouvrez n\'importe quel devis et regardez la barre d\'onglets (Matériel | Conditions et détails | Plan de risques). Sur le côté droit, vous verrez un bouton à bascule « Smart » avec une ampoule. Cliquez dessus pour activer les suggestions — il devient ambre lorsqu\'il est actif. Votre préférence est enregistrée automatiquement, elle reste activée/désactivée sur tous vos devis.',
        tip: 'Les Suggestions intelligentes nécessitent au moins 3 devis envoyés avec des articles similaires pour générer des recommandations pertinentes. Plus vous créez de devis, plus elles deviennent précises.',
      },
      {
        title: 'Examiner les articles manquants',
        content: 'Cliquez sur la bannière « Suggestions intelligentes » au-dessus du tableau de matériel pour la développer. L\'onglet « Articles manquants » affiche les articles que vous incluez fréquemment dans des devis similaires mais que vous n\'avez pas ajoutés à celui-ci. Chaque suggestion montre un pourcentage de confiance (par ex. « 85 % » signifie que vous l\'incluez dans 85 % de vos devis passés), le prix moyen issu de votre historique, et avec quels articles actuels il est habituellement associé. Cliquez sur « Ajouter » pour insérer une suggestion avec son prix moyen.',
      },
      {
        title: 'Vérifier les alertes de tarification',
        content: 'Passez à l\'onglet « Retarification ». Celui-ci signale les articles de votre devis actuel dont le prix est supérieur ou inférieur de plus de 15 % à votre tarif habituel. Chaque alerte indique votre prix actuel par rapport à la moyenne historique, ainsi que la fourchette min-max de vos devis passés. Une flèche rouge signifie que vous facturez plus que d\'habitude ; une flèche verte signifie moins. Cliquez sur « Utiliser la moyenne » pour appliquer votre prix moyen historique.',
        tip: 'C\'est particulièrement utile lorsque vous réutilisez des articles d\'un devis à l\'autre — cela détecte les changements de prix accidentels ou les tarifs obsolètes.',
      },
      {
        title: 'Combler les lacunes du catalogue',
        content: 'L\'onglet « Ajouter au catalogue » affiche les articles que vous avez utilisés dans 2 devis ou plus mais que vous n\'avez jamais ajoutés à votre catalogue de matériel. Chaque entrée indique combien de fois vous l\'avez utilisé et le prix moyen. Cliquez sur « Ajouter au catalogue » pour créer une entrée de catalogue avec le prix moyen pré-rempli — la prochaine fois, vous pourrez le sélectionner depuis votre catalogue au lieu de le saisir manuellement.',
      },
    ],
  },
  {
    slug: 'inventory-management',
    title: 'Gestion des stocks',
    description: 'Suivez votre matériel AV physique avec numéros de série, états techniques, calendrier de disponibilité et affectation aux événements.',
    duration: '5 min',
    difficulty: 'intermediate',
    category: 'Configuration',
    mode: 'av',
    whatYouLearn: [
      'Ajouter des unités de matériel avec leurs numéros de série et états techniques',
      'Filtrer et parcourir le stock par catégorie, état et emplacement',
      'Affecter des unités de matériel spécifiques aux événements',
      'Suivre la disponibilité du matériel et détecter les conflits dans le calendrier',
      'Enregistrer les interventions de maintenance et gérer le calendrier d\'entretien',
    ],
    steps: [
      {
        title: 'Ajouter une unité de matériel',
        content: 'Accédez aux Stocks depuis la barre latérale et cliquez sur « Ajouter une unité ». Renseignez le nom, la catégorie, le numéro de série, l\'état technique (Excellent, Bon, Maintenance requise, Hors service) et l\'emplacement de stockage. Chaque unité en stock est suivie indépendamment des articles du catalogue — le catalogue représente votre gamme, tandis que le stock représente chaque appareil physique que vous possédez.',
        tip: 'Photographiez chaque unité lors de son ajout — cela facilitera son identification à la sortie et au retour en cas de dommages.',
      },
      {
        title: 'Parcourir et filtrer le stock',
        content: 'La liste des stocks permet de filtrer par catégorie (Audio, Vidéo, Éclairage, etc.), état technique et emplacement de stockage. Vous pouvez également rechercher par numéro de série ou par nom. Chaque unité affiche son statut actuel — Disponible, Affecté à un événement, En maintenance ou Hors service — vous offrant ainsi une vision instantanée de l\'état de vos actifs.',
      },
      {
        title: 'Affecter le matériel aux événements',
        content: 'Ouvrez un événement ou un devis et accédez à l\'onglet Stocks. Cliquez sur « Affecter du matériel » et sélectionnez des unités précises dans la liste des ressources disponibles. Le système vérifie automatiquement les conflits de calendrier — si une unité est déjà affectée à un autre événement à la même date, vous en serez informé avant de confirmer l\'affectation.',
        tip: 'Affectez le matériel le plus tôt possible pour éviter les doubles réservations en période de forte activité événementielle.',
      },
      {
        title: 'Suivre la disponibilité',
        content: 'La vue calendrier dans la section Stocks présente chaque unité de matériel sur un axe temporel avec les réservations enregistrées. Vous pouvez vérifier rapidement quels appareils sont libres à une date donnée et lesquels sont déjà occupés. Les conflits sont signalés en rouge, ce qui facilite la planification de l\'équipe technique et la coordination du transport.',
      },
      {
        title: 'Gérer la maintenance',
        content: 'Pour chaque unité, vous pouvez enregistrer des entrées de service : date d\'inspection, description des travaux effectués, coût et planification du prochain entretien. Le matériel signalé comme « En maintenance » est automatiquement exclu des ressources disponibles lors de la planification des événements. L\'historique des interventions est entièrement consultable et exportable.',
      },
    ],
  },
  {
    slug: 'supplier-work-orders',
    title: 'Sous-traiter une partie du projet',
    description: '\u00c9mettez un bon de commande \u00e0 un revendeur ou un loueur : son p\u00e9rim\u00e8tre, son prix, et rien sur votre client.',
    duration: '6 min',
    difficulty: 'intermediate',
    category: 'Setup',
    mode: 'both',
    videoUrl: '',
    whatYouLearn: [
      '\u00c9mettre un bon depuis un projet, en mode AV et organisateur',
      'Ce que voit un prestataire \u2014 et les donn\u00e9es client qui ne sortent jamais',
      'Assurance v\u00e9rifi\u00e9e \u00e0 votre date de d\u00e9montage, pas \u00e0 aujourd\'hui',
      'Accepter, r\u00e9voquer, et ce qui est conserv\u00e9 sur le bon',
      'Combien de bons chaque formule garde actifs',
    ],
    steps: [
      {
        title: 'Ouvrez l\'onglet Prestataires',
        content: 'Ouvrez un projet comportant des lignes, allez dans l\'onglet Prestataires et cliquez \u00ab Sous-traiter \u00bb. En mode AV vous cochez des lignes. En mode organisateur vous attribuez une section enti\u00e8re \u2014 Traiteur, Production, Transport \u2014 d\'un coup.',
        tip: 'Les prestataires se cr\u00e9ent dans un projet et nulle part ailleurs : vous ne partez jamais d\'un annuaire vide \u00e0 remplir.',
      },
      {
        title: 'Choisissez ou cr\u00e9ez le prestataire',
        content: 'Choisissez un prestataire existant ou cr\u00e9ez-le sur place avec un simple nom. Renseignez au passage l\'expiration de sa RC pro : sans date d\'assurance, aucun bon ne peut partir, et c\'est le seul moment o\u00f9 vous avez la r\u00e9ponse sous les yeux.',
      },
      {
        title: 'V\u00e9rifiez le p\u00e9rim\u00e8tre envoy\u00e9',
        content: 'Le texte est r\u00e9dig\u00e9 \u00e0 partir des lignes choisies : il d\u00e9crit ce que le prestataire fournit, pas ce qu\'est l\'\u00e9v\u00e9nement. Modifiez-le si besoin \u2014 c\'est ce qu\'il signe. S\'il nomme votre client, CueQuote refuse d\'\u00e9mettre et indique la ligne \u00e0 corriger.',
        tip: 'Les descriptions de lignes sont \u00e9crites pour votre client et sont reprises sur le bon. C\'est pourquoi le contr\u00f4le les lit aussi, pas seulement votre texte.',
      },
      {
        title: 'Envoyez le lien et obtenez une r\u00e9ponse',
        content: 'Copiez le lien vers le prestataire. Il l\'ouvre sans connexion et voit son p\u00e9rim\u00e8tre, son prix, le lieu, le cr\u00e9neau de montage et le contact sur site \u2014 jamais le client final, jamais votre prix de vente. Il accepte en saisissant son nom ; date, heure et r\u00e9ponse sont conserv\u00e9es sur le bon.',
      },
      {
        title: 'R\u00e9voquez en cas de changement',
        content: 'Si le projet change ou si le lien a \u00e9t\u00e9 transf\u00e9r\u00e9, r\u00e9voquez-le. La lecture et l\'acceptation s\'arr\u00eatent aussit\u00f4t, et le prestataire voit le m\u00eame message qu\'avec un lien erron\u00e9. Une r\u00e9vocation lib\u00e8re aussi une place : formule gratuite 2 bons actifs, Starter 10, Pro et au-del\u00e0 illimit\u00e9.',
        tip: 'Un lien r\u00e9voqu\u00e9 qui pourrait encore confirmer une r\u00e9servation serait pire qu\'un lien montrant encore un nom de lieu \u2014 les deux moiti\u00e9s se ferment donc ensemble.',
      },
    ],
  },
  {
    slug: 'crew-scheduling',
    title: 'Planification de l\'équipe technique',
    description: 'Gérez votre liste d\'équipe technique — salariés et freelances — affectez-les aux événements, générez des fiches de préparation et consultez le calendrier de disponibilité.',
    duration: '5 min',
    difficulty: 'intermediate',
    category: 'Configuration',
    mode: 'av',
    whatYouLearn: [
      'Ajouter des membres d\'équipe avec leurs rôles, tarifs et disponibilités',
      'Filtrer la liste de l\'équipe par spécialisation, statut d\'emploi et disponibilité',
      'Affecter l\'équipe aux événements avec les rôles et horaires de travail',
      'Générer des fiches de préparation d\'équipe avec planning et liste de matériel',
      'Consulter le calendrier de disponibilité pour éviter les conflits',
    ],
    steps: [
      {
        title: 'Ajouter des membres d\'équipe',
        content: 'Accédez à la section Équipe depuis la barre latérale et cliquez sur « Ajouter un membre ». Renseignez le nom complet, la spécialisation (Ingénieur du son, Technicien lumière, Opérateur vidéo, Directeur technique, Chauffeur, etc.), le tarif journalier ou horaire, les coordonnées et le type d\'emploi (Salarié ou Freelance). Vous pouvez également ajouter des notes sur les certifications ou compétences particulières.',
        tip: 'Enregistrez le numéro de téléphone personnel de chaque technicien — indispensable en cas de changement de dernière minute dans la composition de l\'équipe.',
      },
      {
        title: 'Filtrer la liste de l\'équipe',
        content: 'La liste de l\'équipe technique peut être filtrée par spécialisation, statut d\'emploi (Salarié/Freelance) et disponibilité sur une plage de dates. Vous trouvez ainsi rapidement les techniciens adéquats sans parcourir manuellement toute la liste. Chaque fiche indique le statut de disponibilité actuel de la personne concernée.',
      },
      {
        title: 'Affecter l\'équipe aux événements',
        content: 'Dans la vue événement, accédez à l\'onglet Équipe et cliquez sur « Affecter des membres ». Sélectionnez les techniciens dans la liste des ressources disponibles, précisez le rôle pour cet événement précis et indiquez les horaires de travail prévus. Le système vérifie les conflits de calendrier en temps réel — si un technicien est déjà occupé à la même date, vous en serez immédiatement informé.',
        tip: 'Désignez un directeur technique pour chaque événement — cela améliore la communication sur site et facilite la coordination logistique.',
      },
      {
        title: 'Générer les fiches de préparation d\'équipe',
        content: 'Une fois la composition de l\'équipe finalisée, cliquez sur « Générer la fiche d\'équipe » pour télécharger un PDF avec le planning complet de l\'équipe technique. Le document comprend la liste des techniciens affectés avec leurs rôles, le calendrier des arrivées et des pauses, la liste du matériel à charger, les coordonnées du lieu ainsi que les instructions particulières. Les fiches peuvent être envoyées directement par e-mail à chaque technicien.',
      },
      {
        title: 'Consulter le calendrier d\'équipe',
        content: 'Le calendrier de l\'équipe technique présente tous les membres sur un axe temporel commun avec leurs affectations enregistrées. Vous identifiez ainsi instantanément les techniciens disponibles à une date donnée et évaluez la charge de travail de l\'ensemble de l\'équipe. Cette vue est particulièrement utile pour planifier plusieurs événements simultanés et optimiser l\'utilisation des ressources humaines.',
      },
    ],
  },
  {
    slug: 'proposal-comparison',
    title: 'Comparaison de devis',
    description: 'Comparez les devis de fournisseurs via des jetons de partage, des scores de valeur, la comparaison ligne à ligne, les conditions et les recommandations IA.',
    duration: '4 min',
    difficulty: 'intermediate',
    category: 'Devis',
    mode: 'both',
    whatYouLearn: [
      'Ajouter des devis fournisseurs à comparer via des liens de partage',
      'Consulter les fiches fournisseurs avec scores de valeur et indicateurs clés',
      'Comparer les postes de coût entre les devis des fournisseurs',
      'Rapprocher les conditions de paiement, pénalités et exclusions de responsabilité',
    ],
    steps: [
      {
        title: 'Ajouter des devis à comparer',
        content: 'Accédez à la section Comparaison de devis et cliquez sur « Ajouter un devis ». Collez le jeton de partage ou le lien d\'un devis fournisseur — CueQuote récupère automatiquement les données du devis et l\'ajoute au tableau comparatif. Vous pouvez ajouter jusqu\'à 5 devis simultanément. Chaque devis ajouté est validé en termes de complétude et de sections requises.',
        tip: 'Demandez aux fournisseurs de partager leurs devis directement via CueQuote — les jetons de partage garantissent que vous comparez les versions actuelles des documents.',
      },
      {
        title: 'Consulter les fiches fournisseurs',
        content: 'Chaque fournisseur est présenté sur une fiche distincte avec un score de valeur calculé automatiquement (0-100), le prix total, le nombre de postes et les paramètres clés du devis. Le score de valeur tient compte du rapport prix/étendue des prestations et de la qualité des conditions. Les fiches peuvent être triées par prix, score de valeur ou nom du fournisseur.',
      },
      {
        title: 'Comparer les postes de coût',
        content: 'La vue de comparaison des postes rassemble chaque ligne de coût de tous les devis dans un seul tableau. Les postes manquants (lorsqu\'un fournisseur a chiffré quelque chose qu\'un autre n\'a pas pris en compte) sont clairement signalés, facilitant l\'évaluation de l\'exhaustivité des périmètres. La vue peut être filtrée par catégorie (Audio, Vidéo, Éclairage, etc.) ou triée par écart de prix.',
      },
      {
        title: 'Rapprocher les conditions et exclusions',
        content: 'L\'onglet Conditions présente côte à côte les échéanciers de paiement, politiques d\'annulation, exclusions de responsabilité et dates d\'expiration des devis de tous les fournisseurs. Les différences sont automatiquement surlignées en jaune afin que vous ne manquiez aucun écart significatif dans les conditions contractuelles.',
      },
      {
        title: 'Utiliser la recommandation IA',
        content: 'Cliquez sur « Analyse IA » pour obtenir une évaluation automatique des devis collectés. L\'IA identifie la meilleure proposition en termes de valeur, détecte les postes manquants chez chaque fournisseur, signale les clauses non standard méritant attention et formule une recommandation argumentée. L\'analyse est prête à être copiée-collée dans un rapport décisionnel destiné à votre client.',
      },
    ],
  },
  {
    slug: 'proposal-comments',
    title: 'Commentaires sur les devis',
    description: 'Les clients peuvent laisser des commentaires directement dans le devis, référencer des postes précis, soumettre des demandes de révision, et le titulaire du compte peut leur répondre.',
    duration: '3 min',
    difficulty: 'beginner',
    category: 'Devis',
    mode: 'both',
    whatYouLearn: [
      'Comment les clients ajoutent des commentaires sur un devis et référencent des postes',
      'Soumettre des demandes de révision formalisées avec description des modifications',
      'Répondre aux commentaires clients depuis l\'éditeur de devis',
      'Marquer les révisions comme résolues et gérer l\'historique des modifications',
    ],
    steps: [
      {
        title: 'Commentaires du client',
        content: 'Sur la page de partage du devis, le client voit une icône de commentaire à côté de chaque poste ainsi qu\'un bouton « Ajouter un commentaire » dans la section récapitulative. Un clic ouvre le panneau de commentaire où le client peut décrire ses interrogations ou questions. Le commentaire apparaît immédiatement dans l\'éditeur de devis du titulaire du compte — sans rechargement de page.',
        tip: 'Informez votre client de la possibilité de commenter lors de l\'envoi du devis — cela raccourcit considérablement le cycle de révision par rapport aux échanges par e-mail.',
      },
      {
        title: 'Demandes de révision',
        content: 'Le client peut formaliser une demande de modification en cliquant sur « Demander une révision » pour un poste spécifique ou pour l\'ensemble du devis. Dans le formulaire, il décrit les modifications souhaitées (par ex. changement de quantité, remplacement d\'un poste, modification des conditions de paiement). La demande arrive dans l\'éditeur de devis signalée comme nécessitant une attention, accompagnée d\'un numéro de référence pour le suivi.',
      },
      {
        title: 'Réponses du titulaire du compte',
        content: 'Ouvrez le devis dans l\'éditeur et accédez à l\'onglet Commentaires. Un champ de réponse apparaît à côté de chaque commentaire client. Vous pouvez répondre avec une explication, confirmer une modification apportée ou demander des précisions. La réponse est immédiatement visible par le client sur la page de partage du devis. L\'intégralité de la correspondance est archivée dans un fil chronologique.',
      },
      {
        title: 'Résoudre les révisions',
        content: 'Après avoir appliqué les modifications demandées dans le devis, cliquez sur « Marquer comme résolu » pour la demande de révision concernée. Le statut passe à Résolu et est visible aussi bien par vous que par le client. Vous pouvez filtrer les commentaires par statut (Ouvert, Résolu, Tous), ce qui facilite le suivi de l\'avancement des négociations et la finalisation du document.',
      },
    ],
  },
  {
    slug: 'costing-margins',
    title: 'Coûts et marges',
    description: 'Configurez la visibilité des coûts, définissez des objectifs de marge, renseignez les prix de revient, surveillez les alertes de marge et suivez la rentabilité — les coûts ne sont jamais affichés aux clients.',
    duration: '5 min',
    difficulty: 'advanced',
    category: 'Configuration',
    mode: 'av',
    whatYouLearn: [
      'Configurer la visibilité des coûts et l\'accès au panneau de marges selon les rôles de l\'équipe',
      'Définir des seuils de marge cibles à l\'échelle de l\'entreprise et par devis',
      'Ajouter des prix de revient aux postes du catalogue et des devis',
      'Surveiller les alertes de marge et traiter les postes en dessous du seuil de rentabilité',
      'Suivre le bénéfice brut et la marge globale dans le tableau de bord analytique',
    ],
    steps: [
      {
        title: 'Configurer la visibilité des coûts',
        content: 'Accédez à Paramètres → onglet Devis et trouvez la section « Visibilité des coûts ». Vous définissez quels rôles de l\'équipe peuvent accéder au panneau de marges dans l\'éditeur de devis (Owner, Admin, Sales ou Viewer). Les coûts et marges ne sont jamais exportés dans le PDF ni affichés sur la page de partage — ce sont des outils analytiques strictement internes à votre entreprise.',
        tip: 'Limitez la visibilité des coûts aux rôles Owner et Admin si vous souhaitez que l\'équipe commerciale se concentre sur la valeur du devis plutôt que sur les marges.',
      },
      {
        title: 'Définir les objectifs de marge',
        content: 'Dans la section Coûts et marges des Paramètres, définissez le seuil de marge cible à l\'échelle de l\'entreprise (par ex. 35 %). Vous pouvez également remplacer cet objectif pour un devis spécifique directement depuis l\'éditeur. Lorsque la marge d\'un devis tombe en dessous du seuil, une alerte jaune apparaît dans l\'en-tête de l\'éditeur, visible uniquement par l\'utilisateur autorisé. Le seuil s\'affiche également comme ligne de référence sur le graphique des marges.',
      },
      {
        title: 'Ajouter les prix de revient',
        content: 'Les prix de revient peuvent être ajoutés à deux niveaux : dans le catalogue de matériel (comme coût par défaut pour un article donné) et directement dans l\'éditeur de devis pour un poste spécifique. Cliquez sur l\'icône coût à côté de n\'importe quel poste pour saisir ou modifier le prix de revient. Le prix de revient est automatiquement repris depuis le catalogue lors de l\'ajout du poste — vous pouvez le remplacer pour un devis précis.',
        tip: 'Pour votre propre matériel, laissez le coût vide ou saisissez la valeur d\'amortissement. Pour le matériel sous-loué, renseignez toujours le tarif actuel du fournisseur.',
      },
      {
        title: 'Surveiller les marges et les alertes',
        content: 'Le panneau de marges dans l\'éditeur de devis affiche pour chaque poste : chiffre d\'affaires, coût, bénéfice et marge %. Les postes en dessous de la marge cible sont signalés par une icône d\'avertissement rouge. En bas du panneau figure un récapitulatif de l\'ensemble du devis : CA total, coût total, bénéfice brut et marge globale — comparés à l\'objectif. Cliquez sur n\'importe quel poste pour modifier directement son prix de revient ou son prix de vente.',
      },
      {
        title: 'Suivre les bénéfices dans le tableau de bord',
        content: 'Le tableau de bord analytique (Paramètres → Analyses ou l\'onglet Dashboard dédié) présente des synthèses mensuelles et trimestrielles du bénéfice brut sur l\'ensemble des devis envoyés et gagnés. Les graphiques de tendance visualisent l\'évolution des marges dans le temps, et un classement des postes identifie votre matériel le plus et le moins rentable. Les données sont filtrables par statut de devis, client et période.',
      },
    ],
  },
  {
    slug: 'vendor-management',
    title: 'Gestion des prestataires AV',
    description: 'Ajoutez des prestataires AV à votre réseau, gérez vos contacts et suivez vos relations fournisseurs — pour toujours savoir qui appeler quand vous avez besoin de matériel.',
    duration: '4 min',
    difficulty: 'beginner',
    category: 'Planificateur',
    mode: 'planner',
    icon: '🏪',
    whatYouLearn: [
      'Ajouter des entreprises et des contacts à votre liste de prestataires AV',
      'Catégoriser les prestataires par spécialité (Son, Vidéo, Éclairage, Clé en main)',
      'Consigner des notes et l\'historique des collaborations',
      'Envoyer des demandes de devis directement depuis un événement',
      'Maintenir une liste de prestataires privilégiés organisée et à jour',
    ],
    steps: [
      {
        title: 'Accéder à la section Prestataires',
        content: 'Cliquez sur « Prestataires » dans la barre latérale. Il s\'agit de votre carnet d\'adresses AV — une liste centralisée de tous les prestataires avec lesquels vous travaillez ou souhaitez travailler. Chaque fiche prestataire affiche le nom de l\'entreprise, le contact principal, la spécialité, la localisation et un badge de statut : actif, privilégié ou nouveau.',
      },
      {
        title: 'Ajouter un nouveau prestataire',
        content: 'Cliquez sur « Ajouter un prestataire » et renseignez les coordonnées de l\'entreprise : nom, site web, ville et pays, et spécialité AV (Son, Vidéo, Éclairage, Interprétation simultanée, AV clé en main ou Autre). Ajoutez les informations du contact principal : nom, e-mail et téléphone. Vous pouvez ajouter plusieurs contacts par prestataire — utile pour les grandes sociétés où les équipes commerciales et techniques sont distinctes.',
        tip: 'Ajoutez les prestataires au fil du temps, même avant d\'avoir travaillé avec eux. Une liste étendue vous offre plus d\'options pour sourcer des événements atypiques ou à fortes exigences techniques.',
      },
      {
        title: 'Définir le statut et les étiquettes du prestataire',
        content: 'Attribuez un statut à chaque prestataire : Privilégié (prestataires que vous recommandez activement ou utilisez régulièrement), Actif (prestataires éprouvés que vous seriez prêt à remandater), Prospect (en cours d\'évaluation) ou Inactif (collaboration arrêtée). Ajoutez des étiquettes comme « outdoor », « murs LED » ou « rigging » pour filtrer rapidement les prestataires selon les exigences d\'un événement précis.',
      },
      {
        title: 'Consigner des notes sur la relation',
        content: 'Cliquez sur un prestataire pour ouvrir sa vue détaillée. Utilisez la section Notes pour consigner le contexte important : délais de préparation habituels, montants minimum de commande, canaux de communication préférés, tendances tarifaires ou problèmes passés à connaître. Les notes sont strictement internes — les prestataires ne les voient jamais. Elles sont précieuses quand un collègue sollicite un prestataire que vous connaissez bien.',
        tip: 'Notez le délai de réponse habituel du prestataire aux demandes de devis. Cela vous aide à déterminer quand envoyer votre demande en fonction du calendrier de l\'événement.',
      },
      {
        title: 'Envoyer une demande de devis',
        content: 'Depuis n\'importe quel événement de votre tableau de bord planificateur, ouvrez l\'onglet Approvisionnement et cliquez sur « Demander un devis ». Sélectionnez un ou plusieurs prestataires de votre liste, choisissez les catégories de matériel concernées, fixez une date limite de réponse et ajoutez des notes ou exigences techniques spécifiques. CueQuote envoie une demande de devis structurée à chaque prestataire sélectionné avec les détails de l\'événement et vos exigences préremplies.',
      },
      {
        title: 'Suivre les demandes et les réponses',
        content: 'Toutes les demandes de devis envoyées apparaissent dans l\'onglet Approvisionnement avec leur statut : Envoyée, Vue, Répondue ou Refusée. Lorsqu\'un prestataire répond avec un devis CueQuote, celui-ci apparaît automatiquement dans la vue Comparaison de devis. S\'il répond par e-mail ou par fichier, vous pouvez téléverser son devis manuellement et le lier à la demande — tout reste au même endroit.',
        tip: 'Envoyez des demandes à au moins 2-3 prestataires par catégorie de matériel. La concurrence maintient des prix honnêtes et vous donne une alternative si votre prestataire privilégié est indisponible.',
      },
    ],
  },
  {
    slug: 'quote-comparison',
    title: 'Comparer les devis des prestataires',
    description: 'Recevez des devis de plusieurs prestataires AV, comparez-les côte à côte sur le prix et le périmètre, et sélectionnez le meilleur fournisseur pour votre événement.',
    duration: '5 min',
    difficulty: 'intermediate',
    category: 'Planificateur',
    mode: 'planner',
    icon: '📊',
    whatYouLearn: [
      'Charger les devis des prestataires dans la vue de comparaison',
      'Lire les fiches récapitulatives et les scores de valeur',
      'Comparer les postes entre prestataires avec les indicateurs Moins cher / Plus cher',
      'Examiner les conditions de paiement et les politiques d\'annulation côte à côte',
      'Utiliser le panneau de recommandations IA pour obtenir un classement',
      'Sélectionner un prestataire et mettre à jour le statut de l\'événement',
    ],
    steps: [
      {
        title: 'Ouvrir la vue Comparaison de devis',
        content: 'Depuis le tableau de bord des événements, ouvrez l\'événement pour lequel vous sourcez et cliquez sur l\'onglet « Comparaison de devis ». Si vous avez déjà envoyé des demandes et que des prestataires ont répondu avec des devis CueQuote, leurs propositions apparaissent automatiquement. Si les prestataires ont répondu par e-mail ou par fichier, cliquez sur « Ajouter un devis » et collez le lien de partage CueQuote ou téléversez le document manuellement.',
        tip: 'Vous pouvez ajouter jusqu\'à 4 devis dans une comparaison. C\'est suffisant pour la plupart des décisions de sourcing — au-delà, la comparaison devient difficile à lire.',
      },
      {
        title: 'Lire les fiches récapitulatives des prestataires',
        content: 'Chaque prestataire dispose d\'une fiche récapitulative en haut de la comparaison : nom de l\'entreprise, prix total dans la devise de l\'événement, date de validité du devis et score de valeur (1-10). Le score de valeur est un composite de la compétitivité du prix, de l\'exhaustivité du périmètre et de la flexibilité des conditions de paiement. Le prestataire avec le prix total le plus bas est mis en évidence en vert — un repère visuel rapide pour les décisions budgétaires.',
      },
      {
        title: 'Comparer les postes en détail',
        content: 'Faites défiler jusqu\'au tableau de comparaison des postes. Les postes sont regroupés par catégorie (Son, Vidéo, Éclairage, Main-d\'œuvre, Transport) et mis en correspondance entre tous les prestataires. Le prix le moins cher pour chaque poste reçoit un badge vert « Moins cher » ; le plus cher reçoit un badge ambré. Les postes qu\'un prestataire n\'a pas inclus apparaissent comme un tiret — ces écarts révèlent souvent les vraies différences de prix. Un prestataire proposant un total 10 % moins élevé mais avec 5 postes manquants peut s\'avérer plus cher une fois ces éléments sourcés séparément.',
        tip: 'Portez une attention particulière aux postes Main-d\'œuvre et Transport — ils sont fréquemment omis dans les devis initiaux pour rendre le prix global plus attractif.',
      },
      {
        title: 'Examiner les conditions de paiement et les politiques d\'annulation',
        content: 'La section Conditions affiche l\'échéancier de paiement de chaque prestataire côte à côte : pourcentage d\'acompte, date d\'échéance du solde et politique d\'annulation. Un prestataire demandant 100 % à l\'avance représente un risque de trésorerie comparé à celui qui demande 30 % à l\'acceptation et 70 % deux semaines avant l\'événement. Intégrez les conditions de paiement dans votre évaluation globale — un prix légèrement plus élevé avec de meilleures conditions peut être plus avantageux pour votre client.',
      },
      {
        title: 'Générer la recommandation IA',
        content: 'Cliquez sur « Générer une recommandation IA » dans la barre d\'outils de comparaison. L\'IA analyse tous les devis chargés en termes de prix, périmètre, conditions et exhaustivité, puis produit un classement avec un texte explicatif. Elle indique quel prestataire offre la meilleure valeur globale pour votre événement spécifique, les points faibles de chaque offre, et ce qu\'il convient de renégocier avant d\'attribuer le contrat.',
        tip: 'Utilisez la recommandation IA comme point de départ — c\'est un moyen rapide de synthétiser des données complexes. Appliquez toujours votre propre jugement en fonction de votre relation avec le prestataire et des enjeux de l\'événement.',
      },
      {
        title: 'Sélectionner un prestataire et mettre à jour l\'événement',
        content: 'Une fois votre décision prise, cliquez sur « Sélectionner ce prestataire » sur la fiche du gagnant. Le statut de l\'événement passe à « Prestataire confirmé » et le devis du prestataire sélectionné est lié comme devis principal de l\'événement. CueQuote envoie automatiquement une notification au prestataire choisi et, en option, une notification de refus aux autres. Le total du devis accepté alimente automatiquement le suivi du budget de l\'événement.',
      },
    ],
  },
  {
    slug: 'market-rate-budgets',
    title: 'Estimations budgétaires aux tarifs du marché',
    description: 'Comprenez comment l\'IA de CueQuote génère des fourchettes budgétaires AV réalistes pour vos événements, et utilisez ces estimations pour planifier efficacement avant de contacter les prestataires.',
    duration: '4 min',
    difficulty: 'beginner',
    category: 'Planificateur',
    mode: 'planner',
    icon: '💰',
    whatYouLearn: [
      'Comment l\'IA génère des fourchettes budgétaires basse et haute pour les événements AV',
      'Les facteurs qui influencent l\'estimation (participants, lieu, type de matériel)',
      'Lire la ventilation budgétaire par catégorie',
      'Utiliser les estimations en phase de planification précoce',
      'Comprendre les recommandations d\'équipe incluses dans l\'estimation',
      'Savoir quand passer d\'une estimation à un devis en direct',
    ],
    steps: [
      {
        title: 'Créer un événement et demander une estimation budgétaire',
        content: 'Depuis le tableau de bord planificateur, cliquez sur « Nouvel événement » et renseignez les informations de base : nom, type (conférence, gala, lancement de produit, etc.), date, nom et ville du lieu, et nombre de participants attendus. Une fois l\'événement créé, accédez à l\'onglet Budget et cliquez sur « Générer une estimation budgétaire ». Dans le champ de texte, décrivez vos besoins AV — plus vous donnez de détails, plus la fourchette sera précise.',
        tip: 'Même une description sommaire comme « conférence d\'entreprise pour 300 personnes, scène principale, salles de sous-groupes » donne à l\'IA suffisamment de contexte pour produire une fourchette utile. Vous pouvez affiner plus tard.',
      },
      {
        title: 'Comprendre la fourchette basse et haute',
        content: 'CueQuote retourne une estimation sous forme de fourchette, pas d\'un chiffre unique — par exemple « 14 500 USD – 22 000 USD ». L\'extrémité basse reflète une configuration légère avec du matériel standard et un prestataire local ; l\'extrémité haute reflète du matériel haut de gamme, plusieurs systèmes redondants et un prestataire clé en main avec son équipe. Votre devis réel se situera généralement quelque part entre les deux, selon le choix du prestataire et la spécification finale.',
      },
      {
        title: 'Lire la ventilation par catégorie',
        content: 'Sous la fourchette principale, l\'estimation est détaillée par catégorie AV : Son, Vidéo, Éclairage, Scène, Interprétation simultanée (le cas échéant), Main-d\'œuvre et Transport. Chaque catégorie dispose de sa propre fourchette basse-haute et d\'un pourcentage du budget total. Cette ventilation aide à prioriser — si un client a un budget fixe, vous voyez immédiatement où réduire (par exemple, diminuer le budget éclairage pour préserver le budget son lors d\'un événement dominé par des conférences).',
        tip: 'La main-d\'œuvre représente généralement 25-35 % d\'un budget AV clé en main. Si le poste main-d\'œuvre semble faible dans votre estimation, vérifiez que les jours de montage et de démontage multi-journées sont bien pris en compte dans la description de l\'événement.',
      },
      {
        title: 'Examiner les recommandations d\'équipe',
        content: 'L\'estimation inclut une liste d\'équipe recommandée pour votre événement : rôles (ingénieur son FOH, opérateur lumière, technicien vidéo, directeur de scène, etc.), effectif suggéré par rôle et nombre de jours de travail requis. Ces recommandations sont déterminées par le nombre de participants, le type d\'événement et la complexité du matériel. Utilisez-les comme guide d\'effectif lors du brief des prestataires ou de l\'examen des postes d\'équipe dans les devis reçus.',
      },
      {
        title: 'Utiliser l\'estimation dans les échanges avec le client',
        content: 'Partagez l\'estimation budgétaire avec votre client tôt dans le processus de planification pour aligner les dépenses AV avant d\'aller sur le marché. L\'estimation est formatée comme un résumé clair que vous pouvez copier ou exporter — il présente la fourchette, la ventilation par catégorie et une note indiquant que le prix final dépendra du choix du prestataire et de la spécification complète. Aligner les attentes budgétaires du client en amont évite des conversations difficiles à l\'arrivée des devis.',
        tip: 'Si le budget déclaré par le client est nettement inférieur à l\'extrémité basse de votre estimation, signalez-le immédiatement. Mieux vaut ajuster le périmètre ou les attentes avant d\'envoyer des appels d\'offres qu\'après leur réception.',
      },
      {
        title: 'Savoir quand passer de l\'estimation au devis en direct',
        content: 'Les estimations budgétaires sont des outils de planification — elles ne remplacent pas les devis des prestataires. Utilisez-les en phase de planification précoce, lors des discussions budgétaires avec le client et pour les validations budgétaires internes. Une fois le cahier des charges finalisé (lieu confirmé, programme défini, fiche technique disponible), passez au sourcing en direct via l\'onglet Prestataires. L\'estimation vous donne l\'assurance que les devis reçus s\'inscrivent dans une fourchette raisonnable du marché.',
      },
    ],
  },
  {
    slug: 'feedback-support',
    title: 'Retours & Support',
    description: 'Signalez des bugs, demandez des fonctionnalités ou obtenez de l\'aide — sans quitter l\'application.',
    duration: '3 min',
    difficulty: 'beginner',
    category: 'Bases',
    mode: 'both',
    videoUrl: '',
    whatYouLearn: [
      'Comment envoyer des retours, signaler des bugs et demander des fonctionnalités',
      'Suivre le statut de vos demandes',
      'Obtenir de l\'aide directement depuis l\'application',
      'Utiliser le Centre d\'aide pour des réponses rapides',
    ],
    steps: [
      {
        title: 'Accéder à Retours & Support',
        content: 'Cliquez sur « Retours & Support » dans la barre latérale pour accéder à votre ligne directe avec l\'équipe CueQuote.',
      },
      {
        title: 'Choisir le type de retour',
        content: 'Choisissez parmi : Signalement de bug, Demande de fonctionnalité, Retour général ou Demande d\'assistance.',
        tip: 'L\'application capture automatiquement votre navigateur, plan et contexte de page lors de la soumission.',
      },
      {
        title: 'Remplir les détails et envoyer',
        content: 'Saisissez l\'objet et la description puis cliquez « Envoyer » — votre demande est enregistrée immédiatement dans l\'onglet Mes demandes.',
      },
      {
        title: 'Suivre vos demandes',
        content: 'Dans l\'onglet « Mes demandes », consultez toutes vos demandes avec leur badge de statut : Soumis, En cours d\'examen, Planifié ou Livré.',
      },
      {
        title: 'Utiliser le Centre d\'aide',
        content: 'L\'onglet « Centre d\'aide » contient des liens vers des tutoriels, la documentation et des réponses aux questions fréquentes.',
      },
    ],
  },
  {
    slug: 'catalog-suggestions',
    title: 'Développer votre catalogue avec l\'IA',
    description: 'Quand l\'IA utilise des articles absents de votre catalogue, ajoutez-les en un clic.',
    duration: '2 min',
    difficulty: 'beginner',
    category: 'Configuration',
    mode: 'av',
    videoUrl: '',
    whatYouLearn: [
      'Comment l\'IA signale les articles absents de votre catalogue',
      'Ajouter les articles suggérés au catalogue en un clic',
      'Ajouter toutes les suggestions en une fois',
      'Pourquoi les prix du catalogue rendent les futurs devis plus précis',
    ],
    steps: [
      {
        title: 'Générer un devis avec l\'IA',
        content: 'Créez un nouveau devis. Les articles absents de votre catalogue sont marqués [CUSTOM] avec un prix estimé aux tarifs du marché.',
      },
      {
        title: 'Consulter la barre de suggestions',
        content: 'Après la génération, une barre de suggestions ambrée apparaît à l\'étape Révision. Cliquez dessus pour voir les nouveaux articles avec leurs prix suggérés.',
        tip: 'Le prix suggéré est basé sur les tarifs du marché — ajustez-le après l\'avoir ajouté au catalogue.',
      },
      {
        title: 'Ajouter des articles au catalogue',
        content: 'Cliquez « Ajouter au catalogue » sur un article individuel ou « Tout ajouter » pour tout sauvegarder en une fois.',
      },
      {
        title: 'Les futurs devis utilisent vos prix exacts',
        content: 'Une fois les articles dans votre catalogue, l\'IA utilisera votre prix de catalogue plutôt qu\'une estimation lors des prochains devis.',
      },
    ],
  },
  {
    slug: 'planner-budget-review',
    title: 'Comprendre votre budget événementiel',
    description: 'Lisez et utilisez le plan budgétaire généré par l\'IA en mode Planificateur.',
    duration: '7 min',
    difficulty: 'beginner',
    category: 'Planificateur',
    mode: 'planner',
    videoUrl: '',
    whatYouLearn: [
      'Lire le plan par section et renommer les sections soi-m\u00eame',
      'Lire la vue d\'ensemble du budget avec la fourchette basse-haute',
      'Comprendre les recommandations d\'équipe et les rôles',
      'Utiliser le calendrier événementiel pour la planification',
      'Appliquer les conseils pro lors du travail avec les prestataires AV',
      'Comprendre les inclusions et exclusions',
      'Chiffrer les jours de montage et de d\u00e9montage comme un organisateur les paie',
      'Trancher les notes de planification dans l\'\u00e9diteur et rep\u00e9rer quand elles sont p\u00e9rim\u00e9es',
      'Lire la v\u00e9rification des prix du march\u00e9 et la liste du p\u00e9rim\u00e8tre non couvert',
    ],
    steps: [
      {
        title: 'Générer un plan budgétaire',
        content: 'Passez en mode Planificateur, décrivez votre événement et cliquez « Générer » pour obtenir un plan budgétaire complet aux tarifs du marché.',
      },
      {
        title: 'Consulter la vue d\'ensemble du budget',
        content: 'La section supérieure affiche votre budget estimé sous forme de fourchette — par exemple 12 500 € — 18 200 €. L\'extrémité basse correspond à une configuration allégée, l\'extrémité haute à du matériel premium avec équipe complète.',
        tip: 'Utilisez la fourchette pour fixer les attentes clients avant d\'aller sur le marché.',
      },
      {
        title: 'Vérifier les recommandations d\'équipe',
        content: 'La section Recommandations d\'équipe liste les rôles techniques requis avec le nombre de personnes et les fourchettes de tarif journalier.',
      },
      {
        title: 'Consulter le calendrier événementiel',
        content: 'Le calendrier suggère les phases de montage, show et démontage avec des estimations de temps et les jalons techniques clés.',
      },
      {
        title: 'Lire les conseils pro et inclusions/exclusions',
        content: 'Des conseils pratiques spécifiques à votre type d\'événement, et une clarification de ce que couvre l\'estimation budgétaire.',
      },
      {
        title: 'Indiquez au plan le temps dont vous disposez pour monter et d\u00e9monter',
        content: 'Dans le formulaire de nouvelle proposition, les jours de montage et de d\u00e9montage sont les jours o\u00f9 le lieu est \u00e0 vous avant et apr\u00e8s l\'\u00e9v\u00e9nement. En mode Planificateur, ils sont chiffr\u00e9s l\u00e0 o\u00f9 un organisateur paie r\u00e9ellement \u2014 occupation du lieu et temps des \u00e9quipes \u2014 et non comme des jours de location de mat\u00e9riel suppl\u00e9mentaires, d\'o\u00f9 l\'absence d\'option de tarif mat\u00e9riel \u00e0 c\u00f4t\u00e9. Si l\'\u00e9v\u00e9nement ne peut raisonnablement pas \u00eatre d\u00e9mont\u00e9 le dernier soir et que vous avez laiss\u00e9 le d\u00e9montage \u00e0 z\u00e9ro, le plan vous le signale.',
        tip: 'Demandez au lieu ses cr\u00e9neaux de load-in et de load-out avant de remplir ces champs. Une salle que vous n\'obtenez qu\'\u00e0 6h le jour J n\'a rien \u00e0 voir, budg\u00e9tairement, avec une salle disponible la veille au soir.',
      },
      {
        title: 'Lisez le plan par section, et nommez les sections vous-m\u00eame',
        content: 'Ouvrez la proposition : l\'onglet Plan regroupe vos lignes comme un organisateur pense un budget \u2014 Lieu, Traiteur, Production, Personnel, Transport et ainsi de suite, dans cet ordre, avec Autre en dernier. Cliquez sur le titre d\'une section pour la renommer : \u00ab Traiteur \u00bb devient \u00ab Restauration \u00bb si c\'est le mot de votre client. Les noms que vous choisissez se retrouvent dans le PDF et dans le lien que vous partagez avec le client.',
        tip: 'Renommez les sections avant l\'envoi, pas apr\u00e8s. Le client lit vos mots, et les accorder \u00e0 sa propre feuille de budget \u00e9vite une s\u00e9rie de questions.',
      },
      {
        title: 'Gardez les notes de planification utiles pendant l\'\u00e9dition',
        content: 'Ouvrez la proposition : les notes de planification se trouvent au-dessus de vos lignes dans l\'onglet Plan, comme des points \u00e0 trancher et non du texte \u00e0 faire d\u00e9filer. Cochez-en un une fois confirm\u00e9, ou marquez-le non applicable. Si vous changez ensuite le nombre de participants, de jours, le budget ou la date, le panneau nomme pr\u00e9cis\u00e9ment ce qui a boug\u00e9 \u2014 vous savez ainsi que le conseil reposait sur d\'autres chiffres.',
        tip: 'Les notes sont les questions auxquelles l\'IA ne pouvait pas r\u00e9pondre \u00e0 votre place : alimentation \u00e9lectrique, cr\u00e9neau de load-in, autorisations. C\'est g\u00e9n\u00e9ralement l\u00e0 qu\'une estimation devient un vrai budget.',
      },
      {
        title: 'V\u00e9rifiez les prix signal\u00e9s et les manques de p\u00e9rim\u00e8tre',
        content: 'Le m\u00eame panneau signale deux autres choses. Une v\u00e9rification des prix compare chaque ligne \u00e0 ce que cet \u00e9l\u00e9ment co\u00fbte habituellement dans la r\u00e9gion de votre \u00e9v\u00e9nement, en jugeant s\u00e9par\u00e9ment les tarifs mat\u00e9riel et les tarifs \u00e9quipe \u2014 un tarif journalier saisi comme horaire saute alors aux yeux. Une liste de p\u00e9rim\u00e8tre montre tout ce que votre brief joint demandait et que le plan ne couvre pas encore \u2014 traiteur, autorisations, photographie, transport des invit\u00e9s \u2014 et chaque entr\u00e9e dispara\u00eet d\u00e8s que vous ajoutez la ligne qui la comble.',
        tip: 'Les fourchettes de prix sont volontairement larges. Elles attrapent un z\u00e9ro manquant, pas 15% de divergence d\'opinion \u2014 lisez un signalement comme \u00ab\u00a0\u00e0 rev\u00e9rifier\u00a0\u00bb, pas \u00ab\u00a0c\'est faux\u00a0\u00bb.',
      },
    ],
  },
  {
    slug: 'multi-currency-pricing',
    title: 'Tarification multidevise',
    description: 'Définissez des prix par devise dans votre catalogue pour que les devis utilisent automatiquement le bon tarif sans conversion manuelle.',
    duration: '4 min',
    difficulty: 'intermediate',
    category: 'Configuration',
    mode: 'both',
    icon: '💱',
    whatYouLearn: [
      'Comment ajouter des prix en USD, EUR et d\'autres devises aux articles du catalogue',
      'Comment la génération de devis sélectionne le bon prix en devise',
      'Comment fonctionne la conversion automatique de repli en l\'absence de prix local',
      'Bonnes pratiques pour maintenir les prix multidevises à jour',
    ],
    steps: [
      {
        title: 'Ouvrir un article du catalogue pour modification',
        content: 'Accédez au Catalogue via la barre latérale et cliquez sur n\'importe quel article pour ouvrir son panneau de détails, puis cliquez sur Modifier. Sous le champ de prix par défaut, vous verrez une section « Prix multidevises ». C\'est ici que vous pouvez définir des prix dans des devises supplémentaires au-delà de la devise par défaut de votre entreprise.',
        tip: 'Commencez par les devises que vous utilisez le plus souvent — généralement EUR, USD et GBP pour les entreprises AV à dimension internationale.',
      },
      {
        title: 'Ajouter un prix pour chaque devise',
        content: 'Cliquez sur « Ajouter un prix en devise » et sélectionnez une devise dans la liste déroulante (EUR, USD, GBP, PLN, AED, EGP, CHF). Saisissez le tarif de location dans cette devise. Répétez l\'opération pour chaque devise supplémentaire. Chaque prix saisi est un tarif exact — non une conversion. Cela vous permet de refléter les prix du marché local et les tarifs négociés pour différentes régions.',
      },
      {
        title: 'Comprendre comment la génération de devis sélectionne le prix',
        content: 'Lorsque l\'IA génère un devis dans une devise spécifique, elle recherche d\'abord un prix catalogue correspondant dans cette même devise. Si vous avez défini un prix en USD pour un article et que le devis est en USD, ce prix exact est utilisé. Vos devis reflètent ainsi toujours vos vrais tarifs pour chaque marché — sans dépendre des taux de change flottants.',
        tip: 'Définissez des prix réalistes du marché local plutôt que de convertir votre devise d\'origine. Un système PA loué 500 €/jour en Pologne peut avoir un tarif marché différent à 600 $/jour aux États-Unis.',
      },
      {
        title: 'Conversion automatique de repli',
        content: 'Si un devis utilise une devise pour laquelle vous n\'avez pas défini de prix spécifique sur un article du catalogue, CueQuote convertit automatiquement votre prix en devise par défaut au taux de change du marché actuel. Le prix converti est signalé dans l\'éditeur de devis par une petite icône d\'échange afin que vous puissiez le vérifier avant l\'envoi. Vous pouvez remplacer manuellement tout prix converti automatiquement dans l\'éditeur.',
      },
      {
        title: 'Maintenir les prix à jour',
        content: 'Les prix multidevises sont statiques — ils ne se mettent pas à jour automatiquement avec les mouvements des taux de change. Révisez-les régulièrement (trimestriellement est un bon rythme) et mettez à jour les articles qui se sont significativement écartés des tarifs du marché actuels. Pour les articles sous-loués, alignez vos prix devise du catalogue sur la devise de facturation de votre fournisseur pour protéger vos marges.',
        tip: 'Ajoutez un rappel trimestriel dans votre agenda pour revoir vos 20 principaux articles du catalogue dans toutes les devises. Cinq minutes de maintenance des prix évitent des surprises de marge désagréables sur les grands devis.',
      },
    ],
  },
  {
    slug: 'proposal-approval-workflow',
    title: 'Workflow de validation des devis',
    description: 'Activez la validation interne pour que les devis soient examinés et approuvés par un responsable avant d\'atteindre les clients.',
    duration: '5 min',
    difficulty: 'intermediate',
    category: 'Devis',
    mode: 'both',
    icon: '✅',
    whatYouLearn: [
      'Activer le workflow de validation dans les Paramètres',
      'Comment soumettre un devis à l\'approbation d\'un responsable',
      'Le processus de revue du responsable et les commentaires internes',
      'Comprendre les statuts de validation (en attente, approuvé, rejeté)',
      'Ce qui arrive à un devis après approbation ou rejet',
    ],
    steps: [
      {
        title: 'Activer la validation dans les Paramètres',
        content: 'Accédez aux Paramètres via la barre latérale et ouvrez l\'onglet « Devis ». Activez « Validation requise avant envoi ». Une fois activé, tout devis créé par un membre du rôle Commercial doit être approuvé par un Administrateur ou un Propriétaire avant d\'être envoyé à un client. Les Propriétaires et Administrateurs peuvent envoyer des devis directement sans passer par le flux de validation.',
        tip: 'Activez la validation lorsque vous avez une équipe commerciale qui crée des devis — cela donne aux responsables un point de contrôle qualité avant que quoi que ce soit n\'atteigne les clients.',
      },
      {
        title: 'Soumettre un devis pour validation',
        content: 'Lorsqu\'un membre de l\'équipe commerciale termine la création d\'un devis, il clique sur « Soumettre pour validation » plutôt que sur « Envoyer ». Cela verrouille le devis contre toute modification ultérieure et change son statut en « Validation en attente ». Le devis apparaît immédiatement dans la file d\'attente de validation du responsable. Le soumetteur peut ajouter une note optionnelle expliquant ce que le réviseur doit savoir.',
      },
      {
        title: 'Le responsable examine le devis',
        content: 'Les responsables (Administrateurs et Propriétaires) voient une notification dans l\'application et une alerte par e-mail lorsqu\'un devis entre dans leur file d\'attente de validation. Ils ouvrent le devis en vue lecture seule complète — toutes les lignes, les prix, les conditions, les inclusions, les exclusions et les totaux sont visibles. Le responsable peut également télécharger l\'aperçu PDF pour voir exactement ce que le client recevrait.',
        tip: 'Examinez attentivement le total du devis, les conditions de paiement et les CGV — ce sont les trois domaines qui nécessitent le plus souvent des ajustements avant qu\'un devis n\'arrive chez un client.',
      },
      {
        title: 'Laisser des commentaires internes',
        content: 'Dans le panneau de validation situé à droite du devis, les responsables peuvent laisser des commentaires internes visibles uniquement par l\'équipe — pas par le client. Utilisez les commentaires pour expliquer ce qui doit changer : « Réduire la remise à 10% maximum » ou « Ajouter l\'exclusion du générateur pour les événements en extérieur dans les conditions ». Le soumetteur voit ces commentaires immédiatement et peut déverrouiller le devis pour effectuer des corrections.',
      },
      {
        title: 'Approuver ou rejeter',
        content: 'Après examen, le responsable clique sur « Approuver » ou « Rejeter ». L\'approbation déverrouille le bouton Envoyer pour le soumetteur — il reçoit une notification que le devis est prêt à partir. Le rejet renvoie le devis en statut Brouillon avec les commentaires du responsable visibles, afin que le soumetteur sache exactement ce qu\'il faut corriger avant de soumettre à nouveau.',
      },
      {
        title: 'Statuts de validation en un coup d\'œil',
        content: 'Les devis dans le workflow de validation affichent l\'un des quatre statuts dans la liste des devis : Brouillon (pas encore soumis), Validation en attente (en attente de revue du responsable), Approuvé (prêt à être envoyé) ou Rejeté (renvoyé pour révision). Filtrez la liste des devis par statut pour voir toute votre file d\'attente de validation d\'un coup. Les devis approuvés et envoyés suivent ensuite le flux normal : Envoyé → Vu → Gagné/Perdu.',
        tip: 'Établissez une norme d\'équipe pour le délai de traitement des validations — 4 heures ouvrables est un objectif courant. Des validations tardives peuvent retarder des devis sensibles au temps.',
      },
    ],
  },
  {
    slug: 'price-sync',
    title: 'Synchronisation des prix — Aligner catalogue et devis',
    description: 'Détectez et corrigez automatiquement les écarts de prix entre votre catalogue de matériel et vos devis actifs.',
    duration: '3 min',
    difficulty: 'intermediate',
    category: 'Devis',
    mode: 'av',
    icon: '🔄',
    videoUrl: '',
    whatYouLearn: [
      'Comment repérer les écarts de prix entre le catalogue et les lignes du devis',
      'Utiliser « Utiliser le prix du catalogue » pour mettre à jour le devis',
      'Utiliser « Mettre à jour le catalogue » pour définir le prix du devis comme nouveau standard',
      'Alignement en masse de tous les éléments non concordants en une seule fois',
    ],
    steps: [
      {
        title: 'Ouvrir un devis — la bannière de synchronisation apparaît',
        content: 'Ouvrez n\'importe quel devis dans l\'éditeur. Si un ou plusieurs prix de lignes diffèrent de votre catalogue de matériel, une bannière bleue « Synchronisation des prix » apparaît au-dessus du tableau des lignes. La bannière indique le nombre d\'éléments non synchronisés.',
        tip: 'La synchronisation des prix est particulièrement utile juste après la génération par IA — l\'IA correspond les éléments du catalogue mais peut parfois utiliser des prix légèrement différents.',
      },
      {
        title: 'Examiner les écarts',
        content: 'Cliquez sur la bannière pour développer le panneau de synchronisation des prix. Chaque élément non concordant est listé avec son nom, le prix actuel dans le devis, le prix du catalogue et le pourcentage d\'écart. Les éléments avec un écart supérieur à 10% sont mis en évidence en rouge ; les écarts plus faibles apparaissent en orange.',
      },
      {
        title: 'Choisir une action par élément',
        content: 'Pour chaque élément non concordant, choisissez l\'une des deux actions : « Utiliser le prix du catalogue » met à jour la ligne du devis pour correspondre au catalogue — utilisez ceci quand le catalogue est correct. « Mettre à jour le catalogue » définit le prix du devis comme nouveau standard dans le catalogue — utilisez ceci quand vous avez intentionnellement changé le prix pour cette mission.',
        tip: 'Utilisez « Mettre à jour le catalogue » avec parcimonie — cela change le prix pour tous les futurs devis. Utilisez-le uniquement pour un nouveau tarif délibéré, pas pour des remises ponctuelles.',
      },
      {
        title: 'Aligner tous les éléments en masse',
        content: 'Pour corriger tous les écarts d\'un coup, cliquez sur « Tout aligner sur le catalogue » en haut du panneau de synchronisation. CueQuote met à jour chaque ligne non concordante au prix du catalogue en une seule fois. Des coches vertes apparaissent à côté de chaque élément pendant la synchronisation. La bannière disparaît une fois tous les éléments synchronisés.',
      },
    ],
  },
  {
    slug: 'production-budget-planning',
    title: 'Planification du budget de production pour les organisateurs d\'événements',
    description: 'Générez des budgets de production AV complets avec des recommandations d\'équipement, d\'équipe et de calendrier adaptés à votre événement.',
    duration: '5 min',
    difficulty: 'beginner',
    category: 'Planificateur',
    mode: 'planner',
    videoUrl: '',
    whatYouLearn: [
      'Basculer vers le mode Planificateur pour la budgétisation de la production événementielle',
      'Décrire votre événement pour obtenir des estimations de budget générées avec précision par l\'IA',
      'Lire et interpréter la carte AV & Technique avec les catégories regroupées',
      'Comprendre les fourchettes budgétaires et les recommandations d\'équipe',
      'Utiliser le calendrier de production et les conseils pour les conversations avec les fournisseurs',
    ],
    steps: [
      {
        title: 'Basculer vers le mode Planificateur',
        content: 'Depuis votre tableau de bord, cliquez sur le sélecteur de mode en haut à droite et sélectionnez "Planificateur". Cela bascule votre interface du mode devis des sociétés AV au mode planification d\'événement. Le mode Planificateur utilise les tarifs du marché au lieu de votre catalogue, ce qui le rend idéal pour les professionnels des événements qui ont besoin de conseils budgétaires indépendants.',
        tip: 'Vous pouvez basculer entre les modes à tout moment — vos devis et paramètres pour chaque mode sont conservés séparément.',
      },
      {
        title: 'Créer un nouveau budget de production',
        content: 'Cliquez sur "Générer un budget de production" et décrivez votre événement en langage naturel. Incluez : le type d\'événement (conférence, gala, festival, etc.), le nom et le type du lieu, le nombre de participants attendus, la date et la durée, ainsi que les besoins AV spécifiques (présentations, musique live, diffusion, interprétation simultanée, branding). Plus vous fournissez de détails, plus le plan généré par l\'IA sera précis.',
        tip: 'Vous pouvez coller un RFP ou un brief d\'événement directement dans la description — l\'IA extrait automatiquement les exigences clés.',
      },
      {
        title: 'Choisir un modèle',
        content: 'Sélectionnez un modèle qui correspond à votre type d\'événement — Conférence, Gala, Événement d\'entreprise, Festival ou Personnalisé. Le modèle aide à guider l\'IA pour suggérer les équipements et rôles d\'équipe appropriés pour les événements similaires. Vous pouvez toujours ignorer la sélection de modèle et fournir votre propre description détaillée.',
        tip: 'L\'utilisation d\'un modèle accélère généralement les résultats de 20% car l\'IA part d\'un cadre de référence plutôt que de tout déduire de votre description.',
      },
      {
        title: 'Examiner la carte AV & Technique',
        content: 'Après la génération, la première section affiche une carte « AV & Technique » qui regroupe l\'audio, la vidéo, l\'éclairage et la scénographie. Cette carte affiche le nombre total d\'éléments pour toutes les catégories AV, la fourchette budgétaire (bas-haut) et un sous-total. Cliquez sur la carte pour la développer et voir les lignes individuelles avec descriptions, quantités et fourchettes budgétaires par élément. Cette vue unifiée rend facile de comprendre votre coût total de production technique en un coup d\'œil.',
        tip: 'La fourchette budgétaire reflète les variations du marché — le bas de gamme concerne les équipements de qualité standard avec des fournisseurs locaux, le haut de gamme les solutions premium avec redondance d\'équipe.',
      },
      {
        title: 'Examiner les recommandations d\'équipe et le calendrier',
        content: 'Faites défiler vers le bas pour examiner la section "Recommandations d\'équipe" (rôles, nombre de personnes par rôle, tarifs journaliers) et le "Calendrier d\'événement" (jours de montage suggérés, jours d\'événement, démontage et jalons techniques). Utilisez ceux-ci pour éclairer vos demandes de devis auprès des fournisseurs et pour établir des attentes réalistes avec votre client concernant le travail et la planification. Enregistrez ou exportez l\'intégralité du plan en PDF pour le partager avec les parties prenantes.',
        tip: 'Partagez la fourchette budgétaire avec votre client tôt pour harmoniser les dépenses avant d\'aller au marché — cela évite le choc des prix quand les devis des fournisseurs arrivent.',
      },
    ],
  },
  {
    slug: 'event-layout-designer',
    title: 'Concepteur de plan de salle',
    description: 'Concevez visuellement le plan de salle de votre événement — choisissez un modèle de lieu, placez des formes d\'équipements AV et exportez un plan soigné en PDF ou PNG.',
    duration: '4 min',
    difficulty: 'intermediate',
    category: 'Proposals',
    mode: 'av',
    videoUrl: '',
    whatYouLearn: [
      'Ouvrir l\'onglet Plan dans un devis',
      'Choisir un modèle de lieu comme point de départ',
      'Ajouter et positionner des formes d\'équipements AV',
      'Enregistrer le plan dans le devis',
      'Exporter le plan en PDF ou PNG',
    ],
    steps: [
      {
        title: 'Ouvrez l\'onglet Plan',
        content: 'Ouvrez n\'importe quel devis dans l\'éditeur. Dans la barre d\'onglets en haut (Équipement | Termes et détails | Plan de risque | Plan), cliquez sur "Plan". Le concepteur de plan s\'ouvre comme un canevas pleine largeur — vide pour un nouveau devis, ou affichant un plan précédemment enregistré si vous y êtes déjà venu.',
      },
      {
        title: 'Choisissez un modèle de lieu',
        content: 'Dans le panneau de gauche, cliquez sur "Modèles" et parcourez les modèles de lieu disponibles : Salle de bal, Salle de conférence, Théâtre, Scène extérieure, Salle de réunion et Hall d\'exposition. Cliquez sur un modèle pour le charger sur le canevas comme point de départ. Le modèle pré-dessine les limites de la salle, l\'espace scène et les rangées de sièges standard.',
        tip: 'Les modèles sont des points de départ, pas des plans fixes — chaque élément peut être déplacé, redimensionné ou supprimé après le chargement.',
      },
      {
        title: 'Ajoutez des formes d\'équipements AV',
        content: 'Dans le panneau de gauche, passez à l\'onglet "Éléments AV". Les formes sont regroupées par catégorie : Audio (enceintes, caissons de basse, position de mixage), Vidéo (écrans, panneaux LED, projecteurs, caméras), Éclairage (têtes mobiles, PAR, poursuite) et Scénographie (éléments de scène, podium, structure). Faites glisser n\'importe quelle forme sur le canevas, puis faites-la glisser pour la repositionner.',
      },
      {
        title: 'Enregistrez le plan',
        content: 'Cliquez sur "Enregistrer le plan" en haut à droite du concepteur. Le plan est attaché à ce devis et visible par votre client sur la page de partage sous le tableau d\'équipement. L\'enregistrement n\'affecte pas vos lignes d\'équipement — c\'est un complément visuel au devis.',
      },
      {
        title: 'Exportez en PDF ou PNG',
        content: 'Cliquez sur le bouton "Exporter" et choisissez PDF (sortie qualité impression convenant à l\'inclusion dans un dossier de devis) ou PNG (pour intégrer dans des e-mails, présentations ou WhatsApp). Le fichier exporté inclut le logo de votre entreprise dans le coin, le nom de l\'événement et une légende identifiant chaque forme AV.',
        tip: 'Incluez le plan PDF avec le PDF de devis lors de la cotation d\'événements importants ou complexes — les clients apprécient de voir exactement où chaque équipement sera placé.',
      },
    ],
  },
  {
    slug: 'two-factor-authentication',
    title: 'Authentification à deux facteurs',
    description: 'Ajoutez une couche de sécurité supplémentaire à votre compte en activant l\'authentification à deux facteurs (2FA) avec une application d\'authentification.',
    duration: '3 min',
    difficulty: 'beginner',
    category: 'Account',
    mode: 'both',
    videoUrl: '',
    whatYouLearn: [
      'Activer la 2FA depuis les paramètres du compte',
      'Scanner le code QR avec une application d\'authentification',
      'Entrer le code à 6 chiffres pour confirmer la configuration',
      'Conserver les codes de sauvegarde en lieu sûr',
    ],
    steps: [
      {
        title: 'Accédez aux paramètres du compte',
        content: 'Cliquez sur "Compte" dans la barre latérale (ou cliquez sur votre avatar de profil en bas à gauche et sélectionnez "Paramètres du compte"). Faites défiler jusqu\'à la section "Sécurité". Vous verrez une carte "Authentification à deux facteurs" affichant l\'état actuel — désactivée par défaut.',
      },
      {
        title: 'Cliquez sur Activer la 2FA',
        content: 'Cliquez sur le bouton "Activer la 2FA". Une boîte de dialogue de configuration s\'ouvre avec un code QR et une clé de configuration manuelle en dessous. Ouvrez votre application d\'authentification (Google Authenticator, Authy, 1Password ou toute application compatible TOTP) et scannez le code QR. Si votre application ne prend pas en charge la numérisation QR, appuyez sur "Entrer le code manuellement" et tapez la clé affichée.',
      },
      {
        title: 'Entrez le code à 6 chiffres',
        content: 'Votre application d\'authentification affichera un code à 6 chiffres basé sur le temps qui se renouvelle toutes les 30 secondes. Entrez le code actuel dans le champ de confirmation dans CueQuote et cliquez sur "Vérifier et activer". Une fois vérifié, la 2FA est immédiatement active — toute connexion future nécessitera votre mot de passe plus un code de votre application d\'authentification.',
        tip: 'Entrez le code rapidement — les codes TOTP expirent après 30 secondes. Si le code est rejeté, attendez que le prochain apparaisse dans votre application et réessayez.',
      },
      {
        title: 'Sauvegardez vos codes de sauvegarde',
        content: 'Après avoir activé la 2FA, CueQuote vous affiche 8 codes de sauvegarde à usage unique. Téléchargez-les ou copiez-les et conservez-les dans un endroit sûr (gestionnaire de mots de passe, feuille imprimée dans un coffre). Si vous perdez l\'accès à votre application d\'authentification, un code de sauvegarde vous permet de vous connecter et de désactiver ou réinitialiser la 2FA. Chaque code ne peut être utilisé qu\'une seule fois.',
        tip: 'Ne stockez jamais les codes de sauvegarde au même endroit que votre mot de passe. Un gestionnaire de mots de passe avec une note séparée pour les codes 2FA est une bonne approche.',
      },
    ],
  },
  {
    slug: 'ocr-file-attachments',
    title: 'Pièces jointes avec OCR',
    description: 'Joignez des PDF numérisés ou des images à un devis et laissez CueQuote extraire automatiquement le texte pour que l\'IA puisse lire et utiliser les fiches techniques et les listes d\'équipement.',
    duration: '3 min',
    difficulty: 'beginner',
    category: 'Proposals',
    mode: 'both',
    videoUrl: '',
    whatYouLearn: [
      'Joindre des fichiers à un nouveau devis',
      'Exécution automatique de l\'OCR sur les documents numérisés',
      'Vérifier le texte extrait avant la génération',
      'Types de fichiers et langues pris en charge',
    ],
    steps: [
      {
        title: 'Cliquez sur Pièces jointes dans un nouveau devis',
        content: 'Démarrez un nouveau devis et accédez à la section "Pièces jointes" sous le champ de description de l\'événement. Cliquez sur "Télécharger un fichier" ou faites glisser un fichier dans la zone de téléchargement. Les formats pris en charge sont PDF, JPG, PNG et TIFF. Vous pouvez joindre jusqu\'à 5 fichiers par devis — chaque fichier peut peser jusqu\'à 10 Mo.',
      },
      {
        title: 'Téléchargez un PDF numérisé ou une image',
        content: 'Sélectionnez votre fiche technique numérisée, liste d\'équipement, plan de salle ou brief d\'événement. Les fichiers déjà lisibles par machine (exportés depuis Word, Excel ou un outil de design) sont traités instantanément. Les documents numérisés et les images sont automatiquement envoyés au moteur OCR qui détecte et extrait tout le texte du fichier.',
      },
      {
        title: 'Vérifiez le texte extrait',
        content: 'Une fois l\'OCR terminé, cliquez sur la puce de pièce jointe pour développer l\'aperçu du texte extrait. Vérifiez la sortie pour vous assurer que les détails clés — noms d\'équipements, quantités, spécifications techniques — ont été correctement capturés. Vous pouvez modifier le texte extrait directement dans le champ d\'aperçu avant de générer le devis.',
        tip: 'Pour une meilleure précision OCR, utilisez des numérisations à 300 DPI ou plus. Évitez les fichiers où le texte se superpose aux graphiques ou utilise des polices très petites.',
      },
      {
        title: 'Générez le devis avec le contenu extrait',
        content: 'Cliquez sur "Générer le devis". L\'IA reçoit à la fois votre description écrite et le texte intégral extrait de toutes les pièces jointes comme contexte combiné. Elle fusionne intelligemment les deux sources — en reprenant les numéros de modèle spécifiques, les quantités et les exigences techniques de la fiche technique.',
        tip: 'L\'OCR prend en charge le texte en anglais et en arabe. Les documents multilingues (par ex. une fiche technique en arabe avec des noms de modèles d\'équipements en anglais) sont traités correctement — l\'IA lit les deux langues dans le même document.',
      },
    ],
  },
  {
    slug: 'real-time-comment-notifications',
    title: 'Notifications de Commentaires en Temps Réel',
    description: 'Recevez des notifications instantanées lorsque les clients commentent vos devis partagés pour ne jamais manquer des retours importants ou des demandes de révision.',
    duration: '2 min',
    difficulty: 'beginner',
    category: 'Devis',
    mode: 'both',
    videoUrl: '',
    whatYouLearn: [
      'Fonctionnement des notifications en temps réel quand les clients commentent',
      'Ce que vous voyez dans la notification toast',
      'Comment accéder aux commentaires via l\'icône de cloche',
      'Répondre aux commentaires directement depuis l\'éditeur',
    ],
    steps: [
      {
        title: 'Le client commente votre devis partagé',
        content: 'Lorsque vous envoyez un devis à un client, il reçoit un lien de partage. Sur la page partagée, il peut laisser des commentaires dans le panneau Commentaires en bas. Chaque commentaire est horodaté et attribué au nom du client. Au moment où il soumet son commentaire, vous recevez immédiatement une notification.',
      },
      {
        title: 'Vous recevez instantanément une notification toast',
        content: 'Une notification toast apparaît dans le coin inférieur droit de votre écran, affichant le nom du client, un aperçu de son commentaire (environ 50 premiers caractères) et le titre du devis. La notification est codée par couleur selon la priorité — les demandes de révision apparaissent en ambre, les commentaires généraux en bleu. Le toast s\'efface automatiquement après 5 secondes, mais vous pouvez cliquer dessus pour accéder directement au devis.',
        tip: 'Gardez l\'application CueQuote active dans votre navigateur pour voir les notifications toast. Si l\'application n\'est pas ouverte, vous recevrez quand même une notification par e-mail et l\'icône de cloche.',
      },
      {
        title: 'Accédez aux commentaires via l\'icône de cloche',
        content: 'Cliquez sur l\'icône de cloche (🔔) en haut à droite de la barre de navigation. Un menu déroulant apparaît affichant tous les commentaires et notifications non lus, groupés par devis. Chaque ligne affiche le nom du client, le texte d\'aperçu et le titre du devis. Cliquez sur n\'importe quel commentaire pour ouvrir ce devis et accéder à l\'onglet Commentaires. Une fois l\'onglet Commentaires ouvert, le compteur de badge sur la cloche diminue.',
      },
      {
        title: 'Cliquez sur "Afficher et Répondre" pour répondre',
        content: 'Depuis la notification toast ou le menu déroulant de la cloche, cliquez sur le lien "Afficher et Répondre" pour accéder directement à l\'éditeur de devis avec l\'onglet Commentaires ouvert. Tous les commentaires des clients apparaissent dans l\'ordre chronologique. Tapez votre réponse dans le champ de texte sous n\'importe quel commentaire et appuyez sur Envoyer. Votre réponse est immédiatement visible pour le client sur la page partagée.',
        tip: 'Les clients voient un badge rouge sur le panneau Commentaires indiquant combien de réponses non lues de vous existent. Des réponses rapides maintiennent la conversation active.',
      },
    ],
  },
  {
    slug: 'website-quote-form',
    title: 'Ajoutez un formulaire de devis à votre site',
    description: 'Vos visiteurs décrivent leur événement sur votre propre site et obtiennent aussitôt une fourchette budgétaire — vous récupérez le contact et une proposition chiffrée en brouillon.',
    duration: '4 min',
    difficulty: 'beginner',
    category: 'Setup',
    mode: 'av',
    whatYouLearn: [
      'Créer une clé de widget pour vos domaines',
      'Coller le formulaire dans votre site',
      'Ce que voient les visiteurs, et ce qui reste privé',
      'Traiter les demandes qui arrivent',
    ],
    steps: [
      {
        title: 'Créer le formulaire dans les Réglages',
        content: 'Ouvrez les Réglages et trouvez « Formulaire de devis du site ». Cliquez sur « Configurer le formulaire », donnez-lui un nom comme « Site principal » et listez les domaines sur lesquels il tournera. Saisissez votresociete.fr et www.votresociete.fr si votre site répond aux deux — le formulaire ne fonctionne que sur les domaines listés, et un www manquant est la première raison pour laquelle il semble ne rien faire.',
        tip: 'Le widget est disponible à partir du plan Pro.',
      },
      {
        title: 'Copier la balise script',
        content: 'CueQuote affiche une balise script prête, avec votre clé et votre couleur de marque. Copiez-la — il n\'y a rien à modifier.',
        tip: 'La clé commence par cq_pub_ et est destinée à être publique. Ne collez jamais une clé API cq_live_ sur un site : c\'est un secret.',
      },
      {
        title: 'La coller dans votre site',
        content: 'Placez la balise sur la page où le formulaire doit apparaître. Dans WordPress utilisez un bloc HTML personnalisé, dans Squarespace un bloc Code, dans Wix ou Webflow un élément embed. Le formulaire s\'affiche exactement où se trouve la balise, ou à un endroit précis via data-target.',
        tip: 'Il s\'affiche dans un shadow root isolé : il ne peut pas casser votre mise en page, et votre CSS ne peut pas le casser.',
      },
      {
        title: 'Tester comme un visiteur',
        content: 'Chargez la page, décrivez un événement réel, indiquez le nombre d\'invités ainsi que vos nom et e-mail, puis envoyez. En moins d\'une minute vous devriez voir une fourchette budgétaire avec le détail par catégorie.',
        tip: 'Si « This key is not enabled for… » apparaît, le domaine testé n\'est pas dans la liste de la clé — ajoutez-le dans les Réglages.',
      },
      {
        title: 'Traiter la demande',
        content: 'Vous recevez immédiatement un e-mail avec les coordonnées du visiteur, la fourchette affichée et un bouton vers le brouillon. Dans CueQuote vous trouverez une proposition entièrement chiffrée, le client déjà rattaché. Vérifiez les prix, ajustez, envoyez.',
        tip: 'Les visiteurs ne voient que des fourchettes. Vos prix unitaires et votre liste de matériel n\'apparaissent jamais sur votre site public.',
      },
    ],
  },
  {
    slug: 'webhooks',
    title: 'Envoyer les événements de devis à votre CRM',
    description: 'Recevez un rappel signé instantané lorsqu’un client consulte, accepte ou refuse un devis — pour que vos propres systèmes restent à jour sans que personne ne resaisisse quoi que ce soit.',
    duration: '5 min',
    difficulty: 'advanced',
    category: 'Setup',
    mode: 'av',
    whatYouLearn: [
      'Ajouter un point de terminaison et choisir les événements',
      'Garder votre secret de signature en sécurité',
      'Vérifier qu’une requête vient bien de CueQuote',
      'Repérer un point de terminaison qui ne fonctionne plus',
    ],
    steps: [
      {
        title: 'Ajoutez votre point de terminaison',
        content: 'Ouvrez les Paramètres et trouvez « Webhooks ». Cliquez sur « Ajouter un point de terminaison » et collez l’URL https qui doit recevoir les événements. Cochez les événements qui vous intéressent — la plupart commencent par proposal.accepted, car c’est celui qui mérite d’être transmis à un CRM.',
        tip: 'Les webhooks sont inclus dans le plan Business. L’URL doit être en https ; le http simple est refusé.',
      },
      {
        title: 'Copiez le secret de signature',
        content: 'Dès que le point de terminaison est créé, un secret commençant par whsec_ s’affiche. Copiez-le maintenant dans vos variables d’environnement — il n’est montré qu’une seule fois et ne peut pas être réaffiché.',
        tip: 'Perdu ? Supprimez le point de terminaison et recréez-le. Vous obtiendrez un nouveau secret.',
      },
      {
        title: 'Vérifiez la signature',
        content: 'Chaque requête porte un en-tête X-CueQuote-Signature contenant un horodatage et un HMAC-SHA256 de cet horodatage et du corps brut, signé avec votre secret. Recalculez-le et comparez avant de faire confiance à quoi que ce soit. Sans cette vérification, quiconque connaît votre URL peut vous envoyer de faux devis.',
        tip: 'Hachez les octets bruts du corps. Analyser le JSON puis le re-sérialiser change les octets, et la signature ne correspondra jamais — c’est de loin l’erreur la plus fréquente.',
      },
      {
        title: 'Répondez rapidement',
        content: 'Renvoyez n’importe quel statut 2xx dès que vous avez accepté la charge utile, puis faites le travail lent ensuite. Nous abandonnons après 10 secondes, et un dépassement est enregistré comme un échec.',
        tip: 'Traitez votre gestionnaire comme idempotent — appuyez-vous sur l’identifiant du devis et l’événement plutôt que de supposer que chaque événement arrive exactement une fois.',
      },
      {
        title: 'Surveillez les échecs',
        content: 'Dans les Paramètres, chaque point de terminaison indique combien de livraisons il a reçues ces 7 derniers jours et combien ont échoué. Un badge rouge « En échec » signifie que votre point de terminaison a renvoyé une erreur ou a expiré.',
        tip: 'Cela vaut un coup d’œil de temps en temps : quand une intégration CRM casse en silence, rien d’autre ne vous prévient — les devis cessent simplement d’arriver.',
      },
    ],
  },
]
