const ileDeFrance = ["Île-de-France", "ile-de-france"];
const provenceAlpesCoteDAzur = ["Provence-Alpes-Côte d'Azur", "provence-alpes-cote-d-azur"];
const nouvelleAquitaine = ["Nouvelle-Aquitaine", "nouvelle-aquitaine"];
const centreValDeLoire = ["Centre-Val de Loire", "centre-val-de-loire"];
const occitanie = ["Occitanie", "occitanie"];
const grandEst = ["Grand Est", "grand-est"];
const paysDeLaLoire = ["Pays de la Loire", "pays-de-la-loire"];
const auvergneRhoneAlpes = ["Auvergne-Rhône-Alpes", "auvergne-rhone-alpes"];
const bretagne = ["Bretagne", "bretagne"];
const malte = ["Malte"];

// bourgogne-franche-comte
// hauts-de-france

let studentsInfos = [
    //// Tranche 1 ----------------------------------------------------------------------------------------------
    {
        name : "Julien Nicolas",
        lastname : "Brachelet-Randoulet",
        presentation : "",
        linkedinProfile : "",
        githubProfile : "https://github.com/Julien-Brcht-Rndlt",
        studentMail: "jn.brachet.randlt@gmail.com",
        region : provenceAlpesCoteDAzur,
        remote : true,
        speciality : "Fullstack",
        skills : [],
        hobbies : ["lecture", "BD", "photo"],
        previousExperience : [],
        photo : "/assets/img/julien-nicolas.jpg",
        languages : ["Java", "HTML", "CSS", "JS"],
    },

    {
        name :"Milad",
        lastname :"Behzadi",
        presentation : "",
        linkedinProfile : "" ,
        githubProfile : "https://github.com/MiladBhzd",
        studentMail: "milad.bhzdi@gmail.com",
        region : ileDeFrance,
        remote : false,
        speciality : "Fullstack",
        skills : [],
        hobbies :[ "tennis", "lecture"],
        previousExperience : [],
        photo : "/assets/img/milad.jpg",
        languages : ["HTML", "CSS", "JS"],
    },

    {
        name : "Sarah",
        lastname : "Bensouna",
        presentation : "",
        linkedinProfile :"https://www.linkedin.com/in/sarah-bensouna-b25779152/",
        githubProfile : "",
        studentMail: "sarahbensouna.wild@gmail.com",
        region : nouvelleAquitaine,
        remote : true,
        speciality : "Fullstack",
        skills : ["Bilingue anglais", "recrutement", "gestion du personnel"],
        hobbies :[ "randonné", "musculation", "tennis"],
        previousExperience : [],
        photo : "/assets/img/sarah.jpg",
        languages : ["HTML", "CSS", "JS", "NODE", "REACT"],
    },
    
    {
        name : "Julien",
        lastname : "Bourgineau",
        presentation : "",
        linkedinProfile : "https://www.linkedin.com/in/julien-bourgineau-1bb8211bb/", 
        githubProfile : "https://github.com/Sparco10",
        studentMail: "jbourgineau@gmail.com",
        region : malte,
        remote : true,
        speciality : "Front-end",
        skills : [],
        hobbies :[ "football"],
        previousExperience : [],
        photo : "/assets/img/julien-bourgineau.jpg",
        languages : ["HTML", "CSS", "JS"],
    },

    {
        name : "Gregory",
        lastname : "Bouteville",
        presentation : "",
        linkedinProfile : "https://www.linkedin.com/in/gregory-bouteville-14b464207/", 
        githubProfile : "https://github.com/Gregory-Bouteville",
        studentMail: "gregorybouteville@gmail.com",
        region : nouvelleAquitaine,
        remote : true,
        speciality : "Front-end",
        skills : [],
        hobbies :[ "randonnée", "musique", "photo", "sport"],
        previousExperience : [],
        photo : "/assets/img/gregory-bouteville.jpg",
        languages : ["HTML", "CSS", "JS"],
    },

    {
        name : "Tom",
        lastname : "Carpentier",
        presentation : "",
        linkedinProfile : "https://www.linkedin.com/in/tom-carpentier-46ab84120/", 
        githubProfile : "https://github.com/TomWebd",
        studentMail: "t.carpentier.19@gmail.com",
        region : occitanie,
        remote : false,
        speciality : "Fullstack",
        skills : [],
        hobbies :[ "jeux vidéos", "moto", "guitare", "tennis"],
        previousExperience : [],
        photo : "/assets/img/tom-carpentier.jpg",
        languages : ["HTML", "CSS", "JS"],
    },

    {
        name : "David",
        lastname : "D'Amato",
        presentation : "",
        linkedinProfile : "https://www.linkedin.com/in/david-damato/", 
        githubProfile : "https://github.com/david-damato",
        studentMail: "david67230@gmail.com",
        region : grandEst,
        remote : false,
        speciality : "Fullstack",
        skills : [],
        hobbies :[ "bricolage", "running", "boxe"],
        previousExperience : [],
        photo : "/assets/img/david-damato.jpg",
        languages : ["HTML", "CSS", "PHP", "JS"],
    },

    {
        name : "Aline",
        lastname : "Dubois",
        presentation : "",
        linkedinProfile : "https://www.linkedin.com/in/aline-dubois-95a0351aa/", 
        githubProfile : "https://github.com/alinedubois",
        studentMail: "juillet.aline@gmail.com",
        region : nouvelleAquitaine,
        remote : false,
        speciality : "Front-end",
        skills : [],
        hobbies :[ "musique", "jardinage", "musculation"],
        previousExperience : [],
        photo : "/assets/img/aline-dubois.jpg",
        languages : ["HTML", "CSS", "JS"],
    },

    {
        name : "Marie-Anne",
        lastname : "Duvieu",
        presentation : "« Si tu veux comprendre le mot bonheur, il faut l'entendre comme récompense et non comme but. »",
        linkedinProfile : "", 
        githubProfile : "https://github.com/Sseven-lab",
        studentMail: "ma.duvieu@gmail.com",
        region : ileDeFrance,
        remote : false,
        speciality : "Tester",
        skills : ["Anglais courant", "certification ISTQB"],
        hobbies :[ "jeux vidéos", "bricolage"],
        previousExperience : [],
        photo : "/assets/img/marieanne-duvieu.jpg",
        languages : ["HTML", "CSS", "JS", "NODE", "REACT"],
    },

    {
        name : "Violaine",
        lastname : "Ernotte",
        presentation : "",
        linkedinProfile : "https://www.linkedin.com/in/violaine-ernotte/", 
        githubProfile : "https://github.com/vio9",
        studentMail: "ernotte.violaine@gmail.com",
        region : ileDeFrance,
        remote : false,
        speciality : "Front-end",
        skills : [],
        hobbies :[ "fanfare", "batterie"],
        previousExperience : [],
        photo : "/assets/img/violaine-ernotte.jpg",
        languages : ["HTML", "CSS", "JS"],
    },
    //// Tranche 2 ----------------------------------------------------------------------------------------------
    {
        name : "Baptiste",
        lastname : "Grias",
        presentation : "",
        linkedinProfile : "https://www.linkedin.com/in/baptiste-grias-4bbba8171/", 
        githubProfile : "https://github.com/BaptisteGrias",
        studentMail: "baptiste.grias@gmail.com",
        region : paysDeLaLoire,
        remote : true,
        speciality : "Front-end",
        skills : [],
        hobbies :[ "bricolage", "voyages"],
        previousExperience : [],
        photo : "/assets/img/baptiste-grias.jpg",
        languages : ["HTML", "CSS", "JS"],
    },
    
    {
        name : "Pierre",
        lastname : "Houot",
        presentation : "",
        linkedinProfile : "https://www.linkedin.com/in/pierre-houot-a403bb74/", 
        githubProfile : "https://github.com/pierrehouot",
        studentMail: "pierrehouot.pro@gmail.com",
        region : ileDeFrance,
        remote : true,
        speciality : "Fullstack",
        skills : ["Real time VFX"],
        hobbies :[ "jeux vidéos", "musique", "dessin"],
        previousExperience : [],
        photo : "/assets/img/pierre-houot.jpg",
        languages : ["HTML", "CSS", "JS", "C#"],
    },

    {
        name : "Manon",
        lastname : "Josse",
        presentation : "« Life is like a roller coaster. It has its ups and downs. But it’s your choice to scream or enjoy the ride. »",
        linkedinProfile : "https://www.linkedin.com/in/manonjosse/", 
        githubProfile : "https://github.com/ManonJosse",
        studentMail: "manonjossepro@gmail.com",
        region : ileDeFrance,
        remote : true,
        speciality : "Front-end",
        skills : ["UI/UX design", "graphic design", "project management"],
        hobbies :[ "art", "danse", "yoga"],
        previousExperience : [],
        photo : "/assets/img/manon-josse.jpg",
        languages : ["HTML", "CSS", "JS"],
    },

    {
        name : "Pauline",
        lastname : "Labbé",
        presentation : "",
        linkedinProfile : "https://www.linkedin.com/in/pauline-labb%C3%A9-360436b7/", 
        githubProfile : "https://github.com/Palabbe",
        studentMail: "pauline.labbe7@gmail.com",
        region : ileDeFrance,
        remote : false,
        speciality : "Front-end",
        skills : [],
        hobbies :[ "cinéma", "lecture", "sport"],
        previousExperience : ["édition"],
        photo : "/assets/img/pauline-labbe.jpg",
        languages : ["HTML", "CSS", "JS"],
    },

    {
        name : "Sylvain",
        lastname : "Laconi",
        presentation : "",
        linkedinProfile : "https://www.linkedin.com/in/sylvain-laconi-b77ab1107/", 
        githubProfile : "https://github.com/SylvainLaconi",
        studentMail: "sylvain.laconi@gmail.com",
        region : ileDeFrance,
        remote : true,
        speciality : "Front-end",
        skills : ["management", "recrutement"],
        hobbies :[ "cinéma", "voyages"],
        previousExperience : [],
        photo : "/assets/img/sylvain-laconi.jpg",
        languages : ["HTML", "CSS", "JS", "REACT"],
    },

    {
        name : "Edouard",
        lastname : "Larroche",
        presentation : "",
        linkedinProfile : "https://www.linkedin.com/in/edouard-larroche-9099a6163/", 
        githubProfile : "https://github.com/Edouard-LARROCHE",
        studentMail: "edouard.larroche@gmail.com",
        region : ileDeFrance,
        remote : false,
        speciality : "Front-end",
        skills : [],
        hobbies :[ "musique", "batterie", "tennis"],
        previousExperience : [],
        photo : "/assets/img/edouard-larroche.jpg",
        languages : ["HTML", "CSS", "JS"],
    },

    {
        name : "Jérôme",
        lastname : "Shaaban",
        presentation : "",
        linkedinProfile : "https://www.linkedin.com/in/j%C3%A9r%C3%B4me-shaaban/", 
        githubProfile : "https://github.com/JeromeShaaban",
        studentMail: "jerome.shaaban@gmail.com",
        region : occitanie,
        remote : true,
        speciality : "Fullstack",
        skills : [],
        hobbies :[ "jeux vidéos", "lecture", "cinéma"],
        previousExperience : [],
        photo : "/assets/img/jerome-shaaban.jpg",
        languages : ["HTML", "CSS", "JS", "REACT", "NODE"],
    },

    {
        name : "Sophie",
        lastname : "Topart",
        presentation : "« Life is not about waiting for the storm to pass but learning to dance in the rain. »",
        linkedinProfile : "https://www.linkedin.com/in/sophie-bailly-topart-59a0b893/", 
        githubProfile : "https://github.com/SophieTopart",
        studentMail: "sophiebailly9@gmail.com",
        region : ileDeFrance,
        remote : true,
        speciality : "Front-end",
        skills : ["Très bonne connaissance de l'anglais"],
        hobbies :[ "sport", "lecture"],
        previousExperience : [],
        photo : "/assets/img/sophie-topart.jpg",
        languages : ["HTML", "CSS", "JS", "REACT", "NODE"],
    },

    {
        name : "Kévin",
        lastname : "Touyard",
        presentation : "",
        linkedinProfile : "https://www.linkedin.com/in/k%C3%A9vin-touyard-4a069a175/", 
        githubProfile : "https://github.com/TouyardK",
        studentMail: "ktouyard@gmail.com",
        region : occitanie,
        remote : false,
        speciality : "Front-end",
        skills : [],
        hobbies :[ "randonnée"],
        previousExperience : [],
        photo : "/assets/img/kevin-touyard.jpg",
        languages : ["HTML", "CSS", "JS"],
    },

    // ----------------------- PHP 
    //// Tranche 3  ----------------------------------------------------------------------------------------------
    {
        name : "Tony",
        lastname : "Alastrue",
        presentation : "« Tant qu'il y a de la wifi, il y a de l'espoir »",
        linkedinProfile :"https://www.linkedin.com/in/tony-alastrue-545225205/", 
        githubProfile :"https://github.com/TenshirockWeb",
        studentMail:"Alastrue.t@gmail.com",
        region : ileDeFrance,
        remote : true,
        speciality :"Fullstack",
        skills : ["Wordpress"],
        hobbies :["streaming", "e-sport"],
        previousExperience : [],
        photo : "",
        languages : ["HTML", "CSS", "PHP"],
    },
    {
        name :"Anaïs",
        lastname :"BERDUCAT",
        presentation : "",
        linkedinProfile :"https://www.linkedin.com/in/ana%C3%AFs-berducat-a77455208/", 
        githubProfile :"https://github.com/AnaisBerducat",
        studentMail:"anais.berducat@outlook.fr",
        region : centreValDeLoire,
        remote : false,
        speciality :"Back-end",
        skills : [],
        hobbies :["jeux vidéos"],
        previousExperience : [],
        photo : "/assets/img/anais-berducat.jpg",
        languages : ["HTML", "CSS", "PHP", "SYMFONY"],
    },
    {
        name :"Yannis",
        lastname :"BLONDRON",
        presentation : "",
        linkedinProfile :"",
        githubProfile :"https://github.com/YannisB81",
        studentMail:"blondron.yannis@gmail.com",
        region : ileDeFrance,
        remote : true,
        speciality :"Fullstack",
        skills : [],
        hobbies :["musique électronique", "VTT"],
        previousExperience : [],
        photo : "/assets/img/yannis-blondron.jpg",
        languages : ["HTML", "CSS", "PHP", "SQL"],
    },
    {
        name :"Franck",
        lastname :"Bouchet",
        presentation : "",
        linkedinProfile :"https://www.linkedin.com/in/franck-bouchet-585652110/", 
        githubProfile :"https://github.com/Franck1981-dev",
        studentMail:"franck.bouchet1981@gmail.com",
        region : auvergneRhoneAlpes,
        remote : false,
        speciality :"Back-end",
        skills : [],
        hobbies :["Bricolage", "Voyages", "Mécanique"],
        previousExperience : [],
        photo : "/assets/img/franck-bouchet.jpg",
        languages : ["HTML", "CSS", "PHP"],
    },
    {
        name :"Antoine",
        lastname :"Duriez",
        presentation : "",
        linkedinProfile :"", 
        githubProfile :"Antoine-Duriez",
        studentMail:"antoine.duriez44@gmail.com",
        region :paysDeLaLoire,
        remote : false,
        speciality :"Back-end",
        skills : [],
        hobbies :["sport", "lecture"],
        previousExperience : [],
        photo : "/assets/img/antoine-duriez.jpg",
        languages : ["HTML", "CSS", "PHP"],
    },
    {
        name :"Julien",
        lastname :" Fourneau",
        presentation : "",
        linkedinProfile :"", 
        githubProfile :"",
        studentMail:"cathyjulien14@orange.fr",
        region : ileDeFrance,
        remote : false,
        speciality :"Back-end",
        skills : [],
        hobbies :["karaoké", "cinéma", "jeux"],
        previousExperience : [],
        photo : "/assets/img/julien-fourneau.jpg",
        languages : ["HTML", "CSS", "PHP"],
    },
    {
        name :"Mickael",
        lastname :"Garatens",
        presentation : "",
        linkedinProfile :"https://www.linkedin.com/in/mickael-garatens-680416204/", 
        githubProfile :"https://github.com/micka260583",
        studentMail:"Micka260583@live.fr",
        region : nouvelleAquitaine,
        remote : true,
        speciality :"Back-end",
        skills : [],
        hobbies :["jeux vidéos", "bricolage"],
        previousExperience : [],
        photo : "/assets/img/mickael-garatens.jpg",
        languages : ["HTML", "CSS", "PHP"],
    },
    {
        name :"Jody",
        lastname :"Gauthier",
        presentation : "",
        linkedinProfile :"", 
        githubProfile :"https://github.com/jody-g",
        studentMail:"jody.gauthier51@gmail.com",
        region :grandEst,
        remote : true,
        speciality :"Back-end",
        skills : [],
        hobbies :[ "jeux vidéos", "arts martiaux"],
        previousExperience : [],
        photo : "/assets/img/jody-gauthier.jpg",
        languages : ["HTML", "CSS", "PHP"],
    },
    {
        name :"Justine",
        lastname :"Giletta",
        presentation : "« Vouloir être de son temps, c'est déjà être dépassé. » Eugène Ionesco",
        linkedinProfile :"https://www.linkedin.com/in/justine-giletta-2427a7136/", 
        githubProfile :"https://github.com/justGiletta",
        studentMail:"justine.giletta@gmail.com",
        region :ileDeFrance,
        remote : true,
        speciality : "Fullstack",
        skills : ["Gestion de projet", "communication institutionnelle"],
        hobbies :[ "lecture", "cinéma"],
        previousExperience : [],
        photo : "/assets/img/justine-giletta.jpg",
        languages : ["HTML", "CSS", "PHP", "JS"],
    },
    {
        name :"Gren",
        lastname :"Anne",
        presentation : "",
        linkedinProfile :"", 
        githubProfile :"https://github.com/annegren",
        studentMail:"ga.annegren@gmail.com",
        region :provenceAlpesCoteDAzur,
        remote : false,
        speciality :"Back-end",
        skills : [],
        hobbies :["plongée", "boxe"],
        previousExperience : [],
        photo : "",
        languages : ["HTML", "CSS", "PHP"],
    },
    //// Tranche 4 ----------------------------------------------------------------------------------------------
    {
        name :"Pauline",
        lastname :"Guiho Blanchard",
        presentation : "« Je ne perds jamais, je gagne ou j'apprends » - Mandela",
        linkedinProfile :"https://www.linkedin.com/in/p-guiho-blanchard/", 
        githubProfile :"https://github.com/PaulineGB",
        studentMail:"p.guiho.b@gmail.com",
        region :provenceAlpesCoteDAzur,
        remote : true,
        speciality :"Back-end",
        skills : ["édition", "maquettage", "graphisme", "print"],
        hobbies :["culture", "lecture"],
        previousExperience :[],
        photo : "/assets/img/pauline-gb.jpg",
        languages : ["HTML", "CSS", "PHP"],
    },
    {
        name :"Hugo",
        lastname :"Guillaume",
        presentation : "",
        linkedinProfile :"", 
        githubProfile :"https://github.com/musosy",
        studentMail:"hugo.guillaume13@gmail.com",
        region :provenceAlpesCoteDAzur,
        remote : true,
        speciality :"Fullstack",
        skills : [],
        hobbies :["Musique", "JV"],
        previousExperience : [],
        photo : "",
        languages : ["HTML", "CSS", "PHP", "JS"],
    },
    {
        name :"Amine",
        lastname :"Haddad",
        presentation : "",
        linkedinProfile :"", 
        githubProfile :"https://github.com/amine-haddad",
        studentMail:"aminehaddad.dev@gmail.com",
        region :centreValDeLoire,
        remote : false,
        speciality :"Back-end",
        skills : [],
        hobbies :["gaming", "lecture"],
        previousExperience : [],
        photo : "/assets/img/amine.jpg",
        languages : ["HTML", "CSS", "PHP"],
    },
    {
        name :"Kévin",
        lastname :"Janson",
        presentation : "",
        linkedinProfile :"", 
        githubProfile :"https://github.com/JANSONkevin",
        studentMail:"kevin.janson.pro@gmail.com",
        region :auvergneRhoneAlpes,
        remote : false,
        speciality :"Back-end",
        skills : [],
        hobbies :["pêche", "taekwondo"],
        previousExperience : [],
        photo : "/assets/img/kevin-janson.jpg",
        languages : ["HTML", "CSS", "PHP"],
    },
    {
        name :"Guillaume",
        lastname :"Joulia",
        presentation : "",
        linkedinProfile :"", 
        githubProfile :"https://github.com/Keisuke-Joulia",
        studentMail:"guillaume-joulia_student2021@wilder.school.com",
        region : provenceAlpesCoteDAzur,
        remote : false,
        speciality :"Back-end",
        skills : [],
        hobbies :["Jeux vidéo", "Manga"],
        previousExperience : [],
        photo : "",
        languages : ["HTML", "CSS", "PHP"],
    },
    {
        name :"Colin",
        lastname :"Le Gac",
        presentation : "",
        linkedinProfile :"https://www.linkedin.com/in/colin-mora-le-gac-b0077344/", 
        githubProfile :"https://github.com/clnmlg",
        studentMail:"colin.moralegac@gmail.com",
        region : bretagne,
        remote : true,
        speciality :"Back-end",
        skills : [],
        hobbies :["son", "jeux vidéos", "dev", "crypto"],
        previousExperience : "sound engineer/music producer",
        photo : "/assets/img/colin-legac.jpg",
        languages : ["HTML", "CSS", "PHP", "SQL"],
    },
    {
        name :"Fanny",
        lastname :"Lemaitre-Hermenier",
        presentation : "",
        linkedinProfile :"", 
        githubProfile :"https://github.com/fanny37",
        studentMail:"flemaitre37@gmail.com",
        region : paysDeLaLoire,
        remote : false,
        speciality :"Back-end",
        skills : [],
        hobbies :["Photo", "Danse"],
        previousExperience : [],
        photo : "/assets/img/fanny-lh.jpg",
        languages : ["HTML", "CSS", "PHP"],
    },
    {
        name :"Olivier",
        lastname :"Maffre",
        presentation : "",
        linkedinProfile :"https://www.linkedin.com/in/olivier-maffre-9601b018b/", 
        githubProfile :"https://github.com/olivier3231",
        studentMail:"maffrolivier74@gmail.com",
        region : occitanie,
        remote : false,
        speciality :"Back-end",
        skills : [],
        hobbies :["cinéma", "moto", "karaté"],
        previousExperience : [],
        photo : "/assets/img/olivier-maffre.jpg",
        languages : ["HTML", "CSS", "PHP"],
    },
    {
        name :"Alexandre",
        lastname :"Morlat",
        presentation : "",
        linkedinProfile :"", 
        githubProfile :"https://github.com/AlexandreMor",
        studentMail:"alexandre1morlat@gmail.com",
        region :centreValDeLoire,
        remote : false,
        speciality :"Back-end",
        skills : [],
        hobbies :["JV", "Foot"],
        previousExperience : [],
        photo : "/assets/img/alexandre-morlat.jpg",
        languages : ["HTML", "CSS", "PHP"],
    },
    {
        name :"Eddy",
        lastname :"Rajaonarivelo",
        presentation : "",
        linkedinProfile :"https://www.linkedin.com/in/eddy-rajaonarivelo-a91296130/", 
        githubProfile :"https://github.com/eddyraja",
        studentMail:"r.edha0068@gmail.com",
        region :grandEst,
        remote : false,
        speciality :"Back-end",
        skills : [],
        hobbies :["Bicolage", "Electronique"],
        previousExperience : [],
        photo : "/assets/img/eddy-raja.jpg",
        languages : ["HTML", "CSS", "PHP"],
    },
    {
        name :"Wissam",
        lastname :"Taleb",
        presentation : "« Champion aren't made in the gyms. Champions are made from something they have deep inside them : a desire, a dream, a vision. *** They have to have the skill and the will. But the will must be stronger than the skill »",
        linkedinProfile :"https://www.linkedin.com/in/wissam-taleb-b0a58477/", 
        githubProfile :"https://github.com/dontal-code",
        studentMail:"wissam.talebpro@gmail.com",
        region :ileDeFrance,
        remote : true,
        speciality :"Back-end",
        skills : [],
        hobbies :["jeux-vidéos", "basket-ball"],
        previousExperience : [],
        photo : "/assets/img/wissam-taleb.png",
        languages : ["HTML", "CSS", "PHP"],
    }
];

studentsInfos = studentsInfos.map((student, index) => ({...student, id: index}))
