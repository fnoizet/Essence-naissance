export type arcanInfo = {
  name: string;
  number: number;
  general: string;
  positive: string;
  negative: string;
};

const ArcanData: arcanInfo[] = [
  {
    name: "Le Bateleur",
    number: 1,
    general:
      "L’arcane Le Bateleur est la première lame du Tarot de Marseille. Elle représente un jeune homme debout derrière sa table garnie qui tient un denier et un bâton. Ce jeune homme représente notre capacité à être là et à exister. Il a en main des potentiels et d’autres capacités en lui-même sur sa table. L’arcane Le Bateleur symbolise le fait de commencer quelque chose. C’est un projet, une idée nouvelle, les débuts d’une activité. C’est une nouveauté qui ouvre des perspectives d’avenir. Le Bateleur représente la jeunesse, l’énergie active, la santé et la force vitale. Avec Le Bateleur le consultant est prêt à faire des choses, à se manifester dans la vie de façon joyeuse et ludique. Le Bateleur c’est l’art de faire et de jouer. Le Bateleur est une image des capacités du consultant. Il possède les quatre éléments qui se retrouvent dans les arcanes mineurs du Tarot de Marseille, à savoir le Denier, l’art de manier la matière et l’argent, le Bâton, l’art de créer et d’user de son intuition, l’Epée, l’art de penser et de s’exprimer et enfin la Coupe, l’art d’aimer et de manifester ses sentiments. Dans sa face sombre, Le Bateleur est un indécis, un touche à tout incapable de poursuivre ce qu’il a commencé. Il est dans le peut-être qui ne se détermine pas suffisamment. Le Bateleur est trop impulsif, il veut tout tout de suite et ne sait pas se poser et n’agit pas avec assez de sagesse.",
    positive:
      "C’est le début de tout. Je montre mes capacités. J’existe. Je m’affirme. Je fais des projets.  J’ose entreprendre et je teste des choses nouvelles. Je suis d’un tempérament actif. J’ai un esprit jeune et dynamique. J’ai une joie de vivre. J’aime bien m’amuser. C’est une situation nouvelle qui commence et tout est encore possible.",
    negative:
      "Je manque de confiance en moi. J’ai peur de m’affirmer. Je crains d’entreprendre. La nouveauté m’effraie. Je manque d’expérience. J’hésite. Je suis une touche à tout. Je commence et ne finis pas. Je me disperse. Je manque de confiance en moi."
  },
  {
    name: "La Papesse",
    number: 2,
    general:
      "L’arcane La Papesse est la deuxième  lame du Tarot de Marseille. Elle représente une femme assise tenant sur ses genoux un livre ouvert couleur chair, sa coiffe sort dans la case d’en haut. Cette femme symbolise le savoir. Elle est branchée sur la connaissance intuitive. Elle possède le livre de la sagesse. L’arcane La Papesse représente une position solide et stable pour le consultant. La Papesse est une image de mère protectrice et bienveillante. Elle apporte le soutien et le réconfort. La Papesse symbolise la puissance des acquis, la solidité des biens matériels qui donnent une assise stable et une autorité naturelle au consultant. La Papesse apprécie les choses de la vie et elle sait en user avec sagesse. C’est une bonne vivante. La Papesse est un symbole de fécondité et de patience. Elle prend le temps de préparer l’avenir et de laisser se faire les choses pour la réussite des projets. Dans sa face sombre, La Papesse devient écrasante et intrusive. C’est la mère envahissante. La Papesse est aussi le poids de l’inertie et le repli sur soi-même. Elle garde tout en elle et risque de s’étouffer à ne pas exprimer ce qu’elle retient.",
    positive:
      "Je prends le temps de bien préparer mon projet. Je suis un soutien pour autrui. J’ai une autorité naturelle. Je prends ma place et me fais respecter. J’agis avec sagesse. J’ai les connaissances pour réussir. Je me prépare bien. J’inspire la confiance. Je sais bien recevoir. Je m’installe dans un lieu. J’attends un enfant.",
    negative:
      "Je me bloque et j’attends. Je me renferme sur moi-même. Je reste cachée chez moi. Je garde tout en moi sans m’exprimer. Je ne peux pas agir. Je fais du sur place. Je suis retenu par le passé. J’étouffe dans une situation."
  },
  {
    name: "L'Impératrice",
    number: 3,
    general:
      "L’arcane L’impératrice est la troisième lame du Tarot de Marseille. C’est une femme assise sur un trône qui tient un spectre et un bouclier avec un aigle. C’est la puissance féminine qui pense et s’exprime. L’arcane L’Impératrice symbolise l’art de la communication, les facilités pour s’exprimer et les capacités de créativité. C’est la sensibilité au service de l’échange et de l’expression de ses idées. L’Impératrice est une image de la femme et de la mère dans sa dimension sensible et expressive. Elle représente l’art de mettre en forme les idées et de trouver des solutions conviviales aux diverses situations. L’Impératrice symbolise les relations sociales et familiales harmonieuses. Elle prend sa place dans toute situation et sait imposer sa façon de voir. Elle possède une autorité naturelle. Dans sa face sombre, L’Impératrice a une parole blessante ou cassante. Elle parle trop ou mal à propos. Elle ne laisse pas assez de place à l’autre et ne communique pas assez bien ce qu’elle pense. Elle peut abuser de sa position de pouvoir.",
    positive:
      "Je m’exprime. Je communique. J’entre en relation avec autrui. Je suis créative. J’ai des idées nouvelles et je les mets en œuvre. Je développe un projet. Je parle avec aisance et je sais bien écrire. J’ai une réflexion personnelle. Je prends des responsabilités. J’ai une belle place sociale. Je vis bien ma vie de femme.",
    negative:
      "Je parle trop. Je m’exprime trop brutalement. Je ne laisse pas l’autre s’exprimer. Je suis trop agressive et je peux avoir des paroles blessantes. Je mentalise trop les situations. Ma créativité manque de réalisme."
  },
  {
    name: "L'Empereur",
    number: 4,
    general:
      "L’arcane L’Empereur est la quatrième lame du Tarot de Marseille. Elle représente un homme assis sur un trône tenant un spectre. C’est la force du pouvoir masculin sur les choses terrestres et matérielles. L’arcane L’Empereur symbolise la capacité d’agir dans le domaine concret. C’est une puissance en action qui matérialise et construit. Ce sont les réalisations matérielles et en premier lieu les entreprises professionnelles. L’Empereur est une image de l’homme et du père, présent et actif. C’est une vision matérialiste et carrée des situations. L’Empereur agit et s’exprime avec logique et clarté. L’Empereur représente la base concrète et matérielle sur laquelle le consultant peut s’appuyer. C’est la solidité et la stabilité d’une situation. Dans sa face sombre, L’Empereur est trop rigide et attaché aux choses matérielles. Il ne parvient pas à se dégager de position étriquée et déteste le changement. Il abuse de son pouvoir.",
    positive:
      "J’agis. Je réalise. Je dirige. Je suis responsable d’une entreprise, d’une équipe. J’ai une place de pouvoir. Mes capacités et mon autorité sont reconnues. J’ai le sens de l’organisation. Je suis un bâtisseur. J’ai une situation stable. Je peux profiter de résultats concrets. Je m’appuie sur mon esprit logique.",
    negative:
      "Je suis trop autoritaire. Je suis trop matérialiste.  Mes idées sont butées. J’exerce un pouvoir sans nuances. Je me heurte à un pouvoir abusif. Je n’agis pas facilement. Je me sens à l’étroit dans ma situation actuelle."
  },
  {
    name: "Le Pape",
    number: 5,
    general:
      "L’arcane Le Pape est la cinquième lame du Tarot de Marseille. Elle représente un personnage assis avec une tiare qui tient une crosse et bénit deux enfants près de lui. C’est une autorité morale qui enseigne les règles de vie à ces disciples. L’arcane Le Pape symbolise l’enseignant, le guide, le conseiller. C’est celui qui guide et conseille les autres. Le consultant est en position de conseiller ou bien il va chercher conseil. Le Pape est une figure d’autorité et de hiérarchie. Il s’agit d’un maitre bienveillant qui sait donner de bons conseils. Le pape est aussi une image du père qui élève ses enfants et qui leur apporte une bonne éducation. Le Pape est un symbole de la vie de famille où les règles de conduite sont établies entre les membres. Le Pape met les limites et donne des autorisations. Il est rassurant et traditionnel. Dans sa face sombre, Le Pape est une éducation trop stricte et rigide. Ce sont des règles morales trop serrées qui entravent le consultant. Ce sont de mauvais conseils et un problème avec les hiérarchies.",
    positive:
      "Je sais conseiller et orienter autrui. Je suis de bons conseils. Je tire les leçons des choses. Je transmets mes connaissances et je continue d’apprendre. Je suis un bon enseignant. Je développe mes propres conceptions, ma philosophie. J’ai le sens de ce qui est bien et bon. Je suis un parent impliqué, juste et bienveillant. J’ai le sens des valeurs importantes.",
    negative:
      "Je me heurte à l’autorité. Je n’écoute pas les conseils. Je n’ai pas envie d’apprendre. Je suis bloquée par des conceptions étroites et une éducation trop rigide. Je ne me sens pas légitime et soutenue dans mes choix. Je manque de bienveillance."
  },
  {
    name: "L'Amoureux",
    number: 6,
    general:
      "L’Amoureux est la sixième lame du Tarot de Marseille. Il représente un jeune homme entre une femme âgée et une jeune femme avec au dessus de lui un chérubin qui va tirer une flèche vers son coeur. Le symbole du chérubin est l’ouverture du coeur, le jeune homme découvre l’amour et l’univers des sentiments. L’Amoureux symbolise l’expression de ses sentiments. Le consultant apprend à connaître ce qu’il ressent et le partage avec son entourage. L’Amoureux exprime ce qu’il ressent et cela est bien accueilli par ses proches. L’Amoureux attire et développe des relations. L’Amoureux est une image de la rencontre et de l’échange affectif avec des personnes qui sont ou qui deviennent des proches. Il est question d’une intimité et d’une douceur de vivre. Avec L’Amoureux les situations sont agréables et les relations sont faites de tendresse. On aime et on se sent aimé. De plus L’Amoureux exprime la capacité de faire les choix du coeur. Dans sa face sombre, L’Amoureux est une image de souffrance et de désamour. Les sentiments deviennent douloureux. C’est aussi la difficulté de faire un choix. Le consultant reste dans l’hésitation et se retrouve bloqué. C’est une incertitude et un balancement entre des options sans parvenir à une décision.",
    positive:
      "Je montre mes sentiments. J’entre en contact avec autrui. J’accepte l’aide des autres. Je suis amoureuse. Je suis aimé. Je fais un choix selon mon cœur. C’est le bon choix. Je suis bien entourée. J’échange, je donne et je reçois. Je suis à égalité avec autrui. Je développe mes relations. Je vis une situation intime et agréable.",
    negative:
      "Je ne parviens pas à choisir. Je suis hésitante. Je suis tiraillée entre deux voies. Je n’ose pas dire ce que je ressens. Je me sens bloquée. J’ai peur de m’engager. J’ai des ressentiments à l’égard de certains. Je ne me sens pas aimée. J’ai de la peine."
  },
  {
    name: "Le Chariot",
    number: 7,
    general:
      "L’arcane Le Chariot est la septième lame du Tarot de Marseille. Il représente un homme dirigeant un chariot tiré par deux chevaux. Cela représente notre capacité à mener notre vie de façon dynamique et active. L’arcane Le Chariot est une image de notre volonté d’avancer de façon indépendante et autonome. C’est la dynamique personnelle qui va son chemin en alliant le pôle actif et le pôle réceptif en nous, représentés les deux chevaux. Le Chariot symbolise le mouvement et le voyage. C’est l’art de se déplacer sans contraintes. Le Chariot représente la réussite personnelle. Le consultant obtient ce qu’il souhaite sans qu’il soit nécessaire de faire pression sur soi ou sur les autres. Le Chariot est une affirmation de soi qui manifeste un certain degré de confiance en soi. Le consultant sait ce qu’il veut et l’exprime. Dans sa face sombre, Le Chariot représente une personne trop pressée qui risque l’accident. C’est un manque de confiance en soi et une difficulté à assumer seul son existence et ses projets. Le consultant ne sait pas assez s’affirmer.",
    positive:
      "Je réalise mes projets. J’agis en toute indépendance. Je réussis ce que j’entreprends. Je m’affirme. Je prends mon autonomie. J’ai un esprit d’entreprise. J’avance rapidement. Je sais ce que je veux et ce que je ne veux pas. J’affirme ma façon d’être personnelle. J’ai confiance en moi et en ma dynamique. J’avance sur mon chemin de façon autonome.",
    negative:
      "Je me dirige mal. Je vais trop vite. J’agis avec précipitation. Je ne maitrise pas la situation. Je ne sais pas ce que je veux. Je fais une chose et son contraire. Je suis ambivalente. J’ai peur d’agir seul. L’indépendance me pose problème. J’ai peur de l’échec."
  },
  {
    name: "Le Justice",
    number: 8,
    general:
      "L’arcane La Justice est la huitième lame du Tarot de Marseille. Elle représente une femme assise de face tenant une balance d’une main et un glaive de l’autre main. La balance et le glaive sont les attributs de la justice qui pèse le pour et le contre puis tranche et prend une décision. Cet arcane, La Justice, symbolise la juste prise de position et l’équilibre. C’est la capacité de décider de façon équitable. C’est un arcane qui représente l’ordre et la loi. La Justice symbolise les contrats, les décisions légales, les hommes et femmes de loi, juges, avocats, notaires. C’est aussi les actes légaux, contrats, arrêts juridiques, mariages, vente et achat, héritage. La Justice symbolise la pause nécessaire pour prendre une décision de la façon la plus juste et harmonieuse. Cet arcane est aussi une remise en ordre de sa vie, une action en vue de mettre plus d’harmonie dans son existence. La justice doit se rendre avec une certaine délicatesse et une ouverture du coeur d’où sa représentation par une femme. C’est aussi une image d’un esprit sérieux et rigoureux. Dans sa face sombre, l’arcane La Justice est un arrêt, un blocage, une décision judiciaire à l’encontre du consultant ou de ces proches. C’est un excès de recherche de perfection et d’absolu qui entrave toute action du consultant.",
    positive:
      "Je pèse le pour et le contre et je fais un choix. Je me positionne de façon juste. Je suis rigoureuse. Je recherche l’attitude la plus équitable. Je prends une décision. Je légalise une situation. Je me mets en accord avec la loi et avec mes règles de vie. Je cherche l’harmonie et l’équilibre. Je prends le temps de me poser et d’être en paix.",
    negative:
      "Je suis rigide. Je juge trop sévèrement. Je suis trop perfectionniste. Je suis bloqué et je ne parviens pas à me décider. Je rencontre un obstacle. Je ne suis pas en accord avec moi-même. Je tranche trop vite et mal."
  },
  {
    name: "L'Hermite",
    number: 9,
    general:
      "L’arcane L’Hermite est la neuvième lame du Tarot de Marseille. Elle représente un homme d’âge mur avançant avec une lanterne et un bâton. C’est une image d’expérience qui avance avec prudence et cherche à comprendre le sens des choses. L’arcane L’Hermite symbolise la prudence et le temps nécessaire pour comprendre et obtenir ce que l’on cherche. C’est une image de patience. L’Hermite est la capacité de comprendre en profondeur et d’éclairer son histoire et tout ce qui est passé ou caché. C’est un éclaireur et un guide. L’Hermite représente les différents thérapeutes dans leur quête de savoir. L’Hermite symbolise la connaissance et les études, les professeurs et les chercheurs. C’est également la maturité. Il représente la continuité des choses, comme un amour qui dure dans le temps. Dans sa face sombre, L’Hermite est peureux, trop prudent et trop solitaire. Il souffre de cette solitude et de son isolement. Il se protège trop de la vie extérieure et des relations. Il est trop lent et n’admet pas le temps qui passe.",
    positive:
      "Je réfléchis. Je prends le temps de comprendre. Je vais au-delà des apparences. Je sais ce qui se cache derrière une situation. J’éclaircis les choses avec mon intelligence. Je fais preuve de patience. Je prends le temps nécessaire à la situation. J’agis avec prudence. Je suis capable de guider autrui et d’être une bonne thérapeute.",
    negative:
      "Je me mets à l’écart. Je m’isole et me coupe des autres. Je crains les contacts. Je me sens seul. Je souffre d’isolement. Je ne cherche pas dans la bonne direction. Je vais trop dans le détail. Je suis trop tournée sur le passé. J’avance trop lentement."
  },
  {
    name: "La Roue de Fortune",
    number: 10,
    general:
      "L’arcane La Roue de Fortune est la dixième lame du Tarot de Marseille. Elle représente un Sphinx au sommet d’une roue où se trouvent un singe et un chien sacré. Cette roue est solidement posée sur le sol. Et elle comporte une manivelle laissée vide. Le Sphinx pose des questions que le singe prend en charge pour aller trouver leurs réponses et le chien sacré remonte ses réponses vers le Sphinx. La roue elle-même symbolise le destin dans ses hauts et ses bas. L’arcane La Roue de Fortune est une image de la destinée que le consultant peut prendre en main afin de faire tourner la roue dans le sens qu’il souhaite. Elle représente aussi les aléas de l’existence, les événements qui arrivent avec leurs lots de positifs et de négatifs. La Roue de Fortune est un symbole des opportunités à saisir. Elle peut amener la bonne fortune aussi bien financière que sur d’autres plans. Mais elle reste centrée sur ce qui est essentiel pour le consultant. La Roue de Fortune représente également le centre de la personnalité et l’art de poursuivre ce qui est le plus important pour soi. C’est connaître ses désirs et possibilités pour les mettre en œuvre afin de réussir. Dans sa face sombre La Roue de Fortune exprime les événements qui déroutent et que le consultant subit sans pouvoir intervenir sur eux. C’est aussi les difficultés financières et la perte de repères personnels. C’est enfin se poser trop de questions et trop mentaliser.",
    positive:
      "Je m’interroge et je suis capable de répondre à mes questions. Je définis ce que je veux. Je sais ce qui me convient. J’attire la chance et les bonnes relations. Je saisis les opportunités. Je m’adapte aux événements en restant stable et en gardant une continuité. Je prends en main ma destinée. Je fais ce qu’il faut pour acquérir une prospérité.",
    negative:
      "Je tourne en rond. Je me pose trop de questions. Je mentalise et suis coupée des réalités. Je laisse les événements prendre le dessus et me dérouter. Je ne saisis pas ma chance. Je suis entrainée malgré moi sur une mauvaise voie. Je ne prends pas en main les choses."
  },
  {
    name: "La Force",
    number: 11,
    general:
      "L’arcane La Force, est la onzième lame du Tarot de Marseille. Elle représente une femme de profil tenant la gueule d’un chien. Ici le symbole de la femme est celui d’une volonté humaine douce et le symbole du chien celui de nos instincts. L’arcane La Force est une véritable alliance entre la volonté et les instincts. C’est la source de la maitrise aussi bien de soi-même que des situations extérieures. Avec La Force nous manifestons notre énergie vitale et notre force de caractère. C’est un arcane qui évoque notre courage et notre détermination à aller au bout de nos objectifs. La Force représente la capacité de réalisation de ce que nous désirons. La Force est un accord entre nos désirs et nos aptitudes à les mettre en œuvre. Elle est une vision claire de nos objectifs à atteindre. La Force est un symbole de l’union et de ce fait elle représente les alliances et le mariage. C’est une union réussie et harmonieuse. Dans sa face sombre, La Force représente les conflits, le fait de se mettre la pression et d’exiger trop de soi-même. Elle est une image des abus de pouvoir et d’une façon générale de l’opposition et du désaccord entre la volonté et les désirs.",
    positive:
      "J’ai de l’’énergie et une grande force vitale. Je vais au bout de mon projet pour sa réussite. Je me donne un objectif et je l’atteins. Je maitrise une situation. Je suis déterminée. J’unis des forces opposées ou différentes. J’obtiens une alliance et je réconcilie les parties. Je me marie. J’obtiens ce que je veux. Je suis l’axe d’une situation. Je fais preuve de logique.",
    negative:
      "Je vis un conflit. Je rencontre un obstacle majeur, une opposition interne ou externe. Je suis partagée et je ne parviens pas à tenir mes objectifs. Je lâche prise. Je me sens fragile. Je force trop les choses et me force trop moi-même. Je veux trop obtenir à tout prix."
  },
  {
    name: "Le Pendu",
    number: 12,
    general:
      "L’arcane Le Pendu est la douzième lame du Tarot de Marseille. Elle représente un personnage pendu par un pied, la tête en bas, les bras derrière le dos. C’est l’image d’une position à l’inverse des habitudes prise volontairement par ce personnage et qui ne veut pas intervenir. L’arcane Le Pendu symbolise un temps d’attente pour laisser venir et laisser se transformer les choses d’elles-mêmes. C’est un lâcher-prise, un temps de repos et de patience. Le Pendu représente une voie originale, une façon de se positionner dans la vie au regard de sa philosophie et de son éthique personnelle. C’est une attitude qui privilégie le fond des choses et aide de mieux comprendre le sens de ce qui arrive. Le Pendu est un canal d’intuition. Il apporte une inspiration et permet de transmettre des messages venus de l’intérieur de sa conscience. Il représente le retournement lorsque le consultant se pose plus de questions sur le sens des choses plutôt que sur l’action. Dans sa face sombre, Le Pendu est une retenue, une inaction subie qui peut aller jusqu’à l’emprisonnement face à une situation. C’est une perte, matérielle ou morale. Le Pendu est aussi une dépendance à l’égard d’autre chose ou de quelqu’un.",
    positive:
      "Je suis dans une attitude de lâcher-prise. Je n’interviens pas et j’’attends le bon moment. J’accepte le cours des choses. Je vois les choses autrement. J’assume ma voie originale. Je retourne une situation à l’avantage de chacun. J’écoute et je transmets mes intuitions. Je suis non conformiste, avec une vision différente et inspirée des choses.",
    negative:
      "Je suis bloquée et en attente. Je ne peux pas agir. Je me sens impuissante. Je suis dépendante de quelque chose. Je ne suis pas libre de mes mouvements. Je subis une perte.  Je reste indifférente à une situation. Je ne suis pas intégrée."
  },
  {
    name: "La Non-nommée",
    number: 13,
    general:
      "L’arcane Arcane Sans Nom est la treizième lame du Tarot de Marseille. Elle représente un squelette tenant une faux, un pied dans une terre noire d’où émergent des têtes, des mains , des pieds et des os. Ce squelette symbolise notre structure, ce qui est essentiel en nous. Il fauche ce qui est passé et fait surgir des choses de notre inconscient, la terre noire. L’Arcane Sans Nom représente le fait de faire table rase du passé et de passer à autre chose. Il ouvre une page nouvelle de notre vie. L’Arcane Sans Nom dit non à ce qui est passé et dépassé. L’Arcane Sans Nom est une image d’une énergie vitale essentielle qui fait un ménage dans sa vie et se débarrasse de ce qui entrave et est inutile. Il structure et organise sa vie pour aller de l’avant. L’Arcane Sans Nom symbolise l’action radicale et ferme qui est capable de faire une transformation profonde de son existence. C’est une source de renouveau. Dans sa face sombre, l’Arcane Sans Nom est trop radical et brutal. Il tranche trop vite, écarte trop de choses et peut faire du mal par son côté trop absolu. Il peut exprimer une tendance à se saboter, à casser ce que l’on construit.",
    positive:
      "Je me transforme en profondeur. Je nettoie mes vieilles idées. Je balaie mes clichés. Je change mes habitudes. Je passe à autre chose. Je tire un trait sur le passé. Je me structure et j’avance. Je me tourne vers l’avenir. J’agis rapidement. Je vis ma libido et je déblaie ce qui n’est plus utile. Je vais à l’essentiel.",
    negative:
      "Je ne sais pas tourner la page. Je n’arrive pas à me détacher du passé et des vieilles idées. Je suis trop agressive et blessante.  Je subis une agression, une blessure. Je dois faire le deuil de quelqu’un ou quelque chose. Je suis trop radicale."
  },
  {
    name: "Tempérance",
    number: 14,
    general:
      "L’arcane Tempérance est la quatorzième lame du Tarot de Marseille. Elle représente un personnage ailé tenant deux cruches d’où l’eau circule dans les deux sens. C’est le pouvoir de l’esprit qui fait circuler harmonieusement l’énergie vitale. L’arcane Tempérance symbolise l’art de la circulation des énergies. Circulation concrète avec les voyages et les moyens de transports. Et circulation plus symbolique avec l’ensemble des relations sociales et amicales. Tempérance représente le diplomate, l’intermédiaire, le médiateur. C’est celui qui met les gens en relation et trouve les solutions qui vont convenir à chacun. C’est un commercial par excellence. Tempérance est un bon ange gardien, il protège et guérit. Il est bienveillant et instaure un climat agréable dans les relations. C’est un facteur d’apaisement. Tempérance amène une continuité dans les choses, à l’opposé des ruptures. Dans sa face sombre, Tempérance se laisse entamer par les autres et ne trouve plus son espace personnel. C’est un tiède qui ne sait pas prendre de décision et reste dans l’hésitation. C’est une difficulté à affronter des oppositions et une peur des conflits.",
    positive:
      "Je crée des liens. Je développe mes relations sociales.  Je vis bien avec mes amis. J’échange des informations, des choses. Je suis une bonne médiatrice. Je suis diplomate. Je sais modérer mes pulsions. Je guéris. Je soigne. Je suis conciliante et sociable. Je crée une continuité. Je participe à un mouvement collectif positif. Je me sens protégée.",
    negative:
      "Je ne parviens pas à me décider. Je suis partagé entre sentiment et raison. Je suis indécise. Je me laisse entrainer par les autres. Je ne peux pas prendre position. Je ne m’impose pas. Je fais circuler de fausses nouvelles. Je suis superficielle. Je n’ai pas d’opinion personnelle."
  },
  {
    name: "Le Diable",
    number: 15,
    general:
      "L’arcane Le Diable est la quinzième lame du Tarot de Marseille. Elle représente un personnage ailé mi-homme mi bête tenant un flambeau et une épée et deux diablotins attachés. C’est l’ange des profondeurs qui éclaire ce qui est souterrain et maintient les instincts. L’arcane Le Diable représente Lucifer, le porteur de lumière, celui qui va éclairer ce qui est caché. C’est un habile et profond thérapeute. Le Diable révèle les secrets et les désirs. Il exprime le monde des instincts. Le Diable est une image des plaisirs charnels et des désirs en général. Le consultant vit sa sexualité de façon libérée. Il accepte d’exprimer ses désirs et d’agir pour les réaliser. Le Diable est un bon commerçant, il sait manier l’argent et a des capacités pour en obtenir. Son intelligence instinctive le conduit vers des réussites matérielles. Dans sa face sombre, Le Diable est un manipulateur, un usurier ou un faussaire. Il sait mentir et entrainer autrui pour son propre intérêt. Le Diable se laisse mener pas ses désirs sans réfléchir aux conséquences de ses actes.",
    positive:
      "J’exprime et je vis mes désirs. J’écoute mon ressenti pour agir en accord avec lui. J’éclaire les choses cachées. Je révèle un secret. Je me délivre de certaines contraintes. Je tranche un conflit et me libère de ce qui m’entrave. Je comprends ce qui est souterrain. Je prends du plaisir et vis librement ma sexualité. Je m’élève au-dessus des conventions.",
    negative:
      "Je vis des sentiments de colère, de jalousie. Je romps trop vite certaines relations. Je suis excessive et je ne sais pas m’arrêter. Je suis manipulatrice ou je me fais manipulée. Je suis angoissée. J’ai une tendance à voir tout en noir. "
  },
  {
    name: "La Maison Dieu",
    number: 16,
    general:
      "L’arcane La Maison-Dieu est la seizième lame du Tarot de Marseille. Elle représente une tour dont la tête est ouverte par une langue de feu venue d’en haut, ce qui déclenchent une multitude de bulles, tandis que deux personnages se retrouvent projetés vers le sol à la quête de pierres blanches. La tour est une image de nous-même et de notre corps qui est amené à s’ouvrir à quelque chose d’imprévu, c’est la langue de feu. Les bulles sont de l’énergie et un symbole de joie de vivre. Les deux personnages représentent la recherche de la vérité par l’expérience concrète et matérielle. L’arcane La Maison-Dieu est un symbole de l’ouverture d’esprit, de la nécessité d’une recherche objective de la réalité. C’est une lecture des faits et des situations réaliste et concrète. C’est un changement comme le fait de déménager. La Maison-Dieu exprime les situations imprévues qui arrivent brusquement mais qui sont porteuses de positif et de joie. Par exemple c’est un coup de foudre amoureux. C’est aussi une découverte, une idée lumineuse qui s’impose au consultant. La Maison-Dieu représente la recherche scientifique et la quête de la vérité. C’est une démarche matérialiste et réaliste, une façon pragmatique de s’adapter aux réalités. Dans sa face sombre, La Maison-Dieu exprime les crises, les bouleversements, les changements mal vécus. La Maison-Dieu est une image de souffrance face aux dures réalités, comme la fin d’illusions ou la nécessité de sortir de sa zone de confort.",
    positive:
      "Je suis réaliste. Je cherche la meilleure solution. J’étudie la matière. Je suis scientifique. J’expérimente. Je suis dans une quête du vrai. Je ne crois pas aux idées reçues. J’aime le changement. Je sors des chemins battus. J’apporte un souffle d’air frais. Je vis un coup de foudre amoureux. J’ai une idée lumineuse et novatrice.",
    negative:
      "J’ai tendance à tout détruire sans distinction. Je crains ce qui peut m’arriver. J’explose facilement face aux difficultés. Je perds le sens des réalités. Je me fais des idées. Je suis trop émotive. Je me sens déstabilisée. Les changements m’effraient. "
  },
  {
    name: "L'Etoile",
    number: 17,
    general:
      "L’arcane L’Etoile est la dix-septième lame du Tarot de Marseille. Elle représente une belle jeune femme nue versant de l’eau de deux vases sous un ciel étoilé. C’est le don, la nuit inspirée, la beauté et la muse. L’arcane L’Etoile symbolise la jeunesse et la beauté des êtres et des choses. C’est une image de la nature dans sa réalité première et esthétique. C’est une poésie de la vie. L’Etoile représente les artistes et les personnes liées au bien-être. C’est l’art de savoir créer et de guérir l’autre et soi-même. Ce sont les dons artistiques et d’intuition. L’Etoile est une image de l’avenir et de la paix. C’est la douceur de vivre, la confiance en la vie et le fait de se laisser guider par ses intuitions. L’Etoile donne sans retenue et se laisse voir sans fard. C’est une représentation de la vérité. Dans sa face sombre, L’Etoile représente le laisser-aller et la paresse. C’est une candeur coupable, se positionner en victime et ne pas savoir se défendre ou se protéger.  ",
    positive:
      "Je donne avec naturel. Je profite de la vie. Je me repose. Je prends des vacances. Je suis tranquille et en paix. Je suis en bonne santé. Je sais soigner et apaiser autrui. Je suis douée pour les domaines artistiques. J’ai de la sensibilité et de l’intuition. Je crois en ma bonne étoile qui me guide et je la suis. Je me montre tel que je suis.",
    negative:
      "Je donne à perte sans discernement. Je ne me protège pas assez. Je m’expose trop. Je me sens vulnérable. Je suis trop candide. Je suis fataliste et trop superstitieuse. Je n’agis pas assez. Je laisse trop faire et aller les choses. "
  },
  {
    name: "La Lune",
    number: 18,
    general:
      "L’arcane La Lune est la dix huitième lame du Tarot de Marseille. Elle représente l’astre de la nuit la lune éclairant un paysage entre deux tours, deux chiens loups, un bassin avec une écrevisse. Ici la lune symbolise une lumière douce et tamisée qui n’aveugle pas mais apporte un éclairage diffus sur une situation. Les tours sont des lieux d’habitation qui sécurisent. Les chiens loups représentent nos instincts et nos désirs qui sont aussi de bons gardiens. Le bassin plein d’eau est une image de notre inconscient où l’écrevisse symbolise nos souvenirs et toutes les choses enfouies dans notre nuit personnelle. L’arcane La Lune est une image de la richesse de notre inconscient et de notre imaginaire. C’est la sensibilité féminine et l’intuition. C’est la capacité de puiser en soi de quoi se renouveler. La Lune symbolise le changement et la diversité des solutions possibles. C’est également une image de la vie de famille, de l’accueil et de l’écoute des autres. La Lune représente le groupe, la foule, l’action collective. Image des souvenirs et des choses passées, La Lune porte une certaine nostalgie. Dans sa face sombre La Lune est floue, trompeuse, source de peurs et de souffrances. Elle fait perdre le fil de ce que l’on souhaite. La multitude des possibles tend à noyer le consultant. Des mensonges ou des illusions sont sources d’égarement.",
    positive:
      "J’imagine. Je crée. J’écoute mes rêves pour les réaliser. Je suis très intuitive. Je sais bien accueillir et écouter autrui. J’ai le sens de la famille et je suis bien entourée. Je suis une bonne financière. Je sais y faire avec l’argent. J’aime le changement. Je m’installe et je décore avec goût mes intérieurs. J’ai un sens créatif inné.",
    negative:
      "Je suis dans le flou. Je ne parviens pas à y voir clair. Je m’égare. J’ai souvent peur. Je vis des situations confuses et je ne parviens pas à en sortir. Le passé s’attache à moi. Je suis trop dépensière. Je manque d’esprit rationnel et de limites. Je souffre."
  },
  {
    name: "Le Soleil",
    number: 19,
    general:
      "L’arcane Le Soleil est la dix-neuvième lame du Tarot de Marseille. Elle représente un couple d’enfants se tenant devant un muret sous un soleil de midi. C’est un rayonnement sans ombre qui éclaire et limite l’action des deux enfants qui, eux se soutiennent l’un l’autre. L’arcane Le Soleil symbolise la puissance du raisonnement, de l’intelligence et de la logique. C’est l’éclairage et la compréhension directe d’une situation. C’est aussi une image du pouvoir de cette intelligence. Le Soleil représente l’énergie dominante et une position sociale de direction, dans un esprit humaniste. C’est savoir diriger dans l’intérêt de tous. Le Soleil est une image de l’amour dans le couple et de l’affection qui unit deux personnes. C’est aussi une image des associations entre partenaires. Le Soleil exprime la chaleur des sentiments et une ambiance bienveillante. Dans sa face sombre, Le Soleil est un pouvoir écrasant, une autorité trop forte et une absence de sentiments. Le consultant ne parvient pas à prendre sa place dans une situation sociale ou familiale.",
    positive:
      "J’ai une belle place sociale et je suis reconnue pour mes capacités. Ma position est stable. Je partage. Je donne et je reçois. Je suis heureux en couple. Je fais une bonne association. J’ai une position de pouvoir et j’assume mes responsabilités. J’ai de l’ambition. J’ai un esprit clair et rationnel qui sait fixer les limites. J’inspire le respect et la confiance.",
    negative:
      "Je dépasse mes limites et je me dépense trop. Je suis trop sèche dans mes remarques. Mon couple est mal assorti. Je vis un désamour ou une mauvaise association. J’ai une prise de conscience douloureuse. J’étouffe en restant à la même place."
  },
  {
    name: "Le Jugement",
    number: 20,
    general:
      "L’arcane Le Jugement est la vingtième lame du tarot de Marseille. Elle représente un ange qui souffle dans sa trompette et en bas trois personnages dont celui du centre émerge de la terre. L’inspiration réveille le consultant qui émerge et va vers un renouveau espéré. L’arcane Le Jugement est un appel à une renaissance, c’est aussi une bonne nouvelle qui arrive, comme la naissance d’un enfant ou une promotion sociale. Le Jugement est une image d’une inspiration qui apporte des éléments nouveaux au consultant et lui permette de s’élever socialement ou de voir la réussite d’un projet. Le Jugement symbolise la reconnaissance publique et la renommée. Le consultant obtient son diplôme. Il passe avec succès ses épreuves. Le Jugement est aussi une renaissance de l’énergie et une guérison. Dans sa face sombre, Le Jugement est le sentiment d’être jugé autant que le fait de juger les autres trop sévèrement. C’est aussi la culpabilité ressentie par le consultant. C’est une mauvaise nouvelle.",
    positive:
      "J’ai une idée nouvelle. Je me transforme et vis un renouveau. Mes vœux sont exaucés. Je m’élève. J’ai une promotion. Je vois les choses autrement et je pardonne. J’ai une intuition forte et rapide qui me guide vers une voie nouvelle. Je suis reçue. Je reçois une bonne nouvelle. J’ai une reconnaissance publique.",
    negative:
      "Je porte des jugements négatifs sur autrui et je suis l’objet de jugements négatifs. Je ne parviens pas à pardonner quelqu’un. Je reste accroché à des idées dépassées. Je me sens coupable. Je n’arrive pas à sortir de difficultés. Je ne suis pas reconnue."
  },
  {
    name: "Le Monde",
    number: 21,
    general:
      "L’arcane Le Monde est la dix et une lame du Tarot de Marseille. Elle représente une femme qui danse au centre d’une couronne de lauriers, entourée de quatre personnages, le cheval, le lion, l’aigle et l’ange. C’est une image du consultant ayant réalisé et réussit dans les différents domaines du concret, de l’intuition, de la pensée et du sentiment. L’arcane Le Monde symbolise la réalisation d’un projet, son aboutissement harmonieux. Cela apporte du bonheur et de la joie de vivre. C’est une vie harmonieuse. Le Monde représente l’ouverture sur les autres et sur les différentes situations et différents pays. C’est une façon universelle d’envisager son existence. C’est une attention à soi et aux autres. Le Monde manifeste que le consultant est bien dans sa vie. Le Monde exprime une réussite du consultant qui se trouve au centre d’une situation comme l’animateur d’un groupe. C’est avoir un esprit de synthèse et être capable de gérer une diversité de personnes et de choses. Dans sa face sombre, Le Monde est une image d’un enfermement, d’un retrait à l’égard de la société. Le consultant se protège trop et reste dans sa bulle. C’est aussi une trop grande diversité de choses et un poids trop lourd qui étouffe le consultant.",
    positive:
      "Je trouve ma place dans le monde. Je suis heureux. Je finalise mon projet. Je gère un groupe. Je crée un centre. Je suis entouré de gens valables. J’ai réussi ce que je voulais. Je reçois les lauriers de mes efforts. J’ai une position harmonieuse et reconnue. J’ai une vision globale et un esprit de synthèse.  Je suis à la maturité de ma vie.",
    negative:
      "Je ne suis pas à ma place dans le monde. Je suis trop réservé ou trop en vue. Je ne retire pas les fruits de mes efforts. Je ne suis pas reconnu à ma juste place. Je suis égocentriste. Je me protège de l’extérieur en restant dans ma bulle."
  },
  {
    name: "Le Mat",
    number: 22,
    general:
      "L’arcane Le Mat est la vingt-deuxième lame du Tarot de Marseille. Elle représente un personnage marchand avec son baluchon, son bâton et son chien.  C’est le chemin de l’être humain qui emmène avec lui son histoire dans son baluchon et est accompagné de ses instincts, le chien. L’arcane Le Mat symbolise le destin du consultant qui doit avancer dans sa vie, poussé ou retenu par son chien, ses instincts, mais qui n’a pas d’autre choix que de suivre sa route personnelle. Le Mat représente la démarche du consultant, la voie qu’il a prise et qui le mène vers son avenir. C’est le voyageur autant que l’aventurier. Le Mat est une image de liberté et de libération des contraintes. Avec Le Mat le consultant retrouve un espace et un esprit libre, il se dégage des conventions et suit sa voie originale. Le Mat représente la capacité de prendre des risques dans la vie et d’avancer vers des terrains inconnus. Le Mat va de l’avant même s’il ne sait pas où cela va le mener. Il écoute son intuition pour se guider et avancer. Dans sa face sombre, Le Mat ne sait pas où il va et est en train de se perdre. Il n’est pas raisonnable et peut aller à sa perte. Il fuit plutôt que d’affronter les situations. Le Mat n’écoute personne, ne sait pas s’arrêter et reste fixé sur ses idées folles.",
    positive:
      "J’avance vers l’inconnu. Je suis en route vers mon destin. Je poursuis ma voie personnelle. Je prends le risque d’aller de l’avant vers un chemin nouveau. Je voyage. Je me libère des contraintes et des exigences sociales. Je vais à ma façon originale. Je pars vers des aventures nouvelles. J’avance avec mon intuition et mon expérience.",
    negative:
      "Je ne sais pas où je vais. Je suis perdu. Je ne parviens pas à comprendre ce qui se passe. Je me trompe totalement. J’ai des idées folles en tête. Je m’égare. Je n’écoute rien. Je ne tiens pas compte de mon expérience. Je suis dans une fuite en avant."
  }
];

export default ArcanData;
