async function loadTurtle() {
  //this is the function you call in 'preProcess', to load the highlighter
  const worker = await new Promise(resolve => {
    require(["core/worker"], ({ worker }) => resolve(worker));
  });
  const action = "highlight-load-lang";
  const langURL =
    "https://cdn.jsdelivr.net/gh/redmer/highlightjs-turtle/src/languages/turtle.js";
  const propName = "hljsDefineTurtle"; // This funtion is defined in the highlighter being loaded
  const lang = "turtle"; // this is the class you use to identify the language
  worker.postMessage({ action, langURL, propName, lang });
  return new Promise(resolve => {
    worker.addEventListener("message", function listener({ data }) {
      const { action: responseAction, lang: responseLang } = data;
      if (responseAction === action && responseLang === lang) {
        worker.removeEventListener("message", listener);
        resolve();
      }
    });
  });
}

var documentConfig =
{
  title: "Technical Framework for Local Digital Twins - Twins4Resilience project",
  shortName: "T4R-Technical-Framework",
  pubDomain: "t4r-technical-framework",
  specStatus: "wv",
  specType: "hr",
  license: "cc-by",
//  latestVersion: [
//    "https://docs.geostandaarden.nl/NL-SBB"
//  ],
//  publishDate: "2024-04-16",
//  previousPublishDate: "2024-03-01",
//  previousMaturity: "vv",
  edDraftURI: "https://geonovum.github.io/T4R/",
  authors: [
        {
            name: "Niels Hoffmann (Geonovum)"
        },
        {
            name: "Bart de Lathouwer (Geonovum)"
        }
  ],
  editors: [
        {
            name: "Niels Hoffmann (Geonovum)"
        },
        {
            name: "Bart de Lathouwer (Geonovum)"
        }
  ],
  
    github: "geonovum/T4R",
    issueBase: "https://github.com/Geonovum/T4R/issues",
    maxTocLevel: 2,
    
    labelColor: {
        def: "#045D9F",
        wv: "#FF0000",
        cv: "#045D9F",
        vv: "#045D9F",
        basis: "#80CC28",
    },
 
    nl_organisationName: "Geonovum",
    nl_organisationPublishURL: "https://docs.geostandaarden.nl",

	latestVersion: ["nl_organisationPublishURL", "pubDomain", "/", "shortName", "/"],
    thisVersion: ["nl_organisationPublishURL", "pubDomain", "/", "specStatus", "-", "specType", "-", "shortName", "-", "publishDate"],
    prevVersion: ["nl_organisationPublishURL", "pubDomain", "/", "previousMaturity", "-", "specType", "-", "shortName", "-", "previousPublishDate"],


  localBiblio: {
        
        NLDT_PP_BB: {
            title: "Policy processes and building blocks for Digital Twins",
            href: "https://www.geonovum.nl/uploads/documents/Eindrapport%20Advies%20Beleid%20en%20Digital%20Twins%20-%20provincie%20Utrecht%20v1.3d_EN.pdf",
            publisher: "Geonovum"
        },

        NLSBB: {
            title: "NL-SBB - Standaard voor het beschrijven van begrippen",
            href: "https://docs.geostandaarden.nl/nl-sbb/def-st-nl-sbb-20241010/",
            publisher: "Geonovum"
        },
        DCAT_AP_NL: {
            title: "DCAT-AP-NL - Nederlands profiel voor DCAT",
            href: "https://docs.geostandaarden.nl/dcat/dcat-ap-nl30/",
            publisher: "Geonovum"
        },
        PROV_O: {
            title: "PROV-O: The PROV Ontology",
            href: "https://www.w3.org/TR/prov-o/",
            publisher: "W3C"
        },
        PROV_DM: {
            title: "PROV-DM: The PROV Data Model",
            href: "https://www.w3.org/TR/prov-dm/",
            publisher: "W3C"
        }
  },
  preProcess: [loadTurtle],
}