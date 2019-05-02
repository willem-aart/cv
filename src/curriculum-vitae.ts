import { CurriculumVitae } from "./types";

export const curriculumVitae: CurriculumVitae = {
  name: "Willem-Aart van Dorpen",
  dateOfBirth: new Date(1987, 7, 3),
  placeOfBirth: "Gouda",
  address: "Dorpsstraat 53, 7916 PB Elim (nabij Hoogeveen)",
  emailAddress: "mail@willem-aart.nl",
  phoneNumber: "+31 (6) 50 49 48 70",
  studies: [
    {
      level: "Stenden University Emmen",
      title: "HBO Mens & ICT"
    },
    {
      level: "Alfa-college Hoogeveen",
      title: "MBO ICT niveau 4"
    }
  ],
  workExperience: [
    {
      period: "nov. 2017 - heden",
      title: "Regelbox en persoonlijke ontwikkeling",
      description: `Gedurende een periode van ± anderhalf jaar volledig autonoom gewerkt aan de realisatie van Regelbox (zie volgende) en ontwikkeling van vakgerelateerde (en persoonlijke) competenties.
      
      Intensief gefocust op (verdere) beheersing van praktisch inzetbare en universeel (d.w.z. op ieder software-project) toepasbare kennis en vaardigheden. Denk hierbij o.a. aan:

      • algemene problem solving skills waaronder identificatie van incidentele complexiteit en ontwerpen van intrinsiek eenvoudige oplossingen
      • functioneel programmeren, datatransformatie, functionele (de-)compositie
      • domain modeling, data-oriented design
      
      Opgedane kennis en vaardigheden rechtstreeks in de praktijk toegepast op Regelbox en andere (kleinere) projecten waaronder een recursieve rule engine die middels een set van afleidingsregels nieuwe feiten kan afleiden uit aangeleverde informatie.
      
      Voornamelijk gewerkt met Lisp (Scheme, Racket), TypeScript en React.`,
      achievements: []
    },
    {
      period: "dec. 2016 - heden",
      title: "Regelbox",
      description: `Regelbox is een SaaS-platform waarmee organisaties eenvoudig functie-, rol- en groepsprofielen kunnen samenstellen voor o.a. (her)structurering en ordening van organisatiestructuren, en ter ondersteuning van de evaluatiecyclus.
      Samen met vier andere ondernemers en inmiddels als mede-eigenaar nauw betrokken bij de ontwikkeling van de organisatie en het product.`,
      achievements: [
        "eindverantwoordelijk voor algehele gebruikerservaring, technische implementatie van UI en grafische vormgeving",
        "domeinmodel / datamodel gespecificeerd",
        "interactie-ontwerp, grafische vormgeving en typografie van UI gerealiseerd",
        "single page app geïmplementeerd middels o.a. TypeScript en React"
      ]
    },
    {
      period: "mei 2017 - nov. 2017",
      title: "AssuradeurenGilde Coevorden",
      description:
        "Voornamelijk bezig gehouden met doorontwikkeling van het Assuradeuren Advies Platform, een webapplicatie waarmee assurantiekantoren o.a. polissen kunnen samenstellen.",
      achievements: [
        "omgeving met versiebeheer en CI/CD (GitLab) ingericht en bestaande codebase vanuit FTP-omgeving gemigreerd",
        "UI voor messaging platform (à la WhatsApp) ontworpen en geïmplementeerd middels o.a. VueJS"
      ]
    },
    {
      period: "jun. 2016 - apr. 2017",
      title: "BakerWare Emmen",
      description:
        "Gewerkt aan de Digitale Balie, een online platform voor waterschaps- en gemeentebelastingen met een landelijke reikwijdte van meer dan een miljoen gebruikers.",
      achievements: [
        "UI van bestaande applicatie (daterend uit 2008) volledig herontworpen",
        "herontworpen UI geïmplementeerd middels o.a. PHP7 en Symfony"
      ]
    }
  ]
};
